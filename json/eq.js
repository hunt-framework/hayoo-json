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
        "word": "eq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeibnizian equality. Injectivity in the presence of type families\n is provided by a generalization of a trick by Oleg Kiselyv posted here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2010-May/077177.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Eq.Type",
          "name": "Type",
          "package": "eq",
          "source": "src/Data-Eq-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Leibnizian equality Injectivity in the presence of type families is provided by generalization of trick by Oleg Kiselyv posted here http www.haskell.org pipermail haskell-cafe May html",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "Type",
          "package": "eq",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeibnizian equality states that two things are equal if you can\n substite one for the other in all contexts\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": ":=",
          "package": "eq",
          "source": "src/Data-Eq-Type.html#%3A%3D",
          "type": "data"
        },
        "index": {
          "description": "Leibnizian equality states that two things are equal if you can substite one for the other in all contexts",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": ":=",
          "package": "eq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#t::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Eq.Type",
          "name": "Refl",
          "package": "eq",
          "signature": "Refl",
          "source": "src/Data-Eq-Type.html#%3A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "Refl",
          "package": "eq",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf two things are equal you can convert one to the other\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "coerce",
          "package": "eq",
          "signature": "(a := b) -\u003e a -\u003e b",
          "source": "src/Data-Eq-Type.html#coerce",
          "type": "function"
        },
        "index": {
          "description": "If two things are equal you can convert one to the other",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "coerce",
          "normalized": "(a b)-\u003ea-\u003eb",
          "package": "eq",
          "signature": "(a b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou can lift equality into any type constructor\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "lift",
          "package": "eq",
          "signature": "(a := b) -\u003e f a := f b",
          "source": "src/Data-Eq-Type.html#lift",
          "type": "function"
        },
        "index": {
          "description": "You can lift equality into any type constructor",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "lift",
          "normalized": "(a b)-\u003ec a c b",
          "package": "eq",
          "signature": "(a b)-\u003ef a f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... in any position\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "lift2",
          "package": "eq",
          "signature": "(a := b) -\u003e f a c := f b c",
          "source": "src/Data-Eq-Type.html#lift2",
          "type": "function"
        },
        "index": {
          "description": "in any position",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "lift2",
          "normalized": "(a b)-\u003ec a d c b d",
          "package": "eq",
          "signature": "(a b)-\u003ef a c f b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Eq.Type",
          "name": "lift2'",
          "package": "eq",
          "signature": "(a := b) -\u003e (c := d) -\u003e f a c := f b d",
          "source": "src/Data-Eq-Type.html#lift2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "lift2'",
          "normalized": "(a b)-\u003e(c d)-\u003ee a c e b d",
          "package": "eq",
          "signature": "(a b)-\u003e(c d)-\u003ef a c f b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:lift2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Eq.Type",
          "name": "lift3",
          "package": "eq",
          "signature": "(a := b) -\u003e f a c d := f b c d",
          "source": "src/Data-Eq-Type.html#lift3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "lift3",
          "normalized": "(a b)-\u003ec a d e c b d e",
          "package": "eq",
          "signature": "(a b)-\u003ef a c d f b c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:lift3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Eq.Type",
          "name": "lift3'",
          "package": "eq",
          "signature": "(a := b) -\u003e (c := d) -\u003e (e := f) -\u003e g a c e := g b d f",
          "source": "src/Data-Eq-Type.html#lift3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "lift3'",
          "normalized": "(a b)-\u003e(c d)-\u003e(e f)-\u003eg a c e g b d f",
          "package": "eq",
          "signature": "(a b)-\u003e(c d)-\u003e(e f)-\u003eg a c e g b d f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:lift3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is reflexive\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "refl",
          "package": "eq",
          "signature": "a := a",
          "source": "src/Data-Eq-Type.html#refl",
          "type": "function"
        },
        "index": {
          "description": "Equality is reflexive",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "refl",
          "package": "eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Eq.Type",
          "name": "subst",
          "package": "eq",
          "signature": "forall c.  c a -\u003e c b",
          "source": "src/Data-Eq-Type.html#%3A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "subst",
          "normalized": "a b c d-\u003ec e",
          "package": "eq",
          "signature": "forall c. c a-\u003ec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is symmetric\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "symm",
          "package": "eq",
          "signature": "(a := b) -\u003e b := a",
          "source": "src/Data-Eq-Type.html#symm",
          "type": "function"
        },
        "index": {
          "description": "Equality is symmetric",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "symm",
          "normalized": "(a b)-\u003eb a",
          "package": "eq",
          "signature": "(a b)-\u003eb a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:symm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is transitive\n\u003c/p\u003e",
          "module": "Data.Eq.Type",
          "name": "trans",
          "package": "eq",
          "signature": "(a := b) -\u003e (b := c) -\u003e a := c",
          "source": "src/Data-Eq-Type.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Equality is transitive",
          "hierarchy": "Data Eq Type",
          "module": "Data.Eq.Type",
          "name": "trans",
          "normalized": "(a b)-\u003e(b c)-\u003ea c",
          "package": "eq",
          "signature": "(a b)-\u003e(b c)-\u003ea c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eq/docs/Data-Eq-Type.html#v:trans"
      }
    }
  ]
]