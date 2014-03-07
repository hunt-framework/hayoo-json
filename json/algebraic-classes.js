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
        "word": "algebraic-classes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.Internal",
          "name": "Internal",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "Internal",
          "package": "algebraic-classes",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.Internal",
          "name": "Algebra",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-Internal.html#Algebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "Algebra",
          "package": "algebraic-classes",
          "partial": "Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.Internal",
          "name": "AlgebraSignature",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-Internal.html#AlgebraSignature",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "AlgebraSignature",
          "package": "algebraic-classes",
          "partial": "Algebra Signature",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:AlgebraSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signature datatype for the class \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Algebra.Internal\",\"Data.Algebra\"]",
          "name": "Signature",
          "package": "algebraic-classes",
          "signature": "Signature",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:Signature\",\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:Signature\"]"
        },
        "index": {
          "description": "The signature datatype for the class",
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "Signature",
          "package": "algebraic-classes",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn algebra \u003ccode\u003ef a -\u003e a\u003c/code\u003e corresponds to an instance of \u003ccode\u003ea\u003c/code\u003e of the class \u003ccode\u003eClass f\u003c/code\u003e.\n   In some cases, for example for tuple types, you can give an algebra generically for every signature:\n\u003c/p\u003e\u003cpre\u003e instance (Class f m, Class f n) =\u003e Algebra f (m, n) where\n   algebra fmn = (evaluate (fmap fst fmn), evaluate (fmap snd fmn))\n\u003c/pre\u003e",
          "module": "Data.Algebra.Internal",
          "name": "algebra",
          "package": "algebraic-classes",
          "signature": "f a -\u003e a",
          "source": "src/Data-Algebra-Internal.html#algebra",
          "type": "method"
        },
        "index": {
          "description": "An algebra corresponds to an instance of of the class Class In some cases for example for tuple types you can give an algebra generically for every signature instance Class Class Algebra where algebra fmn evaluate fmap fst fmn evaluate fmap snd fmn",
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "algebra",
          "normalized": "a b-\u003eb",
          "package": "algebraic-classes",
          "signature": "f a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you just want to applicatively lift existing instances, you can use this default implementation of \u003ccode\u003e\u003ca\u003ealgebra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Algebra.Internal\",\"Data.Algebra\"]",
          "name": "algebraA",
          "package": "algebraic-classes",
          "signature": "f (g b) -\u003e g b",
          "source": "src/Data-Algebra-Internal.html#algebraA",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:algebraA\",\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:algebraA\"]"
        },
        "index": {
          "description": "If you just want to applicatively lift existing instances you can use this default implementation of algebra",
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "algebraA",
          "normalized": "a(b c)-\u003eb c",
          "package": "algebraic-classes",
          "signature": "f(g b)-\u003eg b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:algebraA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the operations of the signature to method calls of the class.\n\u003c/p\u003e",
          "module": "Data.Algebra.Internal",
          "name": "evaluate",
          "package": "algebraic-classes",
          "signature": "f b -\u003e b",
          "source": "src/Data-Algebra-Internal.html#evaluate",
          "type": "method"
        },
        "index": {
          "description": "Translate the operations of the signature to method calls of the class",
          "hierarchy": "Data Algebra Internal",
          "module": "Data.Algebra.Internal",
          "name": "evaluate",
          "normalized": "a b-\u003eb",
          "package": "algebraic-classes",
          "signature": "f b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-Internal.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "TH",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "TH",
          "package": "algebraic-classes",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "OperationTH",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "OperationTH",
          "package": "algebraic-classes",
          "partial": "Operation TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#t:OperationTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "SignatureTH",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-TH.html#SignatureTH",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "SignatureTH",
          "package": "algebraic-classes",
          "partial": "Signature TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#t:SignatureTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "OperationTH",
          "package": "algebraic-classes",
          "signature": "OperationTH",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "OperationTH",
          "package": "algebraic-classes",
          "partial": "Operation TH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:OperationTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "SignatureTH",
          "package": "algebraic-classes",
          "signature": "SignatureTH",
          "source": "src/Data-Algebra-TH.html#SignatureTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "SignatureTH",
          "package": "algebraic-classes",
          "partial": "Signature TH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:SignatureTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "arity",
          "package": "algebraic-classes",
          "signature": "Int",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "arity",
          "package": "algebraic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "buildSignatureDataType",
          "package": "algebraic-classes",
          "signature": "SignatureTH -\u003e [Dec]",
          "source": "src/Data-Algebra-TH.html#buildSignatureDataType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "buildSignatureDataType",
          "normalized": "SignatureTH-\u003e[Dec]",
          "package": "algebraic-classes",
          "partial": "Signature Data Type",
          "signature": "SignatureTH-\u003e[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:buildSignatureDataType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "constructor",
          "package": "algebraic-classes",
          "signature": "Con",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "constructor",
          "package": "algebraic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance for an algebraic class.\n   For example: \n\u003c/p\u003e\u003cpre\u003e deriveInstance [t| (Num m, Num n) =\u003e Num (m, n) |]\n\u003c/pre\u003e\u003cp\u003eTo be able to derive an instance for \u003ccode\u003ea\u003c/code\u003e of class \u003ccode\u003ec\u003c/code\u003e, we need an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAlgebra\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e,\n   where \u003ccode\u003ef\u003c/code\u003e is the signature of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederiveInstance\u003c/a\u003e\u003c/code\u003e will generate a signature for the class if there is no signature in scope.\n\u003c/p\u003e",
          "module": "[\"Data.Algebra.TH\",\"Data.Algebra\"]",
          "name": "deriveInstance",
          "package": "algebraic-classes",
          "signature": "Q Type -\u003e Q [Dec]",
          "source": "src/Data-Algebra-TH.html#deriveInstance",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstance\",\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:deriveInstance\"]"
        },
        "index": {
          "description": "Derive an instance for an algebraic class For example deriveInstance Num Num Num To be able to derive an instance for of class we need an instance of Algebra where is the signature of deriveInstance will generate signature for the class if there is no signature in scope",
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "deriveInstance",
          "normalized": "Q Type-\u003eQ[Dec]",
          "package": "algebraic-classes",
          "partial": "Instance",
          "signature": "Q Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance for an algebraic class with a given partial implementation.\n   For example:\n\u003c/p\u003e\u003cpre\u003e deriveInstanceWith [t| Num n =\u003e Num (Integer -\u003e n) |] \n   [d|\n     fromInteger x y = fromInteger (x + y)\n   |]\n\u003c/pre\u003e",
          "module": "[\"Data.Algebra.TH\",\"Data.Algebra\"]",
          "name": "deriveInstanceWith",
          "package": "algebraic-classes",
          "signature": "Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Algebra-TH.html#deriveInstanceWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstanceWith\",\"http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:deriveInstanceWith\"]"
        },
        "index": {
          "description": "Derive an instance for an algebraic class with given partial implementation For example deriveInstanceWith Num Num Integer fromInteger fromInteger",
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "deriveInstanceWith",
          "normalized": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "algebraic-classes",
          "partial": "Instance With",
          "signature": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstanceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance for an algebraic class with a given partial implementation,\n   but don't generate the signature. This is for when you want to derive several instances\n   of the same class, but can't splice the results directly. In that case \u003ccode\u003e\u003ca\u003ederiveSignature\u003c/a\u003e\u003c/code\u003e\n   can't detect it has already generated the signature earlier.\n\u003c/p\u003e",
          "module": "Data.Algebra.TH",
          "name": "deriveInstanceWith_skipSignature",
          "package": "algebraic-classes",
          "signature": "Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/Data-Algebra-TH.html#deriveInstanceWith_skipSignature",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance for an algebraic class with given partial implementation but don generate the signature This is for when you want to derive several instances of the same class but can splice the results directly In that case deriveSignature can detect it has already generated the signature earlier",
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "deriveInstanceWith_skipSignature",
          "normalized": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "algebraic-classes",
          "partial": "Instance With Signature",
          "signature": "Q Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveInstanceWith_skipSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a signature for an algebraic class.\n   For example:\n\u003c/p\u003e\u003cpre\u003e deriveSignature ''Monoid\n\u003c/pre\u003e\u003cp\u003eThe above would generate the following:\n\u003c/p\u003e\u003cpre\u003e data MonoidSignature a = Op_mempty | Op_mappend a a | Op_mconcat [a]\n   deriving (Functor, Foldable, Traversable, Eq, Ord)\n\n type instance Signature Monoid = MonoidSignature\n\n instance AlgebraSignature MonoidSignature where\n   type Class MonoidSignature = Monoid\n   evaluate Op_mempty = mempty\n   evaluate (Op_mappend a b) = mappend a b\n   evaluate (Op_mconcat ms) = mconcat ms  \n\n instance Show a =\u003e Show (MonoidSignature a) where\n   showsPrec d Op_mempty          = showParen (d \u003e 10) $ showString \"mempty\"\n   showsPrec d (Op_mappend a1 a2) = showParen (d \u003e 10) $ showString \"mappend\" . showChar ' ' . showsPrec 11 a1 . showChar ' ' . showsPrec 11 a2\n   showsPrec d (Op_mconcat a1)    = showParen (d \u003e 10) $ showString \"mconcat\" . showChar ' ' . showsPrec 11 a1\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ederiveSignature\u003c/a\u003e\u003c/code\u003e creates the signature data type and an instance for it of the\n   \u003ccode\u003e\u003ca\u003eAlgebraSignature\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003eDeriveTraversable\u003c/code\u003e is used the generate the \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instance of the signature.\n\u003c/p\u003e\u003cp\u003eThis will do nothing if there is already a signature for the class in scope.\n\u003c/p\u003e",
          "module": "Data.Algebra.TH",
          "name": "deriveSignature",
          "package": "algebraic-classes",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Algebra-TH.html#deriveSignature",
          "type": "function"
        },
        "index": {
          "description": "Derive signature for an algebraic class For example deriveSignature Monoid The above would generate the following data MonoidSignature Op mempty Op mappend Op mconcat deriving Functor Foldable Traversable Eq Ord type instance Signature Monoid MonoidSignature instance AlgebraSignature MonoidSignature where type Class MonoidSignature Monoid evaluate Op mempty mempty evaluate Op mappend mappend evaluate Op mconcat ms mconcat ms instance Show Show MonoidSignature where showsPrec Op mempty showParen showString mempty showsPrec Op mappend a1 a2 showParen showString mappend showChar showsPrec a1 showChar showsPrec a2 showsPrec Op mconcat a1 showParen showString mconcat showChar showsPrec a1 deriveSignature creates the signature data type and an instance for it of the AlgebraSignature class DeriveTraversable is used the generate the Traversable instance of the signature This will do nothing if there is already signature for the class in scope",
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "deriveSignature",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "algebraic-classes",
          "partial": "Signature",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:deriveSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "fixity",
          "package": "algebraic-classes",
          "signature": "Fixity",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "fixity",
          "package": "algebraic-classes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "functionName",
          "package": "algebraic-classes",
          "signature": "Name",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "functionName",
          "package": "algebraic-classes",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:functionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "getSignatureInfo",
          "package": "algebraic-classes",
          "signature": "Name -\u003e Q SignatureTH",
          "source": "src/Data-Algebra-TH.html#getSignatureInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "getSignatureInfo",
          "normalized": "Name-\u003eQ SignatureTH",
          "package": "algebraic-classes",
          "partial": "Signature Info",
          "signature": "Name-\u003eQ SignatureTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:getSignatureInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "operationName",
          "package": "algebraic-classes",
          "signature": "Name",
          "source": "src/Data-Algebra-TH.html#OperationTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "operationName",
          "package": "algebraic-classes",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:operationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "operations",
          "package": "algebraic-classes",
          "signature": "[OperationTH]",
          "source": "src/Data-Algebra-TH.html#SignatureTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "operations",
          "normalized": "[OperationTH]",
          "package": "algebraic-classes",
          "signature": "[OperationTH]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:operations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "signatureInstances",
          "package": "algebraic-classes",
          "signature": "Name -\u003e SignatureTH -\u003e [Dec]",
          "source": "src/Data-Algebra-TH.html#signatureInstances",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "signatureInstances",
          "normalized": "Name-\u003eSignatureTH-\u003e[Dec]",
          "package": "algebraic-classes",
          "partial": "Instances",
          "signature": "Name-\u003eSignatureTH-\u003e[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:signatureInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "signatureName",
          "package": "algebraic-classes",
          "signature": "Name",
          "source": "src/Data-Algebra-TH.html#SignatureTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "signatureName",
          "package": "algebraic-classes",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:signatureName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra.TH",
          "name": "typeVarName",
          "package": "algebraic-classes",
          "signature": "Name",
          "source": "src/Data-Algebra-TH.html#SignatureTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algebra TH",
          "module": "Data.Algebra.TH",
          "name": "typeVarName",
          "package": "algebraic-classes",
          "partial": "Var Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra-TH.html#v:typeVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "algebraic-classes",
          "partial": "Algebra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-Internal.html#Algebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "Algebra",
          "package": "algebraic-classes",
          "partial": "Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algebra",
          "name": "AlgebraSignature",
          "package": "algebraic-classes",
          "source": "src/Data-Algebra-Internal.html#AlgebraSignature",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "AlgebraSignature",
          "package": "algebraic-classes",
          "partial": "Algebra Signature",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#t:AlgebraSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn algebra \u003ccode\u003ef a -\u003e a\u003c/code\u003e corresponds to an instance of \u003ccode\u003ea\u003c/code\u003e of the class \u003ccode\u003eClass f\u003c/code\u003e.\n   In some cases, for example for tuple types, you can give an algebra generically for every signature:\n\u003c/p\u003e\u003cpre\u003e instance (Class f m, Class f n) =\u003e Algebra f (m, n) where\n   algebra fmn = (evaluate (fmap fst fmn), evaluate (fmap snd fmn))\n\u003c/pre\u003e",
          "module": "Data.Algebra",
          "name": "algebra",
          "package": "algebraic-classes",
          "signature": "f a -\u003e a",
          "source": "src/Data-Algebra-Internal.html#algebra",
          "type": "method"
        },
        "index": {
          "description": "An algebra corresponds to an instance of of the class Class In some cases for example for tuple types you can give an algebra generically for every signature instance Class Class Algebra where algebra fmn evaluate fmap fst fmn evaluate fmap snd fmn",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "algebra",
          "normalized": "a b-\u003eb",
          "package": "algebraic-classes",
          "signature": "f a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the operations of the signature to method calls of the class.\n\u003c/p\u003e",
          "module": "Data.Algebra",
          "name": "evaluate",
          "package": "algebraic-classes",
          "signature": "f b -\u003e b",
          "source": "src/Data-Algebra-Internal.html#evaluate",
          "type": "method"
        },
        "index": {
          "description": "Translate the operations of the signature to method calls of the class",
          "hierarchy": "Data Algebra",
          "module": "Data.Algebra",
          "name": "evaluate",
          "normalized": "a b-\u003eb",
          "package": "algebraic-classes",
          "signature": "f b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebraic-classes/docs/Data-Algebra.html#v:evaluate"
      }
    }
  ]
]