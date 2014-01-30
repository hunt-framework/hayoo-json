[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract syntax tree (AST) for a generic netlist, kind of like a\n high-level subset of Verilog and VHDL that is compatible with both languages.\n\u003c/p\u003e\u003cp\u003eThere are no definitive semantics assigned to this AST.\n\u003c/p\u003e\u003cp\u003eFor example, the user may choose to treat the bindings as recursive, so that\n expressions can reference variables before their declaration, like in\n Haskell, which is not supported in Verilog and VHDL.  in this case, the user\n must fix the bindings when converting to an HDL.\n\u003c/p\u003e\u003cp\u003eAlso, the user may treat module instantiations and processes as having an\n implict clock/reset, so that they are not explicitly named in those\n constructs in this AST.  Then, the clock and reset can be inserted when\n generating HDL.\n\u003c/p\u003e\u003cp\u003eWhen you instantiate a module but information about that module is missing\n (e.g. the clock/reset are implicit and you need to know what they are called\n in that module), you can use ExternDecl (TODO) to declare a module's\n interface so that you know how to instantiate it, or retrieve the interface\n from a user-maintained database or by parsing and extracting from an HDL\n file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "module",
        "fct-source": "src/Language-Netlist-AST.html",
        "fct-type": "module",
        "title": "AST"
      },
      "index": {
        "description": "An abstract syntax tree AST for generic netlist kind of like high-level subset of Verilog and VHDL that is compatible with both languages There are no definitive semantics assigned to this AST For example the user may choose to treat the bindings as recursive so that expressions can reference variables before their declaration like in Haskell which is not supported in Verilog and VHDL in this case the user must fix the bindings when converting to an HDL Also the user may treat module instantiations and processes as having an implict clock reset so that they are not explicitly named in those constructs in this AST Then the clock and reset can be inserted when generating HDL When you instantiate module but information about that module is missing e.g the clock reset are implicit and you need to know what they are called in that module you can use ExternDecl TODO to declare module interface so that you know how to instantiate it or retrieve the interface from user-maintained database or by parsing and extracting from an HDL file",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "AST",
        "normalized": "",
        "package": "netlist",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:BinaryOp",
      "description": {
        "fct-descr": "\u003cp\u003eBinary operators.\n\u003c/p\u003e\u003cp\u003eThese operators include almost all VHDL and Verilog operators.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e precedence and pretty-printing are language specific, and defined elsewhere.\n\u003c/li\u003e\u003cli\u003e exponentation operators were introduced in Verilog-2001.\n\u003c/li\u003e\u003cli\u003e some operators are not prefix/infix, such as verilog concatenation and the\n    conditional (\u003ccode\u003ex ? y : z\u003c/code\u003e) operator.  those operators are defined in\n    \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e VHDL has both \"logical\" and \"barithmetic\" shift operators, which we\n    don't yet distinguish between here.\n\u003c/li\u003e\u003cli\u003e VHDL has both a \u003ccode\u003emod\u003c/code\u003e and a \u003ccode\u003erem\u003c/code\u003e operator, but so far we only define\n    \u003ccode\u003e\u003ca\u003eModulo\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e VHDL has a concat operator (\u003ccode\u003e&\u003c/code\u003e) that isn't yet supported here.  Use\n    \u003ccode\u003e\u003ca\u003eExprConcat\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003cli\u003e VHDL has an \u003ccode\u003eabs\u003c/code\u003e operator that isn't yet supported here.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "data",
        "title": "BinaryOp"
      },
      "index": {
        "description": "Binary operators These operators include almost all VHDL and Verilog operators precedence and pretty-printing are language specific and defined elsewhere exponentation operators were introduced in Verilog-2001 some operators are not prefix infix such as verilog concatenation and the conditional operator those operators are defined in Expr VHDL has both logical and barithmetic shift operators which we don yet distinguish between here VHDL has both mod and rem operator but so far we only define Modulo VHDL has concat operator that isn yet supported here Use ExprConcat instead VHDL has an abs operator that isn yet supported here",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "BinaryOp",
        "normalized": "",
        "package": "netlist",
        "partial": "Binary Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Bit",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Bit",
        "fct-type": "data",
        "title": "Bit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Bit",
        "normalized": "",
        "package": "netlist",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:ConstExpr",
      "description": {
        "fct-descr": "\u003cp\u003eA constant expression is simply an expression that must be a constant\n (i.e. the only free variables are static parameters).  This restriction is\n not made in the AST.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "type",
        "fct-source": "src/Language-Netlist-AST.html#ConstExpr",
        "fct-type": "type",
        "title": "ConstExpr"
      },
      "index": {
        "description": "constant expression is simply an expression that must be constant i.e the only free variables are static parameters This restriction is not made in the AST",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ConstExpr",
        "normalized": "",
        "package": "netlist",
        "partial": "Const Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Decl",
      "description": {
        "fct-descr": "\u003cp\u003eA declaration, analogous to an \"item\" in the Verilog formal syntax.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "data",
        "title": "Decl"
      },
      "index": {
        "description": "declaration analogous to an item in the Verilog formal syntax",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Decl",
        "normalized": "",
        "package": "netlist",
        "partial": "Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eAn event can be triggered by the rising edge (\u003ccode\u003e\u003ca\u003ePosEdge\u003c/a\u003e\u003c/code\u003e) or falling edge\n (\u003ccode\u003e\u003ca\u003eNegEdge\u003c/a\u003e\u003c/code\u003e) of a signal.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Edge",
        "fct-type": "data",
        "title": "Edge"
      },
      "index": {
        "description": "An event can be triggered by the rising edge PosEdge or falling edge NegEdge of signal",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Edge",
        "normalized": "",
        "package": "netlist",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Event",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Event",
        "normalized": "",
        "package": "netlist",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eExpr is a combination of VHDL and Verilog expressions.\n\u003c/p\u003e\u003cp\u003eIn VHDL, concatenation is a binary operator, but in Verilog it takes any\n number of arguments.  In this AST, we define it like the Verilog operator.\n If we translate to VHDL, we have to convert it to the VHDL binary operator.\n\u003c/p\u003e\u003cp\u003eThere are some HDL operators that we don't represent here.  For example, in\n Verilog there is a multiple concatenation (a.k.a. replication) operator,\n which we don't bother to support.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "Expr is combination of VHDL and Verilog expressions In VHDL concatenation is binary operator but in Verilog it takes any number of arguments In this AST we define it like the Verilog operator If we translate to VHDL we have to convert it to the VHDL binary operator There are some HDL operators that we don represent here For example in Verilog there is multiple concatenation a.k.a replication operator which we don bother to support",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Expr",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:ExprLit",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#ExprLit",
        "fct-type": "data",
        "title": "ExprLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprLit",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Ident",
      "description": {
        "fct-descr": "\u003cp\u003eAn identifier name.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "type",
        "fct-source": "src/Language-Netlist-AST.html#Ident",
        "fct-type": "type",
        "title": "Ident"
      },
      "index": {
        "description": "An identifier name",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Ident",
        "normalized": "",
        "package": "netlist",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:LValue",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eLValue\u003c/a\u003e\u003c/code\u003e is something that can appear on the left-hand side of an\n assignment.  We're lazy and do not enforce any restriction, and define this\n simply to be \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "type",
        "fct-source": "src/Language-Netlist-AST.html#LValue",
        "fct-type": "type",
        "title": "LValue"
      },
      "index": {
        "description": "An LValue is something that can appear on the left-hand side of an assignment We re lazy and do not enforce any restriction and define this simply to be Expr",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LValue",
        "normalized": "",
        "package": "netlist",
        "partial": "LValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Module",
      "description": {
        "fct-descr": "\u003cp\u003eA Module corresponds to a \"module\" in Verilog or an \"entity\" in VHDL.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "data",
        "title": "Module"
      },
      "index": {
        "description": "Module corresponds to module in Verilog or an entity in VHDL",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Module",
        "normalized": "",
        "package": "netlist",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e tells us the type of a bit vector.  It can count up or down.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "Range tells us the type of bit vector It can count up or down",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Range",
        "normalized": "",
        "package": "netlist",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of a wire.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "type",
        "fct-source": "src/Language-Netlist-AST.html#Size",
        "fct-type": "type",
        "title": "Size"
      },
      "index": {
        "description": "The size of wire",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Size",
        "normalized": "",
        "package": "netlist",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:Stmt",
      "description": {
        "fct-descr": "\u003cp\u003eBehavioral sequential statement\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "data",
        "title": "Stmt"
      },
      "index": {
        "description": "Behavioral sequential statement",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Stmt",
        "normalized": "",
        "package": "netlist",
        "partial": "Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#t:UnaryOp",
      "description": {
        "fct-descr": "\u003cp\u003eUnary operators\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLNeg\u003c/a\u003e\u003c/code\u003e is logical negation, \u003ccode\u003e\u003ca\u003eNeg\u003c/a\u003e\u003c/code\u003e is bitwise negation.  \u003ccode\u003e\u003ca\u003eUAnd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUNand\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eUOr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUNor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUXor\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUXnor\u003c/a\u003e\u003c/code\u003e are sometimes called \"reduction\n operators\".\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "data",
        "title": "UnaryOp"
      },
      "index": {
        "description": "Unary operators LNeg is logical negation Neg is bitwise negation UAnd UNand UOr UNor UXor and UXnor are sometimes called reduction operators",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UnaryOp",
        "normalized": "",
        "package": "netlist",
        "partial": "Unary Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:And",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "And",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "And",
        "normalized": "",
        "package": "netlist",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Assign",
      "description": {
        "fct-descr": "\u003cp\u003enon-blocking assignment\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Assign LValue Expr",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "function",
        "title": "Assign"
      },
      "index": {
        "description": "non-blocking assignment",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Assign",
        "normalized": "",
        "package": "netlist",
        "partial": "Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CEquals",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "CEquals",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "CEquals"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "CEquals",
        "normalized": "",
        "package": "netlist",
        "partial": "CEquals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CNotEquals",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "CNotEquals",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "CNotEquals"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "CNotEquals",
        "normalized": "",
        "package": "netlist",
        "partial": "CNot Equals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Case",
      "description": {
        "fct-descr": "\u003cp\u003ecase statement, with optional default case\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Case Expr [([Expr], Stmt)] (Maybe Stmt)",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "function",
        "title": "Case"
      },
      "index": {
        "description": "case statement with optional default case",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Case",
        "normalized": "Case Expr[([Expr],Stmt)](Maybe Stmt)",
        "package": "netlist",
        "partial": "Case",
        "signature": "Case Expr[([Expr],Stmt)](Maybe Stmt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:CommentDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA basic comment (typically is placed above a decl of interest).\n Newlines are allowed, and generate new single line comments.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "CommentDecl String",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "CommentDecl"
      },
      "index": {
        "description": "basic comment typically is placed above decl of interest Newlines are allowed and generate new single line comments",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "CommentDecl",
        "normalized": "",
        "package": "netlist",
        "partial": "Comment Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Divide",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Divide",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Divide"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Divide",
        "normalized": "",
        "package": "netlist",
        "partial": "Divide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Equals",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Equals",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Equals"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Equals",
        "normalized": "",
        "package": "netlist",
        "partial": "Equals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Event",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Event Expr Edge",
        "fct-source": "src/Language-Netlist-AST.html#Event",
        "fct-type": "function",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Event",
        "normalized": "",
        "package": "netlist",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBinary",
      "description": {
        "fct-descr": "\u003cp\u003eapplication of a binary operator\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprBinary BinaryOp Expr Expr",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprBinary"
      },
      "index": {
        "description": "application of binary operator",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprBinary",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBit",
      "description": {
        "fct-descr": "\u003cp\u003ea single bit.  in vhdl, bits are different than 1-bit bitvectors\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprBit Bit",
        "fct-source": "src/Language-Netlist-AST.html#ExprLit",
        "fct-type": "function",
        "title": "ExprBit"
      },
      "index": {
        "description": "single bit in vhdl bits are different than bit bitvectors",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprBit",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprBitVector",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprBitVector [Bit]",
        "fct-source": "src/Language-Netlist-AST.html#ExprLit",
        "fct-type": "function",
        "title": "ExprBitVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprBitVector",
        "normalized": "ExprBitVector[Bit]",
        "package": "netlist",
        "partial": "Expr Bit Vector",
        "signature": "ExprBitVector[Bit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprCase",
      "description": {
        "fct-descr": "\u003cp\u003ecase expression.  supports multiple matches\n per result value, and an optional default value\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprCase Expr [([ConstExpr], Expr)] (Maybe Expr)",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprCase"
      },
      "index": {
        "description": "case expression supports multiple matches per result value and an optional default value",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprCase",
        "normalized": "ExprCase Expr[([ConstExpr],Expr)](Maybe Expr)",
        "package": "netlist",
        "partial": "Expr Case",
        "signature": "ExprCase Expr[([ConstExpr],Expr)](Maybe Expr)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprConcat",
      "description": {
        "fct-descr": "\u003cp\u003econcatenation\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprConcat [Expr]",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprConcat"
      },
      "index": {
        "description": "concatenation",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprConcat",
        "normalized": "ExprConcat[Expr]",
        "package": "netlist",
        "partial": "Expr Concat",
        "signature": "ExprConcat[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprCond",
      "description": {
        "fct-descr": "\u003cp\u003econditional expression\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprCond Expr Expr Expr",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprCond"
      },
      "index": {
        "description": "conditional expression",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprCond",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Cond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprFunCall",
      "description": {
        "fct-descr": "\u003cp\u003ea function application\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprFunCall Ident [Expr]",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprFunCall"
      },
      "index": {
        "description": "function application",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprFunCall",
        "normalized": "ExprFunCall Ident[Expr]",
        "package": "netlist",
        "partial": "Expr Fun Call",
        "signature": "ExprFunCall Ident[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprIndex",
      "description": {
        "fct-descr": "\u003cpre\u003ex[e]\u003c/pre\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprIndex Ident Expr",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprIndex",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprLit",
      "description": {
        "fct-descr": "\u003cp\u003ea sized or unsized literal\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprLit (Maybe Size) ExprLit",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprLit"
      },
      "index": {
        "description": "sized or unsized literal",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprLit",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprNum",
      "description": {
        "fct-descr": "\u003cp\u003ea number\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprNum Integer",
        "fct-source": "src/Language-Netlist-AST.html#ExprLit",
        "fct-type": "function",
        "title": "ExprNum"
      },
      "index": {
        "description": "number",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprNum",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprSlice",
      "description": {
        "fct-descr": "\u003cpre\u003ex[e1 : e2]\u003c/pre\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprSlice Ident Expr Expr",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprSlice"
      },
      "index": {
        "description": "e1 e2",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprSlice",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprSliceOff",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ex[e : e+i]\u003c/code\u003e, where \u003ccode\u003ei\u003c/code\u003e can be negative\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprSliceOff Ident Expr Int",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprSliceOff"
      },
      "index": {
        "description": "where can be negative",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprSliceOff",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Slice Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprString",
      "description": {
        "fct-descr": "\u003cp\u003ea quoted string (useful for parameters)\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprString String",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprString"
      },
      "index": {
        "description": "quoted string useful for parameters",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprString",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprUnary",
      "description": {
        "fct-descr": "\u003cp\u003eapplication of a unary operator\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprUnary UnaryOp Expr",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprUnary"
      },
      "index": {
        "description": "application of unary operator",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprUnary",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Unary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ExprVar",
      "description": {
        "fct-descr": "\u003cp\u003ea variable ference\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ExprVar Ident",
        "fct-source": "src/Language-Netlist-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprVar"
      },
      "index": {
        "description": "variable ference",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ExprVar",
        "normalized": "",
        "package": "netlist",
        "partial": "Expr Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:F",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "F",
        "fct-source": "src/Language-Netlist-AST.html#Bit",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "F",
        "normalized": "",
        "package": "netlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:FunCallStmt",
      "description": {
        "fct-descr": "\u003cp\u003ea function call that can appear as a statement,\n useful for calling Verilog tasks (e.g. $readmem).\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "FunCallStmt Ident [Expr]",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "function",
        "title": "FunCallStmt"
      },
      "index": {
        "description": "function call that can appear as statement useful for calling Verilog tasks e.g readmem",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "FunCallStmt",
        "normalized": "FunCallStmt Ident[Expr]",
        "package": "netlist",
        "partial": "Fun Call Stmt",
        "signature": "FunCallStmt Ident[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:GreaterEqual",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "GreaterEqual",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "GreaterEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "GreaterEqual",
        "normalized": "",
        "package": "netlist",
        "partial": "Greater Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:GreaterThan",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "GreaterThan",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "GreaterThan"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "GreaterThan",
        "normalized": "",
        "package": "netlist",
        "partial": "Greater Than",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:If",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eif\u003c/code\u003e statement\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "If Expr Stmt (Maybe Stmt)",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "if statement",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "If",
        "normalized": "",
        "package": "netlist",
        "partial": "If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:InitProcessDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA statement that executes once at the beginning of simulation.\n Equivalent to Verilog \"initial\" statement.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "InitProcessDecl Stmt",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "InitProcessDecl"
      },
      "index": {
        "description": "statement that executes once at the beginning of simulation Equivalent to Verilog initial statement",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "InitProcessDecl",
        "normalized": "",
        "package": "netlist",
        "partial": "Init Process Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:InstDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA module/entity instantiation.  The arguments are the name of the module,\n the name of the instance, the parameter assignments, the input port\n connections, and the output port connections.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "InstDecl Ident Ident [(Ident, Expr)] [(Ident, Expr)] [(Ident, Expr)]",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "InstDecl"
      },
      "index": {
        "description": "module entity instantiation The arguments are the name of the module the name of the instance the parameter assignments the input port connections and the output port connections",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "InstDecl",
        "normalized": "InstDecl Ident Ident[(Ident,Expr)][(Ident,Expr)][(Ident,Expr)]",
        "package": "netlist",
        "partial": "Inst Decl",
        "signature": "InstDecl Ident Ident[(Ident,Expr)][(Ident,Expr)][(Ident,Expr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LAnd",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "LAnd",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "LAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LAnd",
        "normalized": "",
        "package": "netlist",
        "partial": "LAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LNeg",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "LNeg",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "LNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LNeg",
        "normalized": "",
        "package": "netlist",
        "partial": "LNeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LOr",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "LOr",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "LOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LOr",
        "normalized": "",
        "package": "netlist",
        "partial": "LOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LessEqual",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "LessEqual",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "LessEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LessEqual",
        "normalized": "",
        "package": "netlist",
        "partial": "Less Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:LessThan",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "LessThan",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "LessThan"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "LessThan",
        "normalized": "",
        "package": "netlist",
        "partial": "Less Than",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:MemAssign",
      "description": {
        "fct-descr": "\u003cp\u003eThese are permanent assignments to memory locations,\n of the form mem[addr] = val\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "MemAssign Ident Expr Expr",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "MemAssign"
      },
      "index": {
        "description": "These are permanent assignments to memory locations of the form mem addr val",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "MemAssign",
        "normalized": "",
        "package": "netlist",
        "partial": "Mem Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:MemDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA mem (\u003ccode\u003ereg\u003c/code\u003e in Verilog) is stateful.  It can be assigned by a\n non-blocking assignment (or blocking, but we don't support those yet)\n within a process.  TODO: support optional initial value\n\u003c/p\u003e\u003cp\u003eThe first range is the most significant dimension.\n So, \u003ccode\u003eMemDecl x (0, 31) (7, 0)\u003c/code\u003e corresponds to the following in Verilog:\n \u003ccode\u003ereg [7:0] x [0:31]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "MemDecl Ident (Maybe Range) (Maybe Range) (Maybe [Expr])",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "MemDecl"
      },
      "index": {
        "description": "mem reg in Verilog is stateful It can be assigned by non-blocking assignment or blocking but we don support those yet within process TODO support optional initial value The first range is the most significant dimension So MemDecl corresponds to the following in Verilog reg",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "MemDecl",
        "normalized": "MemDecl Ident(Maybe Range)(Maybe Range)(Maybe[Expr])",
        "package": "netlist",
        "partial": "Mem Decl",
        "signature": "MemDecl Ident(Maybe Range)(Maybe Range)(Maybe[Expr])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Minus",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Minus",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Minus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Minus",
        "normalized": "",
        "package": "netlist",
        "partial": "Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Module",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Module",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "Module"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Module",
        "normalized": "",
        "package": "netlist",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Modulo",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Modulo",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Modulo"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Modulo",
        "normalized": "",
        "package": "netlist",
        "partial": "Modulo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Nand",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Nand",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Nand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Nand",
        "normalized": "",
        "package": "netlist",
        "partial": "Nand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Neg",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Neg",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "Neg"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Neg",
        "normalized": "",
        "package": "netlist",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NegEdge",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "NegEdge",
        "fct-source": "src/Language-Netlist-AST.html#Edge",
        "fct-type": "function",
        "title": "NegEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "NegEdge",
        "normalized": "",
        "package": "netlist",
        "partial": "Neg Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NetAssign",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "NetAssign Ident Expr",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "NetAssign"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "NetAssign",
        "normalized": "",
        "package": "netlist",
        "partial": "Net Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NetDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA net (\u003ccode\u003ewire\u003c/code\u003e in Verilog) has a continuously assigned value.  The net can\n be declared and assigned at the same time (\u003ccode\u003eJust Expr\u003c/code\u003e), or separately\n (\u003ccode\u003eNothing\u003c/code\u003e) in a \u003ccode\u003eNetAssign\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "NetDecl Ident (Maybe Range) (Maybe Expr)",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "NetDecl"
      },
      "index": {
        "description": "net wire in Verilog has continuously assigned value The net can be declared and assigned at the same time Just Expr or separately Nothing in NetAssign",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "NetDecl",
        "normalized": "",
        "package": "netlist",
        "partial": "Net Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Nor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Nor",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Nor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Nor",
        "normalized": "",
        "package": "netlist",
        "partial": "Nor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:NotEquals",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "NotEquals",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "NotEquals"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "NotEquals",
        "normalized": "",
        "package": "netlist",
        "partial": "Not Equals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Or",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Or",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Or",
        "normalized": "",
        "package": "netlist",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Plus",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Plus",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Plus",
        "normalized": "",
        "package": "netlist",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:PosEdge",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "PosEdge",
        "fct-source": "src/Language-Netlist-AST.html#Edge",
        "fct-type": "function",
        "title": "PosEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "PosEdge",
        "normalized": "",
        "package": "netlist",
        "partial": "Pos Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Pow",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Pow",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Pow"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Pow",
        "normalized": "",
        "package": "netlist",
        "partial": "Pow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ProcessDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA sequential process with clock and (optional) asynchronous reset.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ProcessDecl Event (Maybe (Event, Stmt)) Stmt",
        "fct-source": "src/Language-Netlist-AST.html#Decl",
        "fct-type": "function",
        "title": "ProcessDecl"
      },
      "index": {
        "description": "sequential process with clock and optional asynchronous reset",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ProcessDecl",
        "normalized": "ProcessDecl Event(Maybe(Event,Stmt))Stmt",
        "package": "netlist",
        "partial": "Process Decl",
        "signature": "ProcessDecl Event(Maybe(Event,Stmt))Stmt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Range",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Range ConstExpr ConstExpr",
        "fct-source": "src/Language-Netlist-AST.html#Range",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Range",
        "normalized": "",
        "package": "netlist",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:RotateLeft",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "RotateLeft",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "RotateLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "RotateLeft",
        "normalized": "",
        "package": "netlist",
        "partial": "Rotate Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:RotateRight",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "RotateRight",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "RotateRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "RotateRight",
        "normalized": "",
        "package": "netlist",
        "partial": "Rotate Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Seq",
      "description": {
        "fct-descr": "\u003cp\u003emultiple statements in sequence\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Seq [Stmt]",
        "fct-source": "src/Language-Netlist-AST.html#Stmt",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "multiple statements in sequence",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Seq",
        "normalized": "Seq[Stmt]",
        "package": "netlist",
        "partial": "Seq",
        "signature": "Seq[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftLeft",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ShiftLeft",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "ShiftLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ShiftLeft",
        "normalized": "",
        "package": "netlist",
        "partial": "Shift Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftLeftArith",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ShiftLeftArith",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "ShiftLeftArith"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ShiftLeftArith",
        "normalized": "",
        "package": "netlist",
        "partial": "Shift Left Arith",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftRight",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ShiftRight",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "ShiftRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ShiftRight",
        "normalized": "",
        "package": "netlist",
        "partial": "Shift Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:ShiftRightArith",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "ShiftRightArith",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "ShiftRightArith"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "ShiftRightArith",
        "normalized": "",
        "package": "netlist",
        "partial": "Shift Right Arith",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:T",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "T",
        "fct-source": "src/Language-Netlist-AST.html#Bit",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "T",
        "normalized": "",
        "package": "netlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Times",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Times",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Times",
        "normalized": "",
        "package": "netlist",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:U",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "U",
        "fct-source": "src/Language-Netlist-AST.html#Bit",
        "fct-type": "function",
        "title": "U"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "U",
        "normalized": "",
        "package": "netlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UAnd",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UAnd",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UAnd",
        "normalized": "",
        "package": "netlist",
        "partial": "UAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UMinus",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UMinus",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UMinus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UMinus",
        "normalized": "",
        "package": "netlist",
        "partial": "UMinus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UNand",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UNand",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UNand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UNand",
        "normalized": "",
        "package": "netlist",
        "partial": "UNand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UNor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UNor",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UNor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UNor",
        "normalized": "",
        "package": "netlist",
        "partial": "UNor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UOr",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UOr",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UOr",
        "normalized": "",
        "package": "netlist",
        "partial": "UOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UPlus",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UPlus",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UPlus",
        "normalized": "",
        "package": "netlist",
        "partial": "UPlus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UXnor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UXnor",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UXnor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UXnor",
        "normalized": "",
        "package": "netlist",
        "partial": "UXnor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:UXor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "UXor",
        "fct-source": "src/Language-Netlist-AST.html#UnaryOp",
        "fct-type": "function",
        "title": "UXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "UXor",
        "normalized": "",
        "package": "netlist",
        "partial": "UXor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Xnor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Xnor",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Xnor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Xnor",
        "normalized": "",
        "package": "netlist",
        "partial": "Xnor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Xor",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Xor",
        "fct-source": "src/Language-Netlist-AST.html#BinaryOp",
        "fct-type": "function",
        "title": "Xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Xor",
        "normalized": "",
        "package": "netlist",
        "partial": "Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:Z",
      "description": {
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Z",
        "fct-source": "src/Language-Netlist-AST.html#Bit",
        "fct-type": "function",
        "title": "Z"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "Z",
        "normalized": "",
        "package": "netlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_decls",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "[Decl]",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "module_decls"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "module_decls",
        "normalized": "[Decl]",
        "package": "netlist",
        "partial": "",
        "signature": "[Decl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_inputs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "[(Ident, Maybe Range)]",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "module_inputs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "module_inputs",
        "normalized": "[(Ident,Maybe Range)]",
        "package": "netlist",
        "partial": "",
        "signature": "[(Ident,Maybe Range)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "Ident",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "module_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "module_name",
        "normalized": "",
        "package": "netlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_outputs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "[(Ident, Maybe Range)]",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "module_outputs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "module_outputs",
        "normalized": "[(Ident,Maybe Range)]",
        "package": "netlist",
        "partial": "",
        "signature": "[(Ident,Maybe Range)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-AST.html#v:module_statics",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Netlist.AST",
        "fct-package": "netlist",
        "fct-signature": "[(Ident, ConstExpr)]",
        "fct-source": "src/Language-Netlist-AST.html#Module",
        "fct-type": "function",
        "title": "module_statics"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist AST",
        "module": "Language.Netlist.AST",
        "name": "module_statics",
        "normalized": "[(Ident,ConstExpr)]",
        "package": "netlist",
        "partial": "",
        "signature": "[(Ident,ConstExpr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Inline.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple inliner for a Netlist AST (\u003ccode\u003eLanguage.Netlist.AST\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Netlist.Inline",
        "fct-package": "netlist",
        "fct-signature": "module",
        "fct-source": "src/Language-Netlist-Inline.html",
        "fct-type": "module",
        "title": "Inline"
      },
      "index": {
        "description": "simple inliner for Netlist AST Language.Netlist.AST",
        "hierarchy": "Language Netlist Inline",
        "module": "Language.Netlist.Inline",
        "name": "Inline",
        "normalized": "",
        "package": "netlist",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Inline.html#v:inlineModule",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a new module in which some variables have been inlined.  An\n expression is inlined (and it's declaration removed) if it only used in one\n place in the entire module.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.Inline",
        "fct-package": "netlist",
        "fct-signature": "Module -\u003e Module",
        "fct-source": "src/Language-Netlist-Inline.html#inlineModule",
        "fct-type": "function",
        "title": "inlineModule"
      },
      "index": {
        "description": "Produce new module in which some variables have been inlined An expression is inlined and it declaration removed if it only used in one place in the entire module",
        "hierarchy": "Language Netlist Inline",
        "module": "Language.Netlist.Inline",
        "name": "inlineModule",
        "normalized": "Module-\u003eModule",
        "package": "netlist",
        "partial": "Module",
        "signature": "Module-\u003eModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for constructing Netlist AST elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "module",
        "fct-source": "src/Language-Netlist-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Utility functions for constructing Netlist AST elements",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "Util",
        "normalized": "",
        "package": "netlist",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#t:Direction",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "data",
        "fct-source": "src/Language-Netlist-Util.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "Direction",
        "normalized": "",
        "package": "netlist",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:Down",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Down",
        "fct-source": "src/Language-Netlist-Util.html#Direction",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "Down",
        "normalized": "",
        "package": "netlist",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:Up",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Up",
        "fct-source": "src/Language-Netlist-Util.html#Direction",
        "fct-type": "function",
        "title": "Up"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "Up",
        "normalized": "",
        "package": "netlist",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:exprConcat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a list of expressions, unless there is just one expression.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "[Expr] -\u003e Expr",
        "fct-source": "src/Language-Netlist-Util.html#exprConcat",
        "fct-type": "function",
        "title": "exprConcat"
      },
      "index": {
        "description": "Concatenate list of expressions unless there is just one expression",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "exprConcat",
        "normalized": "[Expr]-\u003eExpr",
        "package": "netlist",
        "partial": "Concat",
        "signature": "[Expr]-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:generateReg",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a process declaration for a generic register based on the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the register name (as an expression)\n\u003c/li\u003e\u003cli\u003e clock expression\n\u003c/li\u003e\u003cli\u003e width of the register\n\u003c/li\u003e\u003cli\u003e optional asynchronous reset and initial value\n\u003c/li\u003e\u003cli\u003e optional clock enable\n\u003c/li\u003e\u003cli\u003e optional synchronous restart and initial value\n\u003c/li\u003e\u003cli\u003e optional load enable\n\u003c/li\u003e\u003cli\u003e when enabled, the expression to assign to the identifier\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can implement a shift register by passing in a concatenation for the\n register expression and the input expression, though that is not compatible\n with VHDL.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Expr -\u003e Expr -\u003e Maybe (Expr, Expr) -\u003e Maybe (Expr, Expr) -\u003e Maybe Expr -\u003e Expr -\u003e Decl",
        "fct-source": "src/Language-Netlist-Util.html#generateReg",
        "fct-type": "function",
        "title": "generateReg"
      },
      "index": {
        "description": "generate process declaration for generic register based on the following the register name as an expression clock expression width of the register optional asynchronous reset and initial value optional clock enable optional synchronous restart and initial value optional load enable when enabled the expression to assign to the identifier You can implement shift register by passing in concatenation for the register expression and the input expression though that is not compatible with VHDL",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "generateReg",
        "normalized": "Expr-\u003eExpr-\u003eMaybe(Expr,Expr)-\u003eMaybe(Expr,Expr)-\u003eMaybe Expr-\u003eExpr-\u003eDecl",
        "package": "netlist",
        "partial": "Reg",
        "signature": "Expr-\u003eExpr-\u003eMaybe(Expr,Expr)-\u003eMaybe(Expr,Expr)-\u003eMaybe Expr-\u003eExpr-\u003eDecl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:makeRange",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a direction and size, maybe generate a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e, where a size of 1\n yields \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Direction -\u003e Size -\u003e Maybe Range",
        "fct-source": "src/Language-Netlist-Util.html#makeRange",
        "fct-type": "function",
        "title": "makeRange"
      },
      "index": {
        "description": "Given direction and size maybe generate Range where size of yields Nothing",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "makeRange",
        "normalized": "Direction-\u003eSize-\u003eMaybe Range",
        "package": "netlist",
        "partial": "Range",
        "signature": "Direction-\u003eSize-\u003eMaybe Range"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:sizedInteger",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Int -\u003e Integer -\u003e Expr",
        "fct-source": "src/Language-Netlist-Util.html#sizedInteger",
        "fct-type": "function",
        "title": "sizedInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "sizedInteger",
        "normalized": "Int-\u003eInteger-\u003eExpr",
        "package": "netlist",
        "partial": "Integer",
        "signature": "Int-\u003eInteger-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:sizedIntegral",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Int -\u003e a -\u003e Expr",
        "fct-source": "src/Language-Netlist-Util.html#sizedIntegral",
        "fct-type": "function",
        "title": "sizedIntegral"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "sizedIntegral",
        "normalized": "Int-\u003ea-\u003eExpr",
        "package": "netlist",
        "partial": "Integral",
        "signature": "Int-\u003ea-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:statements",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e statement from a list of statements, unless there is just one\n statement.\n\u003c/p\u003e",
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "[Stmt] -\u003e Stmt",
        "fct-source": "src/Language-Netlist-Util.html#statements",
        "fct-type": "function",
        "title": "statements"
      },
      "index": {
        "description": "Make Seq statement from list of statements unless there is just one statement",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "statements",
        "normalized": "[Stmt]-\u003eStmt",
        "package": "netlist",
        "partial": "",
        "signature": "[Stmt]-\u003eStmt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:unsizedInteger",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "Integer -\u003e Expr",
        "fct-source": "src/Language-Netlist-Util.html#unsizedInteger",
        "fct-type": "function",
        "title": "unsizedInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "unsizedInteger",
        "normalized": "Integer-\u003eExpr",
        "package": "netlist",
        "partial": "Integer",
        "signature": "Integer-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netlist/docs/Language-Netlist-Util.html#v:unsizedIntegral",
      "description": {
        "fct-module": "Language.Netlist.Util",
        "fct-package": "netlist",
        "fct-signature": "a -\u003e Expr",
        "fct-source": "src/Language-Netlist-Util.html#unsizedIntegral",
        "fct-type": "function",
        "title": "unsizedIntegral"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Netlist Util",
        "module": "Language.Netlist.Util",
        "name": "unsizedIntegral",
        "normalized": "a-\u003eExpr",
        "package": "netlist",
        "partial": "Integral",
        "signature": "a-\u003eExpr"
      }
    }
  }
]