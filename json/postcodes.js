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
        "word": "postcodes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "Postcodes",
          "package": "postcodes",
          "source": "src/Data-Locations-Postcodes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "Postcodes",
          "package": "postcodes",
          "partial": "Postcodes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "Postcode",
          "package": "postcodes",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "Postcode",
          "package": "postcodes",
          "partial": "Postcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#t:Postcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "Postcode",
          "package": "postcodes",
          "signature": "Postcode",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "Postcode",
          "package": "postcodes",
          "partial": "Postcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:Postcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "_constituency",
          "package": "postcodes",
          "signature": "Maybe String",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "_constituency",
          "package": "postcodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:_constituency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "_district",
          "package": "postcodes",
          "signature": "Maybe String",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "_district",
          "package": "postcodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:_district"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "_latitude",
          "package": "postcodes",
          "signature": "Float",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "_latitude",
          "package": "postcodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:_latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "_longitude",
          "package": "postcodes",
          "signature": "Float",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "_longitude",
          "package": "postcodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:_longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Locations.Postcodes",
          "name": "_postcode",
          "package": "postcodes",
          "signature": "String",
          "source": "src/Data-Locations-Postcodes.html#Postcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "_postcode",
          "package": "postcodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:_postcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a Postcode for the postcode string. This uses the network\n\u003c/p\u003e",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcode",
          "package": "postcodes",
          "signature": "String-\u003e IO (Maybe Postcode)",
          "type": "function"
        },
        "index": {
          "description": "Return Postcode for the postcode string This uses the network",
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcode",
          "normalized": "String-\u003eIO(Maybe Postcode)",
          "package": "postcodes",
          "partial": "Postcode",
          "signature": "String-\u003eIO(Maybe Postcode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:getPostcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the postcode at the given latitude and longitude\n\u003c/p\u003e",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcodeAtLocation",
          "package": "postcodes",
          "signature": "Float-\u003e Float-\u003e IO (Maybe Postcode)",
          "type": "function"
        },
        "index": {
          "description": "Find the postcode at the given latitude and longitude",
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcodeAtLocation",
          "normalized": "Float-\u003eFloat-\u003eIO(Maybe Postcode)",
          "package": "postcodes",
          "partial": "Postcode At Location",
          "signature": "Float-\u003eFloat-\u003eIO(Maybe Postcode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:getPostcodeAtLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all the postcodes within a given range and return a postcode and the distance for each. This uses the network\n\u003c/p\u003e",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcodesInRange",
          "package": "postcodes",
          "signature": "String-\u003e Float-\u003e IO (Maybe [(Float, Postcode)])",
          "type": "function"
        },
        "index": {
          "description": "Find all the postcodes within given range and return postcode and the distance for each This uses the network",
          "hierarchy": "Data Locations Postcodes",
          "module": "Data.Locations.Postcodes",
          "name": "getPostcodesInRange",
          "normalized": "String-\u003eFloat-\u003eIO(Maybe[(Float,Postcode)])",
          "package": "postcodes",
          "partial": "Postcodes In Range",
          "signature": "String-\u003eFloat-\u003eIO(Maybe[(Float,Postcode)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postcodes/docs/Data-Locations-Postcodes.html#v:getPostcodesInRange"
      }
    }
  ]
]