[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main idea of bounded lists is to create lists with predetermined\n maximum size.\n\u003c/p\u003e\u003cp\u003eBoundedList is a simple, fast and type safe approach to implementing \n this idea.\n The implementation is based on inductive instances, making it very easy to\n expand with new bounds. A new bound only requires one instance of size and \n two instances of Less.\n\u003c/p\u003e\u003cp\u003eBoundedList works as follows.\n Every bound is build up by declaring a data-type representing the new bound.\n The instance of size only returns the size as an Int.\n The first instance of Less is for telling the typechecker that this bound\n is greater than the largest smaller bound.\n The second instance of Less is used by the typechecker to construct a chain\n of instances if there is no hardcoded instance available.\n This way the type checker can determine if a bound is smaller/greater\n then any other bound.\n\u003c/p\u003e\u003cp\u003eThis inductive approach gives the complexity O(n) on the number of instances\n and very short type checking times compared to an O(n^2) implementation.\n\u003c/p\u003e\u003cp\u003eBoundedList also comes with a few utility function for manipulation an\n contructing bounded lists.\n\u003c/p\u003e\u003cp\u003eTo be noted:\n Since each bound is a unique type:\n Explicit shrink and/or grow is needed before using (==).\n BoundedList does not have an instance of Ordering. (This might change)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-BoundedList.html",
        "fct-type": "module",
        "title": "BoundedList"
      },
      "index": {
        "description": "The main idea of bounded lists is to create lists with predetermined maximum size BoundedList is simple fast and type safe approach to implementing this idea The implementation is based on inductive instances making it very easy to expand with new bounds new bound only requires one instance of size and two instances of Less BoundedList works as follows Every bound is build up by declaring data-type representing the new bound The instance of size only returns the size as an Int The first instance of Less is for telling the typechecker that this bound is greater than the largest smaller bound The second instance of Less is used by the typechecker to construct chain of instances if there is no hardcoded instance available This way the type checker can determine if bound is smaller greater then any other bound This inductive approach gives the complexity on the number of instances and very short type checking times compared to an implementation BoundedList also comes with few utility function for manipulation an contructing bounded lists To be noted Since each bound is unique type Explicit shrink and or grow is needed before using BoundedList does not have an instance of Ordering This might change",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "BoundedList",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bounded List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:BoundedList",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#BoundedList",
        "fct-type": "data",
        "title": "BoundedList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "BoundedList",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bounded List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N0",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N0",
        "fct-type": "data",
        "title": "N0"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N0",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N1",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N1",
        "fct-type": "data",
        "title": "N1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N1",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N10",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N10",
        "fct-type": "data",
        "title": "N10"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N10",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N100",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N100",
        "fct-type": "data",
        "title": "N100"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N100",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N101",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N101",
        "fct-type": "data",
        "title": "N101"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N101",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N102",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N102",
        "fct-type": "data",
        "title": "N102"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N102",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N103",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N103",
        "fct-type": "data",
        "title": "N103"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N103",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N104",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N104",
        "fct-type": "data",
        "title": "N104"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N104",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N105",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N105",
        "fct-type": "data",
        "title": "N105"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N105",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N106",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N106",
        "fct-type": "data",
        "title": "N106"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N106",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N107",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N107",
        "fct-type": "data",
        "title": "N107"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N107",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N108",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N108",
        "fct-type": "data",
        "title": "N108"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N108",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N109",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N109",
        "fct-type": "data",
        "title": "N109"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N109",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N11",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N11",
        "fct-type": "data",
        "title": "N11"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N11",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N110",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N110",
        "fct-type": "data",
        "title": "N110"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N110",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N111",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N111",
        "fct-type": "data",
        "title": "N111"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N111",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N112",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N112",
        "fct-type": "data",
        "title": "N112"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N112",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N113",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N113",
        "fct-type": "data",
        "title": "N113"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N113",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N114",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N114",
        "fct-type": "data",
        "title": "N114"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N114",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N115",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N115",
        "fct-type": "data",
        "title": "N115"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N115",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N116",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N116",
        "fct-type": "data",
        "title": "N116"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N116",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N117",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N117",
        "fct-type": "data",
        "title": "N117"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N117",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N118",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N118",
        "fct-type": "data",
        "title": "N118"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N118",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N119",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N119",
        "fct-type": "data",
        "title": "N119"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N119",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N12",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N12",
        "fct-type": "data",
        "title": "N12"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N12",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N120",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N120",
        "fct-type": "data",
        "title": "N120"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N120",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N121",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N121",
        "fct-type": "data",
        "title": "N121"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N121",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N122",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N122",
        "fct-type": "data",
        "title": "N122"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N122",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N123",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N123",
        "fct-type": "data",
        "title": "N123"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N123",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N124",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N124",
        "fct-type": "data",
        "title": "N124"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N124",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N125",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N125",
        "fct-type": "data",
        "title": "N125"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N125",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N126",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N126",
        "fct-type": "data",
        "title": "N126"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N126",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N127",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N127",
        "fct-type": "data",
        "title": "N127"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N127",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N128",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N128",
        "fct-type": "data",
        "title": "N128"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N128",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N129",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N129",
        "fct-type": "data",
        "title": "N129"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N129",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N13",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N13",
        "fct-type": "data",
        "title": "N13"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N13",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N130",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N130",
        "fct-type": "data",
        "title": "N130"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N130",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N131",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N131",
        "fct-type": "data",
        "title": "N131"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N131",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N132",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N132",
        "fct-type": "data",
        "title": "N132"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N132",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N133",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N133",
        "fct-type": "data",
        "title": "N133"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N133",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N134",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N134",
        "fct-type": "data",
        "title": "N134"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N134",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N135",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N135",
        "fct-type": "data",
        "title": "N135"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N135",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N136",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N136",
        "fct-type": "data",
        "title": "N136"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N136",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N137",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N137",
        "fct-type": "data",
        "title": "N137"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N137",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N138",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N138",
        "fct-type": "data",
        "title": "N138"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N138",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N139",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N139",
        "fct-type": "data",
        "title": "N139"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N139",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N14",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N14",
        "fct-type": "data",
        "title": "N14"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N14",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N140",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N140",
        "fct-type": "data",
        "title": "N140"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N140",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N141",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N141",
        "fct-type": "data",
        "title": "N141"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N141",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N142",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N142",
        "fct-type": "data",
        "title": "N142"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N142",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N143",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N143",
        "fct-type": "data",
        "title": "N143"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N143",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N144",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N144",
        "fct-type": "data",
        "title": "N144"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N144",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N145",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N145",
        "fct-type": "data",
        "title": "N145"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N145",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N146",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N146",
        "fct-type": "data",
        "title": "N146"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N146",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N147",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N147",
        "fct-type": "data",
        "title": "N147"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N147",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N148",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N148",
        "fct-type": "data",
        "title": "N148"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N148",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N149",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N149",
        "fct-type": "data",
        "title": "N149"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N149",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N15",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N15",
        "fct-type": "data",
        "title": "N15"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N15",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N150",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N150",
        "fct-type": "data",
        "title": "N150"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N150",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N151",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N151",
        "fct-type": "data",
        "title": "N151"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N151",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N152",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N152",
        "fct-type": "data",
        "title": "N152"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N152",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N153",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N153",
        "fct-type": "data",
        "title": "N153"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N153",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N154",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N154",
        "fct-type": "data",
        "title": "N154"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N154",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N155",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N155",
        "fct-type": "data",
        "title": "N155"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N155",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N156",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N156",
        "fct-type": "data",
        "title": "N156"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N156",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N157",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N157",
        "fct-type": "data",
        "title": "N157"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N157",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N158",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N158",
        "fct-type": "data",
        "title": "N158"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N158",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N159",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N159",
        "fct-type": "data",
        "title": "N159"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N159",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N16",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N16",
        "fct-type": "data",
        "title": "N16"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N16",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N160",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N160",
        "fct-type": "data",
        "title": "N160"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N160",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N161",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N161",
        "fct-type": "data",
        "title": "N161"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N161",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N162",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N162",
        "fct-type": "data",
        "title": "N162"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N162",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N163",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N163",
        "fct-type": "data",
        "title": "N163"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N163",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N164",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N164",
        "fct-type": "data",
        "title": "N164"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N164",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N165",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N165",
        "fct-type": "data",
        "title": "N165"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N165",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N166",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N166",
        "fct-type": "data",
        "title": "N166"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N166",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N167",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N167",
        "fct-type": "data",
        "title": "N167"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N167",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N168",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N168",
        "fct-type": "data",
        "title": "N168"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N168",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N169",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N169",
        "fct-type": "data",
        "title": "N169"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N169",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N17",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N17",
        "fct-type": "data",
        "title": "N17"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N17",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N170",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N170",
        "fct-type": "data",
        "title": "N170"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N170",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N171",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N171",
        "fct-type": "data",
        "title": "N171"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N171",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N172",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N172",
        "fct-type": "data",
        "title": "N172"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N172",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N173",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N173",
        "fct-type": "data",
        "title": "N173"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N173",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N174",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N174",
        "fct-type": "data",
        "title": "N174"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N174",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N175",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N175",
        "fct-type": "data",
        "title": "N175"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N175",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N176",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N176",
        "fct-type": "data",
        "title": "N176"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N176",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N177",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N177",
        "fct-type": "data",
        "title": "N177"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N177",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N178",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N178",
        "fct-type": "data",
        "title": "N178"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N178",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N179",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N179",
        "fct-type": "data",
        "title": "N179"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N179",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N18",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N18",
        "fct-type": "data",
        "title": "N18"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N18",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N180",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N180",
        "fct-type": "data",
        "title": "N180"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N180",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N181",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N181",
        "fct-type": "data",
        "title": "N181"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N181",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N182",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N182",
        "fct-type": "data",
        "title": "N182"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N182",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N183",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N183",
        "fct-type": "data",
        "title": "N183"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N183",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N184",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N184",
        "fct-type": "data",
        "title": "N184"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N184",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N185",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N185",
        "fct-type": "data",
        "title": "N185"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N185",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N186",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N186",
        "fct-type": "data",
        "title": "N186"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N186",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N187",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N187",
        "fct-type": "data",
        "title": "N187"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N187",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N188",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N188",
        "fct-type": "data",
        "title": "N188"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N188",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N189",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N189",
        "fct-type": "data",
        "title": "N189"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N189",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N19",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N19",
        "fct-type": "data",
        "title": "N19"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N19",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N190",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N190",
        "fct-type": "data",
        "title": "N190"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N190",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N191",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N191",
        "fct-type": "data",
        "title": "N191"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N191",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N192",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N192",
        "fct-type": "data",
        "title": "N192"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N192",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N193",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N193",
        "fct-type": "data",
        "title": "N193"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N193",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N194",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N194",
        "fct-type": "data",
        "title": "N194"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N194",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N195",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N195",
        "fct-type": "data",
        "title": "N195"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N195",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N196",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N196",
        "fct-type": "data",
        "title": "N196"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N196",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N197",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N197",
        "fct-type": "data",
        "title": "N197"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N197",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N198",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N198",
        "fct-type": "data",
        "title": "N198"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N198",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N199",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N199",
        "fct-type": "data",
        "title": "N199"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N199",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N2",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N2",
        "fct-type": "data",
        "title": "N2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N2",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N20",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N20",
        "fct-type": "data",
        "title": "N20"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N20",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N200",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N200",
        "fct-type": "data",
        "title": "N200"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N200",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N201",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N201",
        "fct-type": "data",
        "title": "N201"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N201",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N202",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N202",
        "fct-type": "data",
        "title": "N202"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N202",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N203",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N203",
        "fct-type": "data",
        "title": "N203"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N203",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N204",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N204",
        "fct-type": "data",
        "title": "N204"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N204",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N205",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N205",
        "fct-type": "data",
        "title": "N205"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N205",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N206",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N206",
        "fct-type": "data",
        "title": "N206"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N206",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N207",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N207",
        "fct-type": "data",
        "title": "N207"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N207",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N208",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N208",
        "fct-type": "data",
        "title": "N208"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N208",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N209",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N209",
        "fct-type": "data",
        "title": "N209"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N209",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N21",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N21",
        "fct-type": "data",
        "title": "N21"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N21",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N210",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N210",
        "fct-type": "data",
        "title": "N210"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N210",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N211",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N211",
        "fct-type": "data",
        "title": "N211"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N211",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N212",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N212",
        "fct-type": "data",
        "title": "N212"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N212",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N213",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N213",
        "fct-type": "data",
        "title": "N213"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N213",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N214",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N214",
        "fct-type": "data",
        "title": "N214"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N214",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N215",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N215",
        "fct-type": "data",
        "title": "N215"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N215",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N216",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N216",
        "fct-type": "data",
        "title": "N216"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N216",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N217",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N217",
        "fct-type": "data",
        "title": "N217"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N217",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N218",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N218",
        "fct-type": "data",
        "title": "N218"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N218",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N219",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N219",
        "fct-type": "data",
        "title": "N219"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N219",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N22",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N22",
        "fct-type": "data",
        "title": "N22"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N22",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N220",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N220",
        "fct-type": "data",
        "title": "N220"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N220",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N221",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N221",
        "fct-type": "data",
        "title": "N221"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N221",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N222",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N222",
        "fct-type": "data",
        "title": "N222"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N222",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N223",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N223",
        "fct-type": "data",
        "title": "N223"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N223",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N224",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N224",
        "fct-type": "data",
        "title": "N224"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N224",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N225",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N225",
        "fct-type": "data",
        "title": "N225"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N225",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N226",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N226",
        "fct-type": "data",
        "title": "N226"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N226",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N227",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N227",
        "fct-type": "data",
        "title": "N227"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N227",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N228",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N228",
        "fct-type": "data",
        "title": "N228"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N228",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N229",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N229",
        "fct-type": "data",
        "title": "N229"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N229",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N23",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N23",
        "fct-type": "data",
        "title": "N23"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N23",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N230",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N230",
        "fct-type": "data",
        "title": "N230"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N230",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N231",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N231",
        "fct-type": "data",
        "title": "N231"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N231",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N232",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N232",
        "fct-type": "data",
        "title": "N232"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N232",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N233",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N233",
        "fct-type": "data",
        "title": "N233"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N233",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N234",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N234",
        "fct-type": "data",
        "title": "N234"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N234",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N235",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N235",
        "fct-type": "data",
        "title": "N235"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N235",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N236",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N236",
        "fct-type": "data",
        "title": "N236"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N236",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N237",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N237",
        "fct-type": "data",
        "title": "N237"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N237",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N238",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N238",
        "fct-type": "data",
        "title": "N238"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N238",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N239",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N239",
        "fct-type": "data",
        "title": "N239"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N239",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N24",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N24",
        "fct-type": "data",
        "title": "N24"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N24",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N240",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N240",
        "fct-type": "data",
        "title": "N240"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N240",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N241",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N241",
        "fct-type": "data",
        "title": "N241"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N241",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N242",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N242",
        "fct-type": "data",
        "title": "N242"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N242",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N243",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N243",
        "fct-type": "data",
        "title": "N243"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N243",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N244",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N244",
        "fct-type": "data",
        "title": "N244"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N244",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N245",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N245",
        "fct-type": "data",
        "title": "N245"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N245",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N246",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N246",
        "fct-type": "data",
        "title": "N246"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N246",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N247",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N247",
        "fct-type": "data",
        "title": "N247"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N247",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N248",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N248",
        "fct-type": "data",
        "title": "N248"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N248",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N249",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N249",
        "fct-type": "data",
        "title": "N249"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N249",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N25",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N25",
        "fct-type": "data",
        "title": "N25"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N25",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N250",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N250",
        "fct-type": "data",
        "title": "N250"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N250",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N251",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N251",
        "fct-type": "data",
        "title": "N251"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N251",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N252",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N252",
        "fct-type": "data",
        "title": "N252"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N252",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N253",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N253",
        "fct-type": "data",
        "title": "N253"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N253",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N254",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N254",
        "fct-type": "data",
        "title": "N254"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N254",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N255",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N255",
        "fct-type": "data",
        "title": "N255"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N255",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N26",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N26",
        "fct-type": "data",
        "title": "N26"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N26",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N27",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N27",
        "fct-type": "data",
        "title": "N27"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N27",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N28",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N28",
        "fct-type": "data",
        "title": "N28"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N28",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N29",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N29",
        "fct-type": "data",
        "title": "N29"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N29",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N3",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N3",
        "fct-type": "data",
        "title": "N3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N3",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N30",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N30",
        "fct-type": "data",
        "title": "N30"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N30",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N31",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N31",
        "fct-type": "data",
        "title": "N31"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N31",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N32",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N32",
        "fct-type": "data",
        "title": "N32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N32",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N33",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N33",
        "fct-type": "data",
        "title": "N33"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N33",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N34",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N34",
        "fct-type": "data",
        "title": "N34"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N34",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N35",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N35",
        "fct-type": "data",
        "title": "N35"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N35",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N36",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N36",
        "fct-type": "data",
        "title": "N36"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N36",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N37",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N37",
        "fct-type": "data",
        "title": "N37"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N37",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N38",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N38",
        "fct-type": "data",
        "title": "N38"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N38",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N39",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N39",
        "fct-type": "data",
        "title": "N39"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N39",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N4",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N4",
        "fct-type": "data",
        "title": "N4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N4",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N40",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N40",
        "fct-type": "data",
        "title": "N40"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N40",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N41",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N41",
        "fct-type": "data",
        "title": "N41"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N41",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N42",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N42",
        "fct-type": "data",
        "title": "N42"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N42",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N43",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N43",
        "fct-type": "data",
        "title": "N43"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N43",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N44",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N44",
        "fct-type": "data",
        "title": "N44"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N44",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N45",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N45",
        "fct-type": "data",
        "title": "N45"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N45",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N46",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N46",
        "fct-type": "data",
        "title": "N46"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N46",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N47",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N47",
        "fct-type": "data",
        "title": "N47"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N47",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N48",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N48",
        "fct-type": "data",
        "title": "N48"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N48",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N49",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N49",
        "fct-type": "data",
        "title": "N49"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N49",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N5",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N5",
        "fct-type": "data",
        "title": "N5"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N5",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N50",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N50",
        "fct-type": "data",
        "title": "N50"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N50",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N51",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N51",
        "fct-type": "data",
        "title": "N51"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N51",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N52",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N52",
        "fct-type": "data",
        "title": "N52"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N52",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N53",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N53",
        "fct-type": "data",
        "title": "N53"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N53",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N54",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N54",
        "fct-type": "data",
        "title": "N54"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N54",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N55",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N55",
        "fct-type": "data",
        "title": "N55"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N55",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N56",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N56",
        "fct-type": "data",
        "title": "N56"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N56",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N57",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N57",
        "fct-type": "data",
        "title": "N57"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N57",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N58",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N58",
        "fct-type": "data",
        "title": "N58"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N58",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N59",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N59",
        "fct-type": "data",
        "title": "N59"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N59",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N6",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N6",
        "fct-type": "data",
        "title": "N6"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N6",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N60",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N60",
        "fct-type": "data",
        "title": "N60"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N60",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N61",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N61",
        "fct-type": "data",
        "title": "N61"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N61",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N62",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N62",
        "fct-type": "data",
        "title": "N62"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N62",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N63",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N63",
        "fct-type": "data",
        "title": "N63"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N63",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N64",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N64",
        "fct-type": "data",
        "title": "N64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N64",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N65",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N65",
        "fct-type": "data",
        "title": "N65"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N65",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N65535",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N65535",
        "fct-type": "data",
        "title": "N65535"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N65535",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N66",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N66",
        "fct-type": "data",
        "title": "N66"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N66",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N67",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N67",
        "fct-type": "data",
        "title": "N67"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N67",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N68",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N68",
        "fct-type": "data",
        "title": "N68"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N68",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N69",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N69",
        "fct-type": "data",
        "title": "N69"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N69",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N7",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N7",
        "fct-type": "data",
        "title": "N7"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N7",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N70",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N70",
        "fct-type": "data",
        "title": "N70"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N70",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N71",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N71",
        "fct-type": "data",
        "title": "N71"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N71",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N72",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N72",
        "fct-type": "data",
        "title": "N72"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N72",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N73",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N73",
        "fct-type": "data",
        "title": "N73"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N73",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N74",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N74",
        "fct-type": "data",
        "title": "N74"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N74",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N75",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N75",
        "fct-type": "data",
        "title": "N75"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N75",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N76",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N76",
        "fct-type": "data",
        "title": "N76"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N76",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N77",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N77",
        "fct-type": "data",
        "title": "N77"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N77",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N78",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N78",
        "fct-type": "data",
        "title": "N78"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N78",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N79",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N79",
        "fct-type": "data",
        "title": "N79"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N79",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N8",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N8",
        "fct-type": "data",
        "title": "N8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N8",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N80",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N80",
        "fct-type": "data",
        "title": "N80"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N80",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N81",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N81",
        "fct-type": "data",
        "title": "N81"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N81",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N82",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N82",
        "fct-type": "data",
        "title": "N82"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N82",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N83",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N83",
        "fct-type": "data",
        "title": "N83"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N83",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N84",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N84",
        "fct-type": "data",
        "title": "N84"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N84",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N85",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N85",
        "fct-type": "data",
        "title": "N85"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N85",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N86",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N86",
        "fct-type": "data",
        "title": "N86"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N86",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N87",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N87",
        "fct-type": "data",
        "title": "N87"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N87",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N88",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N88",
        "fct-type": "data",
        "title": "N88"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N88",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N89",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N89",
        "fct-type": "data",
        "title": "N89"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N89",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N9",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N9",
        "fct-type": "data",
        "title": "N9"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N9",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N90",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N90",
        "fct-type": "data",
        "title": "N90"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N90",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N91",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N91",
        "fct-type": "data",
        "title": "N91"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N91",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N92",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N92",
        "fct-type": "data",
        "title": "N92"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N92",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N93",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N93",
        "fct-type": "data",
        "title": "N93"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N93",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N94",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N94",
        "fct-type": "data",
        "title": "N94"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N94",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N95",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N95",
        "fct-type": "data",
        "title": "N95"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N95",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N96",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N96",
        "fct-type": "data",
        "title": "N96"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N96",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N97",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N97",
        "fct-type": "data",
        "title": "N97"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N97",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N98",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N98",
        "fct-type": "data",
        "title": "N98"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N98",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:N99",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#N99",
        "fct-type": "data",
        "title": "N99"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "N99",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#t:Size",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#Size",
        "fct-type": "class",
        "title": "Size"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "Size",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:fromBounded",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e and return the list inside.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "BoundedList a n -\u003e [a]",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#fromBounded",
        "fct-type": "function",
        "title": "fromBounded"
      },
      "index": {
        "description": "Takes BoundedList and return the list inside",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "fromBounded",
        "normalized": "BoundedList a b-\u003e[a]",
        "package": "haskelldb",
        "partial": "Bounded",
        "signature": "BoundedList a n-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:grow",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e add grows it size.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "BoundedList a n -\u003e BoundedList a m",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#grow",
        "fct-type": "function",
        "title": "grow"
      },
      "index": {
        "description": "Takes BoundedList add grows it size",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "grow",
        "normalized": "BoundedList a b-\u003eBoundedList a c",
        "package": "haskelldb",
        "partial": "",
        "signature": "BoundedList a n-\u003eBoundedList a m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:listBound",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the length of a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "BoundedList a n -\u003e Int",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#listBound",
        "fct-type": "function",
        "title": "listBound"
      },
      "index": {
        "description": "Returns the length of BoundedList",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "listBound",
        "normalized": "BoundedList a b-\u003eInt",
        "package": "haskelldb",
        "partial": "Bound",
        "signature": "BoundedList a n-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:shrink",
      "description": {
        "fct-descr": "\u003cp\u003eShrinks the \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e supplied if\n it can do so without truncating the list. Returns Nothing\n if the list inside was to long.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "BoundedList a n -\u003e Maybe (BoundedList a m)",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#shrink",
        "fct-type": "function",
        "title": "shrink"
      },
      "index": {
        "description": "Shrinks the BoundedList supplied if it can do so without truncating the list Returns Nothing if the list inside was to long",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "shrink",
        "normalized": "BoundedList a b-\u003eMaybe(BoundedList a c)",
        "package": "haskelldb",
        "partial": "",
        "signature": "BoundedList a n-\u003eMaybe(BoundedList a m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:toBounded",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list and transforms it to a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n If the list doesn't fit, Nothing is returned.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "[a] -\u003e Maybe (BoundedList a n)",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#toBounded",
        "fct-type": "function",
        "title": "toBounded"
      },
      "index": {
        "description": "Takes list and transforms it to BoundedList If the list doesn fit Nothing is returned",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "toBounded",
        "normalized": "[a]-\u003eMaybe(BoundedList a b)",
        "package": "haskelldb",
        "partial": "Bounded",
        "signature": "[a]-\u003eMaybe(BoundedList a n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedList.html#v:trunc",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list and transforms it to a \u003ccode\u003e\u003ca\u003eBoundedList\u003c/a\u003e\u003c/code\u003e.\n If the list doesn'n fit, the list is truncated\n to make it fit into the bounded list.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.BoundedList",
        "fct-package": "haskelldb",
        "fct-signature": "[a] -\u003e BoundedList a n",
        "fct-source": "src/Database-HaskellDB-BoundedList.html#trunc",
        "fct-type": "function",
        "title": "trunc"
      },
      "index": {
        "description": "Takes list and transforms it to BoundedList If the list doesn fit the list is truncated to make it fit into the bounded list",
        "hierarchy": "Database HaskellDB BoundedList",
        "module": "Database.HaskellDB.BoundedList",
        "name": "trunc",
        "normalized": "[a]-\u003eBoundedList a b",
        "package": "haskelldb",
        "partial": "",
        "signature": "[a]-\u003eBoundedList a n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoundedString represents the sql types; CHARACTER and CHARACTER VARYING\n both defined in SQL 1992.\n BoundedString supports sizes in the range [0,255] and 65535.\n Greater sizes and the sql type SQL_TEXT (SQL 1992) will might be \n supported in the future.\n\u003c/p\u003e\u003cp\u003eThe use of BoundedString together with HaskellDB enables feedback when\n the length of a string exceeds the bound of a certain database field.\n BoundedString also provides a layer of type safety against loss of data\n due to sql string truncation when extracting and re-insert data into fields\n with smaller bound.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-BoundedString.html",
        "fct-type": "module",
        "title": "BoundedString"
      },
      "index": {
        "description": "BoundedString represents the sql types CHARACTER and CHARACTER VARYING both defined in SQL BoundedString supports sizes in the range and Greater sizes and the sql type SQL TEXT SQL will might be supported in the future The use of BoundedString together with HaskellDB enables feedback when the length of string exceeds the bound of certain database field BoundedString also provides layer of type safety against loss of data due to sql string truncation when extracting and re-insert data into fields with smaller bound",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BoundedString",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bounded String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr0",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr0",
        "fct-type": "type",
        "title": "BStr0"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr0",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr1",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr1",
        "fct-type": "type",
        "title": "BStr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr1",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr10",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr10",
        "fct-type": "type",
        "title": "BStr10"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr10",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr100",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr100",
        "fct-type": "type",
        "title": "BStr100"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr100",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr101",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr101",
        "fct-type": "type",
        "title": "BStr101"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr101",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr102",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr102",
        "fct-type": "type",
        "title": "BStr102"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr102",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr103",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr103",
        "fct-type": "type",
        "title": "BStr103"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr103",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr104",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr104",
        "fct-type": "type",
        "title": "BStr104"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr104",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr105",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr105",
        "fct-type": "type",
        "title": "BStr105"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr105",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr106",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr106",
        "fct-type": "type",
        "title": "BStr106"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr106",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr107",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr107",
        "fct-type": "type",
        "title": "BStr107"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr107",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr108",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr108",
        "fct-type": "type",
        "title": "BStr108"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr108",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr109",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr109",
        "fct-type": "type",
        "title": "BStr109"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr109",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr11",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr11",
        "fct-type": "type",
        "title": "BStr11"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr11",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr110",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr110",
        "fct-type": "type",
        "title": "BStr110"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr110",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr111",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr111",
        "fct-type": "type",
        "title": "BStr111"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr111",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr112",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr112",
        "fct-type": "type",
        "title": "BStr112"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr112",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr113",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr113",
        "fct-type": "type",
        "title": "BStr113"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr113",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr114",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr114",
        "fct-type": "type",
        "title": "BStr114"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr114",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr115",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr115",
        "fct-type": "type",
        "title": "BStr115"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr115",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr116",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr116",
        "fct-type": "type",
        "title": "BStr116"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr116",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr117",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr117",
        "fct-type": "type",
        "title": "BStr117"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr117",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr118",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr118",
        "fct-type": "type",
        "title": "BStr118"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr118",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr119",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr119",
        "fct-type": "type",
        "title": "BStr119"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr119",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr12",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr12",
        "fct-type": "type",
        "title": "BStr12"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr12",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr120",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr120",
        "fct-type": "type",
        "title": "BStr120"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr120",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr121",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr121",
        "fct-type": "type",
        "title": "BStr121"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr121",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr122",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr122",
        "fct-type": "type",
        "title": "BStr122"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr122",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr123",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr123",
        "fct-type": "type",
        "title": "BStr123"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr123",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr124",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr124",
        "fct-type": "type",
        "title": "BStr124"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr124",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr125",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr125",
        "fct-type": "type",
        "title": "BStr125"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr125",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr126",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr126",
        "fct-type": "type",
        "title": "BStr126"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr126",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr127",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr127",
        "fct-type": "type",
        "title": "BStr127"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr127",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr128",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr128",
        "fct-type": "type",
        "title": "BStr128"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr128",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr129",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr129",
        "fct-type": "type",
        "title": "BStr129"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr129",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr13",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr13",
        "fct-type": "type",
        "title": "BStr13"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr13",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr130",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr130",
        "fct-type": "type",
        "title": "BStr130"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr130",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr131",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr131",
        "fct-type": "type",
        "title": "BStr131"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr131",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr132",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr132",
        "fct-type": "type",
        "title": "BStr132"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr132",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr133",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr133",
        "fct-type": "type",
        "title": "BStr133"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr133",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr134",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr134",
        "fct-type": "type",
        "title": "BStr134"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr134",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr135",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr135",
        "fct-type": "type",
        "title": "BStr135"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr135",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr136",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr136",
        "fct-type": "type",
        "title": "BStr136"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr136",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr137",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr137",
        "fct-type": "type",
        "title": "BStr137"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr137",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr138",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr138",
        "fct-type": "type",
        "title": "BStr138"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr138",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr139",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr139",
        "fct-type": "type",
        "title": "BStr139"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr139",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr14",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr14",
        "fct-type": "type",
        "title": "BStr14"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr14",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr140",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr140",
        "fct-type": "type",
        "title": "BStr140"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr140",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr141",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr141",
        "fct-type": "type",
        "title": "BStr141"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr141",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr142",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr142",
        "fct-type": "type",
        "title": "BStr142"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr142",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr143",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr143",
        "fct-type": "type",
        "title": "BStr143"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr143",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr144",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr144",
        "fct-type": "type",
        "title": "BStr144"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr144",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr145",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr145",
        "fct-type": "type",
        "title": "BStr145"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr145",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr146",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr146",
        "fct-type": "type",
        "title": "BStr146"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr146",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr147",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr147",
        "fct-type": "type",
        "title": "BStr147"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr147",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr148",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr148",
        "fct-type": "type",
        "title": "BStr148"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr148",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr149",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr149",
        "fct-type": "type",
        "title": "BStr149"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr149",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr15",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr15",
        "fct-type": "type",
        "title": "BStr15"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr15",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr150",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr150",
        "fct-type": "type",
        "title": "BStr150"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr150",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr151",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr151",
        "fct-type": "type",
        "title": "BStr151"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr151",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr152",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr152",
        "fct-type": "type",
        "title": "BStr152"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr152",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr153",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr153",
        "fct-type": "type",
        "title": "BStr153"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr153",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr154",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr154",
        "fct-type": "type",
        "title": "BStr154"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr154",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr155",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr155",
        "fct-type": "type",
        "title": "BStr155"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr155",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr156",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr156",
        "fct-type": "type",
        "title": "BStr156"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr156",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr157",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr157",
        "fct-type": "type",
        "title": "BStr157"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr157",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr158",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr158",
        "fct-type": "type",
        "title": "BStr158"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr158",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr159",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr159",
        "fct-type": "type",
        "title": "BStr159"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr159",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr16",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr16",
        "fct-type": "type",
        "title": "BStr16"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr16",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr160",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr160",
        "fct-type": "type",
        "title": "BStr160"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr160",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr161",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr161",
        "fct-type": "type",
        "title": "BStr161"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr161",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr162",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr162",
        "fct-type": "type",
        "title": "BStr162"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr162",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr163",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr163",
        "fct-type": "type",
        "title": "BStr163"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr163",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr164",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr164",
        "fct-type": "type",
        "title": "BStr164"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr164",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr165",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr165",
        "fct-type": "type",
        "title": "BStr165"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr165",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr166",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr166",
        "fct-type": "type",
        "title": "BStr166"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr166",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr167",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr167",
        "fct-type": "type",
        "title": "BStr167"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr167",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr168",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr168",
        "fct-type": "type",
        "title": "BStr168"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr168",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr169",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr169",
        "fct-type": "type",
        "title": "BStr169"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr169",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr17",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr17",
        "fct-type": "type",
        "title": "BStr17"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr17",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr170",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr170",
        "fct-type": "type",
        "title": "BStr170"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr170",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr171",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr171",
        "fct-type": "type",
        "title": "BStr171"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr171",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr172",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr172",
        "fct-type": "type",
        "title": "BStr172"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr172",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr173",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr173",
        "fct-type": "type",
        "title": "BStr173"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr173",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr174",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr174",
        "fct-type": "type",
        "title": "BStr174"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr174",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr175",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr175",
        "fct-type": "type",
        "title": "BStr175"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr175",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr176",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr176",
        "fct-type": "type",
        "title": "BStr176"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr176",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr177",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr177",
        "fct-type": "type",
        "title": "BStr177"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr177",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr178",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr178",
        "fct-type": "type",
        "title": "BStr178"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr178",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr179",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr179",
        "fct-type": "type",
        "title": "BStr179"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr179",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr18",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr18",
        "fct-type": "type",
        "title": "BStr18"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr18",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr180",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr180",
        "fct-type": "type",
        "title": "BStr180"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr180",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr181",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr181",
        "fct-type": "type",
        "title": "BStr181"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr181",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr182",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr182",
        "fct-type": "type",
        "title": "BStr182"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr182",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr183",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr183",
        "fct-type": "type",
        "title": "BStr183"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr183",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr184",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr184",
        "fct-type": "type",
        "title": "BStr184"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr184",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr185",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr185",
        "fct-type": "type",
        "title": "BStr185"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr185",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr186",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr186",
        "fct-type": "type",
        "title": "BStr186"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr186",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr187",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr187",
        "fct-type": "type",
        "title": "BStr187"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr187",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr188",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr188",
        "fct-type": "type",
        "title": "BStr188"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr188",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr189",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr189",
        "fct-type": "type",
        "title": "BStr189"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr189",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr19",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr19",
        "fct-type": "type",
        "title": "BStr19"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr19",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr190",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr190",
        "fct-type": "type",
        "title": "BStr190"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr190",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr191",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr191",
        "fct-type": "type",
        "title": "BStr191"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr191",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr192",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr192",
        "fct-type": "type",
        "title": "BStr192"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr192",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr193",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr193",
        "fct-type": "type",
        "title": "BStr193"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr193",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr194",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr194",
        "fct-type": "type",
        "title": "BStr194"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr194",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr195",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr195",
        "fct-type": "type",
        "title": "BStr195"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr195",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr196",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr196",
        "fct-type": "type",
        "title": "BStr196"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr196",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr197",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr197",
        "fct-type": "type",
        "title": "BStr197"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr197",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr198",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr198",
        "fct-type": "type",
        "title": "BStr198"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr198",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr199",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr199",
        "fct-type": "type",
        "title": "BStr199"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr199",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr2",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr2",
        "fct-type": "type",
        "title": "BStr2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr2",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr20",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr20",
        "fct-type": "type",
        "title": "BStr20"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr20",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr200",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr200",
        "fct-type": "type",
        "title": "BStr200"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr200",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr201",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr201",
        "fct-type": "type",
        "title": "BStr201"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr201",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr202",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr202",
        "fct-type": "type",
        "title": "BStr202"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr202",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr203",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr203",
        "fct-type": "type",
        "title": "BStr203"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr203",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr204",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr204",
        "fct-type": "type",
        "title": "BStr204"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr204",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr205",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr205",
        "fct-type": "type",
        "title": "BStr205"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr205",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr206",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr206",
        "fct-type": "type",
        "title": "BStr206"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr206",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr207",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr207",
        "fct-type": "type",
        "title": "BStr207"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr207",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr208",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr208",
        "fct-type": "type",
        "title": "BStr208"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr208",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr209",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr209",
        "fct-type": "type",
        "title": "BStr209"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr209",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr21",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr21",
        "fct-type": "type",
        "title": "BStr21"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr21",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr210",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr210",
        "fct-type": "type",
        "title": "BStr210"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr210",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr211",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr211",
        "fct-type": "type",
        "title": "BStr211"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr211",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr212",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr212",
        "fct-type": "type",
        "title": "BStr212"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr212",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr213",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr213",
        "fct-type": "type",
        "title": "BStr213"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr213",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr214",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr214",
        "fct-type": "type",
        "title": "BStr214"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr214",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr215",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr215",
        "fct-type": "type",
        "title": "BStr215"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr215",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr216",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr216",
        "fct-type": "type",
        "title": "BStr216"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr216",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr217",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr217",
        "fct-type": "type",
        "title": "BStr217"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr217",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr218",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr218",
        "fct-type": "type",
        "title": "BStr218"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr218",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr219",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr219",
        "fct-type": "type",
        "title": "BStr219"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr219",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr22",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr22",
        "fct-type": "type",
        "title": "BStr22"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr22",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr220",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr220",
        "fct-type": "type",
        "title": "BStr220"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr220",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr221",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr221",
        "fct-type": "type",
        "title": "BStr221"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr221",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr222",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr222",
        "fct-type": "type",
        "title": "BStr222"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr222",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr223",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr223",
        "fct-type": "type",
        "title": "BStr223"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr223",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr224",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr224",
        "fct-type": "type",
        "title": "BStr224"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr224",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr225",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr225",
        "fct-type": "type",
        "title": "BStr225"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr225",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr226",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr226",
        "fct-type": "type",
        "title": "BStr226"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr226",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr227",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr227",
        "fct-type": "type",
        "title": "BStr227"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr227",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr228",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr228",
        "fct-type": "type",
        "title": "BStr228"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr228",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr229",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr229",
        "fct-type": "type",
        "title": "BStr229"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr229",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr23",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr23",
        "fct-type": "type",
        "title": "BStr23"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr23",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr230",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr230",
        "fct-type": "type",
        "title": "BStr230"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr230",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr231",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr231",
        "fct-type": "type",
        "title": "BStr231"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr231",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr232",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr232",
        "fct-type": "type",
        "title": "BStr232"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr232",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr233",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr233",
        "fct-type": "type",
        "title": "BStr233"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr233",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr234",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr234",
        "fct-type": "type",
        "title": "BStr234"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr234",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr235",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr235",
        "fct-type": "type",
        "title": "BStr235"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr235",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr236",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr236",
        "fct-type": "type",
        "title": "BStr236"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr236",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr237",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr237",
        "fct-type": "type",
        "title": "BStr237"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr237",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr238",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr238",
        "fct-type": "type",
        "title": "BStr238"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr238",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr239",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr239",
        "fct-type": "type",
        "title": "BStr239"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr239",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr24",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr24",
        "fct-type": "type",
        "title": "BStr24"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr24",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr240",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr240",
        "fct-type": "type",
        "title": "BStr240"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr240",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr241",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr241",
        "fct-type": "type",
        "title": "BStr241"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr241",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr242",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr242",
        "fct-type": "type",
        "title": "BStr242"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr242",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr243",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr243",
        "fct-type": "type",
        "title": "BStr243"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr243",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr244",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr244",
        "fct-type": "type",
        "title": "BStr244"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr244",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr245",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr245",
        "fct-type": "type",
        "title": "BStr245"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr245",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr246",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr246",
        "fct-type": "type",
        "title": "BStr246"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr246",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr247",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr247",
        "fct-type": "type",
        "title": "BStr247"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr247",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr248",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr248",
        "fct-type": "type",
        "title": "BStr248"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr248",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr249",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr249",
        "fct-type": "type",
        "title": "BStr249"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr249",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr25",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr25",
        "fct-type": "type",
        "title": "BStr25"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr25",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr250",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr250",
        "fct-type": "type",
        "title": "BStr250"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr250",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr251",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr251",
        "fct-type": "type",
        "title": "BStr251"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr251",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr252",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr252",
        "fct-type": "type",
        "title": "BStr252"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr252",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr253",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr253",
        "fct-type": "type",
        "title": "BStr253"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr253",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr254",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr254",
        "fct-type": "type",
        "title": "BStr254"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr254",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr255",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr255",
        "fct-type": "type",
        "title": "BStr255"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr255",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr26",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr26",
        "fct-type": "type",
        "title": "BStr26"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr26",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr27",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr27",
        "fct-type": "type",
        "title": "BStr27"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr27",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr28",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr28",
        "fct-type": "type",
        "title": "BStr28"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr28",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr29",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr29",
        "fct-type": "type",
        "title": "BStr29"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr29",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr3",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr3",
        "fct-type": "type",
        "title": "BStr3"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr3",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr30",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr30",
        "fct-type": "type",
        "title": "BStr30"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr30",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr31",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr31",
        "fct-type": "type",
        "title": "BStr31"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr31",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr32",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr32",
        "fct-type": "type",
        "title": "BStr32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr32",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr33",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr33",
        "fct-type": "type",
        "title": "BStr33"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr33",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr34",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr34",
        "fct-type": "type",
        "title": "BStr34"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr34",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr35",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr35",
        "fct-type": "type",
        "title": "BStr35"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr35",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr36",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr36",
        "fct-type": "type",
        "title": "BStr36"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr36",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr37",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr37",
        "fct-type": "type",
        "title": "BStr37"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr37",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr38",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr38",
        "fct-type": "type",
        "title": "BStr38"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr38",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr39",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr39",
        "fct-type": "type",
        "title": "BStr39"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr39",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr4",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr4",
        "fct-type": "type",
        "title": "BStr4"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr4",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr40",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr40",
        "fct-type": "type",
        "title": "BStr40"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr40",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr41",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr41",
        "fct-type": "type",
        "title": "BStr41"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr41",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr42",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr42",
        "fct-type": "type",
        "title": "BStr42"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr42",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr43",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr43",
        "fct-type": "type",
        "title": "BStr43"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr43",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr44",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr44",
        "fct-type": "type",
        "title": "BStr44"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr44",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr45",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr45",
        "fct-type": "type",
        "title": "BStr45"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr45",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr46",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr46",
        "fct-type": "type",
        "title": "BStr46"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr46",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr47",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr47",
        "fct-type": "type",
        "title": "BStr47"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr47",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr48",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr48",
        "fct-type": "type",
        "title": "BStr48"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr48",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr49",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr49",
        "fct-type": "type",
        "title": "BStr49"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr49",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr5",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr5",
        "fct-type": "type",
        "title": "BStr5"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr5",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr50",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr50",
        "fct-type": "type",
        "title": "BStr50"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr50",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr51",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr51",
        "fct-type": "type",
        "title": "BStr51"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr51",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr52",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr52",
        "fct-type": "type",
        "title": "BStr52"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr52",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr53",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr53",
        "fct-type": "type",
        "title": "BStr53"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr53",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr54",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr54",
        "fct-type": "type",
        "title": "BStr54"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr54",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr55",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr55",
        "fct-type": "type",
        "title": "BStr55"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr55",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr56",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr56",
        "fct-type": "type",
        "title": "BStr56"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr56",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr57",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr57",
        "fct-type": "type",
        "title": "BStr57"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr57",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr58",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr58",
        "fct-type": "type",
        "title": "BStr58"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr58",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr59",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr59",
        "fct-type": "type",
        "title": "BStr59"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr59",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr6",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr6",
        "fct-type": "type",
        "title": "BStr6"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr6",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr60",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr60",
        "fct-type": "type",
        "title": "BStr60"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr60",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr61",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr61",
        "fct-type": "type",
        "title": "BStr61"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr61",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr62",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr62",
        "fct-type": "type",
        "title": "BStr62"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr62",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr63",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr63",
        "fct-type": "type",
        "title": "BStr63"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr63",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr64",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr64",
        "fct-type": "type",
        "title": "BStr64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr64",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr65",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr65",
        "fct-type": "type",
        "title": "BStr65"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr65",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr65535",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr65535",
        "fct-type": "type",
        "title": "BStr65535"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr65535",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr66",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr66",
        "fct-type": "type",
        "title": "BStr66"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr66",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr67",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr67",
        "fct-type": "type",
        "title": "BStr67"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr67",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr68",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr68",
        "fct-type": "type",
        "title": "BStr68"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr68",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr69",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr69",
        "fct-type": "type",
        "title": "BStr69"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr69",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr7",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr7",
        "fct-type": "type",
        "title": "BStr7"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr7",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr70",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr70",
        "fct-type": "type",
        "title": "BStr70"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr70",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr71",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr71",
        "fct-type": "type",
        "title": "BStr71"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr71",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr72",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr72",
        "fct-type": "type",
        "title": "BStr72"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr72",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr73",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr73",
        "fct-type": "type",
        "title": "BStr73"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr73",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr74",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr74",
        "fct-type": "type",
        "title": "BStr74"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr74",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr75",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr75",
        "fct-type": "type",
        "title": "BStr75"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr75",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr76",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr76",
        "fct-type": "type",
        "title": "BStr76"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr76",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr77",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr77",
        "fct-type": "type",
        "title": "BStr77"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr77",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr78",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr78",
        "fct-type": "type",
        "title": "BStr78"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr78",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr79",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr79",
        "fct-type": "type",
        "title": "BStr79"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr79",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr8",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr8",
        "fct-type": "type",
        "title": "BStr8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr8",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr80",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr80",
        "fct-type": "type",
        "title": "BStr80"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr80",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr81",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr81",
        "fct-type": "type",
        "title": "BStr81"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr81",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr82",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr82",
        "fct-type": "type",
        "title": "BStr82"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr82",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr83",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr83",
        "fct-type": "type",
        "title": "BStr83"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr83",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr84",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr84",
        "fct-type": "type",
        "title": "BStr84"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr84",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr85",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr85",
        "fct-type": "type",
        "title": "BStr85"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr85",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr86",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr86",
        "fct-type": "type",
        "title": "BStr86"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr86",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr87",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr87",
        "fct-type": "type",
        "title": "BStr87"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr87",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr88",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr88",
        "fct-type": "type",
        "title": "BStr88"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr88",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr89",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr89",
        "fct-type": "type",
        "title": "BStr89"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr89",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr9",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr9",
        "fct-type": "type",
        "title": "BStr9"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr9",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr90",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr90",
        "fct-type": "type",
        "title": "BStr90"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr90",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr91",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr91",
        "fct-type": "type",
        "title": "BStr91"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr91",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr92",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr92",
        "fct-type": "type",
        "title": "BStr92"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr92",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr93",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr93",
        "fct-type": "type",
        "title": "BStr93"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr93",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr94",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr94",
        "fct-type": "type",
        "title": "BStr94"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr94",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr95",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr95",
        "fct-type": "type",
        "title": "BStr95"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr95",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr96",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr96",
        "fct-type": "type",
        "title": "BStr96"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr96",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr97",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr97",
        "fct-type": "type",
        "title": "BStr97"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr97",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr98",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr98",
        "fct-type": "type",
        "title": "BStr98"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr98",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BStr99",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BStr99",
        "fct-type": "type",
        "title": "BStr99"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BStr99",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-BoundedString.html#t:BoundedString",
      "description": {
        "fct-module": "Database.HaskellDB.BoundedString",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-BoundedString.html#BoundedString",
        "fct-type": "type",
        "title": "BoundedString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB BoundedString",
        "module": "Database.HaskellDB.BoundedString",
        "name": "BoundedString",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bounded String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBDirect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDBDirect generates a Haskell module from a database.\n It first reads the system catalog of the database into\n a \u003ccode\u003eCatalog\u003c/code\u003e data type. After that it pretty prints that\n data structure in an appropiate Haskell module which\n can be used to perform queries on the database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBDirect",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBDirect.html",
        "fct-type": "module",
        "title": "DBDirect"
      },
      "index": {
        "description": "DBDirect generates Haskell module from database It first reads the system catalog of the database into Catalog data type After that it pretty prints that data structure in an appropiate Haskell module which can be used to perform queries on the database",
        "hierarchy": "Database HaskellDB DBDirect",
        "module": "Database.HaskellDB.DBDirect",
        "name": "DBDirect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBDirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBDirect.html#v:dbdirect",
      "description": {
        "fct-module": "Database.HaskellDB.DBDirect",
        "fct-package": "haskelldb",
        "fct-signature": "DriverInterface -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-DBDirect.html#dbdirect",
        "fct-type": "function",
        "title": "dbdirect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBDirect",
        "module": "Database.HaskellDB.DBDirect",
        "name": "dbdirect",
        "normalized": "DriverInterface-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "DriverInterface-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports every function needed by DBDirect generated \n files\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBLayout.html",
        "fct-type": "module",
        "title": "DBLayout"
      },
      "index": {
        "description": "Exports every function needed by DBDirect generated files",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "DBLayout",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBLayout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "Typed attributes",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "Attr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:CalendarTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e is a user-readable and manipulable\n representation of the internal \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CalendarTime"
      },
      "index": {
        "description": "CalendarTime is user-readable and manipulable representation of the internal ClockTime type",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "CalendarTime",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Calendar Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "Type of normal expressions contains the untyped PrimExpr",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "Expr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:FieldTag",
      "description": {
        "fct-descr": "\u003cp\u003eClass for field labels.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#FieldTag",
        "fct-type": "class",
        "title": "FieldTag"
      },
      "index": {
        "description": "Class for field labels",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "FieldTag",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:LocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eA simple day and time aggregate, where the day is of the specified parameter,\n and the time is a TimeOfDay.\n Conversion of this (as local civil time) to UTC depends on the time zone.\n Conversion of this (as local mean time) to UT1 depends on the longitude.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "LocalTime"
      },
      "index": {
        "description": "simple day and time aggregate where the day is of the specified parameter and the time is TimeOfDay Conversion of this as local civil time to UTC depends on the time zone Conversion of this as local mean time to UT1 depends on the longitude",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "LocalTime",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:RecCons",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor that adds a field to a record.\n f is the field tag, a is the field value and b is the rest of the record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecCons",
        "fct-type": "data",
        "title": "RecCons"
      },
      "index": {
        "description": "Constructor that adds field to record is the field tag is the field value and is the rest of the record",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "RecCons",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:RecNil",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecNil",
        "fct-type": "data",
        "title": "RecNil"
      },
      "index": {
        "description": "The empty record",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "RecNil",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "Table",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the field from a one-field record to another record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "Record (RecCons f a RecNil)-\u003e (b -\u003e c)-\u003e b -\u003e RecCons f a c",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Adds the field from one-field record to another record",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "(#) #",
        "normalized": "Record(RecCons a b RecNil)-\u003e(c-\u003ed)-\u003ec-\u003eRecCons a b d",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record(RecCons f a RecNil)-\u003e(b-\u003ec)-\u003eb-\u003eRecCons f a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:baseTable",
      "description": {
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Record r -\u003e Table r",
        "fct-source": "src/Database-HaskellDB-Query.html#baseTable",
        "fct-type": "function",
        "title": "baseTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "baseTable",
        "normalized": "TableName-\u003eRecord a-\u003eTable a",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "TableName-\u003eRecord r-\u003eTable r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:emptyTable",
      "description": {
        "fct-descr": "\u003cp\u003eFor queries against fake tables, such as\n 'information_schema.information_schema_catalog_name'. Useful for\n constructing queries that contain constant data (and do not select\n from columns) but need a table to select from.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Table (Record RecNil)",
        "fct-source": "src/Database-HaskellDB-Query.html#emptyTable",
        "fct-type": "function",
        "title": "emptyTable"
      },
      "index": {
        "description": "For queries against fake tables such as information schema.information schema catalog name Useful for constructing queries that contain constant data and do not select from columns but need table to select from",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "emptyTable",
        "normalized": "TableName-\u003eTable(Record RecNil)",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "TableName-\u003eTable(Record RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:fieldName",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name of the label.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "f -\u003e String",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#fieldName",
        "fct-type": "method",
        "title": "fieldName"
      },
      "index": {
        "description": "Gets the name of the label",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "fieldName",
        "normalized": "a-\u003eString",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:hdbMakeEntry",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a table entry from a field tag\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "f-\u003e Record (RecCons f (Expr a) RecNil)",
        "fct-type": "function",
        "title": "hdbMakeEntry"
      },
      "index": {
        "description": "Constructs table entry from field tag",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "hdbMakeEntry",
        "normalized": "a-\u003eRecord(RecCons a(Expr b)RecNil)",
        "package": "haskelldb",
        "partial": "Make Entry",
        "signature": "f-\u003eRecord(RecCons f(Expr a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBLayout.html#v:mkAttr",
      "description": {
        "fct-descr": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e for a field.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBLayout",
        "fct-package": "haskelldb",
        "fct-signature": "f-\u003e Attr f a",
        "fct-type": "function",
        "title": "mkAttr"
      },
      "index": {
        "description": "Make an Attr for field",
        "hierarchy": "Database HaskellDB DBLayout",
        "module": "Database.HaskellDB.DBLayout",
        "name": "mkAttr",
        "normalized": "a-\u003eAttr a b",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": "f-\u003eAttr f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the \u003ca\u003ecore\u003c/a\u003e file of the DBSpec files. It defines\n a DBInfo and important functions on it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html",
        "fct-type": "module",
        "title": "DBInfo"
      },
      "index": {
        "description": "This is the core file of the DBSpec files It defines DBInfo and important functions on it",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "DBInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:CInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "data",
        "title": "CInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "CInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:DBInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a database layout, top level\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "data",
        "title": "DBInfo"
      },
      "index": {
        "description": "Defines database layout top level",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "DBInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:DBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "data",
        "title": "DBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "DBOptions",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#t:TInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "data",
        "title": "TInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "TInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:CInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "CInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "CInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "CInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "DBInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "DBInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:DBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "DBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "DBOptions",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:TInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "TInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "TInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "TInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of this column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "cname"
      },
      "index": {
        "description": "The name of this column",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "cname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:cols",
      "description": {
        "fct-descr": "\u003cp\u003eThe columns in this table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "[CInfo]",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "cols"
      },
      "index": {
        "description": "The columns in this table",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "cols",
        "normalized": "[CInfo]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[CInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:constructNonClashingDBInfo",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a DBInfo that doesn't cause nameclashes\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#constructNonClashingDBInfo",
        "fct-type": "function",
        "title": "constructNonClashingDBInfo"
      },
      "index": {
        "description": "Constructs DBInfo that doesn cause nameclashes",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "constructNonClashingDBInfo",
        "normalized": "DBInfo-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "Non Clashing DBInfo",
        "signature": "DBInfo-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbInfoToDoc",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a valid declaration of a DBInfo. The variable name will be the\n   same as the database name\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#dbInfoToDoc",
        "fct-type": "function",
        "title": "dbInfoToDoc"
      },
      "index": {
        "description": "Creates valid declaration of DBInfo The variable name will be the same as the database name",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "dbInfoToDoc",
        "normalized": "DBInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "Info To Doc",
        "signature": "DBInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:dbname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "dbname"
      },
      "index": {
        "description": "The name of the database",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "dbname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:descr",
      "description": {
        "fct-descr": "\u003cp\u003eThe description of this column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "FieldDesc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "descr"
      },
      "index": {
        "description": "The description of this column",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "descr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:finalizeSpec",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a final \u003ca\u003etouching up\u003c/a\u003e of a DBInfo before it is used by i.e DBDirect.\n This converts any Bounded Strings to ordinary strings if that flag is set.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#finalizeSpec",
        "fct-type": "function",
        "title": "finalizeSpec"
      },
      "index": {
        "description": "Does final touching up of DBInfo before it is used by i.e DBDirect This converts any Bounded Strings to ordinary strings if that flag is set",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "finalizeSpec",
        "normalized": "DBInfo-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "Spec",
        "signature": "DBInfo-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeCInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a CInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e FieldDesc-\u003e CInfo",
        "fct-type": "function",
        "title": "makeCInfo"
      },
      "index": {
        "description": "Creates CInfo",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "makeCInfo",
        "normalized": "String-\u003eFieldDesc-\u003eCInfo",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": "String-\u003eFieldDesc-\u003eCInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeDBSpec",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a DBInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e DBOptions-\u003e [TInfo]-\u003e DBInfo",
        "fct-type": "function",
        "title": "makeDBSpec"
      },
      "index": {
        "description": "Creates DBInfo",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "makeDBSpec",
        "normalized": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "DBSpec",
        "signature": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeIdent",
      "description": {
        "fct-descr": "\u003cp\u003eConversion routines from Database identifiers to Haskell identifiers\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "MakeIdentifiers",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "makeIdent"
      },
      "index": {
        "description": "Conversion routines from Database identifiers to Haskell identifiers",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "makeIdent",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:makeTInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a TInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e [CInfo]-\u003e TInfo",
        "fct-type": "function",
        "title": "makeTInfo"
      },
      "index": {
        "description": "Creates TInfo",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "makeTInfo",
        "normalized": "String-\u003e[CInfo]-\u003eTInfo",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": "String-\u003e[CInfo]-\u003eTInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:opts",
      "description": {
        "fct-descr": "\u003cp\u003eAny options (i.e whether to use\n   Bounded Strings)\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "opts"
      },
      "index": {
        "description": "Any options i.e whether to use Bounded Strings",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "opts",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppCInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "CInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppCInfo",
        "fct-type": "function",
        "title": "ppCInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "ppCInfo",
        "normalized": "CInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": "CInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a DBInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBInfo",
        "fct-type": "function",
        "title": "ppDBInfo"
      },
      "index": {
        "description": "Pretty prints DBInfo",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "ppDBInfo",
        "normalized": "DBInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": "DBInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppDBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBOptions",
        "fct-type": "function",
        "title": "ppDBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "ppDBOptions",
        "normalized": "DBOptions-\u003eDoc",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": "DBOptions-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:ppTInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "TInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppTInfo",
        "fct-type": "function",
        "title": "ppTInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "ppTInfo",
        "normalized": "TInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": "TInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tbls",
      "description": {
        "fct-descr": "\u003cp\u003eTables this database contains\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "[TInfo]",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "tbls"
      },
      "index": {
        "description": "Tables this database contains",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "tbls",
        "normalized": "[TInfo]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[TInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:tname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "tname"
      },
      "index": {
        "description": "The name of the table",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "tname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBInfo.html#v:useBString",
      "description": {
        "fct-descr": "\u003cp\u003eUse Bounded Strings?\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBInfo",
        "fct-package": "haskelldb",
        "fct-signature": "Bool",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "useBString"
      },
      "index": {
        "description": "Use Bounded Strings",
        "hierarchy": "Database HaskellDB DBSpec DBInfo",
        "module": "Database.HaskellDB.DBSpec.DBInfo",
        "name": "useBString",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverts a DBSpec-generated database to a set of\n (FilePath,Doc), that can be used to generate definition\n files usable in HaskellDB (the generation itself is done\n in DBDirect)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html",
        "fct-type": "module",
        "title": "DBSpecToDBDirect"
      },
      "index": {
        "description": "Converts DBSpec-generated database to set of FilePath Doc that can be used to generate definition files usable in HaskellDB the generation itself is done in DBDirect",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "name": "DBSpecToDBDirect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBSpec To DBDirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#v:dbInfoToModuleFiles",
      "description": {
        "fct-descr": "\u003cp\u003eCreate module files in the given directory for the given DBInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "fct-package": "haskelldb",
        "fct-signature": "FilePath-\u003e String-\u003e DBInfo-\u003e IO ()",
        "fct-type": "function",
        "title": "dbInfoToModuleFiles"
      },
      "index": {
        "description": "Create module files in the given directory for the given DBInfo",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "name": "dbInfoToModuleFiles",
        "normalized": "FilePath-\u003eString-\u003eDBInfo-\u003eIO()",
        "package": "haskelldb",
        "partial": "Info To Module Files",
        "signature": "FilePath-\u003eString-\u003eDBInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDBDirect.html#v:specToHDB",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a database specification to a set of module names\n   and module contents. The first element of the returned list\n   is the top-level module.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e DBInfo-\u003e [(String, Doc)]",
        "fct-type": "function",
        "title": "specToHDB"
      },
      "index": {
        "description": "Converts database specification to set of module names and module contents The first element of the returned list is the top-level module",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDBDirect",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDBDirect",
        "name": "specToHDB",
        "normalized": "String-\u003eDBInfo-\u003e[(String,Doc)]",
        "package": "haskelldb",
        "partial": "To HDB",
        "signature": "String-\u003eDBInfo-\u003e[(String,Doc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnects to a database and generates stuff in it according\n to what's inside the DBSpec.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBSpecToDatabase.html",
        "fct-type": "module",
        "title": "DBSpecToDatabase"
      },
      "index": {
        "description": "Connects to database and generates stuff in it according to what inside the DBSpec",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "name": "DBSpecToDatabase",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBSpec To Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#v:dbSpecToDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a DBInfo to a real life Database, note that the database must\n exist for this to work\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e DBInfo-\u003e IO ()",
        "fct-type": "function",
        "title": "dbSpecToDatabase"
      },
      "index": {
        "description": "Converts DBInfo to real life Database note that the database must exist for this to work",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "name": "dbSpecToDatabase",
        "normalized": "Database-\u003eDBInfo-\u003eIO()",
        "package": "haskelldb",
        "partial": "Spec To Database",
        "signature": "Database-\u003eDBInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#v:tInfoToTable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a database table specified by a \u003ccode\u003e\u003ca\u003eTInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e TInfo -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBSpecToDatabase.html#tInfoToTable",
        "fct-type": "function",
        "title": "tInfoToTable"
      },
      "index": {
        "description": "Create database table specified by TInfo",
        "hierarchy": "Database HaskellDB DBSpec DBSpecToDatabase",
        "module": "Database.HaskellDB.DBSpec.DBSpecToDatabase",
        "name": "tInfoToTable",
        "normalized": "Database-\u003eTInfo-\u003eIO()",
        "package": "haskelldb",
        "partial": "Info To Table",
        "signature": "Database-\u003eTInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConnects to a Database and generates a DBSpec specification\n from it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html",
        "fct-type": "module",
        "title": "DatabaseToDBSpec"
      },
      "index": {
        "description": "Connects to Database and generates DBSpec specification from it",
        "hierarchy": "Database HaskellDB DBSpec DatabaseToDBSpec",
        "module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
        "name": "DatabaseToDBSpec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Database To DBSpec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-DatabaseToDBSpec.html#v:dbToDBSpec",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a database and generates a specification from it\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "Bool-\u003e MakeIdentifiers-\u003e String-\u003e Database-\u003e IO DBInfo",
        "fct-type": "function",
        "title": "dbToDBSpec"
      },
      "index": {
        "description": "Connects to database and generates specification from it",
        "hierarchy": "Database HaskellDB DBSpec DatabaseToDBSpec",
        "module": "Database.HaskellDB.DBSpec.DatabaseToDBSpec",
        "name": "dbToDBSpec",
        "normalized": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo",
        "package": "haskelldb",
        "partial": "To DBSpec",
        "signature": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious functions used when pretty printing stuff\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html",
        "fct-type": "module",
        "title": "PPHelpers"
      },
      "index": {
        "description": "Various functions used when pretty printing stuff",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "PPHelpers",
        "normalized": "",
        "package": "haskelldb",
        "partial": "PPHelpers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#t:MakeIdentifiers",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
        "fct-type": "data",
        "title": "MakeIdentifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "MakeIdentifiers",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Make Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:MakeIdentifiers",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "MakeIdentifiers",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
        "fct-type": "function",
        "title": "MakeIdentifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "MakeIdentifiers",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Make Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkChars",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkChars",
        "fct-type": "function",
        "title": "checkChars"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkChars",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Chars",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkKeyword",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkKeyword",
        "fct-type": "function",
        "title": "checkKeyword"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkKeyword",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Keyword",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkLower",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkLower",
        "fct-type": "function",
        "title": "checkLower"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkLower",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Lower",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkLowerDef",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "Char -\u003e [Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkLowerDef",
        "fct-type": "function",
        "title": "checkLowerDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkLowerDef",
        "normalized": "Char-\u003e[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Lower Def",
        "signature": "Char-\u003e[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkUpper",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkUpper",
        "fct-type": "function",
        "title": "checkUpper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkUpper",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Upper",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:checkUpperDef",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "Char -\u003e [Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#checkUpperDef",
        "fct-type": "function",
        "title": "checkUpperDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "checkUpperDef",
        "normalized": "Char-\u003e[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Upper Def",
        "signature": "Char-\u003e[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:fileName",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#fileName",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "fileName",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:identifier",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "identifier",
        "normalized": "String-\u003eString",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:mkIdentCamelCase",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "MakeIdentifiers",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#mkIdentCamelCase",
        "fct-type": "function",
        "title": "mkIdentCamelCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "mkIdentCamelCase",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Ident Camel Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:mkIdentPreserving",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "MakeIdentifiers",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#mkIdentPreserving",
        "fct-type": "function",
        "title": "mkIdentPreserving"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "mkIdentPreserving",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Ident Preserving",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:moduleName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
        "fct-type": "function",
        "title": "moduleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "moduleName",
        "normalized": "String-\u003eString",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:newline",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#newline",
        "fct-type": "function",
        "title": "newline"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "newline",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:ppComment",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[[Char]] -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#ppComment",
        "fct-type": "function",
        "title": "ppComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "ppComment",
        "normalized": "[[Char]]-\u003eDoc",
        "package": "haskelldb",
        "partial": "Comment",
        "signature": "[[Char]]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e to any separating character set.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Generalization of words and lines to any separating character set",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "split",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "haskelldb",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toLowerCamelCase",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#toLowerCamelCase",
        "fct-type": "function",
        "title": "toLowerCamelCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "toLowerCamelCase",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Lower Camel Case",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#MakeIdentifiers",
        "fct-type": "function",
        "title": "toType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "toType",
        "normalized": "String-\u003eString",
        "package": "haskelldb",
        "partial": "Type",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec-PPHelpers.html#v:toUpperCamelCase",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec.PPHelpers",
        "fct-package": "haskelldb",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Database-HaskellDB-DBSpec-PPHelpers.html#toUpperCamelCase",
        "fct-type": "function",
        "title": "toUpperCamelCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec PPHelpers",
        "module": "Database.HaskellDB.DBSpec.PPHelpers",
        "name": "toUpperCamelCase",
        "normalized": "[Char]-\u003e[Char]",
        "package": "haskelldb",
        "partial": "Upper Camel Case",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDBSpec is the new and improved way of specifying databases.\n It is designed to be able to describe a database in such a \n way that it can easily be converted to a DBDirect-spec OR\n directly into a database\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DBSpec.html",
        "fct-type": "module",
        "title": "DBSpec"
      },
      "index": {
        "description": "DBSpec is the new and improved way of specifying databases It is designed to be able to describe database in such way that it can easily be converted to DBDirect-spec OR directly into database",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DBSpec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBSpec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:CInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "data",
        "title": "CInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "CInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:DBInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a database layout, top level\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "data",
        "title": "DBInfo"
      },
      "index": {
        "description": "Defines database layout top level",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DBInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:DBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "data",
        "title": "DBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DBOptions",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:FieldDesc",
      "description": {
        "fct-descr": "\u003cp\u003eThe type and \u003ccode\u003enullable\u003c/code\u003e flag of a database column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldDesc",
        "fct-type": "type",
        "title": "FieldDesc"
      },
      "index": {
        "description": "The type and nullable flag of database column",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "FieldDesc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:FieldType",
      "description": {
        "fct-descr": "\u003cp\u003eA database column type\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "data",
        "title": "FieldType"
      },
      "index": {
        "description": "database column type",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "FieldType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#t:TInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "data",
        "title": "TInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "TInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BStrT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "BStrT Int",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "BStrT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "BStrT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:BoolT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "BoolT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "BoolT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "BoolT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:CInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "CInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "CInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "CInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:CalendarTimeT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "CalendarTimeT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "CalendarTimeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "CalendarTimeT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Calendar Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DBInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "DBInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DBInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "DBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DBOptions",
        "normalized": "",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:DoubleT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DoubleT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "DoubleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "DoubleT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "IntT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "IntT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "IntT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:IntegerT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "IntegerT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "IntegerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "IntegerT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:LocalTimeT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "LocalTimeT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "LocalTimeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "LocalTimeT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:StringT",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "StringT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "StringT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "StringT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:TInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "TInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "TInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "TInfo",
        "normalized": "",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:cname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of this column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "cname"
      },
      "index": {
        "description": "The name of this column",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "cname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:cols",
      "description": {
        "fct-descr": "\u003cp\u003eThe columns in this table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "[CInfo]",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "cols"
      },
      "index": {
        "description": "The columns in this table",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "cols",
        "normalized": "[CInfo]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[CInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:constructNonClashingDBInfo",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a DBInfo that doesn't cause nameclashes\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#constructNonClashingDBInfo",
        "fct-type": "function",
        "title": "constructNonClashingDBInfo"
      },
      "index": {
        "description": "Constructs DBInfo that doesn cause nameclashes",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "constructNonClashingDBInfo",
        "normalized": "DBInfo-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "Non Clashing DBInfo",
        "signature": "DBInfo-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbInfoToDoc",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a valid declaration of a DBInfo. The variable name will be the\n   same as the database name\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#dbInfoToDoc",
        "fct-type": "function",
        "title": "dbInfoToDoc"
      },
      "index": {
        "description": "Creates valid declaration of DBInfo The variable name will be the same as the database name",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "dbInfoToDoc",
        "normalized": "DBInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "Info To Doc",
        "signature": "DBInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbSpecToDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a DBInfo to a real life Database, note that the database must\n exist for this to work\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e DBInfo-\u003e IO ()",
        "fct-type": "function",
        "title": "dbSpecToDatabase"
      },
      "index": {
        "description": "Converts DBInfo to real life Database note that the database must exist for this to work",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "dbSpecToDatabase",
        "normalized": "Database-\u003eDBInfo-\u003eIO()",
        "package": "haskelldb",
        "partial": "Spec To Database",
        "signature": "Database-\u003eDBInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbToDBSpec",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a database and generates a specification from it\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "Bool-\u003e MakeIdentifiers-\u003e String-\u003e Database-\u003e IO DBInfo",
        "fct-type": "function",
        "title": "dbToDBSpec"
      },
      "index": {
        "description": "Connects to database and generates specification from it",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "dbToDBSpec",
        "normalized": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo",
        "package": "haskelldb",
        "partial": "To DBSpec",
        "signature": "Bool-\u003eMakeIdentifiers-\u003eString-\u003eDatabase-\u003eIO DBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:dbname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "dbname"
      },
      "index": {
        "description": "The name of the database",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "dbname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:descr",
      "description": {
        "fct-descr": "\u003cp\u003eThe description of this column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "FieldDesc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#CInfo",
        "fct-type": "function",
        "title": "descr"
      },
      "index": {
        "description": "The description of this column",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "descr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:finalizeSpec",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a final \u003ca\u003etouching up\u003c/a\u003e of a DBInfo before it is used by i.e DBDirect.\n This converts any Bounded Strings to ordinary strings if that flag is set.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e DBInfo",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#finalizeSpec",
        "fct-type": "function",
        "title": "finalizeSpec"
      },
      "index": {
        "description": "Does final touching up of DBInfo before it is used by i.e DBDirect This converts any Bounded Strings to ordinary strings if that flag is set",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "finalizeSpec",
        "normalized": "DBInfo-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "Spec",
        "signature": "DBInfo-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeCInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a CInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e FieldDesc-\u003e CInfo",
        "fct-type": "function",
        "title": "makeCInfo"
      },
      "index": {
        "description": "Creates CInfo",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "makeCInfo",
        "normalized": "String-\u003eFieldDesc-\u003eCInfo",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": "String-\u003eFieldDesc-\u003eCInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeDBSpec",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a DBInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e DBOptions-\u003e [TInfo]-\u003e DBInfo",
        "fct-type": "function",
        "title": "makeDBSpec"
      },
      "index": {
        "description": "Creates DBInfo",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "makeDBSpec",
        "normalized": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo",
        "package": "haskelldb",
        "partial": "DBSpec",
        "signature": "String-\u003eDBOptions-\u003e[TInfo]-\u003eDBInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeIdent",
      "description": {
        "fct-descr": "\u003cp\u003eConversion routines from Database identifiers to Haskell identifiers\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "MakeIdentifiers",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "makeIdent"
      },
      "index": {
        "description": "Conversion routines from Database identifiers to Haskell identifiers",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "makeIdent",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:makeTInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a TInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e [CInfo]-\u003e TInfo",
        "fct-type": "function",
        "title": "makeTInfo"
      },
      "index": {
        "description": "Creates TInfo",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "makeTInfo",
        "normalized": "String-\u003e[CInfo]-\u003eTInfo",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": "String-\u003e[CInfo]-\u003eTInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:opts",
      "description": {
        "fct-descr": "\u003cp\u003eAny options (i.e whether to use\n   Bounded Strings)\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "opts"
      },
      "index": {
        "description": "Any options i.e whether to use Bounded Strings",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "opts",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppCInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "CInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppCInfo",
        "fct-type": "function",
        "title": "ppCInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "ppCInfo",
        "normalized": "CInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "CInfo",
        "signature": "CInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppDBInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a DBInfo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBInfo",
        "fct-type": "function",
        "title": "ppDBInfo"
      },
      "index": {
        "description": "Pretty prints DBInfo",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "ppDBInfo",
        "normalized": "DBInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "DBInfo",
        "signature": "DBInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppDBOptions",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "DBOptions -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppDBOptions",
        "fct-type": "function",
        "title": "ppDBOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "ppDBOptions",
        "normalized": "DBOptions-\u003eDoc",
        "package": "haskelldb",
        "partial": "DBOptions",
        "signature": "DBOptions-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:ppTInfo",
      "description": {
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "TInfo -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#ppTInfo",
        "fct-type": "function",
        "title": "ppTInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "ppTInfo",
        "normalized": "TInfo-\u003eDoc",
        "package": "haskelldb",
        "partial": "TInfo",
        "signature": "TInfo-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:tbls",
      "description": {
        "fct-descr": "\u003cp\u003eTables this database contains\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "[TInfo]",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBInfo",
        "fct-type": "function",
        "title": "tbls"
      },
      "index": {
        "description": "Tables this database contains",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "tbls",
        "normalized": "[TInfo]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[TInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:tname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#TInfo",
        "fct-type": "function",
        "title": "tname"
      },
      "index": {
        "description": "The name of the table",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "tname",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DBSpec.html#v:useBString",
      "description": {
        "fct-descr": "\u003cp\u003eUse Bounded Strings?\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DBSpec",
        "fct-package": "haskelldb",
        "fct-signature": "Bool",
        "fct-source": "src/Database-HaskellDB-DBSpec-DBInfo.html#DBOptions",
        "fct-type": "function",
        "title": "useBString"
      },
      "index": {
        "description": "Use Bounded Strings",
        "hierarchy": "Database HaskellDB DBSpec",
        "module": "Database.HaskellDB.DBSpec",
        "name": "useBString",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines standard database operations and the\n primitive hooks that a particular database binding\n must provide.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Database.html",
        "fct-type": "module",
        "title": "Database"
      },
      "index": {
        "description": "Defines standard database operations and the primitive hooks that particular database binding must provide",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "Database",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:Database",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "Database",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetInstances",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions for getting values of a given type. Database drivers\n   need to implement these functions and pass this record to \u003ccode\u003e\u003ca\u003egetRec\u003c/a\u003e\u003c/code\u003e\n   when getting query results.\n\u003c/p\u003e\u003cp\u003eAll these functions should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the value is NULL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "data",
        "title": "GetInstances"
      },
      "index": {
        "description": "Functions for getting values of given type Database drivers need to implement these functions and pass this record to getRec when getting query results All these functions should return Nothing if the value is NULL",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "GetInstances",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Get Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetRec",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Database.html#GetRec",
        "fct-type": "class",
        "title": "GetRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "GetRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Get Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#t:GetValue",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Database.html#GetValue",
        "fct-type": "class",
        "title": "GetValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "GetValue",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Get Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:-33-.",
      "description": {
        "fct-descr": "\u003cp\u003eThe (!.) operator selects over returned records from\n   the database (= rows)\n   Non-overloaded version of \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e. For backwards compatibility.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e f -\u003e a",
        "fct-source": "src/Database-HaskellDB-Database.html#%21.",
        "fct-type": "function",
        "title": "(!.)"
      },
      "index": {
        "description": "The operator selects over returned records from the database rows Non-overloaded version of For backwards compatibility",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "(!.) !.",
        "normalized": "a-\u003eb-\u003ec",
        "package": "haskelldb",
        "partial": "",
        "signature": "r-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:Database",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "Database"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "Database",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:GetInstances",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "GetInstances",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "GetInstances"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "GetInstances",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Get Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit any pending data to the database.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e IO ()",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit any pending data to the database",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "commit",
        "normalized": "Database-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:createDB",
      "description": {
        "fct-descr": "\u003cp\u003eIs not very useful. You need to be root to use it. \n   We suggest you solve this in another way\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "createDB"
      },
      "index": {
        "description": "Is not very useful You need to be root to use it We suggest you solve this in another way",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "createDB",
        "normalized": "Database-\u003eString-\u003eIO()",
        "package": "haskelldb",
        "partial": "DB",
        "signature": "Database-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:createTable",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e TableName-\u003e [(Attribute, FieldDesc)]-\u003e IO ()",
        "fct-type": "function",
        "title": "createTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "createTable",
        "normalized": "Database-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "Database-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCommit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbCommit",
        "normalized": "IO()",
        "package": "haskelldb",
        "partial": "Commit",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCreateDB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbCreateDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbCreateDB",
        "normalized": "String-\u003eIO()",
        "package": "haskelldb",
        "partial": "Create DB",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbCreateTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [(Attribute, FieldDesc)] -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbCreateTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbCreateTable",
        "normalized": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()",
        "package": "haskelldb",
        "partial": "Create Table",
        "signature": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDelete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [PrimExpr] -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbDelete",
        "normalized": "TableName-\u003e[PrimExpr]-\u003eIO()",
        "package": "haskelldb",
        "partial": "Delete",
        "signature": "TableName-\u003e[PrimExpr]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDescribe",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e IO [(Attribute, FieldDesc)]",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbDescribe"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbDescribe",
        "normalized": "TableName-\u003eIO[(Attribute,FieldDesc)]",
        "package": "haskelldb",
        "partial": "Describe",
        "signature": "TableName-\u003eIO[(Attribute,FieldDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDropDB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbDropDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbDropDB",
        "normalized": "String-\u003eIO()",
        "package": "haskelldb",
        "partial": "Drop DB",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbDropTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbDropTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbDropTable",
        "normalized": "TableName-\u003eIO()",
        "package": "haskelldb",
        "partial": "Drop Table",
        "signature": "TableName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbInsert",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Assoc -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbInsert",
        "normalized": "TableName-\u003eAssoc-\u003eIO()",
        "package": "haskelldb",
        "partial": "Insert",
        "signature": "TableName-\u003eAssoc-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbInsertQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e PrimQuery -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbInsertQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbInsertQuery",
        "normalized": "TableName-\u003ePrimQuery-\u003eIO()",
        "package": "haskelldb",
        "partial": "Insert Query",
        "signature": "TableName-\u003ePrimQuery-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e Rel er -\u003e IO [Record vr]",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbQuery",
        "normalized": "PrimQuery-\u003eRel a-\u003eIO[Record b]",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "PrimQuery-\u003eRel er-\u003eIO[Record vr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbTables",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "IO [TableName]",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbTables"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbTables",
        "normalized": "IO[TableName]",
        "package": "haskelldb",
        "partial": "Tables",
        "signature": "IO[TableName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbTransaction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "forall a.  IO a -\u003e IO a",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbTransaction",
        "normalized": "a b IO c-\u003eIO c",
        "package": "haskelldb",
        "partial": "Transaction",
        "signature": "forall a. IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dbUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [PrimExpr] -\u003e Assoc -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "function",
        "title": "dbUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dbUpdate",
        "normalized": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eIO()",
        "package": "haskelldb",
        "partial": "Update",
        "signature": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003edeletes a bunch of records\t  \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e IO ()",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "deletes bunch of records",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "delete",
        "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:describe",
      "description": {
        "fct-descr": "\u003cp\u003eList all columns in a table, along with their types\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e TableName-\u003e IO [(Attribute, FieldDesc)]",
        "fct-type": "function",
        "title": "describe"
      },
      "index": {
        "description": "List all columns in table along with their types",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "describe",
        "normalized": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dropDB",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "dropDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dropDB",
        "normalized": "Database-\u003eString-\u003eIO()",
        "package": "haskelldb",
        "partial": "DB",
        "signature": "Database-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:dropTable",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e TableName-\u003e IO ()",
        "fct-type": "function",
        "title": "dropTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "dropTable",
        "normalized": "Database-\u003eTableName-\u003eIO()",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "Database-\u003eTableName-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getBool",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe Bool)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getBool"
      },
      "index": {
        "description": "Get Bool value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getBool",
        "normalized": "a-\u003eString-\u003eIO(Maybe Bool)",
        "package": "haskelldb",
        "partial": "Bool",
        "signature": "s-\u003eString-\u003eIO(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getCalendarTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe CalendarTime)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getCalendarTime"
      },
      "index": {
        "description": "Get CalendarTime value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getCalendarTime",
        "normalized": "a-\u003eString-\u003eIO(Maybe CalendarTime)",
        "package": "haskelldb",
        "partial": "Calendar Time",
        "signature": "s-\u003eString-\u003eIO(Maybe CalendarTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getDouble",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe Double)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getDouble"
      },
      "index": {
        "description": "Get Double value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getDouble",
        "normalized": "a-\u003eString-\u003eIO(Maybe Double)",
        "package": "haskelldb",
        "partial": "Double",
        "signature": "s-\u003eString-\u003eIO(Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getInt",
      "description": {
        "fct-descr": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe Int)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getInt"
      },
      "index": {
        "description": "Get an Int value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getInt",
        "normalized": "a-\u003eString-\u003eIO(Maybe Int)",
        "package": "haskelldb",
        "partial": "Int",
        "signature": "s-\u003eString-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getInteger",
      "description": {
        "fct-descr": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe Integer)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getInteger"
      },
      "index": {
        "description": "Get an Integer value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getInteger",
        "normalized": "a-\u003eString-\u003eIO(Maybe Integer)",
        "package": "haskelldb",
        "partial": "Integer",
        "signature": "s-\u003eString-\u003eIO(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe LocalTime)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getLocalTime"
      },
      "index": {
        "description": "Get LocalTime value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getLocalTime",
        "normalized": "a-\u003eString-\u003eIO(Maybe LocalTime)",
        "package": "haskelldb",
        "partial": "Local Time",
        "signature": "s-\u003eString-\u003eIO(Maybe LocalTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getRec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a result record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "getRec",
        "fct-source": "src/Database-HaskellDB-Database.html#getRec",
        "fct-type": "method",
        "title": "getRec"
      },
      "index": {
        "description": "Create result record",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getString",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e String -\u003e IO (Maybe String)",
        "fct-source": "src/Database-HaskellDB-Database.html#GetInstances",
        "fct-type": "function",
        "title": "getString"
      },
      "index": {
        "description": "Get String value",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getString",
        "normalized": "a-\u003eString-\u003eIO(Maybe String)",
        "package": "haskelldb",
        "partial": "String",
        "signature": "s-\u003eString-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:getValue",
      "description": {
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "GetInstances s -\u003e s -\u003e String -\u003e IO a",
        "fct-source": "src/Database-HaskellDB-Database.html#getValue",
        "fct-type": "method",
        "title": "getValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "getValue",
        "normalized": "GetInstances a-\u003ea-\u003eString-\u003eIO b",
        "package": "haskelldb",
        "partial": "Value",
        "signature": "GetInstances s-\u003es-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a record into a table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Table er -\u003e Record r -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts record into table",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "insert",
        "normalized": "Database-\u003eTable a-\u003eRecord b-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable er-\u003eRecord r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:insertQuery",
      "description": {
        "fct-descr": "\u003cp\u003eInserts values from a query into a table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Table r -\u003e Query (Rel r) -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#insertQuery",
        "fct-type": "function",
        "title": "insertQuery"
      },
      "index": {
        "description": "Inserts values from query into table",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "insertQuery",
        "normalized": "Database-\u003eTable a-\u003eQuery(Rel a)-\u003eIO()",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Database-\u003eTable r-\u003eQuery(Rel r)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eperforms a query on a database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Query (Rel er) -\u003e IO [Record vr]",
        "fct-source": "src/Database-HaskellDB-Database.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "performs query on database",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "query",
        "normalized": "Database-\u003eQuery(Rel a)-\u003eIO[Record b]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eQuery(Rel er)-\u003eIO[Record vr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:tables",
      "description": {
        "fct-descr": "\u003cp\u003eList all tables in the database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e IO [TableName]",
        "fct-type": "function",
        "title": "tables"
      },
      "index": {
        "description": "List all tables in the database",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "tables",
        "normalized": "Database-\u003eIO[TableName]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eIO[TableName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:transaction",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms some database action in a transaction. If no exception is thrown,\n   the changes are committed. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "transaction"
      },
      "index": {
        "description": "Performs some database action in transaction If no exception is thrown the changes are committed",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "transaction",
        "normalized": "Database-\u003eIO a-\u003eIO a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Database.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates records\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Database",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e (Rel r -\u003e Record s)-\u003e IO ()",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Updates records",
        "hierarchy": "Database HaskellDB Database",
        "module": "Database.HaskellDB.Database",
        "name": "update",
        "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003e(Rel a-\u003eRecord b)-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003e(Rel r-\u003eRecord s)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis exports an API that all drivers must conform to. It\n is used by the end user to load drivers either dynamically\n or statically.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html",
        "fct-type": "module",
        "title": "DriverAPI"
      },
      "index": {
        "description": "This exports an API that all drivers must conform to It is used by the end user to load drivers either dynamically or statically",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "DriverAPI",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Driver API",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#t:DriverInterface",
      "description": {
        "fct-descr": "\u003cp\u003eInterface which drivers should implement.\n   The \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function takes some driver specific name, value pairs\n   use to setup the database connection, and a database action to run.\n   \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e lists all required options with a short description,\n   that is printed as help in the DBDirect program.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
        "fct-type": "data",
        "title": "DriverInterface"
      },
      "index": {
        "description": "Interface which drivers should implement The connect function takes some driver specific name value pairs use to setup the database connection and database action to run requiredOptions lists all required options with short description that is printed as help in the DBDirect program",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "DriverInterface",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Driver Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "MonadIO",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:DriverInterface",
      "description": {
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "DriverInterface",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
        "fct-type": "function",
        "title": "DriverInterface"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "DriverInterface",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Driver Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:connect",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "[(String, String)] -\u003e (Database -\u003e m a) -\u003e m a",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "connect",
        "normalized": "[(String,String)]-\u003e(Database-\u003ea b)-\u003ea b",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(String,String)]-\u003e(Database-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:defaultdriver",
      "description": {
        "fct-descr": "\u003cp\u003eDefault dummy driver, real drivers should overload this\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "DriverInterface",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html#defaultdriver",
        "fct-type": "function",
        "title": "defaultdriver"
      },
      "index": {
        "description": "Default dummy driver real drivers should overload this",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "defaultdriver",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getAnnotatedOptions",
      "description": {
        "fct-descr": "\u003cp\u003eCan be used by drivers to get option values from the given\n   list of name, value pairs.\n   It is intended for use with the \u003ccode\u003e\u003ca\u003erequiredOptions\u003c/a\u003e\u003c/code\u003e value of the driver.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "[(String, String)]-\u003e [(String, String)]-\u003e m [String]",
        "fct-type": "function",
        "title": "getAnnotatedOptions"
      },
      "index": {
        "description": "Can be used by drivers to get option values from the given list of name value pairs It is intended for use with the requiredOptions value of the driver",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "getAnnotatedOptions",
        "normalized": "[(String,String)]-\u003e[(String,String)]-\u003ea[String]",
        "package": "haskelldb",
        "partial": "Annotated Options",
        "signature": "[(String,String)]-\u003e[(String,String)]-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eGets an \u003ccode\u003e\u003ca\u003eSqlGenerator\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003egenerator\u003c/a\u003e option in the given list.\n   Currently available generators: \u003ca\u003emysql\u003c/a\u003e, \u003ca\u003epostgresql\u003c/a\u003e, \u003ca\u003esqlite\u003c/a\u003e, \u003ca\u003edefault\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "[(String, String)]-\u003e m SqlGenerator",
        "fct-type": "function",
        "title": "getGenerator"
      },
      "index": {
        "description": "Gets an SqlGenerator from the generator option in the given list Currently available generators mysql postgresql sqlite default",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "getGenerator",
        "normalized": "[(String,String)]-\u003ea SqlGenerator",
        "package": "haskelldb",
        "partial": "Generator",
        "signature": "[(String,String)]-\u003em SqlGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:getOptions",
      "description": {
        "fct-descr": "\u003cp\u003eCan be used by drivers to get option values from the given\n   list of name, value pairs.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "[String]-\u003e [(String, String)]-\u003e m [String]",
        "fct-type": "function",
        "title": "getOptions"
      },
      "index": {
        "description": "Can be used by drivers to get option values from the given list of name value pairs",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "getOptions",
        "normalized": "[String]-\u003e[(String,String)]-\u003ea[String]",
        "package": "haskelldb",
        "partial": "Options",
        "signature": "[String]-\u003e[(String,String)]-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-DriverAPI.html#v:requiredOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.DriverAPI",
        "fct-package": "haskelldb",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Database-HaskellDB-DriverAPI.html#DriverInterface",
        "fct-type": "function",
        "title": "requiredOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB DriverAPI",
        "module": "Database.HaskellDB.DriverAPI",
        "name": "requiredOptions",
        "normalized": "[(String,String)]",
        "package": "haskelldb",
        "partial": "Options",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the types of database columns, and functions\n for converting these between HSQL and internal formats\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-FieldType.html",
        "fct-type": "module",
        "title": "FieldType"
      },
      "index": {
        "description": "Defines the types of database columns and functions for converting these between HSQL and internal formats",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "FieldType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:ExprType",
      "description": {
        "fct-descr": "\u003cp\u003eClass which retrieves a field description from a given type.\n Instances are provided for most concrete types. Instances\n for Maybe automatically make the field nullable, and instances\n for all (Expr a) types where a has an ExprType instance allows\n type information to be recovered from a given column expression.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-FieldType.html#ExprType",
        "fct-type": "class",
        "title": "ExprType"
      },
      "index": {
        "description": "Class which retrieves field description from given type Instances are provided for most concrete types Instances for Maybe automatically make the field nullable and instances for all Expr types where has an ExprType instance allows type information to be recovered from given column expression",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "ExprType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:ExprTypes",
      "description": {
        "fct-descr": "\u003cp\u003eClass which returns a list of field descriptions. Gets the\n descriptions of all columns in a Record/query. Most useful when\n the columns associated with each field in a (Rel r) type must be\n recovered. Note that this occurs at the type level only and no\n values are inspected.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-FieldType.html#ExprTypes",
        "fct-type": "class",
        "title": "ExprTypes"
      },
      "index": {
        "description": "Class which returns list of field descriptions Gets the descriptions of all columns in Record query Most useful when the columns associated with each field in Rel type must be recovered Note that this occurs at the type level only and no values are inspected",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "ExprTypes",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:FieldDesc",
      "description": {
        "fct-descr": "\u003cp\u003eThe type and \u003ccode\u003enullable\u003c/code\u003e flag of a database column\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldDesc",
        "fct-type": "type",
        "title": "FieldDesc"
      },
      "index": {
        "description": "The type and nullable flag of database column",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "FieldDesc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#t:FieldType",
      "description": {
        "fct-descr": "\u003cp\u003eA database column type\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "data",
        "title": "FieldType"
      },
      "index": {
        "description": "database column type",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "FieldType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:BStrT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "BStrT Int",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "BStrT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "BStrT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "BStr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:BoolT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "BoolT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "BoolT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "BoolT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:CalendarTimeT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "CalendarTimeT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "CalendarTimeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "CalendarTimeT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Calendar Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:DoubleT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "DoubleT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "DoubleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "DoubleT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:IntT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "IntT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "IntT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "IntT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:IntegerT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "IntegerT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "IntegerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "IntegerT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:LocalTimeT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "LocalTimeT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "LocalTimeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "LocalTimeT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:StringT",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "StringT",
        "fct-source": "src/Database-HaskellDB-FieldType.html#FieldType",
        "fct-type": "function",
        "title": "StringT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "StringT",
        "normalized": "",
        "package": "haskelldb",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:fromHaskellType",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "e -\u003e FieldDesc",
        "fct-source": "src/Database-HaskellDB-FieldType.html#fromHaskellType",
        "fct-type": "method",
        "title": "fromHaskellType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "fromHaskellType",
        "normalized": "a-\u003eFieldDesc",
        "package": "haskelldb",
        "partial": "Haskell Type",
        "signature": "e-\u003eFieldDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:fromHaskellTypes",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e [FieldDesc]",
        "fct-source": "src/Database-HaskellDB-FieldType.html#fromHaskellTypes",
        "fct-type": "method",
        "title": "fromHaskellTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "fromHaskellTypes",
        "normalized": "a-\u003e[FieldDesc]",
        "package": "haskelldb",
        "partial": "Haskell Types",
        "signature": "r-\u003e[FieldDesc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:queryFields",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a query, returns a list of the field names and their\n types used by the query. Useful for recovering field information\n once a query has been built up. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e [(String, FieldDesc)]",
        "fct-source": "src/Database-HaskellDB-FieldType.html#queryFields",
        "fct-type": "function",
        "title": "queryFields"
      },
      "index": {
        "description": "Given query returns list of the field names and their types used by the query Useful for recovering field information once query has been built up",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "queryFields",
        "normalized": "Query(Rel a)-\u003e[(String,FieldDesc)]",
        "package": "haskelldb",
        "partial": "Fields",
        "signature": "Query(Rel r)-\u003e[(String,FieldDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-FieldType.html#v:toHaskellType",
      "description": {
        "fct-module": "Database.HaskellDB.FieldType",
        "fct-package": "haskelldb",
        "fct-signature": "FieldType -\u003e String",
        "fct-source": "src/Database-HaskellDB-FieldType.html#toHaskellType",
        "fct-type": "function",
        "title": "toHaskellType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB FieldType",
        "module": "Database.HaskellDB.FieldType",
        "name": "toHaskellType",
        "normalized": "FieldType-\u003eString",
        "package": "haskelldb",
        "partial": "Haskell Type",
        "signature": "FieldType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a replacement for some of TREX.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-HDBRec.html",
        "fct-type": "module",
        "title": "HDBRec"
      },
      "index": {
        "description": "This is replacement for some of TREX",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "HDBRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "HDBRec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:FieldTag",
      "description": {
        "fct-descr": "\u003cp\u003eClass for field labels.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#FieldTag",
        "fct-type": "class",
        "title": "FieldTag"
      },
      "index": {
        "description": "Class for field labels",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "FieldTag",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Field Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:HasField",
      "description": {
        "fct-descr": "\u003cp\u003eThe record \u003ccode\u003er\u003c/code\u003e has the field \u003ccode\u003ef\u003c/code\u003e if there is an instance of\n   \u003ccode\u003eHasField f r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#HasField",
        "fct-type": "class",
        "title": "HasField"
      },
      "index": {
        "description": "The record has the field if there is an instance of HasField",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "HasField",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Has Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ReadRecRow",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#ReadRecRow",
        "fct-type": "class",
        "title": "ReadRecRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "ReadRecRow",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Read Rec Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecCat",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecCat",
        "fct-type": "class",
        "title": "RecCat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "RecCat",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Cat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecCons",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor that adds a field to a record.\n f is the field tag, a is the field value and b is the rest of the record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecCons",
        "fct-type": "data",
        "title": "RecCons"
      },
      "index": {
        "description": "Constructor that adds field to record is the field tag is the field value and is the rest of the record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "RecCons",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:RecNil",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecNil",
        "fct-type": "data",
        "title": "RecNil"
      },
      "index": {
        "description": "The empty record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "RecNil",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eThe type used for records. This is a function\n   that takes a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e so that the user does not have to \n   put a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e at the end of every record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "The type used for records This is function that takes RecNil so that the user does not have to put RecNil at the end of every record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "Record",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:Select",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#Select",
        "fct-type": "class",
        "title": "Select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "Select",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:SetField",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#SetField",
        "fct-type": "class",
        "title": "SetField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "SetField",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Set Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ShowLabels",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#ShowLabels",
        "fct-type": "class",
        "title": "ShowLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "ShowLabels",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Show Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#t:ShowRecRow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a record to a list of label names and field values.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#ShowRecRow",
        "fct-type": "class",
        "title": "ShowRecRow"
      },
      "index": {
        "description": "Convert record to list of label names and field values",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "ShowRecRow",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Show Rec Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eField selection operator. It is overloaded so that\n   users (read HaskellDB) can redefine it for things\n   with phantom record types.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e f -\u003e a",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "Field selection operator It is overloaded so that users read HaskellDB can redefine it for things with phantom record types",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "(!) !",
        "normalized": "a-\u003eb-\u003ec",
        "package": "haskelldb",
        "partial": "",
        "signature": "r-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the field from a one-field record to another record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "Record (RecCons f a RecNil)-\u003e (b -\u003e c)-\u003e b -\u003e RecCons f a c",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Adds the field from one-field record to another record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "(#) #",
        "normalized": "Record(RecCons a b RecNil)-\u003e(c-\u003ed)-\u003ec-\u003eRecCons a b d",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record(RecCons f a RecNil)-\u003e(b-\u003ec)-\u003eb-\u003eRecCons f a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:.-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreates one-field record from a label and a value\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "l f a-\u003e a-\u003e Record (RecCons f a RecNil)",
        "fct-type": "function",
        "title": "(.=.)"
      },
      "index": {
        "description": "Creates one-field record from label and value",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "(.=.) .=.",
        "normalized": "a b c-\u003ec-\u003eRecord(RecCons b c RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "l f a-\u003ea-\u003eRecord(RecCons f a RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:RecCons",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "RecCons a b",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecCons",
        "fct-type": "function",
        "title": "RecCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "RecCons",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:RecNil",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "RecNil",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#RecNil",
        "fct-type": "function",
        "title": "RecNil"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "RecNil",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rec Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:emptyRecord",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty record\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "Record RecNil",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#emptyRecord",
        "fct-type": "function",
        "title": "emptyRecord"
      },
      "index": {
        "description": "The empty record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "emptyRecord",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:fieldName",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name of the label.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "f -\u003e String",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#fieldName",
        "fct-type": "method",
        "title": "fieldName"
      },
      "index": {
        "description": "Gets the name of the label",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "fieldName",
        "normalized": "a-\u003eString",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:readRecRow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of labels and strins representating values\n   to a record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "[(String, String)] -\u003e [(r, [(String, String)])]",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#readRecRow",
        "fct-type": "method",
        "title": "readRecRow"
      },
      "index": {
        "description": "Convert list of labels and strins representating values to record",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "readRecRow",
        "normalized": "[(String,String)]-\u003e[(a,[(String,String)])]",
        "package": "haskelldb",
        "partial": "Rec Row",
        "signature": "[(String,String)]-\u003e[(r,[(String,String)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:recCat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two records.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "r1 -\u003e r2 -\u003e r3",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#recCat",
        "fct-type": "method",
        "title": "recCat"
      },
      "index": {
        "description": "Concatenates two records",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "recCat",
        "normalized": "a-\u003ea-\u003ea",
        "package": "haskelldb",
        "partial": "Cat",
        "signature": "r-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:recordLabels",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e [String]",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#recordLabels",
        "fct-type": "method",
        "title": "recordLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "recordLabels",
        "normalized": "a-\u003e[String]",
        "package": "haskelldb",
        "partial": "Labels",
        "signature": "r-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:setField",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "l f a -\u003e a -\u003e r -\u003e r",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#setField",
        "fct-type": "function",
        "title": "setField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "setField",
        "normalized": "a b c-\u003ec-\u003ed-\u003ed",
        "package": "haskelldb",
        "partial": "Field",
        "signature": "l f a-\u003ea-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-HDBRec.html#v:showRecRow",
      "description": {
        "fct-module": "Database.HaskellDB.HDBRec",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e [(String, ShowS)]",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#showRecRow",
        "fct-type": "method",
        "title": "showRecRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB HDBRec",
        "module": "Database.HaskellDB.HDBRec",
        "name": "showRecRow",
        "normalized": "a-\u003e[(String,ShowS)]",
        "package": "haskelldb",
        "partial": "Rec Row",
        "signature": "r-\u003e[(String,ShowS)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines standard optimizations performed on PrimQuery's\n (relational expressions).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Optimize",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Optimize.html",
        "fct-type": "module",
        "title": "Optimize"
      },
      "index": {
        "description": "Defines standard optimizations performed on PrimQuery relational expressions",
        "hierarchy": "Database HaskellDB Optimize",
        "module": "Database.HaskellDB.Optimize",
        "name": "Optimize",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Optimize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#v:optimize",
      "description": {
        "fct-descr": "\u003cp\u003eOptimize a PrimQuery\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Optimize",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e PrimQuery",
        "fct-source": "src/Database-HaskellDB-Optimize.html#optimize",
        "fct-type": "function",
        "title": "optimize"
      },
      "index": {
        "description": "Optimize PrimQuery",
        "hierarchy": "Database HaskellDB Optimize",
        "module": "Database.HaskellDB.Optimize",
        "name": "optimize",
        "normalized": "PrimQuery-\u003ePrimQuery",
        "package": "haskelldb",
        "partial": "",
        "signature": "PrimQuery-\u003ePrimQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Optimize.html#v:optimizeCriteria",
      "description": {
        "fct-descr": "\u003cp\u003eOptimize a set of criteria.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Optimize",
        "fct-package": "haskelldb",
        "fct-signature": "[PrimExpr] -\u003e [PrimExpr]",
        "fct-source": "src/Database-HaskellDB-Optimize.html#optimizeCriteria",
        "fct-type": "function",
        "title": "optimizeCriteria"
      },
      "index": {
        "description": "Optimize set of criteria",
        "hierarchy": "Database HaskellDB Optimize",
        "module": "Database.HaskellDB.Optimize",
        "name": "optimizeCriteria",
        "normalized": "[PrimExpr]-\u003e[PrimExpr]",
        "package": "haskelldb",
        "partial": "Criteria",
        "signature": "[PrimExpr]-\u003e[PrimExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimQuery defines the datatype of relational expressions\n (\u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e) and some useful functions on PrimQuery's\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html",
        "fct-type": "module",
        "title": "PrimQuery"
      },
      "index": {
        "description": "PrimQuery defines the datatype of relational expressions PrimQuery and some useful functions on PrimQuery",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "PrimQuery",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Prim Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:AggrOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "data",
        "title": "AggrOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Assoc",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Assoc",
        "fct-type": "type",
        "title": "Assoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Assoc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Attribute",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Attribute",
        "fct-type": "type",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Attribute",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:BinOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "data",
        "title": "BinOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "BinOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bin Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Literal",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "data",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Literal",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Name",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Name",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:OrderExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
        "fct-type": "data",
        "title": "OrderExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OrderExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Order Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:OrderOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
        "fct-type": "data",
        "title": "OrderOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OrderOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Order Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:PrimExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "data",
        "title": "PrimExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "PrimExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Prim Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:PrimQuery",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "data",
        "title": "PrimQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "PrimQuery",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Prim Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:RelOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "data",
        "title": "RelOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "RelOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rel Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:Scheme",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Scheme",
        "fct-type": "type",
        "title": "Scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Scheme",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:SpecialOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
        "fct-type": "data",
        "title": "SpecialOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "SpecialOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Special Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:TableName",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#TableName",
        "fct-type": "type",
        "title": "TableName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "TableName",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Table Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#t:UnOp",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "data",
        "title": "UnOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "UnOp",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Un Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrAvg",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrAvg",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrAvg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrAvg",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Avg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrCount",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrCount",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrCount",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrExpr AggrOp PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "AggrExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrMax",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrMax",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrMax",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrMin",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrMin",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrMin",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrOther",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrOther String",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrOther",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrStdDev",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrStdDev",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrStdDev"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrStdDev",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Std Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrStdDevP",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrStdDevP",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrStdDevP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrStdDevP",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Std Dev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrSum",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrSum",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrSum",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrVar",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrVar",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrVar",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AggrVarP",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AggrVarP",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#AggrOp",
        "fct-type": "function",
        "title": "AggrVarP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AggrVarP",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Aggr Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:AttrExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "AttrExpr Attribute",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "AttrExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "AttrExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attr Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BaseTable",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "BaseTable TableName Scheme",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "BaseTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "BaseTable",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Base Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BinExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "BinExpr BinOp PrimExpr PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "BinExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "BinExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bin Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Binary",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Binary RelOp PrimQuery PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Binary",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:BoolLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "BoolLit Bool",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "BoolLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "BoolLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bool Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:CaseExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "CaseExpr [(PrimExpr, PrimExpr)] PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "CaseExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "CaseExpr",
        "normalized": "CaseExpr[(PrimExpr,PrimExpr)]PrimExpr",
        "package": "haskelldb",
        "partial": "Case Expr",
        "signature": "CaseExpr[(PrimExpr,PrimExpr)]PrimExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:CastExpr",
      "description": {
        "fct-descr": "\u003cp\u003eCast an expression to a given type.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "CastExpr Name PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "CastExpr"
      },
      "index": {
        "description": "Cast an expression to given type",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "CastExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Cast Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ConstExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "ConstExpr Literal",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "ConstExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "ConstExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Const Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DateLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "DateLit CalendarTime",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "DateLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "DateLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Date Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DefaultLit",
      "description": {
        "fct-descr": "\u003cp\u003erepresents a default value\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "DefaultLit",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "DefaultLit"
      },
      "index": {
        "description": "represents default value",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "DefaultLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Default Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Difference",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Difference",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "function",
        "title": "Difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Difference",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Difference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Divide",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Divide",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "function",
        "title": "Divide"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Divide",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Divide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:DoubleLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "DoubleLit Double",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "DoubleLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "DoubleLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Double Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Empty",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Empty",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Empty",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:FunExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "FunExpr Name [PrimExpr]",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "FunExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "FunExpr",
        "normalized": "FunExpr Name[PrimExpr]",
        "package": "haskelldb",
        "partial": "Fun Expr",
        "signature": "FunExpr Name[PrimExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Group",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Group Assoc PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Group"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Group",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:IntegerLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "IntegerLit Integer",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "IntegerLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "IntegerLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Integer Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Intersect",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Intersect",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "function",
        "title": "Intersect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Intersect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Intersect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ListExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "ListExpr [PrimExpr]",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "ListExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "ListExpr",
        "normalized": "ListExpr[PrimExpr]",
        "package": "haskelldb",
        "partial": "List Expr",
        "signature": "ListExpr[PrimExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:NullLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "NullLit",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "NullLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "NullLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Null Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAnd",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpAnd",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpAnd",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAsc",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpAsc",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
        "fct-type": "function",
        "title": "OpAsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpAsc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpAsg",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpAsg",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpAsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpAsg",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Asg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitAnd",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpBitAnd",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpBitAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpBitAnd",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Bit And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitNot",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpBitNot",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpBitNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpBitNot",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Bit Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitOr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpBitOr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpBitOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpBitOr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Bit Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpBitXor",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpBitXor",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpBitXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpBitXor",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Bit Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpCat",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpCat",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpCat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpCat",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Cat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpDesc",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpDesc",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderOp",
        "fct-type": "function",
        "title": "OpDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpDesc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpDiv",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpDiv",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpDiv",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpEq",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpEq",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpEq",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpGt",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpGt",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpGt",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Gt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpGtEq",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpGtEq",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpGtEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpGtEq",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Gt Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIn",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpIn",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpIn",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIsNotNull",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpIsNotNull",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "function",
        "title": "OpIsNotNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpIsNotNull",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Is Not Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpIsNull",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpIsNull",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "function",
        "title": "OpIsNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpIsNull",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Is Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLength",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpLength",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "function",
        "title": "OpLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpLength",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLike",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpLike",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpLike",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLt",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpLt",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpLt",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Lt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpLtEq",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpLtEq",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpLtEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpLtEq",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Lt Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMinus",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpMinus",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpMinus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpMinus",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMod",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpMod",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpMod",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpMul",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpMul",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpMul",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpNot",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpNot",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "function",
        "title": "OpNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpNot",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpNotEq",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpNotEq",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpNotEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpNotEq",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Not Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpOr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpOr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpOr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpOther",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpOther String",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpOther",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OpPlus",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OpPlus",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#BinOp",
        "fct-type": "function",
        "title": "OpPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OpPlus",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Op Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Order",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Order [OrderExpr]",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
        "fct-type": "function",
        "title": "Order"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Order",
        "normalized": "Order[OrderExpr]",
        "package": "haskelldb",
        "partial": "Order",
        "signature": "Order[OrderExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OrderExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OrderExpr OrderOp PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
        "fct-type": "function",
        "title": "OrderExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OrderExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Order Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:OtherLit",
      "description": {
        "fct-descr": "\u003cp\u003eused for hacking in custom SQL\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "OtherLit String",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "OtherLit"
      },
      "index": {
        "description": "used for hacking in custom SQL",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "OtherLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Other Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:ParamExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "ParamExpr (Maybe Name) PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "ParamExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "ParamExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Param Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Project",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Project Assoc PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Project"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Project",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Project",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Restrict",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Restrict PrimExpr PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Restrict"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Restrict",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Restrict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Special",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Special SpecialOp PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimQuery",
        "fct-type": "function",
        "title": "Special"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Special",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:StringLit",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "StringLit String",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#Literal",
        "fct-type": "function",
        "title": "StringLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "StringLit",
        "normalized": "",
        "package": "haskelldb",
        "partial": "String Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Times",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Times",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Times",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Top",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Top Int",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#SpecialOp",
        "fct-type": "function",
        "title": "Top"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Top",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:UnExpr",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "UnExpr UnOp PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#PrimExpr",
        "fct-type": "function",
        "title": "UnExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "UnExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Un Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:UnOpOther",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "UnOpOther String",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#UnOp",
        "fct-type": "function",
        "title": "UnOpOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "UnOpOther",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Un Op Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:Union",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Union",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#RelOp",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "Union",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attrInExpr",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all attributes in an expression.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimExpr -\u003e Scheme",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#attrInExpr",
        "fct-type": "function",
        "title": "attrInExpr"
      },
      "index": {
        "description": "Returns all attributes in an expression",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "attrInExpr",
        "normalized": "PrimExpr-\u003eScheme",
        "package": "haskelldb",
        "partial": "In Expr",
        "signature": "PrimExpr-\u003eScheme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attrInOrder",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all attributes in a list of ordering expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "[OrderExpr] -\u003e Scheme",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#attrInOrder",
        "fct-type": "function",
        "title": "attrInOrder"
      },
      "index": {
        "description": "Returns all attributes in list of ordering expressions",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "attrInOrder",
        "normalized": "[OrderExpr]-\u003eScheme",
        "package": "haskelldb",
        "partial": "In Order",
        "signature": "[OrderExpr]-\u003eScheme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:attributes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the schema (the attributes) of a query\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e Scheme",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#attributes",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "Returns the schema the attributes of query",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "attributes",
        "normalized": "PrimQuery-\u003eScheme",
        "package": "haskelldb",
        "partial": "",
        "signature": "PrimQuery-\u003eScheme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:extend",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a projection of some attributes while\n   keeping all other attributes in the relation visible too. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Assoc -\u003e PrimQuery -\u003e PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#extend",
        "fct-type": "function",
        "title": "extend"
      },
      "index": {
        "description": "Creates projection of some attributes while keeping all other attributes in the relation visible too",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "extend",
        "normalized": "Assoc-\u003ePrimQuery-\u003ePrimQuery",
        "package": "haskelldb",
        "partial": "",
        "signature": "Assoc-\u003ePrimQuery-\u003ePrimQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:foldPrimExpr",
      "description": {
        "fct-descr": "\u003cp\u003eFold on \u003ccode\u003e\u003ca\u003ePrimExpr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "(Attribute -\u003e t, Literal -\u003e t, BinOp -\u003e t -\u003e t -\u003e t, UnOp -\u003e t -\u003e t, AggrOp -\u003e t -\u003e t, [(t, t)] -\u003e t -\u003e t, [t] -\u003e t, Maybe Name -\u003e t -\u003e t, Name -\u003e [t] -\u003e t, Name -\u003e t -\u003e t) -\u003e PrimExpr -\u003e t",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#foldPrimExpr",
        "fct-type": "function",
        "title": "foldPrimExpr"
      },
      "index": {
        "description": "Fold on PrimExpr",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "foldPrimExpr",
        "normalized": "(Attribute-\u003ea,Literal-\u003ea,BinOp-\u003ea-\u003ea-\u003ea,UnOp-\u003ea-\u003ea,AggrOp-\u003ea-\u003ea,[(a,a)]-\u003ea-\u003ea,[a]-\u003ea,Maybe Name-\u003ea-\u003ea,Name-\u003e[a]-\u003ea,Name-\u003ea-\u003ea)-\u003ePrimExpr-\u003ea",
        "package": "haskelldb",
        "partial": "Prim Expr",
        "signature": "(Attribute-\u003et,Literal-\u003et,BinOp-\u003et-\u003et-\u003et,UnOp-\u003et-\u003et,AggrOp-\u003et-\u003et,[(t,t)]-\u003et-\u003et,[t]-\u003et,Maybe Name-\u003et-\u003et,Name-\u003e[t]-\u003et,Name-\u003et-\u003et)-\u003ePrimExpr-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:foldPrimQuery",
      "description": {
        "fct-descr": "\u003cp\u003eFold on \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "(t, TableName -\u003e Scheme -\u003e t, Assoc -\u003e t -\u003e t, PrimExpr -\u003e t -\u003e t, RelOp -\u003e t -\u003e t -\u003e t, Assoc -\u003e t -\u003e t, SpecialOp -\u003e t -\u003e t) -\u003e PrimQuery -\u003e t",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#foldPrimQuery",
        "fct-type": "function",
        "title": "foldPrimQuery"
      },
      "index": {
        "description": "Fold on PrimQuery",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "foldPrimQuery",
        "normalized": "(a,TableName-\u003eScheme-\u003ea,Assoc-\u003ea-\u003ea,PrimExpr-\u003ea-\u003ea,RelOp-\u003ea-\u003ea-\u003ea,Assoc-\u003ea-\u003ea,SpecialOp-\u003ea-\u003ea)-\u003ePrimQuery-\u003ea",
        "package": "haskelldb",
        "partial": "Prim Query",
        "signature": "(t,TableName-\u003eScheme-\u003et,Assoc-\u003et-\u003et,PrimExpr-\u003et-\u003et,RelOp-\u003et-\u003et-\u003et,Assoc-\u003et-\u003et,SpecialOp-\u003et-\u003et)-\u003ePrimQuery-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:isAggregate",
      "description": {
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimExpr -\u003e Bool",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#isAggregate",
        "fct-type": "function",
        "title": "isAggregate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "isAggregate",
        "normalized": "PrimExpr-\u003eBool",
        "package": "haskelldb",
        "partial": "Aggregate",
        "signature": "PrimExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:isConstant",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if a primitive expression represents a constant\n or is an expression only involving constants.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimExpr -\u003e Bool",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#isConstant",
        "fct-type": "function",
        "title": "isConstant"
      },
      "index": {
        "description": "Determines if primitive expression represents constant or is an expression only involving constants",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "isConstant",
        "normalized": "PrimExpr-\u003eBool",
        "package": "haskelldb",
        "partial": "Constant",
        "signature": "PrimExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:substAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSubstitute attribute names in an expression.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Assoc -\u003e PrimExpr -\u003e PrimExpr",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#substAttr",
        "fct-type": "function",
        "title": "substAttr"
      },
      "index": {
        "description": "Substitute attribute names in an expression",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "substAttr",
        "normalized": "Assoc-\u003ePrimExpr-\u003ePrimExpr",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": "Assoc-\u003ePrimExpr-\u003ePrimExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrimQuery.html#v:times",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the cartesian product of two queries.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrimQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e PrimQuery -\u003e PrimQuery",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#times",
        "fct-type": "function",
        "title": "times"
      },
      "index": {
        "description": "Takes the cartesian product of two queries",
        "hierarchy": "Database HaskellDB PrimQuery",
        "module": "Database.HaskellDB.PrimQuery",
        "name": "times",
        "normalized": "PrimQuery-\u003ePrimQuery-\u003ePrimQuery",
        "package": "haskelldb",
        "partial": "",
        "signature": "PrimQuery-\u003ePrimQuery-\u003ePrimQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthor      :  Justin Bailey (jgbailey AT gmail DOT com)\n Pretty printing for Query, PrimQuery, and SqlSelect values.\n Useful for debugging the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html",
        "fct-type": "module",
        "title": "PrintQuery"
      },
      "index": {
        "description": "Author Justin Bailey jgbailey AT gmail DOT com Pretty printing for Query PrimQuery and SqlSelect values Useful for debugging the library",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "PrintQuery",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Print Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppPrim",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print a PrimQuery value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppPrim",
        "fct-type": "function",
        "title": "ppPrim"
      },
      "index": {
        "description": "Pretty print PrimQuery value",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppPrim",
        "normalized": "PrimQuery-\u003eDoc",
        "package": "haskelldb",
        "partial": "Prim",
        "signature": "PrimQuery-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppQuery",
      "description": {
        "fct-descr": "\u003cp\u003eOptimize the query and pretty print the primitive representation.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppQuery",
        "fct-type": "function",
        "title": "ppQuery"
      },
      "index": {
        "description": "Optimize the query and pretty print the primitive representation",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppQuery",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppQueryUnOpt",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the primitive representation of an unoptimized query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppQueryUnOpt",
        "fct-type": "function",
        "title": "ppQueryUnOpt"
      },
      "index": {
        "description": "Pretty print the primitive representation of an unoptimized query",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppQueryUnOpt",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Query Un Opt",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSelect",
      "description": {
        "fct-descr": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppSelect",
        "fct-type": "function",
        "title": "ppSelect"
      },
      "index": {
        "description": "Take query turn it into SqlSelect and print it",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppSelect",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Select",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSelectUnOpt",
      "description": {
        "fct-descr": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it, with optimizations.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppSelectUnOpt",
        "fct-type": "function",
        "title": "ppSelectUnOpt"
      },
      "index": {
        "description": "Take query turn it into SqlSelect and print it with optimizations",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppSelectUnOpt",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Select Un Opt",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSql",
      "description": {
        "fct-descr": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppSql",
        "fct-type": "function",
        "title": "ppSql"
      },
      "index": {
        "description": "Take query turn it into SqlSelect and print it",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppSql",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Sql",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSqlSelect",
      "description": {
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppSqlSelect",
        "fct-type": "function",
        "title": "ppSqlSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppSqlSelect",
        "normalized": "SqlSelect-\u003eDoc",
        "package": "haskelldb",
        "partial": "Sql Select",
        "signature": "SqlSelect-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-PrintQuery.html#v:ppSqlUnOpt",
      "description": {
        "fct-descr": "\u003cp\u003eTake a query, turn it into a SqlSelect and print it.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.PrintQuery",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-PrintQuery.html#ppSqlUnOpt",
        "fct-type": "function",
        "title": "ppSqlUnOpt"
      },
      "index": {
        "description": "Take query turn it into SqlSelect and print it",
        "hierarchy": "Database HaskellDB PrintQuery",
        "module": "Database.HaskellDB.PrintQuery",
        "name": "ppSqlUnOpt",
        "normalized": "Query(Rel a)-\u003eDoc",
        "package": "haskelldb",
        "partial": "Sql Un Opt",
        "signature": "Query(Rel r)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic combinators for building type-safe queries.\n The Query monad constructs a relational expression\n (\u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "Basic combinators for building type-safe queries The Query monad constructs relational expression PrimQuery",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Query",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Args",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to implement variable length arguments to \u003ccode\u003efunc\u003c/code\u003e, below.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#Args",
        "fct-type": "class",
        "title": "Args"
      },
      "index": {
        "description": "Used to implement variable length arguments to func below",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Args",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "Typed attributes",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Attr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ConstantRecord",
      "description": {
        "fct-descr": "\u003cp\u003eConverts records w/o Expr (usually from database\n queries) to records with Expr types. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ConstantRecord",
        "fct-type": "class",
        "title": "ConstantRecord"
      },
      "index": {
        "description": "Converts records Expr usually from database queries to records with Expr types",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ConstantRecord",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Constant Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "newtype",
        "fct-source": "src/Database-HaskellDB-Query.html#Expr",
        "fct-type": "newtype",
        "title": "Expr"
      },
      "index": {
        "description": "Type of normal expressions contains the untyped PrimExpr",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Expr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprAggr",
      "description": {
        "fct-descr": "\u003cp\u003eType of aggregate expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "newtype",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprAggr",
        "fct-type": "newtype",
        "title": "ExprAggr"
      },
      "index": {
        "description": "Type of aggregate expressions",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ExprAggr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Aggr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprC",
      "description": {
        "fct-descr": "\u003cp\u003eClass of expression types.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprC",
        "fct-type": "class",
        "title": "ExprC"
      },
      "index": {
        "description": "Class of expression types",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ExprC",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ExprDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of default expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "newtype",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprDefault",
        "fct-type": "newtype",
        "title": "ExprDefault"
      },
      "index": {
        "description": "The type of default expressions",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ExprDefault",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:InsertRec",
      "description": {
        "fct-descr": "\u003cp\u003eClass of records that can be used with \u003ccode\u003einsert\u003c/code\u003e. \n   All all the values must be instances of \u003ccode\u003eInsertExpr\u003c/code\u003e for the\n   record to be an instance of \u003ccode\u003e\u003ca\u003eInsertRec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#InsertRec",
        "fct-type": "class",
        "title": "InsertRec"
      },
      "index": {
        "description": "Class of records that can be used with insert All all the values must be instances of InsertExpr for the record to be an instance of InsertRec",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "InsertRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Insert Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:OrderExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
        "fct-type": "data",
        "title": "OrderExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "OrderExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Order Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ProjectExpr",
      "description": {
        "fct-descr": "\u003cp\u003eClass of expressions that can be used with \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ProjectExpr",
        "fct-type": "class",
        "title": "ProjectExpr"
      },
      "index": {
        "description": "Class of expressions that can be used with project",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ProjectExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Project Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ProjectRec",
      "description": {
        "fct-descr": "\u003cp\u003eClass of records that can be used with \u003ccode\u003e\u003ca\u003eproject\u003c/a\u003e\u003c/code\u003e. \n   All all the values must be instances of \u003ccode\u003e\u003ca\u003eProjectExpr\u003c/a\u003e\u003c/code\u003e for the\n   record to be an instance of \u003ccode\u003e\u003ca\u003eProjectRec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ProjectRec",
        "fct-type": "class",
        "title": "ProjectRec"
      },
      "index": {
        "description": "Class of records that can be used with project All all the values must be instances of ProjectExpr for the record to be an instance of ProjectRec",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ProjectRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Project Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Query",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Query",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Rel",
      "description": {
        "fct-descr": "\u003cp\u003eType of relations, contains the attributes\n   of the relation and an \u003ccode\u003eAlias\u003c/code\u003e to which the\n   attributes are renamed in the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Rel",
        "fct-type": "data",
        "title": "Rel"
      },
      "index": {
        "description": "Type of relations contains the attributes of the relation and an Alias to which the attributes are renamed in the PrimQuery",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Rel",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:RelToRec",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class which gives a polymorphic\n copy function that can turn a Rel into a Record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#RelToRec",
        "fct-type": "class",
        "title": "RelToRec"
      },
      "index": {
        "description": "Helper class which gives polymorphic copy function that can turn Rel into Record",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "RelToRec",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rel To Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ShowConstant",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ShowConstant",
        "fct-type": "class",
        "title": "ShowConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ShowConstant",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Show Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Table",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#t:ToPrimExprs",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#ToPrimExprs",
        "fct-type": "class",
        "title": "ToPrimExprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ToPrimExprs",
        "normalized": "",
        "package": "haskelldb",
        "partial": "To Prim Exprs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a record field.\n   Similar to '(.=.)', but gets the field label from an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a-\u003e e a-\u003e Record (RecCons f (e a) RecNil)",
        "fct-type": "function",
        "title": "(\u003c\u003c)"
      },
      "index": {
        "description": "Creates record field Similar to but gets the field label from an Attr",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(\u003c\u003c) \u003c\u003c",
        "normalized": "Attr a b-\u003ec b-\u003eRecord(RecCons a(c b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003ee a-\u003eRecord(RecCons f(e a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:-60--60--45-",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience operator for constructing records of constants.\n   Useful primarily with \u003ccode\u003einsert\u003c/code\u003e.\n   \u003ccode\u003ef \u003c\u003c- x\u003c/code\u003e is the same as \u003ccode\u003ef \u003c\u003c constant x\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a-\u003e a-\u003e Record (RecCons f (Expr a) RecNil)",
        "fct-type": "function",
        "title": "(\u003c\u003c-)"
      },
      "index": {
        "description": "Convenience operator for constructing records of constants Useful primarily with insert is the same as constant",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(\u003c\u003c-) \u003c\u003c-",
        "normalized": "Attr a b-\u003eb-\u003eRecord(RecCons a(Expr b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003ea-\u003eRecord(RecCons f(Expr a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003e\"Logical or\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e. OR in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "Logical or on Expr OR in SQL",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.||.) .||.",
        "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-37-.",
      "description": {
        "fct-descr": "\u003cp\u003eModulo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%25.",
        "fct-type": "function",
        "title": "(.%.)"
      },
      "index": {
        "description": "Modulo",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.%.) .%.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003e\"Logical and\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e, AND in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "Logical and on Expr AND in SQL",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.&&.) .&&.",
        "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.*.) .*.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43--43-.",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two String-expressions. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr String",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2B%2B.",
        "fct-type": "function",
        "title": "(.++.)"
      },
      "index": {
        "description": "Concatenates two String-expressions",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.++.) .++.",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-43-.",
      "description": {
        "fct-descr": "\u003cp\u003eAddition\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2B.",
        "fct-type": "function",
        "title": "(.+.)"
      },
      "index": {
        "description": "Addition",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.+.) .+.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eSubtraction \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.-.",
        "fct-type": "function",
        "title": "(.-.)"
      },
      "index": {
        "description": "Subtraction",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.-.) .-.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-47-.",
      "description": {
        "fct-descr": "\u003cp\u003eDivision\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2F.",
        "fct-type": "function",
        "title": "(./.)"
      },
      "index": {
        "description": "Division",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(./.) ./.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--61-.",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60--62-.",
      "description": {
        "fct-descr": "\u003cp\u003eInequality on Exprs, \u003ca/\u003e in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C%3E.",
        "fct-type": "function",
        "title": "(.\u003c\u003e.)"
      },
      "index": {
        "description": "Inequality on Exprs in SQL",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.\u003c\u003e.) .\u003c\u003e.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-60-.",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eEquality comparison on Exprs, = in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "Equality comparison on Exprs in SQL",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.==.) .==.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62--61-.",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:.-62-.",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Attr",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr Attribute",
        "fct-source": "src/Database-HaskellDB-Query.html#Attr",
        "fct-type": "function",
        "title": "Attr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Attr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Expr",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr PrimExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#Expr",
        "fct-type": "function",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Expr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:ExprAggr",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "ExprAggr PrimExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprAggr",
        "fct-type": "function",
        "title": "ExprAggr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ExprAggr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Aggr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:ExprDefault",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "ExprDefault PrimExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprDefault",
        "fct-type": "function",
        "title": "ExprDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "ExprDefault",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Rel",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Rel Alias Scheme",
        "fct-source": "src/Database-HaskellDB-Query.html#Rel",
        "fct-type": "function",
        "title": "Rel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Rel",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:Table",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Table TableName Assoc",
        "fct-source": "src/Database-HaskellDB-Query.html#Table",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "Table",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_case",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a conditional expression.\n   Returns the value of the expression corresponding to the first \n   true condition. If none of the conditions are true, the value of\n   the else-expression is returned.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "[(Expr Bool, Expr a)]-\u003e Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "_case"
      },
      "index": {
        "description": "Creates conditional expression Returns the value of the expression corresponding to the first true condition If none of the conditions are true the value of the else-expression is returned",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_case",
        "normalized": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_default",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value of the column. Only works with \u003ccode\u003einsert\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "ExprDefault a",
        "fct-source": "src/Database-HaskellDB-Query.html#_default",
        "fct-type": "function",
        "title": "_default"
      },
      "index": {
        "description": "The default value of the column Only works with insert",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_default",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_in",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the value of the first operand is\n   equal to the value of any of the expressions in the \n   list operand. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e [Expr a] -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#_in",
        "fct-type": "function",
        "title": "_in"
      },
      "index": {
        "description": "Returns true if the value of the first operand is equal to the value of any of the expressions in the list operand",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_in",
        "normalized": "Expr a-\u003e[Expr a]-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003e[Expr a]-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_length",
      "description": {
        "fct-descr": "\u003cp\u003eGets the length of a string.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr Int",
        "fct-source": "src/Database-HaskellDB-Query.html#_length",
        "fct-type": "function",
        "title": "_length"
      },
      "index": {
        "description": "Gets the length of string",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_length",
        "normalized": "Expr String-\u003eExpr Int",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_max",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the highest value of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_max",
        "fct-type": "function",
        "title": "_max"
      },
      "index": {
        "description": "Returns the highest value of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_max",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_min",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the lowest value of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_min",
        "fct-type": "function",
        "title": "_min"
      },
      "index": {
        "description": "Returns the lowest value of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_min",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_not",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of an Expr Bool.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#_not",
        "fct-type": "function",
        "title": "_not"
      },
      "index": {
        "description": "The inverse of an Expr Bool",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_not",
        "normalized": "Expr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:_sum",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the total sum of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_sum",
        "fct-type": "function",
        "title": "_sum"
      },
      "index": {
        "description": "Returns the total sum of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "_sum",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:asc",
      "description": {
        "fct-descr": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in ascending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#asc",
        "fct-type": "function",
        "title": "asc"
      },
      "index": {
        "description": "Use this together with the function order to order the results of query in ascending order Takes relation and an attribute of that relation which is used for the ordering",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "asc",
        "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
        "package": "haskelldb",
        "partial": "",
        "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:attribute",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#attribute",
        "fct-type": "function",
        "title": "attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "attribute",
        "normalized": "String-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:attributeName",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a -\u003e Attribute",
        "fct-source": "src/Database-HaskellDB-Query.html#attributeName",
        "fct-type": "function",
        "title": "attributeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "attributeName",
        "normalized": "Attr a b-\u003eAttribute",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "Attr f a-\u003eAttribute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:avg",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the average of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#avg",
        "fct-type": "function",
        "title": "avg"
      },
      "index": {
        "description": "Returns the average of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "avg",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:baseTable",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Record r -\u003e Table r",
        "fct-source": "src/Database-HaskellDB-Query.html#baseTable",
        "fct-type": "function",
        "title": "baseTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "baseTable",
        "normalized": "TableName-\u003eRecord a-\u003eTable a",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "TableName-\u003eRecord r-\u003eTable r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cast",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003eCAST\u003c/code\u003e expression for the given\n expression, using the argument given as the destination\n type. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e Expr a-\u003e Expr b",
        "fct-type": "function",
        "title": "cast"
      },
      "index": {
        "description": "Generates CAST expression for the given expression using the argument given as the destination type",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "cast",
        "normalized": "String-\u003eExpr a-\u003eExpr b",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eExpr a-\u003eExpr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the concatenation of two String-expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr String",
        "fct-source": "src/Database-HaskellDB-Query.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Produces the concatenation of two String-expressions",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "cat",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eCoerce the type of an expression\n to another type. Does not affect the actual\n primitive value - only the \u003ccode\u003ephantom\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr b",
        "fct-type": "function",
        "title": "coerce"
      },
      "index": {
        "description": "Coerce the type of an expression to another type Does not affect the actual primitive value only the phantom type",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "coerce",
        "normalized": "Expr a-\u003eExpr b",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constExpr",
      "description": {
        "fct-descr": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constExpr",
        "fct-type": "function",
        "title": "constExpr"
      },
      "index": {
        "description": "Turn constant data into nullable expression Same as constant Just",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "constExpr",
        "normalized": "Expr a-\u003eExpr(Maybe a)",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": "Expr a-\u003eExpr(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constNull",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a null value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constNull",
        "fct-type": "function",
        "title": "constNull"
      },
      "index": {
        "description": "Represents null value",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "constNull",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constVal",
      "description": {
        "fct-descr": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constVal",
        "fct-type": "function",
        "title": "constVal"
      },
      "index": {
        "description": "Turn constant data into nullable expression Same as constant Just",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "constVal",
        "normalized": "a-\u003eExpr(Maybe a)",
        "package": "haskelldb",
        "partial": "Val",
        "signature": "a-\u003eExpr(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a constant expression from a haskell value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "Creates constant expression from haskell value",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "constant",
        "normalized": "a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:constantRecord",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e cr",
        "fct-source": "src/Database-HaskellDB-Query.html#constantRecord",
        "fct-type": "method",
        "title": "constantRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "constantRecord",
        "normalized": "a-\u003eb",
        "package": "haskelldb",
        "partial": "Record",
        "signature": "r-\u003ecr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a single-field record from an attribute and a table. Useful\n for building projections that will re-use the same attribute name. \u003ccode\u003ecopy attr tbl\u003c/code\u003e is\n equivalent to:\n\u003c/p\u003e\u003cpre\u003eattr .=. (tbl .!. attr)\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a -\u003e Rel r -\u003e Record (RecCons f (Expr a) RecNil)",
        "fct-source": "src/Database-HaskellDB-Query.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Creates single-field record from an attribute and table Useful for building projections that will re-use the same attribute name copy attr tbl is equivalent to attr tbl attr",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "copy",
        "normalized": "Attr a b-\u003eRel c-\u003eRecord(RecCons a(Expr b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003eRel r-\u003eRecord(RecCons f(Expr a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:copyAll",
      "description": {
        "fct-descr": "\u003cp\u003eCopies all columns in the relation given. Useful for appending\n the remaining columns in a table to a projection. For example:\n\u003c/p\u003e\u003cpre\u003e   query = do\n     tbl \u003c- table some_table\n     project $ copyAll tbl\n\u003c/pre\u003e\u003cp\u003ewill add all columns in \u003ca\u003esome_table\u003c/a\u003e to the query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Record r",
        "fct-source": "src/Database-HaskellDB-Query.html#copyAll",
        "fct-type": "function",
        "title": "copyAll"
      },
      "index": {
        "description": "Copies all columns in the relation given Useful for appending the remaining columns in table to projection For example query do tbl table some table project copyAll tbl will add all columns in some table to the query",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "copyAll",
        "normalized": "Rel a-\u003eRecord a",
        "package": "haskelldb",
        "partial": "All",
        "signature": "Rel r-\u003eRecord r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of records (=rows) in a query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr Int",
        "fct-source": "src/Database-HaskellDB-Query.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Returns the number of records rows in query",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "count",
        "normalized": "Expr a-\u003eExprAggr Int",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:desc",
      "description": {
        "fct-descr": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in descending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#desc",
        "fct-type": "function",
        "title": "desc"
      },
      "index": {
        "description": "Use this together with the function order to order the results of query in descending order Takes relation and an attribute of that relation which is used for the ordering",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "desc",
        "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
        "package": "haskelldb",
        "partial": "",
        "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:divide",
      "description": {
        "fct-descr": "\u003cp\u003eNot in SQL92.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#divide",
        "fct-type": "function",
        "title": "divide"
      },
      "index": {
        "description": "Not in SQL92",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "divide",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:emptyTable",
      "description": {
        "fct-descr": "\u003cp\u003eFor queries against fake tables, such as\n 'information_schema.information_schema_catalog_name'. Useful for\n constructing queries that contain constant data (and do not select\n from columns) but need a table to select from.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Table (Record RecNil)",
        "fct-source": "src/Database-HaskellDB-Query.html#emptyTable",
        "fct-type": "function",
        "title": "emptyTable"
      },
      "index": {
        "description": "For queries against fake tables such as information schema.information schema catalog name Useful for constructing queries that contain constant data and do not select from columns but need table to select from",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "emptyTable",
        "normalized": "TableName-\u003eTable(Record RecNil)",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "TableName-\u003eTable(Record RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:exprs",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Record r -\u003e [PrimExpr]",
        "fct-source": "src/Database-HaskellDB-Query.html#exprs",
        "fct-type": "function",
        "title": "exprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "exprs",
        "normalized": "Record a-\u003e[PrimExpr]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record r-\u003e[PrimExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromNull",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a default value a and a nullable value. If the value is NULL,\n   the default value is returned, otherwise the value itself is returned.\n   Simliar to \u003ccode\u003efromMaybe\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr (Maybe a)-\u003e Expr a",
        "fct-type": "function",
        "title": "fromNull"
      },
      "index": {
        "description": "Takes default value and nullable value If the value is NULL the default value is returned otherwise the value itself is returned Simliar to fromMaybe",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "fromNull",
        "normalized": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:fromVal",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to fromNull, but takes a \n value argument rather than an Expr.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr (Maybe a) -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#fromVal",
        "fct-type": "function",
        "title": "fromVal"
      },
      "index": {
        "description": "Similar to fromNull but takes value argument rather than an Expr",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "fromVal",
        "normalized": "a-\u003eExpr(Maybe a)-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Val",
        "signature": "a-\u003eExpr(Maybe a)-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:func",
      "description": {
        "fct-descr": "\u003cp\u003eCan be used to define SQL functions which will\nappear in queries. Each argument for the function is specified by its own Expr value. \nExamples include:\n\u003c/p\u003e\u003cpre\u003e  lower :: Expr a -\u003e Expr (Maybe String) \n  lower str = func \"lower\" str\n\u003c/pre\u003e\u003cp\u003eThe arguments to the function do not have to be Expr if they can\nbe converted to Expr:\n\u003c/p\u003e\u003cpre\u003e  data DatePart = Day | Century deriving Show \n\u003c/pre\u003e\u003cpre\u003e  datePart :: DatePart -\u003e Expr (Maybe CalendarTime) -\u003e Expr (Maybe Int) \n  datePart date col = func \"date_part\" (constant $ show date) col\n\u003c/pre\u003e\u003cp\u003eAggregate functions can also be defined. For example:\n\u003c/p\u003e\u003cpre\u003e  every :: Expr Bool -\u003e ExprAggr Bool \n  every col = func \"every\" col\n\u003c/pre\u003e\u003cp\u003eAggregates are implemented to always take one argument, so any attempt to\ndefine an aggregate with any more or less arguments will result in an error.\n\u003c/p\u003e\u003cp\u003eNote that type signatures are usually required for each function defined,\nunless the arguments can be inferred.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Database-HaskellDB-Query.html#func",
        "fct-type": "function",
        "title": "func"
      },
      "index": {
        "description": "Can be used to define SQL functions which will appear in queries Each argument for the function is specified by its own Expr value Examples include lower Expr Expr Maybe String lower str func lower str The arguments to the function do not have to be Expr if they can be converted to Expr data DatePart Day Century deriving Show datePart DatePart Expr Maybe CalendarTime Expr Maybe Int datePart date col func date part constant show date col Aggregate functions can also be defined For example every Expr Bool ExprAggr Bool every col func every col Aggregates are implemented to always take one argument so any attempt to define an aggregate with any more or less arguments will result in an error Note that type signatures are usually required for each function defined unless the arguments can be inferred",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "func",
        "normalized": "String-\u003ea",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records which are present in both relations.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "Return all records which are present in both relations",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "intersect",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:isNull",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the expression is Null.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "Returns true if the expression is Null",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "isNull",
        "normalized": "Expr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:labels",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e [String]",
        "fct-source": "src/Database-HaskellDB-Query.html#labels",
        "fct-type": "function",
        "title": "labels"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "labels",
        "normalized": "a-\u003e[String]",
        "package": "haskelldb",
        "partial": "",
        "signature": "r-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:like",
      "description": {
        "fct-descr": "\u003cp\u003eThe HaskellDB counterpart to the SQL LIKE keyword.\n In the expresions, % is a wildcard representing any characters\n in the same position relavtive to the given characters and\n _ is a wildcard representing one character e.g.\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEFFF\") (constant \"AB%F_F\")\n\u003c/pre\u003e\u003cp\u003eis true while\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEF\") (constant \"AC%F\") \n\u003c/pre\u003e\u003cp\u003eis false.\n\u003c/p\u003e\u003cp\u003eNote that SQL92 does not specify whether LIKE is case-sensitive or not.\n Different database systems implement this differently.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#like",
        "fct-type": "function",
        "title": "like"
      },
      "index": {
        "description": "The HaskellDB counterpart to the SQL LIKE keyword In the expresions is wildcard representing any characters in the same position relavtive to the given characters and is wildcard representing one character e.g like constant ABCDEFFF constant AB is true while like constant ABCDEF constant AC is false Note that SQL92 does not specify whether LIKE is case-sensitive or not Different database systems implement this differently",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "like",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:literal",
      "description": {
        "fct-descr": "\u003cp\u003eInserts the string literally - no escaping, no quoting.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#literal",
        "fct-type": "function",
        "title": "literal"
      },
      "index": {
        "description": "Inserts the string literally no escaping no quoting",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "literal",
        "normalized": "String-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:minus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records from the first relation that are not \n   present in the second relation.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#minus",
        "fct-type": "function",
        "title": "minus"
      },
      "index": {
        "description": "Return all records from the first relation that are not present in the second relation",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "minus",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:namedParam",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a named parameter with a default value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Name-\u003e Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "namedParam"
      },
      "index": {
        "description": "Create named parameter with default value",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "namedParam",
        "normalized": "Name-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Param",
        "signature": "Name-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:notNull",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eisNull\u003c/a\u003e\u003c/code\u003e, returns false\n if the expression supplied is Null.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#notNull",
        "fct-type": "function",
        "title": "notNull"
      },
      "index": {
        "description": "The inverse of isNull returns false if the expression supplied is Null",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "notNull",
        "normalized": "Expr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:order",
      "description": {
        "fct-descr": "\u003cp\u003eOrder the results of a query.\n Use this with the \u003ccode\u003e\u003ca\u003easc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edesc\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "[OrderExpr] -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#order",
        "fct-type": "function",
        "title": "order"
      },
      "index": {
        "description": "Order the results of query Use this with the asc or desc functions",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "order",
        "normalized": "[OrderExpr]-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "[OrderExpr]-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an anonymous parameter with a default value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "Create an anonymous parameter with default value",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "param",
        "normalized": "Expr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:primExpr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying untyped \u003ccode\u003e\u003ca\u003ePrimExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "e a -\u003e PrimExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#primExpr",
        "fct-type": "method",
        "title": "primExpr"
      },
      "index": {
        "description": "Get the underlying untyped PrimExpr",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "primExpr",
        "normalized": "a b-\u003ePrimExpr",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": "e a-\u003ePrimExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a subset of the columns in the table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Record r -\u003e Query (Rel er)",
        "fct-source": "src/Database-HaskellDB-Query.html#project",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "Specifies subset of the columns in the table",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "project",
        "normalized": "Record a-\u003eQuery(Rel b)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record r-\u003eQuery(Rel er)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:restrict",
      "description": {
        "fct-descr": "\u003cp\u003eRestricts the records to only those who evaluates the \n expression to True.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#restrict",
        "fct-type": "function",
        "title": "restrict"
      },
      "index": {
        "description": "Restricts the records to only those who evaluates the expression to True",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "restrict",
        "normalized": "Expr Bool-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:runQuery",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e PrimQuery",
        "fct-source": "src/Database-HaskellDB-Query.html#runQuery",
        "fct-type": "function",
        "title": "runQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "runQuery",
        "normalized": "Query(Rel a)-\u003ePrimQuery",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query(Rel r)-\u003ePrimQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:runQueryRel",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e (PrimQuery, Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#runQueryRel",
        "fct-type": "function",
        "title": "runQueryRel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "runQueryRel",
        "normalized": "Query(Rel a)-\u003e(PrimQuery,Rel a)",
        "package": "haskelldb",
        "partial": "Query Rel",
        "signature": "Query(Rel r)-\u003e(PrimQuery,Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:select",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a -\u003e Rel r -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "select",
        "normalized": "Attr a b-\u003eRel c-\u003eExpr b",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003eRel r-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:showConstant",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Literal",
        "fct-source": "src/Database-HaskellDB-Query.html#showConstant",
        "fct-type": "method",
        "title": "showConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "showConstant",
        "normalized": "a-\u003eLiteral",
        "package": "haskelldb",
        "partial": "Constant",
        "signature": "a-\u003eLiteral"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddev",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the standard deviation of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#stddev",
        "fct-type": "function",
        "title": "stddev"
      },
      "index": {
        "description": "Returns the standard deviation of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "stddev",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:stddevP",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#stddevP",
        "fct-type": "function",
        "title": "stddevP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "stddevP",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:subQuery",
      "description": {
        "fct-descr": "\u003cp\u003eAllows a subquery to be created between another query and\n this query. Normally query definition is associative and query definition\n is interleaved. This combinator ensures the given query is\n added as a whole piece.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#subQuery",
        "fct-type": "function",
        "title": "subQuery"
      },
      "index": {
        "description": "Allows subquery to be created between another query and this query Normally query definition is associative and query definition is interleaved This combinator ensures the given query is added as whole piece",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "subQuery",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:table",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records from a specific table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Table r -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#table",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "Return all records from specific table",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "table",
        "normalized": "Table a-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Table r-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:tableName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Table t -\u003e TableName",
        "fct-source": "src/Database-HaskellDB-Query.html#tableName",
        "fct-type": "function",
        "title": "tableName"
      },
      "index": {
        "description": "Get the name of table",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "tableName",
        "normalized": "Table a-\u003eTableName",
        "package": "haskelldb",
        "partial": "Name",
        "signature": "Table t-\u003eTableName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:tableRec",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Table (Record r) -\u003e Record r",
        "fct-source": "src/Database-HaskellDB-Query.html#tableRec",
        "fct-type": "function",
        "title": "tableRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "tableRec",
        "normalized": "Table(Record a)-\u003eRecord a",
        "package": "haskelldb",
        "partial": "Rec",
        "signature": "Table(Record r)-\u003eRecord r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:toStr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a bounded string to a real string.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e d",
        "fct-source": "src/Database-HaskellDB-Query.html#toStr",
        "fct-type": "function",
        "title": "toStr"
      },
      "index": {
        "description": "Convert bounded string to real string",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "toStr",
        "normalized": "a-\u003eb",
        "package": "haskelldb",
        "partial": "Str",
        "signature": "s-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n topmost records.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Int -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "Return the topmost records",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "top",
        "normalized": "Int-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Int-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:unQuery",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query a -\u003e a",
        "fct-source": "src/Database-HaskellDB-Query.html#unQuery",
        "fct-type": "function",
        "title": "unQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "unQuery",
        "normalized": "Query a-\u003ea",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records which are present in at least\n   one of the relations.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return all records which are present in at least one of the relations",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "union",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:unique",
      "description": {
        "fct-descr": "\u003cp\u003eRestricts the relation given to only return unique records. Upshot\n is all projected attributes will be \u003ccode\u003egrouped\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#unique",
        "fct-type": "function",
        "title": "unique"
      },
      "index": {
        "description": "Restricts the relation given to only return unique records Upshot is all projected attributes will be grouped",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "unique",
        "normalized": "Query()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the standard variance of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "Returns the standard variance of column",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "variance",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Query.html#v:varianceP",
      "description": {
        "fct-module": "Database.HaskellDB.Query",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#varianceP",
        "fct-type": "function",
        "title": "varianceP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Query",
        "module": "Database.HaskellDB.Query",
        "name": "varianceP",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault SQL generation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html",
        "fct-type": "module",
        "title": "Default"
      },
      "index": {
        "description": "Default SQL generation",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "Default",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlBinary",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e RelOp -\u003e SqlSelect -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlBinary",
        "fct-type": "function",
        "title": "defaultSqlBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlBinary",
        "normalized": "SqlGenerator-\u003eRelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Binary",
        "signature": "SqlGenerator-\u003eRelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlCreateDB",
      "description": {
        "fct-descr": "\u003cp\u003eUse this to create a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e data type corresponding to \n the SQL statement CREATE DATABASE which creates a new database.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e String-\u003e SqlCreate",
        "fct-type": "function",
        "title": "defaultSqlCreateDB"
      },
      "index": {
        "description": "Use this to create SqlCreate data type corresponding to the SQL statement CREATE DATABASE which creates new database",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlCreateDB",
        "normalized": "SqlGenerator-\u003eString-\u003eSqlCreate",
        "package": "haskelldb",
        "partial": "Sql Create DB",
        "signature": "SqlGenerator-\u003eString-\u003eSqlCreate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlCreateTable",
      "description": {
        "fct-descr": "\u003cp\u003eUse this to create a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e data type corresponding to \n the SQL statement CREATE which creates a new table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e TableName-\u003e [(Attribute, FieldDesc)]-\u003e SqlCreate",
        "fct-type": "function",
        "title": "defaultSqlCreateTable"
      },
      "index": {
        "description": "Use this to create SqlCreate data type corresponding to the SQL statement CREATE which creates new table",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlCreateTable",
        "normalized": "SqlGenerator-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
        "package": "haskelldb",
        "partial": "Sql Create Table",
        "signature": "SqlGenerator-\u003eTableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDelete",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDelete\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n DELETE which deletes rows in a table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e TableName-\u003e [PrimExpr]-\u003e SqlDelete",
        "fct-type": "function",
        "title": "defaultSqlDelete"
      },
      "index": {
        "description": "Creates SqlDelete Corresponds to the SQL statement DELETE which deletes rows in table",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlDelete",
        "normalized": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eSqlDelete",
        "package": "haskelldb",
        "partial": "Sql Delete",
        "signature": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eSqlDelete"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDropDB",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e that delete the database with the \n name given as the first argument.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e String -\u003e SqlDrop",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlDropDB",
        "fct-type": "function",
        "title": "defaultSqlDropDB"
      },
      "index": {
        "description": "Creates SqlDrop that delete the database with the name given as the first argument",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlDropDB",
        "normalized": "SqlGenerator-\u003eString-\u003eSqlDrop",
        "package": "haskelldb",
        "partial": "Sql Drop DB",
        "signature": "SqlGenerator-\u003eString-\u003eSqlDrop"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlDropTable",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e that delete the database named\n in the first argument.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e TableName -\u003e SqlDrop",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlDropTable",
        "fct-type": "function",
        "title": "defaultSqlDropTable"
      },
      "index": {
        "description": "Creates SqlDrop that delete the database named in the first argument",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlDropTable",
        "normalized": "SqlGenerator-\u003eTableName-\u003eSqlDrop",
        "package": "haskelldb",
        "partial": "Sql Drop Table",
        "signature": "SqlGenerator-\u003eTableName-\u003eSqlDrop"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlEmpty",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlEmpty",
        "fct-type": "function",
        "title": "defaultSqlEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlEmpty",
        "normalized": "SqlGenerator-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Empty",
        "signature": "SqlGenerator-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e PrimExpr -\u003e SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlExpr",
        "fct-type": "function",
        "title": "defaultSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlExpr",
        "normalized": "SqlGenerator-\u003ePrimExpr-\u003eSqlExpr",
        "package": "haskelldb",
        "partial": "Sql Expr",
        "signature": "SqlGenerator-\u003ePrimExpr-\u003eSqlExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlGenerator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlGenerator",
        "fct-type": "function",
        "title": "defaultSqlGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlGenerator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlGroup",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures the groupby value on the SqlSelect either preserves existing \n grouping or that it will group on all columns (i.e, Mark == All).\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e Assoc -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlGroup",
        "fct-type": "function",
        "title": "defaultSqlGroup"
      },
      "index": {
        "description": "Ensures the groupby value on the SqlSelect either preserves existing grouping or that it will group on all columns i.e Mark All",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlGroup",
        "normalized": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Group",
        "signature": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlInsert",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlInsert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e TableName-\u003e Assoc-\u003e SqlInsert",
        "fct-type": "function",
        "title": "defaultSqlInsert"
      },
      "index": {
        "description": "Creates SqlInsert",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlInsert",
        "normalized": "SqlGenerator-\u003eTableName-\u003eAssoc-\u003eSqlInsert",
        "package": "haskelldb",
        "partial": "Sql Insert",
        "signature": "SqlGenerator-\u003eTableName-\u003eAssoc-\u003eSqlInsert"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlInsertQuery",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlInsert\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n INSERT INTO which is used to insert new rows in a table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e TableName-\u003e PrimQuery-\u003e SqlInsert",
        "fct-type": "function",
        "title": "defaultSqlInsertQuery"
      },
      "index": {
        "description": "Creates SqlInsert Corresponds to the SQL statement INSERT INTO which is used to insert new rows in table",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlInsertQuery",
        "normalized": "SqlGenerator-\u003eTableName-\u003ePrimQuery-\u003eSqlInsert",
        "package": "haskelldb",
        "partial": "Sql Insert Query",
        "signature": "SqlGenerator-\u003eTableName-\u003ePrimQuery-\u003eSqlInsert"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlLiteral",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e Literal -\u003e String",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlLiteral",
        "fct-type": "function",
        "title": "defaultSqlLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlLiteral",
        "normalized": "SqlGenerator-\u003eLiteral-\u003eString",
        "package": "haskelldb",
        "partial": "Sql Literal",
        "signature": "SqlGenerator-\u003eLiteral-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlProject",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e Assoc -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlProject",
        "fct-type": "function",
        "title": "defaultSqlProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlProject",
        "normalized": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Project",
        "signature": "SqlGenerator-\u003eAssoc-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlQuery",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlSelect\u003c/a\u003e\u003c/code\u003e based on the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e supplied.\n Corresponds to the SQL statement SELECT.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e PrimQuery -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlQuery",
        "fct-type": "function",
        "title": "defaultSqlQuery"
      },
      "index": {
        "description": "Creates SqlSelect based on the PrimQuery supplied Corresponds to the SQL statement SELECT",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlQuery",
        "normalized": "SqlGenerator-\u003ePrimQuery-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Query",
        "signature": "SqlGenerator-\u003ePrimQuery-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlQuote",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e String -\u003e String",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlQuote",
        "fct-type": "function",
        "title": "defaultSqlQuote"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlQuote",
        "normalized": "SqlGenerator-\u003eString-\u003eString",
        "package": "haskelldb",
        "partial": "Sql Quote",
        "signature": "SqlGenerator-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlRestrict",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e PrimExpr -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlRestrict",
        "fct-type": "function",
        "title": "defaultSqlRestrict"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlRestrict",
        "normalized": "SqlGenerator-\u003ePrimExpr-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Restrict",
        "signature": "SqlGenerator-\u003ePrimExpr-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlSpecial",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e SpecialOp -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlSpecial",
        "fct-type": "function",
        "title": "defaultSqlSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlSpecial",
        "normalized": "SqlGenerator-\u003eSpecialOp-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Special",
        "signature": "SqlGenerator-\u003eSpecialOp-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlTable",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e TableName -\u003e Scheme -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlTable",
        "fct-type": "function",
        "title": "defaultSqlTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlTable",
        "normalized": "SqlGenerator-\u003eTableName-\u003eScheme-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Table",
        "signature": "SqlGenerator-\u003eTableName-\u003eScheme-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlType",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e FieldType -\u003e SqlType",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#defaultSqlType",
        "fct-type": "function",
        "title": "defaultSqlType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlType",
        "normalized": "SqlGenerator-\u003eFieldType-\u003eSqlType",
        "package": "haskelldb",
        "partial": "Sql Type",
        "signature": "SqlGenerator-\u003eFieldType-\u003eSqlType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:defaultSqlUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSqlUpdate\u003c/a\u003e\u003c/code\u003e. Corresponds to the SQL statement\n UPDATE which updates data in a table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator-\u003e TableName-\u003e [PrimExpr]-\u003e Assoc-\u003e SqlUpdate",
        "fct-type": "function",
        "title": "defaultSqlUpdate"
      },
      "index": {
        "description": "Creates SqlUpdate Corresponds to the SQL statement UPDATE which updates data in table",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "defaultSqlUpdate",
        "normalized": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
        "package": "haskelldb",
        "partial": "Sql Update",
        "signature": "SqlGenerator-\u003eTableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:mkSqlGenerator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator -\u003e SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#mkSqlGenerator",
        "fct-type": "function",
        "title": "mkSqlGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "mkSqlGenerator",
        "normalized": "SqlGenerator-\u003eSqlGenerator",
        "package": "haskelldb",
        "partial": "Sql Generator",
        "signature": "SqlGenerator-\u003eSqlGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Default.html#v:toSqlSelect",
      "description": {
        "fct-descr": "\u003cp\u003eMake sure our SqlSelect statement is really a SqlSelect and not\n another constructor.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Default",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Default.html#toSqlSelect",
        "fct-type": "function",
        "title": "toSqlSelect"
      },
      "index": {
        "description": "Make sure our SqlSelect statement is really SqlSelect and not another constructor",
        "hierarchy": "Database HaskellDB Sql Default",
        "module": "Database.HaskellDB.Sql.Default",
        "name": "toSqlSelect",
        "normalized": "SqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Sql Select",
        "signature": "SqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type of SQL generators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html",
        "fct-type": "module",
        "title": "Generate"
      },
      "index": {
        "description": "The type of SQL generators",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "Generate",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Generate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#t:SqlGenerator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "data",
        "title": "SqlGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "SqlGenerator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:SqlGenerator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "SqlGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "SqlGenerator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "RelOp -\u003e SqlSelect -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlBinary",
        "normalized": "RelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Binary",
        "signature": "RelOp-\u003eSqlSelect-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlCreateDB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e SqlCreate",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlCreateDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlCreateDB",
        "normalized": "String-\u003eSqlCreate",
        "package": "haskelldb",
        "partial": "Create DB",
        "signature": "String-\u003eSqlCreate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlCreateTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [(Attribute, FieldDesc)] -\u003e SqlCreate",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlCreateTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlCreateTable",
        "normalized": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate",
        "package": "haskelldb",
        "partial": "Create Table",
        "signature": "TableName-\u003e[(Attribute,FieldDesc)]-\u003eSqlCreate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDelete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [PrimExpr] -\u003e SqlDelete",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlDelete",
        "normalized": "TableName-\u003e[PrimExpr]-\u003eSqlDelete",
        "package": "haskelldb",
        "partial": "Delete",
        "signature": "TableName-\u003e[PrimExpr]-\u003eSqlDelete"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDropDB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e SqlDrop",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlDropDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlDropDB",
        "normalized": "String-\u003eSqlDrop",
        "package": "haskelldb",
        "partial": "Drop DB",
        "signature": "String-\u003eSqlDrop"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlDropTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e SqlDrop",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlDropTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlDropTable",
        "normalized": "TableName-\u003eSqlDrop",
        "package": "haskelldb",
        "partial": "Drop Table",
        "signature": "TableName-\u003eSqlDrop"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlEmpty",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlExpr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "PrimExpr -\u003e SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlExpr",
        "normalized": "PrimExpr-\u003eSqlExpr",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": "PrimExpr-\u003eSqlExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlGroup",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures non-aggregate expressions in the select are included in\n group by clause.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "Assoc -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlGroup"
      },
      "index": {
        "description": "Ensures non-aggregate expressions in the select are included in group by clause",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlGroup",
        "normalized": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Group",
        "signature": "Assoc-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlInsert",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Assoc -\u003e SqlInsert",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlInsert",
        "normalized": "TableName-\u003eAssoc-\u003eSqlInsert",
        "package": "haskelldb",
        "partial": "Insert",
        "signature": "TableName-\u003eAssoc-\u003eSqlInsert"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlInsertQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e PrimQuery -\u003e SqlInsert",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlInsertQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlInsertQuery",
        "normalized": "TableName-\u003ePrimQuery-\u003eSqlInsert",
        "package": "haskelldb",
        "partial": "Insert Query",
        "signature": "TableName-\u003ePrimQuery-\u003eSqlInsert"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlLiteral",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "Literal -\u003e String",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlLiteral",
        "normalized": "Literal-\u003eString",
        "package": "haskelldb",
        "partial": "Literal",
        "signature": "Literal-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlProject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "Assoc -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlProject",
        "normalized": "Assoc-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Project",
        "signature": "Assoc-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "PrimQuery -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlQuery",
        "normalized": "PrimQuery-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "PrimQuery-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlQuote",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a string into a quoted string. Quote characters\n and any escaping are handled by this function.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlQuote"
      },
      "index": {
        "description": "Turn string into quoted string Quote characters and any escaping are handled by this function",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlQuote",
        "normalized": "String-\u003eString",
        "package": "haskelldb",
        "partial": "Quote",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlRestrict",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "PrimExpr -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlRestrict"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlRestrict",
        "normalized": "PrimExpr-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Restrict",
        "signature": "PrimExpr-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlSpecial",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "SpecialOp -\u003e SqlSelect -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlSpecial",
        "normalized": "SpecialOp-\u003eSqlSelect-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Special",
        "signature": "SpecialOp-\u003eSqlSelect-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e Scheme -\u003e SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlTable",
        "normalized": "TableName-\u003eScheme-\u003eSqlSelect",
        "package": "haskelldb",
        "partial": "Table",
        "signature": "TableName-\u003eScheme-\u003eSqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "FieldType -\u003e SqlType",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlType",
        "normalized": "FieldType-\u003eSqlType",
        "package": "haskelldb",
        "partial": "Type",
        "signature": "FieldType-\u003eSqlType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Generate.html#v:sqlUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HaskellDB.Sql.Generate",
        "fct-package": "haskelldb",
        "fct-signature": "TableName -\u003e [PrimExpr] -\u003e Assoc -\u003e SqlUpdate",
        "fct-source": "src/Database-HaskellDB-Sql-Generate.html#SqlGenerator",
        "fct-type": "function",
        "title": "sqlUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Generate",
        "module": "Database.HaskellDB.Sql.Generate",
        "name": "sqlUpdate",
        "normalized": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate",
        "package": "haskelldb",
        "partial": "Update",
        "signature": "TableName-\u003e[PrimExpr]-\u003eAssoc-\u003eSqlUpdate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-MySQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for MySQL.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.MySQL",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-MySQL.html",
        "fct-type": "module",
        "title": "MySQL"
      },
      "index": {
        "description": "SQL generation for MySQL",
        "hierarchy": "Database HaskellDB Sql MySQL",
        "module": "Database.HaskellDB.Sql.MySQL",
        "name": "MySQL",
        "normalized": "",
        "package": "haskelldb",
        "partial": "My SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-MySQL.html#v:generator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.MySQL",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-MySQL.html#generator",
        "fct-type": "function",
        "title": "generator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql MySQL",
        "module": "Database.HaskellDB.Sql.MySQL",
        "name": "generator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-PostgreSQL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for PostgreSQL.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.PostgreSQL",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-PostgreSQL.html",
        "fct-type": "module",
        "title": "PostgreSQL"
      },
      "index": {
        "description": "SQL generation for PostgreSQL",
        "hierarchy": "Database HaskellDB Sql PostgreSQL",
        "module": "Database.HaskellDB.Sql.PostgreSQL",
        "name": "PostgreSQL",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Postgre SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-PostgreSQL.html#v:generator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.PostgreSQL",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-PostgreSQL.html#generator",
        "fct-type": "function",
        "title": "generator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql PostgreSQL",
        "module": "Database.HaskellDB.Sql.PostgreSQL",
        "name": "generator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-print SQL\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html",
        "fct-type": "module",
        "title": "Print"
      },
      "index": {
        "description": "Pretty-print SQL",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "Print",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Print",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppCreate",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlCreate\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlCreate -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppCreate",
        "fct-type": "function",
        "title": "ppCreate"
      },
      "index": {
        "description": "Pretty prints SqlCreate",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppCreate",
        "normalized": "SqlCreate-\u003eDoc",
        "package": "haskelldb",
        "partial": "Create",
        "signature": "SqlCreate-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppDelete",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlDelete\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDelete -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppDelete",
        "fct-type": "function",
        "title": "ppDelete"
      },
      "index": {
        "description": "Pretty prints SqlDelete",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppDelete",
        "normalized": "SqlDelete-\u003eDoc",
        "package": "haskelldb",
        "partial": "Delete",
        "signature": "SqlDelete-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppDrop",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlDrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDrop -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppDrop",
        "fct-type": "function",
        "title": "ppDrop"
      },
      "index": {
        "description": "Pretty prints SqlDrop",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppDrop",
        "normalized": "SqlDrop-\u003eDoc",
        "package": "haskelldb",
        "partial": "Drop",
        "signature": "SqlDrop-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppInsert",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlInsert -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppInsert",
        "fct-type": "function",
        "title": "ppInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppInsert",
        "normalized": "SqlInsert-\u003eDoc",
        "package": "haskelldb",
        "partial": "Insert",
        "signature": "SqlInsert-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppSql",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlSelect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppSql",
        "fct-type": "function",
        "title": "ppSql"
      },
      "index": {
        "description": "Pretty prints SqlSelect",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppSql",
        "normalized": "SqlSelect-\u003eDoc",
        "package": "haskelldb",
        "partial": "Sql",
        "signature": "SqlSelect-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppSqlExpr",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlExpr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlExpr -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppSqlExpr",
        "fct-type": "function",
        "title": "ppSqlExpr"
      },
      "index": {
        "description": "Pretty prints SqlExpr",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppSqlExpr",
        "normalized": "SqlExpr-\u003eDoc",
        "package": "haskelldb",
        "partial": "Sql Expr",
        "signature": "SqlExpr-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-Print.html#v:ppUpdate",
      "description": {
        "fct-descr": "\u003cp\u003ePretty prints a \u003ccode\u003e\u003ca\u003eSqlUpdate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql.Print",
        "fct-package": "haskelldb",
        "fct-signature": "SqlUpdate -\u003e Doc",
        "fct-source": "src/Database-HaskellDB-Sql-Print.html#ppUpdate",
        "fct-type": "function",
        "title": "ppUpdate"
      },
      "index": {
        "description": "Pretty prints SqlUpdate",
        "hierarchy": "Database HaskellDB Sql Print",
        "module": "Database.HaskellDB.Sql.Print",
        "name": "ppUpdate",
        "normalized": "SqlUpdate-\u003eDoc",
        "package": "haskelldb",
        "partial": "Update",
        "signature": "SqlUpdate-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-SQLite.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSQL generation for SQLite.\n See \u003ca\u003ehttp://www.sqlite.org/lang.html\u003c/a\u003e for documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql.SQLite",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql-SQLite.html",
        "fct-type": "module",
        "title": "SQLite"
      },
      "index": {
        "description": "SQL generation for SQLite See http www.sqlite.org lang.html for documentation",
        "hierarchy": "Database HaskellDB Sql SQLite",
        "module": "Database.HaskellDB.Sql.SQLite",
        "name": "SQLite",
        "normalized": "",
        "package": "haskelldb",
        "partial": "SQLite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql-SQLite.html#v:generator",
      "description": {
        "fct-module": "Database.HaskellDB.Sql.SQLite",
        "fct-package": "haskelldb",
        "fct-signature": "SqlGenerator",
        "fct-source": "src/Database-HaskellDB-Sql-SQLite.html#generator",
        "fct-type": "function",
        "title": "generator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql SQLite",
        "module": "Database.HaskellDB.Sql.SQLite",
        "name": "generator",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA data type for SQL.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Sql.html",
        "fct-type": "module",
        "title": "Sql"
      },
      "index": {
        "description": "data type for SQL",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "Sql",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:Mark",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#Mark",
        "fct-type": "data",
        "title": "Mark"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "Mark",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlColumn",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlColumn",
        "fct-type": "type",
        "title": "SqlColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlColumn",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlCreate",
      "description": {
        "fct-descr": "\u003cp\u003eData type for SQL CREATE statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlCreate",
        "fct-type": "data",
        "title": "SqlCreate"
      },
      "index": {
        "description": "Data type for SQL CREATE statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlCreate",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlDelete",
      "description": {
        "fct-descr": "\u003cp\u003eData type for SQL DELETE statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlDelete",
        "fct-type": "data",
        "title": "SqlDelete"
      },
      "index": {
        "description": "Data type for SQL DELETE statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDelete",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlDrop",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing the SQL DROP statement.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlDrop",
        "fct-type": "data",
        "title": "SqlDrop"
      },
      "index": {
        "description": "Data type representing the SQL DROP statement",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDrop",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Drop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlExpr",
      "description": {
        "fct-descr": "\u003cp\u003eExpressions in SQL statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "data",
        "title": "SqlExpr"
      },
      "index": {
        "description": "Expressions in SQL statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlInsert",
      "description": {
        "fct-descr": "\u003cp\u003eData type for SQL INSERT statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlInsert",
        "fct-type": "data",
        "title": "SqlInsert"
      },
      "index": {
        "description": "Data type for SQL INSERT statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlInsert",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlName",
      "description": {
        "fct-descr": "\u003cp\u003eA valid SQL name for a parameter.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlName",
        "fct-type": "type",
        "title": "SqlName"
      },
      "index": {
        "description": "valid SQL name for parameter",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlName",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlOrder",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlOrder",
        "fct-type": "data",
        "title": "SqlOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlOrder",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlSelect",
      "description": {
        "fct-descr": "\u003cp\u003eData type for SQL SELECT statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "data",
        "title": "SqlSelect"
      },
      "index": {
        "description": "Data type for SQL SELECT statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlSelect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlTable",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlTable",
        "fct-type": "type",
        "title": "SqlTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlTable",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlType",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlType",
        "fct-type": "data",
        "title": "SqlType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#t:SqlUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eData type for SQL UPDATE statements.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlUpdate",
        "fct-type": "data",
        "title": "SqlUpdate"
      },
      "index": {
        "description": "Data type for SQL UPDATE statements",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlUpdate",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:AggrFunSqlExpr",
      "description": {
        "fct-descr": "\u003cp\u003eAggregate functions separate from normal functions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "AggrFunSqlExpr String [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "AggrFunSqlExpr"
      },
      "index": {
        "description": "Aggregate functions separate from normal functions",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "AggrFunSqlExpr",
        "normalized": "AggrFunSqlExpr String[SqlExpr]",
        "package": "haskelldb",
        "partial": "Aggr Fun Sql Expr",
        "signature": "AggrFunSqlExpr String[SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:All",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "All",
        "fct-source": "src/Database-HaskellDB-Sql.html#Mark",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "All",
        "normalized": "",
        "package": "haskelldb",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:BinSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "BinSqlExpr String SqlExpr SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "BinSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "BinSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Bin Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:CaseSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "CaseSqlExpr [(SqlExpr, SqlExpr)] SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "CaseSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "CaseSqlExpr",
        "normalized": "CaseSqlExpr[(SqlExpr,SqlExpr)]SqlExpr",
        "package": "haskelldb",
        "partial": "Case Sql Expr",
        "signature": "CaseSqlExpr[(SqlExpr,SqlExpr)]SqlExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:CastSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "CastSqlExpr String SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "CastSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "CastSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Cast Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ColumnSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ColumnSqlExpr SqlColumn",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ColumnSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ColumnSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Column Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:Columns",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "Columns [(SqlColumn, SqlExpr)]",
        "fct-source": "src/Database-HaskellDB-Sql.html#Mark",
        "fct-type": "function",
        "title": "Columns"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "Columns",
        "normalized": "Columns[(SqlColumn,SqlExpr)]",
        "package": "haskelldb",
        "partial": "Columns",
        "signature": "Columns[(SqlColumn,SqlExpr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ConstSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ConstSqlExpr String",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ConstSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ConstSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Const Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ExistsSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ExistsSqlExpr SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ExistsSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ExistsSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Exists Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:FunSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "FunSqlExpr String [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "FunSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "FunSqlExpr",
        "normalized": "FunSqlExpr String[SqlExpr]",
        "package": "haskelldb",
        "partial": "Fun Sql Expr",
        "signature": "FunSqlExpr String[SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ListSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ListSqlExpr [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ListSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ListSqlExpr",
        "normalized": "ListSqlExpr[SqlExpr]",
        "package": "haskelldb",
        "partial": "List Sql Expr",
        "signature": "ListSqlExpr[SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ParamSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ParamSqlExpr (Maybe SqlName) SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ParamSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ParamSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Param Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:ParensSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "ParensSqlExpr SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "ParensSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "ParensSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Parens Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PlaceHolderSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "PlaceHolderSqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "PlaceHolderSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "PlaceHolderSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Place Holder Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PostfixSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "PostfixSqlExpr String SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "PostfixSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "PostfixSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Postfix Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:PrefixSqlExpr",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "PrefixSqlExpr String SqlExpr",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlExpr",
        "fct-type": "function",
        "title": "PrefixSqlExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "PrefixSqlExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Prefix Sql Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlAsc",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlAsc",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlOrder",
        "fct-type": "function",
        "title": "SqlAsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlAsc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlBin",
      "description": {
        "fct-descr": "\u003cp\u003eBinary relational operator\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlBin String SqlSelect SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "SqlBin"
      },
      "index": {
        "description": "Binary relational operator",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlBin",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Bin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlCreateDB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlCreateDB String",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlCreate",
        "fct-type": "function",
        "title": "SqlCreateDB"
      },
      "index": {
        "description": "Create database",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlCreateDB",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Create DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlCreateTable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlCreateTable SqlTable [(SqlColumn, (SqlType, Bool))]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlCreate",
        "fct-type": "function",
        "title": "SqlCreateTable"
      },
      "index": {
        "description": "Create table",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlCreateTable",
        "normalized": "SqlCreateTable SqlTable[(SqlColumn,(SqlType,Bool))]",
        "package": "haskelldb",
        "partial": "Sql Create Table",
        "signature": "SqlCreateTable SqlTable[(SqlColumn,(SqlType,Bool))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDelete",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDelete SqlTable [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlDelete",
        "fct-type": "function",
        "title": "SqlDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDelete",
        "normalized": "SqlDelete SqlTable[SqlExpr]",
        "package": "haskelldb",
        "partial": "Sql Delete",
        "signature": "SqlDelete SqlTable[SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDesc",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDesc",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlOrder",
        "fct-type": "function",
        "title": "SqlDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDesc",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDropDB",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDropDB String",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlDrop",
        "fct-type": "function",
        "title": "SqlDropDB"
      },
      "index": {
        "description": "Delete database",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDropDB",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Drop DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlDropTable",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a table named SqlTable\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlDropTable SqlTable",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlDrop",
        "fct-type": "function",
        "title": "SqlDropTable"
      },
      "index": {
        "description": "Delete table named SqlTable",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlDropTable",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Drop Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty select.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlEmpty",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "SqlEmpty"
      },
      "index": {
        "description": "Empty select",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlEmpty",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlInsert",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlInsert SqlTable [SqlColumn] [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlInsert",
        "fct-type": "function",
        "title": "SqlInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlInsert",
        "normalized": "SqlInsert SqlTable[SqlColumn][SqlExpr]",
        "package": "haskelldb",
        "partial": "Sql Insert",
        "signature": "SqlInsert SqlTable[SqlColumn][SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlInsertQuery",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlInsertQuery SqlTable [SqlColumn] SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlInsert",
        "fct-type": "function",
        "title": "SqlInsertQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlInsertQuery",
        "normalized": "SqlInsertQuery SqlTable[SqlColumn]SqlSelect",
        "package": "haskelldb",
        "partial": "Sql Insert Query",
        "signature": "SqlInsertQuery SqlTable[SqlColumn]SqlSelect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlSelect",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "SqlSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlSelect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlTable",
      "description": {
        "fct-descr": "\u003cp\u003eSelect a whole table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlTable SqlTable",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "SqlTable"
      },
      "index": {
        "description": "Select whole table",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlTable",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlType String",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlType",
        "fct-type": "function",
        "title": "SqlType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlType",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType1",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlType1 String Int",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlType",
        "fct-type": "function",
        "title": "SqlType1"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlType1",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlType2",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlType2 String Int Int",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlType",
        "fct-type": "function",
        "title": "SqlType2"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlType2",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Sql Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:SqlUpdate",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlUpdate SqlTable [(SqlColumn, SqlExpr)] [SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlUpdate",
        "fct-type": "function",
        "title": "SqlUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "SqlUpdate",
        "normalized": "SqlUpdate SqlTable[(SqlColumn,SqlExpr)][SqlExpr]",
        "package": "haskelldb",
        "partial": "Sql Update",
        "signature": "SqlUpdate SqlTable[(SqlColumn,SqlExpr)][SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:attrs",
      "description": {
        "fct-descr": "\u003cp\u003eresult\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[(SqlColumn, SqlExpr)]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "attrs"
      },
      "index": {
        "description": "result",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "attrs",
        "normalized": "[(SqlColumn,SqlExpr)]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(SqlColumn,SqlExpr)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:criteria",
      "description": {
        "fct-descr": "\u003cp\u003eWHERE\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[SqlExpr]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "criteria"
      },
      "index": {
        "description": "WHERE",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "criteria",
        "normalized": "[SqlExpr]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[SqlExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:extra",
      "description": {
        "fct-descr": "\u003cp\u003eTOP n, etc.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[String]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "extra"
      },
      "index": {
        "description": "TOP etc",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "extra",
        "normalized": "[String]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:foldSqlExpr",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a SqlExpr value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "(SqlColumn -\u003e t, String -\u003e t -\u003e t -\u003e t, String -\u003e t -\u003e t, String -\u003e t -\u003e t, String -\u003e [t] -\u003e t, String -\u003e [t] -\u003e t, String -\u003e t, [(t, t)] -\u003e t -\u003e t, [t] -\u003e t, SqlSelect -\u003e t, Maybe SqlName -\u003e t -\u003e t, t, t -\u003e t, String -\u003e t -\u003e t) -\u003e SqlExpr -\u003e t",
        "fct-source": "src/Database-HaskellDB-Sql.html#foldSqlExpr",
        "fct-type": "function",
        "title": "foldSqlExpr"
      },
      "index": {
        "description": "Transform SqlExpr value",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "foldSqlExpr",
        "normalized": "(SqlColumn-\u003ea,String-\u003ea-\u003ea-\u003ea,String-\u003ea-\u003ea,String-\u003ea-\u003ea,String-\u003e[a]-\u003ea,String-\u003e[a]-\u003ea,String-\u003ea,[(a,a)]-\u003ea-\u003ea,[a]-\u003ea,SqlSelect-\u003ea,Maybe SqlName-\u003ea-\u003ea,a,a-\u003ea,String-\u003ea-\u003ea)-\u003eSqlExpr-\u003ea",
        "package": "haskelldb",
        "partial": "Sql Expr",
        "signature": "(SqlColumn-\u003et,String-\u003et-\u003et-\u003et,String-\u003et-\u003et,String-\u003et-\u003et,String-\u003e[t]-\u003et,String-\u003e[t]-\u003et,String-\u003et,[(t,t)]-\u003et-\u003et,[t]-\u003et,SqlSelect-\u003et,Maybe SqlName-\u003et-\u003et,t,t-\u003et,String-\u003et-\u003et)-\u003eSqlExpr-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:foldSqlSelect",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a SqlSelect value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "([String] -\u003e [(SqlColumn, SqlExpr)] -\u003e [(SqlTable, t)] -\u003e [SqlExpr] -\u003e Maybe Mark -\u003e [(SqlExpr, SqlOrder)] -\u003e [String] -\u003e t, String -\u003e t -\u003e t -\u003e t, SqlTable -\u003e t, t) -\u003e SqlSelect -\u003e t",
        "fct-source": "src/Database-HaskellDB-Sql.html#foldSqlSelect",
        "fct-type": "function",
        "title": "foldSqlSelect"
      },
      "index": {
        "description": "Transform SqlSelect value",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "foldSqlSelect",
        "normalized": "([String]-\u003e[(SqlColumn,SqlExpr)]-\u003e[(SqlTable,a)]-\u003e[SqlExpr]-\u003eMaybe Mark-\u003e[(SqlExpr,SqlOrder)]-\u003e[String]-\u003ea,String-\u003ea-\u003ea-\u003ea,SqlTable-\u003ea,a)-\u003eSqlSelect-\u003ea",
        "package": "haskelldb",
        "partial": "Sql Select",
        "signature": "([String]-\u003e[(SqlColumn,SqlExpr)]-\u003e[(SqlTable,t)]-\u003e[SqlExpr]-\u003eMaybe Mark-\u003e[(SqlExpr,SqlOrder)]-\u003e[String]-\u003et,String-\u003et-\u003et-\u003et,SqlTable-\u003et,t)-\u003eSqlSelect-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:groupby",
      "description": {
        "fct-descr": "\u003cp\u003eGROUP BY\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "Maybe Mark",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "groupby"
      },
      "index": {
        "description": "GROUP BY",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "groupby",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:newSelect",
      "description": {
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "SqlSelect",
        "fct-source": "src/Database-HaskellDB-Sql.html#newSelect",
        "fct-type": "function",
        "title": "newSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "newSelect",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eDISTINCT, ALL etc.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[String]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "DISTINCT ALL etc",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "options",
        "normalized": "[String]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:orderby",
      "description": {
        "fct-descr": "\u003cp\u003eORDER BY\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[(SqlExpr, SqlOrder)]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "orderby"
      },
      "index": {
        "description": "ORDER BY",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "orderby",
        "normalized": "[(SqlExpr,SqlOrder)]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(SqlExpr,SqlOrder)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Sql.html#v:tables",
      "description": {
        "fct-descr": "\u003cp\u003eFROM\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.Sql",
        "fct-package": "haskelldb",
        "fct-signature": "[(SqlTable, SqlSelect)]",
        "fct-source": "src/Database-HaskellDB-Sql.html#SqlSelect",
        "fct-type": "function",
        "title": "tables"
      },
      "index": {
        "description": "FROM",
        "hierarchy": "Database HaskellDB Sql",
        "module": "Database.HaskellDB.Sql",
        "name": "tables",
        "normalized": "[(SqlTable,SqlSelect)]",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(SqlTable,SqlSelect)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Version.html#",
      "description": {
        "fct-module": "Database.HaskellDB.Version",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-Version.html",
        "fct-type": "module",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Version",
        "module": "Database.HaskellDB.Version",
        "name": "Version",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB-Version.html#v:version",
      "description": {
        "fct-module": "Database.HaskellDB.Version",
        "fct-package": "haskelldb",
        "fct-signature": "String",
        "fct-source": "src/Database-HaskellDB-Version.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB Version",
        "module": "Database.HaskellDB.Version",
        "name": "version",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskellDB is a Haskell library for expressing database queries and\n operations in a type safe and declarative way. HaskellDB compiles a\n relational algebra-like syntax into SQL, submits the operations to the\n database for processing, and returns the results as ordinary Haskell\n values.\n\u003c/p\u003e\u003cp\u003eThis is the main module that the user should \n import. Beside this module, the user should import a\n particular database binding (ie. \u003ca\u003eDatabase.HaskellDB.HSQL.ODBC\u003c/a\u003e) \n and database definitions.\n\u003c/p\u003e\u003cp\u003eHaskellDB was originally written by Daan Leijen and it's \n design is described in the paper Domain Specific Embedded \n Compilers, Daan Leijen and Erik Meijer. 2nd USENIX \n Conference on Domain-Specific Languages (DSL), Austin, \n USA, October 1999 (\u003ca\u003ehttp://www.usenix.org/events/dsl99/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis new version of HaskellDB was produced as a student project at\n Chalmers University of Technology in Gothenburg, Sweden. The aim of the\n project was to make HaskellDB a practically useful database library.\n That work is described in \n Student Paper: HaskellDB Improved, \n Bj&#246;rn Bringert, Anders H&#246;ckersten, Conny Andersson, Martin Andersson, \n Mary Bergman, Victor Blomqvist and Torbj&#246;rn Martin. \n In Proceedings of the ACM SIGPLAN 2004 Haskell Workshop, Snowbird, Utah, \n USA, September 22, 2004.\n (\u003ca\u003ehttp://haskelldb.sourceforge.net/haskelldb.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB.html",
        "fct-type": "module",
        "title": "HaskellDB"
      },
      "index": {
        "description": "HaskellDB is Haskell library for expressing database queries and operations in type safe and declarative way HaskellDB compiles relational algebra-like syntax into SQL submits the operations to the database for processing and returns the results as ordinary Haskell values This is the main module that the user should import Beside this module the user should import particular database binding ie Database.HaskellDB.HSQL.ODBC and database definitions HaskellDB was originally written by Daan Leijen and it design is described in the paper Domain Specific Embedded Compilers Daan Leijen and Erik Meijer nd USENIX Conference on Domain-Specific Languages DSL Austin USA October http www.usenix.org events dsl99 This new version of HaskellDB was produced as student project at Chalmers University of Technology in Gothenburg Sweden The aim of the project was to make HaskellDB practically useful database library That work is described in Student Paper HaskellDB Improved Bj rn Bringert Anders ckersten Conny Andersson Martin Andersson Mary Bergman Victor Blomqvist and Torbj rn Martin In Proceedings of the ACM SIGPLAN Haskell Workshop Snowbird Utah USA September http haskelldb.sourceforge.net haskelldb.pdf",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "HaskellDB",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Haskell DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Args",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to implement variable length arguments to \u003ccode\u003efunc\u003c/code\u003e, below.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-Query.html#Args",
        "fct-type": "class",
        "title": "Args"
      },
      "index": {
        "description": "Used to implement variable length arguments to func below",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Args",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Attr",
      "description": {
        "fct-descr": "\u003cp\u003eTyped attributes\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Attr",
        "fct-type": "data",
        "title": "Attr"
      },
      "index": {
        "description": "Typed attributes",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Attr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Database",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Database.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Database",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eType of normal expressions, contains the untyped PrimExpr.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "Type of normal expressions contains the untyped PrimExpr",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Expr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:ExprAggr",
      "description": {
        "fct-descr": "\u003cp\u003eType of aggregate expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#ExprAggr",
        "fct-type": "data",
        "title": "ExprAggr"
      },
      "index": {
        "description": "Type of aggregate expressions",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "ExprAggr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Expr Aggr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:HasField",
      "description": {
        "fct-descr": "\u003cp\u003eThe record \u003ccode\u003er\u003c/code\u003e has the field \u003ccode\u003ef\u003c/code\u003e if there is an instance of\n   \u003ccode\u003eHasField f r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#HasField",
        "fct-type": "class",
        "title": "HasField"
      },
      "index": {
        "description": "The record has the field if there is an instance of HasField",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "HasField",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Has Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:OrderExpr",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-PrimQuery.html#OrderExpr",
        "fct-type": "data",
        "title": "OrderExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "OrderExpr",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Order Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a query parameter. Left parameters are indexed\n by position, while right parameters are named.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB.html#Param",
        "fct-type": "type",
        "title": "Param"
      },
      "index": {
        "description": "Represents query parameter Left parameters are indexed by position while right parameters are named",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Param",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Query",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Query",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eThe type used for records. This is a function\n   that takes a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e so that the user does not have to \n   put a \u003ccode\u003e\u003ca\u003eRecNil\u003c/a\u003e\u003c/code\u003e at the end of every record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "type",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "The type used for records This is function that takes RecNil so that the user does not have to put RecNil at the end of every record",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Record",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Rel",
      "description": {
        "fct-descr": "\u003cp\u003eType of relations, contains the attributes\n   of the relation and an \u003ccode\u003eAlias\u003c/code\u003e to which the\n   attributes are renamed in the \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Rel",
        "fct-type": "data",
        "title": "Rel"
      },
      "index": {
        "description": "Type of relations contains the attributes of the relation and an Alias to which the attributes are renamed in the PrimQuery",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Rel",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Select",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "class",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#Select",
        "fct-type": "class",
        "title": "Select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Select",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eBasic tables, contains table name and an\n   association from attributes to attribute\n   names in the real table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "data",
        "fct-source": "src/Database-HaskellDB-Query.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "Basic tables contains table name and an association from attributes to attribute names in the real table",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "Table",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eField selection operator. It is overloaded so that\n   users (read HaskellDB) can redefine it for things\n   with phantom record types.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e f -\u003e a",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "Field selection operator It is overloaded so that users read HaskellDB can redefine it for things with phantom record types",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(!) !",
        "normalized": "a-\u003eb-\u003ec",
        "package": "haskelldb",
        "partial": "",
        "signature": "r-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-33-.",
      "description": {
        "fct-descr": "\u003cp\u003eThe (!.) operator selects over returned records from\n   the database (= rows)\n   Non-overloaded version of \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e. For backwards compatibility.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "r -\u003e f -\u003e a",
        "fct-source": "src/Database-HaskellDB-Database.html#%21.",
        "fct-type": "function",
        "title": "(!.)"
      },
      "index": {
        "description": "The operator selects over returned records from the database rows Non-overloaded version of For backwards compatibility",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(!.) !.",
        "normalized": "a-\u003eb-\u003ec",
        "package": "haskelldb",
        "partial": "",
        "signature": "r-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the field from a one-field record to another record.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Record (RecCons f a RecNil)-\u003e (b -\u003e c)-\u003e b -\u003e RecCons f a c",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Adds the field from one-field record to another record",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(#) #",
        "normalized": "Record(RecCons a b RecNil)-\u003e(c-\u003ed)-\u003ec-\u003eRecCons a b d",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record(RecCons f a RecNil)-\u003e(b-\u003ec)-\u003eb-\u003eRecCons f a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a record field.\n   Similar to '(.=.)', but gets the field label from an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a-\u003e e a-\u003e Record (RecCons f (e a) RecNil)",
        "fct-type": "function",
        "title": "(\u003c\u003c)"
      },
      "index": {
        "description": "Creates record field Similar to but gets the field label from an Attr",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(\u003c\u003c) \u003c\u003c",
        "normalized": "Attr a b-\u003ec b-\u003eRecord(RecCons a(c b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003ee a-\u003eRecord(RecCons f(e a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:-60--60--45-",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience operator for constructing records of constants.\n   Useful primarily with \u003ccode\u003einsert\u003c/code\u003e.\n   \u003ccode\u003ef \u003c\u003c- x\u003c/code\u003e is the same as \u003ccode\u003ef \u003c\u003c constant x\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a-\u003e a-\u003e Record (RecCons f (Expr a) RecNil)",
        "fct-type": "function",
        "title": "(\u003c\u003c-)"
      },
      "index": {
        "description": "Convenience operator for constructing records of constants Useful primarily with insert is the same as constant",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(\u003c\u003c-) \u003c\u003c-",
        "normalized": "Attr a b-\u003eb-\u003eRecord(RecCons a(Expr b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003ea-\u003eRecord(RecCons f(Expr a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003e\"Logical or\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e. OR in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "Logical or on Expr OR in SQL",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.||.) .||.",
        "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-37-.",
      "description": {
        "fct-descr": "\u003cp\u003eModulo\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%25.",
        "fct-type": "function",
        "title": "(.%.)"
      },
      "index": {
        "description": "Modulo",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.%.) .%.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003e\"Logical and\" on \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e, AND in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "Logical and on Expr AND in SQL",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.&&.) .&&.",
        "normalized": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.*.) .*.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-43--43-.",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two String-expressions. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr String",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2B%2B.",
        "fct-type": "function",
        "title": "(.++.)"
      },
      "index": {
        "description": "Concatenates two String-expressions",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.++.) .++.",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-43-.",
      "description": {
        "fct-descr": "\u003cp\u003eAddition\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2B.",
        "fct-type": "function",
        "title": "(.+.)"
      },
      "index": {
        "description": "Addition",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.+.) .+.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eSubtraction \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.-.",
        "fct-type": "function",
        "title": "(.-.)"
      },
      "index": {
        "description": "Subtraction",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.-.) .-.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-47-.",
      "description": {
        "fct-descr": "\u003cp\u003eDivision\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#.%2F.",
        "fct-type": "function",
        "title": "(./.)"
      },
      "index": {
        "description": "Division",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(./.) ./.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60--61-.",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C%3D.",
        "fct-type": "function",
        "title": "(.\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.\u003c=.) .\u003c=.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60--62-.",
      "description": {
        "fct-descr": "\u003cp\u003eInequality on Exprs, \u003ca/\u003e in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C%3E.",
        "fct-type": "function",
        "title": "(.\u003c\u003e.)"
      },
      "index": {
        "description": "Inequality on Exprs in SQL",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.\u003c\u003e.) .\u003c\u003e.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-60-.",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eEquality comparison on Exprs, = in SQL.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "Equality comparison on Exprs in SQL",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.==.) .==.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-62--61-.",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3E%3D.",
        "fct-type": "function",
        "title": "(.\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.\u003e=.) .\u003e=.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:.-62-.",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#.%3E.",
        "fct-type": "function",
        "title": "(.\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "(.\u003e.) .\u003e.",
        "normalized": "Expr a-\u003eExpr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_case",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a conditional expression.\n   Returns the value of the expression corresponding to the first \n   true condition. If none of the conditions are true, the value of\n   the else-expression is returned.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "[(Expr Bool, Expr a)]-\u003e Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "_case"
      },
      "index": {
        "description": "Creates conditional expression Returns the value of the expression corresponding to the first true condition If none of the conditions are true the value of the else-expression is returned",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_case",
        "normalized": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "[(Expr Bool,Expr a)]-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_default",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value of the column. Only works with \u003ccode\u003einsert\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "ExprDefault a",
        "fct-source": "src/Database-HaskellDB-Query.html#_default",
        "fct-type": "function",
        "title": "_default"
      },
      "index": {
        "description": "The default value of the column Only works with insert",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_default",
        "normalized": "",
        "package": "haskelldb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_in",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the value of the first operand is\n   equal to the value of any of the expressions in the \n   list operand. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e [Expr a] -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#_in",
        "fct-type": "function",
        "title": "_in"
      },
      "index": {
        "description": "Returns true if the value of the first operand is equal to the value of any of the expressions in the list operand",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_in",
        "normalized": "Expr a-\u003e[Expr a]-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003e[Expr a]-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_length",
      "description": {
        "fct-descr": "\u003cp\u003eGets the length of a string.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr Int",
        "fct-source": "src/Database-HaskellDB-Query.html#_length",
        "fct-type": "function",
        "title": "_length"
      },
      "index": {
        "description": "Gets the length of string",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_length",
        "normalized": "Expr String-\u003eExpr Int",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_max",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the highest value of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_max",
        "fct-type": "function",
        "title": "_max"
      },
      "index": {
        "description": "Returns the highest value of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_max",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_min",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the lowest value of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_min",
        "fct-type": "function",
        "title": "_min"
      },
      "index": {
        "description": "Returns the lowest value of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_min",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_not",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of an Expr Bool.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#_not",
        "fct-type": "function",
        "title": "_not"
      },
      "index": {
        "description": "The inverse of an Expr Bool",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_not",
        "normalized": "Expr Bool-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:_sum",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the total sum of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#_sum",
        "fct-type": "function",
        "title": "_sum"
      },
      "index": {
        "description": "Returns the total sum of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "_sum",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:asc",
      "description": {
        "fct-descr": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in ascending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#asc",
        "fct-type": "function",
        "title": "asc"
      },
      "index": {
        "description": "Use this together with the function order to order the results of query in ascending order Takes relation and an attribute of that relation which is used for the ordering",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "asc",
        "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
        "package": "haskelldb",
        "partial": "",
        "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:avg",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the average of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#avg",
        "fct-type": "function",
        "title": "avg"
      },
      "index": {
        "description": "Returns the average of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "avg",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:cast",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003eCAST\u003c/code\u003e expression for the given\n expression, using the argument given as the destination\n type. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "String-\u003e Expr a-\u003e Expr b",
        "fct-type": "function",
        "title": "cast"
      },
      "index": {
        "description": "Generates CAST expression for the given expression using the argument given as the destination type",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "cast",
        "normalized": "String-\u003eExpr a-\u003eExpr b",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eExpr a-\u003eExpr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the concatenation of two String-expressions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr String",
        "fct-source": "src/Database-HaskellDB-Query.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Produces the concatenation of two String-expressions",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "cat",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr String",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eCoerce the type of an expression\n to another type. Does not affect the actual\n primitive value - only the \u003ccode\u003ephantom\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr b",
        "fct-type": "function",
        "title": "coerce"
      },
      "index": {
        "description": "Coerce the type of an expression to another type Does not affect the actual primitive value only the phantom type",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "coerce",
        "normalized": "Expr a-\u003eExpr b",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constExpr",
      "description": {
        "fct-descr": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constExpr",
        "fct-type": "function",
        "title": "constExpr"
      },
      "index": {
        "description": "Turn constant data into nullable expression Same as constant Just",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "constExpr",
        "normalized": "Expr a-\u003eExpr(Maybe a)",
        "package": "haskelldb",
        "partial": "Expr",
        "signature": "Expr a-\u003eExpr(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constNull",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a null value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constNull",
        "fct-type": "function",
        "title": "constNull"
      },
      "index": {
        "description": "Represents null value",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "constNull",
        "normalized": "",
        "package": "haskelldb",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constVal",
      "description": {
        "fct-descr": "\u003cp\u003eTurn constant data into a nullable expression. \n   Same as \u003ccode\u003econstant . Just\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr (Maybe a)",
        "fct-source": "src/Database-HaskellDB-Query.html#constVal",
        "fct-type": "function",
        "title": "constVal"
      },
      "index": {
        "description": "Turn constant data into nullable expression Same as constant Just",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "constVal",
        "normalized": "a-\u003eExpr(Maybe a)",
        "package": "haskelldb",
        "partial": "Val",
        "signature": "a-\u003eExpr(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a constant expression from a haskell value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "Creates constant expression from haskell value",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "constant",
        "normalized": "a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a single-field record from an attribute and a table. Useful\n for building projections that will re-use the same attribute name. \u003ccode\u003ecopy attr tbl\u003c/code\u003e is\n equivalent to:\n\u003c/p\u003e\u003cpre\u003eattr .=. (tbl .!. attr)\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Attr f a -\u003e Rel r -\u003e Record (RecCons f (Expr a) RecNil)",
        "fct-source": "src/Database-HaskellDB-Query.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Creates single-field record from an attribute and table Useful for building projections that will re-use the same attribute name copy attr tbl is equivalent to attr tbl attr",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "copy",
        "normalized": "Attr a b-\u003eRel c-\u003eRecord(RecCons a(Expr b)RecNil)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Attr f a-\u003eRel r-\u003eRecord(RecCons f(Expr a)RecNil)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:copyAll",
      "description": {
        "fct-descr": "\u003cp\u003eCopies all columns in the relation given. Useful for appending\n the remaining columns in a table to a projection. For example:\n\u003c/p\u003e\u003cpre\u003e   query = do\n     tbl \u003c- table some_table\n     project $ copyAll tbl\n\u003c/pre\u003e\u003cp\u003ewill add all columns in \u003ca\u003esome_table\u003c/a\u003e to the query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Record r",
        "fct-source": "src/Database-HaskellDB-Query.html#copyAll",
        "fct-type": "function",
        "title": "copyAll"
      },
      "index": {
        "description": "Copies all columns in the relation given Useful for appending the remaining columns in table to projection For example query do tbl table some table project copyAll tbl will add all columns in some table to the query",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "copyAll",
        "normalized": "Rel a-\u003eRecord a",
        "package": "haskelldb",
        "partial": "All",
        "signature": "Rel r-\u003eRecord r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of records (=rows) in a query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr Int",
        "fct-source": "src/Database-HaskellDB-Query.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Returns the number of records rows in query",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "count",
        "normalized": "Expr a-\u003eExprAggr Int",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003edeletes a bunch of records\t  \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e IO ()",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "deletes bunch of records",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "delete",
        "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:desc",
      "description": {
        "fct-descr": "\u003cp\u003eUse this together with the function \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e to \n order the results of a query in descending order.\n Takes a relation and an attribute of that relation, which\n is used for the ordering.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Rel r -\u003e Attr f a -\u003e OrderExpr",
        "fct-source": "src/Database-HaskellDB-Query.html#desc",
        "fct-type": "function",
        "title": "desc"
      },
      "index": {
        "description": "Use this together with the function order to order the results of query in descending order Takes relation and an attribute of that relation which is used for the ordering",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "desc",
        "normalized": "Rel a-\u003eAttr b c-\u003eOrderExpr",
        "package": "haskelldb",
        "partial": "",
        "signature": "Rel r-\u003eAttr f a-\u003eOrderExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:describe",
      "description": {
        "fct-descr": "\u003cp\u003eList all columns in a table, along with their types\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e TableName-\u003e IO [(Attribute, FieldDesc)]",
        "fct-type": "function",
        "title": "describe"
      },
      "index": {
        "description": "List all columns in table along with their types",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "describe",
        "normalized": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTableName-\u003eIO[(Attribute,FieldDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:divide",
      "description": {
        "fct-descr": "\u003cp\u003eNot in SQL92.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#divide",
        "fct-type": "function",
        "title": "divide"
      },
      "index": {
        "description": "Not in SQL92",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "divide",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:fromNull",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a default value a and a nullable value. If the value is NULL,\n   the default value is returned, otherwise the value itself is returned.\n   Simliar to \u003ccode\u003efromMaybe\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr (Maybe a)-\u003e Expr a",
        "fct-type": "function",
        "title": "fromNull"
      },
      "index": {
        "description": "Takes default value and nullable value If the value is NULL the default value is returned otherwise the value itself is returned Simliar to fromMaybe",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "fromNull",
        "normalized": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr(Maybe a)-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:fromVal",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to fromNull, but takes a \n value argument rather than an Expr.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "a -\u003e Expr (Maybe a) -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#fromVal",
        "fct-type": "function",
        "title": "fromVal"
      },
      "index": {
        "description": "Similar to fromNull but takes value argument rather than an Expr",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "fromVal",
        "normalized": "a-\u003eExpr(Maybe a)-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Val",
        "signature": "a-\u003eExpr(Maybe a)-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:func",
      "description": {
        "fct-descr": "\u003cp\u003eCan be used to define SQL functions which will\nappear in queries. Each argument for the function is specified by its own Expr value. \nExamples include:\n\u003c/p\u003e\u003cpre\u003e  lower :: Expr a -\u003e Expr (Maybe String) \n  lower str = func \"lower\" str\n\u003c/pre\u003e\u003cp\u003eThe arguments to the function do not have to be Expr if they can\nbe converted to Expr:\n\u003c/p\u003e\u003cpre\u003e  data DatePart = Day | Century deriving Show \n\u003c/pre\u003e\u003cpre\u003e  datePart :: DatePart -\u003e Expr (Maybe CalendarTime) -\u003e Expr (Maybe Int) \n  datePart date col = func \"date_part\" (constant $ show date) col\n\u003c/pre\u003e\u003cp\u003eAggregate functions can also be defined. For example:\n\u003c/p\u003e\u003cpre\u003e  every :: Expr Bool -\u003e ExprAggr Bool \n  every col = func \"every\" col\n\u003c/pre\u003e\u003cp\u003eAggregates are implemented to always take one argument, so any attempt to\ndefine an aggregate with any more or less arguments will result in an error.\n\u003c/p\u003e\u003cp\u003eNote that type signatures are usually required for each function defined,\nunless the arguments can be inferred.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Database-HaskellDB-Query.html#func",
        "fct-type": "function",
        "title": "func"
      },
      "index": {
        "description": "Can be used to define SQL functions which will appear in queries Each argument for the function is specified by its own Expr value Examples include lower Expr Expr Maybe String lower str func lower str The arguments to the function do not have to be Expr if they can be converted to Expr data DatePart Day Century deriving Show datePart DatePart Expr Maybe CalendarTime Expr Maybe Int datePart date col func date part constant show date col Aggregate functions can also be defined For example every Expr Bool ExprAggr Bool every col func every col Aggregates are implemented to always take one argument so any attempt to define an aggregate with any more or less arguments will result in an error Note that type signatures are usually required for each function defined unless the arguments can be inferred",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "func",
        "normalized": "String-\u003ea",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a record into a table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Table er -\u003e Record r -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts record into table",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "insert",
        "normalized": "Database-\u003eTable a-\u003eRecord b-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable er-\u003eRecord r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:insertQuery",
      "description": {
        "fct-descr": "\u003cp\u003eInserts values from a query into a table\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Table r -\u003e Query (Rel r) -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-Database.html#insertQuery",
        "fct-type": "function",
        "title": "insertQuery"
      },
      "index": {
        "description": "Inserts values from query into table",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "insertQuery",
        "normalized": "Database-\u003eTable a-\u003eQuery(Rel a)-\u003eIO()",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Database-\u003eTable r-\u003eQuery(Rel r)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:intersect",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records which are present in both relations.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#intersect",
        "fct-type": "function",
        "title": "intersect"
      },
      "index": {
        "description": "Return all records which are present in both relations",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "intersect",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:isNull",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the expression is Null.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "Returns true if the expression is Null",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "isNull",
        "normalized": "Expr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:like",
      "description": {
        "fct-descr": "\u003cp\u003eThe HaskellDB counterpart to the SQL LIKE keyword.\n In the expresions, % is a wildcard representing any characters\n in the same position relavtive to the given characters and\n _ is a wildcard representing one character e.g.\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEFFF\") (constant \"AB%F_F\")\n\u003c/pre\u003e\u003cp\u003eis true while\n\u003c/p\u003e\u003cpre\u003e like (constant \"ABCDEF\") (constant \"AC%F\") \n\u003c/pre\u003e\u003cp\u003eis false.\n\u003c/p\u003e\u003cp\u003eNote that SQL92 does not specify whether LIKE is case-sensitive or not.\n Different database systems implement this differently.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr String -\u003e Expr String -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#like",
        "fct-type": "function",
        "title": "like"
      },
      "index": {
        "description": "The HaskellDB counterpart to the SQL LIKE keyword In the expresions is wildcard representing any characters in the same position relavtive to the given characters and is wildcard representing one character e.g like constant ABCDEFFF constant AB is true while like constant ABCDEF constant AC is false Note that SQL92 does not specify whether LIKE is case-sensitive or not Different database systems implement this differently",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "like",
        "normalized": "Expr String-\u003eExpr String-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr String-\u003eExpr String-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:literal",
      "description": {
        "fct-descr": "\u003cp\u003eInserts the string literally - no escaping, no quoting.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "String -\u003e Expr a",
        "fct-source": "src/Database-HaskellDB-Query.html#literal",
        "fct-type": "function",
        "title": "literal"
      },
      "index": {
        "description": "Inserts the string literally no escaping no quoting",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "literal",
        "normalized": "String-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "String-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:minus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records from the first relation that are not \n   present in the second relation.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#minus",
        "fct-type": "function",
        "title": "minus"
      },
      "index": {
        "description": "Return all records from the first relation that are not present in the second relation",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "minus",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:namedParam",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a named parameter with a default value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Name-\u003e Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "namedParam"
      },
      "index": {
        "description": "Create named parameter with default value",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "namedParam",
        "normalized": "Name-\u003eExpr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "Param",
        "signature": "Name-\u003eExpr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:notNull",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eisNull\u003c/a\u003e\u003c/code\u003e, returns false\n if the expression supplied is Null.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e Expr Bool",
        "fct-source": "src/Database-HaskellDB-Query.html#notNull",
        "fct-type": "function",
        "title": "notNull"
      },
      "index": {
        "description": "The inverse of isNull returns false if the expression supplied is Null",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "notNull",
        "normalized": "Expr a-\u003eExpr Bool",
        "package": "haskelldb",
        "partial": "Null",
        "signature": "Expr a-\u003eExpr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:order",
      "description": {
        "fct-descr": "\u003cp\u003eOrder the results of a query.\n Use this with the \u003ccode\u003e\u003ca\u003easc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edesc\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "[OrderExpr] -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#order",
        "fct-type": "function",
        "title": "order"
      },
      "index": {
        "description": "Order the results of query Use this with the asc or desc functions",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "order",
        "normalized": "[OrderExpr]-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "[OrderExpr]-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an anonymous parameter with a default value.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a-\u003e Expr a",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "Create an anonymous parameter with default value",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "param",
        "normalized": "Expr a-\u003eExpr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a subset of the columns in the table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Record r -\u003e Query (Rel er)",
        "fct-source": "src/Database-HaskellDB-Query.html#project",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "Specifies subset of the columns in the table",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "project",
        "normalized": "Record a-\u003eQuery(Rel b)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Record r-\u003eQuery(Rel er)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eperforms a query on a database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database -\u003e Query (Rel er) -\u003e IO [Record vr]",
        "fct-source": "src/Database-HaskellDB-Database.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "performs query on database",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "query",
        "normalized": "Database-\u003eQuery(Rel a)-\u003eIO[Record b]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eQuery(Rel er)-\u003eIO[Record vr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:queryParams",
      "description": {
        "fct-descr": "\u003cp\u003eGet paramaters from a query in order.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e [Param]",
        "fct-source": "src/Database-HaskellDB.html#queryParams",
        "fct-type": "function",
        "title": "queryParams"
      },
      "index": {
        "description": "Get paramaters from query in order",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "queryParams",
        "normalized": "Query(Rel a)-\u003e[Param]",
        "package": "haskelldb",
        "partial": "Params",
        "signature": "Query(Rel r)-\u003e[Param]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:recCat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two records.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "r1 -\u003e r2 -\u003e r3",
        "fct-source": "src/Database-HaskellDB-HDBRec.html#recCat",
        "fct-type": "function",
        "title": "recCat"
      },
      "index": {
        "description": "Concatenates two records",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "recCat",
        "normalized": "a-\u003ea-\u003ea",
        "package": "haskelldb",
        "partial": "Cat",
        "signature": "r-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:restrict",
      "description": {
        "fct-descr": "\u003cp\u003eRestricts the records to only those who evaluates the \n expression to True.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr Bool -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#restrict",
        "fct-type": "function",
        "title": "restrict"
      },
      "index": {
        "description": "Restricts the records to only those who evaluates the expression to True",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "restrict",
        "normalized": "Expr Bool-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr Bool-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showQuery",
      "description": {
        "fct-descr": "\u003cp\u003eShows the optimized \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e String",
        "fct-source": "src/Database-HaskellDB.html#showQuery",
        "fct-type": "function",
        "title": "showQuery"
      },
      "index": {
        "description": "Shows the optimized PrimQuery",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "showQuery",
        "normalized": "Query(Rel a)-\u003eString",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query(Rel r)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showQueryUnOpt",
      "description": {
        "fct-descr": "\u003cp\u003eShows the unoptimized \u003ccode\u003e\u003ca\u003ePrimQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e String",
        "fct-source": "src/Database-HaskellDB.html#showQueryUnOpt",
        "fct-type": "function",
        "title": "showQueryUnOpt"
      },
      "index": {
        "description": "Shows the unoptimized PrimQuery",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "showQueryUnOpt",
        "normalized": "Query(Rel a)-\u003eString",
        "package": "haskelldb",
        "partial": "Query Un Opt",
        "signature": "Query(Rel r)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showSql",
      "description": {
        "fct-descr": "\u003cp\u003eShows the optimized SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e String",
        "fct-source": "src/Database-HaskellDB.html#showSql",
        "fct-type": "function",
        "title": "showSql"
      },
      "index": {
        "description": "Shows the optimized SQL query",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "showSql",
        "normalized": "Query(Rel a)-\u003eString",
        "package": "haskelldb",
        "partial": "Sql",
        "signature": "Query(Rel r)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:showSqlUnOpt",
      "description": {
        "fct-descr": "\u003cp\u003eShows the unoptimized SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e String",
        "fct-source": "src/Database-HaskellDB.html#showSqlUnOpt",
        "fct-type": "function",
        "title": "showSqlUnOpt"
      },
      "index": {
        "description": "Shows the unoptimized SQL query",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "showSqlUnOpt",
        "normalized": "Query(Rel a)-\u003eString",
        "package": "haskelldb",
        "partial": "Sql Un Opt",
        "signature": "Query(Rel r)-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:stddev",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the standard deviation of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#stddev",
        "fct-type": "function",
        "title": "stddev"
      },
      "index": {
        "description": "Returns the standard deviation of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "stddev",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:stddevP",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#stddevP",
        "fct-type": "function",
        "title": "stddevP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "stddevP",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:subQuery",
      "description": {
        "fct-descr": "\u003cp\u003eAllows a subquery to be created between another query and\n this query. Normally query definition is associative and query definition\n is interleaved. This combinator ensures the given query is\n added as a whole piece.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#subQuery",
        "fct-type": "function",
        "title": "subQuery"
      },
      "index": {
        "description": "Allows subquery to be created between another query and this query Normally query definition is associative and query definition is interleaved This combinator ensures the given query is added as whole piece",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "subQuery",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "Query",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:table",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records from a specific table.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Table r -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#table",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "Return all records from specific table",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "table",
        "normalized": "Table a-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Table r-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:tables",
      "description": {
        "fct-descr": "\u003cp\u003eList all tables in the database\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e IO [TableName]",
        "fct-type": "function",
        "title": "tables"
      },
      "index": {
        "description": "List all tables in the database",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "tables",
        "normalized": "Database-\u003eIO[TableName]",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eIO[TableName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:toStr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a bounded string to a real string.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "s -\u003e d",
        "fct-source": "src/Database-HaskellDB-Query.html#toStr",
        "fct-type": "function",
        "title": "toStr"
      },
      "index": {
        "description": "Convert bounded string to real string",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "toStr",
        "normalized": "a-\u003eb",
        "package": "haskelldb",
        "partial": "Str",
        "signature": "s-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the n topmost records.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Int -\u003e Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "Return the topmost records",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "top",
        "normalized": "Int-\u003eQuery()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Int-\u003eQuery()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:transaction",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms some database action in a transaction. If no exception is thrown,\n   the changes are committed. \n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "transaction"
      },
      "index": {
        "description": "Performs some database action in transaction If no exception is thrown the changes are committed",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "transaction",
        "normalized": "Database-\u003eIO a-\u003eIO a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all records which are present in at least\n   one of the relations.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query (Rel r) -\u003e Query (Rel r) -\u003e Query (Rel r)",
        "fct-source": "src/Database-HaskellDB-Query.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Return all records which are present in at least one of the relations",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "union",
        "normalized": "Query(Rel a)-\u003eQuery(Rel a)-\u003eQuery(Rel a)",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query(Rel r)-\u003eQuery(Rel r)-\u003eQuery(Rel r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:unique",
      "description": {
        "fct-descr": "\u003cp\u003eRestricts the relation given to only return unique records. Upshot\n is all projected attributes will be \u003ccode\u003egrouped\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Query ()",
        "fct-source": "src/Database-HaskellDB-Query.html#unique",
        "fct-type": "function",
        "title": "unique"
      },
      "index": {
        "description": "Restricts the relation given to only return unique records Upshot is all projected attributes will be grouped",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "unique",
        "normalized": "Query()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Query()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates records\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Database-\u003e Table r-\u003e (Rel r -\u003e Expr Bool)-\u003e (Rel r -\u003e Record s)-\u003e IO ()",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Updates records",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "update",
        "normalized": "Database-\u003eTable a-\u003e(Rel a-\u003eExpr Bool)-\u003e(Rel a-\u003eRecord b)-\u003eIO()",
        "package": "haskelldb",
        "partial": "",
        "signature": "Database-\u003eTable r-\u003e(Rel r-\u003eExpr Bool)-\u003e(Rel r-\u003eRecord s)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the standard variance of a column.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "Returns the standard variance of column",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "variance",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb/docs/Database-HaskellDB.html#v:varianceP",
      "description": {
        "fct-module": "Database.HaskellDB",
        "fct-package": "haskelldb",
        "fct-signature": "Expr a -\u003e ExprAggr a",
        "fct-source": "src/Database-HaskellDB-Query.html#varianceP",
        "fct-type": "function",
        "title": "varianceP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB",
        "module": "Database.HaskellDB",
        "name": "varianceP",
        "normalized": "Expr a-\u003eExprAggr a",
        "package": "haskelldb",
        "partial": "",
        "signature": "Expr a-\u003eExprAggr a"
      }
    }
  }
]