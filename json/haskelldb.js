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
        "word": "haskelldb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main idea of bounded lists is to create lists with predetermined\n maximum size.\n\u003c/p\u003e\u003cp\u003eBoundedList is a simple, fast and type safe approach to implementing \n this idea.\n The implementation is based on inductive instances, making it very easy to\n expand with new bounds. A new bound only requires one instance of size and \n two instances of Less.\n\u003c/p\u003e\u003cp\u003eBoundedList works as follows.\n Every bound is build up by declaring a data-type representing the new bound.\n The instance of size only returns the size as an Int.\n The first instance of Less is for telling the typechecker that this bound\n is greater than the largest smaller bound.\n The second instance of Less is used by the typechecker to construct a chain\n of instances if there is no hardcoded instance available.\n This way the type checker can determine if a bound is smaller/greater\n then any other bound.\n\u003c/p\u003e\u003cp\u003eThis inductive approach gives the complexity O(n) on the number of instances\n and very short type checking times compared to an O(n^2) implementation.\n\u003c/p\u003e\u003cp\u003eBoundedList also comes with a few utility function for manipulation an\n contructing bounded lists.\n\u003c/p\u003e\u003cp\u003eTo be noted:\n Since each bound is a unique type:\n Explicit shrink and/or grow is needed before using (==).\n BoundedList does not have an instance of Ordering. (This might change)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "BoundedList",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html",
          "type": "module"
        },
        "index": {
          "description": "The main idea of bounded lists is to create lists with predetermined maximum size BoundedList is simple fast and type safe approach to implementing this idea The implementation is based on inductive instances making it very easy to expand with new bounds new bound only requires one instance of size and two instances of Less BoundedList works as follows Every bound is build up by declaring data-type representing the new bound The instance of size only returns the size as an Int The first instance of Less is for telling the typechecker that this bound is greater than the largest smaller bound The second instance of Less is used by the typechecker to construct chain of instances if there is no hardcoded instance available This way the type checker can determine if bound is smaller greater then any other bound This inductive approach gives the complexity on the number of instances and very short type checking times compared to an implementation BoundedList also comes with few utility function for manipulation an contructing bounded lists To be noted Since each bound is unique type Explicit shrink and or grow is needed before using BoundedList does not have an instance of Ordering This might change",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "BoundedList",
          "package": "haskelldb",
          "partial": "Bounded List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "BoundedList",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#BoundedList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "BoundedList",
          "package": "haskelldb",
          "partial": "Bounded List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:BoundedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N0",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N0",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N0",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N1",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N1",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N10",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N10",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N10",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N100",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N100",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N100",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N101",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N101",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N101",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N101"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N102",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N102",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N102",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N102"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N103",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N103",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N103",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N103"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N104",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N104",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N104",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N104"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N105",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N105",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N105",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N105"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N106",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N106",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N106",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N106"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N107",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N107",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N107",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N107"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N108",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N108",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N108",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N108"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N109",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N109",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N109",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N109"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N11",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N11",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N11",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N110",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N110",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N110",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N111",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N111",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N111",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N111"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N112",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N112",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N112",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N112"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N113",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N113",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N113",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N113"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N114",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N114",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N114",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N114"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N115",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N115",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N115",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N115"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N116",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N116",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N116",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N116"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N117",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N117",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N117",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N117"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N118",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N118",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N118",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N118"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N119",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N119",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N119",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N119"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N12",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N12",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N12",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N120",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N120",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N120",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N120"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N121",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N121",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N121",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N121"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N122",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N122",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N122",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N122"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N123",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N123",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N123",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N124",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N124",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N124",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N124"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N125",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N125",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N125",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N125"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N126",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N126",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N126",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N126"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N127",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N127",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N127",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N127"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N128",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N128",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N128",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N129",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N129",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N129",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N129"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N13",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N13",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N13",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N130",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N130",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N130",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N130"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N131",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N131",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N131",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N131"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N132",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N132",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N132",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N133",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N133",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N133",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N133"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N134",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N134",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N134",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N135",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N135",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N135",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N135"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N136",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N136",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N136",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N136"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N137",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N137",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N137",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N137"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N138",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N138",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N138",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N138"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N139",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N139",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N139",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N139"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N14",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N14",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N14",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N140",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N140",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N140",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N140"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N141",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N141",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N141",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N141"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N142",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N142",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N142",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N142"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N143",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N143",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N143",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N143"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N144",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N144",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N144",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N144"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N145",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N145",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N145",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N145"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N146",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N146",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N146",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N146"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N147",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N147",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N147",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N147"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N148",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N148",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N148",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N148"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N149",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N149",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N149",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N149"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N15",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N15",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N15",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N150",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N150",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N150",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N150"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N151",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N151",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N151",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N151"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N152",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N152",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N152",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N152"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N153",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N153",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N153",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N153"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N154",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N154",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N154",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N154"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N155",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N155",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N155",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N155"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N156",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N156",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N156",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N156"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N157",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N157",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N157",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N157"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N158",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N158",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N158",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N158"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N159",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N159",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N159",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N159"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N16",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N16",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N16",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N160",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N160",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N160",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N161",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N161",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N161",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N161"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N162",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N162",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N162",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N162"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N163",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N163",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N163",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N163"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N164",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N164",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N164",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N164"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N165",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N165",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N165",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N165"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N166",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N166",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N166",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N166"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N167",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N167",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N167",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N167"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N168",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N168",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N168",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N168"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N169",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N169",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N169",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N169"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N17",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N17",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N17",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N170",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N170",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N170",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N170"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N171",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N171",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N171",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N171"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N172",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N172",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N172",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N172"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N173",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N173",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N173",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N173"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N174",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N174",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N174",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N174"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N175",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N175",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N175",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N175"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N176",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N176",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N176",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N176"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N177",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N177",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N177",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N177"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N178",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N178",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N178",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N178"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N179",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N179",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N179",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N179"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N18",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N18",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N18",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N180",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N180",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N180",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N181",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N181",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N181",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N181"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N182",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N182",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N182",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N182"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N183",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N183",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N183",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N183"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N184",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N184",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N184",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N184"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N185",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N185",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N185",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N186",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N186",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N186",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N186"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N187",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N187",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N187",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N187"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N188",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N188",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N188",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N188"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N189",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N189",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N189",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N189"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N19",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N19",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N19",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N190",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N190",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N190",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N190"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N191",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N191",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N191",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N191"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N192",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N192",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N192",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N193",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N193",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N193",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N193"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N194",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N194",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N194",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N194"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N195",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N195",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N195",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N195"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N196",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N196",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N196",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N196"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N197",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N197",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N197",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N197"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N198",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N198",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N198",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N198"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N199",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N199",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N199",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N199"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N2",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N2",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N20",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N20",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N20",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N200",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N200",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N200",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N201",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N201",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N201",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N201"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N202",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N202",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N202",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N202"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N203",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N203",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N203",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N203"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N204",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N204",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N204",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N204"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N205",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N205",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N205",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N205"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N206",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N206",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N206",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N206"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N207",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N207",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N207",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N207"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N208",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N208",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N208",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N208"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N209",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N209",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N209",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N209"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N21",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N21",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N21",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N210",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N210",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N210",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N210"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N211",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N211",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N211",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N211"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N212",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N212",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N212",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N212"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N213",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N213",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N213",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N213"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N214",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N214",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N214",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N214"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N215",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N215",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N215",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N215"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N216",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N216",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N216",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N216"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N217",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N217",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N217",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N217"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N218",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N218",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N218",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N218"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N219",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N219",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N219",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N219"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N22",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N22",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N22",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N220",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N220",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N220",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N220"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N221",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N221",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N221",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N221"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N222",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N222",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N222",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N222"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N223",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N223",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N223",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N223"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N224",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N224",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N224",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N225",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N225",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N225",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N225"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N226",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N226",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N226",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N226"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N227",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N227",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N227",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N227"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N228",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N228",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N228",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N228"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N229",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N229",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N229",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N229"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N23",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N23",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N23",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N230",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N230",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N230",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N230"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N231",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N231",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N231",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N231"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N232",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N232",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N232",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N232"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N233",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N233",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N233",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N233"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N234",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N234",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N234",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N235",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N235",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N235",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N236",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N236",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N236",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N237",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N237",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N237",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N238",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N238",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N238",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N239",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N239",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N239",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N24",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N24",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N24",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N240",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N240",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N240",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N240"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N241",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N241",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N241",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N241"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N242",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N242",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N242",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N242"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N243",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N243",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N243",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N243"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N244",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N244",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N244",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N244"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N245",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N245",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N245",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N246",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N246",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N246",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N247",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N247",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N247",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N248",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N248",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N248",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N249",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N249",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N249",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N25",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N25",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N25",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N250",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N250",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N250",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N250"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N251",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N251",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N251",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N251"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N252",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N252",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N252",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N252"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N253",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N253",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N253",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N253"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N254",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N254",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N254",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N254"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N255",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N255",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N255",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N255"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N26",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N26",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N26",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N27",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N27",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N28",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N28",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N28",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N29",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N29",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N29",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N3",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N3",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N30",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N30",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N30",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N31",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N31",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N31",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N32",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N32",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N32",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N33",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N33",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N33",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N34",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N34",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N34",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N35",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N35",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N35",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N36",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N36",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N36",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N37",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N37",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N37",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N38",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N38",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N38",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N39",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N39",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N39",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N4",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N4",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N40",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N40",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N40",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N41",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N41",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N41",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N42",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N42",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N42",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N43",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N43",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N43",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N44",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N44",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N44",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N45",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N45",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N45",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N46",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N46",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N46",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N47",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N47",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N47",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N48",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N48",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N48",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N49",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N49",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N49",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N5",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N5",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N5",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N50",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N50",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N50",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N51",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N51",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N51",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N52",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N52",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N52",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N53",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N53",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N53",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N54",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N54",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N54",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N54"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N55",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N55",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N55",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N55"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N56",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N56",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N56",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N56"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N57",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N57",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N57",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N57"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N58",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N58",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N58",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N59",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N59",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N59",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N59"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N6",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N6",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N6",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N60",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N60",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N60",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N61",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N61",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N61",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N62",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N62",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N62",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N63",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N63",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N63",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N63"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N64",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N64",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N64",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N65",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N65",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N65",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N65"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N65535",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N65535",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N65535",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N65535"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N66",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N66",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N66",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N66"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N67",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N67",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N67",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N68",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N68",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N68",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N68"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N69",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N69",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N69",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N69"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N7",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N7",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N7",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N70",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N70",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N70",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N70"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N71",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N71",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N71",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N71"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N72",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N72",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N72",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N73",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N73",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N73",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N73"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N74",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N74",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N74",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N74"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N75",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N75",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N75",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N75"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N76",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N76",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N76",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N76"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N77",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N77",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N77",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N77"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N78",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N78",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N78",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N79",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N79",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N79",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N79"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N8",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N8",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N8",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N80",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N80",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N80",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N81",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N81",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N81",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N81"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N82",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N82",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N82",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N82"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N83",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N83",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N83",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N83"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N84",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N84",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N84",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N84"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N85",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N85",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N85",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N85"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N86",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N86",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N86",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N86"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N87",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N87",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N87",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N87"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N88",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N88",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N88",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N88"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N89",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N89",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N89",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N89"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N9",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N9",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N9",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N90",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N90",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N90",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N91",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N91",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N91",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N91"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N92",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N92",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N92",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N92"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N93",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N93",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N93",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N93"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N94",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N94",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N94",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N94"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N95",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N95",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N95",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N95"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N96",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N96",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N96",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N97",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N97",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N97",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N97"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N98",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N98",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N98",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N98"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "N99",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#N99",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "N99",
          "package": "haskelldb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N99"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedList",
          "name": "Size",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedList.html#Size",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "Size",
          "package": "haskelldb",
          "partial": "Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e and return the list inside.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "fromBounded",
          "package": "haskelldb",
          "signature": "BoundedList a n -\u003e [a]",
          "source": "src/Database-HaskellDB-BoundedList.html#fromBounded",
          "type": "function"
        },
        "index": {
          "description": "Takes BoundedList and return the list inside",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "fromBounded",
          "normalized": "BoundedList a b-\u003e[a]",
          "package": "haskelldb",
          "partial": "Bounded",
          "signature": "BoundedList a n-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:fromBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e add grows it size.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "grow",
          "package": "haskelldb",
          "signature": "BoundedList a n -\u003e BoundedList a m",
          "source": "src/Database-HaskellDB-BoundedList.html#grow",
          "type": "function"
        },
        "index": {
          "description": "Takes BoundedList add grows it size",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "grow",
          "normalized": "BoundedList a b-\u003eBoundedList a c",
          "package": "haskelldb",
          "signature": "BoundedList a n-\u003eBoundedList a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "listBound",
          "package": "haskelldb",
          "signature": "BoundedList a n -\u003e Int",
          "source": "src/Database-HaskellDB-BoundedList.html#listBound",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of BoundedList",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "listBound",
          "normalized": "BoundedList a b-\u003eInt",
          "package": "haskelldb",
          "partial": "Bound",
          "signature": "BoundedList a n-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:listBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShrinks the \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e supplied if\n it can do so without truncating the list. Returns Nothing\n if the list inside was to long.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "shrink",
          "package": "haskelldb",
          "signature": "BoundedList a n -\u003e Maybe (BoundedList a m)",
          "source": "src/Database-HaskellDB-BoundedList.html#shrink",
          "type": "function"
        },
        "index": {
          "description": "Shrinks the BoundedList supplied if it can do so without truncating the list Returns Nothing if the list inside was to long",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "shrink",
          "normalized": "BoundedList a b-\u003eMaybe(BoundedList a c)",
          "package": "haskelldb",
          "signature": "BoundedList a n-\u003eMaybe(BoundedList a m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list and transforms it to a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n If the list doesn't fit, Nothing is returned.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "toBounded",
          "package": "haskelldb",
          "signature": "[a] -\u003e Maybe (BoundedList a n)",
          "source": "src/Database-HaskellDB-BoundedList.html#toBounded",
          "type": "function"
        },
        "index": {
          "description": "Takes list and transforms it to BoundedList If the list doesn fit Nothing is returned",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "toBounded",
          "normalized": "[a]-\u003eMaybe(BoundedList a b)",
          "package": "haskelldb",
          "partial": "Bounded",
          "signature": "[a]-\u003eMaybe(BoundedList a n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:toBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list and transforms it to a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n If the list doesn'n fit, the list is truncated\n to make it fit into the bounded list.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.BoundedList",
          "name": "trunc",
          "package": "haskelldb",
          "signature": "[a] -\u003e BoundedList a n",
          "source": "src/Database-HaskellDB-BoundedList.html#trunc",
          "type": "function"
        },
        "index": {
          "description": "Takes list and transforms it to BoundedList If the list doesn fit the list is truncated to make it fit into the bounded list",
          "hierarchy": "Database HaskellDB BoundedList",
          "module": "Database.HaskellDB.BoundedList",
          "name": "trunc",
          "normalized": "[a]-\u003eBoundedList a b",
          "package": "haskelldb",
          "signature": "[a]-\u003eBoundedList a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:trunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoundedString represents the sql types; CHARACTER and CHARACTER VARYING\n both defined in SQL 1992.\n BoundedString supports sizes in the range [0,255] and 65535.\n Greater sizes and the sql type SQL_TEXT (SQL 1992) will might be \n supported in the future.\n\u003c/p\u003e\u003cp\u003eThe use of BoundedString together with HaskellDB enables feedback when\n the length of a string exceeds the bound of a certain database field.\n BoundedString also provides a layer of type safety against loss of data\n due to sql string truncation when extracting and re-insert data into fields\n with smaller bound.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BoundedString",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html",
          "type": "module"
        },
        "index": {
          "description": "BoundedString represents the sql types CHARACTER and CHARACTER VARYING both defined in SQL BoundedString supports sizes in the range and Greater sizes and the sql type SQL TEXT SQL will might be supported in the future The use of BoundedString together with HaskellDB enables feedback when the length of string exceeds the bound of certain database field BoundedString also provides layer of type safety against loss of data due to sql string truncation when extracting and re-insert data into fields with smaller bound",
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BoundedString",
          "package": "haskelldb",
          "partial": "Bounded String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr0",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr0",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr1",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr1",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr10",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr10",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr10",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr100",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr100",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr100",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr101",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr101",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr101",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr101"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr102",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr102",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr102",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr102"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr103",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr103",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr103",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr103"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr104",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr104",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr104",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr104"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr105",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr105",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr105",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr105"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr106",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr106",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr106",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr106"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr107",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr107",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr107",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr107"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr108",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr108",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr108",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr108"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr109",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr109",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr109",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr109"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr11",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr11",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr11",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr110",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr110",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr110",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr111",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr111",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr111",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr111"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr112",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr112",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr112",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr112"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr113",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr113",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr113",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr113"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr114",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr114",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr114",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr114"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr115",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr115",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr115",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr115"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr116",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr116",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr116",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr116"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr117",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr117",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr117",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr117"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr118",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr118",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr118",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr118"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr119",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr119",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr119",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr119"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr12",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr12",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr12",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr120",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr120",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr120",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr120"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr121",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr121",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr121",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr121"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr122",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr122",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr122",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr122"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr123",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr123",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr123",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr124",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr124",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr124",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr124"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr125",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr125",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr125",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr125"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr126",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr126",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr126",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr126"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr127",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr127",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr127",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr127"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr128",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr128",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr128",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr129",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr129",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr129",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr129"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr13",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr13",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr13",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr130",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr130",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr130",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr130"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr131",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr131",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr131",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr131"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr132",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr132",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr132",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr133",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr133",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr133",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr133"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr134",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr134",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr134",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr135",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr135",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr135",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr135"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr136",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr136",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr136",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr136"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr137",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr137",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr137",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr137"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr138",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr138",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr138",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr138"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr139",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr139",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr139",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr139"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr14",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr14",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr14",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr140",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr140",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr140",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr140"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr141",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr141",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr141",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr141"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr142",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr142",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr142",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr142"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr143",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr143",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr143",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr143"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr144",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr144",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr144",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr144"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr145",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr145",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr145",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr145"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr146",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr146",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr146",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr146"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr147",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr147",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr147",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr147"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr148",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr148",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr148",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr148"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr149",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr149",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr149",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr149"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr15",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr15",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr15",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr150",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr150",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr150",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr150"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr151",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr151",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr151",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr151"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr152",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr152",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr152",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr152"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr153",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr153",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr153",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr153"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr154",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr154",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr154",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr154"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr155",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr155",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr155",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr155"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr156",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr156",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr156",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr156"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr157",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr157",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr157",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr157"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr158",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr158",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr158",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr158"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr159",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr159",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr159",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr159"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr16",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr16",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr160",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr160",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr160",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr161",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr161",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr161",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr161"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr162",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr162",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr162",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr162"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr163",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr163",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr163",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr163"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr164",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr164",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr164",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr164"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr165",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr165",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr165",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr165"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr166",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr166",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr166",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr166"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr167",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr167",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr167",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr167"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr168",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr168",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr168",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr168"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr169",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr169",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr169",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr169"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr17",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr17",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr17",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr170",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr170",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr170",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr170"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr171",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr171",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr171",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr171"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr172",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr172",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr172",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr172"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr173",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr173",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr173",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr173"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr174",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr174",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr174",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr174"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr175",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr175",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr175",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr175"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr176",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr176",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr176",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr176"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr177",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr177",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr177",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr177"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr178",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr178",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr178",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr178"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr179",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr179",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr179",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr179"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr18",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr18",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr18",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr180",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr180",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr180",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr181",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr181",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr181",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr181"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr182",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr182",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr182",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr182"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr183",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr183",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr183",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr183"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr184",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr184",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr184",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr184"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr185",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr185",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr185",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr186",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr186",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr186",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr186"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr187",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr187",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr187",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr187"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr188",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr188",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr188",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr188"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr189",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr189",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr189",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr189"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr19",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr19",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr19",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr190",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr190",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr190",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr190"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr191",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr191",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr191",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr191"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr192",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr192",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr192",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr193",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr193",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr193",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr193"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr194",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr194",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr194",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr194"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr195",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr195",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr195",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr195"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr196",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr196",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr196",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr196"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr197",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr197",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr197",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr197"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr198",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr198",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr198",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr198"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr199",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr199",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr199",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr199"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr2",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr2",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr20",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr20",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr20",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr200",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr200",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr200",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr201",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr201",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr201",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr201"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr202",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr202",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr202",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr202"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr203",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr203",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr203",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr203"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr204",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr204",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr204",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr204"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr205",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr205",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr205",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr205"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr206",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr206",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr206",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr206"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr207",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr207",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr207",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr207"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr208",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr208",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr208",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr208"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr209",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr209",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr209",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr209"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr21",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr21",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr21",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr210",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr210",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr210",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr210"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr211",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr211",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr211",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr211"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr212",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr212",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr212",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr212"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr213",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr213",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr213",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr213"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr214",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr214",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr214",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr214"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr215",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr215",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr215",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr215"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr216",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr216",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr216",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr216"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr217",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr217",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr217",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr217"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr218",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr218",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr218",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr218"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr219",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr219",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr219",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr219"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr22",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr22",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr22",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr220",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr220",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr220",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr220"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr221",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr221",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr221",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr221"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr222",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr222",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr222",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr222"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr223",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr223",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr223",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr223"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr224",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr224",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr224",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr225",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr225",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr225",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr225"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr226",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr226",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr226",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr226"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr227",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr227",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr227",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr227"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr228",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr228",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr228",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr228"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr229",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr229",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr229",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr229"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr23",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr23",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr23",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr230",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr230",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr230",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr230"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr231",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr231",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr231",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr231"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr232",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr232",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr232",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr232"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr233",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr233",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr233",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr233"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr234",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr234",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr234",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr235",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr235",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr235",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr236",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr236",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr236",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr237",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr237",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr237",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr238",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr238",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr238",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr239",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr239",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr239",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr24",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr24",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr240",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr240",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr240",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr240"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr241",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr241",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr241",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr241"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr242",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr242",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr242",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr242"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr243",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr243",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr243",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr243"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr244",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr244",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr244",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr244"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr245",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr245",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr245",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr246",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr246",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr246",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr247",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr247",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr247",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr248",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr248",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr248",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr249",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr249",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr249",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr25",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr25",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr25",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr250",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr250",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr250",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr250"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr251",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr251",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr251",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr251"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr252",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr252",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr252",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr252"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr253",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr253",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr253",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr253"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr254",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr254",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr254",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr254"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr255",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr255",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr255",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr255"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr26",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr26",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr26",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr27",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr27",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr28",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr28",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr28",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr29",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr29",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr29",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr3",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr3",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr30",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr30",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr30",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr31",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr31",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr31",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr32",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr32",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr33",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr33",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr33",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr34",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr34",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr34",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr35",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr35",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr35",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr36",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr36",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr36",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr37",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr37",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr37",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr38",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr38",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr38",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr39",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr39",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr39",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr4",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr4",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr40",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr40",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr40",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr41",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr41",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr41",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr42",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr42",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr42",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr43",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr43",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr43",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr44",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr44",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr44",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr45",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr45",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr45",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr46",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr46",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr46",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr47",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr47",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr47",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr48",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr48",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr49",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr49",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr49",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr5",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr5",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr50",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr50",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr50",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr51",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr51",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr51",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr52",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr52",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr52",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr53",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr53",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr53",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr54",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr54",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr54",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr54"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr55",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr55",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr55",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr55"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr56",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr56",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr56",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr56"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr57",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr57",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr57",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr57"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr58",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr58",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr58",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr59",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr59",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr59",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr59"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr6",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr6",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr60",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr60",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr60",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr61",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr61",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr61",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr62",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr62",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr62",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr63",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr63",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr63",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr63"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr64",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr64",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr64",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr65",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr65",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr65",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr65"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr65535",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr65535",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr65535",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr65535"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr66",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr66",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr66",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr66"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr67",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr67",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr67",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr68",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr68",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr68",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr68"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr69",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr69",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr69",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr69"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr7",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr7",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr70",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr70",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr70",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr70"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr71",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr71",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr71",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr71"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr72",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr72",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr72",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr73",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr73",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr73",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr73"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr74",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr74",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr74",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr74"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr75",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr75",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr75",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr75"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr76",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr76",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr76",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr76"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr77",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr77",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr77",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr77"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr78",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr78",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr78",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr79",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr79",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr79",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr79"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr8",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr8",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr80",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr80",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr80",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr81",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr81",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr81",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr81"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr82",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr82",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr82",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr82"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr83",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr83",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr83",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr83"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr84",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr84",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr84",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr84"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr85",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr85",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr85",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr85"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr86",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr86",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr86",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr86"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr87",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr87",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr87",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr87"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr88",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr88",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr88",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr88"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr89",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr89",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr89",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr89"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr9",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr9",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr90",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr90",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr90",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr91",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr91",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr91",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr91"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr92",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr92",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr92",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr92"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr93",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr93",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr93",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr93"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr94",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr94",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr94",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr94"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr95",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr95",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr95",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr95"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr96",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr96",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr96",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr97",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr97",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr97",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr97"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr98",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr98",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr98",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr98"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr99",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BStr99",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BStr99",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr99"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.BoundedString",
          "name": "BoundedString",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-BoundedString.html#BoundedString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB BoundedString",
          "module": "Database.HaskellDB.BoundedString",
          "name": "BoundedString",
          "package": "haskelldb",
          "partial": "Bounded String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BoundedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDBDirect generates a Haskell module from a database.\n It first reads the system catalog of the database into\n a \u003ccode\u003eCatalog\u003c/code\u003e data type. After that it pretty prints that\n data structure in an appropiate Haskell module which\n can be used to perform queries on the database.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBDirect",
          "name": "DBDirect",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBDirect.html",
          "type": "module"
        },
        "index": {
          "description": "DBDirect generates Haskell module from database It first reads the system catalog of the database into Catalog data type After that it pretty prints that data structure in an appropiate Haskell module which can be used to perform queries on the database",
          "hierarchy": "Database HaskellDB DBDirect",
          "module": "Database.HaskellDB.DBDirect",
          "name": "DBDirect",
          "package": "haskelldb",
          "partial": "DBDirect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBDirect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBDirect",
          "name": "dbdirect",
          "package": "haskelldb",
          "signature": "DriverInterface -\u003e IO ()",
          "source": "src/Database-HaskellDB-DBDirect.html#dbdirect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBDirect",
          "module": "Database.HaskellDB.DBDirect",
          "name": "dbdirect",
          "normalized": "DriverInterface-\u003eIO()",
          "package": "haskelldb",
          "signature": "DriverInterface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBDirect.html#v:dbdirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports every function needed by DBDirect generated \n files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "DBLayout",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBLayout.html",
          "type": "module"
        },
        "index": {
          "description": "Exports every function needed by DBDirect generated files",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "DBLayout",
          "package": "haskelldb",
          "partial": "DBLayout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Attr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "Typed attributes",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Attr",
          "package": "haskelldb",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e is a user-readable and manipulable\n representation of the internal \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "CalendarTime",
          "package": "haskelldb",
          "type": "data"
        },
        "index": {
          "description": "CalendarTime is user-readable and manipulable representation of the internal ClockTime type",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "CalendarTime",
          "package": "haskelldb",
          "partial": "Calendar Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:CalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Expr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Type of normal expressions contains the untyped PrimExpr",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Expr",
          "package": "haskelldb",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for field labels.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "FieldTag",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#FieldTag",
          "type": "class"
        },
        "index": {
          "description": "Class for field labels",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "FieldTag",
          "package": "haskelldb",
          "partial": "Field Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:FieldTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple day and time aggregate, where the day is of the specified parameter,\n and the time is a TimeOfDay.\n Conversion of this (as local civil time) to UTC depends on the time zone.\n Conversion of this (as local mean time) to UT1 depends on the longitude.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "LocalTime",
          "package": "haskelldb",
          "type": "data"
        },
        "index": {
          "description": "simple day and time aggregate where the day is of the specified parameter and the time is TimeOfDay Conversion of this as local civil time to UTC depends on the time zone Conversion of this as local mean time to UT1 depends on the longitude",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "LocalTime",
          "package": "haskelldb",
          "partial": "Local Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:LocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor that adds a field to a record.\n f is the field tag, a is the field value and b is the rest of the record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "RecCons",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#RecCons",
          "type": "data"
        },
        "index": {
          "description": "Constructor that adds field to record is the field tag is the field value and is the rest of the record",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "RecCons",
          "package": "haskelldb",
          "partial": "Rec Cons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:RecCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "RecNil",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#RecNil",
          "type": "data"
        },
        "index": {
          "description": "The empty record",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "RecNil",
          "package": "haskelldb",
          "partial": "Rec Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:RecNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Table",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Table",
          "type": "data"
        },
        "index": {
          "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "Table",
          "package": "haskelldb",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the field from a one-field record to another record.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBLayout\",\"Database.HaskellDB.HDBRec\",\"Database.HaskellDB\"]",
          "name": "(#)",
          "package": "haskelldb",
          "signature": "Record (RecCons f a RecNil)-\u003e (b -\u003e c)-\u003e b -\u003e RecCons f a c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:-35-\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:-35-\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-35-\"]"
        },
        "index": {
          "description": "Adds the field from one-field record to another record",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "(#) #",
          "normalized": "Record(RecCons a b RecNil)-\u003e(c-\u003ed)-\u003ec-\u003eRecCons a b d",
          "package": "haskelldb",
          "signature": "Record(RecCons f a RecNil)-\u003e(b-\u003ec)-\u003eb-\u003eRecCons f a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBLayout\",\"Database.HaskellDB.Query\"]",
          "name": "baseTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e Record r -\u003e Table r",
          "source": "src/Database-HaskellDB-Query.html#baseTable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:baseTable\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:baseTable\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "baseTable",
          "normalized": "TableName-\u003eRecord a-\u003eTable a",
          "package": "haskelldb",
          "partial": "Table",
          "signature": "TableName-\u003eRecord r-\u003eTable r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:baseTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor queries against fake tables, such as\n 'information_schema.information_schema_catalog_name'. Useful for\n constructing queries that contain constant data (and do not select\n from columns) but need a table to select from.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBLayout\",\"Database.HaskellDB.Query\"]",
          "name": "emptyTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e Table (Record RecNil)",
          "source": "src/Database-HaskellDB-Query.html#emptyTable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:emptyTable\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:emptyTable\"]"
        },
        "index": {
          "description": "For queries against fake tables such as information schema.information schema catalog name Useful for constructing queries that contain constant data and do not select from columns but need table to select from",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "emptyTable",
          "normalized": "TableName-\u003eTable(Record RecNil)",
          "package": "haskelldb",
          "partial": "Table",
          "signature": "TableName-\u003eTable(Record RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:emptyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the label.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "fieldName",
          "package": "haskelldb",
          "signature": "f -\u003e String",
          "source": "src/Database-HaskellDB-HDBRec.html#fieldName",
          "type": "method"
        },
        "index": {
          "description": "Gets the name of the label",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "fieldName",
          "normalized": "a-\u003eString",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "f-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a table entry from a field tag\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "hdbMakeEntry",
          "package": "haskelldb",
          "signature": "f-\u003e Record (RecCons f (Expr a) RecNil)",
          "type": "function"
        },
        "index": {
          "description": "Constructs table entry from field tag",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "hdbMakeEntry",
          "normalized": "a-\u003eRecord(RecCons a(Expr b)RecNil)",
          "package": "haskelldb",
          "partial": "Make Entry",
          "signature": "f-\u003eRecord(RecCons f(Expr a)RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:hdbMakeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e for a field.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBLayout",
          "name": "mkAttr",
          "package": "haskelldb",
          "signature": "f-\u003e Attr f a",
          "type": "function"
        },
        "index": {
          "description": "Make an Attr for field",
          "hierarchy": "Database HaskellDB DBLayout",
          "module": "Database.HaskellDB.DBLayout",
          "name": "mkAttr",
          "normalized": "a-\u003eAttr a b",
          "package": "haskelldb",
          "partial": "Attr",
          "signature": "f-\u003eAttr f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:mkAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the \u003ca\u003ecore\u003c/a\u003e file of the DBSpec files. It defines\n a DBInfo and important functions on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html",
          "type": "module"
        },
        "index": {
          "description": "This is the core file of the DBSpec files It defines DBInfo and important functions on it",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBInfo",
          "package": "haskelldb",
          "partial": "DBInfo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "CInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "CInfo",
          "package": "haskelldb",
          "partial": "CInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:CInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a database layout, top level\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "data"
        },
        "index": {
          "description": "Defines database layout top level",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBInfo",
          "package": "haskelldb",
          "partial": "DBInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:DBInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBOptions",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBOptions",
          "package": "haskelldb",
          "partial": "DBOptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:DBOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "TInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "TInfo",
          "package": "haskelldb",
          "partial": "TInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:TInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "CInfo",
          "package": "haskelldb",
          "signature": "CInfo",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:CInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:CInfo\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "CInfo",
          "package": "haskelldb",
          "partial": "CInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:CInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "DBInfo",
          "package": "haskelldb",
          "signature": "DBInfo",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DBInfo\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBInfo",
          "package": "haskelldb",
          "partial": "DBInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "DBOptions",
          "package": "haskelldb",
          "signature": "DBOptions",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBOptions\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DBOptions\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "DBOptions",
          "package": "haskelldb",
          "partial": "DBOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "TInfo",
          "package": "haskelldb",
          "signature": "TInfo",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:TInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:TInfo\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "TInfo",
          "package": "haskelldb",
          "partial": "TInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:TInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this column\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "cname",
          "package": "haskelldb",
          "signature": "String",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cname\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:cname\"]"
        },
        "index": {
          "description": "The name of this column",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "cname",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe columns in this table\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "cols",
          "package": "haskelldb",
          "signature": "[CInfo]",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cols\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:cols\"]"
        },
        "index": {
          "description": "The columns in this table",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "cols",
          "normalized": "[CInfo]",
          "package": "haskelldb",
          "signature": "[CInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a DBInfo that doesn't cause nameclashes\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "constructNonClashingDBInfo",
          "package": "haskelldb",
          "signature": "DBInfo -\u003e DBInfo",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#constructNonClashingDBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:constructNonClashingDBInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:constructNonClashingDBInfo\"]"
        },
        "index": {
          "description": "Constructs DBInfo that doesn cause nameclashes",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "constructNonClashingDBInfo",
          "normalized": "DBInfo-\u003eDBInfo",
          "package": "haskelldb",
          "partial": "Non Clashing DBInfo",
          "signature": "DBInfo-\u003eDBInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:constructNonClashingDBInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a valid declaration of a DBInfo. The variable name will be the\n   same as the database name\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "dbInfoToDoc",
          "package": "haskelldb",
          "signature": "DBInfo -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#dbInfoToDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbInfoToDoc\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbInfoToDoc\"]"
        },
        "index": {
          "description": "Creates valid declaration of DBInfo The variable name will be the same as the database name",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "dbInfoToDoc",
          "normalized": "DBInfo-\u003eDoc",
          "package": "haskelldb",
          "partial": "Info To Doc",
          "signature": "DBInfo-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbInfoToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the database\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "dbname",
          "package": "haskelldb",
          "signature": "String",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbname\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbname\"]"
        },
        "index": {
          "description": "The name of the database",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "dbname",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe description of this column\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "descr",
          "package": "haskelldb",
          "signature": "FieldDesc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:descr\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:descr\"]"
        },
        "index": {
          "description": "The description of this column",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "descr",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:descr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a final \u003ca\u003etouching up\u003c/a\u003e of a DBInfo before it is used by i.e DBDirect.\n This converts any Bounded Strings to ordinary strings if that flag is set.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "finalizeSpec",
          "package": "haskelldb",
          "signature": "DBInfo -\u003e DBInfo",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#finalizeSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:finalizeSpec\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:finalizeSpec\"]"
        },
        "index": {
          "description": "Does final touching up of DBInfo before it is used by i.e DBDirect This converts any Bounded Strings to ordinary strings if that flag is set",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "finalizeSpec",
          "normalized": "DBInfo-\u003eDBInfo",
          "package": "haskelldb",
          "partial": "Spec",
          "signature": "DBInfo-\u003eDBInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:finalizeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a CInfo\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "makeCInfo",
          "package": "haskelldb",
          "signature": "String-\u003e FieldDesc-\u003e CInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeCInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeCInfo\"]"
        },
        "index": {
          "description": "Creates CInfo",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "makeCInfo",
          "normalized": "String-\u003eFieldDesc-\u003eCInfo",
          "package": "haskelldb",
          "partial": "CInfo",
          "signature": "String-\u003eFieldDesc-\u003eCInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeCInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a DBInfo\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "makeDBSpec",
          "package": "haskelldb",
          "signature": "String-\u003e DBOptions-\u003e [TInfo]-\u003e DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeDBSpec\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeDBSpec\"]"
        },
        "index": {
          "description": "Creates DBInfo",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "makeDBSpec",
          "normalized": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo",
          "package": "haskelldb",
          "partial": "DBSpec",
          "signature": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeDBSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion routines from Database identifiers to Haskell identifiers\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "makeIdent",
          "package": "haskelldb",
          "signature": "MakeIdentifiers",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeIdent\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeIdent\"]"
        },
        "index": {
          "description": "Conversion routines from Database identifiers to Haskell identifiers",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "makeIdent",
          "package": "haskelldb",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a TInfo\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "makeTInfo",
          "package": "haskelldb",
          "signature": "String-\u003e [CInfo]-\u003e TInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeTInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeTInfo\"]"
        },
        "index": {
          "description": "Creates TInfo",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "makeTInfo",
          "normalized": "String-\u003e[CInfo]-\u003eTInfo",
          "package": "haskelldb",
          "partial": "TInfo",
          "signature": "String-\u003e[CInfo]-\u003eTInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeTInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny options (i.e whether to use\n   Bounded Strings)\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "opts",
          "package": "haskelldb",
          "signature": "DBOptions",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:opts\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:opts\"]"
        },
        "index": {
          "description": "Any options i.e whether to use Bounded Strings",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "opts",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "ppCInfo",
          "package": "haskelldb",
          "signature": "CInfo -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppCInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppCInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppCInfo\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "ppCInfo",
          "normalized": "CInfo-\u003eDoc",
          "package": "haskelldb",
          "partial": "CInfo",
          "signature": "CInfo-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppCInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a DBInfo\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "ppDBInfo",
          "package": "haskelldb",
          "signature": "DBInfo -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppDBInfo\"]"
        },
        "index": {
          "description": "Pretty prints DBInfo",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "ppDBInfo",
          "normalized": "DBInfo-\u003eDoc",
          "package": "haskelldb",
          "partial": "DBInfo",
          "signature": "DBInfo-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "ppDBOptions",
          "package": "haskelldb",
          "signature": "DBOptions -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBOptions\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppDBOptions\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "ppDBOptions",
          "normalized": "DBOptions-\u003eDoc",
          "package": "haskelldb",
          "partial": "DBOptions",
          "signature": "DBOptions-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "ppTInfo",
          "package": "haskelldb",
          "signature": "TInfo -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppTInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppTInfo\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppTInfo\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "ppTInfo",
          "normalized": "TInfo-\u003eDoc",
          "package": "haskelldb",
          "partial": "TInfo",
          "signature": "TInfo-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppTInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTables this database contains\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "tbls",
          "package": "haskelldb",
          "signature": "[TInfo]",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tbls\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:tbls\"]"
        },
        "index": {
          "description": "Tables this database contains",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "tbls",
          "normalized": "[TInfo]",
          "package": "haskelldb",
          "signature": "[TInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tbls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the table\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "tname",
          "package": "haskelldb",
          "signature": "String",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tname\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:tname\"]"
        },
        "index": {
          "description": "The name of the table",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "tname",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse Bounded Strings?\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBInfo\",\"Database.HaskellDB.DBSpec\"]",
          "name": "useBString",
          "package": "haskelldb",
          "signature": "Bool",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:useBString\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:useBString\"]"
        },
        "index": {
          "description": "Use Bounded Strings",
          "hierarchy": "Database HaskellDB DBSpec DBInfo",
          "module": "Database.HaskellDB.DBSpec.DBInfo",
          "name": "useBString",
          "package": "haskelldb",
          "partial": "BString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:useBString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverts a DBSpec-generated database to a set of\n (FilePath,Doc), that can be used to generate definition\n files usable in HaskellDB (the generation itself is done\n in DBDirect)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "DBSpecToDBDirect",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html",
          "type": "module"
        },
        "index": {
          "description": "Converts DBSpec-generated database to set of FilePath Doc that can be used to generate definition files usable in HaskellDB the generation itself is done in DBDirect",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "DBSpecToDBDirect",
          "package": "haskelldb",
          "partial": "DBSpec To DBDirect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate module files in the given directory for the given DBInfo\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "dbInfoToModuleFiles",
          "package": "haskelldb",
          "signature": "FilePath-\u003e String-\u003e DBInfo-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create module files in the given directory for the given DBInfo",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "dbInfoToModuleFiles",
          "normalized": "FilePath-\u003eString-\u003eDBInfo-\u003eIO()",
          "package": "haskelldb",
          "partial": "Info To Module Files",
          "signature": "FilePath-\u003eString-\u003eDBInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#v:dbInfoToModuleFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a database specification to a set of module names\n   and module contents. The first element of the returned list\n   is the top-level module.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "specToHDB",
          "package": "haskelldb",
          "signature": "String-\u003e DBInfo-\u003e [(String, Doc)]",
          "type": "function"
        },
        "index": {
          "description": "Converts database specification to set of module names and module contents The first element of the returned list is the top-level module",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
          "name": "specToHDB",
          "normalized": "String-\u003eDBInfo-\u003e[(String,Doc)]",
          "package": "haskelldb",
          "partial": "To HDB",
          "signature": "String-\u003eDBInfo-\u003e[(String,Doc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#v:specToHDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnects to a database and generates stuff in it according\n to what's inside the DBSpec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
          "name": "DBSpecToDatabase",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBSpecToDatabase.html",
          "type": "module"
        },
        "index": {
          "description": "Connects to database and generates stuff in it according to what inside the DBSpec",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
          "name": "DBSpecToDatabase",
          "package": "haskelldb",
          "partial": "DBSpec To Database",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a DBInfo to a real life Database, note that the database must\n exist for this to work\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DBSpecToDatabase\",\"Database.HaskellDB.DBSpec\"]",
          "name": "dbSpecToDatabase",
          "package": "haskelldb",
          "signature": "Database-\u003e DBInfo-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#v:dbSpecToDatabase\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbSpecToDatabase\"]"
        },
        "index": {
          "description": "Converts DBInfo to real life Database note that the database must exist for this to work",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
          "name": "dbSpecToDatabase",
          "normalized": "Database-\u003eDBInfo-\u003eIO()",
          "package": "haskelldb",
          "partial": "Spec To Database",
          "signature": "Database-\u003eDBInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#v:dbSpecToDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a database table specified by a \u003ccode\u003e\u003ca\u003eTInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
          "name": "tInfoToTable",
          "package": "haskelldb",
          "signature": "Database -\u003e TInfo -\u003e IO ()",
          "source": "src/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#tInfoToTable",
          "type": "function"
        },
        "index": {
          "description": "Create database table specified by TInfo",
          "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
          "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
          "name": "tInfoToTable",
          "normalized": "Database-\u003eTInfo-\u003eIO()",
          "package": "haskelldb",
          "partial": "Info To Table",
          "signature": "Database-\u003eTInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#v:tInfoToTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnects to a Database and generates a DBSpec specification\n from it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
          "name": "DatabaseToDBSpec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html",
          "type": "module"
        },
        "index": {
          "description": "Connects to Database and generates DBSpec specification from it",
          "hierarchy": "Database HaskellDB DBSpec DatabaseToDBSpec",
          "module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
          "name": "DatabaseToDBSpec",
          "package": "haskelldb",
          "partial": "Database To DBSpec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a database and generates a specification from it\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.DBSpec.DatabaseToDBSpec\",\"Database.HaskellDB.DBSpec\"]",
          "name": "dbToDBSpec",
          "package": "haskelldb",
          "signature": "Bool-\u003e MakeIdentifiers-\u003e String-\u003e Database-\u003e IO DBInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html#v:dbToDBSpec\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbToDBSpec\"]"
        },
        "index": {
          "description": "Connects to database and generates specification from it",
          "hierarchy": "Database HaskellDB DBSpec DatabaseToDBSpec",
          "module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
          "name": "dbToDBSpec",
          "normalized": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo",
          "package": "haskelldb",
          "partial": "To DBSpec",
          "signature": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html#v:dbToDBSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious functions used when pretty printing stuff\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "PPHelpers",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html",
          "type": "module"
        },
        "index": {
          "description": "Various functions used when pretty printing stuff",
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "PPHelpers",
          "package": "haskelldb",
          "partial": "PPHelpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "MakeIdentifiers",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "MakeIdentifiers",
          "package": "haskelldb",
          "partial": "Make Identifiers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#t:MakeIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "MakeIdentifiers",
          "package": "haskelldb",
          "signature": "MakeIdentifiers",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "MakeIdentifiers",
          "package": "haskelldb",
          "partial": "Make Identifiers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:MakeIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkChars",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkChars",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Chars",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkKeyword",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkKeyword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkKeyword",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Keyword",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkLower",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkLower",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Lower",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkLowerDef",
          "package": "haskelldb",
          "signature": "Char -\u003e [Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkLowerDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkLowerDef",
          "normalized": "Char-\u003e[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Lower Def",
          "signature": "Char-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkLowerDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkUpper",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkUpper",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Upper",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkUpperDef",
          "package": "haskelldb",
          "signature": "Char -\u003e [Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkUpperDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "checkUpperDef",
          "normalized": "Char-\u003e[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Upper Def",
          "signature": "Char-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkUpperDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "fileName",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#fileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "fileName",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "identifier",
          "package": "haskelldb",
          "signature": "String -\u003e String",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "identifier",
          "normalized": "String-\u003eString",
          "package": "haskelldb",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "mkIdentCamelCase",
          "package": "haskelldb",
          "signature": "MakeIdentifiers",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#mkIdentCamelCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "mkIdentCamelCase",
          "package": "haskelldb",
          "partial": "Ident Camel Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:mkIdentCamelCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "mkIdentPreserving",
          "package": "haskelldb",
          "signature": "MakeIdentifiers",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#mkIdentPreserving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "mkIdentPreserving",
          "package": "haskelldb",
          "partial": "Ident Preserving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:mkIdentPreserving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "moduleName",
          "package": "haskelldb",
          "signature": "String -\u003e String",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "moduleName",
          "normalized": "String-\u003eString",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:moduleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "newline",
          "package": "haskelldb",
          "signature": "Doc",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#newline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "newline",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "ppComment",
          "package": "haskelldb",
          "signature": "[[Char]] -\u003e Doc",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#ppComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "ppComment",
          "normalized": "[[Char]]-\u003eDoc",
          "package": "haskelldb",
          "partial": "Comment",
          "signature": "[[Char]]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:ppComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e to any separating character set.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "split",
          "package": "haskelldb",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#split",
          "type": "function"
        },
        "index": {
          "description": "Generalization of words and lines to any separating character set",
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "split",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "haskelldb",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toLowerCamelCase",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#toLowerCamelCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toLowerCamelCase",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Lower Camel Case",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toLowerCamelCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toType",
          "package": "haskelldb",
          "signature": "String -\u003e String",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toType",
          "normalized": "String-\u003eString",
          "package": "haskelldb",
          "partial": "Type",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toUpperCamelCase",
          "package": "haskelldb",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#toUpperCamelCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec PPHelpers",
          "module": "Database.HaskellDB.DBSpec.PPHelpers",
          "name": "toUpperCamelCase",
          "normalized": "[Char]-\u003e[Char]",
          "package": "haskelldb",
          "partial": "Upper Camel Case",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toUpperCamelCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDBSpec is the new and improved way of specifying databases.\n It is designed to be able to describe a database in such a \n way that it can easily be converted to a DBDirect-spec OR\n directly into a database\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBSpec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec.html",
          "type": "module"
        },
        "index": {
          "description": "DBSpec is the new and improved way of specifying databases It is designed to be able to describe database in such way that it can easily be converted to DBDirect-spec OR directly into database",
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBSpec",
          "package": "haskelldb",
          "partial": "DBSpec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec",
          "name": "CInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "CInfo",
          "package": "haskelldb",
          "partial": "CInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:CInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a database layout, top level\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
          "type": "data"
        },
        "index": {
          "description": "Defines database layout top level",
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBInfo",
          "package": "haskelldb",
          "partial": "DBInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:DBInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBOptions",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DBOptions",
          "package": "haskelldb",
          "partial": "DBOptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:DBOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type and \u003ccode\u003enullable\u003c/code\u003e flag of a database column\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec",
          "name": "FieldDesc",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#FieldDesc",
          "type": "type"
        },
        "index": {
          "description": "The type and nullable flag of database column",
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "FieldDesc",
          "package": "haskelldb",
          "partial": "Field Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:FieldDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA database column type\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DBSpec",
          "name": "FieldType",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "data"
        },
        "index": {
          "description": "database column type",
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "FieldType",
          "package": "haskelldb",
          "partial": "Field Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DBSpec",
          "name": "TInfo",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "TInfo",
          "package": "haskelldb",
          "partial": "TInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:TInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "BStrT",
          "package": "haskelldb",
          "signature": "BStrT Int",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BStrT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:BStrT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "BStrT",
          "package": "haskelldb",
          "partial": "BStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BStrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "BoolT",
          "package": "haskelldb",
          "signature": "BoolT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BoolT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:BoolT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "BoolT",
          "package": "haskelldb",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BoolT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "CalendarTimeT",
          "package": "haskelldb",
          "signature": "CalendarTimeT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:CalendarTimeT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:CalendarTimeT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "CalendarTimeT",
          "package": "haskelldb",
          "partial": "Calendar Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:CalendarTimeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "DoubleT",
          "package": "haskelldb",
          "signature": "DoubleT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DoubleT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:DoubleT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "DoubleT",
          "package": "haskelldb",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DoubleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "IntT",
          "package": "haskelldb",
          "signature": "IntT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:IntT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "IntT",
          "package": "haskelldb",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "IntegerT",
          "package": "haskelldb",
          "signature": "IntegerT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntegerT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:IntegerT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "IntegerT",
          "package": "haskelldb",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntegerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "LocalTimeT",
          "package": "haskelldb",
          "signature": "LocalTimeT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:LocalTimeT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:LocalTimeT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "LocalTimeT",
          "package": "haskelldb",
          "partial": "Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:LocalTimeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.DBSpec\",\"Database.HaskellDB.FieldType\"]",
          "name": "StringT",
          "package": "haskelldb",
          "signature": "StringT",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:StringT\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:StringT\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB DBSpec",
          "module": "Database.HaskellDB.DBSpec",
          "name": "StringT",
          "package": "haskelldb",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:StringT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines standard database operations and the\n primitive hooks that a particular database binding\n must provide.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html",
          "type": "module"
        },
        "index": {
          "description": "Defines standard database operations and the primitive hooks that particular database binding must provide",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "partial": "Database",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "partial": "Database",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions for getting values of a given type. Database drivers\n   need to implement these functions and pass this record to \u003ccode\u003e\u003ca\u003egetRec\u003c/a\u003e\u003c/code\u003e\n   when getting query results.\n\u003c/p\u003e\u003cp\u003eAll these functions should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the value is NULL.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "GetInstances",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "data"
        },
        "index": {
          "description": "Functions for getting values of given type Database drivers need to implement these functions and pass this record to getRec when getting query results All these functions should return Nothing if the value is NULL",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "GetInstances",
          "package": "haskelldb",
          "partial": "Get Instances",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "GetRec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html#GetRec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "GetRec",
          "package": "haskelldb",
          "partial": "Get Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "GetValue",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html#GetValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "GetValue",
          "package": "haskelldb",
          "partial": "Get Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (!.) operator selects over returned records from\n   the database (= rows)\n   Non-overloaded version of \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e. For backwards compatibility.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "(!.)",
          "package": "haskelldb",
          "signature": "r -\u003e f -\u003e a",
          "source": "src/Database-HaskellDB-Database.html#%21.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:-33-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-33-.\"]"
        },
        "index": {
          "description": "The operator selects over returned records from the database rows Non-overloaded version of For backwards compatibility",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "(!.) !.",
          "normalized": "a-\u003eb-\u003ec",
          "package": "haskelldb",
          "signature": "r-\u003ef-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:-33-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "signature": "Database",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "Database",
          "package": "haskelldb",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "GetInstances",
          "package": "haskelldb",
          "signature": "GetInstances",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "GetInstances",
          "package": "haskelldb",
          "partial": "Get Instances",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:GetInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit any pending data to the database.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "commit",
          "package": "haskelldb",
          "signature": "Database-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Commit any pending data to the database",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "commit",
          "normalized": "Database-\u003eIO()",
          "package": "haskelldb",
          "signature": "Database-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs not very useful. You need to be root to use it. \n   We suggest you solve this in another way\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "createDB",
          "package": "haskelldb",
          "signature": "Database-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Is not very useful You need to be root to use it We suggest you solve this in another way",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "createDB",
          "normalized": "Database-\u003eString-\u003eIO()",
          "package": "haskelldb",
          "partial": "DB",
          "signature": "Database-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:createDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "createTable",
          "package": "haskelldb",
          "signature": "Database-\u003e TableName-\u003e [(Attribute, FieldDesc)]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "createTable",
          "normalized": "Database-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
          "package": "haskelldb",
          "partial": "Table",
          "signature": "Database-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:createTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbCommit",
          "package": "haskelldb",
          "signature": "IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbCommit",
          "normalized": "IO()",
          "package": "haskelldb",
          "partial": "Commit",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbCreateDB",
          "package": "haskelldb",
          "signature": "String -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbCreateDB",
          "normalized": "String-\u003eIO()",
          "package": "haskelldb",
          "partial": "Create DB",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCreateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbCreateTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e [(Attribute, FieldDesc)] -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbCreateTable",
          "normalized": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
          "package": "haskelldb",
          "partial": "Create Table",
          "signature": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbDelete",
          "package": "haskelldb",
          "signature": "TableName -\u003e [PrimExpr] -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbDelete",
          "normalized": "TableName-\u003e[PrimExpr]-\u003eIO()",
          "package": "haskelldb",
          "partial": "Delete",
          "signature": "TableName-\u003e[PrimExpr]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbDescribe",
          "package": "haskelldb",
          "signature": "TableName -\u003e IO [(Attribute, FieldDesc)]",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbDescribe",
          "normalized": "TableName-\u003eIO[(Attribute,FieldDesc)]",
          "package": "haskelldb",
          "partial": "Describe",
          "signature": "TableName-\u003eIO[(Attribute,FieldDesc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDescribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbDropDB",
          "package": "haskelldb",
          "signature": "String -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbDropDB",
          "normalized": "String-\u003eIO()",
          "package": "haskelldb",
          "partial": "Drop DB",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbDropTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbDropTable",
          "normalized": "TableName-\u003eIO()",
          "package": "haskelldb",
          "partial": "Drop Table",
          "signature": "TableName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbInsert",
          "package": "haskelldb",
          "signature": "TableName -\u003e Assoc -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbInsert",
          "normalized": "TableName-\u003eAssoc-\u003eIO()",
          "package": "haskelldb",
          "partial": "Insert",
          "signature": "TableName-\u003eAssoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbInsertQuery",
          "package": "haskelldb",
          "signature": "TableName -\u003e PrimQuery -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbInsertQuery",
          "normalized": "TableName-\u003ePrimQuery-\u003eIO()",
          "package": "haskelldb",
          "partial": "Insert Query",
          "signature": "TableName-\u003ePrimQuery-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbInsertQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbQuery",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e Rel er -\u003e IO [Record vr]",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbQuery",
          "normalized": "PrimQuery-\u003eRel a-\u003eIO[Record b]",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "PrimQuery-\u003eRel er-\u003eIO[Record vr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbTables",
          "package": "haskelldb",
          "signature": "IO [TableName]",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbTables",
          "normalized": "IO[TableName]",
          "package": "haskelldb",
          "partial": "Tables",
          "signature": "IO[TableName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbTransaction",
          "package": "haskelldb",
          "signature": "forall a.  IO a -\u003e IO a",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbTransaction",
          "normalized": "a b IO c-\u003eIO c",
          "package": "haskelldb",
          "partial": "Transaction",
          "signature": "forall a. IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dbUpdate",
          "package": "haskelldb",
          "signature": "TableName -\u003e [PrimExpr] -\u003e Assoc -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dbUpdate",
          "normalized": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eIO()",
          "package": "haskelldb",
          "partial": "Update",
          "signature": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeletes a bunch of records\t  \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "delete",
          "package": "haskelldb",
          "signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:delete\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:delete\"]"
        },
        "index": {
          "description": "deletes bunch of records",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "delete",
          "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003eIO()",
          "package": "haskelldb",
          "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all columns in a table, along with their types\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "describe",
          "package": "haskelldb",
          "signature": "Database-\u003e TableName-\u003e IO [(Attribute, FieldDesc)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:describe\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:describe\"]"
        },
        "index": {
          "description": "List all columns in table along with their types",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "describe",
          "normalized": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]",
          "package": "haskelldb",
          "signature": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dropDB",
          "package": "haskelldb",
          "signature": "Database-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dropDB",
          "normalized": "Database-\u003eString-\u003eIO()",
          "package": "haskelldb",
          "partial": "DB",
          "signature": "Database-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "dropTable",
          "package": "haskelldb",
          "signature": "Database-\u003e TableName-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "dropTable",
          "normalized": "Database-\u003eTableName-\u003eIO()",
          "package": "haskelldb",
          "partial": "Table",
          "signature": "Database-\u003eTableName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getBool",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe Bool)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get Bool value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getBool",
          "normalized": "a-\u003eString-\u003eIO(Maybe Bool)",
          "package": "haskelldb",
          "partial": "Bool",
          "signature": "s-\u003eString-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getCalendarTime",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe CalendarTime)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get CalendarTime value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getCalendarTime",
          "normalized": "a-\u003eString-\u003eIO(Maybe CalendarTime)",
          "package": "haskelldb",
          "partial": "Calendar Time",
          "signature": "s-\u003eString-\u003eIO(Maybe CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getDouble",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe Double)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get Double value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getDouble",
          "normalized": "a-\u003eString-\u003eIO(Maybe Double)",
          "package": "haskelldb",
          "partial": "Double",
          "signature": "s-\u003eString-\u003eIO(Maybe Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getInt",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe Int)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get an Int value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getInt",
          "normalized": "a-\u003eString-\u003eIO(Maybe Int)",
          "package": "haskelldb",
          "partial": "Int",
          "signature": "s-\u003eString-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getInteger",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe Integer)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get an Integer value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getInteger",
          "normalized": "a-\u003eString-\u003eIO(Maybe Integer)",
          "package": "haskelldb",
          "partial": "Integer",
          "signature": "s-\u003eString-\u003eIO(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getLocalTime",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe LocalTime)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get LocalTime value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getLocalTime",
          "normalized": "a-\u003eString-\u003eIO(Maybe LocalTime)",
          "package": "haskelldb",
          "partial": "Local Time",
          "signature": "s-\u003eString-\u003eIO(Maybe LocalTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a result record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getRec",
          "package": "haskelldb",
          "signature": "getRec",
          "source": "src/Database-HaskellDB-Database.html#getRec",
          "type": "method"
        },
        "index": {
          "description": "Create result record",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getRec",
          "package": "haskelldb",
          "partial": "Rec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Database",
          "name": "getString",
          "package": "haskelldb",
          "signature": "s -\u003e String -\u003e IO (Maybe String)",
          "source": "src/Database-HaskellDB-Database.html#GetInstances",
          "type": "function"
        },
        "index": {
          "description": "Get String value",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getString",
          "normalized": "a-\u003eString-\u003eIO(Maybe String)",
          "package": "haskelldb",
          "partial": "String",
          "signature": "s-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Database",
          "name": "getValue",
          "package": "haskelldb",
          "signature": "GetInstances s -\u003e s -\u003e String -\u003e IO a",
          "source": "src/Database-HaskellDB-Database.html#getValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "getValue",
          "normalized": "GetInstances a-\u003ea-\u003eString-\u003eIO b",
          "package": "haskelldb",
          "partial": "Value",
          "signature": "GetInstances s-\u003es-\u003eString-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a record into a table\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "insert",
          "package": "haskelldb",
          "signature": "Database -\u003e Table er -\u003e Record r -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insert\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:insert\"]"
        },
        "index": {
          "description": "Inserts record into table",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "insert",
          "normalized": "Database-\u003eTable a-\u003eRecord b-\u003eIO()",
          "package": "haskelldb",
          "signature": "Database-\u003eTable er-\u003eRecord r-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts values from a query into a table\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "insertQuery",
          "package": "haskelldb",
          "signature": "Database -\u003e Table r -\u003e Query (Rel r) -\u003e IO ()",
          "source": "src/Database-HaskellDB-Database.html#insertQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insertQuery\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:insertQuery\"]"
        },
        "index": {
          "description": "Inserts values from query into table",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "insertQuery",
          "normalized": "Database-\u003eTable a-\u003eQuery(Rel a)-\u003eIO()",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Database-\u003eTable r-\u003eQuery(Rel r)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insertQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperforms a query on a database\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "query",
          "package": "haskelldb",
          "signature": "Database -\u003e Query (Rel er) -\u003e IO [Record vr]",
          "source": "src/Database-HaskellDB-Database.html#query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:query\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:query\"]"
        },
        "index": {
          "description": "performs query on database",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "query",
          "normalized": "Database-\u003eQuery(Rel a)-\u003eIO[Record b]",
          "package": "haskelldb",
          "signature": "Database-\u003eQuery(Rel er)-\u003eIO[Record vr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all tables in the database\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "tables",
          "package": "haskelldb",
          "signature": "Database-\u003e IO [TableName]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:tables\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:tables\"]"
        },
        "index": {
          "description": "List all tables in the database",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "tables",
          "normalized": "Database-\u003eIO[TableName]",
          "package": "haskelldb",
          "signature": "Database-\u003eIO[TableName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms some database action in a transaction. If no exception is thrown,\n   the changes are committed. \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "transaction",
          "package": "haskelldb",
          "signature": "Database-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:transaction\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:transaction\"]"
        },
        "index": {
          "description": "Performs some database action in transaction If no exception is thrown the changes are committed",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "transaction",
          "normalized": "Database-\u003eIO a-\u003eIO a",
          "package": "haskelldb",
          "signature": "Database-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates records\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Database\",\"Database.HaskellDB\"]",
          "name": "update",
          "package": "haskelldb",
          "signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e (Rel r -\u003e Record s)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:update\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:update\"]"
        },
        "index": {
          "description": "Updates records",
          "hierarchy": "Database HaskellDB Database",
          "module": "Database.HaskellDB.Database",
          "name": "update",
          "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003e(Rel a-\u003eRecord b)-\u003eIO()",
          "package": "haskelldb",
          "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003e(Rel r-\u003eRecord s)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis exports an API that all drivers must conform to. It\n is used by the end user to load drivers either dynamically\n or statically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverAPI",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DriverAPI.html",
          "type": "module"
        },
        "index": {
          "description": "This exports an API that all drivers must conform to It is used by the end user to load drivers either dynamically or statically",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverAPI",
          "package": "haskelldb",
          "partial": "Driver API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverInterface",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
          "type": "data"
        },
        "index": {
          "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverInterface",
          "package": "haskelldb",
          "partial": "Driver Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#t:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "MonadIO",
          "package": "haskelldb",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "MonadIO",
          "package": "haskelldb",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverInterface",
          "package": "haskelldb",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "DriverInterface",
          "package": "haskelldb",
          "partial": "Driver Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:DriverInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DriverAPI",
          "name": "connect",
          "package": "haskelldb",
          "signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
          "source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "connect",
          "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
          "package": "haskelldb",
          "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault dummy driver, real drivers should overload this\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "defaultdriver",
          "package": "haskelldb",
          "signature": "DriverInterface",
          "source": "src/Database-HaskellDB-DriverAPI.html#defaultdriver",
          "type": "function"
        },
        "index": {
          "description": "Default dummy driver real drivers should overload this",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "defaultdriver",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:defaultdriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used by drivers to get option values from the given\n   list of name, value pairs.\n   It is intended for use with the \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e value of the driver.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getAnnotatedOptions",
          "package": "haskelldb",
          "signature": "[(String, String)]-\u003e [(String, String)]-\u003e m [String]",
          "type": "function"
        },
        "index": {
          "description": "Can be used by drivers to get option values from the given list of name value pairs It is intended for use with the requiredOptions value of the driver",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getAnnotatedOptions",
          "normalized": "[(String,String)]-\u003e[(String,String)]-\u003ea[String]",
          "package": "haskelldb",
          "partial": "Annotated Options",
          "signature": "[(String,String)]-\u003e[(String,String)]-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getAnnotatedOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets an \u003ccode\u003e\u003ca\u003eSqlGenerator\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003egenerator\u003c/a\u003e option in the given list.\n   Currently available generators: \u003ca\u003emysql\u003c/a\u003e, \u003ca\u003epostgresql\u003c/a\u003e, \u003ca\u003esqlite\u003c/a\u003e, \u003ca\u003edefault\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getGenerator",
          "package": "haskelldb",
          "signature": "[(String, String)]-\u003e m SqlGenerator",
          "type": "function"
        },
        "index": {
          "description": "Gets an SqlGenerator from the generator option in the given list Currently available generators mysql postgresql sqlite default",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getGenerator",
          "normalized": "[(String,String)]-\u003ea SqlGenerator",
          "package": "haskelldb",
          "partial": "Generator",
          "signature": "[(String,String)]-\u003em SqlGenerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used by drivers to get option values from the given\n   list of name, value pairs.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getOptions",
          "package": "haskelldb",
          "signature": "[String]-\u003e [(String, String)]-\u003e m [String]",
          "type": "function"
        },
        "index": {
          "description": "Can be used by drivers to get option values from the given list of name value pairs",
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "getOptions",
          "normalized": "[String]-\u003e[(String,String)]-\u003ea[String]",
          "package": "haskelldb",
          "partial": "Options",
          "signature": "[String]-\u003e[(String,String)]-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.DriverAPI",
          "name": "requiredOptions",
          "package": "haskelldb",
          "signature": "[(String, String)]",
          "source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB DriverAPI",
          "module": "Database.HaskellDB.DriverAPI",
          "name": "requiredOptions",
          "normalized": "[(String,String)]",
          "package": "haskelldb",
          "partial": "Options",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:requiredOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the types of database columns, and functions\n for converting these between HSQL and internal formats\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldType",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the types of database columns and functions for converting these between HSQL and internal formats",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldType",
          "package": "haskelldb",
          "partial": "Field Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass which retrieves a field description from a given type.\n Instances are provided for most concrete types. Instances\n for Maybe automatically make the field nullable, and instances\n for all (Expr a) types where a has an ExprType instance allows\n type information to be recovered from a given column expression.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "ExprType",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#ExprType",
          "type": "class"
        },
        "index": {
          "description": "Class which retrieves field description from given type Instances are provided for most concrete types Instances for Maybe automatically make the field nullable and instances for all Expr types where has an ExprType instance allows type information to be recovered from given column expression",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "ExprType",
          "package": "haskelldb",
          "partial": "Expr Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:ExprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass which returns a list of field descriptions. Gets the\n descriptions of all columns in a Record/query. Most useful when\n the columns associated with each field in a (Rel r) type must be\n recovered. Note that this occurs at the type level only and no\n values are inspected.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "ExprTypes",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#ExprTypes",
          "type": "class"
        },
        "index": {
          "description": "Class which returns list of field descriptions Gets the descriptions of all columns in Record query Most useful when the columns associated with each field in Rel type must be recovered Note that this occurs at the type level only and no values are inspected",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "ExprTypes",
          "package": "haskelldb",
          "partial": "Expr Types",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:ExprTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type and \u003ccode\u003enullable\u003c/code\u003e flag of a database column\n\u003c/p\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldDesc",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#FieldDesc",
          "type": "type"
        },
        "index": {
          "description": "The type and nullable flag of database column",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldDesc",
          "package": "haskelldb",
          "partial": "Field Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:FieldDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA database column type\n\u003c/p\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldType",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-FieldType.html#FieldType",
          "type": "data"
        },
        "index": {
          "description": "database column type",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "FieldType",
          "package": "haskelldb",
          "partial": "Field Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.FieldType",
          "name": "fromHaskellType",
          "package": "haskelldb",
          "signature": "e -\u003e FieldDesc",
          "source": "src/Database-HaskellDB-FieldType.html#fromHaskellType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "fromHaskellType",
          "normalized": "a-\u003eFieldDesc",
          "package": "haskelldb",
          "partial": "Haskell Type",
          "signature": "e-\u003eFieldDesc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:fromHaskellType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.FieldType",
          "name": "fromHaskellTypes",
          "package": "haskelldb",
          "signature": "r -\u003e [FieldDesc]",
          "source": "src/Database-HaskellDB-FieldType.html#fromHaskellTypes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "fromHaskellTypes",
          "normalized": "a-\u003e[FieldDesc]",
          "package": "haskelldb",
          "partial": "Haskell Types",
          "signature": "r-\u003e[FieldDesc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:fromHaskellTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a query, returns a list of the field names and their\n types used by the query. Useful for recovering field information\n once a query has been built up. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.FieldType",
          "name": "queryFields",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e [(String, FieldDesc)]",
          "source": "src/Database-HaskellDB-FieldType.html#queryFields",
          "type": "function"
        },
        "index": {
          "description": "Given query returns list of the field names and their types used by the query Useful for recovering field information once query has been built up",
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "queryFields",
          "normalized": "Query(Rel a)-\u003e[(String,FieldDesc)]",
          "package": "haskelldb",
          "partial": "Fields",
          "signature": "Query(Rel r)-\u003e[(String,FieldDesc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:queryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.FieldType",
          "name": "toHaskellType",
          "package": "haskelldb",
          "signature": "FieldType -\u003e String",
          "source": "src/Database-HaskellDB-FieldType.html#toHaskellType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB FieldType",
          "module": "Database.HaskellDB.FieldType",
          "name": "toHaskellType",
          "normalized": "FieldType-\u003eString",
          "package": "haskelldb",
          "partial": "Haskell Type",
          "signature": "FieldType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:toHaskellType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a replacement for some of TREX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "HDBRec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html",
          "type": "module"
        },
        "index": {
          "description": "This is replacement for some of TREX",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "HDBRec",
          "package": "haskelldb",
          "partial": "HDBRec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for field labels.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "FieldTag",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#FieldTag",
          "type": "class"
        },
        "index": {
          "description": "Class for field labels",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "FieldTag",
          "package": "haskelldb",
          "partial": "Field Tag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:FieldTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe record \u003ccode\u003er\u003c/code\u003e has the field \u003ccode\u003ef\u003c/code\u003e if there is an instance of\n   \u003ccode\u003eHasField f r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "HasField",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#HasField",
          "type": "class"
        },
        "index": {
          "description": "The record has the field if there is an instance of HasField",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "HasField",
          "package": "haskelldb",
          "partial": "Has Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:HasField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "ReadRecRow",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#ReadRecRow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "ReadRecRow",
          "package": "haskelldb",
          "partial": "Read Rec Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ReadRecRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCat",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#RecCat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCat",
          "package": "haskelldb",
          "partial": "Rec Cat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor that adds a field to a record.\n f is the field tag, a is the field value and b is the rest of the record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCons",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#RecCons",
          "type": "data"
        },
        "index": {
          "description": "Constructor that adds field to record is the field tag is the field value and is the rest of the record",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCons",
          "package": "haskelldb",
          "partial": "Rec Cons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecNil",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#RecNil",
          "type": "data"
        },
        "index": {
          "description": "The empty record",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecNil",
          "package": "haskelldb",
          "partial": "Rec Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type used for records. This is a function\n   that takes a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e so that the user does not have to \n   put a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e at the end of every record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "Record",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#Record",
          "type": "type"
        },
        "index": {
          "description": "The type used for records This is function that takes RecNil so that the user does not have to put RecNil at the end of every record",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "Record",
          "package": "haskelldb",
          "partial": "Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "Select",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#Select",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "Select",
          "package": "haskelldb",
          "partial": "Select",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "SetField",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#SetField",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "SetField",
          "package": "haskelldb",
          "partial": "Set Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:SetField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "ShowLabels",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#ShowLabels",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "ShowLabels",
          "package": "haskelldb",
          "partial": "Show Labels",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ShowLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a record to a list of label names and field values.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "ShowRecRow",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#ShowRecRow",
          "type": "class"
        },
        "index": {
          "description": "Convert record to list of label names and field values",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "ShowRecRow",
          "package": "haskelldb",
          "partial": "Show Rec Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ShowRecRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField selection operator. It is overloaded so that\n   users (read HaskellDB) can redefine it for things\n   with phantom record types.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "(!)",
          "package": "haskelldb",
          "signature": "r -\u003e f -\u003e a",
          "source": "src/Database-HaskellDB-HDBRec.html#%21",
          "type": "method"
        },
        "index": {
          "description": "Field selection operator It is overloaded so that users read HaskellDB can redefine it for things with phantom record types",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "(!) !",
          "normalized": "a-\u003eb-\u003ec",
          "package": "haskelldb",
          "signature": "r-\u003ef-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates one-field record from a label and a value\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "(.=.)",
          "package": "haskelldb",
          "signature": "l f a-\u003e a-\u003e Record (RecCons f a RecNil)",
          "type": "function"
        },
        "index": {
          "description": "Creates one-field record from label and value",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "(.=.) .=.",
          "normalized": "a b c-\u003ec-\u003eRecord(RecCons b c RecNil)",
          "package": "haskelldb",
          "signature": "l f a-\u003ea-\u003eRecord(RecCons f a RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:.-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCons",
          "package": "haskelldb",
          "signature": "RecCons a b",
          "source": "src/Database-HaskellDB-HDBRec.html#RecCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecCons",
          "package": "haskelldb",
          "partial": "Rec Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:RecCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecNil",
          "package": "haskelldb",
          "signature": "RecNil",
          "source": "src/Database-HaskellDB-HDBRec.html#RecNil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "RecNil",
          "package": "haskelldb",
          "partial": "Rec Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:RecNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty record\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "emptyRecord",
          "package": "haskelldb",
          "signature": "Record RecNil",
          "source": "src/Database-HaskellDB-HDBRec.html#emptyRecord",
          "type": "function"
        },
        "index": {
          "description": "The empty record",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "emptyRecord",
          "package": "haskelldb",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:emptyRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the label.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "fieldName",
          "package": "haskelldb",
          "signature": "f -\u003e String",
          "source": "src/Database-HaskellDB-HDBRec.html#fieldName",
          "type": "method"
        },
        "index": {
          "description": "Gets the name of the label",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "fieldName",
          "normalized": "a-\u003eString",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "f-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of labels and strins representating values\n   to a record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "readRecRow",
          "package": "haskelldb",
          "signature": "[(String, String)] -\u003e [(r, [(String, String)])]",
          "source": "src/Database-HaskellDB-HDBRec.html#readRecRow",
          "type": "method"
        },
        "index": {
          "description": "Convert list of labels and strins representating values to record",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "readRecRow",
          "normalized": "[(String,String)]-\u003e[(a,[(String,String)])]",
          "package": "haskelldb",
          "partial": "Rec Row",
          "signature": "[(String,String)]-\u003e[(r,[(String,String)])]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:readRecRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two records.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.HDBRec",
          "name": "recCat",
          "package": "haskelldb",
          "signature": "r1 -\u003e r2 -\u003e r3",
          "source": "src/Database-HaskellDB-HDBRec.html#recCat",
          "type": "method"
        },
        "index": {
          "description": "Concatenates two records",
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "recCat",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskelldb",
          "partial": "Cat",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:recCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "recordLabels",
          "package": "haskelldb",
          "signature": "r -\u003e [String]",
          "source": "src/Database-HaskellDB-HDBRec.html#recordLabels",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "recordLabels",
          "normalized": "a-\u003e[String]",
          "package": "haskelldb",
          "partial": "Labels",
          "signature": "r-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:recordLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "setField",
          "package": "haskelldb",
          "signature": "l f a -\u003e a -\u003e r -\u003e r",
          "source": "src/Database-HaskellDB-HDBRec.html#setField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "setField",
          "normalized": "a b c-\u003ec-\u003ed-\u003ed",
          "package": "haskelldb",
          "partial": "Field",
          "signature": "l f a-\u003ea-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:setField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.HDBRec",
          "name": "showRecRow",
          "package": "haskelldb",
          "signature": "r -\u003e [(String, ShowS)]",
          "source": "src/Database-HaskellDB-HDBRec.html#showRecRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB HDBRec",
          "module": "Database.HaskellDB.HDBRec",
          "name": "showRecRow",
          "normalized": "a-\u003e[(String,ShowS)]",
          "package": "haskelldb",
          "partial": "Rec Row",
          "signature": "r-\u003e[(String,ShowS)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:showRecRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines standard optimizations performed on PrimQuery's\n (relational expressions).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Optimize",
          "name": "Optimize",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Optimize.html",
          "type": "module"
        },
        "index": {
          "description": "Defines standard optimizations performed on PrimQuery relational expressions",
          "hierarchy": "Database HaskellDB Optimize",
          "module": "Database.HaskellDB.Optimize",
          "name": "Optimize",
          "package": "haskelldb",
          "partial": "Optimize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize a PrimQuery\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Optimize",
          "name": "optimize",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e PrimQuery",
          "source": "src/Database-HaskellDB-Optimize.html#optimize",
          "type": "function"
        },
        "index": {
          "description": "Optimize PrimQuery",
          "hierarchy": "Database HaskellDB Optimize",
          "module": "Database.HaskellDB.Optimize",
          "name": "optimize",
          "normalized": "PrimQuery-\u003ePrimQuery",
          "package": "haskelldb",
          "signature": "PrimQuery-\u003ePrimQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize a set of criteria.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Optimize",
          "name": "optimizeCriteria",
          "package": "haskelldb",
          "signature": "[PrimExpr] -\u003e [PrimExpr]",
          "source": "src/Database-HaskellDB-Optimize.html#optimizeCriteria",
          "type": "function"
        },
        "index": {
          "description": "Optimize set of criteria",
          "hierarchy": "Database HaskellDB Optimize",
          "module": "Database.HaskellDB.Optimize",
          "name": "optimizeCriteria",
          "normalized": "[PrimExpr]-\u003e[PrimExpr]",
          "package": "haskelldb",
          "partial": "Criteria",
          "signature": "[PrimExpr]-\u003e[PrimExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#v:optimizeCriteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimQuery defines the datatype of relational expressions\n (\u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e) and some useful functions on PrimQuery's\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimQuery",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html",
          "type": "module"
        },
        "index": {
          "description": "PrimQuery defines the datatype of relational expressions PrimQuery and some useful functions on PrimQuery",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimQuery",
          "package": "haskelldb",
          "partial": "Prim Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrOp",
          "package": "haskelldb",
          "partial": "Aggr Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:AggrOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Assoc",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#Assoc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Assoc",
          "package": "haskelldb",
          "partial": "Assoc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Attribute",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#Attribute",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Attribute",
          "package": "haskelldb",
          "partial": "Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BinOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BinOp",
          "package": "haskelldb",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Literal",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Literal",
          "package": "haskelldb",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Name",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Name",
          "package": "haskelldb",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderExpr",
          "package": "haskelldb",
          "partial": "Order Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:OrderExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderOp",
          "package": "haskelldb",
          "partial": "Order Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:OrderOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimExpr",
          "package": "haskelldb",
          "partial": "Prim Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:PrimExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimQuery",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "PrimQuery",
          "package": "haskelldb",
          "partial": "Prim Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:PrimQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "RelOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "RelOp",
          "package": "haskelldb",
          "partial": "Rel Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:RelOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Scheme",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#Scheme",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Scheme",
          "package": "haskelldb",
          "partial": "Scheme",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "SpecialOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "SpecialOp",
          "package": "haskelldb",
          "partial": "Special Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:SpecialOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "TableName",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#TableName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "TableName",
          "package": "haskelldb",
          "partial": "Table Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:TableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnOp",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnOp",
          "package": "haskelldb",
          "partial": "Un Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:UnOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrAvg",
          "package": "haskelldb",
          "signature": "AggrAvg",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrAvg",
          "package": "haskelldb",
          "partial": "Aggr Avg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrCount",
          "package": "haskelldb",
          "signature": "AggrCount",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrCount",
          "package": "haskelldb",
          "partial": "Aggr Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrExpr",
          "package": "haskelldb",
          "signature": "AggrExpr AggrOp PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrExpr",
          "package": "haskelldb",
          "partial": "Aggr Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrMax",
          "package": "haskelldb",
          "signature": "AggrMax",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrMax",
          "package": "haskelldb",
          "partial": "Aggr Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrMin",
          "package": "haskelldb",
          "signature": "AggrMin",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrMin",
          "package": "haskelldb",
          "partial": "Aggr Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrOther",
          "package": "haskelldb",
          "signature": "AggrOther String",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrOther",
          "package": "haskelldb",
          "partial": "Aggr Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrStdDev",
          "package": "haskelldb",
          "signature": "AggrStdDev",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrStdDev",
          "package": "haskelldb",
          "partial": "Aggr Std Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrStdDevP",
          "package": "haskelldb",
          "signature": "AggrStdDevP",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrStdDevP",
          "package": "haskelldb",
          "partial": "Aggr Std Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrStdDevP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrSum",
          "package": "haskelldb",
          "signature": "AggrSum",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrSum",
          "package": "haskelldb",
          "partial": "Aggr Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrVar",
          "package": "haskelldb",
          "signature": "AggrVar",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrVar",
          "package": "haskelldb",
          "partial": "Aggr Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrVarP",
          "package": "haskelldb",
          "signature": "AggrVarP",
          "source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AggrVarP",
          "package": "haskelldb",
          "partial": "Aggr Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AttrExpr",
          "package": "haskelldb",
          "signature": "AttrExpr Attribute",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "AttrExpr",
          "package": "haskelldb",
          "partial": "Attr Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AttrExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BaseTable",
          "package": "haskelldb",
          "signature": "BaseTable TableName Scheme",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BaseTable",
          "package": "haskelldb",
          "partial": "Base Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BaseTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BinExpr",
          "package": "haskelldb",
          "signature": "BinExpr BinOp PrimExpr PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BinExpr",
          "package": "haskelldb",
          "partial": "Bin Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BinExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Binary",
          "package": "haskelldb",
          "signature": "Binary RelOp PrimQuery PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Binary",
          "package": "haskelldb",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BoolLit",
          "package": "haskelldb",
          "signature": "BoolLit Bool",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "BoolLit",
          "package": "haskelldb",
          "partial": "Bool Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BoolLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "CaseExpr",
          "package": "haskelldb",
          "signature": "CaseExpr [(PrimExpr, PrimExpr)] PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "CaseExpr",
          "normalized": "CaseExpr[(PrimExpr,PrimExpr)]PrimExpr",
          "package": "haskelldb",
          "partial": "Case Expr",
          "signature": "CaseExpr[(PrimExpr,PrimExpr)]PrimExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:CaseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast an expression to a given type.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "CastExpr",
          "package": "haskelldb",
          "signature": "CastExpr Name PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "description": "Cast an expression to given type",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "CastExpr",
          "package": "haskelldb",
          "partial": "Cast Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:CastExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ConstExpr",
          "package": "haskelldb",
          "signature": "ConstExpr Literal",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ConstExpr",
          "package": "haskelldb",
          "partial": "Const Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ConstExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DateLit",
          "package": "haskelldb",
          "signature": "DateLit CalendarTime",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DateLit",
          "package": "haskelldb",
          "partial": "Date Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DateLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresents a default value\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DefaultLit",
          "package": "haskelldb",
          "signature": "DefaultLit",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "represents default value",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DefaultLit",
          "package": "haskelldb",
          "partial": "Default Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DefaultLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Difference",
          "package": "haskelldb",
          "signature": "Difference",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Difference",
          "package": "haskelldb",
          "partial": "Difference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Divide",
          "package": "haskelldb",
          "signature": "Divide",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Divide",
          "package": "haskelldb",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DoubleLit",
          "package": "haskelldb",
          "signature": "DoubleLit Double",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "DoubleLit",
          "package": "haskelldb",
          "partial": "Double Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DoubleLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Empty",
          "package": "haskelldb",
          "signature": "Empty",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Empty",
          "package": "haskelldb",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "FunExpr",
          "package": "haskelldb",
          "signature": "FunExpr Name [PrimExpr]",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "FunExpr",
          "normalized": "FunExpr Name[PrimExpr]",
          "package": "haskelldb",
          "partial": "Fun Expr",
          "signature": "FunExpr Name[PrimExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:FunExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Group",
          "package": "haskelldb",
          "signature": "Group Assoc PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Group",
          "package": "haskelldb",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "IntegerLit",
          "package": "haskelldb",
          "signature": "IntegerLit Integer",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "IntegerLit",
          "package": "haskelldb",
          "partial": "Integer Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:IntegerLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Intersect",
          "package": "haskelldb",
          "signature": "Intersect",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Intersect",
          "package": "haskelldb",
          "partial": "Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ListExpr",
          "package": "haskelldb",
          "signature": "ListExpr [PrimExpr]",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ListExpr",
          "normalized": "ListExpr[PrimExpr]",
          "package": "haskelldb",
          "partial": "List Expr",
          "signature": "ListExpr[PrimExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ListExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "NullLit",
          "package": "haskelldb",
          "signature": "NullLit",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "NullLit",
          "package": "haskelldb",
          "partial": "Null Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:NullLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAnd",
          "package": "haskelldb",
          "signature": "OpAnd",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAnd",
          "package": "haskelldb",
          "partial": "Op And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAsc",
          "package": "haskelldb",
          "signature": "OpAsc",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAsc",
          "package": "haskelldb",
          "partial": "Op Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAsg",
          "package": "haskelldb",
          "signature": "OpAsg",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpAsg",
          "package": "haskelldb",
          "partial": "Op Asg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitAnd",
          "package": "haskelldb",
          "signature": "OpBitAnd",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitAnd",
          "package": "haskelldb",
          "partial": "Op Bit And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitNot",
          "package": "haskelldb",
          "signature": "OpBitNot",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitNot",
          "package": "haskelldb",
          "partial": "Op Bit Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitOr",
          "package": "haskelldb",
          "signature": "OpBitOr",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitOr",
          "package": "haskelldb",
          "partial": "Op Bit Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitXor",
          "package": "haskelldb",
          "signature": "OpBitXor",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpBitXor",
          "package": "haskelldb",
          "partial": "Op Bit Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpCat",
          "package": "haskelldb",
          "signature": "OpCat",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpCat",
          "package": "haskelldb",
          "partial": "Op Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpDesc",
          "package": "haskelldb",
          "signature": "OpDesc",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpDesc",
          "package": "haskelldb",
          "partial": "Op Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpDiv",
          "package": "haskelldb",
          "signature": "OpDiv",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpDiv",
          "package": "haskelldb",
          "partial": "Op Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpEq",
          "package": "haskelldb",
          "signature": "OpEq",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpEq",
          "package": "haskelldb",
          "partial": "Op Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpGt",
          "package": "haskelldb",
          "signature": "OpGt",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpGt",
          "package": "haskelldb",
          "partial": "Op Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpGtEq",
          "package": "haskelldb",
          "signature": "OpGtEq",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpGtEq",
          "package": "haskelldb",
          "partial": "Op Gt Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpGtEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIn",
          "package": "haskelldb",
          "signature": "OpIn",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIn",
          "package": "haskelldb",
          "partial": "Op In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIsNotNull",
          "package": "haskelldb",
          "signature": "OpIsNotNull",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIsNotNull",
          "package": "haskelldb",
          "partial": "Op Is Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIsNotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIsNull",
          "package": "haskelldb",
          "signature": "OpIsNull",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpIsNull",
          "package": "haskelldb",
          "partial": "Op Is Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLength",
          "package": "haskelldb",
          "signature": "OpLength",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLength",
          "package": "haskelldb",
          "partial": "Op Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLike",
          "package": "haskelldb",
          "signature": "OpLike",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLike",
          "package": "haskelldb",
          "partial": "Op Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLt",
          "package": "haskelldb",
          "signature": "OpLt",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLt",
          "package": "haskelldb",
          "partial": "Op Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLtEq",
          "package": "haskelldb",
          "signature": "OpLtEq",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpLtEq",
          "package": "haskelldb",
          "partial": "Op Lt Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLtEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMinus",
          "package": "haskelldb",
          "signature": "OpMinus",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMinus",
          "package": "haskelldb",
          "partial": "Op Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMod",
          "package": "haskelldb",
          "signature": "OpMod",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMod",
          "package": "haskelldb",
          "partial": "Op Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMul",
          "package": "haskelldb",
          "signature": "OpMul",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpMul",
          "package": "haskelldb",
          "partial": "Op Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpNot",
          "package": "haskelldb",
          "signature": "OpNot",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpNot",
          "package": "haskelldb",
          "partial": "Op Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpNotEq",
          "package": "haskelldb",
          "signature": "OpNotEq",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpNotEq",
          "package": "haskelldb",
          "partial": "Op Not Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpNotEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpOr",
          "package": "haskelldb",
          "signature": "OpOr",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpOr",
          "package": "haskelldb",
          "partial": "Op Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpOther",
          "package": "haskelldb",
          "signature": "OpOther String",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpOther",
          "package": "haskelldb",
          "partial": "Op Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpPlus",
          "package": "haskelldb",
          "signature": "OpPlus",
          "source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OpPlus",
          "package": "haskelldb",
          "partial": "Op Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Order",
          "package": "haskelldb",
          "signature": "Order [OrderExpr]",
          "source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Order",
          "normalized": "Order[OrderExpr]",
          "package": "haskelldb",
          "partial": "Order",
          "signature": "Order[OrderExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderExpr",
          "package": "haskelldb",
          "signature": "OrderExpr OrderOp PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OrderExpr",
          "package": "haskelldb",
          "partial": "Order Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OrderExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for hacking in custom SQL\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OtherLit",
          "package": "haskelldb",
          "signature": "OtherLit String",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "description": "used for hacking in custom SQL",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "OtherLit",
          "package": "haskelldb",
          "partial": "Other Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OtherLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ParamExpr",
          "package": "haskelldb",
          "signature": "ParamExpr (Maybe Name) PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "ParamExpr",
          "package": "haskelldb",
          "partial": "Param Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ParamExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Project",
          "package": "haskelldb",
          "signature": "Project Assoc PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Project",
          "package": "haskelldb",
          "partial": "Project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Restrict",
          "package": "haskelldb",
          "signature": "Restrict PrimExpr PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Restrict",
          "package": "haskelldb",
          "partial": "Restrict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Special",
          "package": "haskelldb",
          "signature": "Special SpecialOp PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Special",
          "package": "haskelldb",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "StringLit",
          "package": "haskelldb",
          "signature": "StringLit String",
          "source": "src/Database-HaskellDB-PrimQuery.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "StringLit",
          "package": "haskelldb",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Times",
          "package": "haskelldb",
          "signature": "Times",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Times",
          "package": "haskelldb",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Top",
          "package": "haskelldb",
          "signature": "Top Int",
          "source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Top",
          "package": "haskelldb",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnExpr",
          "package": "haskelldb",
          "signature": "UnExpr UnOp PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnExpr",
          "package": "haskelldb",
          "partial": "Un Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:UnExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnOpOther",
          "package": "haskelldb",
          "signature": "UnOpOther String",
          "source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "UnOpOther",
          "package": "haskelldb",
          "partial": "Un Op Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:UnOpOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Union",
          "package": "haskelldb",
          "signature": "Union",
          "source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "Union",
          "package": "haskelldb",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all attributes in an expression.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attrInExpr",
          "package": "haskelldb",
          "signature": "PrimExpr -\u003e Scheme",
          "source": "src/Database-HaskellDB-PrimQuery.html#attrInExpr",
          "type": "function"
        },
        "index": {
          "description": "Returns all attributes in an expression",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attrInExpr",
          "normalized": "PrimExpr-\u003eScheme",
          "package": "haskelldb",
          "partial": "In Expr",
          "signature": "PrimExpr-\u003eScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attrInExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all attributes in a list of ordering expressions.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attrInOrder",
          "package": "haskelldb",
          "signature": "[OrderExpr] -\u003e Scheme",
          "source": "src/Database-HaskellDB-PrimQuery.html#attrInOrder",
          "type": "function"
        },
        "index": {
          "description": "Returns all attributes in list of ordering expressions",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attrInOrder",
          "normalized": "[OrderExpr]-\u003eScheme",
          "package": "haskelldb",
          "partial": "In Order",
          "signature": "[OrderExpr]-\u003eScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attrInOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the schema (the attributes) of a query\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attributes",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e Scheme",
          "source": "src/Database-HaskellDB-PrimQuery.html#attributes",
          "type": "function"
        },
        "index": {
          "description": "Returns the schema the attributes of query",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "attributes",
          "normalized": "PrimQuery-\u003eScheme",
          "package": "haskelldb",
          "signature": "PrimQuery-\u003eScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a projection of some attributes while\n   keeping all other attributes in the relation visible too. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "extend",
          "package": "haskelldb",
          "signature": "Assoc -\u003e PrimQuery -\u003e PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#extend",
          "type": "function"
        },
        "index": {
          "description": "Creates projection of some attributes while keeping all other attributes in the relation visible too",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "extend",
          "normalized": "Assoc-\u003ePrimQuery-\u003ePrimQuery",
          "package": "haskelldb",
          "signature": "Assoc-\u003ePrimQuery-\u003ePrimQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold on \u003ccode\u003e\u003ca\u003ePrimExpr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "foldPrimExpr",
          "package": "haskelldb",
          "signature": "(Attribute -\u003e t, Literal -\u003e t, BinOp -\u003e t -\u003e t -\u003e t, UnOp -\u003e t -\u003e t, AggrOp -\u003e t -\u003e t, [(t, t)] -\u003e t -\u003e t, [t] -\u003e t, Maybe Name -\u003e t -\u003e t, Name -\u003e [t] -\u003e t, Name -\u003e t -\u003e t) -\u003e PrimExpr -\u003e t",
          "source": "src/Database-HaskellDB-PrimQuery.html#foldPrimExpr",
          "type": "function"
        },
        "index": {
          "description": "Fold on PrimExpr",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "foldPrimExpr",
          "normalized": "(Attribute-\u003ea,Literal-\u003ea,BinOp-\u003ea-\u003ea-\u003ea,UnOp-\u003ea-\u003ea,AggrOp-\u003ea-\u003ea,[(a,a)]-\u003ea-\u003ea,[a]-\u003ea,Maybe Name-\u003ea-\u003ea,Name-\u003e[a]-\u003ea,Name-\u003ea-\u003ea)-\u003ePrimExpr-\u003ea",
          "package": "haskelldb",
          "partial": "Prim Expr",
          "signature": "(Attribute-\u003et,Literal-\u003et,BinOp-\u003et-\u003et-\u003et,UnOp-\u003et-\u003et,AggrOp-\u003et-\u003et,[(t,t)]-\u003et-\u003et,[t]-\u003et,Maybe Name-\u003et-\u003et,Name-\u003e[t]-\u003et,Name-\u003et-\u003et)-\u003ePrimExpr-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:foldPrimExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold on \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "foldPrimQuery",
          "package": "haskelldb",
          "signature": "(t, TableName -\u003e Scheme -\u003e t, Assoc -\u003e t -\u003e t, PrimExpr -\u003e t -\u003e t, RelOp -\u003e t -\u003e t -\u003e t, Assoc -\u003e t -\u003e t, SpecialOp -\u003e t -\u003e t) -\u003e PrimQuery -\u003e t",
          "source": "src/Database-HaskellDB-PrimQuery.html#foldPrimQuery",
          "type": "function"
        },
        "index": {
          "description": "Fold on PrimQuery",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "foldPrimQuery",
          "normalized": "(a,TableName-\u003eScheme-\u003ea,Assoc-\u003ea-\u003ea,PrimExpr-\u003ea-\u003ea,RelOp-\u003ea-\u003ea-\u003ea,Assoc-\u003ea-\u003ea,SpecialOp-\u003ea-\u003ea)-\u003ePrimQuery-\u003ea",
          "package": "haskelldb",
          "partial": "Prim Query",
          "signature": "(t,TableName-\u003eScheme-\u003et,Assoc-\u003et-\u003et,PrimExpr-\u003et-\u003et,RelOp-\u003et-\u003et-\u003et,Assoc-\u003et-\u003et,SpecialOp-\u003et-\u003et)-\u003ePrimQuery-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:foldPrimQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrimQuery",
          "name": "isAggregate",
          "package": "haskelldb",
          "signature": "PrimExpr -\u003e Bool",
          "source": "src/Database-HaskellDB-PrimQuery.html#isAggregate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "isAggregate",
          "normalized": "PrimExpr-\u003eBool",
          "package": "haskelldb",
          "partial": "Aggregate",
          "signature": "PrimExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:isAggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if a primitive expression represents a constant\n or is an expression only involving constants.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "isConstant",
          "package": "haskelldb",
          "signature": "PrimExpr -\u003e Bool",
          "source": "src/Database-HaskellDB-PrimQuery.html#isConstant",
          "type": "function"
        },
        "index": {
          "description": "Determines if primitive expression represents constant or is an expression only involving constants",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "isConstant",
          "normalized": "PrimExpr-\u003eBool",
          "package": "haskelldb",
          "partial": "Constant",
          "signature": "PrimExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:isConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute attribute names in an expression.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "substAttr",
          "package": "haskelldb",
          "signature": "Assoc -\u003e PrimExpr -\u003e PrimExpr",
          "source": "src/Database-HaskellDB-PrimQuery.html#substAttr",
          "type": "function"
        },
        "index": {
          "description": "Substitute attribute names in an expression",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "substAttr",
          "normalized": "Assoc-\u003ePrimExpr-\u003ePrimExpr",
          "package": "haskelldb",
          "partial": "Attr",
          "signature": "Assoc-\u003ePrimExpr-\u003ePrimExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:substAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the cartesian product of two queries.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "times",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e PrimQuery -\u003e PrimQuery",
          "source": "src/Database-HaskellDB-PrimQuery.html#times",
          "type": "function"
        },
        "index": {
          "description": "Takes the cartesian product of two queries",
          "hierarchy": "Database HaskellDB PrimQuery",
          "module": "Database.HaskellDB.PrimQuery",
          "name": "times",
          "normalized": "PrimQuery-\u003ePrimQuery-\u003ePrimQuery",
          "package": "haskelldb",
          "signature": "PrimQuery-\u003ePrimQuery-\u003ePrimQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthor      :  Justin Bailey (jgbailey AT gmail DOT com)\n Pretty printing for Query, PrimQuery, and SqlSelect values.\n Useful for debugging the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "PrintQuery",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrintQuery.html",
          "type": "module"
        },
        "index": {
          "description": "Author Justin Bailey jgbailey AT gmail DOT com Pretty printing for Query PrimQuery and SqlSelect values Useful for debugging the library",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "PrintQuery",
          "package": "haskelldb",
          "partial": "Print Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a PrimQuery value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppPrim",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppPrim",
          "type": "function"
        },
        "index": {
          "description": "Pretty print PrimQuery value",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppPrim",
          "normalized": "PrimQuery-\u003eDoc",
          "package": "haskelldb",
          "partial": "Prim",
          "signature": "PrimQuery-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize the query and pretty print the primitive representation.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppQuery",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppQuery",
          "type": "function"
        },
        "index": {
          "description": "Optimize the query and pretty print the primitive representation",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppQuery",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the primitive representation of an unoptimized query.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppQueryUnOpt",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppQueryUnOpt",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the primitive representation of an unoptimized query",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppQueryUnOpt",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Query Un Opt",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppQueryUnOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSelect",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppSelect",
          "type": "function"
        },
        "index": {
          "description": "Take query turn it into SqlSelect and print it",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSelect",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Select",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it, with optimizations.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSelectUnOpt",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppSelectUnOpt",
          "type": "function"
        },
        "index": {
          "description": "Take query turn it into SqlSelect and print it with optimizations",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSelectUnOpt",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Select Un Opt",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSelectUnOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSql",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppSql",
          "type": "function"
        },
        "index": {
          "description": "Take query turn it into SqlSelect and print it",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSql",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Sql",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSqlSelect",
          "package": "haskelldb",
          "signature": "SqlSelect -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppSqlSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSqlSelect",
          "normalized": "SqlSelect-\u003eDoc",
          "package": "haskelldb",
          "partial": "Sql Select",
          "signature": "SqlSelect-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSqlSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSqlUnOpt",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Doc",
          "source": "src/Database-HaskellDB-PrintQuery.html#ppSqlUnOpt",
          "type": "function"
        },
        "index": {
          "description": "Take query turn it into SqlSelect and print it",
          "hierarchy": "Database HaskellDB PrintQuery",
          "module": "Database.HaskellDB.PrintQuery",
          "name": "ppSqlUnOpt",
          "normalized": "Query(Rel a)-\u003eDoc",
          "package": "haskelldb",
          "partial": "Sql Un Opt",
          "signature": "Query(Rel r)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSqlUnOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic combinators for building type-safe queries.\n The Query monad constructs a relational expression\n (\u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Query",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html",
          "type": "module"
        },
        "index": {
          "description": "Basic combinators for building type-safe queries The Query monad constructs relational expression PrimQuery",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Query",
          "package": "haskelldb",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to implement variable length arguments to \u003ccode\u003efunc\u003c/code\u003e, below.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Args",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Args",
          "type": "class"
        },
        "index": {
          "description": "Used to implement variable length arguments to func below",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Args",
          "package": "haskelldb",
          "partial": "Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Attr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "Typed attributes",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Attr",
          "package": "haskelldb",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts records w/o Expr (usually from database\n queries) to records with Expr types. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ConstantRecord",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ConstantRecord",
          "type": "class"
        },
        "index": {
          "description": "Converts records Expr usually from database queries to records with Expr types",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ConstantRecord",
          "package": "haskelldb",
          "partial": "Constant Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ConstantRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Expr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Expr",
          "type": "newtype"
        },
        "index": {
          "description": "Type of normal expressions contains the untyped PrimExpr",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Expr",
          "package": "haskelldb",
          "partial": "Expr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of aggregate expressions.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ExprAggr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ExprAggr",
          "type": "newtype"
        },
        "index": {
          "description": "Type of aggregate expressions",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ExprAggr",
          "package": "haskelldb",
          "partial": "Expr Aggr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprAggr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of expression types.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ExprC",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ExprC",
          "type": "class"
        },
        "index": {
          "description": "Class of expression types",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ExprC",
          "package": "haskelldb",
          "partial": "Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of default expressions.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ExprDefault",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ExprDefault",
          "type": "newtype"
        },
        "index": {
          "description": "The type of default expressions",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ExprDefault",
          "package": "haskelldb",
          "partial": "Expr Default",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of records that can be used with \u003ccode\u003einsert\u003c/code\u003e. \n   All all the values must be instances of \u003ccode\u003eInsertExpr\u003c/code\u003e for the\n   record to be an instance of \u003ccode\u003e\u003ca\u003eInsertRec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "InsertRec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#InsertRec",
          "type": "class"
        },
        "index": {
          "description": "Class of records that can be used with insert All all the values must be instances of InsertExpr for the record to be an instance of InsertRec",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "InsertRec",
          "package": "haskelldb",
          "partial": "Insert Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:InsertRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "OrderExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "OrderExpr",
          "package": "haskelldb",
          "partial": "Order Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:OrderExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of expressions that can be used with \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ProjectExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ProjectExpr",
          "type": "class"
        },
        "index": {
          "description": "Class of expressions that can be used with project",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ProjectExpr",
          "package": "haskelldb",
          "partial": "Project Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ProjectExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of records that can be used with \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e. \n   All all the values must be instances of \u003ccode\u003e\u003ca\u003eProjectExpr\u003c/a\u003e\u003c/code\u003e for the\n   record to be an instance of \u003ccode\u003e\u003ca\u003eProjectRec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "ProjectRec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ProjectRec",
          "type": "class"
        },
        "index": {
          "description": "Class of records that can be used with project All all the values must be instances of ProjectExpr for the record to be an instance of ProjectRec",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ProjectRec",
          "package": "haskelldb",
          "partial": "Project Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ProjectRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "Query",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Query",
          "package": "haskelldb",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of relations, contains the attributes\n   of the relation and an \u003ccode\u003eAlias\u003c/code\u003e to which the\n   attributes are renamed in the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Rel",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Rel",
          "type": "data"
        },
        "index": {
          "description": "Type of relations contains the attributes of the relation and an Alias to which the attributes are renamed in the PrimQuery",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Rel",
          "package": "haskelldb",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class which gives a polymorphic\n copy function that can turn a Rel into a Record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "RelToRec",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#RelToRec",
          "type": "class"
        },
        "index": {
          "description": "Helper class which gives polymorphic copy function that can turn Rel into Record",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "RelToRec",
          "package": "haskelldb",
          "partial": "Rel To Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:RelToRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "ShowConstant",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ShowConstant",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ShowConstant",
          "package": "haskelldb",
          "partial": "Show Constant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ShowConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "Table",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Table",
          "type": "data"
        },
        "index": {
          "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Table",
          "package": "haskelldb",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "ToPrimExprs",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ToPrimExprs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ToPrimExprs",
          "package": "haskelldb",
          "partial": "To Prim Exprs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ToPrimExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a record field.\n   Similar to '(.=.)', but gets the field label from an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(\u003c\u003c)",
          "package": "haskelldb",
          "signature": "Attr f a-\u003e e a-\u003e Record (RecCons f (e a) RecNil)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60-\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-60--60-\"]"
        },
        "index": {
          "description": "Creates record field Similar to but gets the field label from an Attr",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(\u003c\u003c) \u003c\u003c",
          "normalized": "Attr a b-\u003ec b-\u003eRecord(RecCons a(c b)RecNil)",
          "package": "haskelldb",
          "signature": "Attr f a-\u003ee a-\u003eRecord(RecCons f(e a)RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience operator for constructing records of constants.\n   Useful primarily with \u003ccode\u003einsert\u003c/code\u003e.\n   \u003ccode\u003ef \u003c\u003c- x\u003c/code\u003e is the same as \u003ccode\u003ef \u003c\u003c constant x\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(\u003c\u003c-)",
          "package": "haskelldb",
          "signature": "Attr f a-\u003e a-\u003e Record (RecCons f (Expr a) RecNil)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60--45-\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-60--60--45-\"]"
        },
        "index": {
          "description": "Convenience operator for constructing records of constants Useful primarily with insert is the same as constant",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(\u003c\u003c-) \u003c\u003c-",
          "normalized": "Attr a b-\u003eb-\u003eRecord(RecCons a(Expr b)RecNil)",
          "package": "haskelldb",
          "signature": "Attr f a-\u003ea-\u003eRecord(RecCons f(Expr a)RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Logical or\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e. OR in SQL.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.||.)",
          "package": "haskelldb",
          "signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%7C%7C.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-124--124-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-124--124-.\"]"
        },
        "index": {
          "description": "Logical or on Expr OR in SQL",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.||.) .||.",
          "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulo\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.%.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#.%25.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-37-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-37-.\"]"
        },
        "index": {
          "description": "Modulo",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.%.) .%.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-37-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Logical and\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e, AND in SQL.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.&&.)",
          "package": "haskelldb",
          "signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%26%26.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-38--38-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-38--38-.\"]"
        },
        "index": {
          "description": "Logical and on Expr AND in SQL",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.&&.) .&&.",
          "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.*.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#.%2A.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-42-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-42-.\"]"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.*.) .*.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two String-expressions. \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.++.)",
          "package": "haskelldb",
          "signature": "Expr String -\u003e Expr String -\u003e Expr String",
          "source": "src/Database-HaskellDB-Query.html#.%2B%2B.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43--43-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-43--43-.\"]"
        },
        "index": {
          "description": "Concatenates two String-expressions",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.++.) .++.",
          "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
          "package": "haskelldb",
          "signature": "Expr String-\u003eExpr String-\u003eExpr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.+.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#.%2B.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-43-.\"]"
        },
        "index": {
          "description": "Addition",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.+.) .+.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.-.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#.-.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-45-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-45-.\"]"
        },
        "index": {
          "description": "Subtraction",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.-.) .-.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(./.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#.%2F.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-47-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-47-.\"]"
        },
        "index": {
          "description": "Division",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(./.) ./.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.\u003c=.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3C%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--61-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60--61-.\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInequality on Exprs, \u003ca/\u003e in SQL.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.\u003c\u003e.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3C%3E.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--62-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60--62-.\"]"
        },
        "index": {
          "description": "Inequality on Exprs in SQL",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.\u003c\u003e.) .\u003c\u003e.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.\u003c.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3C.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60-.\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality comparison on Exprs, = in SQL.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.==.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3D%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-61--61-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-61--61-.\"]"
        },
        "index": {
          "description": "Equality comparison on Exprs in SQL",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.==.) .==.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.\u003e=.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3E%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62--61-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-62--61-.\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "(.\u003e.)",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#.%3E.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62-.\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-62-.\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "Attr",
          "package": "haskelldb",
          "signature": "Attr Attribute",
          "source": "src/Database-HaskellDB-Query.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Attr",
          "package": "haskelldb",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "Expr",
          "package": "haskelldb",
          "signature": "Expr PrimExpr",
          "source": "src/Database-HaskellDB-Query.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Expr",
          "package": "haskelldb",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "ExprAggr",
          "package": "haskelldb",
          "signature": "ExprAggr PrimExpr",
          "source": "src/Database-HaskellDB-Query.html#ExprAggr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ExprAggr",
          "package": "haskelldb",
          "partial": "Expr Aggr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:ExprAggr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "ExprDefault",
          "package": "haskelldb",
          "signature": "ExprDefault PrimExpr",
          "source": "src/Database-HaskellDB-Query.html#ExprDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "ExprDefault",
          "package": "haskelldb",
          "partial": "Expr Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:ExprDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "Rel",
          "package": "haskelldb",
          "signature": "Rel Alias Scheme",
          "source": "src/Database-HaskellDB-Query.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Rel",
          "package": "haskelldb",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "Table",
          "package": "haskelldb",
          "signature": "Table TableName Assoc",
          "source": "src/Database-HaskellDB-Query.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "Table",
          "package": "haskelldb",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a conditional expression.\n   Returns the value of the expression corresponding to the first \n   true condition. If none of the conditions are true, the value of\n   the else-expression is returned.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_case",
          "package": "haskelldb",
          "signature": "[(Expr Bool, Expr a)]-\u003e Expr a-\u003e Expr a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_case\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_case\"]"
        },
        "index": {
          "description": "Creates conditional expression Returns the value of the expression corresponding to the first true condition If none of the conditions are true the value of the else-expression is returned",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_case",
          "normalized": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value of the column. Only works with \u003ccode\u003einsert\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_default",
          "package": "haskelldb",
          "signature": "ExprDefault a",
          "source": "src/Database-HaskellDB-Query.html#_default",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_default\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_default\"]"
        },
        "index": {
          "description": "The default value of the column Only works with insert",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_default",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the value of the first operand is\n   equal to the value of any of the expressions in the \n   list operand. \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_in",
          "package": "haskelldb",
          "signature": "Expr a -\u003e [Expr a] -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#_in",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_in\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_in\"]"
        },
        "index": {
          "description": "Returns true if the value of the first operand is equal to the value of any of the expressions in the list operand",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_in",
          "normalized": "Expr a-\u003e[Expr a]-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr a-\u003e[Expr a]-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the length of a string.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_length",
          "package": "haskelldb",
          "signature": "Expr String -\u003e Expr Int",
          "source": "src/Database-HaskellDB-Query.html#_length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_length\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_length\"]"
        },
        "index": {
          "description": "Gets the length of string",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_length",
          "normalized": "Expr String-\u003eExpr Int",
          "package": "haskelldb",
          "signature": "Expr String-\u003eExpr Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the highest value of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_max",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#_max",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_max\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_max\"]"
        },
        "index": {
          "description": "Returns the highest value of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_max",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the lowest value of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_min",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#_min",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_min\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_min\"]"
        },
        "index": {
          "description": "Returns the lowest value of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_min",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of an Expr Bool.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_not",
          "package": "haskelldb",
          "signature": "Expr Bool -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#_not",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_not\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_not\"]"
        },
        "index": {
          "description": "The inverse of an Expr Bool",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_not",
          "normalized": "Expr Bool-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr Bool-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the total sum of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "_sum",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#_sum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_sum\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_sum\"]"
        },
        "index": {
          "description": "Returns the total sum of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "_sum",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in ascending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "asc",
          "package": "haskelldb",
          "signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
          "source": "src/Database-HaskellDB-Query.html#asc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:asc\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:asc\"]"
        },
        "index": {
          "description": "Use this together with the function order to order the results of query in ascending order Takes relation and an attribute of that relation which is used for the ordering",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "asc",
          "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
          "package": "haskelldb",
          "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "attribute",
          "package": "haskelldb",
          "signature": "String -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "attribute",
          "normalized": "String-\u003eExpr a",
          "package": "haskelldb",
          "signature": "String-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "attributeName",
          "package": "haskelldb",
          "signature": "Attr f a -\u003e Attribute",
          "source": "src/Database-HaskellDB-Query.html#attributeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "attributeName",
          "normalized": "Attr a b-\u003eAttribute",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "Attr f a-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:attributeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the average of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "avg",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#avg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:avg\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:avg\"]"
        },
        "index": {
          "description": "Returns the average of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "avg",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:avg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003eCAST\u003c/code\u003e expression for the given\n expression, using the argument given as the destination\n type. \n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "cast",
          "package": "haskelldb",
          "signature": "String-\u003e Expr a-\u003e Expr b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cast\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:cast\"]"
        },
        "index": {
          "description": "Generates CAST expression for the given expression using the argument given as the destination type",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "cast",
          "normalized": "String-\u003eExpr a-\u003eExpr b",
          "package": "haskelldb",
          "signature": "String-\u003eExpr a-\u003eExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces the concatenation of two String-expressions.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "cat",
          "package": "haskelldb",
          "signature": "Expr String -\u003e Expr String -\u003e Expr String",
          "source": "src/Database-HaskellDB-Query.html#cat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cat\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:cat\"]"
        },
        "index": {
          "description": "Produces the concatenation of two String-expressions",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "cat",
          "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
          "package": "haskelldb",
          "signature": "Expr String-\u003eExpr String-\u003eExpr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce the type of an expression\n to another type. Does not affect the actual\n primitive value - only the \u003ccode\u003ephantom\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "coerce",
          "package": "haskelldb",
          "signature": "Expr a-\u003e Expr b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:coerce\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:coerce\"]"
        },
        "index": {
          "description": "Coerce the type of an expression to another type Does not affect the actual primitive value only the phantom type",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "coerce",
          "normalized": "Expr a-\u003eExpr b",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "constExpr",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr (Maybe a)",
          "source": "src/Database-HaskellDB-Query.html#constExpr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constExpr\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constExpr\"]"
        },
        "index": {
          "description": "Turn constant data into nullable expression Same as constant Just",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "constExpr",
          "normalized": "Expr a-\u003eExpr(Maybe a)",
          "package": "haskelldb",
          "partial": "Expr",
          "signature": "Expr a-\u003eExpr(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a null value.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "constNull",
          "package": "haskelldb",
          "signature": "Expr (Maybe a)",
          "source": "src/Database-HaskellDB-Query.html#constNull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constNull\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constNull\"]"
        },
        "index": {
          "description": "Represents null value",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "constNull",
          "package": "haskelldb",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "constVal",
          "package": "haskelldb",
          "signature": "a -\u003e Expr (Maybe a)",
          "source": "src/Database-HaskellDB-Query.html#constVal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constVal\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constVal\"]"
        },
        "index": {
          "description": "Turn constant data into nullable expression Same as constant Just",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "constVal",
          "normalized": "a-\u003eExpr(Maybe a)",
          "package": "haskelldb",
          "partial": "Val",
          "signature": "a-\u003eExpr(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a constant expression from a haskell value.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "constant",
          "package": "haskelldb",
          "signature": "a -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#constant",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constant\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constant\"]"
        },
        "index": {
          "description": "Creates constant expression from haskell value",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "constant",
          "normalized": "a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "constantRecord",
          "package": "haskelldb",
          "signature": "r -\u003e cr",
          "source": "src/Database-HaskellDB-Query.html#constantRecord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "constantRecord",
          "normalized": "a-\u003eb",
          "package": "haskelldb",
          "partial": "Record",
          "signature": "r-\u003ecr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constantRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a single-field record from an attribute and a table. Useful\n for building projections that will re-use the same attribute name. \u003ccode\u003ecopy attr tbl\u003c/code\u003e is\n equivalent to:\n\u003c/p\u003e\u003cpre\u003eattr .=. (tbl .!. attr)\u003c/pre\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "copy",
          "package": "haskelldb",
          "signature": "Attr f a -\u003e Rel r -\u003e Record (RecCons f (Expr a) RecNil)",
          "source": "src/Database-HaskellDB-Query.html#copy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copy\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:copy\"]"
        },
        "index": {
          "description": "Creates single-field record from an attribute and table Useful for building projections that will re-use the same attribute name copy attr tbl is equivalent to attr tbl attr",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "copy",
          "normalized": "Attr a b-\u003eRel c-\u003eRecord(RecCons a(Expr b)RecNil)",
          "package": "haskelldb",
          "signature": "Attr f a-\u003eRel r-\u003eRecord(RecCons f(Expr a)RecNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies all columns in the relation given. Useful for appending\n the remaining columns in a table to a projection. For example:\n\u003c/p\u003e\u003cpre\u003e   query = do\n     tbl \u003c- table some_table\n     project $ copyAll tbl\n\u003c/pre\u003e\u003cp\u003ewill add all columns in \u003ca\u003esome_table\u003c/a\u003e to the query.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "copyAll",
          "package": "haskelldb",
          "signature": "Rel r -\u003e Record r",
          "source": "src/Database-HaskellDB-Query.html#copyAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copyAll\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:copyAll\"]"
        },
        "index": {
          "description": "Copies all columns in the relation given Useful for appending the remaining columns in table to projection For example query do tbl table some table project copyAll tbl will add all columns in some table to the query",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "copyAll",
          "normalized": "Rel a-\u003eRecord a",
          "package": "haskelldb",
          "partial": "All",
          "signature": "Rel r-\u003eRecord r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of records (=rows) in a query.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "count",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr Int",
          "source": "src/Database-HaskellDB-Query.html#count",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:count\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:count\"]"
        },
        "index": {
          "description": "Returns the number of records rows in query",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "count",
          "normalized": "Expr a-\u003eExprAggr Int",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in descending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "desc",
          "package": "haskelldb",
          "signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
          "source": "src/Database-HaskellDB-Query.html#desc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:desc\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:desc\"]"
        },
        "index": {
          "description": "Use this together with the function order to order the results of query in descending order Takes relation and an attribute of that relation which is used for the ordering",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "desc",
          "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
          "package": "haskelldb",
          "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot in SQL92.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "divide",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#divide",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:divide\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:divide\"]"
        },
        "index": {
          "description": "Not in SQL92",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "divide",
          "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "exprs",
          "package": "haskelldb",
          "signature": "Record r -\u003e [PrimExpr]",
          "source": "src/Database-HaskellDB-Query.html#exprs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "exprs",
          "normalized": "Record a-\u003e[PrimExpr]",
          "package": "haskelldb",
          "signature": "Record r-\u003e[PrimExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:exprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a default value a and a nullable value. If the value is NULL,\n   the default value is returned, otherwise the value itself is returned.\n   Simliar to \u003ccode\u003efromMaybe\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "fromNull",
          "package": "haskelldb",
          "signature": "Expr a-\u003e Expr (Maybe a)-\u003e Expr a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromNull\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:fromNull\"]"
        },
        "index": {
          "description": "Takes default value and nullable value If the value is NULL the default value is returned otherwise the value itself is returned Simliar to fromMaybe",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "fromNull",
          "normalized": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a",
          "package": "haskelldb",
          "partial": "Null",
          "signature": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to fromNull, but takes a \n value argument rather than an Expr.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "fromVal",
          "package": "haskelldb",
          "signature": "a -\u003e Expr (Maybe a) -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#fromVal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromVal\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:fromVal\"]"
        },
        "index": {
          "description": "Similar to fromNull but takes value argument rather than an Expr",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "fromVal",
          "normalized": "a-\u003eExpr(Maybe a)-\u003eExpr a",
          "package": "haskelldb",
          "partial": "Val",
          "signature": "a-\u003eExpr(Maybe a)-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used to define SQL functions which will\nappear in queries. Each argument for the function is specified by its own Expr value. \nExamples include:\n\u003c/p\u003e\u003cpre\u003e  lower :: Expr a -\u003e Expr (Maybe String) \n  lower str = func \"lower\" str\n\u003c/pre\u003e\u003cp\u003eThe arguments to the function do not have to be Expr if they can\nbe converted to Expr:\n\u003c/p\u003e\u003cpre\u003e  data DatePart = Day | Century deriving Show \n\u003c/pre\u003e\u003cpre\u003e  datePart :: DatePart -\u003e Expr (Maybe CalendarTime) -\u003e Expr (Maybe Int) \n  datePart date col = func \"date_part\" (constant $ show date) col\n\u003c/pre\u003e\u003cp\u003eAggregate functions can also be defined. For example:\n\u003c/p\u003e\u003cpre\u003e  every :: Expr Bool -\u003e ExprAggr Bool \n  every col = func \"every\" col\n\u003c/pre\u003e\u003cp\u003eAggregates are implemented to always take one argument, so any attempt to\ndefine an aggregate with any more or less arguments will result in an error.\n\u003c/p\u003e\u003cp\u003eNote that type signatures are usually required for each function defined,\nunless the arguments can be inferred.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "func",
          "package": "haskelldb",
          "signature": "String -\u003e a",
          "source": "src/Database-HaskellDB-Query.html#func",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:func\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:func\"]"
        },
        "index": {
          "description": "Can be used to define SQL functions which will appear in queries Each argument for the function is specified by its own Expr value Examples include lower Expr Expr Maybe String lower str func lower str The arguments to the function do not have to be Expr if they can be converted to Expr data DatePart Day Century deriving Show datePart DatePart Expr Maybe CalendarTime Expr Maybe Int datePart date col func date part constant show date col Aggregate functions can also be defined For example every Expr Bool ExprAggr Bool every col func every col Aggregates are implemented to always take one argument so any attempt to define an aggregate with any more or less arguments will result in an error Note that type signatures are usually required for each function defined unless the arguments can be inferred",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "func",
          "normalized": "String-\u003ea",
          "package": "haskelldb",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all records which are present in both relations.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "intersect",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#intersect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:intersect\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:intersect\"]"
        },
        "index": {
          "description": "Return all records which are present in both relations",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "intersect",
          "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the expression is Null.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "isNull",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#isNull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:isNull\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:isNull\"]"
        },
        "index": {
          "description": "Returns true if the expression is Null",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "isNull",
          "normalized": "Expr a-\u003eExpr Bool",
          "package": "haskelldb",
          "partial": "Null",
          "signature": "Expr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "labels",
          "package": "haskelldb",
          "signature": "r -\u003e [String]",
          "source": "src/Database-HaskellDB-Query.html#labels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "labels",
          "normalized": "a-\u003e[String]",
          "package": "haskelldb",
          "signature": "r-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HaskellDB counterpart to the SQL LIKE keyword.\n In the expresions, % is a wildcard representing any characters\n in the same position relavtive to the given characters and\n _ is a wildcard representing one character e.g.\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEFFF\") (constant \"AB%F_F\")\n\u003c/pre\u003e\u003cp\u003eis true while\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEF\") (constant \"AC%F\") \n\u003c/pre\u003e\u003cp\u003eis false.\n\u003c/p\u003e\u003cp\u003eNote that SQL92 does not specify whether LIKE is case-sensitive or not.\n Different database systems implement this differently.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "like",
          "package": "haskelldb",
          "signature": "Expr String -\u003e Expr String -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#like",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:like\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:like\"]"
        },
        "index": {
          "description": "The HaskellDB counterpart to the SQL LIKE keyword In the expresions is wildcard representing any characters in the same position relavtive to the given characters and is wildcard representing one character e.g like constant ABCDEFFF constant AB is true while like constant ABCDEF constant AC is false Note that SQL92 does not specify whether LIKE is case-sensitive or not Different database systems implement this differently",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "like",
          "normalized": "Expr String-\u003eExpr String-\u003eExpr Bool",
          "package": "haskelldb",
          "signature": "Expr String-\u003eExpr String-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts the string literally - no escaping, no quoting.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "literal",
          "package": "haskelldb",
          "signature": "String -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#literal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:literal\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:literal\"]"
        },
        "index": {
          "description": "Inserts the string literally no escaping no quoting",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "literal",
          "normalized": "String-\u003eExpr a",
          "package": "haskelldb",
          "signature": "String-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all records from the first relation that are not \n   present in the second relation.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "minus",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#minus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:minus\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:minus\"]"
        },
        "index": {
          "description": "Return all records from the first relation that are not present in the second relation",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "minus",
          "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a named parameter with a default value.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "namedParam",
          "package": "haskelldb",
          "signature": "Name-\u003e Expr a-\u003e Expr a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:namedParam\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:namedParam\"]"
        },
        "index": {
          "description": "Create named parameter with default value",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "namedParam",
          "normalized": "Name-\u003eExpr a-\u003eExpr a",
          "package": "haskelldb",
          "partial": "Param",
          "signature": "Name-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:namedParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eisNull\u003c/a\u003e\u003c/code\u003e, returns false\n if the expression supplied is Null.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "notNull",
          "package": "haskelldb",
          "signature": "Expr a -\u003e Expr Bool",
          "source": "src/Database-HaskellDB-Query.html#notNull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:notNull\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:notNull\"]"
        },
        "index": {
          "description": "The inverse of isNull returns false if the expression supplied is Null",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "notNull",
          "normalized": "Expr a-\u003eExpr Bool",
          "package": "haskelldb",
          "partial": "Null",
          "signature": "Expr a-\u003eExpr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:notNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrder the results of a query.\n Use this with the \u003ccode\u003e\u003ca\u003easc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edesc\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "order",
          "package": "haskelldb",
          "signature": "[OrderExpr] -\u003e Query ()",
          "source": "src/Database-HaskellDB-Query.html#order",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:order\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:order\"]"
        },
        "index": {
          "description": "Order the results of query Use this with the asc or desc functions",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "order",
          "normalized": "[OrderExpr]-\u003eQuery()",
          "package": "haskelldb",
          "signature": "[OrderExpr]-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an anonymous parameter with a default value.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "param",
          "package": "haskelldb",
          "signature": "Expr a-\u003e Expr a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:param\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:param\"]"
        },
        "index": {
          "description": "Create an anonymous parameter with default value",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "param",
          "normalized": "Expr a-\u003eExpr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the underlying untyped \u003ccode\u003e\u003ca\u003ePrimExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "primExpr",
          "package": "haskelldb",
          "signature": "e a -\u003e PrimExpr",
          "source": "src/Database-HaskellDB-Query.html#primExpr",
          "type": "method"
        },
        "index": {
          "description": "Get the underlying untyped PrimExpr",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "primExpr",
          "normalized": "a b-\u003ePrimExpr",
          "package": "haskelldb",
          "partial": "Expr",
          "signature": "e a-\u003ePrimExpr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:primExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a subset of the columns in the table.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "project",
          "package": "haskelldb",
          "signature": "Record r -\u003e Query (Rel er)",
          "source": "src/Database-HaskellDB-Query.html#project",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:project\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:project\"]"
        },
        "index": {
          "description": "Specifies subset of the columns in the table",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "project",
          "normalized": "Record a-\u003eQuery(Rel b)",
          "package": "haskelldb",
          "signature": "Record r-\u003eQuery(Rel er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestricts the records to only those who evaluates the \n expression to True.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "restrict",
          "package": "haskelldb",
          "signature": "Expr Bool -\u003e Query ()",
          "source": "src/Database-HaskellDB-Query.html#restrict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:restrict\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:restrict\"]"
        },
        "index": {
          "description": "Restricts the records to only those who evaluates the expression to True",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "restrict",
          "normalized": "Expr Bool-\u003eQuery()",
          "package": "haskelldb",
          "signature": "Expr Bool-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "runQuery",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e PrimQuery",
          "source": "src/Database-HaskellDB-Query.html#runQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "runQuery",
          "normalized": "Query(Rel a)-\u003ePrimQuery",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Query(Rel r)-\u003ePrimQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "runQueryRel",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e (PrimQuery, Rel r)",
          "source": "src/Database-HaskellDB-Query.html#runQueryRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "runQueryRel",
          "normalized": "Query(Rel a)-\u003e(PrimQuery,Rel a)",
          "package": "haskelldb",
          "partial": "Query Rel",
          "signature": "Query(Rel r)-\u003e(PrimQuery,Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:runQueryRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "select",
          "package": "haskelldb",
          "signature": "Attr f a -\u003e Rel r -\u003e Expr a",
          "source": "src/Database-HaskellDB-Query.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "select",
          "normalized": "Attr a b-\u003eRel c-\u003eExpr b",
          "package": "haskelldb",
          "signature": "Attr f a-\u003eRel r-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "showConstant",
          "package": "haskelldb",
          "signature": "a -\u003e Literal",
          "source": "src/Database-HaskellDB-Query.html#showConstant",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "showConstant",
          "normalized": "a-\u003eLiteral",
          "package": "haskelldb",
          "partial": "Constant",
          "signature": "a-\u003eLiteral",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:showConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the standard deviation of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "stddev",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#stddev",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddev\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:stddev\"]"
        },
        "index": {
          "description": "Returns the standard deviation of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "stddev",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "stddevP",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#stddevP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddevP\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:stddevP\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "stddevP",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddevP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows a subquery to be created between another query and\n this query. Normally query definition is associative and query definition\n is interleaved. This combinator ensures the given query is\n added as a whole piece.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "subQuery",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#subQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:subQuery\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:subQuery\"]"
        },
        "index": {
          "description": "Allows subquery to be created between another query and this query Normally query definition is associative and query definition is interleaved This combinator ensures the given query is added as whole piece",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "subQuery",
          "normalized": "Query(Rel a)-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Query(Rel r)-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:subQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all records from a specific table.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "table",
          "package": "haskelldb",
          "signature": "Table r -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#table",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:table\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:table\"]"
        },
        "index": {
          "description": "Return all records from specific table",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "table",
          "normalized": "Table a-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "signature": "Table r-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Query",
          "name": "tableName",
          "package": "haskelldb",
          "signature": "Table t -\u003e TableName",
          "source": "src/Database-HaskellDB-Query.html#tableName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of table",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "tableName",
          "normalized": "Table a-\u003eTableName",
          "package": "haskelldb",
          "partial": "Name",
          "signature": "Table t-\u003eTableName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:tableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "tableRec",
          "package": "haskelldb",
          "signature": "Table (Record r) -\u003e Record r",
          "source": "src/Database-HaskellDB-Query.html#tableRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "tableRec",
          "normalized": "Table(Record a)-\u003eRecord a",
          "package": "haskelldb",
          "partial": "Rec",
          "signature": "Table(Record r)-\u003eRecord r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:tableRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a bounded string to a real string.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "toStr",
          "package": "haskelldb",
          "signature": "s -\u003e d",
          "source": "src/Database-HaskellDB-Query.html#toStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:toStr\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:toStr\"]"
        },
        "index": {
          "description": "Convert bounded string to real string",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "toStr",
          "normalized": "a-\u003eb",
          "package": "haskelldb",
          "partial": "Str",
          "signature": "s-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the n topmost records.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "top",
          "package": "haskelldb",
          "signature": "Int -\u003e Query ()",
          "source": "src/Database-HaskellDB-Query.html#top",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:top\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:top\"]"
        },
        "index": {
          "description": "Return the topmost records",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "top",
          "normalized": "Int-\u003eQuery()",
          "package": "haskelldb",
          "signature": "Int-\u003eQuery()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Query",
          "name": "unQuery",
          "package": "haskelldb",
          "signature": "Query a -\u003e a",
          "source": "src/Database-HaskellDB-Query.html#unQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "unQuery",
          "normalized": "Query a-\u003ea",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Query a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:unQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all records which are present in at least\n   one of the relations.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "union",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
          "source": "src/Database-HaskellDB-Query.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:union\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:union\"]"
        },
        "index": {
          "description": "Return all records which are present in at least one of the relations",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "union",
          "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
          "package": "haskelldb",
          "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestricts the relation given to only return unique records. Upshot\n is all projected attributes will be \u003ccode\u003egrouped\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "unique",
          "package": "haskelldb",
          "signature": "Query ()",
          "source": "src/Database-HaskellDB-Query.html#unique",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:unique\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:unique\"]"
        },
        "index": {
          "description": "Restricts the relation given to only return unique records Upshot is all projected attributes will be grouped",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "unique",
          "normalized": "Query()",
          "package": "haskelldb",
          "signature": "Query()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the standard variance of a column.\n\u003c/p\u003e",
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "variance",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#variance",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:variance\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:variance\"]"
        },
        "index": {
          "description": "Returns the standard variance of column",
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "variance",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.HaskellDB.Query\",\"Database.HaskellDB\"]",
          "name": "varianceP",
          "package": "haskelldb",
          "signature": "Expr a -\u003e ExprAggr a",
          "source": "src/Database-HaskellDB-Query.html#varianceP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:varianceP\",\"http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:varianceP\"]"
        },
        "index": {
          "hierarchy": "Database HaskellDB Query",
          "module": "Database.HaskellDB.Query",
          "name": "varianceP",
          "normalized": "Expr a-\u003eExprAggr a",
          "package": "haskelldb",
          "signature": "Expr a-\u003eExprAggr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:varianceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault SQL generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "Default",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-Default.html",
          "type": "module"
        },
        "index": {
          "description": "Default SQL generation",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "Default",
          "package": "haskelldb",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlBinary",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e RelOp -\u003e SqlSelect -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlBinary",
          "normalized": "SqlGenerator-\u003eRelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Binary",
          "signature": "SqlGenerator-\u003eRelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to create a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e data type corresponding to \n the SQL statement CREATE DATABASE which creates a new database.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlCreateDB",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e String-\u003e SqlCreate",
          "type": "function"
        },
        "index": {
          "description": "Use this to create SqlCreate data type corresponding to the SQL statement CREATE DATABASE which creates new database",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlCreateDB",
          "normalized": "SqlGenerator-\u003eString-\u003eSqlCreate",
          "package": "haskelldb",
          "partial": "Sql Create DB",
          "signature": "SqlGenerator-\u003eString-\u003eSqlCreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlCreateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to create a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e data type corresponding to \n the SQL statement CREATE which creates a new table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlCreateTable",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e TableName-\u003e [(Attribute, FieldDesc)]-\u003e SqlCreate",
          "type": "function"
        },
        "index": {
          "description": "Use this to create SqlCreate data type corresponding to the SQL statement CREATE which creates new table",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlCreateTable",
          "normalized": "SqlGenerator-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
          "package": "haskelldb",
          "partial": "Sql Create Table",
          "signature": "SqlGenerator-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDelete\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n DELETE which deletes rows in a table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDelete",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e TableName-\u003e [PrimExpr]-\u003e SqlDelete",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlDelete Corresponds to the SQL statement DELETE which deletes rows in table",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDelete",
          "normalized": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eSqlDelete",
          "package": "haskelldb",
          "partial": "Sql Delete",
          "signature": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eSqlDelete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e that delete the database with the \n name given as the first argument.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDropDB",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e String -\u003e SqlDrop",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlDropDB",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlDrop that delete the database with the name given as the first argument",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDropDB",
          "normalized": "SqlGenerator-\u003eString-\u003eSqlDrop",
          "package": "haskelldb",
          "partial": "Sql Drop DB",
          "signature": "SqlGenerator-\u003eString-\u003eSqlDrop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e that delete the database named\n in the first argument.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDropTable",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e TableName -\u003e SqlDrop",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlDropTable",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlDrop that delete the database named in the first argument",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlDropTable",
          "normalized": "SqlGenerator-\u003eTableName-\u003eSqlDrop",
          "package": "haskelldb",
          "partial": "Sql Drop Table",
          "signature": "SqlGenerator-\u003eTableName-\u003eSqlDrop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlEmpty",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlEmpty",
          "normalized": "SqlGenerator-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Empty",
          "signature": "SqlGenerator-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlExpr",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e PrimExpr -\u003e SqlExpr",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlExpr",
          "normalized": "SqlGenerator-\u003ePrimExpr-\u003eSqlExpr",
          "package": "haskelldb",
          "partial": "Sql Expr",
          "signature": "SqlGenerator-\u003ePrimExpr-\u003eSqlExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlGenerator",
          "package": "haskelldb",
          "signature": "SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlGenerator",
          "package": "haskelldb",
          "partial": "Sql Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures the groupby value on the SqlSelect either preserves existing \n grouping or that it will group on all columns (i.e, Mark == All).\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlGroup",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e Assoc -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlGroup",
          "type": "function"
        },
        "index": {
          "description": "Ensures the groupby value on the SqlSelect either preserves existing grouping or that it will group on all columns i.e Mark All",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlGroup",
          "normalized": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Group",
          "signature": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlInsert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlInsert",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e TableName-\u003e Assoc-\u003e SqlInsert",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlInsert",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlInsert",
          "normalized": "SqlGenerator-\u003eTableName-\u003eAssoc-\u003eSqlInsert",
          "package": "haskelldb",
          "partial": "Sql Insert",
          "signature": "SqlGenerator-\u003eTableName-\u003eAssoc-\u003eSqlInsert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlInsert\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n INSERT INTO which is used to insert new rows in a table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlInsertQuery",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e TableName-\u003e PrimQuery-\u003e SqlInsert",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlInsert Corresponds to the SQL statement INSERT INTO which is used to insert new rows in table",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlInsertQuery",
          "normalized": "SqlGenerator-\u003eTableName-\u003ePrimQuery-\u003eSqlInsert",
          "package": "haskelldb",
          "partial": "Sql Insert Query",
          "signature": "SqlGenerator-\u003eTableName-\u003ePrimQuery-\u003eSqlInsert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlInsertQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlLiteral",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e Literal -\u003e String",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlLiteral",
          "normalized": "SqlGenerator-\u003eLiteral-\u003eString",
          "package": "haskelldb",
          "partial": "Sql Literal",
          "signature": "SqlGenerator-\u003eLiteral-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlProject",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e Assoc -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlProject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlProject",
          "normalized": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Project",
          "signature": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlSelect\u003c/a\u003e\u003c/code\u003e based on the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e supplied.\n Corresponds to the SQL statement SELECT.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlQuery",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e PrimQuery -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlQuery",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlSelect based on the PrimQuery supplied Corresponds to the SQL statement SELECT",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlQuery",
          "normalized": "SqlGenerator-\u003ePrimQuery-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Query",
          "signature": "SqlGenerator-\u003ePrimQuery-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlQuote",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e String -\u003e String",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlQuote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlQuote",
          "normalized": "SqlGenerator-\u003eString-\u003eString",
          "package": "haskelldb",
          "partial": "Sql Quote",
          "signature": "SqlGenerator-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlRestrict",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e PrimExpr -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlRestrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlRestrict",
          "normalized": "SqlGenerator-\u003ePrimExpr-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Restrict",
          "signature": "SqlGenerator-\u003ePrimExpr-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlRestrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlSpecial",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e SpecialOp -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlSpecial",
          "normalized": "SqlGenerator-\u003eSpecialOp-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Special",
          "signature": "SqlGenerator-\u003eSpecialOp-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlTable",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e TableName -\u003e Scheme -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlTable",
          "normalized": "SqlGenerator-\u003eTableName-\u003eScheme-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Table",
          "signature": "SqlGenerator-\u003eTableName-\u003eScheme-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlType",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e FieldType -\u003e SqlType",
          "source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlType",
          "normalized": "SqlGenerator-\u003eFieldType-\u003eSqlType",
          "package": "haskelldb",
          "partial": "Sql Type",
          "signature": "SqlGenerator-\u003eFieldType-\u003eSqlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlUpdate\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n UPDATE which updates data in a table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlUpdate",
          "package": "haskelldb",
          "signature": "SqlGenerator-\u003e TableName-\u003e [PrimExpr]-\u003e Assoc-\u003e SqlUpdate",
          "type": "function"
        },
        "index": {
          "description": "Creates SqlUpdate Corresponds to the SQL statement UPDATE which updates data in table",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "defaultSqlUpdate",
          "normalized": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
          "package": "haskelldb",
          "partial": "Sql Update",
          "signature": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Default",
          "name": "mkSqlGenerator",
          "package": "haskelldb",
          "signature": "SqlGenerator -\u003e SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-Default.html#mkSqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "mkSqlGenerator",
          "normalized": "SqlGenerator-\u003eSqlGenerator",
          "package": "haskelldb",
          "partial": "Sql Generator",
          "signature": "SqlGenerator-\u003eSqlGenerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:mkSqlGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure our SqlSelect statement is really a SqlSelect and not\n another constructor.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "toSqlSelect",
          "package": "haskelldb",
          "signature": "SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Default.html#toSqlSelect",
          "type": "function"
        },
        "index": {
          "description": "Make sure our SqlSelect statement is really SqlSelect and not another constructor",
          "hierarchy": "Database HaskellDB Sql Default",
          "module": "Database.HaskellDB.Sql.Default",
          "name": "toSqlSelect",
          "normalized": "SqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Sql Select",
          "signature": "SqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:toSqlSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type of SQL generators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "Generate",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-Generate.html",
          "type": "module"
        },
        "index": {
          "description": "The type of SQL generators",
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "Generate",
          "package": "haskelldb",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "SqlGenerator",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "SqlGenerator",
          "package": "haskelldb",
          "partial": "Sql Generator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#t:SqlGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "SqlGenerator",
          "package": "haskelldb",
          "signature": "SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "SqlGenerator",
          "package": "haskelldb",
          "partial": "Sql Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:SqlGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlBinary",
          "package": "haskelldb",
          "signature": "RelOp -\u003e SqlSelect -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlBinary",
          "normalized": "RelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Binary",
          "signature": "RelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlCreateDB",
          "package": "haskelldb",
          "signature": "String -\u003e SqlCreate",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlCreateDB",
          "normalized": "String-\u003eSqlCreate",
          "package": "haskelldb",
          "partial": "Create DB",
          "signature": "String-\u003eSqlCreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlCreateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlCreateTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e [(Attribute, FieldDesc)] -\u003e SqlCreate",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlCreateTable",
          "normalized": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
          "package": "haskelldb",
          "partial": "Create Table",
          "signature": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDelete",
          "package": "haskelldb",
          "signature": "TableName -\u003e [PrimExpr] -\u003e SqlDelete",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDelete",
          "normalized": "TableName-\u003e[PrimExpr]-\u003eSqlDelete",
          "package": "haskelldb",
          "partial": "Delete",
          "signature": "TableName-\u003e[PrimExpr]-\u003eSqlDelete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDropDB",
          "package": "haskelldb",
          "signature": "String -\u003e SqlDrop",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDropDB",
          "normalized": "String-\u003eSqlDrop",
          "package": "haskelldb",
          "partial": "Drop DB",
          "signature": "String-\u003eSqlDrop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDropTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e SqlDrop",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlDropTable",
          "normalized": "TableName-\u003eSqlDrop",
          "package": "haskelldb",
          "partial": "Drop Table",
          "signature": "TableName-\u003eSqlDrop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlEmpty",
          "package": "haskelldb",
          "signature": "SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlEmpty",
          "package": "haskelldb",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlExpr",
          "package": "haskelldb",
          "signature": "PrimExpr -\u003e SqlExpr",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlExpr",
          "normalized": "PrimExpr-\u003eSqlExpr",
          "package": "haskelldb",
          "partial": "Expr",
          "signature": "PrimExpr-\u003eSqlExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures non-aggregate expressions in the select are included in\n group by clause.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlGroup",
          "package": "haskelldb",
          "signature": "Assoc -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "description": "Ensures non-aggregate expressions in the select are included in group by clause",
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlGroup",
          "normalized": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Group",
          "signature": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlInsert",
          "package": "haskelldb",
          "signature": "TableName -\u003e Assoc -\u003e SqlInsert",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlInsert",
          "normalized": "TableName-\u003eAssoc-\u003eSqlInsert",
          "package": "haskelldb",
          "partial": "Insert",
          "signature": "TableName-\u003eAssoc-\u003eSqlInsert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlInsertQuery",
          "package": "haskelldb",
          "signature": "TableName -\u003e PrimQuery -\u003e SqlInsert",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlInsertQuery",
          "normalized": "TableName-\u003ePrimQuery-\u003eSqlInsert",
          "package": "haskelldb",
          "partial": "Insert Query",
          "signature": "TableName-\u003ePrimQuery-\u003eSqlInsert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlInsertQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlLiteral",
          "package": "haskelldb",
          "signature": "Literal -\u003e String",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlLiteral",
          "normalized": "Literal-\u003eString",
          "package": "haskelldb",
          "partial": "Literal",
          "signature": "Literal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlProject",
          "package": "haskelldb",
          "signature": "Assoc -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlProject",
          "normalized": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Project",
          "signature": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlQuery",
          "package": "haskelldb",
          "signature": "PrimQuery -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlQuery",
          "normalized": "PrimQuery-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "PrimQuery-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a string into a quoted string. Quote characters\n and any escaping are handled by this function.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlQuote",
          "package": "haskelldb",
          "signature": "String -\u003e String",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "description": "Turn string into quoted string Quote characters and any escaping are handled by this function",
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlQuote",
          "normalized": "String-\u003eString",
          "package": "haskelldb",
          "partial": "Quote",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlRestrict",
          "package": "haskelldb",
          "signature": "PrimExpr -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlRestrict",
          "normalized": "PrimExpr-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Restrict",
          "signature": "PrimExpr-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlRestrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlSpecial",
          "package": "haskelldb",
          "signature": "SpecialOp -\u003e SqlSelect -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlSpecial",
          "normalized": "SpecialOp-\u003eSqlSelect-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Special",
          "signature": "SpecialOp-\u003eSqlSelect-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlTable",
          "package": "haskelldb",
          "signature": "TableName -\u003e Scheme -\u003e SqlSelect",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlTable",
          "normalized": "TableName-\u003eScheme-\u003eSqlSelect",
          "package": "haskelldb",
          "partial": "Table",
          "signature": "TableName-\u003eScheme-\u003eSqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlType",
          "package": "haskelldb",
          "signature": "FieldType -\u003e SqlType",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlType",
          "normalized": "FieldType-\u003eSqlType",
          "package": "haskelldb",
          "partial": "Type",
          "signature": "FieldType-\u003eSqlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlUpdate",
          "package": "haskelldb",
          "signature": "TableName -\u003e [PrimExpr] -\u003e Assoc -\u003e SqlUpdate",
          "source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Generate",
          "module": "Database.HaskellDB.Sql.Generate",
          "name": "sqlUpdate",
          "normalized": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
          "package": "haskelldb",
          "partial": "Update",
          "signature": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for MySQL.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.MySQL",
          "name": "MySQL",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-MySQL.html",
          "type": "module"
        },
        "index": {
          "description": "SQL generation for MySQL",
          "hierarchy": "Database HaskellDB Sql MySQL",
          "module": "Database.HaskellDB.Sql.MySQL",
          "name": "MySQL",
          "package": "haskelldb",
          "partial": "My SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-MySQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.MySQL",
          "name": "generator",
          "package": "haskelldb",
          "signature": "SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-MySQL.html#generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql MySQL",
          "module": "Database.HaskellDB.Sql.MySQL",
          "name": "generator",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-MySQL.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for PostgreSQL.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.PostgreSQL",
          "name": "PostgreSQL",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-PostgreSQL.html",
          "type": "module"
        },
        "index": {
          "description": "SQL generation for PostgreSQL",
          "hierarchy": "Database HaskellDB Sql PostgreSQL",
          "module": "Database.HaskellDB.Sql.PostgreSQL",
          "name": "PostgreSQL",
          "package": "haskelldb",
          "partial": "Postgre SQL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-PostgreSQL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.PostgreSQL",
          "name": "generator",
          "package": "haskelldb",
          "signature": "SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-PostgreSQL.html#generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql PostgreSQL",
          "module": "Database.HaskellDB.Sql.PostgreSQL",
          "name": "generator",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-PostgreSQL.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-print SQL\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "Print",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-Print.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-print SQL",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "Print",
          "package": "haskelldb",
          "partial": "Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppCreate",
          "package": "haskelldb",
          "signature": "SqlCreate -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppCreate",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlCreate",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppCreate",
          "normalized": "SqlCreate-\u003eDoc",
          "package": "haskelldb",
          "partial": "Create",
          "signature": "SqlCreate-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlDelete\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppDelete",
          "package": "haskelldb",
          "signature": "SqlDelete -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppDelete",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlDelete",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppDelete",
          "normalized": "SqlDelete-\u003eDoc",
          "package": "haskelldb",
          "partial": "Delete",
          "signature": "SqlDelete-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppDrop",
          "package": "haskelldb",
          "signature": "SqlDrop -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppDrop",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlDrop",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppDrop",
          "normalized": "SqlDrop-\u003eDoc",
          "package": "haskelldb",
          "partial": "Drop",
          "signature": "SqlDrop-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppInsert",
          "package": "haskelldb",
          "signature": "SqlInsert -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppInsert",
          "normalized": "SqlInsert-\u003eDoc",
          "package": "haskelldb",
          "partial": "Insert",
          "signature": "SqlInsert-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlSelect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppSql",
          "package": "haskelldb",
          "signature": "SqlSelect -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppSql",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlSelect",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppSql",
          "normalized": "SqlSelect-\u003eDoc",
          "package": "haskelldb",
          "partial": "Sql",
          "signature": "SqlSelect-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlExpr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppSqlExpr",
          "package": "haskelldb",
          "signature": "SqlExpr -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppSqlExpr",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlExpr",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppSqlExpr",
          "normalized": "SqlExpr-\u003eDoc",
          "package": "haskelldb",
          "partial": "Sql Expr",
          "signature": "SqlExpr-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlUpdate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppUpdate",
          "package": "haskelldb",
          "signature": "SqlUpdate -\u003e Doc",
          "source": "src/Database-HaskellDB-Sql-Print.html#ppUpdate",
          "type": "function"
        },
        "index": {
          "description": "Pretty prints SqlUpdate",
          "hierarchy": "Database HaskellDB Sql Print",
          "module": "Database.HaskellDB.Sql.Print",
          "name": "ppUpdate",
          "normalized": "SqlUpdate-\u003eDoc",
          "package": "haskelldb",
          "partial": "Update",
          "signature": "SqlUpdate-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for SQLite.\n See \u003ca\u003ehttp://www.sqlite.org/lang.html\u003c/a\u003e for documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql.SQLite",
          "name": "SQLite",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql-SQLite.html",
          "type": "module"
        },
        "index": {
          "description": "SQL generation for SQLite See http www.sqlite.org lang.html for documentation",
          "hierarchy": "Database HaskellDB Sql SQLite",
          "module": "Database.HaskellDB.Sql.SQLite",
          "name": "SQLite",
          "package": "haskelldb",
          "partial": "SQLite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-SQLite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql.SQLite",
          "name": "generator",
          "package": "haskelldb",
          "signature": "SqlGenerator",
          "source": "src/Database-HaskellDB-Sql-SQLite.html#generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql SQLite",
          "module": "Database.HaskellDB.Sql.SQLite",
          "name": "generator",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-SQLite.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA data type for SQL.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "Sql",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html",
          "type": "module"
        },
        "index": {
          "description": "data type for SQL",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "Sql",
          "package": "haskelldb",
          "partial": "Sql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "Mark",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#Mark",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "Mark",
          "package": "haskelldb",
          "partial": "Mark",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:Mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlColumn",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlColumn",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlColumn",
          "package": "haskelldb",
          "partial": "Sql Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for SQL CREATE statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreate",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlCreate",
          "type": "data"
        },
        "index": {
          "description": "Data type for SQL CREATE statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreate",
          "package": "haskelldb",
          "partial": "Sql Create",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for SQL DELETE statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDelete",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlDelete",
          "type": "data"
        },
        "index": {
          "description": "Data type for SQL DELETE statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDelete",
          "package": "haskelldb",
          "partial": "Sql Delete",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the SQL DROP statement.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDrop",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlDrop",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the SQL DROP statement",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDrop",
          "package": "haskelldb",
          "partial": "Sql Drop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions in SQL statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "data"
        },
        "index": {
          "description": "Expressions in SQL statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlExpr",
          "package": "haskelldb",
          "partial": "Sql Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for SQL INSERT statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsert",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlInsert",
          "type": "data"
        },
        "index": {
          "description": "Data type for SQL INSERT statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsert",
          "package": "haskelldb",
          "partial": "Sql Insert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA valid SQL name for a parameter.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlName",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlName",
          "type": "type"
        },
        "index": {
          "description": "valid SQL name for parameter",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlName",
          "package": "haskelldb",
          "partial": "Sql Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlOrder",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlOrder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlOrder",
          "package": "haskelldb",
          "partial": "Sql Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for SQL SELECT statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlSelect",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "data"
        },
        "index": {
          "description": "Data type for SQL SELECT statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlSelect",
          "package": "haskelldb",
          "partial": "Sql Select",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlTable",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlTable",
          "package": "haskelldb",
          "partial": "Sql Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType",
          "package": "haskelldb",
          "partial": "Sql Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for SQL UPDATE statements.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlUpdate",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Sql.html#SqlUpdate",
          "type": "data"
        },
        "index": {
          "description": "Data type for SQL UPDATE statements",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlUpdate",
          "package": "haskelldb",
          "partial": "Sql Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggregate functions separate from normal functions.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "AggrFunSqlExpr",
          "package": "haskelldb",
          "signature": "AggrFunSqlExpr String [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "description": "Aggregate functions separate from normal functions",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "AggrFunSqlExpr",
          "normalized": "AggrFunSqlExpr String[SqlExpr]",
          "package": "haskelldb",
          "partial": "Aggr Fun Sql Expr",
          "signature": "AggrFunSqlExpr String[SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:AggrFunSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "All",
          "package": "haskelldb",
          "signature": "All",
          "source": "src/Database-HaskellDB-Sql.html#Mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "All",
          "package": "haskelldb",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "BinSqlExpr",
          "package": "haskelldb",
          "signature": "BinSqlExpr String SqlExpr SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "BinSqlExpr",
          "package": "haskelldb",
          "partial": "Bin Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:BinSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "CaseSqlExpr",
          "package": "haskelldb",
          "signature": "CaseSqlExpr [(SqlExpr, SqlExpr)] SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "CaseSqlExpr",
          "normalized": "CaseSqlExpr[(SqlExpr,SqlExpr)]SqlExpr",
          "package": "haskelldb",
          "partial": "Case Sql Expr",
          "signature": "CaseSqlExpr[(SqlExpr,SqlExpr)]SqlExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:CaseSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "CastSqlExpr",
          "package": "haskelldb",
          "signature": "CastSqlExpr String SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "CastSqlExpr",
          "package": "haskelldb",
          "partial": "Cast Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:CastSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ColumnSqlExpr",
          "package": "haskelldb",
          "signature": "ColumnSqlExpr SqlColumn",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ColumnSqlExpr",
          "package": "haskelldb",
          "partial": "Column Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ColumnSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "Columns",
          "package": "haskelldb",
          "signature": "Columns [(SqlColumn, SqlExpr)]",
          "source": "src/Database-HaskellDB-Sql.html#Mark",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "Columns",
          "normalized": "Columns[(SqlColumn,SqlExpr)]",
          "package": "haskelldb",
          "partial": "Columns",
          "signature": "Columns[(SqlColumn,SqlExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:Columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ConstSqlExpr",
          "package": "haskelldb",
          "signature": "ConstSqlExpr String",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ConstSqlExpr",
          "package": "haskelldb",
          "partial": "Const Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ConstSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ExistsSqlExpr",
          "package": "haskelldb",
          "signature": "ExistsSqlExpr SqlSelect",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ExistsSqlExpr",
          "package": "haskelldb",
          "partial": "Exists Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ExistsSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "FunSqlExpr",
          "package": "haskelldb",
          "signature": "FunSqlExpr String [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "FunSqlExpr",
          "normalized": "FunSqlExpr String[SqlExpr]",
          "package": "haskelldb",
          "partial": "Fun Sql Expr",
          "signature": "FunSqlExpr String[SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:FunSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ListSqlExpr",
          "package": "haskelldb",
          "signature": "ListSqlExpr [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ListSqlExpr",
          "normalized": "ListSqlExpr[SqlExpr]",
          "package": "haskelldb",
          "partial": "List Sql Expr",
          "signature": "ListSqlExpr[SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ListSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ParamSqlExpr",
          "package": "haskelldb",
          "signature": "ParamSqlExpr (Maybe SqlName) SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ParamSqlExpr",
          "package": "haskelldb",
          "partial": "Param Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ParamSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "ParensSqlExpr",
          "package": "haskelldb",
          "signature": "ParensSqlExpr SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "ParensSqlExpr",
          "package": "haskelldb",
          "partial": "Parens Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ParensSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "PlaceHolderSqlExpr",
          "package": "haskelldb",
          "signature": "PlaceHolderSqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "PlaceHolderSqlExpr",
          "package": "haskelldb",
          "partial": "Place Holder Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PlaceHolderSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "PostfixSqlExpr",
          "package": "haskelldb",
          "signature": "PostfixSqlExpr String SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "PostfixSqlExpr",
          "package": "haskelldb",
          "partial": "Postfix Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PostfixSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "PrefixSqlExpr",
          "package": "haskelldb",
          "signature": "PrefixSqlExpr String SqlExpr",
          "source": "src/Database-HaskellDB-Sql.html#SqlExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "PrefixSqlExpr",
          "package": "haskelldb",
          "partial": "Prefix Sql Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PrefixSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlAsc",
          "package": "haskelldb",
          "signature": "SqlAsc",
          "source": "src/Database-HaskellDB-Sql.html#SqlOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlAsc",
          "package": "haskelldb",
          "partial": "Sql Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary relational operator\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlBin",
          "package": "haskelldb",
          "signature": "SqlBin String SqlSelect SqlSelect",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "Binary relational operator",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlBin",
          "package": "haskelldb",
          "partial": "Sql Bin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a database\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreateDB",
          "package": "haskelldb",
          "signature": "SqlCreateDB String",
          "source": "src/Database-HaskellDB-Sql.html#SqlCreate",
          "type": "function"
        },
        "index": {
          "description": "Create database",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreateDB",
          "package": "haskelldb",
          "partial": "Sql Create DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlCreateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreateTable",
          "package": "haskelldb",
          "signature": "SqlCreateTable SqlTable [(SqlColumn, (SqlType, Bool))]",
          "source": "src/Database-HaskellDB-Sql.html#SqlCreate",
          "type": "function"
        },
        "index": {
          "description": "Create table",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlCreateTable",
          "normalized": "SqlCreateTable SqlTable[(SqlColumn,(SqlType,Bool))]",
          "package": "haskelldb",
          "partial": "Sql Create Table",
          "signature": "SqlCreateTable SqlTable[(SqlColumn,(SqlType,Bool))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDelete",
          "package": "haskelldb",
          "signature": "SqlDelete SqlTable [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDelete",
          "normalized": "SqlDelete SqlTable[SqlExpr]",
          "package": "haskelldb",
          "partial": "Sql Delete",
          "signature": "SqlDelete SqlTable[SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDesc",
          "package": "haskelldb",
          "signature": "SqlDesc",
          "source": "src/Database-HaskellDB-Sql.html#SqlOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDesc",
          "package": "haskelldb",
          "partial": "Sql Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a database\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDropDB",
          "package": "haskelldb",
          "signature": "SqlDropDB String",
          "source": "src/Database-HaskellDB-Sql.html#SqlDrop",
          "type": "function"
        },
        "index": {
          "description": "Delete database",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDropDB",
          "package": "haskelldb",
          "partial": "Sql Drop DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a table named SqlTable\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDropTable",
          "package": "haskelldb",
          "signature": "SqlDropTable SqlTable",
          "source": "src/Database-HaskellDB-Sql.html#SqlDrop",
          "type": "function"
        },
        "index": {
          "description": "Delete table named SqlTable",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlDropTable",
          "package": "haskelldb",
          "partial": "Sql Drop Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty select.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlEmpty",
          "package": "haskelldb",
          "signature": "SqlEmpty",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "Empty select",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlEmpty",
          "package": "haskelldb",
          "partial": "Sql Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsert",
          "package": "haskelldb",
          "signature": "SqlInsert SqlTable [SqlColumn] [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsert",
          "normalized": "SqlInsert SqlTable[SqlColumn][SqlExpr]",
          "package": "haskelldb",
          "partial": "Sql Insert",
          "signature": "SqlInsert SqlTable[SqlColumn][SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsertQuery",
          "package": "haskelldb",
          "signature": "SqlInsertQuery SqlTable [SqlColumn] SqlSelect",
          "source": "src/Database-HaskellDB-Sql.html#SqlInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlInsertQuery",
          "normalized": "SqlInsertQuery SqlTable[SqlColumn]SqlSelect",
          "package": "haskelldb",
          "partial": "Sql Insert Query",
          "signature": "SqlInsertQuery SqlTable[SqlColumn]SqlSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlInsertQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlSelect",
          "package": "haskelldb",
          "signature": "SqlSelect",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlSelect",
          "package": "haskelldb",
          "partial": "Sql Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a whole table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlTable",
          "package": "haskelldb",
          "signature": "SqlTable SqlTable",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "Select whole table",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlTable",
          "package": "haskelldb",
          "partial": "Sql Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType",
          "package": "haskelldb",
          "signature": "SqlType String",
          "source": "src/Database-HaskellDB-Sql.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType",
          "package": "haskelldb",
          "partial": "Sql Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType1",
          "package": "haskelldb",
          "signature": "SqlType1 String Int",
          "source": "src/Database-HaskellDB-Sql.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType1",
          "package": "haskelldb",
          "partial": "Sql Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType2",
          "package": "haskelldb",
          "signature": "SqlType2 String Int Int",
          "source": "src/Database-HaskellDB-Sql.html#SqlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlType2",
          "package": "haskelldb",
          "partial": "Sql Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "SqlUpdate",
          "package": "haskelldb",
          "signature": "SqlUpdate SqlTable [(SqlColumn, SqlExpr)] [SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "SqlUpdate",
          "normalized": "SqlUpdate SqlTable[(SqlColumn,SqlExpr)][SqlExpr]",
          "package": "haskelldb",
          "partial": "Sql Update",
          "signature": "SqlUpdate SqlTable[(SqlColumn,SqlExpr)][SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "attrs",
          "package": "haskelldb",
          "signature": "[(SqlColumn, SqlExpr)]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "result",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "attrs",
          "normalized": "[(SqlColumn,SqlExpr)]",
          "package": "haskelldb",
          "signature": "[(SqlColumn,SqlExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:attrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWHERE\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "criteria",
          "package": "haskelldb",
          "signature": "[SqlExpr]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "WHERE",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "criteria",
          "normalized": "[SqlExpr]",
          "package": "haskelldb",
          "signature": "[SqlExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:criteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTOP n, etc.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "extra",
          "package": "haskelldb",
          "signature": "[String]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "TOP etc",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "extra",
          "normalized": "[String]",
          "package": "haskelldb",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a SqlExpr value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "foldSqlExpr",
          "package": "haskelldb",
          "signature": "(SqlColumn -\u003e t, String -\u003e t -\u003e t -\u003e t, String -\u003e t -\u003e t, String -\u003e t -\u003e t, String -\u003e [t] -\u003e t, String -\u003e [t] -\u003e t, String -\u003e t, [(t, t)] -\u003e t -\u003e t, [t] -\u003e t, SqlSelect -\u003e t, Maybe SqlName -\u003e t -\u003e t, t, t -\u003e t, String -\u003e t -\u003e t) -\u003e SqlExpr -\u003e t",
          "source": "src/Database-HaskellDB-Sql.html#foldSqlExpr",
          "type": "function"
        },
        "index": {
          "description": "Transform SqlExpr value",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "foldSqlExpr",
          "normalized": "(SqlColumn-\u003ea,String-\u003ea-\u003ea-\u003ea,String-\u003ea-\u003ea,String-\u003ea-\u003ea,String-\u003e[a]-\u003ea,String-\u003e[a]-\u003ea,String-\u003ea,[(a,a)]-\u003ea-\u003ea,[a]-\u003ea,SqlSelect-\u003ea,Maybe SqlName-\u003ea-\u003ea,a,a-\u003ea,String-\u003ea-\u003ea)-\u003eSqlExpr-\u003ea",
          "package": "haskelldb",
          "partial": "Sql Expr",
          "signature": "(SqlColumn-\u003et,String-\u003et-\u003et-\u003et,String-\u003et-\u003et,String-\u003et-\u003et,String-\u003e[t]-\u003et,String-\u003e[t]-\u003et,String-\u003et,[(t,t)]-\u003et-\u003et,[t]-\u003et,SqlSelect-\u003et,Maybe SqlName-\u003et-\u003et,t,t-\u003et,String-\u003et-\u003et)-\u003eSqlExpr-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:foldSqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a SqlSelect value.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "foldSqlSelect",
          "package": "haskelldb",
          "signature": "([String] -\u003e [(SqlColumn, SqlExpr)] -\u003e [(SqlTable, t)] -\u003e [SqlExpr] -\u003e Maybe Mark -\u003e [(SqlExpr, SqlOrder)] -\u003e [String] -\u003e t, String -\u003e t -\u003e t -\u003e t, SqlTable -\u003e t, t) -\u003e SqlSelect -\u003e t",
          "source": "src/Database-HaskellDB-Sql.html#foldSqlSelect",
          "type": "function"
        },
        "index": {
          "description": "Transform SqlSelect value",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "foldSqlSelect",
          "normalized": "([String]-\u003e[(SqlColumn,SqlExpr)]-\u003e[(SqlTable,a)]-\u003e[SqlExpr]-\u003eMaybe Mark-\u003e[(SqlExpr,SqlOrder)]-\u003e[String]-\u003ea,String-\u003ea-\u003ea-\u003ea,SqlTable-\u003ea,a)-\u003eSqlSelect-\u003ea",
          "package": "haskelldb",
          "partial": "Sql Select",
          "signature": "([String]-\u003e[(SqlColumn,SqlExpr)]-\u003e[(SqlTable,t)]-\u003e[SqlExpr]-\u003eMaybe Mark-\u003e[(SqlExpr,SqlOrder)]-\u003e[String]-\u003et,String-\u003et-\u003et-\u003et,SqlTable-\u003et,t)-\u003eSqlSelect-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:foldSqlSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGROUP BY\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "groupby",
          "package": "haskelldb",
          "signature": "Maybe Mark",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "GROUP BY",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "groupby",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:groupby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Sql",
          "name": "newSelect",
          "package": "haskelldb",
          "signature": "SqlSelect",
          "source": "src/Database-HaskellDB-Sql.html#newSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "newSelect",
          "package": "haskelldb",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:newSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDISTINCT, ALL etc.\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "options",
          "package": "haskelldb",
          "signature": "[String]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "DISTINCT ALL etc",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "options",
          "normalized": "[String]",
          "package": "haskelldb",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eORDER BY\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "orderby",
          "package": "haskelldb",
          "signature": "[(SqlExpr, SqlOrder)]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "ORDER BY",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "orderby",
          "normalized": "[(SqlExpr,SqlOrder)]",
          "package": "haskelldb",
          "signature": "[(SqlExpr,SqlOrder)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:orderby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFROM\n\u003c/p\u003e",
          "module": "Database.HaskellDB.Sql",
          "name": "tables",
          "package": "haskelldb",
          "signature": "[(SqlTable, SqlSelect)]",
          "source": "src/Database-HaskellDB-Sql.html#SqlSelect",
          "type": "function"
        },
        "index": {
          "description": "FROM",
          "hierarchy": "Database HaskellDB Sql",
          "module": "Database.HaskellDB.Sql",
          "name": "tables",
          "normalized": "[(SqlTable,SqlSelect)]",
          "package": "haskelldb",
          "signature": "[(SqlTable,SqlSelect)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Version",
          "name": "Version",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Version.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HaskellDB Version",
          "module": "Database.HaskellDB.Version",
          "name": "Version",
          "package": "haskelldb",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB.Version",
          "name": "version",
          "package": "haskelldb",
          "signature": "String",
          "source": "src/Database-HaskellDB-Version.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HaskellDB Version",
          "module": "Database.HaskellDB.Version",
          "name": "version",
          "package": "haskelldb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Version.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskellDB is a Haskell library for expressing database queries and\n operations in a type safe and declarative way. HaskellDB compiles a\n relational algebra-like syntax into SQL, submits the operations to the\n database for processing, and returns the results as ordinary Haskell\n values.\n\u003c/p\u003e\u003cp\u003eThis is the main module that the user should \n import. Beside this module, the user should import a\n particular database binding (ie. \u003ca\u003eDatabase.HaskellDB.HSQL.ODBC\u003c/a\u003e) \n and database definitions.\n\u003c/p\u003e\u003cp\u003eHaskellDB was originally written by Daan Leijen and it's \n design is described in the paper Domain Specific Embedded \n Compilers, Daan Leijen and Erik Meijer. 2nd USENIX \n Conference on Domain-Specific Languages (DSL), Austin, \n USA, October 1999 (\u003ca\u003ehttp://www.usenix.org/events/dsl99/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis new version of HaskellDB was produced as a student project at\n Chalmers University of Technology in Gothenburg, Sweden. The aim of the\n project was to make HaskellDB a practically useful database library.\n That work is described in \n Student Paper: HaskellDB Improved, \n Bj&#246;rn Bringert, Anders H&#246;ckersten, Conny Andersson, Martin Andersson, \n Mary Bergman, Victor Blomqvist and Torbj&#246;rn Martin. \n In Proceedings of the ACM SIGPLAN 2004 Haskell Workshop, Snowbird, Utah, \n USA, September 22, 2004.\n (\u003ca\u003ehttp://haskelldb.sourceforge.net/haskelldb.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HaskellDB",
          "name": "HaskellDB",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB.html",
          "type": "module"
        },
        "index": {
          "description": "HaskellDB is Haskell library for expressing database queries and operations in type safe and declarative way HaskellDB compiles relational algebra-like syntax into SQL submits the operations to the database for processing and returns the results as ordinary Haskell values This is the main module that the user should import Beside this module the user should import particular database binding ie Database.HaskellDB.HSQL.ODBC and database definitions HaskellDB was originally written by Daan Leijen and it design is described in the paper Domain Specific Embedded Compilers Daan Leijen and Erik Meijer nd USENIX Conference on Domain-Specific Languages DSL Austin USA October http www.usenix.org events dsl99 This new version of HaskellDB was produced as student project at Chalmers University of Technology in Gothenburg Sweden The aim of the project was to make HaskellDB practically useful database library That work is described in Student Paper HaskellDB Improved Bj rn Bringert Anders ckersten Conny Andersson Martin Andersson Mary Bergman Victor Blomqvist and Torbj rn Martin In Proceedings of the ACM SIGPLAN Haskell Workshop Snowbird Utah USA September http haskelldb.sourceforge.net haskelldb.pdf",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "HaskellDB",
          "package": "haskelldb",
          "partial": "Haskell DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to implement variable length arguments to \u003ccode\u003efunc\u003c/code\u003e, below.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Args",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Args",
          "type": "class"
        },
        "index": {
          "description": "Used to implement variable length arguments to func below",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Args",
          "package": "haskelldb",
          "partial": "Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Attr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "Typed attributes",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Attr",
          "package": "haskelldb",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB",
          "name": "Database",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Database.html#Database",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Database",
          "package": "haskelldb",
          "partial": "Database",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Expr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "Type of normal expressions contains the untyped PrimExpr",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Expr",
          "package": "haskelldb",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of aggregate expressions.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "ExprAggr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#ExprAggr",
          "type": "data"
        },
        "index": {
          "description": "Type of aggregate expressions",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "ExprAggr",
          "package": "haskelldb",
          "partial": "Expr Aggr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:ExprAggr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe record \u003ccode\u003er\u003c/code\u003e has the field \u003ccode\u003ef\u003c/code\u003e if there is an instance of\n   \u003ccode\u003eHasField f r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "HasField",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#HasField",
          "type": "class"
        },
        "index": {
          "description": "The record has the field if there is an instance of HasField",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "HasField",
          "package": "haskelldb",
          "partial": "Has Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:HasField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB",
          "name": "OrderExpr",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "OrderExpr",
          "package": "haskelldb",
          "partial": "Order Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:OrderExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a query parameter. Left parameters are indexed\n by position, while right parameters are named.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Param",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB.html#Param",
          "type": "type"
        },
        "index": {
          "description": "Represents query parameter Left parameters are indexed by position while right parameters are named",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Param",
          "package": "haskelldb",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB",
          "name": "Query",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Query",
          "package": "haskelldb",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type used for records. This is a function\n   that takes a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e so that the user does not have to \n   put a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e at the end of every record.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Record",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#Record",
          "type": "type"
        },
        "index": {
          "description": "The type used for records This is function that takes RecNil so that the user does not have to put RecNil at the end of every record",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Record",
          "package": "haskelldb",
          "partial": "Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of relations, contains the attributes\n   of the relation and an \u003ccode\u003eAlias\u003c/code\u003e to which the\n   attributes are renamed in the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Rel",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Rel",
          "type": "data"
        },
        "index": {
          "description": "Type of relations contains the attributes of the relation and an Alias to which the attributes are renamed in the PrimQuery",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Rel",
          "package": "haskelldb",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HaskellDB",
          "name": "Select",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-HDBRec.html#Select",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Select",
          "package": "haskelldb",
          "partial": "Select",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "Table",
          "package": "haskelldb",
          "source": "src/Database-HaskellDB-Query.html#Table",
          "type": "data"
        },
        "index": {
          "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "Table",
          "package": "haskelldb",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField selection operator. It is overloaded so that\n   users (read HaskellDB) can redefine it for things\n   with phantom record types.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "(!)",
          "package": "haskelldb",
          "signature": "r -\u003e f -\u003e a",
          "source": "src/Database-HaskellDB-HDBRec.html#%21",
          "type": "method"
        },
        "index": {
          "description": "Field selection operator It is overloaded so that users read HaskellDB can redefine it for things with phantom record types",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "(!) !",
          "normalized": "a-\u003eb-\u003ec",
          "package": "haskelldb",
          "signature": "r-\u003ef-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet paramaters from a query in order.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "queryParams",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e [Param]",
          "source": "src/Database-HaskellDB.html#queryParams",
          "type": "function"
        },
        "index": {
          "description": "Get paramaters from query in order",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "queryParams",
          "normalized": "Query(Rel a)-\u003e[Param]",
          "package": "haskelldb",
          "partial": "Params",
          "signature": "Query(Rel r)-\u003e[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:queryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates two records.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "recCat",
          "package": "haskelldb",
          "signature": "r1 -\u003e r2 -\u003e r3",
          "source": "src/Database-HaskellDB-HDBRec.html#recCat",
          "type": "function"
        },
        "index": {
          "description": "Concatenates two records",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "recCat",
          "normalized": "a-\u003ea-\u003ea",
          "package": "haskelldb",
          "partial": "Cat",
          "signature": "r-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:recCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the optimized \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "showQuery",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e String",
          "source": "src/Database-HaskellDB.html#showQuery",
          "type": "function"
        },
        "index": {
          "description": "Shows the optimized PrimQuery",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "showQuery",
          "normalized": "Query(Rel a)-\u003eString",
          "package": "haskelldb",
          "partial": "Query",
          "signature": "Query(Rel r)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the unoptimized \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "showQueryUnOpt",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e String",
          "source": "src/Database-HaskellDB.html#showQueryUnOpt",
          "type": "function"
        },
        "index": {
          "description": "Shows the unoptimized PrimQuery",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "showQueryUnOpt",
          "normalized": "Query(Rel a)-\u003eString",
          "package": "haskelldb",
          "partial": "Query Un Opt",
          "signature": "Query(Rel r)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showQueryUnOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the optimized SQL query.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "showSql",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e String",
          "source": "src/Database-HaskellDB.html#showSql",
          "type": "function"
        },
        "index": {
          "description": "Shows the optimized SQL query",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "showSql",
          "normalized": "Query(Rel a)-\u003eString",
          "package": "haskelldb",
          "partial": "Sql",
          "signature": "Query(Rel r)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the unoptimized SQL query.\n\u003c/p\u003e",
          "module": "Database.HaskellDB",
          "name": "showSqlUnOpt",
          "package": "haskelldb",
          "signature": "Query (Rel r) -\u003e String",
          "source": "src/Database-HaskellDB.html#showSqlUnOpt",
          "type": "function"
        },
        "index": {
          "description": "Shows the unoptimized SQL query",
          "hierarchy": "Database HaskellDB",
          "module": "Database.HaskellDB",
          "name": "showSqlUnOpt",
          "normalized": "Query(Rel a)-\u003eString",
          "package": "haskelldb",
          "partial": "Sql Un Opt",
          "signature": "Query(Rel r)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showSqlUnOpt"
      }
    }
  ]
]