[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e =\u003e \u003ccode\u003e\u003ca\u003eReductiveMonoid\u003c/a\u003e\u003c/code\u003e =\u003e (\u003ccode\u003e\u003ca\u003eCancellativeMonoid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eGCDMonoid\u003c/a\u003e\u003c/code\u003e) class hierarchy. \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eReductiveMonoid\u003c/a\u003e\u003c/code\u003e class introduces operation \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e which is the inverse of \u003ccode\u003e\u003c\u003e\u003c/code\u003e. For the \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e monoid, this\n operation is subtraction; for \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e it is division and for \u003ccode\u003eSet\u003c/code\u003e it's the set difference. A \u003ccode\u003e\u003ca\u003eReductiveMonoid\u003c/a\u003e\u003c/code\u003e is\n not a full group because \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e may return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCancellativeMonoid\u003c/a\u003e\u003c/code\u003e subclass does not add any operation but it provides the additional guarantee that \u003ccode\u003e\u003c\u003e\u003c/code\u003e can\n always be undone with \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e. Thus \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eCancellativeMonoid\u003c/a\u003e\u003c/code\u003e but \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e is not because \u003ccode\u003e(0*n)/0\u003c/code\u003e is not\n defined.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGCDMonoid\u003c/a\u003e\u003c/code\u003e subclass adds the \u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e operation which takes two monoidal arguments and finds their greatest common\n divisor, or (more generally) the greatest monoid that can be extracted with the \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e operation from both.\n\u003c/p\u003e\u003cp\u003eAll monoid subclasses listed above are for Abelian, \u003cem\u003ei.e.\u003c/em\u003e, commutative or symmetric monoids. Since most practical\n monoids in Haskell are not Abelian, each of the these classes has two symmetric superclasses:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeftReductiveMonoid\u003c/a\u003e\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeftCancellativeMonoid\u003c/a\u003e\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeftGCDMonoid\u003c/a\u003e\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRightReductiveMonoid\u003c/a\u003e\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRightCancellativeMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRightGCDMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Cancellative.html",
        "fct-type": "module",
        "title": "Cancellative"
      },
      "index": {
        "description": "This module defines the Monoid ReductiveMonoid CancellativeMonoid GCDMonoid class hierarchy The ReductiveMonoid class introduces operation which is the inverse of For the Sum monoid this operation is subtraction for Product it is division and for Set it the set difference ReductiveMonoid is not full group because may return Nothing The CancellativeMonoid subclass does not add any operation but it provides the additional guarantee that can always be undone with Thus Sum is CancellativeMonoid but Product is not because is not defined The GCDMonoid subclass adds the gcd operation which takes two monoidal arguments and finds their greatest common divisor or more generally the greatest monoid that can be extracted with the operation from both All monoid subclasses listed above are for Abelian i.e commutative or symmetric monoids Since most practical monoids in Haskell are not Abelian each of the these classes has two symmetric superclasses LeftReductiveMonoid LeftCancellativeMonoid LeftGCDMonoid RightReductiveMonoid RightCancellativeMonoid RightGCDMonoid",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "Cancellative",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Cancellative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:CancellativeMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eSubclass of \u003ccode\u003e\u003ca\u003eReductiveMonoid\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is a complete inverse of the Monoid \u003ccode\u003e\u003c\u003e\u003c/code\u003e operation. The class instances\n must satisfy the following additional laws:\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c/\u003e a == Just b\n (a \u003c\u003e b) \u003c/\u003e b == Just a\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#CancellativeMonoid",
        "fct-type": "class",
        "title": "CancellativeMonoid"
      },
      "index": {
        "description": "Subclass of ReductiveMonoid where is complete inverse of the Monoid operation The class instances must satisfy the following additional laws Just Just",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "CancellativeMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Cancellative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:CommutativeMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of all Abelian ({i.e.}, commutative) monoids that satisfy the commutativity property:\n\u003c/p\u003e\u003cpre\u003e a \u003c\u003e b == b \u003c\u003e a\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#CommutativeMonoid",
        "fct-type": "class",
        "title": "CommutativeMonoid"
      },
      "index": {
        "description": "Class of all Abelian i.e commutative monoids that satisfy the commutativity property",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "CommutativeMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Commutative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:GCDMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of Abelian monoids that allow the greatest common denominator to be found for any two given values. The\n operations must satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e gcd a b == commonPrefix a b == commonSuffix a b\n Just a' = a \u003c/\u003e p && Just b' = b \u003c/\u003e p\n    where p = gcd a b\n\u003c/pre\u003e\u003cp\u003eIf a \u003ccode\u003e\u003ca\u003eGCDMonoid\u003c/a\u003e\u003c/code\u003e happens to also be a \u003ccode\u003e\u003ca\u003eCancellativeMonoid\u003c/a\u003e\u003c/code\u003e, it should additionally satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e gcd (a \u003c\u003e b) (a \u003c\u003e c) == a \u003c\u003e gcd b c\n gcd (a \u003c\u003e c) (b \u003c\u003e c) == gcd a b \u003c\u003e c\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#GCDMonoid",
        "fct-type": "class",
        "title": "GCDMonoid"
      },
      "index": {
        "description": "Class of Abelian monoids that allow the greatest common denominator to be found for any two given values The operations must satisfy the following laws gcd commonPrefix commonSuffix Just Just where gcd If GCDMonoid happens to also be CancellativeMonoid it should additionally satisfy the following laws gcd gcd gcd gcd",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "GCDMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "GCDMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:LeftCancellativeMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eSubclass of \u003ccode\u003e\u003ca\u003eLeftReductiveMonoid\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e is a complete inverse of \u003ccode\u003e\u003c\u003e\u003c/code\u003e, satisfying the following\n additional law:\n\u003c/p\u003e\u003cpre\u003e stripPrefix a (a \u003c\u003e b) == Just b\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#LeftCancellativeMonoid",
        "fct-type": "class",
        "title": "LeftCancellativeMonoid"
      },
      "index": {
        "description": "Subclass of LeftReductiveMonoid where stripPrefix is complete inverse of satisfying the following additional law stripPrefix Just",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "LeftCancellativeMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Left Cancellative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:LeftGCDMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monoids capable of finding the equivalent of greatest common divisor on the left side of two monoidal\n values. The methods' complexity should be no worse than linear in the length of the common prefix. The following laws\n must be respected:\n\u003c/p\u003e\u003cpre\u003e stripCommonPrefix a b == (p, a', b')\n    where p = commonPrefix a b\n          Just a' = stripPrefix p a\n          Just b' = stripPrefix p b\n p == commonPrefix a b && p \u003c\u003e a' == a && p \u003c\u003e b' == b\n    where (p, a', b') = stripCommonPrefix a b\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#LeftGCDMonoid",
        "fct-type": "class",
        "title": "LeftGCDMonoid"
      },
      "index": {
        "description": "Class of monoids capable of finding the equivalent of greatest common divisor on the left side of two monoidal values The methods complexity should be no worse than linear in the length of the common prefix The following laws must be respected stripCommonPrefix where commonPrefix Just stripPrefix Just stripPrefix commonPrefix where stripCommonPrefix",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "LeftGCDMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Left GCDMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:LeftReductiveMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monoids with a left inverse of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e, satisfying the following law:\n\u003c/p\u003e\u003cpre\u003e isPrefixOf a b == isJust (stripPrefix a b)\n maybe b (a \u003c\u003e) (stripPrefix a b) == b\n a `isPrefixOf` (a \u003c\u003e b)\n\u003c/pre\u003e\u003cp\u003e| Every instance definition has to implement at least the \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e method. Its complexity should be no worse\n than linear in the length of the prefix argument.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#LeftReductiveMonoid",
        "fct-type": "class",
        "title": "LeftReductiveMonoid"
      },
      "index": {
        "description": "Class of monoids with left inverse of mappend satisfying the following law isPrefixOf isJust stripPrefix maybe stripPrefix isPrefixOf Every instance definition has to implement at least the stripPrefix method Its complexity should be no worse than linear in the length of the prefix argument",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "LeftReductiveMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Left Reductive Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:ReductiveMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of Abelian monoids with a partial inverse for the Monoid \u003ccode\u003e\u003c\u003e\u003c/code\u003e operation. The inverse operation \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e must\n satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e maybe a (b \u003c\u003e) (a \u003c/\u003e b) == a\n maybe a (\u003c\u003e b) (a \u003c/\u003e b) == a\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#ReductiveMonoid",
        "fct-type": "class",
        "title": "ReductiveMonoid"
      },
      "index": {
        "description": "Class of Abelian monoids with partial inverse for the Monoid operation The inverse operation must satisfy the following laws maybe maybe",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "ReductiveMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Reductive Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:RightCancellativeMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eSubclass of \u003ccode\u003e\u003ca\u003eLeftReductiveMonoid\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e is a complete inverse of \u003ccode\u003e\u003c\u003e\u003c/code\u003e, satisfying the following\n additional law:\n\u003c/p\u003e\u003cpre\u003e stripSuffix b (a \u003c\u003e b) == Just a\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#RightCancellativeMonoid",
        "fct-type": "class",
        "title": "RightCancellativeMonoid"
      },
      "index": {
        "description": "Subclass of LeftReductiveMonoid where stripPrefix is complete inverse of satisfying the following additional law stripSuffix Just",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "RightCancellativeMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Right Cancellative Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:RightGCDMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monoids capable of finding the equivalent of greatest common divisor on the right side of two monoidal\n values. The methods' complexity must be no worse than linear in the length of the common suffix. The following laws\n must be respected:\n\u003c/p\u003e\u003cpre\u003e stripCommonSuffix a b == (a', b', s)\n    where s = commonSuffix a b\n          Just a' = stripSuffix p a\n          Just b' = stripSuffix p b\n s == commonSuffix a b && a' \u003c\u003e s == a && b' \u003c\u003e s == b\n    where (a', b', s) = stripCommonSuffix a b\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#RightGCDMonoid",
        "fct-type": "class",
        "title": "RightGCDMonoid"
      },
      "index": {
        "description": "Class of monoids capable of finding the equivalent of greatest common divisor on the right side of two monoidal values The methods complexity must be no worse than linear in the length of the common suffix The following laws must be respected stripCommonSuffix where commonSuffix Just stripSuffix Just stripSuffix commonSuffix where stripCommonSuffix",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "RightGCDMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Right GCDMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#t:RightReductiveMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monoids with a right inverse of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e, satisfying the following law:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf a b == isJust (stripSuffix a b)\n maybe b (\u003c\u003e a) (stripSuffix a b) == b\n b `isSuffixOf` (a \u003c\u003e b)\n\u003c/pre\u003e\u003cp\u003e| Every instance definition has to implement at least the \u003ccode\u003e\u003ca\u003estripSuffix\u003c/a\u003e\u003c/code\u003e method. Its complexity should be no worse\n than linear in the length of the suffix argument.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Cancellative.html#RightReductiveMonoid",
        "fct-type": "class",
        "title": "RightReductiveMonoid"
      },
      "index": {
        "description": "Class of monoids with right inverse of mappend satisfying the following law isSuffixOf isJust stripSuffix maybe stripSuffix isSuffixOf Every instance definition has to implement at least the stripSuffix method Its complexity should be no worse than linear in the length of the suffix argument",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "RightReductiveMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Right Reductive Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:-60--47--62-",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e Maybe m",
        "fct-source": "src/Data-Monoid-Cancellative.html#%3C%2F%3E",
        "fct-type": "method",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "a-\u003ea-\u003eMaybe a",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003em-\u003eMaybe m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:commonPrefix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Cancellative.html#commonPrefix",
        "fct-type": "method",
        "title": "commonPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "commonPrefix",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Prefix",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:commonSuffix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Cancellative.html#commonSuffix",
        "fct-type": "method",
        "title": "commonSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "commonSuffix",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Suffix",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:gcd",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Cancellative.html#gcd",
        "fct-type": "method",
        "title": "gcd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "gcd",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:isPrefixOf",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e Bool",
        "fct-source": "src/Data-Monoid-Cancellative.html#isPrefixOf",
        "fct-type": "method",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "isPrefixOf",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "monoid-subclasses",
        "partial": "Prefix Of",
        "signature": "m-\u003em-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:isSuffixOf",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e Bool",
        "fct-source": "src/Data-Monoid-Cancellative.html#isSuffixOf",
        "fct-type": "method",
        "title": "isSuffixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "isSuffixOf",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "monoid-subclasses",
        "partial": "Suffix Of",
        "signature": "m-\u003em-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:stripCommonPrefix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e (m, m, m)",
        "fct-source": "src/Data-Monoid-Cancellative.html#stripCommonPrefix",
        "fct-type": "method",
        "title": "stripCommonPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "stripCommonPrefix",
        "normalized": "a-\u003ea-\u003e(a,a,a)",
        "package": "monoid-subclasses",
        "partial": "Common Prefix",
        "signature": "m-\u003em-\u003e(m,m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:stripCommonSuffix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e (m, m, m)",
        "fct-source": "src/Data-Monoid-Cancellative.html#stripCommonSuffix",
        "fct-type": "method",
        "title": "stripCommonSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "stripCommonSuffix",
        "normalized": "a-\u003ea-\u003e(a,a,a)",
        "package": "monoid-subclasses",
        "partial": "Common Suffix",
        "signature": "m-\u003em-\u003e(m,m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:stripPrefix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e Maybe m",
        "fct-source": "src/Data-Monoid-Cancellative.html#stripPrefix",
        "fct-type": "method",
        "title": "stripPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "stripPrefix",
        "normalized": "a-\u003ea-\u003eMaybe a",
        "package": "monoid-subclasses",
        "partial": "Prefix",
        "signature": "m-\u003em-\u003eMaybe m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Cancellative.html#v:stripSuffix",
      "description": {
        "fct-module": "Data.Monoid.Cancellative",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m -\u003e Maybe m",
        "fct-source": "src/Data-Monoid-Cancellative.html#stripSuffix",
        "fct-type": "method",
        "title": "stripSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Cancellative",
        "module": "Data.Monoid.Cancellative",
        "name": "stripSuffix",
        "normalized": "a-\u003ea-\u003eMaybe a",
        "package": "monoid-subclasses",
        "partial": "Suffix",
        "signature": "m-\u003em-\u003eMaybe m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eFactorialMonoid\u003c/a\u003e\u003c/code\u003e class and some of its instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Factorial.html",
        "fct-type": "module",
        "title": "Factorial"
      },
      "index": {
        "description": "This module defines the FactorialMonoid class and some of its instances",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "Factorial",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Factorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#t:FactorialMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monoids that can be split into irreducible (\u003cem\u003ei.e.\u003c/em\u003e, atomic or prime) \u003ccode\u003e\u003ca\u003efactors\u003c/a\u003e\u003c/code\u003e in a unique way. Factors of\n a \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e are literally its prime factors:\n\u003c/p\u003e\u003cpre\u003efactors (Product 12) == [Product 2, Product 2, Product 3]\u003c/pre\u003e\u003cp\u003eFactors of a list are \u003cem\u003enot\u003c/em\u003e its elements but all its single-item sublists:\n\u003c/p\u003e\u003cpre\u003efactors \"abc\" == [\"a\", \"b\", \"c\"]\u003c/pre\u003e\u003cp\u003eThe methods of this class satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e mconcat . factors == id\n null == List.null . factors\n List.all (\\prime-\u003e factors prime == [prime]) . factors\n factors == unfoldr splitPrimePrefix == List.reverse . unfoldr (fmap swap . splitPrimeSuffix)\n reverse == mconcat . List.reverse . factors\n primePrefix == maybe mempty fst . splitPrimePrefix\n primeSuffix == maybe mempty snd . splitPrimeSuffix\n foldl f a == List.foldl f a . factors\n foldl' f a == List.foldl' f a . factors\n foldr f a == List.foldr f a . factors\n span p m == (mconcat l, mconcat r) where (l, r) = List.span p (factors m)\n List.all (List.all (not . pred) . factors) . split pred\n mconcat . intersperse prime . split (== prime) == id\n splitAt i m == (mconcat l, mconcat r) where (l, r) = List.splitAt i (factors m)\n\u003c/pre\u003e\u003cp\u003eA minimal instance definition must implement \u003ccode\u003e\u003ca\u003efactors\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esplitPrimePrefix\u003c/a\u003e\u003c/code\u003e. Other methods are provided and should\n be implemented only for performance reasons.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Factorial.html#FactorialMonoid",
        "fct-type": "class",
        "title": "FactorialMonoid"
      },
      "index": {
        "description": "Class of monoids that can be split into irreducible i.e atomic or prime factors in unique way Factors of Product are literally its prime factors factors Product Product Product Product Factors of list are not its elements but all its single-item sublists factors abc The methods of this class satisfy the following laws mconcat factors id null List.null factors List.all prime factors prime prime factors factors unfoldr splitPrimePrefix List.reverse unfoldr fmap swap splitPrimeSuffix reverse mconcat List.reverse factors primePrefix maybe mempty fst splitPrimePrefix primeSuffix maybe mempty snd splitPrimeSuffix foldl List.foldl factors foldl List.foldl factors foldr List.foldr factors span mconcat mconcat where List.span factors List.all List.all not pred factors split pred mconcat intersperse prime split prime id splitAt mconcat mconcat where List.splitAt factors minimal instance definition must implement factors or splitPrimePrefix Other methods are provided and should be implemented only for performance reasons",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "FactorialMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Factorial Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#t:StableFactorialMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eA subclass of \u003ccode\u003e\u003ca\u003eFactorialMonoid\u003c/a\u003e\u003c/code\u003e whose instances satisfy this additional law:\n\u003c/p\u003e\u003cpre\u003e factors (a \u003c\u003e b) == factors a \u003c\u003e factors b\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Factorial.html#StableFactorialMonoid",
        "fct-type": "class",
        "title": "StableFactorialMonoid"
      },
      "index": {
        "description": "subclass of FactorialMonoid whose instances satisfy this additional law factors factors factors",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "StableFactorialMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Stable Factorial Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e Bool) -\u003e m -\u003e (m, m)",
        "fct-source": "src/Data-Monoid-Factorial.html#break",
        "fct-type": "method",
        "title": "break"
      },
      "index": {
        "description": "Equivalent to break from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(m-\u003eBool)-\u003em-\u003e(m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Int -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#drop",
        "fct-type": "method",
        "title": "drop"
      },
      "index": {
        "description": "Equivalent to drop from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "drop",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Int-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e Bool) -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#dropWhile",
        "fct-type": "method",
        "title": "dropWhile"
      },
      "index": {
        "description": "Equivalent to dropWhile from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "While",
        "signature": "(m-\u003eBool)-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:factors",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all prime factors; inverse of mconcat.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e [m]",
        "fct-source": "src/Data-Monoid-Factorial.html#factors",
        "fct-type": "method",
        "title": "factors"
      },
      "index": {
        "description": "Returns list of all prime factors inverse of mconcat",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "factors",
        "normalized": "a-\u003e[a]",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e, except the function arguments are prime factors rather than the\n structure elements.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e n) -\u003e m -\u003e n",
        "fct-source": "src/Data-Monoid-Factorial.html#foldMap",
        "fct-type": "method",
        "title": "foldMap"
      },
      "index": {
        "description": "Generalizes foldMap from Data.Foldable except the function arguments are prime factors rather than the structure elements",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "monoid-subclasses",
        "partial": "Map",
        "signature": "(m-\u003en)-\u003em-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e on the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e m -\u003e a) -\u003e a -\u003e m -\u003e a",
        "fct-source": "src/Data-Monoid-Factorial.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "Like foldl from Data.List on the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003em-\u003ea)-\u003ea-\u003em-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e on the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e m -\u003e a) -\u003e a -\u003e m -\u003e a",
        "fct-source": "src/Data-Monoid-Factorial.html#foldl%27",
        "fct-type": "method",
        "title": "foldl'"
      },
      "index": {
        "description": "Like foldl from Data.List on the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003em-\u003ea)-\u003ea-\u003em-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e on the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e a -\u003e a) -\u003e a -\u003e m -\u003e a",
        "fct-source": "src/Data-Monoid-Factorial.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Like foldr from Data.List on the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(m-\u003ea-\u003ea)-\u003ea-\u003em-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e Int",
        "fct-source": "src/Data-Monoid-Factorial.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "The length of the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m b",
        "fct-source": "src/Data-Monoid-Factorial.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM equivalent",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Monoid-Factorial.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM equivalent",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb()",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:primePrefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe prime prefix, \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e if none.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#primePrefix",
        "fct-type": "method",
        "title": "primePrefix"
      },
      "index": {
        "description": "The prime prefix mempty if none",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "primePrefix",
        "normalized": "a-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Prefix",
        "signature": "m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:primeSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eThe prime suffix, \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e if none.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#primeSuffix",
        "fct-type": "method",
        "title": "primeSuffix"
      },
      "index": {
        "description": "The prime suffix mempty if none",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "primeSuffix",
        "normalized": "a-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Suffix",
        "signature": "m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#reverse",
        "fct-type": "method",
        "title": "reverse"
      },
      "index": {
        "description": "Equivalent to reverse from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "reverse",
        "normalized": "a-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e on the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e Bool) -\u003e m -\u003e (m, m)",
        "fct-source": "src/Data-Monoid-Factorial.html#span",
        "fct-type": "method",
        "title": "span"
      },
      "index": {
        "description": "Like span from Data.List on the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(m-\u003eBool)-\u003em-\u003e(m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the monoid into components delimited by prime separators satisfying the given predicate. The primes\n satisfying the predicate are not a part of the result.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e Bool) -\u003e m -\u003e [m]",
        "fct-source": "src/Data-Monoid-Factorial.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "Splits the monoid into components delimited by prime separators satisfying the given predicate The primes satisfying the predicate are not part of the result",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "split",
        "normalized": "(a-\u003eBool)-\u003ea-\u003e[a]",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(m-\u003eBool)-\u003em-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e on the list of \u003ccode\u003eprimes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Int -\u003e m -\u003e (m, m)",
        "fct-source": "src/Data-Monoid-Factorial.html#splitAt",
        "fct-type": "method",
        "title": "splitAt"
      },
      "index": {
        "description": "Like splitAt from Data.List on the list of primes",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "splitAt",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "monoid-subclasses",
        "partial": "At",
        "signature": "Int-\u003em-\u003e(m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:splitPrimePrefix",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the argument into its prime prefix and the remaining suffix. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e Maybe (m, m)",
        "fct-source": "src/Data-Monoid-Factorial.html#splitPrimePrefix",
        "fct-type": "method",
        "title": "splitPrimePrefix"
      },
      "index": {
        "description": "Splits the argument into its prime prefix and the remaining suffix Returns Nothing for mempty",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "splitPrimePrefix",
        "normalized": "a-\u003eMaybe(a,a)",
        "package": "monoid-subclasses",
        "partial": "Prime Prefix",
        "signature": "m-\u003eMaybe(m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:splitPrimeSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the argument into its prime suffix and the remaining prefix. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e Maybe (m, m)",
        "fct-source": "src/Data-Monoid-Factorial.html#splitPrimeSuffix",
        "fct-type": "method",
        "title": "splitPrimeSuffix"
      },
      "index": {
        "description": "Splits the argument into its prime suffix and the remaining prefix Returns Nothing for mempty",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "splitPrimeSuffix",
        "normalized": "a-\u003eMaybe(a,a)",
        "package": "monoid-subclasses",
        "partial": "Prime Suffix",
        "signature": "m-\u003eMaybe(m,m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Int -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#take",
        "fct-type": "method",
        "title": "take"
      },
      "index": {
        "description": "Equivalent to take from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "take",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Int-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Factorial.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Factorial",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(m -\u003e Bool) -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Factorial.html#takeWhile",
        "fct-type": "method",
        "title": "takeWhile"
      },
      "index": {
        "description": "Equivalent to takeWhile from Data.List",
        "hierarchy": "Data Monoid Factorial",
        "module": "Data.Monoid.Factorial",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "While",
        "signature": "(m-\u003eBool)-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-ByteString-UTF8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eByteStringUTF8\u003c/a\u003e\u003c/code\u003e newtype wrapper around \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, together with its \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e\n instance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Instances.ByteString.UTF8",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Instances-ByteString-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "This module defines the ByteStringUTF8 newtype wrapper around ByteString together with its TextualMonoid instance",
        "hierarchy": "Data Monoid Instances ByteString UTF8",
        "module": "Data.Monoid.Instances.ByteString.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-ByteString-UTF8.html#t:ByteStringUTF8",
      "description": {
        "fct-module": "Data.Monoid.Instances.ByteString.UTF8",
        "fct-package": "monoid-subclasses",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Instances-ByteString-UTF8.html#ByteStringUTF8",
        "fct-type": "newtype",
        "title": "ByteStringUTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances ByteString UTF8",
        "module": "Data.Monoid.Instances.ByteString.UTF8",
        "name": "ByteStringUTF8",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Byte String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-ByteString-UTF8.html#v:ByteStringUTF8",
      "description": {
        "fct-module": "Data.Monoid.Instances.ByteString.UTF8",
        "fct-package": "monoid-subclasses",
        "fct-signature": "ByteStringUTF8 ByteString",
        "fct-source": "src/Data-Monoid-Instances-ByteString-UTF8.html#ByteStringUTF8",
        "fct-type": "function",
        "title": "ByteStringUTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances ByteString UTF8",
        "module": "Data.Monoid.Instances.ByteString.UTF8",
        "name": "ByteStringUTF8",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Byte String UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-ByteString-UTF8.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a raw \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunk and returns a pair of \u003ccode\u003e\u003ca\u003eByteStringUTF8\u003c/a\u003e\u003c/code\u003e decoding the prefix of the chunk and the\n remaining suffix that is either null or contains the incomplete last character of the chunk.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Instances.ByteString.UTF8",
        "fct-package": "monoid-subclasses",
        "fct-signature": "ByteString -\u003e (ByteStringUTF8, ByteString)",
        "fct-source": "src/Data-Monoid-Instances-ByteString-UTF8.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Takes raw ByteString chunk and returns pair of ByteStringUTF8 decoding the prefix of the chunk and the remaining suffix that is either null or contains the incomplete last character of the chunk",
        "hierarchy": "Data Monoid Instances ByteString UTF8",
        "module": "Data.Monoid.Instances.ByteString.UTF8",
        "name": "decode",
        "normalized": "ByteString-\u003e(ByteStringUTF,ByteString)",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "ByteString-\u003e(ByteStringUTF,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Concat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the monoid transformer data type \u003ccode\u003e\u003ca\u003eConcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Instances.Concat",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Instances-Concat.html",
        "fct-type": "module",
        "title": "Concat"
      },
      "index": {
        "description": "This module defines the monoid transformer data type Concat",
        "hierarchy": "Data Monoid Instances Concat",
        "module": "Data.Monoid.Instances.Concat",
        "name": "Concat",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Concat.html#t:Concat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eConcat\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a \u003ccode\u003enewtype\u003c/code\u003e wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e. The behaviour of the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConcat\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e instances of monoid\n subclasses is identical to the behaviour of their \u003ccode\u003ea\u003c/code\u003e instances, up to the \u003ccode\u003e\u003ccode\u003e\u003ca\u003einject\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e isomorphism.\n\u003c/p\u003e\u003cp\u003eThe only purpose of \u003ccode\u003e\u003ca\u003eConcat\u003c/a\u003e\u003c/code\u003e then is to change the performance characteristics of various operations. Most\n importantly, injecting a monoid into a \u003ccode\u003e\u003ca\u003eConcat\u003c/a\u003e\u003c/code\u003e has the effect of making \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e a constant-time operation.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Instances.Concat",
        "fct-package": "monoid-subclasses",
        "fct-signature": "data",
        "fct-source": "src/Data-Monoid-Instances-Concat.html#Concat",
        "fct-type": "data",
        "title": "Concat"
      },
      "index": {
        "description": "Concat is newtype wrapper around Seq The behaviour of the Concat instances of monoid subclasses is identical to the behaviour of their instances up to the inject singleton isomorphism The only purpose of Concat then is to change the performance characteristics of various operations Most importantly injecting monoid into Concat has the effect of making mappend constant-time operation",
        "hierarchy": "Data Monoid Instances Concat",
        "module": "Data.Monoid.Instances.Concat",
        "name": "Concat",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Concat.html#v:extract",
      "description": {
        "fct-module": "Data.Monoid.Instances.Concat",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Concat a -\u003e Seq a",
        "fct-source": "src/Data-Monoid-Instances-Concat.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Concat",
        "module": "Data.Monoid.Instances.Concat",
        "name": "extract",
        "normalized": "Concat a-\u003eSeq a",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Concat a-\u003eSeq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Concat.html#v:inject",
      "description": {
        "fct-module": "Data.Monoid.Instances.Concat",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Seq a -\u003e Concat a",
        "fct-source": "src/Data-Monoid-Instances-Concat.html#inject",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Concat",
        "module": "Data.Monoid.Instances.Concat",
        "name": "inject",
        "normalized": "Seq a-\u003eConcat a",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Seq a-\u003eConcat a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Measured.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the monoid transformer data type \u003ccode\u003e\u003ca\u003eMeasured\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Instances.Measured",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Instances-Measured.html",
        "fct-type": "module",
        "title": "Measured"
      },
      "index": {
        "description": "This module defines the monoid transformer data type Measured",
        "hierarchy": "Data Monoid Instances Measured",
        "module": "Data.Monoid.Instances.Measured",
        "name": "Measured",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Measured",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Measured.html#t:Measured",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eMeasured\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a wrapper around the \u003ccode\u003e\u003ca\u003eFactorialMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e that memoizes the monoid's \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e so it becomes a\n constant-time operation. The parameter is restricted to the \u003ccode\u003e\u003ca\u003eStableFactorialMonoid\u003c/a\u003e\u003c/code\u003e class, which guarantees that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (a \u003ca/\u003e b) == \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e a + \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Instances.Measured",
        "fct-package": "monoid-subclasses",
        "fct-signature": "data",
        "fct-source": "src/Data-Monoid-Instances-Measured.html#Measured",
        "fct-type": "data",
        "title": "Measured"
      },
      "index": {
        "description": "Measured is wrapper around the FactorialMonoid that memoizes the monoid length so it becomes constant-time operation The parameter is restricted to the StableFactorialMonoid class which guarantees that length length length",
        "hierarchy": "Data Monoid Instances Measured",
        "module": "Data.Monoid.Instances.Measured",
        "name": "Measured",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Measured",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Measured.html#v:extract",
      "description": {
        "fct-module": "Data.Monoid.Instances.Measured",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Measured a -\u003e a",
        "fct-source": "src/Data-Monoid-Instances-Measured.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Measured",
        "module": "Data.Monoid.Instances.Measured",
        "name": "extract",
        "normalized": "Measured a-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Measured a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Measured.html#v:inject",
      "description": {
        "fct-module": "Data.Monoid.Instances.Measured",
        "fct-package": "monoid-subclasses",
        "fct-signature": "a -\u003e Measured a",
        "fct-source": "src/Data-Monoid-Instances-Measured.html#inject",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Measured",
        "module": "Data.Monoid.Instances.Measured",
        "name": "inject",
        "normalized": "a-\u003eMeasured a",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "a-\u003eMeasured a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the monoid transformer data type \u003ccode\u003e\u003ca\u003eStateful\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html",
        "fct-type": "module",
        "title": "Stateful"
      },
      "index": {
        "description": "This module defines the monoid transformer data type Stateful",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "Stateful",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Stateful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#t:Stateful",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateful\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is a wrapper around the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e that carries the state \u003ccode\u003ea\u003c/code\u003e along. The state type \u003ccode\u003ea\u003c/code\u003e must be\n a monoid as well if \u003ccode\u003e\u003ca\u003eStateful\u003c/a\u003e\u003c/code\u003e is to be of any use. In the \u003ccode\u003e\u003ca\u003eFactorialMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e class instances, the\n monoid \u003ccode\u003eb\u003c/code\u003e has the priority and the state \u003ccode\u003ea\u003c/code\u003e is left for the end.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "data",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#Stateful",
        "fct-type": "data",
        "title": "Stateful"
      },
      "index": {
        "description": "Stateful is wrapper around the Monoid that carries the state along The state type must be monoid as well if Stateful is to be of any use In the FactorialMonoid and TextualMonoid class instances the monoid has the priority and the state is left for the end",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "Stateful",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Stateful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#v:Stateful",
      "description": {
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Stateful (b, a)",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#Stateful",
        "fct-type": "function",
        "title": "Stateful"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "Stateful",
        "normalized": "Stateful(a,b)",
        "package": "monoid-subclasses",
        "partial": "Stateful",
        "signature": "Stateful(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#v:extract",
      "description": {
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Stateful a b -\u003e b",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "extract",
        "normalized": "Stateful a b-\u003eb",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Stateful a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#v:inject",
      "description": {
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "b -\u003e Stateful a b",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#inject",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "inject",
        "normalized": "a-\u003eStateful b a",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "b-\u003eStateful a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#v:setState",
      "description": {
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "a -\u003e Stateful a b -\u003e Stateful a b",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "setState",
        "normalized": "a-\u003eStateful a b-\u003eStateful a b",
        "package": "monoid-subclasses",
        "partial": "State",
        "signature": "a-\u003eStateful a b-\u003eStateful a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Instances-Stateful.html#v:state",
      "description": {
        "fct-module": "Data.Monoid.Instances.Stateful",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Stateful a b -\u003e a",
        "fct-source": "src/Data-Monoid-Instances-Stateful.html#state",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Instances Stateful",
        "module": "Data.Monoid.Instances.Stateful",
        "name": "state",
        "normalized": "Stateful a b-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Stateful a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Null.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the MonoidNull class and some of its instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Null",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Null.html",
        "fct-type": "module",
        "title": "Null"
      },
      "index": {
        "description": "This module defines the MonoidNull class and some of its instances",
        "hierarchy": "Data Monoid Null",
        "module": "Data.Monoid.Null",
        "name": "Null",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Null.html#t:MonoidNull",
      "description": {
        "fct-descr": "\u003cp\u003eExtension of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e that allows testing a value for equality with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e. The following law must hold:\n\u003c/p\u003e\u003cpre\u003enull x == (x == mempty)\u003c/pre\u003e\u003cp\u003eFurthermore, the performance of this method should be constant, \u003cem\u003ei.e.\u003c/em\u003e, independent of the length of its argument.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Null",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Null.html#MonoidNull",
        "fct-type": "class",
        "title": "MonoidNull"
      },
      "index": {
        "description": "Extension of Monoid that allows testing value for equality with mempty The following law must hold null mempty Furthermore the performance of this method should be constant i.e independent of the length of its argument",
        "hierarchy": "Data Monoid Null",
        "module": "Data.Monoid.Null",
        "name": "MonoidNull",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Monoid Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Null.html#t:PositiveMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eSubclass of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for types whose values have no inverse, with the exception of \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e. More formally, the\n class instances must satisfy the following law:\n\u003c/p\u003e\u003cpre\u003enull (x \u003c\u003e y) == (null x && null y)\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Null",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Null.html#PositiveMonoid",
        "fct-type": "class",
        "title": "PositiveMonoid"
      },
      "index": {
        "description": "Subclass of Monoid for types whose values have no inverse with the exception of mempty More formally the class instances must satisfy the following law null null null",
        "hierarchy": "Data Monoid Null",
        "module": "Data.Monoid.Null",
        "name": "PositiveMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Positive Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Null.html#v:null",
      "description": {
        "fct-module": "Data.Monoid.Null",
        "fct-package": "monoid-subclasses",
        "fct-signature": "m -\u003e Bool",
        "fct-source": "src/Data-Monoid-Null.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Null",
        "module": "Data.Monoid.Null",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e class and its most important instances for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Textual.html",
        "fct-type": "module",
        "title": "Textual"
      },
      "index": {
        "description": "This module defines the TextualMonoid class and its most important instances for String and Text",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "Textual",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Textual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#t:TextualMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e class is an extension of \u003ccode\u003e\u003ca\u003eFactorialMonoid\u003c/a\u003e\u003c/code\u003e specialized for monoids that can contain\n characters. Its methods are generally equivalent to their namesake functions from \u003ca\u003eData.List\u003c/a\u003e and \u003ca\u003eData.Text\u003c/a\u003e, and\n they satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e unfoldr splitCharacterPrefix . fromString == id\n splitCharacterPrefix . primePrefix == fmap (\\(c, t)-\u003e (c, mempty)) . splitCharacterPrefix\n\n map f . fromString == fromString . List.map f\n concatMap (fromString . f) . fromString == fromString . List.concatMap f\n\n foldl  ft fc a . fromString == List.foldl  fc a\n foldr  ft fc a . fromString == List.foldr  fc a\n foldl' ft fc a . fromString == List.foldl' fc a\n\n scanl f c . fromString == fromString . List.scanl f c\n scanr f c . fromString == fromString . List.scanr f c\n mapAccumL f a . fromString == fmap fromString . List.mapAccumL f a\n mapAccumL f a . fromString == fmap fromString . List.mapAccumL f a\n\n takeWhile pt pc . fromString == fromString . takeWhile pc\n dropWhile pt pc . fromString == fromString . dropWhile pc\n\n mconcat . intersperse (singleton c) . split (== c) == id\n find p . fromString == List.find p\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e may contain non-character data insterspersed between its characters. Every class method that\n returns a modified \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e instance generally preserves this non-character data. All of the following\n expressions are identities:\n\u003c/p\u003e\u003cpre\u003e map id\n concatMap singleton\n foldl  (\u003c\u003e) (\\a c-\u003e a \u003c\u003e singleton c) mempty\n foldr  (\u003c\u003e) ((\u003c\u003e) . singleton) mempty\n foldl' (\u003c\u003e) (\\a c-\u003e a \u003c\u003e singleton c) mempty\n scanl1 (const id)\n scanr1 const\n uncurry (mapAccumL (,))\n uncurry (mapAccumR (,))\n takeWhile (const True) (const True)\n dropWhile (const False) (const False)\n\u003c/pre\u003e\u003cp\u003eA minimal instance definition must implement \u003ccode\u003e\u003ca\u003esplitCharacterPrefix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Textual.html#TextualMonoid",
        "fct-type": "class",
        "title": "TextualMonoid"
      },
      "index": {
        "description": "The TextualMonoid class is an extension of FactorialMonoid specialized for monoids that can contain characters Its methods are generally equivalent to their namesake functions from Data.List and Data.Text and they satisfy the following laws unfoldr splitCharacterPrefix fromString id splitCharacterPrefix primePrefix fmap mempty splitCharacterPrefix map fromString fromString List.map concatMap fromString fromString fromString List.concatMap foldl ft fc fromString List.foldl fc foldr ft fc fromString List.foldr fc foldl ft fc fromString List.foldl fc scanl fromString fromString List.scanl scanr fromString fromString List.scanr mapAccumL fromString fmap fromString List.mapAccumL mapAccumL fromString fmap fromString List.mapAccumL takeWhile pt pc fromString fromString takeWhile pc dropWhile pt pc fromString fromString dropWhile pc mconcat intersperse singleton split id find fromString List.find TextualMonoid may contain non-character data insterspersed between its characters Every class method that returns modified TextualMonoid instance generally preserves this non-character data All of the following expressions are identities map id concatMap singleton foldl singleton mempty foldr singleton mempty foldl singleton mempty scanl1 const id scanr1 const uncurry mapAccumL uncurry mapAccumR takeWhile const True const True dropWhile const False const False minimal instance definition must implement splitCharacterPrefix",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "TextualMonoid",
        "normalized": "",
        "package": "monoid-subclasses",
        "partial": "Textual Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e. Ignores all non-character data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Bool) -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Monoid-Textual.html#all",
        "fct-type": "method",
        "title": "all"
      },
      "index": {
        "description": "Equivalent to all from Data.List Ignores all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "all",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003eBool",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e. Ignores all non-character data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Bool) -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Monoid-Textual.html#any",
        "fct-type": "method",
        "title": "any"
      },
      "index": {
        "description": "Equivalent to any from Data.List Ignores all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "any",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003eBool",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e'break pt pc' is equivalent to |span (not . pt) (not . pc)|.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(t -\u003e Bool) -\u003e (Char -\u003e Bool) -\u003e t -\u003e (t, t)",
        "fct-source": "src/Data-Monoid-Textual.html#break",
        "fct-type": "method",
        "title": "break"
      },
      "index": {
        "description": "break pt pc is equivalent to span not pt not pc",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003e(Char-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(t-\u003eBool)-\u003e(Char-\u003eBool)-\u003et-\u003e(t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:characterPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts a single character that prefixes the monoid, if the monoid begins with a character. Otherwise returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e characterPrefix == fmap fst . splitCharacterPrefix\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "t -\u003e Maybe Char",
        "fct-source": "src/Data-Monoid-Textual.html#characterPrefix",
        "fct-type": "method",
        "title": "characterPrefix"
      },
      "index": {
        "description": "Extracts single character that prefixes the monoid if the monoid begins with character Otherwise returns Nothing characterPrefix fmap fst splitCharacterPrefix",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "characterPrefix",
        "normalized": "a-\u003eMaybe Char",
        "package": "monoid-subclasses",
        "partial": "Prefix",
        "signature": "t-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e with a \u003ccode\u003eChar -\u003e String\u003c/code\u003e function. Preserves all non-character\n data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e t) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#concatMap",
        "fct-type": "method",
        "title": "concatMap"
      },
      "index": {
        "description": "Equivalent to concatMap from Data.List with Char String function Preserves all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "concatMap",
        "normalized": "(Char-\u003ea)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Map",
        "signature": "(Char-\u003et)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eThe first predicate tests the non-character data, the second one the characters. Otherwise equivalent to\n \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(t -\u003e Bool) -\u003e (Char -\u003e Bool) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#dropWhile",
        "fct-type": "method",
        "title": "dropWhile"
      },
      "index": {
        "description": "The first predicate tests the non-character data the second one the characters Otherwise equivalent to dropWhile from Data.List when applied to String",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003e(Char-\u003eBool)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "While",
        "signature": "(t-\u003eBool)-\u003e(Char-\u003eBool)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. Ignores non-character data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Bool) -\u003e t -\u003e Maybe Char",
        "fct-source": "src/Data-Monoid-Textual.html#find",
        "fct-type": "method",
        "title": "find"
      },
      "index": {
        "description": "Like find from Data.List when applied to String Ignores non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "find",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003eMaybe Char",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003et-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eThe first argument folds over the non-character prime factors, the second over characters. Otherwise equivalent\n to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e t -\u003e a) -\u003e (a -\u003e Char -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Monoid-Textual.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "The first argument folds over the non-character prime factors the second over characters Otherwise equivalent to foldl from Data.List",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003et-\u003ea)-\u003e(a-\u003eChar-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e t -\u003e a) -\u003e (a -\u003e Char -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Monoid-Textual.html#foldl%27",
        "fct-type": "method",
        "title": "foldl'"
      },
      "index": {
        "description": "Strict version of foldl",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(a-\u003et-\u003ea)-\u003e(a-\u003eChar-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eThe first argument folds over the non-character prime factors, the second over characters. Otherwise equivalent\n to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(t -\u003e a -\u003e a) -\u003e (Char -\u003e a -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Monoid-Textual.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "The first argument folds over the non-character prime factors the second over characters Otherwise equivalent to foldr from Data.List",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003e(Char-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(t-\u003ea-\u003ea)-\u003e(Char-\u003ea-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003eContructs a new data type instance Like \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e, but from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e input instead of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fromText == fromString . Text.unpack\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Text -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#fromText",
        "fct-type": "method",
        "title": "fromText"
      },
      "index": {
        "description": "Contructs new data type instance Like fromString but from Text input instead of String fromText fromString Text.unpack",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "fromText",
        "normalized": "Text-\u003ea",
        "package": "monoid-subclasses",
        "partial": "Text",
        "signature": "Text-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e with a \u003ccode\u003eChar -\u003e Char\u003c/code\u003e function. Preserves all non-character data.\n\u003c/p\u003e\u003cpre\u003e map f == concatMap (singleton . f)\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Char) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "Equivalent to map from Data.List with Char Char function Preserves all non-character data map concatMap singleton",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "map",
        "normalized": "(Char-\u003eChar)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character\n data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e t -\u003e (a, t)",
        "fct-source": "src/Data-Monoid-Textual.html#mapAccumL",
        "fct-type": "method",
        "title": "mapAccumL"
      },
      "index": {
        "description": "Equivalent to mapAccumL from Data.List when applied to String but preserves all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "mapAccumL",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eb-\u003e(a,b)",
        "package": "monoid-subclasses",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003et-\u003e(a,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:mapAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character\n data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e t -\u003e (a, t)",
        "fct-source": "src/Data-Monoid-Textual.html#mapAccumR",
        "fct-type": "method",
        "title": "mapAccumR"
      },
      "index": {
        "description": "Equivalent to mapAccumR from Data.List when applied to String but preserves all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "mapAccumR",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eb-\u003e(a,b)",
        "package": "monoid-subclasses",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003et-\u003e(a,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#scanl",
        "fct-type": "method",
        "title": "scanl"
      },
      "index": {
        "description": "Equivalent to scanl from Data.List when applied to String but preserves all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "scanl",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:scanl1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character data.\n\u003c/p\u003e\u003cpre\u003e scanl f c == scanl1 f . (singleton c \u003c\u003e)\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#scanl1",
        "fct-type": "method",
        "title": "scanl1"
      },
      "index": {
        "description": "Equivalent to scanl1 from Data.List when applied to String but preserves all non-character data scanl scanl1 singleton",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "scanl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character data.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#scanr",
        "fct-type": "method",
        "title": "scanr"
      },
      "index": {
        "description": "Equivalent to scanr from Data.List when applied to String but preserves all non-character data",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "scanr",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:scanr1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but preserves all non-character data.\n\u003c/p\u003e\u003cpre\u003e scanr f c == scanr1 f . (\u003c\u003e singleton c)\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#scanr1",
        "fct-type": "method",
        "title": "scanr1"
      },
      "index": {
        "description": "Equivalent to scanr1 from Data.List when applied to String but preserves all non-character data scanr scanr1 singleton",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "scanr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a prime monoid containing a single character.\n\u003c/p\u003e\u003cpre\u003e singleton c == fromString [c]\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "Char -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Creates prime monoid containing single character singleton fromString",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "singleton",
        "normalized": "Char-\u003ea",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "Char-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e'span pt pc t' is equivalent to |(takeWhile pt pc t, dropWhile pt pc t)|.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(t -\u003e Bool) -\u003e (Char -\u003e Bool) -\u003e t -\u003e (t, t)",
        "fct-source": "src/Data-Monoid-Textual.html#span",
        "fct-type": "method",
        "title": "span"
      },
      "index": {
        "description": "span pt pc is equivalent to takeWhile pt pc dropWhile pt pc",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003e(Char-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(t-\u003eBool)-\u003e(Char-\u003eBool)-\u003et-\u003e(t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the monoid into components delimited by character separators satisfying the given predicate. The\n characters satisfying the predicate are not a part of the result.\n\u003c/p\u003e\u003cpre\u003e split p == Factorial.split (maybe False p . characterPrefix)\n\u003c/pre\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(Char -\u003e Bool) -\u003e t -\u003e [t]",
        "fct-source": "src/Data-Monoid-Textual.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "Splits the monoid into components delimited by character separators satisfying the given predicate The characters satisfying the predicate are not part of the result split Factorial.split maybe False characterPrefix",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "split",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003e[a]",
        "package": "monoid-subclasses",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003et-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:splitCharacterPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialized version of \u003ccode\u003e\u003ca\u003esplitPrimePrefix\u003c/a\u003e\u003c/code\u003e. Every prime factor of a \u003ccode\u003eTextual\u003c/code\u003e monoid must consist of a\n single character or no character at all.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "t -\u003e Maybe (Char, t)",
        "fct-source": "src/Data-Monoid-Textual.html#splitCharacterPrefix",
        "fct-type": "method",
        "title": "splitCharacterPrefix"
      },
      "index": {
        "description": "Specialized version of splitPrimePrefix Every prime factor of Textual monoid must consist of single character or no character at all",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "splitCharacterPrefix",
        "normalized": "a-\u003eMaybe(Char,a)",
        "package": "monoid-subclasses",
        "partial": "Character Prefix",
        "signature": "t-\u003eMaybe(Char,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoid-subclasses/docs/Data-Monoid-Textual.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eThe first predicate tests the non-character data, the second one the characters. Otherwise equivalent to\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.List\u003c/a\u003e when applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Textual",
        "fct-package": "monoid-subclasses",
        "fct-signature": "(t -\u003e Bool) -\u003e (Char -\u003e Bool) -\u003e t -\u003e t",
        "fct-source": "src/Data-Monoid-Textual.html#takeWhile",
        "fct-type": "method",
        "title": "takeWhile"
      },
      "index": {
        "description": "The first predicate tests the non-character data the second one the characters Otherwise equivalent to takeWhile from Data.List when applied to String",
        "hierarchy": "Data Monoid Textual",
        "module": "Data.Monoid.Textual",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003e(Char-\u003eBool)-\u003ea-\u003ea",
        "package": "monoid-subclasses",
        "partial": "While",
        "signature": "(t-\u003eBool)-\u003e(Char-\u003eBool)-\u003et-\u003et"
      }
    }
  }
]