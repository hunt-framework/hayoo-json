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
        "word": "properties"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "source": "src/Test-Properties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperties is a convenient way to express list of properties with\n the same arity.\n\u003c/p\u003e",
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "source": "src/Test-Properties.html#Properties",
          "type": "data"
        },
        "index": {
          "description": "Properties is convenient way to express list of properties with the same arity",
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "partial": "Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#t:Properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA labeled property includes a string label and an expression\n\u003c/p\u003e",
          "module": "Test.Properties",
          "name": "Property",
          "package": "properties",
          "source": "src/Test-Properties.html#Property",
          "type": "data"
        },
        "index": {
          "description": "labeled property includes string label and an expression",
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "Property",
          "package": "properties",
          "partial": "Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "signature": "Properties",
          "source": "src/Test-Properties.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "Properties",
          "package": "properties",
          "partial": "Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:Properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "Property",
          "package": "properties",
          "signature": "Property String a",
          "source": "src/Test-Properties.html#Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "Property",
          "package": "properties",
          "partial": "Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "binary",
          "package": "properties",
          "signature": "[Property ((a, b) -\u003e Bool)]",
          "source": "src/Test-Properties.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "binary",
          "normalized": "[Property((a,b)-\u003eBool)]",
          "package": "properties",
          "signature": "[Property((a,b)-\u003eBool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty properties:   \u003ccode\u003eproperties= Properties [] [] []\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Properties",
          "name": "properties",
          "package": "properties",
          "signature": "forall a b c.  Properties a b c",
          "source": "src/Test-Properties.html#properties",
          "type": "function"
        },
        "index": {
          "description": "empty properties properties Properties",
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "properties",
          "package": "properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "ternary",
          "package": "properties",
          "signature": "[Property ((a, b, c) -\u003e Bool)]",
          "source": "src/Test-Properties.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "ternary",
          "normalized": "[Property((a,b,c)-\u003eBool)]",
          "package": "properties",
          "signature": "[Property((a,b,c)-\u003eBool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:ternary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Properties",
          "name": "unary",
          "package": "properties",
          "signature": "[Property (a -\u003e Bool)]",
          "source": "src/Test-Properties.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "unary",
          "normalized": "[Property(a-\u003eBool)]",
          "package": "properties",
          "signature": "[Property(a-\u003eBool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a list of properties.\n when a property is violated, a trace error is printed\n at the end i return the first value, just like (flip trace)\n must be used as opeator:\n\u003c/p\u003e\u003cpre\u003e\u003ca\u003eexpression\u003c/a\u003e  \u003ccode\u003e\u003ca\u003everify\u003c/a\u003e\u003c/code\u003e \u003ca\u003eproperties\u003c/a\u003e \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e \u003ca\u003evalue tuple\u003c/a\u003e\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003estringProperty= \u003ccode\u003e\u003ca\u003eProperty\u003c/a\u003e\u003c/code\u003e \"length\" (\\(x, y)-\u003e length (x++y)== length x + length y)\n\nmain= do\n        let s=  \"hello \"\n        let s2= \"world\"\n        print $ s++ s2        `\u003ccode\u003e\u003ca\u003everify\u003c/a\u003e\u003c/code\u003e` stringProperty `\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e`(s,s2)\n        print \"that's all!\"\u003c/pre\u003e\u003cp\u003eIt is possible to check quickCheck style properties. The same example with a quickCheck style property:\n\u003c/p\u003e\u003cpre\u003equickCheckProperty x y=  length (x++y)== length x + length y\n\nmain= do\n        let s=  \"hello \"\n        let s2= \"world\"\n        print $ s++ s2        `\u003ccode\u003e\u003ca\u003everify\u003c/a\u003e\u003c/code\u003e` [Property \"stringSumLength\" $ uncurry quickCheckProperty] `\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e`(s,s2)\n        print \"that's all!\"\u003c/pre\u003e",
          "module": "Test.Properties",
          "name": "verify",
          "package": "properties",
          "signature": "a -\u003e [Property (b -\u003e Bool)] -\u003e b -\u003e a",
          "source": "src/Test-Properties.html#verify",
          "type": "function"
        },
        "index": {
          "description": "Check list of properties when property is violated trace error is printed at the end return the first value just like flip trace must be used as opeator expression verify properties with value tuple Example stringProperty Property length length length length main do let hello let s2 world print s2 verify stringProperty with s2 print that all It is possible to check quickCheck style properties The same example with quickCheck style property quickCheckProperty length length length main do let hello let s2 world print s2 verify Property stringSumLength uncurry quickCheckProperty with s2 print that all",
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "verify",
          "normalized": "a-\u003e[Property(b-\u003eBool)]-\u003eb-\u003ea",
          "package": "properties",
          "signature": "a-\u003e[Property(b-\u003eBool)]-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto improve readability: \u003ccode\u003ewith= ($)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Properties",
          "name": "with",
          "package": "properties",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Test-Properties.html#with",
          "type": "function"
        },
        "index": {
          "description": "to improve readability with",
          "hierarchy": "Test Properties",
          "module": "Test.Properties",
          "name": "with",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "properties",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/properties/docs/Test-Properties.html#v:with"
      }
    }
  ]
]