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
        "word": "js-good-parts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn Chapter 2 of \"JavaScript: The Good Parts\", Douglas Crockford presents a\n concrete grammar for \"the good parts\" of JavaScript.\n\u003c/p\u003e\u003cp\u003eThis module provides an abstract grammar for those good parts. Henceforth, we abbreviate this\n language to JS:TGP\n\u003c/p\u003e\u003cp\u003eCrockford presents the grammar as a series of railroad diagrams.\n The correspondence between the concrete grammar and the abstract grammar\n in this module is NOT one-to-one. However, the following property does hold: the\n pretty printing of an abstract syntax tree will be parseable by the concrete grammar. i.e.\n For each valid program produced by the concrete grammar there is a corresponding\n abstract syntax tree that when pretty printed will produce that program (modulo whitespace).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe abstract grammar\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e removes unnecessary characters such as parentheses (normal, curly and square)\n\u003c/li\u003e\u003cli\u003e represents JavaScript's string, name and number literals directly in Haskell as\n     \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eConventions for concrete syntax\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  Non-terminals appear in angle brackets e.g. \u003cName\u003e\n\u003c/li\u003e\u003cli\u003e  ? means zero or one. e.g. \u003cExpr\u003e?\n\u003c/li\u003e\u003cli\u003e  * means zero or more e.g. \u003cStmt\u003e*\n\u003c/li\u003e\u003cli\u003e  + means one  or more e.g. \u003cStmt\u003e+\n\u003c/li\u003e\u003cli\u003e  ( ) are meta-brackets used to enclose a concrete-syntax expression so that ?,* or +\n     can be applied. e.g. (= \u003cExpr\u003e)*\n     This means zero or more repetitions of: = \u003cExpr\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis library was designed so that it would be impossible, save for name, string literals\n to construct an incorrect JS:TGP program. To this end some of the data structures may look like\n they contain redundancy. For instance, consider the \u003ccode\u003e\u003ca\u003eESDelete\u003c/a\u003e\u003c/code\u003e constructor which is defined\n\u003c/p\u003e\u003cpre\u003eESDelete Expr Invocation\u003c/pre\u003e\u003cp\u003eWhy not just define it as \u003ccode\u003eESDelete Expr\u003c/code\u003e since type \u003ccode\u003eExpr\u003c/code\u003e\n has a constructor defined as \u003ccode\u003eExprInvocation Expr Invocation\u003c/code\u003e?\n The reason is that this would allow incorrect programs. A \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e is\n not necessarily a \u003ccode\u003e\u003ca\u003eInvocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eA note on precedence of JavaScript operators\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eInterestingly, the precedence of JavaScript operators is\n not defined in the ECMAScript standard. The precedence used in this library comes from\n the Mozilla Developer's Network pages.\n (https:\u003cem/\u003edeveloper.mozilla.org\u003cem\u003een\u003c/em\u003eJavaScript\u003cem\u003eReference\u003c/em\u003eOperators/Operator_Precedence)\n\u003c/p\u003e\u003cp\u003eI have not used the precise precedence numbers from that page since in this module\n a lower precedence means the operator binds more tightly (as opposed to the page where\n a higher precedence does the same). Also, we have need for less precedence values so they\n have been normalised to what we are using in JS:TGP\n\u003c/p\u003e\u003cp\u003eYou will also note that we don't even consider the associativity/precedence of\n \"=\", \"+=\", \"-=\" etc. In JS:TGP the notion of expression statements is quite different\n to that of expressions. It simply isn't legal to write an expression statement like\n\u003c/p\u003e\u003cpre\u003e(a += 2) -= 3\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003ea = (b = c) = (c = d)\u003c/pre\u003e\u003cp\u003ealthough it is perfectly legal to write\n\u003c/p\u003e\u003cpre\u003ea = b = c = d += 2\u003c/pre\u003e\u003cp\u003ewhich if we add brackets to disambiguate is really\n\u003c/p\u003e\u003cpre\u003ea = (b = (c = (d += 2)))\u003c/pre\u003e\u003cp\u003eInteresting aspects of \"the good parts\":\n\u003c/p\u003e\u003cp\u003eA JS:TGP program is a collection of statements. You'll note that there is no\n statement to declare a function in JS:TGP. However you can assign a function literal\n to a variable.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003evar fun = function(x) { return x + 1;}\u003c/pre\u003e\u003cp\u003eWhat about recursive functions then? There is the option to give the function a name which is\n local to the literal.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003evar factorial = function f(n) {\n                    if ( n \u003e 0 ) {\n                      return n * f(n - 1);\n                    } else {\n                      return 1;\n                    }\n                  }\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is local. It will not be in scope outside of the function body.\n\u003c/p\u003e\u003cp\u003eAbbreviations:\n\u003c/p\u003e\u003cpre\u003e Stmt = Statement, Expr = Expression, Fn = Function, Decl = Declaration\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.JavaScript.AST",
          "name": "AST",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html",
          "type": "module"
        },
        "index": {
          "description": "In Chapter of JavaScript The Good Parts Douglas Crockford presents concrete grammar for the good parts of JavaScript This module provides an abstract grammar for those good parts Henceforth we abbreviate this language to JS TGP Crockford presents the grammar as series of railroad diagrams The correspondence between the concrete grammar and the abstract grammar in this module is NOT one-to-one However the following property does hold the pretty printing of an abstract syntax tree will be parseable by the concrete grammar i.e For each valid program produced by the concrete grammar there is corresponding abstract syntax tree that when pretty printed will produce that program modulo whitespace The abstract grammar removes unnecessary characters such as parentheses normal curly and square represents JavaScript string name and number literals directly in Haskell as String String and Double respectively Conventions for concrete syntax Non-terminals appear in angle brackets e.g Name means zero or one e.g Expr means zero or more e.g Stmt means one or more e.g Stmt are meta-brackets used to enclose concrete-syntax expression so that or can be applied e.g Expr This means zero or more repetitions of Expr This library was designed so that it would be impossible save for name string literals to construct an incorrect JS TGP program To this end some of the data structures may look like they contain redundancy For instance consider the ESDelete constructor which is defined ESDelete Expr Invocation Why not just define it as ESDelete Expr since type Expr has constructor defined as ExprInvocation Expr Invocation The reason is that this would allow incorrect programs Expr is not necessarily Invocation note on precedence of JavaScript operators Interestingly the precedence of JavaScript operators is not defined in the ECMAScript standard The precedence used in this library comes from the Mozilla Developer Network pages https developer.mozilla.org en JavaScript Reference Operators Operator Precedence have not used the precise precedence numbers from that page since in this module lower precedence means the operator binds more tightly as opposed to the page where higher precedence does the same Also we have need for less precedence values so they have been normalised to what we are using in JS TGP You will also note that we don even consider the associativity precedence of etc In JS TGP the notion of expression statements is quite different to that of expressions It simply isn legal to write an expression statement like or although it is perfectly legal to write which if we add brackets to disambiguate is really Interesting aspects of the good parts JS TGP program is collection of statements You ll note that there is no statement to declare function in JS TGP However you can assign function literal to variable e.g var fun function return What about recursive functions then There is the option to give the function name which is local to the literal e.g var factorial function if return else return is local It will not be in scope outside of the function body Abbreviations Stmt Statement Expr Expression Fn Function Decl Declaration",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "AST",
          "package": "js-good-parts",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e -- empty array\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003cExpr\u003e (, \u003cExpr\u003e*) ]\u003c/code\u003e -- non empty array\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ArrayLit",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ArrayLit",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax empty array or Expr Expr non empty array",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ArrayLit",
          "package": "js-good-parts",
          "partial": "Array Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ArrayLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ebreak \u003cName\u003e?;\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ebreak;\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ebreak some_label;\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "BreakStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#BreakStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax break Name e.g break break some label",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "BreakStmt",
          "package": "js-good-parts",
          "partial": "Break Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:BreakStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA case clause followed by a disruptive statement\n\u003c/p\u003e\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cCaseClause\u003e \u003cDisruptiveStmt\u003e\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n \u003ccode\u003e\n case 2:\n   y = 2;\n   break;\n \u003c/code\u003e\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "CaseAndDisruptive",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#CaseAndDisruptive",
          "type": "data"
        },
        "index": {
          "description": "case clause followed by disruptive statement Concrete syntax CaseClause DisruptiveStmt e.g case break",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "CaseAndDisruptive",
          "package": "js-good-parts",
          "partial": "Case And Disruptive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:CaseAndDisruptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ecase \u003cExpr\u003e : \u003cStmt\u003e*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003ecase 2:   // zero statements following the case expression is valid.\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n case 2:\n   y = 1;\n\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "CaseClause",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#CaseClause",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax case Expr Stmt e.g case zero statements following the case expression is valid case",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "CaseClause",
          "package": "js-good-parts",
          "partial": "Case Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisruptive statements\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "DisruptiveStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
          "type": "data"
        },
        "index": {
          "description": "Disruptive statements",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DisruptiveStmt",
          "package": "js-good-parts",
          "partial": "Disruptive Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:DisruptiveStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003edo { \u003cStmt\u003e* } while ( \u003cExpr\u003e );\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "DoStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#DoStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax do Stmt while Expr",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DoStmt",
          "package": "js-good-parts",
          "partial": "Do Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:DoStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Expr",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Expr",
          "package": "js-good-parts",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cValue\u003e+ \u003cRValue\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003edelete \u003cExpr\u003e \u003cRefinement\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ExprStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Value RValue or delete Expr Refinement",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprStmt",
          "package": "js-good-parts",
          "partial": "Expr Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ExprStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e{ \u003cVarStmt\u003e+ \u003cStmt\u003e+ }\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "FnBody",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#FnBody",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax VarStmt Stmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "FnBody",
          "package": "js-good-parts",
          "partial": "Fn Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:FnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003efunction \u003cName\u003e? \u003cFnBody\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "FnLit",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#FnLit",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax function Name FnBody",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "FnLit",
          "package": "js-good-parts",
          "partial": "Fn Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:FnLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo style of for-statements -- C-style and In-style.\n\u003c/p\u003e\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for (\u003cExprStmt\u003e? ; \u003cExpr\u003e? ; \u003cExprStmt\u003e? ) {\n   \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for ( \u003cName\u003e in \u003cExpr\u003e ) {\n   \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003efor ( ; ; ) { }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efor ( ; x \u003c 10 ;) { x += 1; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for (i = 0; i \u003c 10; i += 1) {\n   x += i;\n }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003efor ( i in indices ) { a[i] = 66; }\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ForStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ForStmt",
          "type": "data"
        },
        "index": {
          "description": "Two style of for-statements C-style and In-style Concrete syntax for ExprStmt Expr ExprStmt Stmt for Name in Expr Stmt e.g for for for for in indices",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ForStmt",
          "package": "js-good-parts",
          "partial": "For Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ForStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* }\u003c/code\u003e                        -- for \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* } else { \u003cStmt\u003e* }\u003c/code\u003e -- for 'Just . Left'\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* } else \u003cIfStmt\u003e\u003c/code\u003e    -- for 'Just . Right'\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003eif (x \u003e 3) { y = 2; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eif (x \u003c 2) { y = 1; } else { y = 3; z = 2; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eif (x \u003e 0) { y = 20; } else if ( x \u003e 10) { y = 30; } else { y = 10; }\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "IfStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#IfStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax if Expr Stmt for Nothing or if Expr Stmt else Stmt for Just Left or if Expr Stmt else IfStmt for Just Right e.g if if else if else if else",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "IfStmt",
          "package": "js-good-parts",
          "partial": "If Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:IfStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "InfixOperator",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "InfixOperator",
          "package": "js-good-parts",
          "partial": "Infix Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:InfixOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cExpr\u003e*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e()\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(1)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(x,z,y)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Invocation",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Invocation",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Expr e.g",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Invocation",
          "package": "js-good-parts",
          "partial": "Invocation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Invocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "JSString",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#JSString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "JSString",
          "package": "js-good-parts",
          "partial": "JSString",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cName\u003e (\u003cInvocation\u003e* \u003cRefinement\u003e)*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex.field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun().field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun(1)(2)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun(1)(2).field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex.fun_field_1(x+2).fun_field_2(y+3).field_3\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LValue",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#LValue",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Name Invocation Refinement e.g x.field fun field fun fun field x.fun field fun field field",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LValue",
          "package": "js-good-parts",
          "partial": "LValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterestingly, the syntax diagrams presented in the book don't include\n   boolean literals. I can only assume this is an oversight as they\n   are used throughout the book.\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Lit",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "data"
        },
        "index": {
          "description": "Interestingly the syntax diagrams presented in the book don include boolean literals can only assume this is an oversight as they are used throughout the book",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Lit",
          "package": "js-good-parts",
          "partial": "Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Name",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Name",
          "package": "js-good-parts",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Number",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Number",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Number",
          "package": "js-good-parts",
          "partial": "Number",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cName\u003e: \u003cExpr\u003e        \u003c/code\u003e -- for Left\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cString\u003e: \u003cExpr\u003e      \u003c/code\u003e -- for Right\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex: y + 3\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\"value\": 3 - z\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ObjectField",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ObjectField",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Name Expr for Left or String Expr for Right e.g value",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ObjectField",
          "package": "js-good-parts",
          "partial": "Object Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ObjectField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e{}\u003c/code\u003e                                               -- no  fields\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e{\u003cObjectField\u003e (, \u003cObjectField\u003e )*}\u003c/code\u003e    -- one or more fields\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ObjectLit",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ObjectLit",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax no fields or ObjectField ObjectField one or more fields",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ObjectLit",
          "package": "js-good-parts",
          "partial": "Object Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ObjectLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "PrefixOperator",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#PrefixOperator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "PrefixOperator",
          "package": "js-good-parts",
          "partial": "Prefix Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:PrefixOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrograms. All variable statements come first.\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Program",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Program",
          "type": "data"
        },
        "index": {
          "description": "Programs All variable statements come first",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Program",
          "package": "js-good-parts",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e=  \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e+= \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e-= \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e\u003cInvocation\u003e+\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e= 2\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e+= 3\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e-= (4 + y)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e()\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(1)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(x,y,z)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "RValue",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#RValue",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Expr or Expr or Expr or Invocation e.g",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "RValue",
          "package": "js-good-parts",
          "partial": "RValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:RValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e.\u003cName\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e[\u003cExpr\u003e]\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e.field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e[i+1]\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Refinement",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Refinement",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Name or Expr e.g field",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Refinement",
          "package": "js-good-parts",
          "partial": "Refinement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Refinement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ereturn \u003cExpr\u003e?;\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ereturn;\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ereturn 2 + x;\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ReturnStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ReturnStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax return Expr e.g return return",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ReturnStmt",
          "package": "js-good-parts",
          "partial": "Return Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ReturnStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe many different kinds of statements\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Stmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "The many different kinds of statements",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Stmt",
          "package": "js-good-parts",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003eswitch ( \u003cExpr\u003e ) { \u003cCaseClause\u003e }\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e\n switch ( \u003cExpr\u003e ) {\n  \u003cCaseAndDisruptive\u003e+\n  default : \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n switch ( x ) {\n   case 1:\n     y = 2;\n   }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n switch ( x ) {\n   case 1:\n     y = 2;\n     break;\n   case 2:\n     y = 3;\n     break;\n   default:\n     y = 4;\n }\n\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#SwitchStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax switch Expr CaseClause or switch Expr CaseAndDisruptive default Stmt e.g switch case switch case break case break default",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmt",
          "package": "js-good-parts",
          "partial": "Switch Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:SwitchStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ethrow \u003cExpr\u003e;\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ThrowStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#ThrowStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax throw Expr",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ThrowStmt",
          "package": "js-good-parts",
          "partial": "Throw Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ThrowStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003etry { \u003cStmt\u003e* } catch ( \u003cName\u003e ) { \u003cStmt\u003e* }\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "TryStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#TryStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax try Stmt catch Name Stmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "TryStmt",
          "package": "js-good-parts",
          "partial": "Try Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:TryStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e\u003cName\u003e (= \u003cExpr\u003e)?\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex = 2 + y\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Language.JavaScript.AST",
          "name": "VarDecl",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#VarDecl",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax Name Expr e.g",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "VarDecl",
          "package": "js-good-parts",
          "partial": "Var Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003evar \u003cVarDecl\u003e [, \u003cVarDecl\u003e]* ;\u003c/pre\u003e\u003cp\u003ee.g. \u003ccode\u003evar x = 1, y;\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "VarStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#VarStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax var VarDecl VarDecl e.g var",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "VarStmt",
          "package": "js-good-parts",
          "partial": "Var Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:VarStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ewhile ( \u003cExpr\u003e) { \u003cStmt\u003e* }\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "WhileStmt",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-AST.html#WhileStmt",
          "type": "data"
        },
        "index": {
          "description": "Concrete syntax while Expr Stmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "WhileStmt",
          "package": "js-good-parts",
          "partial": "While Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:WhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e+\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Add",
          "package": "js-good-parts",
          "signature": "Add",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Add",
          "package": "js-good-parts",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e&&\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "And",
          "package": "js-good-parts",
          "signature": "And",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "And",
          "package": "js-good-parts",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ArrayLit",
          "package": "js-good-parts",
          "signature": "ArrayLit [Expr]",
          "source": "src/Language-JavaScript-AST.html#ArrayLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ArrayLit",
          "normalized": "ArrayLit[Expr]",
          "package": "js-good-parts",
          "partial": "Array Lit",
          "signature": "ArrayLit[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ArrayLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "BreakStmt",
          "package": "js-good-parts",
          "signature": "BreakStmt (Maybe Name)",
          "source": "src/Language-JavaScript-AST.html#BreakStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "BreakStmt",
          "package": "js-good-parts",
          "partial": "Break Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:BreakStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "CaseAndDisruptive",
          "package": "js-good-parts",
          "signature": "CaseAndDisruptive CaseClause DisruptiveStmt",
          "source": "src/Language-JavaScript-AST.html#CaseAndDisruptive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "CaseAndDisruptive",
          "package": "js-good-parts",
          "partial": "Case And Disruptive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:CaseAndDisruptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "CaseClause",
          "package": "js-good-parts",
          "signature": "CaseClause Expr [Stmt]",
          "source": "src/Language-JavaScript-AST.html#CaseClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "CaseClause",
          "normalized": "CaseClause Expr[Stmt]",
          "package": "js-good-parts",
          "partial": "Case Clause",
          "signature": "CaseClause Expr[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cBreakStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "DSBreak",
          "package": "js-good-parts",
          "signature": "DSBreak BreakStmt",
          "source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
          "type": "function"
        },
        "index": {
          "description": "BreakStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DSBreak",
          "package": "js-good-parts",
          "partial": "DSBreak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003esyntax: \u003cReturnStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "DSReturn",
          "package": "js-good-parts",
          "signature": "DSReturn ReturnStmt",
          "source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
          "type": "function"
        },
        "index": {
          "description": "syntax ReturnStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DSReturn",
          "package": "js-good-parts",
          "partial": "DSReturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003esyntax: \u003cThrowStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "DSThrow",
          "package": "js-good-parts",
          "signature": "DSThrow ThrowStmt",
          "source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
          "type": "function"
        },
        "index": {
          "description": "syntax ThrowStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DSThrow",
          "package": "js-good-parts",
          "partial": "DSThrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e/\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Div",
          "package": "js-good-parts",
          "signature": "Div",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Div",
          "package": "js-good-parts",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "DoStmt",
          "package": "js-good-parts",
          "signature": "DoStmt [Stmt] Expr",
          "source": "src/Language-JavaScript-AST.html#DoStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "DoStmt",
          "normalized": "DoStmt[Stmt]Expr",
          "package": "js-good-parts",
          "partial": "Do Stmt",
          "signature": "DoStmt[Stmt]Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DoStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ESApply",
          "package": "js-good-parts",
          "signature": "ESApply (NonEmptyList LValue) RValue",
          "source": "src/Language-JavaScript-AST.html#ExprStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ESApply",
          "package": "js-good-parts",
          "partial": "ESApply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ESApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ESDelete",
          "package": "js-good-parts",
          "signature": "ESDelete Expr Refinement",
          "source": "src/Language-JavaScript-AST.html#ExprStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ESDelete",
          "package": "js-good-parts",
          "partial": "ESDelete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ESDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e===\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Eq",
          "package": "js-good-parts",
          "signature": "Eq",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Eq",
          "package": "js-good-parts",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete \u003ccode\u003e\u003cExpr\u003e\u003cRefinement\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprDelete",
          "package": "js-good-parts",
          "signature": "ExprDelete Expr Refinement",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "delete Expr Refinement",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprDelete",
          "package": "js-good-parts",
          "partial": "Expr Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cExpr\u003e \u003cInfixOperator\u003e \u003cExpr\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprInfix",
          "package": "js-good-parts",
          "signature": "ExprInfix InfixOperator Expr Expr",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expr InfixOperator Expr",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprInfix",
          "package": "js-good-parts",
          "partial": "Expr Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprInfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cExpr\u003e\u003cInvocation\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprInvocation",
          "package": "js-good-parts",
          "signature": "ExprInvocation Expr Invocation",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expr Invocation",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprInvocation",
          "package": "js-good-parts",
          "partial": "Expr Invocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprInvocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cLit\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprLit",
          "package": "js-good-parts",
          "signature": "ExprLit Lit",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Lit",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprLit",
          "package": "js-good-parts",
          "partial": "Expr Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cName\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprName",
          "package": "js-good-parts",
          "signature": "ExprName Name",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Name",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprName",
          "package": "js-good-parts",
          "partial": "Expr Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enew \u003ccode\u003e\u003cExpr\u003e\u003cInvocation\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprNew",
          "package": "js-good-parts",
          "signature": "ExprNew Expr Invocation",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "new Expr Invocation",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprNew",
          "package": "js-good-parts",
          "partial": "Expr New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cPrefixOperator\u003e \u003cExpr\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprPrefix",
          "package": "js-good-parts",
          "signature": "ExprPrefix PrefixOperator Expr",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "PrefixOperator Expr",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprPrefix",
          "package": "js-good-parts",
          "partial": "Expr Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cExpr\u003e\u003cRefinement\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprRefinement",
          "package": "js-good-parts",
          "signature": "ExprRefinement Expr Refinement",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expr Refinement",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprRefinement",
          "package": "js-good-parts",
          "partial": "Expr Refinement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprRefinement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cExpr\u003e ? \u003cExpr\u003e : \u003cExpr\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ExprTernary",
          "package": "js-good-parts",
          "signature": "ExprTernary Expr Expr Expr",
          "source": "src/Language-JavaScript-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Expr Expr Expr",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ExprTernary",
          "package": "js-good-parts",
          "partial": "Expr Ternary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprTernary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "FnBody",
          "package": "js-good-parts",
          "signature": "FnBody [VarStmt] [Stmt]",
          "source": "src/Language-JavaScript-AST.html#FnBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "FnBody",
          "normalized": "FnBody[VarStmt][Stmt]",
          "package": "js-good-parts",
          "partial": "Fn Body",
          "signature": "FnBody[VarStmt][Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:FnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "FnLit",
          "package": "js-good-parts",
          "signature": "FnLit (Maybe Name) [Name] FnBody",
          "source": "src/Language-JavaScript-AST.html#FnLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "FnLit",
          "normalized": "FnLit(Maybe Name)[Name]FnBody",
          "package": "js-good-parts",
          "partial": "Fn Lit",
          "signature": "FnLit(Maybe Name)[Name]FnBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:FnLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ForStmtCStyle",
          "package": "js-good-parts",
          "signature": "ForStmtCStyle (Maybe ExprStmt) (Maybe Expr) (Maybe ExprStmt) [Stmt]",
          "source": "src/Language-JavaScript-AST.html#ForStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ForStmtCStyle",
          "normalized": "ForStmtCStyle(Maybe ExprStmt)(Maybe Expr)(Maybe ExprStmt)[Stmt]",
          "package": "js-good-parts",
          "partial": "For Stmt CStyle",
          "signature": "ForStmtCStyle(Maybe ExprStmt)(Maybe Expr)(Maybe ExprStmt)[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ForStmtCStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ForStmtInStyle",
          "package": "js-good-parts",
          "signature": "ForStmtInStyle Name Expr [Stmt]",
          "source": "src/Language-JavaScript-AST.html#ForStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ForStmtInStyle",
          "normalized": "ForStmtInStyle Name Expr[Stmt]",
          "package": "js-good-parts",
          "partial": "For Stmt In Style",
          "signature": "ForStmtInStyle Name Expr[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ForStmtInStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "GT",
          "package": "js-good-parts",
          "signature": "GT",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "GT",
          "package": "js-good-parts",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e=\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "GTE",
          "package": "js-good-parts",
          "signature": "GTE",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "GTE",
          "package": "js-good-parts",
          "partial": "GTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:GTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "IfStmt",
          "package": "js-good-parts",
          "signature": "IfStmt Expr [Stmt] (Maybe (Either [Stmt] IfStmt))",
          "source": "src/Language-JavaScript-AST.html#IfStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "IfStmt",
          "normalized": "IfStmt Expr[Stmt](Maybe(Either[Stmt]IfStmt))",
          "package": "js-good-parts",
          "partial": "If Stmt",
          "signature": "IfStmt Expr[Stmt](Maybe(Either[Stmt]IfStmt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:IfStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Invocation",
          "package": "js-good-parts",
          "signature": "Invocation [Expr]",
          "source": "src/Language-JavaScript-AST.html#Invocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Invocation",
          "normalized": "Invocation[Expr]",
          "package": "js-good-parts",
          "partial": "Invocation",
          "signature": "Invocation[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Invocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LT",
          "package": "js-good-parts",
          "signature": "LT",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LT",
          "package": "js-good-parts",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c=\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LTE",
          "package": "js-good-parts",
          "signature": "LTE",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LTE",
          "package": "js-good-parts",
          "partial": "LTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "LValue",
          "package": "js-good-parts",
          "signature": "LValue Name [([Invocation], Refinement)]",
          "source": "src/Language-JavaScript-AST.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LValue",
          "normalized": "LValue Name[([Invocation],Refinement)]",
          "package": "js-good-parts",
          "partial": "LValue",
          "signature": "LValue Name[([Invocation],Refinement)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cArrayLit\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitArray",
          "package": "js-good-parts",
          "signature": "LitArray ArrayLit",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "ArrayLit",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitArray",
          "package": "js-good-parts",
          "partial": "Lit Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ctrue | false\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitBool",
          "package": "js-good-parts",
          "signature": "LitBool Bool",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "true false",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitBool",
          "package": "js-good-parts",
          "partial": "Lit Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003cFnLit\u003e\u003c/code\u003e\n  | LitRegexp   RegexpLit -- TODO: Add regexps\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitFn",
          "package": "js-good-parts",
          "signature": "LitFn FnLit",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "FnLit LitRegexp RegexpLit TODO Add regexps",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitFn",
          "package": "js-good-parts",
          "partial": "Lit Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cNumber\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitNumber",
          "package": "js-good-parts",
          "signature": "LitNumber Number",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "Number",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitNumber",
          "package": "js-good-parts",
          "partial": "Lit Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cObjectLit\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitObject",
          "package": "js-good-parts",
          "signature": "LitObject ObjectLit",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "ObjectLit",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitObject",
          "package": "js-good-parts",
          "partial": "Lit Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cString\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "LitString",
          "package": "js-good-parts",
          "signature": "LitString JSString",
          "source": "src/Language-JavaScript-AST.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "String",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "LitString",
          "package": "js-good-parts",
          "partial": "Lit String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e%\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Mod",
          "package": "js-good-parts",
          "signature": "Mod",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Mod",
          "package": "js-good-parts",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e*\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Mul",
          "package": "js-good-parts",
          "signature": "Mul",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Mul",
          "package": "js-good-parts",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Negate",
          "package": "js-good-parts",
          "signature": "Negate",
          "source": "src/Language-JavaScript-AST.html#PrefixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Negate",
          "package": "js-good-parts",
          "partial": "Negate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e!\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Not",
          "package": "js-good-parts",
          "signature": "Not",
          "source": "src/Language-JavaScript-AST.html#PrefixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Not",
          "package": "js-good-parts",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e!==\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "NotEq",
          "package": "js-good-parts",
          "signature": "NotEq",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "NotEq",
          "package": "js-good-parts",
          "partial": "Not Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:NotEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Number",
          "package": "js-good-parts",
          "signature": "Number Double",
          "source": "src/Language-JavaScript-AST.html#Number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Number",
          "package": "js-good-parts",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ObjectField",
          "package": "js-good-parts",
          "signature": "ObjectField (Either Name String) Expr",
          "source": "src/Language-JavaScript-AST.html#ObjectField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ObjectField",
          "package": "js-good-parts",
          "partial": "Object Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ObjectField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ObjectLit",
          "package": "js-good-parts",
          "signature": "ObjectLit [ObjectField]",
          "source": "src/Language-JavaScript-AST.html#ObjectLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ObjectLit",
          "normalized": "ObjectLit[ObjectField]",
          "package": "js-good-parts",
          "partial": "Object Lit",
          "signature": "ObjectLit[ObjectField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ObjectLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e||\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Or",
          "package": "js-good-parts",
          "signature": "Or",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Or",
          "package": "js-good-parts",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Program",
          "package": "js-good-parts",
          "signature": "Program [VarStmt] [Stmt]",
          "source": "src/Language-JavaScript-AST.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Program",
          "normalized": "Program[VarStmt][Stmt]",
          "package": "js-good-parts",
          "partial": "Program",
          "signature": "Program[VarStmt][Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Property",
          "package": "js-good-parts",
          "signature": "Property Name",
          "source": "src/Language-JavaScript-AST.html#Refinement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Property",
          "package": "js-good-parts",
          "partial": "Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "RVAddAssign",
          "package": "js-good-parts",
          "signature": "RVAddAssign Expr",
          "source": "src/Language-JavaScript-AST.html#RValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "RVAddAssign",
          "package": "js-good-parts",
          "partial": "RVAdd Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVAddAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "RVAssign",
          "package": "js-good-parts",
          "signature": "RVAssign Expr",
          "source": "src/Language-JavaScript-AST.html#RValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "RVAssign",
          "package": "js-good-parts",
          "partial": "RVAssign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "RVInvoke",
          "package": "js-good-parts",
          "signature": "RVInvoke (NonEmptyList Invocation)",
          "source": "src/Language-JavaScript-AST.html#RValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "RVInvoke",
          "package": "js-good-parts",
          "partial": "RVInvoke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVInvoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "RVSubAssign",
          "package": "js-good-parts",
          "signature": "RVSubAssign Expr",
          "source": "src/Language-JavaScript-AST.html#RValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "RVSubAssign",
          "package": "js-good-parts",
          "partial": "RVSub Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVSubAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ReturnStmt",
          "package": "js-good-parts",
          "signature": "ReturnStmt (Maybe Expr)",
          "source": "src/Language-JavaScript-AST.html#ReturnStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ReturnStmt",
          "package": "js-good-parts",
          "partial": "Return Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ReturnStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cDisruptiveStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtDisruptive",
          "package": "js-good-parts",
          "signature": "StmtDisruptive DisruptiveStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "DisruptiveStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtDisruptive",
          "package": "js-good-parts",
          "partial": "Stmt Disruptive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtDisruptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003cName\u003e : ) \u003cDoStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtDo",
          "package": "js-good-parts",
          "signature": "StmtDo (Maybe Name) DoStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Name DoStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtDo",
          "package": "js-good-parts",
          "partial": "Stmt Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cExprStmt\u003e;\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtExpr",
          "package": "js-good-parts",
          "signature": "StmtExpr ExprStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "ExprStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtExpr",
          "package": "js-good-parts",
          "partial": "Stmt Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003cName\u003e : ) \u003cForStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtFor",
          "package": "js-good-parts",
          "signature": "StmtFor (Maybe Name) ForStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Name ForStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtFor",
          "package": "js-good-parts",
          "partial": "Stmt For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cIfStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtIf",
          "package": "js-good-parts",
          "signature": "StmtIf IfStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "IfStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtIf",
          "package": "js-good-parts",
          "partial": "Stmt If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003cName\u003e : ) \u003cSwitchStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtSwitch",
          "package": "js-good-parts",
          "signature": "StmtSwitch (Maybe Name) SwitchStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Name SwitchStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtSwitch",
          "package": "js-good-parts",
          "partial": "Stmt Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003cTryStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtTry",
          "package": "js-good-parts",
          "signature": "StmtTry TryStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "TryStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtTry",
          "package": "js-good-parts",
          "partial": "Stmt Try",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003cName\u003e : ) \u003cWhileStmt\u003e\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "StmtWhile",
          "package": "js-good-parts",
          "signature": "StmtWhile (Maybe Name) WhileStmt",
          "source": "src/Language-JavaScript-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Name WhileStmt",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "StmtWhile",
          "package": "js-good-parts",
          "partial": "Stmt While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "Sub",
          "package": "js-good-parts",
          "signature": "Sub",
          "source": "src/Language-JavaScript-AST.html#InfixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Sub",
          "package": "js-good-parts",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "Subscript",
          "package": "js-good-parts",
          "signature": "Subscript Expr",
          "source": "src/Language-JavaScript-AST.html#Refinement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "Subscript",
          "package": "js-good-parts",
          "partial": "Subscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault clause statements\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmt",
          "package": "js-good-parts",
          "signature": "SwitchStmt Expr (NonEmptyList CaseAndDisruptive) [Stmt]",
          "source": "src/Language-JavaScript-AST.html#SwitchStmt",
          "type": "function"
        },
        "index": {
          "description": "default clause statements",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmt",
          "normalized": "SwitchStmt Expr(NonEmptyList CaseAndDisruptive)[Stmt]",
          "package": "js-good-parts",
          "partial": "Switch Stmt",
          "signature": "SwitchStmt Expr(NonEmptyList CaseAndDisruptive)[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:SwitchStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmtSingleCase",
          "package": "js-good-parts",
          "signature": "SwitchStmtSingleCase Expr CaseClause",
          "source": "src/Language-JavaScript-AST.html#SwitchStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "SwitchStmtSingleCase",
          "package": "js-good-parts",
          "partial": "Switch Stmt Single Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:SwitchStmtSingleCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "ThrowStmt",
          "package": "js-good-parts",
          "signature": "ThrowStmt Expr",
          "source": "src/Language-JavaScript-AST.html#ThrowStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ThrowStmt",
          "package": "js-good-parts",
          "partial": "Throw Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ThrowStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e+\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "ToNumber",
          "package": "js-good-parts",
          "signature": "ToNumber",
          "source": "src/Language-JavaScript-AST.html#PrefixOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "ToNumber",
          "package": "js-good-parts",
          "partial": "To Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ToNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "TryStmt",
          "package": "js-good-parts",
          "signature": "TryStmt [Stmt] Name [Stmt]",
          "source": "src/Language-JavaScript-AST.html#TryStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "TryStmt",
          "normalized": "TryStmt[Stmt]Name[Stmt]",
          "package": "js-good-parts",
          "partial": "Try Stmt",
          "signature": "TryStmt[Stmt]Name[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:TryStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003etypeof\u003c/pre\u003e",
          "module": "Language.JavaScript.AST",
          "name": "TypeOf",
          "package": "js-good-parts",
          "signature": "TypeOf",
          "source": "src/Language-JavaScript-AST.html#PrefixOperator",
          "type": "function"
        },
        "index": {
          "description": "typeof",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "TypeOf",
          "package": "js-good-parts",
          "partial": "Type Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:TypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "VarDecl",
          "package": "js-good-parts",
          "signature": "VarDecl Name (Maybe Expr)",
          "source": "src/Language-JavaScript-AST.html#VarDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "VarDecl",
          "package": "js-good-parts",
          "partial": "Var Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "VarStmt",
          "package": "js-good-parts",
          "signature": "VarStmt (NonEmptyList VarDecl)",
          "source": "src/Language-JavaScript-AST.html#VarStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "VarStmt",
          "package": "js-good-parts",
          "partial": "Var Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:VarStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "WhileStmt",
          "package": "js-good-parts",
          "signature": "WhileStmt Expr [Stmt]",
          "source": "src/Language-JavaScript-AST.html#WhileStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "WhileStmt",
          "normalized": "WhileStmt Expr[Stmt]",
          "package": "js-good-parts",
          "partial": "While Stmt",
          "signature": "WhileStmt Expr[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:WhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe only way you can create a Javascript string.\n   This function needs to correctly encode all special characters.\n   See p9 of \"JavaScript: The Good Parts\"\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "jsString",
          "package": "js-good-parts",
          "signature": "String -\u003e Either String JSString",
          "source": "src/Language-JavaScript-AST.html#jsString",
          "type": "function"
        },
        "index": {
          "description": "The only way you can create Javascript string This function needs to correctly encode all special characters See p9 of JavaScript The Good Parts",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "jsString",
          "normalized": "String-\u003eEither String JSString",
          "package": "js-good-parts",
          "partial": "String",
          "signature": "String-\u003eEither String JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:jsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejsName\u003c/code\u003e is the only way you can create a Name\n\u003c/p\u003e",
          "module": "Language.JavaScript.AST",
          "name": "name",
          "package": "js-good-parts",
          "signature": "String -\u003e Either String Name",
          "source": "src/Language-JavaScript-AST.html#name",
          "type": "function"
        },
        "index": {
          "description": "jsName is the only way you can create Name",
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "name",
          "normalized": "String-\u003eEither String Name",
          "package": "js-good-parts",
          "signature": "String-\u003eEither String Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "unName",
          "package": "js-good-parts",
          "signature": "Name -\u003e String",
          "source": "src/Language-JavaScript-AST.html#unName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "unName",
          "normalized": "Name-\u003eString",
          "package": "js-good-parts",
          "partial": "Name",
          "signature": "Name-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:unName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.AST",
          "name": "unString",
          "package": "js-good-parts",
          "signature": "JSString -\u003e String",
          "source": "src/Language-JavaScript-AST.html#unString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript AST",
          "module": "Language.JavaScript.AST",
          "name": "unString",
          "normalized": "JSString-\u003eString",
          "package": "js-good-parts",
          "partial": "String",
          "signature": "JSString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:unString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.NonEmptyList",
          "name": "NonEmptyList",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-NonEmptyList.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript NonEmptyList",
          "module": "Language.JavaScript.NonEmptyList",
          "name": "NonEmptyList",
          "package": "js-good-parts",
          "partial": "Non Empty List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.NonEmptyList",
          "name": "NonEmptyList",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-NonEmptyList.html#NonEmptyList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript NonEmptyList",
          "module": "Language.JavaScript.NonEmptyList",
          "name": "NonEmptyList",
          "package": "js-good-parts",
          "partial": "Non Empty List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#t:NonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.NonEmptyList",
          "name": "(\u003c:\u003e)",
          "package": "js-good-parts",
          "signature": "a -\u003e NonEmptyList a -\u003e NonEmptyList a",
          "source": "src/Language-JavaScript-NonEmptyList.html#%3C%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript NonEmptyList",
          "module": "Language.JavaScript.NonEmptyList",
          "name": "(\u003c:\u003e) \u003c:\u003e",
          "normalized": "a-\u003eNonEmptyList a-\u003eNonEmptyList a",
          "package": "js-good-parts",
          "signature": "a-\u003eNonEmptyList a-\u003eNonEmptyList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:-60-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.NonEmptyList",
          "name": "singleton",
          "package": "js-good-parts",
          "signature": "a -\u003e NonEmptyList a",
          "source": "src/Language-JavaScript-NonEmptyList.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript NonEmptyList",
          "module": "Language.JavaScript.NonEmptyList",
          "name": "singleton",
          "normalized": "a-\u003eNonEmptyList a",
          "package": "js-good-parts",
          "signature": "a-\u003eNonEmptyList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.NonEmptyList",
          "name": "toList",
          "package": "js-good-parts",
          "signature": "NonEmptyList a -\u003e [a]",
          "source": "src/Language-JavaScript-NonEmptyList.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript NonEmptyList",
          "module": "Language.JavaScript.NonEmptyList",
          "name": "toList",
          "normalized": "NonEmptyList a-\u003e[a]",
          "package": "js-good-parts",
          "partial": "List",
          "signature": "NonEmptyList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Pretty",
          "name": "Pretty",
          "package": "js-good-parts",
          "source": "src/Language-JavaScript-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Pretty",
          "module": "Language.JavaScript.Pretty",
          "name": "Pretty",
          "package": "js-good-parts",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Pretty",
          "name": "Pretty",
          "package": "js-good-parts",
          "type": "class"
        },
        "index": {
          "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
          "hierarchy": "Language JavaScript Pretty",
          "module": "Language.JavaScript.Pretty",
          "name": "Pretty",
          "package": "js-good-parts",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Pretty",
          "name": "pretty",
          "package": "js-good-parts",
          "signature": "a -\u003e Doc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language JavaScript Pretty",
          "module": "Language.JavaScript.Pretty",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "js-good-parts",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Pretty",
          "name": "prettyList",
          "package": "js-good-parts",
          "signature": "[a] -\u003e Doc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language JavaScript Pretty",
          "module": "Language.JavaScript.Pretty",
          "name": "prettyList",
          "normalized": "[a]-\u003eDoc",
          "package": "js-good-parts",
          "partial": "List",
          "signature": "[a]-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#v:prettyList"
      }
    }
  ]
]