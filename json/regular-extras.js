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
        "word": "regular-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic \u003ca\u003eTest.QuickCheck\u003c/a\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "Arbitrary",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic Test.QuickCheck instances",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "Arbitrary",
          "package": "regular-extras",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Arbitrary class\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "Arbitrary",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#Arbitrary",
          "type": "class"
        },
        "index": {
          "description": "Generic Arbitrary class",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "Arbitrary",
          "package": "regular-extras",
          "partial": "Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#t:Arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric CoArbitrary class\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "CoArbitrary",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#CoArbitrary",
          "type": "class"
        },
        "index": {
          "description": "Generic CoArbitrary class",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "CoArbitrary",
          "package": "regular-extras",
          "partial": "Co Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#t:CoArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA frequency table detailing how often certain constructors should be\n picked. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e corresponds to the constructor name, as returned by\n \u003ccode\u003e\u003ca\u003econNames\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "FrequencyTable",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#FrequencyTable",
          "type": "type"
        },
        "index": {
          "description": "frequency table detailing how often certain constructors should be picked The String corresponds to the constructor name as returned by conNames",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "FrequencyTable",
          "package": "regular-extras",
          "partial": "Frequency Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#t:FrequencyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric arbitrary function with default sizes and constructor frequencies.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "arbitrary",
          "package": "regular-extras",
          "signature": "Gen a",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#arbitrary",
          "type": "function"
        },
        "index": {
          "description": "Generic arbitrary function with default sizes and constructor frequencies",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "arbitrary",
          "package": "regular-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#v:arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric arbitrary function, sized and with custom constructor frequencies.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "arbitraryWith",
          "package": "regular-extras",
          "signature": "FrequencyTable -\u003e Int -\u003e Gen a",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#arbitraryWith",
          "type": "function"
        },
        "index": {
          "description": "Generic arbitrary function sized and with custom constructor frequencies",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "arbitraryWith",
          "normalized": "FrequencyTable-\u003eInt-\u003eGen a",
          "package": "regular-extras",
          "partial": "With",
          "signature": "FrequencyTable-\u003eInt-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#v:arbitraryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric coarbitrary function.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "corbitrary",
          "package": "regular-extras",
          "signature": "b -\u003e Gen a -\u003e Gen a",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#corbitrary",
          "type": "function"
        },
        "index": {
          "description": "Generic coarbitrary function",
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "corbitrary",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "regular-extras",
          "signature": "b-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#v:corbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "harbitrary",
          "package": "regular-extras",
          "signature": "(Int -\u003e Gen a) -\u003e FrequencyTable -\u003e Int -\u003e Int -\u003e Maybe (Gen (f a))",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#harbitrary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "harbitrary",
          "normalized": "(Int-\u003eGen a)-\u003eFrequencyTable-\u003eInt-\u003eInt-\u003eMaybe(Gen(b a))",
          "package": "regular-extras",
          "signature": "(Int-\u003eGen a)-\u003eFrequencyTable-\u003eInt-\u003eInt-\u003eMaybe(Gen(f a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#v:harbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "hcoarbitrary",
          "package": "regular-extras",
          "signature": "(b -\u003e Gen a -\u003e Gen a) -\u003e Int -\u003e f b -\u003e Gen a -\u003e Gen a",
          "source": "src/Generics-Regular-Functions-Arbitrary.html#hcoarbitrary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Arbitrary",
          "module": "Generics.Regular.Functions.Arbitrary",
          "name": "hcoarbitrary",
          "normalized": "(a-\u003eGen b-\u003eGen b)-\u003eInt-\u003ec a-\u003eGen b-\u003eGen b",
          "package": "regular-extras",
          "signature": "(b-\u003eGen a-\u003eGen a)-\u003eInt-\u003ef b-\u003eGen a-\u003eGen a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Arbitrary.html#v:hcoarbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric Data.Binary instances.\n\u003c/p\u003e\u003cp\u003eThese generic functions can be used to create a \u003ca\u003eData.Binary\u003c/a\u003e instance. For\n example, for a user-defined type \u003ccode\u003eMyType\u003c/code\u003e, the following code is necessary:\n\u003c/p\u003e\u003cpre\u003e import Data.Binary\n import Generics.Regular.Base\n import Generics.Regular.Binary\n\n data MyType = ...\n\n $(deriveAll ''MyType \"PFMyType\")\n type instance PF MyType = PFMyType\n\n instance Binary MyType where\n   put = gput\n   get = gget\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Binary",
          "name": "Binary",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Generic Data.Binary instances These generic functions can be used to create Data.Binary instance For example for user-defined type MyType the following code is necessary import Data.Binary import Generics.Regular.Base import Generics.Regular.Binary data MyType deriveAll MyType PFMyType type instance PF MyType PFMyType instance Binary MyType where put gput get gget",
          "hierarchy": "Generics Regular Functions Binary",
          "module": "Generics.Regular.Functions.Binary",
          "name": "Binary",
          "package": "regular-extras",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Binary",
          "name": "Binary",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Binary.html#Binary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Binary",
          "module": "Generics.Regular.Functions.Binary",
          "name": "Binary",
          "package": "regular-extras",
          "partial": "Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Binary.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric binary \u003ccode\u003eget\u003c/code\u003e to be used with \u003ca\u003eData.Binary.Get\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Binary",
          "name": "gget",
          "package": "regular-extras",
          "signature": "Get a",
          "source": "src/Generics-Regular-Functions-Binary.html#gget",
          "type": "function"
        },
        "index": {
          "description": "Generic binary get to be used with Data.Binary.Get",
          "hierarchy": "Generics Regular Functions Binary",
          "module": "Generics.Regular.Functions.Binary",
          "name": "gget",
          "package": "regular-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Binary.html#v:gget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric binary \u003ccode\u003eput\u003c/code\u003e to be used with \u003ca\u003eData.Binary.Put\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Binary",
          "name": "gput",
          "package": "regular-extras",
          "signature": "a -\u003e Put",
          "source": "src/Generics-Regular-Functions-Binary.html#gput",
          "type": "function"
        },
        "index": {
          "description": "Generic binary put to be used with Data.Binary.Put",
          "hierarchy": "Generics Regular Functions Binary",
          "module": "Generics.Regular.Functions.Binary",
          "name": "gput",
          "normalized": "a-\u003ePut",
          "package": "regular-extras",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Binary.html#v:gput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Deep generic seq. Used to fully evaluate a term.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Functions.Seq",
          "name": "Seq",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Seq.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Deep generic seq Used to fully evaluate term",
          "hierarchy": "Generics Regular Functions Seq",
          "module": "Generics.Regular.Functions.Seq",
          "name": "Seq",
          "package": "regular-extras",
          "partial": "Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Seq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class for generic deep seq.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Seq",
          "name": "Seq",
          "package": "regular-extras",
          "source": "src/Generics-Regular-Functions-Seq.html#Seq",
          "type": "class"
        },
        "index": {
          "description": "The class for generic deep seq",
          "hierarchy": "Generics Regular Functions Seq",
          "module": "Generics.Regular.Functions.Seq",
          "name": "Seq",
          "package": "regular-extras",
          "partial": "Seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Seq.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeep, generic version of seq.\n\u003c/p\u003e",
          "module": "Generics.Regular.Functions.Seq",
          "name": "gdseq",
          "package": "regular-extras",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Generics-Regular-Functions-Seq.html#gdseq",
          "type": "function"
        },
        "index": {
          "description": "Deep generic version of seq",
          "hierarchy": "Generics Regular Functions Seq",
          "module": "Generics.Regular.Functions.Seq",
          "name": "gdseq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "regular-extras",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Seq.html#v:gdseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Functions.Seq",
          "name": "gseq",
          "package": "regular-extras",
          "signature": "(a -\u003e b -\u003e b) -\u003e f a -\u003e b -\u003e b",
          "source": "src/Generics-Regular-Functions-Seq.html#gseq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Functions Seq",
          "module": "Generics.Regular.Functions.Seq",
          "name": "gseq",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec a-\u003eb-\u003eb",
          "package": "regular-extras",
          "signature": "(a-\u003eb-\u003eb)-\u003ef a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regular-extras/docs/Generics-Regular-Functions-Seq.html#v:gseq"
      }
    }
  ]
]