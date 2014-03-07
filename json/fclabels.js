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
        "word": "fclabels"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLabels for data types in the base package. The lens types are kept abstract to\nbe fully reusable in custom contexts. Build to be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Base",
          "name": "Base",
          "package": "fclabels",
          "source": "src/Data-Label-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Labels for data types in the base package The lens types are kept abstract to be fully reusable in custom contexts Build to be imported qualified",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "Base",
          "package": "fclabels",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the first component of a 2-tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "fst",
          "package": "fclabels",
          "signature": "Lens arr ((a, b) -\u003e (o, b)) (a -\u003e o)",
          "source": "src/Data-Label-Base.html#fst",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the first component of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "fst",
          "normalized": "Lens a((b,c)-\u003e(d,c))(b-\u003ed)",
          "package": "fclabels",
          "signature": "Lens arr((a,b)-\u003e(o,b))(a-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the first component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "fst3",
          "package": "fclabels",
          "signature": "Lens arr ((a, b, c) -\u003e (o, b, c)) (a -\u003e o)",
          "source": "src/Data-Label-Base.html#fst3",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the first component of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "fst3",
          "normalized": "Lens a((b,c,d)-\u003e(e,c,d))(b-\u003ee)",
          "package": "fclabels",
          "signature": "Lens arr((a,b,c)-\u003e(o,b,c))(a-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:fst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the head of a list's cons cell. (Partial and monomorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "head",
          "package": "fclabels",
          "signature": "Lens arr [a] a",
          "source": "src/Data-Label-Base.html#head",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the head of list cons cell Partial and monomorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "head",
          "normalized": "Lens a[b]b",
          "package": "fclabels",
          "signature": "Lens arr[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the value in a Maybe. (Partial and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "just",
          "package": "fclabels",
          "signature": "Lens cat (Maybe a -\u003e Maybe b) (a -\u003e b)",
          "source": "src/Data-Label-Base.html#just",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the value in Maybe Partial and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "just",
          "normalized": "Lens a(Maybe b-\u003eMaybe c)(b-\u003ec)",
          "package": "fclabels",
          "signature": "Lens cat(Maybe a-\u003eMaybe b)(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the left value in an Either. (Partial and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "left",
          "package": "fclabels",
          "signature": "Lens arr (Either a b -\u003e Either o b) (a -\u003e o)",
          "source": "src/Data-Label-Base.html#left",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the left value in an Either Partial and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "left",
          "normalized": "Lens a(Either b c-\u003eEither d c)(b-\u003ed)",
          "package": "fclabels",
          "signature": "Lens arr(Either a b-\u003eEither o b)(a-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial isomorphism for readable and showable values. Can easily be lifted\n into a lens by using \u003ccode\u003e\u003ca\u003eiso\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "readShow",
          "package": "fclabels",
          "signature": "Iso Partial String a",
          "source": "src/Data-Label-Base.html#readShow",
          "type": "function"
        },
        "index": {
          "description": "Partial isomorphism for readable and showable values Can easily be lifted into lens by using iso",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "readShow",
          "package": "fclabels",
          "partial": "Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:readShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the right value in an Either. (Partial and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "right",
          "package": "fclabels",
          "signature": "Lens arr (Either a b -\u003e Either a o) (b -\u003e o)",
          "source": "src/Data-Label-Base.html#right",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the right value in an Either Partial and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "right",
          "normalized": "Lens a(Either b c-\u003eEither b d)(c-\u003ed)",
          "package": "fclabels",
          "signature": "Lens arr(Either a b-\u003eEither a o)(b-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the second component of a 2-tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "snd",
          "package": "fclabels",
          "signature": "Lens arr ((a, b) -\u003e (a, o)) (b -\u003e o)",
          "source": "src/Data-Label-Base.html#snd",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the second component of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "snd",
          "normalized": "Lens a((b,c)-\u003e(b,d))(c-\u003ed)",
          "package": "fclabels",
          "signature": "Lens arr((a,b)-\u003e(a,o))(b-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the second component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "snd3",
          "package": "fclabels",
          "signature": "Lens arr ((a, b, c) -\u003e (a, o, c)) (b -\u003e o)",
          "source": "src/Data-Label-Base.html#snd3",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the second component of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "snd3",
          "normalized": "Lens a((b,c,d)-\u003e(b,e,d))(c-\u003ee)",
          "package": "fclabels",
          "signature": "Lens arr((a,b,c)-\u003e(a,o,c))(b-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:snd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic lens that swaps the components of a tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "swap",
          "package": "fclabels",
          "signature": "Lens arr ((a, b) -\u003e (c, d)) ((b, a) -\u003e (d, c))",
          "source": "src/Data-Label-Base.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Polymorphic lens that swaps the components of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "swap",
          "normalized": "Lens a((b,c)-\u003e(d,e))((c,b)-\u003e(e,d))",
          "package": "fclabels",
          "signature": "Lens arr((a,b)-\u003e(c,d))((b,a)-\u003e(d,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the tail of a list's cons cell. (Partial and monomorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "tail",
          "package": "fclabels",
          "signature": "Lens arr [a] [a]",
          "source": "src/Data-Label-Base.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the tail of list cons cell Partial and monomorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "tail",
          "normalized": "Lens a[b][b]",
          "package": "fclabels",
          "signature": "Lens arr[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens pointing to the third component of a 3-tuple. (Total and polymorphic)\n\u003c/p\u003e",
          "module": "Data.Label.Base",
          "name": "trd3",
          "package": "fclabels",
          "signature": "Lens arr ((a, b, c) -\u003e (a, b, o)) (c -\u003e o)",
          "source": "src/Data-Label-Base.html#trd3",
          "type": "function"
        },
        "index": {
          "description": "Lens pointing to the third component of tuple Total and polymorphic",
          "hierarchy": "Data Label Base",
          "module": "Data.Label.Base",
          "name": "trd3",
          "normalized": "Lens a((b,c,d)-\u003e(b,c,e))(d-\u003ee)",
          "package": "fclabels",
          "signature": "Lens arr((a,b,c)-\u003e(a,b,o))(c-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Base.html#v:trd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell functions for automatically generating labels for algebraic\ndatatypes, newtypes and GADTs. There are two basic modes of label generation,\nthe \u003ccode\u003e\u003ca\u003emkLabels\u003c/a\u003e\u003c/code\u003e family of functions create labels (and optionally type\nsignatures) in scope as top level funtions, the \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e family of funtions\ncreate labels as expressions that can be named and typed manually.\n\u003c/p\u003e\u003cp\u003eIn the case of multi-constructor datatypes some fields might not always be\navailable and the derived labels will be partial. Partial labels are provided\nwith an additional type context that forces them to be only usable in the\n\u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFailing\u003c/a\u003e\u003c/code\u003e context.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Derive",
          "name": "Derive",
          "package": "fclabels",
          "source": "src/Data-Label-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell functions for automatically generating labels for algebraic datatypes newtypes and GADTs There are two basic modes of label generation the mkLabels family of functions create labels and optionally type signatures in scope as top level funtions the getLabel family of funtions create labels as expressions that can be named and typed manually In the case of multi-constructor datatypes some fields might not always be available and the derived labels will be partial Partial labels are provided with an additional type context that forces them to be only usable in the Partial or Failing context",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "Derive",
          "package": "fclabels",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault way of generating a label name from the Haskell record selector\n name. If the original selector starts with an underscore, remove it and make\n the next character lowercase. Otherwise, add \u003ccode\u003el\u003c/code\u003e, and make the next\n character uppercase.\n\u003c/p\u003e",
          "module": "Data.Label.Derive",
          "name": "defaultNaming",
          "package": "fclabels",
          "signature": "String -\u003e String",
          "source": "src/Data-Label-Derive.html#defaultNaming",
          "type": "function"
        },
        "index": {
          "description": "Default way of generating label name from the Haskell record selector name If the original selector starts with an underscore remove it and make the next character lowercase Otherwise add and make the next character uppercase",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "defaultNaming",
          "normalized": "String-\u003eString",
          "package": "fclabels",
          "partial": "Naming",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:defaultNaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive labels for all the record types in the supplied declaration. The\n record fields don't need an underscore prefix. Multiple data types /\n newtypes are allowed at once.\n\u003c/p\u003e\u003cp\u003eThe advantage of this approach is that you don't need to explicitly hide the\n original record accessors from being exported and they won't show up in the\n derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e fclabels [d|\n   data Record = Record\n     { int  :: Int\n     , bool :: Bool\n     } deriving Show\n   |]\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e modify int (+2) (Record 1 False)\n Record 3 False\n\u003c/pre\u003e",
          "module": "[\"Data.Label.Derive\",\"Data.Label\"]",
          "name": "fclabels",
          "package": "fclabels",
          "signature": "Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Label-Derive.html#fclabels",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:fclabels\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:fclabels\"]"
        },
        "index": {
          "description": "Derive labels for all the record types in the supplied declaration The record fields don need an underscore prefix Multiple data types newtypes are allowed at once The advantage of this approach is that you don need to explicitly hide the original record accessors from being exported and they won show up in the derived Show instance Example fclabels data Record Record int Int bool Bool deriving Show ghci modify int Record False Record False",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "fclabels",
          "normalized": "Q[Dec]-\u003eQ[Dec]",
          "package": "fclabels",
          "signature": "Q[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:fclabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive unnamed labels as n-tuples that can be named manually. The types\n will be polymorphic and can be used in an arbitrary context.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e (left, right) = $(getLabel ''Either)\n\u003c/pre\u003e\u003cp\u003eThe lenses can now also be typed manually:\n\u003c/p\u003e\u003cpre\u003e left  :: (Either a b -\u003e Either c b) :~\u003e (a -\u003e c)\n right :: (Either a b -\u003e Either a c) :~\u003e (b -\u003e c)\n\u003c/pre\u003e\u003cp\u003eNote: Because of the abstract nature of the generated lenses and the top\n level pattern match, it might be required to use \u003ccode\u003eNoMonomorphismRestriction\u003c/code\u003e\n in some cases.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Derive\",\"Data.Label\"]",
          "name": "getLabel",
          "package": "fclabels",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Label-Derive.html#getLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:getLabel\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:getLabel\"]"
        },
        "index": {
          "description": "Derive unnamed labels as n-tuples that can be named manually The types will be polymorphic and can be used in an arbitrary context Example left right getLabel Either The lenses can now also be typed manually left Either Either right Either Either Note Because of the abstract nature of the generated lenses and the top level pattern match it might be required to use NoMonomorphismRestriction in some cases",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "getLabel",
          "normalized": "Name-\u003eQ Exp",
          "package": "fclabels",
          "partial": "Label",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow level label as expression derivation function.\n\u003c/p\u003e",
          "module": "Data.Label.Derive",
          "name": "getLabelWith",
          "package": "fclabels",
          "signature": "Bool-\u003e Bool-\u003e Bool-\u003e Name-\u003e Q Exp",
          "type": "function"
        },
        "index": {
          "description": "Low level label as expression derivation function",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "getLabelWith",
          "normalized": "Bool-\u003eBool-\u003eBool-\u003eName-\u003eQ Exp",
          "package": "fclabels",
          "partial": "Label With",
          "signature": "Bool-\u003eBool-\u003eBool-\u003eName-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:getLabelWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive labels including type signatures for all the record selectors in a\n single datatype. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Derive\",\"Data.Label\"]",
          "name": "mkLabel",
          "package": "fclabels",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Label-Derive.html#mkLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabel\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:mkLabel\"]"
        },
        "index": {
          "description": "Derive labels including type signatures for all the record selectors in single datatype The types will be polymorphic and can be used in an arbitrary context",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "mkLabel",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "fclabels",
          "partial": "Label",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive labels including type signatures for all the record selectors for a\n collection of datatypes. The types will be polymorphic and can be used in an\n arbitrary context.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Derive\",\"Data.Label\"]",
          "name": "mkLabels",
          "package": "fclabels",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Data-Label-Derive.html#mkLabels",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabels\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:mkLabels\"]"
        },
        "index": {
          "description": "Derive labels including type signatures for all the record selectors for collection of datatypes The types will be polymorphic and can be used in an arbitrary context",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "mkLabels",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "fclabels",
          "partial": "Labels",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkLabels\u003c/a\u003e\u003c/code\u003e, but uses the specified function to produce custom names\n for the labels.\n\u003c/p\u003e\u003cp\u003eFor instance, \u003ccode\u003e(drop 1 . dropWhile (/='_'))\u003c/code\u003e creates a label\n \u003ccode\u003eval\u003c/code\u003e from a record \u003ccode\u003eRec { rec_val :: X }\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Derive",
          "name": "mkLabelsNamed",
          "package": "fclabels",
          "signature": "(String -\u003e String) -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Data-Label-Derive.html#mkLabelsNamed",
          "type": "function"
        },
        "index": {
          "description": "Like mkLabels but uses the specified function to produce custom names for the labels For instance drop dropWhile creates label val from record Rec rec val",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "mkLabelsNamed",
          "normalized": "(String-\u003eString)-\u003e[Name]-\u003eQ[Dec]",
          "package": "fclabels",
          "partial": "Labels Named",
          "signature": "(String-\u003eString)-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabelsNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow level standalone label derivation function.\n\u003c/p\u003e",
          "module": "Data.Label.Derive",
          "name": "mkLabelsWith",
          "package": "fclabels",
          "signature": "(String -\u003e String)-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Low level standalone label derivation function",
          "hierarchy": "Data Label Derive",
          "module": "Data.Label.Derive",
          "name": "mkLabelsWith",
          "normalized": "(String-\u003eString)-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eName-\u003eQ[Dec]",
          "package": "fclabels",
          "partial": "Labels With",
          "signature": "(String-\u003eString)-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Derive.html#v:mkLabelsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses for getters and updates that can potentially fail with some error\nvalue. Like partial lenses, failing lenses are useful for creating accessor\nlabels for multi constructor data types where projection and modification of\nfields will not always succeed. The error value can be used to report what\ncaused the failure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Failing",
          "name": "Failing",
          "package": "fclabels",
          "source": "src/Data-Label-Failing.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses for getters and updates that can potentially fail with some error value Like partial lenses failing lenses are useful for creating accessor labels for multi constructor data types where projection and modification of fields will not always succeed The error value can be used to report what caused the failure",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "Failing",
          "package": "fclabels",
          "partial": "Failing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that might fail with some error.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "Failing",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Failing",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that might fail with some error",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "Failing",
          "package": "fclabels",
          "partial": "Failing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#t:Failing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens type for situations in which the accessor functions can fail with\n some error information.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "Lens",
          "package": "fclabels",
          "source": "src/Data-Label-Failing.html#Lens",
          "type": "type"
        },
        "index": {
          "description": "Lens type for situations in which the accessor functions can fail with some error information",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "Lens",
          "package": "fclabels",
          "partial": "Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a total lens that points to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e field into a lens that might\n fail.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "embed",
          "package": "fclabels",
          "signature": "Lens (-\u003e) (f -\u003e g) (Either e o -\u003e Either e i) -\u003e Lens e (f -\u003e g) (o -\u003e i)",
          "source": "src/Data-Label-Failing.html#embed",
          "type": "function"
        },
        "index": {
          "description": "Embed total lens that points to an Either field into lens that might fail",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "embed",
          "normalized": "Lens(-\u003e)(a-\u003eb)(Either c d-\u003eEither c e)-\u003eLens c(a-\u003eb)(d-\u003ee)",
          "package": "fclabels",
          "signature": "Lens(-\u003e)(f-\u003eg)(Either e o-\u003eEither e i)-\u003eLens e(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetter for a lens that can fail. When the field to which the lens points\n is not accessible the getter returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "get",
          "package": "fclabels",
          "signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e f -\u003e Either e o",
          "source": "src/Data-Label-Failing.html#get",
          "type": "function"
        },
        "index": {
          "description": "Getter for lens that can fail When the field to which the lens points is not accessible the getter returns Nothing",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "get",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003eb-\u003eEither a d",
          "package": "fclabels",
          "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003ef-\u003eEither e o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lens that can fail from a getter and a modifier that can\n themselves potentially fail.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "lens",
          "package": "fclabels",
          "signature": "(f -\u003e Either e o)-\u003e ((o -\u003e Either e i) -\u003e f -\u003e Either e g)-\u003e Lens e (f -\u003e g) (o -\u003e i)",
          "type": "function"
        },
        "index": {
          "description": "Create lens that can fail from getter and modifier that can themselves potentially fail",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "lens",
          "normalized": "(a-\u003eEither b c)-\u003e((c-\u003eEither b d)-\u003ea-\u003eEither b e)-\u003eLens b(a-\u003ee)(c-\u003ed)",
          "package": "fclabels",
          "signature": "(f-\u003eEither e o)-\u003e((o-\u003eEither e i)-\u003ef-\u003eEither e g)-\u003eLens e(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifier for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "modify",
          "package": "fclabels",
          "signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e (o -\u003e i) -\u003e f -\u003e Either e g",
          "source": "src/Data-Label-Failing.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modifier for lens that can fail When the field to which the lens points is not accessible this function returns Left",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "modify",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003e(d-\u003ee)-\u003eb-\u003eEither a c",
          "package": "fclabels",
          "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003e(o-\u003ei)-\u003ef-\u003eEither e g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "modify'",
          "package": "fclabels",
          "signature": "Lens e (f -\u003e f) (o -\u003e o) -\u003e (o -\u003e o) -\u003e f -\u003e f",
          "source": "src/Data-Label-Failing.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "Like modify but return behaves like the identity function when the field could not be set",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "modify'",
          "normalized": "Lens a(b-\u003eb)(c-\u003ec)-\u003e(c-\u003ec)-\u003eb-\u003eb",
          "package": "fclabels",
          "signature": "Lens e(f-\u003ef)(o-\u003eo)-\u003e(o-\u003eo)-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetter for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "set",
          "package": "fclabels",
          "signature": "Lens e (f -\u003e g) (o -\u003e i) -\u003e i -\u003e f -\u003e Either e g",
          "source": "src/Data-Label-Failing.html#set",
          "type": "function"
        },
        "index": {
          "description": "Setter for lens that can fail When the field to which the lens points is not accessible this function returns Left",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "set",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ee-\u003eb-\u003eEither a c",
          "package": "fclabels",
          "signature": "Lens e(f-\u003eg)(o-\u003ei)-\u003ei-\u003ef-\u003eEither e g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
          "module": "Data.Label.Failing",
          "name": "set'",
          "package": "fclabels",
          "signature": "Lens e (f -\u003e f) (o -\u003e o) -\u003e o -\u003e f -\u003e f",
          "source": "src/Data-Label-Failing.html#set%27",
          "type": "function"
        },
        "index": {
          "description": "Like set but return behaves like the identity function when the field could not be set",
          "hierarchy": "Data Label Failing",
          "module": "Data.Label.Failing",
          "name": "set'",
          "normalized": "Lens a(b-\u003eb)(c-\u003ec)-\u003ec-\u003eb-\u003eb",
          "package": "fclabels",
          "signature": "Lens e(f-\u003ef)(o-\u003eo)-\u003eo-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Failing.html#v:set-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState and Reader operations specialized for working with total lenses. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Monadic",
          "name": "Monadic",
          "package": "fclabels",
          "source": "src/Data-Label-Monadic.html",
          "type": "module"
        },
        "index": {
          "description": "State and Reader operations specialized for working with total lenses",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "Monadic",
          "package": "fclabels",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e that reads more or less like an assignment.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "(=.)",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m ()",
          "source": "src/Data-Label-Monadic.html#%3D.",
          "type": "function"
        },
        "index": {
          "description": "Alias for modify that reads more or less like an assignment",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "(=.) =.",
          "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eputs\u003c/a\u003e\u003c/code\u003e that reads like an assignment.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "(=:)",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e o -\u003e m ()",
          "source": "src/Data-Label-Monadic.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Alias for puts that reads like an assignment",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "(=:) =:",
          "normalized": "Lens(-\u003e)a b-\u003eb-\u003ec()",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003eo-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch a value pointed to by a lens out of a reader environment.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "asks",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e m o",
          "source": "src/Data-Label-Monadic.html#asks",
          "type": "function"
        },
        "index": {
          "description": "Fetch value pointed to by lens out of reader environment",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "asks",
          "normalized": "Lens(-\u003e)a b-\u003ec b",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003em o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value out of the state, pointed to by the specified lens.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "gets",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e m o",
          "source": "src/Data-Label-Monadic.html#gets",
          "type": "function"
        },
        "index": {
          "description": "Get value out of the state pointed to by the specified lens",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "gets",
          "normalized": "Lens(-\u003e)a b-\u003ec b",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003em o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation in a modified environment. The lens is used to\n point out the part to modify.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "local",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m a -\u003e m a",
          "source": "src/Data-Label-Monadic.html#local",
          "type": "function"
        },
        "index": {
          "description": "Execute computation in modified environment The lens is used to point out the part to modify",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "local",
          "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec d-\u003ec d",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a value with a function somewhere in the state, pointed to by the\n specified lens.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "modify",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e (o -\u003e o) -\u003e m ()",
          "source": "src/Data-Label-Monadic.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modify value with function somewhere in the state pointed to by the specified lens",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "modify",
          "normalized": "Lens(-\u003e)a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003e(o-\u003eo)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a value with a function somewhere in the state, pointed to by the\n specified lens. Additionally return a separate value based on the\n modification.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "modifyAndGet",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e (o -\u003e (a, o)) -\u003e m a",
          "source": "src/Data-Label-Monadic.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify value with function somewhere in the state pointed to by the specified lens Additionally return separate value based on the modification",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "modifyAndGet",
          "normalized": "Lens(-\u003e)a b-\u003e(b-\u003e(c,b))-\u003ed c",
          "package": "fclabels",
          "partial": "And Get",
          "signature": "Lens(-\u003e)f o-\u003e(o-\u003e(a,o))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a value somewhere in the state, pointed to by the specified lens.\n\u003c/p\u003e",
          "module": "Data.Label.Monadic",
          "name": "puts",
          "package": "fclabels",
          "signature": "Lens (-\u003e) f o -\u003e o -\u003e m ()",
          "source": "src/Data-Label-Monadic.html#puts",
          "type": "function"
        },
        "index": {
          "description": "Set value somewhere in the state pointed to by the specified lens",
          "hierarchy": "Data Label Monadic",
          "module": "Data.Label.Monadic",
          "name": "puts",
          "normalized": "Lens(-\u003e)a b-\u003eb-\u003ec()",
          "package": "fclabels",
          "signature": "Lens(-\u003e)f o-\u003eo-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Monadic.html#v:puts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses that only allow monomorphic updates. Monomorphic lenses are simply\npolymorphic lenses with the input and output type variables constraint to the\nsame type. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Mono",
          "name": "Mono",
          "package": "fclabels",
          "source": "src/Data-Label-Mono.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses that only allow monomorphic updates Monomorphic lenses are simply polymorphic lenses with the input and output type variables constraint to the same type",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "Mono",
          "package": "fclabels",
          "partial": "Mono",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial monomorphic lens.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": ":~\u003e",
          "package": "fclabels",
          "source": "src/Data-Label-Mono.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "Partial monomorphic lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": ":~\u003e",
          "package": "fclabels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal monomorphic lens.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": ":-\u003e",
          "package": "fclabels",
          "source": "src/Data-Label-Mono.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "Total monomorphic lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": ":-\u003e",
          "package": "fclabels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract monomorphic lens datatype. The getter and setter functions work\n in some category. Categories allow for effectful lenses, for example, lenses\n that might fail or use state.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "Lens",
          "package": "fclabels",
          "source": "src/Data-Label-Mono.html#Lens",
          "type": "type"
        },
        "index": {
          "description": "Abstract monomorphic lens datatype The getter and setter functions work in some category Categories allow for effectful lenses for example lenses that might fail or use state",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "Lens",
          "package": "fclabels",
          "partial": "Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the getter arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "get",
          "package": "fclabels",
          "signature": "Lens cat f o -\u003e cat f o",
          "source": "src/Data-Label-Mono.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the getter arrow from lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "get",
          "normalized": "Lens a b c-\u003ea b c",
          "package": "fclabels",
          "signature": "Lens cat f o-\u003ecat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an isomorphism into a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Mono\",\"Data.Label\"]",
          "name": "iso",
          "package": "fclabels",
          "signature": "Iso cat f o -\u003e Lens cat f o",
          "source": "src/Data-Label-Mono.html#iso",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:iso\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:iso\"]"
        },
        "index": {
          "description": "Lift an isomorphism into Lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "iso",
          "normalized": "Iso a b c-\u003eLens a b c",
          "package": "fclabels",
          "signature": "Iso cat f o-\u003eLens cat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lens out of a getter and setter.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "lens",
          "package": "fclabels",
          "signature": "cat f o-\u003e cat (cat o o, f) f-\u003e Lens cat f o",
          "type": "function"
        },
        "index": {
          "description": "Create lens out of getter and setter",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "lens",
          "normalized": "a b c-\u003ea(a c c,b)b-\u003eLens a b c",
          "package": "fclabels",
          "signature": "cat f o-\u003ecat(cat o o,f)f-\u003eLens cat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the modifier arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "modify",
          "package": "fclabels",
          "signature": "Lens cat f o -\u003e cat (cat o o, f) f",
          "source": "src/Data-Label-Mono.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Get the modifier arrow from lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "modify",
          "normalized": "Lens a b c-\u003ea(a c c,b)b",
          "package": "fclabels",
          "signature": "Lens cat f o-\u003ecat(cat o o,f)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate lens from a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "point",
          "package": "fclabels",
          "signature": "Point cat f o f o -\u003e Lens cat f o",
          "source": "src/Data-Label-Mono.html#point",
          "type": "function"
        },
        "index": {
          "description": "Create lens from Point",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "point",
          "normalized": "Point a b c b c-\u003eLens a b c",
          "package": "fclabels",
          "signature": "Point cat f o f o-\u003eLens cat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the setter arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Mono",
          "name": "set",
          "package": "fclabels",
          "signature": "Lens arr f o -\u003e arr (o, f) f",
          "source": "src/Data-Label-Mono.html#set",
          "type": "function"
        },
        "index": {
          "description": "Get the setter arrow from lens",
          "hierarchy": "Data Label Mono",
          "module": "Data.Label.Mono",
          "name": "set",
          "normalized": "Lens a b c-\u003ea(c,b)b",
          "package": "fclabels",
          "signature": "Lens arr f o-\u003earr(o,f)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Mono.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonomorphic lenses where the getters and updates can potentially silently\nfail. Partial lenses are useful for creating accessor labels for multi\nconstructor data types where projection and modification of fields will not\nalways succeed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Partial",
          "name": "Partial",
          "package": "fclabels",
          "source": "src/Data-Label-Partial.html",
          "type": "module"
        },
        "index": {
          "description": "Monomorphic lenses where the getters and updates can potentially silently fail Partial lenses are useful for creating accessor labels for multi constructor data types where projection and modification of fields will not always succeed",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "Partial",
          "package": "fclabels",
          "partial": "Partial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial lens type for situations in which the accessor functions can fail.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": ":~\u003e",
          "package": "fclabels",
          "source": "src/Data-Label-Partial.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "Partial lens type for situations in which the accessor functions can fail",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": ":~\u003e",
          "package": "fclabels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that might silently fail.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "Partial",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Partial",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that might silently fail",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "Partial",
          "package": "fclabels",
          "partial": "Partial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a total lens that points to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e field into a lens that might\n fail.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "embed",
          "package": "fclabels",
          "signature": "Lens (-\u003e) (f -\u003e g) (Maybe o -\u003e Maybe i) -\u003e (f -\u003e g) :~\u003e (o -\u003e i)",
          "source": "src/Data-Label-Partial.html#embed",
          "type": "function"
        },
        "index": {
          "description": "Embed total lens that points to Maybe field into lens that might fail",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "embed",
          "normalized": "Lens(-\u003e)(a-\u003eb)(Maybe c-\u003eMaybe d)-\u003e(a-\u003eb)(c-\u003ed)",
          "package": "fclabels",
          "signature": "Lens(-\u003e)(f-\u003eg)(Maybe o-\u003eMaybe i)-\u003e(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetter for a lens that can fail. When the field to which the lens points\n is not accessible the getter returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "get",
          "package": "fclabels",
          "signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e f -\u003e Maybe o",
          "source": "src/Data-Label-Partial.html#get",
          "type": "function"
        },
        "index": {
          "description": "Getter for lens that can fail When the field to which the lens points is not accessible the getter returns Nothing",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "get",
          "normalized": "((a-\u003eb)(c-\u003ed))-\u003ea-\u003eMaybe c",
          "package": "fclabels",
          "signature": "((f-\u003eg)(o-\u003ei))-\u003ef-\u003eMaybe o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lens that can fail from a getter and a modifier that can\n themselves potentially fail.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "lens",
          "package": "fclabels",
          "signature": "(f -\u003e Maybe o)-\u003e ((o -\u003e Maybe i) -\u003e f -\u003e Maybe g)-\u003e (f -\u003e g) :~\u003e (o -\u003e i)",
          "type": "function"
        },
        "index": {
          "description": "Create lens that can fail from getter and modifier that can themselves potentially fail",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "lens",
          "normalized": "(a-\u003eMaybe b)-\u003e((b-\u003eMaybe c)-\u003ea-\u003eMaybe d)-\u003e(a-\u003ed)(b-\u003ec)",
          "package": "fclabels",
          "signature": "(f-\u003eMaybe o)-\u003e((o-\u003eMaybe i)-\u003ef-\u003eMaybe g)-\u003e(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifier for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "modify",
          "package": "fclabels",
          "signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e (o -\u003e i) -\u003e f -\u003e Maybe g",
          "source": "src/Data-Label-Partial.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modifier for lens that can fail When the field to which the lens points is not accessible this function returns Nothing",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "modify",
          "normalized": "((a-\u003eb)(c-\u003ed))-\u003e(c-\u003ed)-\u003ea-\u003eMaybe b",
          "package": "fclabels",
          "signature": "((f-\u003eg)(o-\u003ei))-\u003e(o-\u003ei)-\u003ef-\u003eMaybe g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "modify'",
          "package": "fclabels",
          "signature": "((f -\u003e f) :~\u003e (o -\u003e o)) -\u003e (o -\u003e o) -\u003e f -\u003e f",
          "source": "src/Data-Label-Partial.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "Like modify but return behaves like the identity function when the field could not be set",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "modify'",
          "normalized": "((a-\u003ea)(b-\u003eb))-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "fclabels",
          "signature": "((f-\u003ef)(o-\u003eo))-\u003e(o-\u003eo)-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetter for a lens that can fail. When the field to which the lens points\n is not accessible this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "set",
          "package": "fclabels",
          "signature": "((f -\u003e g) :~\u003e (o -\u003e i)) -\u003e i -\u003e f -\u003e Maybe g",
          "source": "src/Data-Label-Partial.html#set",
          "type": "function"
        },
        "index": {
          "description": "Setter for lens that can fail When the field to which the lens points is not accessible this function returns Nothing",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "set",
          "normalized": "((a-\u003eb)(c-\u003ed))-\u003ed-\u003ea-\u003eMaybe b",
          "package": "fclabels",
          "signature": "((f-\u003eg)(o-\u003ei))-\u003ei-\u003ef-\u003eMaybe g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e but return behaves like the identity function when the field\n could not be set.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "set'",
          "package": "fclabels",
          "signature": "((f -\u003e f) :~\u003e (o -\u003e o)) -\u003e o -\u003e f -\u003e f",
          "source": "src/Data-Label-Partial.html#set%27",
          "type": "function"
        },
        "index": {
          "description": "Like set but return behaves like the identity function when the field could not be set",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "set'",
          "normalized": "((a-\u003ea)(b-\u003eb))-\u003eb-\u003ea-\u003ea",
          "package": "fclabels",
          "signature": "((f-\u003ef)(o-\u003eo))-\u003eo-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:set-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e, but update allows, depending on the underlying lens, to\n remove items by modifying to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Partial",
          "name": "update",
          "package": "fclabels",
          "signature": "((f -\u003e b) :~\u003e (o -\u003e i)) -\u003e (o -\u003e Maybe i) -\u003e f -\u003e Maybe b",
          "source": "src/Data-Label-Partial.html#update",
          "type": "function"
        },
        "index": {
          "description": "Like modify but update allows depending on the underlying lens to remove items by modifying to Nothing",
          "hierarchy": "Data Label Partial",
          "module": "Data.Label.Partial",
          "name": "update",
          "normalized": "((a-\u003eb)(c-\u003ed))-\u003e(c-\u003eMaybe d)-\u003ea-\u003eMaybe b",
          "package": "fclabels",
          "signature": "((f-\u003eb)(o-\u003ei))-\u003e(o-\u003eMaybe i)-\u003ef-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Partial.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Point data type which generalizes the different lenses and forms the\nbasis for vertical composition using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Point",
          "name": "Point",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html",
          "type": "module"
        },
        "index": {
          "description": "The Point data type which generalizes the different lenses and forms the basis for vertical composition using the Applicative type class",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Point",
          "package": "fclabels",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ArrowFail class is similar to \u003ccode\u003e\u003ca\u003eArrowZero\u003c/a\u003e\u003c/code\u003e, but additionally embeds\n some error value in the computation instead of throwing it away.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "ArrowFail",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#ArrowFail",
          "type": "class"
        },
        "index": {
          "description": "The ArrowFail class is similar to ArrowZero but additionally embeds some error value in the computation instead of throwing it away",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "ArrowFail",
          "package": "fclabels",
          "partial": "Arrow Fail",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:ArrowFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that might fail with some error.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "Failing",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Failing",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that might fail with some error",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Failing",
          "package": "fclabels",
          "partial": "Failing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Failing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism is like a \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e that works in two directions.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "Iso",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Iso",
          "type": "data"
        },
        "index": {
          "description": "An isomorphism is like Category that works in two directions",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Iso",
          "package": "fclabels",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that might silently fail.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "Partial",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Partial",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that might silently fail",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Partial",
          "package": "fclabels",
          "partial": "Partial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract Point datatype. The getter and modifier operations work in some\n category. The type of the value pointed to might change, thereby changing\n the type of the outer structure.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "Point",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Point",
          "type": "data"
        },
        "index": {
          "description": "Abstract Point datatype The getter and modifier operations work in some category The type of the value pointed to might change thereby changing the type of the outer structure",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Point",
          "package": "fclabels",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that always produce an output.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "Total",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Total",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that always produce an output",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Total",
          "package": "fclabels",
          "partial": "Total",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#t:Total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Label.Point\",\"Data.Label\"]",
          "name": "Iso",
          "package": "fclabels",
          "signature": "Iso",
          "source": "src/Data-Label-Point.html#Iso",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:Iso\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:Iso\"]"
        },
        "index": {
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Iso",
          "package": "fclabels",
          "partial": "Iso",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Point",
          "name": "Point",
          "package": "fclabels",
          "signature": "Point (cat f o) (cat (cat o i, f) g)",
          "source": "src/Data-Label-Point.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "Point",
          "normalized": "Point(a b c)(a(a c d,b)e)",
          "package": "fclabels",
          "partial": "Point",
          "signature": "Point(cat f o)(cat(cat o i,f)g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Label.Point\",\"Data.Label\"]",
          "name": "bw",
          "package": "fclabels",
          "signature": "cat o i",
          "source": "src/Data-Label-Point.html#Iso",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:bw\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:bw\"]"
        },
        "index": {
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "bw",
          "package": "fclabels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:bw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint composition.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "compose",
          "package": "fclabels",
          "signature": "Point cat t i b o -\u003e Point cat g t f b -\u003e Point cat g i f o",
          "source": "src/Data-Label-Point.html#compose",
          "type": "function"
        },
        "index": {
          "description": "Point composition",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "compose",
          "normalized": "Point a b c d e-\u003ePoint a f b g d-\u003ePoint a f c g e",
          "package": "fclabels",
          "signature": "Point cat t i b o-\u003ePoint cat g t f b-\u003ePoint cat g i f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Point",
          "name": "failArrow",
          "package": "fclabels",
          "signature": "a e c",
          "source": "src/Data-Label-Point.html#failArrow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "failArrow",
          "package": "fclabels",
          "partial": "Arrow",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:failArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Label.Point\",\"Data.Label\"]",
          "name": "fw",
          "package": "fclabels",
          "signature": "cat i o",
          "source": "src/Data-Label-Point.html#Iso",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:fw\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:fw\"]"
        },
        "index": {
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "fw",
          "package": "fclabels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:fw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the getter category from a Point.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "get",
          "package": "fclabels",
          "signature": "Point cat g i f o -\u003e cat f o",
          "source": "src/Data-Label-Point.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the getter category from Point",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "get",
          "normalized": "Point a b c d e-\u003ea d e",
          "package": "fclabels",
          "signature": "Point cat g i f o-\u003ecat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity Point. Cannot change the type.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "identity",
          "package": "fclabels",
          "signature": "Point arr f f o o",
          "source": "src/Data-Label-Point.html#identity",
          "type": "function"
        },
        "index": {
          "description": "Identity Point Cannot change the type",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "identity",
          "package": "fclabels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip an isomorphism.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Point\",\"Data.Label\"]",
          "name": "inv",
          "package": "fclabels",
          "signature": "Iso cat i o -\u003e Iso cat o i",
          "source": "src/Data-Label-Point.html#inv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:inv\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:inv\"]"
        },
        "index": {
          "description": "Flip an isomorphism",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "inv",
          "normalized": "Iso a b c-\u003eIso a c b",
          "package": "fclabels",
          "signature": "Iso cat i o-\u003eIso cat o i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the modifier category from a Point.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "modify",
          "package": "fclabels",
          "signature": "Point cat g i f o -\u003e cat (cat o i, f) g",
          "source": "src/Data-Label-Point.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Get the modifier category from Point",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "modify",
          "normalized": "Point a b c d e-\u003ea(a e c,d)b",
          "package": "fclabels",
          "signature": "Point cat g i f o-\u003ecat(cat o i,f)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the setter category from a Point.\n\u003c/p\u003e",
          "module": "Data.Label.Point",
          "name": "set",
          "package": "fclabels",
          "signature": "Point arr g i f o -\u003e arr (i, f) g",
          "source": "src/Data-Label-Point.html#set",
          "type": "function"
        },
        "index": {
          "description": "Get the setter category from Point",
          "hierarchy": "Data Label Point",
          "module": "Data.Label.Point",
          "name": "set",
          "normalized": "Point a b c d e-\u003ea(c,d)b",
          "package": "fclabels",
          "signature": "Point arr g i f o-\u003earr(i,f)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Point.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses that allow polymorphic updates. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Poly",
          "name": "Poly",
          "package": "fclabels",
          "source": "src/Data-Label-Poly.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses that allow polymorphic updates",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "Poly",
          "package": "fclabels",
          "partial": "Poly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract polymorphic lens datatype. The getter and setter functions work\n in some category. Categories allow for effectful lenses, for example, lenses\n that might fail or use state.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "Lens",
          "package": "fclabels",
          "source": "src/Data-Label-Poly.html#Lens",
          "type": "data"
        },
        "index": {
          "description": "Abstract polymorphic lens datatype The getter and setter functions work in some category Categories allow for effectful lenses for example lenses that might fail or use state",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "Lens",
          "package": "fclabels",
          "partial": "Lens",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a Lens output diverge by changing the input of the modifier. The\n operator can be read as \u003cem\u003epoints-to\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Poly\",\"Data.Label\"]",
          "name": "(\u003e-)",
          "package": "fclabels",
          "signature": "Lens arr (j -\u003e a) (i -\u003e b) -\u003e Lens arr (f -\u003e g) (o -\u003e i) -\u003e Point arr g j f o",
          "source": "src/Data-Label-Poly.html#%3E-",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:-62--45-\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:-62--45-\"]"
        },
        "index": {
          "description": "Make Lens output diverge by changing the input of the modifier The operator can be read as points-to",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "(\u003e-) \u003e-",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003eLens a(f-\u003eg)(h-\u003ed)-\u003ePoint a g b f h",
          "package": "fclabels",
          "signature": "Lens arr(j-\u003ea)(i-\u003eb)-\u003eLens arr(f-\u003eg)(o-\u003ei)-\u003ePoint arr g j f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:-62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the getter arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "get",
          "package": "fclabels",
          "signature": "Lens cat (f -\u003e g) (o -\u003e i) -\u003e cat f o",
          "source": "src/Data-Label-Poly.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the getter arrow from lens",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "get",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea b d",
          "package": "fclabels",
          "signature": "Lens cat(f-\u003eg)(o-\u003ei)-\u003ecat f o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a polymorphic isomorphism into a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe isomorphism needs to be passed in twice to properly unify.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "iso",
          "package": "fclabels",
          "signature": "Iso cat f o -\u003e Iso cat g i -\u003e Lens cat (f -\u003e g) (o -\u003e i)",
          "source": "src/Data-Label-Poly.html#iso",
          "type": "function"
        },
        "index": {
          "description": "Lift polymorphic isomorphism into Lens The isomorphism needs to be passed in twice to properly unify",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "iso",
          "normalized": "Iso a b c-\u003eIso a d e-\u003eLens a(b-\u003ed)(c-\u003ee)",
          "package": "fclabels",
          "signature": "Iso cat f o-\u003eIso cat g i-\u003eLens cat(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lens out of a getter and setter.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "lens",
          "package": "fclabels",
          "signature": "cat f o-\u003e cat (cat o i, f) g-\u003e Lens cat (f -\u003e g) (o -\u003e i)",
          "type": "function"
        },
        "index": {
          "description": "Create lens out of getter and setter",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "lens",
          "normalized": "a b c-\u003ea(a c d,b)e-\u003eLens a(b-\u003ee)(c-\u003ed)",
          "package": "fclabels",
          "signature": "cat f o-\u003ecat(cat o i,f)g-\u003eLens cat(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the modifier arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "modify",
          "package": "fclabels",
          "signature": "Lens cat (f -\u003e g) (o -\u003e i) -\u003e cat (cat o i, f) g",
          "source": "src/Data-Label-Poly.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Get the modifier arrow from lens",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "modify",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea(a d e,b)c",
          "package": "fclabels",
          "signature": "Lens cat(f-\u003eg)(o-\u003ei)-\u003ecat(cat o i,f)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate lens from a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Label.Poly\",\"Data.Label\"]",
          "name": "point",
          "package": "fclabels",
          "signature": "Point cat g i f o -\u003e Lens cat (f -\u003e g) (o -\u003e i)",
          "source": "src/Data-Label-Poly.html#point",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:point\",\"http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:point\"]"
        },
        "index": {
          "description": "Create lens from Point",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "point",
          "normalized": "Point a b c d e-\u003eLens a(d-\u003eb)(e-\u003ec)",
          "package": "fclabels",
          "signature": "Point cat g i f o-\u003eLens cat(f-\u003eg)(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the setter arrow from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Poly",
          "name": "set",
          "package": "fclabels",
          "signature": "Lens arr (f -\u003e g) (o -\u003e i) -\u003e arr (i, f) g",
          "source": "src/Data-Label-Poly.html#set",
          "type": "function"
        },
        "index": {
          "description": "Get the setter arrow from lens",
          "hierarchy": "Data Label Poly",
          "module": "Data.Label.Poly",
          "name": "set",
          "normalized": "Lens a(b-\u003ec)(d-\u003ee)-\u003ea(e,b)c",
          "package": "fclabels",
          "signature": "Lens arr(f-\u003eg)(o-\u003ei)-\u003earr(i,f)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Poly.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault lenses for simple total getters and total possibly polymorphic,\nupdates. Useful for creating accessor labels for single constructor datatypes.\nAlso useful field labels that are shared between all the constructors of a\nmulti constructor datatypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Total",
          "name": "Total",
          "package": "fclabels",
          "source": "src/Data-Label-Total.html",
          "type": "module"
        },
        "index": {
          "description": "Default lenses for simple total getters and total possibly polymorphic updates Useful for creating accessor labels for single constructor datatypes Also useful field labels that are shared between all the constructors of multi constructor datatypes",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "Total",
          "package": "fclabels",
          "partial": "Total",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal lens type specialized for total accessor functions.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": ":-\u003e",
          "package": "fclabels",
          "source": "src/Data-Label-Total.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "Total lens type specialized for total accessor functions",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": ":-\u003e",
          "package": "fclabels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext that represents computations that always produce an output.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": "Total",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Total",
          "type": "type"
        },
        "index": {
          "description": "Context that represents computations that always produce an output",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "Total",
          "package": "fclabels",
          "partial": "Total",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#t:Total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the getter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": "get",
          "package": "fclabels",
          "signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e f -\u003e o",
          "source": "src/Data-Label-Total.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the getter function from lens",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "get",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003ea-\u003ec",
          "package": "fclabels",
          "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003ef-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a total lens from a getter and a modifier.\n\u003c/p\u003e\u003cp\u003eWe expect the following law to hold:\n\u003c/p\u003e\u003cpre\u003e get l (set l a f) == a\n\u003c/pre\u003e\u003cpre\u003e set l (get l f) f == f\n\u003c/pre\u003e",
          "module": "Data.Label.Total",
          "name": "lens",
          "package": "fclabels",
          "signature": "(f -\u003e o)-\u003e ((o -\u003e i) -\u003e f -\u003e g)-\u003e (f -\u003e g) :-\u003e (o -\u003e i)",
          "type": "function"
        },
        "index": {
          "description": "Create total lens from getter and modifier We expect the following law to hold get set set get",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e((b-\u003ec)-\u003ea-\u003ed)-\u003e(a-\u003ed)-\u003e(b-\u003ec)",
          "package": "fclabels",
          "signature": "(f-\u003eo)-\u003e((o-\u003ei)-\u003ef-\u003eg)-\u003e(f-\u003eg)-\u003e(o-\u003ei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted lens composition.\n\u003c/p\u003e\u003cp\u003eFor example, useful when specialized to lists:\n\u003c/p\u003e\u003cpre\u003e :: (f :-\u003e [o])\n -\u003e (o :-\u003e [a])\n -\u003e (f :-\u003e [a])\n\u003c/pre\u003e",
          "module": "Data.Label.Total",
          "name": "lifted",
          "package": "fclabels",
          "signature": "((f -\u003e g) :-\u003e (m o -\u003e m i)) -\u003e ((o -\u003e i) :-\u003e (m a -\u003e m b)) -\u003e (f -\u003e g) :-\u003e (m a -\u003e m b)",
          "source": "src/Data-Label-Total.html#lifted",
          "type": "function"
        },
        "index": {
          "description": "Lifted lens composition For example useful when specialized to lists",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "lifted",
          "normalized": "((a-\u003eb)-\u003e(c d-\u003ec e))-\u003e((d-\u003ee)-\u003e(c f-\u003ec g))-\u003e(a-\u003eb)-\u003e(c f-\u003ec g)",
          "package": "fclabels",
          "signature": "((f-\u003eg)-\u003e(m o-\u003em i))-\u003e((o-\u003ei)-\u003e(m a-\u003em b))-\u003e(f-\u003eg)-\u003e(m a-\u003em b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:lifted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the modifier function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": "modify",
          "package": "fclabels",
          "signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e (o -\u003e i) -\u003e f -\u003e g",
          "source": "src/Data-Label-Total.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Get the modifier function from lens",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "modify",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003e(c-\u003ed)-\u003ea-\u003eb",
          "package": "fclabels",
          "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003e(o-\u003ei)-\u003ef-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the setter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": "set",
          "package": "fclabels",
          "signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e i -\u003e f -\u003e g",
          "source": "src/Data-Label-Total.html#set",
          "type": "function"
        },
        "index": {
          "description": "Get the setter function from lens",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "set",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003ed-\u003ea-\u003eb",
          "package": "fclabels",
          "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003ei-\u003ef-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify in some context.\n\u003c/p\u003e",
          "module": "Data.Label.Total",
          "name": "traverse",
          "package": "fclabels",
          "signature": "((f -\u003e g) :-\u003e (o -\u003e i)) -\u003e (o -\u003e m i) -\u003e f -\u003e m g",
          "source": "src/Data-Label-Total.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Modify in some context",
          "hierarchy": "Data Label Total",
          "module": "Data.Label.Total",
          "name": "traverse",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed))-\u003e(c-\u003ee d)-\u003ea-\u003ee b",
          "package": "fclabels",
          "signature": "((f-\u003eg)-\u003e(o-\u003ei))-\u003e(o-\u003em i)-\u003ef-\u003em g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label-Total.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides first class labels that can act as bidirectional record\nfields. The labels can be derived automatically using Template Haskell which\nmeans you don't have to write any boilerplate yourself. The labels are\nimplemented as lenses and are fully composable. Labels can be used to \u003cem\u003eget\u003c/em\u003e,\n\u003cem\u003eset\u003c/em\u003e and \u003cem\u003emodify\u003c/em\u003e parts of a datatype in a consistent way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label",
          "name": "Label",
          "package": "fclabels",
          "source": "src/Data-Label.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides first class labels that can act as bidirectional record fields The labels can be derived automatically using Template Haskell which means you don have to write any boilerplate yourself The labels are implemented as lenses and are fully composable Labels can be used to get set and modify parts of datatype in consistent way",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "Label",
          "package": "fclabels",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal monomorphic lens.\n\u003c/p\u003e",
          "module": "Data.Label",
          "name": ":-\u003e",
          "package": "fclabels",
          "source": "src/Data-Label-Mono.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "Total monomorphic lens",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": ":-\u003e",
          "package": "fclabels",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism is like a \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e that works in two directions.\n\u003c/p\u003e",
          "module": "Data.Label",
          "name": "Iso",
          "package": "fclabels",
          "source": "src/Data-Label-Point.html#Iso",
          "type": "data"
        },
        "index": {
          "description": "An isomorphism is like Category that works in two directions",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "Iso",
          "package": "fclabels",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the getter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label",
          "name": "get",
          "package": "fclabels",
          "signature": "(f :-\u003e a) -\u003e f -\u003e a",
          "source": "src/Data-Label.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the getter function from lens",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "get",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "fclabels",
          "signature": "(f-\u003ea)-\u003ef-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a total lens from a getter and a modifier.\n\u003c/p\u003e\u003cp\u003eWe expect the following law to hold:\n\u003c/p\u003e\u003cpre\u003e get l (modify l m f) == m (get l f)\n\u003c/pre\u003e",
          "module": "Data.Label",
          "name": "lens",
          "package": "fclabels",
          "signature": "(f -\u003e a)-\u003e ((a -\u003e a) -\u003e f -\u003e f)-\u003e f :-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Create total lens from getter and modifier We expect the following law to hold get modify get",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e((b-\u003eb)-\u003ea-\u003ea)-\u003ea-\u003eb",
          "package": "fclabels",
          "signature": "(f-\u003ea)-\u003e((a-\u003ea)-\u003ef-\u003ef)-\u003ef-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the modifier function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label",
          "name": "modify",
          "package": "fclabels",
          "signature": "(f :-\u003e a) -\u003e (a -\u003e a) -\u003e f -\u003e f",
          "source": "src/Data-Label.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Get the modifier function from lens",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "modify",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "fclabels",
          "signature": "(f-\u003ea)-\u003e(a-\u003ea)-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the setter function from a lens.\n\u003c/p\u003e",
          "module": "Data.Label",
          "name": "set",
          "package": "fclabels",
          "signature": "(f :-\u003e a) -\u003e a -\u003e f -\u003e f",
          "source": "src/Data-Label.html#set",
          "type": "function"
        },
        "index": {
          "description": "Get the setter function from lens",
          "hierarchy": "Data Label",
          "module": "Data.Label",
          "name": "set",
          "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003ea",
          "package": "fclabels",
          "signature": "(f-\u003ea)-\u003ea-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fclabels/docs/Data-Label.html#v:set"
      }
    }
  ]
]