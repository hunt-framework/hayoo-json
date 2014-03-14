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
        "word": "storable-record"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStorable instances for simple wrapped types.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Foreign.Storable.Newtype as Store\n\n newtype MuLaw = MuLaw {deMuLaw :: Word8}\n\n instance Storable MuLaw where\n    sizeOf = Store.sizeOf deMuLaw\n    alignment = Store.alignment deMuLaw\n    peek = Store.peek MuLaw\n    poke = Store.poke deMuLaw\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Foreign.Storable.Newtype",
          "name": "Newtype",
          "package": "storable-record",
          "source": "src/Foreign-Storable-Newtype.html",
          "type": "module"
        },
        "index": {
          "description": "Storable instances for simple wrapped types Example import Foreign.Storable.Newtype as Store newtype MuLaw MuLaw deMuLaw Word8 instance Storable MuLaw where sizeOf Store.sizeOf deMuLaw alignment Store.alignment deMuLaw peek Store.peek MuLaw poke Store.poke deMuLaw",
          "hierarchy": "Foreign Storable Newtype",
          "module": "Foreign.Storable.Newtype",
          "name": "Newtype",
          "package": "storable-record",
          "partial": "Newtype",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Newtype.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Newtype",
          "name": "alignment",
          "package": "storable-record",
          "signature": "(wrapper -\u003e core) -\u003e wrapper -\u003e Int",
          "source": "src/Foreign-Storable-Newtype.html#alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Newtype",
          "module": "Foreign.Storable.Newtype",
          "name": "alignment",
          "normalized": "(a-\u003eb)-\u003ea-\u003eInt",
          "package": "storable-record",
          "signature": "(wrapper-\u003ecore)-\u003ewrapper-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Newtype.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Newtype",
          "name": "peek",
          "package": "storable-record",
          "signature": "(core -\u003e wrapper) -\u003e Ptr wrapper -\u003e IO wrapper",
          "source": "src/Foreign-Storable-Newtype.html#peek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Newtype",
          "module": "Foreign.Storable.Newtype",
          "name": "peek",
          "normalized": "(a-\u003eb)-\u003ePtr b-\u003eIO b",
          "package": "storable-record",
          "signature": "(core-\u003ewrapper)-\u003ePtr wrapper-\u003eIO wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Newtype.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Newtype",
          "name": "poke",
          "package": "storable-record",
          "signature": "(wrapper -\u003e core) -\u003e Ptr wrapper -\u003e wrapper -\u003e IO ()",
          "source": "src/Foreign-Storable-Newtype.html#poke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Newtype",
          "module": "Foreign.Storable.Newtype",
          "name": "poke",
          "normalized": "(a-\u003eb)-\u003ePtr a-\u003ea-\u003eIO()",
          "package": "storable-record",
          "signature": "(wrapper-\u003ecore)-\u003ePtr wrapper-\u003ewrapper-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Newtype.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Newtype",
          "name": "sizeOf",
          "package": "storable-record",
          "signature": "(wrapper -\u003e core) -\u003e wrapper -\u003e Int",
          "source": "src/Foreign-Storable-Newtype.html#sizeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Newtype",
          "module": "Foreign.Storable.Newtype",
          "name": "sizeOf",
          "normalized": "(a-\u003eb)-\u003ea-\u003eInt",
          "package": "storable-record",
          "partial": "Of",
          "signature": "(wrapper-\u003ecore)-\u003ewrapper-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Newtype.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we show an example of how to\ndefine a Storable instance with this module.\n\u003c/p\u003e\u003cpre\u003e import Foreign.Storable.Record as Store\n import Foreign.Storable (Storable (..), )\n\n import Control.Applicative (liftA2, )\n\n data Stereo a = Stereo {left, right :: a}\n\n store :: Storable a =\u003e Store.Dictionary (Stereo a)\n store =\n    Store.run $\n    liftA2 Stereo\n       (Store.element left)\n       (Store.element right)\n\n instance (Storable a) =\u003e Storable (Stereo a) where\n    sizeOf = Store.sizeOf store\n    alignment = Store.alignment store\n    peek = Store.peek store\n    poke = Store.poke store\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eStereo\u003c/code\u003e constructor is exclusively used\nfor constructing the \u003ccode\u003epeek\u003c/code\u003e function,\nwhereas the accessors in the \u003ccode\u003eelement\u003c/code\u003e calls\nare used for assembling the \u003ccode\u003epoke\u003c/code\u003e function.\nIt is required that the order of arguments of \u003ccode\u003eStereo\u003c/code\u003e\nmatches the record accessors in the \u003ccode\u003eelement\u003c/code\u003e calls.\nIf you want that the stored data correctly and fully represents\nyour Haskell data, it must hold:\n\u003c/p\u003e\u003cpre\u003e   Stereo (left x) (right x) = x   .\n\u003c/pre\u003e\u003cp\u003eUnfortunately this cannot be checked automatically.\nHowever, mismatching types that are caused by swapped arguments\nare detected by the type system.\nOur system performs for you:\nSize and alignment computation, poking and peeking.\nThus several inconsistency bugs can be prevented using this package,\nlike size mismatching the space required by \u003ccode\u003epoke\u003c/code\u003e actions.\nThere is no more restriction,\nthus smart constructors and accessors\nand nested records work, too.\nFor nested records however,\nI recommend individual Storable instances for the sub-records.\n\u003c/p\u003e\u003cp\u003eYou see it would simplify class instantiation\nif we could tell the class dictionary at once\ninstead of defining each method separately.\n\u003c/p\u003e\u003cp\u003eIn this implementation we tail pad records\naccording to the overall required alignment\nin conformance to the Linux/X86 ABI.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Storable.Record",
          "name": "Record",
          "package": "storable-record",
          "source": "src/Foreign-Storable-Record.html",
          "type": "module"
        },
        "index": {
          "description": "Here we show an example of how to define Storable instance with this module import Foreign.Storable.Record as Store import Foreign.Storable Storable import Control.Applicative liftA2 data Stereo Stereo left right store Storable Store.Dictionary Stereo store Store.run liftA2 Stereo Store.element left Store.element right instance Storable Storable Stereo where sizeOf Store.sizeOf store alignment Store.alignment store peek Store.peek store poke Store.poke store The Stereo constructor is exclusively used for constructing the peek function whereas the accessors in the element calls are used for assembling the poke function It is required that the order of arguments of Stereo matches the record accessors in the element calls If you want that the stored data correctly and fully represents your Haskell data it must hold Stereo left right Unfortunately this cannot be checked automatically However mismatching types that are caused by swapped arguments are detected by the type system Our system performs for you Size and alignment computation poking and peeking Thus several inconsistency bugs can be prevented using this package like size mismatching the space required by poke actions There is no more restriction thus smart constructors and accessors and nested records work too For nested records however recommend individual Storable instances for the sub-records You see it would simplify class instantiation if we could tell the class dictionary at once instead of defining each method separately In this implementation we tail pad records according to the overall required alignment in conformance to the Linux X86 ABI",
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "Record",
          "package": "storable-record",
          "partial": "Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "Access",
          "package": "storable-record",
          "source": "src/Foreign-Storable-Record.html#Access",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "Access",
          "package": "storable-record",
          "partial": "Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#t:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "Dictionary",
          "package": "storable-record",
          "source": "src/Foreign-Storable-Record.html#Dictionary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "Dictionary",
          "package": "storable-record",
          "partial": "Dictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#t:Dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "alignment",
          "package": "storable-record",
          "signature": "Dictionary r -\u003e r -\u003e Int",
          "source": "src/Foreign-Storable-Record.html#alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "alignment",
          "normalized": "Dictionary a-\u003ea-\u003eInt",
          "package": "storable-record",
          "signature": "Dictionary r-\u003er-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "element",
          "package": "storable-record",
          "signature": "(r -\u003e a) -\u003e Access r a",
          "source": "src/Foreign-Storable-Record.html#element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "element",
          "normalized": "(a-\u003eb)-\u003eAccess a b",
          "package": "storable-record",
          "signature": "(r-\u003ea)-\u003eAccess r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "peek",
          "package": "storable-record",
          "signature": "Dictionary r -\u003e Ptr r -\u003e IO r",
          "source": "src/Foreign-Storable-Record.html#peek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "peek",
          "normalized": "Dictionary a-\u003ePtr a-\u003eIO a",
          "package": "storable-record",
          "signature": "Dictionary r-\u003ePtr r-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "poke",
          "package": "storable-record",
          "signature": "Dictionary r -\u003e Ptr r -\u003e r -\u003e IO ()",
          "source": "src/Foreign-Storable-Record.html#poke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "poke",
          "normalized": "Dictionary a-\u003ePtr a-\u003ea-\u003eIO()",
          "package": "storable-record",
          "signature": "Dictionary r-\u003ePtr r-\u003er-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "run",
          "package": "storable-record",
          "signature": "Access r r -\u003e Dictionary r",
          "source": "src/Foreign-Storable-Record.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "run",
          "normalized": "Access a a-\u003eDictionary a",
          "package": "storable-record",
          "signature": "Access r r-\u003eDictionary r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Record",
          "name": "sizeOf",
          "package": "storable-record",
          "signature": "Dictionary r -\u003e r -\u003e Int",
          "source": "src/Foreign-Storable-Record.html#sizeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Record",
          "module": "Foreign.Storable.Record",
          "name": "sizeOf",
          "normalized": "Dictionary a-\u003ea-\u003eInt",
          "package": "storable-record",
          "partial": "Of",
          "signature": "Dictionary r-\u003er-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Record.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIf you have a \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instance of a record,\nyou can load and store all elements,\nthat are accessible by \u003ccode\u003eTraversable\u003c/code\u003e methods.\nWe treat the record like an array,\nthat is we assume, that all elements have the same size and alignment.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Foreign.Storable.Traversable as Store\n\n data Stereo a = Stereo {left, right :: a}\n\n instance Functor Stereo where\n    fmap = Trav.fmapDefault\n\n instance Foldable Stereo where\n    foldMap = Trav.foldMapDefault\n\n instance Traversable Stereo where\n    sequenceA ~(Stereo l r) = liftA2 Stereo l r\n\n instance (Storable a) =\u003e Storable (Stereo a) where\n    sizeOf = Store.sizeOf\n    alignment = Store.alignment\n    peek = Store.peek (error \"instance Traversable Stereo is lazy, so we do not provide a real value here\")\n    poke = Store.poke\n\u003c/pre\u003e\u003cp\u003eYou would certainly not define the \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e and according instances\njust for the implementation of the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance,\nbut there are usually similar applications\nwhere the \u003ccode\u003eTraversable\u003c/code\u003e instance is useful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Storable.Traversable",
          "name": "Traversable",
          "package": "storable-record",
          "source": "src/Foreign-Storable-Traversable.html",
          "type": "module"
        },
        "index": {
          "description": "If you have Traversable instance of record you can load and store all elements that are accessible by Traversable methods We treat the record like an array that is we assume that all elements have the same size and alignment Example import Foreign.Storable.Traversable as Store data Stereo Stereo left right instance Functor Stereo where fmap Trav.fmapDefault instance Foldable Stereo where foldMap Trav.foldMapDefault instance Traversable Stereo where sequenceA Stereo liftA2 Stereo instance Storable Storable Stereo where sizeOf Store.sizeOf alignment Store.alignment peek Store.peek error instance Traversable Stereo is lazy so we do not provide real value here poke Store.poke You would certainly not define the Traversable and according instances just for the implementation of the Storable instance but there are usually similar applications where the Traversable instance is useful",
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "Traversable",
          "package": "storable-record",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Traversable",
          "name": "alignment",
          "package": "storable-record",
          "signature": "f a -\u003e Int",
          "source": "src/Foreign-Storable-Traversable.html#alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "alignment",
          "normalized": "a b-\u003eInt",
          "package": "storable-record",
          "signature": "f a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epeek skeleton ptr\u003c/code\u003e fills the \u003ccode\u003eskeleton\u003c/code\u003e with data read from memory beginning at \u003ccode\u003eptr\u003c/code\u003e.\nThe skeleton is needed formally for using \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e.\nFor instance when reading a list, it is not clear,\nhow many elements shall be read.\nUsing the skeleton you can give this information\nand you also provide information that is not contained in the element type \u003ccode\u003ea\u003c/code\u003e.\nFor example you can call\n\u003c/p\u003e\u003cpre\u003e peek (replicate 10 ()) ptr\n\u003c/pre\u003e\u003cp\u003efor reading 10 elements from memory starting at \u003ccode\u003eptr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Traversable",
          "name": "peek",
          "package": "storable-record",
          "signature": "f () -\u003e Ptr (f a) -\u003e IO (f a)",
          "source": "src/Foreign-Storable-Traversable.html#peek",
          "type": "function"
        },
        "index": {
          "description": "peek skeleton ptr fills the skeleton with data read from memory beginning at ptr The skeleton is needed formally for using Traversable For instance when reading list it is not clear how many elements shall be read Using the skeleton you can give this information and you also provide information that is not contained in the element type For example you can call peek replicate ptr for reading elements from memory starting at ptr",
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "peek",
          "normalized": "a()-\u003ePtr(a b)-\u003eIO(a b)",
          "package": "storable-record",
          "signature": "f()-\u003ePtr(f a)-\u003eIO(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003epure\u003c/code\u003e for construction of the result.\n\u003ccode\u003epure\u003c/code\u003e would be in class \u003ccode\u003ePointed\u003c/code\u003e if that would exist.\nThus we use the closest approximate \u003ccode\u003eApplicative\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Traversable",
          "name": "peekApplicative",
          "package": "storable-record",
          "signature": "Ptr (f a) -\u003e IO (f a)",
          "source": "src/Foreign-Storable-Traversable.html#peekApplicative",
          "type": "function"
        },
        "index": {
          "description": "Like peek but uses pure for construction of the result pure would be in class Pointed if that would exist Thus we use the closest approximate Applicative",
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "peekApplicative",
          "normalized": "Ptr(a b)-\u003eIO(a b)",
          "package": "storable-record",
          "partial": "Applicative",
          "signature": "Ptr(f a)-\u003eIO(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#v:peekApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Traversable",
          "name": "poke",
          "package": "storable-record",
          "signature": "Ptr (f a) -\u003e f a -\u003e IO ()",
          "source": "src/Foreign-Storable-Traversable.html#poke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "poke",
          "normalized": "Ptr(a b)-\u003ea b-\u003eIO()",
          "package": "storable-record",
          "signature": "Ptr(f a)-\u003ef a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Storable.Traversable",
          "name": "sizeOf",
          "package": "storable-record",
          "signature": "f a -\u003e Int",
          "source": "src/Foreign-Storable-Traversable.html#sizeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Storable Traversable",
          "module": "Foreign.Storable.Traversable",
          "name": "sizeOf",
          "normalized": "a b-\u003eInt",
          "package": "storable-record",
          "partial": "Of",
          "signature": "f a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storable-record/docs/Foreign-Storable-Traversable.html#v:sizeOf"
      }
    }
  ]
]