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
        "word": "boolsimplifier"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMachinery for representing and simplifying simple propositional formulas. Type families are used to maintain a simple normal form, taking advantage of the duality between \"And\" and \"Or\". Additional tools are provided to pull out common atoms in subformulas and otherwise iterate until a simplified fixpoint. Full and general simplification is NP-hard, but the tools here can take typical machine-generated formulas and perform most simplifications that could be spotted and done by hand by a reasonable programmer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoolSimplifier",
          "name": "BoolSimplifier",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html",
          "type": "module"
        },
        "index": {
          "description": "Machinery for representing and simplifying simple propositional formulas Type families are used to maintain simple normal form taking advantage of the duality between And and Or Additional tools are provided to pull out common atoms in subformulas and otherwise iterate until simplified fixpoint Full and general simplification is NP-hard but the tools here can take typical machine-generated formulas and perform most simplifications that could be spotted and done by hand by reasonable programmer",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "BoolSimplifier",
          "package": "boolsimplifier",
          "partial": "Bool Simplifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructors for \u003ccode\u003eQueryRep\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "CombineQ",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#CombineQ",
          "type": "class"
        },
        "index": {
          "description": "smart constructors for QueryRep",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "CombineQ",
          "package": "boolsimplifier",
          "partial": "Combine",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:CombineQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueryReps can be queried for clauses within them, and clauses within them can be extracted.  \n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "HasClause",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#HasClause",
          "type": "class"
        },
        "index": {
          "description": "QueryReps can be queried for clauses within them and clauses within them can be extracted",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "HasClause",
          "package": "boolsimplifier",
          "partial": "Has Clause",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:HasClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can wrap any underying atom dype in an Ion to give it a \u003ca\u003epolarity\u003c/a\u003e and add handling of \u003ca\u003enot\u003c/a\u003e to our simplification tools.\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "Ion",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#Ion",
          "type": "data"
        },
        "index": {
          "description": "We can wrap any underying atom dype in an Ion to give it polarity and add handling of not to our simplification tools",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "Ion",
          "package": "boolsimplifier",
          "partial": "Ion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:Ion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "PPConstQR",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#PPConstQR",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "PPConstQR",
          "package": "boolsimplifier",
          "partial": "PPConst QR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:PPConstQR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty printer class\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "PPQueryRep",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#PPQueryRep",
          "type": "class"
        },
        "index": {
          "description": "pretty printer class",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "PPQueryRep",
          "package": "boolsimplifier",
          "partial": "PPQuery Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:PPQueryRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "QAndTyp",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#QAndTyp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QAndTyp",
          "package": "boolsimplifier",
          "partial": "QAnd Typ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QAndTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "QAtomTyp",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#QAtomTyp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QAtomTyp",
          "package": "boolsimplifier",
          "partial": "QAtom Typ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QAtomTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edisjunction is the dual of conjunction and vice-versa\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "QFlipTyp",
          "package": "boolsimplifier",
          "signature": "QFlipTyp",
          "type": "function"
        },
        "index": {
          "description": "disjunction is the dual of conjunction and vice-versa",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QFlipTyp",
          "package": "boolsimplifier",
          "partial": "QFlip Typ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QFlipTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "QNot",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#QNot",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QNot",
          "package": "boolsimplifier",
          "partial": "QNot",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe'll start with three types of formulas: disjunctions, conjunctions, and atoms\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "QOrTyp",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#QOrTyp",
          "type": "data"
        },
        "index": {
          "description": "We ll start with three types of formulas disjunctions conjunctions and atoms",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QOrTyp",
          "package": "boolsimplifier",
          "partial": "QOr Typ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QOrTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formula is either an atom (of some type, e.g. \u003ccode\u003eString\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eA non-atomic formula (which is either a disjunction or a conjunction) is\n  n-ary and consists of a \u003ccode\u003eSet\u003c/code\u003e of atoms and a set of non-atomic subformulas of\n  dual connective, i.e. the non-atomic subformulas of a disjunction must all\n  be conjunctions.  The type system enforces this since there is no \u003ccode\u003eQFlipTyp\u003c/code\u003e\n  instance for \u003ccode\u003eQAtomTyp\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "QueryRep",
          "package": "boolsimplifier",
          "source": "src/Data-BoolSimplifier.html#QueryRep",
          "type": "data"
        },
        "index": {
          "description": "formula is either an atom of some type e.g String non-atomic formula which is either disjunction or conjunction is n-ary and consists of Set of atoms and set of non-atomic subformulas of dual connective i.e the non-atomic subformulas of disjunction must all be conjunctions The type system enforces this since there is no QFlipTyp instance for QAtomTyp",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QueryRep",
          "package": "boolsimplifier",
          "partial": "Query Rep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#t:QueryRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "Neg",
          "package": "boolsimplifier",
          "signature": "Neg a",
          "source": "src/Data-BoolSimplifier.html#Ion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "Neg",
          "package": "boolsimplifier",
          "partial": "Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "Pos",
          "package": "boolsimplifier",
          "signature": "Pos a",
          "source": "src/Data-BoolSimplifier.html#Ion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "Pos",
          "package": "boolsimplifier",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "QAtom",
          "package": "boolsimplifier",
          "signature": "a -\u003e QueryRep QAtomTyp a",
          "source": "src/Data-BoolSimplifier.html#QueryRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QAtom",
          "normalized": "a-\u003eQueryRep QAtomTyp a",
          "package": "boolsimplifier",
          "partial": "QAtom",
          "signature": "a-\u003eQueryRep QAtomTyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:QAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "QOp",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep QAtomTyp a) -\u003e Set (QueryRep (QFlipTyp qtyp) a) -\u003e QueryRep qtyp a",
          "source": "src/Data-BoolSimplifier.html#QueryRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "QOp",
          "normalized": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep(QFlipTyp b)a)-\u003eQueryRep b a",
          "package": "boolsimplifier",
          "partial": "QOp",
          "signature": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep(QFlipTyp qtyp)a)-\u003eQueryRep qtyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:QOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "andq",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp1 a -\u003e QueryRep qtyp2 a -\u003e QueryRep QAndTyp a",
          "source": "src/Data-BoolSimplifier.html#andq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "andq",
          "normalized": "QueryRep a b-\u003eQueryRep a b-\u003eQueryRep QAndTyp b",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a-\u003eQueryRep qtyp a-\u003eQueryRep QAndTyp a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:andq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenience functions\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "andqs",
          "package": "boolsimplifier",
          "signature": "[QueryRep qtyp a] -\u003e QueryRep QAndTyp a",
          "source": "src/Data-BoolSimplifier.html#andqs",
          "type": "function"
        },
        "index": {
          "description": "convenience functions",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "andqs",
          "normalized": "[QueryRep a b]-\u003eQueryRep QAndTyp b",
          "package": "boolsimplifier",
          "signature": "[QueryRep qtyp a]-\u003eQueryRep QAndTyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:andqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "extractAs",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e Set (QueryRep QAtomTyp a)",
          "source": "src/Data-BoolSimplifier.html#extractAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "extractAs",
          "normalized": "QueryRep a b-\u003eSet(QueryRep QAtomTyp b)",
          "package": "boolsimplifier",
          "partial": "As",
          "signature": "QueryRep qtyp a-\u003eSet(QueryRep QAtomTyp a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:extractAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "extractAtomCs",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep qtyp a) -\u003e (Set (QueryRep qtyp a), Set (QueryRep QAtomTyp a))",
          "source": "src/Data-BoolSimplifier.html#extractAtomCs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "extractAtomCs",
          "normalized": "Set(QueryRep a b)-\u003e(Set(QueryRep a b),Set(QueryRep QAtomTyp b))",
          "package": "boolsimplifier",
          "partial": "Atom Cs",
          "signature": "Set(QueryRep qtyp a)-\u003e(Set(QueryRep qtyp a),Set(QueryRep QAtomTyp a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:extractAtomCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "extractCs",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e Set (QueryRep (QFlipTyp qtyp) a)",
          "source": "src/Data-BoolSimplifier.html#extractCs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "extractCs",
          "normalized": "QueryRep a b-\u003eSet(QueryRep(QFlipTyp a)b)",
          "package": "boolsimplifier",
          "partial": "Cs",
          "signature": "QueryRep qtyp a-\u003eSet(QueryRep(QFlipTyp qtyp)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:extractCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes any given simplifier and repeatedly applies it until it ceases to reduce the size of the query reprepresentation.\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "fixSimplifyQueryRep",
          "package": "boolsimplifier",
          "signature": "(QueryRep qtyp a -\u003e QueryRep qtyp a) -\u003e QueryRep qtyp a -\u003e QueryRep qtyp a",
          "source": "src/Data-BoolSimplifier.html#fixSimplifyQueryRep",
          "type": "function"
        },
        "index": {
          "description": "Takes any given simplifier and repeatedly applies it until it ceases to reduce the size of the query reprepresentation",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "fixSimplifyQueryRep",
          "normalized": "(QueryRep a b-\u003eQueryRep a b)-\u003eQueryRep a b-\u003eQueryRep a b",
          "package": "boolsimplifier",
          "partial": "Simplify Query Rep",
          "signature": "(QueryRep qtyp a-\u003eQueryRep qtyp a)-\u003eQueryRep qtyp a-\u003eQueryRep qtyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:fixSimplifyQueryRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of QueryReps, extracts a common clause if possible, returning the clause, the terms from which the clause has been extracted, and the rest.\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "getCommonClauseAs",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep fife a) -\u003e Maybe (QueryRep QAtomTyp a, Set (QueryRep fife a), Set (QueryRep fife a))",
          "source": "src/Data-BoolSimplifier.html#getCommonClauseAs",
          "type": "function"
        },
        "index": {
          "description": "Given set of QueryReps extracts common clause if possible returning the clause the terms from which the clause has been extracted and the rest",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "getCommonClauseAs",
          "normalized": "Set(QueryRep a b)-\u003eMaybe(QueryRep QAtomTyp b,Set(QueryRep a b),Set(QueryRep a b))",
          "package": "boolsimplifier",
          "partial": "Common Clause As",
          "signature": "Set(QueryRep fife a)-\u003eMaybe(QueryRep QAtomTyp a,Set(QueryRep fife a),Set(QueryRep fife a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:getCommonClauseAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "getCommonClauseCs",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep fife a) -\u003e Maybe (QueryRep (QFlipTyp fife) a, Set (QueryRep fife a), Set (QueryRep fife a))",
          "source": "src/Data-BoolSimplifier.html#getCommonClauseCs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "getCommonClauseCs",
          "normalized": "Set(QueryRep a b)-\u003eMaybe(QueryRep(QFlipTyp a)b,Set(QueryRep a b),Set(QueryRep a b))",
          "package": "boolsimplifier",
          "partial": "Common Clause Cs",
          "signature": "Set(QueryRep fife a)-\u003eMaybe(QueryRep(QFlipTyp fife)a,Set(QueryRep fife a),Set(QueryRep fife a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:getCommonClauseCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "hasClause",
          "package": "boolsimplifier",
          "signature": "QueryRep fife a -\u003e QueryRep qtyp a -\u003e Bool",
          "source": "src/Data-BoolSimplifier.html#hasClause",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "hasClause",
          "normalized": "QueryRep a b-\u003eQueryRep c b-\u003eBool",
          "package": "boolsimplifier",
          "partial": "Clause",
          "signature": "QueryRep fife a-\u003eQueryRep qtyp a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:hasClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "isConstQR",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e Bool",
          "source": "src/Data-BoolSimplifier.html#isEmptyQR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "isConstQR",
          "normalized": "QueryRep a b-\u003eBool",
          "package": "boolsimplifier",
          "partial": "Const QR",
          "signature": "QueryRep qtyp a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:isConstQR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "isEmptyQR",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e Bool",
          "source": "src/Data-BoolSimplifier.html#isEmptyQR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "isEmptyQR",
          "normalized": "QueryRep a b-\u003eBool",
          "package": "boolsimplifier",
          "partial": "Empty QR",
          "signature": "QueryRep qtyp a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:isEmptyQR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "maximumByNote",
          "package": "boolsimplifier",
          "signature": "String -\u003e (a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "source": "src/Data-BoolSimplifier.html#maximumByNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "maximumByNote",
          "normalized": "String-\u003e(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "boolsimplifier",
          "partial": "By Note",
          "signature": "String-\u003e(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:maximumByNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "orq",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp1 a -\u003e QueryRep qtyp2 a -\u003e QueryRep QOrTyp a",
          "source": "src/Data-BoolSimplifier.html#orq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "orq",
          "normalized": "QueryRep a b-\u003eQueryRep a b-\u003eQueryRep QOrTyp b",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a-\u003eQueryRep qtyp a-\u003eQueryRep QOrTyp a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:orq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "orqs",
          "package": "boolsimplifier",
          "signature": "[QueryRep qtyp a] -\u003e QueryRep QOrTyp a",
          "source": "src/Data-BoolSimplifier.html#orqs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "orqs",
          "normalized": "[QueryRep a b]-\u003eQueryRep QOrTyp b",
          "package": "boolsimplifier",
          "signature": "[QueryRep qtyp a]-\u003eQueryRep QOrTyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:orqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "ppConstQR",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e String",
          "source": "src/Data-BoolSimplifier.html#ppConstQR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "ppConstQR",
          "normalized": "QueryRep a b-\u003eString",
          "package": "boolsimplifier",
          "partial": "Const QR",
          "signature": "QueryRep qtyp a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:ppConstQR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "ppQueryRep",
          "package": "boolsimplifier",
          "signature": "a -\u003e String",
          "source": "src/Data-BoolSimplifier.html#ppQueryRep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "ppQueryRep",
          "normalized": "a-\u003eString",
          "package": "boolsimplifier",
          "partial": "Query Rep",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:ppQueryRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "qAnd",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep QAtomTyp a) -\u003e Set (QueryRep QOrTyp a) -\u003e QueryRep QAndTyp a",
          "source": "src/Data-BoolSimplifier.html#qAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "qAnd",
          "normalized": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep QOrTyp a)-\u003eQueryRep QAndTyp a",
          "package": "boolsimplifier",
          "partial": "And",
          "signature": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep QOrTyp a)-\u003eQueryRep QAndTyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:qAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "qAtom",
          "package": "boolsimplifier",
          "signature": "a -\u003e QueryRep QAtomTyp (Ion a)",
          "source": "src/Data-BoolSimplifier.html#qAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "qAtom",
          "normalized": "a-\u003eQueryRep QAtomTyp(Ion a)",
          "package": "boolsimplifier",
          "partial": "Atom",
          "signature": "a-\u003eQueryRep QAtomTyp(Ion a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:qAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "qNot",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp (Ion a) -\u003e QueryRep (QNeg qtyp) (Ion a)",
          "source": "src/Data-BoolSimplifier.html#qNot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "qNot",
          "normalized": "QueryRep a(Ion b)-\u003eQueryRep(QNeg a)(Ion b)",
          "package": "boolsimplifier",
          "partial": "Not",
          "signature": "QueryRep qtyp(Ion a)-\u003eQueryRep(QNeg qtyp)(Ion a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:qNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenience constructors, not particularly smart\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "qOr",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep QAtomTyp a) -\u003e Set (QueryRep QAndTyp a) -\u003e QueryRep QOrTyp a",
          "source": "src/Data-BoolSimplifier.html#qOr",
          "type": "function"
        },
        "index": {
          "description": "convenience constructors not particularly smart",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "qOr",
          "normalized": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep QAndTyp a)-\u003eQueryRep QOrTyp a",
          "package": "boolsimplifier",
          "partial": "Or",
          "signature": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep QAndTyp a)-\u003eQueryRep QOrTyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:qOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructor for \u003ccode\u003eQOp\u003c/code\u003e\n   does following optimization: a /\\ (a \\/ b) \u003c-\u003e a, or dually: a \\/ (a /\\ b) \u003c-\u003e a\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "qop",
          "package": "boolsimplifier",
          "signature": "Set (QueryRep QAtomTyp a) -\u003e Set (QueryRep (QFlipTyp qtyp) a) -\u003e QueryRep qtyp a",
          "source": "src/Data-BoolSimplifier.html#qop",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for QOp does following optimization or dually",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "qop",
          "normalized": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep(QFlipTyp b)a)-\u003eQueryRep b a",
          "package": "boolsimplifier",
          "signature": "Set(QueryRep QAtomTyp a)-\u003eSet(QueryRep(QFlipTyp qtyp)a)-\u003eQueryRep qtyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:qop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e  a  /\\  (b \\/ ~b)  /\\  (c \\/ d)   \u003c-\u003e   a /\\ (c \\/ d)\n  a  /\\  ~a         /\\  (b \\/ c)   \u003c-\u003e   False\n         (a \\/ ~a)  /\\  (b \\/ ~b)  \u003c-\u003e   True  (*)\n\u003c/pre\u003e\u003cp\u003eand duals\n\u003c/p\u003e\u003cpre\u003e N.B. 0-ary \\/ is False and 0-ary /\\ is True\n\u003c/pre\u003e",
          "module": "Data.BoolSimplifier",
          "name": "simplifyIons",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp (Ion a) -\u003e QueryRep qtyp (Ion a)",
          "source": "src/Data-BoolSimplifier.html#simplifyIons",
          "type": "function"
        },
        "index": {
          "description": "False True and duals N.B ary is False and ary is True",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "simplifyIons",
          "normalized": "QueryRep a(Ion b)-\u003eQueryRep a(Ion b)",
          "package": "boolsimplifier",
          "partial": "Ions",
          "signature": "QueryRep qtyp(Ion a)-\u003eQueryRep qtyp(Ion a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:simplifyIons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(a /\\ b) \\/ (a /\\ c) \\/ d \u003c-\u003e (a /\\ (b \\/ c)) \\/ d\n (and also the dual)\n\u003c/p\u003e",
          "module": "Data.BoolSimplifier",
          "name": "simplifyQueryRep",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e QueryRep qtyp a",
          "source": "src/Data-BoolSimplifier.html#simplifyQueryRep",
          "type": "function"
        },
        "index": {
          "description": "and also the dual",
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "simplifyQueryRep",
          "normalized": "QueryRep a b-\u003eQueryRep a b",
          "package": "boolsimplifier",
          "partial": "Query Rep",
          "signature": "QueryRep qtyp a-\u003eQueryRep qtyp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:simplifyQueryRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolSimplifier",
          "name": "stripClause",
          "package": "boolsimplifier",
          "signature": "QueryRep qtyp a -\u003e QueryRep fife a -\u003e QueryRep fife a",
          "source": "src/Data-BoolSimplifier.html#stripClause",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolSimplifier",
          "module": "Data.BoolSimplifier",
          "name": "stripClause",
          "normalized": "QueryRep a b-\u003eQueryRep c b-\u003eQueryRep c b",
          "package": "boolsimplifier",
          "partial": "Clause",
          "signature": "QueryRep qtyp a-\u003eQueryRep fife a-\u003eQueryRep fife a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolsimplifier/docs/Data-BoolSimplifier.html#v:stripClause"
      }
    }
  ]
]