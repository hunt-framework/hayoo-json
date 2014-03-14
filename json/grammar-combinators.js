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
        "word": "grammar-combinators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "Domain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "Domain",
          "package": "grammar-combinators",
          "partial": "Domain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "ApplyIxMap",
          "package": "grammar-combinators",
          "signature": "ApplyIxMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "ApplyIxMap",
          "package": "grammar-combinators",
          "partial": "Apply Ix Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:ApplyIxMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decent Domain \u003ccode\u003ephi\u003c/code\u003e should instantiate the \u003ccode\u003e\u003ca\u003eFoldFam\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShowFam\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEqFam\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMemoFam\u003c/a\u003e\u003c/code\u003e. Avoid\n using this type class in constraints, use more specific type classes whenever possible.\n\u003c/p\u003e\u003cp\u003eNote: instances for this type class are not automatically derived, and you have to manually instantiate \n it with an empty implementation block.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "Domain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#Domain",
          "type": "class"
        },
        "index": {
          "description": "decent Domain phi should instantiate the FoldFam ShowFam EqFam and MemoFam Avoid using this type class in constraints use more specific type classes whenever possible Note instances for this type class are not automatically derived and you have to manually instantiate it with an empty implementation block",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "Domain",
          "package": "grammar-combinators",
          "partial": "Domain",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "DomainEmbedding",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#DomainEmbedding",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "DomainEmbedding",
          "package": "grammar-combinators",
          "partial": "Domain Embedding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:DomainEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "DomainMap",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#DomainMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "DomainMap",
          "package": "grammar-combinators",
          "partial": "Domain Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:DomainMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "EitherFunctor",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#EitherFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "EitherFunctor",
          "package": "grammar-combinators",
          "partial": "Either Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:EitherFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA domain \u003ccode\u003ephi\u003c/code\u003e that is an instance of the \u003ccode\u003e\u003ca\u003eEqFam\u003c/a\u003e\u003c/code\u003e type class supports \n overriding a function over the full domain at a single non-terminal using \n the |overrideIdx| function.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "EqFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#EqFam",
          "type": "class"
        },
        "index": {
          "description": "domain phi that is an instance of the EqFam type class supports overriding function over the full domain at single non-terminal using the overrideIdx function",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "EqFam",
          "package": "grammar-combinators",
          "partial": "Eq Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:EqFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA domain \u003ccode\u003ephi\u003c/code\u003e that is an instance of the \u003ccode\u003e\u003ca\u003eFoldFam\u003c/a\u003e\u003c/code\u003e type class supports \n folding over all non-terminals in the domain using the \u003ccode\u003e\u003ca\u003efoldFam\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "FoldFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#FoldFam",
          "type": "class"
        },
        "index": {
          "description": "domain phi that is an instance of the FoldFam type class supports folding over all non-terminals in the domain using the foldFam function",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "FoldFam",
          "package": "grammar-combinators",
          "partial": "Fold Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:FoldFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapBase",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#IxMapBase",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapBase",
          "package": "grammar-combinators",
          "partial": "Ix Map Base",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:IxMapBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapId",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#IxMapId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapId",
          "package": "grammar-combinators",
          "partial": "Ix Map Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:IxMapId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapSeq",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#IxMapSeq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "IxMapSeq",
          "package": "grammar-combinators",
          "partial": "Ix Map Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:IxMapSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#LeftIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftIx",
          "package": "grammar-combinators",
          "partial": "Left Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:LeftIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LiftFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#LiftFam",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LiftFam",
          "package": "grammar-combinators",
          "partial": "Lift Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:LiftFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MemoFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#MemoFam",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MemoFam",
          "package": "grammar-combinators",
          "partial": "Memo Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:MemoFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MergeDomain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#MergeDomain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MergeDomain",
          "package": "grammar-combinators",
          "partial": "Merge Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:MergeDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#RightIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightIx",
          "package": "grammar-combinators",
          "partial": "Right Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:RightIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA domain \u003ccode\u003ephi\u003c/code\u003e that is an instance of the \u003ccode\u003e\u003ca\u003eShowFam\u003c/a\u003e\u003c/code\u003e type class supports \n conversion of non-terminal proof terms to Strings using the \u003ccode\u003e\u003ca\u003eshowIdx\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "ShowFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#ShowFam",
          "type": "class"
        },
        "index": {
          "description": "domain phi that is an instance of the ShowFam type class supports conversion of non-terminal proof terms to Strings using the showIdx function",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "ShowFam",
          "package": "grammar-combinators",
          "partial": "Show Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:ShowFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic wrapper type that restricts a semantic value family over a bigger domain\n to a smaller domain.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "SubVal",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#SubVal",
          "type": "data"
        },
        "index": {
          "description": "generic wrapper type that restricts semantic value family over bigger domain to smaller domain",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "SubVal",
          "package": "grammar-combinators",
          "partial": "Sub Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#t:SubVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftIdx",
          "package": "grammar-combinators",
          "signature": "phiL ix -\u003e MergeDomain phiL phiR (LeftIx ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#MergeDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftIdx",
          "normalized": "a b-\u003eMergeDomain a c(LeftIx b)",
          "package": "grammar-combinators",
          "partial": "Left Idx",
          "signature": "phiL ix-\u003eMergeDomain phiL phiR(LeftIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:LeftIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftR",
          "package": "grammar-combinators",
          "signature": "rL ix -\u003e EitherFunctor rL rR (LeftIx ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#EitherFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "LeftR",
          "normalized": "a b-\u003eEitherFunctor a c(LeftIx b)",
          "package": "grammar-combinators",
          "partial": "Left",
          "signature": "rL ix-\u003eEitherFunctor rL rR(LeftIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:LeftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MkSubVal",
          "package": "grammar-combinators",
          "signature": "MkSubVal",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#SubVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "MkSubVal",
          "package": "grammar-combinators",
          "partial": "Mk Sub Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:MkSubVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightIdx",
          "package": "grammar-combinators",
          "signature": "phiR ix -\u003e MergeDomain phiL phiR (RightIx ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#MergeDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightIdx",
          "normalized": "a b-\u003eMergeDomain c a(RightIx b)",
          "package": "grammar-combinators",
          "partial": "Right Idx",
          "signature": "phiR ix-\u003eMergeDomain phiL phiR(RightIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:RightIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightR",
          "package": "grammar-combinators",
          "signature": "rR ix -\u003e EitherFunctor rL rR (RightIx ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#EitherFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "RightR",
          "normalized": "a b-\u003eEitherFunctor c a(RightIx b)",
          "package": "grammar-combinators",
          "partial": "Right",
          "signature": "rR ix-\u003eEitherFunctor rL rR(RightIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:RightR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest equality of two given non-terminal proof terms.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "eqIdx",
          "package": "grammar-combinators",
          "signature": "forall ix1 ix2.  phi ix1 -\u003e phi ix2 -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#eqIdx",
          "type": "method"
        },
        "index": {
          "description": "Test equality of two given non-terminal proof terms",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "eqIdx",
          "normalized": "a b b c b-\u003ec b-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "forall ix ix phi ix-\u003ephi ix-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:eqIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a given function over all non-terminals in the domain \u003ccode\u003ephi\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "foldFam",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e b -\u003e b) -\u003e b -\u003e b",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#foldFam",
          "type": "method"
        },
        "index": {
          "description": "Fold given function over all non-terminals in the domain phi",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "foldFam",
          "normalized": "(a b c d-\u003ee-\u003ee)-\u003ee-\u003ee",
          "package": "grammar-combinators",
          "partial": "Fam",
          "signature": "(forall ix. phi ix-\u003eb-\u003eb)-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:foldFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "fromMemo",
          "package": "grammar-combinators",
          "signature": "Memo phi v -\u003e forall ix.  phi ix -\u003e v ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#fromMemo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "fromMemo",
          "normalized": "Memo a b-\u003ec d a e-\u003eb e",
          "package": "grammar-combinators",
          "partial": "Memo",
          "signature": "Memo phi v-\u003eforall ix. phi ix-\u003ev ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:fromMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "fromMemoK",
          "package": "grammar-combinators",
          "signature": "Memo phi (K0 v) -\u003e phi ix -\u003e v",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#fromMemoK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "fromMemoK",
          "normalized": "Memo a(K b)-\u003ea c-\u003eb",
          "package": "grammar-combinators",
          "partial": "Memo",
          "signature": "Memo phi(K v)-\u003ephi ix-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:fromMemoK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "liftIdxE",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e Exp",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#liftIdxE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "liftIdxE",
          "normalized": "a b-\u003eExp",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "phi ix-\u003eExp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:liftIdxE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "liftIdxP",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e Pat",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#liftIdxP",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "liftIdxP",
          "normalized": "a b-\u003ePat",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "phi ix-\u003ePat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:liftIdxP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "memoFamily",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e v ix) -\u003e forall ix.  phi ix -\u003e v ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#memoFamily",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "memoFamily",
          "normalized": "(a b c d-\u003ee d)-\u003ea b c d-\u003ee d",
          "package": "grammar-combinators",
          "partial": "Family",
          "signature": "(forall ix. phi ix-\u003ev ix)-\u003eforall ix. phi ix-\u003ev ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:memoFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "memoFamilyK",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e v) -\u003e forall ix.  phi ix -\u003e v",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#memoFamilyK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "memoFamilyK",
          "normalized": "(a b c d-\u003ee)-\u003ea b c d-\u003ee",
          "package": "grammar-combinators",
          "partial": "Family",
          "signature": "(forall ix. phi ix-\u003ev)-\u003eforall ix. phi ix-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:memoFamilyK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride a function over the full domain at a single non-terminal.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "overrideIdx",
          "package": "grammar-combinators",
          "signature": "(forall ix'.  phi ix' -\u003e r ix') -\u003e phi oix -\u003e r oix -\u003e phi ix -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#overrideIdx",
          "type": "method"
        },
        "index": {
          "description": "Override function over the full domain at single non-terminal",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "overrideIdx",
          "normalized": "(a b c d-\u003ee d)-\u003ec f-\u003ee f-\u003ec g-\u003ee g",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "(forall ix'. phi ix'-\u003er ix')-\u003ephi oix-\u003er oix-\u003ephi ix-\u003er ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:overrideIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003e\u003ca\u003eoverrideIdx\u003c/a\u003e\u003c/code\u003e function, but limited to functions whose result type is \n the same for all non-terminals.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "overrideIdxK",
          "package": "grammar-combinators",
          "signature": "(forall ix'.  phi ix' -\u003e v) -\u003e phi oix -\u003e v -\u003e phi ix -\u003e v",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#overrideIdxK",
          "type": "function"
        },
        "index": {
          "description": "Similar to the overrideIdx function but limited to functions whose result type is the same for all non-terminals",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "overrideIdxK",
          "normalized": "(a b c d-\u003ee)-\u003ec f-\u003ee-\u003ec g-\u003ee",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "(forall ix'. phi ix'-\u003ev)-\u003ephi oix-\u003ev-\u003ephi ix-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:overrideIdxK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a given non-terminal proof term to a String representation.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "showIdx",
          "package": "grammar-combinators",
          "signature": "forall ix.  phi ix -\u003e String",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#showIdx",
          "type": "method"
        },
        "index": {
          "description": "Convert given non-terminal proof term to String representation",
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "showIdx",
          "normalized": "a b c d-\u003eString",
          "package": "grammar-combinators",
          "partial": "Idx",
          "signature": "forall ix. phi ix-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:showIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "subIx",
          "package": "grammar-combinators",
          "signature": "phi (supIxT ix) -\u003e phi' ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#subIx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "subIx",
          "normalized": "a(b c)-\u003ed c",
          "package": "grammar-combinators",
          "partial": "Ix",
          "signature": "phi(supIxT ix)-\u003ephi' ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:subIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "supIx",
          "package": "grammar-combinators",
          "signature": "phi' ix -\u003e phi (supIxT ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#supIx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "supIx",
          "normalized": "a b-\u003ec(d b)",
          "package": "grammar-combinators",
          "partial": "Ix",
          "signature": "phi' ix-\u003ephi(supIxT ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:supIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "supPF",
          "package": "grammar-combinators",
          "signature": "phi' ix -\u003e phi (supIxT ix) -\u003e PF phi' (SubVal supIxT r) ix -\u003e PF phi r (supIxT ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#supPF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "supPF",
          "normalized": "a b-\u003ec(d b)-\u003ePF a(SubVal d e)b-\u003ePF c e(d b)",
          "package": "grammar-combinators",
          "partial": "PF",
          "signature": "phi' ix-\u003ephi(supIxT ix)-\u003ePF phi'(SubVal supIxT r)ix-\u003ePF phi r(supIxT ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:supPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "toMemo",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e v ix) -\u003e Memo phi v",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#toMemo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "toMemo",
          "normalized": "(a b c d-\u003ee d)-\u003eMemo c e",
          "package": "grammar-combinators",
          "partial": "Memo",
          "signature": "(forall ix. phi ix-\u003ev ix)-\u003eMemo phi v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:toMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "toMemoK",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e v) -\u003e Memo phi (K0 v)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#toMemoK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "toMemoK",
          "normalized": "(a b c d-\u003ee)-\u003eMemo c(K e)",
          "package": "grammar-combinators",
          "partial": "Memo",
          "signature": "(forall ix. phi ix-\u003ev)-\u003eMemo phi(K v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:toMemoK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unLeftR",
          "package": "grammar-combinators",
          "signature": "EitherFunctor rL rR (LeftIx ix) -\u003e rL ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#unLeftR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unLeftR",
          "normalized": "EitherFunctor a b(LeftIx c)-\u003ea c",
          "package": "grammar-combinators",
          "partial": "Left",
          "signature": "EitherFunctor rL rR(LeftIx ix)-\u003erL ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:unLeftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unRightR",
          "package": "grammar-combinators",
          "signature": "EitherFunctor rL rR (RightIx ix) -\u003e rR ix",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#unRightR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unRightR",
          "normalized": "EitherFunctor a b(RightIx c)-\u003eb c",
          "package": "grammar-combinators",
          "partial": "Right",
          "signature": "EitherFunctor rL rR(RightIx ix)-\u003erR ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:unRightR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unSubVal",
          "package": "grammar-combinators",
          "signature": "v (supIxT ix)",
          "source": "src/Text-GrammarCombinators-Base-Domain.html#SubVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Domain",
          "module": "Text.GrammarCombinators.Base.Domain",
          "name": "unSubVal",
          "package": "grammar-combinators",
          "partial": "Sub Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Domain.html#v:unSubVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "Grammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "Grammar",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "AGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#AGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "AGrammar",
          "package": "grammar-combinators",
          "partial": "AGrammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:AGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "AnyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#AnyExtendedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "AnyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Any Extended Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:AnyExtendedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#BiasedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Biased Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:BiasedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#BiasedExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Biased Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:BiasedExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#BiasedExtendedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Biased Extended Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:BiasedExtendedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedLiftableContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#BiasedExtendedLiftableContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedExtendedLiftableContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Biased Extended Liftable Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:BiasedExtendedLiftableContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedRegularRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#BiasedRegularRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "BiasedRegularRule",
          "package": "grammar-combinators",
          "partial": "Biased Regular Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:BiasedRegularRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ExtendedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Extended Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ExtendedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedLiftableContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ExtendedLiftableContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ExtendedLiftableContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Extended Liftable Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ExtendedLiftableContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GAnyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GAnyExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GAnyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GAny Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GAnyExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GBiasedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GBiasedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GBiasedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GBiased Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GBiasedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GBiasedExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GBiased Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GBiasedExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GContext Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GExtended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GGrammar",
          "package": "grammar-combinators",
          "partial": "GGrammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLAnyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GLAnyExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLAnyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GLAny Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GLAnyExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GLContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GLContext Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GLContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GLExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GLExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GLExtended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GLExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GPenaltyContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GPenaltyContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GPenaltyContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GPenalty Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GPenaltyContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GPenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GPenaltyExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GPenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "GPenalty Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GPenaltyExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GRegularGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#GRegularGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "GRegularGrammar",
          "package": "grammar-combinators",
          "partial": "GRegular Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:GRegularGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LAnyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#LAnyExtendedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LAnyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "LAny Extended Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:LAnyExtendedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#LContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "LContext Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:LContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#LExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "LExtended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:LExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LiftableContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#LiftableContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "LiftableContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Liftable Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:LiftableContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#PGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PGrammar",
          "package": "grammar-combinators",
          "partial": "PGrammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:PGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#PenaltyContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Penalty Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:PenaltyContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#PenaltyExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Penalty Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:PenaltyExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#PenaltyExtendedContextFreeRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyExtendedContextFreeRule",
          "package": "grammar-combinators",
          "partial": "Penalty Extended Context Free Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:PenaltyExtendedContextFreeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyRegularRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#PenaltyRegularRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "PenaltyRegularRule",
          "package": "grammar-combinators",
          "partial": "Penalty Regular Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:PenaltyRegularRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingBiasedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Biased Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingBiasedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingBiasedExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Biased Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingBiasedExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedRegularGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingBiasedRegularGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingBiasedRegularGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Biased Regular Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingBiasedRegularGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingLBiasedExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLBiasedExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing LBiased Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingLBiasedExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingLContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing LContext Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingLContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingLExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingLExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing LExtended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingLExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingPenaltyContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Penalty Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingPenaltyContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingPenaltyExtendedContextFreeGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyExtendedContextFreeGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Penalty Extended Context Free Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingPenaltyExtendedContextFreeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyRegularGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingPenaltyRegularGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingPenaltyRegularGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Penalty Regular Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingPenaltyRegularGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingRegularGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#ProcessingRegularGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "ProcessingRegularGrammar",
          "package": "grammar-combinators",
          "partial": "Processing Regular Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:ProcessingRegularGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "RegularRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Grammar.html#RegularRule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Grammar",
          "module": "Text.GrammarCombinators.Base.Grammar",
          "name": "RegularRule",
          "package": "grammar-combinators",
          "partial": "Regular Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Grammar.html#t:RegularRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "MultiRec",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "MultiRec",
          "package": "grammar-combinators",
          "partial": "Multi Rec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "IL",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html#IL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "IL",
          "package": "grammar-combinators",
          "partial": "IL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#t:IL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "SubPF",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html#SubPF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "SubPF",
          "package": "grammar-combinators",
          "partial": "Sub PF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#t:SubPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "IL",
          "package": "grammar-combinators",
          "signature": "IL",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html#IL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "IL",
          "package": "grammar-combinators",
          "partial": "IL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#v:IL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "SubPF",
          "package": "grammar-combinators",
          "signature": "phi' ix -\u003e PF phi' (SubVal supIxT r) ix -\u003e SubPF phi phi' phi' supIxT r (supIxT ix)",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html#SubPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "SubPF",
          "normalized": "a b-\u003ePF a(SubVal c d)b-\u003eSubPF e a a c d(c b)",
          "package": "grammar-combinators",
          "partial": "Sub PF",
          "signature": "phi' ix-\u003ePF phi'(SubVal supIxT r)ix-\u003eSubPF phi phi' phi' supIxT r(supIxT ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#v:SubPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "unIL",
          "package": "grammar-combinators",
          "signature": "[r xi]",
          "source": "src/Text-GrammarCombinators-Base-MultiRec.html#IL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base MultiRec",
          "module": "Text.GrammarCombinators.Base.MultiRec",
          "name": "unIL",
          "normalized": "[a b]",
          "package": "grammar-combinators",
          "partial": "IL",
          "signature": "[r xi]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-MultiRec.html#v:unIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "Processor",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Processor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "Processor",
          "package": "grammar-combinators",
          "partial": "Processor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "GProcessor",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#GProcessor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "GProcessor",
          "package": "grammar-combinators",
          "partial": "GProcessor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#t:GProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "Processor",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#Processor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "Processor",
          "package": "grammar-combinators",
          "partial": "Processor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#t:Processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given processor to a given context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessor",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t r rr -\u003e GProcessor phi rr' rr -\u003e GContextFreeGrammar phi t r rr'",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#applyProcessor",
          "type": "function"
        },
        "index": {
          "description": "Apply given processor to given context-free grammar",
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessor",
          "normalized": "GContextFreeGrammar a b c d-\u003eGProcessor a e d-\u003eGContextFreeGrammar a b c e",
          "package": "grammar-combinators",
          "partial": "Processor",
          "signature": "GContextFreeGrammar phi t r rr-\u003eGProcessor phi rr' rr-\u003eGContextFreeGrammar phi t r rr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:applyProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessor'",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e p (r ix)) -\u003e GProcessor phi r' r -\u003e forall ix.  phi ix -\u003e p (r' ix)",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#applyProcessor%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessor'",
          "normalized": "(a b c d-\u003ee(f d))-\u003eGProcessor c g f-\u003ea b c d-\u003ee(g d)",
          "package": "grammar-combinators",
          "partial": "Processor'",
          "signature": "(forall ix. phi ix-\u003ep(r ix))-\u003eGProcessor phi r' r-\u003eforall ix. phi ix-\u003ep(r' ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:applyProcessor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given processor to a given extended context-free\n grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorE",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e GProcessor phi rr' rr -\u003e GExtendedContextFreeGrammar phi t r rr'",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#applyProcessorE",
          "type": "function"
        },
        "index": {
          "description": "Apply given processor to given extended context-free grammar",
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorE",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eGProcessor a e d-\u003eGExtendedContextFreeGrammar a b c e",
          "package": "grammar-combinators",
          "partial": "Processor",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eGProcessor phi rr' rr-\u003eGExtendedContextFreeGrammar phi t r rr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:applyProcessorE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorL",
          "package": "grammar-combinators",
          "signature": "GLContextFreeGrammar phi t r rr -\u003e GProcessor phi rr' rr -\u003e Q Exp -\u003e GLContextFreeGrammar phi t r rr'",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#applyProcessorL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorL",
          "normalized": "GLContextFreeGrammar a b c d-\u003eGProcessor a e d-\u003eQ Exp-\u003eGLContextFreeGrammar a b c e",
          "package": "grammar-combinators",
          "partial": "Processor",
          "signature": "GLContextFreeGrammar phi t r rr-\u003eGProcessor phi rr' rr-\u003eQ Exp-\u003eGLContextFreeGrammar phi t r rr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:applyProcessorL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given processor to a given extended liftable context-free\n grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorLE",
          "package": "grammar-combinators",
          "signature": "GLExtendedContextFreeGrammar phi t r rr -\u003e GProcessor phi rr' rr -\u003e Q Exp -\u003e GLExtendedContextFreeGrammar phi t r rr'",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#applyProcessorLE",
          "type": "function"
        },
        "index": {
          "description": "Apply given processor to given extended liftable context-free grammar",
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "applyProcessorLE",
          "normalized": "GLExtendedContextFreeGrammar a b c d-\u003eGProcessor a e d-\u003eQ Exp-\u003eGLExtendedContextFreeGrammar a b c e",
          "package": "grammar-combinators",
          "partial": "Processor LE",
          "signature": "GLExtendedContextFreeGrammar phi t r rr-\u003eGProcessor phi rr' rr-\u003eQ Exp-\u003eGLExtendedContextFreeGrammar phi t r rr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:applyProcessorLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trivial identity processor that keeps current production\n rule results unmodified.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "identityProcessor",
          "package": "grammar-combinators",
          "signature": "GProcessor phi r r",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#identityProcessor",
          "type": "function"
        },
        "index": {
          "description": "trivial identity processor that keeps current production rule results unmodified",
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "identityProcessor",
          "package": "grammar-combinators",
          "partial": "Processor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:identityProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trivial processor that throws everything away and returns \n a value of the type K0 ().\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "trivialProcessor",
          "package": "grammar-combinators",
          "signature": "Processor phi (K0 ())",
          "source": "src/Text-GrammarCombinators-Base-Processor.html#trivialProcessor",
          "type": "function"
        },
        "index": {
          "description": "trivial processor that throws everything away and returns value of the type K0",
          "hierarchy": "Text GrammarCombinators Base Processor",
          "module": "Text.GrammarCombinators.Base.Processor",
          "name": "trivialProcessor",
          "normalized": "Processor a(K())",
          "package": "grammar-combinators",
          "partial": "Processor",
          "signature": "Processor phi(K())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Processor.html#v:trivialProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRule",
          "package": "grammar-combinators",
          "partial": "Production Rule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "BiasedProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#BiasedProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "BiasedProductionRule",
          "package": "grammar-combinators",
          "partial": "Biased Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:BiasedProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "EpsProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#EpsProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "EpsProductionRule",
          "package": "grammar-combinators",
          "partial": "Eps Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:EpsProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "LiftableProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#LiftableProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "LiftableProductionRule",
          "package": "grammar-combinators",
          "partial": "Liftable Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:LiftableProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduction rule interpretations supporting the \u003ccode\u003e\u003ca\u003eLoopProductionRule\u003c/a\u003e\u003c/code\u003e \n type class allow for Kleene-star quantified references to \n non-terminals (zero or more, see the \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e function) as well\n as \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e-quantified references to non-terminals (one or more, see\n the \u003ccode\u003e\u003ca\u003emany1Ref\u003c/a\u003e\u003c/code\u003e function).\n\u003c/p\u003e\u003cp\u003eAn instance can implement either manyRef or many1Ref,\n both or neither. Not implementing either produces \n old-style many and many1 combinator behaviour (discouraged\n for most situations)\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "LoopProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#LoopProductionRule",
          "type": "class"
        },
        "index": {
          "description": "Production rule interpretations supporting the LoopProductionRule type class allow for Kleene-star quantified references to non-terminals zero or more see the manyRef function as well as quantified references to non-terminals one or more see the many1Ref function An instance can implement either manyRef or many1Ref both or neither Not implementing either produces old-style many and many1 combinator behaviour discouraged for most situations",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "LoopProductionRule",
          "package": "grammar-combinators",
          "partial": "Loop Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:LoopProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "PenaltyProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#PenaltyProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "PenaltyProductionRule",
          "package": "grammar-combinators",
          "partial": "Penalty Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:PenaltyProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase type class for production rule interpretations. A production rule\n interpretation that is an instance of the \u003ccode\u003e\u003ca\u003eProductionRule\u003c/a\u003e\u003c/code\u003e type class supports\n sequencing and disjunction of rules, empty rules, dead rules and end-of-input \n rules.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#ProductionRule",
          "type": "class"
        },
        "index": {
          "description": "Base type class for production rule interpretations production rule interpretation that is an instance of the ProductionRule type class supports sequencing and disjunction of rules empty rules dead rules and end-of-input rules",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRule",
          "package": "grammar-combinators",
          "partial": "Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:ProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRuleWithLibrary",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#ProductionRuleWithLibrary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ProductionRuleWithLibrary",
          "package": "grammar-combinators",
          "partial": "Production Rule With Library",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:ProductionRuleWithLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduction rule interpretations supporting the \u003ccode\u003e\u003ca\u003eRecProductionRule\u003c/a\u003e\u003c/code\u003e type class support references\n to non-terminals in a given domain \u003ccode\u003ephi\u003c/code\u003e. The type of the result values of the rules is determined\n by semantic value family \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "RecProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#RecProductionRule",
          "type": "class"
        },
        "index": {
          "description": "Production rule interpretations supporting the RecProductionRule type class support references to non-terminals in given domain phi The type of the result values of the rules is determined by semantic value family",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "RecProductionRule",
          "package": "grammar-combinators",
          "partial": "Rec Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:RecProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'SuperProductionRule| type class is in an experimental state, and \n currently not intended for general use.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "SuperProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#SuperProductionRule",
          "type": "class"
        },
        "index": {
          "description": "The SuperProductionRule type class is in an experimental state and currently not intended for general use",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "SuperProductionRule",
          "package": "grammar-combinators",
          "partial": "Super Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:SuperProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for production rules matching tokens of a certain\n token type \u003ccode\u003et\u003c/code\u003e.\n \u003ccode\u003et\u003c/code\u003e should be an instance of the \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "TokenProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#TokenProductionRule",
          "type": "class"
        },
        "index": {
          "description": "Type class for production rules matching tokens of certain token type should be an instance of the Token type class",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "TokenProductionRule",
          "package": "grammar-combinators",
          "partial": "Token Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#t:TokenProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction of two rules.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(|||)",
          "package": "grammar-combinators",
          "signature": "p va -\u003e p va -\u003e p va",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "description": "Disjunction of two rules",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(|||) |||",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "grammar-combinators",
          "signature": "p va-\u003ep va-\u003ep va",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given function to the result of a given rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($|\u003e\u003e)",
          "package": "grammar-combinators",
          "signature": "(a -\u003e b, Q Exp) -\u003e p a -\u003e p b",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%24%7C%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Apply given function to the result of given rule",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($|\u003e\u003e) $|\u003e\u003e",
          "normalized": "(a-\u003eb,Q Exp)-\u003ec a-\u003ec b",
          "package": "grammar-combinators",
          "signature": "(a-\u003eb,Q Exp)-\u003ep a-\u003ep b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-36--124--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a rule's result value with a given value.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($|\u003e\u003e*)",
          "package": "grammar-combinators",
          "signature": "(a, Q Exp) -\u003e p b -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%24%7C%3E%3E%2A",
          "type": "function"
        },
        "index": {
          "description": "Replace rule result value with given value",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($|\u003e\u003e*) $|\u003e\u003e*",
          "normalized": "(a,Q Exp)-\u003eb c-\u003eb a",
          "package": "grammar-combinators",
          "signature": "(a,Q Exp)-\u003ep b-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-36--124--62--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given function to the result of a given rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($\u003e\u003e)",
          "package": "grammar-combinators",
          "signature": "(a -\u003e b) -\u003e p a -\u003e p b",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%24%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Apply given function to the result of given rule",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($\u003e\u003e) $\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "grammar-combinators",
          "signature": "(a-\u003eb)-\u003ep a-\u003ep b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-36--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a rule's result value with a given value.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($\u003e\u003e*)",
          "package": "grammar-combinators",
          "signature": "a -\u003e p b -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%24%3E%3E%2A",
          "type": "function"
        },
        "index": {
          "description": "Replace rule result value with given value",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "($\u003e\u003e*) $\u003e\u003e*",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "grammar-combinators",
          "signature": "a-\u003ep b-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-36--62--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence two rules, but drop the result of the first.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(*\u003e\u003e\u003e)",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p b -\u003e p b",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%2A%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Sequence two rules but drop the result of the first",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(*\u003e\u003e\u003e) *\u003e\u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "grammar-combinators",
          "signature": "p a-\u003ep b-\u003ep b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-42--62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-biased choice\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003c|||)",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p a -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%3C%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "description": "Right-biased choice",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003c|||) \u003c|||",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "grammar-combinators",
          "signature": "p a-\u003ep a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-60--124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased choice\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e|||)",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p a -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%3E%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "description": "Left-biased choice",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e|||) \u003e|||",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "grammar-combinators",
          "signature": "p a-\u003ep a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-62--124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence two rules. Result of the sequenced rule is the application\n of the result of the first rule to the result of the second.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e\u003e\u003e)",
          "package": "grammar-combinators",
          "signature": "p (a -\u003e b) -\u003e p a -\u003e p b",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%3E%3E%3E",
          "type": "method"
        },
        "index": {
          "description": "Sequence two rules Result of the sequenced rule is the application of the result of the first rule to the result of the second",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "grammar-combinators",
          "signature": "p(a-\u003eb)-\u003ep a-\u003ep b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence two rules, but drop the result of the second.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e\u003e\u003e*)",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p b -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#%3E%3E%3E%2A",
          "type": "function"
        },
        "index": {
          "description": "Sequence two rules but drop the result of the second",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "(\u003e\u003e\u003e*) \u003e\u003e\u003e*",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "grammar-combinators",
          "signature": "p a-\u003ep b-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:-62--62--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "anyToken",
          "package": "grammar-combinators",
          "signature": "p (ConcreteToken t)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#anyToken",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "anyToken",
          "package": "grammar-combinators",
          "partial": "Token",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDead rule. Never matches.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "die",
          "package": "grammar-combinators",
          "signature": "p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#die",
          "type": "method"
        },
        "index": {
          "description": "Dead rule Never matches",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "die",
          "package": "grammar-combinators",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of input rule. Matches only at end of input, consumes nothing,\n produces '()' as result.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "endOfInput",
          "package": "grammar-combinators",
          "signature": "p ()",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#endOfInput",
          "type": "method"
        },
        "index": {
          "description": "End of input rule Matches only at end of input consumes nothing produces as result",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "endOfInput",
          "normalized": "a()",
          "package": "grammar-combinators",
          "partial": "Of Input",
          "signature": "p()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:endOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEpsilon rule. Always matches, consumes nothing, produces\n   the given value as result.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilon",
          "package": "grammar-combinators",
          "signature": "a -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#epsilon",
          "type": "method"
        },
        "index": {
          "description": "Epsilon rule Always matches consumes nothing produces the given value as result",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilon",
          "normalized": "a-\u003eb a",
          "package": "grammar-combinators",
          "signature": "a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEpsilon rule with lifted value. Always matches, consumes nothing, produces\n   the given value (with its lifted version) as result.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilonL",
          "package": "grammar-combinators",
          "signature": "a -\u003e Q Exp -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#epsilonL",
          "type": "method"
        },
        "index": {
          "description": "Epsilon rule with lifted value Always matches consumes nothing produces the given value with its lifted version as result",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilonL",
          "normalized": "a-\u003eQ Exp-\u003eb a",
          "package": "grammar-combinators",
          "signature": "a-\u003eQ Exp-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:epsilonL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilonLS",
          "package": "grammar-combinators",
          "signature": "v -\u003e p v",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#epsilonLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "epsilonLS",
          "normalized": "a-\u003eb a",
          "package": "grammar-combinators",
          "partial": "LS",
          "signature": "v-\u003ep v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:epsilonLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "lib",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (r ix)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#lib",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "lib",
          "normalized": "a b-\u003ec(d b)",
          "package": "grammar-combinators",
          "signature": "phi ix-\u003ep(r ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:lib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn old style \u003ccode\u003emany\u003c/code\u003e combinator. Produces an infinite rule similar to Parsec's many rule. \n Prefer to use the \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e function whenever possible.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "many1Inf",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p [a]",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#many1Inf",
          "type": "function"
        },
        "index": {
          "description": "An old style many combinator Produces an infinite rule similar to Parsec many rule Prefer to use the manyRef function whenever possible",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "many1Inf",
          "normalized": "a b-\u003ea[b]",
          "package": "grammar-combinators",
          "partial": "Inf",
          "signature": "p a-\u003ep[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:many1Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a given non-terminal one or more times.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "many1Ref",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p [r ix]",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#many1Ref",
          "type": "method"
        },
        "index": {
          "description": "Match given non-terminal one or more times",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "many1Ref",
          "normalized": "a b-\u003ec[d b]",
          "package": "grammar-combinators",
          "partial": "Ref",
          "signature": "phi ix-\u003ep[r ix]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:many1Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn old style \u003ccode\u003emany\u003c/code\u003e combinator. Produces an infinite rule similar to Parsec's many rule. \n Prefer to use the \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e function whenever possible.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "manyInf",
          "package": "grammar-combinators",
          "signature": "p a -\u003e p [a]",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#manyInf",
          "type": "function"
        },
        "index": {
          "description": "An old style many combinator Produces an infinite rule similar to Parsec many rule Prefer to use the manyRef function whenever possible",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "manyInf",
          "normalized": "a b-\u003ea[b]",
          "package": "grammar-combinators",
          "partial": "Inf",
          "signature": "p a-\u003ep[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:manyInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a given non-terminal zero or more times.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "manyRef",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p [r ix]",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#manyRef",
          "type": "method"
        },
        "index": {
          "description": "Match given non-terminal zero or more times",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "manyRef",
          "normalized": "a b-\u003ec[d b]",
          "package": "grammar-combinators",
          "partial": "Ref",
          "signature": "phi ix-\u003ep[r ix]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:manyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptionally match a given rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "optionally",
          "package": "grammar-combinators",
          "signature": "p v -\u003e p (Maybe v)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#optionally",
          "type": "method"
        },
        "index": {
          "description": "Optionally match given rule",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "optionally",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "grammar-combinators",
          "signature": "p v-\u003ep(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:optionally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "penalty",
          "package": "grammar-combinators",
          "signature": "Int -\u003e p a -\u003e p a",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#penalty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "penalty",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "grammar-combinators",
          "signature": "Int-\u003ep a-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:penalty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference a given non-terminal in a production rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ref",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (r ix)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#ref",
          "type": "method"
        },
        "index": {
          "description": "Reference given non-terminal in production rule",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "ref",
          "normalized": "a b-\u003ec(d b)",
          "package": "grammar-combinators",
          "signature": "phi ix-\u003ep(r ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsecutively match a given list of tokens and return their concrete token values as a list.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "string",
          "package": "grammar-combinators",
          "signature": "[t] -\u003e p [ConcreteToken t]",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#string",
          "type": "function"
        },
        "index": {
          "description": "Consecutively match given list of tokens and return their concrete token values as list",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "string",
          "normalized": "[a]-\u003eb[ConcreteToken a]",
          "package": "grammar-combinators",
          "signature": "[t]-\u003ep[ConcreteToken t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "subref",
          "package": "grammar-combinators",
          "signature": "(forall ix'.  phi' ix' -\u003e p phi' (IxMapSeq ixT supIxT) (SubVal supIxT r) t (PF phi' (SubVal supIxT r) ix')) -\u003e phi' ix -\u003e phi (supIxT ix) -\u003e p phi ixT r t (PF phi r (supIxT ix))",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#subref",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "subref",
          "normalized": "(a b c d-\u003ee c(IxMapSeq f g)(SubVal g h)i(PF c(SubVal g h)d))-\u003ec j-\u003ek(g j)-\u003ee k f h i(PF k h(g j))",
          "package": "grammar-combinators",
          "signature": "(forall ix'. phi' ix'-\u003ep phi'(IxMapSeq ixT supIxT)(SubVal supIxT r)t(PF phi'(SubVal supIxT r)ix'))-\u003ephi' ix-\u003ephi(supIxT ix)-\u003ep phi ixT r t(PF phi r(supIxT ix))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:subref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a given token of type \u003ccode\u003et\u003c/code\u003e and produce its concrete\n value (of type \u003ccode\u003e\u003ca\u003eConcreteToken\u003c/a\u003e\u003c/code\u003e t).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "token",
          "package": "grammar-combinators",
          "signature": "t -\u003e p (ConcreteToken t)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#token",
          "type": "method"
        },
        "index": {
          "description": "Match given token of type and produce its concrete value of type ConcreteToken",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "token",
          "normalized": "a-\u003eb(ConcreteToken a)",
          "package": "grammar-combinators",
          "signature": "t-\u003ep(ConcreteToken t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any token in a given range of tokens.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "tokenRange",
          "package": "grammar-combinators",
          "signature": "[t] -\u003e p (ConcreteToken t)",
          "source": "src/Text-GrammarCombinators-Base-ProductionRule.html#tokenRange",
          "type": "function"
        },
        "index": {
          "description": "Match any token in given range of tokens",
          "hierarchy": "Text GrammarCombinators Base ProductionRule",
          "module": "Text.GrammarCombinators.Base.ProductionRule",
          "name": "tokenRange",
          "normalized": "[a]-\u003eb(ConcreteToken a)",
          "package": "grammar-combinators",
          "partial": "Range",
          "signature": "[t]-\u003ep(ConcreteToken t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-ProductionRule.html#v:tokenRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "Token",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Token.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base Token",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "Token",
          "package": "grammar-combinators",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e class identifies a type that can be used as terminal\n identifier in a grammar definition. The type \u003ccode\u003et\u003c/code\u003e itself is an\n abstract identifier, identifying a certain type of terminals, but\n any value of type \u003ccode\u003et\u003c/code\u003e can correspond to a possibly infinite numer\n of values of type 'ConcreteToken t'. For example, if you use a lexer\n in a simple arithmetic expressions grammar, your lexer would typically\n return values like \u003ccode\u003ePLUS\u003c/code\u003e, \u003ccode\u003eMINUS\u003c/code\u003e, but also 'INTEGER 42' when a\n number is lexed. In this case, a separate Token type t would be defined,\n such that a value \u003ccode\u003eINTEGER_T\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e type t could\n correspond to all values of the form 'INTEGER n' (for n an Integer)\n of type 'ConcreteToken t'. A production rule defined as \n \u003ccode\u003etoken\u003c/code\u003e INTEGER_T would then produce result values of type \n \u003ccode\u003e\u003ca\u003eConcreteToken\u003c/a\u003e\u003c/code\u003e t (e.g. INTEGER 42).\n\u003c/p\u003e\u003cp\u003eThe requirements on \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e types are relatively strict, but this is\n necessary to make it usable in table-based parser algorithms.\n We reference the \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e class to allow for compile-time\n precalculation of tables using Template Haskell (See the LL1 and \n RealLL1 parsers).\n\u003c/p\u003e\u003cp\u003eNote that in some cases it is inefficient to use Char directly as \n token type, because of the big amount of tokens. For example when using\n \u003ccode\u003etransformLeftCorner\u003c/code\u003e, the new domain will contain O(n*t + n^2)\n non-terminals where n is the amount of non-terminals and t is th \n number of tokens, so when using this transformation, it is beneficial to\n use a token type with less token values than \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, at\n least if you will use algorithms that fold over the full new grammar's domain \n (e.g. \u003ccode\u003eprintGrammar\u003c/code\u003e does, \u003ccode\u003eprintReachableGrammar\u003c/code\u003e doesn't).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "Token",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base-Token.html#Token",
          "type": "class"
        },
        "index": {
          "description": "The Token class identifies type that can be used as terminal identifier in grammar definition The type itself is an abstract identifier identifying certain type of terminals but any value of type can correspond to possibly infinite numer of values of type ConcreteToken For example if you use lexer in simple arithmetic expressions grammar your lexer would typically return values like PLUS MINUS but also INTEGER when number is lexed In this case separate Token type would be defined such that value INTEGER of the Token type could correspond to all values of the form INTEGER for an Integer of type ConcreteToken production rule defined as token INTEGER would then produce result values of type ConcreteToken e.g INTEGER The requirements on Token types are relatively strict but this is necessary to make it usable in table-based parser algorithms We reference the Lift class to allow for compile-time precalculation of tables using Template Haskell See the LL1 and RealLL1 parsers Note that in some cases it is inefficient to use Char directly as token type because of the big amount of tokens For example when using transformLeftCorner the new domain will contain non-terminals where is the amount of non-terminals and is th number of tokens so when using this transformation it is beneficial to use token type with less token values than Char at least if you will use algorithms that fold over the full new grammar domain e.g printGrammar does printReachableGrammar doesn",
          "hierarchy": "Text GrammarCombinators Base Token",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "Token",
          "package": "grammar-combinators",
          "partial": "Token",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Token.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eclassify\u003c/a\u003e\u003c/code\u003e function classifies a given \u003ccode\u003e\u003ca\u003eConcreteToken\u003c/a\u003e\u003c/code\u003e t into\n the value of type t it is represented by. \n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "classify",
          "package": "grammar-combinators",
          "signature": "ConcreteToken t -\u003e t",
          "source": "src/Text-GrammarCombinators-Base-Token.html#classify",
          "type": "method"
        },
        "index": {
          "description": "The classify function classifies given ConcreteToken into the value of type it is represented by",
          "hierarchy": "Text GrammarCombinators Base Token",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "classify",
          "normalized": "ConcreteToken a-\u003ea",
          "package": "grammar-combinators",
          "signature": "ConcreteToken t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Token.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eenumConcreteTokens\u003c/a\u003e\u003c/code\u003e function returns a (possibly infinite)\n list of all concrete tokens of type 'ConcreteToken t' \n corresponding to a given token of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e type t\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "enumConcreteTokens",
          "package": "grammar-combinators",
          "signature": "t -\u003e [ConcreteToken t]",
          "source": "src/Text-GrammarCombinators-Base-Token.html#enumConcreteTokens",
          "type": "method"
        },
        "index": {
          "description": "The enumConcreteTokens function returns possibly infinite list of all concrete tokens of type ConcreteToken corresponding to given token of Token type",
          "hierarchy": "Text GrammarCombinators Base Token",
          "module": "Text.GrammarCombinators.Base.Token",
          "name": "enumConcreteTokens",
          "normalized": "a-\u003e[ConcreteToken a]",
          "package": "grammar-combinators",
          "partial": "Concrete Tokens",
          "signature": "t-\u003e[ConcreteToken t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base-Token.html#v:enumConcreteTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Base",
          "name": "Base",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Base",
          "module": "Text.GrammarCombinators.Base",
          "name": "Base",
          "package": "grammar-combinators",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "Numeric",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "Numeric",
          "package": "grammar-combinators",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "DecimalInteger",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html#DecimalInteger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "DecimalInteger",
          "package": "grammar-combinators",
          "partial": "Decimal Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#t:DecimalInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis domain is intended to be reused in grammars where decimal integers are used.\n   You can refer to the DecimalInteger non-terminal using the \u003ccode\u003e\u003ca\u003elib\u003c/a\u003e\u003c/code\u003e primitive from the \u003ccode\u003e\u003ca\u003eProductionRuleWithLibrary\u003c/a\u003e\u003c/code\u003e type class  \n   and then obtain the combined grammar by combining your grammar with \u003ccode\u003e\u003ca\u003eprocNumericGrammar\u003c/a\u003e\u003c/code\u003e using the \n   \u003ccode\u003e\u003ca\u003ecombineGrammars\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "NumericDomain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html#NumericDomain",
          "type": "data"
        },
        "index": {
          "description": "This domain is intended to be reused in grammars where decimal integers are used You can refer to the DecimalInteger non-terminal using the lib primitive from the ProductionRuleWithLibrary type class and then obtain the combined grammar by combining your grammar with procNumericGrammar using the combineGrammars function",
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "NumericDomain",
          "package": "grammar-combinators",
          "partial": "Numeric Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#t:NumericDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "NumericValue",
          "package": "grammar-combinators",
          "signature": "NumericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "NumericValue",
          "package": "grammar-combinators",
          "partial": "Numeric Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#t:NumericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "DecimalInteger",
          "package": "grammar-combinators",
          "signature": "NumericDomain DecimalInteger",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html#NumericDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "DecimalInteger",
          "package": "grammar-combinators",
          "partial": "Decimal Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#v:DecimalInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "numericGrammar",
          "package": "grammar-combinators",
          "signature": "ExtendedContextFreeGrammar NumericDomain Char",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html#numericGrammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "numericGrammar",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#v:numericGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard processing grammar for domain \u003ccode\u003e\u003ca\u003eNumericDomain\u003c/a\u003e\u003c/code\u003e, intended to be combined with other grammars using\n   the \u003ccode\u003e\u003ca\u003ecombineGrammars\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "procNumericGrammar",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar NumericDomain Char (NumericValue n)",
          "source": "src/Text-GrammarCombinators-Library-Numeric.html#procNumericGrammar",
          "type": "function"
        },
        "index": {
          "description": "The standard processing grammar for domain NumericDomain intended to be combined with other grammars using the combineGrammars function",
          "hierarchy": "Text GrammarCombinators Library Numeric",
          "module": "Text.GrammarCombinators.Library.Numeric",
          "name": "procNumericGrammar",
          "package": "grammar-combinators",
          "partial": "Numeric Grammar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Library-Numeric.html#v:procNumericGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-LL1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1",
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1",
          "package": "grammar-combinators",
          "partial": "LL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1Table",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-LL1.html#LL1Table",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1",
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1Table",
          "package": "grammar-combinators",
          "partial": "LL Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1.html#t:LL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1Table",
          "package": "grammar-combinators",
          "signature": "LL1Table (Memo phi (K0 (Map t Int))) (Memo phi (K0 (Maybe Int))) (Memo phi (K0 (Maybe Int)))",
          "source": "src/Text-GrammarCombinators-Parser-LL1.html#LL1Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1",
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "LL1Table",
          "package": "grammar-combinators",
          "partial": "LL Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1.html#v:LL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "calcLL1Table",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t r rr -\u003e LL1Table phi t",
          "source": "src/Text-GrammarCombinators-Parser-LL1.html#calcLL1Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1",
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "calcLL1Table",
          "normalized": "GContextFreeGrammar a b c d-\u003eLL Table a b",
          "package": "grammar-combinators",
          "partial": "LL Table",
          "signature": "GContextFreeGrammar phi t r rr-\u003eLL Table phi t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1.html#v:calcLL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "parseLL1",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e LL1Table phi t -\u003e phi ix -\u003e [ConcreteToken t] -\u003e Maybe (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-LL1.html#parseLL1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1",
          "module": "Text.GrammarCombinators.Parser.LL1",
          "name": "parseLL1",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eLL Table a b-\u003ea d-\u003e[ConcreteToken b]-\u003eMaybe(c d)",
          "package": "grammar-combinators",
          "partial": "LL",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003eLL Table phi t-\u003ephi ix-\u003e[ConcreteToken t]-\u003eMaybe(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1.html#v:parseLL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1TH",
          "name": "LL1TH",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-LL1TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1TH",
          "module": "Text.GrammarCombinators.Parser.LL1TH",
          "name": "LL1TH",
          "package": "grammar-combinators",
          "partial": "LL TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.LL1TH",
          "name": "prepareLL1TableTH",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t r rr -\u003e Q Exp",
          "source": "src/Text-GrammarCombinators-Parser-LL1TH.html#prepareLL1TableTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser LL1TH",
          "module": "Text.GrammarCombinators.Parser.LL1TH",
          "name": "prepareLL1TableTH",
          "normalized": "GContextFreeGrammar a b c d-\u003eQ Exp",
          "package": "grammar-combinators",
          "partial": "LL Table TH",
          "signature": "GContextFreeGrammar phi t r rr-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-LL1TH.html#v:prepareLL1TableTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Packrat",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Packrat",
          "package": "grammar-combinators",
          "partial": "Packrat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Derivs",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html#Derivs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Derivs",
          "package": "grammar-combinators",
          "partial": "Derivs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#t:Derivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Result",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Result",
          "package": "grammar-combinators",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "NoParse",
          "package": "grammar-combinators",
          "signature": "NoParse",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "NoParse",
          "package": "grammar-combinators",
          "partial": "No Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#v:NoParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Parsed",
          "package": "grammar-combinators",
          "signature": "Parsed v (Derivs phi r t)",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "Parsed",
          "package": "grammar-combinators",
          "partial": "Parsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#v:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given grammar, starting from a given start non-terminal,\n with a backtracking Packrat parser algorithm (like backtracking recursive descent, but with \n linear performance in the length of the input).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "parsePackrat",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e phi ix -\u003e [ConcreteToken t] -\u003e Result phi r t (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-Packrat.html#parsePackrat",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given grammar starting from given start non-terminal with backtracking Packrat parser algorithm like backtracking recursive descent but with linear performance in the length of the input",
          "hierarchy": "Text GrammarCombinators Parser Packrat",
          "module": "Text.GrammarCombinators.Parser.Packrat",
          "name": "parsePackrat",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003ea d-\u003e[ConcreteToken b]-\u003eResult a c b(c d)",
          "package": "grammar-combinators",
          "partial": "Packrat",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003ephi ix-\u003e[ConcreteToken t]-\u003eResult phi r t(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Packrat.html#v:parsePackrat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatibility component for the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "Parsec",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Compatibility component for the Parsec library",
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "Parsec",
          "package": "grammar-combinators",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "WrapGenParser",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html#WrapGenParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "WrapGenParser",
          "package": "grammar-combinators",
          "partial": "Wrap Gen Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#t:WrapGenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given grammar, starting from a given start\n   non-terminal, using the Parsec parser library. Currently uses backtracking for\n   every branch.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsec",
          "package": "grammar-combinators",
          "signature": "ProcessingBiasedContextFreeGrammar phi t r -\u003e phi ix -\u003e SourceName -\u003e [ConcreteToken t] -\u003e Either ParseError (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html#parseParsec",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given grammar starting from given start non-terminal using the Parsec parser library Currently uses backtracking for every branch",
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsec",
          "normalized": "ProcessingBiasedContextFreeGrammar a b c-\u003ea d-\u003eSourceName-\u003e[ConcreteToken b]-\u003eEither ParseError(c d)",
          "package": "grammar-combinators",
          "partial": "Parsec",
          "signature": "ProcessingBiasedContextFreeGrammar phi t r-\u003ephi ix-\u003eSourceName-\u003e[ConcreteToken t]-\u003eEither ParseError(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#v:parseParsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsecBiased",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e phi ix -\u003e SourceName -\u003e [ConcreteToken t] -\u003e Either ParseError (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html#parseParsecBiased",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsecBiased",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003ea d-\u003eSourceName-\u003e[ConcreteToken b]-\u003eEither ParseError(c d)",
          "package": "grammar-combinators",
          "partial": "Parsec Biased",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003ephi ix-\u003eSourceName-\u003e[ConcreteToken t]-\u003eEither ParseError(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#v:parseParsecBiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsecR",
          "package": "grammar-combinators",
          "signature": "ProcessingBiasedRegularGrammar phi t r -\u003e phi ix -\u003e SourceName -\u003e [ConcreteToken t] -\u003e Either ParseError (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html#parseParsecR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "parseParsecR",
          "normalized": "ProcessingBiasedRegularGrammar a b c-\u003ea d-\u003eSourceName-\u003e[ConcreteToken b]-\u003eEither ParseError(c d)",
          "package": "grammar-combinators",
          "partial": "Parsec",
          "signature": "ProcessingBiasedRegularGrammar phi t r-\u003ephi ix-\u003eSourceName-\u003e[ConcreteToken t]-\u003eEither ParseError(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#v:parseParsecR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "unWGP",
          "package": "grammar-combinators",
          "signature": "WrapGenParser t v -\u003e Parsec [ConcreteToken t] () v",
          "source": "src/Text-GrammarCombinators-Parser-Parsec.html#unWGP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser Parsec",
          "module": "Text.GrammarCombinators.Parser.Parsec",
          "name": "unWGP",
          "normalized": "WrapGenParser a b-\u003eParsec[ConcreteToken a]()b",
          "package": "grammar-combinators",
          "partial": "WGP",
          "signature": "WrapGenParser t v-\u003eParsec[ConcreteToken t]()v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-Parsec.html#v:unWGP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an experiment, do not use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "RealLL1",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html",
          "type": "module"
        },
        "index": {
          "description": "This is an experiment do not use",
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "RealLL1",
          "package": "grammar-combinators",
          "partial": "Real LL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "BranchSelectorMemo",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#BranchSelectorMemo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "BranchSelectorMemo",
          "package": "grammar-combinators",
          "partial": "Branch Selector Memo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#t:BranchSelectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FirstSet",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#FirstSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FirstSet",
          "package": "grammar-combinators",
          "partial": "First Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#t:FirstSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "RealLL1Table",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#RealLL1Table",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "RealLL1Table",
          "package": "grammar-combinators",
          "partial": "Real LL Table",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#t:RealLL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "DefaultBranchSelectorMemo",
          "package": "grammar-combinators",
          "signature": "DefaultBranchSelectorMemo",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#BranchSelectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "DefaultBranchSelectorMemo",
          "package": "grammar-combinators",
          "partial": "Default Branch Selector Memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:DefaultBranchSelectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FS",
          "package": "grammar-combinators",
          "signature": "FS",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FS",
          "package": "grammar-combinators",
          "partial": "FS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:FS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FlipBS",
          "package": "grammar-combinators",
          "signature": "FlipBS (BranchSelectorMemo t)",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#BranchSelectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "FlipBS",
          "package": "grammar-combinators",
          "partial": "Flip BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:FlipBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "MkRealLL1Table",
          "package": "grammar-combinators",
          "signature": "MkRealLL1Table (Memo phi (K0 (BranchSelectorMemo t)))",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#RealLL1Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "MkRealLL1Table",
          "package": "grammar-combinators",
          "partial": "Mk Real LL Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:MkRealLL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "SplitBranchSelectorMemoL",
          "package": "grammar-combinators",
          "signature": "SplitBranchSelectorMemoL (FirstSet t) (BranchSelectorMemo t) (BranchSelectorMemo t)",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#BranchSelectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "SplitBranchSelectorMemoL",
          "package": "grammar-combinators",
          "partial": "Split Branch Selector Memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:SplitBranchSelectorMemoL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "canBeEOI",
          "package": "grammar-combinators",
          "signature": "Bool",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "canBeEOI",
          "package": "grammar-combinators",
          "partial": "Be EOI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:canBeEOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "canBeEmpty",
          "package": "grammar-combinators",
          "signature": "Bool",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "canBeEmpty",
          "package": "grammar-combinators",
          "partial": "Be Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:canBeEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "firstTokens",
          "package": "grammar-combinators",
          "signature": "Set t",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "firstTokens",
          "package": "grammar-combinators",
          "partial": "Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:firstTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "parseRealLL1",
          "package": "grammar-combinators",
          "signature": "RealLL1Grammar phi ixT r r t -\u003e RealLL1Table phi t -\u003e phi ix -\u003e [ConcreteToken t] -\u003e Maybe (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#parseRealLL1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "parseRealLL1",
          "normalized": "RealLL Grammar a b c c d-\u003eRealLL Table a d-\u003ea e-\u003e[ConcreteToken d]-\u003eMaybe(c e)",
          "package": "grammar-combinators",
          "partial": "Real LL",
          "signature": "RealLL Grammar phi ixT r r t-\u003eRealLL Table phi t-\u003ephi ix-\u003e[ConcreteToken t]-\u003eMaybe(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:parseRealLL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "prepareLL1Parser",
          "package": "grammar-combinators",
          "signature": "BSCGrammar phi r t rr -\u003e RealLL1Table phi t",
          "source": "src/Text-GrammarCombinators-Parser-RealLL1.html#prepareLL1Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RealLL1",
          "module": "Text.GrammarCombinators.Parser.RealLL1",
          "name": "prepareLL1Parser",
          "normalized": "BSCGrammar a b c d-\u003eRealLL Table a c",
          "package": "grammar-combinators",
          "partial": "LL Parser",
          "signature": "BSCGrammar phi r t rr-\u003eRealLL Table phi t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RealLL1.html#v:prepareLL1Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.RecursiveDescent",
          "name": "RecursiveDescent",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-RecursiveDescent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser RecursiveDescent",
          "module": "Text.GrammarCombinators.Parser.RecursiveDescent",
          "name": "RecursiveDescent",
          "package": "grammar-combinators",
          "partial": "Recursive Descent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RecursiveDescent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given grammar, starting from a given start non-terminal,\n with a simple backtracking recursive descent parser algorithm.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.RecursiveDescent",
          "name": "parseRecDec",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e phi ix -\u003e [ConcreteToken t] -\u003e Maybe (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-RecursiveDescent.html#parseRecDec",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given grammar starting from given start non-terminal with simple backtracking recursive descent parser algorithm",
          "hierarchy": "Text GrammarCombinators Parser RecursiveDescent",
          "module": "Text.GrammarCombinators.Parser.RecursiveDescent",
          "name": "parseRecDec",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003ea d-\u003e[ConcreteToken b]-\u003eMaybe(c d)",
          "package": "grammar-combinators",
          "partial": "Rec Dec",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003ephi ix-\u003e[ConcreteToken t]-\u003eMaybe(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-RecursiveDescent.html#v:parseRecDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis was intended as a common library for top-down parser algorithms, but it \n is a bit outdated and currently only used by the LL1 parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "TopDown",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html",
          "type": "module"
        },
        "index": {
          "description": "This was intended as common library for top-down parser algorithms but it is bit outdated and currently only used by the LL1 parser",
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "TopDown",
          "package": "grammar-combinators",
          "partial": "Top Down",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "NonBranchingRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#NonBranchingRule",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "NonBranchingRule",
          "package": "grammar-combinators",
          "partial": "Non Branching Rule",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#t:NonBranchingRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "UnambiguousTopDownGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#UnambiguousTopDownGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "UnambiguousTopDownGrammar",
          "package": "grammar-combinators",
          "partial": "Unambiguous Top Down Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#t:UnambiguousTopDownGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "WrapLookaheadNBR",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#WrapLookaheadNBR",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "WrapLookaheadNBR",
          "package": "grammar-combinators",
          "partial": "Wrap Lookahead NBR",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#t:WrapLookaheadNBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "MkNBR",
          "package": "grammar-combinators",
          "signature": "MkNBR",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#NonBranchingRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "MkNBR",
          "package": "grammar-combinators",
          "partial": "Mk NBR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:MkNBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "WrapLNBR",
          "package": "grammar-combinators",
          "signature": "WrapLNBR",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#WrapLookaheadNBR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "WrapLNBR",
          "package": "grammar-combinators",
          "partial": "Wrap LNBR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:WrapLNBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "nbrEndOfInput",
          "package": "grammar-combinators",
          "signature": "NonBranchingRule phi r t ()",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#nbrEndOfInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "nbrEndOfInput",
          "normalized": "NonBranchingRule a b c()",
          "package": "grammar-combinators",
          "partial": "End Of Input",
          "signature": "NonBranchingRule phi r t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:nbrEndOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "parseTopDown",
          "package": "grammar-combinators",
          "signature": "UnambiguousTopDownGrammar phi r t -\u003e phi ix -\u003e [ConcreteToken t] -\u003e Maybe (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#parseTopDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "parseTopDown",
          "normalized": "UnambiguousTopDownGrammar a b c-\u003ea d-\u003e[ConcreteToken c]-\u003eMaybe(b d)",
          "package": "grammar-combinators",
          "partial": "Top Down",
          "signature": "UnambiguousTopDownGrammar phi r t-\u003ephi ix-\u003e[ConcreteToken t]-\u003eMaybe(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:parseTopDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "unNBR",
          "package": "grammar-combinators",
          "signature": "(forall ix.  phi ix -\u003e [ConcreteToken t] -\u003e NonBranchingRule phi r t (r ix)) -\u003e MaybeT (State [ConcreteToken t]) v",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#NonBranchingRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "unNBR",
          "normalized": "(a b c d-\u003e[ConcreteToken e]-\u003eNonBranchingRule c f e(f d))-\u003eMaybeT(State[ConcreteToken e])g",
          "package": "grammar-combinators",
          "partial": "NBR",
          "signature": "(forall ix. phi ix-\u003e[ConcreteToken t]-\u003eNonBranchingRule phi r t(r ix))-\u003eMaybeT(State[ConcreteToken t])v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:unNBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "unWrapLNBR",
          "package": "grammar-combinators",
          "signature": "[ConcreteToken t] -\u003e NonBranchingRule phi r t (r ix)",
          "source": "src/Text-GrammarCombinators-Parser-TopDown.html#WrapLookaheadNBR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Parser TopDown",
          "module": "Text.GrammarCombinators.Parser.TopDown",
          "name": "unWrapLNBR",
          "normalized": "[ConcreteToken a]-\u003eNonBranchingRule b c a(c d)",
          "package": "grammar-combinators",
          "partial": "Wrap LNBR",
          "signature": "[ConcreteToken t]-\u003eNonBranchingRule phi r t(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-TopDown.html#v:unWrapLNBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUUParse compatibility module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "UUParse",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Parser-UUParse.html",
          "type": "module"
        },
        "index": {
          "description": "UUParse compatibility module",
          "hierarchy": "Text GrammarCombinators Parser UUParse",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "UUParse",
          "package": "grammar-combinators",
          "partial": "UUParse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-UUParse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given grammar, starting from a given\n start symbol using the UUParse error-correcting parsing library (always\n produces a result)\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUU",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e phi ix -\u003e loc -\u003e [ConcreteToken t] -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Parser-UUParse.html#parseUU",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given grammar starting from given start symbol using the UUParse error-correcting parsing library always produces result",
          "hierarchy": "Text GrammarCombinators Parser UUParse",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUU",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003ea d-\u003ee-\u003e[ConcreteToken b]-\u003ec d",
          "package": "grammar-combinators",
          "partial": "UU",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003ephi ix-\u003eloc-\u003e[ConcreteToken t]-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-UUParse.html#v:parseUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given extended grammar, starting from a given\n start symbol using the UUParse error-correcting parsing library (always\n produces a result)\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUUE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e phi ix -\u003e loc -\u003e [ConcreteToken t] -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Parser-UUParse.html#parseUUE",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given extended grammar starting from given start symbol using the UUParse error-correcting parsing library always produces result",
          "hierarchy": "Text GrammarCombinators Parser UUParse",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUUE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003ea d-\u003ee-\u003e[ConcreteToken b]-\u003ec d",
          "package": "grammar-combinators",
          "partial": "UUE",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003ephi ix-\u003eloc-\u003e[ConcreteToken t]-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-UUParse.html#v:parseUUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given regular grammar, starting from a given\n start symbol using the UUParse error-correcting parsing library (always\n produces a result)\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUUR",
          "package": "grammar-combinators",
          "signature": "ProcessingRegularGrammar phi t r -\u003e phi ix -\u003e loc -\u003e [ConcreteToken t] -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Parser-UUParse.html#parseUUR",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given regular grammar starting from given start symbol using the UUParse error-correcting parsing library always produces result",
          "hierarchy": "Text GrammarCombinators Parser UUParse",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUUR",
          "normalized": "ProcessingRegularGrammar a b c-\u003ea d-\u003ee-\u003e[ConcreteToken b]-\u003ec d",
          "package": "grammar-combinators",
          "partial": "UUR",
          "signature": "ProcessingRegularGrammar phi t r-\u003ephi ix-\u003eloc-\u003e[ConcreteToken t]-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-UUParse.html#v:parseUUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a given string according to a given regular production rule using the \n UUParse error-correcting parsing library (always produces a result).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUURule",
          "package": "grammar-combinators",
          "signature": "RegularRule phi r t v -\u003e loc -\u003e [ConcreteToken t] -\u003e v",
          "source": "src/Text-GrammarCombinators-Parser-UUParse.html#parseUURule",
          "type": "function"
        },
        "index": {
          "description": "Parse given string according to given regular production rule using the UUParse error-correcting parsing library always produces result",
          "hierarchy": "Text GrammarCombinators Parser UUParse",
          "module": "Text.GrammarCombinators.Parser.UUParse",
          "name": "parseUURule",
          "normalized": "RegularRule a b c d-\u003ee-\u003e[ConcreteToken c]-\u003ed",
          "package": "grammar-combinators",
          "partial": "UURule",
          "signature": "RegularRule phi r t v-\u003eloc-\u003e[ConcreteToken t]-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Parser-UUParse.html#v:parseUURule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.TH.Base",
          "name": "Base",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-TH-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators TH Base",
          "module": "Text.GrammarCombinators.TH.Base",
          "name": "Base",
          "package": "grammar-combinators",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-TH-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.TH.FoldLoops",
          "name": "FoldLoops",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-TH-FoldLoops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators TH FoldLoops",
          "module": "Text.GrammarCombinators.TH.FoldLoops",
          "name": "FoldLoops",
          "package": "grammar-combinators",
          "partial": "Fold Loops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-TH-FoldLoops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.TH.RealLL1",
          "name": "RealLL1",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-TH-RealLL1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators TH RealLL1",
          "module": "Text.GrammarCombinators.TH.RealLL1",
          "name": "RealLL1",
          "package": "grammar-combinators",
          "partial": "Real LL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-TH-RealLL1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.TH.RealLL1",
          "name": "liftRealLL1Table",
          "package": "grammar-combinators",
          "signature": "RealLL1Table phi t -\u003e Q Exp",
          "source": "src/Text-GrammarCombinators-TH-RealLL1.html#liftRealLL1Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators TH RealLL1",
          "module": "Text.GrammarCombinators.TH.RealLL1",
          "name": "liftRealLL1Table",
          "normalized": "RealLL Table a b-\u003eQ Exp",
          "package": "grammar-combinators",
          "partial": "Real LL Table",
          "signature": "RealLL Table phi t-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-TH-RealLL1.html#v:liftRealLL1Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "CombineEpsilons",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-CombineEpsilons.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform CombineEpsilons",
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "CombineEpsilons",
          "package": "grammar-combinators",
          "partial": "Combine Epsilons",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-CombineEpsilons.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine consecutive epsilon rules in a given grammar into a single\n epsilon rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "combineEpsilons",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GContextFreeGrammar phi t r rr -\u003e GContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-CombineEpsilons.html#combineEpsilons",
          "type": "function"
        },
        "index": {
          "description": "Combine consecutive epsilon rules in given grammar into single epsilon rule",
          "hierarchy": "Text GrammarCombinators Transform CombineEpsilons",
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "combineEpsilons",
          "normalized": "a b c d e GContextFreeGrammar b c d f-\u003eGContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Epsilons",
          "signature": "forall phi t r rr. GContextFreeGrammar phi t r rr-\u003eGContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-CombineEpsilons.html#v:combineEpsilons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine consecutive epsilon rules in a given extended \n grammar into a single epsilon rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "combineEpsilonsE",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GExtendedContextFreeGrammar phi t r rr -\u003e GExtendedContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-CombineEpsilons.html#combineEpsilonsE",
          "type": "function"
        },
        "index": {
          "description": "Combine consecutive epsilon rules in given extended grammar into single epsilon rule",
          "hierarchy": "Text GrammarCombinators Transform CombineEpsilons",
          "module": "Text.GrammarCombinators.Transform.CombineEpsilons",
          "name": "combineEpsilonsE",
          "normalized": "a b c d e GExtendedContextFreeGrammar b c d f-\u003eGExtendedContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Epsilons",
          "signature": "forall phi t r rr. GExtendedContextFreeGrammar phi t r rr-\u003eGExtendedContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-CombineEpsilons.html#v:combineEpsilonsE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.CombineGrammars",
          "name": "CombineGrammars",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-CombineGrammars.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform CombineGrammars",
          "module": "Text.GrammarCombinators.Transform.CombineGrammars",
          "name": "CombineGrammars",
          "package": "grammar-combinators",
          "partial": "Combine Grammars",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-CombineGrammars.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two grammars into a single one. The argument grammars are over\n   different domains \u003ccode\u003ephiL\u003c/code\u003e and \u003ccode\u003ephiR\u003c/code\u003e, but they are allowed to refer to \n   each other's non-terminals\n   using the \u003ccode\u003e\u003ca\u003elib\u003c/a\u003e\u003c/code\u003e primitive from the \u003ccode\u003e\u003ca\u003eProductionRuleWithLibrary\u003c/a\u003e\u003c/code\u003e type class.\n   The resulting grammar is over the combined domain 'MergeDomain phiL phiR'.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.CombineGrammars",
          "name": "combineGrammars",
          "package": "grammar-combinators",
          "signature": "phiR ix' -\u003e p' (rrR ix')) -\u003e MergeDomain phiL phiR ix -\u003e p (EitherFunctor rrL rrR ix)",
          "source": "src/Text-GrammarCombinators-Transform-CombineGrammars.html#combineGrammars",
          "type": "function"
        },
        "index": {
          "description": "Combine two grammars into single one The argument grammars are over different domains phiL and phiR but they are allowed to refer to each other non-terminals using the lib primitive from the ProductionRuleWithLibrary type class The resulting grammar is over the combined domain MergeDomain phiL phiR",
          "hierarchy": "Text GrammarCombinators Transform CombineGrammars",
          "module": "Text.GrammarCombinators.Transform.CombineGrammars",
          "name": "combineGrammars",
          "normalized": "a b-\u003ec(d b))-\u003eMergeDomain e a f-\u003eg(EitherFunctor h d f)",
          "package": "grammar-combinators",
          "partial": "Grammars",
          "signature": "phiR ix'-\u003ep'(rrR ix'))-\u003eMergeDomain phiL phiR ix-\u003ep(EitherFunctor rrL rrR ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-CombineGrammars.html#v:combineGrammars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "FilterDies",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "FilterDies",
          "package": "grammar-combinators",
          "partial": "Filter Dies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter dead branches from a given context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDies",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GContextFreeGrammar phi t r rr -\u003e GContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html#filterDies",
          "type": "function"
        },
        "index": {
          "description": "Filter dead branches from given context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDies",
          "normalized": "a b c d e GContextFreeGrammar b c d f-\u003eGContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Dies",
          "signature": "forall phi t r rr. GContextFreeGrammar phi t r rr-\u003eGContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#v:filterDies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter dead branches from a given extended context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesE",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GExtendedContextFreeGrammar phi t r rr -\u003e GExtendedContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html#filterDiesE",
          "type": "function"
        },
        "index": {
          "description": "Filter dead branches from given extended context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesE",
          "normalized": "a b c d e GExtendedContextFreeGrammar b c d f-\u003eGExtendedContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Dies",
          "signature": "forall phi t r rr. GExtendedContextFreeGrammar phi t r rr-\u003eGExtendedContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#v:filterDiesE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter dead branches from a given extended context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesLE",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GLExtendedContextFreeGrammar phi t r rr -\u003e GLExtendedContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html#filterDiesLE",
          "type": "function"
        },
        "index": {
          "description": "Filter dead branches from given extended context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesLE",
          "normalized": "a b c d e GLExtendedContextFreeGrammar b c d f-\u003eGLExtendedContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Dies LE",
          "signature": "forall phi t r rr. GLExtendedContextFreeGrammar phi t r rr-\u003eGLExtendedContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#v:filterDiesLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter dead branches from a given context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesP",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GPenaltyContextFreeGrammar phi t r rr -\u003e GPenaltyContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html#filterDiesP",
          "type": "function"
        },
        "index": {
          "description": "Filter dead branches from given context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesP",
          "normalized": "a b c d e GPenaltyContextFreeGrammar b c d f-\u003eGPenaltyContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Dies",
          "signature": "forall phi t r rr. GPenaltyContextFreeGrammar phi t r rr-\u003eGPenaltyContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#v:filterDiesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter dead branches from a given context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesPE",
          "package": "grammar-combinators",
          "signature": "forall phi t r rr.  GPenaltyExtendedContextFreeGrammar phi t r rr -\u003e GPenaltyExtendedContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-FilterDies.html#filterDiesPE",
          "type": "function"
        },
        "index": {
          "description": "Filter dead branches from given context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform FilterDies",
          "module": "Text.GrammarCombinators.Transform.FilterDies",
          "name": "filterDiesPE",
          "normalized": "a b c d e GPenaltyExtendedContextFreeGrammar b c d f-\u003eGPenaltyExtendedContextFreeGrammar b c d f",
          "package": "grammar-combinators",
          "partial": "Dies PE",
          "signature": "forall phi t r rr. GPenaltyExtendedContextFreeGrammar phi t r rr-\u003eGPenaltyExtendedContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FilterDies.html#v:filterDiesPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoops",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoops",
          "package": "grammar-combinators",
          "partial": "Fold Loops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parametrised type such that \u003ccode\u003e\u003ca\u003eFLBaseIx\u003c/a\u003e\u003c/code\u003e ix represents\n base non-terminal ix.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLBaseIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#FLBaseIx",
          "type": "data"
        },
        "index": {
          "description": "parametrised type such that FLBaseIx ix represents base non-terminal ix",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLBaseIx",
          "package": "grammar-combinators",
          "partial": "FLBase Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#t:FLBaseIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parametrised type such that \u003ccode\u003e\u003ca\u003eFLBaseIx\u003c/a\u003e\u003c/code\u003e ix represents\n the Kleene-\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e version of base non-terminal ix.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLManyIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#FLManyIx",
          "type": "data"
        },
        "index": {
          "description": "parametrised type such that FLBaseIx ix represents the Kleene version of base non-terminal ix",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLManyIx",
          "package": "grammar-combinators",
          "partial": "FLMany Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#t:FLManyIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldLoopsDomain phi defines, for base domain phi, an\n extended domain containing non-terminal types \n \u003ccode\u003e\u003ca\u003eFLBaseIx\u003c/a\u003e\u003c/code\u003e ix representing base non-terminal ix, and \n \u003ccode\u003e\u003ca\u003eFLManyIx\u003c/a\u003e\u003c/code\u003e ix representing a Kleene-* version of base\n non-terminal ix.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsDomain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#FoldLoopsDomain",
          "type": "data"
        },
        "index": {
          "description": "FoldLoopsDomain phi defines for base domain phi an extended domain containing non-terminal types FLBaseIx ix representing base non-terminal ix and FLManyIx ix representing Kleene version of base non-terminal ix",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsDomain",
          "package": "grammar-combinators",
          "partial": "Fold Loops Domain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#t:FoldLoopsDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldLoopsResultValue defines, for semantic value families\n r and rr over base domain phi, a semantic value family \n \u003ccode\u003e\u003ca\u003eFoldLoopsResultValue\u003c/a\u003e\u003c/code\u003e r rr over domain \u003ccode\u003e\u003ca\u003eFoldLoopsDomain\u003c/a\u003e\u003c/code\u003e r.\n such that the semantic value for base non-terminal \u003ccode\u003e\u003ca\u003eFLBaseIx\u003c/a\u003e\u003c/code\u003e \n is a wrapped version of type rr ix, and for Kleene-* non-terminal\n \u003ccode\u003e\u003ca\u003eFLManyIx\u003c/a\u003e\u003c/code\u003e a wrapped version of type [r ix]. \n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsResultValue",
          "package": "grammar-combinators",
          "signature": "FoldLoopsResultValue",
          "type": "function"
        },
        "index": {
          "description": "FoldLoopsResultValue defines for semantic value families and rr over base domain phi semantic value family FoldLoopsResultValue rr over domain FoldLoopsDomain such that the semantic value for base non-terminal FLBaseIx is wrapped version of type rr ix and for Kleene non-terminal FLManyIx wrapped version of type ix",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsResultValue",
          "package": "grammar-combinators",
          "partial": "Fold Loops Result Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#t:FoldLoopsResultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldLoopsValue defines, for a semantic value family\n r over base domain phi, a semantic value family \n \u003ccode\u003e\u003ca\u003eFoldLoopsValue\u003c/a\u003e\u003c/code\u003e r over domain \u003ccode\u003e\u003ca\u003eFoldLoopsDomain\u003c/a\u003e\u003c/code\u003e r, such\n that the semantic value for base non-terminal \u003ccode\u003e\u003ca\u003eFLBaseIx\u003c/a\u003e\u003c/code\u003e \n is a wrapped version of type r ix, and for Kleene-* non-terminal\n \u003ccode\u003e\u003ca\u003eFLManyIx\u003c/a\u003e\u003c/code\u003e a wrapped version of type [r ix]. \n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsValue",
          "package": "grammar-combinators",
          "signature": "FoldLoopsValue",
          "type": "function"
        },
        "index": {
          "description": "FoldLoopsValue defines for semantic value family over base domain phi semantic value family FoldLoopsValue over domain FoldLoopsDomain such that the semantic value for base non-terminal FLBaseIx is wrapped version of type ix and for Kleene non-terminal FLManyIx wrapped version of type ix",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FoldLoopsValue",
          "package": "grammar-combinators",
          "partial": "Fold Loops Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#t:FoldLoopsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLBase",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e FoldLoopsDomain phi (FLBaseIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#FoldLoopsDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLBase",
          "normalized": "a b-\u003eFoldLoopsDomain a(FLBaseIx b)",
          "package": "grammar-combinators",
          "partial": "FLBase",
          "signature": "phi ix-\u003eFoldLoopsDomain phi(FLBaseIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#v:FLBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLMany",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e FoldLoopsDomain phi (FLManyIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#FoldLoopsDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "FLMany",
          "normalized": "a b-\u003eFoldLoopsDomain a(FLManyIx b)",
          "package": "grammar-combinators",
          "partial": "FLMany",
          "signature": "phi ix-\u003eFoldLoopsDomain phi(FLManyIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#v:FLMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a given processing extended context-free \n grammar over a domain \u003ccode\u003ephi\u003c/code\u003e into a standard context-free\n grammar over the extended domain 'FoldLoopsDomain phi'.\n Completely similar to \u003ccode\u003e\u003ca\u003efoldLoops\u003c/a\u003e\u003c/code\u003e, but wraps values in the\n \u003ccode\u003e\u003ca\u003eFoldLoopsValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e semantic value family.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "foldAndProcessLoops",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingContextFreeGrammar (FoldLoopsDomain phi) t (FoldLoopsValue r)",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#foldAndProcessLoops",
          "type": "function"
        },
        "index": {
          "description": "Transform given processing extended context-free grammar over domain phi into standard context-free grammar over the extended domain FoldLoopsDomain phi Completely similar to foldLoops but wraps values in the FoldLoopsValue semantic value family",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "foldAndProcessLoops",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingContextFreeGrammar(FoldLoopsDomain a)b(FoldLoopsValue c)",
          "package": "grammar-combinators",
          "partial": "And Process Loops",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingContextFreeGrammar(FoldLoopsDomain phi)t(FoldLoopsValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#v:foldAndProcessLoops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a given extended context-free grammar over a domain \u003ccode\u003ephi\u003c/code\u003e into a standard\n context-free grammar over the extended domain \u003ccode\u003e\u003ca\u003eFoldLoopsDomain\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ephi\u003c/code\u003e.\n Calls to \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e idx are transformed into calls to \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFLMany\u003c/a\u003e\u003c/code\u003e idx),\n where \u003ccode\u003e\u003ca\u003eFLMany\u003c/a\u003e\u003c/code\u003e idx is a new non-terminal representing the\n Kleene-* version of underlying non-terminal \u003ccode\u003eidx\u003c/code\u003e. Normal\n calls to \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx are transformed into calls to \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e \n (\u003ccode\u003e\u003ca\u003eFLBase\u003c/a\u003e\u003c/code\u003e idx) where \u003ccode\u003e\u003ca\u003eFLBase\u003c/a\u003e\u003c/code\u003e idx represents the unmodified\n underlying non-terminal \u003ccode\u003eidx\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003efoldLoops\u003c/a\u003e\u003c/code\u003e algorithm \n constructs appropriate production rules for both types of\n new non-terminals.\n Values are wrapped in the \u003ccode\u003e\u003ca\u003eFoldLoopsResultValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e \u003ccode\u003err\u003c/code\u003e\n semantic value family.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "foldLoops",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e GContextFreeGrammar (FoldLoopsDomain phi) t (FoldLoopsValue r) (FoldLoopsResultValue r rr)",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#foldLoops",
          "type": "function"
        },
        "index": {
          "description": "Transform given extended context-free grammar over domain phi into standard context-free grammar over the extended domain FoldLoopsDomain phi Calls to manyRef idx are transformed into calls to ref FLMany idx where FLMany idx is new non-terminal representing the Kleene version of underlying non-terminal idx Normal calls to ref idx are transformed into calls to ref FLBase idx where FLBase idx represents the unmodified underlying non-terminal idx The foldLoops algorithm constructs appropriate production rules for both types of new non-terminals Values are wrapped in the FoldLoopsResultValue rr semantic value family",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "foldLoops",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eGContextFreeGrammar(FoldLoopsDomain a)b(FoldLoopsValue c)(FoldLoopsResultValue c d)",
          "package": "grammar-combinators",
          "partial": "Loops",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eGContextFreeGrammar(FoldLoopsDomain phi)t(FoldLoopsValue r)(FoldLoopsResultValue r rr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#v:foldLoops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a processor for a grammar transformed using the \u003ccode\u003e\u003ca\u003efoldLoops\u003c/a\u003e\u003c/code\u003e algorithm, \n given a processor for the original grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "processFoldLoops",
          "package": "grammar-combinators",
          "signature": "forall phi r rr.  GProcessor phi r rr -\u003e GProcessor (FoldLoopsDomain phi) (FoldLoopsValue r) (FoldLoopsResultValue r rr)",
          "source": "src/Text-GrammarCombinators-Transform-FoldLoops.html#processFoldLoops",
          "type": "function"
        },
        "index": {
          "description": "Construct processor for grammar transformed using the foldLoops algorithm given processor for the original grammar",
          "hierarchy": "Text GrammarCombinators Transform FoldLoops",
          "module": "Text.GrammarCombinators.Transform.FoldLoops",
          "name": "processFoldLoops",
          "normalized": "a b c d GProcessor b c e-\u003eGProcessor(FoldLoopsDomain b)(FoldLoopsValue c)(FoldLoopsResultValue c e)",
          "package": "grammar-combinators",
          "partial": "Fold Loops",
          "signature": "forall phi r rr. GProcessor phi r rr-\u003eGProcessor(FoldLoopsDomain phi)(FoldLoopsValue r)(FoldLoopsResultValue r rr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-FoldLoops.html#v:processFoldLoops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatibility component for the Parsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "IntroduceBias",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-IntroduceBias.html",
          "type": "module"
        },
        "index": {
          "description": "Compatibility component for the Parsec library",
          "hierarchy": "Text GrammarCombinators Transform IntroduceBias",
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "IntroduceBias",
          "package": "grammar-combinators",
          "partial": "Introduce Bias",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-IntroduceBias.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBias",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e ProcessingBiasedContextFreeGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-IntroduceBias.html#introduceBias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform IntroduceBias",
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBias",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eProcessingBiasedContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Bias",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003eProcessingBiasedContextFreeGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-IntroduceBias.html#v:introduceBias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBiasE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingBiasedExtendedContextFreeGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-IntroduceBias.html#introduceBiasE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform IntroduceBias",
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBiasE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingBiasedExtendedContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Bias",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingBiasedExtendedContextFreeGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-IntroduceBias.html#v:introduceBiasE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBiasLE",
          "package": "grammar-combinators",
          "signature": "ProcessingLExtendedContextFreeGrammar phi t r -\u003e ProcessingLBiasedExtendedContextFreeGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-IntroduceBias.html#introduceBiasLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform IntroduceBias",
          "module": "Text.GrammarCombinators.Transform.IntroduceBias",
          "name": "introduceBiasLE",
          "normalized": "ProcessingLExtendedContextFreeGrammar a b c-\u003eProcessingLBiasedExtendedContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Bias LE",
          "signature": "ProcessingLExtendedContextFreeGrammar phi t r-\u003eProcessingLBiasedExtendedContextFreeGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-IntroduceBias.html#v:introduceBiasLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LeftCorner",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LeftCorner",
          "package": "grammar-combinators",
          "partial": "Left Corner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCBaseIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCBaseIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCBaseIx",
          "package": "grammar-combinators",
          "partial": "LCBase Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#t:LCBaseIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLCDomain\u003c/a\u003e\u003c/code\u003e defines, for a base domain phi an extended\n domain containing the non-terminals used by the left-\n corner transform.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCDomain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCDomain",
          "type": "data"
        },
        "index": {
          "description": "LCDomain defines for base domain phi an extended domain containing the non-terminals used by the left corner transform",
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCDomain",
          "package": "grammar-combinators",
          "partial": "LCDomain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#t:LCDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinNTIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCNTMinNTIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinNTIx",
          "package": "grammar-combinators",
          "partial": "LCNTMin NTIx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#t:LCNTMinNTIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinTIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCNTMinTIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinTIx",
          "package": "grammar-combinators",
          "partial": "LCNTMin TIx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#t:LCNTMinTIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCValue",
          "package": "grammar-combinators",
          "signature": "LCValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCValue",
          "package": "grammar-combinators",
          "partial": "LCValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#t:LCValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCBase",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e LCDomain phi t (LCBaseIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCBase",
          "normalized": "a b-\u003eLCDomain a c(LCBaseIx b)",
          "package": "grammar-combinators",
          "partial": "LCBase",
          "signature": "phi ix-\u003eLCDomain phi t(LCBaseIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#v:LCBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinNT",
          "package": "grammar-combinators",
          "signature": "phi ix' -\u003e phi ix -\u003e LCDomain phi t (LCNTMinNTIx ix' ix)",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinNT",
          "normalized": "a b-\u003ea c-\u003eLCDomain a d(LCNTMinNTIx b c)",
          "package": "grammar-combinators",
          "partial": "LCNTMin NT",
          "signature": "phi ix'-\u003ephi ix-\u003eLCDomain phi t(LCNTMinNTIx ix' ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#v:LCNTMinNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinT",
          "package": "grammar-combinators",
          "signature": "t -\u003e phi ix -\u003e LCDomain phi t (LCNTMinTIx t ix)",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#LCDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "LCNTMinT",
          "normalized": "a-\u003eb c-\u003eLCDomain b a(LCNTMinTIx a c)",
          "package": "grammar-combinators",
          "partial": "LCNTMin",
          "signature": "t-\u003ephi ix-\u003eLCDomain phi t(LCNTMinTIx t ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#v:LCNTMinT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the left-corner transform to a given grammar, removing direct and indirect left recursion.\n\u003c/p\u003e\u003cp\u003eNote that the new domain will contain O(n*t + n^2)\n non-terminals where n is the amount of non-terminals and t is the\n number of tokens, so when using this transformation, it can be beneficial to\n use a token type with a more limited amount of token values than \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, at\n least if you will use algorithms that fold over the full new grammar's domain \n (e.g. \u003ccode\u003eprintGrammar\u003c/code\u003e does, \u003ccode\u003eprintReachableGrammar\u003c/code\u003e doesn't).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "transformLeftCorner",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e ProcessingContextFreeGrammar (LCDomain phi t) t (LCValue r t)",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#transformLeftCorner",
          "type": "function"
        },
        "index": {
          "description": "Apply the left-corner transform to given grammar removing direct and indirect left recursion Note that the new domain will contain non-terminals where is the amount of non-terminals and is the number of tokens so when using this transformation it can be beneficial to use token type with more limited amount of token values than Char at least if you will use algorithms that fold over the full new grammar domain e.g printGrammar does printReachableGrammar doesn",
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "transformLeftCorner",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eProcessingContextFreeGrammar(LCDomain a b)b(LCValue c b)",
          "package": "grammar-combinators",
          "partial": "Left Corner",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003eProcessingContextFreeGrammar(LCDomain phi t)t(LCValue r t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#v:transformLeftCorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the left-corner transform to a given extended grammar, removing direct and indirect left recursion.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "transformLeftCornerE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingExtendedContextFreeGrammar (LCDomain phi t) t (LCValue r t)",
          "source": "src/Text-GrammarCombinators-Transform-LeftCorner.html#transformLeftCornerE",
          "type": "function"
        },
        "index": {
          "description": "Apply the left-corner transform to given extended grammar removing direct and indirect left recursion",
          "hierarchy": "Text GrammarCombinators Transform LeftCorner",
          "module": "Text.GrammarCombinators.Transform.LeftCorner",
          "name": "transformLeftCornerE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar(LCDomain a b)b(LCValue c b)",
          "package": "grammar-combinators",
          "partial": "Left Corner",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingExtendedContextFreeGrammar(LCDomain phi t)t(LCValue r t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-LeftCorner.html#v:transformLeftCornerE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.OptimizeGrammar",
          "name": "OptimizeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-OptimizeGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform OptimizeGrammar",
          "module": "Text.GrammarCombinators.Transform.OptimizeGrammar",
          "name": "OptimizeGrammar",
          "package": "grammar-combinators",
          "partial": "Optimize Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-OptimizeGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.OptimizeGrammar",
          "name": "optimizeGrammarE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingExtendedContextFreeGrammar (UPDomain phi) t (UPValue r)",
          "source": "src/Text-GrammarCombinators-Transform-OptimizeGrammar.html#optimizeGrammarE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform OptimizeGrammar",
          "module": "Text.GrammarCombinators.Transform.OptimizeGrammar",
          "name": "optimizeGrammarE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar(UPDomain a)b(UPValue c)",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingExtendedContextFreeGrammar(UPDomain phi)t(UPValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-OptimizeGrammar.html#v:optimizeGrammarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "PenalizeErrors",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "PenalizeErrors",
          "package": "grammar-combinators",
          "partial": "Penalize Errors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "IsJustApp",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#IsJustApp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "IsJustApp",
          "package": "grammar-combinators",
          "partial": "Is Just App",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#t:IsJustApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "MaybeSemanticT",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#MaybeSemanticT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "MaybeSemanticT",
          "package": "grammar-combinators",
          "partial": "Maybe Semantic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#t:MaybeSemanticT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "PBEHProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#PBEHProductionRule",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "PBEHProductionRule",
          "package": "grammar-combinators",
          "partial": "PBEHProduction Rule",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#t:PBEHProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "IJA",
          "package": "grammar-combinators",
          "signature": "IJA",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#IsJustApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "IJA",
          "package": "grammar-combinators",
          "partial": "IJA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:IJA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "JustV",
          "package": "grammar-combinators",
          "signature": "JustV",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#MaybeSemanticT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "JustV",
          "package": "grammar-combinators",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:JustV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "MkPBEH",
          "package": "grammar-combinators",
          "signature": "MkPBEH",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#PBEHProductionRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "MkPBEH",
          "package": "grammar-combinators",
          "partial": "Mk PBEH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:MkPBEH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "NothingV",
          "package": "grammar-combinators",
          "signature": "NothingV",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#MaybeSemanticT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "NothingV",
          "package": "grammar-combinators",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:NothingV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "fromJustV",
          "package": "grammar-combinators",
          "signature": "r ix",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#MaybeSemanticT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "fromJustV",
          "package": "grammar-combinators",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:fromJustV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "isJustV",
          "package": "grammar-combinators",
          "signature": "MaybeSemanticT r ix -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#isJustV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "isJustV",
          "normalized": "MaybeSemanticT a b-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Just",
          "signature": "MaybeSemanticT r ix-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:isJustV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrors",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t (MaybeSemanticT r) rr -\u003e GPenaltyContextFreeGrammar phi t (MaybeSemanticT r) rr",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#penalizeErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrors",
          "normalized": "GContextFreeGrammar a b(MaybeSemanticT c)d-\u003eGPenaltyContextFreeGrammar a b(MaybeSemanticT c)d",
          "package": "grammar-combinators",
          "partial": "Errors",
          "signature": "GContextFreeGrammar phi t(MaybeSemanticT r)rr-\u003eGPenaltyContextFreeGrammar phi t(MaybeSemanticT r)rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:penalizeErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrors'",
          "package": "grammar-combinators",
          "signature": "forall p phi r rr t ix.  (forall ix'.  phi ix' -\u003e PBEHProductionRule p phi (MaybeSemanticT r) r t (rr ix')) -\u003e phi ix -\u003e p (rr ix)",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#penalizeErrors%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrors'",
          "normalized": "a b c d e f g(a h c i-\u003ePBEHProductionRule b c(MaybeSemanticT d)d f(e i))-\u003ec j-\u003eb(e j)",
          "package": "grammar-combinators",
          "partial": "Errors'",
          "signature": "forall p phi r rr t ix.(forall ix'. phi ix'-\u003ePBEHProductionRule p phi(MaybeSemanticT r)r t(rr ix'))-\u003ephi ix-\u003ep(rr ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:penalizeErrors-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrorsE",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t (MaybeSemanticT r) rr -\u003e GPenaltyExtendedContextFreeGrammar phi t (MaybeSemanticT r) rr",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#penalizeErrorsE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "penalizeErrorsE",
          "normalized": "GExtendedContextFreeGrammar a b(MaybeSemanticT c)d-\u003eGPenaltyExtendedContextFreeGrammar a b(MaybeSemanticT c)d",
          "package": "grammar-combinators",
          "partial": "Errors",
          "signature": "GExtendedContextFreeGrammar phi t(MaybeSemanticT r)rr-\u003eGPenaltyExtendedContextFreeGrammar phi t(MaybeSemanticT r)rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:penalizeErrorsE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "processPenalizedSimple",
          "package": "grammar-combinators",
          "signature": "Processor phi r -\u003e Processor phi (MaybeSemanticT r)",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#processPenalizedSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "processPenalizedSimple",
          "normalized": "Processor a b-\u003eProcessor a(MaybeSemanticT b)",
          "package": "grammar-combinators",
          "partial": "Penalized Simple",
          "signature": "Processor phi r-\u003eProcessor phi(MaybeSemanticT r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:processPenalizedSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "unIJA",
          "package": "grammar-combinators",
          "signature": "Bool",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#IsJustApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "unIJA",
          "package": "grammar-combinators",
          "partial": "IJA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:unIJA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "unPBEH",
          "package": "grammar-combinators",
          "signature": "p v",
          "source": "src/Text-GrammarCombinators-Transform-PenalizeErrors.html#PBEHProductionRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform PenalizeErrors",
          "module": "Text.GrammarCombinators.Transform.PenalizeErrors",
          "name": "unPBEH",
          "package": "grammar-combinators",
          "partial": "PBEH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-PenalizeErrors.html#v:unPBEH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "UnfoldChainNTs",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldChainNTs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldChainNTs",
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "UnfoldChainNTs",
          "package": "grammar-combinators",
          "partial": "Unfold Chain NTs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldChainNTs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold chain non-terminals in a given context-\n free grammar.\n A chain non-terminal is a terminal such that its\n production rule is a numer of epsilons followed by a \n single normal reference to another non-terminal.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "unfoldChainNTs",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi r t -\u003e ProcessingContextFreeGrammar phi r t",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldChainNTs.html#unfoldChainNTs",
          "type": "function"
        },
        "index": {
          "description": "Unfold chain non-terminals in given context free grammar chain non-terminal is terminal such that its production rule is numer of epsilons followed by single normal reference to another non-terminal",
          "hierarchy": "Text GrammarCombinators Transform UnfoldChainNTs",
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "unfoldChainNTs",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eProcessingContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Chain NTs",
          "signature": "ProcessingContextFreeGrammar phi r t-\u003eProcessingContextFreeGrammar phi r t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldChainNTs.html#v:unfoldChainNTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold chain non-terminals in a given extended \n context-free grammar.\n A chain non-terminal is a terminal such that its\n production rule is a numer of epsilons followed by a \n single normal reference to another non-terminal.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "unfoldChainNTsE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi r t -\u003e ProcessingExtendedContextFreeGrammar phi r t",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldChainNTs.html#unfoldChainNTsE",
          "type": "function"
        },
        "index": {
          "description": "Unfold chain non-terminals in given extended context-free grammar chain non-terminal is terminal such that its production rule is numer of epsilons followed by single normal reference to another non-terminal",
          "hierarchy": "Text GrammarCombinators Transform UnfoldChainNTs",
          "module": "Text.GrammarCombinators.Transform.UnfoldChainNTs",
          "name": "unfoldChainNTsE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Chain NTs",
          "signature": "ProcessingExtendedContextFreeGrammar phi r t-\u003eProcessingExtendedContextFreeGrammar phi r t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldChainNTs.html#v:unfoldChainNTsE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "UnfoldDead",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldDead.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldDead",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "UnfoldDead",
          "package": "grammar-combinators",
          "partial": "Unfold Dead",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldDead.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold dead non-terminals in a given context-\n free grammar, such\n that the unfolded references can be filtered with the\n \u003ccode\u003efilterDies\u003c/code\u003e algorithm. This uses the \u003ccode\u003e\u003ca\u003eisDead\u003c/a\u003e\u003c/code\u003e algorithm\n to detect dead non-terminals.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDead",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi r t rr -\u003e GContextFreeGrammar phi r t rr",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldDead.html#unfoldDead",
          "type": "function"
        },
        "index": {
          "description": "Unfold dead non-terminals in given context free grammar such that the unfolded references can be filtered with the filterDies algorithm This uses the isDead algorithm to detect dead non-terminals",
          "hierarchy": "Text GrammarCombinators Transform UnfoldDead",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDead",
          "normalized": "GContextFreeGrammar a b c d-\u003eGContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Dead",
          "signature": "GContextFreeGrammar phi r t rr-\u003eGContextFreeGrammar phi r t rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldDead.html#v:unfoldDead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold dead non-terminals in a given extended context-\n free grammar, such\n that the unfolded references can be filtered with the\n \u003ccode\u003efilterDies\u003c/code\u003e algorithm. This uses the \u003ccode\u003e\u003ca\u003eisDead\u003c/a\u003e\u003c/code\u003e algorithm\n to detect dead non-terminals.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDeadE",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi r t rr -\u003e GExtendedContextFreeGrammar phi r t rr",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldDead.html#unfoldDeadE",
          "type": "function"
        },
        "index": {
          "description": "Unfold dead non-terminals in given extended context free grammar such that the unfolded references can be filtered with the filterDies algorithm This uses the isDead algorithm to detect dead non-terminals",
          "hierarchy": "Text GrammarCombinators Transform UnfoldDead",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDeadE",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eGExtendedContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Dead",
          "signature": "GExtendedContextFreeGrammar phi r t rr-\u003eGExtendedContextFreeGrammar phi r t rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldDead.html#v:unfoldDeadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold dead non-terminals in a given extended liftable context-\n free grammar, such\n that the unfolded references can be filtered with the\n \u003ccode\u003efilterDies\u003c/code\u003e algorithm. This uses the \u003ccode\u003e\u003ca\u003eisDead\u003c/a\u003e\u003c/code\u003e algorithm\n to detect dead non-terminals.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDeadLE",
          "package": "grammar-combinators",
          "signature": "GLExtendedContextFreeGrammar phi r t rr -\u003e GLExtendedContextFreeGrammar phi r t rr",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldDead.html#unfoldDeadLE",
          "type": "function"
        },
        "index": {
          "description": "Unfold dead non-terminals in given extended liftable context free grammar such that the unfolded references can be filtered with the filterDies algorithm This uses the isDead algorithm to detect dead non-terminals",
          "hierarchy": "Text GrammarCombinators Transform UnfoldDead",
          "module": "Text.GrammarCombinators.Transform.UnfoldDead",
          "name": "unfoldDeadLE",
          "normalized": "GLExtendedContextFreeGrammar a b c d-\u003eGLExtendedContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Dead LE",
          "signature": "GLExtendedContextFreeGrammar phi r t rr-\u003eGLExtendedContextFreeGrammar phi r t rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldDead.html#v:unfoldDeadLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "UnfoldLoops",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldLoops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldLoops",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "UnfoldLoops",
          "package": "grammar-combinators",
          "partial": "Unfold Loops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldLoops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace loops in a given rule by rules provided\n in two provided sets of rules, replacing calls to\n \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e by the corresponding rule from the first\n set, and calls to \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e by the corresponding rule\n from the second set. You likely don't need this\n and should be looking at \u003ccode\u003e\u003ca\u003eunfoldLoops\u003c/a\u003e\u003c/code\u003e or \n \u003ccode\u003e\u003ca\u003eunfoldLoopsRule\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "replaceLoopsRule",
          "package": "grammar-combinators",
          "signature": "ExtendedContextFreeRule phi r t v -\u003e (forall ix.  phi ix -\u003e p [r ix]) -\u003e (forall ix.  phi ix -\u003e p [r ix]) -\u003e p v",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldLoops.html#replaceLoopsRule",
          "type": "function"
        },
        "index": {
          "description": "Replace loops in given rule by rules provided in two provided sets of rules replacing calls to manyRef by the corresponding rule from the first set and calls to manyRef by the corresponding rule from the second set You likely don need this and should be looking at unfoldLoops or unfoldLoopsRule instead",
          "hierarchy": "Text GrammarCombinators Transform UnfoldLoops",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "replaceLoopsRule",
          "normalized": "ExtendedContextFreeRule a b c d-\u003e(e f a g-\u003eh[b g])-\u003e(e f a g-\u003eh[b g])-\u003eh d",
          "package": "grammar-combinators",
          "partial": "Loops Rule",
          "signature": "ExtendedContextFreeRule phi r t v-\u003e(forall ix. phi ix-\u003ep[r ix])-\u003e(forall ix. phi ix-\u003ep[r ix])-\u003ep v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldLoops.html#v:replaceLoopsRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold loops in a given grammar, replacing calls to\n \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e idx by \u003ccode\u003e\u003ca\u003emanyInf\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx) and likewise\n for \u003ccode\u003e\u003ca\u003emany1Ref\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoops",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e GContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldLoops.html#unfoldLoops",
          "type": "function"
        },
        "index": {
          "description": "Unfold loops in given grammar replacing calls to manyRef idx by manyInf ref idx and likewise for many1Ref",
          "hierarchy": "Text GrammarCombinators Transform UnfoldLoops",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoops",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eGContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Loops",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eGContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldLoops.html#v:unfoldLoops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold loops in a given grammar, replacing calls to\n \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e idx by \u003ccode\u003e\u003ca\u003emanyInf\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx) and likewise\n for \u003ccode\u003e\u003ca\u003emany1Ref\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoopsP",
          "package": "grammar-combinators",
          "signature": "GPenaltyExtendedContextFreeGrammar phi t r rr -\u003e GPenaltyContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldLoops.html#unfoldLoopsP",
          "type": "function"
        },
        "index": {
          "description": "Unfold loops in given grammar replacing calls to manyRef idx by manyInf ref idx and likewise for many1Ref",
          "hierarchy": "Text GrammarCombinators Transform UnfoldLoops",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoopsP",
          "normalized": "GPenaltyExtendedContextFreeGrammar a b c d-\u003eGPenaltyContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Loops",
          "signature": "GPenaltyExtendedContextFreeGrammar phi t r rr-\u003eGPenaltyContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldLoops.html#v:unfoldLoopsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold loops in a given rule, replacing calls to\n \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e idx by \u003ccode\u003e\u003ca\u003emanyInf\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx) and likewise\n for \u003ccode\u003e\u003ca\u003emany1Ref\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoopsRule",
          "package": "grammar-combinators",
          "signature": "ExtendedContextFreeRule phi r t v -\u003e ContextFreeRule phi r t v",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldLoops.html#unfoldLoopsRule",
          "type": "function"
        },
        "index": {
          "description": "Unfold loops in given rule replacing calls to manyRef idx by manyInf ref idx and likewise for many1Ref",
          "hierarchy": "Text GrammarCombinators Transform UnfoldLoops",
          "module": "Text.GrammarCombinators.Transform.UnfoldLoops",
          "name": "unfoldLoopsRule",
          "normalized": "ExtendedContextFreeRule a b c d-\u003eContextFreeRule a b c d",
          "package": "grammar-combinators",
          "partial": "Loops Rule",
          "signature": "ExtendedContextFreeRule phi r t v-\u003eContextFreeRule phi r t v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldLoops.html#v:unfoldLoopsRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "UnfoldRecursion",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "UnfoldRecursion",
          "package": "grammar-combinators",
          "partial": "Unfold Recursion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type UnfoldDepth defines for each non-terminal in a\n grammar how many times it should be unfolded by the \u003ccode\u003e\u003ca\u003eunfoldSelective\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eunfoldSelectiveE\u003c/a\u003e\u003c/code\u003e algorithms.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "UnfoldDepth",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#UnfoldDepth",
          "type": "type"
        },
        "index": {
          "description": "value of type UnfoldDepth defines for each non-terminal in grammar how many times it should be unfolded by the unfoldSelective or unfoldSelectiveE algorithms",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "UnfoldDepth",
          "package": "grammar-combinators",
          "partial": "Unfold Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#t:UnfoldDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function modifying a given \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e phi by applying a given\n function to the depth for a given non-terminal.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "modifyUnfoldDepth",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e (Integer -\u003e Integer) -\u003e phi ix -\u003e UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#modifyUnfoldDepth",
          "type": "function"
        },
        "index": {
          "description": "function modifying given UnfoldDepth phi by applying given function to the depth for given non-terminal",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "modifyUnfoldDepth",
          "normalized": "UnfoldDepth a-\u003e(Integer-\u003eInteger)-\u003ea b-\u003eUnfoldDepth a",
          "package": "grammar-combinators",
          "partial": "Unfold Depth",
          "signature": "UnfoldDepth phi-\u003e(Integer-\u003eInteger)-\u003ephi ix-\u003eUnfoldDepth phi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:modifyUnfoldDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "scaleUD",
          "package": "grammar-combinators",
          "signature": "Integer -\u003e UnfoldDepth phi -\u003e UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#scaleUD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "scaleUD",
          "normalized": "Integer-\u003eUnfoldDepth a-\u003eUnfoldDepth a",
          "package": "grammar-combinators",
          "partial": "UD",
          "signature": "Integer-\u003eUnfoldDepth phi-\u003eUnfoldDepth phi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:scaleUD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e phi indicating every non-terminal\n should be unfolded once.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectAllOnce",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#selectAllOnce",
          "type": "function"
        },
        "index": {
          "description": "value of type UnfoldDepth phi indicating every non-terminal should be unfolded once",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectAllOnce",
          "package": "grammar-combinators",
          "partial": "All Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:selectAllOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function modifying a given \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e phi by increasing \n the depth for a given non-terminal by 1.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectNT",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e phi ix -\u003e UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#selectNT",
          "type": "function"
        },
        "index": {
          "description": "function modifying given UnfoldDepth phi by increasing the depth for given non-terminal by",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectNT",
          "normalized": "UnfoldDepth a-\u003ea b-\u003eUnfoldDepth a",
          "package": "grammar-combinators",
          "partial": "NT",
          "signature": "UnfoldDepth phi-\u003ephi ix-\u003eUnfoldDepth phi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:selectNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e phi indicating nothing should be\n unfolded at all. This can be used as a start value and then further\n modified with the \u003ccode\u003e\u003ca\u003eselectNT\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectNothing",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#selectNothing",
          "type": "function"
        },
        "index": {
          "description": "value of type UnfoldDepth phi indicating nothing should be unfolded at all This can be used as start value and then further modified with the selectNT function",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "selectNothing",
          "package": "grammar-combinators",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:selectNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "sumUD",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e UnfoldDepth phi -\u003e UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#sumUD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "sumUD",
          "normalized": "UnfoldDepth a-\u003eUnfoldDepth a-\u003eUnfoldDepth a",
          "package": "grammar-combinators",
          "partial": "UD",
          "signature": "UnfoldDepth phi-\u003eUnfoldDepth phi-\u003eUnfoldDepth phi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:sumUD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold recursion in a given contextx-free grammar, replacing\n calls to\n \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx with the non-terminal's production rule. This produces\n production rules similar to those in traditional parser combinator\n libraries.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursion",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e ProcessingRegularGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRecursion",
          "type": "function"
        },
        "index": {
          "description": "Unfold recursion in given contextx-free grammar replacing calls to ref idx with the non-terminal production rule This produces production rules similar to those in traditional parser combinator libraries",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursion",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eProcessingRegularGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Recursion",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003eProcessingRegularGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRecursion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionB",
          "package": "grammar-combinators",
          "signature": "ProcessingBiasedContextFreeGrammar phi t r -\u003e ProcessingBiasedRegularGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRecursionB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionB",
          "normalized": "ProcessingBiasedContextFreeGrammar a b c-\u003eProcessingBiasedRegularGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Recursion",
          "signature": "ProcessingBiasedContextFreeGrammar phi t r-\u003eProcessingBiasedRegularGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRecursionB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold recursion in a given extended context-free grammar,\n replacing calls to\n \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e idx with the non-terminal's production rule. This produces\n production rules similar to those in traditional parser combinator\n libraries.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingRegularGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRecursionE",
          "type": "function"
        },
        "index": {
          "description": "Unfold recursion in given extended context-free grammar replacing calls to ref idx with the non-terminal production rule This produces production rules similar to those in traditional parser combinator libraries",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingRegularGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Recursion",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingRegularGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRecursionE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionP",
          "package": "grammar-combinators",
          "signature": "ProcessingPenaltyContextFreeGrammar phi t r -\u003e ProcessingPenaltyRegularGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRecursionP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRecursionP",
          "normalized": "ProcessingPenaltyContextFreeGrammar a b c-\u003eProcessingPenaltyRegularGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Recursion",
          "signature": "ProcessingPenaltyContextFreeGrammar phi t r-\u003eProcessingPenaltyRegularGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRecursionP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a given context-free rule by replacing all references to\n non-terminals with the production rule for that non-terminal in \n a given processing context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRule",
          "package": "grammar-combinators",
          "signature": "ContextFreeRule phi r t v -\u003e ProcessingContextFreeGrammar phi t r -\u003e ContextFreeRule phi r t v",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRule",
          "type": "function"
        },
        "index": {
          "description": "Unfold given context-free rule by replacing all references to non-terminals with the production rule for that non-terminal in given processing context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRule",
          "normalized": "ContextFreeRule a b c d-\u003eProcessingContextFreeGrammar a c b-\u003eContextFreeRule a b c d",
          "package": "grammar-combinators",
          "partial": "Rule",
          "signature": "ContextFreeRule phi r t v-\u003eProcessingContextFreeGrammar phi t r-\u003eContextFreeRule phi r t v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a given extended context-free rule by replacing all\n references to\n non-terminals with the production rule for that non-terminal in \n a given processing extended context-free grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRuleE",
          "package": "grammar-combinators",
          "signature": "ExtendedContextFreeRule phi r t v -\u003e ProcessingExtendedContextFreeGrammar phi t r -\u003e ExtendedContextFreeRule phi r t v",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldRuleE",
          "type": "function"
        },
        "index": {
          "description": "Unfold given extended context-free rule by replacing all references to non-terminals with the production rule for that non-terminal in given processing extended context-free grammar",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldRuleE",
          "normalized": "ExtendedContextFreeRule a b c d-\u003eProcessingExtendedContextFreeGrammar a c b-\u003eExtendedContextFreeRule a b c d",
          "package": "grammar-combinators",
          "partial": "Rule",
          "signature": "ExtendedContextFreeRule phi r t v-\u003eProcessingExtendedContextFreeGrammar phi t r-\u003eExtendedContextFreeRule phi r t v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldRuleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectively unfold a given context-free grammar according to a \n given \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldSelective",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e ProcessingContextFreeGrammar phi t r -\u003e ProcessingContextFreeGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldSelective",
          "type": "function"
        },
        "index": {
          "description": "Selectively unfold given context-free grammar according to given UnfoldDepth",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldSelective",
          "normalized": "UnfoldDepth a-\u003eProcessingContextFreeGrammar a b c-\u003eProcessingContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Selective",
          "signature": "UnfoldDepth phi-\u003eProcessingContextFreeGrammar phi t r-\u003eProcessingContextFreeGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldSelective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectively unfold a given extended context-free grammar\n according to a given \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldSelectiveE",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingExtendedContextFreeGrammar phi t r",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unfoldSelectiveE",
          "type": "function"
        },
        "index": {
          "description": "Selectively unfold given extended context-free grammar according to given UnfoldDepth",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unfoldSelectiveE",
          "normalized": "UnfoldDepth a-\u003eProcessingExtendedContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar a b c",
          "package": "grammar-combinators",
          "partial": "Selective",
          "signature": "UnfoldDepth phi-\u003eProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingExtendedContextFreeGrammar phi t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unfoldSelectiveE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function modifying a given \u003ccode\u003e\u003ca\u003eUnfoldDepth\u003c/a\u003e\u003c/code\u003e phi by decreasing \n the depth for a given non-terminal by 1.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unselectNT",
          "package": "grammar-combinators",
          "signature": "UnfoldDepth phi -\u003e phi ix -\u003e UnfoldDepth phi",
          "source": "src/Text-GrammarCombinators-Transform-UnfoldRecursion.html#unselectNT",
          "type": "function"
        },
        "index": {
          "description": "function modifying given UnfoldDepth phi by decreasing the depth for given non-terminal by",
          "hierarchy": "Text GrammarCombinators Transform UnfoldRecursion",
          "module": "Text.GrammarCombinators.Transform.UnfoldRecursion",
          "name": "unselectNT",
          "normalized": "UnfoldDepth a-\u003ea b-\u003eUnfoldDepth a",
          "package": "grammar-combinators",
          "partial": "NT",
          "signature": "UnfoldDepth phi-\u003ephi ix-\u003eUnfoldDepth phi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UnfoldRecursion.html#v:unselectNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UniformPaull",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UniformPaull",
          "package": "grammar-combinators",
          "partial": "Uniform Paull",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPBaseIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPBaseIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPBaseIx",
          "package": "grammar-combinators",
          "partial": "UPBase Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#t:UPBaseIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPDomain",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPDomain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPDomain",
          "package": "grammar-combinators",
          "partial": "UPDomain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#t:UPDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPHeadIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPHeadIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPHeadIx",
          "package": "grammar-combinators",
          "partial": "UPHead Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#t:UPHeadIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPTailIx",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPTailIx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPTailIx",
          "package": "grammar-combinators",
          "partial": "UPTail Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#t:UPTailIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPValue",
          "package": "grammar-combinators",
          "signature": "UPValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPValue",
          "package": "grammar-combinators",
          "partial": "UPValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#t:UPValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPBase",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e UPDomain phi (UPBaseIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPBase",
          "normalized": "a b-\u003eUPDomain a(UPBaseIx b)",
          "package": "grammar-combinators",
          "partial": "UPBase",
          "signature": "phi ix-\u003eUPDomain phi(UPBaseIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:UPBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPHead",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e UPDomain phi (UPHeadIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPHead",
          "normalized": "a b-\u003eUPDomain a(UPHeadIx b)",
          "package": "grammar-combinators",
          "partial": "UPHead",
          "signature": "phi ix-\u003eUPDomain phi(UPHeadIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:UPHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPTail",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e UPDomain phi (UPTailIx ix)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#UPDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "UPTail",
          "normalized": "a b-\u003eUPDomain a(UPTailIx b)",
          "package": "grammar-combinators",
          "partial": "UPTail",
          "signature": "phi ix-\u003eUPDomain phi(UPTailIx ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:UPTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a uniform variant of the classic Paull transformation to a given grammar,\n removing direct and indirect left recursion.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaull",
          "package": "grammar-combinators",
          "signature": "ProcessingContextFreeGrammar phi t r -\u003e ProcessingExtendedContextFreeGrammar (UPDomain phi) t (UPValue r)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#transformUniformPaull",
          "type": "function"
        },
        "index": {
          "description": "Apply uniform variant of the classic Paull transformation to given grammar removing direct and indirect left recursion",
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaull",
          "normalized": "ProcessingContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar(UPDomain a)b(UPValue c)",
          "package": "grammar-combinators",
          "partial": "Uniform Paull",
          "signature": "ProcessingContextFreeGrammar phi t r-\u003eProcessingExtendedContextFreeGrammar(UPDomain phi)t(UPValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:transformUniformPaull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a uniform variant of the classic Paull transformation to a given extended grammar,\n removing direct and indirect left recursion.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullE",
          "package": "grammar-combinators",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r -\u003e ProcessingExtendedContextFreeGrammar (UPDomain phi) t (UPValue r)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#transformUniformPaullE",
          "type": "function"
        },
        "index": {
          "description": "Apply uniform variant of the classic Paull transformation to given extended grammar removing direct and indirect left recursion",
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullE",
          "normalized": "ProcessingExtendedContextFreeGrammar a b c-\u003eProcessingExtendedContextFreeGrammar(UPDomain a)b(UPValue c)",
          "package": "grammar-combinators",
          "partial": "Uniform Paull",
          "signature": "ProcessingExtendedContextFreeGrammar phi t r-\u003eProcessingExtendedContextFreeGrammar(UPDomain phi)t(UPValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:transformUniformPaullE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a uniform variant of the classic Paull transformation to a given extended liftable grammar,\n removing direct and indirect left recursion.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullLE",
          "package": "grammar-combinators",
          "signature": "ProcessingLExtendedContextFreeGrammar phi t r -\u003e ProcessingLExtendedContextFreeGrammar (UPDomain phi) t (UPValue r)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#transformUniformPaullLE",
          "type": "function"
        },
        "index": {
          "description": "Apply uniform variant of the classic Paull transformation to given extended liftable grammar removing direct and indirect left recursion",
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullLE",
          "normalized": "ProcessingLExtendedContextFreeGrammar a b c-\u003eProcessingLExtendedContextFreeGrammar(UPDomain a)b(UPValue c)",
          "package": "grammar-combinators",
          "partial": "Uniform Paull LE",
          "signature": "ProcessingLExtendedContextFreeGrammar phi t r-\u003eProcessingLExtendedContextFreeGrammar(UPDomain phi)t(UPValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:transformUniformPaullLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullP",
          "package": "grammar-combinators",
          "signature": "ProcessingPenaltyContextFreeGrammar phi t r -\u003e ProcessingPenaltyExtendedContextFreeGrammar (UPDomain phi) t (UPValue r)",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#transformUniformPaullP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "transformUniformPaullP",
          "normalized": "ProcessingPenaltyContextFreeGrammar a b c-\u003eProcessingPenaltyExtendedContextFreeGrammar(UPDomain a)b(UPValue c)",
          "package": "grammar-combinators",
          "partial": "Uniform Paull",
          "signature": "ProcessingPenaltyContextFreeGrammar phi t r-\u003eProcessingPenaltyExtendedContextFreeGrammar(UPDomain phi)t(UPValue r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:transformUniformPaullP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPBV",
          "package": "grammar-combinators",
          "signature": "UPValue r (UPBaseIx ix) -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#unUPBV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPBV",
          "normalized": "UPValue a(UPBaseIx b)-\u003ea b",
          "package": "grammar-combinators",
          "partial": "UPBV",
          "signature": "UPValue r(UPBaseIx ix)-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:unUPBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPHV",
          "package": "grammar-combinators",
          "signature": "UPValue r (UPHeadIx ix) -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#unUPHV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPHV",
          "normalized": "UPValue a(UPHeadIx b)-\u003ea b",
          "package": "grammar-combinators",
          "partial": "UPHV",
          "signature": "UPValue r(UPHeadIx ix)-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:unUPHV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPTV",
          "package": "grammar-combinators",
          "signature": "UPValue r (UPTailIx ix) -\u003e r ix -\u003e r ix",
          "source": "src/Text-GrammarCombinators-Transform-UniformPaull.html#unUPTV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Transform UniformPaull",
          "module": "Text.GrammarCombinators.Transform.UniformPaull",
          "name": "unUPTV",
          "normalized": "UPValue a(UPTailIx b)-\u003ea b-\u003ea b",
          "package": "grammar-combinators",
          "partial": "UPTV",
          "signature": "UPValue r(UPTailIx ix)-\u003er ix-\u003er ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Transform-UniformPaull.html#v:unUPTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.AssessSize",
          "name": "AssessSize",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-AssessSize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils AssessSize",
          "module": "Text.GrammarCombinators.Utils.AssessSize",
          "name": "AssessSize",
          "package": "grammar-combinators",
          "partial": "Assess Size",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-AssessSize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssess the size of a given grammar. Primitive rules (\u003ccode\u003e\u003ca\u003etoken\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emanyRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emany1Ref\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e)\n   are counted as 1 point, combinators like \u003ccode\u003e\u003ca\u003e|||\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e just add the points of their left and\n   right hand sides. Proposals for better metrics are welcome.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.AssessSize",
          "name": "assessSize",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e Int",
          "source": "src/Text-GrammarCombinators-Utils-AssessSize.html#assessSize",
          "type": "function"
        },
        "index": {
          "description": "Assess the size of given grammar Primitive rules token ref manyRef many1Ref epsilon are counted as point combinators like or just add the points of their left and right hand sides Proposals for better metrics are welcome",
          "hierarchy": "Text GrammarCombinators Utils AssessSize",
          "module": "Text.GrammarCombinators.Utils.AssessSize",
          "name": "assessSize",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eInt",
          "package": "grammar-combinators",
          "partial": "Size",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-AssessSize.html#v:assessSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "CalcFirst",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "CalcFirst",
          "package": "grammar-combinators",
          "partial": "Calc First",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FSCalculator",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FSCalculator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FSCalculator",
          "package": "grammar-combinators",
          "partial": "FSCalculator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#t:FSCalculator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FirstSet",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FirstSet",
          "package": "grammar-combinators",
          "partial": "First Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#t:FirstSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FirstSetGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSetGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FirstSetGrammar",
          "package": "grammar-combinators",
          "partial": "First Set Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#t:FirstSetGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FS",
          "package": "grammar-combinators",
          "signature": "FS",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "FS",
          "package": "grammar-combinators",
          "partial": "FS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:FS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "calcFS",
          "package": "grammar-combinators",
          "signature": "FSCalculator phi r t rr v -\u003e FirstSetGrammar phi r t rr -\u003e FirstSet t",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#calcFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "calcFS",
          "normalized": "FSCalculator a b c d e-\u003eFirstSetGrammar a b c d-\u003eFirstSet c",
          "package": "grammar-combinators",
          "partial": "FS",
          "signature": "FSCalculator phi r t rr v-\u003eFirstSetGrammar phi r t rr-\u003eFirstSet t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:calcFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "calcFirst",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e FirstSet t",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#calcFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "calcFirst",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003ea e-\u003eFirstSet b",
          "package": "grammar-combinators",
          "partial": "First",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003eFirstSet t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:calcFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "canBeEOI",
          "package": "grammar-combinators",
          "signature": "Bool",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "canBeEOI",
          "package": "grammar-combinators",
          "partial": "Be EOI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:canBeEOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "canBeEmpty",
          "package": "grammar-combinators",
          "signature": "Bool",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "canBeEmpty",
          "package": "grammar-combinators",
          "partial": "Be Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:canBeEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "firstSet",
          "package": "grammar-combinators",
          "signature": "Set t",
          "source": "src/Text-GrammarCombinators-Utils-CalcFirst.html#FirstSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CalcFirst",
          "module": "Text.GrammarCombinators.Utils.CalcFirst",
          "name": "firstSet",
          "package": "grammar-combinators",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CalcFirst.html#v:firstSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "CombineProcessors",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CombineProcessors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CombineProcessors",
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "CombineProcessors",
          "package": "grammar-combinators",
          "partial": "Combine Processors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CombineProcessors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "CombineFam",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-CombineProcessors.html#CombineFam",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CombineProcessors",
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "CombineFam",
          "package": "grammar-combinators",
          "partial": "Combine Fam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CombineProcessors.html#t:CombineFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "Combine",
          "package": "grammar-combinators",
          "signature": "Combine (r1 ix) (r2 ix)",
          "source": "src/Text-GrammarCombinators-Utils-CombineProcessors.html#CombineFam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils CombineProcessors",
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "Combine",
          "package": "grammar-combinators",
          "partial": "Combine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CombineProcessors.html#v:Combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two semantic processors into a single one that tuples\n   their respective values.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "combineProcessors",
          "package": "grammar-combinators",
          "signature": "forall phi rr1 r1 rr2 r2.  GProcessor phi rr1 r1 -\u003e GProcessor phi rr2 r2 -\u003e GProcessor phi (CombineFam rr1 rr2) (CombineFam r1 r2)",
          "source": "src/Text-GrammarCombinators-Utils-CombineProcessors.html#combineProcessors",
          "type": "function"
        },
        "index": {
          "description": "Combine two semantic processors into single one that tuples their respective values",
          "hierarchy": "Text GrammarCombinators Utils CombineProcessors",
          "module": "Text.GrammarCombinators.Utils.CombineProcessors",
          "name": "combineProcessors",
          "normalized": "a b c d c d GProcessor b c d-\u003eGProcessor b c d-\u003eGProcessor b(CombineFam c c)(CombineFam d d)",
          "package": "grammar-combinators",
          "partial": "Processors",
          "signature": "forall phi rr r rr r GProcessor phi rr r-\u003eGProcessor phi rr r-\u003eGProcessor phi(CombineFam rr rr)(CombineFam r r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-CombineProcessors.html#v:combineProcessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "EnumTokens",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-EnumTokens.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumTokens",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "EnumTokens",
          "package": "grammar-combinators",
          "partial": "Enum Tokens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumTokens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all tokens that can be present in any match of any string that can be matched \n   by any non-terminal in a given grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumAllTokens",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e [t]",
          "source": "src/Text-GrammarCombinators-Utils-EnumTokens.html#enumAllTokens",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all tokens that can be present in any match of any string that can be matched by any non-terminal in given grammar",
          "hierarchy": "Text GrammarCombinators Utils EnumTokens",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumAllTokens",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003e[b]",
          "package": "grammar-combinators",
          "partial": "All Tokens",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumTokens.html#v:enumAllTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all tokens that can be present in any match of a given production rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumRuleTokens",
          "package": "grammar-combinators",
          "signature": "ExtendedContextFreeRule phi r t v -\u003e [t]",
          "source": "src/Text-GrammarCombinators-Utils-EnumTokens.html#enumRuleTokens",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all tokens that can be present in any match of given production rule",
          "hierarchy": "Text GrammarCombinators Utils EnumTokens",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumRuleTokens",
          "normalized": "ExtendedContextFreeRule a b c d-\u003e[c]",
          "package": "grammar-combinators",
          "partial": "Rule Tokens",
          "signature": "ExtendedContextFreeRule phi r t v-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumTokens.html#v:enumRuleTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all tokens that can be present in any match of any string that can be matched \n   by a given non-terminal in a given grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumTokens",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e [t]",
          "source": "src/Text-GrammarCombinators-Utils-EnumTokens.html#enumTokens",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all tokens that can be present in any match of any string that can be matched by given non-terminal in given grammar",
          "hierarchy": "Text GrammarCombinators Utils EnumTokens",
          "module": "Text.GrammarCombinators.Utils.EnumTokens",
          "name": "enumTokens",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003ea e-\u003e[b]",
          "package": "grammar-combinators",
          "partial": "Tokens",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumTokens.html#v:enumTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateGrammar",
          "package": "grammar-combinators",
          "partial": "Enumerate Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#EnumerateGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateGrammar",
          "package": "grammar-combinators",
          "partial": "Enumerate Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#t:EnumerateGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateParserInternalGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#EnumerateParserInternalGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateParserInternalGrammar",
          "package": "grammar-combinators",
          "partial": "Enumerate Parser Internal Grammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#t:EnumerateParserInternalGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#EnumerateProductionRule",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "EnumerateProductionRule",
          "package": "grammar-combinators",
          "partial": "Enumerate Production Rule",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#t:EnumerateProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "IPP",
          "package": "grammar-combinators",
          "signature": "IPP",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#EnumerateProductionRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "IPP",
          "package": "grammar-combinators",
          "partial": "IPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#v:IPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "enumerateGrammar",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t r rr -\u003e Int -\u003e phi ix -\u003e [[ConcreteToken t]]",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#enumerateGrammar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "enumerateGrammar",
          "normalized": "GContextFreeGrammar a b c d-\u003eInt-\u003ea e-\u003e[[ConcreteToken b]]",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GContextFreeGrammar phi t r rr-\u003eInt-\u003ephi ix-\u003e[[ConcreteToken t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#v:enumerateGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "enumerateGrammarE",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e Int -\u003e phi ix -\u003e [[ConcreteToken t]]",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#enumerateGrammarE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "enumerateGrammarE",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eInt-\u003ea e-\u003e[[ConcreteToken b]]",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eInt-\u003ephi ix-\u003e[[ConcreteToken t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#v:enumerateGrammarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "printIPP",
          "package": "grammar-combinators",
          "signature": "EnumerateParserInternalGrammar phi t -\u003e Int -\u003e [[ConcreteToken t]]",
          "source": "src/Text-GrammarCombinators-Utils-EnumerateGrammar.html#EnumerateProductionRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils EnumerateGrammar",
          "module": "Text.GrammarCombinators.Utils.EnumerateGrammar",
          "name": "printIPP",
          "normalized": "EnumerateParserInternalGrammar a b-\u003eInt-\u003e[[ConcreteToken b]]",
          "package": "grammar-combinators",
          "partial": "IPP",
          "signature": "EnumerateParserInternalGrammar phi t-\u003eInt-\u003e[[ConcreteToken t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-EnumerateGrammar.html#v:printIPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.IsChainNT",
          "name": "IsChainNT",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-IsChainNT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils IsChainNT",
          "module": "Text.GrammarCombinators.Utils.IsChainNT",
          "name": "IsChainNT",
          "package": "grammar-combinators",
          "partial": "Is Chain NT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsChainNT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetect if a given non-terminal in a given extended context free \n grammar is a chain non-terminal. An NT is a chain NT if all of\n its productions are chain rules.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsChainNT",
          "name": "isChainNT",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e phi idx -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Utils-IsChainNT.html#isChainNT",
          "type": "function"
        },
        "index": {
          "description": "Detect if given non-terminal in given extended context free grammar is chain non-terminal An NT is chain NT if all of its productions are chain rules",
          "hierarchy": "Text GrammarCombinators Utils IsChainNT",
          "module": "Text.GrammarCombinators.Utils.IsChainNT",
          "name": "isChainNT",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003ea e-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Chain NT",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003ephi idx-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsChainNT.html#v:isChainNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.IsDead",
          "name": "IsDead",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-IsDead.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils IsDead",
          "module": "Text.GrammarCombinators.Utils.IsDead",
          "name": "IsDead",
          "package": "grammar-combinators",
          "partial": "Is Dead",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsDead.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetect if a given non-terminal in a given grammar is dead. A \n non-terminal is dead if its production rule can never match\n anything.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsDead",
          "name": "isDead",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Utils-IsDead.html#isDead",
          "type": "function"
        },
        "index": {
          "description": "Detect if given non-terminal in given grammar is dead non-terminal is dead if its production rule can never match anything",
          "hierarchy": "Text GrammarCombinators Utils IsDead",
          "module": "Text.GrammarCombinators.Utils.IsDead",
          "name": "isDead",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003ea e-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Dead",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsDead.html#v:isDead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.IsEpsilon",
          "name": "IsEpsilon",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-IsEpsilon.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils IsEpsilon",
          "module": "Text.GrammarCombinators.Utils.IsEpsilon",
          "name": "IsEpsilon",
          "package": "grammar-combinators",
          "partial": "Is Epsilon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsEpsilon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetect if a given context-free rule is an epsilon rule.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsEpsilon",
          "name": "isEpsilon",
          "package": "grammar-combinators",
          "signature": "ContextFreeRule phi r t v -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Utils-IsEpsilon.html#isEpsilon",
          "type": "function"
        },
        "index": {
          "description": "Detect if given context-free rule is an epsilon rule",
          "hierarchy": "Text GrammarCombinators Utils IsEpsilon",
          "module": "Text.GrammarCombinators.Utils.IsEpsilon",
          "name": "isEpsilon",
          "normalized": "ContextFreeRule a b c d-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Epsilon",
          "signature": "ContextFreeRule phi r t v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsEpsilon.html#v:isEpsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "IsReachable",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-IsReachable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils IsReachable",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "IsReachable",
          "package": "grammar-combinators",
          "partial": "Is Reachable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsReachable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a given function over all non-terminals that are reachable \n from a given non-terminal. This function will at least fold over the\n given non-terminal itself.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "foldReachable",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e (forall ix'.  phi ix' -\u003e n -\u003e n) -\u003e n -\u003e n",
          "source": "src/Text-GrammarCombinators-Utils-IsReachable.html#foldReachable",
          "type": "function"
        },
        "index": {
          "description": "Fold given function over all non-terminals that are reachable from given non-terminal This function will at least fold over the given non-terminal itself",
          "hierarchy": "Text GrammarCombinators Utils IsReachable",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "foldReachable",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003e(f g a h-\u003ei-\u003ei)-\u003ei-\u003ei",
          "package": "grammar-combinators",
          "partial": "Reachable",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003e(forall ix'. phi ix'-\u003en-\u003en)-\u003en-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsReachable.html#v:foldReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a given function over all non-terminals that are reachable \n from a given non-terminal. This function is limited to proper\n reachable rules (see \u003ccode\u003e\u003ca\u003eisReachableProper\u003c/a\u003e\u003c/code\u003e for what that means).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "foldReachableProper",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e (forall ix'.  phi ix' -\u003e n -\u003e n) -\u003e n -\u003e n",
          "source": "src/Text-GrammarCombinators-Utils-IsReachable.html#foldReachableProper",
          "type": "function"
        },
        "index": {
          "description": "Fold given function over all non-terminals that are reachable from given non-terminal This function is limited to proper reachable rules see isReachableProper for what that means",
          "hierarchy": "Text GrammarCombinators Utils IsReachable",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "foldReachableProper",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003e(f g a h-\u003ei-\u003ei)-\u003ei-\u003ei",
          "package": "grammar-combinators",
          "partial": "Reachable Proper",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003e(forall ix'. phi ix'-\u003en-\u003en)-\u003en-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsReachable.html#v:foldReachableProper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given non-terminal is reachable from a given other non-terminal\n in a given extended context-free grammar. This function assumes\n that all grammars are reachable from themselves.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "isReachable",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e phi ix' -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Utils-IsReachable.html#isReachable",
          "type": "function"
        },
        "index": {
          "description": "Check if given non-terminal is reachable from given other non-terminal in given extended context-free grammar This function assumes that all grammars are reachable from themselves",
          "hierarchy": "Text GrammarCombinators Utils IsReachable",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "isReachable",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003ea f-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Reachable",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003ephi ix'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsReachable.html#v:isReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given non-terminal is reachable from a given other non-terminal\n in a given extended context-free grammar. For this function, a non- \n terminal is not automatically considered reachable from itself, but\n only if it has some production in which a submatch of itself is\n present.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "isReachableProper",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e phi ix' -\u003e Bool",
          "source": "src/Text-GrammarCombinators-Utils-IsReachable.html#isReachableProper",
          "type": "function"
        },
        "index": {
          "description": "Check if given non-terminal is reachable from given other non-terminal in given extended context-free grammar For this function non terminal is not automatically considered reachable from itself but only if it has some production in which submatch of itself is present",
          "hierarchy": "Text GrammarCombinators Utils IsReachable",
          "module": "Text.GrammarCombinators.Utils.IsReachable",
          "name": "isReachableProper",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003ea f-\u003eBool",
          "package": "grammar-combinators",
          "partial": "Reachable Proper",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003ephi ix'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-IsReachable.html#v:isReachableProper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "LiftGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-LiftGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils LiftGrammar",
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "LiftGrammar",
          "package": "grammar-combinators",
          "partial": "Lift Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-LiftGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a given grammar to Template Haskell \n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "liftGrammar",
          "package": "grammar-combinators",
          "signature": "GLAnyExtendedContextFreeGrammar phi t r rr -\u003e Name -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Text-GrammarCombinators-Utils-LiftGrammar.html#liftGrammar",
          "type": "function"
        },
        "index": {
          "description": "Lift given grammar to Template Haskell",
          "hierarchy": "Text GrammarCombinators Utils LiftGrammar",
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "liftGrammar",
          "normalized": "GLAnyExtendedContextFreeGrammar a b c d-\u003eName-\u003eQ Type-\u003eQ[Dec]",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GLAnyExtendedContextFreeGrammar phi t r rr-\u003eName-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-LiftGrammar.html#v:liftGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a given grammar to Template Haskell and replace recursion and loops with \n infinite-tree style recursive calls to the grammar itself. This allows GHC to do\n a much better optimization (x20 speed-ups in one realistic test, compared with\n result of \u003ccode\u003e\u003ca\u003eliftGrammar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "unfoldAndLiftGrammar",
          "package": "grammar-combinators",
          "signature": "GLAnyExtendedContextFreeGrammar phi t r rr -\u003e Name -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Text-GrammarCombinators-Utils-LiftGrammar.html#unfoldAndLiftGrammar",
          "type": "function"
        },
        "index": {
          "description": "Lift given grammar to Template Haskell and replace recursion and loops with infinite-tree style recursive calls to the grammar itself This allows GHC to do much better optimization x20 speed-ups in one realistic test compared with result of liftGrammar",
          "hierarchy": "Text GrammarCombinators Utils LiftGrammar",
          "module": "Text.GrammarCombinators.Utils.LiftGrammar",
          "name": "unfoldAndLiftGrammar",
          "normalized": "GLAnyExtendedContextFreeGrammar a b c d-\u003eName-\u003eQ Type-\u003eQ[Dec]",
          "package": "grammar-combinators",
          "partial": "And Lift Grammar",
          "signature": "GLAnyExtendedContextFreeGrammar phi t r rr-\u003eName-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-LiftGrammar.html#v:unfoldAndLiftGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "MemoizeGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-MemoizeGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils MemoizeGrammar",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "MemoizeGrammar",
          "package": "grammar-combinators",
          "partial": "Memoize Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-MemoizeGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the production rules of a grammar. Currently not sure if this is ever useful.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammar",
          "package": "grammar-combinators",
          "signature": "GContextFreeGrammar phi t r rr -\u003e GContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Utils-MemoizeGrammar.html#memoizeGrammar",
          "type": "function"
        },
        "index": {
          "description": "Memoize the production rules of grammar Currently not sure if this is ever useful",
          "hierarchy": "Text GrammarCombinators Utils MemoizeGrammar",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammar",
          "normalized": "GContextFreeGrammar a b c d-\u003eGContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GContextFreeGrammar phi t r rr-\u003eGContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-MemoizeGrammar.html#v:memoizeGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the production rules of an extended grammar. Currently not sure if this is ever useful.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammarE",
          "package": "grammar-combinators",
          "signature": "GExtendedContextFreeGrammar phi t r rr -\u003e GExtendedContextFreeGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Utils-MemoizeGrammar.html#memoizeGrammarE",
          "type": "function"
        },
        "index": {
          "description": "Memoize the production rules of an extended grammar Currently not sure if this is ever useful",
          "hierarchy": "Text GrammarCombinators Utils MemoizeGrammar",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammarE",
          "normalized": "GExtendedContextFreeGrammar a b c d-\u003eGExtendedContextFreeGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GExtendedContextFreeGrammar phi t r rr-\u003eGExtendedContextFreeGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-MemoizeGrammar.html#v:memoizeGrammarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the production rules of a regular grammar. Currently not sure if this is ever useful.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammarR",
          "package": "grammar-combinators",
          "signature": "GRegularGrammar phi t r rr -\u003e GRegularGrammar phi t r rr",
          "source": "src/Text-GrammarCombinators-Utils-MemoizeGrammar.html#memoizeGrammarR",
          "type": "function"
        },
        "index": {
          "description": "Memoize the production rules of regular grammar Currently not sure if this is ever useful",
          "hierarchy": "Text GrammarCombinators Utils MemoizeGrammar",
          "module": "Text.GrammarCombinators.Utils.MemoizeGrammar",
          "name": "memoizeGrammarR",
          "normalized": "GRegularGrammar a b c d-\u003eGRegularGrammar a b c d",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GRegularGrammar phi t r rr-\u003eGRegularGrammar phi t r rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-MemoizeGrammar.html#v:memoizeGrammarR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "PrintGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-PrintGrammar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils PrintGrammar",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "PrintGrammar",
          "package": "grammar-combinators",
          "partial": "Print Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-PrintGrammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint out a full grammar.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printGrammar",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e String",
          "source": "src/Text-GrammarCombinators-Utils-PrintGrammar.html#printGrammar",
          "type": "function"
        },
        "index": {
          "description": "Print out full grammar",
          "hierarchy": "Text GrammarCombinators Utils PrintGrammar",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printGrammar",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003eString",
          "package": "grammar-combinators",
          "partial": "Grammar",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-PrintGrammar.html#v:printGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint out a grammar with a depth limit. Intended for infinite grammars.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printGrammarInf",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e Integer -\u003e String",
          "source": "src/Text-GrammarCombinators-Utils-PrintGrammar.html#printGrammarInf",
          "type": "function"
        },
        "index": {
          "description": "Print out grammar with depth limit Intended for infinite grammars",
          "hierarchy": "Text GrammarCombinators Utils PrintGrammar",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printGrammarInf",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003eInteger-\u003eString",
          "package": "grammar-combinators",
          "partial": "Grammar Inf",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003eInteger-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-PrintGrammar.html#v:printGrammarInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint out the part of a grammar that is reachable from a given non-terminal.\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printReachableGrammar",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e String",
          "source": "src/Text-GrammarCombinators-Utils-PrintGrammar.html#printReachableGrammar",
          "type": "function"
        },
        "index": {
          "description": "Print out the part of grammar that is reachable from given non-terminal",
          "hierarchy": "Text GrammarCombinators Utils PrintGrammar",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printReachableGrammar",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003eString",
          "package": "grammar-combinators",
          "partial": "Reachable Grammar",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-PrintGrammar.html#v:printReachableGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint out a single production rule\n\u003c/p\u003e",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printRule",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e Integer -\u003e phi ix -\u003e String",
          "source": "src/Text-GrammarCombinators-Utils-PrintGrammar.html#printRule",
          "type": "function"
        },
        "index": {
          "description": "Print out single production rule",
          "hierarchy": "Text GrammarCombinators Utils PrintGrammar",
          "module": "Text.GrammarCombinators.Utils.PrintGrammar",
          "name": "printRule",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003eInteger-\u003ea e-\u003eString",
          "package": "grammar-combinators",
          "partial": "Rule",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003eInteger-\u003ephi ix-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-PrintGrammar.html#v:printRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "ToGraph",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "ToGraph",
          "package": "grammar-combinators",
          "partial": "To Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "fullGrammarToGraph",
          "package": "grammar-combinators",
          "signature": "Int -\u003e GExtendedContextFreeGrammar phi t r rr -\u003e gr String String",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html#fullGrammarToGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "fullGrammarToGraph",
          "normalized": "Int-\u003eGExtendedContextFreeGrammar a b c d-\u003ee String String",
          "package": "grammar-combinators",
          "partial": "Grammar To Graph",
          "signature": "Int-\u003eGExtendedContextFreeGrammar phi t r rr-\u003egr String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#v:fullGrammarToGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "graphToGraphviz",
          "package": "grammar-combinators",
          "signature": "Gr String String -\u003e DotGraph Node",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html#graphToGraphviz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "graphToGraphviz",
          "normalized": "Gr String String-\u003eDotGraph Node",
          "package": "grammar-combinators",
          "partial": "To Graphviz",
          "signature": "Gr String String-\u003eDotGraph Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#v:graphToGraphviz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "reachableGrammarToGraph",
          "package": "grammar-combinators",
          "signature": "Int -\u003e GExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e gr String String",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html#reachableGrammarToGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "reachableGrammarToGraph",
          "normalized": "Int-\u003eGExtendedContextFreeGrammar a b c d-\u003ea e-\u003ef String String",
          "package": "grammar-combinators",
          "partial": "Grammar To Graph",
          "signature": "Int-\u003eGExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003egr String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#v:reachableGrammarToGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "ruleToGraph",
          "package": "grammar-combinators",
          "signature": "Int -\u003e GExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e gr String String",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html#ruleToGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "ruleToGraph",
          "normalized": "Int-\u003eGExtendedContextFreeGrammar a b c d-\u003ea e-\u003ef String String",
          "package": "grammar-combinators",
          "partial": "To Graph",
          "signature": "Int-\u003eGExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003egr String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#v:ruleToGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "showGraph",
          "package": "grammar-combinators",
          "signature": "dg n -\u003e IO ()",
          "source": "src/Text-GrammarCombinators-Utils-ToGraph.html#showGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils ToGraph",
          "module": "Text.GrammarCombinators.Utils.ToGraph",
          "name": "showGraph",
          "normalized": "a b-\u003eIO()",
          "package": "grammar-combinators",
          "partial": "Graph",
          "signature": "dg n-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-ToGraph.html#v:showGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UnfoldDepthFirst",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UnfoldDepthFirst",
          "package": "grammar-combinators",
          "partial": "Unfold Depth First",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "SimpleLoopProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#SimpleLoopProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "SimpleLoopProductionRule",
          "package": "grammar-combinators",
          "partial": "Simple Loop Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#t:SimpleLoopProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "SimpleRecProductionRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#SimpleRecProductionRule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "SimpleRecProductionRule",
          "package": "grammar-combinators",
          "partial": "Simple Rec Production Rule",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#t:SimpleRecProductionRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UDFGrammar",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#UDFGrammar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UDFGrammar",
          "package": "grammar-combinators",
          "partial": "UDFGrammar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#t:UDFGrammar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UnfoldDepthFirstRule",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#UnfoldDepthFirstRule",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "UnfoldDepthFirstRule",
          "package": "grammar-combinators",
          "partial": "Unfold Depth First Rule",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#t:UnfoldDepthFirstRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "WrapUR",
          "package": "grammar-combinators",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#WrapUR",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "WrapUR",
          "package": "grammar-combinators",
          "partial": "Wrap UR",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#t:WrapUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "MkFRR",
          "package": "grammar-combinators",
          "signature": "MkFRR",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#UnfoldDepthFirstRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "MkFRR",
          "package": "grammar-combinators",
          "partial": "Mk FRR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:MkFRR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "WUR",
          "package": "grammar-combinators",
          "signature": "WUR",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#WrapUR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "WUR",
          "package": "grammar-combinators",
          "partial": "WUR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:WUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "cutRecursion",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (rr ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#cutRecursion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "cutRecursion",
          "normalized": "a b-\u003ec(d b)",
          "package": "grammar-combinators",
          "partial": "Recursion",
          "signature": "phi ix-\u003ep(rr ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:cutRecursion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "declareDead",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e UDFGrammar p phi r t rr -\u003e UDFGrammar p phi r t rr",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#declareDead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "declareDead",
          "normalized": "a b-\u003eUDFGrammar c a d e f-\u003eUDFGrammar c a d e f",
          "package": "grammar-combinators",
          "partial": "Dead",
          "signature": "phi ix-\u003eUDFGrammar p phi r t rr-\u003eUDFGrammar p phi r t rr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:declareDead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "foldReachableFromRule",
          "package": "grammar-combinators",
          "signature": "UDFGrammar p phi r t rr -\u003e p v",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#UnfoldDepthFirstRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "foldReachableFromRule",
          "normalized": "UDFGrammar a b c d e-\u003ea f",
          "package": "grammar-combinators",
          "partial": "Reachable From Rule",
          "signature": "UDFGrammar p phi r t rr-\u003ep v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:foldReachableFromRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "many1Ref'",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (rr ix) -\u003e p [r ix]",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#many1Ref%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "many1Ref'",
          "normalized": "a b-\u003ec(d b)-\u003ec[e b]",
          "package": "grammar-combinators",
          "partial": "Ref'",
          "signature": "phi ix-\u003ep(rr ix)-\u003ep[r ix]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:many1Ref-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "manyRef'",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (rr ix) -\u003e p [r ix]",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#manyRef%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "manyRef'",
          "normalized": "a b-\u003ec(d b)-\u003ec[e b]",
          "package": "grammar-combinators",
          "partial": "Ref'",
          "signature": "phi ix-\u003ep(rr ix)-\u003ep[r ix]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:manyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "ref'",
          "package": "grammar-combinators",
          "signature": "phi ix -\u003e p (rr ix) -\u003e p (r ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#ref%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "ref'",
          "normalized": "a b-\u003ec(d b)-\u003ec(e b)",
          "package": "grammar-combinators",
          "signature": "phi ix-\u003ep(rr ix)-\u003ep(r ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:ref-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unWUR",
          "package": "grammar-combinators",
          "signature": "p (r ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#WrapUR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unWUR",
          "package": "grammar-combinators",
          "partial": "WUR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:unWUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e p (r ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#unfoldDepthFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003ef(c e)",
          "package": "grammar-combinators",
          "partial": "Depth First",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003ep(r ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:unfoldDepthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst'",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e (UDFGrammar p phi r t rr -\u003e UDFGrammar p phi r t rr) -\u003e phi ix -\u003e p (rr ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#unfoldDepthFirst%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst'",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003e(UDFGrammar e a c b d-\u003eUDFGrammar e a c b d)-\u003ea f-\u003ee(d f)",
          "package": "grammar-combinators",
          "partial": "Depth First'",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003e(UDFGrammar p phi r t rr-\u003eUDFGrammar p phi r t rr)-\u003ephi ix-\u003ep(rr ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:unfoldDepthFirst-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst''",
          "package": "grammar-combinators",
          "signature": "UnfoldDepthFirstRule p phi r t rr v -\u003e GAnyExtendedContextFreeGrammar phi t r rr -\u003e (UDFGrammar p phi r t rr -\u003e UDFGrammar p phi r t rr) -\u003e p v",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#unfoldDepthFirst%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirst''",
          "normalized": "UnfoldDepthFirstRule a b c d e f-\u003eGAnyExtendedContextFreeGrammar b d c e-\u003e(UDFGrammar a b c d e-\u003eUDFGrammar a b c d e)-\u003ea f",
          "package": "grammar-combinators",
          "partial": "Depth First''",
          "signature": "UnfoldDepthFirstRule p phi r t rr v-\u003eGAnyExtendedContextFreeGrammar phi t r rr-\u003e(UDFGrammar p phi r t rr-\u003eUDFGrammar p phi r t rr)-\u003ep v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:unfoldDepthFirst-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirstProper",
          "package": "grammar-combinators",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr -\u003e phi ix -\u003e p (rr ix)",
          "source": "src/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#unfoldDepthFirstProper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text GrammarCombinators Utils UnfoldDepthFirst",
          "module": "Text.GrammarCombinators.Utils.UnfoldDepthFirst",
          "name": "unfoldDepthFirstProper",
          "normalized": "GAnyExtendedContextFreeGrammar a b c d-\u003ea e-\u003ef(d e)",
          "package": "grammar-combinators",
          "partial": "Depth First Proper",
          "signature": "GAnyExtendedContextFreeGrammar phi t r rr-\u003ephi ix-\u003ep(rr ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grammar-combinators/docs/Text-GrammarCombinators-Utils-UnfoldDepthFirst.html#v:unfoldDepthFirstProper"
      }
    }
  ]
]