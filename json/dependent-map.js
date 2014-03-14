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
        "word": "dependent-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "Map",
          "package": "dependent-map",
          "source": "src/Data-Dependent-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "Map",
          "package": "dependent-map",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependent maps: f is a GADT-like thing with a facility for \n rediscovering its type parameter, elements of which function as identifiers\n tagged with the type of the thing they identify.  Real GADTs are one\n useful instantiation of \u003ccode\u003ef\u003c/code\u003e, as are \u003ccode\u003eTag\u003c/code\u003es from \u003ca\u003eData.Dependent.Tag\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSemantically, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to a set of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDSum\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e where no two\n elements have the same tag.\n\u003c/p\u003e\u003cp\u003eMore informally, \u003ccode\u003e\u003ca\u003eDMap\u003c/a\u003e\u003c/code\u003e is to dependent products as \u003ccode\u003eM.Map\u003c/code\u003e is to \u003ccode\u003e(-\u003e)\u003c/code\u003e.\n Thus it could also be thought of as a partial (in the sense of \"partial\n function\") dependent product.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "DMap",
          "package": "dependent-map",
          "source": "src/Data-Dependent-Map-Internal.html#DMap",
          "type": "data"
        },
        "index": {
          "description": "Dependent maps is GADT-like thing with facility for rediscovering its type parameter elements of which function as identifiers tagged with the type of the thing they identify Real GADTs are one useful instantiation of as are Tag from Data.Dependent.Tag Semantically DMap is equivalent to set of DSum where no two elements have the same tag More informally DMap is to dependent products as M.Map is to Thus it could also be thought of as partial in the sense of partial function dependent product",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "DMap",
          "package": "dependent-map",
          "partial": "DMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#t:DMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic dependent sum type; the first component is a tag that specifies \n the type of the second;  for example, think of a GADT such as:\n\u003c/p\u003e\u003cpre\u003e data Tag a where\n    AString :: Tag String\n    AnInt   :: Tag Int\n\u003c/pre\u003e\u003cp\u003eThen, we have the following valid expressions of type \u003ccode\u003eDSum Tag\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e AString :=\u003e \"hello!\"\n AnInt   :=\u003e 42\n\u003c/pre\u003e\u003cp\u003eAnd we can write functions that consume \u003ccode\u003eDSum Tag\u003c/code\u003e values by matching, \n such as:\n\u003c/p\u003e\u003cpre\u003e toString :: DSum Tag -\u003e String\n toString (AString :=\u003e str) = str\n toString (AnInt   :=\u003e int) = show int\n\u003c/pre\u003e\u003cp\u003eBy analogy to the (key =\u003e value) construction for dictionary entries in \n many dynamic languages, we use (key :=\u003e value) as the constructor for \n dependent sums.  The :=\u003e operator has very low precedence and binds to \n the right, so if the \u003ccode\u003eTag\u003c/code\u003e GADT is extended with an additional constructor\n \u003ccode\u003eRec :: Tag (DSum Tag)\u003c/code\u003e, then \u003ccode\u003eRec :=\u003e AnInt :=\u003e 3 + 4\u003c/code\u003e is parsed as\n would be expected (\u003ccode\u003eRec :=\u003e (AnInt :=\u003e (3 + 4))\u003c/code\u003e) and has type \u003ccode\u003eDSum Tag\u003c/code\u003e.\n Its precedence is just above that of \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e, so \u003ccode\u003efoo bar $ AString :=\u003e \u003ca\u003eeep\u003c/a\u003e\u003c/code\u003e\n is equivalent to \u003ccode\u003efoo bar (AString :=\u003e \u003ca\u003eeep\u003c/a\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "DSum",
          "package": "dependent-map",
          "type": "data"
        },
        "index": {
          "description": "basic dependent sum type the first component is tag that specifies the type of the second for example think of GADT such as data Tag where AString Tag String AnInt Tag Int Then we have the following valid expressions of type DSum Tag AString hello AnInt And we can write functions that consume DSum Tag values by matching such as toString DSum Tag String toString AString str str toString AnInt int show int By analogy to the key value construction for dictionary entries in many dynamic languages we use key value as the constructor for dependent sums The operator has very low precedence and binds to the right so if the Tag GADT is extended with an additional constructor Rec Tag DSum Tag then Rec AnInt is parsed as would be expected Rec AnInt and has type DSum Tag Its precedence is just above that of so foo bar AString eep is equivalent to foo bar AString eep",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "DSum",
          "package": "dependent-map",
          "partial": "DSum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#t:DSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for orderable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (GEQ).\n |Type class for comparable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (\u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "GCompare",
          "package": "dependent-map",
          "type": "class"
        },
        "index": {
          "description": "Type class for orderable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ Type class for comparable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "GCompare",
          "package": "dependent-map",
          "partial": "GCompare",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#t:GCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for the result of comparing GADT constructors; the type parameters\n of the GADT values being compared are included so that in the case where \n they are equal their parameter types can be unified.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "GOrdering",
          "package": "dependent-map",
          "type": "data"
        },
        "index": {
          "description": "type for the result of comparing GADT constructors the type parameters of the GADT values being compared are included so that in the case where they are equal their parameter types can be unified",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "GOrdering",
          "package": "dependent-map",
          "partial": "GOrdering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#t:GOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e is just a wrapper for the true key type \u003ccode\u003ef\u003c/code\u003e which hides\n the associated value type and presents the key's GADT-level \u003ccode\u003e\u003ca\u003eGCompare\u003c/a\u003e\u003c/code\u003e \n instance as a vanilla \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance so it can be used in cases where we\n don't care about the associated value.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "Key",
          "package": "dependent-map",
          "source": "src/Data-Dependent-Map-Internal.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Key is just wrapper for the true key type which hides the associated value type and presents the key GADT-level GCompare instance as vanilla Ord instance so it can be used in cases where we don care about the associated value",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "Key",
          "package": "dependent-map",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e\u003cpre\u003e fromList [(5,'a'), (3,'b')] ! 1    Error: element not in the map\n fromList [(5,'a'), (3,'b')] ! 5 == 'a'\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "(!)",
          "package": "dependent-map",
          "signature": "DMap k -\u003e k v -\u003e v",
          "source": "src/Data-Dependent-Map.html#%21",
          "type": "function"
        },
        "index": {
          "description": "log Find the value at key Calls error when the element can not be found fromList Error element not in the map fromList",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "(!) !",
          "normalized": "DMap a-\u003ea b-\u003eb",
          "package": "dependent-map",
          "signature": "DMap k-\u003ek v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "(\\\\)",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Same as difference",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "(\\\\) \\\\",
          "normalized": "DMap a-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "DMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": ":=\u003e",
          "package": "dependent-map",
          "signature": "(tag a) -\u003e a -\u003e DSum tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": ":=\u003e",
          "normalized": "(a b)-\u003eb-\u003eDSum a",
          "package": "dependent-map",
          "signature": "(tag a)-\u003ea-\u003eDSum tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "GEQ",
          "package": "dependent-map",
          "signature": "GOrdering t t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "GEQ",
          "package": "dependent-map",
          "partial": "GEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:GEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "GGT",
          "package": "dependent-map",
          "signature": "GOrdering a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "GGT",
          "package": "dependent-map",
          "partial": "GGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:GGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "GLT",
          "package": "dependent-map",
          "signature": "GOrdering a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "GLT",
          "package": "dependent-map",
          "partial": "GLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:GLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "Key",
          "package": "dependent-map",
          "signature": "(f a) -\u003e Key f",
          "source": "src/Data-Dependent-Map-Internal.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "Key",
          "normalized": "(a b)-\u003eKey a",
          "package": "dependent-map",
          "partial": "Key",
          "signature": "(f a)-\u003eKey f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update a value at a specific key with the result of the provided function.\n When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "adjust",
          "package": "dependent-map",
          "signature": "(v -\u003e v) -\u003e k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eDMap b-\u003eDMap b",
          "package": "dependent-map",
          "signature": "(v-\u003ev)-\u003ek v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "adjustWithKey",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e v) -\u003e k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "adjustWithKey",
          "normalized": "(a b-\u003eb-\u003eb)-\u003ea b-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(k v-\u003ev-\u003ev)-\u003ek v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003eMap\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "alter",
          "package": "dependent-map",
          "signature": "(Maybe v -\u003e Maybe v) -\u003e k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb a-\u003eDMap b-\u003eDMap b",
          "package": "dependent-map",
          "signature": "(Maybe v-\u003eMaybe v)-\u003ek v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all key/value pairs in the map in ascending key order.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "assocs",
          "package": "dependent-map",
          "signature": "DMap k -\u003e [DSum k]",
          "source": "src/Data-Dependent-Map.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the map in ascending key order",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "assocs",
          "normalized": "DMap a-\u003e[DSum a]",
          "package": "dependent-map",
          "signature": "DMap k-\u003e[DSum k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "delete",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key and its value from the map When the key is not member of the map the original map is returned",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "delete",
          "normalized": "a b-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "k v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the element at \u003cem\u003eindex\u003c/em\u003e.\n Defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003edeleteAt\u003c/a\u003e\u003c/code\u003e i map = \u003ccode\u003e\u003ca\u003eupdateAt\u003c/a\u003e\u003c/code\u003e (k x -\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) i map\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "deleteAt",
          "package": "dependent-map",
          "signature": "Int -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#deleteAt",
          "type": "function"
        },
        "index": {
          "description": "log Delete the element at index Defined as deleteAt map updateAt Nothing map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "deleteAt",
          "normalized": "Int-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "At",
          "signature": "Int-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:deleteAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the maximal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMax (fromList [(5,\"a\"), (3,\"b\"), (10,\"c\")]) == ((10,\"c\"), fromList [(3,\"b\"), (5,\"a\")])\n deleteFindMax empty                                      Error: can not return the maximal element of an empty map\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "deleteFindMax",
          "package": "dependent-map",
          "signature": "DMap k -\u003e (DSum k, DMap k)",
          "source": "src/Data-Dependent-Map-Internal.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the maximal element deleteFindMax fromList fromList deleteFindMax empty Error can not return the maximal element of an empty map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "deleteFindMax",
          "normalized": "DMap a-\u003e(DSum a,DMap a)",
          "package": "dependent-map",
          "partial": "Find Max",
          "signature": "DMap k-\u003e(DSum k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and find the minimal element.\n\u003c/p\u003e\u003cpre\u003e deleteFindMin (fromList [(5,\"a\"), (3,\"b\"), (10,\"c\")]) == ((3,\"b\"), fromList[(5,\"a\"), (10,\"c\")]) \n deleteFindMin                                            Error: can not return the minimal element of an empty map\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "deleteFindMin",
          "package": "dependent-map",
          "signature": "DMap k -\u003e (DSum k, DMap k)",
          "source": "src/Data-Dependent-Map-Internal.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the minimal element deleteFindMin fromList fromList deleteFindMin Error can not return the minimal element of an empty map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "deleteFindMin",
          "normalized": "DMap a-\u003e(DSum a,DMap a)",
          "package": "dependent-map",
          "partial": "Find Min",
          "signature": "DMap k-\u003e(DSum k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the maximal key. Returns an empty map if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "deleteMax",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete the maximal key Returns an empty map if the map is empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "deleteMax",
          "normalized": "DMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "Max",
          "signature": "DMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimal key. Returns an empty map if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "deleteMin",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimal key Returns an empty map if the map is empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "deleteMin",
          "normalized": "DMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "Min",
          "signature": "DMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two maps. \n Return elements of the first map not existing in the second map.\n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "difference",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Difference of two maps Return elements of the first map not existing in the second map The implementation uses an efficient hedge algorithm comparable with hedge-union",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "difference",
          "normalized": "DMap a-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "DMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. When two equal keys are\n encountered, the combining function is applied to the key and both values.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference). If\n it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n The implementation uses an efficient \u003cem\u003ehedge\u003c/em\u003e algorithm comparable with \u003cem\u003ehedge-union\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "differenceWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e Maybe v) -\u003e DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value The implementation uses an efficient hedge algorithm comparable with hedge-union",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "differenceWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003eMaybe d)-\u003eDMap c-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003eMaybe v)-\u003eDMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieve an element by \u003cem\u003eindex\u003c/em\u003e. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when an\n invalid index is used.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "elemAt",
          "package": "dependent-map",
          "signature": "Int -\u003e DMap k -\u003e DSum k",
          "source": "src/Data-Dependent-Map.html#elemAt",
          "type": "function"
        },
        "index": {
          "description": "log Retrieve an element by index Calls error when an invalid index is used",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "elemAt",
          "normalized": "Int-\u003eDMap a-\u003eDSum a",
          "package": "dependent-map",
          "partial": "At",
          "signature": "Int-\u003eDMap k-\u003eDSum k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:elemAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e\u003cpre\u003e empty      == fromList []\n size empty == 0\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "empty",
          "package": "dependent-map",
          "signature": "DMap k",
          "source": "src/Data-Dependent-Map-Internal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty map empty fromList size empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "empty",
          "package": "dependent-map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "filter",
          "package": "dependent-map",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "dependent-map",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter all keys/values that satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "filterWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Bool) -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Filter all keys values that satisfy the predicate",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "filterWithKey",
          "normalized": "(a b c d-\u003ed-\u003eBool)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003eBool)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Return the \u003cem\u003eindex\u003c/em\u003e of a key. The index is a number from\n \u003cem\u003e0\u003c/em\u003e up to, but not including, the \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e of the map. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when\n the key is not a \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e of the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "findIndex",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e Int",
          "source": "src/Data-Dependent-Map.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "log Return the index of key The index is number from up to but not including the size of the map Calls error when the key is not member of the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "findIndex",
          "normalized": "a b-\u003eDMap a-\u003eInt",
          "package": "dependent-map",
          "partial": "Index",
          "signature": "k v-\u003eDMap k-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The maximal key of the map. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is the map is empty.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "findMax",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DSum k",
          "source": "src/Data-Dependent-Map.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log The maximal key of the map Calls error is the map is empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "findMax",
          "normalized": "DMap a-\u003eDSum a",
          "package": "dependent-map",
          "partial": "Max",
          "signature": "DMap k-\u003eDSum k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The minimal key of the map. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is the map is empty.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "findMin",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DSum k",
          "source": "src/Data-Dependent-Map.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log The minimal key of the map Calls error is the map is empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "findMin",
          "normalized": "DMap a-\u003eDSum a",
          "package": "dependent-map",
          "partial": "Min",
          "signature": "DMap k-\u003eDSum k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "findWithDefault",
          "package": "dependent-map",
          "signature": "v -\u003e k v -\u003e DMap k -\u003e v",
          "source": "src/Data-Dependent-Map.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns default value def when the key is not in the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "findWithDefault",
          "normalized": "a-\u003eb a-\u003eDMap b-\u003ea",
          "package": "dependent-map",
          "partial": "With Default",
          "signature": "v-\u003ek v-\u003eDMap k-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z . \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is identical to \u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e, and you should use that one instead of\n this one.  This name is kept for backward compatibility.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "foldWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e b -\u003e b) -\u003e b -\u003e DMap k -\u003e b",
          "source": "src/Data-Dependent-Map.html#foldWithKey",
          "type": "function"
        },
        "index": {
          "description": "Fold the keys and values in the map such that foldWithKey foldr uncurry toAscList This is identical to foldrWithKey and you should use that one instead of this one This name is kept for backward compatibility",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "foldWithKey",
          "normalized": "(a b c d-\u003ed-\u003ee-\u003ee)-\u003ee-\u003eDMap c-\u003ee",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003eb-\u003eb)-\u003eb-\u003eDMap k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Pre-order fold.  The function will be applied from the highest\n value to the lowest.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "foldlWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  b -\u003e k v -\u003e v -\u003e b) -\u003e b -\u003e DMap k -\u003e b",
          "source": "src/Data-Dependent-Map.html#foldlWithKey",
          "type": "function"
        },
        "index": {
          "description": "Pre-order fold The function will be applied from the highest value to the lowest",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "foldlWithKey",
          "normalized": "(a b c-\u003ed e-\u003ee-\u003ec)-\u003ec-\u003eDMap d-\u003ec",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. b-\u003ek v-\u003ev-\u003eb)-\u003eb-\u003eDMap k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Post-order fold.  The function will be applied from the lowest\n value to the highest.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "foldrWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e b -\u003e b) -\u003e b -\u003e DMap k -\u003e b",
          "source": "src/Data-Dependent-Map.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "description": "Post-order fold The function will be applied from the lowest value to the highest",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "foldrWithKey",
          "normalized": "(a b c d-\u003ed-\u003ee-\u003ee)-\u003ee-\u003eDMap c-\u003ee",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003eb-\u003eb)-\u003eb-\u003eDMap k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "fromAscList",
          "package": "dependent-map",
          "signature": "[DSum k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "fromAscList",
          "normalized": "[DSum a]-\u003eDMap a",
          "package": "dependent-map",
          "partial": "Asc List",
          "signature": "[DSum k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a\n combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "fromAscListWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e v) -\u003e [DSum k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "fromAscListWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003e[DSum c]-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Asc List With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003e[DSum k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "fromDistinctAscList",
          "package": "dependent-map",
          "signature": "[DSum k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list of distinct elements in linear time The precondition is not checked",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "fromDistinctAscList",
          "normalized": "[DSum a]-\u003eDMap a",
          "package": "dependent-map",
          "partial": "Distinct Asc List",
          "signature": "[DSum k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs. See also \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e.\n If the list contains more than one value for the same key, the last value\n for the key is retained.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "fromList",
          "package": "dependent-map",
          "signature": "[DSum k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs See also fromAscList If the list contains more than one value for the same key the last value for the key is retained",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "fromList",
          "normalized": "[DSum a]-\u003eDMap a",
          "package": "dependent-map",
          "partial": "List",
          "signature": "[DSum k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "fromListWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e v) -\u003e [DSum k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWithKey",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "fromListWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003e[DSum c]-\u003eDMap c",
          "package": "dependent-map",
          "partial": "List With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003e[DSum k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Dependent.Map",
          "name": "gcompare",
          "package": "dependent-map",
          "signature": "f a -\u003e f b -\u003e GOrdering a b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "gcompare",
          "normalized": "a b-\u003ea c-\u003eGOrdering b c",
          "package": "dependent-map",
          "signature": "f a-\u003ef b-\u003eGOrdering a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:gcompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the map.\n If the key is already present in the map, the associated value is\n replaced with the supplied value. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insert",
          "package": "dependent-map",
          "signature": "k v -\u003e v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key and value in the map If the key is already present in the map the associated value is replaced with the supplied value insert is equivalent to insertWith const",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insert",
          "normalized": "a b-\u003eb-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "k v-\u003ev-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Combines insert operation with old value retrieval.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e)\n is a pair where the first element is equal to (\u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e)\n and the second element equal to (\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f k x map\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertLookupWithKey",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e (Maybe v, DMap k)",
          "source": "src/Data-Dependent-Map.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Combines insert operation with old value retrieval The expression insertLookupWithKey map is pair where the first element is equal to lookup map and the second element equal to insertWithKey map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertLookupWithKey",
          "normalized": "(a b-\u003eb-\u003eb-\u003eb)-\u003ea b-\u003eb-\u003eDMap a-\u003e(Maybe b,DMap a)",
          "package": "dependent-map",
          "partial": "Lookup With Key",
          "signature": "(k v-\u003ev-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003e(Maybe v,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertLookupWithKey'",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e (Maybe v, DMap k)",
          "source": "src/Data-Dependent-Map.html#insertLookupWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "log strict version of insertLookupWithKey",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertLookupWithKey'",
          "normalized": "(a b-\u003eb-\u003eb-\u003eb)-\u003ea b-\u003eb-\u003eDMap a-\u003e(Maybe b,DMap a)",
          "package": "dependent-map",
          "partial": "Lookup With Key'",
          "signature": "(k v-\u003ev-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003e(Maybe v,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertLookupWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the entry \u003ccode\u003ekey :=\u003e value\u003c/code\u003e into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the entry \u003ccode\u003ekey :=\u003e f new_value old_value\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertWith",
          "package": "dependent-map",
          "signature": "(v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining new value and old value insertWith key value mp will insert the entry key value into mp if key does not exist in the map If the key does exist the function will insert the entry key new value old value",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea-\u003eDMap b-\u003eDMap b",
          "package": "dependent-map",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied strictly.\n This is often the most desirable behavior.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertWith'",
          "package": "dependent-map",
          "signature": "(v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "Same as insertWith but the combining function is applied strictly This is often the most desirable behavior",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea-\u003eDMap b-\u003eDMap b",
          "package": "dependent-map",
          "partial": "With'",
          "signature": "(v-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining key, new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the entry \u003ccode\u003ekey :=\u003e value\u003c/code\u003e into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the entry \u003ccode\u003ekey :=\u003e f key new_value old_value\u003c/code\u003e.\n Note that the key passed to f is the same key passed to \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertWithKey",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining key new value and old value insertWithKey key value mp will insert the entry key value into mp if key does not exist in the map If the key does exist the function will insert the entry key key new value old value Note that the key passed to is the same key passed to insertWithKey",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertWithKey",
          "normalized": "(a b-\u003eb-\u003eb-\u003eb)-\u003ea b-\u003eb-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(k v-\u003ev-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "insertWithKey'",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e v -\u003e v) -\u003e k v -\u003e v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#insertWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Same as insertWithKey but the combining function is applied strictly",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "insertWithKey'",
          "normalized": "(a b-\u003eb-\u003eb-\u003eb)-\u003ea b-\u003eb-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "With Key'",
          "signature": "(k v-\u003ev-\u003ev-\u003ev)-\u003ek v-\u003ev-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:insertWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection of two maps.\n Return data in the first map for the keys existing in both maps.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e m1 m2 == \u003ccode\u003eintersectionWith\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e m1 m2\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "intersection",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two maps Return data in the first map for the keys existing in both maps intersection m1 m2 intersectionWith const m1 m2",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "intersection",
          "normalized": "DMap a-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "DMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection with a combining function.\n Intersection is more efficient on (bigset `\u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e` smallset).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "intersectionWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e v) -\u003e DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Intersection with combining function Intersection is more efficient on bigset intersection smallset",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "intersectionWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003eDMap c-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003eDMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal). \n Defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "isProperSubmapOf",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#isProperSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal Defined as isProperSubmapOf isProperSubmapOfBy eqTagged",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "isProperSubmapOf",
          "normalized": "DMap a-\u003eDMap a-\u003eBool",
          "package": "dependent-map",
          "partial": "Proper Submap Of",
          "signature": "DMap k-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal).\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n \u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e are not equal,\n all keys in \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective keys and values. \n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "isProperSubmapOfBy",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e k v -\u003e v -\u003e v -\u003e Bool) -\u003e DMap k -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#isProperSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal The expression isProperSubmapOfBy m1 m2 returns True when m1 and m2 are not equal all keys in m1 are in m2 and when returns True when applied to their respective keys and values",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "isProperSubmapOfBy",
          "normalized": "(a b c d-\u003ec d-\u003ed-\u003ed-\u003eBool)-\u003eDMap c-\u003eDMap c-\u003eBool",
          "package": "dependent-map",
          "partial": "Proper Submap Of By",
          "signature": "(forall v. k v-\u003ek v-\u003ev-\u003ev-\u003eBool)-\u003eDMap k-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n This function is defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eeqTagged\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "isSubmapOf",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#isSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "This function is defined as isSubmapOf isSubmapOfBy eqTagged",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "isSubmapOf",
          "normalized": "DMap a-\u003eDMap a-\u003eBool",
          "package": "dependent-map",
          "partial": "Submap Of",
          "signature": "DMap k-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e f t1 t2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n all keys in \u003ccode\u003et1\u003c/code\u003e are in tree \u003ccode\u003et2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective keys and values.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "isSubmapOfBy",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e k v -\u003e v -\u003e v -\u003e Bool) -\u003e DMap k -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#isSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "The expression isSubmapOfBy t1 t2 returns True if all keys in t1 are in tree t2 and when returns True when applied to their respective keys and values",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "isSubmapOfBy",
          "normalized": "(a b c d-\u003ec d-\u003ed-\u003ed-\u003eBool)-\u003eDMap c-\u003eDMap c-\u003eBool",
          "package": "dependent-map",
          "partial": "Submap Of By",
          "signature": "(forall v. k v-\u003ek v-\u003ev-\u003ev-\u003eBool)-\u003eDMap k-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all keys of the map in ascending order.\n\u003c/p\u003e\u003cpre\u003e keys (fromList [(5,\"a\"), (3,\"b\")]) == [3,5]\n keys empty == []\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "keys",
          "package": "dependent-map",
          "signature": "DMap k -\u003e [Key k]",
          "source": "src/Data-Dependent-Map.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the map in ascending order keys fromList keys empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "keys",
          "normalized": "DMap a-\u003e[Key a]",
          "package": "dependent-map",
          "signature": "DMap k-\u003e[Key k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "lookup",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e Maybe v",
          "source": "src/Data-Dependent-Map-Internal.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "lookup",
          "normalized": "a b-\u003eDMap a-\u003eMaybe b",
          "package": "dependent-map",
          "signature": "k v-\u003eDMap k-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the \u003cem\u003eindex\u003c/em\u003e of a key. The index is a number from\n \u003cem\u003e0\u003c/em\u003e up to, but not including, the \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e of the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "lookupIndex",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e Maybe Int",
          "source": "src/Data-Dependent-Map.html#lookupIndex",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the index of key The index is number from up to but not including the size of the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "lookupIndex",
          "normalized": "a b-\u003eDMap a-\u003eMaybe Int",
          "package": "dependent-map",
          "partial": "Index",
          "signature": "k v-\u003eDMap k-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:lookupIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumLWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument throught the map in ascending order of keys.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapAccumLWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  a -\u003e k v -\u003e v -\u003e (a, v)) -\u003e a -\u003e DMap k -\u003e (a, DMap k)",
          "source": "src/Data-Dependent-Map.html#mapAccumLWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumLWithKey threads an accumulating argument throught the map in ascending order of keys",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapAccumLWithKey",
          "normalized": "(a b c-\u003ed e-\u003ee-\u003e(c,e))-\u003ec-\u003eDMap d-\u003e(c,DMap d)",
          "package": "dependent-map",
          "partial": "Accum LWith Key",
          "signature": "(forall v. a-\u003ek v-\u003ev-\u003e(a,v))-\u003ea-\u003eDMap k-\u003e(a,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapAccumLWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumRWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in descending order of keys.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapAccumRWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  a -\u003e k v -\u003e v -\u003e (a, v)) -\u003e a -\u003e DMap k -\u003e (a, DMap k)",
          "source": "src/Data-Dependent-Map.html#mapAccumRWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumRWithKey threads an accumulating argument through the map in descending order of keys",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapAccumRWithKey",
          "normalized": "(a b c-\u003ed e-\u003ee-\u003e(c,e))-\u003ec-\u003eDMap d-\u003e(c,DMap d)",
          "package": "dependent-map",
          "partial": "Accum RWith Key",
          "signature": "(forall v. a-\u003ek v-\u003ev-\u003e(a,v))-\u003ea-\u003eDMap k-\u003e(a,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapAccumRWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapEitherWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Either v v) -\u003e DMap k -\u003e (DMap k, DMap k)",
          "source": "src/Data-Dependent-Map.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and separate the Left and Right results",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapEitherWithKey",
          "normalized": "(a b c d-\u003ed-\u003eEither d d)-\u003eDMap c-\u003e(DMap c,DMap c)",
          "package": "dependent-map",
          "partial": "Either With Key",
          "signature": "(forall v. k v-\u003ev-\u003eEither v v)-\u003eDMap k-\u003e(DMap k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003emapKeys\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e\n is strictly monotonic.\n That is, for any values \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e \u003c \u003ccode\u003ey\u003c/code\u003e then \u003ccode\u003ef x\u003c/code\u003e \u003c \u003ccode\u003ef y\u003c/code\u003e.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n Semi-formally, we have:\n\u003c/p\u003e\u003cpre\u003e and [x \u003c y ==\u003e f x \u003c f y | x \u003c- ls, y \u003c- ls] \n                     ==\u003e mapKeysMonotonic f s == mapKeys f s\n     where ls = keys s\n\u003c/pre\u003e\u003cp\u003eThis means that \u003ccode\u003ef\u003c/code\u003e maps distinct original keys to distinct resulting keys.\n This function has better performance than \u003ccode\u003emapKeys\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapKeysMonotonic",
          "package": "dependent-map",
          "signature": "(forall v.  k1 v -\u003e k2 v) -\u003e DMap k1 -\u003e DMap k2",
          "source": "src/Data-Dependent-Map.html#mapKeysMonotonic",
          "type": "function"
        },
        "index": {
          "description": "mapKeysMonotonic mapKeys but works only when is strictly monotonic That is for any values and if then The precondition is not checked Semi-formally we have and ls ls mapKeysMonotonic mapKeys where ls keys This means that maps distinct original keys to distinct resulting keys This function has better performance than mapKeys",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapKeysMonotonic",
          "normalized": "(a b c d-\u003ec d)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Keys Monotonic",
          "signature": "(forall v. k v-\u003ek v)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapKeysMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysWith\u003c/a\u003e\u003c/code\u003e c f s\u003c/code\u003e is the map obtained by applying \u003ccode\u003ef\u003c/code\u003e to each key of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ccode\u003ef\u003c/code\u003e maps two or more distinct\n keys to the same new key.  In this case the associated values will be\n combined using \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapKeysWith",
          "package": "dependent-map",
          "signature": "(forall v.  k2 v -\u003e v -\u003e v -\u003e v) -\u003e (forall v.  k1 v -\u003e k2 v) -\u003e DMap k1 -\u003e DMap k2",
          "source": "src/Data-Dependent-Map.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "log mapKeysWith is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the associated values will be combined using",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapKeysWith",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003e(a b c d-\u003ec d)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Keys With",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003e(forall v. k v-\u003ek v)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapMaybeWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Maybe v) -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and collect the Just results",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapMaybeWithKey",
          "normalized": "(a b c d-\u003ed-\u003eMaybe d)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Maybe With Key",
          "signature": "(forall v. k v-\u003ev-\u003eMaybe v)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "mapWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v) -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "mapWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal (key :=\u003e value) entry of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "maxViewWithKey",
          "package": "dependent-map",
          "signature": "DMap k -\u003e Maybe (DSum k, DMap k)",
          "source": "src/Data-Dependent-Map.html#maxViewWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the maximal key value entry of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "maxViewWithKey",
          "normalized": "DMap a-\u003eMaybe(DSum a,DMap a)",
          "package": "dependent-map",
          "partial": "View With Key",
          "signature": "DMap k-\u003eMaybe(DSum k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map? See also \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "member",
          "package": "dependent-map",
          "signature": "k a -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the key member of the map See also notMember",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "member",
          "normalized": "a b-\u003eDMap a-\u003eBool",
          "package": "dependent-map",
          "signature": "k a-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal (key :=\u003e value) entry of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "minViewWithKey",
          "package": "dependent-map",
          "signature": "DMap k -\u003e Maybe (DSum k, DMap k)",
          "source": "src/Data-Dependent-Map.html#minViewWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Retrieves the minimal key value entry of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "minViewWithKey",
          "normalized": "DMap a-\u003eMaybe(DSum a,DMap a)",
          "package": "dependent-map",
          "partial": "View With Key",
          "signature": "DMap k-\u003eMaybe(DSum k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map? See also \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "notMember",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the key not member of the map See also member",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "notMember",
          "normalized": "a b-\u003eDMap a-\u003eBool",
          "package": "dependent-map",
          "partial": "Member",
          "signature": "k v-\u003eDMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "null",
          "package": "dependent-map",
          "signature": "DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map-Internal.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the map empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "null",
          "normalized": "DMap a-\u003eBool",
          "package": "dependent-map",
          "signature": "DMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to a predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "partitionWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Bool) -\u003e DMap k -\u003e (DMap k, DMap k)",
          "source": "src/Data-Dependent-Map.html#partitionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Partition the map according to predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "partitionWithKey",
          "normalized": "(a b c d-\u003ed-\u003eBool)-\u003eDMap c-\u003e(DMap c,DMap c)",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003eBool)-\u003eDMap k-\u003e(DMap k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Show the tree that implements the map. The tree is shown\n in a compressed, hanging format. See \u003ccode\u003e\u003ca\u003eshowTreeWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "showTree",
          "package": "dependent-map",
          "signature": "DMap k -\u003e String",
          "source": "src/Data-Dependent-Map.html#showTree",
          "type": "function"
        },
        "index": {
          "description": "Show the tree that implements the map The tree is shown in compressed hanging format See showTreeWith",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "showTree",
          "normalized": "DMap a-\u003eString",
          "package": "dependent-map",
          "partial": "Tree",
          "signature": "DMap k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshowTreeWith\u003c/a\u003e\u003c/code\u003e showelem hang wide map\u003c/code\u003e) shows\n the tree that implements the map. Elements are shown using the \u003ccode\u003eshowElem\u003c/code\u003e function. If \u003ccode\u003ehang\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, a \u003cem\u003ehanging\u003c/em\u003e tree is shown otherwise a rotated tree is shown. If\n \u003ccode\u003ewide\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an extra wide version is shown.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "showTreeWith",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e String) -\u003e Bool -\u003e Bool -\u003e DMap k -\u003e String",
          "source": "src/Data-Dependent-Map.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "description": "The expression showTreeWith showelem hang wide map shows the tree that implements the map Elements are shown using the showElem function If hang is True hanging tree is shown otherwise rotated tree is shown If wide is True an extra wide version is shown",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "showTreeWith",
          "normalized": "(a b c d-\u003ed-\u003eString)-\u003eBool-\u003eBool-\u003eDMap c-\u003eString",
          "package": "dependent-map",
          "partial": "Tree With",
          "signature": "(forall v. k v-\u003ev-\u003eString)-\u003eBool-\u003eBool-\u003eDMap k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e\u003cpre\u003e singleton 1 'a'        == fromList [(1, 'a')]\n size (singleton 1 'a') == 1\n\u003c/pre\u003e",
          "module": "Data.Dependent.Map",
          "name": "singleton",
          "package": "dependent-map",
          "signature": "k v -\u003e v -\u003e DMap k",
          "source": "src/Data-Dependent-Map-Internal.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map with single element singleton fromList size singleton",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "singleton",
          "normalized": "a b-\u003eb-\u003eDMap a",
          "package": "dependent-map",
          "signature": "k v-\u003ev-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "size",
          "package": "dependent-map",
          "signature": "DMap k -\u003e Int",
          "source": "src/Data-Dependent-Map-Internal.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "size",
          "normalized": "DMap a-\u003eInt",
          "package": "dependent-map",
          "signature": "DMap k-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) is a pair \u003ccode\u003e(map1,map2)\u003c/code\u003e where\n the keys in \u003ccode\u003emap1\u003c/code\u003e are smaller than \u003ccode\u003ek\u003c/code\u003e and the keys in \u003ccode\u003emap2\u003c/code\u003e larger than \u003ccode\u003ek\u003c/code\u003e.\n Any key equal to \u003ccode\u003ek\u003c/code\u003e is found in neither \u003ccode\u003emap1\u003c/code\u003e nor \u003ccode\u003emap2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "split",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e (DMap k, DMap k)",
          "source": "src/Data-Dependent-Map.html#split",
          "type": "function"
        },
        "index": {
          "description": "log The expression split map is pair map1 map2 where the keys in map1 are smaller than and the keys in map2 larger than Any key equal to is found in neither map1 nor map2",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "split",
          "normalized": "a b-\u003eDMap a-\u003e(DMap a,DMap a)",
          "package": "dependent-map",
          "signature": "k v-\u003eDMap k-\u003e(DMap k,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitLookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) splits a map just\n like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "splitLookup",
          "package": "dependent-map",
          "signature": "k v -\u003e DMap k -\u003e (DMap k, Maybe v, DMap k)",
          "source": "src/Data-Dependent-Map.html#splitLookup",
          "type": "function"
        },
        "index": {
          "description": "log The expression splitLookup map splits map just like split but also returns lookup map",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "splitLookup",
          "normalized": "a b-\u003eDMap a-\u003e(DMap a,Maybe b,DMap a)",
          "package": "dependent-map",
          "partial": "Lookup",
          "signature": "k v-\u003eDMap k-\u003e(DMap k,Maybe v,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to an ascending list.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "toAscList",
          "package": "dependent-map",
          "signature": "DMap k -\u003e [DSum k]",
          "source": "src/Data-Dependent-Map.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert to an ascending list",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "toAscList",
          "normalized": "DMap a-\u003e[DSum a]",
          "package": "dependent-map",
          "partial": "Asc List",
          "signature": "DMap k-\u003e[DSum k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a descending list.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "toDescList",
          "package": "dependent-map",
          "signature": "DMap k -\u003e [DSum k]",
          "source": "src/Data-Dependent-Map.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Convert to descending list",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "toDescList",
          "normalized": "DMap a-\u003e[DSum a]",
          "package": "dependent-map",
          "partial": "Desc List",
          "signature": "DMap k-\u003e[DSum k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "toList",
          "package": "dependent-map",
          "signature": "DMap k -\u003e [DSum k]",
          "source": "src/Data-Dependent-Map.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of key value pairs",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "toList",
          "normalized": "DMap a-\u003e[DSum a]",
          "package": "dependent-map",
          "partial": "List",
          "signature": "DMap k-\u003e[DSum k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e) takes the left-biased union of \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e. \n It prefers \u003ccode\u003et1\u003c/code\u003e when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003eunionWith\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n The implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset `\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e` smallset).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "union",
          "package": "dependent-map",
          "signature": "DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#union",
          "type": "function"
        },
        "index": {
          "description": "The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered i.e union unionWith const The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "union",
          "normalized": "DMap a-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "signature": "DMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n Union with a combining function. The implementation uses the efficient \u003cem\u003ehedge-union\u003c/em\u003e algorithm.\n Hedge-union is more efficient on (bigset `\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e` smallset).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "unionWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e v) -\u003e DMap k -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Union with combining function The implementation uses the efficient hedge-union algorithm Hedge-union is more efficient on bigset union smallset",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "unionWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003eDMap c-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003eDMap k-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "unions",
          "package": "dependent-map",
          "signature": "[DMap k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#unions",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps unions foldl union empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "unions",
          "normalized": "[DMap a]-\u003eDMap a",
          "package": "dependent-map",
          "signature": "[DMap k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps, with a combining operation:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWithKey\u003c/a\u003e\u003c/code\u003e f == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e f) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "unionsWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e v -\u003e v) -\u003e [DMap k] -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#unionsWithKey",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps with combining operation unionsWithKey foldl unionWithKey empty",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "unionsWithKey",
          "normalized": "(a b c d-\u003ed-\u003ed-\u003ed)-\u003e[DMap c]-\u003eDMap c",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(forall v. k v-\u003ev-\u003ev-\u003ev)-\u003e[DMap k]-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:unionsWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "update",
          "package": "dependent-map",
          "signature": "(v -\u003e Maybe v) -\u003e k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb a-\u003eDMap b-\u003eDMap b",
          "package": "dependent-map",
          "signature": "(v-\u003eMaybe v)-\u003ek v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the element at \u003cem\u003eindex\u003c/em\u003e. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when an\n invalid index is used.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "updateAt",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Maybe v) -\u003e Int -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#updateAt",
          "type": "function"
        },
        "index": {
          "description": "log Update the element at index Calls error when an invalid index is used",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "updateAt",
          "normalized": "(a b c d-\u003ed-\u003eMaybe d)-\u003eInt-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "At",
          "signature": "(forall v. k v-\u003ev-\u003eMaybe v)-\u003eInt-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:updateAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup and update. See also \u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e.\n The function returns changed value, if it is updated.\n Returns the original key value if the map entry is deleted. \n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "updateLookupWithKey",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e Maybe v) -\u003e k v -\u003e DMap k -\u003e (Maybe v, DMap k)",
          "source": "src/Data-Dependent-Map.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Lookup and update See also updateWithKey The function returns changed value if it is updated Returns the original key value if the map entry is deleted",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "updateLookupWithKey",
          "normalized": "(a b-\u003eb-\u003eMaybe b)-\u003ea b-\u003eDMap a-\u003e(Maybe b,DMap a)",
          "package": "dependent-map",
          "partial": "Lookup With Key",
          "signature": "(k v-\u003ev-\u003eMaybe v)-\u003ek v-\u003eDMap k-\u003e(Maybe v,DMap k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the maximal key.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "updateMaxWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Maybe v) -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the maximal key",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "updateMaxWithKey",
          "normalized": "(a b c d-\u003ed-\u003eMaybe d)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Max With Key",
          "signature": "(forall v. k v-\u003ev-\u003eMaybe v)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update the value at the minimal key.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "updateMinWithKey",
          "package": "dependent-map",
          "signature": "(forall v.  k v -\u003e v -\u003e Maybe v) -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update the value at the minimal key",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "updateMinWithKey",
          "normalized": "(a b c d-\u003ed-\u003eMaybe d)-\u003eDMap c-\u003eDMap c",
          "package": "dependent-map",
          "partial": "Min With Key",
          "signature": "(forall v. k v-\u003ev-\u003eMaybe v)-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "updateWithKey",
          "package": "dependent-map",
          "signature": "(k v -\u003e v -\u003e Maybe v) -\u003e k v -\u003e DMap k -\u003e DMap k",
          "source": "src/Data-Dependent-Map.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "updateWithKey",
          "normalized": "(a b-\u003eb-\u003eMaybe b)-\u003ea b-\u003eDMap a-\u003eDMap a",
          "package": "dependent-map",
          "partial": "With Key",
          "signature": "(k v-\u003ev-\u003eMaybe v)-\u003ek v-\u003eDMap k-\u003eDMap k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Test if the internal map structure is valid.\n\u003c/p\u003e",
          "module": "Data.Dependent.Map",
          "name": "valid",
          "package": "dependent-map",
          "signature": "DMap k -\u003e Bool",
          "source": "src/Data-Dependent-Map.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Test if the internal map structure is valid",
          "hierarchy": "Data Dependent Map",
          "module": "Data.Dependent.Map",
          "name": "valid",
          "normalized": "DMap a-\u003eBool",
          "package": "dependent-map",
          "signature": "DMap k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dependent-map/docs/Data-Dependent-Map.html#v:valid"
      }
    }
  ]
]