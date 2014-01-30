[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-IntLinEq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInteger Solutions of Linear Inhomogeneous Equations\n\u003c/p\u003e\u003cp\u003eA linear equation with integer coefficients is represented as a\n pair of lists of non-zero integers, the coefficients and the\n constants.  If there are no constants, the linear equation\n represented by (c, []) is the homogeneous equation:\n\u003c/p\u003e\u003cpre\u003e     c[0]*x[0] + c[1]*x[1] + ... + c[n-1]*x[n-1] = 0\n\u003c/pre\u003e\u003cp\u003ewhere n is the length of c.  Otherwise, (c, d) represents the\n inhomogeneous equation:\n\u003c/p\u003e\u003cpre\u003e     c[0]*x[0] + c[1]*x[1] + ... + c[n-1]*x[n-1] = g\n\u003c/pre\u003e\u003cp\u003ewhere g = gcd(d[0], d[1], ..., d[m-1]), and m is the length of d.\n Thus g is the greatest common denominator of the elements of d.\n\u003c/p\u003e\u003cp\u003eA solution is a partial map from variables to terms, and a term is\n a pair of lists of integers, the variable part of the term followed\n by the constant part.  The variable part may specify variables not\n in the input.  In other words, the length of the coefficents in the\n answer may exceed the length of the coefficients in the input.  For\n example, the solution of\n\u003c/p\u003e\u003cpre\u003e     64x - 41y = 1\n\u003c/pre\u003e\u003cp\u003eis x = -41z - 16 and y = -64z - 25.  The computed solution is read\n off the list returned as an answer.\n\u003c/p\u003e\u003cpre\u003e     intLinEq [64,-41] [1] =\n         [(0,([0,0,0,0,0,0,-41],[-16])),\n         (1,([0,0,0,0,0,0,-64],[-25]))]\n\u003c/pre\u003e\u003cp\u003eThe algorithm used to find solutions is described in Vol. 2 of The\n Art of Computer Programming / Seminumerical Alorithms, 2nd Ed.,\n 1981, by Donald E. Knuth, pg. 327.  To show sums, we write\n\u003c/p\u003e\u003cpre\u003e     sum[i] c[i]*x[i] for c[0]*x[0] + c[1]*x[1] + ... + c[n-1]*x[n-1].\n\u003c/pre\u003e\u003cp\u003eThe algorithm's initial values are the linear equation (c,d) and an\n empty substitution s.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e  Let c[i] be the smallest non-zero coefficient in absolute value.\n\u003c/li\u003e\u003cli\u003e  If c[i] \u003c 0, multiply c and d by -1 and goto step 1.\n\u003c/li\u003e\u003cli\u003e  If c[i] = 1, a general solution of the following form has been\n found:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e     x[i] = sum[j] -c'[j]*x[j] + d[k] for all k\n\u003c/pre\u003e\u003cp\u003ewhere c' is c with c'[i] = 0.  Use the equation to eliminate x[i]\n  from the range of the current substitution s.  If variable x[i] is\n  in the original equation, add the mapping to substitution s.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e  If c[i] divides every coefficient in c,\n\u003c/li\u003e\u003c/ol\u003e\u003cul\u003e\u003cli\u003e if c[i] divides every constant in d, divide c and d by c[i]\n       and goto step 3,\n\u003c/li\u003e\u003cli\u003e otherwise fail because there is no solution.\n\u003c/li\u003e\u003c/ul\u003e\u003col\u003e\u003cli\u003e  Otherwise, eliminate x[i] as above in favor of freshly created\n variable x[n], where n is the length of c.\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e    x[n] = sum[j] (c[j] div c[i] * x[j])\n\u003c/pre\u003e\u003cp\u003eGoto step 1 and solve the equation:\n\u003c/p\u003e\u003cpre\u003e    c[i]*x[n] + sum[j] (c[j] mod c[i])*x[j] = d[k] for all k\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Algebra.AbelianGroup.IntLinEq",
        "fct-package": "agum",
        "fct-signature": "module",
        "fct-source": "src/Algebra-AbelianGroup-IntLinEq.html",
        "fct-type": "module",
        "title": "IntLinEq"
      },
      "index": {
        "description": "Integer Solutions of Linear Inhomogeneous Equations linear equation with integer coefficients is represented as pair of lists of non-zero integers the coefficients and the constants If there are no constants the linear equation represented by is the homogeneous equation n-1 n-1 where is the length of Otherwise represents the inhomogeneous equation n-1 n-1 where gcd m-1 and is the length of Thus is the greatest common denominator of the elements of solution is partial map from variables to terms and term is pair of lists of integers the variable part of the term followed by the constant part The variable part may specify variables not in the input In other words the length of the coefficents in the answer may exceed the length of the coefficients in the input For example the solution of is and The computed solution is read off the list returned as an answer intLinEq The algorithm used to find solutions is described in Vol of The Art of Computer Programming Seminumerical Alorithms nd Ed by Donald Knuth pg To show sums we write sum for n-1 n-1 The algorithm initial values are the linear equation and an empty substitution Let be the smallest non-zero coefficient in absolute value If multiply and by and goto step If general solution of the following form has been found sum for all where is with Use the equation to eliminate from the range of the current substitution If variable is in the original equation add the mapping to substitution If divides every coefficient in if divides every constant in divide and by and goto step otherwise fail because there is no solution Otherwise eliminate as above in favor of freshly created variable where is the length of sum div Goto step and solve the equation sum mod for all",
        "hierarchy": "Algebra AbelianGroup IntLinEq",
        "module": "Algebra.AbelianGroup.IntLinEq",
        "name": "IntLinEq",
        "normalized": "",
        "package": "agum",
        "partial": "Int Lin Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-IntLinEq.html#t:LinEq",
      "description": {
        "fct-descr": "\u003cp\u003eA linear equation with integer coefficients is represented as a\n pair of lists of non-zero integers, the coefficients and the\n constants.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.IntLinEq",
        "fct-package": "agum",
        "fct-signature": "type",
        "fct-source": "src/Algebra-AbelianGroup-IntLinEq.html#LinEq",
        "fct-type": "type",
        "title": "LinEq"
      },
      "index": {
        "description": "linear equation with integer coefficients is represented as pair of lists of non-zero integers the coefficients and the constants",
        "hierarchy": "Algebra AbelianGroup IntLinEq",
        "module": "Algebra.AbelianGroup.IntLinEq",
        "name": "LinEq",
        "normalized": "",
        "package": "agum",
        "partial": "Lin Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-IntLinEq.html#t:Subst",
      "description": {
        "fct-descr": "\u003cp\u003eA solution to a linear equation is a partial map from variables\n to terms, and a term is a pair of lists of integers, the variable\n part of the term followed by the constant part.  The variable part\n may specify variables not in the input.  In other words, the length\n of the coefficents in the answer may exceed the length of the\n coefficients in the input.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.IntLinEq",
        "fct-package": "agum",
        "fct-signature": "type",
        "fct-source": "src/Algebra-AbelianGroup-IntLinEq.html#Subst",
        "fct-type": "type",
        "title": "Subst"
      },
      "index": {
        "description": "solution to linear equation is partial map from variables to terms and term is pair of lists of integers the variable part of the term followed by the constant part The variable part may specify variables not in the input In other words the length of the coefficents in the answer may exceed the length of the coefficients in the input",
        "hierarchy": "Algebra AbelianGroup IntLinEq",
        "module": "Algebra.AbelianGroup.IntLinEq",
        "name": "Subst",
        "normalized": "",
        "package": "agum",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-IntLinEq.html#v:intLinEq",
      "description": {
        "fct-descr": "\u003cp\u003eFind integer solutions to a linear equation or fail when there\n are no solutions.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.IntLinEq",
        "fct-package": "agum",
        "fct-signature": "LinEq -\u003e m Subst",
        "fct-source": "src/Algebra-AbelianGroup-IntLinEq.html#intLinEq",
        "fct-type": "function",
        "title": "intLinEq"
      },
      "index": {
        "description": "Find integer solutions to linear equation or fail when there are no solutions",
        "hierarchy": "Algebra AbelianGroup IntLinEq",
        "module": "Algebra.AbelianGroup.IntLinEq",
        "name": "intLinEq",
        "normalized": "LinEq-\u003ea Subst",
        "package": "agum",
        "partial": "Lin Eq",
        "signature": "LinEq-\u003em Subst"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides unification and matching in an Abelian group.\n\u003c/p\u003e\u003cp\u003eIn this module, an Abelian group is a free algebra over a signature\n with three function symbols:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the binary symbol +, the group operator,\n\u003c/li\u003e\u003cli\u003e a constant 0, the identity element, and\n\u003c/li\u003e\u003cli\u003e the unary symbol -, the inverse operator.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe algebra is generated by a set of variables.  Syntactically, a\n variable is an identifer such as x and y (see \u003ccode\u003e\u003ca\u003eisVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe axioms associated with the algebra are:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eCommuntativity\u003c/dt\u003e\u003cdd\u003e x + y = y + x\n\u003c/dd\u003e\u003cdt\u003eAssociativity\u003c/dt\u003e\u003cdd\u003e (x + y) + z = x + (y + z)\n\u003c/dd\u003e\u003cdt\u003eIdentity Element\u003c/dt\u003e\u003cdd\u003e x + 0 = x\n\u003c/dd\u003e\u003cdt\u003eCancellation\u003c/dt\u003e\u003cdd\u003e x + -x = 0\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eA substitution maps variables to terms.  A substitution s is\n applied to a term as follows.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e s(0) = 0\n\u003c/li\u003e\u003cli\u003e s(-t) = -s(t)\n\u003c/li\u003e\u003cli\u003e s(t + t') = s(t) + s(t')\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe unification problem is given the problem statement t =? t',\n find a most general substitution s such that s(t) = s(t') modulo\n the axioms of the algebra.  The matching problem is to find a most\n general substitution s such that s(t) = t' modulo the axioms.\n Substitition s is more general than s' if there is a substitition\n s\" such that s' = s\" o s.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "module",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html",
        "fct-type": "module",
        "title": "UnificationMatching"
      },
      "index": {
        "description": "This module provides unification and matching in an Abelian group In this module an Abelian group is free algebra over signature with three function symbols the binary symbol the group operator constant the identity element and the unary symbol the inverse operator The algebra is generated by set of variables Syntactically variable is an identifer such as and see isVar The axioms associated with the algebra are Communtativity Associativity Identity Element Cancellation substitution maps variables to terms substitution is applied to term as follows The unification problem is given the problem statement find most general substitution such that modulo the axioms of the algebra The matching problem is to find most general substitution such that modulo the axioms Substitition is more general than if there is substitition such that",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "UnificationMatching",
        "normalized": "",
        "package": "agum",
        "partial": "Unification Matching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#t:Equation",
      "description": {
        "fct-descr": "\u003cp\u003eAn equation is a pair of terms.  For the show and read methods,\n the two terms are separated by an equal sign.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "newtype",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#Equation",
        "fct-type": "newtype",
        "title": "Equation"
      },
      "index": {
        "description": "An equation is pair of terms For the show and read methods the two terms are separated by an equal sign",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "Equation",
        "normalized": "",
        "package": "agum",
        "partial": "Equation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#t:Substitution",
      "description": {
        "fct-descr": "\u003cp\u003eA substitution maps variables into terms.  For the show and read\n methods, the substitution is a list of maplets, and the variable\n and the term in each element of the list are separated by a colon.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "data",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#Substitution",
        "fct-type": "data",
        "title": "Substitution"
      },
      "index": {
        "description": "substitution maps variables into terms For the show and read methods the substitution is list of maplets and the variable and the term in each element of the list are separated by colon",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "Substitution",
        "normalized": "",
        "package": "agum",
        "partial": "Substitution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#t:Term",
      "description": {
        "fct-descr": "\u003cp\u003eA term in an Abelian group is represented by the identity\n element, or as the sum of factors.  A factor is the product of a\n non-zero integer coefficient and a variable.  No variable occurs\n twice in a term.  For the show and read methods, zero is the\n identity element, the plus sign is the group operation, and the\n minus sign is the group inverse.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "data",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "term in an Abelian group is represented by the identity element or as the sum of factors factor is the product of non-zero integer coefficient and variable No variable occurs twice in term For the show and read methods zero is the identity element the plus sign is the group operation and the minus sign is the group inverse",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "Term",
        "normalized": "",
        "package": "agum",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:Equation",
      "description": {
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Equation (Term, Term)",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#Equation",
        "fct-type": "function",
        "title": "Equation"
      },
      "index": {
        "description": "",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "Equation",
        "normalized": "Equation(Term,Term)",
        "package": "agum",
        "partial": "Equation",
        "signature": "Equation(Term,Term)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two terms.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Term -\u003e Term -\u003e Term",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Add two terms",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "add",
        "normalized": "Term-\u003eTerm-\u003eTerm",
        "package": "agum",
        "partial": "",
        "signature": "Term-\u003eTerm-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the result of applying a substitution to a term.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Substitution -\u003e Term -\u003e Term",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Return the result of applying substitution to term",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "apply",
        "normalized": "Substitution-\u003eTerm-\u003eTerm",
        "package": "agum",
        "partial": "",
        "signature": "Substitution-\u003eTerm-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:assocs",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all variable-coefficient pairs in the term in ascending\n variable order.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Term -\u003e [(String, Int)]",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#assocs",
        "fct-type": "function",
        "title": "assocs"
      },
      "index": {
        "description": "Return all variable-coefficient pairs in the term in ascending variable order",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "assocs",
        "normalized": "Term-\u003e[(String,Int)]",
        "package": "agum",
        "partial": "",
        "signature": "Term-\u003e[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:ide",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eide\u003c/a\u003e\u003c/code\u003e represents the identity element (zero).\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Term",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#ide",
        "fct-type": "function",
        "title": "ide"
      },
      "index": {
        "description": "ide represents the identity element zero",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "ide",
        "normalized": "",
        "package": "agum",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:isVar",
      "description": {
        "fct-descr": "\u003cp\u003eA variable is an alphabetic Unicode character followed by a\n sequence of alphabetic or numeric digit Unicode characters.  The\n show method for a term works correctly when variables satisfy\n the \u003ccode\u003e\u003ca\u003eisVar\u003c/a\u003e\u003c/code\u003e predicate.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#isVar",
        "fct-type": "function",
        "title": "isVar"
      },
      "index": {
        "description": "variable is an alphabetic Unicode character followed by sequence of alphabetic or numeric digit Unicode characters The show method for term works correctly when variables satisfy the isVar predicate",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "isVar",
        "normalized": "String-\u003eBool",
        "package": "agum",
        "partial": "Var",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:maplets",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all variable-term pairs in ascending variable order.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Substitution -\u003e [(String, Term)]",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#maplets",
        "fct-type": "function",
        "title": "maplets"
      },
      "index": {
        "description": "Return all variable-term pairs in ascending variable order",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "maplets",
        "normalized": "Substitution-\u003e[(String,Term)]",
        "package": "agum",
        "partial": "",
        "signature": "Substitution-\u003e[(String,Term)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e (t0, t1), return a most general substitution s\n such that s(t0) = t1 modulo the equational axioms of an Abelian\n group.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Equation -\u003e m Substitution",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Given Equation t0 t1 return most general substitution such that t0 t1 modulo the equational axioms of an Abelian group",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "match",
        "normalized": "Equation-\u003ea Substitution",
        "package": "agum",
        "partial": "",
        "signature": "Equation-\u003em Substitution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:mul",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply every coefficient in a term by an integer.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Int -\u003e Term -\u003e Term",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#mul",
        "fct-type": "function",
        "title": "mul"
      },
      "index": {
        "description": "Multiply every coefficient in term by an integer",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "mul",
        "normalized": "Int-\u003eTerm-\u003eTerm",
        "package": "agum",
        "partial": "",
        "signature": "Int-\u003eTerm-\u003eTerm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:subst",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a substitution from a list of variable-term pairs.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "[(String, Term)] -\u003e Substitution",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#subst",
        "fct-type": "function",
        "title": "subst"
      },
      "index": {
        "description": "Construct substitution from list of variable-term pairs",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "subst",
        "normalized": "[(String,Term)]-\u003eSubstitution",
        "package": "agum",
        "partial": "",
        "signature": "[(String,Term)]-\u003eSubstitution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:unify",
      "description": {
        "fct-descr": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e (t0, t1), return a most general substitution s\n such that s(t0) = s(t1) modulo the equational axioms of an Abelian\n group.  Unification always succeeds.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "Equation -\u003e Substitution",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#unify",
        "fct-type": "function",
        "title": "unify"
      },
      "index": {
        "description": "Given Equation t0 t1 return most general substitution such that t0 t1 modulo the equational axioms of an Abelian group Unification always succeeds",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "unify",
        "normalized": "Equation-\u003eSubstitution",
        "package": "agum",
        "partial": "",
        "signature": "Equation-\u003eSubstitution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/agum/docs/Algebra-AbelianGroup-UnificationMatching.html#v:var",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a term that consists of a single variable.\n\u003c/p\u003e",
        "fct-module": "Algebra.AbelianGroup.UnificationMatching",
        "fct-package": "agum",
        "fct-signature": "String -\u003e Term",
        "fct-source": "src/Algebra-AbelianGroup-UnificationMatching.html#var",
        "fct-type": "function",
        "title": "var"
      },
      "index": {
        "description": "Return term that consists of single variable",
        "hierarchy": "Algebra AbelianGroup UnificationMatching",
        "module": "Algebra.AbelianGroup.UnificationMatching",
        "name": "var",
        "normalized": "String-\u003eTerm",
        "package": "agum",
        "partial": "",
        "signature": "String-\u003eTerm"
      }
    }
  }
]