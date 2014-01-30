[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST-Ppr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVHDL pretty-printing instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.VHDL.AST.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "module",
        "fct-source": "src/Language-VHDL-AST-Ppr.html",
        "fct-type": "module",
        "title": "Ppr"
      },
      "index": {
        "description": "VHDL pretty-printing instances",
        "hierarchy": "Language VHDL AST Ppr",
        "module": "Language.VHDL.AST.Ppr",
        "name": "Ppr",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ppr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA VHDL 93 subset AST (Abstract Syntax Tree), coded so that it can be easy \n to extend, please see doc\u003cem\u003eVHDL\u003c/em\u003evhdl93-syntax.html as reference \n in order to extend it (this AST is based on that grammar)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "module",
        "fct-source": "src/Language-VHDL-AST.html",
        "fct-type": "module",
        "title": "AST"
      },
      "index": {
        "description": "VHDL subset AST Abstract Syntax Tree coded so that it can be easy to extend please see doc VHDL vhdl93-syntax.html as reference in order to extend it this AST is based on that grammar",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "AST",
        "normalized": "",
        "package": "vhdl",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ActualDesig",
      "description": {
        "fct-descr": "\u003cp\u003eactual_designator\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ActualDesig",
        "fct-type": "data",
        "title": "ActualDesig"
      },
      "index": {
        "description": "actual designator",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ActualDesig",
        "normalized": "",
        "package": "vhdl",
        "partial": "Actual Desig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ActualPart",
      "description": {
        "fct-descr": "\u003cp\u003eactual_part\n We only accept an actual_designator,\n  \u003ca\u003efunction_name ( actual_designator )\u003c/a\u003e and \u003ca\u003etype_mark ( actual_designator )\u003c/a\u003e\n  are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#ActualPart",
        "fct-type": "type",
        "title": "ActualPart"
      },
      "index": {
        "description": "actual part We only accept an actual designator function name actual designator and type mark actual designator are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ActualPart",
        "normalized": "",
        "package": "vhdl",
        "partial": "Actual Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ArchBody",
      "description": {
        "fct-descr": "\u003cp\u003earchitecture_body \n [ ARCHITECTURE ] and [ architecture_simple_name ] are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ArchBody",
        "fct-type": "data",
        "title": "ArchBody"
      },
      "index": {
        "description": "architecture body ARCHITECTURE and architecture simple name are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ArchBody",
        "normalized": "",
        "package": "vhdl",
        "partial": "Arch Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ArrayTypeDef",
      "description": {
        "fct-descr": "\u003cp\u003earray_type_definition\n     unconstrained_array_definition\n     constrained_array_definition\n A TypeMark is used instead of a subtype_indication. If subtyping is required,\n declare a subtype explicitly.  \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ArrayTypeDef",
        "fct-type": "data",
        "title": "ArrayTypeDef"
      },
      "index": {
        "description": "array type definition unconstrained array definition constrained array definition TypeMark is used instead of subtype indication If subtyping is required declare subtype explicitly",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ArrayTypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Array Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:AssocElem",
      "description": {
        "fct-descr": "\u003cp\u003eassociation_element\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#AssocElem",
        "fct-type": "data",
        "title": "AssocElem"
      },
      "index": {
        "description": "association element",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "AssocElem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Assoc Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:AttribName",
      "description": {
        "fct-descr": "\u003cp\u003eattribute_name\n   signatures are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#AttribName",
        "fct-type": "data",
        "title": "AttribName"
      },
      "index": {
        "description": "attribute name signatures are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "AttribName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Attrib Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:BlockDecItem",
      "description": {
        "fct-descr": "\u003cp\u003eblock_declarative_item\n Only subprogram bodies and signal declarations are allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#BlockDecItem",
        "fct-type": "data",
        "title": "BlockDecItem"
      },
      "index": {
        "description": "block declarative item Only subprogram bodies and signal declarations are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "BlockDecItem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Block Dec Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:BlockSm",
      "description": {
        "fct-descr": "\u003cp\u003eblock_statement\n Generics are not supported\n The port_clause (with only signals) and port_map_aspect are mandatory\n The ending [ block_label ] is not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#BlockSm",
        "fct-type": "data",
        "title": "BlockSm"
      },
      "index": {
        "description": "block statement Generics are not supported The port clause with only signals and port map aspect are mandatory The ending block label is not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "BlockSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Block Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:CaseSmAlt",
      "description": {
        "fct-descr": "\u003cp\u003ecase_statement_alternative\n it is incorrect to have an empty [Choice]\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#CaseSmAlt",
        "fct-type": "data",
        "title": "CaseSmAlt"
      },
      "index": {
        "description": "case statement alternative it is incorrect to have an empty Choice",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CaseSmAlt",
        "normalized": "",
        "package": "vhdl",
        "partial": "Case Sm Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Choice",
      "description": {
        "fct-descr": "\u003cp\u003echoice\n although any expression is allowed the grammar specfically only allows \n simple_expressions (not covered in this AST) \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Choice",
        "fct-type": "data",
        "title": "Choice"
      },
      "index": {
        "description": "choice although any expression is allowed the grammar specfically only allows simple expressions not covered in this AST",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Choice",
        "normalized": "",
        "package": "vhdl",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:CompInsSm",
      "description": {
        "fct-descr": "\u003cp\u003ecomponent_instantiation_statement\n No generics supported\n The port map aspect is mandatory\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#CompInsSm",
        "fct-type": "data",
        "title": "CompInsSm"
      },
      "index": {
        "description": "component instantiation statement No generics supported The port map aspect is mandatory",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CompInsSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Comp Ins Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConSigAssignSm",
      "description": {
        "fct-descr": "\u003cp\u003econcurrent_signal_assignment_statement\n Only conditional_signal_assignment is allowed (without options)\n The LHS (targets) are simply signal names, no aggregates\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ConSigAssignSm",
        "fct-type": "data",
        "title": "ConSigAssignSm"
      },
      "index": {
        "description": "concurrent signal assignment statement Only conditional signal assignment is allowed without options The LHS targets are simply signal names no aggregates",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConSigAssignSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Con Sig Assign Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConWforms",
      "description": {
        "fct-descr": "\u003cp\u003econditional_waveforms \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ConWforms",
        "fct-type": "data",
        "title": "ConWforms"
      },
      "index": {
        "description": "conditional waveforms",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConWforms",
        "normalized": "",
        "package": "vhdl",
        "partial": "Con Wforms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConcSm",
      "description": {
        "fct-descr": "\u003cp\u003econcurrent_statement\n only block statements, component instantiations and signal assignments \n are allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "data",
        "title": "ConcSm"
      },
      "index": {
        "description": "concurrent statement only block statements component instantiations and signal assignments are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConcSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Conc Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ConstDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ConstDec",
        "fct-type": "data",
        "title": "ConstDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConstDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Const Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Constraint",
      "description": {
        "fct-descr": "\u003cp\u003econstraint\n Only index constraints are allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#Constraint",
        "fct-type": "type",
        "title": "Constraint"
      },
      "index": {
        "description": "constraint Only index constraints are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Constraint",
        "normalized": "",
        "package": "vhdl",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ContextItem",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ContextItem",
        "fct-type": "data",
        "title": "ContextItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ContextItem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Context Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:DesignFile",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#DesignFile",
        "fct-type": "data",
        "title": "DesignFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "DesignFile",
        "normalized": "",
        "package": "vhdl",
        "partial": "Design File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:DiscreteRange",
      "description": {
        "fct-descr": "\u003cp\u003ediscrete_range\n   only ranges are allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#DiscreteRange",
        "fct-type": "type",
        "title": "DiscreteRange"
      },
      "index": {
        "description": "discrete range only ranges are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "DiscreteRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "Discrete Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElemAssoc",
      "description": {
        "fct-descr": "\u003cp\u003eelement_association\n   only one choice is allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ElemAssoc",
        "fct-type": "data",
        "title": "ElemAssoc"
      },
      "index": {
        "description": "element association only one choice is allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElemAssoc",
        "normalized": "",
        "package": "vhdl",
        "partial": "Elem Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElementDec",
      "description": {
        "fct-descr": "\u003cp\u003eelement_declaration \n multi-identifier element declarations not allowed\n element_subtype_definition is simplified to a type_mark\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ElementDec",
        "fct-type": "data",
        "title": "ElementDec"
      },
      "index": {
        "description": "element declaration multi-identifier element declarations not allowed element subtype definition is simplified to type mark",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElementDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Element Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Else",
      "description": {
        "fct-descr": "\u003cp\u003ehelper type, it doesn't exist in the origianl grammar\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Else",
        "fct-type": "data",
        "title": "Else"
      },
      "index": {
        "description": "helper type it doesn exist in the origianl grammar",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Else",
        "normalized": "",
        "package": "vhdl",
        "partial": "Else",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ElseIf",
      "description": {
        "fct-descr": "\u003cp\u003ehelper type, they doesn't exist in the origianl grammar\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ElseIf",
        "fct-type": "data",
        "title": "ElseIf"
      },
      "index": {
        "description": "helper type they doesn exist in the origianl grammar",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElseIf",
        "normalized": "",
        "package": "vhdl",
        "partial": "Else If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:EntityDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#EntityDec",
        "fct-type": "data",
        "title": "EntityDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "EntityDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Entity Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:EnumTypeDef",
      "description": {
        "fct-descr": "\u003cp\u003eenumeration_type_definition \n   enumeration literals can only be identifiers\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#EnumTypeDef",
        "fct-type": "data",
        "title": "EnumTypeDef"
      },
      "index": {
        "description": "enumeration type definition enumeration literals can only be identifiers",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "EnumTypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Enum Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eexpression, instead of creating an AST like the grammar \n (see commented section below) we made our own expressions which are \n easier to handle, but which don't don't show operand precedence\n (that is a responsibility of the pretty printer)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "expression instead of creating an AST like the grammar see commented section below we made our own expressions which are easier to handle but which don don show operand precedence that is responsibility of the pretty printer",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Expr",
        "normalized": "",
        "package": "vhdl",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:FCall",
      "description": {
        "fct-descr": "\u003cp\u003efunction_call\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#FCall",
        "fct-type": "data",
        "title": "FCall"
      },
      "index": {
        "description": "function call",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "FCall",
        "normalized": "",
        "package": "vhdl",
        "partial": "FCall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:FormalPart",
      "description": {
        "fct-descr": "\u003cp\u003eformal_part\n We only accept a formal_designator (which is a name after all),\n in the forme of simple name (no need for selected names)   \n  \u003ca\u003efunction_name ( formal_designator )\u003c/a\u003e and \u003ca\u003etype_mark ( formal_designator )\u003c/a\u003e\n  are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#FormalPart",
        "fct-type": "type",
        "title": "FormalPart"
      },
      "index": {
        "description": "formal part We only accept formal designator which is name after all in the forme of simple name no need for selected names function name formal designator and type mark formal designator are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "FormalPart",
        "normalized": "",
        "package": "vhdl",
        "partial": "Formal Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:GenSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#GenSm",
        "fct-type": "data",
        "title": "GenSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "GenSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Gen Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:GenerateSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#GenerateSm",
        "fct-type": "data",
        "title": "GenerateSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "GenerateSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Generate Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IfaceSigDec",
      "description": {
        "fct-descr": "\u003cp\u003einterface_signal_declaration\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n  at once\n The Mode is mandatory\n Bus is not allowed \n Preasigned values are not allowed\n Subtype indications are not allowed, just a typemark \n Constraints are not allowed: just add a new type with the constarint\n  in ForSyDe.vhd if it is required\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#IfaceSigDec",
        "fct-type": "data",
        "title": "IfaceSigDec"
      },
      "index": {
        "description": "interface signal declaration We don allow the id1 id2 id3 syntax only one identifier is allowed at once The Mode is mandatory Bus is not allowed Preasigned values are not allowed Subtype indications are not allowed just typemark Constraints are not allowed just add new type with the constarint in ForSyDe.vhd if it is required",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfaceSigDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Iface Sig Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IfaceVarDec",
      "description": {
        "fct-descr": "\u003cp\u003einterface_variable_declaration\n [variable] is not allowed\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n Mode is not allowed\n Resolution functions and constraints are not allowed, thus a TypeMark\n  is used instead of a subtype_indication. If subtyping is required,\n  declare a subtype explicitly.\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#IfaceVarDec",
        "fct-type": "data",
        "title": "IfaceVarDec"
      },
      "index": {
        "description": "interface variable declaration variable is not allowed We don allow the id1 id2 id3 syntax only one identifier is allowed Mode is not allowed Resolution functions and constraints are not allowed thus TypeMark is used instead of subtype indication If subtyping is required declare subtype explicitly",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfaceVarDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Iface Var Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IndexConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eindex_constraint\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#IndexConstraint",
        "fct-type": "data",
        "title": "IndexConstraint"
      },
      "index": {
        "description": "index constraint",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IndexConstraint",
        "normalized": "",
        "package": "vhdl",
        "partial": "Index Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IndexedName",
      "description": {
        "fct-descr": "\u003cp\u003eindexed_name\n note that according to the VHDL93 grammar the index list cannot be empty \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#IndexedName",
        "fct-type": "data",
        "title": "IndexedName"
      },
      "index": {
        "description": "indexed name note that according to the VHDL93 grammar the index list cannot be empty",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IndexedName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Indexed Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:InsUnit",
      "description": {
        "fct-descr": "\u003cp\u003einstantiated_unit\n Only Entities are allowed and their architecture cannot be specified\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#InsUnit",
        "fct-type": "data",
        "title": "InsUnit"
      },
      "index": {
        "description": "instantiated unit Only Entities are allowed and their architecture cannot be specified",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "InsUnit",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ins Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:IntegerTypeDef",
      "description": {
        "fct-descr": "\u003cp\u003einteger_type_definition \n   integer literals can only be numbers\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#IntegerTypeDef",
        "fct-type": "data",
        "title": "IntegerTypeDef"
      },
      "index": {
        "description": "integer type definition integer literals can only be numbers",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IntegerTypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Integer Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003elabel\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#Label",
        "fct-type": "type",
        "title": "Label"
      },
      "index": {
        "description": "label",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Label",
        "normalized": "",
        "package": "vhdl",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:LibraryUnit",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#LibraryUnit",
        "fct-type": "data",
        "title": "LibraryUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "LibraryUnit",
        "normalized": "",
        "package": "vhdl",
        "partial": "Library Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Literal",
      "description": {
        "fct-descr": "\u003cp\u003eliteral\n Literals are expressed as a string (remember we are generating\n code, not parsing)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#Literal",
        "fct-type": "type",
        "title": "Literal"
      },
      "index": {
        "description": "literal Literals are expressed as string remember we are generating code not parsing",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Literal",
        "normalized": "",
        "package": "vhdl",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003emode\n INOUT | BUFFER | LINKAGE are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "mode INOUT BUFFER LINKAGE are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Mode",
        "normalized": "",
        "package": "vhdl",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PMapAspect",
      "description": {
        "fct-descr": "\u003cp\u003eport_map_aspect\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "newtype",
        "fct-source": "src/Language-VHDL-AST.html#PMapAspect",
        "fct-type": "newtype",
        "title": "PMapAspect"
      },
      "index": {
        "description": "port map aspect",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PMapAspect",
        "normalized": "",
        "package": "vhdl",
        "partial": "PMap Aspect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageBody",
      "description": {
        "fct-descr": "\u003cp\u003epackage_body\n  [ PACKAGE ] and [ package_simple_name ] are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#PackageBody",
        "fct-type": "data",
        "title": "PackageBody"
      },
      "index": {
        "description": "package body PACKAGE and package simple name are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageBody",
        "normalized": "",
        "package": "vhdl",
        "partial": "Package Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageBodyDecItem",
      "description": {
        "fct-descr": "\u003cp\u003eonly subprogram_body is allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#PackageBodyDecItem",
        "fct-type": "type",
        "title": "PackageBodyDecItem"
      },
      "index": {
        "description": "only subprogram body is allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageBodyDecItem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Package Body Dec Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageDec",
      "description": {
        "fct-descr": "\u003cp\u003epackage_declaration\n  [ PACKAGE ] and [ package_simple_name ] are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#PackageDec",
        "fct-type": "data",
        "title": "PackageDec"
      },
      "index": {
        "description": "package declaration PACKAGE and package simple name are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Package Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:PackageDecItem",
      "description": {
        "fct-descr": "\u003cp\u003epackage_declarative_item\n only type declarations, subtype declarations and subprogram specifications \n (working as subprogram_declaration) allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#PackageDecItem",
        "fct-type": "data",
        "title": "PackageDecItem"
      },
      "index": {
        "description": "package declarative item only type declarations subtype declarations and subprogram specifications working as subprogram declaration allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageDecItem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Package Dec Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Prefix",
      "description": {
        "fct-descr": "\u003cp\u003eprefix\n  only names (no function calls)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#Prefix",
        "fct-type": "type",
        "title": "Prefix"
      },
      "index": {
        "description": "prefix only names no function calls",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Prefix",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:ProcSm",
      "description": {
        "fct-descr": "\u003cp\u003eprocess_statement\n   The label is mandatory\n   Only simple names are accepted in the sensitivity list\n   No declarative part is allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#ProcSm",
        "fct-type": "data",
        "title": "ProcSm"
      },
      "index": {
        "description": "process statement The label is mandatory Only simple names are accepted in the sensitivity list No declarative part is allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ProcSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Proc Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003erange\n   the direction must always be \"to\"\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "range the direction must always be to",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Range",
        "normalized": "",
        "package": "vhdl",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:RecordTypeDef",
      "description": {
        "fct-descr": "\u003cp\u003erecord_type_definition\n [ record_type_simple_name ] not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#RecordTypeDef",
        "fct-type": "data",
        "title": "RecordTypeDef"
      },
      "index": {
        "description": "record type definition record type simple name not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "RecordTypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Record Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SelectedName",
      "description": {
        "fct-descr": "\u003cp\u003eselected_name\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SelectedName",
        "fct-type": "data",
        "title": "SelectedName"
      },
      "index": {
        "description": "selected name",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SelectedName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Selected Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SeqSm",
      "description": {
        "fct-descr": "\u003cp\u003esequential_statement\n Only If, case, return, for loops, assignment, \u003ccode\u003ewait for\u003c/code\u003e procedure calls\n allowed.\n Only for loops are allowed (thus loop_statement doesn't exist) and cannot\n be provided labels.\n The target cannot be an aggregate.\n General wait statements are not allowed, only \u003ccode\u003ewait for\u003c/code\u003e\n It is incorrect to have an empty [CaseSmAlt]\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "data",
        "title": "SeqSm"
      },
      "index": {
        "description": "sequential statement Only If case return for loops assignment wait for procedure calls allowed Only for loops are allowed thus loop statement doesn exist and cannot be provided labels The target cannot be an aggregate General wait statements are not allowed only wait for It is incorrect to have an empty CaseSmAlt",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SeqSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Seq Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SigDec",
      "description": {
        "fct-descr": "\u003cp\u003esignal_declaration\n We don't allow the \u003ca\u003eid1,id2,id3\u003c/a\u003e syntax, only one identifier is allowed\n  at once\n Resolution functions and constraints are not allowed, thus a TypeMark\n  is used instead of a subtype_indication\n Signal kinds are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SigDec",
        "fct-type": "data",
        "title": "SigDec"
      },
      "index": {
        "description": "signal declaration We don allow the id1 id2 id3 syntax only one identifier is allowed at once Resolution functions and constraints are not allowed thus TypeMark is used instead of subtype indication Signal kinds are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SigDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sig Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SimpleName",
      "description": {
        "fct-descr": "\u003cp\u003esimple_name\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#SimpleName",
        "fct-type": "type",
        "title": "SimpleName"
      },
      "index": {
        "description": "simple name",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SimpleName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Simple Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SliceName",
      "description": {
        "fct-descr": "\u003cp\u003eslice_name\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SliceName",
        "fct-type": "data",
        "title": "SliceName"
      },
      "index": {
        "description": "slice name",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SliceName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Slice Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgBody",
      "description": {
        "fct-descr": "\u003cp\u003esubprogram_body\n No subprogram kind nor designator is allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubProgBody",
        "fct-type": "data",
        "title": "SubProgBody"
      },
      "index": {
        "description": "subprogram body No subprogram kind nor designator is allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubProgBody",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sub Prog Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgDecItem",
      "description": {
        "fct-descr": "\u003cp\u003esubprogram_declarative_item\n   only varaible declarations are allowed.\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubProgDecItem",
        "fct-type": "data",
        "title": "SubProgDecItem"
      },
      "index": {
        "description": "subprogram declarative item only varaible declarations are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubProgDecItem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sub Prog Dec Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubProgSpec",
      "description": {
        "fct-descr": "\u003cp\u003esubprogram_specification\n Only Functions are allowed\n [Pure | Impure] is not allowed\n Only an identifier is valid as the designator\n In the formal parameter list only variable declarations are accepted  \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubProgSpec",
        "fct-type": "data",
        "title": "SubProgSpec"
      },
      "index": {
        "description": "subprogram specification Only Functions are allowed Pure Impure is not allowed Only an identifier is valid as the designator In the formal parameter list only variable declarations are accepted",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubProgSpec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sub Prog Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeConstraint",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeConstraint",
        "fct-type": "data",
        "title": "SubtypeConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubtypeConstraint",
        "normalized": "",
        "package": "vhdl",
        "partial": "Subtype Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeDec",
      "description": {
        "fct-descr": "\u003cp\u003esubtype-declaration\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeDec",
        "fct-type": "data",
        "title": "SubtypeDec"
      },
      "index": {
        "description": "subtype-declaration",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubtypeDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Subtype Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:SubtypeIn",
      "description": {
        "fct-descr": "\u003cp\u003esubtype_indication\n   resolution functions are not permitted\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeIn",
        "fct-type": "data",
        "title": "SubtypeIn"
      },
      "index": {
        "description": "subtype indication resolution functions are not permitted",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubtypeIn",
        "normalized": "",
        "package": "vhdl",
        "partial": "Subtype In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Suffix",
      "description": {
        "fct-descr": "\u003cp\u003esuffix\n no character or operator symbols are accepted\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Suffix",
        "fct-type": "data",
        "title": "Suffix"
      },
      "index": {
        "description": "suffix no character or operator symbols are accepted",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Suffix",
        "normalized": "",
        "package": "vhdl",
        "partial": "Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeDec",
      "description": {
        "fct-descr": "\u003cp\u003etype_declaration\n only full_type_declarations are allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#TypeDec",
        "fct-type": "data",
        "title": "TypeDec"
      },
      "index": {
        "description": "type declaration only full type declarations are allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TypeDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Type Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeDef",
      "description": {
        "fct-descr": "\u003cp\u003etype_declaration\n only composite types and enumeration types (a specific scalar type)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#TypeDef",
        "fct-type": "data",
        "title": "TypeDef"
      },
      "index": {
        "description": "type declaration only composite types and enumeration types specific scalar type",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:TypeMark",
      "description": {
        "fct-descr": "\u003cp\u003etype_mark\n We don't distinguish between type names and subtype names\n We dont' support selected names, only simple names because we won't need\n name selection (i.e. Use clauses will make name selection unnecesary)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "type",
        "fct-source": "src/Language-VHDL-AST.html#TypeMark",
        "fct-type": "type",
        "title": "TypeMark"
      },
      "index": {
        "description": "type mark We don distinguish between type names and subtype names We dont support selected names only simple names because we won need name selection i.e Use clauses will make name selection unnecesary",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TypeMark",
        "normalized": "",
        "package": "vhdl",
        "partial": "Type Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VHDLId",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#VHDLId",
        "fct-type": "data",
        "title": "VHDLId"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "VHDLId",
        "normalized": "",
        "package": "vhdl",
        "partial": "VHDLId",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VHDLName",
      "description": {
        "fct-descr": "\u003cp\u003ename\n operator_names are not allowed \n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "data",
        "title": "VHDLName"
      },
      "index": {
        "description": "name operator names are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "VHDLName",
        "normalized": "",
        "package": "vhdl",
        "partial": "VHDLName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:VarDec",
      "description": {
        "fct-descr": "\u003cp\u003evariable_declaration\n   identifier lists are not allowed\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#VarDec",
        "fct-type": "data",
        "title": "VarDec"
      },
      "index": {
        "description": "variable declaration identifier lists are not allowed",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "VarDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Var Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:Wform",
      "description": {
        "fct-descr": "\u003cp\u003ewaveform\n although it is possible to leave [Expr] empty, that's obviously not\n valid VHDL waveform\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#Wform",
        "fct-type": "data",
        "title": "Wform"
      },
      "index": {
        "description": "waveform although it is possible to leave Expr empty that obviously not valid VHDL waveform",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Wform",
        "normalized": "",
        "package": "vhdl",
        "partial": "Wform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:WformElem",
      "description": {
        "fct-descr": "\u003cp\u003ewaveform_element\n   Null is not accepted\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#WformElem",
        "fct-type": "data",
        "title": "WformElem"
      },
      "index": {
        "description": "waveform element Null is not accepted",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "WformElem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Wform Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:When",
      "description": {
        "fct-descr": "\u003cp\u003eHelper type, it doesn't exist in the VHDL grammar\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "newtype",
        "fct-source": "src/Language-VHDL-AST.html#When",
        "fct-type": "newtype",
        "title": "When"
      },
      "index": {
        "description": "Helper type it doesn exist in the VHDL grammar",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "When",
        "normalized": "",
        "package": "vhdl",
        "partial": "When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#t:WhenElse",
      "description": {
        "fct-descr": "\u003cp\u003eHelper type, it doesn't exist in the VHDL grammar\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "data",
        "fct-source": "src/Language-VHDL-AST.html#WhenElse",
        "fct-type": "data",
        "title": "WhenElse"
      },
      "index": {
        "description": "Helper type it doesn exist in the VHDL grammar",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "WhenElse",
        "normalized": "",
        "package": "vhdl",
        "partial": "When Else",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-38-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :&: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":&:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-42--42-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :**: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":**:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":**:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-42-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :*: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":*:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-43-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :+: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":+:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-45-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :-: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":-:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":-:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-47--61-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :/=: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":/=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":/=:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-47-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :/: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":/:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":/:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60--61--61-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "VHDLName :\u003c==: ConWforms",
        "fct-source": "src/Language-VHDL-AST.html#ConSigAssignSm",
        "fct-type": "function",
        "title": ":\u003c==:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":\u003c==:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60--61-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :\u003c=: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":\u003c=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":\u003c=:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-60-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :\u003c: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":\u003c:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":\u003c:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61-",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "VHDLName := Expr",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":=",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61--62-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": ": ActualPart",
        "fct-source": "src/Language-VHDL-AST.html#AssocElem",
        "fct-type": "function",
        "title": ":=\u003e:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":=\u003e:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-61-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :=: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":=:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-62--61-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :\u003e=: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":\u003e=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":\u003e=:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::-62-:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Expr :\u003e: Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": ":\u003e:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":\u003e:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v::.:",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Prefix :.: Suffix",
        "fct-source": "src/Language-VHDL-AST.html#SelectedName",
        "fct-type": "function",
        "title": ":.:"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": ":.:",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ADExpr",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ADExpr Expr",
        "fct-source": "src/Language-VHDL-AST.html#ActualDesig",
        "fct-type": "function",
        "title": "ADExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ADExpr",
        "normalized": "",
        "package": "vhdl",
        "partial": "ADExpr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ADName",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ADName VHDLName",
        "fct-source": "src/Language-VHDL-AST.html#ActualDesig",
        "fct-type": "function",
        "title": "ADName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ADName",
        "normalized": "",
        "package": "vhdl",
        "partial": "ADName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Abs",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Abs Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Abs",
        "normalized": "",
        "package": "vhdl",
        "partial": "Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Aggregate",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Aggregate [ElemAssoc]",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Aggregate"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Aggregate",
        "normalized": "Aggregate[ElemAssoc]",
        "package": "vhdl",
        "partial": "Aggregate",
        "signature": "Aggregate[ElemAssoc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:All",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "All",
        "fct-source": "src/Language-VHDL-AST.html#Suffix",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "All",
        "normalized": "",
        "package": "vhdl",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:And",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "And Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "And",
        "normalized": "",
        "package": "vhdl",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ArchBody",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ArchBody VHDLId VHDLName [BlockDecItem] [ConcSm]",
        "fct-source": "src/Language-VHDL-AST.html#ArchBody",
        "fct-type": "function",
        "title": "ArchBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ArchBody",
        "normalized": "ArchBody VHDLId VHDLName[BlockDecItem][ConcSm]",
        "package": "vhdl",
        "partial": "Arch Body",
        "signature": "ArchBody VHDLId VHDLName[BlockDecItem][ConcSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:AttribName",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "AttribName Prefix VHDLName (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#AttribName",
        "fct-type": "function",
        "title": "AttribName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "AttribName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Attrib Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:AttribRange",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "AttribRange AttribName",
        "fct-source": "src/Language-VHDL-AST.html#Range",
        "fct-type": "function",
        "title": "AttribRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "AttribRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "Attrib Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BDISD",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "BDISD SigDec",
        "fct-source": "src/Language-VHDL-AST.html#BlockDecItem",
        "fct-type": "function",
        "title": "BDISD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "BDISD",
        "normalized": "",
        "package": "vhdl",
        "partial": "BDISD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BDISPB",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "BDISPB SubProgBody",
        "fct-source": "src/Language-VHDL-AST.html#BlockDecItem",
        "fct-type": "function",
        "title": "BDISPB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "BDISPB",
        "normalized": "",
        "package": "vhdl",
        "partial": "BDISPB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Basic",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Basic String",
        "fct-source": "src/Language-VHDL-AST.html#VHDLId",
        "fct-type": "function",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Basic",
        "normalized": "",
        "package": "vhdl",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:BlockSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "BlockSm Label [IfaceSigDec] PMapAspect [BlockDecItem] [ConcSm]",
        "fct-source": "src/Language-VHDL-AST.html#BlockSm",
        "fct-type": "function",
        "title": "BlockSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "BlockSm",
        "normalized": "BlockSm Label[IfaceSigDec]PMapAspect[BlockDecItem][ConcSm]",
        "package": "vhdl",
        "partial": "Block Sm",
        "signature": "BlockSm Label[IfaceSigDec]PMapAspect[BlockDecItem][ConcSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSBSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CSBSm BlockSm",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "function",
        "title": "CSBSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CSBSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "CSBSm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSGSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CSGSm GenerateSm",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "function",
        "title": "CSGSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CSGSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "CSGSm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSISm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CSISm CompInsSm",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "function",
        "title": "CSISm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CSISm",
        "normalized": "",
        "package": "vhdl",
        "partial": "CSISm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSPSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CSPSm ProcSm",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "function",
        "title": "CSPSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CSPSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "CSPSm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CSSASm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CSSASm ConSigAssignSm",
        "fct-source": "src/Language-VHDL-AST.html#ConcSm",
        "fct-type": "function",
        "title": "CSSASm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CSSASm",
        "normalized": "",
        "package": "vhdl",
        "partial": "CSSASm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CaseSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CaseSm Expr [CaseSmAlt]",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "CaseSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CaseSm",
        "normalized": "CaseSm Expr[CaseSmAlt]",
        "package": "vhdl",
        "partial": "Case Sm",
        "signature": "CaseSm Expr[CaseSmAlt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CaseSmAlt",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CaseSmAlt [Choice] [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#CaseSmAlt",
        "fct-type": "function",
        "title": "CaseSmAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CaseSmAlt",
        "normalized": "CaseSmAlt[Choice][SeqSm]",
        "package": "vhdl",
        "partial": "Case Sm Alt",
        "signature": "CaseSmAlt[Choice][SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ChoiceE",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ChoiceE Expr",
        "fct-source": "src/Language-VHDL-AST.html#Choice",
        "fct-type": "function",
        "title": "ChoiceE"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ChoiceE",
        "normalized": "",
        "package": "vhdl",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:CompInsSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "CompInsSm Label InsUnit PMapAspect",
        "fct-source": "src/Language-VHDL-AST.html#CompInsSm",
        "fct-type": "function",
        "title": "CompInsSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "CompInsSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Comp Ins Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConWforms",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ConWforms [WhenElse] Wform (Maybe When)",
        "fct-source": "src/Language-VHDL-AST.html#ConWforms",
        "fct-type": "function",
        "title": "ConWforms"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConWforms",
        "normalized": "ConWforms[WhenElse]Wform(Maybe When)",
        "package": "vhdl",
        "partial": "Con Wforms",
        "signature": "ConWforms[WhenElse]Wform(Maybe When)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConsArrayDef",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ConsArrayDef IndexConstraint TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#ArrayTypeDef",
        "fct-type": "function",
        "title": "ConsArrayDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConsArrayDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Cons Array Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ConstDec VHDLId SubtypeIn (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#ConstDec",
        "fct-type": "function",
        "title": "ConstDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConstDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Const Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstraintIndex",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ConstraintIndex Constraint",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeConstraint",
        "fct-type": "function",
        "title": "ConstraintIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConstraintIndex",
        "normalized": "",
        "package": "vhdl",
        "partial": "Constraint Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ConstraintRange",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ConstraintRange Range",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeConstraint",
        "fct-type": "function",
        "title": "ConstraintRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ConstraintRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "Constraint Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:DesignFile",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "DesignFile [ContextItem] [LibraryUnit]",
        "fct-source": "src/Language-VHDL-AST.html#DesignFile",
        "fct-type": "function",
        "title": "DesignFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "DesignFile",
        "normalized": "DesignFile[ContextItem][LibraryUnit]",
        "package": "vhdl",
        "partial": "Design File",
        "signature": "DesignFile[ContextItem][LibraryUnit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:DownRange",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "DownRange Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Range",
        "fct-type": "function",
        "title": "DownRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "DownRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "Down Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElemAssoc",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ElemAssoc (Maybe Choice) Expr",
        "fct-source": "src/Language-VHDL-AST.html#ElemAssoc",
        "fct-type": "function",
        "title": "ElemAssoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElemAssoc",
        "normalized": "",
        "package": "vhdl",
        "partial": "Elem Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElementDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ElementDec VHDLId TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#ElementDec",
        "fct-type": "function",
        "title": "ElementDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElementDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Element Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Else",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Else [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#Else",
        "fct-type": "function",
        "title": "Else"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Else",
        "normalized": "Else[SeqSm]",
        "package": "vhdl",
        "partial": "Else",
        "signature": "Else[SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ElseIf",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ElseIf Expr [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#ElseIf",
        "fct-type": "function",
        "title": "ElseIf"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ElseIf",
        "normalized": "ElseIf Expr[SeqSm]",
        "package": "vhdl",
        "partial": "Else If",
        "signature": "ElseIf Expr[SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:EntityDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "EntityDec VHDLId [IfaceSigDec]",
        "fct-source": "src/Language-VHDL-AST.html#EntityDec",
        "fct-type": "function",
        "title": "EntityDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "EntityDec",
        "normalized": "EntityDec VHDLId[IfaceSigDec]",
        "package": "vhdl",
        "partial": "Entity Dec",
        "signature": "EntityDec VHDLId[IfaceSigDec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:EnumTypeDef",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "EnumTypeDef [VHDLId]",
        "fct-source": "src/Language-VHDL-AST.html#EnumTypeDef",
        "fct-type": "function",
        "title": "EnumTypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "EnumTypeDef",
        "normalized": "EnumTypeDef[VHDLId]",
        "package": "vhdl",
        "partial": "Enum Type Def",
        "signature": "EnumTypeDef[VHDLId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Extended",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Extended String",
        "fct-source": "src/Language-VHDL-AST.html#VHDLId",
        "fct-type": "function",
        "title": "Extended"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Extended",
        "normalized": "",
        "package": "vhdl",
        "partial": "Extended",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:FCall",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "FCall VHDLName [AssocElem]",
        "fct-source": "src/Language-VHDL-AST.html#FCall",
        "fct-type": "function",
        "title": "FCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "FCall",
        "normalized": "FCall VHDLName[AssocElem]",
        "package": "vhdl",
        "partial": "FCall",
        "signature": "FCall VHDLName[AssocElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ForGn",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ForGn VHDLId DiscreteRange",
        "fct-source": "src/Language-VHDL-AST.html#GenSm",
        "fct-type": "function",
        "title": "ForGn"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ForGn",
        "normalized": "",
        "package": "vhdl",
        "partial": "For Gn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ForSM",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ForSM VHDLId DiscreteRange [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "ForSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ForSM",
        "normalized": "ForSM VHDLId DiscreteRange[SeqSm]",
        "package": "vhdl",
        "partial": "For SM",
        "signature": "ForSM VHDLId DiscreteRange[SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Function",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Function VHDLId [IfaceVarDec] TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#SubProgSpec",
        "fct-type": "function",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Function",
        "normalized": "Function VHDLId[IfaceVarDec]TypeMark",
        "package": "vhdl",
        "partial": "Function",
        "signature": "Function VHDLId[IfaceVarDec]TypeMark"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:GenerateSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "GenerateSm Label GenSm [BlockDecItem] [ConcSm]",
        "fct-source": "src/Language-VHDL-AST.html#GenerateSm",
        "fct-type": "function",
        "title": "GenerateSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "GenerateSm",
        "normalized": "GenerateSm Label GenSm[BlockDecItem][ConcSm]",
        "package": "vhdl",
        "partial": "Generate Sm",
        "signature": "GenerateSm Label GenSm[BlockDecItem][ConcSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IUEntity",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IUEntity VHDLName",
        "fct-source": "src/Language-VHDL-AST.html#InsUnit",
        "fct-type": "function",
        "title": "IUEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IUEntity",
        "normalized": "",
        "package": "vhdl",
        "partial": "IUEntity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfGn",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IfGn Expr",
        "fct-source": "src/Language-VHDL-AST.html#GenSm",
        "fct-type": "function",
        "title": "IfGn"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfGn",
        "normalized": "",
        "package": "vhdl",
        "partial": "If Gn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IfSm Expr [SeqSm] [ElseIf] (Maybe Else)",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "IfSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfSm",
        "normalized": "IfSm Expr[SeqSm][ElseIf](Maybe Else)",
        "package": "vhdl",
        "partial": "If Sm",
        "signature": "IfSm Expr[SeqSm][ElseIf](Maybe Else)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfaceSigDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IfaceSigDec VHDLId Mode TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#IfaceSigDec",
        "fct-type": "function",
        "title": "IfaceSigDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfaceSigDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Iface Sig Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IfaceVarDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IfaceVarDec VHDLId TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#IfaceVarDec",
        "fct-type": "function",
        "title": "IfaceVarDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IfaceVarDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Iface Var Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:In",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "In",
        "fct-source": "src/Language-VHDL-AST.html#Mode",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "In",
        "normalized": "",
        "package": "vhdl",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IndexConstraint",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IndexConstraint [DiscreteRange]",
        "fct-source": "src/Language-VHDL-AST.html#IndexConstraint",
        "fct-type": "function",
        "title": "IndexConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IndexConstraint",
        "normalized": "IndexConstraint[DiscreteRange]",
        "package": "vhdl",
        "partial": "Index Constraint",
        "signature": "IndexConstraint[DiscreteRange]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IndexedName",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IndexedName Prefix [Expr]",
        "fct-source": "src/Language-VHDL-AST.html#IndexedName",
        "fct-type": "function",
        "title": "IndexedName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IndexedName",
        "normalized": "IndexedName Prefix[Expr]",
        "package": "vhdl",
        "partial": "Indexed Name",
        "signature": "IndexedName Prefix[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:IntegerTypeDef",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "IntegerTypeDef DiscreteRange",
        "fct-source": "src/Language-VHDL-AST.html#IntegerTypeDef",
        "fct-type": "function",
        "title": "IntegerTypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "IntegerTypeDef",
        "normalized": "",
        "package": "vhdl",
        "partial": "Integer Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUArch",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "LUArch ArchBody",
        "fct-source": "src/Language-VHDL-AST.html#LibraryUnit",
        "fct-type": "function",
        "title": "LUArch"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "LUArch",
        "normalized": "",
        "package": "vhdl",
        "partial": "LUArch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUEntity",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "LUEntity EntityDec",
        "fct-source": "src/Language-VHDL-AST.html#LibraryUnit",
        "fct-type": "function",
        "title": "LUEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "LUEntity",
        "normalized": "",
        "package": "vhdl",
        "partial": "LUEntity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUPackageBody",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "LUPackageBody PackageBody",
        "fct-source": "src/Language-VHDL-AST.html#LibraryUnit",
        "fct-type": "function",
        "title": "LUPackageBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "LUPackageBody",
        "normalized": "",
        "package": "vhdl",
        "partial": "LUPackage Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:LUPackageDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "LUPackageDec PackageDec",
        "fct-source": "src/Language-VHDL-AST.html#LibraryUnit",
        "fct-type": "function",
        "title": "LUPackageDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "LUPackageDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "LUPackage Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Library",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Library VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#ContextItem",
        "fct-type": "function",
        "title": "Library"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Library",
        "normalized": "",
        "package": "vhdl",
        "partial": "Library",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Mod",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Mod Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Mod",
        "normalized": "",
        "package": "vhdl",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NAttribute",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "NAttribute AttribName",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "function",
        "title": "NAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "NAttribute",
        "normalized": "",
        "package": "vhdl",
        "partial": "NAttribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NIndexed",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "NIndexed IndexedName",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "function",
        "title": "NIndexed"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "NIndexed",
        "normalized": "",
        "package": "vhdl",
        "partial": "NIndexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSelected",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "NSelected SelectedName",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "function",
        "title": "NSelected"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "NSelected",
        "normalized": "",
        "package": "vhdl",
        "partial": "NSelected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSimple",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "NSimple SimpleName",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "function",
        "title": "NSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "NSimple",
        "normalized": "",
        "package": "vhdl",
        "partial": "NSimple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:NSlice",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "NSlice SliceName",
        "fct-source": "src/Language-VHDL-AST.html#VHDLName",
        "fct-type": "function",
        "title": "NSlice"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "NSlice",
        "normalized": "",
        "package": "vhdl",
        "partial": "NSlice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Nand",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Nand Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Nand"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Nand",
        "normalized": "",
        "package": "vhdl",
        "partial": "Nand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Neg",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Neg Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Neg"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Neg",
        "normalized": "",
        "package": "vhdl",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Nor",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Nor Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Nor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Nor",
        "normalized": "",
        "package": "vhdl",
        "partial": "Nor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Not",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Not Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Not",
        "normalized": "",
        "package": "vhdl",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Open",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Open",
        "fct-source": "src/Language-VHDL-AST.html#ActualDesig",
        "fct-type": "function",
        "title": "Open"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Open",
        "normalized": "",
        "package": "vhdl",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Or",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Or Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Or",
        "normalized": "",
        "package": "vhdl",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Others",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Others",
        "fct-source": "src/Language-VHDL-AST.html#Choice",
        "fct-type": "function",
        "title": "Others"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Others",
        "normalized": "",
        "package": "vhdl",
        "partial": "Others",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Out",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Out",
        "fct-source": "src/Language-VHDL-AST.html#Mode",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Out",
        "normalized": "",
        "package": "vhdl",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDISD",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PDISD SubtypeDec",
        "fct-source": "src/Language-VHDL-AST.html#PackageDecItem",
        "fct-type": "function",
        "title": "PDISD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PDISD",
        "normalized": "",
        "package": "vhdl",
        "partial": "PDISD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDISS",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PDISS SubProgSpec",
        "fct-source": "src/Language-VHDL-AST.html#PackageDecItem",
        "fct-type": "function",
        "title": "PDISS"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PDISS",
        "normalized": "",
        "package": "vhdl",
        "partial": "PDISS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PDITD",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PDITD TypeDec",
        "fct-source": "src/Language-VHDL-AST.html#PackageDecItem",
        "fct-type": "function",
        "title": "PDITD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PDITD",
        "normalized": "",
        "package": "vhdl",
        "partial": "PDITD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PMapAspect",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PMapAspect [AssocElem]",
        "fct-source": "src/Language-VHDL-AST.html#PMapAspect",
        "fct-type": "function",
        "title": "PMapAspect"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PMapAspect",
        "normalized": "PMapAspect[AssocElem]",
        "package": "vhdl",
        "partial": "PMap Aspect",
        "signature": "PMapAspect[AssocElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PackageBody",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PackageBody VHDLId [PackageBodyDecItem]",
        "fct-source": "src/Language-VHDL-AST.html#PackageBody",
        "fct-type": "function",
        "title": "PackageBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageBody",
        "normalized": "PackageBody VHDLId[PackageBodyDecItem]",
        "package": "vhdl",
        "partial": "Package Body",
        "signature": "PackageBody VHDLId[PackageBodyDecItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PackageDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PackageDec VHDLId [PackageDecItem]",
        "fct-source": "src/Language-VHDL-AST.html#PackageDec",
        "fct-type": "function",
        "title": "PackageDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PackageDec",
        "normalized": "PackageDec VHDLId[PackageDecItem]",
        "package": "vhdl",
        "partial": "Package Dec",
        "signature": "PackageDec VHDLId[PackageDecItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Pos",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Pos Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Pos",
        "normalized": "",
        "package": "vhdl",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimFCall",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PrimFCall FCall",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "PrimFCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PrimFCall",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prim FCall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimLit",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PrimLit Literal",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "PrimLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PrimLit",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prim Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:PrimName",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "PrimName VHDLName",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "PrimName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "PrimName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prim Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ProcCall",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ProcCall VHDLName [AssocElem]",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "ProcCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ProcCall",
        "normalized": "ProcCall VHDLName[AssocElem]",
        "package": "vhdl",
        "partial": "Proc Call",
        "signature": "ProcCall VHDLName[AssocElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ProcSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ProcSm Label [SimpleName] [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#ProcSm",
        "fct-type": "function",
        "title": "ProcSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ProcSm",
        "normalized": "ProcSm Label[SimpleName][SeqSm]",
        "package": "vhdl",
        "partial": "Proc Sm",
        "signature": "ProcSm Label[SimpleName][SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:RecordTypeDef",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "RecordTypeDef [ElementDec]",
        "fct-source": "src/Language-VHDL-AST.html#RecordTypeDef",
        "fct-type": "function",
        "title": "RecordTypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "RecordTypeDef",
        "normalized": "RecordTypeDef[ElementDec]",
        "package": "vhdl",
        "partial": "Record Type Def",
        "signature": "RecordTypeDef[ElementDec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Rem",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Rem Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Rem"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Rem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Rem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ReturnSm",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ReturnSm (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "ReturnSm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ReturnSm",
        "normalized": "",
        "package": "vhdl",
        "partial": "Return Sm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Rol",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Rol Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Rol"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Rol",
        "normalized": "",
        "package": "vhdl",
        "partial": "Rol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Ror",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Ror Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Ror"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Ror",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPCD",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SPCD ConstDec",
        "fct-source": "src/Language-VHDL-AST.html#SubProgDecItem",
        "fct-type": "function",
        "title": "SPCD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SPCD",
        "normalized": "",
        "package": "vhdl",
        "partial": "SPCD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPSB",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SPSB SubProgBody",
        "fct-source": "src/Language-VHDL-AST.html#SubProgDecItem",
        "fct-type": "function",
        "title": "SPSB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SPSB",
        "normalized": "",
        "package": "vhdl",
        "partial": "SPSB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SPVD",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SPVD VarDec",
        "fct-source": "src/Language-VHDL-AST.html#SubProgDecItem",
        "fct-type": "function",
        "title": "SPVD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SPVD",
        "normalized": "",
        "package": "vhdl",
        "partial": "SPVD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SSimple",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SSimple SimpleName",
        "fct-source": "src/Language-VHDL-AST.html#Suffix",
        "fct-type": "function",
        "title": "SSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SSimple",
        "normalized": "",
        "package": "vhdl",
        "partial": "SSimple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SigAssign",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SigAssign VHDLName Wform",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "SigAssign"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SigAssign",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sig Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SigDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SigDec VHDLId TypeMark (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#SigDec",
        "fct-type": "function",
        "title": "SigDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SigDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sig Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sla",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Sla Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Sla"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Sla",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sla",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SliceName",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SliceName Prefix DiscreteRange",
        "fct-source": "src/Language-VHDL-AST.html#SliceName",
        "fct-type": "function",
        "title": "SliceName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SliceName",
        "normalized": "",
        "package": "vhdl",
        "partial": "Slice Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sll",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Sll Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Sll"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Sll",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Sra",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Sra Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Sra"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Sra",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Srl",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Srl Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Srl"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Srl",
        "normalized": "",
        "package": "vhdl",
        "partial": "Srl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubProgBody",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SubProgBody SubProgSpec [SubProgDecItem] [SeqSm]",
        "fct-source": "src/Language-VHDL-AST.html#SubProgBody",
        "fct-type": "function",
        "title": "SubProgBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubProgBody",
        "normalized": "SubProgBody SubProgSpec[SubProgDecItem][SeqSm]",
        "package": "vhdl",
        "partial": "Sub Prog Body",
        "signature": "SubProgBody SubProgSpec[SubProgDecItem][SeqSm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubTypeRange",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SubTypeRange Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Range",
        "fct-type": "function",
        "title": "SubTypeRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubTypeRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "Sub Type Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubtypeDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SubtypeDec VHDLId SubtypeIn",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeDec",
        "fct-type": "function",
        "title": "SubtypeDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubtypeDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Subtype Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:SubtypeIn",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "SubtypeIn TypeMark (Maybe SubtypeConstraint)",
        "fct-source": "src/Language-VHDL-AST.html#SubtypeIn",
        "fct-type": "function",
        "title": "SubtypeIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "SubtypeIn",
        "normalized": "",
        "package": "vhdl",
        "partial": "Subtype In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDA",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "TDA ArrayTypeDef",
        "fct-source": "src/Language-VHDL-AST.html#TypeDef",
        "fct-type": "function",
        "title": "TDA"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TDA",
        "normalized": "",
        "package": "vhdl",
        "partial": "TDA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDE",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "TDE EnumTypeDef",
        "fct-source": "src/Language-VHDL-AST.html#TypeDef",
        "fct-type": "function",
        "title": "TDE"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TDE",
        "normalized": "",
        "package": "vhdl",
        "partial": "TDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDI",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "TDI IntegerTypeDef",
        "fct-source": "src/Language-VHDL-AST.html#TypeDef",
        "fct-type": "function",
        "title": "TDI"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TDI",
        "normalized": "",
        "package": "vhdl",
        "partial": "TDI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TDR",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "TDR RecordTypeDef",
        "fct-source": "src/Language-VHDL-AST.html#TypeDef",
        "fct-type": "function",
        "title": "TDR"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TDR",
        "normalized": "",
        "package": "vhdl",
        "partial": "TDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:ToRange",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "ToRange Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Range",
        "fct-type": "function",
        "title": "ToRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "ToRange",
        "normalized": "",
        "package": "vhdl",
        "partial": "To Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:TypeDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "TypeDec VHDLId TypeDef",
        "fct-source": "src/Language-VHDL-AST.html#TypeDec",
        "fct-type": "function",
        "title": "TypeDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "TypeDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Type Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Unaffected",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Unaffected",
        "fct-source": "src/Language-VHDL-AST.html#Wform",
        "fct-type": "function",
        "title": "Unaffected"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Unaffected",
        "normalized": "",
        "package": "vhdl",
        "partial": "Unaffected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:UnconsArrayDef",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "UnconsArrayDef [TypeMark] TypeMark",
        "fct-source": "src/Language-VHDL-AST.html#ArrayTypeDef",
        "fct-type": "function",
        "title": "UnconsArrayDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "UnconsArrayDef",
        "normalized": "UnconsArrayDef[TypeMark]TypeMark",
        "package": "vhdl",
        "partial": "Uncons Array Def",
        "signature": "UnconsArrayDef[TypeMark]TypeMark"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Use",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Use SelectedName",
        "fct-source": "src/Language-VHDL-AST.html#ContextItem",
        "fct-type": "function",
        "title": "Use"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Use",
        "normalized": "",
        "package": "vhdl",
        "partial": "Use",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:VarDec",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "VarDec VHDLId SubtypeIn (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#VarDec",
        "fct-type": "function",
        "title": "VarDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "VarDec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Var Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WaitFor",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "WaitFor Expr",
        "fct-source": "src/Language-VHDL-AST.html#SeqSm",
        "fct-type": "function",
        "title": "WaitFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "WaitFor",
        "normalized": "",
        "package": "vhdl",
        "partial": "Wait For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Wform",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Wform [WformElem]",
        "fct-source": "src/Language-VHDL-AST.html#Wform",
        "fct-type": "function",
        "title": "Wform"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Wform",
        "normalized": "Wform[WformElem]",
        "package": "vhdl",
        "partial": "Wform",
        "signature": "Wform[WformElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WformElem",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "WformElem Expr (Maybe Expr)",
        "fct-source": "src/Language-VHDL-AST.html#WformElem",
        "fct-type": "function",
        "title": "WformElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "WformElem",
        "normalized": "",
        "package": "vhdl",
        "partial": "Wform Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:When",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "When Expr",
        "fct-source": "src/Language-VHDL-AST.html#When",
        "fct-type": "function",
        "title": "When"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "When",
        "normalized": "",
        "package": "vhdl",
        "partial": "When",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:WhenElse",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "WhenElse Wform Expr",
        "fct-source": "src/Language-VHDL-AST.html#WhenElse",
        "fct-type": "function",
        "title": "WhenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "WhenElse",
        "normalized": "",
        "package": "vhdl",
        "partial": "When Else",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Xnor",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Xnor Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Xnor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Xnor",
        "normalized": "",
        "package": "vhdl",
        "partial": "Xnor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:Xor",
      "description": {
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Xor Expr Expr",
        "fct-source": "src/Language-VHDL-AST.html#Expr",
        "fct-type": "function",
        "title": "Xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "Xor",
        "normalized": "",
        "package": "vhdl",
        "partial": "Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:fromVHDLId",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the String of a VHDL identifier\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "VHDLId -\u003e String",
        "fct-source": "src/Language-VHDL-AST.html#fromVHDLId",
        "fct-type": "function",
        "title": "fromVHDLId"
      },
      "index": {
        "description": "Obtain the String of VHDL identifier",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "fromVHDLId",
        "normalized": "VHDLId-\u003eString",
        "package": "vhdl",
        "partial": "VHDLId",
        "signature": "VHDLId-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:logicalPrec",
      "description": {
        "fct-descr": "\u003cp\u003eLogical Operators precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#logicalPrec",
        "fct-type": "function",
        "title": "logicalPrec"
      },
      "index": {
        "description": "Logical Operators precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "logicalPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:miscPrec",
      "description": {
        "fct-descr": "\u003cp\u003eMiscellaneous Operators Precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#miscPrec",
        "fct-type": "function",
        "title": "miscPrec"
      },
      "index": {
        "description": "Miscellaneous Operators Precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "miscPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:mkVHDLBasicId",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a VHDL basic identifier from a String, previously checking if the  \n   String is correct\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "String -\u003e EProne VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#mkVHDLBasicId",
        "fct-type": "function",
        "title": "mkVHDLBasicId"
      },
      "index": {
        "description": "Create VHDL basic identifier from String previously checking if the String is correct",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "mkVHDLBasicId",
        "normalized": "String-\u003eEProne VHDLId",
        "package": "vhdl",
        "partial": "VHDLBasic Id",
        "signature": "String-\u003eEProne VHDLId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:mkVHDLExtId",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a VHDL extended identifier from a String, previously checking \n   if the String is correct. The input string must not include the initial\n   and ending backslashes nad the intermediate backslashes shouldn't be escaped.\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "String -\u003e EProne VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#mkVHDLExtId",
        "fct-type": "function",
        "title": "mkVHDLExtId"
      },
      "index": {
        "description": "Create VHDL extended identifier from String previously checking if the String is correct The input string must not include the initial and ending backslashes nad the intermediate backslashes shouldn be escaped",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "mkVHDLExtId",
        "normalized": "String-\u003eEProne VHDLId",
        "package": "vhdl",
        "partial": "VHDLExt Id",
        "signature": "String-\u003eEProne VHDLId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:multPrec",
      "description": {
        "fct-descr": "\u003cp\u003eMultplying Operators Precedecne\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#multPrec",
        "fct-type": "function",
        "title": "multPrec"
      },
      "index": {
        "description": "Multplying Operators Precedecne",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "multPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:otherSpecialChars",
      "description": {
        "fct-descr": "\u003cp\u003eother special characters as defined in the VHDL93 standard\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "[Char]",
        "fct-source": "src/Language-VHDL-AST.html#otherSpecialChars",
        "fct-type": "function",
        "title": "otherSpecialChars"
      },
      "index": {
        "description": "other special characters as defined in the VHDL93 standard",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "otherSpecialChars",
        "normalized": "[Char]",
        "package": "vhdl",
        "partial": "Special Chars",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:plusPrec",
      "description": {
        "fct-descr": "\u003cp\u003ePlus Operators precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#plusPrec",
        "fct-type": "function",
        "title": "plusPrec"
      },
      "index": {
        "description": "Plus Operators precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "plusPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:relationalPrec",
      "description": {
        "fct-descr": "\u003cp\u003eRelational Operators Precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#relationalPrec",
        "fct-type": "function",
        "title": "relationalPrec"
      },
      "index": {
        "description": "Relational Operators Precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "relationalPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:reservedWords",
      "description": {
        "fct-descr": "\u003cp\u003eReserved identifiers\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "[String]",
        "fct-source": "src/Language-VHDL-AST.html#reservedWords",
        "fct-type": "function",
        "title": "reservedWords"
      },
      "index": {
        "description": "Reserved identifiers",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "reservedWords",
        "normalized": "[String]",
        "package": "vhdl",
        "partial": "Words",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:shiftPrec",
      "description": {
        "fct-descr": "\u003cp\u003eShift Operators Precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#shiftPrec",
        "fct-type": "function",
        "title": "shiftPrec"
      },
      "index": {
        "description": "Shift Operators Precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "shiftPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:signPrec",
      "description": {
        "fct-descr": "\u003cp\u003eSign Operators Precedence\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "Int",
        "fct-source": "src/Language-VHDL-AST.html#signPrec",
        "fct-type": "function",
        "title": "signPrec"
      },
      "index": {
        "description": "Sign Operators Precedence",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "signPrec",
        "normalized": "",
        "package": "vhdl",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:specialChars",
      "description": {
        "fct-descr": "\u003cp\u003especial characters as defined in the VHDL93 standard\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "[Char]",
        "fct-source": "src/Language-VHDL-AST.html#specialChars",
        "fct-type": "function",
        "title": "specialChars"
      },
      "index": {
        "description": "special characters as defined in the VHDL93 standard",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "specialChars",
        "normalized": "[Char]",
        "package": "vhdl",
        "partial": "Chars",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeIdAppend",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely append a string to a VHDL identifier (i.e. without checking if\n  the resulting identifier is valid)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "VHDLId -\u003e String -\u003e VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#unsafeIdAppend",
        "fct-type": "function",
        "title": "unsafeIdAppend"
      },
      "index": {
        "description": "Unsafely append string to VHDL identifier i.e without checking if the resulting identifier is valid",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "unsafeIdAppend",
        "normalized": "VHDLId-\u003eString-\u003eVHDLId",
        "package": "vhdl",
        "partial": "Id Append",
        "signature": "VHDLId-\u003eString-\u003eVHDLId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeVHDLBasicId",
      "description": {
        "fct-descr": "\u003cp\u003eunsafely create a basic VHDLId (without cheking if the string is correct)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "String -\u003e VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#unsafeVHDLBasicId",
        "fct-type": "function",
        "title": "unsafeVHDLBasicId"
      },
      "index": {
        "description": "unsafely create basic VHDLId without cheking if the string is correct",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "unsafeVHDLBasicId",
        "normalized": "String-\u003eVHDLId",
        "package": "vhdl",
        "partial": "VHDLBasic Id",
        "signature": "String-\u003eVHDLId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-AST.html#v:unsafeVHDLExtId",
      "description": {
        "fct-descr": "\u003cp\u003eunsafely create an exteded VHDLId (without cheking if the string is \n   correct)\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.AST",
        "fct-package": "vhdl",
        "fct-signature": "String -\u003e VHDLId",
        "fct-source": "src/Language-VHDL-AST.html#unsafeVHDLExtId",
        "fct-type": "function",
        "title": "unsafeVHDLExtId"
      },
      "index": {
        "description": "unsafely create an exteded VHDLId without cheking if the string is correct",
        "hierarchy": "Language VHDL AST",
        "module": "Language.VHDL.AST",
        "name": "unsafeVHDLExtId",
        "normalized": "String-\u003eVHDLId",
        "package": "vhdl",
        "partial": "VHDLExt Id",
        "signature": "String-\u003eVHDLId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-FileIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions working with files in the VHDL backend. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.VHDL.FileIO",
        "fct-package": "vhdl",
        "fct-signature": "module",
        "fct-source": "src/Language-VHDL-FileIO.html",
        "fct-type": "module",
        "title": "FileIO"
      },
      "index": {
        "description": "Functions working with files in the VHDL backend",
        "hierarchy": "Language VHDL FileIO",
        "module": "Language.VHDL.FileIO",
        "name": "FileIO",
        "normalized": "",
        "package": "vhdl",
        "partial": "File IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-FileIO.html#v:writeDesignFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a design file to a file in disk\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.FileIO",
        "fct-package": "vhdl",
        "fct-signature": "DesignFile -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Language-VHDL-FileIO.html#writeDesignFile",
        "fct-type": "function",
        "title": "writeDesignFile"
      },
      "index": {
        "description": "Write design file to file in disk",
        "hierarchy": "Language VHDL FileIO",
        "module": "Language.VHDL.FileIO",
        "name": "writeDesignFile",
        "normalized": "DesignFile-\u003eFilePath-\u003eIO()",
        "package": "vhdl",
        "partial": "Design File",
        "signature": "DesignFile-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForSyDe pretty-printing class and auxiliar functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "module",
        "fct-source": "src/Language-VHDL-Ppr.html",
        "fct-type": "module",
        "title": "Ppr"
      },
      "index": {
        "description": "ForSyDe pretty-printing class and auxiliar functions",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "Ppr",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ppr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#t:Ppr",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printing class\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "class",
        "fct-source": "src/Language-VHDL-Ppr.html#Ppr",
        "fct-type": "class",
        "title": "Ppr"
      },
      "index": {
        "description": "Pretty printing class",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "Ppr",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ppr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#t:PprOps",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printing class with associated printing options\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "class",
        "fct-source": "src/Language-VHDL-Ppr.html#PprOps",
        "fct-type": "class",
        "title": "PprOps"
      },
      "index": {
        "description": "Pretty printing class with associated printing options",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "PprOps",
        "normalized": "",
        "package": "vhdl",
        "partial": "Ppr Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:-36--43--43--36-",
      "description": {
        "fct-descr": "\u003cp\u003eOnly append if both of the documents are non-empty\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#%24%2B%2B%24",
        "fct-type": "function",
        "title": "($++$)"
      },
      "index": {
        "description": "Only append if both of the documents are non-empty",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "($++$) $++$",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:-60--43--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eOnly append if both of the documents are non-empty\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#%3C%2B%2B%3E",
        "fct-type": "function",
        "title": "(\u003c++\u003e)"
      },
      "index": {
        "description": "Only append if both of the documents are non-empty",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "(\u003c++\u003e) \u003c++\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:commaSep",
      "description": {
        "fct-descr": "\u003cp\u003eapply sep to a list of prettyprintable elements, \n   previously interspersing commas\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "[a] -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#commaSep",
        "fct-type": "function",
        "title": "commaSep"
      },
      "index": {
        "description": "apply sep to list of prettyprintable elements previously interspersing commas",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "commaSep",
        "normalized": "[a]-\u003eDoc",
        "package": "vhdl",
        "partial": "Sep",
        "signature": "[a]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:dot",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "dot",
        "normalized": "",
        "package": "vhdl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:hComma",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#hComma",
        "fct-type": "function",
        "title": "hComma"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "hComma",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "Comma",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:multiVSpace",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Int -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#multiVSpace",
        "fct-type": "function",
        "title": "multiVSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "multiVSpace",
        "normalized": "Int-\u003eDoc",
        "package": "vhdl",
        "partial": "VSpace",
        "signature": "Int-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:parensIf",
      "description": {
        "fct-descr": "\u003cp\u003eEnclose in parenthesis only if the predicate is True\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Bool -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#parensIf",
        "fct-type": "function",
        "title": "parensIf"
      },
      "index": {
        "description": "Enclose in parenthesis only if the predicate is True",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "parensIf",
        "normalized": "Bool-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "If",
        "signature": "Bool-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:parensNonEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eEnclose in parenthesis only if the document is non-empty\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#parensNonEmpty",
        "fct-type": "function",
        "title": "parensNonEmpty"
      },
      "index": {
        "description": "Enclose in parenthesis only if the document is non-empty",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "parensNonEmpty",
        "normalized": "Doc-\u003eDoc",
        "package": "vhdl",
        "partial": "Non Empty",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:ppr",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#ppr",
        "fct-type": "method",
        "title": "ppr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "ppr",
        "normalized": "a-\u003eDoc",
        "package": "vhdl",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:pprOps",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "ops -\u003e toPpr -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#pprOps",
        "fct-type": "method",
        "title": "pprOps"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "pprOps",
        "normalized": "a-\u003eb-\u003eDoc",
        "package": "vhdl",
        "partial": "Ops",
        "signature": "ops-\u003etoPpr-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:pprOps_list",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "ops -\u003e (Doc -\u003e Doc -\u003e Doc) -\u003e [toPpr] -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#pprOps_list",
        "fct-type": "function",
        "title": "pprOps_list"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "pprOps_list",
        "normalized": "a-\u003e(Doc-\u003eDoc-\u003eDoc)-\u003e[b]-\u003eDoc",
        "package": "vhdl",
        "partial": "Ops",
        "signature": "ops-\u003e(Doc-\u003eDoc-\u003eDoc)-\u003e[toPpr]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:ppr_list",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "(Doc -\u003e Doc -\u003e Doc) -\u003e [a] -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#ppr_list",
        "fct-type": "function",
        "title": "ppr_list"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "ppr_list",
        "normalized": "(Doc-\u003eDoc-\u003eDoc)-\u003e[a]-\u003eDoc",
        "package": "vhdl",
        "partial": "",
        "signature": "(Doc-\u003eDoc-\u003eDoc)-\u003e[a]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vComma",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#vComma",
        "fct-type": "function",
        "title": "vComma"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "vComma",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "Comma",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vNSpaces",
      "description": {
        "fct-descr": "\u003cp\u003eJoin two documents vertically leaving n vertical spaces between them\n\u003c/p\u003e",
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Int -\u003e Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#vNSpaces",
        "fct-type": "function",
        "title": "vNSpaces"
      },
      "index": {
        "description": "Join two documents vertically leaving vertical spaces between them",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "vNSpaces",
        "normalized": "Int-\u003eDoc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "NSpaces",
        "signature": "Int-\u003eDoc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vSemi",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#vSemi",
        "fct-type": "function",
        "title": "vSemi"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "vSemi",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "vhdl",
        "partial": "Semi",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vhdl/docs/Language-VHDL-Ppr.html#v:vSpace",
      "description": {
        "fct-module": "Language.VHDL.Ppr",
        "fct-package": "vhdl",
        "fct-signature": "Doc",
        "fct-source": "src/Language-VHDL-Ppr.html#vSpace",
        "fct-type": "function",
        "title": "vSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Language VHDL Ppr",
        "module": "Language.VHDL.Ppr",
        "name": "vSpace",
        "normalized": "",
        "package": "vhdl",
        "partial": "Space",
        "signature": ""
      }
    }
  }
]