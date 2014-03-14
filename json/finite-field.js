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
        "word": "finite-field"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FiniteField.Base",
          "name": "Base",
          "package": "finite-field",
          "source": "src/Data-FiniteField-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "Base",
          "package": "finite-field",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for finite fields\n\u003c/p\u003e",
          "module": "Data.FiniteField.Base",
          "name": "FiniteField",
          "package": "finite-field",
          "source": "src/Data-FiniteField-Base.html#FiniteField",
          "type": "class"
        },
        "index": {
          "description": "Type class for finite fields",
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "FiniteField",
          "package": "finite-field",
          "partial": "Finite Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#t:FiniteField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll values of a field\n\u003c/p\u003e",
          "module": "Data.FiniteField.Base",
          "name": "allValues",
          "package": "finite-field",
          "signature": "[k]",
          "source": "src/Data-FiniteField-Base.html#allValues",
          "type": "method"
        },
        "index": {
          "description": "All values of field",
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "allValues",
          "normalized": "[a]",
          "package": "finite-field",
          "partial": "Values",
          "signature": "[k]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#v:allValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe characteristic of a field, \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FiniteField.Base",
          "name": "char",
          "package": "finite-field",
          "signature": "k -\u003e Integer",
          "source": "src/Data-FiniteField-Base.html#char",
          "type": "method"
        },
        "index": {
          "description": "The characteristic of field",
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "char",
          "normalized": "a-\u003eInteger",
          "package": "finite-field",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe order is number of elements of a finite field \u003ccode\u003ek\u003c/code\u003e.\n It of the form \u003ccode\u003ep^n\u003c/code\u003e, where \u003ccode\u003ep\u003c/code\u003e is  prime number called the characteristic\n of the field, and \u003ccode\u003en\u003c/code\u003e is a positive integer.\n\u003c/p\u003e",
          "module": "Data.FiniteField.Base",
          "name": "order",
          "package": "finite-field",
          "signature": "k -\u003e Integer",
          "source": "src/Data-FiniteField-Base.html#order",
          "type": "method"
        },
        "index": {
          "description": "The order is number of elements of finite field It of the form where is prime number called the characteristic of the field and is positive integer",
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "order",
          "normalized": "a-\u003eInteger",
          "package": "finite-field",
          "signature": "k-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of Frobenius endomorphism \u003ccode\u003ex\u003c/code\u003e &#8614; \u003ccode\u003ex^p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FiniteField.Base",
          "name": "pthRoot",
          "package": "finite-field",
          "signature": "k -\u003e k",
          "source": "src/Data-FiniteField-Base.html#pthRoot",
          "type": "method"
        },
        "index": {
          "description": "The inverse of Frobenius endomorphism",
          "hierarchy": "Data FiniteField Base",
          "module": "Data.FiniteField.Base",
          "name": "pthRoot",
          "normalized": "a-\u003ea",
          "package": "finite-field",
          "partial": "Root",
          "signature": "k-\u003ek",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-Base.html#v:pthRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinite field of prime order p, Fp = Z/pZ.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Finite_field\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.FiniteField.PrimeField",
          "name": "PrimeField",
          "package": "finite-field",
          "source": "src/Data-FiniteField-PrimeField.html",
          "type": "module"
        },
        "index": {
          "description": "Finite field of prime order Fp pZ References http en.wikipedia.org wiki Finite field",
          "hierarchy": "Data FiniteField PrimeField",
          "module": "Data.FiniteField.PrimeField",
          "name": "PrimeField",
          "package": "finite-field",
          "partial": "Prime Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-PrimeField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite field of prime order p, Fp = Z/pZ.\n\u003c/p\u003e\u003cp\u003eNB: Primality of \u003ccode\u003ep\u003c/code\u003e is assumed, but not checked.\n\u003c/p\u003e",
          "module": "Data.FiniteField.PrimeField",
          "name": "PrimeField",
          "package": "finite-field",
          "source": "src/Data-FiniteField-PrimeField.html#PrimeField",
          "type": "data"
        },
        "index": {
          "description": "Finite field of prime order Fp pZ NB Primality of is assumed but not checked",
          "hierarchy": "Data FiniteField PrimeField",
          "module": "Data.FiniteField.PrimeField",
          "name": "PrimeField",
          "package": "finite-field",
          "partial": "Prime Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-PrimeField.html#t:PrimeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PrimeField type\n\u003c/p\u003e",
          "module": "Data.FiniteField.PrimeField",
          "name": "primeField",
          "package": "finite-field",
          "signature": "Integer -\u003e TypeQ",
          "source": "src/Data-FiniteField-PrimeField.html#primeField",
          "type": "function"
        },
        "index": {
          "description": "Create PrimeField type",
          "hierarchy": "Data FiniteField PrimeField",
          "module": "Data.FiniteField.PrimeField",
          "name": "primeField",
          "normalized": "Integer-\u003eTypeQ",
          "package": "finite-field",
          "partial": "Field",
          "signature": "Integer-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-PrimeField.html#v:primeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.FiniteField.PrimeField",
          "name": "toInteger",
          "package": "finite-field",
          "signature": "PrimeField p -\u003e Integer",
          "source": "src/Data-FiniteField-PrimeField.html#toInteger",
          "type": "function"
        },
        "index": {
          "description": "conversion to Integer",
          "hierarchy": "Data FiniteField PrimeField",
          "module": "Data.FiniteField.PrimeField",
          "name": "toInteger",
          "normalized": "PrimeField a-\u003eInteger",
          "package": "finite-field",
          "partial": "Integer",
          "signature": "PrimeField p-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField-PrimeField.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FiniteField",
          "name": "FiniteField",
          "package": "finite-field",
          "source": "src/Data-FiniteField.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data FiniteField",
          "module": "Data.FiniteField",
          "name": "FiniteField",
          "package": "finite-field",
          "partial": "Finite Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/finite-field/docs/Data-FiniteField.html#"
      }
    }
  ]
]