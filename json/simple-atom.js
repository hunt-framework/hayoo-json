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
        "word": "simple-atom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atom.Simple",
          "name": "Simple",
          "package": "simple-atom",
          "source": "src/Data-Atom-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Atom Simple",
          "module": "Data.Atom.Simple",
          "name": "Simple",
          "package": "simple-atom",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e.  This is essentially a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, but with different\n performance characteristics:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eO(n)\u003c/code\u003e creation time (using \u003ccode\u003einsert\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eO(1)\u003c/code\u003e equality comparison.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eO(1)\u003c/code\u003e comparison (in practice).  The result of \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e is\n    independent of evaluation order.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is currently implemented as follows.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each symbol contains a unique integer, which allows \u003ccode\u003eO(1)\u003c/code\u003e\n    comparison.\n\u003c/li\u003e\u003cli\u003e Each symbol contains an infinite chain of hashes, these are used\n    for comparison.  In practice, it is very rare that more than the\n    first of those hashes is ever evaluated.  The first hash is\n    cached, so that most comparisons will not need any indirections.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the symbol.  Use \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e to return\n    it.  At any time, there will be only one symbol of a given name\n    in memory.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Atom.Simple",
          "name": "Symbol",
          "package": "simple-atom",
          "source": "src/Data-Atom-Simple.html#Symbol",
          "type": "data"
        },
        "index": {
          "description": "Symbol This is essentially String but with different performance characteristics creation time using insert equality comparison comparison in practice The result of compare is independent of evaluation order It is currently implemented as follows Each symbol contains unique integer which allows comparison Each symbol contains an infinite chain of hashes these are used for comparison In practice it is very rare that more than the first of those hashes is ever evaluated The first hash is cached so that most comparisons will not need any indirections The String representation of the symbol Use show to return it At any time there will be only one symbol of given name in memory",
          "hierarchy": "Data Atom Simple",
          "module": "Data.Atom.Simple",
          "name": "Symbol",
          "package": "simple-atom",
          "partial": "Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-Simple.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, however, that this function contains a space leak.  It has\n internal state (the symbol table) but is referentially transparent.\n Unfortunately, there is no way to delete items from the symbol\n table.\n\u003c/p\u003e\u003cp\u003e(This function is, of course, thread-safe.)\n\u003c/p\u003e",
          "module": "Data.Atom.Simple",
          "name": "intern",
          "package": "simple-atom",
          "signature": "String -\u003e Symbol",
          "source": "src/Data-Atom-Simple.html#intern",
          "type": "function"
        },
        "index": {
          "description": "Turn String into Symbol Note however that this function contains space leak It has internal state the symbol table but is referentially transparent Unfortunately there is no way to delete items from the symbol table This function is of course thread-safe",
          "hierarchy": "Data Atom Simple",
          "module": "Data.Atom.Simple",
          "name": "intern",
          "normalized": "String-\u003eSymbol",
          "package": "simple-atom",
          "signature": "String-\u003eSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-Simple.html#v:intern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbols without a central symbol table.\n\u003c/p\u003e\u003cp\u003eSymbols provide the following efficient operations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eO(1)\u003c/em\u003e equality comparison (in practise)\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eO(1)\u003c/em\u003e ordering comparison (in practise)\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eO(n)\u003c/em\u003e creation where \u003cem\u003eN\u003c/em\u003e is the size of the symbol descriptor.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMany implementations often have the additional property that each\nsymbol descriptor only exists once in memory.  This implementation\nslightly relaxes this property:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A symbol descriptor is guaranteed to exists only once in memory\n   if it has been created using the same symbol table.\n   Furthermore, if two symbols created from different symbol tables\n   are compared and their descriptors turn out to be equal, the\n   symbols will share the descriptor after the comparison.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis allows the following additional properties not present in\nconventional implementations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e No space leak.  The symbol table can be discarded at any time.\n\u003c/li\u003e\u003cli\u003e Symbols created using different symbol tables can be compared\n   reliably.\n\u003c/li\u003e\u003cli\u003e No global lock.  (TODO: Well we might need one in the case of\n   hash-collisions, but a lock-free implementation might be\n   possible.)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eInspired by Richard O\u003ccode\u003eKeefe\u003c/code\u003es message to Erlang's eeps mailing list\n\u003ca\u003ehttp://www.erlang.org/cgi-bin/ezmlm-cgi/5/057\u003c/a\u003e, which in turn was\ninspired by the Logix implementation of Flat Concurrent Prolog.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atom.UF",
          "name": "UF",
          "package": "simple-atom",
          "source": "src/Data-Atom-UF.html",
          "type": "module"
        },
        "index": {
          "description": "Symbols without central symbol table Symbols provide the following efficient operations equality comparison in practise ordering comparison in practise creation where is the size of the symbol descriptor Many implementations often have the additional property that each symbol descriptor only exists once in memory This implementation slightly relaxes this property symbol descriptor is guaranteed to exists only once in memory if it has been created using the same symbol table Furthermore if two symbols created from different symbol tables are compared and their descriptors turn out to be equal the symbols will share the descriptor after the comparison This allows the following additional properties not present in conventional implementations No space leak The symbol table can be discarded at any time Symbols created using different symbol tables can be compared reliably No global lock TODO Well we might need one in the case of hash-collisions but lock-free implementation might be possible Inspired by Richard Keefe message to Erlang eeps mailing list http www.erlang.org cgi-bin ezmlm-cgi which in turn was inspired by the Logix implementation of Flat Concurrent Prolog",
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "UF",
          "package": "simple-atom",
          "partial": "UF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atom.UF",
          "name": "SymTab",
          "package": "simple-atom",
          "source": "src/Data-Atom-UF.html#SymTab",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "SymTab",
          "package": "simple-atom",
          "partial": "Sym Tab",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#t:SymTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol.\n\u003c/p\u003e\u003cp\u003eNote that the ordering on \u003ccode\u003ea\u003c/code\u003e is \u003cem\u003enot\u003c/em\u003e preserved on \u003ccode\u003eSymbol a\u003c/code\u003e.\n Symbols are ordered by their hashes, and only if the hashes are\n equal will the ordering on \u003ccode\u003ea\u003c/code\u003e be used.  We have:\n\u003c/p\u003e\u003cpre\u003e\n  x == y ==\u003e intern x == intern y\n\nlet sx = intern x\n      sy = intern y\n  in\n    (sx \u003c sy) == ((symbolHash sy \u003c symbolHash sx) ||\n                  symbolHash sy == symbolHash sx && x \u003c y)\n\u003c/pre\u003e",
          "module": "Data.Atom.UF",
          "name": "Symbol",
          "package": "simple-atom",
          "source": "src/Data-Atom-UF.html#Symbol",
          "type": "data"
        },
        "index": {
          "description": "symbol Note that the ordering on is not preserved on Symbol Symbols are ordered by their hashes and only if the hashes are equal will the ordering on be used We have intern intern let sx intern sy intern in sx sy symbolHash sy symbolHash sx symbolHash sy symbolHash sx",
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "Symbol",
          "package": "simple-atom",
          "partial": "Symbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atom.UF",
          "name": "insertSymbol",
          "package": "simple-atom",
          "signature": "a -\u003e Symbol a -\u003e s a -\u003e s a",
          "source": "src/Data-Atom-UF.html#insertSymbol",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "insertSymbol",
          "normalized": "a-\u003eSymbol a-\u003eb a-\u003eb a",
          "package": "simple-atom",
          "partial": "Symbol",
          "signature": "a-\u003eSymbol a-\u003es a-\u003es a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#v:insertSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new local symbol.  For best performance use\n \u003ccode\u003e\u003ca\u003einternInto\u003c/a\u003e\u003c/code\u003e together with a symbol table / map.\n\u003c/p\u003e",
          "module": "Data.Atom.UF",
          "name": "intern",
          "package": "simple-atom",
          "signature": "(a -\u003e Word64) -\u003e a -\u003e Symbol a",
          "source": "src/Data-Atom-UF.html#intern",
          "type": "function"
        },
        "index": {
          "description": "Create new local symbol For best performance use internInto together with symbol table map",
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "intern",
          "normalized": "(a-\u003eWord)-\u003ea-\u003eSymbol a",
          "package": "simple-atom",
          "signature": "(a-\u003eWord)-\u003ea-\u003eSymbol a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#v:intern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a symbol into an existing table.\n\u003c/p\u003e",
          "module": "Data.Atom.UF",
          "name": "internInto",
          "package": "simple-atom",
          "signature": "(a -\u003e Word64) -\u003e s a -\u003e a -\u003e (s a, Symbol a)",
          "source": "src/Data-Atom-UF.html#internInto",
          "type": "function"
        },
        "index": {
          "description": "Insert symbol into an existing table",
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "internInto",
          "normalized": "(a-\u003eWord)-\u003eb a-\u003ea-\u003e(b a,Symbol a)",
          "package": "simple-atom",
          "partial": "Into",
          "signature": "(a-\u003eWord)-\u003es a-\u003ea-\u003e(s a,Symbol a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#v:internInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atom.UF",
          "name": "lookupSymbol",
          "package": "simple-atom",
          "signature": "s a -\u003e a -\u003e Maybe (Symbol a)",
          "source": "src/Data-Atom-UF.html#lookupSymbol",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "lookupSymbol",
          "normalized": "a b-\u003eb-\u003eMaybe(Symbol b)",
          "package": "simple-atom",
          "partial": "Symbol",
          "signature": "s a-\u003ea-\u003eMaybe(Symbol a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#v:lookupSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the hash of the symbol.\n\u003c/p\u003e",
          "module": "Data.Atom.UF",
          "name": "symbolHash",
          "package": "simple-atom",
          "signature": "Symbol a -\u003e Word64",
          "source": "src/Data-Atom-UF.html#symbolHash",
          "type": "function"
        },
        "index": {
          "description": "Returns the hash of the symbol",
          "hierarchy": "Data Atom UF",
          "module": "Data.Atom.UF",
          "name": "symbolHash",
          "normalized": "Symbol a-\u003eWord",
          "package": "simple-atom",
          "partial": "Hash",
          "signature": "Symbol a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-atom/docs/Data-Atom-UF.html#v:symbolHash"
      }
    }
  ]
]