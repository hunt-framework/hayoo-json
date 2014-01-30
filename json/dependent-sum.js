[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#",
      "description": {
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "module",
        "fct-source": "src/Data-Dependent-Sum.html",
        "fct-type": "module",
        "title": "Sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "Sum",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:DSum",
      "description": {
        "fct-descr": "\u003cp\u003eA basic dependent sum type; the first component is a tag that specifies \n the type of the second;  for example, think of a GADT such as:\n\u003c/p\u003e\u003cpre\u003e data Tag a where\n    AString :: Tag String\n    AnInt   :: Tag Int\n\u003c/pre\u003e\u003cp\u003eThen, we have the following valid expressions of type \u003ccode\u003eDSum Tag\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e AString :=\u003e \"hello!\"\n AnInt   :=\u003e 42\n\u003c/pre\u003e\u003cp\u003eAnd we can write functions that consume \u003ccode\u003eDSum Tag\u003c/code\u003e values by matching, \n such as:\n\u003c/p\u003e\u003cpre\u003e toString :: DSum Tag -\u003e String\n toString (AString :=\u003e str) = str\n toString (AnInt   :=\u003e int) = show int\n\u003c/pre\u003e\u003cp\u003eBy analogy to the (key =\u003e value) construction for dictionary entries in \n many dynamic languages, we use (key :=\u003e value) as the constructor for \n dependent sums.  The :=\u003e operator has very low precedence and binds to \n the right, so if the \u003ccode\u003eTag\u003c/code\u003e GADT is extended with an additional constructor\n \u003ccode\u003eRec :: Tag (DSum Tag)\u003c/code\u003e, then \u003ccode\u003eRec :=\u003e AnInt :=\u003e 3 + 4\u003c/code\u003e is parsed as\n would be expected (\u003ccode\u003eRec :=\u003e (AnInt :=\u003e (3 + 4))\u003c/code\u003e) and has type \u003ccode\u003eDSum Tag\u003c/code\u003e.\n Its precedence is just above that of \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e, so \u003ccode\u003efoo bar $ AString :=\u003e \u003ca\u003eeep\u003c/a\u003e\u003c/code\u003e\n is equivalent to \u003ccode\u003efoo bar (AString :=\u003e \u003ca\u003eeep\u003c/a\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "data",
        "fct-source": "src/Data-Dependent-Sum.html#DSum",
        "fct-type": "data",
        "title": "DSum"
      },
      "index": {
        "description": "basic dependent sum type the first component is tag that specifies the type of the second for example think of GADT such as data Tag where AString Tag String AnInt Tag Int Then we have the following valid expressions of type DSum Tag AString hello AnInt And we can write functions that consume DSum Tag values by matching such as toString DSum Tag String toString AString str str toString AnInt int show int By analogy to the key value construction for dictionary entries in many dynamic languages we use key value as the constructor for dependent sums The operator has very low precedence and binds to the right so if the Tag GADT is extended with an additional constructor Rec Tag DSum Tag then Rec AnInt is parsed as would be expected Rec AnInt and has type DSum Tag Its precedence is just above that of so foo bar AString eep is equivalent to foo bar AString eep",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "DSum",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "DSum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:EqTag",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to test \u003ccode\u003eDSum tag\u003c/code\u003e for equality, \u003ccode\u003etag\u003c/code\u003e must know how to test\n both itself and its tagged values for equality.  \u003ccode\u003e\u003ca\u003eEqTag\u003c/a\u003e\u003c/code\u003e defines\n the interface by which they are expected to do so.\n\u003c/p\u003e\u003cp\u003eContinuing the \u003ccode\u003eTag\u003c/code\u003e example from the \u003ccode\u003e\u003ca\u003eDSum\u003c/a\u003e\u003c/code\u003e section, we can define:\n\u003c/p\u003e\u003cpre\u003e instance GEq Tag where\n     geq AString AString = Just Refl\n     geq AString AnInt   = Nothing\n     geq AnInt   AString = Nothing\n     geq AnInt   AnInt   = Just Refl\n instance EqTag Tag where\n     eqTagged AString AString = (==)\n     eqTagged AnInt   AnInt   = (==)\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e is not called until after the tags have been\n compared, so it only needs to consider the cases where \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-Dependent-Sum.html#EqTag",
        "fct-type": "class",
        "title": "EqTag"
      },
      "index": {
        "description": "In order to test DSum tag for equality tag must know how to test both itself and its tagged values for equality EqTag defines the interface by which they are expected to do so Continuing the Tag example from the DSum section we can define instance GEq Tag where geq AString AString Just Refl geq AString AnInt Nothing geq AnInt AString Nothing geq AnInt AnInt Just Refl instance EqTag Tag where eqTagged AString AString eqTagged AnInt AnInt Note that eqTagged is not called until after the tags have been compared so it only needs to consider the cases where gcompare returns GEQ",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "EqTag",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Eq Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:OrdTag",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to compare \u003ccode\u003eDSum tag\u003c/code\u003e values, \u003ccode\u003etag\u003c/code\u003e must know how to compare\n both itself and its tagged values.  \u003ccode\u003e\u003ca\u003eOrdTag\u003c/a\u003e\u003c/code\u003e defines the \n interface by which they are expected to do so.\n\u003c/p\u003e\u003cp\u003eContinuing the \u003ccode\u003eTag\u003c/code\u003e example from the \u003ccode\u003e\u003ca\u003eEqTag\u003c/a\u003e\u003c/code\u003e section, we can define:\n\u003c/p\u003e\u003cpre\u003e instance GCompare Tag where\n     gcompare AString AString = GEQ\n     gcompare AString AnInt   = GLT\n     gcompare AnInt   AString = GGT\n     gcompare AnInt   AnInt   = GEQ\n instance OrdTag Tag where\n     compareTagged AString AString = compare\n     compareTagged AnInt   AnInt   = compare\n\u003c/pre\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecompareTagged\u003c/a\u003e\u003c/code\u003e only needs to consider cases where\n \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-Dependent-Sum.html#OrdTag",
        "fct-type": "class",
        "title": "OrdTag"
      },
      "index": {
        "description": "In order to compare DSum tag values tag must know how to compare both itself and its tagged values OrdTag defines the interface by which they are expected to do so Continuing the Tag example from the EqTag section we can define instance GCompare Tag where gcompare AString AString GEQ gcompare AString AnInt GLT gcompare AnInt AString GGT gcompare AnInt AnInt GEQ instance OrdTag Tag where compareTagged AString AString compare compareTagged AnInt AnInt compare As with eqTagged compareTagged only needs to consider cases where gcompare returns GEQ",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "OrdTag",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Ord Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:ReadTag",
      "description": {
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-Dependent-Sum.html#ReadTag",
        "fct-type": "class",
        "title": "ReadTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "ReadTag",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Read Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:ShowTag",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to make a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eDSum tag\u003c/code\u003e, \u003ccode\u003etag\u003c/code\u003e must be able\n to show itself as well as any value of the tagged type.  \u003ccode\u003e\u003ca\u003eGShow\u003c/a\u003e\u003c/code\u003e together\n with this class provides the interface by which it can do so.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eGShow tag =\u003e t\u003c/code\u003e is conceptually equivalent to something like this\n imaginary syntax:  \u003ccode\u003e(forall a. Inhabited (tag a) =\u003e Show a) =\u003e t\u003c/code\u003e,\n where \u003ccode\u003eInhabited\u003c/code\u003e is an imaginary predicate that characterizes \n non-empty types, and \u003ccode\u003ea\u003c/code\u003e does not occur free in \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eTag\u003c/code\u003e example type introduced in the \u003ccode\u003e\u003ca\u003eDSum\u003c/a\u003e\u003c/code\u003e section could be given the\n following instances:\n\u003c/p\u003e\u003cpre\u003e instance GShow Tag where\n     gshowsPrec _showsValPrec _p AString = showString \"AString\"\n     gshowsPrec _showsValPrec _p AnInt   = showString \"AnInt\"\n instance ShowTag Tag where\n     showTaggedPrec AString = showsPrec\n     showTaggedPrec AnInt   = showsPrec\n\u003c/pre\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-Dependent-Sum.html#ShowTag",
        "fct-type": "class",
        "title": "ShowTag"
      },
      "index": {
        "description": "In order to make Show instance for DSum tag tag must be able to show itself as well as any value of the tagged type GShow together with this class provides the interface by which it can do so GShow tag is conceptually equivalent to something like this imaginary syntax forall Inhabited tag Show where Inhabited is an imaginary predicate that characterizes non-empty types and does not occur free in The Tag example type introduced in the DSum section could be given the following instances instance GShow Tag where gshowsPrec showsValPrec AString showString AString gshowsPrec showsValPrec AnInt showString AnInt instance ShowTag Tag where showTaggedPrec AString showsPrec showTaggedPrec AnInt showsPrec",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "ShowTag",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Show Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v::-61--62-",
      "description": {
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "a",
        "fct-source": "src/Data-Dependent-Sum.html#DSum",
        "fct-type": "function",
        "title": ":=\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": ":=\u003e",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:compareTagged",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two values of type \u003ccode\u003etag a\u003c/code\u003e (for which \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e),\n return the \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e function for the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "tag a -\u003e tag a -\u003e a -\u003e a -\u003e Ordering",
        "fct-source": "src/Data-Dependent-Sum.html#compareTagged",
        "fct-type": "method",
        "title": "compareTagged"
      },
      "index": {
        "description": "Given two values of type tag for which gcompare returns GEQ return the compare function for the type",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "compareTagged",
        "normalized": "a b-\u003ea b-\u003eb-\u003eb-\u003eOrdering",
        "package": "dependent-sum",
        "partial": "Tagged",
        "signature": "tag a-\u003etag a-\u003ea-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:eqTagged",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two values of type \u003ccode\u003etag a\u003c/code\u003e (for which \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e),\n return the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e function for the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "tag a -\u003e tag a -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Dependent-Sum.html#eqTagged",
        "fct-type": "method",
        "title": "eqTagged"
      },
      "index": {
        "description": "Given two values of type tag for which gcompare returns GEQ return the function for the type",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "eqTagged",
        "normalized": "a b-\u003ea b-\u003eb-\u003eb-\u003eBool",
        "package": "dependent-sum",
        "partial": "Tagged",
        "signature": "tag a-\u003etag a-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:readTaggedPrec",
      "description": {
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "tag a -\u003e Int -\u003e ReadS a",
        "fct-source": "src/Data-Dependent-Sum.html#readTaggedPrec",
        "fct-type": "method",
        "title": "readTaggedPrec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "readTaggedPrec",
        "normalized": "a b-\u003eInt-\u003eReadS b",
        "package": "dependent-sum",
        "partial": "Tagged Prec",
        "signature": "tag a-\u003eInt-\u003eReadS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:showTaggedPrec",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a value of type \u003ccode\u003etag a\u003c/code\u003e, return the \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e function for \n the type parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Dependent.Sum",
        "fct-package": "dependent-sum",
        "fct-signature": "tag a -\u003e Int -\u003e a -\u003e ShowS",
        "fct-source": "src/Data-Dependent-Sum.html#showTaggedPrec",
        "fct-type": "method",
        "title": "showTaggedPrec"
      },
      "index": {
        "description": "Given value of type tag return the showsPrec function for the type parameter",
        "hierarchy": "Data Dependent Sum",
        "module": "Data.Dependent.Sum",
        "name": "showTaggedPrec",
        "normalized": "a b-\u003eInt-\u003eb-\u003eShowS",
        "package": "dependent-sum",
        "partial": "Tagged Prec",
        "signature": "tag a-\u003eInt-\u003ea-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "module",
        "fct-source": "src/Data-GADT-Compare.html",
        "fct-type": "module",
        "title": "Compare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "Compare",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Compare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t::-61-",
      "description": {
        "fct-descr": "\u003cp\u003eA GADT witnessing equality of two types.  Its only inhabitant is \u003ccode\u003e\u003ca\u003eRefl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "data",
        "fct-source": "src/Data-GADT-Compare.html#%3A%3D",
        "fct-type": "data",
        "title": ":="
      },
      "index": {
        "description": "GADT witnessing equality of two types Its only inhabitant is Refl",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": ":=",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GCompare",
      "description": {
        "fct-descr": "\u003cp\u003eType class for orderable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (GEQ).\n |Type class for comparable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (\u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-GADT-Compare.html#GCompare",
        "fct-type": "class",
        "title": "GCompare"
      },
      "index": {
        "description": "Type class for orderable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ Type class for comparable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GCompare",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GCompare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GEq",
      "description": {
        "fct-descr": "\u003cp\u003eA class for type-contexts which contain enough information\n to (at least in some cases) decide the equality of types \n occurring within them.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-GADT-Compare.html#GEq",
        "fct-type": "class",
        "title": "GEq"
      },
      "index": {
        "description": "class for type-contexts which contain enough information to at least in some cases decide the equality of types occurring within them",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GEq",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GOrdering",
      "description": {
        "fct-descr": "\u003cp\u003eA type for the result of comparing GADT constructors; the type parameters\n of the GADT values being compared are included so that in the case where \n they are equal their parameter types can be unified.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "data",
        "fct-source": "src/Data-GADT-Compare.html#GOrdering",
        "fct-type": "data",
        "title": "GOrdering"
      },
      "index": {
        "description": "type for the result of comparing GADT constructors the type parameters of the GADT values being compared are included so that in the case where they are equal their parameter types can be unified",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GOrdering",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GOrdering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GEQ",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "GOrdering t t",
        "fct-source": "src/Data-GADT-Compare.html#GOrdering",
        "fct-type": "function",
        "title": "GEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GEQ",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GGT",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "GOrdering a b",
        "fct-source": "src/Data-GADT-Compare.html#GOrdering",
        "fct-type": "function",
        "title": "GGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GGT",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GLT",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "GOrdering a b",
        "fct-source": "src/Data-GADT-Compare.html#GOrdering",
        "fct-type": "function",
        "title": "GLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "GLT",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:Refl",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "a := a",
        "fct-source": "src/Data-GADT-Compare.html#%3A%3D",
        "fct-type": "function",
        "title": "Refl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "Refl",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Refl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:defaultEq",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e instance, this function makes a suitable default \n implementation of '(==)'.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "f a -\u003e f b -\u003e Bool",
        "fct-source": "src/Data-GADT-Compare.html#defaultEq",
        "fct-type": "function",
        "title": "defaultEq"
      },
      "index": {
        "description": "If has GEq instance this function makes suitable default implementation of",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "defaultEq",
        "normalized": "a b-\u003ea c-\u003eBool",
        "package": "dependent-sum",
        "partial": "Eq",
        "signature": "f a-\u003ef b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:defaultNeq",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e instance, this function makes a suitable default \n implementation of '(/=)'.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "f a -\u003e f b -\u003e Bool",
        "fct-source": "src/Data-GADT-Compare.html#defaultNeq",
        "fct-type": "function",
        "title": "defaultNeq"
      },
      "index": {
        "description": "If has GEq instance this function makes suitable default implementation of",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "defaultNeq",
        "normalized": "a b-\u003ea c-\u003eBool",
        "package": "dependent-sum",
        "partial": "Neq",
        "signature": "f a-\u003ef b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:gcompare",
      "description": {
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "f a -\u003e f b -\u003e GOrdering a b",
        "fct-source": "src/Data-GADT-Compare.html#gcompare",
        "fct-type": "method",
        "title": "gcompare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "gcompare",
        "normalized": "a b-\u003ea c-\u003eGOrdering b c",
        "package": "dependent-sum",
        "partial": "",
        "signature": "f a-\u003ef b-\u003eGOrdering a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a witness of type-equality, if one exists.\n\u003c/p\u003e\u003cp\u003eA handy idiom for using this would be to pattern-bind in the Maybe monad, eg.:\n\u003c/p\u003e\u003cpre\u003e extract :: GEq tag =\u003e tag a -\u003e DSum tag -\u003e Maybe a\n extract t1 (t2 :=\u003e x) = do\n     Refl \u003c- geq t1 t2\n     return x\n\u003c/pre\u003e\u003cp\u003eOr in a list comprehension:\n\u003c/p\u003e\u003cpre\u003e extractMany :: GEq tag =\u003e tag a -\u003e [DSum tag] -\u003e [a]\n extractMany t1 things = [ x | (t2 :=\u003e x) \u003c- things, Refl \u003c- maybeToList (geq t1 t2)]\n\u003c/pre\u003e\u003cp\u003e(Making use of the \u003ccode\u003eDSum\u003c/code\u003e type from \u003ca\u003eData.Dependent.Sum\u003c/a\u003e in both examples)\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "f a -\u003e f b -\u003e Maybe (a := b)",
        "fct-source": "src/Data-GADT-Compare.html#geq",
        "fct-type": "method",
        "title": "geq"
      },
      "index": {
        "description": "Produce witness of type-equality if one exists handy idiom for using this would be to pattern-bind in the Maybe monad eg extract GEq tag tag DSum tag Maybe extract t1 t2 do Refl geq t1 t2 return Or in list comprehension extractMany GEq tag tag DSum tag extractMany t1 things t2 things Refl maybeToList geq t1 t2 Making use of the DSum type from Data.Dependent.Sum in both examples",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "geq",
        "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
        "package": "dependent-sum",
        "partial": "",
        "signature": "f a-\u003ef b-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:weakenOrdering",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: Think of a better name\n\u003c/p\u003e\u003cp\u003eThis operation forgets the phantom types of a \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Compare",
        "fct-package": "dependent-sum",
        "fct-signature": "GOrdering a b -\u003e Ordering",
        "fct-source": "src/Data-GADT-Compare.html#weakenOrdering",
        "fct-type": "function",
        "title": "weakenOrdering"
      },
      "index": {
        "description": "TODO Think of better name This operation forgets the phantom types of GOrdering value",
        "hierarchy": "Data GADT Compare",
        "module": "Data.GADT.Compare",
        "name": "weakenOrdering",
        "normalized": "GOrdering a b-\u003eOrdering",
        "package": "dependent-sum",
        "partial": "Ordering",
        "signature": "GOrdering a b-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "module",
        "fct-source": "src/Data-GADT-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "Show",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GRead",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-GADT-Show.html#GRead",
        "fct-type": "class",
        "title": "GRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "GRead",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GRead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GReadS",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "type",
        "fct-source": "src/Data-GADT-Show.html#GReadS",
        "fct-type": "type",
        "title": "GReadS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "GReadS",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GRead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e-like class for 1-type-parameter GADTs\n\u003c/p\u003e",
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "class",
        "fct-source": "src/Data-GADT-Show.html#GShow",
        "fct-type": "class",
        "title": "GShow"
      },
      "index": {
        "description": "Show like class for type-parameter GADTs",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "GShow",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "GShow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gread",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "String -\u003e (forall a.  t a -\u003e b) -\u003e b",
        "fct-source": "src/Data-GADT-Show.html#gread",
        "fct-type": "function",
        "title": "gread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "gread",
        "normalized": "String-\u003e(a b c d-\u003ee)-\u003ee",
        "package": "dependent-sum",
        "partial": "",
        "signature": "String-\u003e(forall a. t a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:greads",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "GReadS t",
        "fct-source": "src/Data-GADT-Show.html#greads",
        "fct-type": "function",
        "title": "greads"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "greads",
        "normalized": "",
        "package": "dependent-sum",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:greadsPrec",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "Int -\u003e GReadS t",
        "fct-source": "src/Data-GADT-Show.html#greadsPrec",
        "fct-type": "method",
        "title": "greadsPrec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "greadsPrec",
        "normalized": "Int-\u003eGReadS a",
        "package": "dependent-sum",
        "partial": "Prec",
        "signature": "Int-\u003eGReadS t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshow",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "t a -\u003e String",
        "fct-source": "src/Data-GADT-Show.html#gshow",
        "fct-type": "function",
        "title": "gshow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "gshow",
        "normalized": "a b-\u003eString",
        "package": "dependent-sum",
        "partial": "",
        "signature": "t a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshows",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "t a -\u003e ShowS",
        "fct-source": "src/Data-GADT-Show.html#gshows",
        "fct-type": "function",
        "title": "gshows"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "gshows",
        "normalized": "a b-\u003eShowS",
        "package": "dependent-sum",
        "partial": "",
        "signature": "t a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshowsPrec",
      "description": {
        "fct-module": "Data.GADT.Show",
        "fct-package": "dependent-sum",
        "fct-signature": "Int -\u003e t a -\u003e ShowS",
        "fct-source": "src/Data-GADT-Show.html#gshowsPrec",
        "fct-type": "method",
        "title": "gshowsPrec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GADT Show",
        "module": "Data.GADT.Show",
        "name": "gshowsPrec",
        "normalized": "Int-\u003ea b-\u003eShowS",
        "package": "dependent-sum",
        "partial": "Prec",
        "signature": "Int-\u003et a-\u003eShowS"
      }
    }
  }
]