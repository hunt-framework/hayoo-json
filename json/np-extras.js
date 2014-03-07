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
        "word": "np-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA representation of rational numbers as lists of prime powers,\n   allowing efficient representation, multiplication and division of\n   large numbers, especially of the sort occurring in combinatorial\n   computations.\n\u003c/p\u003e\u003cp\u003eThe module also includes a method for generating factorials in\n   factored form directly, and for generating all divisors of\n   factored integers, or computing Euler's totient (phi) function\n   and the M&#246;bius (mu) function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MathObj.FactoredRational",
          "name": "FactoredRational",
          "package": "np-extras",
          "source": "src/MathObj-FactoredRational.html",
          "type": "module"
        },
        "index": {
          "description": "representation of rational numbers as lists of prime powers allowing efficient representation multiplication and division of large numbers especially of the sort occurring in combinatorial computations The module also includes method for generating factorials in factored form directly and for generating all divisors of factored integers or computing Euler totient phi function and the bius mu function",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "FactoredRational",
          "package": "np-extras",
          "partial": "Factored Rational",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of factored rationals.\n\u003c/p\u003e\u003cp\u003eInstances are provided for Eq, Ord, Additive, Ring, ZeroTestable,\n   Real, ToRational, Integral, RealIntegral, ToInteger, and Field.\n\u003c/p\u003e\u003cp\u003eNote that currently, addition is performed on factored rationals\n   by converting them to normal rationals, performing the addition,\n   and factoring.  This could probably be made more efficient by\n   finding a common denominator, pulling out common factors from the\n   numerators, and performing the addition and factoring only on the\n   relatively prime parts.\n\u003c/p\u003e",
          "module": "MathObj.FactoredRational",
          "name": "T",
          "package": "np-extras",
          "source": "src/MathObj-FactoredRational.html#T",
          "type": "data"
        },
        "index": {
          "description": "The type of factored rationals Instances are provided for Eq Ord Additive Ring ZeroTestable Real ToRational Integral RealIntegral ToInteger and Field Note that currently addition is performed on factored rationals by converting them to normal rationals performing the addition and factoring This could probably be made more efficient by finding common denominator pulling out common factors from the numerators and performing the addition and factoring only on the relatively prime parts",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "T",
          "package": "np-extras",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of the divisors of n.  Only makes sense for integers.\n\u003c/p\u003e",
          "module": "MathObj.FactoredRational",
          "name": "divisors",
          "package": "np-extras",
          "signature": "T -\u003e [T]",
          "source": "src/MathObj-FactoredRational.html#divisors",
          "type": "function"
        },
        "index": {
          "description": "List of the divisors of Only makes sense for integers",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "divisors",
          "normalized": "T-\u003e[T]",
          "package": "np-extras",
          "signature": "T-\u003e[T]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#v:divisors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute Euler's totient function (\u003ccode\u003eeulerPhi n\u003c/code\u003e is the number of\n   integers less than and relatively prime to n).  Only makes sense\n   for (nonnegative) integers.\n\u003c/p\u003e",
          "module": "MathObj.FactoredRational",
          "name": "eulerPhi",
          "package": "np-extras",
          "signature": "T -\u003e Integer",
          "source": "src/MathObj-FactoredRational.html#eulerPhi",
          "type": "function"
        },
        "index": {
          "description": "Compute Euler totient function eulerPhi is the number of integers less than and relatively prime to Only makes sense for nonnegative integers",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "eulerPhi",
          "normalized": "T-\u003eInteger",
          "package": "np-extras",
          "partial": "Phi",
          "signature": "T-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#v:eulerPhi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute n! directly as a factored rational.\n\u003c/p\u003e",
          "module": "MathObj.FactoredRational",
          "name": "factorial",
          "package": "np-extras",
          "signature": "Integer -\u003e T",
          "source": "src/MathObj-FactoredRational.html#factorial",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute directly as factored rational",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "factorial",
          "normalized": "Integer-\u003eT",
          "package": "np-extras",
          "signature": "Integer-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#v:factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eM&#246;bius (mu) function of a positive integer: mu(n) = 0 if one or\n   more repeated prime factors, 1 if n = 1, and (-1)^k if n is a\n   product of k distinct primes.\n\u003c/p\u003e",
          "module": "MathObj.FactoredRational",
          "name": "mu",
          "package": "np-extras",
          "signature": "T -\u003e Integer",
          "source": "src/MathObj-FactoredRational.html#mu",
          "type": "function"
        },
        "index": {
          "description": "bius mu function of positive integer mu if one or more repeated prime factors if and if is product of distinct primes",
          "hierarchy": "MathObj FactoredRational",
          "module": "MathObj.FactoredRational",
          "name": "mu",
          "normalized": "T-\u003eInteger",
          "package": "np-extras",
          "signature": "T-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-FactoredRational.html#v:mu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonomials in a countably infinite set of variables x1, x2, x3, ...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MathObj.Monomial",
          "name": "Monomial",
          "package": "np-extras",
          "source": "src/MathObj-Monomial.html",
          "type": "module"
        },
        "index": {
          "description": "Monomials in countably infinite set of variables x1 x2 x3",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "Monomial",
          "package": "np-extras",
          "partial": "Monomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monomial is a map from variable indices to integer powers,\n   paired with a (polymorphic) coefficient.  Note that negative\n   integer powers are handled just fine, so monomials form a field.\n\u003c/p\u003e\u003cp\u003eInstances are provided for Eq, Ord, ZeroTestable, Additive, Ring,\n   Differential, and Field.  Note that adding two monomials only\n   makes sense if they have matching variables and exponents.  The\n   Differential instance represents partial differentiation with\n   respect to x1.\n\u003c/p\u003e\u003cp\u003eThe Ord instance for monomials orders them first by permutation\n   degree, then by largest variable index (largest first), then by\n   exponent (largest first).  This may seem a bit odd, but in fact\n   reflects the use of these monomials to implement cycle index\n   series, where this ordering corresponds nicely to generation\n   of integer partitions. To make the library more general we could\n   parameterize monomials by the desired ordering.\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "T",
          "package": "np-extras",
          "source": "src/MathObj-Monomial.html#T",
          "type": "data"
        },
        "index": {
          "description": "monomial is map from variable indices to integer powers paired with polymorphic coefficient Note that negative integer powers are handled just fine so monomials form field Instances are provided for Eq Ord ZeroTestable Additive Ring Differential and Field Note that adding two monomials only makes sense if they have matching variables and exponents The Differential instance represents partial differentiation with respect to x1 The Ord instance for monomials orders them first by permutation degree then by largest variable index largest first then by exponent largest first This may seem bit odd but in fact reflects the use of these monomials to implement cycle index series where this ordering corresponds nicely to generation of integer partitions To make the library more general we could parameterize monomials by the desired ordering",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "T",
          "package": "np-extras",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.Monomial",
          "name": "Cons",
          "package": "np-extras",
          "signature": "Cons",
          "source": "src/MathObj-Monomial.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "Cons",
          "package": "np-extras",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.Monomial",
          "name": "coeff",
          "package": "np-extras",
          "signature": "a",
          "source": "src/MathObj-Monomial.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "coeff",
          "package": "np-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:coeff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant monomial.\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "constant",
          "package": "np-extras",
          "signature": "a -\u003e T a",
          "source": "src/MathObj-Monomial.html#constant",
          "type": "function"
        },
        "index": {
          "description": "Create constant monomial",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "constant",
          "normalized": "a-\u003eT a",
          "package": "np-extras",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe degree of a monomial is the sum of its exponents.\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "degree",
          "package": "np-extras",
          "signature": "T a -\u003e Integer",
          "source": "src/MathObj-Monomial.html#degree",
          "type": "function"
        },
        "index": {
          "description": "The degree of monomial is the sum of its exponents",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "degree",
          "normalized": "T a-\u003eInteger",
          "package": "np-extras",
          "signature": "T a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.Monomial",
          "name": "mkMonomial",
          "package": "np-extras",
          "signature": "a -\u003e [(Integer, Integer)] -\u003e T a",
          "source": "src/MathObj-Monomial.html#mkMonomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "mkMonomial",
          "normalized": "a-\u003e[(Integer,Integer)]-\u003eT a",
          "package": "np-extras",
          "partial": "Monomial",
          "signature": "a-\u003e[(Integer,Integer)]-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:mkMonomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"partition degree\" of a monomial is the sum of the products\n   of each variable index with its exponent.  For example, x1^3 x2^2\n   x4^3 has partition degree 1*3 + 2*2 + 4*3 = 19.  The terminology\n   comes from the fact that, for example, we can view x1^3 x2^2 x4^3\n   as corresponding to an integer partition of 19 (namely, 1 + 1 + 1\n   + 2 + 2 + 4 + 4 + 4).\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "pDegree",
          "package": "np-extras",
          "signature": "T a -\u003e Integer",
          "source": "src/MathObj-Monomial.html#pDegree",
          "type": "function"
        },
        "index": {
          "description": "The partition degree of monomial is the sum of the products of each variable index with its exponent For example x1 x2 x4 has partition degree The terminology comes from the fact that for example we can view x1 x2 x4 as corresponding to an integer partition of namely",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "pDegree",
          "normalized": "T a-\u003eInteger",
          "package": "np-extras",
          "partial": "Degree",
          "signature": "T a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:pDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.Monomial",
          "name": "powers",
          "package": "np-extras",
          "signature": "Map Integer Integer",
          "source": "src/MathObj-Monomial.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "powers",
          "package": "np-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:powers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale all the variable subscripts by a constant.  Useful for\n   operations like plethyistic substitution or Mobius inversion.\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "scaleMon",
          "package": "np-extras",
          "signature": "Integer -\u003e T a -\u003e T a",
          "source": "src/MathObj-Monomial.html#scaleMon",
          "type": "function"
        },
        "index": {
          "description": "Scale all the variable subscripts by constant Useful for operations like plethyistic substitution or Mobius inversion",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "scaleMon",
          "normalized": "Integer-\u003eT a-\u003eT a",
          "package": "np-extras",
          "partial": "Mon",
          "signature": "Integer-\u003eT a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:scaleMon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the monomial xn for a given n.\n\u003c/p\u003e",
          "module": "MathObj.Monomial",
          "name": "x",
          "package": "np-extras",
          "signature": "Integer -\u003e T a",
          "source": "src/MathObj-Monomial.html#x",
          "type": "function"
        },
        "index": {
          "description": "Create the monomial xn for given",
          "hierarchy": "MathObj Monomial",
          "module": "MathObj.Monomial",
          "name": "x",
          "normalized": "Integer-\u003eT a",
          "package": "np-extras",
          "signature": "Integer-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-Monomial.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePolynomials in a countably infinite set of variables x1, x2, x3, ...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "MultiVarPolynomial",
          "package": "np-extras",
          "source": "src/MathObj-MultiVarPolynomial.html",
          "type": "module"
        },
        "index": {
          "description": "Polynomials in countably infinite set of variables x1 x2 x3",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "MultiVarPolynomial",
          "package": "np-extras",
          "partial": "Multi Var Polynomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polynomial is just a list of monomials, construed as their sum.\n   We maintain the invariant that polynomials are always sorted by\n   the ordering on monomials defined in \u003ca\u003eMathObj.Monomial\u003c/a\u003e: first by\n   partition degree, then by largest variable index (decreasing),\n   then by exponent of the highest-index variable (decreasing).\n   This works out nicely for operations on cycle index series.\n\u003c/p\u003e\u003cp\u003eInstances are provided for Additive, Ring, Differential\n   (partial differentiation with respect to x1), and Show.\n\u003c/p\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "T",
          "package": "np-extras",
          "source": "src/MathObj-MultiVarPolynomial.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "polynomial is just list of monomials construed as their sum We maintain the invariant that polynomials are always sorted by the ordering on monomials defined in MathObj.Monomial first by partition degree then by largest variable index decreasing then by exponent of the highest-index variable decreasing This works out nicely for operations on cycle index series Instances are provided for Additive Ring Differential partial differentiation with respect to x1 and Show",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "T",
          "package": "np-extras",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.MultiVarPolynomial",
          "name": "Cons",
          "package": "np-extras",
          "signature": "Cons [T a]",
          "source": "src/MathObj-MultiVarPolynomial.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "Cons",
          "normalized": "Cons[T a]",
          "package": "np-extras",
          "partial": "Cons",
          "signature": "Cons[T a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlethyistic substitution: F o G = F(G(x1,x2,x3...),\n   G(x2,x4,x6...), G(x3,x6,x9...), ...)  See Bergeron, Labelle, and\n   Leroux, \"Combinatorial Species and Tree-Like Structures\",\n   p. 43.\n\u003c/p\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "compose",
          "package": "np-extras",
          "signature": "T a -\u003e T a -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#compose",
          "type": "function"
        },
        "index": {
          "description": "Plethyistic substitution x1 x2 x3 x2 x4 x6 x3 x6 x9 See Bergeron Labelle and Leroux Combinatorial Species and Tree-Like Structures",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "compose",
          "normalized": "T a-\u003eT a-\u003eT a",
          "package": "np-extras",
          "signature": "T a-\u003eT a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant polynomial.\n\u003c/p\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "constant",
          "package": "np-extras",
          "signature": "a -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#constant",
          "type": "function"
        },
        "index": {
          "description": "Create constant polynomial",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "constant",
          "normalized": "a-\u003eT a",
          "package": "np-extras",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.MultiVarPolynomial",
          "name": "fromMonomials",
          "package": "np-extras",
          "signature": "[T a] -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#fromMonomials",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "fromMonomials",
          "normalized": "[T a]-\u003eT a",
          "package": "np-extras",
          "partial": "Monomials",
          "signature": "[T a]-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:fromMonomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift0",
          "package": "np-extras",
          "signature": "[T a] -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#lift0",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift0",
          "normalized": "[T a]-\u003eT a",
          "package": "np-extras",
          "signature": "[T a]-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:lift0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift1",
          "package": "np-extras",
          "signature": "([T a] -\u003e [T a]) -\u003e T a -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#lift1",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift1",
          "normalized": "([T a]-\u003e[T a])-\u003eT a-\u003eT a",
          "package": "np-extras",
          "signature": "([T a]-\u003e[T a])-\u003eT a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:lift1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift2",
          "package": "np-extras",
          "signature": "([T a] -\u003e [T a] -\u003e [T a]) -\u003e T a -\u003e T a -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#lift2",
          "type": "function"
        },
        "index": {
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "lift2",
          "normalized": "([T a]-\u003e[T a]-\u003e[T a])-\u003eT a-\u003eT a-\u003eT a",
          "package": "np-extras",
          "signature": "([T a]-\u003e[T a]-\u003e[T a])-\u003eT a-\u003eT a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sorted lists, with a flag specifying whether to keep\n   singletons, and a combining function for elements that are equal.\n\u003c/p\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "merge",
          "package": "np-extras",
          "signature": "Bool -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/MathObj-MultiVarPolynomial.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two sorted lists with flag specifying whether to keep singletons and combining function for elements that are equal",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "merge",
          "normalized": "Bool-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "np-extras",
          "signature": "Bool-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the polynomial xn for a given n.\n\u003c/p\u003e",
          "module": "MathObj.MultiVarPolynomial",
          "name": "x",
          "package": "np-extras",
          "signature": "Integer -\u003e T a",
          "source": "src/MathObj-MultiVarPolynomial.html#x",
          "type": "function"
        },
        "index": {
          "description": "Create the polynomial xn for given",
          "hierarchy": "MathObj MultiVarPolynomial",
          "module": "MathObj.MultiVarPolynomial",
          "name": "x",
          "normalized": "Integer-\u003eT a",
          "package": "np-extras",
          "signature": "Integer-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/np-extras/docs/MathObj-MultiVarPolynomial.html#v:x"
      }
    }
  ]
]