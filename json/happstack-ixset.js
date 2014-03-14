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
        "word": "happstack-ixset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines typable indices and convenience functions. Should\nbe probably considered private to \u003ccode\u003eHappstack.Data.IxSet\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet-Ix.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines typable indices and convenience functions Should be probably considered private to Happstack.Data.IxSet",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "package": "happstack-ixset",
          "partial": "Ix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from some \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e key to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of values for\n that key.  \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e carries type information inside.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet-Ix.html#Ix",
          "type": "data"
        },
        "index": {
          "description": "Ix is Map from some Typeable key to Set of values for that key Ix carries type information inside",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "package": "happstack-ixset",
          "partial": "Ix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#t:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "package": "happstack-ixset",
          "signature": "Ix (Map key (Set a)) (a -\u003e [key])",
          "source": "src/Happstack-Data-IxSet-Ix.html#Ix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "Ix",
          "normalized": "Ix(Map a(Set b))(b-\u003e[a])",
          "package": "happstack-ixset",
          "partial": "Ix",
          "signature": "Ix(Map key(Set a))(a-\u003e[key])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for deleting from \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003es. If the\n resulting \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e is empty, then the entry is removed from the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "delete",
          "package": "happstack-ixset",
          "signature": "k -\u003e a -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for deleting from Map of Set If the resulting Set is empty then the entry is removed from the Map",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "signature": "k-\u003ea-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e a list of elements from a set.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "deleteList",
          "package": "happstack-ixset",
          "signature": "[(k, a)] -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#deleteList",
          "type": "function"
        },
        "index": {
          "description": "Helper function to delete list of elements from set",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "deleteList",
          "normalized": "[(a,b)]-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:deleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for inserting into \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003es as in\n the case of an \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e.  If they key did not already exist in the\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, then a new \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e is added transparently.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "insert",
          "package": "happstack-ixset",
          "signature": "k -\u003e a -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for inserting into Map of Set as in the case of an Ix If they key did not already exist in the Map then new Set is added transparently",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "signature": "k-\u003ea-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e a list of elements into a set.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "insertList",
          "package": "happstack-ixset",
          "signature": "[(k, a)] -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#insertList",
          "type": "function"
        },
        "index": {
          "description": "Helper function to insert list of elements into set",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "insertList",
          "normalized": "[(a,b)]-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "partial": "List",
          "signature": "[(k,a)]-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake intersection of two sets\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "intersection",
          "package": "happstack-ixset",
          "signature": "Map k (Set a) -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Take intersection of two sets",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "intersection",
          "normalized": "Map a(Set b)-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "signature": "Map k(Set a)-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake union of two sets.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "union",
          "package": "happstack-ixset",
          "signature": "Map k (Set a) -\u003e Map k (Set a) -\u003e Map k (Set a)",
          "source": "src/Happstack-Data-IxSet-Ix.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take union of two sets",
          "hierarchy": "Happstack Data IxSet Ix",
          "module": "Happstack.Data.IxSet.Ix",
          "name": "union",
          "normalized": "Map a(Set b)-\u003eMap a(Set b)-\u003eMap a(Set b)",
          "package": "happstack-ixset",
          "signature": "Map k(Set a)-\u003eMap k(Set a)-\u003eMap k(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet-Ix.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of queryable sets.\n\u003c/p\u003e\u003cp\u003eAssume you have a type like:\n\u003c/p\u003e\u003cpre\u003e data Entry = Entry Author [Author] Updated Id Content\n newtype Updated = Updated EpochTime\n newtype Id = Id Int64\n newtype Content = Content String\n newtype Author = Author Email\n type Email = String\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Decide what parts of your type you want indexed and make your type\nan instance of \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003eixFun\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e to build indexes:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e instance Indexable Entry where\n     empty = ixSet \n               [ ixGen (Proxy :: Proxy Author)        -- out of order\n               , ixGen (Proxy :: Proxy Id)\n               , ixGen (Proxy :: Proxy Updated)\n               , ixGen (Proxy :: Proxy Test)          -- bogus index\n               ]\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eupdateIx\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edeleteIx\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e to build\n   up an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e collection:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e entries = foldr insert empty [e1,e2,e3,e4]\n entries' = foldr delete entries [e1,e3]\n entries'' = update e4 e5 entries\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Use the query functions below to grab data from it:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e entries @= (Author \"john@doe.com\") @\u003c (Updated t1)\n\u003c/pre\u003e\u003cp\u003eStatement above will find all items in entries updated earlier than\n\u003ccode\u003et1\u003c/code\u003e by \u003ccode\u003ejohn@doe.com\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Text index\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf you want to do add a text index create a calculated index.  Then if you want\nall entries with either \u003ccode\u003eword1\u003c/code\u003e or \u003ccode\u003eword2\u003c/code\u003e, you change the instance\nto:\n\u003c/p\u003e\u003cpre\u003e getWords (Entry _ _ _ _ (Content s)) = map Word $ words s\n\n instance Indexable Entry where\n     empty = ixSet [ ...\n                     ixFun getWords\n                   ]\n\u003c/pre\u003e\u003cp\u003eNow you can do this query to find entries with any of the words:\n\u003c/p\u003e\u003cpre\u003e entries @+ [Word \"word1\", Word \"word2\"]\n\u003c/pre\u003e\u003cp\u003eAnd if you want all entries with both:\n\u003c/p\u003e\u003cpre\u003e entries @* [Word \"word1\", Word \"word2\"]\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Find only the first author\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf an \u003ccode\u003eEntry\u003c/code\u003e has multiple authors and you want to be able to query on\nthe first author only, define a \u003ccode\u003eFirstAuthor\u003c/code\u003e datatype and create an\nindex with this type.  Now you can do:\n\u003c/p\u003e\u003cpre\u003e newtype FirstAuthor = FirstAuthor Email\n   \n getFirstAuthor (Entry author _ _ _ _) = [FirstAuthor author]\n\n instance Indexable Entry where\n     ...\n     empty = ixSet [ ...\n                     ixFun getFirstAuthor\n                   ]\n\n     entries @= (FirstAuthor \"john@doe.com\")  -- guess what this does\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "IxSet",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of queryable sets Assume you have type like data Entry Entry Author Author Updated Id Content newtype Updated Updated EpochTime newtype Id Id Int64 newtype Content Content String newtype Author Author Email type Email String Decide what parts of your type you want indexed and make your type an instance of Indexable Use ixFun and ixGen to build indexes instance Indexable Entry where empty ixSet ixGen Proxy Proxy Author out of order ixGen Proxy Proxy Id ixGen Proxy Proxy Updated ixGen Proxy Proxy Test bogus index Use insert delete updateIx deleteIx and empty to build up an IxSet collection entries foldr insert empty e1 e2 e3 e4 entries foldr delete entries e1 e3 entries update e4 e5 entries Use the query functions below to grab data from it entries Author john@doe.com Updated t1 Statement above will find all items in entries updated earlier than t1 by john@doe.com Text index If you want to do add text index create calculated index Then if you want all entries with either word1 or word2 you change the instance to getWords Entry Content map Word words instance Indexable Entry where empty ixSet ixFun getWords Now you can do this query to find entries with any of the words entries Word word1 Word word2 And if you want all entries with both entries Word word1 Word word2 Find only the first author If an Entry has multiple authors and you want to be able to query on the first author only define FirstAuthor datatype and create an index with this type Now you can do newtype FirstAuthor FirstAuthor Email getFirstAuthor Entry author FirstAuthor author instance Indexable Entry where empty ixSet ixFun getFirstAuthor entries FirstAuthor john@doe.com guess what this does",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "IxSet",
          "package": "happstack-ixset",
          "partial": "Ix Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Data.IxSet",
          "name": "IndexOp",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet.html#IndexOp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "IndexOp",
          "package": "happstack-ixset",
          "partial": "Index Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#t:IndexOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e class defines objects that can be members of \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "Indexable",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet.html#Indexable",
          "type": "class"
        },
        "index": {
          "description": "Indexable class defines objects that can be members of IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "Indexable",
          "package": "happstack-ixset",
          "partial": "Indexable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#t:Indexable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet with associatex indexes. \n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "IxSet",
          "package": "happstack-ixset",
          "source": "src/Happstack-Data-IxSet.html#IxSet",
          "type": "data"
        },
        "index": {
          "description": "Set with associatex indexes",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "IxSet",
          "package": "happstack-ixset",
          "partial": "Ix Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#t:IxSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(|||)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "An infix union operation",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(|||) |||",
          "normalized": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(&&&)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%26%26%26",
          "type": "function"
        },
        "index": {
          "description": "An infix intersection operation",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(&&&) &&&",
          "normalized": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the subset that matches all the provided indexes.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@*)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e [k] -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%2A",
          "type": "function"
        },
        "index": {
          "description": "Creates the subset that matches all the provided indexes",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@*) @*",
          "normalized": "IxSet a-\u003e[b]-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e[k]-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the subset that has an index in the provided list.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@+)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e [k] -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%2B",
          "type": "function"
        },
        "index": {
          "description": "Creates the subset that has an index in the provided list",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@+) @+",
          "normalized": "IxSet a-\u003e[b]-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e[k]-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003egetLT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003c)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e k -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3C",
          "type": "function"
        },
        "index": {
          "description": "Infix version of getLT",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003c) @\u003c",
          "normalized": "IxSet a-\u003eb-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003ek-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003egetLTE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003c=)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e k -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix version of getLTE",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003c=) @\u003c=",
          "normalized": "IxSet a-\u003eb-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003ek-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003egetEQ\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@=)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e k -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix version of getEQ",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@=) @=",
          "normalized": "IxSet a-\u003eb-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003ek-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003egetGT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e k -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix version of getGT",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e) @\u003e",
          "normalized": "IxSet a-\u003eb-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003ek-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with indexes in the open interval (k,k).\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e\u003c)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e (k, k) -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with indexes in the open interval",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e\u003c) @\u003e\u003c",
          "normalized": "IxSet a-\u003e(b,b)-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e(k,k)-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with indexes in (k,k].\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e\u003c=)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e (k, k) -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with indexes in",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e\u003c=) @\u003e\u003c=",
          "normalized": "IxSet a-\u003e(b,b)-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e(k,k)-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003egetGTE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e k -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix version of getGTE",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=) @\u003e=",
          "normalized": "IxSet a-\u003eb-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003ek-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with indexes in [k,k).\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=\u003c)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e (k, k) -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E%3D%3C",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with indexes in",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=\u003c) @\u003e=\u003c",
          "normalized": "IxSet a-\u003e(b,b)-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e(k,k)-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with indexes in [k,k].\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=\u003c=)",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e (k, k) -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#%40%3E%3D%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with indexes in",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "(@\u003e=\u003c=) @\u003e=\u003c=",
          "normalized": "IxSet a-\u003e(b,b)-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e(k,k)-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:-64--62--61--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher order operator for modifying \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003es.  Use this when your\n final function should have the form \u003ccode\u003ea -\u003e \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e a -\u003e \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e,\n e.g. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "change",
          "package": "happstack-ixset",
          "signature": "IndexOp -\u003e a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#change",
          "type": "function"
        },
        "index": {
          "description": "Higher order operator for modifying IxSet Use this when your final function should have the form IxSet IxSet e.g insert or delete",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "change",
          "normalized": "IndexOp-\u003ea-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IndexOp-\u003ea-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an item from the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "delete",
          "package": "happstack-ixset",
          "signature": "a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes an item from the IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "delete",
          "normalized": "a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill delete the item with index k.  Only works if there is at\n most one item with that index in the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e. Will not change\n \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e if you have more then 1 item with given index.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "deleteIx",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#deleteIx",
          "type": "function"
        },
        "index": {
          "description": "Will delete the item with index Only works if there is at most one item with that index in the IxSet Will not change IxSet if you have more then item with given index",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "deleteIx",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "Ix",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:deleteIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e defines what an empty \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e for this\n particular type should look like.  It should have all necessary\n indexes. Use \u003ccode\u003e\u003ca\u003eixSet\u003c/a\u003e\u003c/code\u003e function to create the set and fill it in\n with \u003ccode\u003e\u003ca\u003eixFun\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "empty",
          "package": "happstack-ixset",
          "signature": "IxSet a",
          "source": "src/Happstack-Data-IxSet.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Method empty defines what an empty IxSet for this particular type should look like It should have all necessary indexes Use ixSet function to create the set and fill it in with ixFun and ixGen",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "empty",
          "package": "happstack-ixset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically traverses the argument to find all occurences of\n values of type \u003ccode\u003eb\u003c/code\u003e and returns them as a list.\n\u003c/p\u003e\u003cp\u003eThis function properly handles \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e not as \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "flatten",
          "package": "happstack-ixset",
          "signature": "a -\u003e [b]",
          "source": "src/Happstack-Data-IxSet.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Generically traverses the argument to find all occurences of values of type and returns them as list This function properly handles String as String not as Char",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "flatten",
          "normalized": "a-\u003e[b]",
          "package": "happstack-ixset",
          "signature": "a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerically traverses the argument and calculated values to find\n all occurences of values of type \u003ccode\u003eb\u003c/code\u003e and returns them as a\n list. Equivalent to:\n\u003c/p\u003e\u003cpre\u003e flatten (x,calcs x)\n\u003c/pre\u003e\u003cp\u003eThis function properly handles \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e not as \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "flattenWithCalcs",
          "package": "happstack-ixset",
          "signature": "(a -\u003e c) -\u003e a -\u003e [b]",
          "source": "src/Happstack-Data-IxSet.html#flattenWithCalcs",
          "type": "function"
        },
        "index": {
          "description": "Generically traverses the argument and calculated values to find all occurences of values of type and returns them as list Equivalent to flatten calcs This function properly handles String as String not as Char",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "flattenWithCalcs",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[c]",
          "package": "happstack-ixset",
          "partial": "With Calcs",
          "signature": "(a-\u003ec)-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:flattenWithCalcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list to an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "fromList",
          "package": "happstack-ixset",
          "signature": "[a] -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Converts list to an IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "fromList",
          "normalized": "[a]-\u003eIxSet a",
          "package": "happstack-ixset",
          "partial": "List",
          "signature": "[a]-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "fromSet",
          "package": "happstack-ixset",
          "signature": "Set a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#fromSet",
          "type": "function"
        },
        "index": {
          "description": "Converts Set to an IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "fromSet",
          "normalized": "Set a-\u003eIxSet a",
          "package": "happstack-ixset",
          "partial": "Set",
          "signature": "Set a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index equal to the provided key.  The\n set must be indexed over key type, doing otherwise results in\n runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getEQ",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getEQ",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index equal to the provided key The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getEQ",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "EQ",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index greater than the provided key.\n The set must be indexed over key type, doing otherwise results in\n runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getGT",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getGT",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index greater than the provided key The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getGT",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "GT",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index greater than or equal to the\n provided key.  The set must be indexed over key type, doing\n otherwise results in runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getGTE",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getGTE",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index greater than or equal to the provided key The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getGTE",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "GTE",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getGTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index less than the provided key.  The\n set must be indexed over key type, doing otherwise results in\n runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getLT",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getLT",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index less than the provided key The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getLT",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "LT",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index less than or equal to the\n provided key.  The set must be indexed over key type, doing\n otherwise results in runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getLTE",
          "package": "happstack-ixset",
          "signature": "k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getLTE",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index less than or equal to the provided key The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getLTE",
          "normalized": "a-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "LTE",
          "signature": "k-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e is a singleton it will return the one item stored in it.\n If \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e is empty or has many elements this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getOne",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e Maybe a",
          "source": "src/Happstack-Data-IxSet.html#getOne",
          "type": "function"
        },
        "index": {
          "description": "If the IxSet is singleton it will return the one item stored in it If IxSet is empty or has many elements this function returns Nothing",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getOne",
          "normalized": "IxSet a-\u003eMaybe a",
          "package": "happstack-ixset",
          "partial": "One",
          "signature": "IxSet a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetOne\u003c/a\u003e\u003c/code\u003e with a user provided default.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getOneOr",
          "package": "happstack-ixset",
          "signature": "a -\u003e IxSet a -\u003e a",
          "source": "src/Happstack-Data-IxSet.html#getOneOr",
          "type": "function"
        },
        "index": {
          "description": "Like getOne with user provided default",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getOneOr",
          "normalized": "a-\u003eIxSet a-\u003ea",
          "package": "happstack-ixset",
          "partial": "One Or",
          "signature": "a-\u003eIxSet a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getOneOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subset with an index within the interval provided.\n The bottom of the interval is closed and the top is open,\n i. e. [k1;k2).  The set must be indexed over key type, doing\n otherwise results in runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "getRange",
          "package": "happstack-ixset",
          "signature": "k -\u003e k -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#getRange",
          "type": "function"
        },
        "index": {
          "description": "Returns the subset with an index within the interval provided The bottom of the interval is closed and the top is open k1 k2 The set must be indexed over key type doing otherwise results in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "getRange",
          "normalized": "a-\u003ea-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "Range",
          "signature": "k-\u003ek-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:getRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns lists of elements paired with the indexes determined by\n type inference.\n\u003c/p\u003e\u003cp\u003eThe resulting list will be sorted in ascending order by \u003ccode\u003ek\u003c/code\u003e.\n The values in '[t]' will be sorted in ascending order as well.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "groupAscBy",
          "package": "happstack-ixset",
          "signature": "IxSet t -\u003e [(k, [t])]",
          "source": "src/Happstack-Data-IxSet.html#groupAscBy",
          "type": "function"
        },
        "index": {
          "description": "Returns lists of elements paired with the indexes determined by type inference The resulting list will be sorted in ascending order by The values in will be sorted in ascending order as well",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "groupAscBy",
          "normalized": "IxSet a-\u003e[(b,[a])]",
          "package": "happstack-ixset",
          "partial": "Asc By",
          "signature": "IxSet t-\u003e[(k,[t])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:groupAscBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns lists of elements paired with the indexes determined by\n type inference.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "groupBy",
          "package": "happstack-ixset",
          "signature": "IxSet t -\u003e [(k, [t])]",
          "source": "src/Happstack-Data-IxSet.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "Returns lists of elements paired with the indexes determined by type inference",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "groupBy",
          "normalized": "IxSet a-\u003e[(b,[a])]",
          "package": "happstack-ixset",
          "partial": "By",
          "signature": "IxSet t-\u003e[(k,[t])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns lists of elements paired with the indexes determined by\n type inference.\n\u003c/p\u003e\u003cp\u003eThe resulting list will be sorted in descending order by \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: The values in '[t]' are currently sorted in ascending\n order. But this may change if someone bothers to add\n \u003ccode\u003eSet.toDescList\u003c/code\u003e. So do not rely on the sort order of '[t]'.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "groupDescBy",
          "package": "happstack-ixset",
          "signature": "IxSet t -\u003e [(k, [t])]",
          "source": "src/Happstack-Data-IxSet.html#groupDescBy",
          "type": "function"
        },
        "index": {
          "description": "Returns lists of elements paired with the indexes determined by type inference The resulting list will be sorted in descending order by NOTE The values in are currently sorted in ascending order But this may change if someone bothers to add Set.toDescList So do not rely on the sort order of",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "groupDescBy",
          "normalized": "IxSet a-\u003e[(b,[a])]",
          "package": "happstack-ixset",
          "partial": "Desc By",
          "signature": "IxSet t-\u003e[(k,[t])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:groupDescBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell helper function for automatically building an\n\u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e instance from a data type, e.g.\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo Int String\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e $(inferIxSet \"FooDB\" ''Foo 'noCalcs [''Int,''String])\n\u003c/pre\u003e\u003cp\u003ewill build a type synonym \n\u003c/p\u003e\u003cpre\u003e type FooDB = IxSet Foo\n\u003c/pre\u003e\u003cp\u003ewith \u003ccode\u003eInt\u003c/code\u003e and \u003ccode\u003eString\u003c/code\u003e as indexes.\n\u003c/p\u003e\u003cp\u003eWARNING: The type specified as the first index must be a type which\nappears in all values in the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etoSet\u003c/a\u003e\u003c/code\u003e and\nserialization will not function properly. You will be warned not to do\nthis by runtime error.  You can always use the element type\nitself. For example:\n\u003c/p\u003e\u003cpre\u003e $(inferIxSet \"FooDB\" ''Foo 'noCalcs [''Foo, ''Int, ''String])\n\u003c/pre\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "inferIxSet",
          "package": "happstack-ixset",
          "signature": "String -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Happstack-Data-IxSet.html#inferIxSet",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell helper function for automatically building an Indexable instance from data type e.g data Foo Foo Int String and inferIxSet FooDB Foo noCalcs Int String will build type synonym type FooDB IxSet Foo with Int and String as indexes WARNING The type specified as the first index must be type which appears in all values in the IxSet or toList toSet and serialization will not function properly You will be warned not to do this by runtime error You can always use the element type itself For example inferIxSet FooDB Foo noCalcs Foo Int String",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "inferIxSet",
          "normalized": "String-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "happstack-ixset",
          "partial": "Ix Set",
          "signature": "String-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:inferIxSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an item into the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e. If your data happens to have\n primary key this function might not be what you want. See\n \u003ccode\u003e\u003ca\u003eupdateIx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "insert",
          "package": "happstack-ixset",
          "signature": "a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an item into the IxSet If your data happens to have primary key this function might not be what you want See updateIx",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "insert",
          "normalized": "a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the intersection of the two \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "intersection",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Takes the intersection of the two IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "intersection",
          "normalized": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a functional index. Provided function should return a list\n of indexes where value should be found. \n\u003c/p\u003e\u003cpre\u003e getIndexes value = [...indexes...]\n\u003c/pre\u003e\u003cpre\u003e instance Indexable Type where\n     empty = ixSet [ ixFun getIndexes ]\n\u003c/pre\u003e\u003cp\u003eThis is the recommended way to create indexes.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "ixFun",
          "package": "happstack-ixset",
          "signature": "(a -\u003e [b]) -\u003e Ix a",
          "source": "src/Happstack-Data-IxSet.html#ixFun",
          "type": "function"
        },
        "index": {
          "description": "Create functional index Provided function should return list of indexes where value should be found getIndexes value indexes instance Indexable Type where empty ixSet ixFun getIndexes This is the recommended way to create indexes",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "ixFun",
          "normalized": "(a-\u003e[b])-\u003eIx a",
          "package": "happstack-ixset",
          "partial": "Fun",
          "signature": "(a-\u003e[b])-\u003eIx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:ixFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generic index. Provided example is used only as type\n source so you may use a \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e uses flatten to\n traverse value using its \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cpre\u003e instance Indexable Type where\n     empty = ixSet [ ixGen (Proxy :: Proxy Type) ]\n\u003c/pre\u003e\u003cp\u003eIn production systems consider using \u003ccode\u003e\u003ca\u003eixFun\u003c/a\u003e\u003c/code\u003e in place of \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e as\n the former one is much faster.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "ixGen",
          "package": "happstack-ixset",
          "signature": "Proxy b -\u003e Ix a",
          "source": "src/Happstack-Data-IxSet.html#ixGen",
          "type": "function"
        },
        "index": {
          "description": "Create generic index Provided example is used only as type source so you may use Proxy The ixGen uses flatten to traverse value using its Data instance instance Indexable Type where empty ixSet ixGen Proxy Proxy Type In production systems consider using ixFun in place of ixGen as the former one is much faster",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "ixGen",
          "normalized": "Proxy a-\u003eIx b",
          "package": "happstack-ixset",
          "partial": "Gen",
          "signature": "Proxy b-\u003eIx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:ixGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e using a list of indexes. Useful in \u003ccode\u003e\u003ca\u003eIndexable\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e method. Use \u003ccode\u003e\u003ca\u003eixFun\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eixGen\u003c/a\u003e\u003c/code\u003e as list elements.\n\u003c/p\u003e\u003cpre\u003e instance Indexable Type where\n     empty = ixSet [ ...\n                     ixFun getIndex1\n                     ixGen (Proxy :: Proxy Index2Type)\n                   ]\n\u003c/pre\u003e\u003cp\u003eFirst index in the list must contain all objects in set, doing\n otherwise result in runtime error.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "ixSet",
          "package": "happstack-ixset",
          "signature": "[Ix a] -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#ixSet",
          "type": "function"
        },
        "index": {
          "description": "Create an IxSet using list of indexes Useful in Indexable empty method Use ixFun and ixGen as list elements instance Indexable Type where empty ixSet ixFun getIndex1 ixGen Proxy Proxy Index2Type First index in the list must contain all objects in set doing otherwise result in runtime error",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "ixSet",
          "normalized": "[Ix a]-\u003eIxSet a",
          "package": "happstack-ixset",
          "partial": "Set",
          "signature": "[Ix a]-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:ixSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to be used for \u003ccode\u003ecalcs\u003c/code\u003e in \u003ccode\u003e\u003ca\u003einferIxSet\u003c/a\u003e\u003c/code\u003e when you don't\n want any calculated values.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "noCalcs",
          "package": "happstack-ixset",
          "signature": "t -\u003e ()",
          "source": "src/Happstack-Data-IxSet.html#noCalcs",
          "type": "function"
        },
        "index": {
          "description": "Function to be used for calcs in inferIxSet when you don want any calculated values",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "noCalcs",
          "normalized": "a-\u003e()",
          "package": "happstack-ixset",
          "partial": "Calcs",
          "signature": "t-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:noCalcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "null",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e Bool",
          "source": "src/Happstack-Data-IxSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Return True if the IxSet is empty False otherwise",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "null",
          "normalized": "IxSet a-\u003eBool",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of unique items in the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "size",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e Int",
          "source": "src/Happstack-Data-IxSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of unique items in the IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "size",
          "normalized": "IxSet a-\u003eInt",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics about \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e. This function returns quadruple\n consisting of 1. total number of elements in the set 2. number of\n declared indexes 3. number of keys in all indexes 4. number of\n values in all keys in all indexes. This can aid you in debugging\n and optimisation.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "stats",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e (Int, Int, Int, Int)",
          "source": "src/Happstack-Data-IxSet.html#stats",
          "type": "function"
        },
        "index": {
          "description": "Statistics about IxSet This function returns quadruple consisting of total number of elements in the set number of declared indexes number of keys in all indexes number of values in all keys in all indexes This can aid you in debugging and optimisation",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "stats",
          "normalized": "IxSet a-\u003e(Int,Int,Int,Int)",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e to its list of elements.\n\u003c/p\u003e\u003cp\u003eList will be sorted in ascending order by the index \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe list may contain duplicate entries if a single value produces multiple keys.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "toAscList",
          "package": "happstack-ixset",
          "signature": "Proxy k -\u003e IxSet a -\u003e [a]",
          "source": "src/Happstack-Data-IxSet.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Converts an IxSet to its list of elements List will be sorted in ascending order by the index The list may contain duplicate entries if single value produces multiple keys",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "toAscList",
          "normalized": "Proxy a-\u003eIxSet b-\u003e[b]",
          "package": "happstack-ixset",
          "partial": "Asc List",
          "signature": "Proxy k-\u003eIxSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e to its list of elements.\n\u003c/p\u003e\u003cp\u003eList will be sorted in descending order by the index \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe list may contain duplicate entries if a single value produces multiple keys.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "toDescList",
          "package": "happstack-ixset",
          "signature": "Proxy k -\u003e IxSet a -\u003e [a]",
          "source": "src/Happstack-Data-IxSet.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Converts an IxSet to its list of elements List will be sorted in descending order by the index The list may contain duplicate entries if single value produces multiple keys",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "toDescList",
          "normalized": "Proxy a-\u003eIxSet b-\u003e[b]",
          "package": "happstack-ixset",
          "partial": "Desc List",
          "signature": "Proxy k-\u003eIxSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e to its list of elements.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "toList",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e [a]",
          "source": "src/Happstack-Data-IxSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts an IxSet to its list of elements",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "toList",
          "normalized": "IxSet a-\u003e[a]",
          "package": "happstack-ixset",
          "partial": "List",
          "signature": "IxSet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of its elements.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "toSet",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e Set a",
          "source": "src/Happstack-Data-IxSet.html#toSet",
          "type": "function"
        },
        "index": {
          "description": "Converts an IxSet to Set of its elements",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "toSet",
          "normalized": "IxSet a-\u003eSet a",
          "package": "happstack-ixset",
          "partial": "Set",
          "signature": "IxSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:toSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the union of the two \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "union",
          "package": "happstack-ixset",
          "signature": "IxSet a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#union",
          "type": "function"
        },
        "index": {
          "description": "Takes the union of the two IxSet",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "union",
          "normalized": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "package": "happstack-ixset",
          "signature": "IxSet a-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill replace the item with index k.  Only works if there is at\n most one item with that index in the \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e. Will not change\n \u003ccode\u003e\u003ca\u003eIxSet\u003c/a\u003e\u003c/code\u003e if you have more then 1 item with given index.\n\u003c/p\u003e",
          "module": "Happstack.Data.IxSet",
          "name": "updateIx",
          "package": "happstack-ixset",
          "signature": "k -\u003e a -\u003e IxSet a -\u003e IxSet a",
          "source": "src/Happstack-Data-IxSet.html#updateIx",
          "type": "function"
        },
        "index": {
          "description": "Will replace the item with index Only works if there is at most one item with that index in the IxSet Will not change IxSet if you have more then item with given index",
          "hierarchy": "Happstack Data IxSet",
          "module": "Happstack.Data.IxSet",
          "name": "updateIx",
          "normalized": "a-\u003eb-\u003eIxSet b-\u003eIxSet b",
          "package": "happstack-ixset",
          "partial": "Ix",
          "signature": "k-\u003ea-\u003eIxSet a-\u003eIxSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-ixset/docs/Happstack-Data-IxSet.html#v:updateIx"
      }
    }
  ]
]