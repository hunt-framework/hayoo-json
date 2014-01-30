[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-th/docs/Control-DeepSeq-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing Template Haskell based \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance\n generators and WHNF=NF type inspectors.\n\u003c/p\u003e\u003cp\u003eTo use this module enable the \u003ccode\u003eTemplateHaskell\u003c/code\u003e extension and\n import \u003ca\u003eControl.DeepSeq.TH\u003c/a\u003e:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.DeepSeq.TH\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.DeepSeq.TH",
        "fct-package": "deepseq-th",
        "fct-signature": "module",
        "fct-source": "src/Control-DeepSeq-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Module providing Template Haskell based NFData instance generators and WHNF NF type inspectors To use this module enable the TemplateHaskell extension and import Control.DeepSeq.TH LANGUAGE TemplateHaskell import Control.DeepSeq.TH",
        "hierarchy": "Control DeepSeq TH",
        "module": "Control.DeepSeq.TH",
        "name": "TH",
        "normalized": "",
        "package": "deepseq-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-th/docs/Control-DeepSeq-TH.html#v:decWhnfIsNf",
      "description": {
        "fct-descr": "\u003cp\u003eTry to infer whether a \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003e which defines a type which has the\n property that WHNF=NF for its values. This property is derived\n statically via the following simple rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enewtype\u003c/code\u003es are WHNF=NF if the wrapped type is WHNF=NF\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etype\u003c/code\u003es are WHNF=NF if the aliased type is WHNF=NF\n\u003c/li\u003e\u003cli\u003e Types defined by \u003ccode\u003edata\u003c/code\u003e are WHNF=NF if all constructors contain\n    only strict fields with WHNF=NF types\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eKnown limitations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Doesn't work properly with parametrized declarations (in which\n    case \u003ccode\u003eNothing\u003c/code\u003e is returned) or existential types\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etypeWhnfIsNf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.TH",
        "fct-package": "deepseq-th",
        "fct-signature": "Dec -\u003e Q (Maybe Bool)",
        "fct-source": "src/Control-DeepSeq-TH.html#decWhnfIsNf",
        "fct-type": "function",
        "title": "decWhnfIsNf"
      },
      "index": {
        "description": "Try to infer whether Dec which defines type which has the property that WHNF NF for its values This property is derived statically via the following simple rules newtype are WHNF NF if the wrapped type is WHNF NF type are WHNF NF if the aliased type is WHNF NF Types defined by data are WHNF NF if all constructors contain only strict fields with WHNF NF types Known limitations Doesn work properly with parametrized declarations in which case Nothing is returned or existential types See also typeWhnfIsNf",
        "hierarchy": "Control DeepSeq TH",
        "module": "Control.DeepSeq.TH",
        "name": "decWhnfIsNf",
        "normalized": "Dec-\u003eQ(Maybe Bool)",
        "package": "deepseq-th",
        "partial": "Whnf Is Nf",
        "signature": "Dec-\u003eQ(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-th/docs/Control-DeepSeq-TH.html#v:deriveNFData",
      "description": {
        "fct-descr": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance for simple \u003ccode\u003eData\u003c/code\u003e-declarations\n\u003c/p\u003e\u003cp\u003eExample usage for deriving \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance for the type \u003ccode\u003eTypeName\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e $(deriveNFData ''TypeName)\n\u003c/pre\u003e\u003cp\u003eThe derivation tries to avoid evaluation of strict fields whose\n types have the WHNF=NF property (see also \u003ccode\u003e\u003ca\u003etypeWhnfIsNf\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edecWhnfIsNf\u003c/a\u003e\u003c/code\u003e). For instance, consider the following types \u003ccode\u003eFoo\u003c/code\u003e\n and \u003ccode\u003eBar\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e data Foo a = Foo1\n            | Foo2 !Int !String\n            | Foo3 (Foo a)\n            | Foo4 { fX :: Int, fY :: Char }\n            | Foo5 !Bar\n            | Foo6 !(String -\u003e Int)\n            | Foo a :--: !Bool\n\n data Bar = Bar0 | Bar1 !Char | Bar2 !Int !Int | Bar3 !Bar\n\u003c/pre\u003e\u003cp\u003eBy invoking \u003ccode\u003e$(deriveNFData ''Foo)\u003c/code\u003e the generated \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance\n will be equivalent to:\n\u003c/p\u003e\u003cpre\u003e instance NFData a =\u003e NFData (Foo a) where\n     rnf Foo1       = ()\n     rnf (Foo2 _ x) = x `deepseq` ()\n     rnf (Foo3 x)   = x `deepseq` ()\n     rnf (Foo4 x y) = x `deepseq` y `deepseq` ()\n     rnf (Foo5 _)   = ()\n     rnf (Foo6 _)   = ()\n     rnf (x :--: _) = x `deepseq` ()\n\u003c/pre\u003e\u003cp\u003eWhereas \u003ccode\u003e$(deriveNFData ''Bar)\u003c/code\u003e generates the following default\n \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance since \u003ccode\u003eBar\u003c/code\u003e is inferred as a WHNF=NF type:\n\u003c/p\u003e\u003cpre\u003e instance NFData Bar\n\u003c/pre\u003e\u003cp\u003eKnown issues/limitations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTypeName\u003c/code\u003e must be a proper \u003ccode\u003edata\u003c/code\u003e typename (use the\n    \u003ccode\u003eGeneralizedNewtypeDeriving\u003c/code\u003e extension for \u003ccode\u003enewtype\u003c/code\u003e names)\n\u003c/li\u003e\u003cli\u003e Does not support existential types yet (i.e. use of the \u003ccode\u003eforall\u003c/code\u003e\n    keyword)\n\u003c/li\u003e\u003cli\u003e Does not always detect phantom type variables (e.g. for \u003ccode\u003edata\n    Foo a = Foo0 | Foo1 (Foo a)\u003c/code\u003e) which causes those to require\n    \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.DeepSeq.TH",
        "fct-package": "deepseq-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Control-DeepSeq-TH.html#deriveNFData",
        "fct-type": "function",
        "title": "deriveNFData"
      },
      "index": {
        "description": "Derive NFData instance for simple Data declarations Example usage for deriving NFData instance for the type TypeName deriveNFData TypeName The derivation tries to avoid evaluation of strict fields whose types have the WHNF NF property see also typeWhnfIsNf and decWhnfIsNf For instance consider the following types Foo and Bar data Foo Foo1 Foo2 Int String Foo3 Foo Foo4 fX Int fY Char Foo5 Bar Foo6 String Int Foo Bool data Bar Bar0 Bar1 Char Bar2 Int Int Bar3 Bar By invoking deriveNFData Foo the generated NFData instance will be equivalent to instance NFData NFData Foo where rnf Foo1 rnf Foo2 deepseq rnf Foo3 deepseq rnf Foo4 deepseq deepseq rnf Foo5 rnf Foo6 rnf deepseq Whereas deriveNFData Bar generates the following default NFData instance since Bar is inferred as WHNF NF type instance NFData Bar Known issues limitations TypeName must be proper data typename use the GeneralizedNewtypeDeriving extension for newtype names Does not support existential types yet i.e use of the forall keyword Does not always detect phantom type variables e.g for data Foo Foo0 Foo1 Foo which causes those to require NFData instances",
        "hierarchy": "Control DeepSeq TH",
        "module": "Control.DeepSeq.TH",
        "name": "deriveNFData",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "deepseq-th",
        "partial": "NFData",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-th/docs/Control-DeepSeq-TH.html#v:deriveNFDatas",
      "description": {
        "fct-descr": "\u003cp\u003ePlural version of \u003ccode\u003e\u003ca\u003ederiveNFData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eConvenience wrapper for \u003ccode\u003e\u003ca\u003ederiveNFData\u003c/a\u003e\u003c/code\u003e which allows to derive\n multiple \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances for a list of \u003ccode\u003eTypeName\u003c/code\u003es, e.g.:\n\u003c/p\u003e\u003cpre\u003e $(deriveNFData [''TypeName1, ''TypeName2, ''TypeName3])\n\u003c/pre\u003e",
        "fct-module": "Control.DeepSeq.TH",
        "fct-package": "deepseq-th",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Control-DeepSeq-TH.html#deriveNFDatas",
        "fct-type": "function",
        "title": "deriveNFDatas"
      },
      "index": {
        "description": "Plural version of deriveNFData Convenience wrapper for deriveNFData which allows to derive multiple NFData instances for list of TypeName e.g deriveNFData TypeName1 TypeName2 TypeName3",
        "hierarchy": "Control DeepSeq TH",
        "module": "Control.DeepSeq.TH",
        "name": "deriveNFDatas",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "deepseq-th",
        "partial": "NFDatas",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-th/docs/Control-DeepSeq-TH.html#v:typeWhnfIsNf",
      "description": {
        "fct-descr": "\u003cp\u003eTry to infer whether \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e has the property that WHNF=NF for its\n values.\n\u003c/p\u003e\u003cp\u003eA result of \u003ccode\u003eNothing\u003c/code\u003e means it is not known whether the\n property holds for the given type. \u003ccode\u003eJust True\u003c/code\u003e means that the\n property holds.\n\u003c/p\u003e\u003cp\u003eThis function has currently a rather limited knowledge and returns\n \u003ccode\u003eNothing\u003c/code\u003e most of the time except for some primitive types and\n other simple cases.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003edecWhnfIsNf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.TH",
        "fct-package": "deepseq-th",
        "fct-signature": "Type -\u003e Q (Maybe Bool)",
        "fct-source": "src/Control-DeepSeq-TH.html#typeWhnfIsNf",
        "fct-type": "function",
        "title": "typeWhnfIsNf"
      },
      "index": {
        "description": "Try to infer whether Type has the property that WHNF NF for its values result of Nothing means it is not known whether the property holds for the given type Just True means that the property holds This function has currently rather limited knowledge and returns Nothing most of the time except for some primitive types and other simple cases See also decWhnfIsNf",
        "hierarchy": "Control DeepSeq TH",
        "module": "Control.DeepSeq.TH",
        "name": "typeWhnfIsNf",
        "normalized": "Type-\u003eQ(Maybe Bool)",
        "package": "deepseq-th",
        "partial": "Whnf Is Nf",
        "signature": "Type-\u003eQ(Maybe Bool)"
      }
    }
  }
]