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
        "word": "vhdl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVHDL pretty-printing instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.VHDL.AST.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST-Ppr.html",
          "type": "module"
        },
        "index": {
          "description": "VHDL pretty-printing instances",
          "hierarchy": "Language VHDL AST Ppr",
          "module": "Language.VHDL.AST.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "partial": "Ppr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST-Ppr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA VHDL 93 subset AST (Abstract Syntax Tree), coded so that it can be easy \n to extend, please see doc\u003cem\u003eVHDL\u003c/em\u003evhdl93-syntax.html as reference \n in order to extend it (this AST is based on that grammar)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.VHDL.AST",
          "name": "AST",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html",
          "type": "module"
        },
        "index": {
          "description": "VHDL subset AST Abstract Syntax Tree coded so that it can be easy to extend please see doc VHDL vhdl93-syntax.html as reference in order to extend it this AST is based on that grammar",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "AST",
          "package": "vhdl",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactual_designator\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ActualDesig",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ActualDesig",
          "type": "data"
        },
        "index": {
          "description": "actual designator",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ActualDesig",
          "package": "vhdl",
          "partial": "Actual Desig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ActualDesig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactual_part\n We only accept an actual_designator,\n  \u003ca\u003efunction_name ( actual_designator )\u003c/a\u003e and \u003ca\u003etype_mark ( actual_designator )\u003c/a\u003e\n  are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ActualPart",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ActualPart",
          "type": "type"
        },
        "index": {
          "description": "actual part We only accept an actual designator function name actual designator and type mark actual designator are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ActualPart",
          "package": "vhdl",
          "partial": "Actual Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ActualPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earchitecture_body \n [ ARCHITECTURE ] and [ architecture_simple_name ] are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ArchBody",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ArchBody",
          "type": "data"
        },
        "index": {
          "description": "architecture body ARCHITECTURE and architecture simple name are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ArchBody",
          "package": "vhdl",
          "partial": "Arch Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ArchBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray_type_definition\n     unconstrained_array_definition\n     constrained_array_definition\n A TypeMark is used instead of a subtype_indication. If subtyping is required,\n declare a subtype explicitly.  \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ArrayTypeDef",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ArrayTypeDef",
          "type": "data"
        },
        "index": {
          "description": "array type definition unconstrained array definition constrained array definition TypeMark is used instead of subtype indication If subtyping is required declare subtype explicitly",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ArrayTypeDef",
          "package": "vhdl",
          "partial": "Array Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ArrayTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassociation_element\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "AssocElem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#AssocElem",
          "type": "data"
        },
        "index": {
          "description": "association element",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "AssocElem",
          "package": "vhdl",
          "partial": "Assoc Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:AssocElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattribute_name\n   signatures are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "AttribName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#AttribName",
          "type": "data"
        },
        "index": {
          "description": "attribute name signatures are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "AttribName",
          "package": "vhdl",
          "partial": "Attrib Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:AttribName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock_declarative_item\n Only subprogram bodies and signal declarations are allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "BlockDecItem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#BlockDecItem",
          "type": "data"
        },
        "index": {
          "description": "block declarative item Only subprogram bodies and signal declarations are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "BlockDecItem",
          "package": "vhdl",
          "partial": "Block Dec Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:BlockDecItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock_statement\n Generics are not supported\n The port_clause (with only signals) and port_map_aspect are mandatory\n The ending [ block_label ] is not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "BlockSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#BlockSm",
          "type": "data"
        },
        "index": {
          "description": "block statement Generics are not supported The port clause with only signals and port map aspect are mandatory The ending block label is not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "BlockSm",
          "package": "vhdl",
          "partial": "Block Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:BlockSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecase_statement_alternative\n it is incorrect to have an empty [Choice]\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "CaseSmAlt",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#CaseSmAlt",
          "type": "data"
        },
        "index": {
          "description": "case statement alternative it is incorrect to have an empty Choice",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CaseSmAlt",
          "package": "vhdl",
          "partial": "Case Sm Alt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:CaseSmAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echoice\n although any expression is allowed the grammar specfically only allows \n simple_expressions (not covered in this AST) \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Choice",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Choice",
          "type": "data"
        },
        "index": {
          "description": "choice although any expression is allowed the grammar specfically only allows simple expressions not covered in this AST",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Choice",
          "package": "vhdl",
          "partial": "Choice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomponent_instantiation_statement\n No generics supported\n The port map aspect is mandatory\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "CompInsSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#CompInsSm",
          "type": "data"
        },
        "index": {
          "description": "component instantiation statement No generics supported The port map aspect is mandatory",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CompInsSm",
          "package": "vhdl",
          "partial": "Comp Ins Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:CompInsSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcurrent_signal_assignment_statement\n Only conditional_signal_assignment is allowed (without options)\n The LHS (targets) are simply signal names, no aggregates\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ConSigAssignSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ConSigAssignSm",
          "type": "data"
        },
        "index": {
          "description": "concurrent signal assignment statement Only conditional signal assignment is allowed without options The LHS targets are simply signal names no aggregates",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConSigAssignSm",
          "package": "vhdl",
          "partial": "Con Sig Assign Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConSigAssignSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional_waveforms \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ConWforms",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ConWforms",
          "type": "data"
        },
        "index": {
          "description": "conditional waveforms",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConWforms",
          "package": "vhdl",
          "partial": "Con Wforms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConWforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcurrent_statement\n only block statements, component instantiations and signal assignments \n are allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ConcSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "data"
        },
        "index": {
          "description": "concurrent statement only block statements component instantiations and signal assignments are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConcSm",
          "package": "vhdl",
          "partial": "Conc Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConcSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConstDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ConstDec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConstDec",
          "package": "vhdl",
          "partial": "Const Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConstDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstraint\n Only index constraints are allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Constraint",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Constraint",
          "type": "type"
        },
        "index": {
          "description": "constraint Only index constraints are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Constraint",
          "package": "vhdl",
          "partial": "Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ContextItem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ContextItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ContextItem",
          "package": "vhdl",
          "partial": "Context Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ContextItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "DesignFile",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#DesignFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "DesignFile",
          "package": "vhdl",
          "partial": "Design File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:DesignFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ediscrete_range\n   only ranges are allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "DiscreteRange",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#DiscreteRange",
          "type": "type"
        },
        "index": {
          "description": "discrete range only ranges are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "DiscreteRange",
          "package": "vhdl",
          "partial": "Discrete Range",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:DiscreteRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelement_association\n   only one choice is allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ElemAssoc",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ElemAssoc",
          "type": "data"
        },
        "index": {
          "description": "element association only one choice is allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElemAssoc",
          "package": "vhdl",
          "partial": "Elem Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElemAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelement_declaration \n multi-identifier element declarations not allowed\n element_subtype_definition is simplified to a type_mark\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ElementDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ElementDec",
          "type": "data"
        },
        "index": {
          "description": "element declaration multi-identifier element declarations not allowed element subtype definition is simplified to type mark",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElementDec",
          "package": "vhdl",
          "partial": "Element Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElementDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehelper type, it doesn't exist in the origianl grammar\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Else",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Else",
          "type": "data"
        },
        "index": {
          "description": "helper type it doesn exist in the origianl grammar",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Else",
          "package": "vhdl",
          "partial": "Else",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehelper type, they doesn't exist in the origianl grammar\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ElseIf",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ElseIf",
          "type": "data"
        },
        "index": {
          "description": "helper type they doesn exist in the origianl grammar",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElseIf",
          "package": "vhdl",
          "partial": "Else If",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElseIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "EntityDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#EntityDec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "EntityDec",
          "package": "vhdl",
          "partial": "Entity Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:EntityDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumeration_type_definition \n   enumeration literals can only be identifiers\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "EnumTypeDef",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#EnumTypeDef",
          "type": "data"
        },
        "index": {
          "description": "enumeration type definition enumeration literals can only be identifiers",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "EnumTypeDef",
          "package": "vhdl",
          "partial": "Enum Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:EnumTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexpression, instead of creating an AST like the grammar \n (see commented section below) we made our own expressions which are \n easier to handle, but which don't don't show operand precedence\n (that is a responsibility of the pretty printer)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Expr",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "expression instead of creating an AST like the grammar see commented section below we made our own expressions which are easier to handle but which don don show operand precedence that is responsibility of the pretty printer",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Expr",
          "package": "vhdl",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction_call\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "FCall",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#FCall",
          "type": "data"
        },
        "index": {
          "description": "function call",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "FCall",
          "package": "vhdl",
          "partial": "FCall",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:FCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformal_part\n We only accept a formal_designator (which is a name after all),\n in the forme of simple name (no need for selected names)   \n  \u003ca\u003efunction_name ( formal_designator )\u003c/a\u003e and \u003ca\u003etype_mark ( formal_designator )\u003c/a\u003e\n  are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "FormalPart",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#FormalPart",
          "type": "type"
        },
        "index": {
          "description": "formal part We only accept formal designator which is name after all in the forme of simple name no need for selected names function name formal designator and type mark formal designator are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "FormalPart",
          "package": "vhdl",
          "partial": "Formal Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:FormalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "GenSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#GenSm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "GenSm",
          "package": "vhdl",
          "partial": "Gen Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:GenSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "GenerateSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#GenerateSm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "GenerateSm",
          "package": "vhdl",
          "partial": "Generate Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:GenerateSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface_signal_declaration\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n  at once\n The Mode is mandatory\n Bus is not allowed \n Preasigned values are not allowed\n Subtype indications are not allowed, just a typemark \n Constraints are not allowed: just add a new type with the constarint\n  in ForSyDe.vhd if it is required\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "IfaceSigDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#IfaceSigDec",
          "type": "data"
        },
        "index": {
          "description": "interface signal declaration We don allow the id1 id2 id3 syntax only one identifier is allowed at once The Mode is mandatory Bus is not allowed Preasigned values are not allowed Subtype indications are not allowed just typemark Constraints are not allowed just add new type with the constarint in ForSyDe.vhd if it is required",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfaceSigDec",
          "package": "vhdl",
          "partial": "Iface Sig Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IfaceSigDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface_variable_declaration\n [variable] is not allowed\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n Mode is not allowed\n Resolution functions and constraints are not allowed, thus a TypeMark\n  is used instead of a subtype_indication. If subtyping is required,\n  declare a subtype explicitly.\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "IfaceVarDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#IfaceVarDec",
          "type": "data"
        },
        "index": {
          "description": "interface variable declaration variable is not allowed We don allow the id1 id2 id3 syntax only one identifier is allowed Mode is not allowed Resolution functions and constraints are not allowed thus TypeMark is used instead of subtype indication If subtyping is required declare subtype explicitly",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfaceVarDec",
          "package": "vhdl",
          "partial": "Iface Var Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IfaceVarDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindex_constraint\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "IndexConstraint",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#IndexConstraint",
          "type": "data"
        },
        "index": {
          "description": "index constraint",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IndexConstraint",
          "package": "vhdl",
          "partial": "Index Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IndexConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindexed_name\n note that according to the VHDL93 grammar the index list cannot be empty \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "IndexedName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#IndexedName",
          "type": "data"
        },
        "index": {
          "description": "indexed name note that according to the VHDL93 grammar the index list cannot be empty",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IndexedName",
          "package": "vhdl",
          "partial": "Indexed Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IndexedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstantiated_unit\n Only Entities are allowed and their architecture cannot be specified\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "InsUnit",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#InsUnit",
          "type": "data"
        },
        "index": {
          "description": "instantiated unit Only Entities are allowed and their architecture cannot be specified",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "InsUnit",
          "package": "vhdl",
          "partial": "Ins Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:InsUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger_type_definition \n   integer literals can only be numbers\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "IntegerTypeDef",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#IntegerTypeDef",
          "type": "data"
        },
        "index": {
          "description": "integer type definition integer literals can only be numbers",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IntegerTypeDef",
          "package": "vhdl",
          "partial": "Integer Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IntegerTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elabel\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Label",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Label",
          "type": "type"
        },
        "index": {
          "description": "label",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Label",
          "package": "vhdl",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "LibraryUnit",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#LibraryUnit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "LibraryUnit",
          "package": "vhdl",
          "partial": "Library Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:LibraryUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliteral\n Literals are expressed as a string (remember we are generating\n code, not parsing)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Literal",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Literal",
          "type": "type"
        },
        "index": {
          "description": "literal Literals are expressed as string remember we are generating code not parsing",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Literal",
          "package": "vhdl",
          "partial": "Literal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emode\n INOUT | BUFFER | LINKAGE are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Mode",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "mode INOUT BUFFER LINKAGE are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Mode",
          "package": "vhdl",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eport_map_aspect\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "PMapAspect",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#PMapAspect",
          "type": "newtype"
        },
        "index": {
          "description": "port map aspect",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PMapAspect",
          "package": "vhdl",
          "partial": "PMap Aspect",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PMapAspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage_body\n  [ PACKAGE ] and [ package_simple_name ] are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "PackageBody",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#PackageBody",
          "type": "data"
        },
        "index": {
          "description": "package body PACKAGE and package simple name are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageBody",
          "package": "vhdl",
          "partial": "Package Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly subprogram_body is allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "PackageBodyDecItem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#PackageBodyDecItem",
          "type": "type"
        },
        "index": {
          "description": "only subprogram body is allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageBodyDecItem",
          "package": "vhdl",
          "partial": "Package Body Dec Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageBodyDecItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage_declaration\n  [ PACKAGE ] and [ package_simple_name ] are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "PackageDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#PackageDec",
          "type": "data"
        },
        "index": {
          "description": "package declaration PACKAGE and package simple name are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageDec",
          "package": "vhdl",
          "partial": "Package Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage_declarative_item\n only type declarations, subtype declarations and subprogram specifications \n (working as subprogram_declaration) allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "PackageDecItem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#PackageDecItem",
          "type": "data"
        },
        "index": {
          "description": "package declarative item only type declarations subtype declarations and subprogram specifications working as subprogram declaration allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageDecItem",
          "package": "vhdl",
          "partial": "Package Dec Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageDecItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprefix\n  only names (no function calls)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Prefix",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Prefix",
          "type": "type"
        },
        "index": {
          "description": "prefix only names no function calls",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Prefix",
          "package": "vhdl",
          "partial": "Prefix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess_statement\n   The label is mandatory\n   Only simple names are accepted in the sensitivity list\n   No declarative part is allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "ProcSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#ProcSm",
          "type": "data"
        },
        "index": {
          "description": "process statement The label is mandatory Only simple names are accepted in the sensitivity list No declarative part is allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ProcSm",
          "package": "vhdl",
          "partial": "Proc Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ProcSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erange\n   the direction must always be \"to\"\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Range",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Range",
          "type": "data"
        },
        "index": {
          "description": "range the direction must always be to",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Range",
          "package": "vhdl",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord_type_definition\n [ record_type_simple_name ] not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "RecordTypeDef",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#RecordTypeDef",
          "type": "data"
        },
        "index": {
          "description": "record type definition record type simple name not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "RecordTypeDef",
          "package": "vhdl",
          "partial": "Record Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:RecordTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselected_name\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SelectedName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SelectedName",
          "type": "data"
        },
        "index": {
          "description": "selected name",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SelectedName",
          "package": "vhdl",
          "partial": "Selected Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SelectedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esequential_statement\n Only If, case, return, for loops, assignment, \u003ccode\u003ewait for\u003c/code\u003e procedure calls\n allowed.\n Only for loops are allowed (thus loop_statement doesn't exist) and cannot\n be provided labels.\n The target cannot be an aggregate.\n General wait statements are not allowed, only \u003ccode\u003ewait for\u003c/code\u003e\n It is incorrect to have an empty [CaseSmAlt]\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SeqSm",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "data"
        },
        "index": {
          "description": "sequential statement Only If case return for loops assignment wait for procedure calls allowed Only for loops are allowed thus loop statement doesn exist and cannot be provided labels The target cannot be an aggregate General wait statements are not allowed only wait for It is incorrect to have an empty CaseSmAlt",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SeqSm",
          "package": "vhdl",
          "partial": "Seq Sm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SeqSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esignal_declaration\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n  at once\n Resolution functions and constraints are not allowed, thus a TypeMark\n  is used instead of a subtype_indication\n Signal kinds are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SigDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SigDec",
          "type": "data"
        },
        "index": {
          "description": "signal declaration We don allow the id1 id2 id3 syntax only one identifier is allowed at once Resolution functions and constraints are not allowed thus TypeMark is used instead of subtype indication Signal kinds are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SigDec",
          "package": "vhdl",
          "partial": "Sig Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SigDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimple_name\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SimpleName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SimpleName",
          "type": "type"
        },
        "index": {
          "description": "simple name",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SimpleName",
          "package": "vhdl",
          "partial": "Simple Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SimpleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eslice_name\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SliceName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SliceName",
          "type": "data"
        },
        "index": {
          "description": "slice name",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SliceName",
          "package": "vhdl",
          "partial": "Slice Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SliceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubprogram_body\n No subprogram kind nor designator is allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SubProgBody",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubProgBody",
          "type": "data"
        },
        "index": {
          "description": "subprogram body No subprogram kind nor designator is allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubProgBody",
          "package": "vhdl",
          "partial": "Sub Prog Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubprogram_declarative_item\n   only varaible declarations are allowed.\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SubProgDecItem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubProgDecItem",
          "type": "data"
        },
        "index": {
          "description": "subprogram declarative item only varaible declarations are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubProgDecItem",
          "package": "vhdl",
          "partial": "Sub Prog Dec Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgDecItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubprogram_specification\n Only Functions are allowed\n [Pure | Impure] is not allowed\n Only an identifier is valid as the designator\n In the formal parameter list only variable declarations are accepted  \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SubProgSpec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubProgSpec",
          "type": "data"
        },
        "index": {
          "description": "subprogram specification Only Functions are allowed Pure Impure is not allowed Only an identifier is valid as the designator In the formal parameter list only variable declarations are accepted",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubProgSpec",
          "package": "vhdl",
          "partial": "Sub Prog Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SubtypeConstraint",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubtypeConstraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubtypeConstraint",
          "package": "vhdl",
          "partial": "Subtype Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtype-declaration\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SubtypeDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubtypeDec",
          "type": "data"
        },
        "index": {
          "description": "subtype-declaration",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubtypeDec",
          "package": "vhdl",
          "partial": "Subtype Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtype_indication\n   resolution functions are not permitted\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "SubtypeIn",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#SubtypeIn",
          "type": "data"
        },
        "index": {
          "description": "subtype indication resolution functions are not permitted",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubtypeIn",
          "package": "vhdl",
          "partial": "Subtype In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esuffix\n no character or operator symbols are accepted\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Suffix",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Suffix",
          "type": "data"
        },
        "index": {
          "description": "suffix no character or operator symbols are accepted",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Suffix",
          "package": "vhdl",
          "partial": "Suffix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype_declaration\n only full_type_declarations are allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "TypeDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#TypeDec",
          "type": "data"
        },
        "index": {
          "description": "type declaration only full type declarations are allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TypeDec",
          "package": "vhdl",
          "partial": "Type Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype_declaration\n only composite types and enumeration types (a specific scalar type)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "TypeDef",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#TypeDef",
          "type": "data"
        },
        "index": {
          "description": "type declaration only composite types and enumeration types specific scalar type",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TypeDef",
          "package": "vhdl",
          "partial": "Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype_mark\n We don't distinguish between type names and subtype names\n We dont' support selected names, only simple names because we won't need\n name selection (i.e. Use clauses will make name selection unnecesary)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "TypeMark",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#TypeMark",
          "type": "type"
        },
        "index": {
          "description": "type mark We don distinguish between type names and subtype names We dont support selected names only simple names because we won need name selection i.e Use clauses will make name selection unnecesary",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TypeMark",
          "package": "vhdl",
          "partial": "Type Mark",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "VHDLId",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#VHDLId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "VHDLId",
          "package": "vhdl",
          "partial": "VHDLId",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VHDLId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename\n operator_names are not allowed \n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "VHDLName",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "data"
        },
        "index": {
          "description": "name operator names are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "VHDLName",
          "package": "vhdl",
          "partial": "VHDLName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VHDLName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable_declaration\n   identifier lists are not allowed\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "VarDec",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#VarDec",
          "type": "data"
        },
        "index": {
          "description": "variable declaration identifier lists are not allowed",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "VarDec",
          "package": "vhdl",
          "partial": "Var Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VarDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewaveform\n although it is possible to leave [Expr] empty, that's obviously not\n valid VHDL waveform\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "Wform",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#Wform",
          "type": "data"
        },
        "index": {
          "description": "waveform although it is possible to leave Expr empty that obviously not valid VHDL waveform",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Wform",
          "package": "vhdl",
          "partial": "Wform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Wform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewaveform_element\n   Null is not accepted\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "WformElem",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#WformElem",
          "type": "data"
        },
        "index": {
          "description": "waveform element Null is not accepted",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "WformElem",
          "package": "vhdl",
          "partial": "Wform Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:WformElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper type, it doesn't exist in the VHDL grammar\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "When",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#When",
          "type": "newtype"
        },
        "index": {
          "description": "Helper type it doesn exist in the VHDL grammar",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "When",
          "package": "vhdl",
          "partial": "When",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper type, it doesn't exist in the VHDL grammar\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "WhenElse",
          "package": "vhdl",
          "source": "src/Language-VHDL-AST.html#WhenElse",
          "type": "data"
        },
        "index": {
          "description": "Helper type it doesn exist in the VHDL grammar",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "WhenElse",
          "package": "vhdl",
          "partial": "When Else",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:WhenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":&:",
          "package": "vhdl",
          "signature": "Expr :&: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":&:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":**:",
          "package": "vhdl",
          "signature": "Expr :**: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":**:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":*:",
          "package": "vhdl",
          "signature": "Expr :*: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":*:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":+:",
          "package": "vhdl",
          "signature": "Expr :+: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":+:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":-:",
          "package": "vhdl",
          "signature": "Expr :-: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":-:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":/=:",
          "package": "vhdl",
          "signature": "Expr :/=: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":/=:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-47--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":/:",
          "package": "vhdl",
          "signature": "Expr :/: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":/:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-47-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":\u003c==:",
          "package": "vhdl",
          "signature": "VHDLName :\u003c==: ConWforms",
          "source": "src/Language-VHDL-AST.html#ConSigAssignSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":\u003c==:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60--61--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":\u003c=:",
          "package": "vhdl",
          "signature": "Expr :\u003c=: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":\u003c=:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":\u003c:",
          "package": "vhdl",
          "signature": "Expr :\u003c: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":\u003c:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":=",
          "package": "vhdl",
          "signature": "VHDLName := Expr",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":=",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":=\u003e:",
          "package": "vhdl",
          "signature": ": ActualPart",
          "source": "src/Language-VHDL-AST.html#AssocElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":=\u003e:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":=:",
          "package": "vhdl",
          "signature": "Expr :=: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":=:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":\u003e=:",
          "package": "vhdl",
          "signature": "Expr :\u003e=: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":\u003e=:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-62--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":\u003e:",
          "package": "vhdl",
          "signature": "Expr :\u003e: Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":\u003e:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": ":.:",
          "package": "vhdl",
          "signature": "Prefix :.: Suffix",
          "source": "src/Language-VHDL-AST.html#SelectedName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": ":.:",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ADExpr",
          "package": "vhdl",
          "signature": "ADExpr Expr",
          "source": "src/Language-VHDL-AST.html#ActualDesig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ADExpr",
          "package": "vhdl",
          "partial": "ADExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ADExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ADName",
          "package": "vhdl",
          "signature": "ADName VHDLName",
          "source": "src/Language-VHDL-AST.html#ActualDesig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ADName",
          "package": "vhdl",
          "partial": "ADName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ADName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Abs",
          "package": "vhdl",
          "signature": "Abs Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Abs",
          "package": "vhdl",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Aggregate",
          "package": "vhdl",
          "signature": "Aggregate [ElemAssoc]",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Aggregate",
          "normalized": "Aggregate[ElemAssoc]",
          "package": "vhdl",
          "partial": "Aggregate",
          "signature": "Aggregate[ElemAssoc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "All",
          "package": "vhdl",
          "signature": "All",
          "source": "src/Language-VHDL-AST.html#Suffix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "All",
          "package": "vhdl",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "And",
          "package": "vhdl",
          "signature": "And Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "And",
          "package": "vhdl",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ArchBody",
          "package": "vhdl",
          "signature": "ArchBody VHDLId VHDLName [BlockDecItem] [ConcSm]",
          "source": "src/Language-VHDL-AST.html#ArchBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ArchBody",
          "normalized": "ArchBody VHDLId VHDLName[BlockDecItem][ConcSm]",
          "package": "vhdl",
          "partial": "Arch Body",
          "signature": "ArchBody VHDLId VHDLName[BlockDecItem][ConcSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ArchBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "AttribName",
          "package": "vhdl",
          "signature": "AttribName Prefix VHDLName (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#AttribName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "AttribName",
          "package": "vhdl",
          "partial": "Attrib Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:AttribName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "AttribRange",
          "package": "vhdl",
          "signature": "AttribRange AttribName",
          "source": "src/Language-VHDL-AST.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "AttribRange",
          "package": "vhdl",
          "partial": "Attrib Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:AttribRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "BDISD",
          "package": "vhdl",
          "signature": "BDISD SigDec",
          "source": "src/Language-VHDL-AST.html#BlockDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "BDISD",
          "package": "vhdl",
          "partial": "BDISD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BDISD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "BDISPB",
          "package": "vhdl",
          "signature": "BDISPB SubProgBody",
          "source": "src/Language-VHDL-AST.html#BlockDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "BDISPB",
          "package": "vhdl",
          "partial": "BDISPB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BDISPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Basic",
          "package": "vhdl",
          "signature": "Basic String",
          "source": "src/Language-VHDL-AST.html#VHDLId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Basic",
          "package": "vhdl",
          "partial": "Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Basic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "BlockSm",
          "package": "vhdl",
          "signature": "BlockSm Label [IfaceSigDec] PMapAspect [BlockDecItem] [ConcSm]",
          "source": "src/Language-VHDL-AST.html#BlockSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "BlockSm",
          "normalized": "BlockSm Label[IfaceSigDec]PMapAspect[BlockDecItem][ConcSm]",
          "package": "vhdl",
          "partial": "Block Sm",
          "signature": "BlockSm Label[IfaceSigDec]PMapAspect[BlockDecItem][ConcSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BlockSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CSBSm",
          "package": "vhdl",
          "signature": "CSBSm BlockSm",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CSBSm",
          "package": "vhdl",
          "partial": "CSBSm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSBSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CSGSm",
          "package": "vhdl",
          "signature": "CSGSm GenerateSm",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CSGSm",
          "package": "vhdl",
          "partial": "CSGSm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSGSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CSISm",
          "package": "vhdl",
          "signature": "CSISm CompInsSm",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CSISm",
          "package": "vhdl",
          "partial": "CSISm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSISm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CSPSm",
          "package": "vhdl",
          "signature": "CSPSm ProcSm",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CSPSm",
          "package": "vhdl",
          "partial": "CSPSm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSPSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CSSASm",
          "package": "vhdl",
          "signature": "CSSASm ConSigAssignSm",
          "source": "src/Language-VHDL-AST.html#ConcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CSSASm",
          "package": "vhdl",
          "partial": "CSSASm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSSASm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CaseSm",
          "package": "vhdl",
          "signature": "CaseSm Expr [CaseSmAlt]",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CaseSm",
          "normalized": "CaseSm Expr[CaseSmAlt]",
          "package": "vhdl",
          "partial": "Case Sm",
          "signature": "CaseSm Expr[CaseSmAlt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CaseSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CaseSmAlt",
          "package": "vhdl",
          "signature": "CaseSmAlt [Choice] [SeqSm]",
          "source": "src/Language-VHDL-AST.html#CaseSmAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CaseSmAlt",
          "normalized": "CaseSmAlt[Choice][SeqSm]",
          "package": "vhdl",
          "partial": "Case Sm Alt",
          "signature": "CaseSmAlt[Choice][SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CaseSmAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ChoiceE",
          "package": "vhdl",
          "signature": "ChoiceE Expr",
          "source": "src/Language-VHDL-AST.html#Choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ChoiceE",
          "package": "vhdl",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ChoiceE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "CompInsSm",
          "package": "vhdl",
          "signature": "CompInsSm Label InsUnit PMapAspect",
          "source": "src/Language-VHDL-AST.html#CompInsSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "CompInsSm",
          "package": "vhdl",
          "partial": "Comp Ins Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CompInsSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConWforms",
          "package": "vhdl",
          "signature": "ConWforms [WhenElse] Wform (Maybe When)",
          "source": "src/Language-VHDL-AST.html#ConWforms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConWforms",
          "normalized": "ConWforms[WhenElse]Wform(Maybe When)",
          "package": "vhdl",
          "partial": "Con Wforms",
          "signature": "ConWforms[WhenElse]Wform(Maybe When)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConWforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConsArrayDef",
          "package": "vhdl",
          "signature": "ConsArrayDef IndexConstraint TypeMark",
          "source": "src/Language-VHDL-AST.html#ArrayTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConsArrayDef",
          "package": "vhdl",
          "partial": "Cons Array Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConsArrayDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConstDec",
          "package": "vhdl",
          "signature": "ConstDec VHDLId SubtypeIn (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#ConstDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConstDec",
          "package": "vhdl",
          "partial": "Const Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConstraintIndex",
          "package": "vhdl",
          "signature": "ConstraintIndex Constraint",
          "source": "src/Language-VHDL-AST.html#SubtypeConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConstraintIndex",
          "package": "vhdl",
          "partial": "Constraint Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstraintIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ConstraintRange",
          "package": "vhdl",
          "signature": "ConstraintRange Range",
          "source": "src/Language-VHDL-AST.html#SubtypeConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ConstraintRange",
          "package": "vhdl",
          "partial": "Constraint Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstraintRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "DesignFile",
          "package": "vhdl",
          "signature": "DesignFile [ContextItem] [LibraryUnit]",
          "source": "src/Language-VHDL-AST.html#DesignFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "DesignFile",
          "normalized": "DesignFile[ContextItem][LibraryUnit]",
          "package": "vhdl",
          "partial": "Design File",
          "signature": "DesignFile[ContextItem][LibraryUnit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:DesignFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "DownRange",
          "package": "vhdl",
          "signature": "DownRange Expr Expr",
          "source": "src/Language-VHDL-AST.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "DownRange",
          "package": "vhdl",
          "partial": "Down Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:DownRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ElemAssoc",
          "package": "vhdl",
          "signature": "ElemAssoc (Maybe Choice) Expr",
          "source": "src/Language-VHDL-AST.html#ElemAssoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElemAssoc",
          "package": "vhdl",
          "partial": "Elem Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElemAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ElementDec",
          "package": "vhdl",
          "signature": "ElementDec VHDLId TypeMark",
          "source": "src/Language-VHDL-AST.html#ElementDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElementDec",
          "package": "vhdl",
          "partial": "Element Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElementDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Else",
          "package": "vhdl",
          "signature": "Else [SeqSm]",
          "source": "src/Language-VHDL-AST.html#Else",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Else",
          "normalized": "Else[SeqSm]",
          "package": "vhdl",
          "partial": "Else",
          "signature": "Else[SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ElseIf",
          "package": "vhdl",
          "signature": "ElseIf Expr [SeqSm]",
          "source": "src/Language-VHDL-AST.html#ElseIf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ElseIf",
          "normalized": "ElseIf Expr[SeqSm]",
          "package": "vhdl",
          "partial": "Else If",
          "signature": "ElseIf Expr[SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElseIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "EntityDec",
          "package": "vhdl",
          "signature": "EntityDec VHDLId [IfaceSigDec]",
          "source": "src/Language-VHDL-AST.html#EntityDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "EntityDec",
          "normalized": "EntityDec VHDLId[IfaceSigDec]",
          "package": "vhdl",
          "partial": "Entity Dec",
          "signature": "EntityDec VHDLId[IfaceSigDec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:EntityDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "EnumTypeDef",
          "package": "vhdl",
          "signature": "EnumTypeDef [VHDLId]",
          "source": "src/Language-VHDL-AST.html#EnumTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "EnumTypeDef",
          "normalized": "EnumTypeDef[VHDLId]",
          "package": "vhdl",
          "partial": "Enum Type Def",
          "signature": "EnumTypeDef[VHDLId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:EnumTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Extended",
          "package": "vhdl",
          "signature": "Extended String",
          "source": "src/Language-VHDL-AST.html#VHDLId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Extended",
          "package": "vhdl",
          "partial": "Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "FCall",
          "package": "vhdl",
          "signature": "FCall VHDLName [AssocElem]",
          "source": "src/Language-VHDL-AST.html#FCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "FCall",
          "normalized": "FCall VHDLName[AssocElem]",
          "package": "vhdl",
          "partial": "FCall",
          "signature": "FCall VHDLName[AssocElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:FCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ForGn",
          "package": "vhdl",
          "signature": "ForGn VHDLId DiscreteRange",
          "source": "src/Language-VHDL-AST.html#GenSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ForGn",
          "package": "vhdl",
          "partial": "For Gn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ForGn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ForSM",
          "package": "vhdl",
          "signature": "ForSM VHDLId DiscreteRange [SeqSm]",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ForSM",
          "normalized": "ForSM VHDLId DiscreteRange[SeqSm]",
          "package": "vhdl",
          "partial": "For SM",
          "signature": "ForSM VHDLId DiscreteRange[SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ForSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Function",
          "package": "vhdl",
          "signature": "Function VHDLId [IfaceVarDec] TypeMark",
          "source": "src/Language-VHDL-AST.html#SubProgSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Function",
          "normalized": "Function VHDLId[IfaceVarDec]TypeMark",
          "package": "vhdl",
          "partial": "Function",
          "signature": "Function VHDLId[IfaceVarDec]TypeMark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "GenerateSm",
          "package": "vhdl",
          "signature": "GenerateSm Label GenSm [BlockDecItem] [ConcSm]",
          "source": "src/Language-VHDL-AST.html#GenerateSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "GenerateSm",
          "normalized": "GenerateSm Label GenSm[BlockDecItem][ConcSm]",
          "package": "vhdl",
          "partial": "Generate Sm",
          "signature": "GenerateSm Label GenSm[BlockDecItem][ConcSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:GenerateSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IUEntity",
          "package": "vhdl",
          "signature": "IUEntity VHDLName",
          "source": "src/Language-VHDL-AST.html#InsUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IUEntity",
          "package": "vhdl",
          "partial": "IUEntity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IUEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IfGn",
          "package": "vhdl",
          "signature": "IfGn Expr",
          "source": "src/Language-VHDL-AST.html#GenSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfGn",
          "package": "vhdl",
          "partial": "If Gn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfGn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IfSm",
          "package": "vhdl",
          "signature": "IfSm Expr [SeqSm] [ElseIf] (Maybe Else)",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfSm",
          "normalized": "IfSm Expr[SeqSm][ElseIf](Maybe Else)",
          "package": "vhdl",
          "partial": "If Sm",
          "signature": "IfSm Expr[SeqSm][ElseIf](Maybe Else)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IfaceSigDec",
          "package": "vhdl",
          "signature": "IfaceSigDec VHDLId Mode TypeMark",
          "source": "src/Language-VHDL-AST.html#IfaceSigDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfaceSigDec",
          "package": "vhdl",
          "partial": "Iface Sig Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfaceSigDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IfaceVarDec",
          "package": "vhdl",
          "signature": "IfaceVarDec VHDLId TypeMark",
          "source": "src/Language-VHDL-AST.html#IfaceVarDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IfaceVarDec",
          "package": "vhdl",
          "partial": "Iface Var Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfaceVarDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "In",
          "package": "vhdl",
          "signature": "In",
          "source": "src/Language-VHDL-AST.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "In",
          "package": "vhdl",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IndexConstraint",
          "package": "vhdl",
          "signature": "IndexConstraint [DiscreteRange]",
          "source": "src/Language-VHDL-AST.html#IndexConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IndexConstraint",
          "normalized": "IndexConstraint[DiscreteRange]",
          "package": "vhdl",
          "partial": "Index Constraint",
          "signature": "IndexConstraint[DiscreteRange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IndexConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IndexedName",
          "package": "vhdl",
          "signature": "IndexedName Prefix [Expr]",
          "source": "src/Language-VHDL-AST.html#IndexedName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IndexedName",
          "normalized": "IndexedName Prefix[Expr]",
          "package": "vhdl",
          "partial": "Indexed Name",
          "signature": "IndexedName Prefix[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IndexedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "IntegerTypeDef",
          "package": "vhdl",
          "signature": "IntegerTypeDef DiscreteRange",
          "source": "src/Language-VHDL-AST.html#IntegerTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "IntegerTypeDef",
          "package": "vhdl",
          "partial": "Integer Type Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IntegerTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "LUArch",
          "package": "vhdl",
          "signature": "LUArch ArchBody",
          "source": "src/Language-VHDL-AST.html#LibraryUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "LUArch",
          "package": "vhdl",
          "partial": "LUArch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUArch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "LUEntity",
          "package": "vhdl",
          "signature": "LUEntity EntityDec",
          "source": "src/Language-VHDL-AST.html#LibraryUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "LUEntity",
          "package": "vhdl",
          "partial": "LUEntity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "LUPackageBody",
          "package": "vhdl",
          "signature": "LUPackageBody PackageBody",
          "source": "src/Language-VHDL-AST.html#LibraryUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "LUPackageBody",
          "package": "vhdl",
          "partial": "LUPackage Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUPackageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "LUPackageDec",
          "package": "vhdl",
          "signature": "LUPackageDec PackageDec",
          "source": "src/Language-VHDL-AST.html#LibraryUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "LUPackageDec",
          "package": "vhdl",
          "partial": "LUPackage Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUPackageDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Library",
          "package": "vhdl",
          "signature": "Library VHDLId",
          "source": "src/Language-VHDL-AST.html#ContextItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Library",
          "package": "vhdl",
          "partial": "Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Library"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Mod",
          "package": "vhdl",
          "signature": "Mod Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Mod",
          "package": "vhdl",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "NAttribute",
          "package": "vhdl",
          "signature": "NAttribute AttribName",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "NAttribute",
          "package": "vhdl",
          "partial": "NAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "NIndexed",
          "package": "vhdl",
          "signature": "NIndexed IndexedName",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "NIndexed",
          "package": "vhdl",
          "partial": "NIndexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "NSelected",
          "package": "vhdl",
          "signature": "NSelected SelectedName",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "NSelected",
          "package": "vhdl",
          "partial": "NSelected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "NSimple",
          "package": "vhdl",
          "signature": "NSimple SimpleName",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "NSimple",
          "package": "vhdl",
          "partial": "NSimple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "NSlice",
          "package": "vhdl",
          "signature": "NSlice SliceName",
          "source": "src/Language-VHDL-AST.html#VHDLName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "NSlice",
          "package": "vhdl",
          "partial": "NSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Nand",
          "package": "vhdl",
          "signature": "Nand Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Nand",
          "package": "vhdl",
          "partial": "Nand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Nand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Neg",
          "package": "vhdl",
          "signature": "Neg Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Neg",
          "package": "vhdl",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Nor",
          "package": "vhdl",
          "signature": "Nor Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Nor",
          "package": "vhdl",
          "partial": "Nor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Nor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Not",
          "package": "vhdl",
          "signature": "Not Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Not",
          "package": "vhdl",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Open",
          "package": "vhdl",
          "signature": "Open",
          "source": "src/Language-VHDL-AST.html#ActualDesig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Open",
          "package": "vhdl",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Or",
          "package": "vhdl",
          "signature": "Or Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Or",
          "package": "vhdl",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Others",
          "package": "vhdl",
          "signature": "Others",
          "source": "src/Language-VHDL-AST.html#Choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Others",
          "package": "vhdl",
          "partial": "Others",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Others"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Out",
          "package": "vhdl",
          "signature": "Out",
          "source": "src/Language-VHDL-AST.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Out",
          "package": "vhdl",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PDISD",
          "package": "vhdl",
          "signature": "PDISD SubtypeDec",
          "source": "src/Language-VHDL-AST.html#PackageDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PDISD",
          "package": "vhdl",
          "partial": "PDISD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDISD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PDISS",
          "package": "vhdl",
          "signature": "PDISS SubProgSpec",
          "source": "src/Language-VHDL-AST.html#PackageDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PDISS",
          "package": "vhdl",
          "partial": "PDISS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDISS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PDITD",
          "package": "vhdl",
          "signature": "PDITD TypeDec",
          "source": "src/Language-VHDL-AST.html#PackageDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PDITD",
          "package": "vhdl",
          "partial": "PDITD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDITD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PMapAspect",
          "package": "vhdl",
          "signature": "PMapAspect [AssocElem]",
          "source": "src/Language-VHDL-AST.html#PMapAspect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PMapAspect",
          "normalized": "PMapAspect[AssocElem]",
          "package": "vhdl",
          "partial": "PMap Aspect",
          "signature": "PMapAspect[AssocElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PMapAspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PackageBody",
          "package": "vhdl",
          "signature": "PackageBody VHDLId [PackageBodyDecItem]",
          "source": "src/Language-VHDL-AST.html#PackageBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageBody",
          "normalized": "PackageBody VHDLId[PackageBodyDecItem]",
          "package": "vhdl",
          "partial": "Package Body",
          "signature": "PackageBody VHDLId[PackageBodyDecItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PackageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PackageDec",
          "package": "vhdl",
          "signature": "PackageDec VHDLId [PackageDecItem]",
          "source": "src/Language-VHDL-AST.html#PackageDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PackageDec",
          "normalized": "PackageDec VHDLId[PackageDecItem]",
          "package": "vhdl",
          "partial": "Package Dec",
          "signature": "PackageDec VHDLId[PackageDecItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PackageDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Pos",
          "package": "vhdl",
          "signature": "Pos Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Pos",
          "package": "vhdl",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PrimFCall",
          "package": "vhdl",
          "signature": "PrimFCall FCall",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PrimFCall",
          "package": "vhdl",
          "partial": "Prim FCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimFCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PrimLit",
          "package": "vhdl",
          "signature": "PrimLit Literal",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PrimLit",
          "package": "vhdl",
          "partial": "Prim Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "PrimName",
          "package": "vhdl",
          "signature": "PrimName VHDLName",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "PrimName",
          "package": "vhdl",
          "partial": "Prim Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ProcCall",
          "package": "vhdl",
          "signature": "ProcCall VHDLName [AssocElem]",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ProcCall",
          "normalized": "ProcCall VHDLName[AssocElem]",
          "package": "vhdl",
          "partial": "Proc Call",
          "signature": "ProcCall VHDLName[AssocElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ProcCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ProcSm",
          "package": "vhdl",
          "signature": "ProcSm Label [SimpleName] [SeqSm]",
          "source": "src/Language-VHDL-AST.html#ProcSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ProcSm",
          "normalized": "ProcSm Label[SimpleName][SeqSm]",
          "package": "vhdl",
          "partial": "Proc Sm",
          "signature": "ProcSm Label[SimpleName][SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ProcSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "RecordTypeDef",
          "package": "vhdl",
          "signature": "RecordTypeDef [ElementDec]",
          "source": "src/Language-VHDL-AST.html#RecordTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "RecordTypeDef",
          "normalized": "RecordTypeDef[ElementDec]",
          "package": "vhdl",
          "partial": "Record Type Def",
          "signature": "RecordTypeDef[ElementDec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:RecordTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Rem",
          "package": "vhdl",
          "signature": "Rem Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Rem",
          "package": "vhdl",
          "partial": "Rem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ReturnSm",
          "package": "vhdl",
          "signature": "ReturnSm (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ReturnSm",
          "package": "vhdl",
          "partial": "Return Sm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ReturnSm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Rol",
          "package": "vhdl",
          "signature": "Rol Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Rol",
          "package": "vhdl",
          "partial": "Rol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Rol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Ror",
          "package": "vhdl",
          "signature": "Ror Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Ror",
          "package": "vhdl",
          "partial": "Ror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Ror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SPCD",
          "package": "vhdl",
          "signature": "SPCD ConstDec",
          "source": "src/Language-VHDL-AST.html#SubProgDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SPCD",
          "package": "vhdl",
          "partial": "SPCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SPSB",
          "package": "vhdl",
          "signature": "SPSB SubProgBody",
          "source": "src/Language-VHDL-AST.html#SubProgDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SPSB",
          "package": "vhdl",
          "partial": "SPSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SPVD",
          "package": "vhdl",
          "signature": "SPVD VarDec",
          "source": "src/Language-VHDL-AST.html#SubProgDecItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SPVD",
          "package": "vhdl",
          "partial": "SPVD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPVD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SSimple",
          "package": "vhdl",
          "signature": "SSimple SimpleName",
          "source": "src/Language-VHDL-AST.html#Suffix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SSimple",
          "package": "vhdl",
          "partial": "SSimple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SigAssign",
          "package": "vhdl",
          "signature": "SigAssign VHDLName Wform",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SigAssign",
          "package": "vhdl",
          "partial": "Sig Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SigAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SigDec",
          "package": "vhdl",
          "signature": "SigDec VHDLId TypeMark (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#SigDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SigDec",
          "package": "vhdl",
          "partial": "Sig Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SigDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Sla",
          "package": "vhdl",
          "signature": "Sla Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Sla",
          "package": "vhdl",
          "partial": "Sla",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SliceName",
          "package": "vhdl",
          "signature": "SliceName Prefix DiscreteRange",
          "source": "src/Language-VHDL-AST.html#SliceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SliceName",
          "package": "vhdl",
          "partial": "Slice Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SliceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Sll",
          "package": "vhdl",
          "signature": "Sll Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Sll",
          "package": "vhdl",
          "partial": "Sll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Sra",
          "package": "vhdl",
          "signature": "Sra Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Sra",
          "package": "vhdl",
          "partial": "Sra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Srl",
          "package": "vhdl",
          "signature": "Srl Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Srl",
          "package": "vhdl",
          "partial": "Srl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Srl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SubProgBody",
          "package": "vhdl",
          "signature": "SubProgBody SubProgSpec [SubProgDecItem] [SeqSm]",
          "source": "src/Language-VHDL-AST.html#SubProgBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubProgBody",
          "normalized": "SubProgBody SubProgSpec[SubProgDecItem][SeqSm]",
          "package": "vhdl",
          "partial": "Sub Prog Body",
          "signature": "SubProgBody SubProgSpec[SubProgDecItem][SeqSm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubProgBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SubTypeRange",
          "package": "vhdl",
          "signature": "SubTypeRange Expr Expr",
          "source": "src/Language-VHDL-AST.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubTypeRange",
          "package": "vhdl",
          "partial": "Sub Type Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubTypeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SubtypeDec",
          "package": "vhdl",
          "signature": "SubtypeDec VHDLId SubtypeIn",
          "source": "src/Language-VHDL-AST.html#SubtypeDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubtypeDec",
          "package": "vhdl",
          "partial": "Subtype Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubtypeDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "SubtypeIn",
          "package": "vhdl",
          "signature": "SubtypeIn TypeMark (Maybe SubtypeConstraint)",
          "source": "src/Language-VHDL-AST.html#SubtypeIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "SubtypeIn",
          "package": "vhdl",
          "partial": "Subtype In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubtypeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "TDA",
          "package": "vhdl",
          "signature": "TDA ArrayTypeDef",
          "source": "src/Language-VHDL-AST.html#TypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TDA",
          "package": "vhdl",
          "partial": "TDA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "TDE",
          "package": "vhdl",
          "signature": "TDE EnumTypeDef",
          "source": "src/Language-VHDL-AST.html#TypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TDE",
          "package": "vhdl",
          "partial": "TDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "TDI",
          "package": "vhdl",
          "signature": "TDI IntegerTypeDef",
          "source": "src/Language-VHDL-AST.html#TypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TDI",
          "package": "vhdl",
          "partial": "TDI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "TDR",
          "package": "vhdl",
          "signature": "TDR RecordTypeDef",
          "source": "src/Language-VHDL-AST.html#TypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TDR",
          "package": "vhdl",
          "partial": "TDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "ToRange",
          "package": "vhdl",
          "signature": "ToRange Expr Expr",
          "source": "src/Language-VHDL-AST.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "ToRange",
          "package": "vhdl",
          "partial": "To Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ToRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "TypeDec",
          "package": "vhdl",
          "signature": "TypeDec VHDLId TypeDef",
          "source": "src/Language-VHDL-AST.html#TypeDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "TypeDec",
          "package": "vhdl",
          "partial": "Type Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TypeDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Unaffected",
          "package": "vhdl",
          "signature": "Unaffected",
          "source": "src/Language-VHDL-AST.html#Wform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Unaffected",
          "package": "vhdl",
          "partial": "Unaffected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Unaffected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "UnconsArrayDef",
          "package": "vhdl",
          "signature": "UnconsArrayDef [TypeMark] TypeMark",
          "source": "src/Language-VHDL-AST.html#ArrayTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "UnconsArrayDef",
          "normalized": "UnconsArrayDef[TypeMark]TypeMark",
          "package": "vhdl",
          "partial": "Uncons Array Def",
          "signature": "UnconsArrayDef[TypeMark]TypeMark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:UnconsArrayDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Use",
          "package": "vhdl",
          "signature": "Use SelectedName",
          "source": "src/Language-VHDL-AST.html#ContextItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Use",
          "package": "vhdl",
          "partial": "Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "VarDec",
          "package": "vhdl",
          "signature": "VarDec VHDLId SubtypeIn (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#VarDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "VarDec",
          "package": "vhdl",
          "partial": "Var Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:VarDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "WaitFor",
          "package": "vhdl",
          "signature": "WaitFor Expr",
          "source": "src/Language-VHDL-AST.html#SeqSm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "WaitFor",
          "package": "vhdl",
          "partial": "Wait For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WaitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Wform",
          "package": "vhdl",
          "signature": "Wform [WformElem]",
          "source": "src/Language-VHDL-AST.html#Wform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Wform",
          "normalized": "Wform[WformElem]",
          "package": "vhdl",
          "partial": "Wform",
          "signature": "Wform[WformElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Wform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "WformElem",
          "package": "vhdl",
          "signature": "WformElem Expr (Maybe Expr)",
          "source": "src/Language-VHDL-AST.html#WformElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "WformElem",
          "package": "vhdl",
          "partial": "Wform Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WformElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "When",
          "package": "vhdl",
          "signature": "When Expr",
          "source": "src/Language-VHDL-AST.html#When",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "When",
          "package": "vhdl",
          "partial": "When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "WhenElse",
          "package": "vhdl",
          "signature": "WhenElse Wform Expr",
          "source": "src/Language-VHDL-AST.html#WhenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "WhenElse",
          "package": "vhdl",
          "partial": "When Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WhenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Xnor",
          "package": "vhdl",
          "signature": "Xnor Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Xnor",
          "package": "vhdl",
          "partial": "Xnor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Xnor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.AST",
          "name": "Xor",
          "package": "vhdl",
          "signature": "Xor Expr Expr",
          "source": "src/Language-VHDL-AST.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "Xor",
          "package": "vhdl",
          "partial": "Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the String of a VHDL identifier\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "fromVHDLId",
          "package": "vhdl",
          "signature": "VHDLId -\u003e String",
          "source": "src/Language-VHDL-AST.html#fromVHDLId",
          "type": "function"
        },
        "index": {
          "description": "Obtain the String of VHDL identifier",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "fromVHDLId",
          "normalized": "VHDLId-\u003eString",
          "package": "vhdl",
          "partial": "VHDLId",
          "signature": "VHDLId-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:fromVHDLId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical Operators precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "logicalPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#logicalPrec",
          "type": "function"
        },
        "index": {
          "description": "Logical Operators precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "logicalPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:logicalPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMiscellaneous Operators Precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "miscPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#miscPrec",
          "type": "function"
        },
        "index": {
          "description": "Miscellaneous Operators Precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "miscPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:miscPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a VHDL basic identifier from a String, previously checking if the  \n   String is correct\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "mkVHDLBasicId",
          "package": "vhdl",
          "signature": "String -\u003e EProne VHDLId",
          "source": "src/Language-VHDL-AST.html#mkVHDLBasicId",
          "type": "function"
        },
        "index": {
          "description": "Create VHDL basic identifier from String previously checking if the String is correct",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "mkVHDLBasicId",
          "normalized": "String-\u003eEProne VHDLId",
          "package": "vhdl",
          "partial": "VHDLBasic Id",
          "signature": "String-\u003eEProne VHDLId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:mkVHDLBasicId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a VHDL extended identifier from a String, previously checking \n   if the String is correct. The input string must not include the initial\n   and ending backslashes nad the intermediate backslashes shouldn't be escaped.\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "mkVHDLExtId",
          "package": "vhdl",
          "signature": "String -\u003e EProne VHDLId",
          "source": "src/Language-VHDL-AST.html#mkVHDLExtId",
          "type": "function"
        },
        "index": {
          "description": "Create VHDL extended identifier from String previously checking if the String is correct The input string must not include the initial and ending backslashes nad the intermediate backslashes shouldn be escaped",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "mkVHDLExtId",
          "normalized": "String-\u003eEProne VHDLId",
          "package": "vhdl",
          "partial": "VHDLExt Id",
          "signature": "String-\u003eEProne VHDLId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:mkVHDLExtId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultplying Operators Precedecne\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "multPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#multPrec",
          "type": "function"
        },
        "index": {
          "description": "Multplying Operators Precedecne",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "multPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:multPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eother special characters as defined in the VHDL93 standard\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "otherSpecialChars",
          "package": "vhdl",
          "signature": "[Char]",
          "source": "src/Language-VHDL-AST.html#otherSpecialChars",
          "type": "function"
        },
        "index": {
          "description": "other special characters as defined in the VHDL93 standard",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "otherSpecialChars",
          "normalized": "[Char]",
          "package": "vhdl",
          "partial": "Special Chars",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:otherSpecialChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlus Operators precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "plusPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#plusPrec",
          "type": "function"
        },
        "index": {
          "description": "Plus Operators precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "plusPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:plusPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelational Operators Precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "relationalPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#relationalPrec",
          "type": "function"
        },
        "index": {
          "description": "Relational Operators Precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "relationalPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:relationalPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved identifiers\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "reservedWords",
          "package": "vhdl",
          "signature": "[String]",
          "source": "src/Language-VHDL-AST.html#reservedWords",
          "type": "function"
        },
        "index": {
          "description": "Reserved identifiers",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "reservedWords",
          "normalized": "[String]",
          "package": "vhdl",
          "partial": "Words",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:reservedWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift Operators Precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "shiftPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#shiftPrec",
          "type": "function"
        },
        "index": {
          "description": "Shift Operators Precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "shiftPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:shiftPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign Operators Precedence\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "signPrec",
          "package": "vhdl",
          "signature": "Int",
          "source": "src/Language-VHDL-AST.html#signPrec",
          "type": "function"
        },
        "index": {
          "description": "Sign Operators Precedence",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "signPrec",
          "package": "vhdl",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:signPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especial characters as defined in the VHDL93 standard\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "specialChars",
          "package": "vhdl",
          "signature": "[Char]",
          "source": "src/Language-VHDL-AST.html#specialChars",
          "type": "function"
        },
        "index": {
          "description": "special characters as defined in the VHDL93 standard",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "specialChars",
          "normalized": "[Char]",
          "package": "vhdl",
          "partial": "Chars",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:specialChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely append a string to a VHDL identifier (i.e. without checking if\n  the resulting identifier is valid)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "unsafeIdAppend",
          "package": "vhdl",
          "signature": "VHDLId -\u003e String -\u003e VHDLId",
          "source": "src/Language-VHDL-AST.html#unsafeIdAppend",
          "type": "function"
        },
        "index": {
          "description": "Unsafely append string to VHDL identifier i.e without checking if the resulting identifier is valid",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "unsafeIdAppend",
          "normalized": "VHDLId-\u003eString-\u003eVHDLId",
          "package": "vhdl",
          "partial": "Id Append",
          "signature": "VHDLId-\u003eString-\u003eVHDLId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeIdAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsafely create a basic VHDLId (without cheking if the string is correct)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "unsafeVHDLBasicId",
          "package": "vhdl",
          "signature": "String -\u003e VHDLId",
          "source": "src/Language-VHDL-AST.html#unsafeVHDLBasicId",
          "type": "function"
        },
        "index": {
          "description": "unsafely create basic VHDLId without cheking if the string is correct",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "unsafeVHDLBasicId",
          "normalized": "String-\u003eVHDLId",
          "package": "vhdl",
          "partial": "VHDLBasic Id",
          "signature": "String-\u003eVHDLId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeVHDLBasicId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsafely create an exteded VHDLId (without cheking if the string is \n   correct)\n\u003c/p\u003e",
          "module": "Language.VHDL.AST",
          "name": "unsafeVHDLExtId",
          "package": "vhdl",
          "signature": "String -\u003e VHDLId",
          "source": "src/Language-VHDL-AST.html#unsafeVHDLExtId",
          "type": "function"
        },
        "index": {
          "description": "unsafely create an exteded VHDLId without cheking if the string is correct",
          "hierarchy": "Language VHDL AST",
          "module": "Language.VHDL.AST",
          "name": "unsafeVHDLExtId",
          "normalized": "String-\u003eVHDLId",
          "package": "vhdl",
          "partial": "VHDLExt Id",
          "signature": "String-\u003eVHDLId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeVHDLExtId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions working with files in the VHDL backend. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.VHDL.FileIO",
          "name": "FileIO",
          "package": "vhdl",
          "source": "src/Language-VHDL-FileIO.html",
          "type": "module"
        },
        "index": {
          "description": "Functions working with files in the VHDL backend",
          "hierarchy": "Language VHDL FileIO",
          "module": "Language.VHDL.FileIO",
          "name": "FileIO",
          "package": "vhdl",
          "partial": "File IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-FileIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a design file to a file in disk\n\u003c/p\u003e",
          "module": "Language.VHDL.FileIO",
          "name": "writeDesignFile",
          "package": "vhdl",
          "signature": "DesignFile -\u003e FilePath -\u003e IO ()",
          "source": "src/Language-VHDL-FileIO.html#writeDesignFile",
          "type": "function"
        },
        "index": {
          "description": "Write design file to file in disk",
          "hierarchy": "Language VHDL FileIO",
          "module": "Language.VHDL.FileIO",
          "name": "writeDesignFile",
          "normalized": "DesignFile-\u003eFilePath-\u003eIO()",
          "package": "vhdl",
          "partial": "Design File",
          "signature": "DesignFile-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-FileIO.html#v:writeDesignFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForSyDe pretty-printing class and auxiliar functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "source": "src/Language-VHDL-Ppr.html",
          "type": "module"
        },
        "index": {
          "description": "ForSyDe pretty-printing class and auxiliar functions",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "partial": "Ppr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing class\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "source": "src/Language-VHDL-Ppr.html#Ppr",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing class",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "Ppr",
          "package": "vhdl",
          "partial": "Ppr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#t:Ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing class with associated printing options\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "PprOps",
          "package": "vhdl",
          "source": "src/Language-VHDL-Ppr.html#PprOps",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing class with associated printing options",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "PprOps",
          "package": "vhdl",
          "partial": "Ppr Ops",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#t:PprOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly append if both of the documents are non-empty\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "($++$)",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#%24%2B%2B%24",
          "type": "function"
        },
        "index": {
          "description": "Only append if both of the documents are non-empty",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "($++$) $++$",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:-36--43--43--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly append if both of the documents are non-empty\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "(\u003c++\u003e)",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Only append if both of the documents are non-empty",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply sep to a list of prettyprintable elements, \n   previously interspersing commas\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "commaSep",
          "package": "vhdl",
          "signature": "[a] -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#commaSep",
          "type": "function"
        },
        "index": {
          "description": "apply sep to list of prettyprintable elements previously interspersing commas",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "commaSep",
          "normalized": "[a]-\u003eDoc",
          "package": "vhdl",
          "partial": "Sep",
          "signature": "[a]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "dot",
          "package": "vhdl",
          "signature": "Doc",
          "source": "src/Language-VHDL-Ppr.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "dot",
          "package": "vhdl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "hComma",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#hComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "hComma",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "partial": "Comma",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:hComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "multiVSpace",
          "package": "vhdl",
          "signature": "Int -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#multiVSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "multiVSpace",
          "normalized": "Int-\u003eDoc",
          "package": "vhdl",
          "partial": "VSpace",
          "signature": "Int-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:multiVSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclose in parenthesis only if the predicate is True\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "parensIf",
          "package": "vhdl",
          "signature": "Bool -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#parensIf",
          "type": "function"
        },
        "index": {
          "description": "Enclose in parenthesis only if the predicate is True",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "parensIf",
          "normalized": "Bool-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "partial": "If",
          "signature": "Bool-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:parensIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclose in parenthesis only if the document is non-empty\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "parensNonEmpty",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#parensNonEmpty",
          "type": "function"
        },
        "index": {
          "description": "Enclose in parenthesis only if the document is non-empty",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "parensNonEmpty",
          "normalized": "Doc-\u003eDoc",
          "package": "vhdl",
          "partial": "Non Empty",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:parensNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "ppr",
          "package": "vhdl",
          "signature": "a -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#ppr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "ppr",
          "normalized": "a-\u003eDoc",
          "package": "vhdl",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "pprOps",
          "package": "vhdl",
          "signature": "ops -\u003e toPpr -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#pprOps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "pprOps",
          "normalized": "a-\u003eb-\u003eDoc",
          "package": "vhdl",
          "partial": "Ops",
          "signature": "ops-\u003etoPpr-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:pprOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "pprOps_list",
          "package": "vhdl",
          "signature": "ops -\u003e (Doc -\u003e Doc -\u003e Doc) -\u003e [toPpr] -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#pprOps_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "pprOps_list",
          "normalized": "a-\u003e(Doc-\u003eDoc-\u003eDoc)-\u003e[b]-\u003eDoc",
          "package": "vhdl",
          "partial": "Ops",
          "signature": "ops-\u003e(Doc-\u003eDoc-\u003eDoc)-\u003e[toPpr]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:pprOps_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "ppr_list",
          "package": "vhdl",
          "signature": "(Doc -\u003e Doc -\u003e Doc) -\u003e [a] -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#ppr_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "ppr_list",
          "normalized": "(Doc-\u003eDoc-\u003eDoc)-\u003e[a]-\u003eDoc",
          "package": "vhdl",
          "signature": "(Doc-\u003eDoc-\u003eDoc)-\u003e[a]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:ppr_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "vComma",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#vComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "vComma",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "partial": "Comma",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two documents vertically leaving n vertical spaces between them\n\u003c/p\u003e",
          "module": "Language.VHDL.Ppr",
          "name": "vNSpaces",
          "package": "vhdl",
          "signature": "Int -\u003e Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#vNSpaces",
          "type": "function"
        },
        "index": {
          "description": "Join two documents vertically leaving vertical spaces between them",
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "vNSpaces",
          "normalized": "Int-\u003eDoc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "partial": "NSpaces",
          "signature": "Int-\u003eDoc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vNSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "vSemi",
          "package": "vhdl",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Language-VHDL-Ppr.html#vSemi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "vSemi",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "vhdl",
          "partial": "Semi",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vSemi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.VHDL.Ppr",
          "name": "vSpace",
          "package": "vhdl",
          "signature": "Doc",
          "source": "src/Language-VHDL-Ppr.html#vSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language VHDL Ppr",
          "module": "Language.VHDL.Ppr",
          "name": "vSpace",
          "package": "vhdl",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vSpace"
      }
    }
  ]
]