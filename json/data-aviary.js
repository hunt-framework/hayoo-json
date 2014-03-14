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
        "word": "data-aviary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBird monickered combinators\n\u003c/p\u003e\u003cp\u003eThis module is intended for illustration (the type signatures!) \n rather than utility.\n\u003c/p\u003e\u003cp\u003eThe 'long reach' Turner set { S, K, I, B, C, S', B', C' }\n\u003c/p\u003e\u003cp\u003eThe Joy et al. set { S, I, B, C, J(alt), S', B', C', J(alt)' } \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aviary.Birds",
          "name": "Birds",
          "package": "data-aviary",
          "source": "src/Data-Aviary-Birds.html",
          "type": "module"
        },
        "index": {
          "description": "Bird monickered combinators This module is intended for illustration the type signatures rather than utility The long reach Turner set The Joy et al set alt alt",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "Birds",
          "package": "data-aviary",
          "partial": "Birds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator - apply / applicator - Haskell (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is also called \u003ccode\u003ei-star\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "applicator",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-Birds.html#applicator",
          "type": "function"
        },
        "index": {
          "description": "combinator apply applicator Haskell This is also called i-star",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "applicator",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB3 combinator - becard.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "becard",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-Birds.html#becard",
          "type": "function"
        },
        "index": {
          "description": "B3 combinator becard",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "becard",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003e(d-\u003ec)-\u003ed-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:becard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB1 combinator - blackbird - specs \u003ccode\u003eoo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "blackbird",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#blackbird",
          "type": "function"
        },
        "index": {
          "description": "B1 combinator blackbird specs oo",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "blackbird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:blackbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB combinator - bluebird - Haskell (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "bluebird",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Birds.html#bluebird",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird Haskell",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "bluebird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:bluebird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB' combinator - bluebird prime.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "bluebird'",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d) -\u003e a -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#bluebird%27",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird prime",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "bluebird'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed)-\u003ea-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:bluebird-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB2 combinator - bunting - specs \u003ccode\u003eooo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "bunting",
          "package": "data-aviary",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Aviary-Birds.html#bunting",
          "type": "function"
        },
        "index": {
          "description": "B2 combinator bunting specs ooo",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "bunting",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "data-aviary",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:bunting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC combinator - cardinal - Haskell \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "cardinal",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Birds.html#cardinal",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal Haskell flip",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "cardinal",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC' combinator - no name.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "cardinal'",
          "package": "data-aviary",
          "signature": "(c -\u003e a -\u003e d) -\u003e (b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#cardinal%27",
          "type": "function"
        },
        "index": {
          "description": "combinator no name",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "cardinal'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003eb-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(c-\u003ea-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:cardinal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC* combinator - cardinal once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "cardinalstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-Birds.html#cardinalstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal once removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "cardinalstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ec-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003eb-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:cardinalstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC** combinator - cardinal twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "cardinalstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d -\u003e c -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-Birds.html#cardinalstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "cardinalstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ed-\u003ec-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed-\u003ec-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:cardinalstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD1 combinator - dickcissel.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "dickcissel",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e (c -\u003e d) -\u003e c -\u003e e",
          "source": "src/Data-Aviary-Birds.html#dickcissel",
          "type": "function"
        },
        "index": {
          "description": "D1 combinator dickcissel",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "dickcissel",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003e(e-\u003ec)-\u003ee-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed-\u003ee)-\u003ea-\u003eb-\u003e(c-\u003ed)-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:dickcissel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD combinator - dove.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "dove",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d) -\u003e a -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#dove",
          "type": "function"
        },
        "index": {
          "description": "combinator dove",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "dove",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed)-\u003ea-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:dove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD2 combinator - dovekie.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "dovekie",
          "package": "data-aviary",
          "signature": "(c -\u003e d -\u003e e) -\u003e (a -\u003e c) -\u003e a -\u003e (b -\u003e d) -\u003e b -\u003e e",
          "source": "src/Data-Aviary-Birds.html#dovekie",
          "type": "function"
        },
        "index": {
          "description": "D2 combinator dovekie",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "dovekie",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003ed-\u003e(e-\u003eb)-\u003ee-\u003ec",
          "package": "data-aviary",
          "signature": "(c-\u003ed-\u003ee)-\u003e(a-\u003ec)-\u003ea-\u003e(b-\u003ed)-\u003eb-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:dovekie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE combinator - eagle.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "eagle",
          "package": "data-aviary",
          "signature": "(a -\u003e d -\u003e e) -\u003e a -\u003e (b -\u003e c -\u003e d) -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Aviary-Birds.html#eagle",
          "type": "function"
        },
        "index": {
          "description": "combinator eagle",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "eagle",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003ee-\u003eb)-\u003ed-\u003ee-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ed-\u003ee)-\u003ea-\u003e(b-\u003ec-\u003ed)-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:eagle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE ^ - bald eagle.\n For alphabetical regularity it is somewhat misnamed here as \n eaglebald.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "eaglebald",
          "package": "data-aviary",
          "signature": "(e -\u003e f -\u003e g) -\u003e (a -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e (c -\u003e d -\u003e f) -\u003e c -\u003e d -\u003e g",
          "source": "src/Data-Aviary-Birds.html#eaglebald",
          "type": "function"
        },
        "index": {
          "description": "bald eagle For alphabetical regularity it is somewhat misnamed here as eaglebald",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "eaglebald",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ea)-\u003ed-\u003ee-\u003e(f-\u003eg-\u003eb)-\u003ef-\u003eg-\u003ec",
          "package": "data-aviary",
          "signature": "(e-\u003ef-\u003eg)-\u003e(a-\u003eb-\u003ee)-\u003ea-\u003eb-\u003e(c-\u003ed-\u003ef)-\u003ec-\u003ed-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:eaglebald"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF combinator - finch.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "finch",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e (b -\u003e a -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#finch",
          "type": "function"
        },
        "index": {
          "description": "combinator finch",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "finch",
          "normalized": "a-\u003eb-\u003e(b-\u003ea-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003e(b-\u003ea-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:finch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF* combinator - finch once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "finchstar",
          "package": "data-aviary",
          "signature": "(c -\u003e b -\u003e a -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-Birds.html#finchstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch once removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "finchstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003eb-\u003ea-\u003ed",
          "package": "data-aviary",
          "signature": "(c-\u003eb-\u003ea-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:finchstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF** combinator - finch twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "finchstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e d -\u003e c -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-Birds.html#finchstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "finchstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ed-\u003ec-\u003eb-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003ed-\u003ec-\u003eb-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:finchstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eG combinator - goldfinch.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "goldfinch",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#goldfinch",
          "type": "function"
        },
        "index": {
          "description": "combinator goldfinch",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "goldfinch",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003eb)-\u003ed-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:goldfinch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eH combinator - hummingbird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "hummingbird",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e a -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Birds.html#hummingbird",
          "type": "function"
        },
        "index": {
          "description": "combinator hummingbird",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "hummingbird",
          "normalized": "(a-\u003eb-\u003ea-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ea-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:hummingbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI combinator - identity bird / idiot bird - Haskell \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "idiot",
          "package": "data-aviary",
          "signature": "a -\u003e a",
          "source": "src/Data-Aviary-Birds.html#idiot",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird idiot bird Haskell id",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "idiot",
          "normalized": "a-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:idiot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI* combinator - identity bird once removed\n Alias of \u003ccode\u003e\u003ca\u003eapplicator\u003c/a\u003e\u003c/code\u003e, Haskell's (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "idstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-Birds.html#idstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird once removed Alias of applicator Haskell",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "idstar",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:idstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI** combinator - identity bird twice removed\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "idstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Birds.html#idstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "idstarstar",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:idstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative J combinator - this is the J combintor of Joy,\n Rayward-Smith and Burton (see. Antoni Diller 'Compiling \n Functional Languages' page 104). It is not the J - jay \n combinator of the literature.   \n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "jalt",
          "package": "data-aviary",
          "signature": "(a -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Birds.html#jalt",
          "type": "function"
        },
        "index": {
          "description": "Alternative combinator this is the combintor of Joy Rayward-Smith and Burton see Antoni Diller Compiling Functional Languages page It is not the jay combinator of the literature",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "jalt",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:jalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ' combinator - from Joy, Rayward-Smith and Burton.\n See the comment to \u003ccode\u003e\u003ca\u003ejalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "jalt'",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-Birds.html#jalt%27",
          "type": "function"
        },
        "index": {
          "description": "combinator from Joy Rayward-Smith and Burton See the comment to jalt",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "jalt'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:jalt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ combinator - jay.\n\u003c/p\u003e\u003cp\u003eThis is the usual J combinator.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "jay",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e b) -\u003e a -\u003e b -\u003e a -\u003e b",
          "source": "src/Data-Aviary-Birds.html#jay",
          "type": "function"
        },
        "index": {
          "description": "combinator jay This is the usual combinator",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "jay",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:jay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eK combinator - kestrel - Haskell \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n Corresponds to the encoding of \u003ccode\u003etrue\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "kestrel",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Data-Aviary-Birds.html#kestrel",
          "type": "function"
        },
        "index": {
          "description": "combinator kestrel Haskell const Corresponds to the encoding of true in the lambda calculus",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "kestrel",
          "normalized": "a-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:kestrel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKi - kite.\n Corresponds to the encoding of \u003ccode\u003efalse\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "kite",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Aviary-Birds.html#kite",
          "type": "function"
        },
        "index": {
          "description": "Ki kite Corresponds to the encoding of false in the lambda calculus",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "kite",
          "normalized": "a-\u003eb-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:kite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO combinator - owl.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "owl",
          "package": "data-aviary",
          "signature": "((a -\u003e b) -\u003e a) -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-Birds.html#owl",
          "type": "function"
        },
        "index": {
          "description": "combinator owl",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "owl",
          "normalized": "((a-\u003eb)-\u003ea)-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "((a-\u003eb)-\u003ea)-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:owl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Big) Phi combinator - phoenix - Haskell \u003ccode\u003eliftM2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the same function as \u003ccode\u003e\u003ca\u003estarling'\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "phoenix",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-Birds.html#phoenix",
          "type": "function"
        },
        "index": {
          "description": "Big Phi combinator phoenix Haskell liftM2 This is the same function as starling",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "phoenix",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:phoenix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePsi combinator - psi bird (?) - Haskell \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "psi",
          "package": "data-aviary",
          "signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Birds.html#psi",
          "type": "function"
        },
        "index": {
          "description": "Psi combinator psi bird Haskell on",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "psi",
          "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ4 combinator - quacky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "quacky",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e b) -\u003e (b -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#quacky",
          "type": "function"
        },
        "index": {
          "description": "Q4 combinator quacky bird",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "quacky",
          "normalized": "a-\u003e(a-\u003eb)-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003eb)-\u003e(b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:quacky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ combinator - queer bird.\n\u003c/p\u003e\u003cp\u003eHaskell \u003ccode\u003e(##)\u003c/code\u003e in Peter Thiemann's Wash, reverse composition.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "queer",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Birds.html#queer",
          "type": "function"
        },
        "index": {
          "description": "combinator queer bird Haskell in Peter Thiemann Wash reverse composition",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "queer",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:queer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ3 combinator - quirky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "quirky",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e (b -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#quirky",
          "type": "function"
        },
        "index": {
          "description": "Q3 combinator quirky bird",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "quirky",
          "normalized": "(a-\u003eb)-\u003ea-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003e(b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:quirky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ1 combinator - quixotic bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "quixotic",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e a -\u003e (a -\u003e b) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#quixotic",
          "type": "function"
        },
        "index": {
          "description": "Q1 combinator quixotic bird",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "quixotic",
          "normalized": "(a-\u003eb)-\u003ec-\u003e(c-\u003ea)-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:quixotic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ2 combinator - quizzical bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "quizzical",
          "package": "data-aviary",
          "signature": "a -\u003e (b -\u003e c) -\u003e (a -\u003e b) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#quizzical",
          "type": "function"
        },
        "index": {
          "description": "Q2 combinator quizzical bird",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "quizzical",
          "normalized": "a-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:quizzical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR combinator - robin.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "robin",
          "package": "data-aviary",
          "signature": "a -\u003e (b -\u003e a -\u003e c) -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Birds.html#robin",
          "type": "function"
        },
        "index": {
          "description": "combinator robin",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "robin",
          "normalized": "a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:robin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR* combinator - robin once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "robinstar",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e a -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-Birds.html#robinstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin once removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "robinstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003ea-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ea-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:robinstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR** combinator - robin twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "robinstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-Birds.html#robinstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "robinstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ed-\u003eb-\u003ec-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed-\u003eb-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:robinstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS combinator - starling. \n\u003c/p\u003e\u003cp\u003eHaskell: Applicative's \u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e on functions.\n\u003c/p\u003e\u003cp\u003eSubstitution.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "starling",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Birds.html#starling",
          "type": "function"
        },
        "index": {
          "description": "combinator starling Haskell Applicative on functions Substitution",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "starling",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:starling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS' combinator - starling prime - Turner's big phi. \n Haskell: Applicative's \u003ccode\u003eliftA2\u003c/code\u003e on functions (and similarly \n Monad's \u003ccode\u003eliftM2\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is the same function as \u003ccode\u003e\u003ca\u003ephoenix\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "starling'",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-Birds.html#starling%27",
          "type": "function"
        },
        "index": {
          "description": "combinator starling prime Turner big phi Haskell Applicative liftA2 on functions and similarly Monad liftM2 This is the same function as phoenix",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "starling'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:starling-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT combinator - thrush.\n Haskell \u003ccode\u003e(#)\u003c/code\u003e in Peter Thiemann's Wash, reverse application.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "thrush",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-Birds.html#thrush",
          "type": "function"
        },
        "index": {
          "description": "combinator thrush Haskell in Peter Thiemann Wash reverse application",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "thrush",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:thrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV combinator - vireo (pairing).\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "vireo",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e (a -\u003e b -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-Birds.html#vireo",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo pairing",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "vireo",
          "normalized": "a-\u003eb-\u003e(a-\u003eb-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003e(a-\u003eb-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:vireo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV* combinator - vireo once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "vireostar",
          "package": "data-aviary",
          "signature": "(b -\u003e a -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Birds.html#vireostar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo once removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "vireostar",
          "normalized": "(a-\u003eb-\u003ea-\u003ec)-\u003eb-\u003ea-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ea-\u003eb-\u003ed)-\u003ea-\u003eb-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:vireostar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV** combinator - vireo twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "vireostarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e b -\u003e c -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e c -\u003e e",
          "source": "src/Data-Aviary-Birds.html#vireostarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "vireostarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003eb-\u003ed)-\u003ea-\u003ec-\u003eb-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003eb-\u003ec-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:vireostarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW combinator - warbler - elementary duplicator.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "warbler",
          "package": "data-aviary",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-Birds.html#warbler",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler elementary duplicator",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "warbler",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:warbler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW1 combinator - converse warbler.\n \u003ccode\u003e\u003ca\u003ewarbler\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "warbler1",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-Birds.html#warbler1",
          "type": "function"
        },
        "index": {
          "description": "W1 combinator converse warbler warbler with the arguments reversed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "warbler1",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:warbler1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW* combinator - warbler once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "warblerstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Birds.html#warblerstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler once removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "warblerstar",
          "normalized": "(a-\u003eb-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:warblerstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW** combinator - warbler twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.Birds",
          "name": "warblerstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-Birds.html#warblerstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler twice removed",
          "hierarchy": "Data Aviary Birds",
          "module": "Data.Aviary.Birds",
          "name": "warblerstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Birds.html#v:warblerstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBird monickered combinators interdefined.\n\u003c/p\u003e\u003cp\u003eThis module is intended for illustration rather than utility.\n\u003c/p\u003e\u003cp\u003eThe 'long reach' Turner set { S, K, I, B, C, S', B', C' }\n\u003c/p\u003e\u003cp\u003eThe Joy et al. set { S, I, B, C, J(alt), S', B', C', J(alt)' } \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "BirdsInter",
          "package": "data-aviary",
          "source": "src/Data-Aviary-BirdsInter.html",
          "type": "module"
        },
        "index": {
          "description": "Bird monickered combinators interdefined This module is intended for illustration rather than utility The long reach Turner set The Joy et al set alt alt",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "BirdsInter",
          "package": "data-aviary",
          "partial": "Birds Inter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator - apply / applicator - Haskell (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is also called \u003ccode\u003ei-star\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: the (inter-) definition here is \u003ccode\u003e- C (B B I) I -\u003c/code\u003e and \n not the familiar \u003ccode\u003e- S (S K) -\u003c/code\u003e which as far as Haskell is \n concerned has a different type:\n\u003c/p\u003e\u003cpre\u003e (S(SK)) :: ((a -\u003e b) -\u003e a) -\u003e (a -\u003e b) -\u003e a \n\u003c/pre\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "applicator",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#applicator",
          "type": "function"
        },
        "index": {
          "description": "combinator apply applicator Haskell This is also called i-star Note the inter definition here is and not the familiar which as far as Haskell is concerned has different type SK",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "applicator",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB3 combinator - becard.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "becard",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#becard",
          "type": "function"
        },
        "index": {
          "description": "B3 combinator becard",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "becard",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003e(d-\u003ec)-\u003ed-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:becard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB1 combinator - blackbird - specs \u003ccode\u003eoo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "blackbird",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#blackbird",
          "type": "function"
        },
        "index": {
          "description": "B1 combinator blackbird specs oo",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "blackbird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:blackbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB combinator - bluebird - Haskell (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "bluebird",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#bluebird",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird Haskell",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "bluebird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:bluebird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB' combinator - bluebird prime.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "bluebird'",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d) -\u003e a -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#bluebird%27",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird prime",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "bluebird'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed)-\u003ea-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:bluebird-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB2 combinator - bunting - specs \u003ccode\u003eooo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "bunting",
          "package": "data-aviary",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#bunting",
          "type": "function"
        },
        "index": {
          "description": "B2 combinator bunting specs ooo",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "bunting",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "data-aviary",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:bunting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC combinator - cardinal - Haskell \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinal",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#cardinal",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal Haskell flip",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinal",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC' combinator - no name.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinal'",
          "package": "data-aviary",
          "signature": "(c -\u003e a -\u003e d) -\u003e (b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#cardinal%27",
          "type": "function"
        },
        "index": {
          "description": "combinator no name",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinal'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003eb-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(c-\u003ea-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:cardinal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC* combinator - cardinal once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinalstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#cardinalstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal once removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinalstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ec-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003eb-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:cardinalstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC** combinator - cardinal twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinalstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d -\u003e c -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#cardinalstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "cardinalstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ed-\u003ec-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed-\u003ec-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:cardinalstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD1 combinator - dickcissel.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "dickcissel",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e (c -\u003e d) -\u003e c -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#dickcissel",
          "type": "function"
        },
        "index": {
          "description": "D1 combinator dickcissel",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "dickcissel",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003e(e-\u003ec)-\u003ee-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed-\u003ee)-\u003ea-\u003eb-\u003e(c-\u003ed)-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:dickcissel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD combinator - dove.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "dove",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d) -\u003e a -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#dove",
          "type": "function"
        },
        "index": {
          "description": "combinator dove",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "dove",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed)-\u003ea-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:dove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD2 combinator - dovekie.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "dovekie",
          "package": "data-aviary",
          "signature": "(c -\u003e d -\u003e e) -\u003e (a -\u003e c) -\u003e a -\u003e (b -\u003e d) -\u003e b -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#dovekie",
          "type": "function"
        },
        "index": {
          "description": "D2 combinator dovekie",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "dovekie",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003ed-\u003e(e-\u003eb)-\u003ee-\u003ec",
          "package": "data-aviary",
          "signature": "(c-\u003ed-\u003ee)-\u003e(a-\u003ec)-\u003ea-\u003e(b-\u003ed)-\u003eb-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:dovekie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE combinator - eagle.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "eagle",
          "package": "data-aviary",
          "signature": "(a -\u003e d -\u003e e) -\u003e a -\u003e (b -\u003e c -\u003e d) -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#eagle",
          "type": "function"
        },
        "index": {
          "description": "combinator eagle",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "eagle",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003ee-\u003eb)-\u003ed-\u003ee-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ed-\u003ee)-\u003ea-\u003e(b-\u003ec-\u003ed)-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:eagle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE ^ - bald eagle.\n For alphabetical regularity it is somewhat misnamed here as \n eaglebald.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "eaglebald",
          "package": "data-aviary",
          "signature": "(e -\u003e f -\u003e g) -\u003e (a -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e (c -\u003e d -\u003e f) -\u003e c -\u003e d -\u003e g",
          "source": "src/Data-Aviary-BirdsInter.html#eaglebald",
          "type": "function"
        },
        "index": {
          "description": "bald eagle For alphabetical regularity it is somewhat misnamed here as eaglebald",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "eaglebald",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ea)-\u003ed-\u003ee-\u003e(f-\u003eg-\u003eb)-\u003ef-\u003eg-\u003ec",
          "package": "data-aviary",
          "signature": "(e-\u003ef-\u003eg)-\u003e(a-\u003eb-\u003ee)-\u003ea-\u003eb-\u003e(c-\u003ed-\u003ef)-\u003ec-\u003ed-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:eaglebald"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF combinator - finch.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "finch",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e (b -\u003e a -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#finch",
          "type": "function"
        },
        "index": {
          "description": "combinator finch",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "finch",
          "normalized": "a-\u003eb-\u003e(b-\u003ea-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003e(b-\u003ea-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:finch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF* combinator - finch once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "finchstar",
          "package": "data-aviary",
          "signature": "(c -\u003e b -\u003e a -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#finchstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch once removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "finchstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003eb-\u003ea-\u003ed",
          "package": "data-aviary",
          "signature": "(c-\u003eb-\u003ea-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:finchstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF** combinator - finch twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "finchstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e d -\u003e c -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#finchstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "finchstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ed-\u003ec-\u003eb-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003ed-\u003ec-\u003eb-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:finchstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eG combinator - goldfinch.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "goldfinch",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#goldfinch",
          "type": "function"
        },
        "index": {
          "description": "combinator goldfinch",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "goldfinch",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003eb)-\u003ed-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:goldfinch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eH combinator - hummingbird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "hummingbird",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e a -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#hummingbird",
          "type": "function"
        },
        "index": {
          "description": "combinator hummingbird",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "hummingbird",
          "normalized": "(a-\u003eb-\u003ea-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ea-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:hummingbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI combinator - identity bird / idiot bird - Haskell \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "idiot",
          "package": "data-aviary",
          "signature": "a -\u003e a",
          "source": "src/Data-Aviary-BirdsInter.html#idiot",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird idiot bird Haskell id",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "idiot",
          "normalized": "a-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:idiot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI* combinator - identity bird once removed.\n Alias of \u003ccode\u003e\u003ca\u003eapplicator\u003c/a\u003e\u003c/code\u003e, Haskell's (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e).\n Type signature \n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "idstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#idstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird once removed Alias of applicator Haskell Type signature",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "idstar",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:idstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI** combinator - identity bird twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "idstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#idstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "idstarstar",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:idstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative J combinator - this is the J combintor of Joy,\n Rayward-Smith and Burton (see. Antoni Diller 'Compiling \n Functional Languages' page 104). It is not the J - jay \n combinator of the literature.   \n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "jalt",
          "package": "data-aviary",
          "signature": "(a -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#jalt",
          "type": "function"
        },
        "index": {
          "description": "Alternative combinator this is the combintor of Joy Rayward-Smith and Burton see Antoni Diller Compiling Functional Languages page It is not the jay combinator of the literature",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "jalt",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:jalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ' combinator - from Joy, Rayward-Smith and Burton.\n See the comment to \u003ccode\u003e\u003ca\u003ejalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "jalt'",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#jalt%27",
          "type": "function"
        },
        "index": {
          "description": "combinator from Joy Rayward-Smith and Burton See the comment to jalt",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "jalt'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:jalt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ combinator - jay.\n\u003c/p\u003e\u003cp\u003eThis is the usual J combinator.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "jay",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e b) -\u003e a -\u003e b -\u003e a -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#jay",
          "type": "function"
        },
        "index": {
          "description": "combinator jay This is the usual combinator",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "jay",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:jay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eK combinator - kestrel - Haskell \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n Corresponds to the encoding of \u003ccode\u003etrue\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e\u003cp\u003eNot interdefined.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "kestrel",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Data-Aviary-BirdsInter.html#kestrel",
          "type": "function"
        },
        "index": {
          "description": "combinator kestrel Haskell const Corresponds to the encoding of true in the lambda calculus Not interdefined",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "kestrel",
          "normalized": "a-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:kestrel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKi - kite.\n Corresponds to the encoding of \u003ccode\u003efalse\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "kite",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#kite",
          "type": "function"
        },
        "index": {
          "description": "Ki kite Corresponds to the encoding of false in the lambda calculus",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "kite",
          "normalized": "a-\u003eb-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:kite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO combinator - owl.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "owl",
          "package": "data-aviary",
          "signature": "((a -\u003e b) -\u003e a) -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#owl",
          "type": "function"
        },
        "index": {
          "description": "combinator owl",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "owl",
          "normalized": "((a-\u003eb)-\u003ea)-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "((a-\u003eb)-\u003ea)-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:owl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Big) Phi combinator - phoenix - Haskell \u003ccode\u003eliftM2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "phoenix",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#phoenix",
          "type": "function"
        },
        "index": {
          "description": "Big Phi combinator phoenix Haskell liftM2",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "phoenix",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:phoenix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePsi combinator - psi bird (?) - Haskell \u003ccode\u003eon\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "psi",
          "package": "data-aviary",
          "signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#psi",
          "type": "function"
        },
        "index": {
          "description": "Psi combinator psi bird Haskell on",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "psi",
          "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ4 combinator - quacky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "quacky",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e b) -\u003e (b -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#quacky",
          "type": "function"
        },
        "index": {
          "description": "Q4 combinator quacky bird",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "quacky",
          "normalized": "a-\u003e(a-\u003eb)-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003eb)-\u003e(b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:quacky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ combinator - queer bird.\n\u003c/p\u003e\u003cp\u003eHaskell \u003ccode\u003e(##)\u003c/code\u003e in Peter Thiemann's Wash, reverse composition.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "queer",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#queer",
          "type": "function"
        },
        "index": {
          "description": "combinator queer bird Haskell in Peter Thiemann Wash reverse composition",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "queer",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:queer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ3 combinator - quirky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "quirky",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e a -\u003e (b -\u003e c) -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#quirky",
          "type": "function"
        },
        "index": {
          "description": "Q3 combinator quirky bird",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "quirky",
          "normalized": "(a-\u003eb)-\u003ea-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003ea-\u003e(b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:quirky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ1 combinator - quixotic bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "quixotic",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e a -\u003e (a -\u003e b) -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#quixotic",
          "type": "function"
        },
        "index": {
          "description": "Q1 combinator quixotic bird",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "quixotic",
          "normalized": "(a-\u003eb)-\u003ec-\u003e(c-\u003ea)-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:quixotic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ2 combinator - quizzical bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "quizzical",
          "package": "data-aviary",
          "signature": "a -\u003e (b -\u003e c) -\u003e (a -\u003e b) -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#quizzical",
          "type": "function"
        },
        "index": {
          "description": "Q2 combinator quizzical bird",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "quizzical",
          "normalized": "a-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:quizzical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR combinator - robin.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "robin",
          "package": "data-aviary",
          "signature": "a -\u003e (b -\u003e a -\u003e c) -\u003e b -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#robin",
          "type": "function"
        },
        "index": {
          "description": "combinator robin",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "robin",
          "normalized": "a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:robin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR* combinator - robin once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "robinstar",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e a -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#robinstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin once removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "robinstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003ea-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ea-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:robinstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR** combinator - robin twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "robinstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e d -\u003e b -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#robinstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "robinstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ed-\u003eb-\u003ec-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003ed-\u003eb-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:robinstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS combinator - starling. \n\u003c/p\u003e\u003cp\u003eHaskell: Applicative's \u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e on functions.\n\u003c/p\u003e\u003cp\u003eNot interdefined.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "starling",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#starling",
          "type": "function"
        },
        "index": {
          "description": "combinator starling Haskell Applicative on functions Not interdefined",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "starling",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:starling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS' combinator - starling prime - Turner's big phi. \n Haskell: Applicative's liftA2 on functions.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "starling'",
          "package": "data-aviary",
          "signature": "(b -\u003e c -\u003e d) -\u003e (a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#starling%27",
          "type": "function"
        },
        "index": {
          "description": "combinator starling prime Turner big phi Haskell Applicative liftA2 on functions",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "starling'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:starling-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT combinator - thrush.\n Haskell \u003ccode\u003e(#)\u003c/code\u003e in Peter Thiemann's Wash, reverse application.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "thrush",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#thrush",
          "type": "function"
        },
        "index": {
          "description": "combinator thrush Haskell in Peter Thiemann Wash reverse application",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "thrush",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:thrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV combinator - vireo.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireo",
          "package": "data-aviary",
          "signature": "a -\u003e b -\u003e (a -\u003e b -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#vireo",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireo",
          "normalized": "a-\u003eb-\u003e(a-\u003eb-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003eb-\u003e(a-\u003eb-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:vireo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV* combinator - vireo once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireostar",
          "package": "data-aviary",
          "signature": "(b -\u003e a -\u003e b -\u003e d) -\u003e a -\u003e b -\u003e b -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#vireostar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo once removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireostar",
          "normalized": "(a-\u003eb-\u003ea-\u003ec)-\u003eb-\u003ea-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ea-\u003eb-\u003ed)-\u003ea-\u003eb-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:vireostar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV** combinator - vireo twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireostarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e c -\u003e b -\u003e c -\u003e e) -\u003e a -\u003e b -\u003e c -\u003e c -\u003e e",
          "source": "src/Data-Aviary-BirdsInter.html#vireostarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "vireostarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003eb-\u003ed)-\u003ea-\u003ec-\u003eb-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003ec-\u003eb-\u003ec-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:vireostarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW combinator - warbler - elementary duplicator.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "warbler",
          "package": "data-aviary",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#warbler",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler elementary duplicator",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "warbler",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:warbler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW1 combinator - converse warbler.\n \u003ccode\u003e\u003ca\u003ewarbler\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "warbler1",
          "package": "data-aviary",
          "signature": "a -\u003e (a -\u003e a -\u003e b) -\u003e b",
          "source": "src/Data-Aviary-BirdsInter.html#warbler1",
          "type": "function"
        },
        "index": {
          "description": "W1 combinator converse warbler warbler with the arguments reversed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "warbler1",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:warbler1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW* combinator - warbler once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "warblerstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Aviary-BirdsInter.html#warblerstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler once removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "warblerstar",
          "normalized": "(a-\u003eb-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:warblerstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW** combinator - warbler twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsInter",
          "name": "warblerstarstar",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Aviary-BirdsInter.html#warblerstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler twice removed",
          "hierarchy": "Data Aviary BirdsInter",
          "module": "Data.Aviary.BirdsInter",
          "name": "warblerstarstar",
          "normalized": "(a-\u003eb-\u003ec-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsInter.html#v:warblerstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBird monickered combinators - different naming scheme for the \n type signatures to Data.Aviary.Birds.\n\u003c/p\u003e\u003cp\u003eThis module is intended for illustration (the type signatures!) \n rather than utility.\n\u003c/p\u003e\u003cp\u003eThe 'long reach' Turner set { S, K, I, B, C, S', B', C' }\n\u003c/p\u003e\u003cp\u003eThe Joy et al. set { S, I, B, C, J(alt), S', B', C', J(alt)' } \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "BirdsVersion",
          "package": "data-aviary",
          "source": "src/Data-Aviary-BirdsVersion.html",
          "type": "module"
        },
        "index": {
          "description": "Bird monickered combinators different naming scheme for the type signatures to Data.Aviary.Birds This module is intended for illustration the type signatures rather than utility The long reach Turner set The Joy et al set alt alt",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "BirdsVersion",
          "package": "data-aviary",
          "partial": "Birds Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator - apply / applicator - Haskell (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThis is also called \u003ccode\u003ei-star\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "applicator",
          "package": "data-aviary",
          "signature": "(r1 -\u003e ans) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#applicator",
          "type": "function"
        },
        "index": {
          "description": "combinator apply applicator Haskell This is also called i-star",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "applicator",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB3 combinator - becard.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "becard",
          "package": "data-aviary",
          "signature": "(b -\u003e ans) -\u003e (a -\u003e b) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#becard",
          "type": "function"
        },
        "index": {
          "description": "B3 combinator becard",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "becard",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003e(d-\u003ec)-\u003ed-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003eans)-\u003e(a-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:becard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB1 combinator - blackbird - specs \u003ccode\u003eoo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "blackbird",
          "package": "data-aviary",
          "signature": "(a -\u003e ans) -\u003e (r1 -\u003e r2 -\u003e a) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#blackbird",
          "type": "function"
        },
        "index": {
          "description": "B1 combinator blackbird specs oo",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "blackbird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eans)-\u003e(r-\u003er-\u003ea)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:blackbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB combinator - bluebird - Haskell (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bluebird",
          "package": "data-aviary",
          "signature": "(a -\u003e ans) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#bluebird",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird Haskell",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bluebird",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:bluebird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB' combinator - bluebird prime.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bluebird'",
          "package": "data-aviary",
          "signature": "(r1 -\u003e a -\u003e ans) -\u003e r1 -\u003e (r2 -\u003e a) -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#bluebird%27",
          "type": "function"
        },
        "index": {
          "description": "combinator bluebird prime",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bluebird'",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eans)-\u003er-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:bluebird-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB2 combinator - bunting - specs \u003ccode\u003eooo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bunting",
          "package": "data-aviary",
          "signature": "(a -\u003e ans) -\u003e (r1 -\u003e r2 -\u003e r3 -\u003e a) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#bunting",
          "type": "function"
        },
        "index": {
          "description": "B2 combinator bunting specs ooo",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "bunting",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ea)-\u003ec-\u003ec-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eans)-\u003e(r-\u003er-\u003er-\u003ea)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:bunting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC combinator - cardinal - Haskell \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinal",
          "package": "data-aviary",
          "signature": "(r2 -\u003e r1 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#cardinal",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal Haskell flip",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinal",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003eans)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:cardinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC' combinator - no name.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinal'",
          "package": "data-aviary",
          "signature": "(a -\u003e r1 -\u003e ans) -\u003e (r2 -\u003e a) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#cardinal%27",
          "type": "function"
        },
        "index": {
          "description": "combinator no name",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinal'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(b-\u003ea)-\u003eb-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:cardinal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC* combinator - cardinal once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinalstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r3 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#cardinalstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal once removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinalstar",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:cardinalstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC** combinator - cardinal twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinalstarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e r4 -\u003e r3 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e r4 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#cardinalstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator cardinal twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "cardinalstarstar",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:cardinalstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD1 combinator - dickcissel.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dickcissel",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e a -\u003e ans) -\u003e r1 -\u003e r2 -\u003e (r3 -\u003e a) -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#dickcissel",
          "type": "function"
        },
        "index": {
          "description": "D1 combinator dickcissel",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dickcissel",
          "normalized": "(a-\u003ea-\u003eb-\u003ec)-\u003ea-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003ea-\u003eans)-\u003er-\u003er-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:dickcissel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD combinator - dove.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dove",
          "package": "data-aviary",
          "signature": "(r1 -\u003e a -\u003e ans) -\u003e r1 -\u003e (r2 -\u003e a) -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#dove",
          "type": "function"
        },
        "index": {
          "description": "combinator dove",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dove",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eans)-\u003er-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:dove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD2 combinator - dovekie.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dovekie",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e ans) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e (r2 -\u003e b) -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#dovekie",
          "type": "function"
        },
        "index": {
          "description": "D2 combinator dovekie",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "dovekie",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003ed-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003e(r-\u003eb)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:dovekie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE combinator - eagle.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "eagle",
          "package": "data-aviary",
          "signature": "(a -\u003e d -\u003e ans) -\u003e a -\u003e (b -\u003e c -\u003e d) -\u003e b -\u003e c -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#eagle",
          "type": "function"
        },
        "index": {
          "description": "combinator eagle",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "eagle",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003e(d-\u003ee-\u003eb)-\u003ed-\u003ee-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003ed-\u003eans)-\u003ea-\u003e(b-\u003ec-\u003ed)-\u003eb-\u003ec-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:eagle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE ^ - bald eagle.\n For alphabetical regularity it is somewhat misnamed here as \n eaglebald.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "eaglebald",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e ans) -\u003e (r1 -\u003e r2 -\u003e a) -\u003e r1 -\u003e r2 -\u003e (r3 -\u003e r4 -\u003e b) -\u003e r3 -\u003e r4 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#eaglebald",
          "type": "function"
        },
        "index": {
          "description": "bald eagle For alphabetical regularity it is somewhat misnamed here as eaglebald",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "eaglebald",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ed-\u003ea)-\u003ed-\u003ed-\u003e(d-\u003ed-\u003eb)-\u003ed-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eans)-\u003e(r-\u003er-\u003ea)-\u003er-\u003er-\u003e(r-\u003er-\u003eb)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:eaglebald"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF combinator - finch.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finch",
          "package": "data-aviary",
          "signature": "r1 -\u003e r2 -\u003e (r2 -\u003e r1 -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#finch",
          "type": "function"
        },
        "index": {
          "description": "combinator finch",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finch",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003er-\u003e(r-\u003er-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:finch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF* combinator - finch once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finchstar",
          "package": "data-aviary",
          "signature": "(r3 -\u003e r2 -\u003e r1 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#finchstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch once removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finchstar",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:finchstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF** combinator - finch twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finchstarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r4 -\u003e r3 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e r4 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#finchstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator finch twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "finchstarstar",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:finchstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eG combinator - goldfinch.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "goldfinch",
          "package": "data-aviary",
          "signature": "(r2 -\u003e a -\u003e ans) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#goldfinch",
          "type": "function"
        },
        "index": {
          "description": "combinator goldfinch",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "goldfinch",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:goldfinch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eH combinator - hummingbird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "hummingbird",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e r1 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#hummingbird",
          "type": "function"
        },
        "index": {
          "description": "combinator hummingbird",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "hummingbird",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:hummingbird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI combinator - identity bird / idiot bird - Haskell \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idiot",
          "package": "data-aviary",
          "signature": "ans -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#idiot",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird idiot bird Haskell id",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idiot",
          "normalized": "a-\u003ea",
          "package": "data-aviary",
          "signature": "ans-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:idiot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI* combinator - identity bird once removed\n Alias of \u003ccode\u003e\u003ca\u003eapplicator\u003c/a\u003e\u003c/code\u003e, Haskell's (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e ans) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#idstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird once removed Alias of applicator Haskell",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idstar",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:idstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI** combinator - identity bird twice removed\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idstarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#idstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator identity bird twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "idstarstar",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003eans)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:idstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative J combinator - this is the J combintor of Joy,\n Rayward-Smith and Burton (see. Antoni Diller 'Compiling \n Functional Languages' page 104). It is not the J - jay \n combinator of the literature.   \n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jalt",
          "package": "data-aviary",
          "signature": "(r1 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#jalt",
          "type": "function"
        },
        "index": {
          "description": "Alternative combinator this is the combintor of Joy Rayward-Smith and Burton see Antoni Diller Compiling Functional Languages page It is not the jay combinator of the literature",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jalt",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003eans)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:jalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ' combinator - from Joy, Rayward-Smith and Burton.\n See the comment to \u003ccode\u003e\u003ca\u003ejalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jalt'",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#jalt%27",
          "type": "function"
        },
        "index": {
          "description": "combinator from Joy Rayward-Smith and Burton See the comment to jalt",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jalt'",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:jalt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJ combinator - jay.\n\u003c/p\u003e\u003cp\u003eThis is the usual J combinator.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jay",
          "package": "data-aviary",
          "signature": "(r1 -\u003e ans -\u003e ans) -\u003e r1 -\u003e ans -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#jay",
          "type": "function"
        },
        "index": {
          "description": "combinator jay This is the usual combinator",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "jay",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003eans-\u003eans)-\u003er-\u003eans-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:jay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eK combinator - kestrel - Haskell \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.\n Corresponds to the encoding of \u003ccode\u003etrue\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "kestrel",
          "package": "data-aviary",
          "signature": "ans -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#kestrel",
          "type": "function"
        },
        "index": {
          "description": "combinator kestrel Haskell const Corresponds to the encoding of true in the lambda calculus",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "kestrel",
          "normalized": "a-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "ans-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:kestrel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKi - kite.\n Corresponds to the encoding of \u003ccode\u003efalse\u003c/code\u003e in the lambda calculus.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "kite",
          "package": "data-aviary",
          "signature": "r1 -\u003e ans -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#kite",
          "type": "function"
        },
        "index": {
          "description": "Ki kite Corresponds to the encoding of false in the lambda calculus",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "kite",
          "normalized": "a-\u003eb-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003eans-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:kite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO combinator - owl.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "owl",
          "package": "data-aviary",
          "signature": "((a -\u003e ans) -\u003e a) -\u003e (a -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#owl",
          "type": "function"
        },
        "index": {
          "description": "combinator owl",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "owl",
          "normalized": "((a-\u003eb)-\u003ea)-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "((a-\u003eans)-\u003ea)-\u003e(a-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:owl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Big) Phi combinator - phoenix - Haskell \u003ccode\u003eliftM2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "phoenix",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e ans) -\u003e (r1 -\u003e a) -\u003e (r1 -\u003e b) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#phoenix",
          "type": "function"
        },
        "index": {
          "description": "Big Phi combinator phoenix Haskell liftM2",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "phoenix",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eans)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:phoenix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePsi combinator - psi bird (?) - Haskell \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "psi",
          "package": "data-aviary",
          "signature": "(a -\u003e a -\u003e ans) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#psi",
          "type": "function"
        },
        "index": {
          "description": "Psi combinator psi bird Haskell on",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "psi",
          "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003ea-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:psi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ4 combinator - quacky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quacky",
          "package": "data-aviary",
          "signature": "r1 -\u003e (r1 -\u003e a) -\u003e (a -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#quacky",
          "type": "function"
        },
        "index": {
          "description": "Q4 combinator quacky bird",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quacky",
          "normalized": "a-\u003e(a-\u003eb)-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "r-\u003e(r-\u003ea)-\u003e(a-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:quacky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ combinator - queer bird.\n\u003c/p\u003e\u003cp\u003eHaskell \u003ccode\u003e(##)\u003c/code\u003e in Peter Thiemann's Wash, reverse composition.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "queer",
          "package": "data-aviary",
          "signature": "(r1 -\u003e a) -\u003e (a -\u003e ans) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#queer",
          "type": "function"
        },
        "index": {
          "description": "combinator queer bird Haskell in Peter Thiemann Wash reverse composition",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "queer",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(a-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:queer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ3 combinator - quirky bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quirky",
          "package": "data-aviary",
          "signature": "(r1 -\u003e a) -\u003e r1 -\u003e (a -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#quirky",
          "type": "function"
        },
        "index": {
          "description": "Q3 combinator quirky bird",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quirky",
          "normalized": "(a-\u003eb)-\u003ea-\u003e(b-\u003ec)-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003er-\u003e(a-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:quirky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ1 combinator - quixotic bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quixotic",
          "package": "data-aviary",
          "signature": "(a -\u003e ans) -\u003e r1 -\u003e (r1 -\u003e a) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#quixotic",
          "type": "function"
        },
        "index": {
          "description": "Q1 combinator quixotic bird",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quixotic",
          "normalized": "(a-\u003eb)-\u003ec-\u003e(c-\u003ea)-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eans)-\u003er-\u003e(r-\u003ea)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:quixotic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQ2 combinator - quizzical bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quizzical",
          "package": "data-aviary",
          "signature": "r1 -\u003e (a -\u003e ans) -\u003e (r1 -\u003e a) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#quizzical",
          "type": "function"
        },
        "index": {
          "description": "Q2 combinator quizzical bird",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "quizzical",
          "normalized": "a-\u003e(b-\u003ec)-\u003e(a-\u003eb)-\u003ec",
          "package": "data-aviary",
          "signature": "r-\u003e(a-\u003eans)-\u003e(r-\u003ea)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:quizzical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR combinator - robin.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robin",
          "package": "data-aviary",
          "signature": "r1 -\u003e (r2 -\u003e r1 -\u003e ans) -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#robin",
          "type": "function"
        },
        "index": {
          "description": "combinator robin",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robin",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003e(r-\u003er-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:robin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR* combinator - robin once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robinstar",
          "package": "data-aviary",
          "signature": "(r2 -\u003e r3 -\u003e r1 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#robinstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin once removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robinstar",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:robinstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eR** combinator - robin twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robinstarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r3 -\u003e r4 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e r4 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#robinstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator robin twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "robinstarstar",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:robinstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS combinator - starling. \n\u003c/p\u003e\u003cp\u003eHaskell: Applicative's \u003ccode\u003e(\u003c*\u003e)\u003c/code\u003e on functions.\n\u003c/p\u003e\u003cp\u003e(Substitution / composition).\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "starling",
          "package": "data-aviary",
          "signature": "(r1 -\u003e a -\u003e ans) -\u003e (r1 -\u003e a) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#starling",
          "type": "function"
        },
        "index": {
          "description": "combinator starling Haskell Applicative on functions Substitution composition",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "starling",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:starling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS' combinator - starling prime - Turner's big phi. \n Haskell: Applicative's liftA2 on functions.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "starling'",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e ans) -\u003e (r1 -\u003e a) -\u003e (r1 -\u003e b) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#starling%27",
          "type": "function"
        },
        "index": {
          "description": "combinator starling prime Turner big phi Haskell Applicative liftA2 on functions",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "starling'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003eans)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:starling-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT combinator - thrush.\n Haskell \u003ccode\u003e(#)\u003c/code\u003e in Peter Thiemann's Wash, reverse application.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "thrush",
          "package": "data-aviary",
          "signature": "r1 -\u003e (r1 -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#thrush",
          "type": "function"
        },
        "index": {
          "description": "combinator thrush Haskell in Peter Thiemann Wash reverse application",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "thrush",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003e(r-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:thrush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV combinator - vireo.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireo",
          "package": "data-aviary",
          "signature": "r1 -\u003e r2 -\u003e (r1 -\u003e r2 -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#vireo",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireo",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003er-\u003e(r-\u003er-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:vireo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV* combinator - vireo once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireostar",
          "package": "data-aviary",
          "signature": "(r2 -\u003e r1 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#vireostar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo once removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireostar",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:vireostar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eV** combinator - vireo twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireostarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r3 -\u003e r2 -\u003e r3 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#vireostarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator vireo twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "vireostarstar",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:vireostarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW combinator - warbler - elementary duplicator.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warbler",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r1 -\u003e ans) -\u003e r1 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#warbler",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler elementary duplicator",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warbler",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:warbler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW1 combinator - converse warbler.\n \u003ccode\u003e\u003ca\u003ewarbler\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warbler1",
          "package": "data-aviary",
          "signature": "r1 -\u003e (r1 -\u003e r1 -\u003e ans) -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#warbler1",
          "type": "function"
        },
        "index": {
          "description": "W1 combinator converse warbler warbler with the arguments reversed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warbler1",
          "normalized": "a-\u003e(a-\u003ea-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "r-\u003e(r-\u003er-\u003eans)-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:warbler1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW* combinator - warbler once removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warblerstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e r2 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#warblerstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler once removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warblerstar",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:warblerstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eW** combinator - warbler twice removed.\n\u003c/p\u003e",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warblerstarstar",
          "package": "data-aviary",
          "signature": "(r1 -\u003e r2 -\u003e r3 -\u003e r3 -\u003e ans) -\u003e r1 -\u003e r2 -\u003e r3 -\u003e ans",
          "source": "src/Data-Aviary-BirdsVersion.html#warblerstarstar",
          "type": "function"
        },
        "index": {
          "description": "combinator warbler twice removed",
          "hierarchy": "Data Aviary BirdsVersion",
          "module": "Data.Aviary.BirdsVersion",
          "name": "warblerstarstar",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003er-\u003er-\u003eans)-\u003er-\u003er-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-BirdsVersion.html#v:warblerstarstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctor, Applicative, Monad operations \u003cem\u003especialized\u003c/em\u003e to \n the functional type.\n\u003c/p\u003e\u003cp\u003eThis catalogue is for reference and is not intended for use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aviary.Functional",
          "name": "Functional",
          "package": "data-aviary",
          "source": "src/Data-Aviary-Functional.html",
          "type": "module"
        },
        "index": {
          "description": "Functor Applicative Monad operations specialized to the functional type This catalogue is for reference and is not intended for use",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "Functional",
          "package": "data-aviary",
          "partial": "Functional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(|||)",
          "package": "data-aviary",
          "signature": "(b -\u003e d) -\u003e (c -\u003e d) -\u003e Either b c -\u003e d",
          "source": "src/Data-Aviary-Functional.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(|||) |||",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ed)-\u003e(c-\u003ed)-\u003eEither b c-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(&&&)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (b -\u003e c') -\u003e b -\u003e (c, c')",
          "source": "src/Data-Aviary-Functional.html#%26%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(&&&) &&&",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003e(b,c)",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(b-\u003ec')-\u003eb-\u003e(c,c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(***)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (b' -\u003e c') -\u003e (b, b') -\u003e (c, c')",
          "source": "src/Data-Aviary-Functional.html#%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(***) ***",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(b'-\u003ec')-\u003e(b,b')-\u003e(c,c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(*\u003e)",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(*\u003e) *\u003e",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(+++)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (b' -\u003e c') -\u003e Either b b' -\u003e Either c c'",
          "source": "src/Data-Aviary-Functional.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(+++) +++",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(b'-\u003ec')-\u003eEither b b'-\u003eEither c c'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative (\u003ccode\u003e\u003ca\u003e\u003c$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c$)",
          "package": "data-aviary",
          "signature": "a -\u003e (r -\u003e b) -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#%3C%24",
          "type": "function"
        },
        "index": {
          "description": "Applicative",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003e(b-\u003ec)-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003e(r-\u003eb)-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Applicative combinator (\u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e) is a synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, \n so for the function instance of of Applicative it is \n \u003cem\u003ecompose\u003c/em\u003e (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e) which is \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c$\u003e)",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The Applicative combinator is synonym for fmap so for the function instance of of Applicative it is compose which is bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003c*)",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#%3C%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c*) \u003c*",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003c**\u003e)",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e (r -\u003e a -\u003e b) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3C%2A%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(r-\u003ea-\u003eb)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) for the function instance of \n Applicative is the S combinator aka \n \u003ccode\u003e\u003ca\u003estarling\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c*\u003e)",
          "package": "data-aviary",
          "signature": "(r -\u003e a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "The combinator for the function instance of Applicative is the combinator aka starling",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the function instance of Category right-to-left \n composition is just regular function composition aka\n \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c\u003c\u003c)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Functional.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "For the function instance of Category right-to-left composition is just regular function composition aka bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arrow operation \u003cem\u003eprecomposition with a pure function\u003c/em\u003e\n (right-to-left) is equal to the right-to-left composition \n operator (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) for function Arrows, which in turn is equal to\n regular function composition.\n\u003c/p\u003e\u003cp\u003eThis corresponds to \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c\u003c^)",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Functional.html#%3C%3C%5E",
          "type": "function"
        },
        "index": {
          "description": "The Arrow operation precomposition with pure function right-to-left is equal to the right-to-left composition operator for function Arrows which in turn is equal to regular function composition This corresponds to bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c\u003c^) \u003c\u003c^",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003c=\u003c)",
          "package": "data-aviary",
          "signature": "(b -\u003e r -\u003e c) -\u003e (a -\u003e r -\u003e b) -\u003e a -\u003e r -\u003e c",
          "source": "src/Data-Aviary-Functional.html#%3C%3D%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003eb-\u003ea)-\u003ed-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003er-\u003ec)-\u003e(a-\u003er-\u003eb)-\u003ea-\u003er-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(=\u003c\u003c)",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(b-\u003ea)-\u003eb-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(=\u003e\u003e)",
          "package": "data-aviary",
          "signature": "(m -\u003e a) -\u003e ((m -\u003e a) -\u003e b) -\u003e m -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3D%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(=\u003e\u003e) =\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003e((a-\u003eb)-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(m-\u003ea)-\u003e((m-\u003ea)-\u003eb)-\u003em-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-61--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003e=\u003e)",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e b) -\u003e (b -\u003e r -\u003e c) -\u003e a -\u003e r -\u003e c",
          "source": "src/Data-Aviary-Functional.html#%3E%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(c-\u003eb-\u003ed)-\u003ea-\u003eb-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eb)-\u003e(b-\u003er-\u003ec)-\u003ea-\u003er-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e)",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e=)",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e (a -\u003e r -\u003e b) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003e(a-\u003er-\u003eb)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the function instance of Category left-to-right \n composition is the \u003ccode\u003e\u003ca\u003equeer\u003c/a\u003e\u003c/code\u003e bird.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e\u003e)",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Functional.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "For the function instance of Category left-to-right composition is the queer bird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arrow operation \u003cem\u003epostcomposition with a pure function\u003c/em\u003e\n (left-to-right) is equal to the left-to-right composition \n operator (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e) for function Arrows.\n\u003c/p\u003e\u003cp\u003eThis corresponds to \u003ccode\u003e\u003ca\u003equeer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e^)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (c -\u003e d) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Functional.html#%3E%3E%5E",
          "type": "function"
        },
        "index": {
          "description": "The Arrow operation postcomposition with pure function left-to-right is equal to the left-to-right composition operator for function Arrows This corresponds to queer",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(\u003e\u003e^) \u003e\u003e^",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(c-\u003ed)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-62--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arrow operation \u003cem\u003epostcomposition with a pure function\u003c/em\u003e\n (right-to-left) is equal to the right-to-left composition \n operator (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) for function Arrows, which in turn is equal to\n regular function composition.\n\u003c/p\u003e\u003cp\u003eThis corresponds to \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(^\u003c\u003c)",
          "package": "data-aviary",
          "signature": "(c -\u003e d) -\u003e (b -\u003e c) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Functional.html#%5E%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "The Arrow operation postcomposition with pure function right-to-left is equal to the right-to-left composition operator for function Arrows which in turn is equal to regular function composition This corresponds to bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(^\u003c\u003c) ^\u003c\u003c",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(c-\u003ed)-\u003e(b-\u003ec)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-94--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arrow operation \u003cem\u003eprecomposition with a pure function\u003c/em\u003e \n (left-to-right) is equal to the left-to-right composition \n operator (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e) for function Arrows.\n\u003c/p\u003e\u003cp\u003eThis corresponds to \u003ccode\u003e\u003ca\u003equeer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(^\u003e\u003e)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (c -\u003e d) -\u003e b -\u003e d",
          "source": "src/Data-Aviary-Functional.html#%5E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "The Arrow operation precomposition with pure function left-to-right is equal to the left-to-right composition operator for function Arrows This corresponds to queer",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(^\u003e\u003e) ^\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(c-\u003ed)-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:-94--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the function instance of Category composition is just \n regular function composition aka \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "(.)",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Aviary-Functional.html#.",
          "type": "function"
        },
        "index": {
          "description": "For the function instance of Category composition is just regular function composition aka bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(.) .",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "(.\u003e\u003e)",
          "package": "data-aviary",
          "signature": "(m -\u003e a) -\u003e b -\u003e m -\u003e b",
          "source": "src/Data-Aviary-Functional.html#.%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "(.\u003e\u003e) .\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003ec-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(m-\u003ea)-\u003eb-\u003em-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:.-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e is the Monadic equivalent of the Applicative operator \n (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e). So for the function instance of Monad it corresponds \n to the S combinator aka \u003ccode\u003e\u003ca\u003estarling\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "ap",
          "package": "data-aviary",
          "signature": "(r -\u003e a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#ap",
          "type": "function"
        },
        "index": {
          "description": "ap is the Monadic equivalent of the Applicative operator So for the function instance of Monad it corresponds to the combinator aka starling",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "ap",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "app",
          "package": "data-aviary",
          "signature": "(b -\u003e c, b) -\u003e c",
          "source": "src/Data-Aviary-Functional.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "app",
          "normalized": "(a-\u003eb,a)-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arrow operation \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e corresponds to function \n application for the function instance of Arrow - i.e. \n Haskell's (\u003ccode\u003e$\u003c/code\u003e) operator.\n\u003c/p\u003e\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003eapplicator\u003c/a\u003e\u003c/code\u003e combinator in \n Data.Aviary.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "arr",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Functional.html#arr",
          "type": "function"
        },
        "index": {
          "description": "The Arrow operation arr corresponds to function application for the function instance of Arrow i.e Haskell operator This is the applicator combinator in Data.Aviary",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "arr",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "duplicate",
          "package": "data-aviary",
          "signature": "(m -\u003e a) -\u003e m -\u003e m -\u003e a",
          "source": "src/Data-Aviary-Functional.html#duplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "duplicate",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(m-\u003ea)-\u003em-\u003em-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "extend",
          "package": "data-aviary",
          "signature": "((m -\u003e a) -\u003e b) -\u003e (m -\u003e a) -\u003e m -\u003e b",
          "source": "src/Data-Aviary-Functional.html#extend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "extend",
          "normalized": "((a-\u003eb)-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "((m-\u003ea)-\u003eb)-\u003e(m-\u003ea)-\u003em-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "extract",
          "package": "data-aviary",
          "signature": "(m -\u003e a) -\u003e a",
          "source": "src/Data-Aviary-Functional.html#extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "extract",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "data-aviary",
          "signature": "(m-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "fail",
          "package": "data-aviary",
          "signature": "String -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "fail",
          "normalized": "String-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "String-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "filterM",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e Bool) -\u003e [a] -\u003e r -\u003e [a]",
          "source": "src/Data-Aviary-Functional.html#filterM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "filterM",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003eb-\u003e[a]",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eBool)-\u003e[a]-\u003er-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "first",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (b, d) -\u003e (c, d)",
          "source": "src/Data-Aviary-Functional.html#first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "first",
          "normalized": "(a-\u003eb)-\u003e(a,c)-\u003e(b,c)",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(b,d)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for the function instance of Functor is \u003cem\u003ecompose\u003c/em\u003e \n (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e) which in turn is \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "fmap",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#fmap",
          "type": "function"
        },
        "index": {
          "description": "fmap for the function instance of Functor is compose which in turn is bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "foldM",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e r -\u003e a) -\u003e a -\u003e [b] -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#foldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003e[b]-\u003ec-\u003ea",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003er-\u003ea)-\u003ea-\u003e[b]-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "foldM_",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e r -\u003e a) -\u003e a -\u003e [b] -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#foldM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003e[b]-\u003ec-\u003e()",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003er-\u003ea)-\u003ea-\u003e[b]-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "forM",
          "package": "data-aviary",
          "signature": "[a] -\u003e (a -\u003e r -\u003e b) -\u003e r -\u003e [b]",
          "source": "src/Data-Aviary-Functional.html#forM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eb-\u003ec)-\u003eb-\u003e[c]",
          "package": "data-aviary",
          "signature": "[a]-\u003e(a-\u003er-\u003eb)-\u003er-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "forM_",
          "package": "data-aviary",
          "signature": "[a] -\u003e (a -\u003e r -\u003e b) -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#forM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eb-\u003ec)-\u003eb-\u003e()",
          "package": "data-aviary",
          "signature": "[a]-\u003e(a-\u003er-\u003eb)-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "forever",
          "package": "data-aviary",
          "signature": "(r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#forever",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "forever",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the function instance of Category \u003ccode\u003eid\u003c/code\u003e is just the \n identity function (Haskell's \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "id",
          "package": "data-aviary",
          "signature": "a -\u003e a",
          "source": "src/Data-Aviary-Functional.html#id",
          "type": "function"
        },
        "index": {
          "description": "For the function instance of Category id is just the identity function Haskell id",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "join",
          "package": "data-aviary",
          "signature": "(r -\u003e r -\u003e a) -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#join",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "join",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "data-aviary",
          "signature": "(r-\u003er-\u003ea)-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "left",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e Either b d -\u003e Either c d",
          "source": "src/Data-Aviary-Functional.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "left",
          "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003eEither b d-\u003eEither c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "leftApp",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e Either b d -\u003e Either c d",
          "source": "src/Data-Aviary-Functional.html#leftApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "leftApp",
          "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "package": "data-aviary",
          "partial": "App",
          "signature": "(b-\u003ec)-\u003eEither b d-\u003eEither c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:leftApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Applicative function \u003ccode\u003e\u003ca\u003eliftA\u003c/a\u003e\u003c/code\u003e is a synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, \n so for the function instance of of Applicative it is \n \u003cem\u003ecompose\u003c/em\u003e (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e) which is \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "liftA",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#liftA",
          "type": "function"
        },
        "index": {
          "description": "The Applicative function liftA is synonym for fmap so for the function instance of of Applicative it is compose which is bluebird",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e for the function instance of Applicative is the \n \u003ccode\u003e\u003ca\u003ephoenix\u003c/a\u003e\u003c/code\u003e combinator, also called big Phi \n and \u003cem\u003estarling-prime\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "liftA2",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e c",
          "source": "src/Data-Aviary-Functional.html#liftA2",
          "type": "function"
        },
        "index": {
          "description": "liftA2 for the function instance of Applicative is the phoenix combinator also called big Phi and starling-prime",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftA2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftA3",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e (r -\u003e c) -\u003e r -\u003e d",
          "source": "src/Data-Aviary-Functional.html#liftA3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftA3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(e-\u003ea)-\u003e(e-\u003eb)-\u003e(e-\u003ec)-\u003ee-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003e(r-\u003ec)-\u003er-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftCtx",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (m -\u003e a) -\u003e b",
          "source": "src/Data-Aviary-Functional.html#liftCtx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftCtx",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003eb",
          "package": "data-aviary",
          "partial": "Ctx",
          "signature": "(a-\u003eb)-\u003e(m-\u003ea)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Monadic function \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e would ideally be a synonym for \n \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, so for the function instance of of Monad it corresponds \n to composition - Haskell's (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e) and the \n \u003ccode\u003e\u003ca\u003ebluebird\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "liftM",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (r -\u003e a) -\u003e r -\u003e b",
          "source": "src/Data-Aviary-Functional.html#liftM",
          "type": "function"
        },
        "index": {
          "description": "The Monadic function liftM would ideally be synonym for fmap so for the function instance of of Monad it corresponds to composition Haskell and the bluebird combinator",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(r-\u003ea)-\u003er-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e for the function instance of Monad is the \n \u003ccode\u003e\u003ca\u003ephoenix\u003c/a\u003e\u003c/code\u003e combinator, also called big Phi \n and \u003cem\u003estarling-prime\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "liftM2",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e c",
          "source": "src/Data-Aviary-Functional.html#liftM2",
          "type": "function"
        },
        "index": {
          "description": "liftM2 for the function instance of Monad is the phoenix combinator also called big Phi and starling-prime",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftM2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftM3",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e (r -\u003e c) -\u003e r -\u003e d",
          "source": "src/Data-Aviary-Functional.html#liftM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftM3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(e-\u003ea)-\u003e(e-\u003eb)-\u003e(e-\u003ec)-\u003ee-\u003ed",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003e(r-\u003ec)-\u003er-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftM4",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e (r -\u003e c) -\u003e (r -\u003e d) -\u003e r -\u003e e",
          "source": "src/Data-Aviary-Functional.html#liftM4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftM4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(f-\u003ea)-\u003e(f-\u003eb)-\u003e(f-\u003ec)-\u003e(f-\u003ed)-\u003ef-\u003ee",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003e(r-\u003ec)-\u003e(r-\u003ed)-\u003er-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftM5",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e (r -\u003e c) -\u003e (r -\u003e d) -\u003e (r -\u003e e) -\u003e r -\u003e f",
          "source": "src/Data-Aviary-Functional.html#liftM5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftM5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(g-\u003ea)-\u003e(g-\u003eb)-\u003e(g-\u003ec)-\u003e(g-\u003ed)-\u003e(g-\u003ee)-\u003eg-\u003ef",
          "package": "data-aviary",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003e(r-\u003ec)-\u003e(r-\u003ed)-\u003e(r-\u003ee)-\u003er-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "liftW",
          "package": "data-aviary",
          "signature": "(a -\u003e b) -\u003e (m -\u003e a) -\u003e m -\u003e b",
          "source": "src/Data-Aviary-Functional.html#liftW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "liftW",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "data-aviary",
          "signature": "(a-\u003eb)-\u003e(m-\u003ea)-\u003em-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:liftW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "loop",
          "package": "data-aviary",
          "signature": "((b, d) -\u003e (c, d)) -\u003e b -\u003e c",
          "source": "src/Data-Aviary-Functional.html#loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "loop",
          "normalized": "((a,b)-\u003e(c,b))-\u003ea-\u003ec",
          "package": "data-aviary",
          "signature": "((b,d)-\u003e(c,d))-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "mapAndUnzipM",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e (b, c)) -\u003e [a] -\u003e r -\u003e ([b], [c])",
          "source": "src/Data-Aviary-Functional.html#mapAndUnzipM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb-\u003e(c,d))-\u003e[a]-\u003eb-\u003e([c],[d])",
          "package": "data-aviary",
          "partial": "And Unzip",
          "signature": "(a-\u003er-\u003e(b,c))-\u003e[a]-\u003er-\u003e([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "mapM",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e b) -\u003e [a] -\u003e r -\u003e [b]",
          "source": "src/Data-Aviary-Functional.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "mapM",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003eb-\u003e[c]",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eb)-\u003e[a]-\u003er-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "mapM_",
          "package": "data-aviary",
          "signature": "(a -\u003e r -\u003e b) -\u003e [a] -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "mapM_",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003eb-\u003e()",
          "package": "data-aviary",
          "signature": "(a-\u003er-\u003eb)-\u003e[a]-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "mapW",
          "package": "data-aviary",
          "signature": "((m -\u003e a) -\u003e b) -\u003e (m -\u003e [a]) -\u003e [b]",
          "source": "src/Data-Aviary-Functional.html#mapW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "mapW",
          "normalized": "((a-\u003eb)-\u003ec)-\u003e(a-\u003e[b])-\u003e[c]",
          "package": "data-aviary",
          "signature": "((m-\u003ea)-\u003eb)-\u003e(m-\u003e[a])-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:mapW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "parallelW",
          "package": "data-aviary",
          "signature": "(m -\u003e [a]) -\u003e [m -\u003e a]",
          "source": "src/Data-Aviary-Functional.html#parallelW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "parallelW",
          "normalized": "(a-\u003e[b])-\u003e[a-\u003eb]",
          "package": "data-aviary",
          "signature": "(m-\u003e[a])-\u003e[m-\u003ea]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:parallelW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function instance of Applicative \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e is \n \u003ccode\u003econst\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003ekestrel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "pure",
          "package": "data-aviary",
          "signature": "a -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#pure",
          "type": "function"
        },
        "index": {
          "description": "The function instance of Applicative pure is const which is kestrel",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "pure",
          "normalized": "a-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "replicateM",
          "package": "data-aviary",
          "signature": "Int -\u003e (r -\u003e a) -\u003e r -\u003e [a]",
          "source": "src/Data-Aviary-Functional.html#replicateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "replicateM",
          "normalized": "Int-\u003e(a-\u003eb)-\u003ea-\u003e[b]",
          "package": "data-aviary",
          "signature": "Int-\u003e(r-\u003ea)-\u003er-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "replicateM_",
          "package": "data-aviary",
          "signature": "Int -\u003e (r -\u003e a) -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#replicateM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "replicateM_",
          "normalized": "Int-\u003e(a-\u003eb)-\u003ea-\u003e()",
          "package": "data-aviary",
          "signature": "Int-\u003e(r-\u003ea)-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function instance of Monadic \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e is equal to the\n constant function (\u003ccode\u003econst\u003c/code\u003e) aka \u003ccode\u003e\u003ca\u003ekestrel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "return",
          "package": "data-aviary",
          "signature": "a -\u003e r -\u003e a",
          "source": "src/Data-Aviary-Functional.html#return",
          "type": "function"
        },
        "index": {
          "description": "The function instance of Monadic return is equal to the constant function const aka kestrel",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "return",
          "normalized": "a-\u003eb-\u003ea",
          "package": "data-aviary",
          "signature": "a-\u003er-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the function instance of Arrow, \u003ccode\u003e\u003ca\u003ereturnA\u003c/a\u003e\u003c/code\u003e is the \n identity function aka \u003ccode\u003e\u003ca\u003eidiot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aviary.Functional",
          "name": "returnA",
          "package": "data-aviary",
          "signature": "b -\u003e b",
          "source": "src/Data-Aviary-Functional.html#returnA",
          "type": "function"
        },
        "index": {
          "description": "For the function instance of Arrow returnA is the identity function aka idiot",
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "returnA",
          "normalized": "a-\u003ea",
          "package": "data-aviary",
          "signature": "b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:returnA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "right",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e Either d b -\u003e Either d c",
          "source": "src/Data-Aviary-Functional.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "right",
          "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003eEither d b-\u003eEither d c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "second",
          "package": "data-aviary",
          "signature": "(b -\u003e c) -\u003e (d, b) -\u003e (d, c)",
          "source": "src/Data-Aviary-Functional.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "second",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "data-aviary",
          "signature": "(b-\u003ec)-\u003e(d,b)-\u003e(d,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "sequence",
          "package": "data-aviary",
          "signature": "[r -\u003e a] -\u003e r -\u003e [a]",
          "source": "src/Data-Aviary-Functional.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "sequence",
          "normalized": "[a-\u003eb]-\u003ea-\u003e[b]",
          "package": "data-aviary",
          "signature": "[r-\u003ea]-\u003er-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "sequenceW",
          "package": "data-aviary",
          "signature": "[(m -\u003e a) -\u003e b] -\u003e (m -\u003e a) -\u003e [b]",
          "source": "src/Data-Aviary-Functional.html#sequenceW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "sequenceW",
          "normalized": "[(a-\u003eb)-\u003ec]-\u003e(a-\u003eb)-\u003e[c]",
          "package": "data-aviary",
          "signature": "[(m-\u003ea)-\u003eb]-\u003e(m-\u003ea)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:sequenceW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "sequence_",
          "package": "data-aviary",
          "signature": "[r -\u003e a] -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#sequence_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "sequence_",
          "normalized": "[a-\u003eb]-\u003ea-\u003e()",
          "package": "data-aviary",
          "signature": "[r-\u003ea]-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "unfoldW",
          "package": "data-aviary",
          "signature": "((m -\u003e b) -\u003e (a, b)) -\u003e (m -\u003e b) -\u003e [a]",
          "source": "src/Data-Aviary-Functional.html#unfoldW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "unfoldW",
          "normalized": "((a-\u003eb)-\u003e(c,b))-\u003e(a-\u003eb)-\u003e[c]",
          "package": "data-aviary",
          "signature": "((m-\u003eb)-\u003e(a,b))-\u003e(m-\u003eb)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:unfoldW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "unless",
          "package": "data-aviary",
          "signature": "Bool -\u003e (r -\u003e ()) -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "unless",
          "normalized": "Bool-\u003e(a-\u003e())-\u003ea-\u003e()",
          "package": "data-aviary",
          "signature": "Bool-\u003e(r-\u003e())-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "when",
          "package": "data-aviary",
          "signature": "Bool -\u003e (r -\u003e ()) -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "when",
          "normalized": "Bool-\u003e(a-\u003e())-\u003ea-\u003e()",
          "package": "data-aviary",
          "signature": "Bool-\u003e(r-\u003e())-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "zipWithM",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e r -\u003e c) -\u003e [a] -\u003e [b] -\u003e r -\u003e [c]",
          "source": "src/Data-Aviary-Functional.html#zipWithM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003ec-\u003e[d]",
          "package": "data-aviary",
          "partial": "With",
          "signature": "(a-\u003eb-\u003er-\u003ec)-\u003e[a]-\u003e[b]-\u003er-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aviary.Functional",
          "name": "zipWithM_",
          "package": "data-aviary",
          "signature": "(a -\u003e b -\u003e r -\u003e c) -\u003e [a] -\u003e [b] -\u003e r -\u003e ()",
          "source": "src/Data-Aviary-Functional.html#zipWithM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aviary Functional",
          "module": "Data.Aviary.Functional",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003ec-\u003e()",
          "package": "data-aviary",
          "partial": "With",
          "signature": "(a-\u003eb-\u003er-\u003ec)-\u003e[a]-\u003e[b]-\u003er-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-aviary/docs/Data-Aviary-Functional.html#v:zipWithM_"
      }
    }
  ]
]