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
        "word": "dependent-sum"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Sum",
          "name": "Sum",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "Sum",
          "package": "dependent-sum",
          "partial": "Sum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic dependent sum type; the first component is a tag that specifies \n the type of the second;  for example, think of a GADT such as:\n\u003c/p\u003e\u003cpre\u003e data Tag a where\n    AString :: Tag String\n    AnInt   :: Tag Int\n\u003c/pre\u003e\u003cp\u003eThen, we have the following valid expressions of type \u003ccode\u003eDSum Tag\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e AString :=\u003e \"hello!\"\n AnInt   :=\u003e 42\n\u003c/pre\u003e\u003cp\u003eAnd we can write functions that consume \u003ccode\u003eDSum Tag\u003c/code\u003e values by matching, \n such as:\n\u003c/p\u003e\u003cpre\u003e toString :: DSum Tag -\u003e String\n toString (AString :=\u003e str) = str\n toString (AnInt   :=\u003e int) = show int\n\u003c/pre\u003e\u003cp\u003eBy analogy to the (key =\u003e value) construction for dictionary entries in \n many dynamic languages, we use (key :=\u003e value) as the constructor for \n dependent sums.  The :=\u003e operator has very low precedence and binds to \n the right, so if the \u003ccode\u003eTag\u003c/code\u003e GADT is extended with an additional constructor\n \u003ccode\u003eRec :: Tag (DSum Tag)\u003c/code\u003e, then \u003ccode\u003eRec :=\u003e AnInt :=\u003e 3 + 4\u003c/code\u003e is parsed as\n would be expected (\u003ccode\u003eRec :=\u003e (AnInt :=\u003e (3 + 4))\u003c/code\u003e) and has type \u003ccode\u003eDSum Tag\u003c/code\u003e.\n Its precedence is just above that of \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e, so \u003ccode\u003efoo bar $ AString :=\u003e \u003ca\u003eeep\u003c/a\u003e\u003c/code\u003e\n is equivalent to \u003ccode\u003efoo bar (AString :=\u003e \u003ca\u003eeep\u003c/a\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "DSum",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html#DSum",
          "type": "data"
        },
        "index": {
          "description": "basic dependent sum type the first component is tag that specifies the type of the second for example think of GADT such as data Tag where AString Tag String AnInt Tag Int Then we have the following valid expressions of type DSum Tag AString hello AnInt And we can write functions that consume DSum Tag values by matching such as toString DSum Tag String toString AString str str toString AnInt int show int By analogy to the key value construction for dictionary entries in many dynamic languages we use key value as the constructor for dependent sums The operator has very low precedence and binds to the right so if the Tag GADT is extended with an additional constructor Rec Tag DSum Tag then Rec AnInt is parsed as would be expected Rec AnInt and has type DSum Tag Its precedence is just above that of so foo bar AString eep is equivalent to foo bar AString eep",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "DSum",
          "package": "dependent-sum",
          "partial": "DSum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:DSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to test \u003ccode\u003eDSum tag\u003c/code\u003e for equality, \u003ccode\u003etag\u003c/code\u003e must know how to test\n both itself and its tagged values for equality.  \u003ccode\u003e\u003ca\u003eEqTag\u003c/a\u003e\u003c/code\u003e defines\n the interface by which they are expected to do so.\n\u003c/p\u003e\u003cp\u003eContinuing the \u003ccode\u003eTag\u003c/code\u003e example from the \u003ccode\u003e\u003ca\u003eDSum\u003c/a\u003e\u003c/code\u003e section, we can define:\n\u003c/p\u003e\u003cpre\u003e instance GEq Tag where\n     geq AString AString = Just Refl\n     geq AString AnInt   = Nothing\n     geq AnInt   AString = Nothing\n     geq AnInt   AnInt   = Just Refl\n instance EqTag Tag where\n     eqTagged AString AString = (==)\n     eqTagged AnInt   AnInt   = (==)\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e is not called until after the tags have been\n compared, so it only needs to consider the cases where \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "EqTag",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html#EqTag",
          "type": "class"
        },
        "index": {
          "description": "In order to test DSum tag for equality tag must know how to test both itself and its tagged values for equality EqTag defines the interface by which they are expected to do so Continuing the Tag example from the DSum section we can define instance GEq Tag where geq AString AString Just Refl geq AString AnInt Nothing geq AnInt AString Nothing geq AnInt AnInt Just Refl instance EqTag Tag where eqTagged AString AString eqTagged AnInt AnInt Note that eqTagged is not called until after the tags have been compared so it only needs to consider the cases where gcompare returns GEQ",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "EqTag",
          "package": "dependent-sum",
          "partial": "Eq Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:EqTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to compare \u003ccode\u003eDSum tag\u003c/code\u003e values, \u003ccode\u003etag\u003c/code\u003e must know how to compare\n both itself and its tagged values.  \u003ccode\u003e\u003ca\u003eOrdTag\u003c/a\u003e\u003c/code\u003e defines the \n interface by which they are expected to do so.\n\u003c/p\u003e\u003cp\u003eContinuing the \u003ccode\u003eTag\u003c/code\u003e example from the \u003ccode\u003e\u003ca\u003eEqTag\u003c/a\u003e\u003c/code\u003e section, we can define:\n\u003c/p\u003e\u003cpre\u003e instance GCompare Tag where\n     gcompare AString AString = GEQ\n     gcompare AString AnInt   = GLT\n     gcompare AnInt   AString = GGT\n     gcompare AnInt   AnInt   = GEQ\n instance OrdTag Tag where\n     compareTagged AString AString = compare\n     compareTagged AnInt   AnInt   = compare\n\u003c/pre\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecompareTagged\u003c/a\u003e\u003c/code\u003e only needs to consider cases where\n \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "OrdTag",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html#OrdTag",
          "type": "class"
        },
        "index": {
          "description": "In order to compare DSum tag values tag must know how to compare both itself and its tagged values OrdTag defines the interface by which they are expected to do so Continuing the Tag example from the EqTag section we can define instance GCompare Tag where gcompare AString AString GEQ gcompare AString AnInt GLT gcompare AnInt AString GGT gcompare AnInt AnInt GEQ instance OrdTag Tag where compareTagged AString AString compare compareTagged AnInt AnInt compare As with eqTagged compareTagged only needs to consider cases where gcompare returns GEQ",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "OrdTag",
          "package": "dependent-sum",
          "partial": "Ord Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:OrdTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Sum",
          "name": "ReadTag",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html#ReadTag",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "ReadTag",
          "package": "dependent-sum",
          "partial": "Read Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:ReadTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to make a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eDSum tag\u003c/code\u003e, \u003ccode\u003etag\u003c/code\u003e must be able\n to show itself as well as any value of the tagged type.  \u003ccode\u003e\u003ca\u003eGShow\u003c/a\u003e\u003c/code\u003e together\n with this class provides the interface by which it can do so.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eGShow tag =\u003e t\u003c/code\u003e is conceptually equivalent to something like this\n imaginary syntax:  \u003ccode\u003e(forall a. Inhabited (tag a) =\u003e Show a) =\u003e t\u003c/code\u003e,\n where \u003ccode\u003eInhabited\u003c/code\u003e is an imaginary predicate that characterizes \n non-empty types, and \u003ccode\u003ea\u003c/code\u003e does not occur free in \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eTag\u003c/code\u003e example type introduced in the \u003ccode\u003e\u003ca\u003eDSum\u003c/a\u003e\u003c/code\u003e section could be given the\n following instances:\n\u003c/p\u003e\u003cpre\u003e instance GShow Tag where\n     gshowsPrec _showsValPrec _p AString = showString \"AString\"\n     gshowsPrec _showsValPrec _p AnInt   = showString \"AnInt\"\n instance ShowTag Tag where\n     showTaggedPrec AString = showsPrec\n     showTaggedPrec AnInt   = showsPrec\n\u003c/pre\u003e",
          "module": "Data.Dependent.Sum",
          "name": "ShowTag",
          "package": "dependent-sum",
          "source": "src/Data-Dependent-Sum.html#ShowTag",
          "type": "class"
        },
        "index": {
          "description": "In order to make Show instance for DSum tag tag must be able to show itself as well as any value of the tagged type GShow together with this class provides the interface by which it can do so GShow tag is conceptually equivalent to something like this imaginary syntax forall Inhabited tag Show where Inhabited is an imaginary predicate that characterizes non-empty types and does not occur free in The Tag example type introduced in the DSum section could be given the following instances instance GShow Tag where gshowsPrec showsValPrec AString showString AString gshowsPrec showsValPrec AnInt showString AnInt instance ShowTag Tag where showTaggedPrec AString showsPrec showTaggedPrec AnInt showsPrec",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "ShowTag",
          "package": "dependent-sum",
          "partial": "Show Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#t:ShowTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Sum",
          "name": ":=\u003e",
          "package": "dependent-sum",
          "signature": "a",
          "source": "src/Data-Dependent-Sum.html#DSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": ":=\u003e",
          "package": "dependent-sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two values of type \u003ccode\u003etag a\u003c/code\u003e (for which \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e),\n return the \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e function for the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "compareTagged",
          "package": "dependent-sum",
          "signature": "tag a -\u003e tag a -\u003e a -\u003e a -\u003e Ordering",
          "source": "src/Data-Dependent-Sum.html#compareTagged",
          "type": "method"
        },
        "index": {
          "description": "Given two values of type tag for which gcompare returns GEQ return the compare function for the type",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "compareTagged",
          "normalized": "a b-\u003ea b-\u003eb-\u003eb-\u003eOrdering",
          "package": "dependent-sum",
          "partial": "Tagged",
          "signature": "tag a-\u003etag a-\u003ea-\u003ea-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:compareTagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two values of type \u003ccode\u003etag a\u003c/code\u003e (for which \u003ccode\u003e\u003ca\u003egcompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e),\n return the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e function for the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "eqTagged",
          "package": "dependent-sum",
          "signature": "tag a -\u003e tag a -\u003e a -\u003e a -\u003e Bool",
          "source": "src/Data-Dependent-Sum.html#eqTagged",
          "type": "method"
        },
        "index": {
          "description": "Given two values of type tag for which gcompare returns GEQ return the function for the type",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "eqTagged",
          "normalized": "a b-\u003ea b-\u003eb-\u003eb-\u003eBool",
          "package": "dependent-sum",
          "partial": "Tagged",
          "signature": "tag a-\u003etag a-\u003ea-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:eqTagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Sum",
          "name": "readTaggedPrec",
          "package": "dependent-sum",
          "signature": "tag a -\u003e Int -\u003e ReadS a",
          "source": "src/Data-Dependent-Sum.html#readTaggedPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "readTaggedPrec",
          "normalized": "a b-\u003eInt-\u003eReadS b",
          "package": "dependent-sum",
          "partial": "Tagged Prec",
          "signature": "tag a-\u003eInt-\u003eReadS a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:readTaggedPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a value of type \u003ccode\u003etag a\u003c/code\u003e, return the \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e function for \n the type parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Sum",
          "name": "showTaggedPrec",
          "package": "dependent-sum",
          "signature": "tag a -\u003e Int -\u003e a -\u003e ShowS",
          "source": "src/Data-Dependent-Sum.html#showTaggedPrec",
          "type": "method"
        },
        "index": {
          "description": "Given value of type tag return the showsPrec function for the type parameter",
          "hierarchy": "Data Dependent Sum",
          "module": "Data.Dependent.Sum",
          "name": "showTaggedPrec",
          "normalized": "a b-\u003eInt-\u003eb-\u003eShowS",
          "package": "dependent-sum",
          "partial": "Tagged Prec",
          "signature": "tag a-\u003eInt-\u003ea-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-Dependent-Sum.html#v:showTaggedPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "Compare",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Compare.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "Compare",
          "package": "dependent-sum",
          "partial": "Compare",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GADT witnessing equality of two types.  Its only inhabitant is \u003ccode\u003e\u003ca\u003eRefl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": ":=",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Compare.html#%3A%3D",
          "type": "data"
        },
        "index": {
          "description": "GADT witnessing equality of two types Its only inhabitant is Refl",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": ":=",
          "package": "dependent-sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for orderable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (GEQ).\n |Type class for comparable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (\u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "GCompare",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Compare.html#GCompare",
          "type": "class"
        },
        "index": {
          "description": "Type class for orderable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ Type class for comparable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GCompare",
          "package": "dependent-sum",
          "partial": "GCompare",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for type-contexts which contain enough information\n to (at least in some cases) decide the equality of types \n occurring within them.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "GEq",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Compare.html#GEq",
          "type": "class"
        },
        "index": {
          "description": "class for type-contexts which contain enough information to at least in some cases decide the equality of types occurring within them",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GEq",
          "package": "dependent-sum",
          "partial": "GEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for the result of comparing GADT constructors; the type parameters\n of the GADT values being compared are included so that in the case where \n they are equal their parameter types can be unified.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "GOrdering",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Compare.html#GOrdering",
          "type": "data"
        },
        "index": {
          "description": "type for the result of comparing GADT constructors the type parameters of the GADT values being compared are included so that in the case where they are equal their parameter types can be unified",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GOrdering",
          "package": "dependent-sum",
          "partial": "GOrdering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#t:GOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "GEQ",
          "package": "dependent-sum",
          "signature": "GOrdering t t",
          "source": "src/Data-GADT-Compare.html#GOrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GEQ",
          "package": "dependent-sum",
          "partial": "GEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "GGT",
          "package": "dependent-sum",
          "signature": "GOrdering a b",
          "source": "src/Data-GADT-Compare.html#GOrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GGT",
          "package": "dependent-sum",
          "partial": "GGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "GLT",
          "package": "dependent-sum",
          "signature": "GOrdering a b",
          "source": "src/Data-GADT-Compare.html#GOrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "GLT",
          "package": "dependent-sum",
          "partial": "GLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:GLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "Refl",
          "package": "dependent-sum",
          "signature": "a := a",
          "source": "src/Data-GADT-Compare.html#%3A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "Refl",
          "package": "dependent-sum",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e instance, this function makes a suitable default \n implementation of '(==)'.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "defaultEq",
          "package": "dependent-sum",
          "signature": "f a -\u003e f b -\u003e Bool",
          "source": "src/Data-GADT-Compare.html#defaultEq",
          "type": "function"
        },
        "index": {
          "description": "If has GEq instance this function makes suitable default implementation of",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "defaultEq",
          "normalized": "a b-\u003ea c-\u003eBool",
          "package": "dependent-sum",
          "partial": "Eq",
          "signature": "f a-\u003ef b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:defaultEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e instance, this function makes a suitable default \n implementation of '(/=)'.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "defaultNeq",
          "package": "dependent-sum",
          "signature": "f a -\u003e f b -\u003e Bool",
          "source": "src/Data-GADT-Compare.html#defaultNeq",
          "type": "function"
        },
        "index": {
          "description": "If has GEq instance this function makes suitable default implementation of",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "defaultNeq",
          "normalized": "a b-\u003ea c-\u003eBool",
          "package": "dependent-sum",
          "partial": "Neq",
          "signature": "f a-\u003ef b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:defaultNeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Compare",
          "name": "gcompare",
          "package": "dependent-sum",
          "signature": "f a -\u003e f b -\u003e GOrdering a b",
          "source": "src/Data-GADT-Compare.html#gcompare",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "gcompare",
          "normalized": "a b-\u003ea c-\u003eGOrdering b c",
          "package": "dependent-sum",
          "signature": "f a-\u003ef b-\u003eGOrdering a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:gcompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a witness of type-equality, if one exists.\n\u003c/p\u003e\u003cp\u003eA handy idiom for using this would be to pattern-bind in the Maybe monad, eg.:\n\u003c/p\u003e\u003cpre\u003e extract :: GEq tag =\u003e tag a -\u003e DSum tag -\u003e Maybe a\n extract t1 (t2 :=\u003e x) = do\n     Refl \u003c- geq t1 t2\n     return x\n\u003c/pre\u003e\u003cp\u003eOr in a list comprehension:\n\u003c/p\u003e\u003cpre\u003e extractMany :: GEq tag =\u003e tag a -\u003e [DSum tag] -\u003e [a]\n extractMany t1 things = [ x | (t2 :=\u003e x) \u003c- things, Refl \u003c- maybeToList (geq t1 t2)]\n\u003c/pre\u003e\u003cp\u003e(Making use of the \u003ccode\u003eDSum\u003c/code\u003e type from \u003ca\u003eData.Dependent.Sum\u003c/a\u003e in both examples)\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "geq",
          "package": "dependent-sum",
          "signature": "f a -\u003e f b -\u003e Maybe (a := b)",
          "source": "src/Data-GADT-Compare.html#geq",
          "type": "method"
        },
        "index": {
          "description": "Produce witness of type-equality if one exists handy idiom for using this would be to pattern-bind in the Maybe monad eg extract GEq tag tag DSum tag Maybe extract t1 t2 do Refl geq t1 t2 return Or in list comprehension extractMany GEq tag tag DSum tag extractMany t1 things t2 things Refl maybeToList geq t1 t2 Making use of the DSum type from Data.Dependent.Sum in both examples",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "geq",
          "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
          "package": "dependent-sum",
          "signature": "f a-\u003ef b-\u003eMaybe(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO: Think of a better name\n\u003c/p\u003e\u003cp\u003eThis operation forgets the phantom types of a \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.GADT.Compare",
          "name": "weakenOrdering",
          "package": "dependent-sum",
          "signature": "GOrdering a b -\u003e Ordering",
          "source": "src/Data-GADT-Compare.html#weakenOrdering",
          "type": "function"
        },
        "index": {
          "description": "TODO Think of better name This operation forgets the phantom types of GOrdering value",
          "hierarchy": "Data GADT Compare",
          "module": "Data.GADT.Compare",
          "name": "weakenOrdering",
          "normalized": "GOrdering a b-\u003eOrdering",
          "package": "dependent-sum",
          "partial": "Ordering",
          "signature": "GOrdering a b-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Compare.html#v:weakenOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "Show",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Show.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "Show",
          "package": "dependent-sum",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "GRead",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Show.html#GRead",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "GRead",
          "package": "dependent-sum",
          "partial": "GRead",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "GReadS",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Show.html#GReadS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "GReadS",
          "package": "dependent-sum",
          "partial": "GRead",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e-like class for 1-type-parameter GADTs\n\u003c/p\u003e",
          "module": "Data.GADT.Show",
          "name": "GShow",
          "package": "dependent-sum",
          "source": "src/Data-GADT-Show.html#GShow",
          "type": "class"
        },
        "index": {
          "description": "Show like class for type-parameter GADTs",
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "GShow",
          "package": "dependent-sum",
          "partial": "GShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#t:GShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "gread",
          "package": "dependent-sum",
          "signature": "String -\u003e (forall a.  t a -\u003e b) -\u003e b",
          "source": "src/Data-GADT-Show.html#gread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "gread",
          "normalized": "String-\u003e(a b c d-\u003ee)-\u003ee",
          "package": "dependent-sum",
          "signature": "String-\u003e(forall a. t a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "greads",
          "package": "dependent-sum",
          "signature": "GReadS t",
          "source": "src/Data-GADT-Show.html#greads",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "greads",
          "package": "dependent-sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:greads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "greadsPrec",
          "package": "dependent-sum",
          "signature": "Int -\u003e GReadS t",
          "source": "src/Data-GADT-Show.html#greadsPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "greadsPrec",
          "normalized": "Int-\u003eGReadS a",
          "package": "dependent-sum",
          "partial": "Prec",
          "signature": "Int-\u003eGReadS t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:greadsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "gshow",
          "package": "dependent-sum",
          "signature": "t a -\u003e String",
          "source": "src/Data-GADT-Show.html#gshow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "gshow",
          "normalized": "a b-\u003eString",
          "package": "dependent-sum",
          "signature": "t a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "gshows",
          "package": "dependent-sum",
          "signature": "t a -\u003e ShowS",
          "source": "src/Data-GADT-Show.html#gshows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "gshows",
          "normalized": "a b-\u003eShowS",
          "package": "dependent-sum",
          "signature": "t a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Show",
          "name": "gshowsPrec",
          "package": "dependent-sum",
          "signature": "Int -\u003e t a -\u003e ShowS",
          "source": "src/Data-GADT-Show.html#gshowsPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data GADT Show",
          "module": "Data.GADT.Show",
          "name": "gshowsPrec",
          "normalized": "Int-\u003ea b-\u003eShowS",
          "package": "dependent-sum",
          "partial": "Prec",
          "signature": "Int-\u003et a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-sum/docs/Data-GADT-Show.html#v:gshowsPrec"
      }
    }
  ]
]