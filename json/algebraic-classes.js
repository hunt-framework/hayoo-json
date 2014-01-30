[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#",
      "description": {
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "module",
        "fct-source": "src/Data-Algebra-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:Algebra",
      "description": {
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Algebra-Internal.html#Algebra",
        "fct-type": "class",
        "title": "Algebra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "Algebra",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:AlgebraSignature",
      "description": {
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Algebra-Internal.html#AlgebraSignature",
        "fct-type": "class",
        "title": "AlgebraSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "AlgebraSignature",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Algebra Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:Signature",
      "description": {
        "fct-descr": "\u003cp\u003eThe signature datatype for the class \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "Signature",
        "fct-type": "function",
        "title": "Signature"
      },
      "index": {
        "description": "The signature datatype for the class",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "Signature",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:algebra",
      "description": {
        "fct-descr": "\u003cp\u003eAn algebra \u003ccode\u003ef a -\u003e a\u003c/code\u003e corresponds to an instance of \u003ccode\u003ea\u003c/code\u003e of the class \u003ccode\u003eClass f\u003c/code\u003e.\n   In some cases, for example for tuple types, you can give an algebra generically for every signature:\n\u003c/p\u003e\u003cpre\u003e instance (Class f m, Class f n) =\u003e Algebra f (m, n) where\n   algebra fmn = (evaluate (fmap fst fmn), evaluate (fmap snd fmn))\n\u003c/pre\u003e",
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "f a -\u003e a",
        "fct-source": "src/Data-Algebra-Internal.html#algebra",
        "fct-type": "method",
        "title": "algebra"
      },
      "index": {
        "description": "An algebra corresponds to an instance of of the class Class In some cases for example for tuple types you can give an algebra generically for every signature instance Class Class Algebra where algebra fmn evaluate fmap fst fmn evaluate fmap snd fmn",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "algebra",
        "normalized": "a b-\u003eb",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:algebraA",
      "description": {
        "fct-descr": "\u003cp\u003eIf you just want to applicatively lift existing instances, you can use this default implementation of \u003ccode\u003e\u003ca\u003ealgebra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "f (g b) -\u003e g b",
        "fct-source": "src/Data-Algebra-Internal.html#algebraA",
        "fct-type": "function",
        "title": "algebraA"
      },
      "index": {
        "description": "If you just want to applicatively lift existing instances you can use this default implementation of algebra",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "algebraA",
        "normalized": "a(b c)-\u003eb c",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f(g b)-\u003eg b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate the operations of the signature to method calls of the class.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.Internal",
        "fct-package": "algebraic-classes",
        "fct-signature": "f b -\u003e b",
        "fct-source": "src/Data-Algebra-Internal.html#evaluate",
        "fct-type": "method",
        "title": "evaluate"
      },
      "index": {
        "description": "Translate the operations of the signature to method calls of the class",
        "hierarchy": "Data Algebra Internal",
        "module": "Data.Algebra.Internal",
        "name": "evaluate",
        "normalized": "a b-\u003eb",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "module",
        "fct-source": "src/Data-Algebra-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "TH",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#t:OperationTH",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "data",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "data",
        "title": "OperationTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "OperationTH",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Operation TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#t:SignatureTH",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "data",
        "fct-source": "src/Data-Algebra-TH.html#SignatureTH",
        "fct-type": "data",
        "title": "SignatureTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "SignatureTH",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Signature TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:OperationTH",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "OperationTH",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "OperationTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "OperationTH",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Operation TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:SignatureTH",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "SignatureTH",
        "fct-source": "src/Data-Algebra-TH.html#SignatureTH",
        "fct-type": "function",
        "title": "SignatureTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "SignatureTH",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Signature TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:arity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Int",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "arity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "arity",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:buildSignatureDataType",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "SignatureTH -\u003e [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#buildSignatureDataType",
        "fct-type": "function",
        "title": "buildSignatureDataType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "buildSignatureDataType",
        "normalized": "SignatureTH-\u003e[Dec]",
        "package": "algebraic-classes",
        "partial": "Signature Data Type",
        "signature": "SignatureTH-\u003e[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:constructor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Con",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "constructor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "constructor",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstance",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance for an algebraic class.\n   For example: \n\u003c/p\u003e\u003cpre\u003e deriveInstance [t| (Num m, Num n) =\u003e Num (m, n) |]\n\u003c/pre\u003e\u003cp\u003eTo be able to derive an instance for \u003ccode\u003ea\u003c/code\u003e of class \u003ccode\u003ec\u003c/code\u003e, we need an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAlgebra\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e,\n   where \u003ccode\u003ef\u003c/code\u003e is the signature of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederiveInstance\u003c/a\u003e\u003c/code\u003e will generate a signature for the class if there is no signature in scope.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Q Type -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveInstance",
        "fct-type": "function",
        "title": "deriveInstance"
      },
      "index": {
        "description": "Derive an instance for an algebraic class For example deriveInstance Num Num Num To be able to derive an instance for of class we need an instance of Algebra where is the signature of deriveInstance will generate signature for the class if there is no signature in scope",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "deriveInstance",
        "normalized": "Q Type-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Instance",
        "signature": "Q Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstanceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance for an algebraic class with a given partial implementation.\n   For example:\n\u003c/p\u003e\u003cpre\u003e deriveInstanceWith [t| Num n =\u003e Num (Integer -\u003e n) |] \n   [d|\n     fromInteger x y = fromInteger (x + y)\n   |]\n\u003c/pre\u003e",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveInstanceWith",
        "fct-type": "function",
        "title": "deriveInstanceWith"
      },
      "index": {
        "description": "Derive an instance for an algebraic class with given partial implementation For example deriveInstanceWith Num Num Integer fromInteger fromInteger",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "deriveInstanceWith",
        "normalized": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Instance With",
        "signature": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstanceWith_skipSignature",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance for an algebraic class with a given partial implementation,\n   but don't generate the signature. This is for when you want to derive several instances\n   of the same class, but can't splice the results directly. In that case \u003ccode\u003e\u003ca\u003ederiveSignature\u003c/a\u003e\u003c/code\u003e\n   can't detect it has already generated the signature earlier.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveInstanceWith_skipSignature",
        "fct-type": "function",
        "title": "deriveInstanceWith_skipSignature"
      },
      "index": {
        "description": "Derive an instance for an algebraic class with given partial implementation but don generate the signature This is for when you want to derive several instances of the same class but can splice the results directly In that case deriveSignature can detect it has already generated the signature earlier",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "deriveInstanceWith_skipSignature",
        "normalized": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Instance With Signature",
        "signature": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveSignature",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a signature for an algebraic class.\n   For example:\n\u003c/p\u003e\u003cpre\u003e deriveSignature ''Monoid\n\u003c/pre\u003e\u003cp\u003eThe above would generate the following:\n\u003c/p\u003e\u003cpre\u003e data MonoidSignature a = Op_mempty | Op_mappend a a | Op_mconcat [a]\n   deriving (Functor, Foldable, Traversable, Eq, Ord)\n\n type instance Signature Monoid = MonoidSignature\n\n instance AlgebraSignature MonoidSignature where\n   type Class MonoidSignature = Monoid\n   evaluate Op_mempty = mempty\n   evaluate (Op_mappend a b) = mappend a b\n   evaluate (Op_mconcat ms) = mconcat ms  \n\n instance Show a =\u003e Show (MonoidSignature a) where\n   showsPrec d Op_mempty          = showParen (d \u003e 10) $ showString \"mempty\"\n   showsPrec d (Op_mappend a1 a2) = showParen (d \u003e 10) $ showString \"mappend\" . showChar ' ' . showsPrec 11 a1 . showChar ' ' . showsPrec 11 a2\n   showsPrec d (Op_mconcat a1)    = showParen (d \u003e 10) $ showString \"mconcat\" . showChar ' ' . showsPrec 11 a1\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederiveSignature\u003c/a\u003e\u003c/code\u003e creates the signature data type and an instance for it of the\n   \u003ccode\u003e\u003ca\u003eAlgebraSignature\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003eDeriveTraversable\u003c/code\u003e is used the generate the \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instance of the signature.\n\u003c/p\u003e\u003cp\u003eThis will do nothing if there is already a signature for the class in scope.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveSignature",
        "fct-type": "function",
        "title": "deriveSignature"
      },
      "index": {
        "description": "Derive signature for an algebraic class For example deriveSignature Monoid The above would generate the following data MonoidSignature Op mempty Op mappend Op mconcat deriving Functor Foldable Traversable Eq Ord type instance Signature Monoid MonoidSignature instance AlgebraSignature MonoidSignature where type Class MonoidSignature Monoid evaluate Op mempty mempty evaluate Op mappend mappend evaluate Op mconcat ms mconcat ms instance Show Show MonoidSignature where showsPrec Op mempty showParen showString mempty showsPrec Op mappend a1 a2 showParen showString mappend showChar showsPrec a1 showChar showsPrec a2 showsPrec Op mconcat a1 showParen showString mconcat showChar showsPrec a1 deriveSignature creates the signature data type and an instance for it of the AlgebraSignature class DeriveTraversable is used the generate the Traversable instance of the signature This will do nothing if there is already signature for the class in scope",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "deriveSignature",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Signature",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:fixity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Fixity",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "fixity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "fixity",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:functionName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "functionName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "functionName",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:getSignatureInfo",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name -\u003e Q SignatureTH",
        "fct-source": "src/Data-Algebra-TH.html#getSignatureInfo",
        "fct-type": "function",
        "title": "getSignatureInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "getSignatureInfo",
        "normalized": "Name-\u003eQ SignatureTH",
        "package": "algebraic-classes",
        "partial": "Signature Info",
        "signature": "Name-\u003eQ SignatureTH"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:operationName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name",
        "fct-source": "src/Data-Algebra-TH.html#OperationTH",
        "fct-type": "function",
        "title": "operationName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "operationName",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:operations",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "[OperationTH]",
        "fct-source": "src/Data-Algebra-TH.html#SignatureTH",
        "fct-type": "function",
        "title": "operations"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "operations",
        "normalized": "[OperationTH]",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "[OperationTH]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:signatureInstances",
      "description": {
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name -\u003e SignatureTH -\u003e [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#signatureInstances",
        "fct-type": "function",
        "title": "signatureInstances"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "signatureInstances",
        "normalized": "Name-\u003eSignatureTH-\u003e[Dec]",
        "package": "algebraic-classes",
        "partial": "Instances",
        "signature": "Name-\u003eSignatureTH-\u003e[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:signatureName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name",
        "fct-source": "src/Data-Algebra-TH.html#SignatureTH",
        "fct-type": "function",
        "title": "signatureName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "signatureName",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:typeVarName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algebra.TH",
        "fct-package": "algebraic-classes",
        "fct-signature": "Name",
        "fct-source": "src/Data-Algebra-TH.html#SignatureTH",
        "fct-type": "function",
        "title": "typeVarName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra TH",
        "module": "Data.Algebra.TH",
        "name": "typeVarName",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Var Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#",
      "description": {
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "module",
        "fct-source": "src/Data-Algebra.html",
        "fct-type": "module",
        "title": "Algebra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "Algebra",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:Algebra",
      "description": {
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Algebra-Internal.html#Algebra",
        "fct-type": "class",
        "title": "Algebra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "Algebra",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:AlgebraSignature",
      "description": {
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "class",
        "fct-source": "src/Data-Algebra-Internal.html#AlgebraSignature",
        "fct-type": "class",
        "title": "AlgebraSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "AlgebraSignature",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Algebra Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:Signature",
      "description": {
        "fct-descr": "\u003cp\u003eThe signature datatype for the class \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "Signature",
        "fct-type": "function",
        "title": "Signature"
      },
      "index": {
        "description": "The signature datatype for the class",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "Signature",
        "normalized": "",
        "package": "algebraic-classes",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:algebra",
      "description": {
        "fct-descr": "\u003cp\u003eAn algebra \u003ccode\u003ef a -\u003e a\u003c/code\u003e corresponds to an instance of \u003ccode\u003ea\u003c/code\u003e of the class \u003ccode\u003eClass f\u003c/code\u003e.\n   In some cases, for example for tuple types, you can give an algebra generically for every signature:\n\u003c/p\u003e\u003cpre\u003e instance (Class f m, Class f n) =\u003e Algebra f (m, n) where\n   algebra fmn = (evaluate (fmap fst fmn), evaluate (fmap snd fmn))\n\u003c/pre\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "f a -\u003e a",
        "fct-source": "src/Data-Algebra-Internal.html#algebra",
        "fct-type": "method",
        "title": "algebra"
      },
      "index": {
        "description": "An algebra corresponds to an instance of of the class Class In some cases for example for tuple types you can give an algebra generically for every signature instance Class Class Algebra where algebra fmn evaluate fmap fst fmn evaluate fmap snd fmn",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "algebra",
        "normalized": "a b-\u003eb",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:algebraA",
      "description": {
        "fct-descr": "\u003cp\u003eIf you just want to applicatively lift existing instances, you can use this default implementation of \u003ccode\u003e\u003ca\u003ealgebra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "f (g b) -\u003e g b",
        "fct-source": "src/Data-Algebra-Internal.html#algebraA",
        "fct-type": "function",
        "title": "algebraA"
      },
      "index": {
        "description": "If you just want to applicatively lift existing instances you can use this default implementation of algebra",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "algebraA",
        "normalized": "a(b c)-\u003eb c",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f(g b)-\u003eg b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:deriveInstance",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance for an algebraic class.\n   For example: \n\u003c/p\u003e\u003cpre\u003e deriveInstance [t| (Num m, Num n) =\u003e Num (m, n) |]\n\u003c/pre\u003e\u003cp\u003eTo be able to derive an instance for \u003ccode\u003ea\u003c/code\u003e of class \u003ccode\u003ec\u003c/code\u003e, we need an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAlgebra\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e,\n   where \u003ccode\u003ef\u003c/code\u003e is the signature of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederiveInstance\u003c/a\u003e\u003c/code\u003e will generate a signature for the class if there is no signature in scope.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "Q Type -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveInstance",
        "fct-type": "function",
        "title": "deriveInstance"
      },
      "index": {
        "description": "Derive an instance for an algebraic class For example deriveInstance Num Num Num To be able to derive an instance for of class we need an instance of Algebra where is the signature of deriveInstance will generate signature for the class if there is no signature in scope",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "deriveInstance",
        "normalized": "Q Type-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Instance",
        "signature": "Q Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:deriveInstanceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance for an algebraic class with a given partial implementation.\n   For example:\n\u003c/p\u003e\u003cpre\u003e deriveInstanceWith [t| Num n =\u003e Num (Integer -\u003e n) |] \n   [d|\n     fromInteger x y = fromInteger (x + y)\n   |]\n\u003c/pre\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
        "fct-source": "src/Data-Algebra-TH.html#deriveInstanceWith",
        "fct-type": "function",
        "title": "deriveInstanceWith"
      },
      "index": {
        "description": "Derive an instance for an algebraic class with given partial implementation For example deriveInstanceWith Num Num Integer fromInteger fromInteger",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "deriveInstanceWith",
        "normalized": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
        "package": "algebraic-classes",
        "partial": "Instance With",
        "signature": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate the operations of the signature to method calls of the class.\n\u003c/p\u003e",
        "fct-module": "Data.Algebra",
        "fct-package": "algebraic-classes",
        "fct-signature": "f b -\u003e b",
        "fct-source": "src/Data-Algebra-Internal.html#evaluate",
        "fct-type": "method",
        "title": "evaluate"
      },
      "index": {
        "description": "Translate the operations of the signature to method calls of the class",
        "hierarchy": "Data Algebra",
        "module": "Data.Algebra",
        "name": "evaluate",
        "normalized": "a b-\u003eb",
        "package": "algebraic-classes",
        "partial": "",
        "signature": "f b-\u003eb"
      }
    }
  }
]