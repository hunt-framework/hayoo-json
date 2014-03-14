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
        "word": "netlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract syntax tree (AST) for a generic netlist, kind of like a\n high-level subset of Verilog and VHDL that is compatible with both languages.\n\u003c/p\u003e\u003cp\u003eThere are no definitive semantics assigned to this AST.\n\u003c/p\u003e\u003cp\u003eFor example, the user may choose to treat the bindings as recursive, so that\n expressions can reference variables before their declaration, like in\n Haskell, which is not supported in Verilog and VHDL.  in this case, the user\n must fix the bindings when converting to an HDL.\n\u003c/p\u003e\u003cp\u003eAlso, the user may treat module instantiations and processes as having an\n implict clock/reset, so that they are not explicitly named in those\n constructs in this AST.  Then, the clock and reset can be inserted when\n generating HDL.\n\u003c/p\u003e\u003cp\u003eWhen you instantiate a module but information about that module is missing\n (e.g. the clock/reset are implicit and you need to know what they are called\n in that module), you can use ExternDecl (TODO) to declare a module's\n interface so that you know how to instantiate it, or retrieve the interface\n from a user-maintained database or by parsing and extracting from an HDL\n file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Netlist.AST",
          "name": "AST",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html",
          "type": "module"
        },
        "index": {
          "description": "An abstract syntax tree AST for generic netlist kind of like high-level subset of Verilog and VHDL that is compatible with both languages There are no definitive semantics assigned to this AST For example the user may choose to treat the bindings as recursive so that expressions can reference variables before their declaration like in Haskell which is not supported in Verilog and VHDL in this case the user must fix the bindings when converting to an HDL Also the user may treat module instantiations and processes as having an implict clock reset so that they are not explicitly named in those constructs in this AST Then the clock and reset can be inserted when generating HDL When you instantiate module but information about that module is missing e.g the clock reset are implicit and you need to know what they are called in that module you can use ExternDecl TODO to declare module interface so that you know how to instantiate it or retrieve the interface from user-maintained database or by parsing and extracting from an HDL file",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "AST",
          "package": "netlist",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operators.\n\u003c/p\u003e\u003cp\u003eThese operators include almost all VHDL and Verilog operators.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e precedence and pretty-printing are language specific, and defined elsewhere.\n\u003c/li\u003e\u003cli\u003e exponentation operators were introduced in Verilog-2001.\n\u003c/li\u003e\u003cli\u003e some operators are not prefix/infix, such as verilog concatenation and the\n    conditional (\u003ccode\u003ex ? y : z\u003c/code\u003e) operator.  those operators are defined in\n    \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e VHDL has both \"logical\" and \"barithmetic\" shift operators, which we\n    don't yet distinguish between here.\n\u003c/li\u003e\u003cli\u003e VHDL has both a \u003ccode\u003emod\u003c/code\u003e and a \u003ccode\u003erem\u003c/code\u003e operator, but so far we only define\n    \u003ccode\u003e\u003ca\u003eModulo\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e VHDL has a concat operator (\u003ccode\u003e&\u003c/code\u003e) that isn't yet supported here.  Use\n    \u003ccode\u003e\u003ca\u003eExprConcat\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003cli\u003e VHDL has an \u003ccode\u003eabs\u003c/code\u003e operator that isn't yet supported here.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Netlist.AST",
          "name": "BinaryOp",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "data"
        },
        "index": {
          "description": "Binary operators These operators include almost all VHDL and Verilog operators precedence and pretty-printing are language specific and defined elsewhere exponentation operators were introduced in Verilog-2001 some operators are not prefix infix such as verilog concatenation and the conditional operator those operators are defined in Expr VHDL has both logical and barithmetic shift operators which we don yet distinguish between here VHDL has both mod and rem operator but so far we only define Modulo VHDL has concat operator that isn yet supported here Use ExprConcat instead VHDL has an abs operator that isn yet supported here",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "BinaryOp",
          "package": "netlist",
          "partial": "Binary Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:BinaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Bit",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Bit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Bit",
          "package": "netlist",
          "partial": "Bit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant expression is simply an expression that must be a constant\n (i.e. the only free variables are static parameters).  This restriction is\n not made in the AST.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ConstExpr",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#ConstExpr",
          "type": "type"
        },
        "index": {
          "description": "constant expression is simply an expression that must be constant i.e the only free variables are static parameters This restriction is not made in the AST",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ConstExpr",
          "package": "netlist",
          "partial": "Const Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:ConstExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA declaration, analogous to an \"item\" in the Verilog formal syntax.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Decl",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "data"
        },
        "index": {
          "description": "declaration analogous to an item in the Verilog formal syntax",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Decl",
          "package": "netlist",
          "partial": "Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event can be triggered by the rising edge (\u003ccode\u003e\u003ca\u003ePosEdge\u003c/a\u003e\u003c/code\u003e) or falling edge\n (\u003ccode\u003e\u003ca\u003eNegEdge\u003c/a\u003e\u003c/code\u003e) of a signal.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Edge",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "An event can be triggered by the rising edge PosEdge or falling edge NegEdge of signal",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Edge",
          "package": "netlist",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Event",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Event",
          "package": "netlist",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpr is a combination of VHDL and Verilog expressions.\n\u003c/p\u003e\u003cp\u003eIn VHDL, concatenation is a binary operator, but in Verilog it takes any\n number of arguments.  In this AST, we define it like the Verilog operator.\n If we translate to VHDL, we have to convert it to the VHDL binary operator.\n\u003c/p\u003e\u003cp\u003eThere are some HDL operators that we don't represent here.  For example, in\n Verilog there is a multiple concatenation (a.k.a. replication) operator,\n which we don't bother to support.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Expr",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Expr is combination of VHDL and Verilog expressions In VHDL concatenation is binary operator but in Verilog it takes any number of arguments In this AST we define it like the Verilog operator If we translate to VHDL we have to convert it to the VHDL binary operator There are some HDL operators that we don represent here For example in Verilog there is multiple concatenation a.k.a replication operator which we don bother to support",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Expr",
          "package": "netlist",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ExprLit",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#ExprLit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprLit",
          "package": "netlist",
          "partial": "Expr Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:ExprLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier name.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Ident",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Ident",
          "type": "type"
        },
        "index": {
          "description": "An identifier name",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Ident",
          "package": "netlist",
          "partial": "Ident",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eLValue\u003c/a\u003e\u003c/code\u003e is something that can appear on the left-hand side of an\n assignment.  We're lazy and do not enforce any restriction, and define this\n simply to be \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "LValue",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#LValue",
          "type": "type"
        },
        "index": {
          "description": "An LValue is something that can appear on the left-hand side of an assignment We re lazy and do not enforce any restriction and define this simply to be Expr",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LValue",
          "package": "netlist",
          "partial": "LValue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Module corresponds to a \"module\" in Verilog or an \"entity\" in VHDL.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Module",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "data"
        },
        "index": {
          "description": "Module corresponds to module in Verilog or an entity in VHDL",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Module",
          "package": "netlist",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e tells us the type of a bit vector.  It can count up or down.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Range",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Range",
          "type": "data"
        },
        "index": {
          "description": "Range tells us the type of bit vector It can count up or down",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Range",
          "package": "netlist",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a wire.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Size",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Size",
          "type": "type"
        },
        "index": {
          "description": "The size of wire",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Size",
          "package": "netlist",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehavioral sequential statement\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Stmt",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "Behavioral sequential statement",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Stmt",
          "package": "netlist",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary operators\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLNeg\u003c/a\u003e\u003c/code\u003e is logical negation, \u003ccode\u003e\u003ca\u003eNeg\u003c/a\u003e\u003c/code\u003e is bitwise negation.  \u003ccode\u003e\u003ca\u003eUAnd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUNand\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eUOr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUNor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUXor\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUXnor\u003c/a\u003e\u003c/code\u003e are sometimes called \"reduction\n operators\".\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "UnaryOp",
          "package": "netlist",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "data"
        },
        "index": {
          "description": "Unary operators LNeg is logical negation Neg is bitwise negation UAnd UNand UOr UNor UXor and UXnor are sometimes called reduction operators",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UnaryOp",
          "package": "netlist",
          "partial": "Unary Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:UnaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "And",
          "package": "netlist",
          "signature": "And",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "And",
          "package": "netlist",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-blocking assignment\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Assign",
          "package": "netlist",
          "signature": "Assign LValue Expr",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "non-blocking assignment",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Assign",
          "package": "netlist",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "CEquals",
          "package": "netlist",
          "signature": "CEquals",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "CEquals",
          "package": "netlist",
          "partial": "CEquals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "CNotEquals",
          "package": "netlist",
          "signature": "CNotEquals",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "CNotEquals",
          "package": "netlist",
          "partial": "CNot Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CNotEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecase statement, with optional default case\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Case",
          "package": "netlist",
          "signature": "Case Expr [([Expr], Stmt)] (Maybe Stmt)",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "case statement with optional default case",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Case",
          "normalized": "Case Expr[([Expr],Stmt)](Maybe Stmt)",
          "package": "netlist",
          "partial": "Case",
          "signature": "Case Expr[([Expr],Stmt)](Maybe Stmt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic comment (typically is placed above a decl of interest).\n Newlines are allowed, and generate new single line comments.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "CommentDecl",
          "package": "netlist",
          "signature": "CommentDecl String",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "basic comment typically is placed above decl of interest Newlines are allowed and generate new single line comments",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "CommentDecl",
          "package": "netlist",
          "partial": "Comment Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CommentDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Divide",
          "package": "netlist",
          "signature": "Divide",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Divide",
          "package": "netlist",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Equals",
          "package": "netlist",
          "signature": "Equals",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Equals",
          "package": "netlist",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Event",
          "package": "netlist",
          "signature": "Event Expr Edge",
          "source": "src/Language-Netlist-AST.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Event",
          "package": "netlist",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplication of a binary operator\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprBinary",
          "package": "netlist",
          "signature": "ExprBinary BinaryOp Expr Expr",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "application of binary operator",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprBinary",
          "package": "netlist",
          "partial": "Expr Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea single bit.  in vhdl, bits are different than 1-bit bitvectors\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprBit",
          "package": "netlist",
          "signature": "ExprBit Bit",
          "source": "src/Language-Netlist-AST.html#ExprLit",
          "type": "function"
        },
        "index": {
          "description": "single bit in vhdl bits are different than bit bitvectors",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprBit",
          "package": "netlist",
          "partial": "Expr Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ExprBitVector",
          "package": "netlist",
          "signature": "ExprBitVector [Bit]",
          "source": "src/Language-Netlist-AST.html#ExprLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprBitVector",
          "normalized": "ExprBitVector[Bit]",
          "package": "netlist",
          "partial": "Expr Bit Vector",
          "signature": "ExprBitVector[Bit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecase expression.  supports multiple matches\n per result value, and an optional default value\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprCase",
          "package": "netlist",
          "signature": "ExprCase Expr [([ConstExpr], Expr)] (Maybe Expr)",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "case expression supports multiple matches per result value and an optional default value",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprCase",
          "normalized": "ExprCase Expr[([ConstExpr],Expr)](Maybe Expr)",
          "package": "netlist",
          "partial": "Expr Case",
          "signature": "ExprCase Expr[([ConstExpr],Expr)](Maybe Expr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcatenation\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprConcat",
          "package": "netlist",
          "signature": "ExprConcat [Expr]",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "concatenation",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprConcat",
          "normalized": "ExprConcat[Expr]",
          "package": "netlist",
          "partial": "Expr Concat",
          "signature": "ExprConcat[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional expression\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprCond",
          "package": "netlist",
          "signature": "ExprCond Expr Expr Expr",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "conditional expression",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprCond",
          "package": "netlist",
          "partial": "Expr Cond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function application\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprFunCall",
          "package": "netlist",
          "signature": "ExprFunCall Ident [Expr]",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "function application",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprFunCall",
          "normalized": "ExprFunCall Ident[Expr]",
          "package": "netlist",
          "partial": "Expr Fun Call",
          "signature": "ExprFunCall Ident[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprFunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex[e]\u003c/pre\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprIndex",
          "package": "netlist",
          "signature": "ExprIndex Ident Expr",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprIndex",
          "package": "netlist",
          "partial": "Expr Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea sized or unsized literal\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprLit",
          "package": "netlist",
          "signature": "ExprLit (Maybe Size) ExprLit",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "sized or unsized literal",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprLit",
          "package": "netlist",
          "partial": "Expr Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea number\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprNum",
          "package": "netlist",
          "signature": "ExprNum Integer",
          "source": "src/Language-Netlist-AST.html#ExprLit",
          "type": "function"
        },
        "index": {
          "description": "number",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprNum",
          "package": "netlist",
          "partial": "Expr Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex[e1 : e2]\u003c/pre\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprSlice",
          "package": "netlist",
          "signature": "ExprSlice Ident Expr Expr",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "e1 e2",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprSlice",
          "package": "netlist",
          "partial": "Expr Slice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex[e : e+i]\u003c/code\u003e, where \u003ccode\u003ei\u003c/code\u003e can be negative\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprSliceOff",
          "package": "netlist",
          "signature": "ExprSliceOff Ident Expr Int",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "where can be negative",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprSliceOff",
          "package": "netlist",
          "partial": "Expr Slice Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprSliceOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea quoted string (useful for parameters)\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprString",
          "package": "netlist",
          "signature": "ExprString String",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "quoted string useful for parameters",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprString",
          "package": "netlist",
          "partial": "Expr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplication of a unary operator\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprUnary",
          "package": "netlist",
          "signature": "ExprUnary UnaryOp Expr",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "application of unary operator",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprUnary",
          "package": "netlist",
          "partial": "Expr Unary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea variable ference\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ExprVar",
          "package": "netlist",
          "signature": "ExprVar Ident",
          "source": "src/Language-Netlist-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "variable ference",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ExprVar",
          "package": "netlist",
          "partial": "Expr Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "F",
          "package": "netlist",
          "signature": "F",
          "source": "src/Language-Netlist-AST.html#Bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "F",
          "package": "netlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function call that can appear as a statement,\n useful for calling Verilog tasks (e.g. $readmem).\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "FunCallStmt",
          "package": "netlist",
          "signature": "FunCallStmt Ident [Expr]",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "function call that can appear as statement useful for calling Verilog tasks e.g readmem",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "FunCallStmt",
          "normalized": "FunCallStmt Ident[Expr]",
          "package": "netlist",
          "partial": "Fun Call Stmt",
          "signature": "FunCallStmt Ident[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:FunCallStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "GreaterEqual",
          "package": "netlist",
          "signature": "GreaterEqual",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "GreaterEqual",
          "package": "netlist",
          "partial": "Greater Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:GreaterEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "GreaterThan",
          "package": "netlist",
          "signature": "GreaterThan",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "GreaterThan",
          "package": "netlist",
          "partial": "Greater Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:GreaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eif\u003c/code\u003e statement\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "If",
          "package": "netlist",
          "signature": "If Expr Stmt (Maybe Stmt)",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "if statement",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "If",
          "package": "netlist",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA statement that executes once at the beginning of simulation.\n Equivalent to Verilog \"initial\" statement.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "InitProcessDecl",
          "package": "netlist",
          "signature": "InitProcessDecl Stmt",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "statement that executes once at the beginning of simulation Equivalent to Verilog initial statement",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "InitProcessDecl",
          "package": "netlist",
          "partial": "Init Process Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:InitProcessDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA module/entity instantiation.  The arguments are the name of the module,\n the name of the instance, the parameter assignments, the input port\n connections, and the output port connections.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "InstDecl",
          "package": "netlist",
          "signature": "InstDecl Ident Ident [(Ident, Expr)] [(Ident, Expr)] [(Ident, Expr)]",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "module entity instantiation The arguments are the name of the module the name of the instance the parameter assignments the input port connections and the output port connections",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "InstDecl",
          "normalized": "InstDecl Ident Ident[(Ident,Expr)][(Ident,Expr)][(Ident,Expr)]",
          "package": "netlist",
          "partial": "Inst Decl",
          "signature": "InstDecl Ident Ident[(Ident,Expr)][(Ident,Expr)][(Ident,Expr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:InstDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "LAnd",
          "package": "netlist",
          "signature": "LAnd",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LAnd",
          "package": "netlist",
          "partial": "LAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "LNeg",
          "package": "netlist",
          "signature": "LNeg",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LNeg",
          "package": "netlist",
          "partial": "LNeg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "LOr",
          "package": "netlist",
          "signature": "LOr",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LOr",
          "package": "netlist",
          "partial": "LOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "LessEqual",
          "package": "netlist",
          "signature": "LessEqual",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LessEqual",
          "package": "netlist",
          "partial": "Less Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LessEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "LessThan",
          "package": "netlist",
          "signature": "LessThan",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "LessThan",
          "package": "netlist",
          "partial": "Less Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are permanent assignments to memory locations,\n of the form mem[addr] = val\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "MemAssign",
          "package": "netlist",
          "signature": "MemAssign Ident Expr Expr",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "These are permanent assignments to memory locations of the form mem addr val",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "MemAssign",
          "package": "netlist",
          "partial": "Mem Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:MemAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mem (\u003ccode\u003ereg\u003c/code\u003e in Verilog) is stateful.  It can be assigned by a\n non-blocking assignment (or blocking, but we don't support those yet)\n within a process.  TODO: support optional initial value\n\u003c/p\u003e\u003cp\u003eThe first range is the most significant dimension.\n So, \u003ccode\u003eMemDecl x (0, 31) (7, 0)\u003c/code\u003e corresponds to the following in Verilog:\n \u003ccode\u003ereg [7:0] x [0:31]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "MemDecl",
          "package": "netlist",
          "signature": "MemDecl Ident (Maybe Range) (Maybe Range) (Maybe [Expr])",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "mem reg in Verilog is stateful It can be assigned by non-blocking assignment or blocking but we don support those yet within process TODO support optional initial value The first range is the most significant dimension So MemDecl corresponds to the following in Verilog reg",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "MemDecl",
          "normalized": "MemDecl Ident(Maybe Range)(Maybe Range)(Maybe[Expr])",
          "package": "netlist",
          "partial": "Mem Decl",
          "signature": "MemDecl Ident(Maybe Range)(Maybe Range)(Maybe[Expr])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:MemDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Minus",
          "package": "netlist",
          "signature": "Minus",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Minus",
          "package": "netlist",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Module",
          "package": "netlist",
          "signature": "Module",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Module",
          "package": "netlist",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Modulo",
          "package": "netlist",
          "signature": "Modulo",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Modulo",
          "package": "netlist",
          "partial": "Modulo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Modulo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Nand",
          "package": "netlist",
          "signature": "Nand",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Nand",
          "package": "netlist",
          "partial": "Nand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Nand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Neg",
          "package": "netlist",
          "signature": "Neg",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Neg",
          "package": "netlist",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "NegEdge",
          "package": "netlist",
          "signature": "NegEdge",
          "source": "src/Language-Netlist-AST.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "NegEdge",
          "package": "netlist",
          "partial": "Neg Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NegEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "NetAssign",
          "package": "netlist",
          "signature": "NetAssign Ident Expr",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "NetAssign",
          "package": "netlist",
          "partial": "Net Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NetAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA net (\u003ccode\u003ewire\u003c/code\u003e in Verilog) has a continuously assigned value.  The net can\n be declared and assigned at the same time (\u003ccode\u003eJust Expr\u003c/code\u003e), or separately\n (\u003ccode\u003eNothing\u003c/code\u003e) in a \u003ccode\u003eNetAssign\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "NetDecl",
          "package": "netlist",
          "signature": "NetDecl Ident (Maybe Range) (Maybe Expr)",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "net wire in Verilog has continuously assigned value The net can be declared and assigned at the same time Just Expr or separately Nothing in NetAssign",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "NetDecl",
          "package": "netlist",
          "partial": "Net Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NetDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Nor",
          "package": "netlist",
          "signature": "Nor",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Nor",
          "package": "netlist",
          "partial": "Nor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Nor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "NotEquals",
          "package": "netlist",
          "signature": "NotEquals",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "NotEquals",
          "package": "netlist",
          "partial": "Not Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NotEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Or",
          "package": "netlist",
          "signature": "Or",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Or",
          "package": "netlist",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Plus",
          "package": "netlist",
          "signature": "Plus",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Plus",
          "package": "netlist",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "PosEdge",
          "package": "netlist",
          "signature": "PosEdge",
          "source": "src/Language-Netlist-AST.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "PosEdge",
          "package": "netlist",
          "partial": "Pos Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:PosEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Pow",
          "package": "netlist",
          "signature": "Pow",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Pow",
          "package": "netlist",
          "partial": "Pow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequential process with clock and (optional) asynchronous reset.\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "ProcessDecl",
          "package": "netlist",
          "signature": "ProcessDecl Event (Maybe (Event, Stmt)) Stmt",
          "source": "src/Language-Netlist-AST.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "sequential process with clock and optional asynchronous reset",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ProcessDecl",
          "normalized": "ProcessDecl Event(Maybe(Event,Stmt))Stmt",
          "package": "netlist",
          "partial": "Process Decl",
          "signature": "ProcessDecl Event(Maybe(Event,Stmt))Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ProcessDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Range",
          "package": "netlist",
          "signature": "Range ConstExpr ConstExpr",
          "source": "src/Language-Netlist-AST.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Range",
          "package": "netlist",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "RotateLeft",
          "package": "netlist",
          "signature": "RotateLeft",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "RotateLeft",
          "package": "netlist",
          "partial": "Rotate Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:RotateLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "RotateRight",
          "package": "netlist",
          "signature": "RotateRight",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "RotateRight",
          "package": "netlist",
          "partial": "Rotate Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:RotateRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiple statements in sequence\n\u003c/p\u003e",
          "module": "Language.Netlist.AST",
          "name": "Seq",
          "package": "netlist",
          "signature": "Seq [Stmt]",
          "source": "src/Language-Netlist-AST.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "multiple statements in sequence",
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Seq",
          "normalized": "Seq[Stmt]",
          "package": "netlist",
          "partial": "Seq",
          "signature": "Seq[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ShiftLeft",
          "package": "netlist",
          "signature": "ShiftLeft",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ShiftLeft",
          "package": "netlist",
          "partial": "Shift Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ShiftLeftArith",
          "package": "netlist",
          "signature": "ShiftLeftArith",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ShiftLeftArith",
          "package": "netlist",
          "partial": "Shift Left Arith",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftLeftArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ShiftRight",
          "package": "netlist",
          "signature": "ShiftRight",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ShiftRight",
          "package": "netlist",
          "partial": "Shift Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "ShiftRightArith",
          "package": "netlist",
          "signature": "ShiftRightArith",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "ShiftRightArith",
          "package": "netlist",
          "partial": "Shift Right Arith",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftRightArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "T",
          "package": "netlist",
          "signature": "T",
          "source": "src/Language-Netlist-AST.html#Bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "T",
          "package": "netlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Times",
          "package": "netlist",
          "signature": "Times",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Times",
          "package": "netlist",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "U",
          "package": "netlist",
          "signature": "U",
          "source": "src/Language-Netlist-AST.html#Bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "U",
          "package": "netlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UAnd",
          "package": "netlist",
          "signature": "UAnd",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UAnd",
          "package": "netlist",
          "partial": "UAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UMinus",
          "package": "netlist",
          "signature": "UMinus",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UMinus",
          "package": "netlist",
          "partial": "UMinus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UNand",
          "package": "netlist",
          "signature": "UNand",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UNand",
          "package": "netlist",
          "partial": "UNand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UNand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UNor",
          "package": "netlist",
          "signature": "UNor",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UNor",
          "package": "netlist",
          "partial": "UNor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UNor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UOr",
          "package": "netlist",
          "signature": "UOr",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UOr",
          "package": "netlist",
          "partial": "UOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UPlus",
          "package": "netlist",
          "signature": "UPlus",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UPlus",
          "package": "netlist",
          "partial": "UPlus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UXnor",
          "package": "netlist",
          "signature": "UXnor",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UXnor",
          "package": "netlist",
          "partial": "UXnor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UXnor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "UXor",
          "package": "netlist",
          "signature": "UXor",
          "source": "src/Language-Netlist-AST.html#UnaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "UXor",
          "package": "netlist",
          "partial": "UXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Xnor",
          "package": "netlist",
          "signature": "Xnor",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Xnor",
          "package": "netlist",
          "partial": "Xnor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Xnor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Xor",
          "package": "netlist",
          "signature": "Xor",
          "source": "src/Language-Netlist-AST.html#BinaryOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Xor",
          "package": "netlist",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "Z",
          "package": "netlist",
          "signature": "Z",
          "source": "src/Language-Netlist-AST.html#Bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "Z",
          "package": "netlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "module_decls",
          "package": "netlist",
          "signature": "[Decl]",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "module_decls",
          "normalized": "[Decl]",
          "package": "netlist",
          "signature": "[Decl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "module_inputs",
          "package": "netlist",
          "signature": "[(Ident, Maybe Range)]",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "module_inputs",
          "normalized": "[(Ident,Maybe Range)]",
          "package": "netlist",
          "signature": "[(Ident,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_inputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "module_name",
          "package": "netlist",
          "signature": "Ident",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "module_name",
          "package": "netlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "module_outputs",
          "package": "netlist",
          "signature": "[(Ident, Maybe Range)]",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "module_outputs",
          "normalized": "[(Ident,Maybe Range)]",
          "package": "netlist",
          "signature": "[(Ident,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_outputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.AST",
          "name": "module_statics",
          "package": "netlist",
          "signature": "[(Ident, ConstExpr)]",
          "source": "src/Language-Netlist-AST.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist AST",
          "module": "Language.Netlist.AST",
          "name": "module_statics",
          "normalized": "[(Ident,ConstExpr)]",
          "package": "netlist",
          "signature": "[(Ident,ConstExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_statics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple inliner for a Netlist AST (\u003ccode\u003eLanguage.Netlist.AST\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Netlist.Inline",
          "name": "Inline",
          "package": "netlist",
          "source": "src/Language-Netlist-Inline.html",
          "type": "module"
        },
        "index": {
          "description": "simple inliner for Netlist AST Language.Netlist.AST",
          "hierarchy": "Language Netlist Inline",
          "module": "Language.Netlist.Inline",
          "name": "Inline",
          "package": "netlist",
          "partial": "Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Inline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a new module in which some variables have been inlined.  An\n expression is inlined (and it's declaration removed) if it only used in one\n place in the entire module.\n\u003c/p\u003e",
          "module": "Language.Netlist.Inline",
          "name": "inlineModule",
          "package": "netlist",
          "signature": "Module -\u003e Module",
          "source": "src/Language-Netlist-Inline.html#inlineModule",
          "type": "function"
        },
        "index": {
          "description": "Produce new module in which some variables have been inlined An expression is inlined and it declaration removed if it only used in one place in the entire module",
          "hierarchy": "Language Netlist Inline",
          "module": "Language.Netlist.Inline",
          "name": "inlineModule",
          "normalized": "Module-\u003eModule",
          "package": "netlist",
          "partial": "Module",
          "signature": "Module-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Inline.html#v:inlineModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for constructing Netlist AST elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Netlist.Util",
          "name": "Util",
          "package": "netlist",
          "source": "src/Language-Netlist-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for constructing Netlist AST elements",
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "Util",
          "package": "netlist",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "Direction",
          "package": "netlist",
          "source": "src/Language-Netlist-Util.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "Direction",
          "package": "netlist",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "Down",
          "package": "netlist",
          "signature": "Down",
          "source": "src/Language-Netlist-Util.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "Down",
          "package": "netlist",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "Up",
          "package": "netlist",
          "signature": "Up",
          "source": "src/Language-Netlist-Util.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "Up",
          "package": "netlist",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of expressions, unless there is just one expression.\n\u003c/p\u003e",
          "module": "Language.Netlist.Util",
          "name": "exprConcat",
          "package": "netlist",
          "signature": "[Expr] -\u003e Expr",
          "source": "src/Language-Netlist-Util.html#exprConcat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of expressions unless there is just one expression",
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "exprConcat",
          "normalized": "[Expr]-\u003eExpr",
          "package": "netlist",
          "partial": "Concat",
          "signature": "[Expr]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:exprConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a process declaration for a generic register based on the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the register name (as an expression)\n\u003c/li\u003e\u003cli\u003e clock expression\n\u003c/li\u003e\u003cli\u003e width of the register\n\u003c/li\u003e\u003cli\u003e optional asynchronous reset and initial value\n\u003c/li\u003e\u003cli\u003e optional clock enable\n\u003c/li\u003e\u003cli\u003e optional synchronous restart and initial value\n\u003c/li\u003e\u003cli\u003e optional load enable\n\u003c/li\u003e\u003cli\u003e when enabled, the expression to assign to the identifier\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can implement a shift register by passing in a concatenation for the\n register expression and the input expression, though that is not compatible\n with VHDL.\n\u003c/p\u003e",
          "module": "Language.Netlist.Util",
          "name": "generateReg",
          "package": "netlist",
          "signature": "Expr -\u003e Expr -\u003e Maybe (Expr, Expr) -\u003e Maybe (Expr, Expr) -\u003e Maybe Expr -\u003e Expr -\u003e Decl",
          "source": "src/Language-Netlist-Util.html#generateReg",
          "type": "function"
        },
        "index": {
          "description": "generate process declaration for generic register based on the following the register name as an expression clock expression width of the register optional asynchronous reset and initial value optional clock enable optional synchronous restart and initial value optional load enable when enabled the expression to assign to the identifier You can implement shift register by passing in concatenation for the register expression and the input expression though that is not compatible with VHDL",
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "generateReg",
          "normalized": "Expr-\u003eExpr-\u003eMaybe(Expr,Expr)-\u003eMaybe(Expr,Expr)-\u003eMaybe Expr-\u003eExpr-\u003eDecl",
          "package": "netlist",
          "partial": "Reg",
          "signature": "Expr-\u003eExpr-\u003eMaybe(Expr,Expr)-\u003eMaybe(Expr,Expr)-\u003eMaybe Expr-\u003eExpr-\u003eDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:generateReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a direction and size, maybe generate a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e, where a size of 1\n yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Netlist.Util",
          "name": "makeRange",
          "package": "netlist",
          "signature": "Direction -\u003e Size -\u003e Maybe Range",
          "source": "src/Language-Netlist-Util.html#makeRange",
          "type": "function"
        },
        "index": {
          "description": "Given direction and size maybe generate Range where size of yields Nothing",
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "makeRange",
          "normalized": "Direction-\u003eSize-\u003eMaybe Range",
          "package": "netlist",
          "partial": "Range",
          "signature": "Direction-\u003eSize-\u003eMaybe Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:makeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "sizedInteger",
          "package": "netlist",
          "signature": "Int -\u003e Integer -\u003e Expr",
          "source": "src/Language-Netlist-Util.html#sizedInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "sizedInteger",
          "normalized": "Int-\u003eInteger-\u003eExpr",
          "package": "netlist",
          "partial": "Integer",
          "signature": "Int-\u003eInteger-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:sizedInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "sizedIntegral",
          "package": "netlist",
          "signature": "Int -\u003e a -\u003e Expr",
          "source": "src/Language-Netlist-Util.html#sizedIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "sizedIntegral",
          "normalized": "Int-\u003ea-\u003eExpr",
          "package": "netlist",
          "partial": "Integral",
          "signature": "Int-\u003ea-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:sizedIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e statement from a list of statements, unless there is just one\n statement.\n\u003c/p\u003e",
          "module": "Language.Netlist.Util",
          "name": "statements",
          "package": "netlist",
          "signature": "[Stmt] -\u003e Stmt",
          "source": "src/Language-Netlist-Util.html#statements",
          "type": "function"
        },
        "index": {
          "description": "Make Seq statement from list of statements unless there is just one statement",
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "statements",
          "normalized": "[Stmt]-\u003eStmt",
          "package": "netlist",
          "signature": "[Stmt]-\u003eStmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:statements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "unsizedInteger",
          "package": "netlist",
          "signature": "Integer -\u003e Expr",
          "source": "src/Language-Netlist-Util.html#unsizedInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "unsizedInteger",
          "normalized": "Integer-\u003eExpr",
          "package": "netlist",
          "partial": "Integer",
          "signature": "Integer-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:unsizedInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Netlist.Util",
          "name": "unsizedIntegral",
          "package": "netlist",
          "signature": "a -\u003e Expr",
          "source": "src/Language-Netlist-Util.html#unsizedIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Netlist Util",
          "module": "Language.Netlist.Util",
          "name": "unsizedIntegral",
          "normalized": "a-\u003eExpr",
          "package": "netlist",
          "partial": "Integral",
          "signature": "a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:unsizedIntegral"
      }
    }
  ]
]