[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynthetising attributes, partly motivated by Attribute Grammars, and partly by recursion schemes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html",
        "fct-type": "module",
        "title": "Attributes"
      },
      "index": {
        "description": "Synthetising attributes partly motivated by Attribute Grammars and partly by recursion schemes",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "Attributes",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#t:Attrib",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper around \u003ccode\u003eAttr f a\u003c/code\u003e so that we can make \u003ccode\u003eAttr f\u003c/code\u003e \n an instance of Functor, Foldable and Traversable (and Comonad). This is necessary\n since Haskell does not allow partial application of type synonyms.\n\u003c/p\u003e\u003cp\u003eEquivalent to the co-free comonad.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "newtype",
        "title": "Attrib"
      },
      "index": {
        "description": "newtype wrapper around Attr so that we can make Attr an instance of Functor Foldable and Traversable and Comonad This is necessary since Haskell does not allow partial application of type synonyms Equivalent to the co-free comonad",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "Attrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:Attrib",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Attrib",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "function",
        "title": "Attrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "Attrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:annMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap over annotations \n\u003c/p\u003e\u003cpre\u003e annMap f = unAttrib . fmap f . Attrib\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b) -\u003e Attr f a -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#annMap",
        "fct-type": "function",
        "title": "annMap"
      },
      "index": {
        "description": "Map over annotations annMap unAttrib fmap Attrib",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "annMap",
        "normalized": "(a-\u003eb)-\u003eAttr c a-\u003eAttr c b",
        "package": "fixplate",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eAttr f a-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:annZip",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two layers of annotations into a single one.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Mu (Ann (Ann f a) b) -\u003e Attr f (a, b)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#annZip",
        "fct-type": "function",
        "title": "annZip"
      },
      "index": {
        "description": "Merges two layers of annotations into single one",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "annZip",
        "normalized": "Mu(Ann(Ann a b)c)-\u003eAttr a(b,c)",
        "package": "fixplate",
        "partial": "Zip",
        "signature": "Mu(Ann(Ann f a)b)-\u003eAttr f(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:annZip3",
      "description": {
        "fct-descr": "\u003cp\u003eMerges three layers of annotations into a single one.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Mu (Ann (Ann (Ann f a) b) c) -\u003e Attr f (a, b, c)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#annZip3",
        "fct-type": "function",
        "title": "annZip3"
      },
      "index": {
        "description": "Merges three layers of annotations into single one",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "annZip3",
        "normalized": "Mu(Ann(Ann(Ann a b)c)d)-\u003eAttr a(b,c,d)",
        "package": "fixplate",
        "partial": "Zip",
        "signature": "Mu(Ann(Ann(Ann f a)b)c)-\u003eAttr f(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:annZipWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Mu (Ann (Ann f a) b) -\u003e Attr f c",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#annZipWith",
        "fct-type": "function",
        "title": "annZipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "annZipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eMu(Ann(Ann d a)b)-\u003eAttr d c",
        "package": "fixplate",
        "partial": "Zip With",
        "signature": "(a-\u003eb-\u003ec)-\u003eMu(Ann(Ann f a)b)-\u003eAttr f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:annZipWith3",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Mu (Ann (Ann (Ann f a) b) c) -\u003e Attr f d",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#annZipWith3",
        "fct-type": "function",
        "title": "annZipWith3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "annZipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eMu(Ann(Ann(Ann e a)b)c)-\u003eAttr e d",
        "package": "fixplate",
        "partial": "Zip With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eMu(Ann(Ann(Ann f a)b)c)-\u003eAttr f d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:enumerateNodes",
      "description": {
        "fct-descr": "\u003cp\u003eWe use \u003ccode\u003e\u003ca\u003esynthAccumL\u003c/a\u003e\u003c/code\u003e to number the nodes from \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003e(n-1)\u003c/code\u003e in \n a left-to-right traversal fashion, where\n \u003ccode\u003en == length (universe tree)\u003c/code\u003e is the number of substructures,\n which is also returned.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e (Int, Attr f Int)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#enumerateNodes",
        "fct-type": "function",
        "title": "enumerateNodes"
      },
      "index": {
        "description": "We use synthAccumL to number the nodes from to n-1 in left-to-right traversal fashion where length universe tree is the number of substructures which is also returned",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "enumerateNodes",
        "normalized": "Mu a-\u003e(Int,Attr a Int)",
        "package": "fixplate",
        "partial": "Nodes",
        "signature": "Mu f-\u003e(Int,Attr f Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:enumerateNodes_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Attr f Int",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#enumerateNodes_",
        "fct-type": "function",
        "title": "enumerateNodes_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "enumerateNodes_",
        "normalized": "Mu a-\u003eAttr a Int",
        "package": "fixplate",
        "partial": "Nodes",
        "signature": "Mu f-\u003eAttr f Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:inherit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eInherited\u003c/em\u003e attributes are created in a top-down manner. \n As an example, the \u003ccode\u003edepths\u003c/code\u003e function computes the depth \n (the distance from the root, incremented by 1) of all subtrees:\n\u003c/p\u003e\u003cpre\u003e depths :: Functor f =\u003e Mu f -\u003e Attr f Int\n depths = inherit (\\_ i -\u003e i+1) 0\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e a -\u003e a) -\u003e a -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#inherit",
        "fct-type": "function",
        "title": "inherit"
      },
      "index": {
        "description": "Inherited attributes are created in top-down manner As an example the depths function computes the depth the distance from the root incremented by of all subtrees depths Functor Mu Attr Int depths inherit",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "inherit",
        "normalized": "(Mu a-\u003eb-\u003eb)-\u003eb-\u003eMu a-\u003eAttr a b",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003ea-\u003ea)-\u003ea-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:inherit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003escanl\u003c/code\u003e from lists to trees.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Attr f b -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#inherit%27",
        "fct-type": "function",
        "title": "inherit'"
      },
      "index": {
        "description": "Generalization of scanl from lists to trees",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "inherit'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eAttr c b-\u003eAttr c a",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eAttr f b-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:inherit2",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003einherit\u003c/a\u003e\u003c/code\u003e. TODO: better name?\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e a -\u003e (b, a)) -\u003e a -\u003e Mu f -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#inherit2",
        "fct-type": "function",
        "title": "inherit2"
      },
      "index": {
        "description": "Generalization of inherit TODO better name",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "inherit2",
        "normalized": "(Mu a-\u003eb-\u003e(c,b))-\u003eb-\u003eMu a-\u003eAttr a c",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003ea-\u003e(b,a))-\u003ea-\u003eMu f-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:inheritM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003einherit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e a -\u003e m a) -\u003e a -\u003e Mu f -\u003e m (Attr f a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#inheritM",
        "fct-type": "function",
        "title": "inheritM"
      },
      "index": {
        "description": "Monadic version of inherit",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "inheritM",
        "normalized": "(Mu a-\u003eb-\u003ec b)-\u003eb-\u003eMu a-\u003ec(Attr a b)",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003ea-\u003em a)-\u003ea-\u003eMu f-\u003em(Attr f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:inheritM_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e a -\u003e m a) -\u003e a -\u003e Mu f -\u003e m ()",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#inheritM_",
        "fct-type": "function",
        "title": "inheritM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "inheritM_",
        "normalized": "(Mu a-\u003eb-\u003ec b)-\u003eb-\u003eMu a-\u003ec()",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003ea-\u003em a)-\u003ea-\u003eMu f-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:mapAccumCata",
      "description": {
        "fct-descr": "\u003cp\u003eCould be a special case of \u003ccode\u003e\u003ca\u003esynthAccumCata\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e mapAccumCata f == second (annZipWith (flip const)) . synthAccumCata (\\(Ann b t) -\u003e f b t) \n   where second g (x,y) = (x, g y)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f acc -\u003e b -\u003e (acc, c)) -\u003e Attr f b -\u003e (acc, Attr f c)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#mapAccumCata",
        "fct-type": "function",
        "title": "mapAccumCata"
      },
      "index": {
        "description": "Could be special case of synthAccumCata mapAccumCata second annZipWith flip const synthAccumCata Ann where second",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "mapAccumCata",
        "normalized": "(a b-\u003ec-\u003e(b,d))-\u003eAttr a c-\u003e(b,Attr a d)",
        "package": "fixplate",
        "partial": "Accum Cata",
        "signature": "(f acc-\u003eb-\u003e(acc,c))-\u003eAttr f b-\u003e(acc,Attr f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:scanCata",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003esynthetise'\u003c/a\u003e\u003c/code\u003e. Note that this could be a special case of \u003ccode\u003e\u003ca\u003esynthCata\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e scanCata f == annZipWith (flip const) . synthCata (\\(Ann a x) -\u003e f a x)\n\u003c/pre\u003e\u003cp\u003eCatamorphim (\u003ccode\u003ecata\u003c/code\u003e) is the generalization of \u003ccode\u003efoldr\u003c/code\u003e from lists to trees; \n \u003ccode\u003e\u003ca\u003esynthCata\u003c/a\u003e\u003c/code\u003e is one generalization of \u003ccode\u003escanr\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003escanCata\u003c/a\u003e\u003c/code\u003e is another generalization.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f b -\u003e b) -\u003e Attr f a -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#scanCata",
        "fct-type": "function",
        "title": "scanCata"
      },
      "index": {
        "description": "Synonym for synthetise Note that this could be special case of synthCata scanCata annZipWith flip const synthCata Ann Catamorphim cata is the generalization of foldr from lists to trees synthCata is one generalization of scanr and scanCata is another generalization",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "scanCata",
        "normalized": "(a-\u003eb c-\u003ec)-\u003eAttr b a-\u003eAttr b c",
        "package": "fixplate",
        "partial": "Cata",
        "signature": "(a-\u003ef b-\u003eb)-\u003eAttr f a-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:scanPara",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Attr f a -\u003e f b -\u003e b) -\u003e Attr f a -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#scanPara",
        "fct-type": "function",
        "title": "scanPara"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "scanPara",
        "normalized": "(Attr a b-\u003ea c-\u003ec)-\u003eAttr a b-\u003eAttr a c",
        "package": "fixplate",
        "partial": "Para",
        "signature": "(Attr f a-\u003ef b-\u003eb)-\u003eAttr f a-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumCata",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulating catamorphisms. Generalization of \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e from lists to trees.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f acc -\u003e (acc, b)) -\u003e Mu f -\u003e (acc, Attr f b)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumCata",
        "fct-type": "function",
        "title": "synthAccumCata"
      },
      "index": {
        "description": "Accumulating catamorphisms Generalization of mapAccumR from lists to trees",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumCata",
        "normalized": "(a b-\u003e(b,c))-\u003eMu a-\u003e(b,Attr a c)",
        "package": "fixplate",
        "partial": "Accum Cata",
        "signature": "(f acc-\u003e(acc,b))-\u003eMu f-\u003e(acc,Attr f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumL",
      "description": {
        "fct-descr": "\u003cp\u003eSynthetising attributes via an accumulating map in a left-to-right fashion\n (the order is the same as in \u003ccode\u003efoldl\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e (a, b)) -\u003e a -\u003e Mu f -\u003e (a, Attr f b)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumL",
        "fct-type": "function",
        "title": "synthAccumL"
      },
      "index": {
        "description": "Synthetising attributes via an accumulating map in left-to-right fashion the order is the same as in foldl",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumL",
        "normalized": "(a-\u003eMu b-\u003e(a,c))-\u003ea-\u003eMu b-\u003e(a,Attr b c)",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eMu f-\u003e(a,b))-\u003ea-\u003eMu f-\u003e(a,Attr f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumL_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e (a, b)) -\u003e a -\u003e Mu f -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumL_",
        "fct-type": "function",
        "title": "synthAccumL_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumL_",
        "normalized": "(a-\u003eMu b-\u003e(a,c))-\u003ea-\u003eMu b-\u003eAttr b c",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eMu f-\u003e(a,b))-\u003ea-\u003eMu f-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumPara-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulating paramorphisms.  \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e f acc -\u003e (acc, b)) -\u003e Mu f -\u003e (acc, Attr f b)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumPara%27",
        "fct-type": "function",
        "title": "synthAccumPara'"
      },
      "index": {
        "description": "Accumulating paramorphisms",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumPara'",
        "normalized": "(Mu a-\u003ea b-\u003e(b,c))-\u003eMu a-\u003e(b,Attr a c)",
        "package": "fixplate",
        "partial": "Accum Para'",
        "signature": "(Mu f-\u003ef acc-\u003e(acc,b))-\u003eMu f-\u003e(acc,Attr f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eSynthetising attributes via an accumulating map in a right-to-left fashion\n (the order is the same as in \u003ccode\u003efoldr\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e (a, b)) -\u003e a -\u003e Mu f -\u003e (a, Attr f b)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumR",
        "fct-type": "function",
        "title": "synthAccumR"
      },
      "index": {
        "description": "Synthetising attributes via an accumulating map in right-to-left fashion the order is the same as in foldr",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumR",
        "normalized": "(a-\u003eMu b-\u003e(a,c))-\u003ea-\u003eMu b-\u003e(a,Attr b c)",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eMu f-\u003e(a,b))-\u003ea-\u003eMu f-\u003e(a,Attr f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthAccumR_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e (a, b)) -\u003e a -\u003e Mu f -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthAccumR_",
        "fct-type": "function",
        "title": "synthAccumR_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthAccumR_",
        "normalized": "(a-\u003eMu b-\u003e(a,c))-\u003ea-\u003eMu b-\u003eAttr b c",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eMu f-\u003e(a,b))-\u003ea-\u003eMu f-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthCata",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003esynthetise\u003c/a\u003e\u003c/code\u003e, motivated by the equation\n\u003c/p\u003e\u003cpre\u003e  attribute . synthCata f == cata f\n\u003c/pre\u003e\u003cp\u003eThat is, it attributes all subtrees with the result of the corresponding catamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthCata",
        "fct-type": "function",
        "title": "synthCata"
      },
      "index": {
        "description": "Synonym for synthetise motivated by the equation attribute synthCata cata That is it attributes all subtrees with the result of the corresponding catamorphism",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthCata",
        "normalized": "(a b-\u003eb)-\u003eMu a-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Cata",
        "signature": "(f a-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthCataM",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003esynthetiseM\u003c/a\u003e\u003c/code\u003e. If you don't need the result, use \u003ccode\u003ecataM_\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e m a) -\u003e Mu f -\u003e m (Attr f a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthCataM",
        "fct-type": "function",
        "title": "synthCataM"
      },
      "index": {
        "description": "Synonym for synthetiseM If you don need the result use cataM instead",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthCataM",
        "normalized": "(a b-\u003ec b)-\u003eMu a-\u003ec(Attr a b)",
        "package": "fixplate",
        "partial": "Cata",
        "signature": "(f a-\u003em a)-\u003eMu f-\u003em(Attr f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthPara",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes all subtrees with the result of the corresponding paramorphism.\n\u003c/p\u003e\u003cpre\u003e  attribute . synthPara f == para f\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu f, a) -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthPara",
        "fct-type": "function",
        "title": "synthPara"
      },
      "index": {
        "description": "Attributes all subtrees with the result of the corresponding paramorphism attribute synthPara para",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthPara",
        "normalized": "(a(Mu a,b)-\u003eb)-\u003eMu a-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Para",
        "signature": "(f(Mu f,a)-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthPara-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAnother version of \u003ccode\u003e\u003ca\u003esynthPara\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  attribute . synthPara' f == para' f\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e f a -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthPara%27",
        "fct-type": "function",
        "title": "synthPara'"
      },
      "index": {
        "description": "Another version of synthPara attribute synthPara para",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthPara'",
        "normalized": "(Mu a-\u003ea b-\u003eb)-\u003eMu a-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Para'",
        "signature": "(Mu f-\u003ef a-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthParaM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003esynthPara\u003c/a\u003e\u003c/code\u003e. If you don't need the result,  use \u003ccode\u003eparaM_\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu f, a) -\u003e m a) -\u003e Mu f -\u003e m (Attr f a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthParaM",
        "fct-type": "function",
        "title": "synthParaM"
      },
      "index": {
        "description": "Monadic version of synthPara If you don need the result use paraM instead",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthParaM",
        "normalized": "(a(Mu a,b)-\u003ec b)-\u003eMu a-\u003ec(Attr a b)",
        "package": "fixplate",
        "partial": "Para",
        "signature": "(f(Mu f,a)-\u003em a)-\u003eMu f-\u003em(Attr f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthParaM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003esynthPara'\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e f a -\u003e m a) -\u003e Mu f -\u003e m (Attr f a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthParaM%27",
        "fct-type": "function",
        "title": "synthParaM'"
      },
      "index": {
        "description": "Monadic version of synthPara",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthParaM'",
        "normalized": "(Mu a-\u003ea b-\u003ec b)-\u003eMu a-\u003ec(Attr a b)",
        "package": "fixplate",
        "partial": "Para M'",
        "signature": "(Mu f-\u003ef a-\u003em a)-\u003eMu f-\u003em(Attr f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthRewrite",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up transformations to normal form (applying transformation exhaustively)\n which automatically resynthetise attributes in case of changes.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e (Attr f a -\u003e Maybe (f (Attr f a))) -\u003e Attr f a -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthRewrite",
        "fct-type": "function",
        "title": "synthRewrite"
      },
      "index": {
        "description": "Bottom-up transformations to normal form applying transformation exhaustively which automatically resynthetise attributes in case of changes",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthRewrite",
        "normalized": "(a b-\u003eb)-\u003e(Attr a b-\u003eMaybe(a(Attr a b)))-\u003eAttr a b-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Rewrite",
        "signature": "(f a-\u003ea)-\u003e(Attr f a-\u003eMaybe(f(Attr f a)))-\u003eAttr f a-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthRewrite-39-",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f (Attr f a) -\u003e a) -\u003e (Attr f a -\u003e Maybe (f (Attr f a))) -\u003e Attr f a -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthRewrite%27",
        "fct-type": "function",
        "title": "synthRewrite'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthRewrite'",
        "normalized": "(a(Attr a b)-\u003eb)-\u003e(Attr a b-\u003eMaybe(a(Attr a b)))-\u003eAttr a b-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Rewrite'",
        "signature": "(f(Attr f a)-\u003ea)-\u003e(Attr f a-\u003eMaybe(f(Attr f a)))-\u003eAttr f a-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthTransform",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up transformations which automatically resynthetise attributes \n in case of changes.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e (Attr f a -\u003e Maybe (f (Attr f a))) -\u003e Attr f a -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthTransform",
        "fct-type": "function",
        "title": "synthTransform"
      },
      "index": {
        "description": "Bottom-up transformations which automatically resynthetise attributes in case of changes",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthTransform",
        "normalized": "(a b-\u003eb)-\u003e(Attr a b-\u003eMaybe(a(Attr a b)))-\u003eAttr a b-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Transform",
        "signature": "(f a-\u003ea)-\u003e(Attr f a-\u003eMaybe(f(Attr f a)))-\u003eAttr f a-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthTransform-39-",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f (Attr f a) -\u003e a) -\u003e (Attr f a -\u003e Maybe (f (Attr f a))) -\u003e Attr f a -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthTransform%27",
        "fct-type": "function",
        "title": "synthTransform'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthTransform'",
        "normalized": "(a(Attr a b)-\u003eb)-\u003e(Attr a b-\u003eMaybe(a(Attr a b)))-\u003eAttr a b-\u003eAttr a b",
        "package": "fixplate",
        "partial": "Transform'",
        "signature": "(f(Attr f a)-\u003ea)-\u003e(Attr f a-\u003eMaybe(f(Attr f a)))-\u003eAttr f a-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthZygo",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f b -\u003e b) -\u003e (f (b, a) -\u003e a) -\u003e Mu f -\u003e Attr f (b, a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthZygo",
        "fct-type": "function",
        "title": "synthZygo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthZygo",
        "normalized": "(a b-\u003eb)-\u003e(a(b,c)-\u003ec)-\u003eMu a-\u003eAttr a(b,c)",
        "package": "fixplate",
        "partial": "Zygo",
        "signature": "(f b-\u003eb)-\u003e(f(b,a)-\u003ea)-\u003eMu f-\u003eAttr f(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthZygoWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(b -\u003e a -\u003e c) -\u003e (f b -\u003e b) -\u003e (f (b, a) -\u003e a) -\u003e Mu f -\u003e Attr f c",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthZygoWith",
        "fct-type": "function",
        "title": "synthZygoWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthZygoWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d a-\u003ea)-\u003e(d(a,b)-\u003eb)-\u003eMu d-\u003eAttr d c",
        "package": "fixplate",
        "partial": "Zygo With",
        "signature": "(b-\u003ea-\u003ec)-\u003e(f b-\u003eb)-\u003e(f(b,a)-\u003ea)-\u003eMu f-\u003eAttr f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthZygo_",
      "description": {
        "fct-descr": "\u003cp\u003eSynthetising zygomorphism. \n\u003c/p\u003e\u003cpre\u003e attribute . synthZygo_ g h == zygo_ g h\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f b -\u003e b) -\u003e (f (b, a) -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthZygo_",
        "fct-type": "function",
        "title": "synthZygo_"
      },
      "index": {
        "description": "Synthetising zygomorphism attribute synthZygo zygo",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthZygo_",
        "normalized": "(a b-\u003eb)-\u003e(a(b,c)-\u003ec)-\u003eMu a-\u003eAttr a c",
        "package": "fixplate",
        "partial": "Zygo",
        "signature": "(f b-\u003eb)-\u003e(f(b,a)-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthetise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eSynthetised\u003c/em\u003e attributes are created in a bottom-up manner. \n As an example, the \u003ccode\u003esizes\u003c/code\u003e function computes the sizes of all\n subtrees:\n\u003c/p\u003e\u003cpre\u003e sizes :: (Functor f, Foldable f) =\u003e Mu f -\u003e Attr f Int\n sizes = synthetise (\\t -\u003e 1 + sum t)\n\u003c/pre\u003e\u003cp\u003e(note that \u003ccode\u003esum\u003c/code\u003e here is \u003ccode\u003eData.Foldable.sum == Prelude.sum . Data.Foldable.toList\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003esynthCata\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthetise",
        "fct-type": "function",
        "title": "synthetise"
      },
      "index": {
        "description": "Synthetised attributes are created in bottom-up manner As an example the sizes function computes the sizes of all subtrees sizes Functor Foldable Mu Attr Int sizes synthetise sum note that sum here is Data.Foldable.sum Prelude.sum Data.Foldable.toList See also synthCata",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthetise",
        "normalized": "(a b-\u003eb)-\u003eMu a-\u003eAttr a b",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthetise-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003escanr\u003c/code\u003e for trees. See also \u003ccode\u003e\u003ca\u003escanCata\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f b -\u003e b) -\u003e Attr f a -\u003e Attr f b",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthetise%27",
        "fct-type": "function",
        "title": "synthetise'"
      },
      "index": {
        "description": "Generalization of scanr for trees See also scanCata",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthetise'",
        "normalized": "(a-\u003eb c-\u003ec)-\u003eAttr b a-\u003eAttr b c",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ef b-\u003eb)-\u003eAttr f a-\u003eAttr f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthetiseList",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003esynthetise\u003c/a\u003e\u003c/code\u003e (compare with Uniplate)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "([a] -\u003e a) -\u003e Mu f -\u003e Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthetiseList",
        "fct-type": "function",
        "title": "synthetiseList"
      },
      "index": {
        "description": "List version of synthetise compare with Uniplate",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthetiseList",
        "normalized": "([a]-\u003ea)-\u003eMu b-\u003eAttr b a",
        "package": "fixplate",
        "partial": "List",
        "signature": "([a]-\u003ea)-\u003eMu f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:synthetiseM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003esynthetise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e m a) -\u003e Mu f -\u003e m (Attr f a)",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#synthetiseM",
        "fct-type": "function",
        "title": "synthetiseM"
      },
      "index": {
        "description": "Monadic version of synthetise",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "synthetiseM",
        "normalized": "(a b-\u003ec b)-\u003eMu a-\u003ec(Attr a b)",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003em a)-\u003eMu f-\u003em(Attr f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:topDownSweepM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic top-down \"sweep\" of a tree. It's kind of a more complicated folding version of \u003ccode\u003e\u003ca\u003einheritM\u003c/a\u003e\u003c/code\u003e.\n This is unsafe in the sense that the user is responsible to retain the shape of the node.\n TODO: better name?\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(f () -\u003e a -\u003e m (f a)) -\u003e a -\u003e Mu f -\u003e m ()",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#topDownSweepM",
        "fct-type": "function",
        "title": "topDownSweepM"
      },
      "index": {
        "description": "Monadic top-down sweep of tree It kind of more complicated folding version of inheritM This is unsafe in the sense that the user is responsible to retain the shape of the node TODO better name",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "topDownSweepM",
        "normalized": "(a()-\u003eb-\u003ec(a b))-\u003eb-\u003eMu a-\u003ec()",
        "package": "fixplate",
        "partial": "Down Sweep",
        "signature": "(f()-\u003ea-\u003em(f a))-\u003ea-\u003eMu f-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:topDownSweepM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAn attributed version of \u003ccode\u003e\u003ca\u003etopDownSweepM\u003c/a\u003e\u003c/code\u003e. Probably more useful.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "(b -\u003e f b -\u003e a -\u003e m (f a)) -\u003e a -\u003e Attr f b -\u003e m ()",
        "fct-source": "src/Data-Generics-Fixplate-Attributes.html#topDownSweepM%27",
        "fct-type": "function",
        "title": "topDownSweepM'"
      },
      "index": {
        "description": "An attributed version of topDownSweepM Probably more useful",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "topDownSweepM'",
        "normalized": "(a-\u003eb a-\u003ec-\u003ed(b c))-\u003ec-\u003eAttr b a-\u003ed()",
        "package": "fixplate",
        "partial": "Down Sweep M'",
        "signature": "(b-\u003ef b-\u003ea-\u003em(f a))-\u003ea-\u003eAttr f b-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Attributes.html#v:unAttrib",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Attributes",
        "fct-package": "fixplate",
        "fct-signature": "Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "function",
        "title": "unAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Attributes",
        "module": "Data.Generics.Fixplate.Attributes",
        "name": "unAttrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core types of Fixplate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "The core types of Fixplate",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Base",
        "normalized": "",
        "package": "fixplate",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:Ann",
      "description": {
        "fct-descr": "\u003cp\u003eType of annotations\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Ann",
        "fct-type": "data",
        "title": "Ann"
      },
      "index": {
        "description": "Type of annotations",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Ann",
        "normalized": "",
        "package": "fixplate",
        "partial": "Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotated fixed-point type. Equivalent to \u003ccode\u003eCoFree f a\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "type",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attr",
        "fct-type": "type",
        "title": "Attr"
      },
      "index": {
        "description": "Annotated fixed-point type Equivalent to CoFree",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Attr",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:Attrib",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper around \u003ccode\u003eAttr f a\u003c/code\u003e so that we can make \u003ccode\u003eAttr f\u003c/code\u003e \n an instance of Functor, Foldable and Traversable (and Comonad). This is necessary\n since Haskell does not allow partial application of type synonyms.\n\u003c/p\u003e\u003cp\u003eEquivalent to the co-free comonad.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "newtype",
        "title": "Attrib"
      },
      "index": {
        "description": "newtype wrapper around Attr so that we can make Attr an instance of Functor Foldable and Traversable and Comonad This is necessary since Haskell does not allow partial application of type synonyms Equivalent to the co-free comonad",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Attrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:CoAnn",
      "description": {
        "fct-descr": "\u003cp\u003eCategorical dual of \u003ccode\u003e\u003ca\u003eAnn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAnn",
        "fct-type": "data",
        "title": "CoAnn"
      },
      "index": {
        "description": "Categorical dual of Ann",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "CoAnn",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:CoAttr",
      "description": {
        "fct-descr": "\u003cp\u003eCategorical dual of \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e. Equivalent to \u003ccode\u003eFree f a\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "type",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAttr",
        "fct-type": "type",
        "title": "CoAttr"
      },
      "index": {
        "description": "Categorical dual of Attr Equivalent to Free",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "CoAttr",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:CoAttrib",
      "description": {
        "fct-descr": "\u003cp\u003eCategorial dual of \u003ccode\u003e\u003ca\u003eAttrib\u003c/a\u003e\u003c/code\u003e. Equivalent to the free monad.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAttrib",
        "fct-type": "newtype",
        "title": "CoAttrib"
      },
      "index": {
        "description": "Categorial dual of Attrib Equivalent to the free monad",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "CoAttrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:EqF",
      "description": {
        "fct-descr": "\u003cp\u003e\"Functorised\" versions of standard type classes. \n If you have your a structure functor, for example\n\u003c/p\u003e\u003cpre\u003e Expr e \n   = Kst Int \n   | Var String \n   | Add e e \n   deriving (Eq,Ord,Read,Show,Functor,Foldable,Traversable)\n\u003c/pre\u003e\u003cp\u003eyou should make it an instance of these, so that the \n fixed-point type \u003ccode\u003eMu Expr\u003c/code\u003e can be an instance of\n \u003ccode\u003eEq\u003c/code\u003e, \u003ccode\u003eOrd\u003c/code\u003e and \u003ccode\u003eShow\u003c/code\u003e. Doing so is very easy:\n\u003c/p\u003e\u003cpre\u003e instance EqF   Expr where equalF     = (==)\n instance OrdF  Expr where compareF   = compare\n instance ShowF Expr where showsPrecF = showsPrec\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eRead\u003c/code\u003e instance depends on whether we are using GHC or not.\n The Haskell98 version is\n\u003c/p\u003e\u003cpre\u003e instance ReadF Expr where readsPrecF = readsPrec\n\u003c/pre\u003e\u003cp\u003ewhile the GHC version is\n\u003c/p\u003e\u003cpre\u003e instance ReadF Expr where readPrecF  = readPrec\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#EqF",
        "fct-type": "class",
        "title": "EqF"
      },
      "index": {
        "description": "Functorised versions of standard type classes If you have your structure functor for example Expr Kst Int Var String Add deriving Eq Ord Read Show Functor Foldable Traversable you should make it an instance of these so that the fixed-point type Mu Expr can be an instance of Eq Ord and Show Doing so is very easy instance EqF Expr where equalF instance OrdF Expr where compareF compare instance ShowF Expr where showsPrecF showsPrec The Read instance depends on whether we are using GHC or not The Haskell98 version is instance ReadF Expr where readsPrecF readsPrec while the GHC version is instance ReadF Expr where readPrecF readPrec",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "EqF",
        "normalized": "",
        "package": "fixplate",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:Hole",
      "description": {
        "fct-descr": "\u003cp\u003eThis a data type defined to be a place-holder for childs.\n It is used in tree drawing, hashing, and \u003ccode\u003eShape\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is deliberately not made an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, so that \n you can choose your preferred style. For example, an acceptable choice is\n\u003c/p\u003e\u003cpre\u003e instance Show Hole where show _ = \"_\"\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Hole",
        "fct-type": "data",
        "title": "Hole"
      },
      "index": {
        "description": "This data type defined to be place-holder for childs It is used in tree drawing hashing and Shape It is deliberately not made an instance of Show so that you can choose your preferred style For example an acceptable choice is instance Show Hole where show",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Hole",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:Mu",
      "description": {
        "fct-descr": "\u003cp\u003eThe fixed-point type.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Mu",
        "fct-type": "newtype",
        "title": "Mu"
      },
      "index": {
        "description": "The fixed-point type",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Mu",
        "normalized": "",
        "package": "fixplate",
        "partial": "Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:OrdF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#OrdF",
        "fct-type": "class",
        "title": "OrdF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "OrdF",
        "normalized": "",
        "package": "fixplate",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:ReadF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#ReadF",
        "fct-type": "class",
        "title": "ReadF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "ReadF",
        "normalized": "",
        "package": "fixplate",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#t:ShowF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#ShowF",
        "fct-type": "class",
        "title": "ShowF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "ShowF",
        "normalized": "",
        "package": "fixplate",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:Ann",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Ann",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Ann",
        "fct-type": "function",
        "title": "Ann"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Ann",
        "normalized": "",
        "package": "fixplate",
        "partial": "Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:Attrib",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Attrib",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "function",
        "title": "Attrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Attrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:CoAnn",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "CoAnn (f b)",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAnn",
        "fct-type": "function",
        "title": "CoAnn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "CoAnn",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:CoAttrib",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "CoAttrib",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAttrib",
        "fct-type": "function",
        "title": "CoAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "CoAttrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:Fix",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Fix",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Mu",
        "fct-type": "function",
        "title": "Fix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Fix",
        "normalized": "",
        "package": "fixplate",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:Hole",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Hole",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Hole",
        "fct-type": "function",
        "title": "Hole"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Hole",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:Pure",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Pure a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAnn",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "Pure",
        "normalized": "",
        "package": "fixplate",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:attr",
      "description": {
        "fct-descr": "\u003cp\u003ethe annotation\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Ann",
        "fct-type": "function",
        "title": "attr"
      },
      "index": {
        "description": "the annotation",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "attr",
        "normalized": "",
        "package": "fixplate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:attribute",
      "description": {
        "fct-descr": "\u003cp\u003eThe attribute of the root node.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Attr f a -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#attribute",
        "fct-type": "function",
        "title": "attribute"
      },
      "index": {
        "description": "The attribute of the root node",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "attribute",
        "normalized": "Attr a b-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "Attr f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:compareF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e f a -\u003e Ordering",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#compareF",
        "fct-type": "method",
        "title": "compareF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "compareF",
        "normalized": "a b-\u003ea b-\u003eOrdering",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003ef a-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:equalF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e f a -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#equalF",
        "fct-type": "method",
        "title": "equalF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "equalF",
        "normalized": "a b-\u003ea b-\u003eBool",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003ef a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:forget",
      "description": {
        "fct-descr": "\u003cp\u003eA function forgetting all the attributes from an annotated tree.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Attr f a -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#forget",
        "fct-type": "function",
        "title": "forget"
      },
      "index": {
        "description": "function forgetting all the attributes from an annotated tree",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "forget",
        "normalized": "Attr a b-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "Attr f a-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:isAtom",
      "description": {
        "fct-descr": "\u003cp\u003eWe call a tree \"atomic\" if it has no subtrees.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#isAtom",
        "fct-type": "function",
        "title": "isAtom"
      },
      "index": {
        "description": "We call tree atomic if it has no subtrees",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "isAtom",
        "normalized": "Mu a-\u003eBool",
        "package": "fixplate",
        "partial": "Atom",
        "signature": "Mu f-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:liftAnn",
      "description": {
        "fct-descr": "\u003cp\u003eLifting natural transformations to annotations.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "(f e -\u003e g e) -\u003e Ann f a e -\u003e Ann g a e",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#liftAnn",
        "fct-type": "function",
        "title": "liftAnn"
      },
      "index": {
        "description": "Lifting natural transformations to annotations",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "liftAnn",
        "normalized": "(a b-\u003ec b)-\u003eAnn a d b-\u003eAnn c d b",
        "package": "fixplate",
        "partial": "Ann",
        "signature": "(f e-\u003eg e)-\u003eAnn f a e-\u003eAnn g a e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:liftCoAnn",
      "description": {
        "fct-descr": "\u003cp\u003eLifting natural transformations to annotations.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "(f e -\u003e g e) -\u003e CoAnn f a e -\u003e CoAnn g a e",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#liftCoAnn",
        "fct-type": "function",
        "title": "liftCoAnn"
      },
      "index": {
        "description": "Lifting natural transformations to annotations",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "liftCoAnn",
        "normalized": "(a b-\u003ec b)-\u003eCoAnn a d b-\u003eCoAnn c d b",
        "package": "fixplate",
        "partial": "Co Ann",
        "signature": "(f e-\u003eg e)-\u003eCoAnn f a e-\u003eCoAnn g a e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:readPrecF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "ReadPrec (f a)",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#readPrecF",
        "fct-type": "method",
        "title": "readPrecF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "readPrecF",
        "normalized": "",
        "package": "fixplate",
        "partial": "Prec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:showF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#showF",
        "fct-type": "function",
        "title": "showF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "showF",
        "normalized": "a b-\u003eString",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:showsF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e ShowS",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#showsF",
        "fct-type": "function",
        "title": "showsF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "showsF",
        "normalized": "a b-\u003eShowS",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:showsPrecF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e f a -\u003e ShowS",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#showsPrecF",
        "fct-type": "method",
        "title": "showsPrecF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "showsPrecF",
        "normalized": "Int-\u003ea b-\u003eShowS",
        "package": "fixplate",
        "partial": "Prec",
        "signature": "Int-\u003ef a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:unAnn",
      "description": {
        "fct-descr": "\u003cp\u003ethe original functor\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f b",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Ann",
        "fct-type": "function",
        "title": "unAnn"
      },
      "index": {
        "description": "the original functor",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "unAnn",
        "normalized": "",
        "package": "fixplate",
        "partial": "Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:unAttrib",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "Attr f a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Attrib",
        "fct-type": "function",
        "title": "unAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "unAttrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:unCoAttrib",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "CoAttr f a",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#CoAttrib",
        "fct-type": "function",
        "title": "unCoAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "unCoAttrib",
        "normalized": "",
        "package": "fixplate",
        "partial": "Co Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Base.html#v:unFix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Base",
        "fct-package": "fixplate",
        "fct-signature": "f (Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Mu",
        "fct-type": "function",
        "title": "unFix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Base",
        "module": "Data.Generics.Fixplate.Base",
        "name": "unFix",
        "normalized": "",
        "package": "fixplate",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric ascii art / graphviz drawing of trees.\n\u003c/p\u003e\u003cp\u003eSuggestions for drawing styles are welcome. \n\u003c/p\u003e\u003cp\u003eTODO:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e make the style customizable\n\u003c/li\u003e\u003cli\u003e the same for graphviz\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html",
        "fct-type": "module",
        "title": "Draw"
      },
      "index": {
        "description": "Generic ascii art graphviz drawing of trees Suggestions for drawing styles are welcome TODO make the style customizable the same for graphviz",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "Draw",
        "normalized": "",
        "package": "fixplate",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:drawTree",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a tree. It is defined simply as\n\u003c/p\u003e\u003cpre\u003e drawTree = putStrLn . showTree\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e IO ()",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#drawTree",
        "fct-type": "function",
        "title": "drawTree"
      },
      "index": {
        "description": "Prints tree It is defined simply as drawTree putStrLn showTree",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "drawTree",
        "normalized": "Mu a-\u003eIO()",
        "package": "fixplate",
        "partial": "Tree",
        "signature": "Mu f-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:drawTreeWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "(f Hole -\u003e String) -\u003e Mu f -\u003e IO ()",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#drawTreeWith",
        "fct-type": "function",
        "title": "drawTreeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "drawTreeWith",
        "normalized": "(a Hole-\u003eString)-\u003eMu a-\u003eIO()",
        "package": "fixplate",
        "partial": "Tree With",
        "signature": "(f Hole-\u003eString)-\u003eMu f-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:graphvizTree",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a graphviz \u003ccode\u003e.dot\u003c/code\u003e file \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#graphvizTree",
        "fct-type": "function",
        "title": "graphvizTree"
      },
      "index": {
        "description": "Generate graphviz dot file",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "graphvizTree",
        "normalized": "Mu a-\u003eString",
        "package": "fixplate",
        "partial": "Tree",
        "signature": "Mu f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:graphvizTreeWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "(f Hole -\u003e String) -\u003e Mu f -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#graphvizTreeWith",
        "fct-type": "function",
        "title": "graphvizTreeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "graphvizTreeWith",
        "normalized": "(a Hole-\u003eString)-\u003eMu a-\u003eString",
        "package": "fixplate",
        "partial": "Tree With",
        "signature": "(f Hole-\u003eString)-\u003eMu f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:showTree",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a string representation which can be printed with \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "Creates string representation which can be printed with putStrLn",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "showTree",
        "normalized": "Mu a-\u003eString",
        "package": "fixplate",
        "partial": "Tree",
        "signature": "Mu f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Draw.html#v:showTreeWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Draw",
        "fct-package": "fixplate",
        "fct-signature": "(f Hole -\u003e String) -\u003e Mu f -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Draw.html#showTreeWith",
        "fct-type": "function",
        "title": "showTreeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Draw",
        "module": "Data.Generics.Fixplate.Draw",
        "name": "showTreeWith",
        "normalized": "(a Hole-\u003eString)-\u003eMu a-\u003eString",
        "package": "fixplate",
        "partial": "Tree With",
        "signature": "(f Hole-\u003eString)-\u003eMu f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric hashing on trees. We recursively compute hashes of all subtrees,\n giving fast inequality testing, and a fast, but meaningless (more-or-less random)\n ordering on the set of trees (so that we can put them into Map-s).\n\u003c/p\u003e\u003cp\u003eThe way it works is that when we compute the hash of a node, we use the hashes of the \n children directly; this way, you can also incrementally build up a hashed tree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html",
        "fct-type": "module",
        "title": "Hash"
      },
      "index": {
        "description": "Generic hashing on trees We recursively compute hashes of all subtrees giving fast inequality testing and fast but meaningless more-or-less random ordering on the set of trees so that we can put them into Map-s The way it works is that when we compute the hash of node we use the hashes of the children directly this way you can also incrementally build up hashed tree",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "Hash",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#t:HashAnn",
      "description": {
        "fct-descr": "\u003cp\u003eHash annotation (question: should the Hash field be strict? everything else in the library is lazy...)\n\u003c/p\u003e\u003cp\u003eThis is custom datatype instead of reusing \u003ccode\u003e\u003ca\u003eAnn\u003c/a\u003e\u003c/code\u003e because of the different Eq/Ord instances we need.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashAnn",
        "fct-type": "data",
        "title": "HashAnn"
      },
      "index": {
        "description": "Hash annotation question should the Hash field be strict everything else in the library is lazy This is custom datatype instead of reusing Ann because of the different Eq Ord instances we need",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "HashAnn",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#t:HashMu",
      "description": {
        "fct-descr": "\u003cp\u003eA tree annotated with hashes of all subtrees. This gives us fast inequality testing,\n and fast (but meaningless!) ordering for \u003ccode\u003eMap\u003c/code\u003e-s.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "type",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashMu",
        "fct-type": "type",
        "title": "HashMu"
      },
      "index": {
        "description": "tree annotated with hashes of all subtrees This gives us fast inequality testing and fast but meaningless ordering for Map",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "HashMu",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#t:HashValue",
      "description": {
        "fct-descr": "\u003cp\u003eA concrete hash implementation. We don't use type classes since \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a hash type class does not belong to this library;\n\u003c/li\u003e\u003cli\u003e we don't want to restrict the user's design space\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThus we simulate type classes with record types.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashValue",
        "fct-type": "data",
        "title": "HashValue"
      },
      "index": {
        "description": "concrete hash implementation We don use type classes since hash type class does not belong to this library we don want to restrict the user design space Thus we simulate type classes with record types",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "HashValue",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:HashAnn",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashAnn hash (f a)",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashAnn",
        "fct-type": "function",
        "title": "HashAnn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "HashAnn",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Ann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:HashValue",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashValue",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashValue",
        "fct-type": "function",
        "title": "HashValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "HashValue",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:_emptyHash",
      "description": {
        "fct-descr": "\u003cp\u003ethe hash of an empty byte sequence\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "hash",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashValue",
        "fct-type": "function",
        "title": "_emptyHash"
      },
      "index": {
        "description": "the hash of an empty byte sequence",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "_emptyHash",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:_hashChar",
      "description": {
        "fct-descr": "\u003cp\u003edigest a (unicode) character\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "Char -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashValue",
        "fct-type": "function",
        "title": "_hashChar"
      },
      "index": {
        "description": "digest unicode character",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "_hashChar",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Char",
        "signature": "Char-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:_hashHash",
      "description": {
        "fct-descr": "\u003cp\u003edigest a hash value \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "hash -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#HashValue",
        "fct-type": "function",
        "title": "_hashHash"
      },
      "index": {
        "description": "digest hash value",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "_hashHash",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "hash-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:forgetHash",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashMu hash f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#forgetHash",
        "fct-type": "function",
        "title": "forgetHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "forgetHash",
        "normalized": "HashMu a b-\u003eMu b",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "HashMu hash f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:getHash",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashAnn hash f a -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#getHash",
        "fct-type": "function",
        "title": "getHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "getHash",
        "normalized": "HashAnn a b c-\u003ea",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "HashAnn hash f a-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:hashNode",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a hashed node from the children.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashValue hash -\u003e f (HashMu hash f) -\u003e HashMu hash f",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#hashNode",
        "fct-type": "function",
        "title": "hashNode"
      },
      "index": {
        "description": "Build hashed node from the children",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "hashNode",
        "normalized": "HashValue a-\u003eb(HashMu a b)-\u003eHashMu a b",
        "package": "fixplate",
        "partial": "Node",
        "signature": "HashValue hash-\u003ef(HashMu hash f)-\u003eHashMu hash f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:hashNodeWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashValue hash -\u003e (f Hole -\u003e hash -\u003e hash) -\u003e f (HashMu hash f) -\u003e HashMu hash f",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#hashNodeWith",
        "fct-type": "function",
        "title": "hashNodeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "hashNodeWith",
        "normalized": "HashValue a-\u003e(b Hole-\u003ea-\u003ea)-\u003eb(HashMu a b)-\u003eHashMu a b",
        "package": "fixplate",
        "partial": "Node With",
        "signature": "HashValue hash-\u003e(f Hole-\u003ehash-\u003ehash)-\u003ef(HashMu hash f)-\u003eHashMu hash f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:hashTree",
      "description": {
        "fct-descr": "\u003cp\u003eThis function uses the \u003ccode\u003e\u003ca\u003eShowF\u003c/a\u003e\u003c/code\u003e instance to compute\n the hash of a node; this way you always have a working\n version without writing any additional code.\n\u003c/p\u003e\u003cp\u003eHowever, you can also supply your own hash implementation \n (which can be more efficient, for example), if you use \u003ccode\u003e\u003ca\u003ehashTreeWith\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashValue hash -\u003e Mu f -\u003e HashMu hash f",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#hashTree",
        "fct-type": "function",
        "title": "hashTree"
      },
      "index": {
        "description": "This function uses the ShowF instance to compute the hash of node this way you always have working version without writing any additional code However you can also supply your own hash implementation which can be more efficient for example if you use hashTreeWith instead",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "hashTree",
        "normalized": "HashValue a-\u003eMu b-\u003eHashMu a b",
        "package": "fixplate",
        "partial": "Tree",
        "signature": "HashValue hash-\u003eMu f-\u003eHashMu hash f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:hashTreeWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashValue hash -\u003e (f Hole -\u003e hash -\u003e hash) -\u003e Mu f -\u003e HashMu hash f",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#hashTreeWith",
        "fct-type": "function",
        "title": "hashTreeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "hashTreeWith",
        "normalized": "HashValue a-\u003e(b Hole-\u003ea-\u003ea)-\u003eMu b-\u003eHashMu a b",
        "package": "fixplate",
        "partial": "Tree With",
        "signature": "HashValue hash-\u003e(f Hole-\u003ehash-\u003ehash)-\u003eMu f-\u003eHashMu hash f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:topHash",
      "description": {
        "fct-descr": "\u003cp\u003eThe hash of the complete tree.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashMu hash f -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#topHash",
        "fct-type": "function",
        "title": "topHash"
      },
      "index": {
        "description": "The hash of the complete tree",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "topHash",
        "normalized": "HashMu a b-\u003ea",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "HashMu hash f-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Hash.html#v:unHashAnn",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Hash",
        "fct-package": "fixplate",
        "fct-signature": "HashAnn hash f a -\u003e f a",
        "fct-source": "src/Data-Generics-Fixplate-Hash.html#unHashAnn",
        "fct-type": "function",
        "title": "unHashAnn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Hash",
        "module": "Data.Generics.Fixplate.Hash",
        "name": "unHashAnn",
        "normalized": "HashAnn a b c-\u003eb c",
        "package": "fixplate",
        "partial": "Hash Ann",
        "signature": "HashAnn hash f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRecursion schemes, also known as scary named folds... \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html",
        "fct-type": "module",
        "title": "Morphisms"
      },
      "index": {
        "description": "Recursion schemes also known as scary named folds",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "Morphisms",
        "normalized": "",
        "package": "fixplate",
        "partial": "Morphisms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:ana",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eanamorphism\u003c/em\u003e is simply an unfold. Probably not very useful in this context.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f a) -\u003e a -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#ana",
        "fct-type": "function",
        "title": "ana"
      },
      "index": {
        "description": "An anamorphism is simply an unfold Probably not very useful in this context",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "ana",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eMu b",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003ea-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:apo",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eapomorphism\u003c/em\u003e is a generalization of the anamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f (Either (Mu f) a)) -\u003e a -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#apo",
        "fct-type": "function",
        "title": "apo"
      },
      "index": {
        "description": "An apomorphism is generalization of the anamorphism",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "apo",
        "normalized": "(a-\u003eb(Either(Mu b)a))-\u003ea-\u003eMu b",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ef(Either(Mu f)a))-\u003ea-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:cata",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003ecatamorphism\u003c/em\u003e is the generalization of right fold from lists to trees.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#cata",
        "fct-type": "function",
        "title": "cata"
      },
      "index": {
        "description": "catamorphism is the generalization of right fold from lists to trees",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "cata",
        "normalized": "(a b-\u003eb)-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:cataM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic catamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e m a) -\u003e Mu f -\u003e m a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#cataM",
        "fct-type": "function",
        "title": "cataM"
      },
      "index": {
        "description": "Monadic catamorphism",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "cataM",
        "normalized": "(a b-\u003ec b)-\u003eMu a-\u003ec b",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003em a)-\u003eMu f-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:cataM_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e m a) -\u003e Mu f -\u003e m ()",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#cataM_",
        "fct-type": "function",
        "title": "cataM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "cataM_",
        "normalized": "(a b-\u003ec b)-\u003eMu a-\u003ec()",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003em a)-\u003eMu f-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:futu",
      "description": {
        "fct-descr": "\u003cp\u003eFutumorphism. This is a more interesting unfold.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f (CoAttr f a)) -\u003e a -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#futu",
        "fct-type": "function",
        "title": "futu"
      },
      "index": {
        "description": "Futumorphism This is more interesting unfold",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "futu",
        "normalized": "(a-\u003eb(CoAttr b a))-\u003ea-\u003eMu b",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ef(CoAttr f a))-\u003ea-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:histo",
      "description": {
        "fct-descr": "\u003cp\u003eHistomorphism. This is a kind of glorified cata/paramorphism, after all:\n\u003c/p\u003e\u003cpre\u003e cata f == histo (f . fmap attribute)\n para f == histo (f . fmap (\\t -\u003e (forget t, attribute t)))\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f (Attr f a) -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#histo",
        "fct-type": "function",
        "title": "histo"
      },
      "index": {
        "description": "Histomorphism This is kind of glorified cata paramorphism after all cata histo fmap attribute para histo fmap forget attribute",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "histo",
        "normalized": "(a(Attr a b)-\u003eb)-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Attr f a)-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:hylo",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003ehylomorphism\u003c/em\u003e is the composition of a catamorphism and an anamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f a -\u003e a) -\u003e (b -\u003e f b) -\u003e b -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#hylo",
        "fct-type": "function",
        "title": "hylo"
      },
      "index": {
        "description": "hylomorphism is the composition of catamorphism and an anamorphism",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "hylo",
        "normalized": "(a b-\u003eb)-\u003e(c-\u003ea c)-\u003ec-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(f a-\u003ea)-\u003e(b-\u003ef b)-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:para",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003eparamorphism\u003c/em\u003e is a more general version of the catamorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu f, a) -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#para",
        "fct-type": "function",
        "title": "para"
      },
      "index": {
        "description": "paramorphism is more general version of the catamorphism",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "para",
        "normalized": "(a(Mu a,b)-\u003eb)-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Mu f,a)-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:para-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAnother version of \u003ccode\u003e\u003ca\u003epara\u003c/a\u003e\u003c/code\u003e (a bit less natural in some sense).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e f a -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#para%27",
        "fct-type": "function",
        "title": "para'"
      },
      "index": {
        "description": "Another version of para bit less natural in some sense",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "para'",
        "normalized": "(Mu a-\u003ea b-\u003eb)-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003ef a-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:paraList",
      "description": {
        "fct-descr": "\u003cp\u003eA list version of \u003ccode\u003e\u003ca\u003epara\u003c/a\u003e\u003c/code\u003e (compare with Uniplate)\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e [a] -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#paraList",
        "fct-type": "function",
        "title": "paraList"
      },
      "index": {
        "description": "list version of para compare with Uniplate",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "paraList",
        "normalized": "(Mu a-\u003e[b]-\u003eb)-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "List",
        "signature": "(Mu f-\u003e[a]-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:paraM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic paramorphism.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu f, a) -\u003e m a) -\u003e Mu f -\u003e m a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#paraM",
        "fct-type": "function",
        "title": "paraM"
      },
      "index": {
        "description": "Monadic paramorphism",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "paraM",
        "normalized": "(a(Mu a,b)-\u003ec b)-\u003eMu a-\u003ec b",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Mu f,a)-\u003em a)-\u003eMu f-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:paraM-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAnother version of \u003ccode\u003e\u003ca\u003eparaM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e f a -\u003e m a) -\u003e Mu f -\u003e m a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#paraM%27",
        "fct-type": "function",
        "title": "paraM'"
      },
      "index": {
        "description": "Another version of paraM",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "paraM'",
        "normalized": "(Mu a-\u003ea b-\u003ec b)-\u003eMu a-\u003ec b",
        "package": "fixplate",
        "partial": "M'",
        "signature": "(Mu f-\u003ef a-\u003em a)-\u003eMu f-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:paraM_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu f, a) -\u003e m a) -\u003e Mu f -\u003e m ()",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#paraM_",
        "fct-type": "function",
        "title": "paraM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "paraM_",
        "normalized": "(a(Mu a,b)-\u003ec b)-\u003eMu a-\u003ec()",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Mu f,a)-\u003em a)-\u003eMu f-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:zygo",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f b -\u003e b) -\u003e (f (b, a) -\u003e a) -\u003e Mu f -\u003e (b, a)",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#zygo",
        "fct-type": "function",
        "title": "zygo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "zygo",
        "normalized": "(a b-\u003eb)-\u003e(a(b,c)-\u003ec)-\u003eMu a-\u003e(b,c)",
        "package": "fixplate",
        "partial": "",
        "signature": "(f b-\u003eb)-\u003e(f(b,a)-\u003ea)-\u003eMu f-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Morphisms.html#v:zygo_",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003ezygomorphism\u003c/em\u003e is a basically a catamorphism inside another catamorphism.\n It could be implemented (somewhat wastefully) by first annotating each subtree\n with the corresponding values of the inner catamorphism (\u003ccode\u003esynthCata\u003c/code\u003e), then running \n a paramorphims on the annotated tree:\n\u003c/p\u003e\u003cpre\u003e zygo_ g h == para u . synthCata g \n   where\n     u = h . fmap (first attribute) . unAnn\n     first f (x,y) = (f x, y)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Morphisms",
        "fct-package": "fixplate",
        "fct-signature": "(f b -\u003e b) -\u003e (f (b, a) -\u003e a) -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Morphisms.html#zygo_",
        "fct-type": "function",
        "title": "zygo_"
      },
      "index": {
        "description": "zygomorphism is basically catamorphism inside another catamorphism It could be implemented somewhat wastefully by first annotating each subtree with the corresponding values of the inner catamorphism synthCata then running paramorphims on the annotated tree zygo para synthCata where fmap first attribute unAnn first",
        "hierarchy": "Data Generics Fixplate Morphisms",
        "module": "Data.Generics.Fixplate.Morphisms",
        "name": "zygo_",
        "normalized": "(a b-\u003eb)-\u003e(a(b,c)-\u003ec)-\u003eMu a-\u003ec",
        "package": "fixplate",
        "partial": "",
        "signature": "(f b-\u003eb)-\u003e(f(b,a)-\u003ea)-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Open\" functions, working on functors instead of trees.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Open.html",
        "fct-type": "module",
        "title": "Open"
      },
      "index": {
        "description": "Open functions working on functors instead of trees",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "Open",
        "normalized": "",
        "package": "fixplate",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#t:Hole",
      "description": {
        "fct-descr": "\u003cp\u003eThis a data type defined to be a place-holder for childs.\n It is used in tree drawing, hashing, and \u003ccode\u003eShape\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is deliberately not made an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, so that \n you can choose your preferred style. For example, an acceptable choice is\n\u003c/p\u003e\u003cpre\u003e instance Show Hole where show _ = \"_\"\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Hole",
        "fct-type": "data",
        "title": "Hole"
      },
      "index": {
        "description": "This data type defined to be place-holder for childs It is used in tree drawing hashing and Shape It is deliberately not made an instance of Show so that you can choose your preferred style For example an acceptable choice is instance Show Hole where show",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "Hole",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#t:Shape",
      "description": {
        "fct-descr": "\u003cp\u003eA type encoding the \"shape\" of the functor data:\n We ignore all the fields whose type is the parameter type,\n but remember the rest:\n\u003c/p\u003e\u003cpre\u003e newtype Shape f = Shape { unShape :: f Hole }\n\u003c/pre\u003e\u003cp\u003eThis can be used to decide whether two realizations are compatible.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#Shape",
        "fct-type": "data",
        "title": "Shape"
      },
      "index": {
        "description": "type encoding the shape of the functor data We ignore all the fields whose type is the parameter type but remember the rest newtype Shape Shape unShape Hole This can be used to decide whether two realizations are compatible",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "Shape",
        "normalized": "",
        "package": "fixplate",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:Hole",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "Hole",
        "fct-source": "src/Data-Generics-Fixplate-Base.html#Hole",
        "fct-type": "function",
        "title": "Hole"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "Hole",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given function to each child in turn.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e a) -\u003e f a -\u003e f (f a)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply the given function to each child in turn",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "apply",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb(b a)",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ef a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:builder",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds up a structure from a list of the children.\n It is unsafe in the sense that it will throw an exception\n if there are not enough elements in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e [b] -\u003e f b",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#builder",
        "fct-type": "function",
        "title": "builder"
      },
      "index": {
        "description": "Builds up structure from list of the children It is unsafe in the sense that it will throw an exception if there are not enough elements in the list",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "builder",
        "normalized": "a b-\u003e[c]-\u003ea c",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003e[b]-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates children from the left to the right, starting with zero.\n Also returns the number of children. This is just a simple application\n of \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e (Int, f (Int, a))",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#enumerate",
        "fct-type": "function",
        "title": "enumerate"
      },
      "index": {
        "description": "Enumerates children from the left to the right starting with zero Also returns the number of children This is just simple application of mapAccumL",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "enumerate",
        "normalized": "a b-\u003e(Int,a(Int,b))",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003e(Int,f(Int,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:enumerateWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(Int -\u003e a -\u003e b) -\u003e f a -\u003e (Int, f b)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#enumerateWith",
        "fct-type": "function",
        "title": "enumerateWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "enumerateWith",
        "normalized": "(Int-\u003ea-\u003eb)-\u003ec a-\u003e(Int,c b)",
        "package": "fixplate",
        "partial": "With",
        "signature": "(Int-\u003ea-\u003eb)-\u003ef a-\u003e(Int,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:enumerateWith_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(Int -\u003e a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#enumerateWith_",
        "fct-type": "function",
        "title": "enumerateWith_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "enumerateWith_",
        "normalized": "(Int-\u003ea-\u003eb)-\u003ec a-\u003ec b",
        "package": "fixplate",
        "partial": "With",
        "signature": "(Int-\u003ea-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:holes",
      "description": {
        "fct-descr": "\u003cp\u003eThe children together with functions replacing that particular child.    \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e f (a, a -\u003e f a)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#holes",
        "fct-type": "function",
        "title": "holes"
      },
      "index": {
        "description": "The children together with functions replacing that particular child",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "holes",
        "normalized": "a b-\u003ea(b,b-\u003ea b)",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003ef(a,a-\u003ef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:holesList",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e [(a, a -\u003e f a)]",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#holesList",
        "fct-type": "function",
        "title": "holesList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "holesList",
        "normalized": "a b-\u003e[(b,b-\u003ea b)]",
        "package": "fixplate",
        "partial": "List",
        "signature": "f a-\u003e[(a,a-\u003ef a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a structure,\n passing an accumulating parameter from left to right, and returning\n a final value of this accumulator together with the new structure.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "The mapAccumL function behaves like combination of fmap and foldl it applies function to each element of structure passing an accumulating parameter from left to right and returning final value of this accumulator together with the new structure",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "mapAccumL",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:mapAccumL_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#mapAccumL_",
        "fct-type": "function",
        "title": "mapAccumL_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "mapAccumL_",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003ed c",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:mapAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003efoldr\u003c/code\u003e; it applies a function to each element of a structure,\n passing an accumulating parameter from right to left, and returning\n a final value of this accumulator together with the new structure.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-type": "function",
        "title": "mapAccumR"
      },
      "index": {
        "description": "The mapAccumR function behaves like combination of fmap and foldr it applies function to each element of structure passing an accumulating parameter from right to left and returning final value of this accumulator together with the new structure",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "mapAccumR",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:mapAccumR_",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#mapAccumR_",
        "fct-type": "function",
        "title": "mapAccumR_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "mapAccumR_",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003ed c",
        "package": "fixplate",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the ith child.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e f a -\u003e Maybe a",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#project",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "Extracts the ith child",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "project",
        "normalized": "Int-\u003ea b-\u003eMaybe b",
        "package": "fixplate",
        "partial": "",
        "signature": "Int-\u003ef a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:shape",
      "description": {
        "fct-descr": "\u003cp\u003eExtracting the \"shape\" of the functor\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e Shape f",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#shape",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "Extracting the shape of the functor",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "shape",
        "normalized": "a b-\u003eShape a",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003eShape f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:sizeF",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of children. This is the generalization of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e to foldable functors:\n\u003c/p\u003e\u003cpre\u003e sizeF x = length (toList x)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e Int",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#sizeF",
        "fct-type": "function",
        "title": "sizeF"
      },
      "index": {
        "description": "Number of children This is the generalization of length to foldable functors sizeF length toList",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "sizeF",
        "normalized": "a b-\u003eInt",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "t a -\u003e [a]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "List of elements of structure",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "toList",
        "normalized": "a b-\u003e[b]",
        "package": "fixplate",
        "partial": "List",
        "signature": "t a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:toRevList",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003ereverse . toList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e [a]",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#toRevList",
        "fct-type": "function",
        "title": "toRevList"
      },
      "index": {
        "description": "Equivalent to reverse toList",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "toRevList",
        "normalized": "a b-\u003e[b]",
        "package": "fixplate",
        "partial": "Rev List",
        "signature": "f a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:unsafeProject",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e f a -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#unsafeProject",
        "fct-type": "function",
        "title": "unsafeProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "unsafeProject",
        "normalized": "Int-\u003ea b-\u003eb",
        "package": "fixplate",
        "partial": "Project",
        "signature": "Int-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:unsafeZipWithF",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe version of \u003ccode\u003e\u003ca\u003ezipWithF\u003c/a\u003e\u003c/code\u003e: does not check if the two structures are compatible.\n It is left-biased in the sense that the structure of the second argument is retained.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#unsafeZipWithF",
        "fct-type": "function",
        "title": "unsafeZipWithF"
      },
      "index": {
        "description": "Unsafe version of zipWithF does not check if the two structures are compatible It is left-biased in the sense that the structure of the second argument is retained",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "unsafeZipWithF",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "fixplate",
        "partial": "Zip With",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:unsafeZipWithFM",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e f a -\u003e f b -\u003e m (f c)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#unsafeZipWithFM",
        "fct-type": "function",
        "title": "unsafeZipWithFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "unsafeZipWithFM",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003ee b-\u003ec(e d)",
        "package": "fixplate",
        "partial": "Zip With FM",
        "signature": "(a-\u003eb-\u003em c)-\u003ef a-\u003ef b-\u003em(f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:unzipF",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f (a, b) -\u003e (f a, f b)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#unzipF",
        "fct-type": "function",
        "title": "unzipF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "unzipF",
        "normalized": "a(b,c)-\u003e(a b,a c)",
        "package": "fixplate",
        "partial": "",
        "signature": "f(a,b)-\u003e(f a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:zipF",
      "description": {
        "fct-descr": "\u003cp\u003eZips two structures if they are compatible.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "f a -\u003e f b -\u003e Maybe (f (a, b))",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#zipF",
        "fct-type": "function",
        "title": "zipF"
      },
      "index": {
        "description": "Zips two structures if they are compatible",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "zipF",
        "normalized": "a b-\u003ea c-\u003eMaybe(a(b,c))",
        "package": "fixplate",
        "partial": "",
        "signature": "f a-\u003ef b-\u003eMaybe(f(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:zipWithF",
      "description": {
        "fct-descr": "\u003cp\u003eZipping two structures using a function.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e Maybe (f c)",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#zipWithF",
        "fct-type": "function",
        "title": "zipWithF"
      },
      "index": {
        "description": "Zipping two structures using function",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "zipWithF",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003eMaybe(d c)",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003eMaybe(f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Open.html#v:zipWithFM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003ezipWithF\u003c/a\u003e\u003c/code\u003e. TODO: better name?\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Open",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e f a -\u003e f b -\u003e m (Maybe (f c))",
        "fct-source": "src/Data-Generics-Fixplate-Open.html#zipWithFM",
        "fct-type": "function",
        "title": "zipWithFM"
      },
      "index": {
        "description": "Monadic version of zipWithF TODO better name",
        "hierarchy": "Data Generics Fixplate Open",
        "module": "Data.Generics.Fixplate.Open",
        "name": "zipWithFM",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ee a-\u003ee b-\u003ec(Maybe(e d))",
        "package": "fixplate",
        "partial": "With FM",
        "signature": "(a-\u003eb-\u003em c)-\u003ef a-\u003ef b-\u003em(Maybe(f c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUniplate-style traversals.\n\u003c/p\u003e\u003cp\u003eToy example: Consider our favourite data type\n\u003c/p\u003e\u003cpre\u003e data Expr e \n   = Kst Int \n   | Var String \n   | Add e e \n   deriving (Eq,Show,Functor,Foldable,Traversable)\n\n instance ShowF Expr where showsPrecF = showsPrec\n\u003c/pre\u003e\u003cp\u003eand write a function simplifying additions with zero:\n\u003c/p\u003e\u003cpre\u003e simplifyAdd :: Mu Expr -\u003e Mu Expr\n simplifyAdd = transform worker where\n   worker expr = case expr of\n     Fix (Add x (Fix (Kst 0))) -\u003e x    -- 0+x = x\n     Fix (Add (Fix (Kst 0)) y) -\u003e y    -- x+0 = 0\n     _ -\u003e expr\n\u003c/pre\u003e\u003cp\u003eUnfortunately, all these \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e wrappers are rather ugly; but they are straightforward to put in,\n and in principle one could use Template Haskell quasi-quotation to generate patterns.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html",
        "fct-type": "module",
        "title": "Traversals"
      },
      "index": {
        "description": "Uniplate-style traversals Toy example Consider our favourite data type data Expr Kst Int Var String Add deriving Eq Show Functor Foldable Traversable instance ShowF Expr where showsPrecF showsPrec and write function simplifying additions with zero simplifyAdd Mu Expr Mu Expr simplifyAdd transform worker where worker expr case expr of Fix Add Fix Kst Fix Add Fix Kst expr Unfortunately all these Fix wrappers are rather ugly but they are straightforward to put in and in principle one could use Template Haskell quasi-quotation to generate patterns",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "Traversals",
        "normalized": "",
        "package": "fixplate",
        "partial": "Traversals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of direct descendants.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e [Mu f]",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "The list of direct descendants",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "children",
        "normalized": "Mu a-\u003e[Mu a]",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003e[Mu f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:context",
      "description": {
        "fct-descr": "\u003cp\u003eWe \u003cem\u003eannotate\u003c/em\u003e the nodes of the tree with functions which replace that\n particular subtree.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Attr f (Mu f -\u003e Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#context",
        "fct-type": "function",
        "title": "context"
      },
      "index": {
        "description": "We annotate the nodes of the tree with functions which replace that particular subtree",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "context",
        "normalized": "Mu a-\u003eAttr a(Mu a-\u003eMu a)",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eAttr f(Mu f-\u003eMu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:contextList",
      "description": {
        "fct-descr": "\u003cp\u003eFlattened version of \u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e [(Mu f, Mu f -\u003e Mu f)]",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#contextList",
        "fct-type": "function",
        "title": "contextList"
      },
      "index": {
        "description": "Flattened version of context",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "contextList",
        "normalized": "Mu a-\u003e[(Mu a,Mu a-\u003eMu a)]",
        "package": "fixplate",
        "partial": "List",
        "signature": "Mu f-\u003e[(Mu f,Mu f-\u003eMu f)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:descend",
      "description": {
        "fct-descr": "\u003cp\u003eNon-recursive top-down transformation. This is basically just \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e Mu f) -\u003e Mu f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#descend",
        "fct-type": "function",
        "title": "descend"
      },
      "index": {
        "description": "Non-recursive top-down transformation This is basically just fmap",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "descend",
        "normalized": "(Mu a-\u003eMu a)-\u003eMu a-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003eMu f)-\u003eMu f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:descendM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilarly, this is basically just \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e m (Mu f)) -\u003e Mu f -\u003e m (Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#descendM",
        "fct-type": "function",
        "title": "descendM"
      },
      "index": {
        "description": "Similarly this is basically just mapM",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "descendM",
        "normalized": "(Mu a-\u003eb(Mu a))-\u003eMu a-\u003eb(Mu a)",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003em(Mu f))-\u003eMu f-\u003em(Mu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:foldLeft",
      "description": {
        "fct-descr": "\u003cp\u003e(Strict) left fold. Since \u003ccode\u003eMu f\u003c/code\u003e is not a functor, but a data type, we cannot make\n it an instance of the \u003ccode\u003eFoldable\u003c/code\u003e type class.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e a) -\u003e a -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#foldLeft",
        "fct-type": "function",
        "title": "foldLeft"
      },
      "index": {
        "description": "Strict left fold Since Mu is not functor but data type we cannot make it an instance of the Foldable type class",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "foldLeft",
        "normalized": "(a-\u003eMu b-\u003ea)-\u003ea-\u003eMu b-\u003ea",
        "package": "fixplate",
        "partial": "Left",
        "signature": "(a-\u003eMu f-\u003ea)-\u003ea-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:foldLeftLazy",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Mu f -\u003e a) -\u003e a -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#foldLeftLazy",
        "fct-type": "function",
        "title": "foldLeftLazy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "foldLeftLazy",
        "normalized": "(a-\u003eMu b-\u003ea)-\u003ea-\u003eMu b-\u003ea",
        "package": "fixplate",
        "partial": "Left Lazy",
        "signature": "(a-\u003eMu f-\u003ea)-\u003ea-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:foldRight",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e a -\u003e a) -\u003e a -\u003e Mu f -\u003e a",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#foldRight",
        "fct-type": "function",
        "title": "foldRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "foldRight",
        "normalized": "(Mu a-\u003eb-\u003eb)-\u003eb-\u003eMu a-\u003eb",
        "package": "fixplate",
        "partial": "Right",
        "signature": "(Mu f-\u003ea-\u003ea)-\u003ea-\u003eMu f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:restructure",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up transformation (typically \"shallow\", that is, restricted to a single level) \n which can change the structure functor (actually \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e is a special case of this).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu g) -\u003e g (Mu g)) -\u003e Mu f -\u003e Mu g",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#restructure",
        "fct-type": "function",
        "title": "restructure"
      },
      "index": {
        "description": "Bottom-up transformation typically shallow that is restricted to single level which can change the structure functor actually transform is special case of this",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "restructure",
        "normalized": "(a(Mu b)-\u003eb(Mu b))-\u003eMu a-\u003eMu b",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Mu g)-\u003eg(Mu g))-\u003eMu f-\u003eMu g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:restructureM",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(f (Mu g) -\u003e m (g (Mu g))) -\u003e Mu f -\u003e m (Mu g)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#restructureM",
        "fct-type": "function",
        "title": "restructureM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "restructureM",
        "normalized": "(a(Mu b)-\u003ec(b(Mu b)))-\u003eMu a-\u003ec(Mu b)",
        "package": "fixplate",
        "partial": "",
        "signature": "(f(Mu g)-\u003em(g(Mu g)))-\u003eMu f-\u003em(Mu g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up transformation until a normal form is reached.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e Maybe (Mu f)) -\u003e Mu f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#rewrite",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "Bottom-up transformation until normal form is reached",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "rewrite",
        "normalized": "(Mu a-\u003eMaybe(Mu a))-\u003eMu a-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003eMaybe(Mu f))-\u003eMu f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:rewriteM",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e m (Maybe (Mu f))) -\u003e Mu f -\u003e m (Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#rewriteM",
        "fct-type": "function",
        "title": "rewriteM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "rewriteM",
        "normalized": "(Mu a-\u003eb(Maybe(Mu a)))-\u003eMu a-\u003eb(Mu a)",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003em(Maybe(Mu f)))-\u003eMu f-\u003em(Mu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:topDownTransform",
      "description": {
        "fct-descr": "\u003cp\u003eTop-down transformation. This provided only for completeness;\n usually, it is \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e what you want use instead.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e Mu f) -\u003e Mu f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#topDownTransform",
        "fct-type": "function",
        "title": "topDownTransform"
      },
      "index": {
        "description": "Top-down transformation This provided only for completeness usually it is transform what you want use instead",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "topDownTransform",
        "normalized": "(Mu a-\u003eMu a)-\u003eMu a-\u003eMu a",
        "package": "fixplate",
        "partial": "Down Transform",
        "signature": "(Mu f-\u003eMu f)-\u003eMu f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:topDownTransformM",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e m (Mu f)) -\u003e Mu f -\u003e m (Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#topDownTransformM",
        "fct-type": "function",
        "title": "topDownTransformM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "topDownTransformM",
        "normalized": "(Mu a-\u003eb(Mu a))-\u003eMu a-\u003eb(Mu a)",
        "package": "fixplate",
        "partial": "Down Transform",
        "signature": "(Mu f-\u003em(Mu f))-\u003eMu f-\u003em(Mu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eBottom-up transformation.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e Mu f) -\u003e Mu f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "Bottom-up transformation",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "transform",
        "normalized": "(Mu a-\u003eMu a)-\u003eMu a-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003eMu f)-\u003eMu f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:transformM",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e m (Mu f)) -\u003e Mu f -\u003e m (Mu f)",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#transformM",
        "fct-type": "function",
        "title": "transformM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "transformM",
        "normalized": "(Mu a-\u003eb(Mu a))-\u003eMu a-\u003eb(Mu a)",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003em(Mu f))-\u003eMu f-\u003em(Mu f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Traversals.html#v:universe",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of all substructures. Together with list-comprehension syntax\n this is a powerful query tool. For example the following is how you get\n the list of all variable names in an expression:\n\u003c/p\u003e\u003cpre\u003e variables expr = [ s | Fix (Var s) \u003c- universe expr ]\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Traversals",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e [Mu f]",
        "fct-source": "src/Data-Generics-Fixplate-Traversals.html#universe",
        "fct-type": "function",
        "title": "universe"
      },
      "index": {
        "description": "The list of all substructures Together with list-comprehension syntax this is powerful query tool For example the following is how you get the list of all variable names in an expression variables expr Fix Var universe expr",
        "hierarchy": "Data Generics Fixplate Traversals",
        "module": "Data.Generics.Fixplate.Traversals",
        "name": "universe",
        "normalized": "Mu a-\u003e[Mu a]",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003e[Mu f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralized tries. \"Normal\" tries encode finite maps from lists to arbitrary values, where the\n common prefixes are shared. Here we do the same for trees, generically.\n\u003c/p\u003e\u003cp\u003eSee also\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Connelly, Morris: A generalization of the trie data structure\n\u003c/li\u003e\u003cli\u003e Ralf Hinze: Generalizing Generalized Tries\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module should be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html",
        "fct-type": "module",
        "title": "Trie"
      },
      "index": {
        "description": "Generalized tries Normal tries encode finite maps from lists to arbitrary values where the common prefixes are shared Here we do the same for trees generically See also Connelly Morris generalization of the trie data structure Ralf Hinze Generalizing Generalized Tries This module should be imported qualified",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "Trie",
        "normalized": "",
        "package": "fixplate",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#t:Trie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrie\u003c/a\u003e\u003c/code\u003e is an efficient(?) implementation of finite maps from \u003ccode\u003e(Mu f)\u003c/code\u003e to an arbitrary type \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#Trie",
        "fct-type": "data",
        "title": "Trie"
      },
      "index": {
        "description": "Trie is an efficient implementation of finite maps from Mu to an arbitrary type",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "Trie",
        "normalized": "",
        "package": "fixplate",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:bag",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a trie-multiset from a list of trees.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "[Mu f] -\u003e Trie f Int",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#bag",
        "fct-type": "function",
        "title": "bag"
      },
      "index": {
        "description": "Creates trie-multiset from list of trees",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "bag",
        "normalized": "[Mu a]-\u003eTrie a Int",
        "package": "fixplate",
        "partial": "",
        "signature": "[Mu f]-\u003eTrie f Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:delete",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Trie f a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "delete",
        "normalized": "Mu a-\u003eTrie a b-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eTrie f a-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:difference",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Trie f a -\u003e Trie f b -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "difference",
        "normalized": "Trie a b-\u003eTrie a c-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Trie f a-\u003eTrie f b-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:differenceWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e Trie f a -\u003e Trie f b -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eTrie c a-\u003eTrie c b-\u003eTrie c a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eTrie f a-\u003eTrie f b-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:empty",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "empty",
        "normalized": "",
        "package": "fixplate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: more efficient implementation?\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "[(Mu f, a)] -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "TODO more efficient implementation",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "fromList",
        "normalized": "[(Mu a,b)]-\u003eTrie a b",
        "package": "fixplate",
        "partial": "List",
        "signature": "[(Mu f,a)]-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:insert",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e a -\u003e Trie f a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "insert",
        "normalized": "Mu a-\u003eb-\u003eTrie a b-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003ea-\u003eTrie f a-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:insertWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e Mu f -\u003e a -\u003e Trie f b -\u003e Trie f b",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "insertWith",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eMu c-\u003ea-\u003eTrie c b-\u003eTrie c b",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eMu f-\u003ea-\u003eTrie f b-\u003eTrie f b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:intersection",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Trie f a -\u003e Trie f b -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "intersection",
        "normalized": "Trie a b-\u003eTrie a c-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Trie f a-\u003eTrie f b-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:intersectionWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Trie f a -\u003e Trie f b -\u003e Trie f c",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eTrie d a-\u003eTrie d b-\u003eTrie d c",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eTrie f a-\u003eTrie f b-\u003eTrie f c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:lookup",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Trie f a -\u003e Maybe a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "lookup",
        "normalized": "Mu a-\u003eTrie a b-\u003eMaybe b",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eTrie f a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:singleton",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "singleton",
        "normalized": "Mu a-\u003eb-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003ea-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:toList",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Trie f a -\u003e [(Mu f, a)]",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "toList",
        "normalized": "Trie a b-\u003e[(Mu a,b)]",
        "package": "fixplate",
        "partial": "List",
        "signature": "Trie f a-\u003e[(Mu f,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eUnion is left-biased:\n\u003c/p\u003e\u003cpre\u003e union == unionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Trie f a -\u003e Trie f a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Union is left-biased union unionWith const",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "union",
        "normalized": "Trie a b-\u003eTrie a b-\u003eTrie a b",
        "package": "fixplate",
        "partial": "",
        "signature": "Trie f a-\u003eTrie f a-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:unionWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Trie f a -\u003e Trie f a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrie b a-\u003eTrie b a-\u003eTrie b a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrie f a-\u003eTrie f a-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:universeBag",
      "description": {
        "fct-descr": "\u003cp\u003eThis is equivalent to\n\u003c/p\u003e\u003cpre\u003e universeBag == bag . universe\n\u003c/pre\u003e\u003cp\u003eTODO: more efficient implementation?\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Trie f Int",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#universeBag",
        "fct-type": "function",
        "title": "universeBag"
      },
      "index": {
        "description": "This is equivalent to universeBag bag universe TODO more efficient implementation",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "universeBag",
        "normalized": "Mu a-\u003eTrie a Int",
        "package": "fixplate",
        "partial": "Bag",
        "signature": "Mu f-\u003eTrie f Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Trie.html#v:update",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Trie",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e Maybe a) -\u003e Mu f -\u003e Trie f a -\u003e Trie f a",
        "fct-source": "src/Data-Generics-Fixplate-Trie.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Trie",
        "module": "Data.Generics.Fixplate.Trie",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eMu b-\u003eTrie b a-\u003eTrie b a",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eMu f-\u003eTrie f a-\u003eTrie f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell98 polymorphic Hash interface\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Haskell98 polymorphic Hash interface",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "Class",
        "normalized": "",
        "package": "fixplate",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#t:HashValue",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for hashes.\n Minimal complete definition: \u003ccode\u003e\u003ca\u003eemptyHash\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehashWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehashHash\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshowHex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#HashValue",
        "fct-type": "class",
        "title": "HashValue"
      },
      "index": {
        "description": "type class for hashes Minimal complete definition emptyHash hashWord8 hashHash and showHex",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "HashValue",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#t:Hashable",
      "description": {
        "fct-descr": "\u003cp\u003eA type class of hashable objects. An instance has to compute the hash for\n \u003cem\u003eany\u003c/em\u003e hash function, using the \"base\" types (eg. Word32).\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ehashDigest\u003c/a\u003e\u003c/code\u003e. The default for \u003ccode\u003e\u003ca\u003ecomputeHash\u003c/a\u003e\u003c/code\u003e is\n\u003c/p\u003e\u003cpre\u003e computeHash x = hashDigest x emptyHash\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#Hashable",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "type class of hashable objects An instance has to compute the hash for any hash function using the base types eg Word32 Minimal complete definition hashDigest The default for computeHash is computeHash hashDigest emptyHash",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "Hashable",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:computeHash",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "a -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#computeHash",
        "fct-type": "method",
        "title": "computeHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "computeHash",
        "normalized": "a-\u003eb",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "a-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:emptyHash",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#emptyHash",
        "fct-type": "method",
        "title": "emptyHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "emptyHash",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashBool",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Bool -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashBool",
        "fct-type": "function",
        "title": "hashBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashBool",
        "normalized": "Bool-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Bool",
        "signature": "Bool-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashChar",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Char -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashChar",
        "fct-type": "function",
        "title": "hashChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashChar",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Char",
        "signature": "Char-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashDigest",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "a -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashDigest",
        "fct-type": "method",
        "title": "hashDigest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashDigest",
        "normalized": "a-\u003eb-\u003eb",
        "package": "fixplate",
        "partial": "Digest",
        "signature": "a-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashHash",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "hash -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashHash",
        "fct-type": "method",
        "title": "hashHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashHash",
        "normalized": "a-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Hash",
        "signature": "hash-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashInt",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashInt",
        "fct-type": "function",
        "title": "hashInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashInt",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Int",
        "signature": "Int-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashWord",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Word -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashWord",
        "fct-type": "function",
        "title": "hashWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashWord",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Word",
        "signature": "Word-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashWord16",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Word16 -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashWord16",
        "fct-type": "method",
        "title": "hashWord16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashWord16",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Word",
        "signature": "Word-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashWord32",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Word32 -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashWord32",
        "fct-type": "method",
        "title": "hashWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashWord32",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Word",
        "signature": "Word-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashWord64",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Word64 -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashWord64",
        "fct-type": "method",
        "title": "hashWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashWord64",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Word",
        "signature": "Word-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:hashWord8",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "Word8 -\u003e hash -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#hashWord8",
        "fct-type": "method",
        "title": "hashWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "hashWord8",
        "normalized": "Word-\u003ea-\u003ea",
        "package": "fixplate",
        "partial": "Word",
        "signature": "Word-\u003ehash-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Class.html#v:showHex",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Class",
        "fct-package": "fixplate",
        "fct-signature": "hash -\u003e String",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Class.html#showHex",
        "fct-type": "method",
        "title": "showHex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Class",
        "module": "Data.Generics.Fixplate.Util.Hash.Class",
        "name": "showHex",
        "normalized": "a-\u003eString",
        "package": "fixplate",
        "partial": "Hex",
        "signature": "hash-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e32-bit FNV-1a (Fowler-Noll-Vo) hash\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html",
        "fct-type": "module",
        "title": "FNV32"
      },
      "index": {
        "description": "bit FNV-1a Fowler-Noll-Vo hash",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV32",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "name": "FNV32",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#t:FNV32",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#FNV32",
        "fct-type": "newtype",
        "title": "FNV32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV32",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "name": "FNV32",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#v:FNV32",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "fct-package": "fixplate",
        "fct-signature": "FNV32 Word32",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#FNV32",
        "fct-type": "function",
        "title": "FNV32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV32",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "name": "FNV32",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#v:unFNV32",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "fct-package": "fixplate",
        "fct-signature": "FNV32 -\u003e Word32",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV32.html#unFNV32",
        "fct-type": "function",
        "title": "unFNV32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV32",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV32",
        "name": "unFNV32",
        "normalized": "FNV-\u003eWord",
        "package": "fixplate",
        "partial": "FNV",
        "signature": "FNV-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e64-bit FNV-1a (Fowler-Noll-Vo) hash\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html",
        "fct-type": "module",
        "title": "FNV64"
      },
      "index": {
        "description": "bit FNV-1a Fowler-Noll-Vo hash",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV64",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "name": "FNV64",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#t:FNV64",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "fct-package": "fixplate",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#FNV64",
        "fct-type": "newtype",
        "title": "FNV64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV64",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "name": "FNV64",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#v:FNV64",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "fct-package": "fixplate",
        "fct-signature": "FNV64 Word64",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#FNV64",
        "fct-type": "function",
        "title": "FNV64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV64",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "name": "FNV64",
        "normalized": "",
        "package": "fixplate",
        "partial": "FNV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#v:unFNV64",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "fct-package": "fixplate",
        "fct-signature": "FNV64 -\u003e Word64",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-FNV-FNV64.html#unFNV64",
        "fct-type": "function",
        "title": "unFNV64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash FNV FNV64",
        "module": "Data.Generics.Fixplate.Util.Hash.FNV.FNV64",
        "name": "unFNV64",
        "normalized": "FNV-\u003eWord",
        "package": "fixplate",
        "partial": "FNV",
        "signature": "FNV-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHash tables, implemented as a structure similar to \u003ccode\u003eMap hash (Map key value)]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhat this data structure can also give you is a unique value (a \u003ccode\u003e(hash,Int)\u003c/code\u003e pair)\n for each key, even during building the table: It is guaranteed to be unique \n in the past and future lifetime of a single hashtable (that is, one realization \n of the world-line), among all the keys appearing in that history.\n\u003c/p\u003e\u003cp\u003eSet operations (union, intersection) clearly break this principle; this is\n resolved by declaring these operations to be \u003cem\u003eleft-biased\u003c/em\u003e, in the sense that\n they retain the unique values of the left table (so \u003ccode\u003eunion t1 t2\u003c/code\u003e belongs to\n to \u003ccode\u003et1\u003c/code\u003e's world-line, but not to \u003ccode\u003et2\u003c/code\u003e's one).\n\u003c/p\u003e\u003cp\u003eIf a key is first removed then added back again, it will get a new value.\n\u003c/p\u003e\u003cp\u003eTo be Haskell98 compatible (no multi-param type classes), when constructing \n a new hash table, we have to support the function computing (or just fetching, if\n it is cached) the hash value. This function is then stored in the data type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html",
        "fct-type": "module",
        "title": "Table"
      },
      "index": {
        "description": "Hash tables implemented as structure similar to Map hash Map key value What this data structure can also give you is unique value hash Int pair for each key even during building the table It is guaranteed to be unique in the past and future lifetime of single hashtable that is one realization of the world-line among all the keys appearing in that history Set operations union intersection clearly break this principle this is resolved by declaring these operations to be left-biased in the sense that they retain the unique values of the left table so union t1 t2 belongs to to t1 world-line but not to t2 one If key is first removed then added back again it will get new value To be Haskell98 compatible no multi-param type classes when constructing new hash table we have to support the function computing or just fetching if it is cached the hash value This function is then stored in the data type",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "Table",
        "normalized": "",
        "package": "fixplate",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#t:Bucket",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#Bucket",
        "fct-type": "data",
        "title": "Bucket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "Bucket",
        "normalized": "",
        "package": "fixplate",
        "partial": "Bucket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#t:HashTable",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#HashTable",
        "fct-type": "data",
        "title": "HashTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "HashTable",
        "normalized": "",
        "package": "fixplate",
        "partial": "Hash Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#t:Leaf",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#Leaf",
        "fct-type": "data",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "Leaf",
        "normalized": "",
        "package": "fixplate",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:Bucket",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "Bucket !Int !(Map k (Leaf v))",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#Bucket",
        "fct-type": "function",
        "title": "Bucket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "Bucket",
        "normalized": "",
        "package": "fixplate",
        "partial": "Bucket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:Leaf",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "Leaf !Int v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#Leaf",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "Leaf",
        "normalized": "",
        "package": "fixplate",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:bag",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a multi-set from a list.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e [k] -\u003e HashTable hash k Int",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#bag",
        "fct-type": "function",
        "title": "bag"
      },
      "index": {
        "description": "Creates multi-set from list",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "bag",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003eHashTable b a Int",
        "package": "fixplate",
        "partial": "",
        "signature": "(k-\u003ehash)-\u003e[k]-\u003eHashTable hash k Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:delete",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "k -\u003e HashTable hash k v -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "delete",
        "normalized": "a-\u003eHashTable b a c-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "",
        "signature": "k-\u003eHashTable hash k v-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:difference",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k a -\u003e HashTable hash k b -\u003e HashTable hash k a",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "difference",
        "normalized": "HashTable a b c-\u003eHashTable a b d-\u003eHashTable a b c",
        "package": "fixplate",
        "partial": "",
        "signature": "HashTable hash k a-\u003eHashTable hash k b-\u003eHashTable hash k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:differenceWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e HashTable hash k a -\u003e HashTable hash k b -\u003e HashTable hash k a",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eHashTable c d a-\u003eHashTable c d b-\u003eHashTable c d a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eHashTable hash k a-\u003eHashTable hash k b-\u003eHashTable hash k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:empty",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "empty",
        "normalized": "(a-\u003eb)-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "",
        "signature": "(k-\u003ehash)-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:fromList",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e [(k, v)] -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "fromList",
        "normalized": "(a-\u003eb)-\u003e[(a,c)]-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "List",
        "signature": "(k-\u003ehash)-\u003e[(k,v)]-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:getHashValue",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k v -\u003e k -\u003e hash",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#getHashValue",
        "fct-type": "function",
        "title": "getHashValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "getHashValue",
        "normalized": "HashTable a b c-\u003eb-\u003ea",
        "package": "fixplate",
        "partial": "Hash Value",
        "signature": "HashTable hash k v-\u003ek-\u003ehash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:getUniqueIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a unique index, in the form of a \u003ccode\u003e(hash,Int)\u003c/code\u003e pair, for any key.\n If the user-supplied function is \u003cem\u003einjective\u003c/em\u003e, then the result is guaranteed to be uniquely\n associated to the given key in the past and future history of this table (but of\n course not unique among different future histories).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(hash -\u003e Int -\u003e a) -\u003e k -\u003e HashTable hash k v -\u003e Maybe a",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#getUniqueIndex",
        "fct-type": "function",
        "title": "getUniqueIndex"
      },
      "index": {
        "description": "Look up unique index in the form of hash Int pair for any key If the user-supplied function is injective then the result is guaranteed to be uniquely associated to the given key in the past and future history of this table but of course not unique among different future histories",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "getUniqueIndex",
        "normalized": "(a-\u003eInt-\u003eb)-\u003ec-\u003eHashTable a c d-\u003eMaybe b",
        "package": "fixplate",
        "partial": "Unique Index",
        "signature": "(hash-\u003eInt-\u003ea)-\u003ek-\u003eHashTable hash k v-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:insert",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "k -\u003e v -\u003e HashTable hash k v -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eHashTable c a b-\u003eHashTable c a b",
        "package": "fixplate",
        "partial": "",
        "signature": "k-\u003ev-\u003eHashTable hash k v-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:insertWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e v) -\u003e (a -\u003e v -\u003e v) -\u003e k -\u003e a -\u003e HashTable hash k v -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "insertWith",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003ec-\u003ea-\u003eHashTable d c b-\u003eHashTable d c b",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003ev)-\u003e(a-\u003ev-\u003ev)-\u003ek-\u003ea-\u003eHashTable hash k v-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:intersection",
      "description": {
        "fct-descr": "\u003cpre\u003e intersection == intersectionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k a -\u003e HashTable hash k b -\u003e HashTable hash k a",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "intersection intersectionWith const",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "intersection",
        "normalized": "HashTable a b c-\u003eHashTable a b d-\u003eHashTable a b c",
        "package": "fixplate",
        "partial": "",
        "signature": "HashTable hash k a-\u003eHashTable hash k b-\u003eHashTable hash k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:intersectionWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e HashTable hash k a -\u003e HashTable hash k b -\u003e HashTable hash k c",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eHashTable d e a-\u003eHashTable d e b-\u003eHashTable d e c",
        "package": "fixplate",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eHashTable hash k a-\u003eHashTable hash k b-\u003eHashTable hash k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:intersectionsWith",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [HashTable hash k v] -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#intersectionsWith",
        "fct-type": "function",
        "title": "intersectionsWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "intersectionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[HashTable b c a]-\u003eHashTable b c a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[HashTable hash k v]-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:intersectionsWith-39-",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e (v -\u003e v -\u003e v) -\u003e [HashTable hash k v] -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#intersectionsWith%27",
        "fct-type": "function",
        "title": "intersectionsWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "intersectionsWith'",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec)-\u003e[HashTable b a c]-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "With'",
        "signature": "(k-\u003ehash)-\u003e(v-\u003ev-\u003ev)-\u003e[HashTable hash k v]-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:keysWith",
      "description": {
        "fct-descr": "\u003cp\u003eKeys together with their associated unique values\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash -\u003e Int -\u003e a) -\u003e HashTable hash k v -\u003e [a]",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#keysWith",
        "fct-type": "function",
        "title": "keysWith"
      },
      "index": {
        "description": "Keys together with their associated unique values",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "keysWith",
        "normalized": "(a-\u003eb-\u003eInt-\u003ec)-\u003eHashTable b a d-\u003e[c]",
        "package": "fixplate",
        "partial": "With",
        "signature": "(k-\u003ehash-\u003eInt-\u003ea)-\u003eHashTable hash k v-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:lookup",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "k -\u003e HashTable hash k v -\u003e Maybe v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "lookup",
        "normalized": "a-\u003eHashTable b a c-\u003eMaybe c",
        "package": "fixplate",
        "partial": "",
        "signature": "k-\u003eHashTable hash k v-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:mapWithUniqueIndices",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(hash -\u003e Int -\u003e a -\u003e b) -\u003e HashTable hash k a -\u003e HashTable hash k b",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#mapWithUniqueIndices",
        "fct-type": "function",
        "title": "mapWithUniqueIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "mapWithUniqueIndices",
        "normalized": "(a-\u003eInt-\u003eb-\u003ec)-\u003eHashTable a d b-\u003eHashTable a d c",
        "package": "fixplate",
        "partial": "With Unique Indices",
        "signature": "(hash-\u003eInt-\u003ea-\u003eb)-\u003eHashTable hash k a-\u003eHashTable hash k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:member",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "k -\u003e HashTable hash k v -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "member",
        "normalized": "a-\u003eHashTable b a c-\u003eBool",
        "package": "fixplate",
        "partial": "",
        "signature": "k-\u003eHashTable hash k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:null",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k v -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "null",
        "normalized": "HashTable a b c-\u003eBool",
        "package": "fixplate",
        "partial": "",
        "signature": "HashTable hash k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:singleton",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e k -\u003e v -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "singleton",
        "normalized": "(a-\u003eb)-\u003ea-\u003ec-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "",
        "signature": "(k-\u003ehash)-\u003ek-\u003ev-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eNote that the returned list is ordered by hash, \u003cem\u003enot\u003c/em\u003e by keys like \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k v -\u003e [(k, v)]",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Note that the returned list is ordered by hash not by keys like Map",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "toList",
        "normalized": "HashTable a b c-\u003e[(b,c)]",
        "package": "fixplate",
        "partial": "List",
        "signature": "HashTable hash k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:unHashTable",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k v -\u003e Map hash (Bucket k v)",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#unHashTable",
        "fct-type": "function",
        "title": "unHashTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "unHashTable",
        "normalized": "HashTable a b c-\u003eMap a(Bucket b c)",
        "package": "fixplate",
        "partial": "Hash Table",
        "signature": "HashTable hash k v-\u003eMap hash(Bucket k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:union",
      "description": {
        "fct-descr": "\u003cpre\u003e union == unionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "HashTable hash k a -\u003e HashTable hash k a -\u003e HashTable hash k a",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "union unionWith const",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "union",
        "normalized": "HashTable a b c-\u003eHashTable a b c-\u003eHashTable a b c",
        "package": "fixplate",
        "partial": "",
        "signature": "HashTable hash k a-\u003eHashTable hash k a-\u003eHashTable hash k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThis is unsafe in the sense that the two \u003ccode\u003egetHash\u003c/code\u003e functions \n (supplied when the hash tables were created) must agree. The same applies for all the set operations.\n\u003c/p\u003e\u003cp\u003eIt is also left-biased in the sense that the unique indices from the left hashtable are retained,\n while the unique indices from the right hashtable are \u003cem\u003echanged\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e HashTable hash k v -\u003e HashTable hash k v -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "This is unsafe in the sense that the two getHash functions supplied when the hash tables were created must agree The same applies for all the set operations It is also left-biased in the sense that the unique indices from the left hashtable are retained while the unique indices from the right hashtable are changed",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eHashTable b c a-\u003eHashTable b c a-\u003eHashTable b c a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eHashTable hash k v-\u003eHashTable hash k v-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eThis is unsafe both in the above sense and also that it does not accepts the empty list (for the same reason).\n The result belongs to the world-line of the first table.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [HashTable hash k v] -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "This is unsafe both in the above sense and also that it does not accepts the empty list for the same reason The result belongs to the world-line of the first table",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[HashTable b c a]-\u003eHashTable b c a",
        "package": "fixplate",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[HashTable hash k v]-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Util-Hash-Table.html#v:unionsWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis one accepts the empty list. The empty imput creates a new world-line.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Util.Hash.Table",
        "fct-package": "fixplate",
        "fct-signature": "(k -\u003e hash) -\u003e (v -\u003e v -\u003e v) -\u003e [HashTable hash k v] -\u003e HashTable hash k v",
        "fct-source": "src/Data-Generics-Fixplate-Util-Hash-Table.html#unionsWith%27",
        "fct-type": "function",
        "title": "unionsWith'"
      },
      "index": {
        "description": "This one accepts the empty list The empty imput creates new world-line",
        "hierarchy": "Data Generics Fixplate Util Hash Table",
        "module": "Data.Generics.Fixplate.Util.Hash.Table",
        "name": "unionsWith'",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec)-\u003e[HashTable b a c]-\u003eHashTable b a c",
        "package": "fixplate",
        "partial": "With'",
        "signature": "(k-\u003ehash)-\u003e(v-\u003ev-\u003ev)-\u003e[HashTable hash k v]-\u003eHashTable hash k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Zipper is a data structure which maintains a location in \n a tree, and allows O(1) movement and local changes\n (to be more precise, in our case it is O(k) where k is the number\n of children of the node at question; typically this is a very small number).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html",
        "fct-type": "module",
        "title": "Zipper"
      },
      "index": {
        "description": "The Zipper is data structure which maintains location in tree and allows movement and local changes to be more precise in our case it is where is the number of children of the node at question typically this is very small number",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "fixplate",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003eThe zipper type itself, which encodes a locations in thre tree \u003ccode\u003eMu f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "The zipper type itself which encodes locations in thre tree Mu",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Loc",
        "normalized": "",
        "package": "fixplate",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA context node. \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "type",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Node",
        "fct-type": "type",
        "title": "Node"
      },
      "index": {
        "description": "context node",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Node",
        "normalized": "",
        "package": "fixplate",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eThe context or path type. The invariant we must respect is that there is exactly\n one child with the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "The context or path type The invariant we must respect is that there is exactly one child with the Right constructor",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Path",
        "normalized": "",
        "package": "fixplate",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:Loc",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Loc",
        "fct-type": "function",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Loc",
        "normalized": "",
        "package": "fixplate",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:Path",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Path",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Path",
        "fct-type": "function",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Path",
        "normalized": "",
        "package": "fixplate",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:Top",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Top",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Path",
        "fct-type": "function",
        "title": "Top"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "Top",
        "normalized": "",
        "package": "fixplate",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:defocus",
      "description": {
        "fct-descr": "\u003cp\u003eRestores a tree from a zipper.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#defocus",
        "fct-type": "function",
        "title": "defocus"
      },
      "index": {
        "description": "Restores tree from zipper",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "defocus",
        "normalized": "Loc a-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "Loc f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the subtree at focus. Synonym of \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "Extracts the subtree at focus Synonym of focus",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "extract",
        "normalized": "Loc a-\u003eMu a",
        "package": "fixplate",
        "partial": "",
        "signature": "Loc f-\u003eMu f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:focus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Mu f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Loc",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "focus",
        "normalized": "",
        "package": "fixplate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:fullPathDown",
      "description": {
        "fct-descr": "\u003cp\u003eWe return the full path from the root as a sequence of child indices.\n This means that\n\u003c/p\u003e\u003cpre\u003e loc == foldl (flip unsafeMoveDown) (moveTop loc) (fullPathDown loc)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e [Int]",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#fullPathDown",
        "fct-type": "function",
        "title": "fullPathDown"
      },
      "index": {
        "description": "We return the full path from the root as sequence of child indices This means that loc foldl flip unsafeMoveDown moveTop loc fullPathDown loc",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "fullPathDown",
        "normalized": "Loc a-\u003e[Int]",
        "package": "fixplate",
        "partial": "Path Down",
        "signature": "Loc f-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:fullPathUp",
      "description": {
        "fct-descr": "\u003cp\u003eThe following equations hold for \u003ccode\u003e\u003ca\u003efullPathUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efullPathDown\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fullPathUp == reverse . fullPathDown\n loc == foldr unsafeMoveDown (moveTop loc) (fullPathUp loc)\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e [Int]",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#fullPathUp",
        "fct-type": "function",
        "title": "fullPathUp"
      },
      "index": {
        "description": "The following equations hold for fullPathUp and fullPathDown fullPathUp reverse fullPathDown loc foldr unsafeMoveDown moveTop loc fullPathUp loc",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "fullPathUp",
        "normalized": "Loc a-\u003e[Int]",
        "package": "fixplate",
        "partial": "Path Up",
        "signature": "Loc f-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:horizontalPos",
      "description": {
        "fct-descr": "\u003cp\u003eGives back the index of the given location among the children of its parent.\n Indexing starts from zero. In case of root node (no parent), we also return zero.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Int",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#horizontalPos",
        "fct-type": "function",
        "title": "horizontalPos"
      },
      "index": {
        "description": "Gives back the index of the given location among the children of its parent Indexing starts from zero In case of root node no parent we also return zero",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "horizontalPos",
        "normalized": "Loc a-\u003eInt",
        "package": "fixplate",
        "partial": "Pos",
        "signature": "Loc f-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:isBottom",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether we cannot move down.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#isBottom",
        "fct-type": "function",
        "title": "isBottom"
      },
      "index": {
        "description": "Checks whether we cannot move down",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "isBottom",
        "normalized": "Loc a-\u003eBool",
        "package": "fixplate",
        "partial": "Bottom",
        "signature": "Loc f-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:isLeftmost",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#isLeftmost",
        "fct-type": "function",
        "title": "isLeftmost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "isLeftmost",
        "normalized": "Loc a-\u003eBool",
        "package": "fixplate",
        "partial": "Leftmost",
        "signature": "Loc f-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:isRightmost",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#isRightmost",
        "fct-type": "function",
        "title": "isRightmost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "isRightmost",
        "normalized": "Loc a-\u003eBool",
        "package": "fixplate",
        "partial": "Rightmost",
        "signature": "Loc f-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:isTop",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether we are at the top (root).\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Bool",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#isTop",
        "fct-type": "function",
        "title": "isTop"
      },
      "index": {
        "description": "Checks whether we are at the top root",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "isTop",
        "normalized": "Loc a-\u003eBool",
        "package": "fixplate",
        "partial": "Top",
        "signature": "Loc f-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:leftmost",
      "description": {
        "fct-descr": "\u003cp\u003eMoves left until it can.\n It should be faster than repeated left steps.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#leftmost",
        "fct-type": "function",
        "title": "leftmost"
      },
      "index": {
        "description": "Moves left until it can It should be faster than repeated left steps",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "leftmost",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:locForget",
      "description": {
        "fct-descr": "\u003cp\u003eThe zipper version of \u003ccode\u003e\u003ca\u003eforget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc (Ann f a) -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#locForget",
        "fct-type": "function",
        "title": "locForget"
      },
      "index": {
        "description": "The zipper version of forget",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "locForget",
        "normalized": "Loc(Ann a b)-\u003eLoc a",
        "package": "fixplate",
        "partial": "Forget",
        "signature": "Loc(Ann f a)-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:locations",
      "description": {
        "fct-descr": "\u003cp\u003eWe attribute all nodes with a zipper focused at that location.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Attr f (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#locations",
        "fct-type": "function",
        "title": "locations"
      },
      "index": {
        "description": "We attribute all nodes with zipper focused at that location",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "locations",
        "normalized": "Mu a-\u003eAttr a(Loc a)",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eAttr f(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:locationsList",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of all locations.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e [Loc f]",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#locationsList",
        "fct-type": "function",
        "title": "locationsList"
      },
      "index": {
        "description": "The list of all locations",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "locationsList",
        "normalized": "Mu a-\u003e[Loc a]",
        "package": "fixplate",
        "partial": "List",
        "signature": "Mu f-\u003e[Loc f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the subtree at focus. \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "(Mu f -\u003e Mu f) -\u003e Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modifies the subtree at focus",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "modify",
        "normalized": "(Mu a-\u003eMu a)-\u003eLoc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "",
        "signature": "(Mu f-\u003eMu f)-\u003eLoc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveDown",
      "description": {
        "fct-descr": "\u003cp\u003eMoves down to the child with the given index.\n The leftmost children has index \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveDown",
        "fct-type": "function",
        "title": "moveDown"
      },
      "index": {
        "description": "Moves down to the child with the given index The leftmost children has index",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveDown",
        "normalized": "Int-\u003eLoc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Down",
        "signature": "Int-\u003eLoc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveDownL",
      "description": {
        "fct-descr": "\u003cp\u003eMoves down to the leftmost child.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveDownL",
        "fct-type": "function",
        "title": "moveDownL"
      },
      "index": {
        "description": "Moves down to the leftmost child",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveDownL",
        "normalized": "Loc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Down",
        "signature": "Loc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveDownR",
      "description": {
        "fct-descr": "\u003cp\u003eMoves down to the rightmost child.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveDownR",
        "fct-type": "function",
        "title": "moveDownR"
      },
      "index": {
        "description": "Moves down to the rightmost child",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveDownR",
        "normalized": "Loc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Down",
        "signature": "Loc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveLeft",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveLeft",
        "fct-type": "function",
        "title": "moveLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveLeft",
        "normalized": "Loc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Left",
        "signature": "Loc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveRight",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveRight",
        "fct-type": "function",
        "title": "moveRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveRight",
        "normalized": "Loc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Right",
        "signature": "Loc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveTop",
      "description": {
        "fct-descr": "\u003cp\u003eMoves to the top, by repeatedly moving up.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveTop",
        "fct-type": "function",
        "title": "moveTop"
      },
      "index": {
        "description": "Moves to the top by repeatedly moving up",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveTop",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Top",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:moveUp",
      "description": {
        "fct-descr": "\u003cp\u003eMoves up.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Maybe (Loc f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#moveUp",
        "fct-type": "function",
        "title": "moveUp"
      },
      "index": {
        "description": "Moves up",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "moveUp",
        "normalized": "Loc a-\u003eMaybe(Loc a)",
        "package": "fixplate",
        "partial": "Up",
        "signature": "Loc f-\u003eMaybe(Loc f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Path f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Loc",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "path",
        "normalized": "",
        "package": "fixplate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces the subtree at focus. \n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replaces the subtree at focus",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "replace",
        "normalized": "Mu a-\u003eLoc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eLoc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:rightmost",
      "description": {
        "fct-descr": "\u003cp\u003eMoves right until it can.\n It should be faster than repeated right steps.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#rightmost",
        "fct-type": "function",
        "title": "rightmost"
      },
      "index": {
        "description": "Moves right until it can It should be faster than repeated right steps",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "rightmost",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a zipper from a tree, with the focus at the root.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Mu f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "Creates zipper from tree with the focus at the root",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "root",
        "normalized": "Mu a-\u003eLoc a",
        "package": "fixplate",
        "partial": "",
        "signature": "Mu f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "f (Node f)",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#Path",
        "fct-type": "function",
        "title": "unPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unPath",
        "normalized": "",
        "package": "fixplate",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveDown",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Int -\u003e Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveDown",
        "fct-type": "function",
        "title": "unsafeMoveDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveDown",
        "normalized": "Int-\u003eLoc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Down",
        "signature": "Int-\u003eLoc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveDownL",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveDownL",
        "fct-type": "function",
        "title": "unsafeMoveDownL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveDownL",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Down",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveDownR",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveDownR",
        "fct-type": "function",
        "title": "unsafeMoveDownR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveDownR",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Down",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveLeft",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveLeft",
        "fct-type": "function",
        "title": "unsafeMoveLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveLeft",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Left",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveRight",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveLeft",
        "fct-type": "function",
        "title": "unsafeMoveRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveRight",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Right",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate-Zipper.html#v:unsafeMoveUp",
      "description": {
        "fct-module": "Data.Generics.Fixplate.Zipper",
        "fct-package": "fixplate",
        "fct-signature": "Loc f -\u003e Loc f",
        "fct-source": "src/Data-Generics-Fixplate-Zipper.html#unsafeMoveUp",
        "fct-type": "function",
        "title": "unsafeMoveUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate Zipper",
        "module": "Data.Generics.Fixplate.Zipper",
        "name": "unsafeMoveUp",
        "normalized": "Loc a-\u003eLoc a",
        "package": "fixplate",
        "partial": "Move Up",
        "signature": "Loc f-\u003eLoc f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides Uniplate-style generic traversals and other recursion schemes for fixed-point types.\n There are many advantages of using fixed-point types instead of explicit recursion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e we can easily add attributes to the nodes of an existing tree;\n\u003c/li\u003e\u003cli\u003e there is no need for a custom type class, we can build everything on the top of\n     \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e, for which GHC can derive the instances for us;\n\u003c/li\u003e\u003cli\u003e we can provide interesting recursion schemes\n\u003c/li\u003e\u003cli\u003e some operations can retain the structure of the tree, instead flattening\n     it into a list;\n\u003c/li\u003e\u003cli\u003e it is relatively straightforward to provide generic implementations of the zipper, tries, tree drawing, hashing, etc...\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe main disadvantage is that it does not work well for\n mutually recursive data types, and that pattern matching becomes\n more tedious (but there are partial solutions for the latter).\n\u003c/p\u003e\u003cp\u003eConsider as an example the following simple expression language,\n encoded by a recursive algebraic data type:\n\u003c/p\u003e\u003cpre\u003e data Expr \n   = Kst Int \n   | Var String \n   | Add Expr Expr\n   deriving (Eq,Show)\n\u003c/pre\u003e\u003cp\u003eWe can open up the recursion, and obtain a \u003cem\u003efunctor\u003c/em\u003e instead:\n\u003c/p\u003e\u003cpre\u003e data Expr1 e \n   = Kst Int \n   | Var String \n   | Add e e \n   deriving (Eq,Show,Functor,Foldable,Traversable)\n\u003c/pre\u003e\u003cp\u003eThe fixed-point type \u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e Expr1\u003c/code\u003e is isomorphic to \u003ccode\u003eExpr\u003c/code\u003e.\n However, we can also add some attributes to the nodes:\n The type \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eExpr1 a = \u003c/code\u003e\u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eAnn\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e Expr1 a)\u003c/code\u003e is the type of\n with the same structure, but with each node having an extra\n field of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe functions in this library work on types like that: \u003ccode\u003e\u003ca\u003eMu\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e f\u003c/code\u003e,\n where \u003ccode\u003ef\u003c/code\u003e is a functor, and sometimes explicitely on \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e f a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe organization of the modules (excluding Util.*) is the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Base\u003c/a\u003e - core types and type classes\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Traversals\u003c/a\u003e - Uniplate-style traversals\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Morphisms\u003c/a\u003e - recursion schemes\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Attributes\u003c/a\u003e - annotated trees\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Open\u003c/a\u003e - functions operating on functors\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Zipper\u003c/a\u003e - generic zipper\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Draw\u003c/a\u003e - generic tree drawing (both ASCII and graphviz)\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Trie\u003c/a\u003e - generic generalized tries\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Generics.Fixplate.Hash\u003c/a\u003e - annotating trees with their hashes\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module re-exports the most common functionality present in the library\n (but not for example the zipper, tries, hashing).\n\u003c/p\u003e\u003cp\u003eThe library itself should be fully Haskell98 compatible; no language extensions are used.\n Note: to obtain \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and other instances for \n fixed point types like \u003ccode\u003eMu Expr1\u003c/code\u003e, consult the documentation of the\n \u003ccode\u003e\u003ca\u003eEqF\u003c/a\u003e\u003c/code\u003e type class (cf. the related \u003ccode\u003e\u003ca\u003eOrdF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShowF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eReadF\u003c/a\u003e\u003c/code\u003e classes)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Fixplate.html",
        "fct-type": "module",
        "title": "Fixplate"
      },
      "index": {
        "description": "This library provides Uniplate-style generic traversals and other recursion schemes for fixed-point types There are many advantages of using fixed-point types instead of explicit recursion we can easily add attributes to the nodes of an existing tree there is no need for custom type class we can build everything on the top of Functor Foldable and Traversable for which GHC can derive the instances for us we can provide interesting recursion schemes some operations can retain the structure of the tree instead flattening it into list it is relatively straightforward to provide generic implementations of the zipper tries tree drawing hashing etc The main disadvantage is that it does not work well for mutually recursive data types and that pattern matching becomes more tedious but there are partial solutions for the latter Consider as an example the following simple expression language encoded by recursive algebraic data type data Expr Kst Int Var String Add Expr Expr deriving Eq Show We can open up the recursion and obtain functor instead data Expr1 Kst Int Var String Add deriving Eq Show Functor Foldable Traversable The fixed-point type Mu Expr1 is isomorphic to Expr However we can also add some attributes to the nodes The type Attr Expr1 Mu Ann Expr1 is the type of with the same structure but with each node having an extra field of type The functions in this library work on types like that Mu where is functor and sometimes explicitely on Attr The organization of the modules excluding Util is the following Data.Generics.Fixplate.Base core types and type classes Data.Generics.Fixplate.Traversals Uniplate-style traversals Data.Generics.Fixplate.Morphisms recursion schemes Data.Generics.Fixplate.Attributes annotated trees Data.Generics.Fixplate.Open functions operating on functors Data.Generics.Fixplate.Zipper generic zipper Data.Generics.Fixplate.Draw generic tree drawing both ASCII and graphviz Data.Generics.Fixplate.Trie generic generalized tries Data.Generics.Fixplate.Hash annotating trees with their hashes This module re-exports the most common functionality present in the library but not for example the zipper tries hashing The library itself should be fully Haskell98 compatible no language extensions are used Note to obtain Eq Ord Show Read and other instances for fixed point types like Mu Expr1 consult the documentation of the EqF type class cf the related OrdF ShowF and ReadF classes",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "Fixplate",
        "normalized": "",
        "package": "fixplate",
        "partial": "Fixplate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#t:Foldable",
      "description": {
        "fct-descr": "\u003cp\u003eData structures that can be folded.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldMap f Empty = mempty\n    foldMap f (Leaf x) = f x\n    foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the monoid is assumed\n to satisfy the monoid laws.  Alternatively, one could define \u003ccode\u003efoldr\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldr f z Empty = z\n    foldr f z (Leaf x) = f x z\n    foldr f z (Node l k r) = foldr f (f k (foldr f z r)) l\n\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Foldable"
      },
      "index": {
        "description": "Data structures that can be folded Minimal complete definition foldMap or foldr For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Foldable Tree where foldMap Empty mempty foldMap Leaf foldMap Node foldMap mappend mappend foldMap This is suitable even for abstract types as the monoid is assumed to satisfy the monoid laws Alternatively one could define foldr instance Foldable Tree where foldr Empty foldr Leaf foldr Node foldr foldr",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "Foldable",
        "normalized": "",
        "package": "fixplate",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "Functor",
        "normalized": "",
        "package": "fixplate",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#t:Traversable",
      "description": {
        "fct-descr": "\u003cp\u003eFunctors representing data structures that can be traversed from\n left to right.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances are similar to \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, e.g. given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Traversable Tree where\n    traverse f Empty = pure Empty\n    traverse f (Leaf x) = Leaf \u003c$\u003e f x\n    traverse f (Node l k r) = Node \u003c$\u003e traverse f l \u003c*\u003e f k \u003c*\u003e traverse f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the laws for \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n imply a form of associativity.\n\u003c/p\u003e\u003cp\u003eThe superclass instances should satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance, \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e should be equivalent to traversal\n    with the identity applicative functor (\u003ccode\u003e\u003ca\u003efmapDefault\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e In the \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e instance, \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e should be\n    equivalent to traversal with a constant applicative functor\n    (\u003ccode\u003e\u003ca\u003efoldMapDefault\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Traversable"
      },
      "index": {
        "description": "Functors representing data structures that can be traversed from left to right Minimal complete definition traverse or sequenceA Instances are similar to Functor e.g given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Traversable Tree where traverse Empty pure Empty traverse Leaf Leaf traverse Node Node traverse traverse This is suitable even for abstract types as the laws for imply form of associativity The superclass instances should satisfy the following In the Functor instance fmap should be equivalent to traversal with the identity applicative functor fmapDefault In the Foldable instance foldMap should be equivalent to traversal with constant applicative functor foldMapDefault",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "Traversable",
        "normalized": "",
        "package": "fixplate",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:fmap",
      "description": {
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the elements of a structure using a monoid.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "t m -\u003e m",
        "fct-type": "method",
        "title": "fold"
      },
      "index": {
        "description": "Combine the elements of structure using monoid",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "fold",
        "normalized": "a b-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "t m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of the structure to a monoid,\n and combine the results.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e m) -\u003e t a -\u003e m",
        "fct-type": "method",
        "title": "foldMap"
      },
      "index": {
        "description": "Map each element of the structure to monoid and combine the results",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "fixplate",
        "partial": "Map",
        "signature": "(a-\u003em)-\u003et a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "Left-associative fold of structure foldl foldl toList",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
        "fct-type": "method",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl that has no base case and thus may only be applied to non-empty structures foldl1 foldl1 toList",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Right-associative fold of structure foldr foldr toList",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
        "fct-type": "method",
        "title": "foldr1"
      },
      "index": {
        "description": "variant of foldr that has no base case and thus may only be applied to non-empty structures foldr1 foldr1 toList",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to a monadic action, evaluate\n these actions from left to right, and collect the results.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e m b) -\u003e t a -\u003e m (t b)",
        "fct-type": "method",
        "title": "mapM"
      },
      "index": {
        "description": "Map each element of structure to monadic action evaluate these actions from left to right and collect the results",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003em b)-\u003et a-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each monadic action in the structure from left to right,\n and collect the results.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "t (m a) -\u003e m (t a)",
        "fct-type": "method",
        "title": "sequence"
      },
      "index": {
        "description": "Evaluate each monadic action in the structure from left to right and collect the results",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "sequence",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "fixplate",
        "partial": "",
        "signature": "t(m a)-\u003em(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:sequenceA",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the structure from left to right,\n and collect the results.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "t (f a) -\u003e f (t a)",
        "fct-type": "method",
        "title": "sequenceA"
      },
      "index": {
        "description": "Evaluate each action in the structure from left to right and collect the results",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "sequenceA",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "fixplate",
        "partial": "",
        "signature": "t(f a)-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixplate/docs/Data-Generics-Fixplate.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to an action, evaluate\n these actions from left to right, and collect the results.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Fixplate",
        "fct-package": "fixplate",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-type": "method",
        "title": "traverse"
      },
      "index": {
        "description": "Map each element of structure to an action evaluate these actions from left to right and collect the results",
        "hierarchy": "Data Generics Fixplate",
        "module": "Data.Generics.Fixplate",
        "name": "traverse",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "fixplate",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  }
]