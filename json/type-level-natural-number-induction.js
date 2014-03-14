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
        "word": "type-level-natural-number-induction"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "Induction",
          "package": "type-level-natural-number-induction",
          "source": "src/TypeLevel-NaturalNumber-Induction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "Induction",
          "package": "type-level-natural-number-induction",
          "partial": "Induction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Induction class contains high-level combinators for\n performing monadic operations on inductive structures --- that is,\n datatypes tagged with a natural number.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "Induction",
          "package": "type-level-natural-number-induction",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#Induction",
          "type": "class"
        },
        "index": {
          "description": "The Induction class contains high-level combinators for performing monadic operations on inductive structures that is datatypes tagged with natural number",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "Induction",
          "package": "type-level-natural-number-induction",
          "partial": "Induction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#t:Induction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ededuction\u003c/a\u003e\u003c/code\u003e function provides a high-level combinator for\n folding over an inductive structure; essentially this method is the\n opposite of the \u003ccode\u003e\u003ca\u003einduction\u003c/a\u003e\u003c/code\u003e method which builds up an inductive\n structure rather than tearing one down.  See \u003ccode\u003e\u003ca\u003edeductionM\u003c/a\u003e\u003c/code\u003e for a\n monadic version of this function, and \u003ccode\u003e\u003ca\u003ededuction\u003c/a\u003e\u003c/code\u003e for a version of\n this function acting on two structures simultaneously rather than\n one.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction",
          "package": "type-level-natural-number-induction",
          "signature": "α-\u003e (f Zero -\u003e α -\u003e β)-\u003e (forall n.  f (SuccessorTo n) -\u003e α -\u003e (f n, α))-\u003e f n-\u003e β",
          "type": "function"
        },
        "index": {
          "description": "The deduction function provides high-level combinator for folding over an inductive structure essentially this method is the opposite of the induction method which builds up an inductive structure rather than tearing one down See deductionM for monadic version of this function and deduction for version of this function acting on two structures simultaneously rather than one",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction",
          "normalized": "a-\u003e(b Zero-\u003ea-\u003ec)-\u003e(d e b(SuccessorTo f)-\u003ea-\u003e(b f,a))-\u003eb f-\u003ec",
          "package": "type-level-natural-number-induction",
          "signature": "α-\u003e(f Zero-\u003eα-\u003eβ)-\u003e(forall n. f(SuccessorTo n)-\u003eα-\u003e(f n,α))-\u003ef n-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:deduction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ededuction2\u003c/a\u003e\u003c/code\u003e function is the same idea as the \u003ccode\u003e\u003ca\u003edeductionM\u003c/a\u003e\u003c/code\u003e\n function, but it simultaneously folds over two inductive structures\n rather than one.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction2",
          "package": "type-level-natural-number-induction",
          "signature": "α-\u003e (f Zero -\u003e g Zero -\u003e α -\u003e β)-\u003e (forall n.  f (SuccessorTo n) -\u003e g (SuccessorTo n) -\u003e α -\u003e (f n, g n, α))-\u003e f n-\u003e g n-\u003e β",
          "type": "function"
        },
        "index": {
          "description": "The deduction2 function is the same idea as the deductionM function but it simultaneously folds over two inductive structures rather than one",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction2",
          "normalized": "a-\u003e(b Zero-\u003ec Zero-\u003ea-\u003ed)-\u003e(e f b(SuccessorTo g)-\u003ec(SuccessorTo g)-\u003ea-\u003e(b g,c g,a))-\u003eb g-\u003ec g-\u003ed",
          "package": "type-level-natural-number-induction",
          "signature": "α-\u003e(f Zero-\u003eg Zero-\u003eα-\u003eβ)-\u003e(forall n. f(SuccessorTo n)-\u003eg(SuccessorTo n)-\u003eα-\u003e(f n,g n,α))-\u003ef n-\u003eg n-\u003eβ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:deduction2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ededuction2M\u003c/a\u003e\u003c/code\u003e method is the same idea as the \u003ccode\u003e\u003ca\u003edeductionM\u003c/a\u003e\u003c/code\u003e\n method, but it simultaneously folds over two inductive structures\n rather than one.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction2M",
          "package": "type-level-natural-number-induction",
          "signature": "deduction2M",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#deduction2M",
          "type": "method"
        },
        "index": {
          "description": "The deduction2M method is the same idea as the deductionM method but it simultaneously folds over two inductive structures rather than one",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deduction2M",
          "package": "type-level-natural-number-induction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:deduction2M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeductionM\u003c/a\u003e\u003c/code\u003e method provides a high-level combinator for\n folding monadically over an inductive structure; essentially\n this method is the opposite of the \u003ccode\u003e\u003ca\u003einductionM\u003c/a\u003e\u003c/code\u003e method which\n builds up an inductive structure rather than tearing one down.\n See \u003ccode\u003e\u003ca\u003ededuction\u003c/a\u003e\u003c/code\u003e for a non-monadic version of this function, and\n \u003ccode\u003e\u003ca\u003ededuction2M\u003c/a\u003e\u003c/code\u003e for a version of this function acting on two\n structures simultaneously rather than one.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deductionM",
          "package": "type-level-natural-number-induction",
          "signature": "deductionM",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#deductionM",
          "type": "method"
        },
        "index": {
          "description": "The deductionM method provides high-level combinator for folding monadically over an inductive structure essentially this method is the opposite of the inductionM method which builds up an inductive structure rather than tearing one down See deduction for non-monadic version of this function and deduction2M for version of this function acting on two structures simultaneously rather than one",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "deductionM",
          "package": "type-level-natural-number-induction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:deductionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einduction\u003c/a\u003e\u003c/code\u003e function provides a high-level combinator for\n building up an inductive structure starting from given seed data;\n essentially this method is the opposite of \u003ccode\u003e\u003ca\u003ededuction\u003c/a\u003e\u003c/code\u003e method which\n tears down an inductive structure rather than building one up.  See\n \u003ccode\u003e\u003ca\u003einductionM\u003c/a\u003e\u003c/code\u003e for a monadic version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "induction",
          "package": "type-level-natural-number-induction",
          "signature": "(a -\u003e (a, f Zero)) -\u003e (forall n.  a -\u003e f n -\u003e (a, f (SuccessorTo n))) -\u003e a -\u003e (a, f n)",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#induction",
          "type": "function"
        },
        "index": {
          "description": "The induction function provides high-level combinator for building up an inductive structure starting from given seed data essentially this method is the opposite of deduction method which tears down an inductive structure rather than building one up See inductionM for monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "induction",
          "normalized": "(a-\u003e(a,b Zero))-\u003e(c d a-\u003eb e-\u003e(a,b(SuccessorTo e)))-\u003ea-\u003e(a,b e)",
          "package": "type-level-natural-number-induction",
          "signature": "(a-\u003e(a,f Zero))-\u003e(forall n. a-\u003ef n-\u003e(a,f(SuccessorTo n)))-\u003ea-\u003e(a,f n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:induction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einductionM\u003c/a\u003e\u003c/code\u003e method provides a high-level combinator for\n building up an inductive structure monadically starting from\n given seed data; essentially this method is the opposite of\n \u003ccode\u003e\u003ca\u003edeductionM\u003c/a\u003e\u003c/code\u003e method which tears down an inductive structure\n rather than building one up.  See \u003ccode\u003e\u003ca\u003einduction\u003c/a\u003e\u003c/code\u003e for a non-monadic\n version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionM",
          "package": "type-level-natural-number-induction",
          "signature": "inductionM",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#inductionM",
          "type": "method"
        },
        "index": {
          "description": "The inductionM method provides high-level combinator for building up an inductive structure monadically starting from given seed data essentially this method is the opposite of deductionM method which tears down an inductive structure rather than building one up See induction for non-monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionM",
          "package": "type-level-natural-number-induction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:inductionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einductionMOnLeftFold\u003c/a\u003e\u003c/code\u003e function is provided for the common\n case where one is building up an inductive structure by performing\n a monadic left fold over a list.  A pre-condition of calling this\n function is that the list be the same size as the data structure,\n i.e. that the length of the list be equal to the natural number\n tagging the structure.  When this pre-condition is violated, it\n returns _|_ by calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a message that the list is\n either too long or too short.  See \u003ccode\u003e\u003ca\u003einductionOnLeftFold\u003c/a\u003e\u003c/code\u003e for a\n non-monadic version of this function, and \u003ccode\u003e\u003ca\u003einductionMOnRightFold\u003c/a\u003e\u003c/code\u003e\n for a version of this function that performs a right fold over the\n list.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionMOnLeftFold",
          "package": "type-level-natural-number-induction",
          "signature": "m (f Zero)-\u003e (forall n.  α -\u003e f n -\u003e m (f (SuccessorTo n)))-\u003e [α]-\u003e m (f n)",
          "type": "function"
        },
        "index": {
          "description": "The inductionMOnLeftFold function is provided for the common case where one is building up an inductive structure by performing monadic left fold over list pre-condition of calling this function is that the list be the same size as the data structure i.e that the length of the list be equal to the natural number tagging the structure When this pre-condition is violated it returns by calling error with message that the list is either too long or too short See inductionOnLeftFold for non-monadic version of this function and inductionMOnRightFold for version of this function that performs right fold over the list",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionMOnLeftFold",
          "normalized": "a(b Zero)-\u003e(c d e-\u003eb f-\u003ea(b(SuccessorTo f)))-\u003e[e]-\u003ea(b f)",
          "package": "type-level-natural-number-induction",
          "partial": "MOn Left Fold",
          "signature": "m(f Zero)-\u003e(forall n. α-\u003ef n-\u003em(f(SuccessorTo n)))-\u003e[α]-\u003em(f n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:inductionMOnLeftFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is the same idea as \u003ccode\u003e\u003ca\u003einductionMOnLeftFold\u003c/a\u003e\u003c/code\u003e function,\n but it performs a right-fold rather than a left-fold over the list.\n See \u003ccode\u003e\u003ca\u003einductionOnRightFold\u003c/a\u003e\u003c/code\u003e for a non-monadic version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionMOnRightFold",
          "package": "type-level-natural-number-induction",
          "signature": "m (f Zero)-\u003e (forall n.  α -\u003e f n -\u003e m (f (SuccessorTo n)))-\u003e [α]-\u003e m (f n)",
          "type": "function"
        },
        "index": {
          "description": "This function is the same idea as inductionMOnLeftFold function but it performs right-fold rather than left-fold over the list See inductionOnRightFold for non-monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionMOnRightFold",
          "normalized": "a(b Zero)-\u003e(c d e-\u003eb f-\u003ea(b(SuccessorTo f)))-\u003e[e]-\u003ea(b f)",
          "package": "type-level-natural-number-induction",
          "partial": "MOn Right Fold",
          "signature": "m(f Zero)-\u003e(forall n. α-\u003ef n-\u003em(f(SuccessorTo n)))-\u003e[α]-\u003em(f n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:inductionMOnRightFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einductionOnLeftFold\u003c/a\u003e\u003c/code\u003e function is provided for the common\n case where one is building up an inductive structure by performing\n a left fold over a list.  A pre-condition of calling this function\n is that the list be the same size as the data structure, i.e. that\n the length of the list be equal to the natural number tagging the\n structure.  When this pre-condition is violated, it returns _|_ by\n calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e with a message that the list is either too long or\n too short.  See \u003ccode\u003e\u003ca\u003einductionMOnLeftFold\u003c/a\u003e\u003c/code\u003e for a monadic version of\n this function, and \u003ccode\u003e\u003ca\u003einductionOnRightFold\u003c/a\u003e\u003c/code\u003e for a version of this\n function that performs a right fold over the list.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionOnLeftFold",
          "package": "type-level-natural-number-induction",
          "signature": "f Zero-\u003e (forall n.  α -\u003e f n -\u003e f (SuccessorTo n))-\u003e [α]-\u003e f n",
          "type": "function"
        },
        "index": {
          "description": "The inductionOnLeftFold function is provided for the common case where one is building up an inductive structure by performing left fold over list pre-condition of calling this function is that the list be the same size as the data structure i.e that the length of the list be equal to the natural number tagging the structure When this pre-condition is violated it returns by calling error with message that the list is either too long or too short See inductionMOnLeftFold for monadic version of this function and inductionOnRightFold for version of this function that performs right fold over the list",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionOnLeftFold",
          "normalized": "a Zero-\u003e(b c d-\u003ea e-\u003ea(SuccessorTo e))-\u003e[d]-\u003ea e",
          "package": "type-level-natural-number-induction",
          "partial": "On Left Fold",
          "signature": "f Zero-\u003e(forall n. α-\u003ef n-\u003ef(SuccessorTo n))-\u003e[α]-\u003ef n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:inductionOnLeftFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is the same idea as \u003ccode\u003e\u003ca\u003einductionOnLeftFold\u003c/a\u003e\u003c/code\u003e function,\n but it performs a right-fold rather than a left-fold over the list.\n See \u003ccode\u003e\u003ca\u003einductionMOnRightFold\u003c/a\u003e\u003c/code\u003e for a monadic version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionOnRightFold",
          "package": "type-level-natural-number-induction",
          "signature": "f Zero-\u003e (forall n.  α -\u003e f n -\u003e f (SuccessorTo n))-\u003e [α]-\u003e f n",
          "type": "function"
        },
        "index": {
          "description": "This function is the same idea as inductionOnLeftFold function but it performs right-fold rather than left-fold over the list See inductionMOnRightFold for monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "inductionOnRightFold",
          "normalized": "a Zero-\u003e(b c d-\u003ea e-\u003ea(SuccessorTo e))-\u003e[d]-\u003ea e",
          "package": "type-level-natural-number-induction",
          "partial": "On Right Fold",
          "signature": "f Zero-\u003e(forall n. α-\u003ef n-\u003ef(SuccessorTo n))-\u003e[α]-\u003ef n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:inductionOnRightFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e function provides a high-level combinator for\n transforming one inductive structure into another.  See\n \u003ccode\u003e\u003ca\u003etransformM\u003c/a\u003e\u003c/code\u003e for a monadic version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "transform",
          "package": "type-level-natural-number-induction",
          "signature": "(f Zero -\u003e g Zero) -\u003e (forall n.  (f n -\u003e g n) -\u003e f (SuccessorTo n) -\u003e g (SuccessorTo n)) -\u003e f n -\u003e g n",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#transform",
          "type": "function"
        },
        "index": {
          "description": "The transform function provides high-level combinator for transforming one inductive structure into another See transformM for monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "transform",
          "normalized": "(a Zero-\u003eb Zero)-\u003e(c d(a e-\u003eb e)-\u003ea(SuccessorTo e)-\u003eb(SuccessorTo e))-\u003ea e-\u003eb e",
          "package": "type-level-natural-number-induction",
          "signature": "(f Zero-\u003eg Zero)-\u003e(forall n.(f n-\u003eg n)-\u003ef(SuccessorTo n)-\u003eg(SuccessorTo n))-\u003ef n-\u003eg n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etransformM\u003c/a\u003e\u003c/code\u003e method provides a high-level combinator for\n monadically transforming one inductive structure into another.\n See \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e for a non-monadic version of this function.\n\u003c/p\u003e",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "transformM",
          "package": "type-level-natural-number-induction",
          "signature": "transformM",
          "source": "src/TypeLevel-NaturalNumber-Induction.html#transformM",
          "type": "method"
        },
        "index": {
          "description": "The transformM method provides high-level combinator for monadically transforming one inductive structure into another See transform for non-monadic version of this function",
          "hierarchy": "TypeLevel NaturalNumber Induction",
          "module": "TypeLevel.NaturalNumber.Induction",
          "name": "transformM",
          "package": "type-level-natural-number-induction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-level-natural-number-induction/docs/TypeLevel-NaturalNumber-Induction.html#v:transformM"
      }
    }
  ]
]