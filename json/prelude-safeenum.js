[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Data-Number-CalkinWilf.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnumerate the rationals in Calkin--Wilf order. That is, when we\n give enumeration a well-specified meaning (as \u003ca\u003ePrelude.SafeEnum\u003c/a\u003e\n does) this renders instances for \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e problematic. \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e\n instances \u003cem\u003ecan\u003c/em\u003e be provided so long as the base type is integral\n and enumerable; but they must be done in an obscure order that\n does not coincide with the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e. Since\n this is not what people may expect, we only provide an instance\n for the newtype \u003ccode\u003e\u003ca\u003eCalkinWilf\u003c/a\u003e\u003c/code\u003e, not for \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e itself.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Jeremy Gibbons, David Lester, and Richard Bird (2006).\n     \u003cem\u003eEnumerating the Rationals\u003c/em\u003e. JFP 16(3):281--291.\n     DOI:10.1017/S0956796806005880\n     \u003ca\u003ehttp://www.cs.ox.ac.uk/jeremy.gibbons/publications/rationals.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Number.CalkinWilf",
        "fct-package": "prelude-safeenum",
        "fct-signature": "module",
        "fct-source": "src/Data-Number-CalkinWilf.html",
        "fct-type": "module",
        "title": "CalkinWilf"
      },
      "index": {
        "description": "Enumerate the rationals in Calkin--Wilf order That is when we give enumeration well-specified meaning as Prelude.SafeEnum does this renders instances for Ratio problematic Ratio instances can be provided so long as the base type is integral and enumerable but they must be done in an obscure order that does not coincide with the Ord instance for Ratio Since this is not what people may expect we only provide an instance for the newtype CalkinWilf not for Ratio itself Jeremy Gibbons David Lester and Richard Bird Enumerating the Rationals JFP DOI S0956796806005880 http www.cs.ox.ac.uk jeremy.gibbons publications rationals.pdf",
        "hierarchy": "Data Number CalkinWilf",
        "module": "Data.Number.CalkinWilf",
        "name": "CalkinWilf",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Calkin Wilf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Data-Number-CalkinWilf.html#t:CalkinWilf",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate the rationals in Calkin--Wilf order. The enumeration\n is symmetric about zero, ensuring that all the negative rationals\n come before zero and all the positive rationals come after zero.\n\u003c/p\u003e\u003cp\u003eBUG: while the \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e\n methods are correct, they are horribly inefficient. This can be\n rectified (or at least mitigated), but this remains to be done.\n\u003c/p\u003e",
        "fct-module": "Data.Number.CalkinWilf",
        "fct-package": "prelude-safeenum",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Number-CalkinWilf.html#CalkinWilf",
        "fct-type": "newtype",
        "title": "CalkinWilf"
      },
      "index": {
        "description": "Enumerate the rationals in Calkin--Wilf order The enumeration is symmetric about zero ensuring that all the negative rationals come before zero and all the positive rationals come after zero BUG while the succeeds precedes toEnum and fromEnum methods are correct they are horribly inefficient This can be rectified or at least mitigated but this remains to be done",
        "hierarchy": "Data Number CalkinWilf",
        "module": "Data.Number.CalkinWilf",
        "name": "CalkinWilf",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Calkin Wilf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Data-Number-CalkinWilf.html#v:CalkinWilf",
      "description": {
        "fct-module": "Data.Number.CalkinWilf",
        "fct-package": "prelude-safeenum",
        "fct-signature": "CalkinWilf (Ratio a)",
        "fct-source": "src/Data-Number-CalkinWilf.html#CalkinWilf",
        "fct-type": "function",
        "title": "CalkinWilf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Number CalkinWilf",
        "module": "Data.Number.CalkinWilf",
        "name": "CalkinWilf",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Calkin Wilf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Data-Number-CalkinWilf.html#v:unCalkinWilf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the underlying \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e. Not using record syntax to\n define this in order to pretty up the derived \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.Number.CalkinWilf",
        "fct-package": "prelude-safeenum",
        "fct-signature": "CalkinWilf a -\u003e Ratio a",
        "fct-source": "src/Data-Number-CalkinWilf.html#unCalkinWilf",
        "fct-type": "function",
        "title": "unCalkinWilf"
      },
      "index": {
        "description": "Return the underlying Ratio Not using record syntax to define this in order to pretty up the derived Show instance",
        "hierarchy": "Data Number CalkinWilf",
        "module": "Data.Number.CalkinWilf",
        "name": "unCalkinWilf",
        "normalized": "CalkinWilf a-\u003eRatio a",
        "package": "prelude-safeenum",
        "partial": "Calkin Wilf",
        "signature": "CalkinWilf a-\u003eRatio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA redefinition of the \u003ca\u003ePrelude\u003c/a\u003e's \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class in order\n to render it safe. That is, the Haskell Language Report defines\n \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e to be partial functions when the type is\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e[1], but this is unacceptable. So these classes are\n offered as a replacement, correcting the types of those functions.\n We intentionally clash with the names of the Prelude's class;\n if you wish to use both in the same file, then import this module\n (or the Prelude) qualified.\n\u003c/p\u003e\u003cp\u003eWhile we're at it, we also generalize the notion of enumeration.\n Rather than requiring that the type is linearly enumerable, we\n distinguish between forward enumeration (which allows for multiple\n predecessors) and backward enumeration (which allows for multiple\n successors). Moreover, we do not require that the enumeration\n order coincides with the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e ordering (if one exists), though\n it's advisable that they do (for your sanity). However, we also\n ensure that the notion of enumeration (in either direction) is\n well-defined, which rules out instances for \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e,\n and renders instances for \u003ccode\u003eRatio\u003c/code\u003e problematic. \u003ccode\u003eRatio\u003c/code\u003e instances\n \u003cem\u003ecan\u003c/em\u003e be provided so long as the base type is integral and\n enumerable; but they must be done in an obscure order[2] that\n does not coincide with \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e. Since this is not what people may\n expect, we only provide an instance for the newtype \u003ccode\u003eCalkinWilf\u003c/code\u003e,\n not for \u003ccode\u003eRatio\u003c/code\u003e itself.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMagicHash\u003c/code\u003e extension is only actually required if on GHC.\n This extension is used only so that the implementation of the\n instances for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e match those of the Prelude's \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e.\n I have not benchmarked to determine whether this low-level hackery\n is actually still necessary.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e1\u003c/dt\u003e\u003cdd\u003e \u003ca\u003ehttp://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1310006.3.4\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003e2\u003c/dt\u003e\u003cdd\u003e Jeremy Gibbons, David Lester, and Richard Bird (2006).\n     \u003cem\u003eEnumerating the Rationals\u003c/em\u003e. JFP 16(3):281--291.\n     DOI:10.1017/S0956796806005880\n     \u003ca\u003ehttp://www.cs.ox.ac.uk/jeremy.gibbons/publications/rationals.pdf\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "module",
        "fct-source": "src/Prelude-SafeEnum.html",
        "fct-type": "module",
        "title": "SafeEnum"
      },
      "index": {
        "description": "redefinition of the Prelude Enum class in order to render it safe That is the Haskell Language Report defines pred succ fromEnum and toEnum to be partial functions when the type is Bounded but this is unacceptable So these classes are offered as replacement correcting the types of those functions We intentionally clash with the names of the Prelude class if you wish to use both in the same file then import this module or the Prelude qualified While we re at it we also generalize the notion of enumeration Rather than requiring that the type is linearly enumerable we distinguish between forward enumeration which allows for multiple predecessors and backward enumeration which allows for multiple successors Moreover we do not require that the enumeration order coincides with the Ord ordering if one exists though it advisable that they do for your sanity However we also ensure that the notion of enumeration in either direction is well-defined which rules out instances for Float and Double and renders instances for Ratio problematic Ratio instances can be provided so long as the base type is integral and enumerable but they must be done in an obscure order that does not coincide with Ord Since this is not what people may expect we only provide an instance for the newtype CalkinWilf not for Ratio itself The MagicHash extension is only actually required if on GHC This extension is used only so that the implementation of the instances for Char match those of the Prelude Enum have not benchmarked to determine whether this low-level hackery is actually still necessary http www.haskell.org onlinereport haskell2010 haskellch6.html x13-1310006.3.4 Jeremy Gibbons David Lester and Richard Bird Enumerating the Rationals JFP DOI S0956796806005880 http www.cs.ox.ac.uk jeremy.gibbons publications rationals.pdf",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "SafeEnum",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Safe Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#t:DownwardEnum",
      "description": {
        "fct-descr": "\u003cp\u003eA class for downward enumerable types. That is, we can enumerate\n smaller and smaller values, eventually getting every one of them;\n i.e., given any \u003ccode\u003ex\u003c/code\u003e, for all \u003ccode\u003ey\u003c/code\u003e such that \u003ccode\u003ey `precedes` x\u003c/code\u003e,\n it must be the case that \u003ccode\u003ey\u003c/code\u003e occurs within some finite prefix\n of \u003ccode\u003eenumDownFrom x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe require that \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e forms a strict partial order. That\n is, it must obey the following laws (N.B., if the first two laws\n hold, then the third one follows for free):\n\u003c/p\u003e\u003cpre\u003e if x `precedes` y && y `precedes` z then x `precedes` z\n if x `precedes` y then not (y `precedes` x)\n not (x `precedes` x)\n\u003c/pre\u003e\u003cp\u003eMoreover, we require that \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e, and\n that \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e is exhaustive for \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e (assuming \u003ccode\u003eEq a\u003c/code\u003e, by\n magic if need be):\n\u003c/p\u003e\u003cpre\u003e if pred x == Just y then y `precedes` x\n if x `precedes` y   then x `elem` enumDownFrom y\n\u003c/pre\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "class",
        "fct-source": "src/Prelude-SafeEnum.html#DownwardEnum",
        "fct-type": "class",
        "title": "DownwardEnum"
      },
      "index": {
        "description": "class for downward enumerable types That is we can enumerate smaller and smaller values eventually getting every one of them i.e given any for all such that precedes it must be the case that occurs within some finite prefix of enumDownFrom We require that precedes forms strict partial order That is it must obey the following laws N.B if the first two laws hold then the third one follows for free if precedes precedes then precedes if precedes then not precedes not precedes Moreover we require that precedes agrees with pred and that pred is exhaustive for precedes assuming Eq by magic if need be if pred Just then precedes if precedes then elem enumDownFrom Minimal complete definition pred precedes",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "DownwardEnum",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Downward Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#t:Enum",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types with a linear enumeration order. We require\n that the partial orders of the superclasses agree:\n\u003c/p\u003e\u003cpre\u003e x `succeeds` y  ==  y `precedes` x\n\u003c/pre\u003e\u003cp\u003eThat the enumeration order is preserved/reflected:\n\u003c/p\u003e\u003cpre\u003e i `succeeds` j  ==  toEnum   i `succeeds` toEnum   j\n x `succeeds` y  ==  fromEnum x `succeeds` fromEnum y\n\u003c/pre\u003e\u003cp\u003eAnd that \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e form a weak isomorphism; i.e.,\n for some \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e, the following must hold:\n\u003c/p\u003e\u003cpre\u003e fromEnum \u003c=\u003c toEnum    ==  (\\i -\u003e if p i then Just i else Nothing)\n toEnum   \u003c=\u003c fromEnum  ==  (\\x -\u003e if q x then Just x else Nothing)\n\u003c/pre\u003e\u003cp\u003eIn other words, the following type-restricted functions form an\n isomorphism of linear orderings.\n\u003c/p\u003e\u003cpre\u003e toEnum'   :: {i :: Int | toEnum   i == Just _} -\u003e a\n fromEnum' :: {x :: a   | fromEnum x == Just _} -\u003e Int\n\u003c/pre\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e. N.B., the\n default definitions for \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThenTo\u003c/a\u003e\u003c/code\u003e only\n make sense when the type \u003ccode\u003ea\u003c/code\u003e is \"smaller\" than \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e (i.e.,\n \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e always succeeds); if \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e ever fails, then you\n must override the defaults in order to correctly infer the stride\n for values which cannot be converted to \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "class",
        "fct-source": "src/Prelude-SafeEnum.html#Enum",
        "fct-type": "class",
        "title": "Enum"
      },
      "index": {
        "description": "class for types with linear enumeration order We require that the partial orders of the superclasses agree succeeds precedes That the enumeration order is preserved reflected succeeds toEnum succeeds toEnum succeeds fromEnum succeeds fromEnum And that toEnum and fromEnum form weak isomorphism i.e for some and the following must hold fromEnum toEnum if then Just else Nothing toEnum fromEnum if then Just else Nothing In other words the following type-restricted functions form an isomorphism of linear orderings toEnum Int toEnum Just fromEnum fromEnum Just Int Minimal complete definition toEnum fromEnum N.B the default definitions for enumFromThen and enumFromThenTo only make sense when the type is smaller than Int i.e fromEnum always succeeds if fromEnum ever fails then you must override the defaults in order to correctly infer the stride for values which cannot be converted to Int",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "Enum",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#t:UpwardEnum",
      "description": {
        "fct-descr": "\u003cp\u003eA class for upward enumerable types. That is, we can enumerate\n larger and larger values, eventually getting every one of them;\n i.e., given any \u003ccode\u003ex\u003c/code\u003e, for all \u003ccode\u003ey\u003c/code\u003e such that \u003ccode\u003ey `succeeds` x\u003c/code\u003e,\n it must be the case that \u003ccode\u003ey\u003c/code\u003e occurs within some finite prefix\n of \u003ccode\u003eenumFrom x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe require that \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e forms a strict partial order. That\n is, it must obey the following laws (N.B., if the first two laws\n hold, then the third one follows for free):\n\u003c/p\u003e\u003cpre\u003e if x `succeeds` y && y `succeeds` z then x `succeeds` z\n if x `succeeds` y then not (y `succeeds` x)\n not (x `succeeds` x)\n\u003c/pre\u003e\u003cp\u003eMoreover, we require that \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e, and\n that \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e is exhaustive for \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e (assuming \u003ccode\u003eEq a\u003c/code\u003e, by\n magic if need be):\n\u003c/p\u003e\u003cpre\u003e if succ x == Just y then y `succeeds` x\n if x `succeeds` y   then x `elem` enumFrom y\n\u003c/pre\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "class",
        "fct-source": "src/Prelude-SafeEnum.html#UpwardEnum",
        "fct-type": "class",
        "title": "UpwardEnum"
      },
      "index": {
        "description": "class for upward enumerable types That is we can enumerate larger and larger values eventually getting every one of them i.e given any for all such that succeeds it must be the case that occurs within some finite prefix of enumFrom We require that succeeds forms strict partial order That is it must obey the following laws N.B if the first two laws hold then the third one follows for free if succeeds succeeds then succeeds if succeeds then not succeeds not succeeds Moreover we require that succeeds agrees with succ and that succ is exhaustive for succeeds assuming Eq by magic if need be if succ Just then succeeds if succeeds then elem enumFrom Minimal complete definition succ succeeds",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "UpwardEnum",
        "normalized": "",
        "package": "prelude-safeenum",
        "partial": "Upward Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumDownFrom",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003ex\u003c/code\u003e followed by all it's predecessors, in (reverse)\n order. The resulting list is always non-empty, since it\n includes \u003ccode\u003ex\u003c/code\u003e. If the resulting list is always finite, then\n the \u003ccode\u003e\u003ca\u003eprecedes\u003c/a\u003e\u003c/code\u003e ordering is well-founded. In GHC, the default\n implementation is a \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumDownFrom",
        "fct-type": "method",
        "title": "enumDownFrom"
      },
      "index": {
        "description": "Return followed by all it predecessors in reverse order The resulting list is always non-empty since it includes If the resulting list is always finite then the precedes ordering is well-founded In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumDownFrom",
        "normalized": "a-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "Down From",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumDownFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the elements of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumDownFrom\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, filtering out\n everything that precedes \u003ccode\u003ez\u003c/code\u003e. If \u003ccode\u003ex\u003c/code\u003e precedes \u003ccode\u003ez\u003c/code\u003e, then the\n resulting list is empty; otherwise, it is non-empty, since\n it includes \u003ccode\u003ex\u003c/code\u003e. In GHC, the default implementation is a\n \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumDownFromTo",
        "fct-type": "method",
        "title": "enumDownFromTo"
      },
      "index": {
        "description": "Return the elements of enumDownFrom filtering out everything that precedes If precedes then the resulting list is empty otherwise it is non-empty since it includes In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumDownFromTo",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "Down From To",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumFrom",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003ex\u003c/code\u003e followed by all it's successors, in order. The\n resulting list is always non-empty, since it includes \u003ccode\u003ex\u003c/code\u003e.\n If the resulting list is always finite, then the \u003ccode\u003e\u003ca\u003esucceeds\u003c/a\u003e\u003c/code\u003e\n ordering is converse well-founded. In GHC, the default\n implementation is a \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumFrom",
        "fct-type": "method",
        "title": "enumFrom"
      },
      "index": {
        "description": "Return followed by all it successors in order The resulting list is always non-empty since it includes If the resulting list is always finite then the succeeds ordering is converse well-founded In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumFrom",
        "normalized": "a-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "From",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumFromThen",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate values with an inferred stride. The resulting\n list is always non-empty, since it includes \u003ccode\u003ex\u003c/code\u003e. Naturally,\n this should agree with \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumDownFrom\u003c/a\u003e\u003c/code\u003e (assuming\n \u003ccode\u003eEq a\u003c/code\u003e, by magic if need be):\n\u003c/p\u003e\u003cpre\u003e if succ x == Just y then enumFromThen x y == enumFrom x\n if pred x == Just y then enumFromThen x y == enumDownFrom x\n\u003c/pre\u003e\u003cp\u003eIn the default implementation: if \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e fails on either\n argument, then the result is exactly \u003ccode\u003e[x]\u003c/code\u003e; and if \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e\n fails on any of the enumerated integers, then the first\n failure terminates the enumeration. If either of these\n properties is inappropriate, then you should override the\n default. In GHC, the default implementation is a \"good\n producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumFromThen",
        "fct-type": "method",
        "title": "enumFromThen"
      },
      "index": {
        "description": "Enumerate values with an inferred stride The resulting list is always non-empty since it includes Naturally this should agree with enumFrom and enumDownFrom assuming Eq by magic if need be if succ Just then enumFromThen enumFrom if pred Just then enumFromThen enumDownFrom In the default implementation if fromEnum fails on either argument then the result is exactly and if toEnum fails on any of the enumerated integers then the first failure terminates the enumeration If either of these properties is inappropriate then you should override the default In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumFromThen",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "From Then",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumFromThenTo",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate values with an inferred stride and a given limit.\n If \u003ccode\u003ex\u003c/code\u003e precedes \u003ccode\u003ey\u003c/code\u003e (and therefore we're enumerating forward)\n but \u003ccode\u003ex\u003c/code\u003e succeeds \u003ccode\u003ez\u003c/code\u003e (and therefore is past the limit), then\n the result is empty. Similarly, if \u003ccode\u003ex\u003c/code\u003e succeeds \u003ccode\u003ey\u003c/code\u003e (and\n therefore we're enumerating backward) but \u003ccode\u003ex\u003c/code\u003e precedes \u003ccode\u003ez\u003c/code\u003e\n (and therefore is past the limit), then the result is empty.\n Otherwise the result is non-empty since it contains \u003ccode\u003ex\u003c/code\u003e.\n Naturally, this should agree with \u003ccode\u003e\u003ca\u003eenumFromTo\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eenumDownFromTo\u003c/a\u003e\u003c/code\u003e (assuming \u003ccode\u003eEq a\u003c/code\u003e, by magic if need be):\n\u003c/p\u003e\u003cpre\u003e if succ x == Just y then enumFromThenTo x y z == enumFromTo x z\n if pred x == Just y then enumFromThenTo x y z == enumDownFromTo x z\n\u003c/pre\u003e\u003cp\u003eIn the default implementation: if \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e fails on any\n argument, then the result is either \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e[x]\u003c/code\u003e (as\n appropriate); and if \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e fails on any of the enumerated\n integers, then the first failure terminates the enumeration.\n If either of these properties is inappropriate, then you\n should override the default. In GHC, the default implementation\n is a \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumFromThenTo",
        "fct-type": "method",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "Enumerate values with an inferred stride and given limit If precedes and therefore we re enumerating forward but succeeds and therefore is past the limit then the result is empty Similarly if succeeds and therefore we re enumerating backward but precedes and therefore is past the limit then the result is empty Otherwise the result is non-empty since it contains Naturally this should agree with enumFromTo and enumDownFromTo assuming Eq by magic if need be if succ Just then enumFromThenTo enumFromTo if pred Just then enumFromThenTo enumDownFromTo In the default implementation if fromEnum fails on any argument then the result is either or as appropriate and if toEnum fails on any of the enumerated integers then the first failure terminates the enumeration If either of these properties is inappropriate then you should override the default In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumFromThenTo",
        "normalized": "a-\u003ea-\u003ea-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "From Then To",
        "signature": "a-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the elements of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, filtering out\n everything that succeeds \u003ccode\u003ez\u003c/code\u003e. If \u003ccode\u003ex\u003c/code\u003e succeeds \u003ccode\u003ez\u003c/code\u003e, then the\n resulting list is empty; otherwise, it is non-empty, since\n it includes \u003ccode\u003ex\u003c/code\u003e. In GHC, the default implementation is a\n \"good producer\" for list fusion.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-source": "src/Prelude-SafeEnum.html#enumFromTo",
        "fct-type": "method",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Return the elements of enumFrom filtering out everything that succeeds If succeeds then the resulting list is empty otherwise it is non-empty since it includes In GHC the default implementation is good producer for list fusion",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "prelude-safeenum",
        "partial": "From To",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:fromEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e Maybe Int",
        "fct-source": "src/Prelude-SafeEnum.html#fromEnum",
        "fct-type": "method",
        "title": "fromEnum"
      },
      "index": {
        "description": "Convert to an Int",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "fromEnum",
        "normalized": "a-\u003eMaybe Int",
        "package": "prelude-safeenum",
        "partial": "Enum",
        "signature": "a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:precedes",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e with regards to the enumeration order.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-SafeEnum.html#precedes",
        "fct-type": "method",
        "title": "precedes"
      },
      "index": {
        "description": "variant of with regards to the enumeration order",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "precedes",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "prelude-safeenum",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:pred",
      "description": {
        "fct-descr": "\u003cp\u003eThe predecessor of a value, or \u003ccode\u003eNothing\u003c/code\u003e is there isn't one.\n For the numeric types in the Prelude, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e Maybe a",
        "fct-source": "src/Prelude-SafeEnum.html#pred",
        "fct-type": "method",
        "title": "pred"
      },
      "index": {
        "description": "The predecessor of value or Nothing is there isn one For the numeric types in the Prelude pred subtracts",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "pred",
        "normalized": "a-\u003eMaybe a",
        "package": "prelude-safeenum",
        "partial": "",
        "signature": "a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:succ",
      "description": {
        "fct-descr": "\u003cp\u003eThe successor of a value, or \u003ccode\u003eNothing\u003c/code\u003e is there isn't one.\n For the numeric types in the Prelude, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e Maybe a",
        "fct-source": "src/Prelude-SafeEnum.html#succ",
        "fct-type": "method",
        "title": "succ"
      },
      "index": {
        "description": "The successor of value or Nothing is there isn one For the numeric types in the Prelude succ adds",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "succ",
        "normalized": "a-\u003eMaybe a",
        "package": "prelude-safeenum",
        "partial": "",
        "signature": "a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:succeeds",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e with regards to the enumeration order.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Prelude-SafeEnum.html#succeeds",
        "fct-type": "method",
        "title": "succeeds"
      },
      "index": {
        "description": "variant of with regards to the enumeration order",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "succeeds",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "prelude-safeenum",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prelude-safeenum/docs/Prelude-SafeEnum.html#v:toEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Prelude.SafeEnum",
        "fct-package": "prelude-safeenum",
        "fct-signature": "Int -\u003e Maybe a",
        "fct-source": "src/Prelude-SafeEnum.html#toEnum",
        "fct-type": "method",
        "title": "toEnum"
      },
      "index": {
        "description": "Convert from an Int",
        "hierarchy": "Prelude SafeEnum",
        "module": "Prelude.SafeEnum",
        "name": "toEnum",
        "normalized": "Int-\u003eMaybe a",
        "package": "prelude-safeenum",
        "partial": "Enum",
        "signature": "Int-\u003eMaybe a"
      }
    }
  }
]