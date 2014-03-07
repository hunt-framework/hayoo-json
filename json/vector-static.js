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
        "word": "vector-static"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "source": "src/Data-Fin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "source": "src/Data-Fin.html#Fin",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "signature": "Fin Int",
          "source": "src/Data-Fin.html#Fin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "Fin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "addFin",
          "package": "vector-static",
          "signature": "Fin x -\u003e Fin y -\u003e Fin (x :+: y)",
          "source": "src/Data-Fin.html#addFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "addFin",
          "normalized": "Fin a-\u003eFin b-\u003eFin(a b)",
          "package": "vector-static",
          "partial": "Fin",
          "signature": "Fin x-\u003eFin y-\u003eFin(x y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:addFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "finToInt",
          "package": "vector-static",
          "signature": "Fin n -\u003e Int",
          "source": "src/Data-Fin.html#finToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "finToInt",
          "normalized": "Fin a-\u003eInt",
          "package": "vector-static",
          "partial": "To Int",
          "signature": "Fin n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:finToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "intToFin",
          "package": "vector-static",
          "signature": "Int -\u003e Maybe (Fin n)",
          "source": "src/Data-Fin.html#intToFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "intToFin",
          "normalized": "Int-\u003eMaybe(Fin a)",
          "package": "vector-static",
          "partial": "To Fin",
          "signature": "Int-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:intToFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "mulFin",
          "package": "vector-static",
          "signature": "Fin x -\u003e Fin y -\u003e Fin (x :*: y)",
          "source": "src/Data-Fin.html#mulFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "mulFin",
          "normalized": "Fin a-\u003eFin b-\u003eFin(a*b)",
          "package": "vector-static",
          "partial": "Fin",
          "signature": "Fin x-\u003eFin y-\u003eFin(x*y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:mulFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "mulNatFin",
          "package": "vector-static",
          "signature": "Fin (S y) -\u003e Fin (S (x :*: y))",
          "source": "src/Data-Fin.html#mulNatFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "mulNatFin",
          "normalized": "Fin(S a)-\u003eFin(S(b*a))",
          "package": "vector-static",
          "partial": "Nat Fin",
          "signature": "Fin(S y)-\u003eFin(S(x*y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:mulNatFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "natToFin",
          "package": "vector-static",
          "signature": "Fin (S n)",
          "source": "src/Data-Fin.html#natToFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "natToFin",
          "package": "vector-static",
          "partial": "To Fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:natToFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "pred",
          "package": "vector-static",
          "signature": "Fin n -\u003e Fin n",
          "source": "src/Data-Fin.html#pred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "pred",
          "normalized": "Fin a-\u003eFin a",
          "package": "vector-static",
          "signature": "Fin n-\u003eFin n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "raise",
          "package": "vector-static",
          "signature": "Fin n -\u003e Fin (n :+: k)",
          "source": "src/Data-Fin.html#raise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "raise",
          "normalized": "Fin a-\u003eFin(a b)",
          "package": "vector-static",
          "signature": "Fin n-\u003eFin(n k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "succ",
          "package": "vector-static",
          "signature": "Fin n -\u003e Fin (S n)",
          "source": "src/Data-Fin.html#succ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "succ",
          "normalized": "Fin a-\u003eFin(S a)",
          "package": "vector-static",
          "signature": "Fin n-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fin",
          "name": "zero",
          "package": "vector-static",
          "signature": "Fin (S n)",
          "source": "src/Data-Fin.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fin",
          "module": "Data.Fin",
          "name": "zero",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Fin.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "source": "src/Data-Nat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "partial": "Nat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": ":*:",
          "package": "vector-static",
          "signature": ":*:",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": ":*:",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": ":+:",
          "package": "vector-static",
          "signature": ":+:",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": ":+:",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Exists",
          "package": "vector-static",
          "source": "src/Data-Nat.html#Exists",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Exists",
          "package": "vector-static",
          "partial": "Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "I",
          "package": "vector-static",
          "source": "src/Data-Nat.html#I",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "I",
          "package": "vector-static",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "K",
          "package": "vector-static",
          "source": "src/Data-Nat.html#K",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "K",
          "package": "vector-static",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "source": "src/Data-Nat.html#Nat",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "partial": "Nat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "NatView",
          "package": "vector-static",
          "source": "src/Data-Nat.html#NatView",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "NatView",
          "package": "vector-static",
          "partial": "Nat View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:NatView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Reifiable",
          "package": "vector-static",
          "source": "src/Data-Nat.html#Reifiable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Reifiable",
          "package": "vector-static",
          "partial": "Reifiable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:Reifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Reify",
          "package": "vector-static",
          "source": "src/Data-Nat.html#Reify",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Reify",
          "package": "vector-static",
          "partial": "Reify",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:Reify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "S",
          "package": "vector-static",
          "source": "src/Data-Nat.html#S",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "S",
          "package": "vector-static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Z",
          "package": "vector-static",
          "source": "src/Data-Nat.html#Z",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Z",
          "package": "vector-static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Ex",
          "package": "vector-static",
          "signature": "forall n . Ex !(Reifiable n)",
          "source": "src/Data-Nat.html#Exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Ex",
          "package": "vector-static",
          "partial": "Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "I",
          "package": "vector-static",
          "signature": "I",
          "source": "src/Data-Nat.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "I",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "K",
          "package": "vector-static",
          "signature": "K",
          "source": "src/Data-Nat.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "K",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "signature": "Nat Int",
          "source": "src/Data-Nat.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "vector-static",
          "partial": "Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Proof",
          "package": "vector-static",
          "signature": "Reifiable n",
          "source": "src/Data-Nat.html#Reifiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Proof",
          "package": "vector-static",
          "partial": "Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Succ",
          "package": "vector-static",
          "signature": "Nat n -\u003e NatView (S n)",
          "source": "src/Data-Nat.html#NatView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Succ",
          "normalized": "Nat a-\u003eNatView(S a)",
          "package": "vector-static",
          "partial": "Succ",
          "signature": "Nat n-\u003eNatView(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Zero",
          "package": "vector-static",
          "signature": "NatView Z",
          "source": "src/Data-Nat.html#NatView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Zero",
          "package": "vector-static",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "addNat",
          "package": "vector-static",
          "signature": "Nat a -\u003e Nat b -\u003e Nat (a :+: b)",
          "source": "src/Data-Nat.html#addNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "addNat",
          "normalized": "Nat a-\u003eNat b-\u003eNat(a b)",
          "package": "vector-static",
          "partial": "Nat",
          "signature": "Nat a-\u003eNat b-\u003eNat(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:addNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "mulNat",
          "package": "vector-static",
          "signature": "Nat a -\u003e Nat b -\u003e Nat (a :*: b)",
          "source": "src/Data-Nat.html#mulNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "mulNat",
          "normalized": "Nat a-\u003eNat b-\u003eNat(a*b)",
          "package": "vector-static",
          "partial": "Nat",
          "signature": "Nat a-\u003eNat b-\u003eNat(a*b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:mulNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "natToInt",
          "package": "vector-static",
          "signature": "Nat n -\u003e Int",
          "source": "src/Data-Nat.html#natToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "natToInt",
          "normalized": "Nat a-\u003eInt",
          "package": "vector-static",
          "partial": "To Int",
          "signature": "Nat n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:natToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "reifiable",
          "package": "vector-static",
          "signature": "Nat n -\u003e Reifiable n",
          "source": "src/Data-Nat.html#reifiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "reifiable",
          "normalized": "Nat a-\u003eReifiable a",
          "package": "vector-static",
          "signature": "Nat n-\u003eReifiable n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:reifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "s",
          "package": "vector-static",
          "signature": "Nat n -\u003e Nat (S n)",
          "source": "src/Data-Nat.html#s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "s",
          "normalized": "Nat a-\u003eNat(S a)",
          "package": "vector-static",
          "signature": "Nat n-\u003eNat(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "unI",
          "package": "vector-static",
          "signature": "x",
          "source": "src/Data-Nat.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "unI",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:unI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "unK",
          "package": "vector-static",
          "signature": "x",
          "source": "src/Data-Nat.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "unK",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:unK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "view",
          "package": "vector-static",
          "signature": "Nat n -\u003e NatView n",
          "source": "src/Data-Nat.html#view",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "view",
          "normalized": "Nat a-\u003eNatView a",
          "package": "vector-static",
          "signature": "Nat n-\u003eNatView n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "witnessNat",
          "package": "vector-static",
          "signature": "Nat n",
          "source": "src/Data-Nat.html#witnessNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "witnessNat",
          "package": "vector-static",
          "partial": "Nat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:witnessNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "z",
          "package": "vector-static",
          "signature": "Nat Z",
          "source": "src/Data-Nat.html#z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "z",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Nat.html#v:z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Generic-Mutable-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "MVec",
          "package": "vector-static",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#MVec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "MVec",
          "package": "vector-static",
          "partial": "MVec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#t:MVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "MVec",
          "package": "vector-static",
          "signature": "MVec",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#MVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "MVec",
          "package": "vector-static",
          "partial": "MVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:MVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "clear",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e m ()",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "clear",
          "normalized": "MVec a b(PrimState c)d-\u003ec()",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "copy",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e MVec n v (PrimState m) a -\u003e m ()",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "copy",
          "normalized": "MVec a b(PrimState c)d-\u003eMVec a b(PrimState c)d-\u003ec()",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003eMVec n v(PrimState m)a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "drop",
          "package": "vector-static",
          "signature": "MVec (n :+: k) v s a -\u003e MVec n v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "drop",
          "normalized": "MVec(a b)c d e-\u003eMVec a c d e",
          "package": "vector-static",
          "signature": "MVec(n k)v s a-\u003eMVec n v s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "grow",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e m (MVec (n :+: k) v (PrimState m) a)",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#grow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "grow",
          "normalized": "MVec a b(PrimState c)d-\u003ec(MVec(a e)b(PrimState c)d)",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003em(MVec(n k)v(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "init",
          "package": "vector-static",
          "signature": "MVec (S n) v s a -\u003e MVec n v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "init",
          "normalized": "MVec(S a)b c d-\u003eMVec a b c d",
          "package": "vector-static",
          "signature": "MVec(S n)v s a-\u003eMVec n v s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "new",
          "package": "vector-static",
          "signature": "m (MVec n v (PrimState m) a)",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "new",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "newWith",
          "package": "vector-static",
          "signature": "a -\u003e m (MVec n v (PrimState m) a)",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#newWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "newWith",
          "normalized": "a-\u003eb(MVec c d(PrimState b)a)",
          "package": "vector-static",
          "partial": "With",
          "signature": "a-\u003em(MVec n v(PrimState m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:newWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "overlaps",
          "package": "vector-static",
          "signature": "MVec n v s a -\u003e MVec n v s a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#overlaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "overlaps",
          "normalized": "MVec a b c d-\u003eMVec a b c d-\u003eBool",
          "package": "vector-static",
          "signature": "MVec n v s a-\u003eMVec n v s a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "read",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e Fin n -\u003e m a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "read",
          "normalized": "MVec a b(PrimState c)d-\u003eFin a-\u003ec d",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003eFin n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "set",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e a -\u003e m ()",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "set",
          "normalized": "MVec a b(PrimState c)d-\u003ed-\u003ec()",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "slice",
          "package": "vector-static",
          "signature": "Fin n -\u003e MVec (n :+: k) v s a -\u003e MVec k v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "slice",
          "normalized": "Fin a-\u003eMVec(a b)c d e-\u003eMVec b c d e",
          "package": "vector-static",
          "signature": "Fin n-\u003eMVec(n k)v s a-\u003eMVec k v s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "swap",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e Fin n -\u003e Fin n -\u003e m ()",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "swap",
          "normalized": "MVec a b(PrimState c)d-\u003eFin a-\u003eFin a-\u003ec()",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003eFin n-\u003eFin n-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "tail",
          "package": "vector-static",
          "signature": "MVec (S n) v s a -\u003e MVec n v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "tail",
          "normalized": "MVec(S a)b c d-\u003eMVec a b c d",
          "package": "vector-static",
          "signature": "MVec(S n)v s a-\u003eMVec n v s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "take",
          "package": "vector-static",
          "signature": "MVec (n :+: k) v s a -\u003e MVec k v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "take",
          "normalized": "MVec(a b)c d e-\u003eMVec b c d e",
          "package": "vector-static",
          "signature": "MVec(n k)v s a-\u003eMVec k v s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "unVec",
          "package": "vector-static",
          "signature": "v s a",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#MVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "unVec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:unVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "write",
          "package": "vector-static",
          "signature": "MVec n v (PrimState m) a -\u003e Fin n -\u003e a -\u003e m ()",
          "source": "src/Data-Vector-Generic-Mutable-Static.html#write",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Mutable Static",
          "module": "Data.Vector.Generic.Mutable.Static",
          "name": "write",
          "normalized": "MVec a b(PrimState c)d-\u003eFin a-\u003ed-\u003ec()",
          "package": "vector-static",
          "signature": "MVec n v(PrimState m)a-\u003eFin n-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Mutable-Static.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Generic-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "Vec",
          "package": "vector-static",
          "source": "src/Data-Vector-Generic-Static.html#Vec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "(!)",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Fin n -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "(!) !",
          "normalized": "Vec a b c-\u003eFin a-\u003ec",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eFin n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "(++)",
          "package": "vector-static",
          "signature": "Vec m v a -\u003e Vec n v a -\u003e Vec (m :+: n) v a",
          "source": "src/Data-Vector-Generic-Static.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "(++) ++",
          "normalized": "Vec a b c-\u003eVec d b c-\u003eVec(a d)b c",
          "package": "vector-static",
          "signature": "Vec m v a-\u003eVec n v a-\u003eVec(m n)v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "Vec",
          "package": "vector-static",
          "signature": "Vec",
          "source": "src/Data-Vector-Generic-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "all",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n v a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVec b c a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "allFin",
          "package": "vector-static",
          "signature": "Vec n v (Fin n)",
          "source": "src/Data-Vector-Generic-Static.html#allFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "allFin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:allFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "and",
          "package": "vector-static",
          "signature": "Vec n v Bool -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "and",
          "normalized": "Vec a b Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n v Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "any",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n v a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVec b c a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "backpermute",
          "package": "vector-static",
          "signature": "Vec m v a -\u003e Vec n v (Fin m) -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#backpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "backpermute",
          "normalized": "Vec a b c-\u003eVec d b(Fin a)-\u003eVec d b c",
          "package": "vector-static",
          "signature": "Vec m v a-\u003eVec n v(Fin m)-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "concatMap",
          "package": "vector-static",
          "signature": "(a -\u003e Vec n v b) -\u003e Vec m v a -\u003e Vec (m :*: n) v b",
          "source": "src/Data-Vector-Generic-Static.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "concatMap",
          "normalized": "(a-\u003eVec b c d)-\u003eVec e c a-\u003eVec(e*b)c d",
          "package": "vector-static",
          "partial": "Map",
          "signature": "(a-\u003eVec n v b)-\u003eVec m v a-\u003eVec(m*n)v b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "cons",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a -\u003e Vec (S n) v a",
          "source": "src/Data-Vector-Generic-Static.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "cons",
          "normalized": "a-\u003eVec b c a-\u003eVec(S b)c a",
          "package": "vector-static",
          "signature": "a-\u003eVec n v a-\u003eVec(S n)v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "copy",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "copy",
          "normalized": "Vec a b c-\u003eVec a b c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "drop",
          "package": "vector-static",
          "signature": "Vec (n :+: k) v a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "drop",
          "normalized": "Vec(a b)c d-\u003eVec a c d",
          "package": "vector-static",
          "signature": "Vec(n k)v a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "elem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "elem",
          "normalized": "a-\u003eVec b c a-\u003eBool",
          "package": "vector-static",
          "signature": "a-\u003eVec n v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "elemIndex",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Generic-Static.html#elemIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "elemIndex",
          "normalized": "a-\u003eVec b c a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "a-\u003eVec n v a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "empty",
          "package": "vector-static",
          "signature": "Vec Z v a",
          "source": "src/Data-Vector-Generic-Static.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "empty",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "enumFromN",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#enumFromN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "enumFromN",
          "normalized": "a-\u003eVec b c a",
          "package": "vector-static",
          "partial": "From",
          "signature": "a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:enumFromN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "enumFromStepN",
          "package": "vector-static",
          "signature": "a -\u003e a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#enumFromStepN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "enumFromStepN",
          "normalized": "a-\u003ea-\u003eVec b c a",
          "package": "vector-static",
          "partial": "From Step",
          "signature": "a-\u003ea-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:enumFromStepN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "find",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n v a -\u003e Maybe a",
          "source": "src/Data-Vector-Generic-Static.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVec b c a-\u003eMaybe a",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n v a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "findIndex",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n v a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Generic-Static.html#findIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVec b c a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVec n v a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldl",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n v b -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c d b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n v b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldl'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n v b -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c d b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n v b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldl1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldl1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldr",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n v a -\u003e b",
          "source": "src/Data-Vector-Generic-Static.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c d a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n v a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldr'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n v a -\u003e b",
          "source": "src/Data-Vector-Generic-Static.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c d a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n v a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldr1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "foldr1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "fromList",
          "package": "vector-static",
          "signature": "[a] -\u003e (forall n.  Vec n v a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Generic-Static.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "fromList",
          "normalized": "[a]-\u003e(b c Vec d e a-\u003ef)-\u003ef",
          "package": "vector-static",
          "partial": "List",
          "signature": "[a]-\u003e(forall n. Vec n v a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "generate",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a) -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "generate",
          "normalized": "(Fin a-\u003eb)-\u003eVec a c b",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea)-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "head",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "head",
          "normalized": "Vec(S a)b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "headM",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e m a",
          "source": "src/Data-Vector-Generic-Static.html#headM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "headM",
          "normalized": "Vec(S a)b c-\u003ed c",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:headM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldl",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n v b -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#ifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldl",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b d c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n v b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:ifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldl'",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n v b -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#ifoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldl'",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b d c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n v b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:ifoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldr",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n v a -\u003e b",
          "source": "src/Data-Vector-Generic-Static.html#ifoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldr",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a d b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n v a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:ifoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldr'",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n v a -\u003e b",
          "source": "src/Data-Vector-Generic-Static.html#ifoldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "ifoldr'",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a d b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n v a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:ifoldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "imap",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b) -\u003e Vec n v a -\u003e Vec n v b",
          "source": "src/Data-Vector-Generic-Static.html#imap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "imap",
          "normalized": "(Fin a-\u003eb-\u003ec)-\u003eVec a d b-\u003eVec a d c",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb)-\u003eVec n v a-\u003eVec n v b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "indexM",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Fin n -\u003e m a",
          "source": "src/Data-Vector-Generic-Static.html#indexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "indexM",
          "normalized": "Vec a b c-\u003eFin a-\u003ed c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eFin n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:indexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "indexed",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v (Fin n, a)",
          "source": "src/Data-Vector-Generic-Static.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "indexed",
          "normalized": "Vec a b c-\u003eVec a b(Fin a,c)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v(Fin n,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "init",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "init",
          "normalized": "Vec(S a)b c-\u003eVec a b c",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c",
          "source": "src/Data-Vector-Generic-Static.html#izipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed)-\u003eVec a e b-\u003eVec a e c-\u003eVec a e d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:izipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith3",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d",
          "source": "src/Data-Vector-Generic-Static.html#izipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith3",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec a f b-\u003eVec a f c-\u003eVec a f d-\u003eVec a f e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:izipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith4",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e",
          "source": "src/Data-Vector-Generic-Static.html#izipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith4",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec a g b-\u003eVec a g c-\u003eVec a g d-\u003eVec a g e-\u003eVec a g f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:izipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith5",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v f",
          "source": "src/Data-Vector-Generic-Static.html#izipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith5",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec a h b-\u003eVec a h c-\u003eVec a h d-\u003eVec a h e-\u003eVec a h f-\u003eVec a h g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:izipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith6",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v f -\u003e Vec n v g",
          "source": "src/Data-Vector-Generic-Static.html#izipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "izipWith6",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eVec a i b-\u003eVec a i c-\u003eVec a i d-\u003eVec a i e-\u003eVec a i f-\u003eVec a i g-\u003eVec a i h",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v f-\u003eVec n v g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:izipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "last",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "last",
          "normalized": "Vec(S a)b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "lastM",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e m a",
          "source": "src/Data-Vector-Generic-Static.html#lastM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "lastM",
          "normalized": "Vec(S a)b c-\u003ed c",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:lastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "length",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Nat n",
          "source": "src/Data-Vector-Generic-Static.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "length",
          "normalized": "Vec a b c-\u003eNat a",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eNat n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "map",
          "package": "vector-static",
          "signature": "(a -\u003e b) -\u003e Vec n v a -\u003e Vec n v b",
          "source": "src/Data-Vector-Generic-Static.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVec c d a-\u003eVec c d b",
          "package": "vector-static",
          "signature": "(a-\u003eb)-\u003eVec n v a-\u003eVec n v b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "maxIndex",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Generic-Static.html#maxIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "maxIndex",
          "normalized": "Vec(S a)b c-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)v a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:maxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "maxIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) v a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Generic-Static.html#maxIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "maxIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)c a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)v a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:maxIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "maximum",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "maximum",
          "normalized": "Vec(S a)b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "maximumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#maximumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "minIndex",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Generic-Static.html#minIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "minIndex",
          "normalized": "Vec(S a)b c-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)v a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:minIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "minIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) v a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Generic-Static.html#minIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "minIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)c a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)v a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:minIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "minimum",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "minimum",
          "normalized": "Vec(S a)b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "minimumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#minimumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)c a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "new",
          "package": "vector-static",
          "signature": "New a -\u003e (forall n.  Vec n v a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Generic-Static.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "new",
          "normalized": "New a-\u003e(b c Vec d e a-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "New a-\u003e(forall n. Vec n v a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "notElem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "notElem",
          "normalized": "a-\u003eVec b c a-\u003eBool",
          "package": "vector-static",
          "partial": "Elem",
          "signature": "a-\u003eVec n v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "null",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "null",
          "normalized": "Vec a b c-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "or",
          "package": "vector-static",
          "signature": "Vec n v Bool -\u003e Bool",
          "source": "src/Data-Vector-Generic-Static.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "or",
          "normalized": "Vec a b Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n v Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "product",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "product",
          "normalized": "Vec a b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec n v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "replicate",
          "package": "vector-static",
          "signature": "a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "replicate",
          "normalized": "a-\u003eVec b c a",
          "package": "vector-static",
          "signature": "a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "reverse",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "reverse",
          "normalized": "Vec a b c-\u003eVec a b c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "singleton",
          "package": "vector-static",
          "signature": "a -\u003e Vec (S Z) v a",
          "source": "src/Data-Vector-Generic-Static.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "singleton",
          "normalized": "a-\u003eVec(S Z)b a",
          "package": "vector-static",
          "signature": "a-\u003eVec(S Z)v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "slice",
          "package": "vector-static",
          "signature": "Fin n -\u003e Vec (n :+: k) v a -\u003e Vec k v a",
          "source": "src/Data-Vector-Generic-Static.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "slice",
          "normalized": "Fin a-\u003eVec(a b)c d-\u003eVec b c d",
          "package": "vector-static",
          "signature": "Fin n-\u003eVec(n k)v a-\u003eVec k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "snoc",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e a -\u003e Vec (S n) v a",
          "source": "src/Data-Vector-Generic-Static.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "snoc",
          "normalized": "Vec a b c-\u003ec-\u003eVec(S a)b c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003ea-\u003eVec(S n)v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "stream",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Stream a",
          "source": "src/Data-Vector-Generic-Static.html#stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "stream",
          "normalized": "Vec a b c-\u003eStream c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "streamR",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Stream a",
          "source": "src/Data-Vector-Generic-Static.html#streamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "streamR",
          "normalized": "Vec a b c-\u003eStream c",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:streamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "sum",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e a",
          "source": "src/Data-Vector-Generic-Static.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "sum",
          "normalized": "Vec a b c-\u003ec",
          "package": "vector-static",
          "signature": "Vec n v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "tail",
          "package": "vector-static",
          "signature": "Vec (S n) v a -\u003e Vec n v a",
          "source": "src/Data-Vector-Generic-Static.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "tail",
          "normalized": "Vec(S a)b c-\u003eVec a b c",
          "package": "vector-static",
          "signature": "Vec(S n)v a-\u003eVec n v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "take",
          "package": "vector-static",
          "signature": "Vec (n :+: k) v a -\u003e Vec k v a",
          "source": "src/Data-Vector-Generic-Static.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "take",
          "normalized": "Vec(a b)c d-\u003eVec b c d",
          "package": "vector-static",
          "signature": "Vec(n k)v a-\u003eVec k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "toList",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e [a]",
          "source": "src/Data-Vector-Generic-Static.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "toList",
          "normalized": "Vec a b c-\u003e[c]",
          "package": "vector-static",
          "partial": "List",
          "signature": "Vec n v a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unVec",
          "package": "vector-static",
          "signature": "v a",
          "source": "src/Data-Vector-Generic-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unVec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unfoldr",
          "package": "vector-static",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e (forall n.  Vec n v a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Generic-Static.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e(c d Vec e f b-\u003eg)-\u003eg",
          "package": "vector-static",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e(forall n. Vec n v a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unstream",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n v a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Generic-Static.html#unstream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unstream",
          "normalized": "Stream a-\u003e(b c Vec d e a-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n v a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unstreamR",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n v a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Generic-Static.html#unstreamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unstreamR",
          "normalized": "Stream a-\u003e(b c Vec d e a-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n v a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unstreamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unzip",
          "package": "vector-static",
          "signature": "Vec n v (a, b) -\u003e (Vec n v a, Vec n v b)",
          "source": "src/Data-Vector-Generic-Static.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unzip",
          "normalized": "Vec a b(c,d)-\u003e(Vec a b c,Vec a b d)",
          "package": "vector-static",
          "signature": "Vec n v(a,b)-\u003e(Vec n v a,Vec n v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unzip3",
          "package": "vector-static",
          "signature": "Vec n v (a, b, c) -\u003e (Vec n v a, Vec n v b, Vec n v c)",
          "source": "src/Data-Vector-Generic-Static.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unzip3",
          "normalized": "Vec a b(c,d,e)-\u003e(Vec a b c,Vec a b d,Vec a b e)",
          "package": "vector-static",
          "signature": "Vec n v(a,b,c)-\u003e(Vec n v a,Vec n v b,Vec n v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unzip4",
          "package": "vector-static",
          "signature": "Vec n v (a, b, c, d) -\u003e (Vec n v a, Vec n v b, Vec n v c, Vec n v d)",
          "source": "src/Data-Vector-Generic-Static.html#unzip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unzip4",
          "normalized": "Vec a b(c,d,e,f)-\u003e(Vec a b c,Vec a b d,Vec a b e,Vec a b f)",
          "package": "vector-static",
          "signature": "Vec n v(a,b,c,d)-\u003e(Vec n v a,Vec n v b,Vec n v c,Vec n v d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unzip5",
          "package": "vector-static",
          "signature": "Vec n v (a, b, c, d, e) -\u003e (Vec n v a, Vec n v b, Vec n v c, Vec n v d, Vec n v e)",
          "source": "src/Data-Vector-Generic-Static.html#unzip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unzip5",
          "normalized": "Vec a b(c,d,e,f,g)-\u003e(Vec a b c,Vec a b d,Vec a b e,Vec a b f,Vec a b g)",
          "package": "vector-static",
          "signature": "Vec n v(a,b,c,d,e)-\u003e(Vec n v a,Vec n v b,Vec n v c,Vec n v d,Vec n v e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "unzip6",
          "package": "vector-static",
          "signature": "Vec n v (a, b, c, d, e, f) -\u003e (Vec n v a, Vec n v b, Vec n v c, Vec n v d, Vec n v e, Vec n v f)",
          "source": "src/Data-Vector-Generic-Static.html#unzip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "unzip6",
          "normalized": "Vec a b(c,d,e,f,g,h)-\u003e(Vec a b c,Vec a b d,Vec a b e,Vec a b f,Vec a b g,Vec a b h)",
          "package": "vector-static",
          "signature": "Vec n v(a,b,c,d,e,f)-\u003e(Vec n v a,Vec n v b,Vec n v c,Vec n v d,Vec n v e,Vec n v f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zip",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v b -\u003e Vec n v (a, b)",
          "source": "src/Data-Vector-Generic-Static.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zip",
          "normalized": "Vec a b c-\u003eVec a b d-\u003eVec a b(c,d)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v b-\u003eVec n v(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zip3",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v (a, b, c)",
          "source": "src/Data-Vector-Generic-Static.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zip3",
          "normalized": "Vec a b c-\u003eVec a b d-\u003eVec a b e-\u003eVec a b(c,d,e)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zip4",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v (a, b, c, d)",
          "source": "src/Data-Vector-Generic-Static.html#zip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zip4",
          "normalized": "Vec a b c-\u003eVec a b d-\u003eVec a b e-\u003eVec a b f-\u003eVec a b(c,d,e,f)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zip5",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v (a, b, c, d, e)",
          "source": "src/Data-Vector-Generic-Static.html#zip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zip5",
          "normalized": "Vec a b c-\u003eVec a b d-\u003eVec a b e-\u003eVec a b f-\u003eVec a b g-\u003eVec a b(c,d,e,f,g)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zip6",
          "package": "vector-static",
          "signature": "Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v f -\u003e Vec n v (a, b, c, d, e, f)",
          "source": "src/Data-Vector-Generic-Static.html#zip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zip6",
          "normalized": "Vec a b c-\u003eVec a b d-\u003eVec a b e-\u003eVec a b f-\u003eVec a b g-\u003eVec a b h-\u003eVec a b(c,d,e,f,g,h)",
          "package": "vector-static",
          "signature": "Vec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v f-\u003eVec n v(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c",
          "source": "src/Data-Vector-Generic-Static.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVec d e a-\u003eVec d e b-\u003eVec d e c",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith3",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d",
          "source": "src/Data-Vector-Generic-Static.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec e f a-\u003eVec e f b-\u003eVec e f c-\u003eVec e f d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith4",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e",
          "source": "src/Data-Vector-Generic-Static.html#zipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec f g a-\u003eVec f g b-\u003eVec f g c-\u003eVec f g d-\u003eVec f g e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith5",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v f",
          "source": "src/Data-Vector-Generic-Static.html#zipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec g h a-\u003eVec g h b-\u003eVec g h c-\u003eVec g h d-\u003eVec g h e-\u003eVec g h f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith6",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n v a -\u003e Vec n v b -\u003e Vec n v c -\u003e Vec n v d -\u003e Vec n v e -\u003e Vec n v f -\u003e Vec n v g",
          "source": "src/Data-Vector-Generic-Static.html#zipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Generic Static",
          "module": "Data.Vector.Generic.Static",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec h i a-\u003eVec h i b-\u003eVec h i c-\u003eVec h i d-\u003eVec h i e-\u003eVec h i f-\u003eVec h i g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n v a-\u003eVec n v b-\u003eVec n v c-\u003eVec n v d-\u003eVec n v e-\u003eVec n v f-\u003eVec n v g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Generic-Static.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Mutable-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Mutable Static",
          "module": "Data.Vector.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Mutable-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "Vec",
          "package": "vector-static",
          "source": "src/Data-Vector-Static.html#Vec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "(!)",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e a",
          "source": "src/Data-Vector-Static.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "(!) !",
          "normalized": "Vec a b-\u003eFin a-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "(++)",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n a -\u003e Vec (m :+: n) a",
          "source": "src/Data-Vector-Static.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "(++) ++",
          "normalized": "Vec a b-\u003eVec c b-\u003eVec(a c)b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n a-\u003eVec(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "Vec",
          "package": "vector-static",
          "signature": "Vec",
          "source": "src/Data-Vector-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "all",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Static.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "allFin",
          "package": "vector-static",
          "signature": "Vec n (Fin n)",
          "source": "src/Data-Vector-Static.html#allFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "allFin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:allFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "and",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Static.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "and",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "any",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Static.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "backpermute",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n (Fin m) -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#backpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "backpermute",
          "normalized": "Vec a b-\u003eVec c(Fin a)-\u003eVec c b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n(Fin m)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "concatMap",
          "package": "vector-static",
          "signature": "(a -\u003e Vec n b) -\u003e Vec m a -\u003e Vec (m :*: n) b",
          "source": "src/Data-Vector-Static.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "concatMap",
          "normalized": "(a-\u003eVec b c)-\u003eVec d a-\u003eVec(d*b)c",
          "package": "vector-static",
          "partial": "Map",
          "signature": "(a-\u003eVec n b)-\u003eVec m a-\u003eVec(m*n)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "cons",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Static.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "cons",
          "normalized": "a-\u003eVec b a-\u003eVec(S b)a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "copy",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "copy",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "diagonal",
          "package": "vector-static",
          "signature": "Vec n (Vec n a) -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#diagonal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "diagonal",
          "normalized": "Vec a(Vec a b)-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n(Vec n a)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "elem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Static.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "elem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "elemIndex",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Static.html#elemIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "elemIndex",
          "normalized": "a-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "a-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "empty",
          "package": "vector-static",
          "signature": "Vec Z a",
          "source": "src/Data-Vector-Static.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "empty",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "enumFromN",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#enumFromN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "enumFromN",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "partial": "From",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:enumFromN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "enumFromStepN",
          "package": "vector-static",
          "signature": "a -\u003e a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#enumFromStepN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "enumFromStepN",
          "normalized": "a-\u003ea-\u003eVec b a",
          "package": "vector-static",
          "partial": "From Step",
          "signature": "a-\u003ea-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:enumFromStepN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "find",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe a",
          "source": "src/Data-Vector-Static.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe a",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "findIndex",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Static.html#findIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldl",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Static.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldl'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Static.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldl1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldl1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldr",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Static.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldr'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Static.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldr1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "foldr1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "fromList",
          "package": "vector-static",
          "signature": "[a] -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Static.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "fromList",
          "normalized": "[a]-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "partial": "List",
          "signature": "[a]-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "generate",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a) -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "generate",
          "normalized": "(Fin a-\u003eb)-\u003eVec a b",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "head",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "head",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "headM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Static.html#headM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "headM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:headM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "ifoldl",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Static.html#ifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "ifoldl",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:ifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "ifoldl'",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Static.html#ifoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "ifoldl'",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:ifoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "ifoldr",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Static.html#ifoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "ifoldr",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:ifoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "ifoldr'",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Static.html#ifoldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "ifoldr'",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:ifoldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "imap",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Static.html#imap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "imap",
          "normalized": "(Fin a-\u003eb-\u003ec)-\u003eVec a b-\u003eVec a c",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "indexM",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e m a",
          "source": "src/Data-Vector-Static.html#indexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "indexM",
          "normalized": "Vec a b-\u003eFin a-\u003ec b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:indexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "init",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "init",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "izipWith",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Static.html#izipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "izipWith",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed)-\u003eVec a b-\u003eVec a c-\u003eVec a d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:izipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "izipWith3",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Static.html#izipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "izipWith3",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:izipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "izipWith4",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Static.html#izipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "izipWith4",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:izipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "izipWith5",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Static.html#izipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "izipWith5",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:izipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "izipWith6",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Static.html#izipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "izipWith6",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g-\u003eVec a h",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:izipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "last",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "last",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "lastM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Static.html#lastM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "lastM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:lastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "length",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Nat n",
          "source": "src/Data-Vector-Static.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "length",
          "normalized": "Vec a b-\u003eNat a",
          "package": "vector-static",
          "signature": "Vec n a-\u003eNat n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "map",
          "package": "vector-static",
          "signature": "(a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Static.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVec c a-\u003eVec c b",
          "package": "vector-static",
          "signature": "(a-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "maxIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Static.html#maxIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "maxIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:maxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "maxIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Static.html#maxIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "maxIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:maxIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "maximum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "maximum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "maximumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#maximumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "minIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Static.html#minIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "minIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:minIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "minIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Static.html#minIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "minIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:minIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "minimum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "minimum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "minimumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Static.html#minimumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "new",
          "package": "vector-static",
          "signature": "New a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Static.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "new",
          "normalized": "New a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "New a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "notElem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Static.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "notElem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "partial": "Elem",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "null",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Static.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "null",
          "normalized": "Vec a b-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "or",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Static.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "or",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "product",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Static.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "product",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "replicate",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "replicate",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "reverse",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "reverse",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "singleton",
          "package": "vector-static",
          "signature": "a -\u003e Vec (S Z) a",
          "source": "src/Data-Vector-Static.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "singleton",
          "normalized": "a-\u003eVec(S Z)a",
          "package": "vector-static",
          "signature": "a-\u003eVec(S Z)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "slice",
          "package": "vector-static",
          "signature": "Fin n -\u003e Vec (n :+: k) a -\u003e Vec k a",
          "source": "src/Data-Vector-Static.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "slice",
          "normalized": "Fin a-\u003eVec(a b)c-\u003eVec b c",
          "package": "vector-static",
          "signature": "Fin n-\u003eVec(n k)a-\u003eVec k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "snoc",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Static.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "snoc",
          "normalized": "Vec a b-\u003eb-\u003eVec(S a)b",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "stream",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Static.html#stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "stream",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "streamR",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Static.html#streamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "streamR",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:streamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "sum",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Static.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "sum",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "tail",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Static.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "tail",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "toList",
          "package": "vector-static",
          "signature": "Vec n a -\u003e [a]",
          "source": "src/Data-Vector-Static.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "toList",
          "normalized": "Vec a b-\u003e[b]",
          "package": "vector-static",
          "partial": "List",
          "signature": "Vec n a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unVec",
          "package": "vector-static",
          "signature": "Vec n Vector a",
          "source": "src/Data-Vector-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unVec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unfoldr",
          "package": "vector-static",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Static.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e(c d Vec e b-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unstream",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Static.html#unstream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unstream",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unstreamR",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Static.html#unstreamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unstreamR",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unstreamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unzip",
          "package": "vector-static",
          "signature": "Vec n (a, b) -\u003e (Vec n a, Vec n b)",
          "source": "src/Data-Vector-Static.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unzip",
          "normalized": "Vec a(b,c)-\u003e(Vec a b,Vec a c)",
          "package": "vector-static",
          "signature": "Vec n(a,b)-\u003e(Vec n a,Vec n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unzip3",
          "package": "vector-static",
          "signature": "Vec n (a, b, c) -\u003e (Vec n a, Vec n b, Vec n c)",
          "source": "src/Data-Vector-Static.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unzip3",
          "normalized": "Vec a(b,c,d)-\u003e(Vec a b,Vec a c,Vec a d)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c)-\u003e(Vec n a,Vec n b,Vec n c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unzip4",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d)",
          "source": "src/Data-Vector-Static.html#unzip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unzip4",
          "normalized": "Vec a(b,c,d,e)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unzip5",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d, e) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d, Vec n e)",
          "source": "src/Data-Vector-Static.html#unzip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unzip5",
          "normalized": "Vec a(b,c,d,e,f)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e,Vec a f)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d,e)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d,Vec n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "unzip6",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d, e, f) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d, Vec n e, Vec n f)",
          "source": "src/Data-Vector-Static.html#unzip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "unzip6",
          "normalized": "Vec a(b,c,d,e,f,g)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e,Vec a f,Vec a g)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d,e,f)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d,Vec n e,Vec n f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zip",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n (a, b)",
          "source": "src/Data-Vector-Static.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zip",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a(b,c)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zip3",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n (a, b, c)",
          "source": "src/Data-Vector-Static.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zip3",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a(b,c,d)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zip4",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n (a, b, c, d)",
          "source": "src/Data-Vector-Static.html#zip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zip4",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a(b,c,d,e)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zip5",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n (a, b, c, d, e)",
          "source": "src/Data-Vector-Static.html#zip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zip5",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a(b,c,d,e,f)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zip6",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n (a, b, c, d, e, f)",
          "source": "src/Data-Vector-Static.html#zip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zip6",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g-\u003eVec a(b,c,d,e,f,g)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zipWith",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Static.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVec d a-\u003eVec d b-\u003eVec d c",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zipWith3",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Static.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec e a-\u003eVec e b-\u003eVec e c-\u003eVec e d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zipWith4",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Static.html#zipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec f a-\u003eVec f b-\u003eVec f c-\u003eVec f d-\u003eVec f e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zipWith5",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Static.html#zipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec g a-\u003eVec g b-\u003eVec g c-\u003eVec g d-\u003eVec g e-\u003eVec g f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Static",
          "name": "zipWith6",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Static.html#zipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Static",
          "module": "Data.Vector.Static",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec h a-\u003eVec h b-\u003eVec h c-\u003eVec h d-\u003eVec h e-\u003eVec h f-\u003eVec h g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Static.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Storable-Mutable-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Storable Mutable Static",
          "module": "Data.Vector.Storable.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Mutable-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Storable-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "Vec",
          "package": "vector-static",
          "source": "src/Data-Vector-Storable-Static.html#Vec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "(!)",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "(!) !",
          "normalized": "Vec a b-\u003eFin a-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "(++)",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n a -\u003e Vec (m :+: n) a",
          "source": "src/Data-Vector-Storable-Static.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "(++) ++",
          "normalized": "Vec a b-\u003eVec c b-\u003eVec(a c)b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n a-\u003eVec(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "Vec",
          "package": "vector-static",
          "signature": "Vec",
          "source": "src/Data-Vector-Storable-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "all",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "and",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "and",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "any",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "backpermute",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n (Fin m) -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#backpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "backpermute",
          "normalized": "Vec a b-\u003eVec c(Fin a)-\u003eVec c b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n(Fin m)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "concatMap",
          "package": "vector-static",
          "signature": "(a -\u003e Vec n b) -\u003e Vec m a -\u003e Vec (m :*: n) b",
          "source": "src/Data-Vector-Storable-Static.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "concatMap",
          "normalized": "(a-\u003eVec b c)-\u003eVec d a-\u003eVec(d*b)c",
          "package": "vector-static",
          "partial": "Map",
          "signature": "(a-\u003eVec n b)-\u003eVec m a-\u003eVec(m*n)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "cons",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Storable-Static.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "cons",
          "normalized": "a-\u003eVec b a-\u003eVec(S b)a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "copy",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "copy",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "elem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "elem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "elemIndex",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Storable-Static.html#elemIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "elemIndex",
          "normalized": "a-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "a-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "empty",
          "package": "vector-static",
          "signature": "Vec Z a",
          "source": "src/Data-Vector-Storable-Static.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "empty",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "enumFromN",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#enumFromN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "enumFromN",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "partial": "From",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:enumFromN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "enumFromStepN",
          "package": "vector-static",
          "signature": "a -\u003e a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#enumFromStepN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "enumFromStepN",
          "normalized": "a-\u003ea-\u003eVec b a",
          "package": "vector-static",
          "partial": "From Step",
          "signature": "a-\u003ea-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:enumFromStepN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "find",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe a",
          "source": "src/Data-Vector-Storable-Static.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe a",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "findIndex",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Storable-Static.html#findIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldl",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldl'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldl1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldl1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldr",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Storable-Static.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldr'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Storable-Static.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldr1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "foldr1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "fromList",
          "package": "vector-static",
          "signature": "[a] -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Storable-Static.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "fromList",
          "normalized": "[a]-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "partial": "List",
          "signature": "[a]-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "generate",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a) -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "generate",
          "normalized": "(Fin a-\u003eb)-\u003eVec a b",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "head",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "head",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "headM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Storable-Static.html#headM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "headM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:headM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldl",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#ifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldl",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:ifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldl'",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#ifoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldl'",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:ifoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldr",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Storable-Static.html#ifoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldr",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:ifoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldr'",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Storable-Static.html#ifoldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "ifoldr'",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:ifoldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "imap",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Storable-Static.html#imap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "imap",
          "normalized": "(Fin a-\u003eb-\u003ec)-\u003eVec a b-\u003eVec a c",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "indexM",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e m a",
          "source": "src/Data-Vector-Storable-Static.html#indexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "indexM",
          "normalized": "Vec a b-\u003eFin a-\u003ec b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:indexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "init",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "init",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Storable-Static.html#izipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed)-\u003eVec a b-\u003eVec a c-\u003eVec a d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:izipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith3",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Storable-Static.html#izipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith3",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:izipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith4",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Storable-Static.html#izipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith4",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:izipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith5",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Storable-Static.html#izipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith5",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:izipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith6",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Storable-Static.html#izipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "izipWith6",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g-\u003eVec a h",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:izipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "last",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "last",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "lastM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Storable-Static.html#lastM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "lastM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:lastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "length",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Nat n",
          "source": "src/Data-Vector-Storable-Static.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "length",
          "normalized": "Vec a b-\u003eNat a",
          "package": "vector-static",
          "signature": "Vec n a-\u003eNat n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "map",
          "package": "vector-static",
          "signature": "(a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Storable-Static.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVec c a-\u003eVec c b",
          "package": "vector-static",
          "signature": "(a-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "maxIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Storable-Static.html#maxIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "maxIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:maxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "maxIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Storable-Static.html#maxIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "maxIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:maxIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "maximum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "maximum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "maximumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#maximumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "minIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Storable-Static.html#minIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "minIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:minIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "minIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Storable-Static.html#minIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "minIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:minIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "minimum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "minimum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "minimumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#minimumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "new",
          "package": "vector-static",
          "signature": "New a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Storable-Static.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "new",
          "normalized": "New a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "New a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "notElem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "notElem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "partial": "Elem",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "null",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "null",
          "normalized": "Vec a b-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "or",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Storable-Static.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "or",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "product",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "product",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "replicate",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "replicate",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "reverse",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "reverse",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "singleton",
          "package": "vector-static",
          "signature": "a -\u003e Vec (S Z) a",
          "source": "src/Data-Vector-Storable-Static.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "singleton",
          "normalized": "a-\u003eVec(S Z)a",
          "package": "vector-static",
          "signature": "a-\u003eVec(S Z)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "slice",
          "package": "vector-static",
          "signature": "Fin n -\u003e Vec (n :+: k) a -\u003e Vec k a",
          "source": "src/Data-Vector-Storable-Static.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "slice",
          "normalized": "Fin a-\u003eVec(a b)c-\u003eVec b c",
          "package": "vector-static",
          "signature": "Fin n-\u003eVec(n k)a-\u003eVec k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "snoc",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Storable-Static.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "snoc",
          "normalized": "Vec a b-\u003eb-\u003eVec(S a)b",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "stream",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Storable-Static.html#stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "stream",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "streamR",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Storable-Static.html#streamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "streamR",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:streamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "sum",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Storable-Static.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "sum",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "tail",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Storable-Static.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "tail",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "toList",
          "package": "vector-static",
          "signature": "Vec n a -\u003e [a]",
          "source": "src/Data-Vector-Storable-Static.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "toList",
          "normalized": "Vec a b-\u003e[b]",
          "package": "vector-static",
          "partial": "List",
          "signature": "Vec n a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "unVec",
          "package": "vector-static",
          "signature": "Vec n Vector a",
          "source": "src/Data-Vector-Storable-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "unVec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:unVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "unfoldr",
          "package": "vector-static",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Storable-Static.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e(c d Vec e b-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "unstream",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Storable-Static.html#unstream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "unstream",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "unstreamR",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Storable-Static.html#unstreamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "unstreamR",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:unstreamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Storable-Static.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVec d a-\u003eVec d b-\u003eVec d c",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith3",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Storable-Static.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec e a-\u003eVec e b-\u003eVec e c-\u003eVec e d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith4",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Storable-Static.html#zipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec f a-\u003eVec f b-\u003eVec f c-\u003eVec f d-\u003eVec f e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith5",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Storable-Static.html#zipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec g a-\u003eVec g b-\u003eVec g c-\u003eVec g d-\u003eVec g e-\u003eVec g f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith6",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Storable-Static.html#zipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable Static",
          "module": "Data.Vector.Storable.Static",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec h a-\u003eVec h b-\u003eVec h c-\u003eVec h d-\u003eVec h e-\u003eVec h f-\u003eVec h g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Storable-Static.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Fin",
          "name": "Fin",
          "package": "vector-static",
          "source": "src/Data-Vector-Unboxed-Fin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Fin",
          "module": "Data.Vector.Unboxed.Fin",
          "name": "Fin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Fin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Unboxed-Mutable-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Mutable Static",
          "module": "Data.Vector.Unboxed.Mutable.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Mutable-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "Static",
          "package": "vector-static",
          "source": "src/Data-Vector-Unboxed-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "Static",
          "package": "vector-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "Vec",
          "package": "vector-static",
          "source": "src/Data-Vector-Unboxed-Static.html#Vec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "(!)",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "(!) !",
          "normalized": "Vec a b-\u003eFin a-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "(++)",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n a -\u003e Vec (m :+: n) a",
          "source": "src/Data-Vector-Unboxed-Static.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "(++) ++",
          "normalized": "Vec a b-\u003eVec c b-\u003eVec(a c)b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n a-\u003eVec(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "Vec",
          "package": "vector-static",
          "signature": "Vec",
          "source": "src/Data-Vector-Unboxed-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "Vec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "all",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "allFin",
          "package": "vector-static",
          "signature": "Vec n (Fin n)",
          "source": "src/Data-Vector-Unboxed-Static.html#allFin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "allFin",
          "package": "vector-static",
          "partial": "Fin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:allFin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "and",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "and",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "any",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "backpermute",
          "package": "vector-static",
          "signature": "Vec m a -\u003e Vec n (Fin m) -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#backpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "backpermute",
          "normalized": "Vec a b-\u003eVec c(Fin a)-\u003eVec c b",
          "package": "vector-static",
          "signature": "Vec m a-\u003eVec n(Fin m)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "concatMap",
          "package": "vector-static",
          "signature": "(a -\u003e Vec n b) -\u003e Vec m a -\u003e Vec (m :*: n) b",
          "source": "src/Data-Vector-Unboxed-Static.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "concatMap",
          "normalized": "(a-\u003eVec b c)-\u003eVec d a-\u003eVec(d*b)c",
          "package": "vector-static",
          "partial": "Map",
          "signature": "(a-\u003eVec n b)-\u003eVec m a-\u003eVec(m*n)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "cons",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Unboxed-Static.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "cons",
          "normalized": "a-\u003eVec b a-\u003eVec(S b)a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "copy",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "copy",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "elem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "elem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "elemIndex",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Unboxed-Static.html#elemIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "elemIndex",
          "normalized": "a-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "a-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "empty",
          "package": "vector-static",
          "signature": "Vec Z a",
          "source": "src/Data-Vector-Unboxed-Static.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "empty",
          "package": "vector-static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "enumFromN",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#enumFromN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "enumFromN",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "partial": "From",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:enumFromN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "enumFromStepN",
          "package": "vector-static",
          "signature": "a -\u003e a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#enumFromStepN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "enumFromStepN",
          "normalized": "a-\u003ea-\u003eVec b a",
          "package": "vector-static",
          "partial": "From Step",
          "signature": "a-\u003ea-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:enumFromStepN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "find",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe a",
          "source": "src/Data-Vector-Unboxed-Static.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe a",
          "package": "vector-static",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "findIndex",
          "package": "vector-static",
          "signature": "(a -\u003e Bool) -\u003e Vec n a -\u003e Maybe (Fin n)",
          "source": "src/Data-Vector-Unboxed-Static.html#findIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVec b a-\u003eMaybe(Fin b)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVec n a-\u003eMaybe(Fin n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec c b-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Unboxed-Static.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr'",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Unboxed-Static.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec c a-\u003eb",
          "package": "vector-static",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr1",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr1'",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "foldr1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003ea-\u003ea)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "fromList",
          "package": "vector-static",
          "signature": "[a] -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Unboxed-Static.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "fromList",
          "normalized": "[a]-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "partial": "List",
          "signature": "[a]-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "generate",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a) -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "generate",
          "normalized": "(Fin a-\u003eb)-\u003eVec a b",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea)-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "head",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "head",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "headM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Unboxed-Static.html#headM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "headM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:headM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldl",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#ifoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldl",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:ifoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldl'",
          "package": "vector-static",
          "signature": "(a -\u003e Fin n -\u003e b -\u003e a) -\u003e a -\u003e Vec n b -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#ifoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldl'",
          "normalized": "(a-\u003eFin b-\u003ec-\u003ea)-\u003ea-\u003eVec b c-\u003ea",
          "package": "vector-static",
          "signature": "(a-\u003eFin n-\u003eb-\u003ea)-\u003ea-\u003eVec n b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:ifoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldr",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Unboxed-Static.html#ifoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldr",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:ifoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldr'",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Vec n a -\u003e b",
          "source": "src/Data-Vector-Unboxed-Static.html#ifoldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "ifoldr'",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eVec a b-\u003ec",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eVec n a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:ifoldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "imap",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Unboxed-Static.html#imap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "imap",
          "normalized": "(Fin a-\u003eb-\u003ec)-\u003eVec a b-\u003eVec a c",
          "package": "vector-static",
          "signature": "(Fin n-\u003ea-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "indexM",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Fin n -\u003e m a",
          "source": "src/Data-Vector-Unboxed-Static.html#indexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "indexM",
          "normalized": "Vec a b-\u003eFin a-\u003ec b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eFin n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:indexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "init",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "init",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Unboxed-Static.html#izipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed)-\u003eVec a b-\u003eVec a c-\u003eVec a d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:izipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith3",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Unboxed-Static.html#izipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith3",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:izipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith4",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Unboxed-Static.html#izipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith4",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:izipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith5",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Unboxed-Static.html#izipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith5",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:izipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith6",
          "package": "vector-static",
          "signature": "(Fin n -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Unboxed-Static.html#izipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "izipWith6",
          "normalized": "(Fin a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eVec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g-\u003eVec a h",
          "package": "vector-static",
          "partial": "With",
          "signature": "(Fin n-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:izipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "last",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "last",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "lastM",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e m a",
          "source": "src/Data-Vector-Unboxed-Static.html#lastM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "lastM",
          "normalized": "Vec(S a)b-\u003ec b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:lastM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "length",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Nat n",
          "source": "src/Data-Vector-Unboxed-Static.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "length",
          "normalized": "Vec a b-\u003eNat a",
          "package": "vector-static",
          "signature": "Vec n a-\u003eNat n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "map",
          "package": "vector-static",
          "signature": "(a -\u003e b) -\u003e Vec n a -\u003e Vec n b",
          "source": "src/Data-Vector-Unboxed-Static.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVec c a-\u003eVec c b",
          "package": "vector-static",
          "signature": "(a-\u003eb)-\u003eVec n a-\u003eVec n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "maxIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Unboxed-Static.html#maxIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "maxIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:maxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "maxIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Unboxed-Static.html#maxIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "maxIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:maxIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "maximum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "maximum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "maximumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#maximumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "minIndex",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Unboxed-Static.html#minIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "minIndex",
          "normalized": "Vec(S a)b-\u003eFin(S a)",
          "package": "vector-static",
          "partial": "Index",
          "signature": "Vec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:minIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "minIndexBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e Fin (S n)",
          "source": "src/Data-Vector-Unboxed-Static.html#minIndexBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "minIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003eFin(S b)",
          "package": "vector-static",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:minIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "minimum",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "minimum",
          "normalized": "Vec(S a)b-\u003eb",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "minimumBy",
          "package": "vector-static",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vec (S n) a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#minimumBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVec(S b)a-\u003ea",
          "package": "vector-static",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVec(S n)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "new",
          "package": "vector-static",
          "signature": "New a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Unboxed-Static.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "new",
          "normalized": "New a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "New a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "notElem",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "notElem",
          "normalized": "a-\u003eVec b a-\u003eBool",
          "package": "vector-static",
          "partial": "Elem",
          "signature": "a-\u003eVec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "null",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "null",
          "normalized": "Vec a b-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "or",
          "package": "vector-static",
          "signature": "Vec n Bool -\u003e Bool",
          "source": "src/Data-Vector-Unboxed-Static.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "or",
          "normalized": "Vec a Bool-\u003eBool",
          "package": "vector-static",
          "signature": "Vec n Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "product",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "product",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "replicate",
          "package": "vector-static",
          "signature": "a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "replicate",
          "normalized": "a-\u003eVec b a",
          "package": "vector-static",
          "signature": "a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "reverse",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "reverse",
          "normalized": "Vec a b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "singleton",
          "package": "vector-static",
          "signature": "a -\u003e Vec (S Z) a",
          "source": "src/Data-Vector-Unboxed-Static.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "singleton",
          "normalized": "a-\u003eVec(S Z)a",
          "package": "vector-static",
          "signature": "a-\u003eVec(S Z)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "slice",
          "package": "vector-static",
          "signature": "Fin n -\u003e Vec (n :+: k) a -\u003e Vec k a",
          "source": "src/Data-Vector-Unboxed-Static.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "slice",
          "normalized": "Fin a-\u003eVec(a b)c-\u003eVec b c",
          "package": "vector-static",
          "signature": "Fin n-\u003eVec(n k)a-\u003eVec k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "snoc",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a -\u003e Vec (S n) a",
          "source": "src/Data-Vector-Unboxed-Static.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "snoc",
          "normalized": "Vec a b-\u003eb-\u003eVec(S a)b",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "stream",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Unboxed-Static.html#stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "stream",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "streamR",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Stream a",
          "source": "src/Data-Vector-Unboxed-Static.html#streamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "streamR",
          "normalized": "Vec a b-\u003eStream b",
          "package": "vector-static",
          "signature": "Vec n a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:streamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "sum",
          "package": "vector-static",
          "signature": "Vec n a -\u003e a",
          "source": "src/Data-Vector-Unboxed-Static.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "sum",
          "normalized": "Vec a b-\u003eb",
          "package": "vector-static",
          "signature": "Vec n a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "tail",
          "package": "vector-static",
          "signature": "Vec (S n) a -\u003e Vec n a",
          "source": "src/Data-Vector-Unboxed-Static.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "tail",
          "normalized": "Vec(S a)b-\u003eVec a b",
          "package": "vector-static",
          "signature": "Vec(S n)a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "toList",
          "package": "vector-static",
          "signature": "Vec n a -\u003e [a]",
          "source": "src/Data-Vector-Unboxed-Static.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "toList",
          "normalized": "Vec a b-\u003e[b]",
          "package": "vector-static",
          "partial": "List",
          "signature": "Vec n a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unVec",
          "package": "vector-static",
          "signature": "Vec n Vector a",
          "source": "src/Data-Vector-Unboxed-Static.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unVec",
          "package": "vector-static",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unfoldr",
          "package": "vector-static",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Unboxed-Static.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e(c d Vec e b-\u003ef)-\u003ef",
          "package": "vector-static",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unstream",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Unboxed-Static.html#unstream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unstream",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unstreamR",
          "package": "vector-static",
          "signature": "Stream a -\u003e (forall n.  Vec n a -\u003e r) -\u003e r",
          "source": "src/Data-Vector-Unboxed-Static.html#unstreamR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unstreamR",
          "normalized": "Stream a-\u003e(b c Vec d a-\u003ee)-\u003ee",
          "package": "vector-static",
          "signature": "Stream a-\u003e(forall n. Vec n a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unstreamR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip",
          "package": "vector-static",
          "signature": "Vec n (a, b) -\u003e (Vec n a, Vec n b)",
          "source": "src/Data-Vector-Unboxed-Static.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip",
          "normalized": "Vec a(b,c)-\u003e(Vec a b,Vec a c)",
          "package": "vector-static",
          "signature": "Vec n(a,b)-\u003e(Vec n a,Vec n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip3",
          "package": "vector-static",
          "signature": "Vec n (a, b, c) -\u003e (Vec n a, Vec n b, Vec n c)",
          "source": "src/Data-Vector-Unboxed-Static.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip3",
          "normalized": "Vec a(b,c,d)-\u003e(Vec a b,Vec a c,Vec a d)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c)-\u003e(Vec n a,Vec n b,Vec n c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip4",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d)",
          "source": "src/Data-Vector-Unboxed-Static.html#unzip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip4",
          "normalized": "Vec a(b,c,d,e)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip5",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d, e) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d, Vec n e)",
          "source": "src/Data-Vector-Unboxed-Static.html#unzip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip5",
          "normalized": "Vec a(b,c,d,e,f)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e,Vec a f)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d,e)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d,Vec n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip6",
          "package": "vector-static",
          "signature": "Vec n (a, b, c, d, e, f) -\u003e (Vec n a, Vec n b, Vec n c, Vec n d, Vec n e, Vec n f)",
          "source": "src/Data-Vector-Unboxed-Static.html#unzip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "unzip6",
          "normalized": "Vec a(b,c,d,e,f,g)-\u003e(Vec a b,Vec a c,Vec a d,Vec a e,Vec a f,Vec a g)",
          "package": "vector-static",
          "signature": "Vec n(a,b,c,d,e,f)-\u003e(Vec n a,Vec n b,Vec n c,Vec n d,Vec n e,Vec n f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n (a, b)",
          "source": "src/Data-Vector-Unboxed-Static.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a(b,c)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip3",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n (a, b, c)",
          "source": "src/Data-Vector-Unboxed-Static.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip3",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a(b,c,d)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip4",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n (a, b, c, d)",
          "source": "src/Data-Vector-Unboxed-Static.html#zip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip4",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a(b,c,d,e)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip5",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n (a, b, c, d, e)",
          "source": "src/Data-Vector-Unboxed-Static.html#zip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip5",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a(b,c,d,e,f)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip6",
          "package": "vector-static",
          "signature": "Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n (a, b, c, d, e, f)",
          "source": "src/Data-Vector-Unboxed-Static.html#zip6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zip6",
          "normalized": "Vec a b-\u003eVec a c-\u003eVec a d-\u003eVec a e-\u003eVec a f-\u003eVec a g-\u003eVec a(b,c,d,e,f,g)",
          "package": "vector-static",
          "signature": "Vec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c",
          "source": "src/Data-Vector-Unboxed-Static.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVec d a-\u003eVec d b-\u003eVec d c",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVec n a-\u003eVec n b-\u003eVec n c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith3",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d",
          "source": "src/Data-Vector-Unboxed-Static.html#zipWith3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec e a-\u003eVec e b-\u003eVec e c-\u003eVec e d",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith4",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e",
          "source": "src/Data-Vector-Unboxed-Static.html#zipWith4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec f a-\u003eVec f b-\u003eVec f c-\u003eVec f d-\u003eVec f e",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith5",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f",
          "source": "src/Data-Vector-Unboxed-Static.html#zipWith5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec g a-\u003eVec g b-\u003eVec g c-\u003eVec g d-\u003eVec g e-\u003eVec g f",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith6",
          "package": "vector-static",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Vec n a -\u003e Vec n b -\u003e Vec n c -\u003e Vec n d -\u003e Vec n e -\u003e Vec n f -\u003e Vec n g",
          "source": "src/Data-Vector-Unboxed-Static.html#zipWith6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Static",
          "module": "Data.Vector.Unboxed.Static",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec h a-\u003eVec h b-\u003eVec h c-\u003eVec h d-\u003eVec h e-\u003eVec h f-\u003eVec h g",
          "package": "vector-static",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eVec n a-\u003eVec n b-\u003eVec n c-\u003eVec n d-\u003eVec n e-\u003eVec n f-\u003eVec n g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-static/docs/Data-Vector-Unboxed-Static.html#v:zipWith6"
      }
    }
  ]
]