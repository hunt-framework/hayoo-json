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
        "word": "fizz-buzz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FizzBuzz",
          "name": "FizzBuzz",
          "package": "fizz-buzz",
          "source": "src/Math-FizzBuzz.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math FizzBuzz",
          "module": "Math.FizzBuzz",
          "name": "FizzBuzz",
          "package": "fizz-buzz",
          "partial": "Fizz Buzz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fizz-buzz/docs/Math-FizzBuzz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FizzBuzz",
          "name": "toFizz",
          "package": "fizz-buzz",
          "signature": "Int -\u003e String",
          "source": "src/Math-FizzBuzz.html#toFizz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FizzBuzz",
          "module": "Math.FizzBuzz",
          "name": "toFizz",
          "normalized": "Int-\u003eString",
          "package": "fizz-buzz",
          "partial": "Fizz",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fizz-buzz/docs/Math-FizzBuzz.html#v:toFizz"
      }
    }
  ]
]