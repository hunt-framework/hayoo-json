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
        "word": "monoid-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonoid and semigroup actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Action",
          "name": "Action",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Action.html",
          "type": "module"
        },
        "index": {
          "description": "Monoid and semigroup actions",
          "hierarchy": "Data Monoid Action",
          "module": "Data.Monoid.Action",
          "name": "Action",
          "package": "monoid-extras",
          "partial": "Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Action.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for monoid (and semigroup) actions, where monoidal\n   values of type \u003ccode\u003em\u003c/code\u003e \"act\" on values of another type \u003ccode\u003es\u003c/code\u003e.\n   Instances are required to satisfy the laws\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eact mempty = id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eact (m1 `\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e` m2) = act m1 . act m2\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSemigroup instances are required to satisfy the second law but with\n   (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e) instead of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.  Additionally, if the type \u003ccode\u003es\u003c/code\u003e has\n   any algebraic structure, \u003ccode\u003eact m\u003c/code\u003e should be a homomorphism.  For\n   example, if \u003ccode\u003es\u003c/code\u003e is also a monoid we should have \u003ccode\u003eact m mempty =\n   mempty\u003c/code\u003e and \u003ccode\u003eact m (s1 `\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e` s2) = (act m s1) `\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e`\n   (act m s2)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy default, \u003ccode\u003eact = const id\u003c/code\u003e, so for a type \u003ccode\u003eM\u003c/code\u003e which should have\n   no action on anything, it suffices to write\n\u003c/p\u003e\u003cpre\u003e instance Action M s\n\u003c/pre\u003e\u003cp\u003ewith no method implementations.\n\u003c/p\u003e\u003cp\u003eIt is a bit awkward dealing with instances of \u003ccode\u003eAction\u003c/code\u003e, since it\n   is a multi-parameter type class but we can't add any functional\n   dependencies---the relationship between monoids and the types on\n   which they act is truly many-to-many.  In practice, this library\n   has chosen to have instance selection for \u003ccode\u003eAction\u003c/code\u003e driven by the\n   \u003cem\u003efirst\u003c/em\u003e type parameter.  That is, you should never write an\n   instance of the form \u003ccode\u003eAction m SomeType\u003c/code\u003e since it will overlap\n   with instances of the form \u003ccode\u003eAction SomeMonoid t\u003c/code\u003e.  Newtype\n   wrappers can be used to (awkwardly) get around this.\n\u003c/p\u003e",
          "module": "Data.Monoid.Action",
          "name": "Action",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Action.html#Action",
          "type": "class"
        },
        "index": {
          "description": "Type class for monoid and semigroup actions where monoidal values of type act on values of another type Instances are required to satisfy the laws act mempty id act m1 mappend m2 act m1 act m2 Semigroup instances are required to satisfy the second law but with instead of mappend Additionally if the type has any algebraic structure act should be homomorphism For example if is also monoid we should have act mempty mempty and act s1 mappend s2 act s1 mappend act s2 By default act const id so for type which should have no action on anything it suffices to write instance Action with no method implementations It is bit awkward dealing with instances of Action since it is multi-parameter type class but we can add any functional dependencies---the relationship between monoids and the types on which they act is truly many-to-many In practice this library has chosen to have instance selection for Action driven by the first type parameter That is you should never write an instance of the form Action SomeType since it will overlap with instances of the form Action SomeMonoid Newtype wrappers can be used to awkwardly get around this",
          "hierarchy": "Data Monoid Action",
          "module": "Data.Monoid.Action",
          "name": "Action",
          "package": "monoid-extras",
          "partial": "Action",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Action.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value of type \u003ccode\u003em\u003c/code\u003e to an action on \u003ccode\u003es\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Monoid.Action",
          "name": "act",
          "package": "monoid-extras",
          "signature": "m -\u003e s -\u003e s",
          "source": "src/Data-Monoid-Action.html#act",
          "type": "method"
        },
        "index": {
          "description": "Convert value of type to an action on values",
          "hierarchy": "Data Monoid Action",
          "module": "Data.Monoid.Action",
          "name": "act",
          "normalized": "a-\u003eb-\u003eb",
          "package": "monoid-extras",
          "signature": "m-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Action.html#v:act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe coproduct of two monoids.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "Coproduct",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Coproduct.html",
          "type": "module"
        },
        "index": {
          "description": "The coproduct of two monoids",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "Coproduct",
          "package": "monoid-extras",
          "partial": "Coproduct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003em :+: n\u003c/code\u003e is the coproduct of monoids \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e.  Values of\n   type \u003ccode\u003em :+: n\u003c/code\u003e consist of alternating lists of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n   values.  The empty list is the identity, and composition is list\n   concatenation, with appropriate combining of adjacent elements\n   when possible.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": ":+:",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Coproduct.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "is the coproduct of monoids and Values of type consist of alternating lists of and values The empty list is the identity and composition is list concatenation with appropriate combining of adjacent elements when possible",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": ":+:",
          "package": "monoid-extras",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjection from the left monoid into a coproduct.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "inL",
          "package": "monoid-extras",
          "signature": "m -\u003e m :+: n",
          "source": "src/Data-Monoid-Coproduct.html#inL",
          "type": "function"
        },
        "index": {
          "description": "Injection from the left monoid into coproduct",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "inL",
          "normalized": "a-\u003ea b",
          "package": "monoid-extras",
          "signature": "m-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:inL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjection from the right monoid into a coproduct.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "inR",
          "package": "monoid-extras",
          "signature": "n -\u003e m :+: n",
          "source": "src/Data-Monoid-Coproduct.html#inR",
          "type": "function"
        },
        "index": {
          "description": "Injection from the right monoid into coproduct",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "inR",
          "normalized": "a-\u003eb a",
          "package": "monoid-extras",
          "signature": "n-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:inR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekillL\u003c/code\u003e takes a value in a coproduct monoid and sends all the\n   values from the left monoid to the identity.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "killL",
          "package": "monoid-extras",
          "signature": "(m :+: n) -\u003e n",
          "source": "src/Data-Monoid-Coproduct.html#killL",
          "type": "function"
        },
        "index": {
          "description": "killL takes value in coproduct monoid and sends all the values from the left monoid to the identity",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "killL",
          "normalized": "(a b)-\u003eb",
          "package": "monoid-extras",
          "signature": "(m n)-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:killL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekillR\u003c/code\u003e takes a value in a coproduct monoid and sends all the\n   values from the right monoid to the identity.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "killR",
          "package": "monoid-extras",
          "signature": "(m :+: n) -\u003e m",
          "source": "src/Data-Monoid-Coproduct.html#killR",
          "type": "function"
        },
        "index": {
          "description": "killR takes value in coproduct monoid and sends all the values from the right monoid to the identity",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "killR",
          "normalized": "(a b)-\u003ea",
          "package": "monoid-extras",
          "signature": "(m n)-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:killR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a value from the left monoid.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "mappendL",
          "package": "monoid-extras",
          "signature": "m -\u003e (m :+: n) -\u003e m :+: n",
          "source": "src/Data-Monoid-Coproduct.html#mappendL",
          "type": "function"
        },
        "index": {
          "description": "Prepend value from the left monoid",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "mappendL",
          "normalized": "a-\u003e(a b)-\u003ea b",
          "package": "monoid-extras",
          "signature": "m-\u003e(m n)-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:mappendL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a value from the right monoid.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "mappendR",
          "package": "monoid-extras",
          "signature": "n -\u003e (m :+: n) -\u003e m :+: n",
          "source": "src/Data-Monoid-Coproduct.html#mappendR",
          "type": "function"
        },
        "index": {
          "description": "Prepend value from the right monoid",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "mappendR",
          "normalized": "a-\u003e(b a)-\u003eb a",
          "package": "monoid-extras",
          "signature": "n-\u003e(m n)-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:mappendR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a value from a coproduct monoid where the left monoid has an\n   action on the right, and \"untangle\" it into a pair of values.  In\n   particular,\n\u003c/p\u003e\u003cpre\u003e m1 \u003c\u003e n1 \u003c\u003e m2 \u003c\u003e n2 \u003c\u003e m3 \u003c\u003e n3 \u003c\u003e ...\n\u003c/pre\u003e\u003cp\u003eis sent to\n\u003c/p\u003e\u003cpre\u003e (m1 \u003c\u003e m2 \u003c\u003e m3 \u003c\u003e ..., (act m1 n1) \u003c\u003e (act (m1 \u003c\u003e m2) n2) \u003c\u003e (act (m1 \u003c\u003e m2 \u003c\u003e m3) n3) \u003c\u003e ...)\n\u003c/pre\u003e\u003cp\u003eThat is, before combining \u003ccode\u003en\u003c/code\u003e values, every \u003ccode\u003en\u003c/code\u003e value is acted on\n   by all the \u003ccode\u003em\u003c/code\u003e values to its left.\n\u003c/p\u003e",
          "module": "Data.Monoid.Coproduct",
          "name": "untangle",
          "package": "monoid-extras",
          "signature": "(m :+: n) -\u003e (m, n)",
          "source": "src/Data-Monoid-Coproduct.html#untangle",
          "type": "function"
        },
        "index": {
          "description": "Take value from coproduct monoid where the left monoid has an action on the right and untangle it into pair of values In particular m1 n1 m2 n2 m3 n3 is sent to m1 m2 m3 act m1 n1 act m1 m2 n2 act m1 m2 m3 n3 That is before combining values every value is acted on by all the values to its left",
          "hierarchy": "Data Monoid Coproduct",
          "module": "Data.Monoid.Coproduct",
          "name": "untangle",
          "normalized": "(a b)-\u003e(a,b)",
          "package": "monoid-extras",
          "signature": "(m n)-\u003e(m,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Coproduct.html#v:untangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eCut\u003c/code\u003e monoid transformer introduces \"cut points\" such that\n all values between any two cut points are thrown away.  That is,\n\u003c/p\u003e\u003cpre\u003e a b c | d e | f g h i | j k  ==  a b c | j k\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Cut",
          "name": "Cut",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Cut.html",
          "type": "module"
        },
        "index": {
          "description": "The Cut monoid transformer introduces cut points such that all values between any two cut points are thrown away That is",
          "hierarchy": "Data Monoid Cut",
          "module": "Data.Monoid.Cut",
          "name": "Cut",
          "package": "monoid-extras",
          "partial": "Cut",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Cut.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eCut m\u003c/code\u003e is either a single \u003ccode\u003em\u003c/code\u003e, or a pair of\n   \u003ccode\u003em\u003c/code\u003e's separated by a divider.  The divider represents a \"cut\n   point\".\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eCut\u003c/code\u003e is similar to \u003ca\u003eData.Monoid.Split\u003c/a\u003e, but split keeps only the\n   rightmost divider and accumulates all values, whereas cut always\n   keeps the leftmost and rightmost divider, coalescing them into\n   one and throwing away all the information in between.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eSplit\u003c/code\u003e uses the asymmetric constructor \u003ccode\u003e:|\u003c/code\u003e, and \u003ccode\u003eCut\u003c/code\u003e the\n   symmetric constructor \u003ccode\u003e:||:\u003c/code\u003e, to emphasize the inherent asymmetry\n   of \u003ccode\u003eSplit\u003c/code\u003e and symmetry of \u003ccode\u003eCut\u003c/code\u003e.  \u003ccode\u003eSplit\u003c/code\u003e keeps only the\n   rightmost split and combines everything on the left; \u003ccode\u003eCut\u003c/code\u003e keeps\n   the outermost splits and throws away everything in between.\n\u003c/p\u003e",
          "module": "Data.Monoid.Cut",
          "name": "Cut",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Cut.html#Cut",
          "type": "data"
        },
        "index": {
          "description": "value of type Cut is either single or pair of separated by divider The divider represents cut point Cut is similar to Data.Monoid.Split but split keeps only the rightmost divider and accumulates all values whereas cut always keeps the leftmost and rightmost divider coalescing them into one and throwing away all the information in between Split uses the asymmetric constructor and Cut the symmetric constructor to emphasize the inherent asymmetry of Split and symmetry of Cut Split keeps only the rightmost split and combines everything on the left Cut keeps the outermost splits and throws away everything in between",
          "hierarchy": "Data Monoid Cut",
          "module": "Data.Monoid.Cut",
          "name": "Cut",
          "package": "monoid-extras",
          "partial": "Cut",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Cut.html#t:Cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Cut",
          "name": ":||:",
          "package": "monoid-extras",
          "signature": "m :||: m",
          "source": "src/Data-Monoid-Cut.html#Cut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Cut",
          "module": "Data.Monoid.Cut",
          "name": ":||:",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Cut.html#v::-124--124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Cut",
          "name": "Uncut",
          "package": "monoid-extras",
          "signature": "Uncut m",
          "source": "src/Data-Monoid-Cut.html#Cut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Cut",
          "module": "Data.Monoid.Cut",
          "name": "Uncut",
          "package": "monoid-extras",
          "partial": "Uncut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Cut.html#v:Uncut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient name for \u003ccode\u003emempty :||: mempty\u003c/code\u003e, so composing with\n \u003ccode\u003ecut\u003c/code\u003e introduces a cut point.  For example, \u003ccode\u003eUncut a \u003c\u003e cut \u003c\u003e\n Uncut b == a :||: b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monoid.Cut",
          "name": "cut",
          "package": "monoid-extras",
          "signature": "Cut m",
          "source": "src/Data-Monoid-Cut.html#cut",
          "type": "function"
        },
        "index": {
          "description": "convenient name for mempty mempty so composing with cut introduces cut point For example Uncut cut Uncut",
          "hierarchy": "Data Monoid Cut",
          "module": "Data.Monoid.Cut",
          "name": "cut",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Cut.html#v:cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monoid transformer that allows deleting information from a\n concatenation of monoidal values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Deletable.html",
          "type": "module"
        },
        "index": {
          "description": "monoid transformer that allows deleting information from concatenation of monoidal values",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "partial": "Deletable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003eDeletable m\u003c/code\u003e (intuitively speaking)\n   adds two distinguished new elements \u003ccode\u003e[\u003c/code\u003e and \u003ccode\u003e]\u003c/code\u003e, such that an\n   occurrence of [ \"deletes\" everything from it to the next ]. For\n   example,\n\u003c/p\u003e\u003cpre\u003e abc[def]gh == abcgh\n\u003c/pre\u003e\u003cp\u003eThis is all you really need to know to \u003cem\u003euse\u003c/em\u003e \u003ccode\u003eDeletable m\u003c/code\u003e\n   values; to understand the actual implementation, read on.\n\u003c/p\u003e\u003cp\u003eTo properly deal with nesting and associativity we need to be\n   able to assign meanings to things like \u003ccode\u003e[[\u003c/code\u003e, \u003ccode\u003e][\u003c/code\u003e, and so on. (We\n   cannot just define, say, \u003ccode\u003e[[ == [\u003c/code\u003e, since then \u003ccode\u003e([[)] == [] ==\n   id\u003c/code\u003e but \u003ccode\u003e[([]) == [id == [\u003c/code\u003e.)  Formally, elements of \u003ccode\u003eDeletable\n   m\u003c/code\u003e are triples of the form (r, m, l) representing words \u003ccode\u003e]^r m\n   [^l\u003c/code\u003e.  When combining two triples (r1, m1, l1) and (r2, m2, l2)\n   there are three cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If l1 == r2 then the [s from the left and ]s from the right\n     exactly cancel, and we are left with (r1, m1 \u003c\u003e m2, l2).\n\u003c/li\u003e\u003cli\u003e If l1 \u003c r2 then all of the [s cancel with some of the ]s, but\n     m1 is still inside the remaining ]s and is deleted, yielding (r1\n     + r2 - l1, m2, l2)\n\u003c/li\u003e\u003cli\u003e The remaining case is symmetric with the second.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Deletable.html#Deletable",
          "type": "data"
        },
        "index": {
          "description": "If is Monoid then Deletable intuitively speaking adds two distinguished new elements and such that an occurrence of deletes everything from it to the next For example abc def gh abcgh This is all you really need to know to use Deletable values to understand the actual implementation read on To properly deal with nesting and associativity we need to be able to assign meanings to things like and so on We cannot just define say since then id but id Formally elements of Deletable are triples of the form representing words When combining two triples r1 m1 l1 and r2 m2 l2 there are three cases If l1 r2 then the from the left and from the right exactly cancel and we are left with r1 m1 m2 l2 If l1 r2 then all of the cancel with some of the but m1 is still inside the remaining and is deleted yielding r1 r2 l1 m2 l2 The remaining case is symmetric with the second",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "partial": "Deletable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#t:Deletable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "signature": "Deletable Int m Int",
          "source": "src/Data-Monoid-Deletable.html#Deletable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "Deletable",
          "package": "monoid-extras",
          "partial": "Deletable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#v:Deletable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"left bracket\", which causes everything between it and the\n   next right bracket to be deleted.\n\u003c/p\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "deleteL",
          "package": "monoid-extras",
          "signature": "Deletable m",
          "source": "src/Data-Monoid-Deletable.html#deleteL",
          "type": "function"
        },
        "index": {
          "description": "left bracket which causes everything between it and the next right bracket to be deleted",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "deleteL",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#v:deleteL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"right bracket\", denoting the end of the section that should\n   be deleted.\n\u003c/p\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "deleteR",
          "package": "monoid-extras",
          "signature": "Deletable m",
          "source": "src/Data-Monoid-Deletable.html#deleteR",
          "type": "function"
        },
        "index": {
          "description": "right bracket denoting the end of the section that should be deleted",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "deleteR",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#v:deleteR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into a \u003ccode\u003e\u003ca\u003eDeletable\u003c/a\u003e\u003c/code\u003e wrapper.  Satisfies the\n   property\n\u003c/p\u003e\u003cpre\u003e unDelete . toDeletable === id\n\u003c/pre\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "toDeletable",
          "package": "monoid-extras",
          "signature": "m -\u003e Deletable m",
          "source": "src/Data-Monoid-Deletable.html#toDeletable",
          "type": "function"
        },
        "index": {
          "description": "Inject value into Deletable wrapper Satisfies the property unDelete toDeletable id",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "toDeletable",
          "normalized": "a-\u003eDeletable a",
          "package": "monoid-extras",
          "partial": "Deletable",
          "signature": "m-\u003eDeletable m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#v:toDeletable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject the wrapped value out of a \u003ccode\u003e\u003ca\u003eDeletable\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Monoid.Deletable",
          "name": "unDelete",
          "package": "monoid-extras",
          "signature": "Deletable m -\u003e m",
          "source": "src/Data-Monoid-Deletable.html#unDelete",
          "type": "function"
        },
        "index": {
          "description": "Project the wrapped value out of Deletable value",
          "hierarchy": "Data Monoid Deletable",
          "module": "Data.Monoid.Deletable",
          "name": "unDelete",
          "normalized": "Deletable a-\u003ea",
          "package": "monoid-extras",
          "partial": "Delete",
          "signature": "Deletable m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Deletable.html#v:unDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe monoid of endomorphisms over any \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Endomorphism.html",
          "type": "module"
        },
        "index": {
          "description": "The monoid of endomorphisms over any Category",
          "hierarchy": "Data Monoid Endomorphism",
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "partial": "Endomorphism",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Endomorphism.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEndomorphism\u003c/a\u003e\u003c/code\u003e in a given \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e is a morphism from some\n   object to itself.  The set of endomorphisms for a particular\n   object form a monoid, with composition as the combining operation\n   and the identity morphism as the identity element.\n\u003c/p\u003e",
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Endomorphism.html#Endomorphism",
          "type": "newtype"
        },
        "index": {
          "description": "An Endomorphism in given Category is morphism from some object to itself The set of endomorphisms for particular object form monoid with composition as the combining operation and the identity morphism as the identity element",
          "hierarchy": "Data Monoid Endomorphism",
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "partial": "Endomorphism",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Endomorphism.html#t:Endomorphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "signature": "Endomorphism",
          "source": "src/Data-Monoid-Endomorphism.html#Endomorphism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Endomorphism",
          "module": "Data.Monoid.Endomorphism",
          "name": "Endomorphism",
          "package": "monoid-extras",
          "partial": "Endomorphism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Endomorphism.html#v:Endomorphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Endomorphism",
          "name": "getEndomorphism",
          "package": "monoid-extras",
          "signature": "k a a",
          "source": "src/Data-Monoid-Endomorphism.html#Endomorphism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Endomorphism",
          "module": "Data.Monoid.Endomorphism",
          "name": "getEndomorphism",
          "package": "monoid-extras",
          "partial": "Endomorphism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Endomorphism.html#v:getEndomorphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake semigroup under \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e into monoids by adjoining an\n element corresponding to infinity (positive or negative,\n respectively). These types are similar to \u003ccode\u003eOption (Min a)\u003c/code\u003e and\n \u003ccode\u003eOption (Max a)\u003c/code\u003e respectively, except that the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance\n matches the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Inf",
          "name": "Inf",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html",
          "type": "module"
        },
        "index": {
          "description": "Make semigroup under min or max into monoids by adjoining an element corresponding to infinity positive or negative respectively These types are similar to Option Min and Option Max respectively except that the Ord instance matches the Monoid instance",
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Inf",
          "package": "monoid-extras",
          "partial": "Inf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "Inf",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html#Inf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Inf",
          "package": "monoid-extras",
          "partial": "Inf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#t:Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "Neg",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html#Neg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Neg",
          "package": "monoid-extras",
          "partial": "Neg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#t:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "NegInf",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html#NegInf",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "NegInf",
          "package": "monoid-extras",
          "partial": "Neg Inf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#t:NegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "Pos",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html#Pos",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Pos",
          "package": "monoid-extras",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "PosInf",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Inf.html#PosInf",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "PosInf",
          "package": "monoid-extras",
          "partial": "Pos Inf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#t:PosInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "Finite",
          "package": "monoid-extras",
          "signature": "Finite a",
          "source": "src/Data-Monoid-Inf.html#Inf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Finite",
          "package": "monoid-extras",
          "partial": "Finite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "Infinity",
          "package": "monoid-extras",
          "signature": "Infinity",
          "source": "src/Data-Monoid-Inf.html#Inf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "Infinity",
          "package": "monoid-extras",
          "partial": "Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:Infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "maximum",
          "package": "monoid-extras",
          "signature": "[a] -\u003e NegInf a",
          "source": "src/Data-Monoid-Inf.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "maximum",
          "normalized": "[a]-\u003eNegInf a",
          "package": "monoid-extras",
          "signature": "[a]-\u003eNegInf a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "minimum",
          "package": "monoid-extras",
          "signature": "[a] -\u003e PosInf a",
          "source": "src/Data-Monoid-Inf.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "minimum",
          "normalized": "[a]-\u003ePosInf a",
          "package": "monoid-extras",
          "signature": "[a]-\u003ePosInf a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "negFinite",
          "package": "monoid-extras",
          "signature": "a -\u003e NegInf a",
          "source": "src/Data-Monoid-Inf.html#negFinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "negFinite",
          "normalized": "a-\u003eNegInf a",
          "package": "monoid-extras",
          "partial": "Finite",
          "signature": "a-\u003eNegInf a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:negFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "negInfty",
          "package": "monoid-extras",
          "signature": "NegInf a",
          "source": "src/Data-Monoid-Inf.html#negInfty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "negInfty",
          "package": "monoid-extras",
          "partial": "Infty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:negInfty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "posFinite",
          "package": "monoid-extras",
          "signature": "a -\u003e PosInf a",
          "source": "src/Data-Monoid-Inf.html#posFinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "posFinite",
          "normalized": "a-\u003ePosInf a",
          "package": "monoid-extras",
          "partial": "Finite",
          "signature": "a-\u003ePosInf a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:posFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Inf",
          "name": "posInfty",
          "package": "monoid-extras",
          "signature": "PosInf a",
          "source": "src/Data-Monoid-Inf.html#posInfty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Inf",
          "module": "Data.Monoid.Inf",
          "name": "posInfty",
          "package": "monoid-extras",
          "partial": "Infty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Inf.html#v:posInfty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHeterogeneous lists of monoids.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.MList",
          "name": "MList",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-MList.html",
          "type": "module"
        },
        "index": {
          "description": "Heterogeneous lists of monoids",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "MList",
          "package": "monoid-extras",
          "partial": "MList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relation \u003ccode\u003el :\u003e: a\u003c/code\u003e holds when \u003ccode\u003ea\u003c/code\u003e is the type of an element\n   in \u003ccode\u003el\u003c/code\u003e.  For example,  \u003ccode\u003e(Char ::: Int ::: Bool ::: Nil) :\u003e: Int\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": ":\u003e:",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-MList.html#%3A%3E%3A",
          "type": "class"
        },
        "index": {
          "description": "The relation holds when is the type of an element in For example Char Int Bool Nil Int",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": ":\u003e:",
          "package": "monoid-extras",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#t::-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.MList",
          "name": ":::",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-MList.html#%3A%3A%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": ":::",
          "package": "monoid-extras",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#t::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for heterogeneous monoidal lists, with a single method\n   allowing construction of an empty list.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "MList",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-MList.html#MList",
          "type": "class"
        },
        "index": {
          "description": "Type class for heterogeneous monoidal lists with single method allowing construction of an empty list",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "MList",
          "package": "monoid-extras",
          "partial": "MList",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#t:MList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSM\u003c/code\u003e, an abbreviation for \"single monoid\" (as opposed to a\n   heterogeneous list of monoids), is only used internally to help\n   guide instance selection when defining the action of\n   heterogeneous monoidal lists on each other.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "SM",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-MList.html#SM",
          "type": "newtype"
        },
        "index": {
          "description": "SM an abbreviation for single monoid as opposed to heterogeneous list of monoids is only used internally to help guide instance selection when defining the action of heterogeneous monoidal lists on each other",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "SM",
          "package": "monoid-extras",
          "partial": "SM",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#t:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.MList",
          "name": "(*:)",
          "package": "monoid-extras",
          "signature": "l",
          "source": "src/Data-Monoid-MList.html#%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "(*:) *:",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.MList",
          "name": "SM",
          "package": "monoid-extras",
          "signature": "SM m",
          "source": "src/Data-Monoid-MList.html#SM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "SM",
          "package": "monoid-extras",
          "partial": "SM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlter the value of type \u003ccode\u003ea\u003c/code\u003e by applying the given function to it.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "alt",
          "package": "monoid-extras",
          "signature": "(Option a -\u003e Option a) -\u003e l -\u003e l",
          "source": "src/Data-Monoid-MList.html#alt",
          "type": "method"
        },
        "index": {
          "description": "Alter the value of type by applying the given function to it",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "alt",
          "normalized": "(Option a-\u003eOption a)-\u003eb-\u003eb",
          "package": "monoid-extras",
          "signature": "(Option a-\u003eOption a)-\u003el-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eempty\u003c/em\u003e heterogeneous list of type \u003ccode\u003el\u003c/code\u003e. Of course, \u003ccode\u003eempty\n == \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but unlike \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eempty\u003c/code\u003e does not require\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraints on all the elements of \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "empty",
          "package": "monoid-extras",
          "signature": "l",
          "source": "src/Data-Monoid-MList.html#empty",
          "type": "method"
        },
        "index": {
          "description": "The empty heterogeneous list of type Of course empty mempty but unlike mempty empty does not require Monoid constraints on all the elements of",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "empty",
          "package": "monoid-extras",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of type \u003ccode\u003ea\u003c/code\u003e from a heterogeneous list, if there\n   is one.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "get",
          "package": "monoid-extras",
          "signature": "l -\u003e Option a",
          "source": "src/Data-Monoid-MList.html#get",
          "type": "method"
        },
        "index": {
          "description": "Get the value of type from heterogeneous list if there is one",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "get",
          "normalized": "a-\u003eOption b",
          "package": "monoid-extras",
          "signature": "l-\u003eOption a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into an otherwise empty heterogeneous list.\n\u003c/p\u003e",
          "module": "Data.Monoid.MList",
          "name": "inj",
          "package": "monoid-extras",
          "signature": "a -\u003e l",
          "source": "src/Data-Monoid-MList.html#inj",
          "type": "method"
        },
        "index": {
          "description": "Inject value into an otherwise empty heterogeneous list",
          "hierarchy": "Data Monoid MList",
          "module": "Data.Monoid.MList",
          "name": "inj",
          "normalized": "a-\u003eb",
          "package": "monoid-extras",
          "signature": "a-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-MList.html#v:inj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type for representing values with an additional bit saying\n whether the value is \"just a recommendation\" (to be used only if\n nothing better comes along) or a \"committment\" (to certainly be\n used, overriding merely recommended values), along with\n corresponding \u003ccode\u003eSemigroup\u003c/code\u003e and \u003ccode\u003eMonoid\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Recommend.html",
          "type": "module"
        },
        "index": {
          "description": "type for representing values with an additional bit saying whether the value is just recommendation to be used only if nothing better comes along or committment to certainly be used overriding merely recommended values along with corresponding Semigroup and Monoid instances",
          "hierarchy": "Data Monoid Recommend",
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "partial": "Recommend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Recommend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eRecommend a\u003c/code\u003e consists of a value of type \u003ccode\u003ea\u003c/code\u003e\n   wrapped up in one of two constructors.  The \u003ccode\u003eRecommend\u003c/code\u003e\n   constructor indicates a \"non-committal recommendation\"---that\n   is, the given value should be used if no other/better values are\n   available.  The \u003ccode\u003eCommit\u003c/code\u003e constructor indicates a\n   \"commitment\"---a value which should definitely be used,\n   overriding any \u003ccode\u003eRecommend\u003c/code\u003eed values.\n\u003c/p\u003e",
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Recommend.html#Recommend",
          "type": "data"
        },
        "index": {
          "description": "value of type Recommend consists of value of type wrapped up in one of two constructors The Recommend constructor indicates non-committal recommendation that is the given value should be used if no other better values are available The Commit constructor indicates commitment value which should definitely be used overriding any Recommend ed values",
          "hierarchy": "Data Monoid Recommend",
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "partial": "Recommend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Recommend.html#t:Recommend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Recommend",
          "name": "Commit",
          "package": "monoid-extras",
          "signature": "Commit a",
          "source": "src/Data-Monoid-Recommend.html#Recommend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Recommend",
          "module": "Data.Monoid.Recommend",
          "name": "Commit",
          "package": "monoid-extras",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Recommend.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "signature": "Recommend a",
          "source": "src/Data-Monoid-Recommend.html#Recommend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Recommend",
          "module": "Data.Monoid.Recommend",
          "name": "Recommend",
          "package": "monoid-extras",
          "partial": "Recommend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Recommend.html#v:Recommend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of type \u003ccode\u003ea\u003c/code\u003e wrapped in \u003ccode\u003eRecommend a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monoid.Recommend",
          "name": "getRecommend",
          "package": "monoid-extras",
          "signature": "Recommend a -\u003e a",
          "source": "src/Data-Monoid-Recommend.html#getRecommend",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of type wrapped in Recommend",
          "hierarchy": "Data Monoid Recommend",
          "module": "Data.Monoid.Recommend",
          "name": "getRecommend",
          "normalized": "Recommend a-\u003ea",
          "package": "monoid-extras",
          "partial": "Recommend",
          "signature": "Recommend a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Recommend.html#v:getRecommend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSometimes we want to accumulate values from some monoid, but have\n the ability to introduce a \"split\" which separates values on\n either side.  Only the rightmost split is kept.  For example,\n\u003c/p\u003e\u003cpre\u003e a b c | d e | f g h == a b c d e | f g h\n\u003c/pre\u003e\u003cp\u003eIn the diagrams graphics framework this is used when accumulating\n transformations to be applied to primitive diagrams: the \u003ccode\u003efreeze\u003c/code\u003e\n operation introduces a split, since only transformations occurring\n outside the freeze should be applied to attributes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Split",
          "name": "Split",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Split.html",
          "type": "module"
        },
        "index": {
          "description": "Sometimes we want to accumulate values from some monoid but have the ability to introduce split which separates values on either side Only the rightmost split is kept For example In the diagrams graphics framework this is used when accumulating transformations to be applied to primitive diagrams the freeze operation introduces split since only transformations occurring outside the freeze should be applied to attributes",
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": "Split",
          "package": "monoid-extras",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eSplit m\u003c/code\u003e is either a single \u003ccode\u003em\u003c/code\u003e, or a pair of\n   \u003ccode\u003em\u003c/code\u003e's separated by a divider.  Single \u003ccode\u003em\u003c/code\u003e's combine as usual;\n   single \u003ccode\u003em\u003c/code\u003e's combine with split values by combining with the\n   value on the appropriate side; when two split values meet only\n   the rightmost split is kept, with both the values from the left\n   split combining with the left-hand value of the right split.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Monoid.Cut\u003c/a\u003e is similar, but uses a different scheme for\n   composition.  \u003ccode\u003eSplit\u003c/code\u003e uses the asymmetric constructor \u003ccode\u003e:|\u003c/code\u003e, and\n   \u003ccode\u003eCut\u003c/code\u003e the symmetric constructor \u003ccode\u003e:||:\u003c/code\u003e, to emphasize the inherent\n   asymmetry of \u003ccode\u003eSplit\u003c/code\u003e and symmetry of \u003ccode\u003eCut\u003c/code\u003e.  \u003ccode\u003eSplit\u003c/code\u003e keeps only\n   the rightmost split and combines everything on the left; \u003ccode\u003eCut\u003c/code\u003e\n   keeps the outermost splits and throws away everything in between.\n\u003c/p\u003e",
          "module": "Data.Monoid.Split",
          "name": "Split",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-Split.html#Split",
          "type": "data"
        },
        "index": {
          "description": "value of type Split is either single or pair of separated by divider Single combine as usual single combine with split values by combining with the value on the appropriate side when two split values meet only the rightmost split is kept with both the values from the left split combining with the left-hand value of the right split Data.Monoid.Cut is similar but uses different scheme for composition Split uses the asymmetric constructor and Cut the symmetric constructor to emphasize the inherent asymmetry of Split and symmetry of Cut Split keeps only the rightmost split and combines everything on the left Cut keeps the outermost splits and throws away everything in between",
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": "Split",
          "package": "monoid-extras",
          "partial": "Split",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#t:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Split",
          "name": ":|",
          "package": "monoid-extras",
          "signature": "m :| m",
          "source": "src/Data-Monoid-Split.html#Split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": ":|",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#v::-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Split",
          "name": "M",
          "package": "monoid-extras",
          "signature": "M m",
          "source": "src/Data-Monoid-Split.html#Split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": "M",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient name for \u003ccode\u003emempty :| mempty\u003c/code\u003e, so \u003ccode\u003eM a \u003c\u003e split \u003c\u003e\n   M b == a :| b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monoid.Split",
          "name": "split",
          "package": "monoid-extras",
          "signature": "Split m",
          "source": "src/Data-Monoid-Split.html#split",
          "type": "function"
        },
        "index": {
          "description": "convenient name for mempty mempty so split",
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": "split",
          "package": "monoid-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Unsplit\" a split monoid value, combining the two values into\n   one (or returning the single value if there is no split).\n\u003c/p\u003e",
          "module": "Data.Monoid.Split",
          "name": "unsplit",
          "package": "monoid-extras",
          "signature": "Split m -\u003e m",
          "source": "src/Data-Monoid-Split.html#unsplit",
          "type": "function"
        },
        "index": {
          "description": "Unsplit split monoid value combining the two values into one or returning the single value if there is no split",
          "hierarchy": "Data Monoid Split",
          "module": "Data.Monoid.Split",
          "name": "unsplit",
          "normalized": "Split a-\u003ea",
          "package": "monoid-extras",
          "signature": "Split m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-Split.html#v:unsplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience alias for the combination of \u003ccode\u003eMonoid\u003c/code\u003e and \u003ccode\u003eSemigroup\u003c/code\u003e constraints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.WithSemigroup",
          "name": "WithSemigroup",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-WithSemigroup.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience alias for the combination of Monoid and Semigroup constraints",
          "hierarchy": "Data Monoid WithSemigroup",
          "module": "Data.Monoid.WithSemigroup",
          "name": "WithSemigroup",
          "package": "monoid-extras",
          "partial": "With Semigroup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-WithSemigroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eMonoid'\u003c/code\u003e class is a synonym for things which are instances\n   of both \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.  Ideally, the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e class\n   itself will eventually include a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e superclass and we\n   can get rid of this.\n\u003c/p\u003e",
          "module": "Data.Monoid.WithSemigroup",
          "name": "Monoid'",
          "package": "monoid-extras",
          "source": "src/Data-Monoid-WithSemigroup.html#Monoid%27",
          "type": "class"
        },
        "index": {
          "description": "The Monoid class is synonym for things which are instances of both Semigroup and Monoid Ideally the Monoid class itself will eventually include Semigroup superclass and we can get rid of this",
          "hierarchy": "Data Monoid WithSemigroup",
          "module": "Data.Monoid.WithSemigroup",
          "name": "Monoid'",
          "package": "monoid-extras",
          "partial": "Monoid'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoid-extras/docs/Data-Monoid-WithSemigroup.html#t:Monoid-39-"
      }
    }
  ]
]