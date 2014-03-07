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
        "word": "HSFFIG"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSFFIG.FieldAccess",
          "name": "FieldAccess",
          "package": "HSFFIG",
          "source": "src/HSFFIG-FieldAccess.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HSFFIG FieldAccess",
          "module": "HSFFIG.FieldAccess",
          "name": "FieldAccess",
          "package": "HSFFIG",
          "partial": "Field Access",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSFFIG/docs/HSFFIG-FieldAccess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multi-parameter class with functional dependencies is declared to enable access \n to structures/unions members. The functional dependencies \u003ccode\u003ea b c | a c -\u003e b\u003c/code\u003e specify \n that type of \u003cem\u003eb\u003c/em\u003e (type of the member) depends entirely on the types \u003cem\u003ea\u003c/em\u003e (phantom type\n identifying structure/union) and \u003cem\u003ec\u003c/em\u003e (phantom type identifying the member, a.k.a. member \n selector), and there may be only one type of \u003cem\u003eb\u003c/em\u003e for every possible combination of \u003cem\u003ea\u003c/em\u003e and \u003cem\u003ec\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eIndeed:\n\u003c/p\u003e\u003cpre\u003e\n struct a {\n   int x;\n };\n struct b {\n   float x;\n };\n\u003c/pre\u003e\u003cp\u003eboth structures contain a member with the same name, but different types.\n\u003c/p\u003e\u003cp\u003eHSFFIG will generate the following instances for the structures above:\n\u003c/p\u003e\u003cpre\u003e\n instance HSFFIG.FieldAccess.FieldAccess S_a ((CInt)) V_x where\n   z --\u003e V_x = (#peek __quote__(struct a), x) z\n   (z, V_x) \u003c-- v = (#poke __quote__(struct a), x) z v\n ...\n instance HSFFIG.FieldAccess.FieldAccess S_b ((CFloat)) V_x where\n  z --\u003e V_x = (#peek __quote__(struct b), x) z\n  (z, V_x) \u003c-- v = (#poke __quote__(struct b), x) z v\n\u003c/pre\u003e\u003cp\u003eThat is, when the member identified by selector \u003ccode\u003eV_x\u003c/code\u003e is fetched from \n \u003ccode\u003estruct a\u003c/code\u003e (\u003ccode\u003eS_a\u003c/code\u003e), an integer value is returned. But when the member with\n the same name is retrieved from \u003ccode\u003estruct b\u003c/code\u003e, a float value is returned.\n\u003c/p\u003e",
          "module": "HSFFIG.FieldAccess",
          "name": "FieldAccess",
          "package": "HSFFIG",
          "source": "src/HSFFIG-FieldAccess.html#FieldAccess",
          "type": "class"
        },
        "index": {
          "description": "multi-parameter class with functional dependencies is declared to enable access to structures unions members The functional dependencies specify that type of type of the member depends entirely on the types phantom type identifying structure union and phantom type identifying the member a.k.a member selector and there may be only one type of for every possible combination of and Indeed struct int struct float both structures contain member with the same name but different types HSFFIG will generate the following instances for the structures above instance HSFFIG.FieldAccess.FieldAccess CInt where peek quote struct poke quote struct instance HSFFIG.FieldAccess.FieldAccess CFloat where peek quote struct poke quote struct That is when the member identified by selector is fetched from struct an integer value is returned But when the member with the same name is retrieved from struct float value is returned",
          "hierarchy": "HSFFIG FieldAccess",
          "module": "HSFFIG.FieldAccess",
          "name": "FieldAccess",
          "package": "HSFFIG",
          "partial": "Field Access",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HSFFIG/docs/HSFFIG-FieldAccess.html#t:FieldAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSFFIG.FieldAccess",
          "name": "(--\u003e)",
          "package": "HSFFIG",
          "signature": "(--\u003e)",
          "source": "src/HSFFIG-FieldAccess.html#--%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSFFIG FieldAccess",
          "module": "HSFFIG.FieldAccess",
          "name": "(--\u003e) --\u003e",
          "normalized": "(-\u003e)",
          "package": "HSFFIG",
          "signature": "(-\u003e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HSFFIG/docs/HSFFIG-FieldAccess.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSFFIG.FieldAccess",
          "name": "(\u003c--)",
          "package": "HSFFIG",
          "signature": "(\u003c--)",
          "source": "src/HSFFIG-FieldAccess.html#%3C--",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSFFIG FieldAccess",
          "module": "HSFFIG.FieldAccess",
          "name": "(\u003c--) \u003c--",
          "normalized": "()",
          "package": "HSFFIG",
          "signature": "()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HSFFIG/docs/HSFFIG-FieldAccess.html#v:-60--45--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSFFIG.FieldAccess",
          "name": "(==\u003e)",
          "package": "HSFFIG",
          "signature": ")",
          "source": "src/HSFFIG-FieldAccess.html#%3D%3D%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "HSFFIG FieldAccess",
          "module": "HSFFIG.FieldAccess",
          "name": "(==\u003e) ==\u003e",
          "package": "HSFFIG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HSFFIG/docs/HSFFIG-FieldAccess.html#v:-61--61--62-"
      }
    }
  ]
]