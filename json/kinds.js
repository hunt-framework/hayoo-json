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
        "word": "kinds"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for subkinds of kind&#160;\u003ccode\u003e*\u003c/code\u003e, including subkind polymorphism.\n\u003c/p\u003e\u003cp\u003eImagine, we had a language extension for declaring subkinds of kind&#160;\u003ccode\u003e*\u003c/code\u003e where a subkind\n    declaration would be written as follows:\n\u003c/p\u003e\u003cpre\u003e\nsubkind \u003cem\u003eK\u003c/em\u003e = \u003cem\u003eC_1\u003c/em\u003e =\u003e \u003cem\u003et_1\u003c/em\u003e | ... | \u003cem\u003eC_n\u003c/em\u003e =\u003e \u003cem\u003et_n\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThereby, \u003ccode\u003e\u003cem\u003eK\u003c/em\u003e\u003c/code\u003e&#160;would be a kind identifier, the \u003ccode\u003e\u003cem\u003et_i\u003c/em\u003e\u003c/code\u003e would be types and the \u003ccode\u003e\u003cem\u003eC_i\u003c/em\u003e\u003c/code\u003e would\n    be contexts. This subkind declaration would introduce a subkind&#160;\u003ccode\u003e\u003cem\u003eK\u003c/em\u003e\u003c/code\u003e that covers all types\n    that match one of the&#160;\u003ccode\u003e\u003cem\u003et_i\u003c/em\u003e\u003c/code\u003e and fulfill the corresponding context. For example, the\n    declaration\n\u003c/p\u003e\u003cpre\u003e\nsubkind Map = (Ord key) =\u003e Map key val | IntMap val\n\u003c/pre\u003e\u003cp\u003ewould declare the subkind \u003ccode\u003eMap\u003c/code\u003e of all types whose values are maps. Note that the subkind \u003ccode\u003eMap\u003c/code\u003e\n    would be different from the type \u003ccode\u003eMap\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe will now see how a subkind declaration\n\u003c/p\u003e\u003cpre\u003e\nsubkind \u003cem\u003eK\u003c/em\u003e = \u003cem\u003eC_1\u003c/em\u003e =\u003e \u003cem\u003et_1\u003c/em\u003e | ... | \u003cem\u003eC_n\u003c/em\u003e =\u003e \u003cem\u003et_n\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003ecan be emulated using this module. First, we declare a type&#160;\u003ccode\u003eKind\u003cem\u003eK\u003c/em\u003e\u003c/code\u003e with a nullary data\n    constructor of the same name for representing the subkind. Then we add the following instance\n    declaration:\n\u003c/p\u003e\u003cpre\u003e\ninstance Kind Kind\u003cem\u003eK\u003c/em\u003e where\n&#160;\n    data All Kind\u003cem\u003eK\u003c/em\u003e item = All\u003cem\u003eK\u003c/em\u003e (forall \u003cem\u003eA_1\u003c/em\u003e. \u003cem\u003eC_1\u003c/em\u003e =\u003e item \u003cem\u003et_1\u003c/em\u003e)\n                               ...\n                               (forall \u003cem\u003eA_n\u003c/em\u003e. \u003cem\u003eC_n\u003c/em\u003e =\u003e item \u003cem\u003et_n\u003c/em\u003e)\n&#160;\n    closed item = All\u003cem\u003eK\u003c/em\u003e item ... item\n\u003c/pre\u003e\u003cp\u003eThereby, each&#160;\u003ccode\u003e\u003cem\u003eA_i\u003c/em\u003e\u003c/code\u003e stands for a whitespace-separated sequence of the free variables\n    of&#160;\u003ccode\u003e\u003cem\u003et_i\u003c/em\u003e\u003c/code\u003e. Finally, we add the following instance declaration for every&#160;\u003ccode\u003e\u003cem\u003ei\u003c/em\u003e\u003c/code\u003e between\n    \u003ccode\u003e1\u003c/code\u003e&#160;and&#160;\u003ccode\u003e\u003cem\u003en\u003c/em\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\ninstance \u003cem\u003eC_i\u003c/em\u003e =\u003e Inhabitant Kind\u003cem\u003eK\u003c/em\u003e \u003cem\u003et_i\u003c/em\u003e where\n&#160;\n    specialize (All\u003cem\u003eK\u003c/em\u003e _ ... _ item _ ... _) = item\n\u003c/pre\u003e\u003cp\u003eThereby, the number of wildcard patterns before and after \u003ccode\u003eitem\u003c/code\u003e is \u003ccode\u003e\u003cem\u003ei\u003c/em\u003e - 1\u003c/code\u003e and \u003ccode\u003e\u003cem\u003en\u003c/em\u003e - \u003cem\u003ei\u003c/em\u003e\u003c/code\u003e,\n    respectively. The above subkind declaration for \u003ccode\u003eMap\u003c/code\u003e can be emulated with the following code:\n\u003c/p\u003e\u003cpre\u003e\ndata KindMap = KindMap\n&#160;\ninstance Kind KindMap where\n&#160;\n    data All KindMap item = AllMap (forall key val. (Ord key) =\u003e item (Map key val))\n                                   (forall val.                  item (IntMap val))\n&#160;\n    closed item = AllMap item item\n&#160;\ninstance (Ord key) =\u003e Inhabitant KindMap (Map key val) where\n&#160;\n    specialize (AllMap item _) = item\n&#160;\ninstance Inhabitant KindMap (IntMap val) where\n&#160;\n    specialize (AllMap _ item) = item\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Kind",
          "name": "Kind",
          "package": "kinds",
          "source": "src/Data-Kind.html",
          "type": "module"
        },
        "index": {
          "description": "Support for subkinds of kind including subkind polymorphism Imagine we had language extension for declaring subkinds of kind where subkind declaration would be written as follows subkind Thereby would be kind identifier the would be types and the would be contexts This subkind declaration would introduce subkind that covers all types that match one of the and fulfill the corresponding context For example the declaration subkind Map Ord key Map key val IntMap val would declare the subkind Map of all types whose values are maps Note that the subkind Map would be different from the type Map We will now see how subkind declaration subkind can be emulated using this module First we declare type Kind with nullary data constructor of the same name for representing the subkind Then we add the following instance declaration instance Kind Kind where data All Kind item All forall item forall item closed item All item item Thereby each stands for whitespace-separated sequence of the free variables of Finally we add the following instance declaration for every between and instance Inhabitant Kind where specialize All item item Thereby the number of wildcard patterns before and after item is and respectively The above subkind declaration for Map can be emulated with the following code data KindMap KindMap instance Kind KindMap where data All KindMap item AllMap forall key val Ord key item Map key val forall val item IntMap val closed item AllMap item item instance Ord key Inhabitant KindMap Map key val where specialize AllMap item item instance Inhabitant KindMap IntMap val where specialize AllMap item item",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "Kind",
          "package": "kinds",
          "partial": "Kind",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies what types are inhabitants of what subkinds.\n\u003c/p\u003e",
          "module": "Data.Kind",
          "name": "Inhabitant",
          "package": "kinds",
          "source": "src/Data-Kind.html#Inhabitant",
          "type": "class"
        },
        "index": {
          "description": "Specifies what types are inhabitants of what subkinds",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "Inhabitant",
          "package": "kinds",
          "partial": "Inhabitant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#t:Inhabitant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of subkind representations.\n\u003c/p\u003e",
          "module": "Data.Kind",
          "name": "Kind",
          "package": "kinds",
          "source": "src/Data-Kind.html#Kind",
          "type": "class"
        },
        "index": {
          "description": "The class of subkind representations",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "Kind",
          "package": "kinds",
          "partial": "Kind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents kind&#160;\u003ccode\u003e*\u003c/code\u003e itself.\n\u003c/p\u003e",
          "module": "Data.Kind",
          "name": "KindStar",
          "package": "kinds",
          "source": "src/Data-Kind.html#KindStar",
          "type": "data"
        },
        "index": {
          "description": "Represents kind itself",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "KindStar",
          "package": "kinds",
          "partial": "Kind Star",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#t:KindStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Kind",
          "name": "KindStar",
          "package": "kinds",
          "signature": "KindStar",
          "source": "src/Data-Kind.html#KindStar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "KindStar",
          "package": "kinds",
          "partial": "Kind Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#v:KindStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a type that uses normal universal quantification into one that uses\n            subkind-specific universal quantification.\n\u003c/p\u003e",
          "module": "Data.Kind",
          "name": "closed",
          "package": "kinds",
          "signature": "item inhabitant) -\u003e All kind item",
          "source": "src/Data-Kind.html#closed",
          "type": "method"
        },
        "index": {
          "description": "Conversion from type that uses normal universal quantification into one that uses subkind-specific universal quantification",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "closed",
          "normalized": "a b)-\u003eAll c a",
          "package": "kinds",
          "signature": "item inhabitant)-\u003eAll kind item",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#v:closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a universally quantified type into a type that is fixed to a specific\n            inhabitant.\n\u003c/p\u003e\u003cp\u003eThis method exists to ensure that one cannot extend the subkind. If one would try to add\n            a new inhabitant, one would have to provide an implementation of \u003ccode\u003especialize\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Kind",
          "name": "specialize",
          "package": "kinds",
          "signature": "All kind item -\u003e item inhabitant",
          "source": "src/Data-Kind.html#specialize",
          "type": "method"
        },
        "index": {
          "description": "Conversion from universally quantified type into type that is fixed to specific inhabitant This method exists to ensure that one cannot extend the subkind If one would try to add new inhabitant one would have to provide an implementation of specialize",
          "hierarchy": "Data Kind",
          "module": "Data.Kind",
          "name": "specialize",
          "normalized": "All a b-\u003eb c",
          "package": "kinds",
          "signature": "All kind item-\u003eitem inhabitant",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/kinds/docs/Data-Kind.html#v:specialize"
      }
    }
  ]
]