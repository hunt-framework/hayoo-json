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
        "word": "tables"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides tables with multiple indices that support a simple\n API based on the lenses and traversals from the \u003ccode\u003elens\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Table",
          "name": "Table",
          "package": "tables",
          "source": "src/Data-Table.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides tables with multiple indices that support simple API based on the lenses and traversals from the lens package",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Table",
          "package": "tables",
          "partial": "Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used to store a single index.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "AnIndex",
          "package": "tables",
          "source": "src/Data-Table.html#AnIndex",
          "type": "data"
        },
        "index": {
          "description": "This is used to store single index",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "AnIndex",
          "package": "tables",
          "partial": "An Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:AnIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Auto",
          "package": "tables",
          "source": "src/Data-Table.html#Auto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Auto",
          "package": "tables",
          "partial": "Auto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key type for values unique to each row, but that are\n  not \u003ccode\u003e\u003ca\u003ePrimary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Candidate",
          "package": "tables",
          "source": "src/Data-Table.html#Candidate",
          "type": "data"
        },
        "index": {
          "description": "key type for values unique to each row but that are not Primary",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Candidate",
          "package": "tables",
          "partial": "Candidate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCandidateHash\u003c/a\u003e\u003c/code\u003e keys are like \u003ccode\u003e\u003ca\u003eCandidate\u003c/a\u003e\u003c/code\u003e keys but are backed by\n a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e rather than a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. This makes them more performant\n on \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e lookups, but values at \u003ccode\u003e\u003ca\u003eCandidateHash\u003c/a\u003e\u003c/code\u003e keys\n must be instances of \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "CandidateHash",
          "package": "tables",
          "source": "src/Data-Table.html#CandidateHash",
          "type": "data"
        },
        "index": {
          "description": "CandidateHash keys are like Candidate keys but are backed by HashMap rather than Map This makes them more performant on and lookups but values at CandidateHash keys must be instances of Hashable and Eq",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateHash",
          "package": "tables",
          "partial": "Candidate Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:CandidateHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCandidateInt\u003c/a\u003e\u003c/code\u003e keys are like \u003ccode\u003e\u003ca\u003eCandidate\u003c/a\u003e\u003c/code\u003e keys but are backed by\n an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e rather than a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. This makes them more performant,\n but values at \u003ccode\u003e\u003ca\u003eCandidateInt\u003c/a\u003e\u003c/code\u003e keys may only be \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "CandidateInt",
          "package": "tables",
          "source": "src/Data-Table.html#CandidateInt",
          "type": "data"
        },
        "index": {
          "description": "CandidateInt keys are like Candidate keys but are backed by an IntMap rather than Map This makes them more performant but values at CandidateInt keys may only be Int",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateInt",
          "package": "tables",
          "partial": "Candidate Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:CandidateInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Group",
          "package": "tables",
          "source": "src/Data-Table.html#Group",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Group",
          "package": "tables",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key type for inverse keys.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Inverted",
          "package": "tables",
          "source": "src/Data-Table.html#Inverted",
          "type": "data"
        },
        "index": {
          "description": "key type for inverse keys",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Inverted",
          "package": "tables",
          "partial": "Inverted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedHash",
          "package": "tables",
          "source": "src/Data-Table.html#InvertedHash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedHash",
          "package": "tables",
          "partial": "Inverted Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:InvertedHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedInt",
          "package": "tables",
          "source": "src/Data-Table.html#InvertedInt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedInt",
          "package": "tables",
          "partial": "Inverted Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:InvertedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "IsKeyType",
          "package": "tables",
          "source": "src/Data-Table.html#IsKeyType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "IsKeyType",
          "package": "tables",
          "partial": "Is Key Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:IsKeyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue-level key types\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "KeyType",
          "package": "tables",
          "source": "src/Data-Table.html#KeyType",
          "type": "data"
        },
        "index": {
          "description": "Value-level key types",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "KeyType",
          "package": "tables",
          "partial": "Key Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:KeyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key type for the canonical, unique identifier attached to\n  every row. There should only be one \u003ccode\u003e\u003ca\u003ePrimary\u003c/a\u003e\u003c/code\u003e key.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Primary",
          "package": "tables",
          "source": "src/Data-Table.html#Primary",
          "type": "data"
        },
        "index": {
          "description": "The key type for the canonical unique identifier attached to every row There should only be one Primary key",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Primary",
          "package": "tables",
          "partial": "Primary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Primary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key type for supplemental data attached to each row that we\n  still may want to index by. Values need not be unique.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Supplemental",
          "package": "tables",
          "source": "src/Data-Table.html#Supplemental",
          "type": "data"
        },
        "index": {
          "description": "key type for supplemental data attached to each row that we still may want to index by Values need not be unique",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Supplemental",
          "package": "tables",
          "partial": "Supplemental",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Supplemental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSupplementalHash\u003c/a\u003e\u003c/code\u003e keys are like \u003ccode\u003e\u003ca\u003eSupplemental\u003c/a\u003e\u003c/code\u003e keys but are backed by\n a \u003ccode\u003e\u003ca\u003eHashMap\u003c/a\u003e\u003c/code\u003e rather than a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. This makes them more performant\n on \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e lookups, but values at \u003ccode\u003e\u003ca\u003eSupplementalHash\u003c/a\u003e\u003c/code\u003e keys\n must be instances of \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "SupplementalHash",
          "package": "tables",
          "source": "src/Data-Table.html#SupplementalHash",
          "type": "data"
        },
        "index": {
          "description": "SupplementalHash keys are like Supplemental keys but are backed by HashMap rather than Map This makes them more performant on and lookups but values at SupplementalHash keys must be instances of Hashable and Eq",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalHash",
          "package": "tables",
          "partial": "Supplemental Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:SupplementalHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSupplementalInt\u003c/a\u003e\u003c/code\u003e keys are like \u003ccode\u003e\u003ca\u003eSupplemental\u003c/a\u003e\u003c/code\u003e keys but are backed by\n an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e rather than a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. This makes them more performant,\n but values at \u003ccode\u003e\u003ca\u003eSupplementalInt\u003c/a\u003e\u003c/code\u003e keys may only be \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "SupplementalInt",
          "package": "tables",
          "source": "src/Data-Table.html#SupplementalInt",
          "type": "data"
        },
        "index": {
          "description": "SupplementalInt keys are like Supplemental keys but are backed by an IntMap rather than Map This makes them more performant but values at SupplementalInt keys may only be Int",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalInt",
          "package": "tables",
          "partial": "Supplemental Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:SupplementalInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003ePrimary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey\u003c/code\u003e and may have \u003ccode\u003e\u003ca\u003eCandidate\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eSupplemental\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInverted\u003c/a\u003e\u003c/code\u003e keys, plus their variants.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Table",
          "package": "tables",
          "source": "src/Data-Table.html#Table",
          "type": "data"
        },
        "index": {
          "description": "Every Table has Primary key and may have Candidate Supplemental or Inverted keys plus their variants",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Table",
          "package": "tables",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class describes how to index a user-defined data type.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Tabular",
          "package": "tables",
          "source": "src/Data-Table.html#Tabular",
          "type": "class"
        },
        "index": {
          "description": "This class describes how to index user-defined data type",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Tabular",
          "package": "tables",
          "partial": "Tabular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Tabular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "With",
          "package": "tables",
          "source": "src/Data-Table.html#With",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "With",
          "package": "tables",
          "partial": "With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch inverted indices\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "Withal",
          "package": "tables",
          "source": "src/Data-Table.html#Withal",
          "type": "class"
        },
        "index": {
          "description": "Search inverted indices",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Withal",
          "package": "tables",
          "partial": "Withal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#t:Withal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Auto",
          "package": "tables",
          "signature": "Auto !Int a",
          "source": "src/Data-Table.html#Auto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Auto",
          "package": "tables",
          "partial": "Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Candidate",
          "package": "tables",
          "signature": "KeyType Candidate a",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Candidate",
          "package": "tables",
          "partial": "Candidate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Candidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "CandidateHash",
          "package": "tables",
          "signature": "KeyType CandidateHash a",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateHash",
          "package": "tables",
          "partial": "Candidate Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:CandidateHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "CandidateHashMap",
          "package": "tables",
          "signature": "HashMap a t -\u003e AnIndex t CandidateHash a",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateHashMap",
          "normalized": "HashMap a b-\u003eAnIndex b CandidateHash a",
          "package": "tables",
          "partial": "Candidate Hash Map",
          "signature": "HashMap a t-\u003eAnIndex t CandidateHash a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:CandidateHashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "CandidateInt",
          "package": "tables",
          "signature": "KeyType CandidateInt Int",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateInt",
          "package": "tables",
          "partial": "Candidate Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:CandidateInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "CandidateIntMap",
          "package": "tables",
          "signature": "IntMap t -\u003e AnIndex t CandidateInt Int",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateIntMap",
          "normalized": "IntMap a-\u003eAnIndex a CandidateInt Int",
          "package": "tables",
          "partial": "Candidate Int Map",
          "signature": "IntMap t-\u003eAnIndex t CandidateInt Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:CandidateIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "CandidateMap",
          "package": "tables",
          "signature": "Map a t -\u003e AnIndex t Candidate a",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "CandidateMap",
          "normalized": "Map a b-\u003eAnIndex b Candidate a",
          "package": "tables",
          "partial": "Candidate Map",
          "signature": "Map a t-\u003eAnIndex t Candidate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:CandidateMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "EmptyTable",
          "package": "tables",
          "signature": "Table t",
          "source": "src/Data-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "EmptyTable",
          "package": "tables",
          "partial": "Empty Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:EmptyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Inverted",
          "package": "tables",
          "signature": "KeyType Inverted (Set a)",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Inverted",
          "package": "tables",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedHash",
          "package": "tables",
          "signature": "KeyType InvertedHash (HashSet a)",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedHash",
          "package": "tables",
          "partial": "Inverted Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:InvertedHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedHashMap",
          "package": "tables",
          "signature": "HashMap a [t] -\u003e AnIndex t InvertedHash (HashSet a)",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedHashMap",
          "normalized": "HashMap a[b]-\u003eAnIndex b InvertedHash(HashSet a)",
          "package": "tables",
          "partial": "Inverted Hash Map",
          "signature": "HashMap a[t]-\u003eAnIndex t InvertedHash(HashSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:InvertedHashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedInt",
          "package": "tables",
          "signature": "KeyType InvertedInt IntSet",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedInt",
          "package": "tables",
          "partial": "Inverted Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:InvertedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedIntMap",
          "package": "tables",
          "signature": "IntMap [t] -\u003e AnIndex t InvertedInt IntSet",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedIntMap",
          "normalized": "IntMap[a]-\u003eAnIndex a InvertedInt IntSet",
          "package": "tables",
          "partial": "Inverted Int Map",
          "signature": "IntMap[t]-\u003eAnIndex t InvertedInt IntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:InvertedIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "InvertedMap",
          "package": "tables",
          "signature": "Map a [t] -\u003e AnIndex t Inverted (Set a)",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "InvertedMap",
          "normalized": "Map a[b]-\u003eAnIndex b Inverted(Set a)",
          "package": "tables",
          "partial": "Inverted Map",
          "signature": "Map a[t]-\u003eAnIndex t Inverted(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:InvertedMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Primary",
          "package": "tables",
          "signature": "KeyType Primary a",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Primary",
          "package": "tables",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Primary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "PrimaryMap",
          "package": "tables",
          "signature": "Map (PKT t) t -\u003e AnIndex t Primary a",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "PrimaryMap",
          "normalized": "Map(PKT a)a-\u003eAnIndex a Primary b",
          "package": "tables",
          "partial": "Primary Map",
          "signature": "Map(PKT t)t-\u003eAnIndex t Primary a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:PrimaryMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Supplemental",
          "package": "tables",
          "signature": "KeyType Supplemental a",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Supplemental",
          "package": "tables",
          "partial": "Supplemental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Supplemental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "SupplementalHash",
          "package": "tables",
          "signature": "KeyType SupplementalHash a",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalHash",
          "package": "tables",
          "partial": "Supplemental Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:SupplementalHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "SupplementalHashMap",
          "package": "tables",
          "signature": "HashMap a [t] -\u003e AnIndex t SupplementalHash a",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalHashMap",
          "normalized": "HashMap a[b]-\u003eAnIndex b SupplementalHash a",
          "package": "tables",
          "partial": "Supplemental Hash Map",
          "signature": "HashMap a[t]-\u003eAnIndex t SupplementalHash a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:SupplementalHashMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "SupplementalInt",
          "package": "tables",
          "signature": "KeyType SupplementalInt Int",
          "source": "src/Data-Table.html#KeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalInt",
          "package": "tables",
          "partial": "Supplemental Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:SupplementalInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "SupplementalIntMap",
          "package": "tables",
          "signature": "IntMap [t] -\u003e AnIndex t SupplementalInt Int",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalIntMap",
          "normalized": "IntMap[a]-\u003eAnIndex a SupplementalInt Int",
          "package": "tables",
          "partial": "Supplemental Int Map",
          "signature": "IntMap[t]-\u003eAnIndex t SupplementalInt Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:SupplementalIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "SupplementalMap",
          "package": "tables",
          "signature": "Map a [t] -\u003e AnIndex t Supplemental a",
          "source": "src/Data-Table.html#AnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "SupplementalMap",
          "normalized": "Map a[b]-\u003eAnIndex b Supplemental a",
          "package": "tables",
          "partial": "Supplemental Map",
          "signature": "Map a[t]-\u003eAnIndex t Supplemental a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:SupplementalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "Table",
          "package": "tables",
          "signature": "Tab t (AnIndex t) -\u003e Table t",
          "source": "src/Data-Table.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "Table",
          "normalized": "Tab a(AnIndex a)-\u003eTable a",
          "package": "tables",
          "partial": "Table",
          "signature": "Tab t(AnIndex t)-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a row with an auto-incremented key\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "auto",
          "package": "tables",
          "signature": "a -\u003e Auto a",
          "source": "src/Data-Table.html#auto",
          "type": "function"
        },
        "index": {
          "description": "Generate row with an auto-incremented key",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "auto",
          "normalized": "a-\u003eAuto a",
          "package": "tables",
          "signature": "a-\u003eAuto a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lets you define \u003ccode\u003e\u003ca\u003eautoKey\u003c/a\u003e\u003c/code\u003e to increment to 1 greater than the existing maximum key in a table.\n\u003c/p\u003e\u003cp\u003eIn order to support this you need a numeric primary key, and the ability to update the primary key in a record, indicated by a\n lens to the field.\n\u003c/p\u003e\u003cp\u003eTo enable auto-increment for a table with primary key \u003ccode\u003eprimaryKeyField\u003c/code\u003e, set:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eautoTab\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eautoIncrement\u003c/a\u003e\u003c/code\u003e primaryKeyField\u003c/pre\u003e",
          "module": "Data.Table",
          "name": "autoIncrement",
          "package": "tables",
          "signature": "ALens' t (PKT t) -\u003e t -\u003e Maybe (Tab t (AnIndex t) -\u003e t)",
          "source": "src/Data-Table.html#autoIncrement",
          "type": "function"
        },
        "index": {
          "description": "This lets you define autoKey to increment to greater than the existing maximum key in table In order to support this you need numeric primary key and the ability to update the primary key in record indicated by lens to the field To enable auto-increment for table with primary key primaryKeyField set autoTab autoIncrement primaryKeyField",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "autoIncrement",
          "normalized": "ALens' a(PKT a)-\u003ea-\u003eMaybe(Tab a(AnIndex a)-\u003ea)",
          "package": "tables",
          "partial": "Increment",
          "signature": "ALens' t(PKT t)-\u003et-\u003eMaybe(Tab t(AnIndex t)-\u003et)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:autoIncrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "autoKey",
          "package": "tables",
          "signature": "Lens' (Auto a) Int",
          "source": "src/Data-Table.html#autoKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "autoKey",
          "package": "tables",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:autoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust a record using meta-information about the table allowing for auto-increments.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "autoTab",
          "package": "tables",
          "signature": "t -\u003e Maybe (Tab t (AnIndex t) -\u003e t)",
          "source": "src/Data-Table.html#autoTab",
          "type": "method"
        },
        "index": {
          "description": "Adjust record using meta-information about the table allowing for auto-increments",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "autoTab",
          "normalized": "a-\u003eMaybe(Tab a(AnIndex a)-\u003ea)",
          "package": "tables",
          "partial": "Tab",
          "signature": "t-\u003eMaybe(Tab t(AnIndex t)-\u003et)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:autoTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a row count.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "count",
          "package": "tables",
          "signature": "Table t -\u003e Int",
          "source": "src/Data-Table.html#count",
          "type": "function"
        },
        "index": {
          "description": "Retrieve row count",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "count",
          "normalized": "Table a-\u003eInt",
          "package": "tables",
          "signature": "Table t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete this row from the database. This will remove any row that collides with the specified\n row on any primary or candidate key.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "delete",
          "package": "tables",
          "signature": "t -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete this row from the database This will remove any row that collides with the specified row on any primary or candidate key",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "delete",
          "normalized": "a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "signature": "t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete selected rows from a table\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edeleteWith\u003c/a\u003e\u003c/code\u003e p cmp a t &#8801; \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e p cmp a) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e t\u003c/pre\u003e",
          "module": "Data.Table",
          "name": "deleteWith",
          "package": "tables",
          "signature": "x -\u003e x -\u003e Bool) -\u003e a -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#deleteWith",
          "type": "method"
        },
        "index": {
          "description": "Delete selected rows from table deleteWith cmp set with cmp empty",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "deleteWith",
          "normalized": "a-\u003ea-\u003eBool)-\u003eb-\u003eTable c-\u003eTable c",
          "package": "tables",
          "partial": "With",
          "signature": "x-\u003ex-\u003eBool)-\u003ea-\u003eTable t-\u003eTable t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:deleteWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "deleteWithAll",
          "package": "tables",
          "signature": "q -\u003e s -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#deleteWithAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "deleteWithAll",
          "normalized": "a-\u003eb-\u003eTable c-\u003eTable c",
          "package": "tables",
          "partial": "With All",
          "signature": "q-\u003es-\u003eTable t-\u003eTable t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:deleteWithAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "deleteWithAny",
          "package": "tables",
          "signature": "q -\u003e s -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#deleteWithAny",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "deleteWithAny",
          "normalized": "a-\u003eb-\u003eTable c-\u003eTable c",
          "package": "tables",
          "partial": "With Any",
          "signature": "q-\u003es-\u003eTable t-\u003eTable t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:deleteWithAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the elements of the first table that do not share a key with an element of the second table\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "difference",
          "package": "tables",
          "signature": "Table t1 -\u003e Table t2 -\u003e Table t1",
          "source": "src/Data-Table.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Return the elements of the first table that do not share key with an element of the second table",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "difference",
          "normalized": "Table a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "signature": "Table t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an empty relation\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "empty",
          "package": "tables",
          "signature": "Table t",
          "source": "src/Data-Table.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty relation",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "empty",
          "package": "tables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "fetch",
          "package": "tables",
          "signature": "Key k t a -\u003e t -\u003e a",
          "source": "src/Data-Table.html#fetch",
          "type": "method"
        },
        "index": {
          "description": "Extract the value of Key",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "fetch",
          "normalized": "Key a b c-\u003eb-\u003ec",
          "package": "tables",
          "signature": "Key k t a-\u003et-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop over each index in a \u003ccode\u003e\u003ca\u003eTab\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "forTab",
          "package": "tables",
          "signature": "Key k t a -\u003e i k a -\u003e h (j k a)) -\u003e h (Tab t j)",
          "source": "src/Data-Table.html#forTab",
          "type": "method"
        },
        "index": {
          "description": "Loop over each index in Tab",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "forTab",
          "normalized": "Key a b c-\u003ed a c-\u003ee(f a c))-\u003ee(Tab b f)",
          "package": "tables",
          "partial": "Tab",
          "signature": "Key k t a-\u003ei k a-\u003eh(j k a))-\u003eh(Tab t j)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:forTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild up a table from a list\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "fromList",
          "package": "tables",
          "signature": "[t] -\u003e Table t",
          "source": "src/Data-Table.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build up table from list",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "fromList",
          "normalized": "[a]-\u003eTable a",
          "package": "tables",
          "partial": "List",
          "signature": "[t]-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup by a given key or arbitrary function.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "group",
          "package": "tables",
          "signature": "q -\u003e IndexedLensLike' i f (Table t) (Table t)",
          "source": "src/Data-Table.html#group",
          "type": "method"
        },
        "index": {
          "description": "Group by given key or arbitrary function",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "group",
          "normalized": "a-\u003eIndexedLensLike' b c(Table d)(Table d)",
          "package": "tables",
          "signature": "q-\u003eIndexedLensLike' i f(Table t)(Table t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a row into a relation, removing collisions.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "insert",
          "package": "tables",
          "signature": "t -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert row into relation removing collisions",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "insert",
          "normalized": "a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "signature": "t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a row into a relation, removing collisions.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "insert'",
          "package": "tables",
          "signature": "t -\u003e Table t -\u003e (t, Table t)",
          "source": "src/Data-Table.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "Insert row into relation removing collisions",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "insert'",
          "normalized": "a-\u003eTable a-\u003e(a,Table a)",
          "package": "tables",
          "signature": "t-\u003eTable t-\u003e(t,Table t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the elements of the first table that share a key with an element of the second table\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "intersection",
          "package": "tables",
          "signature": "Table t1 -\u003e Table t2 -\u003e Table t1",
          "source": "src/Data-Table.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Return the elements of the first table that share key with an element of the second table",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "intersection",
          "normalized": "Table a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "signature": "Table t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an index in a \u003ccode\u003e\u003ca\u003eTab\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "ixTab",
          "package": "tables",
          "signature": "Tab t i -\u003e Key k t a -\u003e i k a",
          "source": "src/Data-Table.html#ixTab",
          "type": "method"
        },
        "index": {
          "description": "Lookup an index in Tab",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "ixTab",
          "normalized": "Tab a b-\u003eKey c a d-\u003eb c d",
          "package": "tables",
          "partial": "Tab",
          "signature": "Tab t i-\u003eKey k t a-\u003ei k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:ixTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "keyType",
          "package": "tables",
          "signature": "Key k t a -\u003e KeyType k a",
          "source": "src/Data-Table.html#keyType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "keyType",
          "normalized": "Key a b c-\u003eKeyType a c",
          "package": "tables",
          "partial": "Type",
          "signature": "Key k t a-\u003eKeyType k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:keyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Tabular instance for a data type. Currently, this only\n works for types which have no type variables, and won't generate autoTab.\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo { fooId :: Int, fooBar :: String, fooBaz :: Double }\n\nmakeTabular 'fooId [(''Candidate, 'fooBaz), (''Supplemental, 'fooBar)]\n\u003c/pre\u003e",
          "module": "Data.Table",
          "name": "makeTabular",
          "package": "tables",
          "signature": "Name -\u003e [(Name, Name)] -\u003e Q [Dec]",
          "source": "src/Data-Table.html#makeTabular",
          "type": "function"
        },
        "index": {
          "description": "Generate Tabular instance for data type Currently this only works for types which have no type variables and won generate autoTab data Foo Foo fooId Int fooBar String fooBaz Double makeTabular fooId Candidate fooBaz Supplemental fooBar",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "makeTabular",
          "normalized": "Name-\u003e[(Name,Name)]-\u003eQ[Dec]",
          "package": "tables",
          "partial": "Tabular",
          "signature": "Name-\u003e[(Name,Name)]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:makeTabular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eTab\u003c/a\u003e\u003c/code\u003e given a function from key to index.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "mkTab",
          "package": "tables",
          "signature": "Key k t a -\u003e h (i k a)) -\u003e h (Tab t i)",
          "source": "src/Data-Table.html#mkTab",
          "type": "method"
        },
        "index": {
          "description": "Construct Tab given function from key to index",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "mkTab",
          "normalized": "Key a b c-\u003ed(e a c))-\u003ed(Tab b e)",
          "package": "tables",
          "partial": "Tab",
          "signature": "Key k t a-\u003eh(i k a))-\u003eh(Tab t i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:mkTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if the relation is empty\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "null",
          "package": "tables",
          "signature": "Table t -\u003e Bool",
          "source": "src/Data-Table.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check to see if the relation is empty",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "null",
          "normalized": "Table a-\u003eBool",
          "package": "tables",
          "signature": "Table t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... and so if you find one, it had better be that one!\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "primarily",
          "package": "tables",
          "signature": "r) -\u003e r",
          "source": "src/Data-Table.html#primarily",
          "type": "method"
        },
        "index": {
          "description": "and so if you find one it had better be that one",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "primarily",
          "normalized": "a)-\u003ea",
          "package": "tables",
          "signature": "r)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:primarily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e has one \u003ccode\u003e\u003ca\u003ePrimary\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "primary",
          "package": "tables",
          "signature": "Key Primary t (PKT t)",
          "source": "src/Data-Table.html#primary",
          "type": "method"
        },
        "index": {
          "description": "Every Table has one Primary Key",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "primary",
          "package": "tables",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:primary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse all of the rows in a table, potentially changing table types completely.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "rows",
          "package": "tables",
          "signature": "IndexedTraversal (PKT s) (Table s) (Table t) s t",
          "source": "src/Data-Table.html#rows",
          "type": "function"
        },
        "index": {
          "description": "Traverse all of the rows in table potentially changing table types completely",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "rows",
          "package": "tables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a relation with a single row\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "singleton",
          "package": "tables",
          "signature": "t -\u003e Table t",
          "source": "src/Data-Table.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct relation with single row",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "singleton",
          "normalized": "a-\u003eTable a",
          "package": "tables",
          "signature": "t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to and from a \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe real isomorphism laws hold if the original list makes no use of the auto-increment\n functionality of the table, has no duplicates and is sorted according to the primary key.\n\u003c/p\u003e\u003cp\u003eHowever,\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etable\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003ealways holds.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "table",
          "package": "tables",
          "signature": "Iso' [t] (Table t)",
          "source": "src/Data-Table.html#table",
          "type": "function"
        },
        "index": {
          "description": "Convert list to and from Table The real isomorphism laws hold if the original list makes no use of the auto-increment functionality of the table has no duplicates and is sorted according to the primary key However from table table id always holds",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "table",
          "normalized": "Iso'[a](Table a)",
          "package": "tables",
          "signature": "Iso'[t](Table t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased union of the two tables\n\u003c/p\u003e\u003cp\u003eThis is a synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "union",
          "package": "tables",
          "signature": "Table t -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#union",
          "type": "function"
        },
        "index": {
          "description": "Left-biased union of the two tables This is synonym for mappend",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "union",
          "normalized": "Table a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "signature": "Table t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild up a table from a list, without checking for collisions\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "unsafeFromList",
          "package": "tables",
          "signature": "[t] -\u003e Table t",
          "source": "src/Data-Table.html#unsafeFromList",
          "type": "function"
        },
        "index": {
          "description": "Build up table from list without checking for collisions",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "unsafeFromList",
          "normalized": "[a]-\u003eTable a",
          "package": "tables",
          "partial": "From List",
          "signature": "[t]-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:unsafeFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a row into a relation, ignoring collisions.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "unsafeInsert",
          "package": "tables",
          "signature": "t -\u003e Table t -\u003e Table t",
          "source": "src/Data-Table.html#unsafeInsert",
          "type": "function"
        },
        "index": {
          "description": "Insert row into relation ignoring collisions",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "unsafeInsert",
          "normalized": "a-\u003eTable a-\u003eTable a",
          "package": "tables",
          "partial": "Insert",
          "signature": "t-\u003eTable t-\u003eTable t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:unsafeInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a smaller, updateable subset of the rows of a table using an index or an arbitrary function.\n\u003c/p\u003e",
          "module": "Data.Table",
          "name": "with",
          "package": "tables",
          "signature": "x -\u003e x -\u003e Bool) -\u003e a -\u003e Lens' (Table t) (Table t)",
          "source": "src/Data-Table.html#with",
          "type": "method"
        },
        "index": {
          "description": "Select smaller updateable subset of the rows of table using an index or an arbitrary function",
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "with",
          "normalized": "a-\u003ea-\u003eBool)-\u003eb-\u003eLens'(Table c)(Table c)",
          "package": "tables",
          "signature": "x-\u003ex-\u003eBool)-\u003ea-\u003eLens'(Table t)(Table t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "withAll",
          "package": "tables",
          "signature": "q -\u003e s -\u003e Lens' (Table t) (Table t)",
          "source": "src/Data-Table.html#withAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "withAll",
          "normalized": "a-\u003eb-\u003eLens'(Table c)(Table c)",
          "package": "tables",
          "partial": "All",
          "signature": "q-\u003es-\u003eLens'(Table t)(Table t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:withAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Table",
          "name": "withAny",
          "package": "tables",
          "signature": "q -\u003e s -\u003e Lens' (Table t) (Table t)",
          "source": "src/Data-Table.html#withAny",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Table",
          "module": "Data.Table",
          "name": "withAny",
          "normalized": "a-\u003eb-\u003eLens'(Table c)(Table c)",
          "package": "tables",
          "partial": "Any",
          "signature": "q-\u003es-\u003eLens'(Table t)(Table t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tables/docs/Data-Table.html#v:withAny"
      }
    }
  ]
]