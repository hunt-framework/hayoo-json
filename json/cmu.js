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
        "word": "cmu"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLinear Diophantine Equation solver.\n\u003c/p\u003e\u003cp\u003eThe solver uses the algorithm of Contejean and Devie as specified\n in \"An Efficient Incremental Algorithm for Solving Systems of\n Linear Diophantine Equations\", Information and Computation\n Vol. 113, pp. 143-174, 1994.\n\u003c/p\u003e\u003cp\u003eThe algorithm for systems of homogeneous linear Diophantine\n equations follows.  Let e[k] be the kth basis vector for 1 \u003c= k \u003c=\n n.  To find the minimal, non-negative solutions M to the system of\n equations sum(i=1,n,a[i]*v[i]) = 0, the algorithm of Contejean and\n Devie is:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e [init] A := {e[k] | 1 \u003c= k \u003c= n}; M := {}\n\u003c/li\u003e\u003cli\u003e [new minimal results] M := M + {a in A | a is a solution}\n\u003c/li\u003e\u003cli\u003e [unnecessary branches] A := {a in A | all m in M : some\n     1 \u003c= k \u003c= n : m[k] \u003c a[k]}\n\u003c/li\u003e\u003cli\u003e [breadth-first search] A := {a + e[k] | a in A, 1 \u003c= k \u003c= n,\n \u003csum(i=1,n,a[i]*v[i]),v[k]\u003e \u003c 0}\n\u003c/li\u003e\u003cli\u003e [test] If A = {}, stop, else go to 2.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis module provides a solver for a single linear Diophantine\n equation a*v = b, where a and v are vectors, not matrices.\n\u003c/p\u003e\u003cp\u003eWhen solving an inhomogeneous equation, it uses the homogeneous\n solver after adding -b as the first element of v and by bounding\n the first element of a to be one at each step in the computation.\n The first element of a solution is zero if it is a solution to the\n associated homogeneous equation, and one if it is a solution to the\n inhomogeneous equation.\n\u003c/p\u003e\u003cp\u003eThe algorithm is likely to be Fortenbacher's algorithm, the one\n generalized to systems of equations by Contejean and Devie, but I\n have not been able to verified this fact.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algebra.CommutativeMonoid.LinDiophEq",
          "name": "LinDiophEq",
          "package": "cmu",
          "source": "src/Algebra-CommutativeMonoid-LinDiophEq.html",
          "type": "module"
        },
        "index": {
          "description": "Linear Diophantine Equation solver The solver uses the algorithm of Contejean and Devie as specified in An Efficient Incremental Algorithm for Solving Systems of Linear Diophantine Equations Information and Computation Vol pp The algorithm for systems of homogeneous linear Diophantine equations follows Let be the kth basis vector for To find the minimal non-negative solutions to the system of equations sum the algorithm of Contejean and Devie is init new minimal results in is solution unnecessary branches in all in some breadth-first search in sum test If stop else go to This module provides solver for single linear Diophantine equation where and are vectors not matrices When solving an inhomogeneous equation it uses the homogeneous solver after adding as the first element of and by bounding the first element of to be one at each step in the computation The first element of solution is zero if it is solution to the associated homogeneous equation and one if it is solution to the inhomogeneous equation The algorithm is likely to be Fortenbacher algorithm the one generalized to systems of equations by Contejean and Devie but have not been able to verified this fact",
          "hierarchy": "Algebra CommutativeMonoid LinDiophEq",
          "module": "Algebra.CommutativeMonoid.LinDiophEq",
          "name": "LinDiophEq",
          "package": "cmu",
          "partial": "Lin Dioph Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-LinDiophEq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elinDiophEq\u003c/a\u003e\u003c/code\u003e function takes a list of integers that specifies\n the coefficients of linear Diophantine equation and a constant,\n and returns the equation's minimal, non-negative solutions.\n\u003c/p\u003e\u003cp\u003eWhen solving an inhomogeneous equation, the first element of a\n solution is zero if it solves the associated homogeneous equation,\n and one otherwise.\n\u003c/p\u003e\u003cp\u003eThus to solve 2x + y - z = 2, use\n\u003c/p\u003e\u003cpre\u003e\n linDiophEq [2,1,-1] 2 = [[0,0,1,1],[1,1,0,0],[0,1,0,2],[1,0,2,0]]\n\u003c/pre\u003e\u003cp\u003eThe two minimal solutions to the homogeneous equation are [0,1,1]\n and [1,0,2], so any linear combinations of these solutions\n contributes to a solution.  The solution that corresponds to\n [1,0,0] is x = w + 1, y = v, and z = v + 2w.  The solution that\n corresponds to [0,2,0] is x = w, y = v + 2, and z = v + 2w.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.LinDiophEq",
          "name": "linDiophEq",
          "package": "cmu",
          "signature": "[Int] -\u003e Int -\u003e [[Int]]",
          "source": "src/Algebra-CommutativeMonoid-LinDiophEq.html#linDiophEq",
          "type": "function"
        },
        "index": {
          "description": "The linDiophEq function takes list of integers that specifies the coefficients of linear Diophantine equation and constant and returns the equation minimal non-negative solutions When solving an inhomogeneous equation the first element of solution is zero if it solves the associated homogeneous equation and one otherwise Thus to solve use linDiophEq The two minimal solutions to the homogeneous equation are and so any linear combinations of these solutions contributes to solution The solution that corresponds to is and The solution that corresponds to is and",
          "hierarchy": "Algebra CommutativeMonoid LinDiophEq",
          "module": "Algebra.CommutativeMonoid.LinDiophEq",
          "name": "linDiophEq",
          "normalized": "[Int]-\u003eInt-\u003e[[Int]]",
          "package": "cmu",
          "partial": "Dioph Eq",
          "signature": "[Int]-\u003eInt-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-LinDiophEq.html#v:linDiophEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides unification in a commutative monoid.\n\u003c/p\u003e\u003cp\u003eIn this module, a commutative monoid is a free algebra over a\n signature with two function symbols:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the binary symbol +, the monoid operator,\n\u003c/li\u003e\u003cli\u003e a constant 0, the identity element, and\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe algebra is generated by a set of variables.  Syntactically, a\n variable is an identifer such as x and y (see \u003ccode\u003e\u003ca\u003eisVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe axioms associated with the algebra are:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eCommuntativity\u003c/dt\u003e\u003cdd\u003e x + y = y + x\n\u003c/dd\u003e\u003cdt\u003eAssociativity\u003c/dt\u003e\u003cdd\u003e (x + y) + z = x + (y + z)\n\u003c/dd\u003e\u003cdt\u003eIdentity Element\u003c/dt\u003e\u003cdd\u003e x + 0 = x\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eA substitution maps variables to terms.  A substitution s is\n applied to a term as follows.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e s(0) = 0\n\u003c/li\u003e\u003cli\u003e s(t + t') = s(t) + s(t')\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe unification problem is given the problem statement t =? t',\n find a most general substitution s such that s(t) = s(t') modulo\n the axioms of the algebra.  Substitition s is more general than s'\n if there is a substitition s\" such that s' = s\" o s.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Unification",
          "package": "cmu",
          "source": "src/Algebra-CommutativeMonoid-Unification.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides unification in commutative monoid In this module commutative monoid is free algebra over signature with two function symbols the binary symbol the monoid operator constant the identity element and The algebra is generated by set of variables Syntactically variable is an identifer such as and see isVar The axioms associated with the algebra are Communtativity Associativity Identity Element substitution maps variables to terms substitution is applied to term as follows The unification problem is given the problem statement find most general substitution such that modulo the axioms of the algebra Substitition is more general than if there is substitition such that",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Unification",
          "package": "cmu",
          "partial": "Unification",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn equation is a pair of terms.  For the show and read methods,\n the two terms are separated by an equal sign.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Equation",
          "package": "cmu",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#Equation",
          "type": "newtype"
        },
        "index": {
          "description": "An equation is pair of terms For the show and read methods the two terms are separated by an equal sign",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Equation",
          "package": "cmu",
          "partial": "Equation",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#t:Equation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution maps variables into terms.  For the show and read\n methods, the substitution is a list of maplets, and the variable\n and the term in each element of the list are separated by a colon.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Substitution",
          "package": "cmu",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#Substitution",
          "type": "data"
        },
        "index": {
          "description": "substitution maps variables into terms For the show and read methods the substitution is list of maplets and the variable and the term in each element of the list are separated by colon",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Substitution",
          "package": "cmu",
          "partial": "Substitution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#t:Substitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA term in a commutative monoid is represented by the\n identity element, or as the sum of factors.  A factor is the\n product of a positive integer coefficient and a variable.  No\n variable occurs twice in a term.  For the show and read methods,\n zero is the identity element, the plus sign is the monoid operation.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Term",
          "package": "cmu",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#Term",
          "type": "data"
        },
        "index": {
          "description": "term in commutative monoid is represented by the identity element or as the sum of factors factor is the product of positive integer coefficient and variable No variable occurs twice in term For the show and read methods zero is the identity element the plus sign is the monoid operation",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Term",
          "package": "cmu",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Equation",
          "package": "cmu",
          "signature": "Equation (Term, Term)",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#Equation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "Equation",
          "normalized": "Equation(Term,Term)",
          "package": "cmu",
          "partial": "Equation",
          "signature": "Equation(Term,Term)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:Equation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two terms.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "add",
          "package": "cmu",
          "signature": "Term -\u003e Term -\u003e Term",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#add",
          "type": "function"
        },
        "index": {
          "description": "Add two terms",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "add",
          "normalized": "Term-\u003eTerm-\u003eTerm",
          "package": "cmu",
          "signature": "Term-\u003eTerm-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the result of applying a substitution to a term.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "apply",
          "package": "cmu",
          "signature": "Substitution -\u003e Term -\u003e Term",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Return the result of applying substitution to term",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "apply",
          "normalized": "Substitution-\u003eTerm-\u003eTerm",
          "package": "cmu",
          "signature": "Substitution-\u003eTerm-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all variable-coefficient pairs in the term in ascending\n variable order.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "assocs",
          "package": "cmu",
          "signature": "Term -\u003e [(String, Int)]",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all variable-coefficient pairs in the term in ascending variable order",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "assocs",
          "normalized": "Term-\u003e[(String,Int)]",
          "package": "cmu",
          "signature": "Term-\u003e[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eide\u003c/a\u003e\u003c/code\u003e represents the identity element (zero).\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "ide",
          "package": "cmu",
          "signature": "Term",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#ide",
          "type": "function"
        },
        "index": {
          "description": "ide represents the identity element zero",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "ide",
          "package": "cmu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:ide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable is an alphabetic Unicode character followed by a\n sequence of alphabetic or numeric digit Unicode characters.  The\n show method for a term works correctly when variables satisfy\n the \u003ccode\u003e\u003ca\u003eisVar\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "isVar",
          "package": "cmu",
          "signature": "String -\u003e Bool",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#isVar",
          "type": "function"
        },
        "index": {
          "description": "variable is an alphabetic Unicode character followed by sequence of alphabetic or numeric digit Unicode characters The show method for term works correctly when variables satisfy the isVar predicate",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "isVar",
          "normalized": "String-\u003eBool",
          "package": "cmu",
          "partial": "Var",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:isVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all variable-term pairs in ascending variable order.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "maplets",
          "package": "cmu",
          "signature": "Substitution -\u003e [(String, Term)]",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#maplets",
          "type": "function"
        },
        "index": {
          "description": "Return all variable-term pairs in ascending variable order",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "maplets",
          "normalized": "Substitution-\u003e[(String,Term)]",
          "package": "cmu",
          "signature": "Substitution-\u003e[(String,Term)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:maplets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply every coefficient in a term by an non-negative integer.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "mul",
          "package": "cmu",
          "signature": "Int -\u003e Term -\u003e Term",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#mul",
          "type": "function"
        },
        "index": {
          "description": "Multiply every coefficient in term by an non-negative integer",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "mul",
          "normalized": "Int-\u003eTerm-\u003eTerm",
          "package": "cmu",
          "signature": "Int-\u003eTerm-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a substitution from a list of variable-term pairs.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "subst",
          "package": "cmu",
          "signature": "[(String, Term)] -\u003e Substitution",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#subst",
          "type": "function"
        },
        "index": {
          "description": "Construct substitution from list of variable-term pairs",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "subst",
          "normalized": "[(String,Term)]-\u003eSubstitution",
          "package": "cmu",
          "signature": "[(String,Term)]-\u003eSubstitution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e (t0, t1), return a most general substitution s\n such that s(t0) = s(t1) modulo the equational axioms of a\n commutative monoid.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "unify",
          "package": "cmu",
          "signature": "Equation -\u003e Substitution",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#unify",
          "type": "function"
        },
        "index": {
          "description": "Given Equation t0 t1 return most general substitution such that t0 t1 modulo the equational axioms of commutative monoid",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "unify",
          "normalized": "Equation-\u003eSubstitution",
          "package": "cmu",
          "signature": "Equation-\u003eSubstitution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a term that consists of a single variable.\n\u003c/p\u003e",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "var",
          "package": "cmu",
          "signature": "String -\u003e Term",
          "source": "src/Algebra-CommutativeMonoid-Unification.html#var",
          "type": "function"
        },
        "index": {
          "description": "Return term that consists of single variable",
          "hierarchy": "Algebra CommutativeMonoid Unification",
          "module": "Algebra.CommutativeMonoid.Unification",
          "name": "var",
          "normalized": "String-\u003eTerm",
          "package": "cmu",
          "signature": "String-\u003eTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmu/docs/Algebra-CommutativeMonoid-Unification.html#v:var"
      }
    }
  ]
]