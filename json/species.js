[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType class instances for \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e, in a separate module to avoid a dependency cycle\n between \u003ca\u003eMath.Combinatorics.Species.AST\u003c/a\u003e and\n \u003ca\u003eMath.Combinatorics.Species.Class\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module also contains functions for reifying species\n expressions to ASTs and reflecting ASTs back into other species\n instances, which are in this module since they depend on the AST\n type class instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Type class instances for TSpeciesAST ESpeciesAST and SpeciesAST in separate module to avoid dependency cycle between Math.Combinatorics.Species.AST and Math.Combinatorics.Species.Class This module also contains functions for reifying species expressions to ASTs and reflecting ASTs back into other species instances which are in this module since they depend on the AST type class instances",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "species",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eReflect an AST back into any instance of the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reflect",
        "fct-type": "function",
        "title": "reflect"
      },
      "index": {
        "description": "Reflect an AST back into any instance of the Species class",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "reflect",
        "normalized": "SpeciesAST-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#v:reflectE",
      "description": {
        "fct-descr": "\u003cp\u003eReflect an existentially wrapped typed AST back into any\n instance of the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reflectE",
        "fct-type": "function",
        "title": "reflectE"
      },
      "index": {
        "description": "Reflect an existentially wrapped typed AST back into any instance of the Species class",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "reflectE",
        "normalized": "ESpeciesAST-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#v:reflectT",
      "description": {
        "fct-descr": "\u003cp\u003eReflect a typed AST back into any instance of the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e\n class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST f -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reflectT",
        "fct-type": "function",
        "title": "reflectT"
      },
      "index": {
        "description": "Reflect typed AST back into any instance of the Species class",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "reflectT",
        "normalized": "TSpeciesAST a-\u003eb",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST f-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#v:reify",
      "description": {
        "fct-descr": "\u003cp\u003eReify a species expression into an AST.  (Actually, this is just\n   the identity function with a usefully restricted type.)  For\n   example:\n\u003c/p\u003e\u003cpre\u003e \u003e reify octopus\n C . TL+\n \u003e reify (ksubset 3)\n E3 * TE\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reify",
        "fct-type": "function",
        "title": "reify"
      },
      "index": {
        "description": "Reify species expression into an AST Actually this is just the identity function with usefully restricted type For example reify octopus TL reify ksubset E3 TE",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "reify",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST-Instances.html#v:reifyE",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as reify, but produce a typed, size-annotated AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST.Instances",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reifyE",
        "fct-type": "function",
        "title": "reifyE"
      },
      "index": {
        "description": "The same as reify but produce typed size-annotated AST",
        "hierarchy": "Math Combinatorics Species AST Instances",
        "module": "Math.Combinatorics.Species.AST.Instances",
        "name": "reifyE",
        "normalized": "ESpeciesAST-\u003eESpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious data structures representing reified combinatorial species\n expressions.  See also \u003ca\u003eMath.Combinatorics.Species.AST.Instances\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-AST.html",
        "fct-type": "module",
        "title": "AST"
      },
      "index": {
        "description": "Various data structures representing reified combinatorial species expressions See also Math.Combinatorics.Species.AST.Instances",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "AST",
        "normalized": "",
        "package": "species",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#t:ASTFunctor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eASTFunctor\u003c/a\u003e\u003c/code\u003e is a type class for codes which can be interpreted\n   (via the \u003ccode\u003e\u003ca\u003eInterp\u003c/a\u003e\u003c/code\u003e type family) as higher-order functors over\n   species expressions.  The \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e method allows such codes to be\n   applied to a species AST.  The indirection is needed to implement\n   recursive species.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#ASTFunctor",
        "fct-type": "class",
        "title": "ASTFunctor"
      },
      "index": {
        "description": "ASTFunctor is type class for codes which can be interpreted via the Interp type family as higher-order functors over species expressions The apply method allows such codes to be applied to species AST The indirection is needed to implement recursive species",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "ASTFunctor",
        "normalized": "",
        "package": "species",
        "partial": "ASTFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#t:ESpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eAn existential wrapper to hide the phantom type parameter to\n   \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e, so we can make it an instance of \u003ccode\u003eSpecies\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#ESpeciesAST",
        "fct-type": "data",
        "title": "ESpeciesAST"
      },
      "index": {
        "description": "An existential wrapper to hide the phantom type parameter to SizedSpeciesAST so we can make it an instance of Species",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "ESpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "ESpecies AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#t:SizedSpeciesAST",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SizedSpeciesAST",
        "fct-type": "data",
        "title": "SizedSpeciesAST"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "SizedSpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "Sized Species AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#t:SpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eA basic, untyped AST type for species expressions, for easily\n doing things like analysis, simplification, deriving isomorphisms,\n and so on.  Converting between \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e and the typed variant\n \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e can be done with \u003ccode\u003e\u003ca\u003eannotate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eerase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "data",
        "title": "SpeciesAST"
      },
      "index": {
        "description": "basic untyped AST type for species expressions for easily doing things like analysis simplification deriving isomorphisms and so on Converting between SpeciesAST and the typed variant ESpeciesAST can be done with annotate and erase",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "SpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "Species AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#t:TSpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e with a phantom type parameter which\n   also reflects the structure, so we can write\n   quasi-dependently-typed functions over species, in particular for\n   species enumeration.\n\u003c/p\u003e\u003cp\u003eOf course, the non-uniform type parameter means that\n   \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e cannot be an instance of the \u003ccode\u003eSpecies\u003c/code\u003e class; for\n   that purpose the existential wrapper \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e is provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e is defined via mutual recursion with\n   \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e, which pairs a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e with an interval\n   annotation indicating (a conservative approximation of) the label\n   set sizes for which the species actually yields any structures;\n   this information makes enumeration faster and also prevents it\n   from getting stuck in infinite recursion in some cases.  A value\n   of \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e is thus an annotated species expression tree\n   with interval annotations at every node.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "data",
        "title": "TSpeciesAST"
      },
      "index": {
        "description": "variant of SpeciesAST with phantom type parameter which also reflects the structure so we can write quasi-dependently-typed functions over species in particular for species enumeration Of course the non-uniform type parameter means that TSpeciesAST cannot be an instance of the Species class for that purpose the existential wrapper ESpeciesAST is provided TSpeciesAST is defined via mutual recursion with SizedSpeciesAST which pairs TSpeciesAST with an interval annotation indicating conservative approximation of the label set sizes for which the species actually yields any structures this information makes enumeration faster and also prevents it from getting stuck in infinite recursion in some cases value of SizedSpeciesAST is thus an annotated species expression tree with interval annotations at every node",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TSpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "TSpecies AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-42-",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": ":*"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":*",
        "normalized": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-42-::",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e SizedSpeciesAST g -\u003e TSpeciesAST (f :*: g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": ":*::"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":*::",
        "normalized": "SizedSpeciesAST a-\u003eSizedSpeciesAST b-\u003eTSpeciesAST(a*b)",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST f-\u003eSizedSpeciesAST g-\u003eTSpeciesAST(f*g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-43-",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": ":+"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":+",
        "normalized": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-43-::",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e SizedSpeciesAST g -\u003e TSpeciesAST (f :+: g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": ":+::"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":+::",
        "normalized": "SizedSpeciesAST a-\u003eSizedSpeciesAST b-\u003eTSpeciesAST(a b)",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST f-\u003eSizedSpeciesAST g-\u003eTSpeciesAST(f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-62--60-",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": ":\u003e\u003c"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":\u003e\u003c",
        "normalized": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-62--60-::",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e SizedSpeciesAST g -\u003e TSpeciesAST (f :*: g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": ":\u003e\u003c::"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":\u003e\u003c::",
        "normalized": "SizedSpeciesAST a-\u003eSizedSpeciesAST b-\u003eTSpeciesAST(a*b)",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST f-\u003eSizedSpeciesAST g-\u003eTSpeciesAST(f*g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-64-",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": ":@"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":@",
        "normalized": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::-64-::",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e SizedSpeciesAST g -\u003e TSpeciesAST (f :.: g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": ":@::"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":@::",
        "normalized": "SizedSpeciesAST a-\u003eSizedSpeciesAST b-\u003eTSpeciesAST(a b)",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST f-\u003eSizedSpeciesAST g-\u003eTSpeciesAST(f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::.",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":.",
        "normalized": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v::.::",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e SizedSpeciesAST g -\u003e TSpeciesAST (f :.: g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": ":.::"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": ":.::",
        "normalized": "SizedSpeciesAST a-\u003eSizedSpeciesAST b-\u003eTSpeciesAST(a b)",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST f-\u003eSizedSpeciesAST g-\u003eTSpeciesAST(f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:C",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "C",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Der",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Der"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Der",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "Der",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:E",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "E"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "E",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Elt",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Elt"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Elt",
        "normalized": "",
        "package": "species",
        "partial": "Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:KSubset",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "KSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "KSubset",
        "normalized": "Integer-\u003eSpeciesAST",
        "package": "species",
        "partial": "KSubset",
        "signature": "Integer-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:L",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "L",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:N",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "N",
        "normalized": "Integer-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:NonEmpty",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "NonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "NonEmpty",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "Non Empty",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:OfSize",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e (Integer -\u003e Bool) -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "OfSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "OfSize",
        "normalized": "SpeciesAST-\u003e(Integer-\u003eBool)-\u003eSpeciesAST",
        "package": "species",
        "partial": "Of Size",
        "signature": "SpeciesAST-\u003e(Integer-\u003eBool)-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:OfSizeExactly",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Integer -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "OfSizeExactly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "OfSizeExactly",
        "normalized": "SpeciesAST-\u003eInteger-\u003eSpeciesAST",
        "package": "species",
        "partial": "Of Size Exactly",
        "signature": "SpeciesAST-\u003eInteger-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Omega",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Omega"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Omega",
        "normalized": "",
        "package": "species",
        "partial": "Omega",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:One",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "One",
        "normalized": "",
        "package": "species",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Rec",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "f -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Rec",
        "normalized": "a-\u003eSpeciesAST",
        "package": "species",
        "partial": "Rec",
        "signature": "f-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Sized",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e TSpeciesAST s -\u003e SizedSpeciesAST s",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SizedSpeciesAST",
        "fct-type": "function",
        "title": "Sized"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Sized",
        "normalized": "Interval-\u003eTSpeciesAST a-\u003eSizedSpeciesAST a",
        "package": "species",
        "partial": "Sized",
        "signature": "Interval-\u003eTSpeciesAST s-\u003eSizedSpeciesAST s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Subset",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Subset"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Subset",
        "normalized": "",
        "package": "species",
        "partial": "Subset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TC",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Cycle",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TC"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TC",
        "normalized": "",
        "package": "species",
        "partial": "TC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TDer",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e TSpeciesAST (f :.: Star)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TDer"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TDer",
        "normalized": "SizedSpeciesAST a-\u003eTSpeciesAST(a Star)",
        "package": "species",
        "partial": "TDer",
        "signature": "SizedSpeciesAST f-\u003eTSpeciesAST(f Star)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TE",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Set",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TE",
        "normalized": "",
        "package": "species",
        "partial": "TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TElt",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Id",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TElt"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TElt",
        "normalized": "",
        "package": "species",
        "partial": "TElt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TKSubset",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e TSpeciesAST Set",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TKSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TKSubset",
        "normalized": "Integer-\u003eTSpeciesAST Set",
        "package": "species",
        "partial": "TKSubset",
        "signature": "Integer-\u003eTSpeciesAST Set"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TL",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST []",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TL"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TL",
        "normalized": "TSpeciesAST[]",
        "package": "species",
        "partial": "TL",
        "signature": "TSpeciesAST[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TN",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e TSpeciesAST (Const Integer)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TN"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TN",
        "normalized": "Integer-\u003eTSpeciesAST(Const Integer)",
        "package": "species",
        "partial": "TN",
        "signature": "Integer-\u003eTSpeciesAST(Const Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TNonEmpty",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e TSpeciesAST f",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TNonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TNonEmpty",
        "normalized": "SizedSpeciesAST a-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "TNon Empty",
        "signature": "SizedSpeciesAST f-\u003eTSpeciesAST f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TOfSize",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e (Integer -\u003e Bool) -\u003e TSpeciesAST f",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TOfSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TOfSize",
        "normalized": "SizedSpeciesAST a-\u003e(Integer-\u003eBool)-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "TOf Size",
        "signature": "SizedSpeciesAST f-\u003e(Integer-\u003eBool)-\u003eTSpeciesAST f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TOfSizeExactly",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST f -\u003e Integer -\u003e TSpeciesAST f",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TOfSizeExactly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TOfSizeExactly",
        "normalized": "SizedSpeciesAST a-\u003eInteger-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "TOf Size Exactly",
        "signature": "SizedSpeciesAST f-\u003eInteger-\u003eTSpeciesAST f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TOmega",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Void",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TOmega"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TOmega",
        "normalized": "",
        "package": "species",
        "partial": "TOmega",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TOne",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Unit",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TOne",
        "normalized": "",
        "package": "species",
        "partial": "TOne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TRec",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "f -\u003e TSpeciesAST (Mu f)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TRec",
        "normalized": "a-\u003eTSpeciesAST(Mu a)",
        "package": "species",
        "partial": "TRec",
        "signature": "f-\u003eTSpeciesAST(Mu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TSubset",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Set",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TSubset"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TSubset",
        "normalized": "",
        "package": "species",
        "partial": "TSubset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TX",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Id",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TX"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TX",
        "normalized": "",
        "package": "species",
        "partial": "TX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:TZero",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST Void",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "function",
        "title": "TZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "TZero",
        "normalized": "",
        "package": "species",
        "partial": "TZero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Wrap",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST s -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#ESpeciesAST",
        "fct-type": "function",
        "title": "Wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Wrap",
        "normalized": "SizedSpeciesAST a-\u003eESpeciesAST",
        "package": "species",
        "partial": "Wrap",
        "signature": "SizedSpeciesAST s-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:X",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "X",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:Zero",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "Zero",
        "normalized": "",
        "package": "species",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:annI",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e with the interval of label set sizes for\n   which it yields structures.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST s -\u003e SizedSpeciesAST s",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#annI",
        "fct-type": "function",
        "title": "annI"
      },
      "index": {
        "description": "Annotate TSpeciesAST with the interval of label set sizes for which it yields structures",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "annI",
        "normalized": "TSpeciesAST a-\u003eSizedSpeciesAST a",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST s-\u003eSizedSpeciesAST s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eReconstruct the type and interval annotations on a species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "Reconstruct the type and interval annotations on species AST",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "annotate",
        "normalized": "SpeciesAST-\u003eESpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:apply",
      "description": {
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "f -\u003e TSpeciesAST g -\u003e TSpeciesAST (Interp f g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "apply",
        "normalized": "a-\u003eTSpeciesAST b-\u003eTSpeciesAST(Interp a b)",
        "package": "species",
        "partial": "",
        "signature": "f-\u003eTSpeciesAST g-\u003eTSpeciesAST(Interp f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:erase",
      "description": {
        "fct-descr": "\u003cp\u003eErase the type and interval information from an existentially\n wrapped species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#erase",
        "fct-type": "function",
        "title": "erase"
      },
      "index": {
        "description": "Erase the type and interval information from an existentially wrapped species AST",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "erase",
        "normalized": "ESpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:erase-39-",
      "description": {
        "fct-descr": "\u003cp\u003eErase the type and interval information from a typed species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST f -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#erase%27",
        "fct-type": "function",
        "title": "erase'"
      },
      "index": {
        "description": "Erase the type and interval information from typed species AST",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "erase'",
        "normalized": "TSpeciesAST a-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST f-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:getI",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the interval annotation from a \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST s -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#getI",
        "fct-type": "function",
        "title": "getI"
      },
      "index": {
        "description": "Retrieve the interval annotation from SizedSpeciesAST",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "getI",
        "normalized": "SizedSpeciesAST a-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST s-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e, compute (a conservative approximation of)\n   the interval of label set sizes on which the species yields any\n   structures.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST s -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "Given TSpeciesAST compute conservative approximation of the interval of label set sizes on which the species yields any structures",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "interval",
        "normalized": "TSpeciesAST a-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST s-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:needsCI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eneedsCI\u003c/a\u003e\u003c/code\u003e is a predicate which checks whether a species expression\n   uses any of the operations which are not supported directly by\n   ordinary generating functions (composition, differentiation,\n   cartesian product, and functor composition), and hence need cycle\n   index series.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Bool",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#needsCI",
        "fct-type": "function",
        "title": "needsCI"
      },
      "index": {
        "description": "needsCI is predicate which checks whether species expression uses any of the operations which are not supported directly by ordinary generating functions composition differentiation cartesian product and functor composition and hence need cycle index series",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "needsCI",
        "normalized": "SpeciesAST-\u003eBool",
        "package": "species",
        "partial": "CI",
        "signature": "SpeciesAST-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:stripI",
      "description": {
        "fct-descr": "\u003cp\u003eStrip the interval annotation from a \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "SizedSpeciesAST s -\u003e TSpeciesAST s",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#stripI",
        "fct-type": "function",
        "title": "stripI"
      },
      "index": {
        "description": "Strip the interval annotation from SizedSpeciesAST",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "stripI",
        "normalized": "SizedSpeciesAST a-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "",
        "signature": "SizedSpeciesAST s-\u003eTSpeciesAST s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:substRec",
      "description": {
        "fct-descr": "\u003cp\u003eSubstitute an expression for recursive occurrences.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "f -\u003e SpeciesAST -\u003e SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#substRec",
        "fct-type": "function",
        "title": "substRec"
      },
      "index": {
        "description": "Substitute an expression for recursive occurrences",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "substRec",
        "normalized": "a-\u003eSpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "Rec",
        "signature": "f-\u003eSpeciesAST-\u003eSpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an existential wrapper to get out a typed AST.  You can\n   get out any type you like as long as it is the right one.\n\u003c/p\u003e\u003cp\u003eCAUTION: Don't try this at home!\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e TSpeciesAST s",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#unwrap",
        "fct-type": "function",
        "title": "unwrap"
      },
      "index": {
        "description": "Unwrap an existential wrapper to get out typed AST You can get out any type you like as long as it is the right one CAUTION Don try this at home",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "unwrap",
        "normalized": "ESpeciesAST-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eTSpeciesAST s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-AST.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e by adding an\n   appropriate interval annotation and hiding the type.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.AST",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST s -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Construct an ESpeciesAST from TSpeciesAST by adding an appropriate interval annotation and hiding the type",
        "hierarchy": "Math Combinatorics Species AST",
        "module": "Math.Combinatorics.Species.AST",
        "name": "wrap",
        "normalized": "TSpeciesAST a-\u003eESpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST s-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Species type class, which defines a small DSL for describing\n combinatorial species.  Other modules in this library provide\n specific instances which allow computing various properties of\n combinatorial species.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The Species type class which defines small DSL for describing combinatorial species Other modules in this library provide specific instances which allow computing various properties of combinatorial species",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "Class",
        "normalized": "",
        "package": "species",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#t:Species",
      "description": {
        "fct-descr": "\u003cp\u003eThe Species type class.  Note that the \u003ccode\u003eDifferential\u003c/code\u003e constraint\n   requires s to be a differentiable ring, which means that every\n   instance must also implement instances for \u003ca\u003eAlgebra.Additive\u003c/a\u003e\n   (the species 0 and species addition, i.e. disjoint sum),\n   \u003ca\u003eAlgebra.Ring\u003c/a\u003e (the species 1 and species multiplication,\n   i.e. partitional product), and \u003ca\u003eAlgebra.Differential\u003c/a\u003e (species\n   differentiation, i.e. adjoining a distinguished element).\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eofSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e operation can be used infix to suggest common\n   notation for composition, and also to be read as an abbreviation\n   for \"of\", as in \"top o' the mornin'\": \u003ccode\u003eset `o` nonEmpty\n   sets\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#Species",
        "fct-type": "class",
        "title": "Species"
      },
      "index": {
        "description": "The Species type class Note that the Differential constraint requires to be differentiable ring which means that every instance must also implement instances for Algebra.Additive the species and species addition i.e disjoint sum Algebra.Ring the species and species multiplication i.e partitional product and Algebra.Differential species differentiation i.e adjoining distinguished element Minimal complete definition singleton set cycle ofSize Note that the operation can be used infix to suggest common notation for composition and also to be read as an abbreviation for of as in top the mornin set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "Species",
        "normalized": "",
        "package": "species",
        "partial": "Species",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCartisian product of two species.  An \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e-structure\n consists of an \u003ccode\u003ef\u003c/code\u003e-structure superimposed on a \u003ccode\u003eg\u003c/code\u003e-structure over\n the same underlying set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#%3E%3C",
        "fct-type": "method",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Cartisian product of two species An structure consists of an structure superimposed on structure over the same underlying set",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor composition of two species.  An \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e-structure\n   consists of an \u003ccode\u003ef\u003c/code\u003e-structure on the set of all \u003ccode\u003eg\u003c/code\u003e-structures.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#%40%40",
        "fct-type": "method",
        "title": "(@@)"
      },
      "index": {
        "description": "Functor composition of two species An structure consists of an structure on the set of all structures",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "(@@) @@",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:bag",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#bag",
        "fct-type": "function",
        "title": "bag"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "bag",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:bags",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#bags",
        "fct-type": "function",
        "title": "bags"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "bags",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ballot",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of ballots consists of linear orderings of\n   nonempty sets: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eballot\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ballot",
        "fct-type": "function",
        "title": "ballot"
      },
      "index": {
        "description": "The species of ballots consists of linear orderings of nonempty sets ballot linOrd nonEmpty sets",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ballot",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ballots",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of ballots consists of linear orderings of\n   nonempty sets: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eballot\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ballots",
        "fct-type": "function",
        "title": "ballots"
      },
      "index": {
        "description": "The species of ballots consists of linear orderings of nonempty sets ballot linOrd nonEmpty sets",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ballots",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eC\u003c/code\u003e of cyclical orderings (cycles/rings).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#cycle",
        "fct-type": "method",
        "title": "cycle"
      },
      "index": {
        "description": "The species of cyclical orderings cycles rings",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "cycle",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:cycles",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#cycles",
        "fct-type": "function",
        "title": "cycles"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "cycles",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:directedGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA directed graph (with loops) is a subset of all pairs drawn\n   (with replacement) from the set of vertices: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e\n   (\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  It can also be thought of as the\n   species of binary relations.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#directedGraph",
        "fct-type": "function",
        "title": "directedGraph"
      },
      "index": {
        "description": "directed graph with loops is subset of all pairs drawn with replacement from the set of vertices subset element element It can also be thought of as the species of binary relations",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "directedGraph",
        "normalized": "",
        "package": "species",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:directedGraphs",
      "description": {
        "fct-descr": "\u003cp\u003eA directed graph (with loops) is a subset of all pairs drawn\n   (with replacement) from the set of vertices: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e\n   (\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  It can also be thought of as the\n   species of binary relations.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#directedGraphs",
        "fct-type": "function",
        "title": "directedGraphs"
      },
      "index": {
        "description": "directed graph with loops is subset of all pairs drawn with replacement from the set of vertices subset element element It can also be thought of as the species of binary relations",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "directedGraphs",
        "normalized": "",
        "package": "species",
        "partial": "Graphs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eStructures of the species \u003ccode\u003ee\u003c/code\u003e of elements are just elements of\n   the underlying set, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Included\n   with a default definition in \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class for the same\n   reason as \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#element",
        "fct-type": "method",
        "title": "element"
      },
      "index": {
        "description": "Structures of the species of elements are just elements of the underlying set element singleton set Included with default definition in Species class for the same reason as subset and ksubset",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "element",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:elements",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#elements",
        "fct-type": "function",
        "title": "elements"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "elements",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ksubset",
      "description": {
        "fct-descr": "\u003cp\u003eSubsets of size exactly k, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e k = (\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eofSizeExactly\u003c/a\u003e\u003c/code\u003e` k) * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Included with a default definition\n in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class for the same reason as \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ksubset",
        "fct-type": "method",
        "title": "ksubset"
      },
      "index": {
        "description": "Subsets of size exactly ksubset set ofSizeExactly set Included with default definition in the Species class for the same reason as subset",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ksubset",
        "normalized": "Integer-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ksubsets",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ksubsets",
        "fct-type": "function",
        "title": "ksubsets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ksubsets",
        "normalized": "Integer-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:linOrd",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eL\u003c/code\u003e of linear orderings (lists). Since linear\n   orderings are isomorphic to cyclic orderings with a hole, we\n   may take \u003ccode\u003e\u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoneHole\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the default\n   implementation; \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it\n   can be special-cased for enumeration.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#linOrd",
        "fct-type": "method",
        "title": "linOrd"
      },
      "index": {
        "description": "The species of linear orderings lists Since linear orderings are isomorphic to cyclic orderings with hole we may take linOrd oneHole cycle as the default implementation linOrd is included in the Species class so it can be special-cased for enumeration",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "linOrd",
        "normalized": "",
        "package": "species",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:linOrds",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#linOrds",
        "fct-type": "function",
        "title": "linOrds"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "linOrds",
        "normalized": "",
        "package": "species",
        "partial": "Ords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:nonEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eDon't put a structure on the empty set.  The default definition\n   uses \u003ccode\u003e\u003ca\u003eofSize\u003c/a\u003e\u003c/code\u003e; included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it can be\n   overriden in special cases (such as when reifying species\n   expressions).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#nonEmpty",
        "fct-type": "method",
        "title": "nonEmpty"
      },
      "index": {
        "description": "Don put structure on the empty set The default definition uses ofSize included in the Species class so it can be overriden in special cases such as when reifying species expressions",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "nonEmpty",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "Empty",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:o",
      "description": {
        "fct-descr": "\u003cp\u003ePartitional composition.  To form all \u003ccode\u003e(f `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` g)\u003c/code\u003e-structures on\n   the underlying label set U, first form all set partitions of U;\n   for each partition \u003ccode\u003ep\u003c/code\u003e, put an \u003ccode\u003ef\u003c/code\u003e-structure on the classes of\n   \u003ccode\u003ep\u003c/code\u003e, and a separate \u003ccode\u003eg\u003c/code\u003e-structure on the elements in each\n   class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#o",
        "fct-type": "method",
        "title": "o"
      },
      "index": {
        "description": "Partitional composition To form all structures on the underlying label set first form all set partitions of for each partition put an structure on the classes of and separate structure on the elements in each class",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "o",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:octopi",
      "description": {
        "fct-descr": "\u003cp\u003eAn octopus is a cyclic arrangement of lists, so called because\n   the lists look like \"tentacles\" attached to the cyclic\n   \"body\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoctopus\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elinOrds\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#octopi",
        "fct-type": "function",
        "title": "octopi"
      },
      "index": {
        "description": "An octopus is cyclic arrangement of lists so called because the lists look like tentacles attached to the cyclic body octopus cycle nonEmpty linOrds",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "octopi",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:octopus",
      "description": {
        "fct-descr": "\u003cp\u003eAn octopus is a cyclic arrangement of lists, so called because\n   the lists look like \"tentacles\" attached to the cyclic\n   \"body\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoctopus\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elinOrds\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#octopus",
        "fct-type": "function",
        "title": "octopus"
      },
      "index": {
        "description": "An octopus is cyclic arrangement of lists so called because the lists look like tentacles attached to the cyclic body octopus cycle nonEmpty linOrds",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "octopus",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ofSize",
      "description": {
        "fct-descr": "\u003cp\u003eOnly put a structure on underlying sets whose size satisfies\n   the predicate.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e (Integer -\u003e Bool) -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ofSize",
        "fct-type": "method",
        "title": "ofSize"
      },
      "index": {
        "description": "Only put structure on underlying sets whose size satisfies the predicate",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ofSize",
        "normalized": "a-\u003e(Integer-\u003eBool)-\u003ea",
        "package": "species",
        "partial": "Size",
        "signature": "s-\u003e(Integer-\u003eBool)-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:ofSizeExactly",
      "description": {
        "fct-descr": "\u003cp\u003eOnly put a structure on underlying sets of the given size.  A\n   default implementation of \u003ccode\u003eofSize (==k)\u003c/code\u003e is provided, but this\n   method is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class as a special case\n   since it can be more efficient: we get to turn infinite lists\n   of coefficients into finite ones.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ofSizeExactly",
        "fct-type": "method",
        "title": "ofSizeExactly"
      },
      "index": {
        "description": "Only put structure on underlying sets of the given size default implementation of ofSize is provided but this method is included in the Species class as special case since it can be more efficient we get to turn infinite lists of coefficients into finite ones",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "ofSizeExactly",
        "normalized": "a-\u003eInteger-\u003ea",
        "package": "species",
        "partial": "Size Exactly",
        "signature": "s-\u003eInteger-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:omega",
      "description": {
        "fct-descr": "\u003cp\u003eOmega is the pseudo-species which only puts a structure on\n   infinite label sets.  Of course this is not really a species,\n   but it is sometimes a convenient fiction to use Omega to stand\n   in for recursive occurrences of a species.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#omega",
        "fct-type": "method",
        "title": "omega"
      },
      "index": {
        "description": "Omega is the pseudo-species which only puts structure on infinite label sets Of course this is not really species but it is sometimes convenient fiction to use Omega to stand in for recursive occurrences of species",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "omega",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:oneHole",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient synonym for differentiation.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoneHole\u003c/a\u003e\u003c/code\u003e\n f\u003c/code\u003e-structures look like \u003ccode\u003ef\u003c/code\u003e-structures on a set formed by adjoining\n a distinguished \"hole\" element to the underlying set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#oneHole",
        "fct-type": "function",
        "title": "oneHole"
      },
      "index": {
        "description": "convenient synonym for differentiation oneHole structures look like structures on set formed by adjoining distinguished hole element to the underlying set",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "oneHole",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "Hole",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of set partitions is just the composition \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "The species of set partitions is just the composition set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "partition",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:partitions",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of set partitions is just the composition \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#partitions",
        "fct-type": "function",
        "title": "partitions"
      },
      "index": {
        "description": "The species of set partitions is just the composition set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "partitions",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:permutation",
      "description": {
        "fct-descr": "\u003cp\u003eA permutation is a set of disjoint cycles: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epermutation\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003ecycles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#permutation",
        "fct-type": "function",
        "title": "permutation"
      },
      "index": {
        "description": "permutation is set of disjoint cycles permutation set cycles",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "permutation",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:permutations",
      "description": {
        "fct-descr": "\u003cp\u003eA permutation is a set of disjoint cycles: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epermutation\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003ecycles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#permutations",
        "fct-type": "function",
        "title": "permutations"
      },
      "index": {
        "description": "permutation is set of disjoint cycles permutation set cycles",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "permutations",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:pointed",
      "description": {
        "fct-descr": "\u003cp\u003eIntuitively, the operation of pointing picks out a\n   distinguished element from an underlying set.  It is equivalent\n   to the operator \u003ccode\u003ex d/dx\u003c/code\u003e: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epointed\u003c/a\u003e\u003c/code\u003e s = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003edifferentiate\u003c/code\u003e s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#pointed",
        "fct-type": "function",
        "title": "pointed"
      },
      "index": {
        "description": "Intuitively the operation of pointing picks out distinguished element from an underlying set It is equivalent to the operator dx pointed singleton differentiate",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "pointed",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:rec",
      "description": {
        "fct-descr": "\u003cp\u003e'rec f' is the least fixpoint of (the interpretation of) the\n   higher-order species constructor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "f -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#rec",
        "fct-type": "method",
        "title": "rec"
      },
      "index": {
        "description": "rec is the least fixpoint of the interpretation of the higher-order species constructor",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "rec",
        "normalized": "a-\u003eb",
        "package": "species",
        "partial": "",
        "signature": "f-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eE\u003c/code\u003e of sets.  Puts a singleton structure on \u003cem\u003eany\u003c/em\u003e\n   underlying label set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#set",
        "fct-type": "method",
        "title": "set"
      },
      "index": {
        "description": "The species of sets Puts singleton structure on any underlying label set",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "set",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:sets",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#sets",
        "fct-type": "function",
        "title": "sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "sets",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:simpleGraph",
      "description": {
        "fct-descr": "\u003cp\u003eSimple graphs (undirected, without loops). A simple graph is a\n   subset of the set of all size-two subsets of the vertices:\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esimpleGraph\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e 2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#simpleGraph",
        "fct-type": "function",
        "title": "simpleGraph"
      },
      "index": {
        "description": "Simple graphs undirected without loops simple graph is subset of the set of all size-two subsets of the vertices simpleGraph subset ksubset",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "simpleGraph",
        "normalized": "",
        "package": "species",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:simpleGraphs",
      "description": {
        "fct-descr": "\u003cp\u003eSimple graphs (undirected, without loops). A simple graph is a\n   subset of the set of all size-two subsets of the vertices:\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esimpleGraph\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e 2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#simpleGraphs",
        "fct-type": "function",
        "title": "simpleGraphs"
      },
      "index": {
        "description": "Simple graphs undirected without loops simple graph is subset of the set of all size-two subsets of the vertices simpleGraph subset ksubset",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "simpleGraphs",
        "normalized": "",
        "package": "species",
        "partial": "Graphs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eX\u003c/code\u003e of singletons. Puts a singleton structure on an\n   underlying label set of size 1, and no structures on any other\n   underlying label sets.  \u003ccode\u003e\u003ca\u003ex\u003c/a\u003e\u003c/code\u003e is also provided as a synonym.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "The species of singletons Puts singleton structure on an underlying label set of size and no structures on any other underlying label sets is also provided as synonym",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "singleton",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:subset",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003ep\u003c/code\u003e of subsets is given by \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e *\n   \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it can\n   be overridden when enumerating structures: by default the\n   enumeration code would generate a pair of the subset and its\n   complement, but normally when thinking about subsets we only\n   want to see the elements in the subset.  To explicitly\n   enumerate subset/complement pairs, you can use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n   directly.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#subset",
        "fct-type": "method",
        "title": "subset"
      },
      "index": {
        "description": "The species of subsets is given by subset set set subset is included in the Species class so it can be overridden when enumerating structures by default the enumeration code would generate pair of the subset and its complement but normally when thinking about subsets we only want to see the elements in the subset To explicitly enumerate subset complement pairs you can use set set directly",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "subset",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:subsets",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#subsets",
        "fct-type": "function",
        "title": "subsets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "subsets",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Class.html#v:x",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Class",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#x",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "synonym for singleton",
        "hierarchy": "Math Combinatorics Species Class",
        "module": "Math.Combinatorics.Species.Class",
        "name": "x",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interpretation of species expressions as cycle index series.\n For details on cycle index series, see \"Combinatorial Species and\n Tree-Like Structures\", chapter 1.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html",
        "fct-type": "module",
        "title": "CycleIndex"
      },
      "index": {
        "description": "An interpretation of species expressions as cycle index series For details on cycle index series see Combinatorial Species and Tree-Like Structures chapter",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "CycleIndex",
        "normalized": "",
        "package": "species",
        "partial": "Cycle Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:aut",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eaut js\u003c/code\u003e is is the number of automorphisms of a permutation with\n   cycle type \u003ccode\u003ejs\u003c/code\u003e (i.e. a permutation which has \u003ccode\u003en\u003c/code\u003e cycles of size\n   \u003ccode\u003ei\u003c/code\u003e for each \u003ccode\u003e(i,n)\u003c/code\u003e in \u003ccode\u003ejs\u003c/code\u003e).  Another way to look at it is that\n   there are \u003ccode\u003en!/aut js\u003c/code\u003e permutations on n elements with cycle type\n   \u003ccode\u003ejs\u003c/code\u003e.  The result type is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleType -\u003e T",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#aut",
        "fct-type": "function",
        "title": "aut"
      },
      "index": {
        "description": "aut js is is the number of automorphisms of permutation with cycle type js i.e permutation which has cycles of size for each in js Another way to look at it is that there are aut js permutations on elements with cycle type js The result type is",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "aut",
        "normalized": "CycleType-\u003eT",
        "package": "species",
        "partial": "",
        "signature": "CycleType-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:cyclePower",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecyclePower s n\u003c/code\u003e computes the cycle type of sigma^n, where sigma\n   is any permutation of cycle type s.\n\u003c/p\u003e\u003cp\u003eIn particular, if s = (s_1, s_2, s_3, ...)  (i.e. sigma has s_1\n   fixed points, s_2 2-cycles, ... s_k k-cycles), then\n\u003c/p\u003e\u003cp\u003esigma^n_j = sum_{j*gcd(n,k) = k} gcd(n,k)*s_k\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleType -\u003e Integer -\u003e CycleType",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#cyclePower",
        "fct-type": "function",
        "title": "cyclePower"
      },
      "index": {
        "description": "cyclePower computes the cycle type of sigma where sigma is any permutation of cycle type In particular if i.e sigma has fixed points cycles k-cycles then sigma sum gcd gcd",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "cyclePower",
        "normalized": "CycleType-\u003eInteger-\u003eCycleType",
        "package": "species",
        "partial": "Power",
        "signature": "CycleType-\u003eInteger-\u003eCycleType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:intPartitions",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate all partitions of an integer.  In particular, if \u003ccode\u003ep\u003c/code\u003e is\n   an element of the list output by \u003ccode\u003eintPartitions n\u003c/code\u003e, then \u003ccode\u003esum\n   . map (uncurry (*)) $ p == n\u003c/code\u003e.  The result type is \u003ccode\u003e[CycleType]\u003c/code\u003e\n   since each integer partition of \u003ccode\u003en\u003c/code\u003e corresponds to the cycle type\n   of a permutation on \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e\u003cp\u003eThe partitions are generated in an order corresponding to\n   the Ord instance for \u003ccode\u003eMonomial\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e [CycleType]",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#intPartitions",
        "fct-type": "function",
        "title": "intPartitions"
      },
      "index": {
        "description": "Enumerate all partitions of an integer In particular if is an element of the list output by intPartitions then sum map uncurry The result type is CycleType since each integer partition of corresponds to the cycle type of permutation on elements The partitions are generated in an order corresponding to the Ord instance for Monomial",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "intPartitions",
        "normalized": "Integer-\u003e[CycleType]",
        "package": "species",
        "partial": "Partitions",
        "signature": "Integer-\u003e[CycleType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:zCoeff",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a particular coefficient from a cycle index series.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleIndex -\u003e CycleType -\u003e Rational",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#zCoeff",
        "fct-type": "function",
        "title": "zCoeff"
      },
      "index": {
        "description": "Extract particular coefficient from cycle index series",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "zCoeff",
        "normalized": "CycleIndex-\u003eCycleType-\u003eRational",
        "package": "species",
        "partial": "Coeff",
        "signature": "CycleIndex-\u003eCycleType-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:zFix",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003ccode\u003efix F[n]\u003c/code\u003e, i.e. the number of F-structures fixed by a\n   permutation with cycle type n, given the cycle index series Z_F.\n\u003c/p\u003e\u003cp\u003eIn particular, \u003ccode\u003efix F[n] = aut(n) * zCoeff Z_F n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleIndex -\u003e CycleType -\u003e Integer",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#zFix",
        "fct-type": "function",
        "title": "zFix"
      },
      "index": {
        "description": "Compute fix i.e the number of F-structures fixed by permutation with cycle type given the cycle index series In particular fix aut zCoeff",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "zFix",
        "normalized": "CycleIndex-\u003eCycleType-\u003eInteger",
        "package": "species",
        "partial": "Fix",
        "signature": "CycleIndex-\u003eCycleType-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:zToEGF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a cycle index series to an exponential generating\n   function:  F(x) = Z_F(x,0,0,0,...).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleIndex -\u003e EGF",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#zToEGF",
        "fct-type": "function",
        "title": "zToEGF"
      },
      "index": {
        "description": "Convert cycle index series to an exponential generating function",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "zToEGF",
        "normalized": "CycleIndex-\u003eEGF",
        "package": "species",
        "partial": "To EGF",
        "signature": "CycleIndex-\u003eEGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-CycleIndex.html#v:zToGF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a cycle index series to an ordinary generating function:\n   F~(x) = Z_F(x,x^2,x^3,...).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.CycleIndex",
        "fct-package": "species",
        "fct-signature": "CycleIndex -\u003e GF",
        "fct-source": "src/Math-Combinatorics-Species-CycleIndex.html#zToGF",
        "fct-type": "function",
        "title": "zToGF"
      },
      "index": {
        "description": "Convert cycle index series to an ordinary generating function",
        "hierarchy": "Math Combinatorics Species CycleIndex",
        "module": "Math.Combinatorics.Species.CycleIndex",
        "name": "zToGF",
        "normalized": "CycleIndex-\u003eGF",
        "package": "species",
        "partial": "To GF",
        "signature": "CycleIndex-\u003eGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnumeration (i.e. exhaustive generation of structures) of both\n labeled and unlabeled species.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html",
        "fct-type": "module",
        "title": "Enumerate"
      },
      "index": {
        "description": "Enumeration i.e exhaustive generation of structures of both labeled and unlabeled species",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "Enumerate",
        "normalized": "",
        "package": "species",
        "partial": "Enumerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#t:Enumerable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e class allows you to enumerate structures of any\n   type, by declaring an instance of \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e\n   instance requires you to declare a standard structure type (see\n   \u003ca\u003eMath.Combinatorics.Species.Structures\u003c/a\u003e) associated with your\n   type, and a mapping \u003ccode\u003e\u003ca\u003eiso\u003c/a\u003e\u003c/code\u003e from the standard type to your custom\n   one.  Instances are provided for all the standard structure types\n   so you can enumerate species without having to provide your own\n   custom data type as the target of the enumeration if you don't\n   want to.\n\u003c/p\u003e\u003cp\u003eYou should only rarely have to explicitly make an instance of\n   \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e yourself; Template Haskell code to derive instances\n   for you is provided in \u003ca\u003eMath.Combinatorics.Species.TH\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#Enumerable",
        "fct-type": "class",
        "title": "Enumerable"
      },
      "index": {
        "description": "The Enumerable class allows you to enumerate structures of any type by declaring an instance of Enumerable The Enumerable instance requires you to declare standard structure type see Math.Combinatorics.Species.Structures associated with your type and mapping iso from the standard type to your custom one Instances are provided for all the standard structure types so you can enumerate species without having to provide your own custom data type as the target of the enumeration if you don want to You should only rarely have to explicitly make an instance of Enumerable yourself Template Haskell code to derive instances for you is provided in Math.Combinatorics.Species.TH",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "Enumerable",
        "normalized": "",
        "package": "species",
        "partial": "Enumerable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#t:Structure",
      "description": {
        "fct-descr": "\u003cp\u003eAn existential wrapper for structures, hiding the structure\n   functor and ensuring that it is \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#Structure",
        "fct-type": "data",
        "title": "Structure"
      },
      "index": {
        "description": "An existential wrapper for structures hiding the structure functor and ensuring that it is Typeable",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "Structure",
        "normalized": "",
        "package": "species",
        "partial": "Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:Structure",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "f a -\u003e Structure a",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#Structure",
        "fct-type": "function",
        "title": "Structure"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "Structure",
        "normalized": "a b-\u003eStructure b",
        "package": "species",
        "partial": "Structure",
        "signature": "f a-\u003eStructure a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eenumerate s ls\u003c/code\u003e computes a complete list of distinct\n   \u003ccode\u003es\u003c/code\u003e-structures over the underlying multiset of labels \u003ccode\u003els\u003c/code\u003e.  For\n   example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerate octopi [1,2,3] :: [Comp Cycle [] Int]\n [\u003c[3,2,1]\u003e,\u003c[3,1,2]\u003e,\u003c[2,3,1]\u003e,\u003c[2,1,3]\u003e,\u003c[1,3,2]\u003e,\u003c[1,2,3]\u003e,\n  \u003c[1],[3,2]\u003e,\u003c[1],[2,3]\u003e,\u003c[3,1],[2]\u003e,\u003c[1,3],[2]\u003e,\u003c[2,1],[3]\u003e,\n  \u003c[1,2],[3]\u003e,\u003c[2],[1],[3]\u003e,\u003c[1],[2],[3]\u003e]\n\n \u003e enumerate octopi [1,1,2] :: [Comp Cycle [] Int]\n [\u003c[2,1,1]\u003e,\u003c[1,2,1]\u003e,\u003c[1,1,2]\u003e,\u003c[2,1],[1]\u003e,\u003c[1,2],[1]\u003e,\n  \u003c[1,1],[2]\u003e,\u003c[1],[1],[2]\u003e]\n\n \u003e enumerate subsets \"abc\" :: [Set Int]\n [{'a','b','c'},{'a','b'},{'a','c'},{'a'},{'b','c'},{'b'},{'c'},{}]\n\n \u003e enumerate simpleGraphs [1,2,3] :: [Comp Set Set Int]\n [{{1,2},{1,3},{2,3}},{{1,2},{1,3}},{{1,2},{2,3}},{{1,2}},{{1,3},{2,3}},\n  {{1,3}},{{2,3}},{}]\n\u003c/pre\u003e\u003cp\u003eThere is one caveat: since the type of the generated structures\n   is different for each species, they must be cast (using the magic\n   of \u003ca\u003eData.Typeable\u003c/a\u003e) out of an existential wrapper; this is why\n   type annotations are required in all the examples above.  Of\n   course, if a call to \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e is used in the context of some\n   larger program, a type annotation will probably not be needed,\n   due to the magic of type inference.\n\u003c/p\u003e\u003cp\u003eFor help in knowing what type annotation you can give when\n   enumerating the structures of a particular species at the \u003ccode\u003eghci\u003c/code\u003e\n   prompt, see the \u003ccode\u003e\u003ca\u003estructureType\u003c/a\u003e\u003c/code\u003e function.  To be able to use your\n   own custom data type in an enumeration, just make your data type\n   an instance of the \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e type class; this can be done for\n   you automatically by \u003ca\u003eMath.Combinatorics.Species.TH\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an invalid type annotation is given, \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e will call\n   \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a helpful error message.  This should not be much of\n   an issue in practice, since usually \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e will be used at a\n   specific type; it's hard to imagine a usage of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e which\n   will sometimes work and sometimes fail.  However, those who like\n   their functions total can use \u003ccode\u003e\u003ca\u003eextractStructure\u003c/a\u003e\u003c/code\u003e to make a\n   version of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e (or the other variants) with a return type\n   of \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e (f a)]\u003c/code\u003e (which will return an annoying ton of\n   duplicate error messages) or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e [f a]\u003c/code\u003e (which has the\n   unfortunate property of being much less lazy than the current\n   versions, since it must compute the entire list before deciding\n   whether to return \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor slight variants on \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003eenumerateL\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eenumerateU\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eenumerateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [a] -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerate",
        "fct-type": "function",
        "title": "enumerate"
      },
      "index": {
        "description": "enumerate ls computes complete list of distinct structures over the underlying multiset of labels ls For example enumerate octopi Comp Cycle Int enumerate octopi Comp Cycle Int enumerate subsets abc Set Int enumerate simpleGraphs Comp Set Set Int There is one caveat since the type of the generated structures is different for each species they must be cast using the magic of Data.Typeable out of an existential wrapper this is why type annotations are required in all the examples above Of course if call to enumerate is used in the context of some larger program type annotation will probably not be needed due to the magic of type inference For help in knowing what type annotation you can give when enumerating the structures of particular species at the ghci prompt see the structureType function To be able to use your own custom data type in an enumeration just make your data type an instance of the Enumerable type class this can be done for you automatically by Math.Combinatorics.Species.TH If an invalid type annotation is given enumerate will call error with helpful error message This should not be much of an issue in practice since usually enumerate will be used at specific type it hard to imagine usage of enumerate which will sometimes work and sometimes fail However those who like their functions total can use extractStructure to make version of enumerate or the other variants with return type of Either String which will return an annoying ton of duplicate error messages or Either String which has the unfortunate property of being much less lazy than the current versions since it must compute the entire list before deciding whether to return Left or Right For slight variants on enumerate see enumerateL enumerateU and enumerateM",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerate",
        "normalized": "SpeciesAST-\u003e[a]-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerate-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an AST describing a species, with a phantom type parameter\n   representing the structure of the species, and an underlying\n   multiset of elements, compute a list of all possible structures\n   built over the underlying multiset.  (Of course, it would be\n   really nice to have a real dependently-typed language for this!)\n\u003c/p\u003e\u003cp\u003eUnfortunately, \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e cannot be made an instance of\n   \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e, so if we want to be able to enumerate structures given\n   an expression of the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e DSL as input, the output must be\n   existentially quantified; see \u003ccode\u003e\u003ca\u003eenumerateE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGenerating structures over base elements from a \u003cem\u003emultiset\u003c/em\u003e\n   unifies labeled and unlabeled generation into one framework.\n   To enumerate labeled structures, use a multiset where each\n   element occurs exactly once; to enumerate unlabeled structures,\n   use a multiset with the desired number of copies of a single\n   element.  To do labeled generation we could get away without the\n   generality of multisets, but to do unlabeled generation we need\n   the full generality anyway.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eenumerate'\u003c/a\u003e\u003c/code\u003e does all the actual work, but is not meant to be used\n   directly; use one of the specialized \u003ccode\u003eenumerateXX\u003c/code\u003e methods.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST s -\u003e Multiset a -\u003e [s a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerate%27",
        "fct-type": "function",
        "title": "enumerate'"
      },
      "index": {
        "description": "Given an AST describing species with phantom type parameter representing the structure of the species and an underlying multiset of elements compute list of all possible structures built over the underlying multiset Of course it would be really nice to have real dependently-typed language for this Unfortunately TSpeciesAST cannot be made an instance of Species so if we want to be able to enumerate structures given an expression of the Species DSL as input the output must be existentially quantified see enumerateE Generating structures over base elements from multiset unifies labeled and unlabeled generation into one framework To enumerate labeled structures use multiset where each element occurs exactly once to enumerate unlabeled structures use multiset with the desired number of copies of single element To do labeled generation we could get away without the generality of multisets but to do unlabeled generation we need the full generality anyway enumerate does all the actual work but is not meant to be used directly use one of the specialized enumerateXX methods",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerate'",
        "normalized": "TSpeciesAST a-\u003eMultiset b-\u003e[a b]",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST s-\u003eMultiset a-\u003e[s a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateAll",
      "description": {
        "fct-descr": "\u003cp\u003eLazily enumerate all labeled structures, using [1..] as the\n   labels.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ enumerateAll ballots :: [Comp [] Set Int]\n [[],[{1}],[{1,2}],[{2},{1}],[{1},{2}],[{1,2,3}],[{2,3},{1}]\n ,[{1},{2,3}],[{2},{1,3}],[{1,3},{2}]]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [f Int]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateAll",
        "fct-type": "function",
        "title": "enumerateAll"
      },
      "index": {
        "description": "Lazily enumerate all labeled structures using as the labels For example take enumerateAll ballots Comp Set Int",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateAll",
        "normalized": "SpeciesAST-\u003e[a Int]",
        "package": "species",
        "partial": "All",
        "signature": "SpeciesAST-\u003e[f Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateAllU",
      "description": {
        "fct-descr": "\u003cp\u003eLazily enumerate all unlabeled structures.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ enumerateAllU octopi :: [Comp Cycle [] ()]\n [\u003c[()]\u003e,\u003c[(),()]\u003e,\u003c[()],[()]\u003e,\u003c[(),(),()]\u003e,\u003c[(),()],[()]\u003e\n ,\u003c[()],[()],[()]\u003e,\u003c[(),(),(),()]\u003e,\u003c[(),()],[(),()]\u003e\n ,\u003c[(),(),()],[()]\u003e,\u003c[(),()],[()],[()]\u003e]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [f ()]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateAllU",
        "fct-type": "function",
        "title": "enumerateAllU"
      },
      "index": {
        "description": "Lazily enumerate all unlabeled structures For example take enumerateAllU octopi Comp Cycle",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateAllU",
        "normalized": "SpeciesAST-\u003e[a()]",
        "package": "species",
        "partial": "All",
        "signature": "SpeciesAST-\u003e[f()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eenumerateE\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003eenumerate'\u003c/a\u003e\u003c/code\u003e which takes an\n   (existentially quantified) typed AST and returns a list of\n   existentially quantified structures.  This is also not meant to\n   be used directly.  Instead, you should use one of the other\n   \u003ccode\u003eenumerateX\u003c/code\u003e methods.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e Multiset a -\u003e [Structure a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateE",
        "fct-type": "function",
        "title": "enumerateE"
      },
      "index": {
        "description": "enumerateE is variant of enumerate which takes an existentially quantified typed AST and returns list of existentially quantified structures This is also not meant to be used directly Instead you should use one of the other enumerateX methods",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateE",
        "normalized": "ESpeciesAST-\u003eMultiset a-\u003e[Structure a]",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eMultiset a-\u003e[Structure a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateL",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled enumeration: given a species expression and a list of\n   labels (which are assumed to be distinct), compute the list of\n   all structures built from the given labels.  If the type given\n   for the enumeration does not match the species expression (via an\n   \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance), call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with an error message\n   explaining the mismatch.  This is slightly more efficient than\n   \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e for lists of labels which are known to be distinct,\n   since it doesn't have to waste time checking for\n   duplicates. (However, it probably doesn't really make much\n   difference, since the time to do the actual enumeration will\n   usually dwarf the time to process the list of labels anyway.)\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerateL ballots [1,2,3] :: [Comp [] Set Int]\n [[{1,2,3}],[{2,3},{1}],[{1},{2,3}],[{2},{1,3}],[{1,3},{2}],[{3},{1,2}]\n ,[{1,2},{3}],[{3},{2},{1}],[{3},{1},{2}],[{2},{3},{1}],[{2},{1},{3}]\n ,[{1},{3},{2}],[{1},{2},{3}]]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [a] -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateL",
        "fct-type": "function",
        "title": "enumerateL"
      },
      "index": {
        "description": "Labeled enumeration given species expression and list of labels which are assumed to be distinct compute the list of all structures built from the given labels If the type given for the enumeration does not match the species expression via an Enumerable instance call error with an error message explaining the mismatch This is slightly more efficient than enumerate for lists of labels which are known to be distinct since it doesn have to waste time checking for duplicates However it probably doesn really make much difference since the time to do the actual enumeration will usually dwarf the time to process the list of labels anyway For example enumerateL ballots Comp Set Int",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateL",
        "normalized": "SpeciesAST-\u003e[a]-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral enumeration: given a species expression and a multiset of\n   labels, compute the list of all distinct structures built from\n   the given labels. If the type given for the enumeration does not\n   match the species expression, call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a message\n   explaining the mismatch.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Multiset a -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateM",
        "fct-type": "function",
        "title": "enumerateM"
      },
      "index": {
        "description": "General enumeration given species expression and multiset of labels compute the list of all distinct structures built from the given labels If the type given for the enumeration does not match the species expression call error with message explaining the mismatch",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateM",
        "normalized": "SpeciesAST-\u003eMultiset a-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eMultiset a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:enumerateU",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled enumeration: given a species expression and an integer\n   indicating the number of labels to use, compute the list of all\n   unlabeled structures of the given size.  If the type given for\n   the enumeration does not match the species expression, call\n   \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with an error message explaining the mismatch.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumerateU\u003c/a\u003e\u003c/code\u003e s n\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e s\n   (replicate n ())\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerateU octopi 4 :: [Comp Cycle [] ()]\n [\u003c[(),(),(),()]\u003e,\u003c[(),()],[(),()]\u003e,\u003c[(),(),()],[()]\u003e\n ,\u003c[(),()],[()],[()]\u003e,\u003c[()],[()],[()],[()]\u003e]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Int -\u003e [f ()]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateU",
        "fct-type": "function",
        "title": "enumerateU"
      },
      "index": {
        "description": "Unlabeled enumeration given species expression and an integer indicating the number of labels to use compute the list of all unlabeled structures of the given size If the type given for the enumeration does not match the species expression call error with an error message explaining the mismatch Note that enumerateU is equivalent to enumerate replicate For example enumerateU octopi Comp Cycle",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "enumerateU",
        "normalized": "SpeciesAST-\u003eInt-\u003e[a()]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eInt-\u003e[f()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:extractStructure",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the contents from a \u003ccode\u003e\u003ca\u003eStructure\u003c/a\u003e\u003c/code\u003e wrapper, if we know the\n   type, and map it into an isomorphic type.  If the type doesn't\n   match, return a helpful error message instead.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "Structure a -\u003e Either String (f a)",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#extractStructure",
        "fct-type": "function",
        "title": "extractStructure"
      },
      "index": {
        "description": "Extract the contents from Structure wrapper if we know the type and map it into an isomorphic type If the type doesn match return helpful error message instead",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "extractStructure",
        "normalized": "Structure a-\u003eEither String(b a)",
        "package": "species",
        "partial": "Structure",
        "signature": "Structure a-\u003eEither String(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eThe mapping from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStructTy\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "StructTy f a -\u003e f a",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#iso",
        "fct-type": "method",
        "title": "iso"
      },
      "index": {
        "description": "The mapping from StructTy to",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "iso",
        "normalized": "StructTy a b-\u003ea b",
        "package": "species",
        "partial": "",
        "signature": "StructTy f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:showStructureType",
      "description": {
        "fct-descr": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e while stripping off qualifier portions of \u003ccode\u003e\u003ca\u003eTyCon\u003c/a\u003e\u003c/code\u003e\n   names.  This is essentially copied and pasted from the\n   \u003ca\u003eData.Typeable\u003c/a\u003e source, with a number of cases taken out that we\n   don't care about (special cases for \u003ccode\u003e(-\u003e)\u003c/code\u003e, tuples, etc.).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "TypeRep -\u003e String",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#showStructureType",
        "fct-type": "function",
        "title": "showStructureType"
      },
      "index": {
        "description": "Show TypeRep while stripping off qualifier portions of TyCon names This is essentially copied and pasted from the Data.Typeable source with number of cases taken out that we don care about special cases for tuples etc",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "showStructureType",
        "normalized": "TypeRep-\u003eString",
        "package": "species",
        "partial": "Structure Type",
        "signature": "TypeRep-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:structureType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003estructureType\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a String representation of the\n   functor type which represents the structure of the species \u003ccode\u003es\u003c/code\u003e.\n   In particular, if \u003ccode\u003estructureType s\u003c/code\u003e prints \u003ccode\u003e\"T\"\u003c/code\u003e, then you can\n   safely use \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e and friends by writing\n\u003c/p\u003e\u003cpre\u003e enumerate s ls :: [T a]\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003els :: [a]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e \u003e structureType octopus\n \"Comp Cycle []\"\n \u003e enumerate octopus [1,2,3] :: [Comp Cycle [] Int]\n [\u003c[3,2,1]\u003e,\u003c[3,1,2]\u003e,\u003c[2,3,1]\u003e,\u003c[2,1,3]\u003e,\u003c[1,3,2]\u003e\n ,\u003c[1,2,3]\u003e,\u003c[1],[3,2]\u003e,\u003c[1],[2,3]\u003e,\u003c[3,1],[2]\u003e\n ,\u003c[1,3],[2]\u003e,\u003c[2,1],[3]\u003e,\u003c[1,2],[3]\u003e,\u003c[2],[1],[3]\u003e\n ,\u003c[1],[2],[3]\u003e]\n\u003c/pre\u003e\u003cp\u003eNote, however, that providing a type annotation on \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e in\n this way is usually only necessary at the \u003ccode\u003eghci\u003c/code\u003e prompt; when used\n in the context of a larger program the type of a call to\n \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e can often be inferred.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e String",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#structureType",
        "fct-type": "function",
        "title": "structureType"
      },
      "index": {
        "description": "structureType returns String representation of the functor type which represents the structure of the species In particular if structureType prints then you can safely use enumerate and friends by writing enumerate ls where ls For example structureType octopus Comp Cycle enumerate octopus Comp Cycle Int Note however that providing type annotation on enumerate in this way is usually only necessary at the ghci prompt when used in the context of larger program the type of call to enumerate can often be inferred",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "structureType",
        "normalized": "ESpeciesAST-\u003eString",
        "package": "species",
        "partial": "Type",
        "signature": "ESpeciesAST-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Enumerate.html#v:unsafeExtractStructure",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eextractStructure\u003c/a\u003e\u003c/code\u003e which calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with the\n   message in the case of a type mismatch, instead of returning an\n   \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Enumerate",
        "fct-package": "species",
        "fct-signature": "Structure a -\u003e f a",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#unsafeExtractStructure",
        "fct-type": "function",
        "title": "unsafeExtractStructure"
      },
      "index": {
        "description": "version of extractStructure which calls error with the message in the case of type mismatch instead of returning an Either",
        "hierarchy": "Math Combinatorics Species Enumerate",
        "module": "Math.Combinatorics.Species.Enumerate",
        "name": "unsafeExtractStructure",
        "normalized": "Structure a-\u003eb a",
        "package": "species",
        "partial": "Extract Structure",
        "signature": "Structure a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Labeled.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interpretation of species as exponential generating functions,\n which count labeled structures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Labeled",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Labeled.html",
        "fct-type": "module",
        "title": "Labeled"
      },
      "index": {
        "description": "An interpretation of species as exponential generating functions which count labeled structures",
        "hierarchy": "Math Combinatorics Species Labeled",
        "module": "Math.Combinatorics.Species.Labeled",
        "name": "Labeled",
        "normalized": "",
        "package": "species",
        "partial": "Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Labeled.html#v:labeled",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the coefficients of an exponential generating function as\n   a list of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es.  Since \u003ccode\u003e\u003ca\u003eEGF\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e, the\n   idea is that \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e can be applied directly to an expression\n   of the species DSL.  In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e  n\u003c/code\u003e is the\n   number of labeled \u003ccode\u003es\u003c/code\u003e-structures on an underlying set of size \u003ccode\u003en\u003c/code\u003e\n   (note that \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is guaranteed to be an infinite list).\n   For example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ labeled octopi\n [0,1,3,14,90,744,7560,91440,1285200,20603520]\n\u003c/pre\u003e\u003cp\u003egives the number of labeled octopi on 0, 1, 2, 3, ... 9 labels.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Labeled",
        "fct-package": "species",
        "fct-signature": "EGF -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Labeled.html#labeled",
        "fct-type": "function",
        "title": "labeled"
      },
      "index": {
        "description": "Extract the coefficients of an exponential generating function as list of Integer Since EGF is an instance of Species the idea is that labeled can be applied directly to an expression of the species DSL In particular labeled is the number of labeled structures on an underlying set of size note that labeled is guaranteed to be an infinite list For example take labeled octopi gives the number of labeled octopi on labels",
        "hierarchy": "Math Combinatorics Species Labeled",
        "module": "Math.Combinatorics.Species.Labeled",
        "name": "labeled",
        "normalized": "EGF-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "EGF-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Labeled.html#v:labelled",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e, since both spellings are acceptable and\n   it's annoying to have to remember which is correct.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Labeled",
        "fct-package": "species",
        "fct-signature": "EGF -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Labeled.html#labelled",
        "fct-type": "function",
        "title": "labelled"
      },
      "index": {
        "description": "synonym for labeled since both spellings are acceptable and it annoying to have to remember which is correct",
        "hierarchy": "Math Combinatorics Species Labeled",
        "module": "Math.Combinatorics.Species.Labeled",
        "name": "labelled",
        "normalized": "EGF-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "EGF-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-NewtonRaphson.html#",
      "description": {
        "fct-module": "Math.Combinatorics.Species.NewtonRaphson",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html",
        "fct-type": "module",
        "title": "NewtonRaphson"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species NewtonRaphson",
        "module": "Math.Combinatorics.Species.NewtonRaphson",
        "name": "NewtonRaphson",
        "normalized": "",
        "package": "species",
        "partial": "Newton Raphson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-NewtonRaphson.html#v:newtonRaphson",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a species \u003ccode\u003er\u003c/code\u003e and a desired accuracy \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewtonRaphson\u003c/a\u003e\u003c/code\u003e\n   r k\u003c/code\u003e computes a species which has contact at least \u003ccode\u003ek\u003c/code\u003e with the\n   species \u003ccode\u003et = x \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e (r `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.NewtonRaphson",
        "fct-package": "species",
        "fct-signature": "s -\u003e Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#newtonRaphson",
        "fct-type": "function",
        "title": "newtonRaphson"
      },
      "index": {
        "description": "Given species and desired accuracy newtonRaphson computes species which has contact at least with the species",
        "hierarchy": "Math Combinatorics Species NewtonRaphson",
        "module": "Math.Combinatorics.Species.NewtonRaphson",
        "name": "newtonRaphson",
        "normalized": "a-\u003eInteger-\u003ea",
        "package": "species",
        "partial": "Raphson",
        "signature": "s-\u003eInteger-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-NewtonRaphson.html#v:newtonRaphsonIter",
      "description": {
        "fct-descr": "\u003cp\u003eA single iteration of the Newton-Raphson method.\n   \u003ccode\u003enewtonRaphsonIter r k a\u003c/code\u003e assumes that \u003ccode\u003ea\u003c/code\u003e is a species having\n   contact of order \u003ccode\u003ek\u003c/code\u003e with species \u003ccode\u003et = x \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e (r `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` t)\u003c/code\u003e (that\n   is, \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003et\u003c/code\u003e agree on all label sets of size up to and\n   including \u003ccode\u003ek\u003c/code\u003e), and returns a new species with contact of order\n   \u003ccode\u003e2k+2\u003c/code\u003e with \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee BLL section 3.3.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.NewtonRaphson",
        "fct-package": "species",
        "fct-signature": "s -\u003e Integer -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#newtonRaphsonIter",
        "fct-type": "function",
        "title": "newtonRaphsonIter"
      },
      "index": {
        "description": "single iteration of the Newton-Raphson method newtonRaphsonIter assumes that is species having contact of order with species that is and agree on all label sets of size up to and including and returns new species with contact of order with See BLL section",
        "hierarchy": "Math Combinatorics Species NewtonRaphson",
        "module": "Math.Combinatorics.Species.NewtonRaphson",
        "name": "newtonRaphsonIter",
        "normalized": "a-\u003eInteger-\u003ea-\u003ea",
        "package": "species",
        "partial": "Raphson Iter",
        "signature": "s-\u003eInteger-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-NewtonRaphson.html#v:newtonRaphsonRec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewtonRaphsonRec\u003c/a\u003e\u003c/code\u003e f k\u003c/code\u003e tries to compute the recursive species\n   represented by the code \u003ccode\u003ef\u003c/code\u003e up to order at least \u003ccode\u003ek\u003c/code\u003e, using\n   Newton-Raphson iteration.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ef\u003c/code\u003e cannot be\n   written in the form \u003ccode\u003ef = X*R(f)\u003c/code\u003e for some species \u003ccode\u003eR\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.NewtonRaphson",
        "fct-package": "species",
        "fct-signature": "f -\u003e Integer -\u003e Maybe s",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#newtonRaphsonRec",
        "fct-type": "function",
        "title": "newtonRaphsonRec"
      },
      "index": {
        "description": "newtonRaphsonRec tries to compute the recursive species represented by the code up to order at least using Newton-Raphson iteration Returns Nothing if cannot be written in the form for some species",
        "hierarchy": "Math Combinatorics Species NewtonRaphson",
        "module": "Math.Combinatorics.Species.NewtonRaphson",
        "name": "newtonRaphsonRec",
        "normalized": "a-\u003eInteger-\u003eMaybe b",
        "package": "species",
        "partial": "Raphson Rec",
        "signature": "f-\u003eInteger-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-NewtonRaphson.html#v:solveForR",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a code \u003ccode\u003ef\u003c/code\u003e representing a recursive species, try to find an\n   integer species N and species R such that \u003ccode\u003ef = N + X*R(f)\u003c/code\u003e.  If\n   such species can be found, return \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (N,R)\u003c/code\u003e; otherwise\n   return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.NewtonRaphson",
        "fct-package": "species",
        "fct-signature": "f -\u003e Maybe (s, s)",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#solveForR",
        "fct-type": "function",
        "title": "solveForR"
      },
      "index": {
        "description": "Given code representing recursive species try to find an integer species and species such that If such species can be found return Just otherwise return Nothing",
        "hierarchy": "Math Combinatorics Species NewtonRaphson",
        "module": "Math.Combinatorics.Species.NewtonRaphson",
        "name": "solveForR",
        "normalized": "a-\u003eMaybe(b,b)",
        "package": "species",
        "partial": "For",
        "signature": "f-\u003eMaybe(s,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Simplify.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to manipulate and simplify species expressions according\n to algebraic species isomorphisms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Simplify",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Simplify.html",
        "fct-type": "module",
        "title": "Simplify"
      },
      "index": {
        "description": "Functions to manipulate and simplify species expressions according to algebraic species isomorphisms",
        "hierarchy": "Math Combinatorics Species Simplify",
        "module": "Math.Combinatorics.Species.Simplify",
        "name": "Simplify",
        "normalized": "",
        "package": "species",
        "partial": "Simplify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Simplify.html#v:simplify",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a species expression \u003ccode\u003es\u003c/code\u003e, return a species expression\n   in normal form which represents a species isomorphic to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Simplify",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-Simplify.html#simplify",
        "fct-type": "function",
        "title": "simplify"
      },
      "index": {
        "description": "Given species expression return species expression in normal form which represents species isomorphic to",
        "hierarchy": "Math Combinatorics Species Simplify",
        "module": "Math.Combinatorics.Species.Simplify",
        "name": "simplify",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Simplify.html#v:sumOfProducts",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a species and decompose it into a sum of products.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Simplify",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [[SpeciesAST]]",
        "fct-source": "src/Math-Combinatorics-Species-Simplify.html#sumOfProducts",
        "fct-type": "function",
        "title": "sumOfProducts"
      },
      "index": {
        "description": "Simplify species and decompose it into sum of products",
        "hierarchy": "Math Combinatorics Species Simplify",
        "module": "Math.Combinatorics.Species.Simplify",
        "name": "sumOfProducts",
        "normalized": "SpeciesAST-\u003e[[SpeciesAST]]",
        "package": "species",
        "partial": "Of Products",
        "signature": "SpeciesAST-\u003e[[SpeciesAST]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used for expressing generic structures when enumerating\n species.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html",
        "fct-type": "module",
        "title": "Structures"
      },
      "index": {
        "description": "Types used for expressing generic structures when enumerating species",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Structures",
        "normalized": "",
        "package": "species",
        "partial": "Structures",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t::-42-:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor product.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2A%3A",
        "fct-type": "data",
        "title": ":*:"
      },
      "index": {
        "description": "Functor product",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": ":*:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t::-43-:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor coproduct.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "Functor coproduct",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": ":+:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t::.:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor composition.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "data",
        "title": ":.:"
      },
      "index": {
        "description": "Functor composition",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": ":.:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Const",
      "description": {
        "fct-descr": "\u003cp\u003eThe constant functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Const",
        "fct-type": "newtype",
        "title": "Const"
      },
      "index": {
        "description": "The constant functor",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Const",
        "normalized": "",
        "package": "species",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Cycle",
      "description": {
        "fct-descr": "\u003cp\u003eCycle structure.  A value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCycle\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is implemented as\n   \u003ccode\u003e[a]\u003c/code\u003e, but thought of as a directed cycle.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "newtype",
        "title": "Cycle"
      },
      "index": {
        "description": "Cycle structure value of type Cycle is implemented as but thought of as directed cycle",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Cycle",
        "normalized": "",
        "package": "species",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "The identity functor",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Id",
        "normalized": "",
        "package": "species",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Interp",
      "description": {
        "fct-descr": "\u003cp\u003eInterpretation type function for codes for higher-order type\n   constructors, used as arguments to the higher-order fixpoint \u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Interp",
        "fct-type": "function",
        "title": "Interp"
      },
      "index": {
        "description": "Interpretation type function for codes for higher-order type constructors used as arguments to the higher-order fixpoint Mu",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Interp",
        "normalized": "",
        "package": "species",
        "partial": "Interp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Mu",
      "description": {
        "fct-descr": "\u003cp\u003eHigher-order fixpoint. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e is morally isomorphic to \u003ccode\u003ef\n   (\u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e f) a\u003c/code\u003e, except that we actually need a level of indirection.\n   In fact \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e is isomorphic to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInterp\u003c/a\u003e\u003c/code\u003e f (\u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e f) a\u003c/code\u003e; \u003ccode\u003ef\u003c/code\u003e\n   is a code which is interpreted by the \u003ccode\u003e\u003ca\u003eInterp\u003c/a\u003e\u003c/code\u003e type function.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Mu",
        "fct-type": "data",
        "title": "Mu"
      },
      "index": {
        "description": "Higher-order fixpoint Mu is morally isomorphic to Mu except that we actually need level of indirection In fact Mu is isomorphic to Interp Mu is code which is interpreted by the Interp type function",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Mu",
        "normalized": "",
        "package": "species",
        "partial": "Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eSet structure.  A value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is implemented as \u003ccode\u003e[a]\u003c/code\u003e,\n   but thought of as an unordered set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "newtype",
        "title": "Set"
      },
      "index": {
        "description": "Set structure value of type Set is implemented as but thought of as an unordered set",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Set",
        "normalized": "",
        "package": "species",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Star",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStar\u003c/a\u003e\u003c/code\u003e is isomorphic to \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, but with a more useful \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n   instance for our purposes.  Used to implement species\n   differentiation.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "data",
        "title": "Star"
      },
      "index": {
        "description": "Star is isomorphic to Maybe but with more useful Show instance for our purposes Used to implement species differentiation",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Star",
        "normalized": "",
        "package": "species",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Unit",
      "description": {
        "fct-descr": "\u003cp\u003eThe (constantly) unit functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Unit",
        "fct-type": "data",
        "title": "Unit"
      },
      "index": {
        "description": "The constantly unit functor",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Unit",
        "normalized": "",
        "package": "species",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eThe (constantly) void functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Void",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "The constantly void functor",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Void",
        "normalized": "",
        "package": "species",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v::-42-:",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "(f a) :*: (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2A%3A",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": ":*:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Comp",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Comp",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "function",
        "title": "Comp"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Comp",
        "normalized": "",
        "package": "species",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Const",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Const x",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Const",
        "fct-type": "function",
        "title": "Const"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Const",
        "normalized": "",
        "package": "species",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Cycle",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Cycle",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "function",
        "title": "Cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Cycle",
        "normalized": "",
        "package": "species",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Id",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Id a",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Id",
        "normalized": "",
        "package": "species",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Inl",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Inl (f a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inl"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Inl",
        "normalized": "",
        "package": "species",
        "partial": "Inl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Inr",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Inr (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inr"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Inr",
        "normalized": "",
        "package": "species",
        "partial": "Inr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Mu",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Mu",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Mu",
        "fct-type": "function",
        "title": "Mu"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Mu",
        "normalized": "",
        "package": "species",
        "partial": "Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Original",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Original a",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "function",
        "title": "Original"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Original",
        "normalized": "",
        "package": "species",
        "partial": "Original",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Set",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Set",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "function",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Set",
        "normalized": "",
        "package": "species",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Star",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Star",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "function",
        "title": "Star"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Star",
        "normalized": "",
        "package": "species",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:Unit",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Unit",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Unit",
        "fct-type": "function",
        "title": "Unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "Unit",
        "normalized": "",
        "package": "species",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:getCycle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "[a]",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "function",
        "title": "getCycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "getCycle",
        "normalized": "[a]",
        "package": "species",
        "partial": "Cycle",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:getSet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "[a]",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "function",
        "title": "getSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "getSet",
        "normalized": "[a]",
        "package": "species",
        "partial": "Set",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:unComp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "f (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "function",
        "title": "unComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "unComp",
        "normalized": "",
        "package": "species",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Structures.html#v:unMu",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species.Structures",
        "fct-package": "species",
        "fct-signature": "Interp f (Mu f) a",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Mu",
        "fct-type": "function",
        "title": "unMu"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Structures",
        "module": "Math.Combinatorics.Species.Structures",
        "name": "unMu",
        "normalized": "",
        "package": "species",
        "partial": "Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse Template Haskell to automatically derive species instances for\n user-defined data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.TH",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Use Template Haskell to automatically derive species instances for user-defined data types",
        "hierarchy": "Math Combinatorics Species TH",
        "module": "Math.Combinatorics.Species.TH",
        "name": "TH",
        "normalized": "",
        "package": "species",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-TH.html#v:deriveDefaultSpecies",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate default species declarations for the given user-defined\n   data type.  To use it:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell,\n              TypeFamilies,\n              DeriveDataTypeable,\n              FlexibleInstances,\n              UndecidableInstances #-}\n\n data MyType = ...\n\n $(deriveDefaultSpecies ''MyType)\n\u003c/pre\u003e\u003cp\u003eYes, you really do need all those extensions.  And don't panic\n   about the \u003ccode\u003eUndecidableInstances\u003c/code\u003e; the instances generated\n   actually are decidable, but GHC just can't tell.\n\u003c/p\u003e\u003cp\u003eThis is what you get:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eMyType\u003c/code\u003e (and various other\n     supporting things like a code and an \u003ccode\u003e\u003ca\u003eASTFunctor\u003c/a\u003e\u003c/code\u003e instance if\n     your data type is recursive)\n\u003c/li\u003e\u003cli\u003e A declaration of \u003ccode\u003emyType :: Species s =\u003e s\u003c/code\u003e (the same name as\n     the type constructor but with the first letter lowercased)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can then use \u003ccode\u003emyType\u003c/code\u003e in any species expression, or as input\n   to any function expecting a species.  For example, to count your\n   data type's distinct shapes, you can do\n\u003c/p\u003e\u003cpre\u003e take 10 . unlabeled $ myType\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species.TH",
        "fct-package": "species",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Math-Combinatorics-Species-TH.html#deriveDefaultSpecies",
        "fct-type": "function",
        "title": "deriveDefaultSpecies"
      },
      "index": {
        "description": "Generate default species declarations for the given user-defined data type To use it LANGUAGE TemplateHaskell TypeFamilies DeriveDataTypeable FlexibleInstances UndecidableInstances data MyType deriveDefaultSpecies MyType Yes you really do need all those extensions And don panic about the UndecidableInstances the instances generated actually are decidable but GHC just can tell This is what you get An Enumerable instance for MyType and various other supporting things like code and an ASTFunctor instance if your data type is recursive declaration of myType Species the same name as the type constructor but with the first letter lowercased You can then use myType in any species expression or as input to any function expecting species For example to count your data type distinct shapes you can do take unlabeled myType",
        "hierarchy": "Math Combinatorics Species TH",
        "module": "Math.Combinatorics.Species.TH",
        "name": "deriveDefaultSpecies",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "species",
        "partial": "Default Species",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-TH.html#v:deriveSpecies",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ederiveDefaultSpecies\u003c/a\u003e\u003c/code\u003e, except that you specify the species\n expression that your data type should be isomorphic to.  Note: this\n is currently experimental (read: bug-ridden).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.TH",
        "fct-package": "species",
        "fct-signature": "Name -\u003e SpeciesAST -\u003e Q [Dec]",
        "fct-source": "src/Math-Combinatorics-Species-TH.html#deriveSpecies",
        "fct-type": "function",
        "title": "deriveSpecies"
      },
      "index": {
        "description": "Like deriveDefaultSpecies except that you specify the species expression that your data type should be isomorphic to Note this is currently experimental read bug-ridden",
        "hierarchy": "Math Combinatorics Species TH",
        "module": "Math.Combinatorics.Species.TH",
        "name": "deriveSpecies",
        "normalized": "Name-\u003eSpeciesAST-\u003eQ[Dec]",
        "package": "species",
        "partial": "Species",
        "signature": "Name-\u003eSpeciesAST-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome common types used by the species library, along with some\n utility functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Some common types used by the species library along with some utility functions",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "Types",
        "normalized": "",
        "package": "species",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#t:CycleIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCycle index series.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#CycleIndex",
        "fct-type": "newtype",
        "title": "CycleIndex"
      },
      "index": {
        "description": "Cycle index series",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "CycleIndex",
        "normalized": "",
        "package": "species",
        "partial": "Cycle Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#t:CycleType",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of the cycle type of a permutation.  If \u003ccode\u003ec ::\n   CycleType\u003c/code\u003e and \u003ccode\u003e(k,n) `\u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e` c\u003c/code\u003e, then the permutation has \u003ccode\u003en\u003c/code\u003e\n   cycles of size \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "type",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#CycleType",
        "fct-type": "type",
        "title": "CycleType"
      },
      "index": {
        "description": "representation of the cycle type of permutation If CycleType and elem then the permutation has cycles of size",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "CycleType",
        "normalized": "",
        "package": "species",
        "partial": "Cycle Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#t:EGF",
      "description": {
        "fct-descr": "\u003cp\u003eExponential generating functions, for counting labeled species.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#EGF",
        "fct-type": "newtype",
        "title": "EGF"
      },
      "index": {
        "description": "Exponential generating functions for counting labeled species",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "EGF",
        "normalized": "",
        "package": "species",
        "partial": "EGF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#t:GF",
      "description": {
        "fct-descr": "\u003cp\u003eOrdinary generating functions, for counting unlabeled species.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#GF",
        "fct-type": "newtype",
        "title": "GF"
      },
      "index": {
        "description": "Ordinary generating functions for counting unlabeled species",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "GF",
        "normalized": "",
        "package": "species",
        "partial": "GF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:CI",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "CI (T Rational)",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#CycleIndex",
        "fct-type": "function",
        "title": "CI"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "CI",
        "normalized": "",
        "package": "species",
        "partial": "CI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:EGF",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "EGF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#EGF",
        "fct-type": "function",
        "title": "EGF"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "EGF",
        "normalized": "",
        "package": "species",
        "partial": "EGF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:GF",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "GF (T Integer)",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#GF",
        "fct-type": "function",
        "title": "GF"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "GF",
        "normalized": "",
        "package": "species",
        "partial": "GF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:ciFromMonomials",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "[T Rational] -\u003e CycleIndex",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#ciFromMonomials",
        "fct-type": "function",
        "title": "ciFromMonomials"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "ciFromMonomials",
        "normalized": "[T Rational]-\u003eCycleIndex",
        "package": "species",
        "partial": "From Monomials",
        "signature": "[T Rational]-\u003eCycleIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:egfFromCoeffs",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "[Rational] -\u003e EGF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#egfFromCoeffs",
        "fct-type": "function",
        "title": "egfFromCoeffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "egfFromCoeffs",
        "normalized": "[Rational]-\u003eEGF",
        "package": "species",
        "partial": "From Coeffs",
        "signature": "[Rational]-\u003eEGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:filterCoeffs",
      "description": {
        "fct-descr": "\u003cp\u003eFilter the coefficients of a series according to a predicate.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(Integer -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#filterCoeffs",
        "fct-type": "function",
        "title": "filterCoeffs"
      },
      "index": {
        "description": "Filter the coefficients of series according to predicate",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "filterCoeffs",
        "normalized": "(Integer-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "species",
        "partial": "Coeffs",
        "signature": "(Integer-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:gfFromCoeffs",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "[Integer] -\u003e GF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#gfFromCoeffs",
        "fct-type": "function",
        "title": "gfFromCoeffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "gfFromCoeffs",
        "normalized": "[Integer]-\u003eGF",
        "package": "species",
        "partial": "From Coeffs",
        "signature": "[Integer]-\u003eGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftCI",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Rational -\u003e T Rational) -\u003e CycleIndex -\u003e CycleIndex",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftCI",
        "fct-type": "function",
        "title": "liftCI"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftCI",
        "normalized": "(T Rational-\u003eT Rational)-\u003eCycleIndex-\u003eCycleIndex",
        "package": "species",
        "partial": "CI",
        "signature": "(T Rational-\u003eT Rational)-\u003eCycleIndex-\u003eCycleIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftCI2",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Rational -\u003e T Rational -\u003e T Rational) -\u003e CycleIndex -\u003e CycleIndex -\u003e CycleIndex",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftCI2",
        "fct-type": "function",
        "title": "liftCI2"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftCI2",
        "normalized": "(T Rational-\u003eT Rational-\u003eT Rational)-\u003eCycleIndex-\u003eCycleIndex-\u003eCycleIndex",
        "package": "species",
        "partial": "CI",
        "signature": "(T Rational-\u003eT Rational-\u003eT Rational)-\u003eCycleIndex-\u003eCycleIndex-\u003eCycleIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftEGF",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Rational -\u003e T Rational) -\u003e EGF -\u003e EGF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftEGF",
        "fct-type": "function",
        "title": "liftEGF"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftEGF",
        "normalized": "(T Rational-\u003eT Rational)-\u003eEGF-\u003eEGF",
        "package": "species",
        "partial": "EGF",
        "signature": "(T Rational-\u003eT Rational)-\u003eEGF-\u003eEGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftEGF2",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Rational -\u003e T Rational -\u003e T Rational) -\u003e EGF -\u003e EGF -\u003e EGF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftEGF2",
        "fct-type": "function",
        "title": "liftEGF2"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftEGF2",
        "normalized": "(T Rational-\u003eT Rational-\u003eT Rational)-\u003eEGF-\u003eEGF-\u003eEGF",
        "package": "species",
        "partial": "EGF",
        "signature": "(T Rational-\u003eT Rational-\u003eT Rational)-\u003eEGF-\u003eEGF-\u003eEGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftGF",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Integer -\u003e T Integer) -\u003e GF -\u003e GF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftGF",
        "fct-type": "function",
        "title": "liftGF"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftGF",
        "normalized": "(T Integer-\u003eT Integer)-\u003eGF-\u003eGF",
        "package": "species",
        "partial": "GF",
        "signature": "(T Integer-\u003eT Integer)-\u003eGF-\u003eGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:liftGF2",
      "description": {
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "(T Integer -\u003e T Integer -\u003e T Integer) -\u003e GF -\u003e GF -\u003e GF",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#liftGF2",
        "fct-type": "function",
        "title": "liftGF2"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "liftGF2",
        "normalized": "(T Integer-\u003eT Integer-\u003eT Integer)-\u003eGF-\u003eGF-\u003eGF",
        "package": "species",
        "partial": "GF",
        "signature": "(T Integer-\u003eT Integer-\u003eT Integer)-\u003eGF-\u003eGF-\u003eGF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:selectIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSet every coefficient of a series to 0 except the selected\n   index. Truncate any trailing zeroes.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e [a] -\u003e [a]",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#selectIndex",
        "fct-type": "function",
        "title": "selectIndex"
      },
      "index": {
        "description": "Set every coefficient of series to except the selected index Truncate any trailing zeroes",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "selectIndex",
        "normalized": "Integer-\u003e[a]-\u003e[a]",
        "package": "species",
        "partial": "Index",
        "signature": "Integer-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Types.html#v:unEGF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species.Types",
        "fct-package": "species",
        "fct-signature": "T Rational",
        "fct-source": "src/Math-Combinatorics-Species-Types.html#EGF",
        "fct-type": "function",
        "title": "unEGF"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species Types",
        "module": "Math.Combinatorics.Species.Types",
        "name": "unEGF",
        "normalized": "",
        "package": "species",
        "partial": "EGF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Unlabeled.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interpretation of species as ordinary generating functions,\n which count unlabeled structures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Unlabeled",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Unlabeled.html",
        "fct-type": "module",
        "title": "Unlabeled"
      },
      "index": {
        "description": "An interpretation of species as ordinary generating functions which count unlabeled structures",
        "hierarchy": "Math Combinatorics Species Unlabeled",
        "module": "Math.Combinatorics.Species.Unlabeled",
        "name": "Unlabeled",
        "normalized": "",
        "package": "species",
        "partial": "Unlabeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Unlabeled.html#v:unlabeled",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the coefficients of an ordinary generating function as a\n   list of Integers.  In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e  n\u003c/code\u003e is the\n   number of unlabeled \u003ccode\u003es\u003c/code\u003e-structures on an underlying set of size\n   \u003ccode\u003en\u003c/code\u003e (\u003ccode\u003eunlabeled s\u003c/code\u003e is guaranteed to be infinite).  For example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ unlabeled octopi\n [0,1,2,3,5,7,13,19,35,59]\n\u003c/pre\u003e\u003cp\u003egives the number of unlabeled octopi on 0, 1, 2, 3, ... 9 elements.\n\u003c/p\u003e\u003cp\u003eActually, the above is something of a white lie, as you may have\n   already realized by looking at the input type of \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e,\n   which is \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e rather than the expected \u003ccode\u003e\u003ca\u003eGF\u003c/a\u003e\u003c/code\u003e.  The reason\n   is that although products and sums of unlabeled species\n   correspond to products and sums of ordinary generating functions,\n   other operations such as composition and differentiation do not!\n   In order to compute an ordinary generating function for a species\n   defined in terms of composition and/or differentiation, we must\n   compute the cycle index series for the species and then convert\n   it to an ordinary generating function.  So \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e actually\n   works by first reifying the species to an AST and checking which\n   operations are used in its definition, and then choosing to work\n   with cycle index series or directly with (much faster) ordinary\n   generating functions as appropriate.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Unlabeled",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Unlabeled.html#unlabeled",
        "fct-type": "function",
        "title": "unlabeled"
      },
      "index": {
        "description": "Extract the coefficients of an ordinary generating function as list of Integers In particular unlabeled is the number of unlabeled structures on an underlying set of size unlabeled is guaranteed to be infinite For example take unlabeled octopi gives the number of unlabeled octopi on elements Actually the above is something of white lie as you may have already realized by looking at the input type of unlabeled which is SpeciesAST rather than the expected GF The reason is that although products and sums of unlabeled species correspond to products and sums of ordinary generating functions other operations such as composition and differentiation do not In order to compute an ordinary generating function for species defined in terms of composition and or differentiation we must compute the cycle index series for the species and then convert it to an ordinary generating function So unlabeled actually works by first reifying the species to an AST and checking which operations are used in its definition and then choosing to work with cycle index series or directly with much faster ordinary generating functions as appropriate",
        "hierarchy": "Math Combinatorics Species Unlabeled",
        "module": "Math.Combinatorics.Species.Unlabeled",
        "name": "unlabeled",
        "normalized": "SpeciesAST-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Unlabeled.html#v:unlabelled",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e, since both spellings are acceptable.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Unlabeled",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Unlabeled.html#unlabelled",
        "fct-type": "function",
        "title": "unlabelled"
      },
      "index": {
        "description": "synonym for unlabeled since both spellings are acceptable",
        "hierarchy": "Math Combinatorics Species Unlabeled",
        "module": "Math.Combinatorics.Species.Unlabeled",
        "name": "unlabelled",
        "normalized": "SpeciesAST-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of intervals of natural numbers, for use in\n tracking the possible sizes of structures of a species.  For\n example, the species \u003ccode\u003ex + x^2 + x^3\u003c/code\u003e will correspond to the\n interval [1,3].\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html",
        "fct-type": "module",
        "title": "Interval"
      },
      "index": {
        "description": "simple implementation of intervals of natural numbers for use in tracking the possible sizes of structures of species For example the species will correspond to the interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "Interval",
        "normalized": "",
        "package": "species",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#t:Interval",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e is a closed range of consecutive integers.  Both\n   endpoints are represented as \u003ccode\u003e\u003ca\u003eNatO\u003c/a\u003e\u003c/code\u003e values.  For example, [2,5]\n   represents the values 2,3,4,5; [2,omega] represents all integers\n   greater than 1; intervals where the first endpoint is greater than the\n   second also represent the empty interval.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#Interval",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "An Interval is closed range of consecutive integers Both endpoints are represented as NatO values For example represents the values omega represents all integers greater than intervals where the first endpoint is greater than the second also represent the empty interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "Interval",
        "normalized": "",
        "package": "species",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#t:NatO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNatO\u003c/a\u003e\u003c/code\u003e is an explicit representation of the co-inductive Nat type\n   which admits an infinite value, omega.  Our intuition for the\n   semantics of \u003ccode\u003e\u003ca\u003eNatO\u003c/a\u003e\u003c/code\u003e comes from thinking of it as an efficient\n   representation of lazy unary natural numbers, except that we can\n   actually test for omega in finite time.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#NatO",
        "fct-type": "data",
        "title": "NatO"
      },
      "index": {
        "description": "NatO is an explicit representation of the co-inductive Nat type which admits an infinite value omega Our intuition for the semantics of NatO comes from thinking of it as an efficient representation of lazy unary natural numbers except that we can actually test for omega in finite time",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "NatO",
        "normalized": "",
        "package": "species",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:decrI",
      "description": {
        "fct-descr": "\u003cp\u003eDecrement both endpoints of an interval.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#decrI",
        "fct-type": "function",
        "title": "decrI"
      },
      "index": {
        "description": "Decrement both endpoints of an interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "decrI",
        "normalized": "Interval-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "Interval-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eTest a given integer for interval membership.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e Interval -\u003e Bool",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Test given integer for interval membership",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "elem",
        "normalized": "Integer-\u003eInterval-\u003eBool",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003eInterval-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:emptyI",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty interval.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#emptyI",
        "fct-type": "function",
        "title": "emptyI"
      },
      "index": {
        "description": "The empty interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "emptyI",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:fromI",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an open range [n,omega].\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "NatO -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#fromI",
        "fct-type": "function",
        "title": "fromI"
      },
      "index": {
        "description": "Construct an open range omega",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "fromI",
        "normalized": "NatO-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "NatO-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:iHigh",
      "description": {
        "fct-descr": "\u003cp\u003eGet the upper endpoint of an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e NatO",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#iHigh",
        "fct-type": "function",
        "title": "iHigh"
      },
      "index": {
        "description": "Get the upper endpoint of an Interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "iHigh",
        "normalized": "Interval-\u003eNatO",
        "package": "species",
        "partial": "High",
        "signature": "Interval-\u003eNatO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:iLow",
      "description": {
        "fct-descr": "\u003cp\u003eGet the lower endpoint of an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e NatO",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#iLow",
        "fct-type": "function",
        "title": "iLow"
      },
      "index": {
        "description": "Get the lower endpoint of an Interval",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "iLow",
        "normalized": "Interval-\u003eNatO",
        "package": "species",
        "partial": "Low",
        "signature": "Interval-\u003eNatO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection of two intervals is the largest interval\n   contained in both.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e Interval -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "The intersection of two intervals is the largest interval contained in both",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "intersect",
        "normalized": "Interval-\u003eInterval-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "Interval-\u003eInterval-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:natO",
      "description": {
        "fct-descr": "\u003cp\u003eEliminator for \u003ccode\u003e\u003ca\u003eNatO\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "(Integer -\u003e a) -\u003e a -\u003e NatO -\u003e a",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#natO",
        "fct-type": "function",
        "title": "natO"
      },
      "index": {
        "description": "Eliminator for NatO values",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "natO",
        "normalized": "(Integer-\u003ea)-\u003ea-\u003eNatO-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "(Integer-\u003ea)-\u003ea-\u003eNatO-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:natsI",
      "description": {
        "fct-descr": "\u003cp\u003eThe range [0,omega] containing all natural numbers.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#natsI",
        "fct-type": "function",
        "title": "natsI"
      },
      "index": {
        "description": "The range omega containing all natural numbers",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "natsI",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:omega",
      "description": {
        "fct-descr": "\u003cp\u003eThe infinite \u003ccode\u003e\u003ca\u003eNatO\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "NatO",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#omega",
        "fct-type": "function",
        "title": "omega"
      },
      "index": {
        "description": "The infinite NatO value",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "omega",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:omegaI",
      "description": {
        "fct-descr": "\u003cp\u003eThe interval which contains only omega.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#omegaI",
        "fct-type": "function",
        "title": "omegaI"
      },
      "index": {
        "description": "The interval which contains only omega",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "omegaI",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an interval to a list of Integers.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert an interval to list of Integers",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "toList",
        "normalized": "Interval-\u003e[Integer]",
        "package": "species",
        "partial": "List",
        "signature": "Interval-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species-Util-Interval.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of two intervals is the smallest interval containing\n   both.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species.Util.Interval",
        "fct-package": "species",
        "fct-signature": "Interval -\u003e Interval -\u003e Interval",
        "fct-source": "src/Math-Combinatorics-Species-Util-Interval.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The union of two intervals is the smallest interval containing both",
        "hierarchy": "Math Combinatorics Species Util Interval",
        "module": "Math.Combinatorics.Species.Util.Interval",
        "name": "union",
        "normalized": "Interval-\u003eInterval-\u003eInterval",
        "package": "species",
        "partial": "",
        "signature": "Interval-\u003eInterval-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA DSL for describing and computing with combinatorial species.\n   This module re-exports the most generally useful functionality;\n   for more specialized functionality (for example, computing\n   directly with cycle index series), see the various sub-modules.\n\u003c/p\u003e\u003cp\u003eNote that this library makes extensive use of the numeric-prelude\n   library; to use it you will want to use -XNoImplicitPrelude, and\n   import NumericPrelude and PreludeBase.\n\u003c/p\u003e\u003cp\u003eFor a friendly introduction to combinatorial species in general\n   and this library in particular, see my series of blog posts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://byorgey.wordpress.com/2009/07/24/introducing-math-combinatorics-species/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://byorgey.wordpress.com/2009/07/30/primitive-species-and-species-operations/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://byorgey.wordpress.com/2009/07/31/primitive-species-and-species-operations-part-ii/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a good reference (really, the\n   only English-language reference!) on combinatorial species, see\n   Bergeron, Labelle, and Leroux, \"Combinatorial Species and\n   Tree-Like Structures\", Vol. 67 of the Encyclopedia of\n   Mathematics and its Applications, Gian-Carlo Rota, ed., Cambridge\n   University Press, 1998.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "module",
        "fct-source": "src/Math-Combinatorics-Species.html",
        "fct-type": "module",
        "title": "Species"
      },
      "index": {
        "description": "DSL for describing and computing with combinatorial species This module re-exports the most generally useful functionality for more specialized functionality for example computing directly with cycle index series see the various sub-modules Note that this library makes extensive use of the numeric-prelude library to use it you will want to use XNoImplicitPrelude and import NumericPrelude and PreludeBase For friendly introduction to combinatorial species in general and this library in particular see my series of blog posts http byorgey.wordpress.com introducing-math-combinatorics-species http byorgey.wordpress.com primitive-species-and-species-operations http byorgey.wordpress.com primitive-species-and-species-operations-part-ii For good reference really the only English-language reference on combinatorial species see Bergeron Labelle and Leroux Combinatorial Species and Tree-Like Structures Vol of the Encyclopedia of Mathematics and its Applications Gian-Carlo Rota ed Cambridge University Press",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Species",
        "normalized": "",
        "package": "species",
        "partial": "Species",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t::-42-:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor product.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2A%3A",
        "fct-type": "data",
        "title": ":*:"
      },
      "index": {
        "description": "Functor product",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": ":*:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t::-43-:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor coproduct.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "Functor coproduct",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": ":+:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t::.:",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor composition.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "data",
        "title": ":.:"
      },
      "index": {
        "description": "Functor composition",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": ":.:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:ASTFunctor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eASTFunctor\u003c/a\u003e\u003c/code\u003e is a type class for codes which can be interpreted\n   (via the \u003ccode\u003e\u003ca\u003eInterp\u003c/a\u003e\u003c/code\u003e type family) as higher-order functors over\n   species expressions.  The \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e method allows such codes to be\n   applied to a species AST.  The indirection is needed to implement\n   recursive species.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#ASTFunctor",
        "fct-type": "class",
        "title": "ASTFunctor"
      },
      "index": {
        "description": "ASTFunctor is type class for codes which can be interpreted via the Interp type family as higher-order functors over species expressions The apply method allows such codes to be applied to species AST The indirection is needed to implement recursive species",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ASTFunctor",
        "normalized": "",
        "package": "species",
        "partial": "ASTFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Const",
      "description": {
        "fct-descr": "\u003cp\u003eThe constant functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Const",
        "fct-type": "newtype",
        "title": "Const"
      },
      "index": {
        "description": "The constant functor",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Const",
        "normalized": "",
        "package": "species",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Cycle",
      "description": {
        "fct-descr": "\u003cp\u003eCycle structure.  A value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCycle\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is implemented as\n   \u003ccode\u003e[a]\u003c/code\u003e, but thought of as a directed cycle.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "newtype",
        "title": "Cycle"
      },
      "index": {
        "description": "Cycle structure value of type Cycle is implemented as but thought of as directed cycle",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Cycle",
        "normalized": "",
        "package": "species",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:ESpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eAn existential wrapper to hide the phantom type parameter to\n   \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e, so we can make it an instance of \u003ccode\u003eSpecies\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#ESpeciesAST",
        "fct-type": "data",
        "title": "ESpeciesAST"
      },
      "index": {
        "description": "An existential wrapper to hide the phantom type parameter to SizedSpeciesAST so we can make it an instance of Species",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ESpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "ESpecies AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Enumerable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e class allows you to enumerate structures of any\n   type, by declaring an instance of \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e\n   instance requires you to declare a standard structure type (see\n   \u003ca\u003eMath.Combinatorics.Species.Structures\u003c/a\u003e) associated with your\n   type, and a mapping \u003ccode\u003e\u003ca\u003eiso\u003c/a\u003e\u003c/code\u003e from the standard type to your custom\n   one.  Instances are provided for all the standard structure types\n   so you can enumerate species without having to provide your own\n   custom data type as the target of the enumeration if you don't\n   want to.\n\u003c/p\u003e\u003cp\u003eYou should only rarely have to explicitly make an instance of\n   \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e yourself; Template Haskell code to derive instances\n   for you is provided in \u003ca\u003eMath.Combinatorics.Species.TH\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#Enumerable",
        "fct-type": "class",
        "title": "Enumerable"
      },
      "index": {
        "description": "The Enumerable class allows you to enumerate structures of any type by declaring an instance of Enumerable The Enumerable instance requires you to declare standard structure type see Math.Combinatorics.Species.Structures associated with your type and mapping iso from the standard type to your custom one Instances are provided for all the standard structure types so you can enumerate species without having to provide your own custom data type as the target of the enumeration if you don want to You should only rarely have to explicitly make an instance of Enumerable yourself Template Haskell code to derive instances for you is provided in Math.Combinatorics.Species.TH",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Enumerable",
        "normalized": "",
        "package": "species",
        "partial": "Enumerable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "The identity functor",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Id",
        "normalized": "",
        "package": "species",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Interp",
      "description": {
        "fct-descr": "\u003cp\u003eInterpretation type function for codes for higher-order type\n   constructors, used as arguments to the higher-order fixpoint \u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Interp",
        "fct-type": "function",
        "title": "Interp"
      },
      "index": {
        "description": "Interpretation type function for codes for higher-order type constructors used as arguments to the higher-order fixpoint Mu",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Interp",
        "normalized": "",
        "package": "species",
        "partial": "Interp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eSet structure.  A value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is implemented as \u003ccode\u003e[a]\u003c/code\u003e,\n   but thought of as an unordered set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "newtype",
        "title": "Set"
      },
      "index": {
        "description": "Set structure value of type Set is implemented as but thought of as an unordered set",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Set",
        "normalized": "",
        "package": "species",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Species",
      "description": {
        "fct-descr": "\u003cp\u003eThe Species type class.  Note that the \u003ccode\u003eDifferential\u003c/code\u003e constraint\n   requires s to be a differentiable ring, which means that every\n   instance must also implement instances for \u003ca\u003eAlgebra.Additive\u003c/a\u003e\n   (the species 0 and species addition, i.e. disjoint sum),\n   \u003ca\u003eAlgebra.Ring\u003c/a\u003e (the species 1 and species multiplication,\n   i.e. partitional product), and \u003ca\u003eAlgebra.Differential\u003c/a\u003e (species\n   differentiation, i.e. adjoining a distinguished element).\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eofSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e operation can be used infix to suggest common\n   notation for composition, and also to be read as an abbreviation\n   for \"of\", as in \"top o' the mornin'\": \u003ccode\u003eset `o` nonEmpty\n   sets\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "class",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#Species",
        "fct-type": "class",
        "title": "Species"
      },
      "index": {
        "description": "The Species type class Note that the Differential constraint requires to be differentiable ring which means that every instance must also implement instances for Algebra.Additive the species and species addition i.e disjoint sum Algebra.Ring the species and species multiplication i.e partitional product and Algebra.Differential species differentiation i.e adjoining distinguished element Minimal complete definition singleton set cycle ofSize Note that the operation can be used infix to suggest common notation for composition and also to be read as an abbreviation for of as in top the mornin set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Species",
        "normalized": "",
        "package": "species",
        "partial": "Species",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:SpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eA basic, untyped AST type for species expressions, for easily\n doing things like analysis, simplification, deriving isomorphisms,\n and so on.  Converting between \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e and the typed variant\n \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e can be done with \u003ccode\u003e\u003ca\u003eannotate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eerase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#SpeciesAST",
        "fct-type": "data",
        "title": "SpeciesAST"
      },
      "index": {
        "description": "basic untyped AST type for species expressions for easily doing things like analysis simplification deriving isomorphisms and so on Converting between SpeciesAST and the typed variant ESpeciesAST can be done with annotate and erase",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "SpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "Species AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Star",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStar\u003c/a\u003e\u003c/code\u003e is isomorphic to \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, but with a more useful \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n   instance for our purposes.  Used to implement species\n   differentiation.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "data",
        "title": "Star"
      },
      "index": {
        "description": "Star is isomorphic to Maybe but with more useful Show instance for our purposes Used to implement species differentiation",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Star",
        "normalized": "",
        "package": "species",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:TSpeciesAST",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e with a phantom type parameter which\n   also reflects the structure, so we can write\n   quasi-dependently-typed functions over species, in particular for\n   species enumeration.\n\u003c/p\u003e\u003cp\u003eOf course, the non-uniform type parameter means that\n   \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e cannot be an instance of the \u003ccode\u003eSpecies\u003c/code\u003e class; for\n   that purpose the existential wrapper \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e is provided.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e is defined via mutual recursion with\n   \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e, which pairs a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e with an interval\n   annotation indicating (a conservative approximation of) the label\n   set sizes for which the species actually yields any structures;\n   this information makes enumeration faster and also prevents it\n   from getting stuck in infinite recursion in some cases.  A value\n   of \u003ccode\u003e\u003ca\u003eSizedSpeciesAST\u003c/a\u003e\u003c/code\u003e is thus an annotated species expression tree\n   with interval annotations at every node.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#TSpeciesAST",
        "fct-type": "data",
        "title": "TSpeciesAST"
      },
      "index": {
        "description": "variant of SpeciesAST with phantom type parameter which also reflects the structure so we can write quasi-dependently-typed functions over species in particular for species enumeration Of course the non-uniform type parameter means that TSpeciesAST cannot be an instance of the Species class for that purpose the existential wrapper ESpeciesAST is provided TSpeciesAST is defined via mutual recursion with SizedSpeciesAST which pairs TSpeciesAST with an interval annotation indicating conservative approximation of the label set sizes for which the species actually yields any structures this information makes enumeration faster and also prevents it from getting stuck in infinite recursion in some cases value of SizedSpeciesAST is thus an annotated species expression tree with interval annotations at every node",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "TSpeciesAST",
        "normalized": "",
        "package": "species",
        "partial": "TSpecies AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Unit",
      "description": {
        "fct-descr": "\u003cp\u003eThe (constantly) unit functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Unit",
        "fct-type": "data",
        "title": "Unit"
      },
      "index": {
        "description": "The constantly unit functor",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Unit",
        "normalized": "",
        "package": "species",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eThe (constantly) void functor.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "data",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Void",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "The constantly void functor",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Void",
        "normalized": "",
        "package": "species",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCartisian product of two species.  An \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e-structure\n consists of an \u003ccode\u003ef\u003c/code\u003e-structure superimposed on a \u003ccode\u003eg\u003c/code\u003e-structure over\n the same underlying set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#%3E%3C",
        "fct-type": "method",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Cartisian product of two species An structure consists of an structure superimposed on structure over the same underlying set",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor composition of two species.  An \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e-structure\n   consists of an \u003ccode\u003ef\u003c/code\u003e-structure on the set of all \u003ccode\u003eg\u003c/code\u003e-structures.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#%40%40",
        "fct-type": "method",
        "title": "(@@)"
      },
      "index": {
        "description": "Functor composition of two species An structure consists of an structure on the set of all structures",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "(@@) @@",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v::-42-:",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "(f a) :*: (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2A%3A",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": ":*:",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Comp",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Comp",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "function",
        "title": "Comp"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Comp",
        "normalized": "",
        "package": "species",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Const",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Const x",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Const",
        "fct-type": "function",
        "title": "Const"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Const",
        "normalized": "",
        "package": "species",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Cycle",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Cycle",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "function",
        "title": "Cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Cycle",
        "normalized": "",
        "package": "species",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Id",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Id a",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Id",
        "normalized": "",
        "package": "species",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Inl",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Inl (f a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inl"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Inl",
        "normalized": "",
        "package": "species",
        "partial": "Inl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Inr",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Inr (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inr"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Inr",
        "normalized": "",
        "package": "species",
        "partial": "Inr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Original",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Original a",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "function",
        "title": "Original"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Original",
        "normalized": "",
        "package": "species",
        "partial": "Original",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Set",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Set",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "function",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Set",
        "normalized": "",
        "package": "species",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Star",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Star",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Star",
        "fct-type": "function",
        "title": "Star"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Star",
        "normalized": "",
        "package": "species",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:Unit",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Unit",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Unit",
        "fct-type": "function",
        "title": "Unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "Unit",
        "normalized": "",
        "package": "species",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:annotate",
      "description": {
        "fct-descr": "\u003cp\u003eReconstruct the type and interval annotations on a species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "Reconstruct the type and interval annotations on species AST",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "annotate",
        "normalized": "SpeciesAST-\u003eESpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:apply",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "f -\u003e TSpeciesAST g -\u003e TSpeciesAST (Interp f g)",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "apply",
        "normalized": "a-\u003eTSpeciesAST b-\u003eTSpeciesAST(Interp a b)",
        "package": "species",
        "partial": "",
        "signature": "f-\u003eTSpeciesAST g-\u003eTSpeciesAST(Interp f g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ballot",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of ballots consists of linear orderings of\n   nonempty sets: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eballot\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ballot",
        "fct-type": "function",
        "title": "ballot"
      },
      "index": {
        "description": "The species of ballots consists of linear orderings of nonempty sets ballot linOrd nonEmpty sets",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ballot",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ballots",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of ballots consists of linear orderings of\n   nonempty sets: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eballot\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ballots",
        "fct-type": "function",
        "title": "ballots"
      },
      "index": {
        "description": "The species of ballots consists of linear orderings of nonempty sets ballot linOrd nonEmpty sets",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ballots",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eC\u003c/code\u003e of cyclical orderings (cycles/rings).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#cycle",
        "fct-type": "method",
        "title": "cycle"
      },
      "index": {
        "description": "The species of cyclical orderings cycles rings",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "cycle",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:cycles",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#cycles",
        "fct-type": "function",
        "title": "cycles"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "cycles",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:deriveDefaultSpecies",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate default species declarations for the given user-defined\n   data type.  To use it:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell,\n              TypeFamilies,\n              DeriveDataTypeable,\n              FlexibleInstances,\n              UndecidableInstances #-}\n\n data MyType = ...\n\n $(deriveDefaultSpecies ''MyType)\n\u003c/pre\u003e\u003cp\u003eYes, you really do need all those extensions.  And don't panic\n   about the \u003ccode\u003eUndecidableInstances\u003c/code\u003e; the instances generated\n   actually are decidable, but GHC just can't tell.\n\u003c/p\u003e\u003cp\u003eThis is what you get:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eMyType\u003c/code\u003e (and various other\n     supporting things like a code and an \u003ccode\u003e\u003ca\u003eASTFunctor\u003c/a\u003e\u003c/code\u003e instance if\n     your data type is recursive)\n\u003c/li\u003e\u003cli\u003e A declaration of \u003ccode\u003emyType :: Species s =\u003e s\u003c/code\u003e (the same name as\n     the type constructor but with the first letter lowercased)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can then use \u003ccode\u003emyType\u003c/code\u003e in any species expression, or as input\n   to any function expecting a species.  For example, to count your\n   data type's distinct shapes, you can do\n\u003c/p\u003e\u003cpre\u003e take 10 . unlabeled $ myType\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Math-Combinatorics-Species-TH.html#deriveDefaultSpecies",
        "fct-type": "function",
        "title": "deriveDefaultSpecies"
      },
      "index": {
        "description": "Generate default species declarations for the given user-defined data type To use it LANGUAGE TemplateHaskell TypeFamilies DeriveDataTypeable FlexibleInstances UndecidableInstances data MyType deriveDefaultSpecies MyType Yes you really do need all those extensions And don panic about the UndecidableInstances the instances generated actually are decidable but GHC just can tell This is what you get An Enumerable instance for MyType and various other supporting things like code and an ASTFunctor instance if your data type is recursive declaration of myType Species the same name as the type constructor but with the first letter lowercased You can then use myType in any species expression or as input to any function expecting species For example to count your data type distinct shapes you can do take unlabeled myType",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "deriveDefaultSpecies",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "species",
        "partial": "Default Species",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:deriveSpecies",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ederiveDefaultSpecies\u003c/a\u003e\u003c/code\u003e, except that you specify the species\n expression that your data type should be isomorphic to.  Note: this\n is currently experimental (read: bug-ridden).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Name -\u003e SpeciesAST -\u003e Q [Dec]",
        "fct-source": "src/Math-Combinatorics-Species-TH.html#deriveSpecies",
        "fct-type": "function",
        "title": "deriveSpecies"
      },
      "index": {
        "description": "Like deriveDefaultSpecies except that you specify the species expression that your data type should be isomorphic to Note this is currently experimental read bug-ridden",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "deriveSpecies",
        "normalized": "Name-\u003eSpeciesAST-\u003eQ[Dec]",
        "package": "species",
        "partial": "Species",
        "signature": "Name-\u003eSpeciesAST-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:directedGraph",
      "description": {
        "fct-descr": "\u003cp\u003eA directed graph (with loops) is a subset of all pairs drawn\n   (with replacement) from the set of vertices: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e\n   (\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  It can also be thought of as the\n   species of binary relations.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#directedGraph",
        "fct-type": "function",
        "title": "directedGraph"
      },
      "index": {
        "description": "directed graph with loops is subset of all pairs drawn with replacement from the set of vertices subset element element It can also be thought of as the species of binary relations",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "directedGraph",
        "normalized": "",
        "package": "species",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:directedGraphs",
      "description": {
        "fct-descr": "\u003cp\u003eA directed graph (with loops) is a subset of all pairs drawn\n   (with replacement) from the set of vertices: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e\n   (\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  It can also be thought of as the\n   species of binary relations.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#directedGraphs",
        "fct-type": "function",
        "title": "directedGraphs"
      },
      "index": {
        "description": "directed graph with loops is subset of all pairs drawn with replacement from the set of vertices subset element element It can also be thought of as the species of binary relations",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "directedGraphs",
        "normalized": "",
        "package": "species",
        "partial": "Graphs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:element",
      "description": {
        "fct-descr": "\u003cp\u003eStructures of the species \u003ccode\u003ee\u003c/code\u003e of elements are just elements of\n   the underlying set, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eelement\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Included\n   with a default definition in \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class for the same\n   reason as \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#element",
        "fct-type": "method",
        "title": "element"
      },
      "index": {
        "description": "Structures of the species of elements are just elements of the underlying set element singleton set Included with default definition in Species class for the same reason as subset and ksubset",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "element",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:elements",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#elements",
        "fct-type": "function",
        "title": "elements"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "elements",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eenumerate s ls\u003c/code\u003e computes a complete list of distinct\n   \u003ccode\u003es\u003c/code\u003e-structures over the underlying multiset of labels \u003ccode\u003els\u003c/code\u003e.  For\n   example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerate octopi [1,2,3] :: [Comp Cycle [] Int]\n [\u003c[3,2,1]\u003e,\u003c[3,1,2]\u003e,\u003c[2,3,1]\u003e,\u003c[2,1,3]\u003e,\u003c[1,3,2]\u003e,\u003c[1,2,3]\u003e,\n  \u003c[1],[3,2]\u003e,\u003c[1],[2,3]\u003e,\u003c[3,1],[2]\u003e,\u003c[1,3],[2]\u003e,\u003c[2,1],[3]\u003e,\n  \u003c[1,2],[3]\u003e,\u003c[2],[1],[3]\u003e,\u003c[1],[2],[3]\u003e]\n\n \u003e enumerate octopi [1,1,2] :: [Comp Cycle [] Int]\n [\u003c[2,1,1]\u003e,\u003c[1,2,1]\u003e,\u003c[1,1,2]\u003e,\u003c[2,1],[1]\u003e,\u003c[1,2],[1]\u003e,\n  \u003c[1,1],[2]\u003e,\u003c[1],[1],[2]\u003e]\n\n \u003e enumerate subsets \"abc\" :: [Set Int]\n [{'a','b','c'},{'a','b'},{'a','c'},{'a'},{'b','c'},{'b'},{'c'},{}]\n\n \u003e enumerate simpleGraphs [1,2,3] :: [Comp Set Set Int]\n [{{1,2},{1,3},{2,3}},{{1,2},{1,3}},{{1,2},{2,3}},{{1,2}},{{1,3},{2,3}},\n  {{1,3}},{{2,3}},{}]\n\u003c/pre\u003e\u003cp\u003eThere is one caveat: since the type of the generated structures\n   is different for each species, they must be cast (using the magic\n   of \u003ca\u003eData.Typeable\u003c/a\u003e) out of an existential wrapper; this is why\n   type annotations are required in all the examples above.  Of\n   course, if a call to \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e is used in the context of some\n   larger program, a type annotation will probably not be needed,\n   due to the magic of type inference.\n\u003c/p\u003e\u003cp\u003eFor help in knowing what type annotation you can give when\n   enumerating the structures of a particular species at the \u003ccode\u003eghci\u003c/code\u003e\n   prompt, see the \u003ccode\u003e\u003ca\u003estructureType\u003c/a\u003e\u003c/code\u003e function.  To be able to use your\n   own custom data type in an enumeration, just make your data type\n   an instance of the \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e type class; this can be done for\n   you automatically by \u003ca\u003eMath.Combinatorics.Species.TH\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an invalid type annotation is given, \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e will call\n   \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a helpful error message.  This should not be much of\n   an issue in practice, since usually \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e will be used at a\n   specific type; it's hard to imagine a usage of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e which\n   will sometimes work and sometimes fail.  However, those who like\n   their functions total can use \u003ccode\u003e\u003ca\u003eextractStructure\u003c/a\u003e\u003c/code\u003e to make a\n   version of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e (or the other variants) with a return type\n   of \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e (f a)]\u003c/code\u003e (which will return an annoying ton of\n   duplicate error messages) or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e [f a]\u003c/code\u003e (which has the\n   unfortunate property of being much less lazy than the current\n   versions, since it must compute the entire list before deciding\n   whether to return \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor slight variants on \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003eenumerateL\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eenumerateU\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eenumerateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [a] -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerate",
        "fct-type": "function",
        "title": "enumerate"
      },
      "index": {
        "description": "enumerate ls computes complete list of distinct structures over the underlying multiset of labels ls For example enumerate octopi Comp Cycle Int enumerate octopi Comp Cycle Int enumerate subsets abc Set Int enumerate simpleGraphs Comp Set Set Int There is one caveat since the type of the generated structures is different for each species they must be cast using the magic of Data.Typeable out of an existential wrapper this is why type annotations are required in all the examples above Of course if call to enumerate is used in the context of some larger program type annotation will probably not be needed due to the magic of type inference For help in knowing what type annotation you can give when enumerating the structures of particular species at the ghci prompt see the structureType function To be able to use your own custom data type in an enumeration just make your data type an instance of the Enumerable type class this can be done for you automatically by Math.Combinatorics.Species.TH If an invalid type annotation is given enumerate will call error with helpful error message This should not be much of an issue in practice since usually enumerate will be used at specific type it hard to imagine usage of enumerate which will sometimes work and sometimes fail However those who like their functions total can use extractStructure to make version of enumerate or the other variants with return type of Either String which will return an annoying ton of duplicate error messages or Either String which has the unfortunate property of being much less lazy than the current versions since it must compute the entire list before deciding whether to return Left or Right For slight variants on enumerate see enumerateL enumerateU and enumerateM",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerate",
        "normalized": "SpeciesAST-\u003e[a]-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerateAll",
      "description": {
        "fct-descr": "\u003cp\u003eLazily enumerate all labeled structures, using [1..] as the\n   labels.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ enumerateAll ballots :: [Comp [] Set Int]\n [[],[{1}],[{1,2}],[{2},{1}],[{1},{2}],[{1,2,3}],[{2,3},{1}]\n ,[{1},{2,3}],[{2},{1,3}],[{1,3},{2}]]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [f Int]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateAll",
        "fct-type": "function",
        "title": "enumerateAll"
      },
      "index": {
        "description": "Lazily enumerate all labeled structures using as the labels For example take enumerateAll ballots Comp Set Int",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerateAll",
        "normalized": "SpeciesAST-\u003e[a Int]",
        "package": "species",
        "partial": "All",
        "signature": "SpeciesAST-\u003e[f Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerateAllU",
      "description": {
        "fct-descr": "\u003cp\u003eLazily enumerate all unlabeled structures.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ enumerateAllU octopi :: [Comp Cycle [] ()]\n [\u003c[()]\u003e,\u003c[(),()]\u003e,\u003c[()],[()]\u003e,\u003c[(),(),()]\u003e,\u003c[(),()],[()]\u003e\n ,\u003c[()],[()],[()]\u003e,\u003c[(),(),(),()]\u003e,\u003c[(),()],[(),()]\u003e\n ,\u003c[(),(),()],[()]\u003e,\u003c[(),()],[()],[()]\u003e]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [f ()]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateAllU",
        "fct-type": "function",
        "title": "enumerateAllU"
      },
      "index": {
        "description": "Lazily enumerate all unlabeled structures For example take enumerateAllU octopi Comp Cycle",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerateAllU",
        "normalized": "SpeciesAST-\u003e[a()]",
        "package": "species",
        "partial": "All",
        "signature": "SpeciesAST-\u003e[f()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerateL",
      "description": {
        "fct-descr": "\u003cp\u003eLabeled enumeration: given a species expression and a list of\n   labels (which are assumed to be distinct), compute the list of\n   all structures built from the given labels.  If the type given\n   for the enumeration does not match the species expression (via an\n   \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance), call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with an error message\n   explaining the mismatch.  This is slightly more efficient than\n   \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e for lists of labels which are known to be distinct,\n   since it doesn't have to waste time checking for\n   duplicates. (However, it probably doesn't really make much\n   difference, since the time to do the actual enumeration will\n   usually dwarf the time to process the list of labels anyway.)\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerateL ballots [1,2,3] :: [Comp [] Set Int]\n [[{1,2,3}],[{2,3},{1}],[{1},{2,3}],[{2},{1,3}],[{1,3},{2}],[{3},{1,2}]\n ,[{1,2},{3}],[{3},{2},{1}],[{3},{1},{2}],[{2},{3},{1}],[{2},{1},{3}]\n ,[{1},{3},{2}],[{1},{2},{3}]]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [a] -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateL",
        "fct-type": "function",
        "title": "enumerateL"
      },
      "index": {
        "description": "Labeled enumeration given species expression and list of labels which are assumed to be distinct compute the list of all structures built from the given labels If the type given for the enumeration does not match the species expression via an Enumerable instance call error with an error message explaining the mismatch This is slightly more efficient than enumerate for lists of labels which are known to be distinct since it doesn have to waste time checking for duplicates However it probably doesn really make much difference since the time to do the actual enumeration will usually dwarf the time to process the list of labels anyway For example enumerateL ballots Comp Set Int",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerateL",
        "normalized": "SpeciesAST-\u003e[a]-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerateM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral enumeration: given a species expression and a multiset of\n   labels, compute the list of all distinct structures built from\n   the given labels. If the type given for the enumeration does not\n   match the species expression, call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a message\n   explaining the mismatch.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Multiset a -\u003e [f a]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateM",
        "fct-type": "function",
        "title": "enumerateM"
      },
      "index": {
        "description": "General enumeration given species expression and multiset of labels compute the list of all distinct structures built from the given labels If the type given for the enumeration does not match the species expression call error with message explaining the mismatch",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerateM",
        "normalized": "SpeciesAST-\u003eMultiset a-\u003e[b a]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eMultiset a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:enumerateU",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled enumeration: given a species expression and an integer\n   indicating the number of labels to use, compute the list of all\n   unlabeled structures of the given size.  If the type given for\n   the enumeration does not match the species expression, call\n   \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with an error message explaining the mismatch.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumerateU\u003c/a\u003e\u003c/code\u003e s n\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e s\n   (replicate n ())\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e \u003e enumerateU octopi 4 :: [Comp Cycle [] ()]\n [\u003c[(),(),(),()]\u003e,\u003c[(),()],[(),()]\u003e,\u003c[(),(),()],[()]\u003e\n ,\u003c[(),()],[()],[()]\u003e,\u003c[()],[()],[()],[()]\u003e]\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e Int -\u003e [f ()]",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#enumerateU",
        "fct-type": "function",
        "title": "enumerateU"
      },
      "index": {
        "description": "Unlabeled enumeration given species expression and an integer indicating the number of labels to use compute the list of all unlabeled structures of the given size If the type given for the enumeration does not match the species expression call error with an error message explaining the mismatch Note that enumerateU is equivalent to enumerate replicate For example enumerateU octopi Comp Cycle",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "enumerateU",
        "normalized": "SpeciesAST-\u003eInt-\u003e[a()]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eInt-\u003e[f()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:erase",
      "description": {
        "fct-descr": "\u003cp\u003eErase the type and interval information from an existentially\n wrapped species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#erase",
        "fct-type": "function",
        "title": "erase"
      },
      "index": {
        "description": "Erase the type and interval information from an existentially wrapped species AST",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "erase",
        "normalized": "ESpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:erase-39-",
      "description": {
        "fct-descr": "\u003cp\u003eErase the type and interval information from a typed species AST.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST f -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#erase%27",
        "fct-type": "function",
        "title": "erase'"
      },
      "index": {
        "description": "Erase the type and interval information from typed species AST",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "erase'",
        "normalized": "TSpeciesAST a-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST f-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:getCycle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "[a]",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Cycle",
        "fct-type": "function",
        "title": "getCycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "getCycle",
        "normalized": "[a]",
        "package": "species",
        "partial": "Cycle",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:getSet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "[a]",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#Set",
        "fct-type": "function",
        "title": "getSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "getSet",
        "normalized": "[a]",
        "package": "species",
        "partial": "Set",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eThe mapping from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStructTy\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "StructTy f a -\u003e f a",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#iso",
        "fct-type": "method",
        "title": "iso"
      },
      "index": {
        "description": "The mapping from StructTy to",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "iso",
        "normalized": "StructTy a b-\u003ea b",
        "package": "species",
        "partial": "",
        "signature": "StructTy f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ksubset",
      "description": {
        "fct-descr": "\u003cp\u003eSubsets of size exactly k, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e k = (\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eofSizeExactly\u003c/a\u003e\u003c/code\u003e` k) * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Included with a default definition\n in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class for the same reason as \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ksubset",
        "fct-type": "method",
        "title": "ksubset"
      },
      "index": {
        "description": "Subsets of size exactly ksubset set ofSizeExactly set Included with default definition in the Species class for the same reason as subset",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ksubset",
        "normalized": "Integer-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ksubsets",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ksubsets",
        "fct-type": "function",
        "title": "ksubsets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ksubsets",
        "normalized": "Integer-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "Integer-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:labeled",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the coefficients of an exponential generating function as\n   a list of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es.  Since \u003ccode\u003e\u003ca\u003eEGF\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e, the\n   idea is that \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e can be applied directly to an expression\n   of the species DSL.  In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e  n\u003c/code\u003e is the\n   number of labeled \u003ccode\u003es\u003c/code\u003e-structures on an underlying set of size \u003ccode\u003en\u003c/code\u003e\n   (note that \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is guaranteed to be an infinite list).\n   For example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ labeled octopi\n [0,1,3,14,90,744,7560,91440,1285200,20603520]\n\u003c/pre\u003e\u003cp\u003egives the number of labeled octopi on 0, 1, 2, 3, ... 9 labels.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "EGF -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Labeled.html#labeled",
        "fct-type": "function",
        "title": "labeled"
      },
      "index": {
        "description": "Extract the coefficients of an exponential generating function as list of Integer Since EGF is an instance of Species the idea is that labeled can be applied directly to an expression of the species DSL In particular labeled is the number of labeled structures on an underlying set of size note that labeled is guaranteed to be an infinite list For example take labeled octopi gives the number of labeled octopi on labels",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "labeled",
        "normalized": "EGF-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "EGF-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:labelled",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e, since both spellings are acceptable and\n   it's annoying to have to remember which is correct.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "EGF -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Labeled.html#labelled",
        "fct-type": "function",
        "title": "labelled"
      },
      "index": {
        "description": "synonym for labeled since both spellings are acceptable and it annoying to have to remember which is correct",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "labelled",
        "normalized": "EGF-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "EGF-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:linOrd",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eL\u003c/code\u003e of linear orderings (lists). Since linear\n   orderings are isomorphic to cyclic orderings with a hole, we\n   may take \u003ccode\u003e\u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoneHole\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the default\n   implementation; \u003ccode\u003e\u003ca\u003elinOrd\u003c/a\u003e\u003c/code\u003e is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it\n   can be special-cased for enumeration.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#linOrd",
        "fct-type": "method",
        "title": "linOrd"
      },
      "index": {
        "description": "The species of linear orderings lists Since linear orderings are isomorphic to cyclic orderings with hole we may take linOrd oneHole cycle as the default implementation linOrd is included in the Species class so it can be special-cased for enumeration",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "linOrd",
        "normalized": "",
        "package": "species",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:linOrds",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#linOrds",
        "fct-type": "function",
        "title": "linOrds"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "linOrds",
        "normalized": "",
        "package": "species",
        "partial": "Ords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:newtonRaphson",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a species \u003ccode\u003er\u003c/code\u003e and a desired accuracy \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003enewtonRaphson\u003c/a\u003e\u003c/code\u003e\n   r k\u003c/code\u003e computes a species which has contact at least \u003ccode\u003ek\u003c/code\u003e with the\n   species \u003ccode\u003et = x \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e (r `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#newtonRaphson",
        "fct-type": "function",
        "title": "newtonRaphson"
      },
      "index": {
        "description": "Given species and desired accuracy newtonRaphson computes species which has contact at least with the species",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "newtonRaphson",
        "normalized": "a-\u003eInteger-\u003ea",
        "package": "species",
        "partial": "Raphson",
        "signature": "s-\u003eInteger-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:newtonRaphsonRec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enewtonRaphsonRec\u003c/a\u003e\u003c/code\u003e f k\u003c/code\u003e tries to compute the recursive species\n   represented by the code \u003ccode\u003ef\u003c/code\u003e up to order at least \u003ccode\u003ek\u003c/code\u003e, using\n   Newton-Raphson iteration.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ef\u003c/code\u003e cannot be\n   written in the form \u003ccode\u003ef = X*R(f)\u003c/code\u003e for some species \u003ccode\u003eR\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "f -\u003e Integer -\u003e Maybe s",
        "fct-source": "src/Math-Combinatorics-Species-NewtonRaphson.html#newtonRaphsonRec",
        "fct-type": "function",
        "title": "newtonRaphsonRec"
      },
      "index": {
        "description": "newtonRaphsonRec tries to compute the recursive species represented by the code up to order at least using Newton-Raphson iteration Returns Nothing if cannot be written in the form for some species",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "newtonRaphsonRec",
        "normalized": "a-\u003eInteger-\u003eMaybe b",
        "package": "species",
        "partial": "Raphson Rec",
        "signature": "f-\u003eInteger-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:nonEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eDon't put a structure on the empty set.  The default definition\n   uses \u003ccode\u003e\u003ca\u003eofSize\u003c/a\u003e\u003c/code\u003e; included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it can be\n   overriden in special cases (such as when reifying species\n   expressions).\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#nonEmpty",
        "fct-type": "method",
        "title": "nonEmpty"
      },
      "index": {
        "description": "Don put structure on the empty set The default definition uses ofSize included in the Species class so it can be overriden in special cases such as when reifying species expressions",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "nonEmpty",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "Empty",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:o",
      "description": {
        "fct-descr": "\u003cp\u003ePartitional composition.  To form all \u003ccode\u003e(f `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` g)\u003c/code\u003e-structures on\n   the underlying label set U, first form all set partitions of U;\n   for each partition \u003ccode\u003ep\u003c/code\u003e, put an \u003ccode\u003ef\u003c/code\u003e-structure on the classes of\n   \u003ccode\u003ep\u003c/code\u003e, and a separate \u003ccode\u003eg\u003c/code\u003e-structure on the elements in each\n   class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#o",
        "fct-type": "method",
        "title": "o"
      },
      "index": {
        "description": "Partitional composition To form all structures on the underlying label set first form all set partitions of for each partition put an structure on the classes of and separate structure on the elements in each class",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "o",
        "normalized": "a-\u003ea-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:octopi",
      "description": {
        "fct-descr": "\u003cp\u003eAn octopus is a cyclic arrangement of lists, so called because\n   the lists look like \"tentacles\" attached to the cyclic\n   \"body\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoctopus\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elinOrds\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#octopi",
        "fct-type": "function",
        "title": "octopi"
      },
      "index": {
        "description": "An octopus is cyclic arrangement of lists so called because the lists look like tentacles attached to the cyclic body octopus cycle nonEmpty linOrds",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "octopi",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:octopus",
      "description": {
        "fct-descr": "\u003cp\u003eAn octopus is a cyclic arrangement of lists, so called because\n   the lists look like \"tentacles\" attached to the cyclic\n   \"body\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoctopus\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elinOrds\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#octopus",
        "fct-type": "function",
        "title": "octopus"
      },
      "index": {
        "description": "An octopus is cyclic arrangement of lists so called because the lists look like tentacles attached to the cyclic body octopus cycle nonEmpty linOrds",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "octopus",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ofSize",
      "description": {
        "fct-descr": "\u003cp\u003eOnly put a structure on underlying sets whose size satisfies\n   the predicate.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e (Integer -\u003e Bool) -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ofSize",
        "fct-type": "method",
        "title": "ofSize"
      },
      "index": {
        "description": "Only put structure on underlying sets whose size satisfies the predicate",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ofSize",
        "normalized": "a-\u003e(Integer-\u003eBool)-\u003ea",
        "package": "species",
        "partial": "Size",
        "signature": "s-\u003e(Integer-\u003eBool)-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:ofSizeExactly",
      "description": {
        "fct-descr": "\u003cp\u003eOnly put a structure on underlying sets of the given size.  A\n   default implementation of \u003ccode\u003eofSize (==k)\u003c/code\u003e is provided, but this\n   method is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class as a special case\n   since it can be more efficient: we get to turn infinite lists\n   of coefficients into finite ones.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e Integer -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#ofSizeExactly",
        "fct-type": "method",
        "title": "ofSizeExactly"
      },
      "index": {
        "description": "Only put structure on underlying sets of the given size default implementation of ofSize is provided but this method is included in the Species class as special case since it can be more efficient we get to turn infinite lists of coefficients into finite ones",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "ofSizeExactly",
        "normalized": "a-\u003eInteger-\u003ea",
        "package": "species",
        "partial": "Size Exactly",
        "signature": "s-\u003eInteger-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:oneHole",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient synonym for differentiation.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eoneHole\u003c/a\u003e\u003c/code\u003e\n f\u003c/code\u003e-structures look like \u003ccode\u003ef\u003c/code\u003e-structures on a set formed by adjoining\n a distinguished \"hole\" element to the underlying set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#oneHole",
        "fct-type": "function",
        "title": "oneHole"
      },
      "index": {
        "description": "convenient synonym for differentiation oneHole structures look like structures on set formed by adjoining distinguished hole element to the underlying set",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "oneHole",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "Hole",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of set partitions is just the composition \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "The species of set partitions is just the composition set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "partition",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:partitions",
      "description": {
        "fct-descr": "\u003cp\u003eThe species of set partitions is just the composition \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#partitions",
        "fct-type": "function",
        "title": "partitions"
      },
      "index": {
        "description": "The species of set partitions is just the composition set nonEmpty sets",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "partitions",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:permutation",
      "description": {
        "fct-descr": "\u003cp\u003eA permutation is a set of disjoint cycles: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epermutation\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003ecycles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#permutation",
        "fct-type": "function",
        "title": "permutation"
      },
      "index": {
        "description": "permutation is set of disjoint cycles permutation set cycles",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "permutation",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:permutations",
      "description": {
        "fct-descr": "\u003cp\u003eA permutation is a set of disjoint cycles: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epermutation\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\n `\u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003ecycles\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#permutations",
        "fct-type": "function",
        "title": "permutations"
      },
      "index": {
        "description": "permutation is set of disjoint cycles permutation set cycles",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "permutations",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:pointed",
      "description": {
        "fct-descr": "\u003cp\u003eIntuitively, the operation of pointing picks out a\n   distinguished element from an underlying set.  It is equivalent\n   to the operator \u003ccode\u003ex d/dx\u003c/code\u003e: \u003ccode\u003e\u003ccode\u003e\u003ca\u003epointed\u003c/a\u003e\u003c/code\u003e s = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003edifferentiate\u003c/code\u003e s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#pointed",
        "fct-type": "function",
        "title": "pointed"
      },
      "index": {
        "description": "Intuitively the operation of pointing picks out distinguished element from an underlying set It is equivalent to the operator dx pointed singleton differentiate",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "pointed",
        "normalized": "a-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:rec",
      "description": {
        "fct-descr": "\u003cp\u003e'rec f' is the least fixpoint of (the interpretation of) the\n   higher-order species constructor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "f -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#rec",
        "fct-type": "method",
        "title": "rec"
      },
      "index": {
        "description": "rec is the least fixpoint of the interpretation of the higher-order species constructor",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "rec",
        "normalized": "a-\u003eb",
        "package": "species",
        "partial": "",
        "signature": "f-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eReflect an AST back into any instance of the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e s",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reflect",
        "fct-type": "function",
        "title": "reflect"
      },
      "index": {
        "description": "Reflect an AST back into any instance of the Species class",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "reflect",
        "normalized": "SpeciesAST-\u003ea",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:reify",
      "description": {
        "fct-descr": "\u003cp\u003eReify a species expression into an AST.  (Actually, this is just\n   the identity function with a usefully restricted type.)  For\n   example:\n\u003c/p\u003e\u003cpre\u003e \u003e reify octopus\n C . TL+\n \u003e reify (ksubset 3)\n E3 * TE\n\u003c/pre\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST-Instances.html#reify",
        "fct-type": "function",
        "title": "reify"
      },
      "index": {
        "description": "Reify species expression into an AST Actually this is just the identity function with usefully restricted type For example reify octopus TL reify ksubset E3 TE",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "reify",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eE\u003c/code\u003e of sets.  Puts a singleton structure on \u003cem\u003eany\u003c/em\u003e\n   underlying label set.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#set",
        "fct-type": "method",
        "title": "set"
      },
      "index": {
        "description": "The species of sets Puts singleton structure on any underlying label set",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "set",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:sets",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#sets",
        "fct-type": "function",
        "title": "sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "sets",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:simpleGraph",
      "description": {
        "fct-descr": "\u003cp\u003eSimple graphs (undirected, without loops). A simple graph is a\n   subset of the set of all size-two subsets of the vertices:\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esimpleGraph\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e 2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#simpleGraph",
        "fct-type": "function",
        "title": "simpleGraph"
      },
      "index": {
        "description": "Simple graphs undirected without loops simple graph is subset of the set of all size-two subsets of the vertices simpleGraph subset ksubset",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "simpleGraph",
        "normalized": "",
        "package": "species",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:simpleGraphs",
      "description": {
        "fct-descr": "\u003cp\u003eSimple graphs (undirected, without loops). A simple graph is a\n   subset of the set of all size-two subsets of the vertices:\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003esimpleGraph\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e@@\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eksubset\u003c/a\u003e\u003c/code\u003e 2)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#simpleGraphs",
        "fct-type": "function",
        "title": "simpleGraphs"
      },
      "index": {
        "description": "Simple graphs undirected without loops simple graph is subset of the set of all size-two subsets of the vertices simpleGraph subset ksubset",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "simpleGraphs",
        "normalized": "",
        "package": "species",
        "partial": "Graphs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:simplify",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a species expression \u003ccode\u003es\u003c/code\u003e, return a species expression\n   in normal form which represents a species isomorphic to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e SpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-Simplify.html#simplify",
        "fct-type": "function",
        "title": "simplify"
      },
      "index": {
        "description": "Given species expression return species expression in normal form which represents species isomorphic to",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "simplify",
        "normalized": "SpeciesAST-\u003eSpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003eSpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003eX\u003c/code\u003e of singletons. Puts a singleton structure on an\n   underlying label set of size 1, and no structures on any other\n   underlying label sets.  \u003ccode\u003e\u003ca\u003ex\u003c/a\u003e\u003c/code\u003e is also provided as a synonym.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "The species of singletons Puts singleton structure on an underlying label set of size and no structures on any other underlying label sets is also provided as synonym",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "singleton",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:structureType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003estructureType\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a String representation of the\n   functor type which represents the structure of the species \u003ccode\u003es\u003c/code\u003e.\n   In particular, if \u003ccode\u003estructureType s\u003c/code\u003e prints \u003ccode\u003e\"T\"\u003c/code\u003e, then you can\n   safely use \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e and friends by writing\n\u003c/p\u003e\u003cpre\u003e enumerate s ls :: [T a]\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003els :: [a]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e \u003e structureType octopus\n \"Comp Cycle []\"\n \u003e enumerate octopus [1,2,3] :: [Comp Cycle [] Int]\n [\u003c[3,2,1]\u003e,\u003c[3,1,2]\u003e,\u003c[2,3,1]\u003e,\u003c[2,1,3]\u003e,\u003c[1,3,2]\u003e\n ,\u003c[1,2,3]\u003e,\u003c[1],[3,2]\u003e,\u003c[1],[2,3]\u003e,\u003c[3,1],[2]\u003e\n ,\u003c[1,3],[2]\u003e,\u003c[2,1],[3]\u003e,\u003c[1,2],[3]\u003e,\u003c[2],[1],[3]\u003e\n ,\u003c[1],[2],[3]\u003e]\n\u003c/pre\u003e\u003cp\u003eNote, however, that providing a type annotation on \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e in\n this way is usually only necessary at the \u003ccode\u003eghci\u003c/code\u003e prompt; when used\n in the context of a larger program the type of a call to\n \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e can often be inferred.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e String",
        "fct-source": "src/Math-Combinatorics-Species-Enumerate.html#structureType",
        "fct-type": "function",
        "title": "structureType"
      },
      "index": {
        "description": "structureType returns String representation of the functor type which represents the structure of the species In particular if structureType prints then you can safely use enumerate and friends by writing enumerate ls where ls For example structureType octopus Comp Cycle enumerate octopus Comp Cycle Int Note however that providing type annotation on enumerate in this way is usually only necessary at the ghci prompt when used in the context of larger program the type of call to enumerate can often be inferred",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "structureType",
        "normalized": "ESpeciesAST-\u003eString",
        "package": "species",
        "partial": "Type",
        "signature": "ESpeciesAST-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:subset",
      "description": {
        "fct-descr": "\u003cp\u003eThe species \u003ccode\u003ep\u003c/code\u003e of subsets is given by \u003ccode\u003e\u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e *\n   \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e is included in the \u003ccode\u003e\u003ca\u003eSpecies\u003c/a\u003e\u003c/code\u003e class so it can\n   be overridden when enumerating structures: by default the\n   enumeration code would generate a pair of the subset and its\n   complement, but normally when thinking about subsets we only\n   want to see the elements in the subset.  To explicitly\n   enumerate subset/complement pairs, you can use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n   directly.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#subset",
        "fct-type": "method",
        "title": "subset"
      },
      "index": {
        "description": "The species of subsets is given by subset set set subset is included in the Species class so it can be overridden when enumerating structures by default the enumeration code would generate pair of the subset and its complement but normally when thinking about subsets we only want to see the elements in the subset To explicitly enumerate subset complement pairs you can use set set directly",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "subset",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:subsets",
      "description": {
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#subsets",
        "fct-type": "function",
        "title": "subsets"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "subsets",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:sumOfProducts",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a species and decompose it into a sum of products.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [[SpeciesAST]]",
        "fct-source": "src/Math-Combinatorics-Species-Simplify.html#sumOfProducts",
        "fct-type": "function",
        "title": "sumOfProducts"
      },
      "index": {
        "description": "Simplify species and decompose it into sum of products",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "sumOfProducts",
        "normalized": "SpeciesAST-\u003e[[SpeciesAST]]",
        "package": "species",
        "partial": "Of Products",
        "signature": "SpeciesAST-\u003e[[SpeciesAST]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:unComp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "f (g a)",
        "fct-source": "src/Math-Combinatorics-Species-Structures.html#%3A.%3A",
        "fct-type": "function",
        "title": "unComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "unComp",
        "normalized": "",
        "package": "species",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:unlabeled",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the coefficients of an ordinary generating function as a\n   list of Integers.  In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e  n\u003c/code\u003e is the\n   number of unlabeled \u003ccode\u003es\u003c/code\u003e-structures on an underlying set of size\n   \u003ccode\u003en\u003c/code\u003e (\u003ccode\u003eunlabeled s\u003c/code\u003e is guaranteed to be infinite).  For example:\n\u003c/p\u003e\u003cpre\u003e \u003e take 10 $ unlabeled octopi\n [0,1,2,3,5,7,13,19,35,59]\n\u003c/pre\u003e\u003cp\u003egives the number of unlabeled octopi on 0, 1, 2, 3, ... 9 elements.\n\u003c/p\u003e\u003cp\u003eActually, the above is something of a white lie, as you may have\n   already realized by looking at the input type of \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e,\n   which is \u003ccode\u003e\u003ca\u003eSpeciesAST\u003c/a\u003e\u003c/code\u003e rather than the expected \u003ccode\u003e\u003ca\u003eGF\u003c/a\u003e\u003c/code\u003e.  The reason\n   is that although products and sums of unlabeled species\n   correspond to products and sums of ordinary generating functions,\n   other operations such as composition and differentiation do not!\n   In order to compute an ordinary generating function for a species\n   defined in terms of composition and/or differentiation, we must\n   compute the cycle index series for the species and then convert\n   it to an ordinary generating function.  So \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e actually\n   works by first reifying the species to an AST and checking which\n   operations are used in its definition, and then choosing to work\n   with cycle index series or directly with (much faster) ordinary\n   generating functions as appropriate.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Unlabeled.html#unlabeled",
        "fct-type": "function",
        "title": "unlabeled"
      },
      "index": {
        "description": "Extract the coefficients of an ordinary generating function as list of Integers In particular unlabeled is the number of unlabeled structures on an underlying set of size unlabeled is guaranteed to be infinite For example take unlabeled octopi gives the number of unlabeled octopi on elements Actually the above is something of white lie as you may have already realized by looking at the input type of unlabeled which is SpeciesAST rather than the expected GF The reason is that although products and sums of unlabeled species correspond to products and sums of ordinary generating functions other operations such as composition and differentiation do not In order to compute an ordinary generating function for species defined in terms of composition and or differentiation we must compute the cycle index series for the species and then convert it to an ordinary generating function So unlabeled actually works by first reifying the species to an AST and checking which operations are used in its definition and then choosing to work with cycle index series or directly with much faster ordinary generating functions as appropriate",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "unlabeled",
        "normalized": "SpeciesAST-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:unlabelled",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eunlabeled\u003c/a\u003e\u003c/code\u003e, since both spellings are acceptable.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "SpeciesAST -\u003e [Integer]",
        "fct-source": "src/Math-Combinatorics-Species-Unlabeled.html#unlabelled",
        "fct-type": "function",
        "title": "unlabelled"
      },
      "index": {
        "description": "synonym for unlabeled since both spellings are acceptable",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "unlabelled",
        "normalized": "SpeciesAST-\u003e[Integer]",
        "package": "species",
        "partial": "",
        "signature": "SpeciesAST-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an existential wrapper to get out a typed AST.  You can\n   get out any type you like as long as it is the right one.\n\u003c/p\u003e\u003cp\u003eCAUTION: Don't try this at home!\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "ESpeciesAST -\u003e TSpeciesAST s",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#unwrap",
        "fct-type": "function",
        "title": "unwrap"
      },
      "index": {
        "description": "Unwrap an existential wrapper to get out typed AST You can get out any type you like as long as it is the right one CAUTION Don try this at home",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "unwrap",
        "normalized": "ESpeciesAST-\u003eTSpeciesAST a",
        "package": "species",
        "partial": "",
        "signature": "ESpeciesAST-\u003eTSpeciesAST s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eESpeciesAST\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTSpeciesAST\u003c/a\u003e\u003c/code\u003e by adding an\n   appropriate interval annotation and hiding the type.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "TSpeciesAST s -\u003e ESpeciesAST",
        "fct-source": "src/Math-Combinatorics-Species-AST.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Construct an ESpeciesAST from TSpeciesAST by adding an appropriate interval annotation and hiding the type",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "wrap",
        "normalized": "TSpeciesAST a-\u003eESpeciesAST",
        "package": "species",
        "partial": "",
        "signature": "TSpeciesAST s-\u003eESpeciesAST"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/species/docs/Math-Combinatorics-Species.html#v:x",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Combinatorics.Species",
        "fct-package": "species",
        "fct-signature": "s",
        "fct-source": "src/Math-Combinatorics-Species-Class.html#x",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "synonym for singleton",
        "hierarchy": "Math Combinatorics Species",
        "module": "Math.Combinatorics.Species",
        "name": "x",
        "normalized": "",
        "package": "species",
        "partial": "",
        "signature": ""
      }
    }
  }
]