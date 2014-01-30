[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLabels for data types in the base package. The lens types are kept abstract to\nbe fully reusable in custom contexts. Build to be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Labels for data types in the base package The lens types are kept abstract to be fully reusable in custom contexts Build to be imported qualified",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "Base",
        "normalized": "",
        "package": "fclabels",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:fst",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the first component of a 2-tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b) -\u003e (o, b)) (a -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#fst",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "Lens pointing to the first component of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "fst",
        "normalized": "Lens a((b,c)-\u003e(d,c))(b-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b)-\u003e(o,b))(a-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:fst3",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the first component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b, c) -\u003e (o, b, c)) (a -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#fst3",
        "fct-type": "function",
        "title": "fst3"
      },
      "index": {
        "description": "Lens pointing to the first component of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "fst3",
        "normalized": "Lens a((b,c,d)-\u003e(e,c,d))(b-\u003ee)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b,c)-\u003e(o,b,c))(a-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the head of a list's cons cell. (Partial and monomorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr [a] a",
        "fct-source": "src/Data-Label-Base.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Lens pointing to the head of list cons cell Partial and monomorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "head",
        "normalized": "Lens a[b]b",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr[a]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:just",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the value in a Maybe. (Partial and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens cat (Maybe a -\u003e Maybe b) (a -\u003e b)",
        "fct-source": "src/Data-Label-Base.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "Lens pointing to the value in Maybe Partial and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "just",
        "normalized": "Lens a(Maybe b-\u003eMaybe c)(b-\u003ec)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens cat(Maybe a-\u003eMaybe b)(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the left value in an Either. (Partial and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr (Either a b -\u003e Either o b) (a -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Lens pointing to the left value in an Either Partial and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "left",
        "normalized": "Lens a(Either b c-\u003eEither d c)(b-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr(Either a b-\u003eEither o b)(a-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:readShow",
      "description": {
        "fct-descr": "\u003cp\u003ePartial isomorphism for readable and showable values. Can easily be lifted\n into a lens by using \u003ccode\u003e\u003ca\u003eiso\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Iso Partial String a",
        "fct-source": "src/Data-Label-Base.html#readShow",
        "fct-type": "function",
        "title": "readShow"
      },
      "index": {
        "description": "Partial isomorphism for readable and showable values Can easily be lifted into lens by using iso",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "readShow",
        "normalized": "",
        "package": "fclabels",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the right value in an Either. (Partial and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr (Either a b -\u003e Either a o) (b -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Lens pointing to the right value in an Either Partial and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "right",
        "normalized": "Lens a(Either b c-\u003eEither b d)(c-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr(Either a b-\u003eEither a o)(b-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:snd",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the second component of a 2-tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b) -\u003e (a, o)) (b -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#snd",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "Lens pointing to the second component of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "snd",
        "normalized": "Lens a((b,c)-\u003e(b,d))(c-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b)-\u003e(a,o))(b-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:snd3",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the second component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b, c) -\u003e (a, o, c)) (b -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#snd3",
        "fct-type": "function",
        "title": "snd3"
      },
      "index": {
        "description": "Lens pointing to the second component of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "snd3",
        "normalized": "Lens a((b,c,d)-\u003e(b,e,d))(c-\u003ee)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b,c)-\u003e(a,o,c))(b-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003ePolymorphic lens that swaps the components of a tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b) -\u003e (c, d)) ((b, a) -\u003e (d, c))",
        "fct-source": "src/Data-Label-Base.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Polymorphic lens that swaps the components of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "swap",
        "normalized": "Lens a((b,c)-\u003e(d,e))((c,b)-\u003e(e,d))",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b)-\u003e(c,d))((b,a)-\u003e(d,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the tail of a list's cons cell. (Partial and monomorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr [a] [a]",
        "fct-source": "src/Data-Label-Base.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Lens pointing to the tail of list cons cell Partial and monomorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "tail",
        "normalized": "Lens a[b][b]",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr[a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:trd3",
      "description": {
        "fct-descr": "\u003cp\u003eLens pointing to the third component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
        "fct-module": "Data.Label.Base",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr ((a, b, c) -\u003e (a, b, o)) (c -\u003e o)",
        "fct-source": "src/Data-Label-Base.html#trd3",
        "fct-type": "function",
        "title": "trd3"
      },
      "index": {
        "description": "Lens pointing to the third component of tuple Total and polymorphic",
        "hierarchy": "Data Label Base",
        "module": "Data.Label.Base",
        "name": "trd3",
        "normalized": "Lens a((b,c,d)-\u003e(b,c,e))(d-\u003ee)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr((a,b,c)-\u003e(a,b,o))(c-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell functions for automatically generating labels for algebraic\ndatatypes, newtypes and GADTs. There are two basic modes of label generation,\nthe \u003ccode\u003e\u003ca\u003emkLabels\u003c/a\u003e\u003c/code\u003e family of functions create labels (and optionally type\nsignatures) in scope as top level funtions, the \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e family of funtions\ncreate labels as expressions that can be named and typed manually.\n\u003c/p\u003e\u003cp\u003eIn the case of multi-constructor datatypes some fields might not always be\navailable and the derived labels will be partial. Partial labels are provided\nwith an additional type context that forces them to be only usable in the\n\u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFailing\u003c/a\u003e\u003c/code\u003e context.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Derive.html",
        "fct-type": "module",
        "title": "Derive"
      },
      "index": {
        "description": "Template Haskell functions for automatically generating labels for algebraic datatypes newtypes and GADTs There are two basic modes of label generation the mkLabels family of functions create labels and optionally type signatures in scope as top level funtions the getLabel family of funtions create labels as expressions that can be named and typed manually In the case of multi-constructor datatypes some fields might not always be available and the derived labels will be partial Partial labels are provided with an additional type context that forces them to be only usable in the Partial or Failing context",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "Derive",
        "normalized": "",
        "package": "fclabels",
        "partial": "Derive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:defaultNaming",
      "description": {
        "fct-descr": "\u003cp\u003eDefault way of generating a label name from the Haskell record selector\n name. If the original selector starts with an underscore, remove it and make\n the next character lowercase. Otherwise, add \u003ccode\u003el\u003c/code\u003e, and make the next\n character uppercase.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Label-Derive.html#defaultNaming",
        "fct-type": "function",
        "title": "defaultNaming"
      },
      "index": {
        "description": "Default way of generating label name from the Haskell record selector name If the original selector starts with an underscore remove it and make the next character lowercase Otherwise add and make the next character uppercase",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "defaultNaming",
        "normalized": "String-\u003eString",
        "package": "fclabels",
        "partial": "Naming",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:fclabels",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels for all the record types in the supplied declaration. The\n record fields don't need an underscore prefix. Multiple data types /\n newtypes are allowed at once.\n\u003c/p\u003e\u003cp\u003eThe advantage of this approach is that you don't need to explicitly hide the\n original record accessors from being exported and they won't show up in the\n derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e fclabels [d|\n   data Record = Record\n     { int  :: Int\n     , bool :: Bool\n     } deriving Show\n   |]\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e modify int (+2) (Record 1 False)\n Record 3 False\n\u003c/pre\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#fclabels",
        "fct-type": "function",
        "title": "fclabels"
      },
      "index": {
        "description": "Derive labels for all the record types in the supplied declaration The record fields don need an underscore prefix Multiple data types newtypes are allowed at once The advantage of this approach is that you don need to explicitly hide the original record accessors from being exported and they won show up in the derived Show instance Example fclabels data Record Record int Int bool Bool deriving Show ghci modify int Record False Record False",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "fclabels",
        "normalized": "Q[Dec]-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "",
        "signature": "Q[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:getLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDerive unnamed labels as n-tuples that can be named manually. The types\n will be polymorphic and can be used in an arbitrary context.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e (left, right) = $(getLabel ''Either)\n\u003c/pre\u003e\u003cp\u003eThe lenses can now also be typed manually:\n\u003c/p\u003e\u003cpre\u003e left  :: (Either a b -\u003e Either c b) :~\u003e (a -\u003e c)\n right :: (Either a b -\u003e Either a c) :~\u003e (b -\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote: Because of the abstract nature of the generated lenses and the top\n level pattern match, it might be required to use \u003ccode\u003eNoMonomorphismRestriction\u003c/code\u003e\n in some cases.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Data-Label-Derive.html#getLabel",
        "fct-type": "function",
        "title": "getLabel"
      },
      "index": {
        "description": "Derive unnamed labels as n-tuples that can be named manually The types will be polymorphic and can be used in an arbitrary context Example left right getLabel Either The lenses can now also be typed manually left Either Either right Either Either Note Because of the abstract nature of the generated lenses and the top level pattern match it might be required to use NoMonomorphismRestriction in some cases",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "getLabel",
        "normalized": "Name-\u003eQ Exp",
        "package": "fclabels",
        "partial": "Label",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:getLabelWith",
      "description": {
        "fct-descr": "\u003cp\u003eLow level label as expression derivation function.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "Bool-\u003e Bool-\u003e Bool-\u003e Name-\u003e Q Exp",
        "fct-type": "function",
        "title": "getLabelWith"
      },
      "index": {
        "description": "Low level label as expression derivation function",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "getLabelWith",
        "normalized": "Bool-\u003eBool-\u003eBool-\u003eName-\u003eQ Exp",
        "package": "fclabels",
        "partial": "Label With",
        "signature": "Bool-\u003eBool-\u003eBool-\u003eName-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels including type signatures for all the record selectors in a\n single datatype. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#mkLabel",
        "fct-type": "function",
        "title": "mkLabel"
      },
      "index": {
        "description": "Derive labels including type signatures for all the record selectors in single datatype The types will be polymorphic and can be used in an arbitrary context",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "mkLabel",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Label",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabels",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels including type signatures for all the record selectors for a\n collection of datatypes. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#mkLabels",
        "fct-type": "function",
        "title": "mkLabels"
      },
      "index": {
        "description": "Derive labels including type signatures for all the record selectors for collection of datatypes The types will be polymorphic and can be used in an arbitrary context",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "mkLabels",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Labels",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabelsNamed",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkLabels\u003c/a\u003e\u003c/code\u003e, but uses the specified function to produce custom names\n for the labels.\n\u003c/p\u003e\u003cp\u003eFor instance, \u003ccode\u003e(drop 1 . dropWhile (/='_'))\u003c/code\u003e creates a label\n \u003ccode\u003eval\u003c/code\u003e from a record \u003ccode\u003eRec { rec_val :: X }\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "(String -\u003e String) -\u003e [Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#mkLabelsNamed",
        "fct-type": "function",
        "title": "mkLabelsNamed"
      },
      "index": {
        "description": "Like mkLabels but uses the specified function to produce custom names for the labels For instance drop dropWhile creates label val from record Rec rec val",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "mkLabelsNamed",
        "normalized": "(String-\u003eString)-\u003e[Name]-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Labels Named",
        "signature": "(String-\u003eString)-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabelsWith",
      "description": {
        "fct-descr": "\u003cp\u003eLow level standalone label derivation function.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Derive",
        "fct-package": "fclabels",
        "fct-signature": "(String -\u003e String)-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkLabelsWith"
      },
      "index": {
        "description": "Low level standalone label derivation function",
        "hierarchy": "Data Label Derive",
        "module": "Data.Label.Derive",
        "name": "mkLabelsWith",
        "normalized": "(String-\u003eString)-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eName-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Labels With",
        "signature": "(String-\u003eString)-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses for getters and updates that can potentially fail with some error\nvalue. Like partial lenses, failing lenses are useful for creating accessor\nlabels for multi constructor data types where projection and modification of\nfields will not always succeed. The error value can be used to report what\ncaused the failure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Failing.html",
        "fct-type": "module",
        "title": "Failing"
      },
      "index": {
        "description": "Lenses for getters and updates that can potentially fail with some error value Like partial lenses failing lenses are useful for creating accessor labels for multi constructor data types where projection and modification of fields will not always succeed The error value can be used to report what caused the failure",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "Failing",
        "normalized": "",
        "package": "fclabels",
        "partial": "Failing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#t:Failing",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that might fail with some error.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Failing",
        "fct-type": "type",
        "title": "Failing"
      },
      "index": {
        "description": "Context that represents computations that might fail with some error",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "Failing",
        "normalized": "",
        "package": "fclabels",
        "partial": "Failing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#t:Lens",
      "description": {
        "fct-descr": "\u003cp\u003eLens type for situations in which the accessor functions can fail with\n some error information.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Failing.html#Lens",
        "fct-type": "type",
        "title": "Lens"
      },
      "index": {
        "description": "Lens type for situations in which the accessor functions can fail with some error information",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "Lens",
        "normalized": "",
        "package": "fclabels",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a total lens that points to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e field into a lens that might\n fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) (f -\u003e g) (Either e o -\u003e Either e i) -\u003e Lens e (f -\u003e g) (o -\u003e i)",
        "fct-source": "src/Data-Label-Failing.html#embed",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "Embed total lens that points to an Either field into lens that might fail",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "embed",
        "normalized": "Lens(-\u003e)(a-\u003eb)(Either c d-\u003eEither c e)-\u003eLens c(a-\u003eb)(d-\u003ee)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)(f-\u003eg)(Either e o-\u003eEither e i)-\u003eLens e(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGetter for a lens that can fail. When the field to which the lens points\n is not accessible the getter returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e f -\u003e Either e o",
        "fct-source": "src/Data-Label-Failing.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Getter for lens that can fail When the field to which the lens points is not accessible the getter returns Nothing",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "get",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003eb-\u003eEither a d",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003ef-\u003eEither e o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lens that can fail from a getter and a modifier that can\n themselves potentially fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "(f -\u003e Either e o)-\u003e ((o -\u003e Either e i) -\u003e f -\u003e Either e g)-\u003e Lens e (f -\u003e g) (o -\u003e i)",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create lens that can fail from getter and modifier that can themselves potentially fail",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "lens",
        "normalized": "(a-\u003eEither b c)-\u003e((c-\u003eEither b d)-\u003ea-\u003eEither b e)-\u003eLens b(a-\u003ee)(c-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003eEither e o)-\u003e((o-\u003eEither e i)-\u003ef-\u003eEither e g)-\u003eLens e(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModifier for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e (o -\u003e i) -\u003e f -\u003e Either e g",
        "fct-source": "src/Data-Label-Failing.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modifier for lens that can fail When the field to which the lens points is not accessible this function returns Left",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "modify",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003e(d-\u003ee)-\u003eb-\u003eEither a c",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003e(o-\u003ei)-\u003ef-\u003eEither e g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:modify-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens e (f -\u003e f) (o -\u003e o) -\u003e (o -\u003e o) -\u003e f -\u003e f",
        "fct-source": "src/Data-Label-Failing.html#modify%27",
        "fct-type": "function",
        "title": "modify'"
      },
      "index": {
        "description": "Like modify but return behaves like the identity function when the field could not be set",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "modify'",
        "normalized": "Lens a(b-\u003eb)(c-\u003ec)-\u003e(c-\u003ec)-\u003eb-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens e(f-\u003ef)(o-\u003eo)-\u003e(o-\u003eo)-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSetter for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e i -\u003e f -\u003e Either e g",
        "fct-source": "src/Data-Label-Failing.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Setter for lens that can fail When the field to which the lens points is not accessible this function returns Left",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "set",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ee-\u003eb-\u003eEither a c",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003ei-\u003ef-\u003eEither e g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:set-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Failing",
        "fct-package": "fclabels",
        "fct-signature": "Lens e (f -\u003e f) (o -\u003e o) -\u003e o -\u003e f -\u003e f",
        "fct-source": "src/Data-Label-Failing.html#set%27",
        "fct-type": "function",
        "title": "set'"
      },
      "index": {
        "description": "Like set but return behaves like the identity function when the field could not be set",
        "hierarchy": "Data Label Failing",
        "module": "Data.Label.Failing",
        "name": "set'",
        "normalized": "Lens a(b-\u003eb)(c-\u003ec)-\u003ec-\u003eb-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens e(f-\u003ef)(o-\u003eo)-\u003eo-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState and Reader operations specialized for working with total lenses. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Monadic.html",
        "fct-type": "module",
        "title": "Monadic"
      },
      "index": {
        "description": "State and Reader operations specialized for working with total lenses",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "Monadic",
        "normalized": "",
        "package": "fclabels",
        "partial": "Monadic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e that reads more or less like an assignment.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m ()",
        "fct-source": "src/Data-Label-Monadic.html#%3D.",
        "fct-type": "function",
        "title": "(=.)"
      },
      "index": {
        "description": "Alias for modify that reads more or less like an assignment",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "(=.) =.",
        "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eputs\u003c/a\u003e\u003c/code\u003e that reads like an assignment.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e o -\u003e m ()",
        "fct-source": "src/Data-Label-Monadic.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Alias for puts that reads like an assignment",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "(=:) =:",
        "normalized": "Lens(-\u003e)a b-\u003eb-\u003ec()",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003eo-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eFetch a value pointed to by a lens out of a reader environment.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e m o",
        "fct-source": "src/Data-Label-Monadic.html#asks",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Fetch value pointed to by lens out of reader environment",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "asks",
        "normalized": "Lens(-\u003e)a b-\u003ec b",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003em o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value out of the state, pointed to by the specified lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e m o",
        "fct-source": "src/Data-Label-Monadic.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Get value out of the state pointed to by the specified lens",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "gets",
        "normalized": "Lens(-\u003e)a b-\u003ec b",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003em o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment. The lens is used to\n point out the part to modify.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m a -\u003e m a",
        "fct-source": "src/Data-Label-Monadic.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Execute computation in modified environment The lens is used to point out the part to modify",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "local",
        "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec d-\u003ec d",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a value with a function somewhere in the state, pointed to by the\n specified lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m ()",
        "fct-source": "src/Data-Label-Monadic.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modify value with function somewhere in the state pointed to by the specified lens",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "modify",
        "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a value with a function somewhere in the state, pointed to by the\n specified lens. Additionally return a separate value based on the\n modification.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e (o -\u003e (a, o)) -\u003e m a",
        "fct-source": "src/Data-Label-Monadic.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify value with function somewhere in the state pointed to by the specified lens Additionally return separate value based on the modification",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "modifyAndGet",
        "normalized": "Lens(-\u003e)a b-\u003e(b-\u003e(c,b))-\u003ed c",
        "package": "fclabels",
        "partial": "And Get",
        "signature": "Lens(-\u003e)f o-\u003e(o-\u003e(a,o))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:puts",
      "description": {
        "fct-descr": "\u003cp\u003eSet a value somewhere in the state, pointed to by the specified lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Monadic",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) f o -\u003e o -\u003e m ()",
        "fct-source": "src/Data-Label-Monadic.html#puts",
        "fct-type": "function",
        "title": "puts"
      },
      "index": {
        "description": "Set value somewhere in the state pointed to by the specified lens",
        "hierarchy": "Data Label Monadic",
        "module": "Data.Label.Monadic",
        "name": "puts",
        "normalized": "Lens(-\u003e)a b-\u003eb-\u003ec()",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)f o-\u003eo-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses that only allow monomorphic updates. Monomorphic lenses are simply\npolymorphic lenses with the input and output type variables constraint to the\nsame type. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Mono.html",
        "fct-type": "module",
        "title": "Mono"
      },
      "index": {
        "description": "Lenses that only allow monomorphic updates Monomorphic lenses are simply polymorphic lenses with the input and output type variables constraint to the same type",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "Mono",
        "normalized": "",
        "package": "fclabels",
        "partial": "Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t::-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003ePartial monomorphic lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Mono.html#%3A~%3E",
        "fct-type": "type",
        "title": ":~\u003e"
      },
      "index": {
        "description": "Partial monomorphic lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": ":~\u003e",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTotal monomorphic lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Mono.html#%3A-%3E",
        "fct-type": "type",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Total monomorphic lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": ":-\u003e",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t:Lens",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract monomorphic lens datatype. The getter and setter functions work\n in some category. Categories allow for effectful lenses, for example, lenses\n that might fail or use state.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Mono.html#Lens",
        "fct-type": "type",
        "title": "Lens"
      },
      "index": {
        "description": "Abstract monomorphic lens datatype The getter and setter functions work in some category Categories allow for effectful lenses for example lenses that might fail or use state",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "Lens",
        "normalized": "",
        "package": "fclabels",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the getter arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "Lens cat f o -\u003e cat f o",
        "fct-source": "src/Data-Label-Mono.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the getter arrow from lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "get",
        "normalized": "Lens a b c-\u003ea b c",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens cat f o-\u003ecat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eLift an isomorphism into a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "Iso cat f o -\u003e Lens cat f o",
        "fct-source": "src/Data-Label-Mono.html#iso",
        "fct-type": "function",
        "title": "iso"
      },
      "index": {
        "description": "Lift an isomorphism into Lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "iso",
        "normalized": "Iso a b c-\u003eLens a b c",
        "package": "fclabels",
        "partial": "",
        "signature": "Iso cat f o-\u003eLens cat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lens out of a getter and setter.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "cat f o-\u003e cat (cat o o, f) f-\u003e Lens cat f o",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create lens out of getter and setter",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "lens",
        "normalized": "a b c-\u003ea(a c c,b)b-\u003eLens a b c",
        "package": "fclabels",
        "partial": "",
        "signature": "cat f o-\u003ecat(cat o o,f)f-\u003eLens cat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eGet the modifier arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "Lens cat f o -\u003e cat (cat o o, f) f",
        "fct-source": "src/Data-Label-Mono.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Get the modifier arrow from lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "modify",
        "normalized": "Lens a b c-\u003ea(a c c,b)b",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens cat f o-\u003ecat(cat o o,f)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:point",
      "description": {
        "fct-descr": "\u003cp\u003eCreate lens from a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "Point cat f o f o -\u003e Lens cat f o",
        "fct-source": "src/Data-Label-Mono.html#point",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "Create lens from Point",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "point",
        "normalized": "Point a b c b c-\u003eLens a b c",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat f o f o-\u003eLens cat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eGet the setter arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Mono",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr f o -\u003e arr (o, f) f",
        "fct-source": "src/Data-Label-Mono.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Get the setter arrow from lens",
        "hierarchy": "Data Label Mono",
        "module": "Data.Label.Mono",
        "name": "set",
        "normalized": "Lens a b c-\u003ea(c,b)b",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr f o-\u003earr(o,f)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonomorphic lenses where the getters and updates can potentially silently\nfail. Partial lenses are useful for creating accessor labels for multi\nconstructor data types where projection and modification of fields will not\nalways succeed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Partial.html",
        "fct-type": "module",
        "title": "Partial"
      },
      "index": {
        "description": "Monomorphic lenses where the getters and updates can potentially silently fail Partial lenses are useful for creating accessor labels for multi constructor data types where projection and modification of fields will not always succeed",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "Partial",
        "normalized": "",
        "package": "fclabels",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#t::-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003ePartial lens type for situations in which the accessor functions can fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Partial.html#%3A~%3E",
        "fct-type": "type",
        "title": ":~\u003e"
      },
      "index": {
        "description": "Partial lens type for situations in which the accessor functions can fail",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": ":~\u003e",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#t:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that might silently fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Partial",
        "fct-type": "type",
        "title": "Partial"
      },
      "index": {
        "description": "Context that represents computations that might silently fail",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "Partial",
        "normalized": "",
        "package": "fclabels",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a total lens that points to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e field into a lens that might\n fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "Lens (-\u003e) (f -\u003e g) (Maybe o -\u003e Maybe i) -\u003e (f -\u003e g) :~\u003e (o -\u003e i)",
        "fct-source": "src/Data-Label-Partial.html#embed",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "Embed total lens that points to Maybe field into lens that might fail",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "embed",
        "normalized": "Lens(-\u003e)(a-\u003eb)(Maybe c-\u003eMaybe d)-\u003e(a-\u003eb)(c-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens(-\u003e)(f-\u003eg)(Maybe o-\u003eMaybe i)-\u003e(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGetter for a lens that can fail. When the field to which the lens points\n is not accessible the getter returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e f -\u003e Maybe o",
        "fct-source": "src/Data-Label-Partial.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Getter for lens that can fail When the field to which the lens points is not accessible the getter returns Nothing",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "get",
        "normalized": "((a-\u003eb)(c-\u003ed))-\u003ea-\u003eMaybe c",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)(o-\u003ei))-\u003ef-\u003eMaybe o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lens that can fail from a getter and a modifier that can\n themselves potentially fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "(f -\u003e Maybe o)-\u003e ((o -\u003e Maybe i) -\u003e f -\u003e Maybe g)-\u003e (f -\u003e g) :~\u003e (o -\u003e i)",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create lens that can fail from getter and modifier that can themselves potentially fail",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "lens",
        "normalized": "(a-\u003eMaybe b)-\u003e((b-\u003eMaybe c)-\u003ea-\u003eMaybe d)-\u003e(a-\u003ed)(b-\u003ec)",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003eMaybe o)-\u003e((o-\u003eMaybe i)-\u003ef-\u003eMaybe g)-\u003e(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModifier for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e (o -\u003e i) -\u003e f -\u003e Maybe g",
        "fct-source": "src/Data-Label-Partial.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modifier for lens that can fail When the field to which the lens points is not accessible this function returns Nothing",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "modify",
        "normalized": "((a-\u003eb)(c-\u003ed))-\u003e(c-\u003ed)-\u003ea-\u003eMaybe b",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)(o-\u003ei))-\u003e(o-\u003ei)-\u003ef-\u003eMaybe g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:modify-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e f) :~\u003e (o -\u003e o)) -\u003e (o -\u003e o) -\u003e f -\u003e f",
        "fct-source": "src/Data-Label-Partial.html#modify%27",
        "fct-type": "function",
        "title": "modify'"
      },
      "index": {
        "description": "Like modify but return behaves like the identity function when the field could not be set",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "modify'",
        "normalized": "((a-\u003ea)(b-\u003eb))-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003ef)(o-\u003eo))-\u003e(o-\u003eo)-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSetter for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e i -\u003e f -\u003e Maybe g",
        "fct-source": "src/Data-Label-Partial.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Setter for lens that can fail When the field to which the lens points is not accessible this function returns Nothing",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "set",
        "normalized": "((a-\u003eb)(c-\u003ed))-\u003ed-\u003ea-\u003eMaybe b",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)(o-\u003ei))-\u003ei-\u003ef-\u003eMaybe g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:set-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e f) :~\u003e (o -\u003e o)) -\u003e o -\u003e f -\u003e f",
        "fct-source": "src/Data-Label-Partial.html#set%27",
        "fct-type": "function",
        "title": "set'"
      },
      "index": {
        "description": "Like set but return behaves like the identity function when the field could not be set",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "set'",
        "normalized": "((a-\u003ea)(b-\u003eb))-\u003eb-\u003ea-\u003ea",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003ef)(o-\u003eo))-\u003eo-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e, but update allows, depending on the underlying lens, to\n remove items by modifying to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Partial",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e b) :~\u003e (o -\u003e i)) -\u003e (o -\u003e Maybe i) -\u003e f -\u003e Maybe b",
        "fct-source": "src/Data-Label-Partial.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Like modify but update allows depending on the underlying lens to remove items by modifying to Nothing",
        "hierarchy": "Data Label Partial",
        "module": "Data.Label.Partial",
        "name": "update",
        "normalized": "((a-\u003eb)(c-\u003ed))-\u003e(c-\u003eMaybe d)-\u003ea-\u003eMaybe b",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eb)(o-\u003ei))-\u003e(o-\u003eMaybe i)-\u003ef-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Point data type which generalizes the different lenses and forms the\nbasis for vertical composition using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Point.html",
        "fct-type": "module",
        "title": "Point"
      },
      "index": {
        "description": "The Point data type which generalizes the different lenses and forms the basis for vertical composition using the Applicative type class",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Point",
        "normalized": "",
        "package": "fclabels",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:ArrowFail",
      "description": {
        "fct-descr": "\u003cp\u003eThe ArrowFail class is similar to \u003ccode\u003e\u003ca\u003eArrowZero\u003c/a\u003e\u003c/code\u003e, but additionally embeds\n some error value in the computation instead of throwing it away.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "class",
        "fct-source": "src/Data-Label-Point.html#ArrowFail",
        "fct-type": "class",
        "title": "ArrowFail"
      },
      "index": {
        "description": "The ArrowFail class is similar to ArrowZero but additionally embeds some error value in the computation instead of throwing it away",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "ArrowFail",
        "normalized": "",
        "package": "fclabels",
        "partial": "Arrow Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Failing",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that might fail with some error.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Failing",
        "fct-type": "type",
        "title": "Failing"
      },
      "index": {
        "description": "Context that represents computations that might fail with some error",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Failing",
        "normalized": "",
        "package": "fclabels",
        "partial": "Failing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Iso",
      "description": {
        "fct-descr": "\u003cp\u003eAn isomorphism is like a \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e that works in two directions.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "data",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "data",
        "title": "Iso"
      },
      "index": {
        "description": "An isomorphism is like Category that works in two directions",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Iso",
        "normalized": "",
        "package": "fclabels",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that might silently fail.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Partial",
        "fct-type": "type",
        "title": "Partial"
      },
      "index": {
        "description": "Context that represents computations that might silently fail",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Partial",
        "normalized": "",
        "package": "fclabels",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract Point datatype. The getter and modifier operations work in some\n category. The type of the value pointed to might change, thereby changing\n the type of the outer structure.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "data",
        "fct-source": "src/Data-Label-Point.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "Abstract Point datatype The getter and modifier operations work in some category The type of the value pointed to might change thereby changing the type of the outer structure",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Point",
        "normalized": "",
        "package": "fclabels",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Total",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that always produce an output.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Total",
        "fct-type": "type",
        "title": "Total"
      },
      "index": {
        "description": "Context that represents computations that always produce an output",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Total",
        "normalized": "",
        "package": "fclabels",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:Iso",
      "description": {
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Iso",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Iso",
        "normalized": "",
        "package": "fclabels",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:Point",
      "description": {
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point (cat f o) (cat (cat o i, f) g)",
        "fct-source": "src/Data-Label-Point.html#Point",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "Point",
        "normalized": "Point(a b c)(a(a c d,b)e)",
        "package": "fclabels",
        "partial": "Point",
        "signature": "Point(cat f o)(cat(cat o i,f)g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:bw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "cat o i",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "bw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "bw",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003ePoint composition.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point cat t i b o -\u003e Point cat g t f b -\u003e Point cat g i f o",
        "fct-source": "src/Data-Label-Point.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "Point composition",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "compose",
        "normalized": "Point a b c d e-\u003ePoint a f b g d-\u003ePoint a f c g e",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat t i b o-\u003ePoint cat g t f b-\u003ePoint cat g i f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:failArrow",
      "description": {
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "a e c",
        "fct-source": "src/Data-Label-Point.html#failArrow",
        "fct-type": "method",
        "title": "failArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "failArrow",
        "normalized": "",
        "package": "fclabels",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:fw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "cat i o",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "fw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "fw",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the getter category from a Point.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point cat g i f o -\u003e cat f o",
        "fct-source": "src/Data-Label-Point.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the getter category from Point",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "get",
        "normalized": "Point a b c d e-\u003ea d e",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat g i f o-\u003ecat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:identity",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity Point. Cannot change the type.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point arr f f o o",
        "fct-source": "src/Data-Label-Point.html#identity",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "Identity Point Cannot change the type",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "identity",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:inv",
      "description": {
        "fct-descr": "\u003cp\u003eFlip an isomorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Iso cat i o -\u003e Iso cat o i",
        "fct-source": "src/Data-Label-Point.html#inv",
        "fct-type": "function",
        "title": "inv"
      },
      "index": {
        "description": "Flip an isomorphism",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "inv",
        "normalized": "Iso a b c-\u003eIso a c b",
        "package": "fclabels",
        "partial": "",
        "signature": "Iso cat i o-\u003eIso cat o i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eGet the modifier category from a Point.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point cat g i f o -\u003e cat (cat o i, f) g",
        "fct-source": "src/Data-Label-Point.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Get the modifier category from Point",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "modify",
        "normalized": "Point a b c d e-\u003ea(a e c,d)b",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat g i f o-\u003ecat(cat o i,f)g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eGet the setter category from a Point.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Point",
        "fct-package": "fclabels",
        "fct-signature": "Point arr g i f o -\u003e arr (i, f) g",
        "fct-source": "src/Data-Label-Point.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Get the setter category from Point",
        "hierarchy": "Data Label Point",
        "module": "Data.Label.Point",
        "name": "set",
        "normalized": "Point a b c d e-\u003ea(c,d)b",
        "package": "fclabels",
        "partial": "",
        "signature": "Point arr g i f o-\u003earr(i,f)g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses that allow polymorphic updates. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Poly.html",
        "fct-type": "module",
        "title": "Poly"
      },
      "index": {
        "description": "Lenses that allow polymorphic updates",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "Poly",
        "normalized": "",
        "package": "fclabels",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#t:Lens",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract polymorphic lens datatype. The getter and setter functions work\n in some category. Categories allow for effectful lenses, for example, lenses\n that might fail or use state.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "data",
        "fct-source": "src/Data-Label-Poly.html#Lens",
        "fct-type": "data",
        "title": "Lens"
      },
      "index": {
        "description": "Abstract polymorphic lens datatype The getter and setter functions work in some category Categories allow for effectful lenses for example lenses that might fail or use state",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "Lens",
        "normalized": "",
        "package": "fclabels",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:-62--45-",
      "description": {
        "fct-descr": "\u003cp\u003eMake a Lens output diverge by changing the input of the modifier. The\n operator can be read as \u003cem\u003epoints-to\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr (j -\u003e a) (i -\u003e b) -\u003e Lens arr (f -\u003e g) (o -\u003e i) -\u003e Point arr g j f o",
        "fct-source": "src/Data-Label-Poly.html#%3E-",
        "fct-type": "function",
        "title": "(\u003e-)"
      },
      "index": {
        "description": "Make Lens output diverge by changing the input of the modifier The operator can be read as points-to",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "(\u003e-) \u003e-",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003eLens a(f-\u003eg)(h-\u003ed)-\u003ePoint a g b f h",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr(j-\u003ea)(i-\u003eb)-\u003eLens arr(f-\u003eg)(o-\u003ei)-\u003ePoint arr g j f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the getter arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Lens cat (f -\u003e g) (o -\u003e i) -\u003e cat f o",
        "fct-source": "src/Data-Label-Poly.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the getter arrow from lens",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "get",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea b d",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens cat(f-\u003eg)(o-\u003ei)-\u003ecat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eLift a polymorphic isomorphism into a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe isomorphism needs to be passed in twice to properly unify.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Iso cat f o -\u003e Iso cat g i -\u003e Lens cat (f -\u003e g) (o -\u003e i)",
        "fct-source": "src/Data-Label-Poly.html#iso",
        "fct-type": "function",
        "title": "iso"
      },
      "index": {
        "description": "Lift polymorphic isomorphism into Lens The isomorphism needs to be passed in twice to properly unify",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "iso",
        "normalized": "Iso a b c-\u003eIso a d e-\u003eLens a(b-\u003ed)(c-\u003ee)",
        "package": "fclabels",
        "partial": "",
        "signature": "Iso cat f o-\u003eIso cat g i-\u003eLens cat(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lens out of a getter and setter.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "cat f o-\u003e cat (cat o i, f) g-\u003e Lens cat (f -\u003e g) (o -\u003e i)",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create lens out of getter and setter",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "lens",
        "normalized": "a b c-\u003ea(a c d,b)e-\u003eLens a(b-\u003ee)(c-\u003ed)",
        "package": "fclabels",
        "partial": "",
        "signature": "cat f o-\u003ecat(cat o i,f)g-\u003eLens cat(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eGet the modifier arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Lens cat (f -\u003e g) (o -\u003e i) -\u003e cat (cat o i, f) g",
        "fct-source": "src/Data-Label-Poly.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Get the modifier arrow from lens",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "modify",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea(a d e,b)c",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens cat(f-\u003eg)(o-\u003ei)-\u003ecat(cat o i,f)g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:point",
      "description": {
        "fct-descr": "\u003cp\u003eCreate lens from a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Point cat g i f o -\u003e Lens cat (f -\u003e g) (o -\u003e i)",
        "fct-source": "src/Data-Label-Poly.html#point",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "Create lens from Point",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "point",
        "normalized": "Point a b c d e-\u003eLens a(d-\u003eb)(e-\u003ec)",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat g i f o-\u003eLens cat(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eGet the setter arrow from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Poly",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr (f -\u003e g) (o -\u003e i) -\u003e arr (i, f) g",
        "fct-source": "src/Data-Label-Poly.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Get the setter arrow from lens",
        "hierarchy": "Data Label Poly",
        "module": "Data.Label.Poly",
        "name": "set",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea(e,b)c",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr(f-\u003eg)(o-\u003ei)-\u003earr(i,f)g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault lenses for simple total getters and total possibly polymorphic,\nupdates. Useful for creating accessor labels for single constructor datatypes.\nAlso useful field labels that are shared between all the constructors of a\nmulti constructor datatypes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label-Total.html",
        "fct-type": "module",
        "title": "Total"
      },
      "index": {
        "description": "Default lenses for simple total getters and total possibly polymorphic updates Useful for creating accessor labels for single constructor datatypes Also useful field labels that are shared between all the constructors of multi constructor datatypes",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "Total",
        "normalized": "",
        "package": "fclabels",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTotal lens type specialized for total accessor functions.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Total.html#%3A-%3E",
        "fct-type": "type",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Total lens type specialized for total accessor functions",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": ":-\u003e",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#t:Total",
      "description": {
        "fct-descr": "\u003cp\u003eContext that represents computations that always produce an output.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Point.html#Total",
        "fct-type": "type",
        "title": "Total"
      },
      "index": {
        "description": "Context that represents computations that always produce an output",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "Total",
        "normalized": "",
        "package": "fclabels",
        "partial": "Total",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the getter function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e f -\u003e o",
        "fct-source": "src/Data-Label-Total.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the getter function from lens",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "get",
        "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003ea-\u003ec",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003ef-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a total lens from a getter and a modifier.\n\u003c/p\u003e\u003cp\u003eWe expect the following law to hold:\n\u003c/p\u003e\u003cpre\u003e get l (set l a f) == a\n\u003c/pre\u003e\u003cpre\u003e set l (get l f) f == f\n\u003c/pre\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "(f -\u003e o)-\u003e ((o -\u003e i) -\u003e f -\u003e g)-\u003e (f -\u003e g) :-\u003e (o -\u003e i)",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create total lens from getter and modifier We expect the following law to hold get set set get",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "lens",
        "normalized": "(a-\u003eb)-\u003e((b-\u003ec)-\u003ea-\u003ed)-\u003e(a-\u003ed)-\u003e(b-\u003ec)",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003eo)-\u003e((o-\u003ei)-\u003ef-\u003eg)-\u003e(f-\u003eg)-\u003e(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:lifted",
      "description": {
        "fct-descr": "\u003cp\u003eLifted lens composition.\n\u003c/p\u003e\u003cp\u003eFor example, useful when specialized to lists:\n\u003c/p\u003e\u003cpre\u003e :: (f :-\u003e [o])\n -\u003e (o :-\u003e [a])\n -\u003e (f :-\u003e [a])\n\u003c/pre\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :-\u003e (m o -\u003e m i)) -\u003e ((o -\u003e i) :-\u003e (m a -\u003e m b)) -\u003e (f -\u003e g) :-\u003e (m a -\u003e m b)",
        "fct-source": "src/Data-Label-Total.html#lifted",
        "fct-type": "function",
        "title": "lifted"
      },
      "index": {
        "description": "Lifted lens composition For example useful when specialized to lists",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "lifted",
        "normalized": "((a-\u003eb)-\u003e(c d-\u003ec e))-\u003e((d-\u003ee)-\u003e(c f-\u003ec g))-\u003e(a-\u003eb)-\u003e(c f-\u003ec g)",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)-\u003e(m o-\u003em i))-\u003e((o-\u003ei)-\u003e(m a-\u003em b))-\u003e(f-\u003eg)-\u003e(m a-\u003em b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eGet the modifier function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e (o -\u003e i) -\u003e f -\u003e g",
        "fct-source": "src/Data-Label-Total.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Get the modifier function from lens",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "modify",
        "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003e(c-\u003ed)-\u003ea-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003e(o-\u003ei)-\u003ef-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eGet the setter function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e i -\u003e f -\u003e g",
        "fct-source": "src/Data-Label-Total.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Get the setter function from lens",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "set",
        "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003ed-\u003ea-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003ei-\u003ef-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003eModify in some context.\n\u003c/p\u003e",
        "fct-module": "Data.Label.Total",
        "fct-package": "fclabels",
        "fct-signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e (o -\u003e m i) -\u003e f -\u003e m g",
        "fct-source": "src/Data-Label-Total.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "Modify in some context",
        "hierarchy": "Data Label Total",
        "module": "Data.Label.Total",
        "name": "traverse",
        "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003e(c-\u003ee d)-\u003ea-\u003ee b",
        "package": "fclabels",
        "partial": "",
        "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003e(o-\u003em i)-\u003ef-\u003em g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides first class labels that can act as bidirectional record\nfields. The labels can be derived automatically using Template Haskell which\nmeans you don't have to write any boilerplate yourself. The labels are\nimplemented as lenses and are fully composable. Labels can be used to \u003cem\u003eget\u003c/em\u003e,\n\u003cem\u003eset\u003c/em\u003e and \u003cem\u003emodify\u003c/em\u003e parts of a datatype in a consistent way.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "module",
        "fct-source": "src/Data-Label.html",
        "fct-type": "module",
        "title": "Label"
      },
      "index": {
        "description": "This package provides first class labels that can act as bidirectional record fields The labels can be derived automatically using Template Haskell which means you don have to write any boilerplate yourself The labels are implemented as lenses and are fully composable Labels can be used to get set and modify parts of datatype in consistent way",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "Label",
        "normalized": "",
        "package": "fclabels",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTotal monomorphic lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "type",
        "fct-source": "src/Data-Label-Mono.html#%3A-%3E",
        "fct-type": "type",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Total monomorphic lens",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": ":-\u003e",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#t:Iso",
      "description": {
        "fct-descr": "\u003cp\u003eAn isomorphism is like a \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e that works in two directions.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "data",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "data",
        "title": "Iso"
      },
      "index": {
        "description": "An isomorphism is like Category that works in two directions",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "Iso",
        "normalized": "",
        "package": "fclabels",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:-62--45-",
      "description": {
        "fct-descr": "\u003cp\u003eMake a Lens output diverge by changing the input of the modifier. The\n operator can be read as \u003cem\u003epoints-to\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Lens arr (j -\u003e a) (i -\u003e b) -\u003e Lens arr (f -\u003e g) (o -\u003e i) -\u003e Point arr g j f o",
        "fct-source": "src/Data-Label-Poly.html#%3E-",
        "fct-type": "function",
        "title": "(\u003e-)"
      },
      "index": {
        "description": "Make Lens output diverge by changing the input of the modifier The operator can be read as points-to",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "(\u003e-) \u003e-",
        "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003eLens a(f-\u003eg)(h-\u003ed)-\u003ePoint a g b f h",
        "package": "fclabels",
        "partial": "",
        "signature": "Lens arr(j-\u003ea)(i-\u003eb)-\u003eLens arr(f-\u003eg)(o-\u003ei)-\u003ePoint arr g j f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:Iso",
      "description": {
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Iso",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "Iso",
        "normalized": "",
        "package": "fclabels",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:bw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "cat o i",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "bw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "bw",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:fclabels",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels for all the record types in the supplied declaration. The\n record fields don't need an underscore prefix. Multiple data types /\n newtypes are allowed at once.\n\u003c/p\u003e\u003cp\u003eThe advantage of this approach is that you don't need to explicitly hide the\n original record accessors from being exported and they won't show up in the\n derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e fclabels [d|\n   data Record = Record\n     { int  :: Int\n     , bool :: Bool\n     } deriving Show\n   |]\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e modify int (+2) (Record 1 False)\n Record 3 False\n\u003c/pre\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#fclabels",
        "fct-type": "function",
        "title": "fclabels"
      },
      "index": {
        "description": "Derive labels for all the record types in the supplied declaration The record fields don need an underscore prefix Multiple data types newtypes are allowed at once The advantage of this approach is that you don need to explicitly hide the original record accessors from being exported and they won show up in the derived Show instance Example fclabels data Record Record int Int bool Bool deriving Show ghci modify int Record False Record False",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "fclabels",
        "normalized": "Q[Dec]-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "",
        "signature": "Q[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:fw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "cat i o",
        "fct-source": "src/Data-Label-Point.html#Iso",
        "fct-type": "function",
        "title": "fw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "fw",
        "normalized": "",
        "package": "fclabels",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the getter function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "(f :-\u003e a) -\u003e f -\u003e a",
        "fct-source": "src/Data-Label.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the getter function from lens",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "get",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003ea)-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:getLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDerive unnamed labels as n-tuples that can be named manually. The types\n will be polymorphic and can be used in an arbitrary context.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e (left, right) = $(getLabel ''Either)\n\u003c/pre\u003e\u003cp\u003eThe lenses can now also be typed manually:\n\u003c/p\u003e\u003cpre\u003e left  :: (Either a b -\u003e Either c b) :~\u003e (a -\u003e c)\n right :: (Either a b -\u003e Either a c) :~\u003e (b -\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote: Because of the abstract nature of the generated lenses and the top\n level pattern match, it might be required to use \u003ccode\u003eNoMonomorphismRestriction\u003c/code\u003e\n in some cases.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Data-Label-Derive.html#getLabel",
        "fct-type": "function",
        "title": "getLabel"
      },
      "index": {
        "description": "Derive unnamed labels as n-tuples that can be named manually The types will be polymorphic and can be used in an arbitrary context Example left right getLabel Either The lenses can now also be typed manually left Either Either right Either Either Note Because of the abstract nature of the generated lenses and the top level pattern match it might be required to use NoMonomorphismRestriction in some cases",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "getLabel",
        "normalized": "Name-\u003eQ Exp",
        "package": "fclabels",
        "partial": "Label",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:inv",
      "description": {
        "fct-descr": "\u003cp\u003eFlip an isomorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Iso cat i o -\u003e Iso cat o i",
        "fct-source": "src/Data-Label-Point.html#inv",
        "fct-type": "function",
        "title": "inv"
      },
      "index": {
        "description": "Flip an isomorphism",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "inv",
        "normalized": "Iso a b c-\u003eIso a c b",
        "package": "fclabels",
        "partial": "",
        "signature": "Iso cat i o-\u003eIso cat o i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eLift an isomorphism into a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Iso cat f o -\u003e Lens cat f o",
        "fct-source": "src/Data-Label-Mono.html#iso",
        "fct-type": "function",
        "title": "iso"
      },
      "index": {
        "description": "Lift an isomorphism into Lens",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "iso",
        "normalized": "Iso a b c-\u003eLens a b c",
        "package": "fclabels",
        "partial": "",
        "signature": "Iso cat f o-\u003eLens cat f o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a total lens from a getter and a modifier.\n\u003c/p\u003e\u003cp\u003eWe expect the following law to hold:\n\u003c/p\u003e\u003cpre\u003e get l (modify l m f) == m (get l f)\n\u003c/pre\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "(f -\u003e a)-\u003e ((a -\u003e a) -\u003e f -\u003e f)-\u003e f :-\u003e a",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Create total lens from getter and modifier We expect the following law to hold get modify get",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "lens",
        "normalized": "(a-\u003eb)-\u003e((b-\u003eb)-\u003ea-\u003ea)-\u003ea-\u003eb",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003ea)-\u003e((a-\u003ea)-\u003ef-\u003ef)-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:mkLabel",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels including type signatures for all the record selectors in a\n single datatype. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#mkLabel",
        "fct-type": "function",
        "title": "mkLabel"
      },
      "index": {
        "description": "Derive labels including type signatures for all the record selectors in single datatype The types will be polymorphic and can be used in an arbitrary context",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "mkLabel",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Label",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:mkLabels",
      "description": {
        "fct-descr": "\u003cp\u003eDerive labels including type signatures for all the record selectors for a\n collection of datatypes. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-Label-Derive.html#mkLabels",
        "fct-type": "function",
        "title": "mkLabels"
      },
      "index": {
        "description": "Derive labels including type signatures for all the record selectors for collection of datatypes The types will be polymorphic and can be used in an arbitrary context",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "mkLabels",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "fclabels",
        "partial": "Labels",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eGet the modifier function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "(f :-\u003e a) -\u003e (a -\u003e a) -\u003e f -\u003e f",
        "fct-source": "src/Data-Label.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Get the modifier function from lens",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "modify",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003ea)-\u003e(a-\u003ea)-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:point",
      "description": {
        "fct-descr": "\u003cp\u003eCreate lens from a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "Point cat g i f o -\u003e Lens cat (f -\u003e g) (o -\u003e i)",
        "fct-source": "src/Data-Label-Poly.html#point",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "Create lens from Point",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "point",
        "normalized": "Point a b c d e-\u003eLens a(d-\u003eb)(e-\u003ec)",
        "package": "fclabels",
        "partial": "",
        "signature": "Point cat g i f o-\u003eLens cat(f-\u003eg)(o-\u003ei)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eGet the setter function from a lens.\n\u003c/p\u003e",
        "fct-module": "Data.Label",
        "fct-package": "fclabels",
        "fct-signature": "(f :-\u003e a) -\u003e a -\u003e f -\u003e f",
        "fct-source": "src/Data-Label.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Get the setter function from lens",
        "hierarchy": "Data Label",
        "module": "Data.Label",
        "name": "set",
        "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003ea",
        "package": "fclabels",
        "partial": "",
        "signature": "(f-\u003ea)-\u003ea-\u003ef-\u003ef"
      }
    }
  }
]