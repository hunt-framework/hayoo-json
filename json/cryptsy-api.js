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
        "word": "cryptsy-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest for a single market by market id.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Market.html",
          "type": "module"
        },
        "index": {
          "description": "Request for single market by market id",
          "hierarchy": "Cryptsy API Public Market",
          "module": "Cryptsy.API.Public.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "partial": "Market",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Market.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle market API request\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Market",
          "name": "singleMarket",
          "package": "cryptsy-api",
          "signature": "Text-\u003e PubCryptsy (GMarket p q dt t)",
          "type": "function"
        },
        "index": {
          "description": "single market API request",
          "hierarchy": "Cryptsy API Public Market",
          "module": "Cryptsy.API.Public.Market",
          "name": "singleMarket",
          "normalized": "Text-\u003ePubCryptsy(GMarket a b c d)",
          "package": "cryptsy-api",
          "partial": "Market",
          "signature": "Text-\u003ePubCryptsy(GMarket p q dt t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Market.html#v:singleMarket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest for new-style market data, without ambiguous keys\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.MarketData.New",
          "name": "New",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-MarketData-New.html",
          "type": "module"
        },
        "index": {
          "description": "Request for new-style market data without ambiguous keys",
          "hierarchy": "Cryptsy API Public MarketData New",
          "module": "Cryptsy.API.Public.MarketData.New",
          "name": "New",
          "package": "cryptsy-api",
          "partial": "New",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-MarketData-New.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest all markets.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.MarketData.New",
          "name": "marketData",
          "package": "cryptsy-api",
          "signature": "PubCryptsy (GMarketData p q dt t)",
          "source": "src/Cryptsy-API-Public-MarketData-New.html#marketData",
          "type": "function"
        },
        "index": {
          "description": "Request all markets",
          "hierarchy": "Cryptsy API Public MarketData New",
          "module": "Cryptsy.API.Public.MarketData.New",
          "name": "marketData",
          "package": "cryptsy-api",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-MarketData-New.html#v:marketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest for market data in old format, with ambiguous keys\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.MarketData.Old",
          "name": "Old",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-MarketData-Old.html",
          "type": "module"
        },
        "index": {
          "description": "Request for market data in old format with ambiguous keys",
          "hierarchy": "Cryptsy API Public MarketData Old",
          "module": "Cryptsy.API.Public.MarketData.Old",
          "name": "Old",
          "package": "cryptsy-api",
          "partial": "Old",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-MarketData-Old.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest all markets in old format.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.MarketData.Old",
          "name": "oldMarketData",
          "package": "cryptsy-api",
          "signature": "PubCryptsy (GMarketData p q dt t)",
          "source": "src/Cryptsy-API-Public-MarketData-Old.html#oldMarketData",
          "type": "function"
        },
        "index": {
          "description": "Request all markets in old format",
          "hierarchy": "Cryptsy API Public MarketData Old",
          "module": "Cryptsy.API.Public.MarketData.Old",
          "name": "oldMarketData",
          "package": "cryptsy-api",
          "partial": "Market Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-MarketData-Old.html#v:oldMarketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest for a single order book by market id.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-OrderBook.html",
          "type": "module"
        },
        "index": {
          "description": "Request for single order book by market id",
          "hierarchy": "Cryptsy API Public OrderBook",
          "module": "Cryptsy.API.Public.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderBook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle orderbook API request\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.OrderBook",
          "name": "singleOrderBook",
          "package": "cryptsy-api",
          "signature": "Text-\u003e PubCryptsy (GOrderBook p q t)",
          "type": "function"
        },
        "index": {
          "description": "single orderbook API request",
          "hierarchy": "Cryptsy API Public OrderBook",
          "module": "Cryptsy.API.Public.OrderBook",
          "name": "singleOrderBook",
          "normalized": "Text-\u003ePubCryptsy(GOrderBook a b c)",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "signature": "Text-\u003ePubCryptsy(GOrderBook p q t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderBook.html#v:singleOrderBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType and request for order book for all markets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-OrderData.html",
          "type": "module"
        },
        "index": {
          "description": "Type and request for order book for all markets",
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "partial": "Order Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral order data parameterized by types for prices, quantities,\n and totals (price * quantity)\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "GOrderData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-OrderData.html#GOrderData",
          "type": "newtype"
        },
        "index": {
          "description": "general order data parameterized by types for prices quantities and totals price quantity",
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "GOrderData",
          "package": "cryptsy-api",
          "partial": "GOrder Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#t:GOrderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault order data\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-OrderData.html#OrderData",
          "type": "type"
        },
        "index": {
          "description": "default order data",
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "partial": "Order Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#t:OrderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "signature": "OrderData",
          "source": "src/Cryptsy-API-Public-OrderData.html#GOrderData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "OrderData",
          "package": "cryptsy-api",
          "partial": "Order Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#v:OrderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.OrderData",
          "name": "orderBooks",
          "package": "cryptsy-api",
          "signature": "HashMap Text (GOrderBook p q t)",
          "source": "src/Cryptsy-API-Public-OrderData.html#GOrderData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "orderBooks",
          "package": "cryptsy-api",
          "partial": "Books",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#v:orderBooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest full order book for all markets.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "orderData",
          "package": "cryptsy-api",
          "signature": "PubCryptsy (GOrderData p q t)",
          "source": "src/Cryptsy-API-Public-OrderData.html#orderData",
          "type": "function"
        },
        "index": {
          "description": "Request full order book for all markets",
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "orderData",
          "package": "cryptsy-api",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#v:orderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild parser for multiple orderbooks from parser for single orderbook.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "parseOrderData",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser (GOrderBook p q t))-\u003e Value-\u003e Parser (GOrderData p q t)",
          "type": "function"
        },
        "index": {
          "description": "Build parser for multiple orderbooks from parser for single orderbook",
          "hierarchy": "Cryptsy API Public OrderData",
          "module": "Cryptsy.API.Public.OrderData",
          "name": "parseOrderData",
          "normalized": "(Value-\u003eParser(GOrderBook a b c))-\u003eValue-\u003eParser(GOrderData a b c)",
          "package": "cryptsy-api",
          "partial": "Order Data",
          "signature": "(Value-\u003eParser(GOrderBook p q t))-\u003eValue-\u003eParser(GOrderData p q t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-OrderData.html#v:parseOrderData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSum type for any error conditions in a API request.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "Error",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Sum type for any error conditions in API request",
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "Error",
          "package": "cryptsy-api",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror conditions w/ debugging information for an API request\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "CryptsyError",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "data"
        },
        "index": {
          "description": "error conditions debugging information for an API request",
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "CryptsyError",
          "package": "cryptsy-api",
          "partial": "Cryptsy Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#t:CryptsyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "BadResponse",
          "package": "cryptsy-api",
          "signature": "BadResponse",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "BadResponse",
          "package": "cryptsy-api",
          "partial": "Bad Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:BadResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "BadURL",
          "package": "cryptsy-api",
          "signature": "BadURL",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "BadURL",
          "package": "cryptsy-api",
          "partial": "Bad URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:BadURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "ErrorResponse",
          "package": "cryptsy-api",
          "signature": "ErrorResponse",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "ErrorResponse",
          "package": "cryptsy-api",
          "partial": "Error Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:ErrorResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "FailParseResponse",
          "package": "cryptsy-api",
          "signature": "FailParseResponse",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "FailParseResponse",
          "package": "cryptsy-api",
          "partial": "Fail Parse Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:FailParseResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "FailParseReturn",
          "package": "cryptsy-api",
          "signature": "FailParseReturn",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "FailParseReturn",
          "package": "cryptsy-api",
          "partial": "Fail Parse Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:FailParseReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "UnsuccessfulResponse",
          "package": "cryptsy-api",
          "signature": "UnsuccessfulResponse",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "UnsuccessfulResponse",
          "package": "cryptsy-api",
          "partial": "Unsuccessful Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:UnsuccessfulResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "badResponse",
          "package": "cryptsy-api",
          "signature": "Response ByteString",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "badResponse",
          "package": "cryptsy-api",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:badResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "badURL",
          "package": "cryptsy-api",
          "signature": "String",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "badURL",
          "package": "cryptsy-api",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:badURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "dataValue",
          "package": "cryptsy-api",
          "signature": "Value",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "dataValue",
          "package": "cryptsy-api",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:dataValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "errorMessage",
          "package": "cryptsy-api",
          "signature": "String",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "errorMessage",
          "package": "cryptsy-api",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "errorValue",
          "package": "cryptsy-api",
          "signature": "Value",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "errorValue",
          "package": "cryptsy-api",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:errorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "jsonResponse",
          "package": "cryptsy-api",
          "signature": "Value",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "jsonResponse",
          "package": "cryptsy-api",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:jsonResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "responseBody",
          "package": "cryptsy-api",
          "signature": "ByteString",
          "source": "src/Cryptsy-API-Public-Types-Error.html#CryptsyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Error",
          "module": "Cryptsy.API.Public.Types.Error",
          "name": "responseBody",
          "package": "cryptsy-api",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Error.html#v:responseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for individual market information returned from API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Market.html",
          "type": "module"
        },
        "index": {
          "description": "Type for individual market information returned from API",
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "partial": "Market",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneralized market\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "GMarket",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "data"
        },
        "index": {
          "description": "generalized market",
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "GMarket",
          "package": "cryptsy-api",
          "partial": "GMarket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#t:GMarket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault market\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Market.html#Market",
          "type": "type"
        },
        "index": {
          "description": "default market",
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "partial": "Market",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#t:Market"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "signature": "Market",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "Market",
          "package": "cryptsy-api",
          "partial": "Market",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:Market"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktBuyOrders",
          "package": "cryptsy-api",
          "signature": "Vector (GOrder p q t)",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktBuyOrders",
          "package": "cryptsy-api",
          "partial": "Buy Orders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktBuyOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLabel",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLabel",
          "package": "cryptsy-api",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLastTradePrice",
          "package": "cryptsy-api",
          "signature": "p",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLastTradePrice",
          "package": "cryptsy-api",
          "partial": "Last Trade Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktLastTradePrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLastTradeTime",
          "package": "cryptsy-api",
          "signature": "dt",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktLastTradeTime",
          "package": "cryptsy-api",
          "partial": "Last Trade Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktLastTradeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktMarketid",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktMarketid",
          "package": "cryptsy-api",
          "partial": "Marketid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktMarketid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktPrimaryCode",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktPrimaryCode",
          "package": "cryptsy-api",
          "partial": "Primary Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktPrimaryCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktPrimaryName",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktPrimaryName",
          "package": "cryptsy-api",
          "partial": "Primary Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktPrimaryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktRecentTrades",
          "package": "cryptsy-api",
          "signature": "Vector (GTrade dt p q t)",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktRecentTrades",
          "package": "cryptsy-api",
          "partial": "Recent Trades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktRecentTrades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSecondaryCode",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSecondaryCode",
          "package": "cryptsy-api",
          "partial": "Secondary Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktSecondaryCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSecondaryName",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSecondaryName",
          "package": "cryptsy-api",
          "partial": "Secondary Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktSecondaryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSellOrders",
          "package": "cryptsy-api",
          "signature": "Vector (GOrder p q t)",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktSellOrders",
          "package": "cryptsy-api",
          "partial": "Sell Orders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktSellOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktVolume",
          "package": "cryptsy-api",
          "signature": "q",
          "source": "src/Cryptsy-API-Public-Types-Market.html#GMarket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "mktVolume",
          "package": "cryptsy-api",
          "partial": "Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:mktVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine component parsers into JSON Object parser.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "parseMarket",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser p)-\u003e (Value -\u003e Parser q)-\u003e (Value -\u003e Parser dt)-\u003e (Value -\u003e Parser t)-\u003e Value-\u003e Parser (GMarket p q dt t)",
          "type": "function"
        },
        "index": {
          "description": "Combine component parsers into JSON Object parser",
          "hierarchy": "Cryptsy API Public Types Market",
          "module": "Cryptsy.API.Public.Types.Market",
          "name": "parseMarket",
          "normalized": "(Value-\u003eParser a)-\u003e(Value-\u003eParser b)-\u003e(Value-\u003eParser c)-\u003e(Value-\u003eParser d)-\u003eValue-\u003eParser(GMarket a b c d)",
          "package": "cryptsy-api",
          "partial": "Market",
          "signature": "(Value-\u003eParser p)-\u003e(Value-\u003eParser q)-\u003e(Value-\u003eParser dt)-\u003e(Value-\u003eParser t)-\u003eValue-\u003eParser(GMarket p q dt t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Market.html#v:parseMarket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for all data returned by a market data request.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-MarketData.html",
          "type": "module"
        },
        "index": {
          "description": "Type for all data returned by market data request",
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "partial": "Market Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral market data parameterized by types for prices, quantities,\n date/time values, and totals (price * quantity)\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "GMarketData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-MarketData.html#GMarketData",
          "type": "newtype"
        },
        "index": {
          "description": "general market data parameterized by types for prices quantities date time values and totals price quantity",
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "GMarketData",
          "package": "cryptsy-api",
          "partial": "GMarket Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#t:GMarketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault market data\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-MarketData.html#MarketData",
          "type": "type"
        },
        "index": {
          "description": "default market data",
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "partial": "Market Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#t:MarketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "signature": "MarketData",
          "source": "src/Cryptsy-API-Public-Types-MarketData.html#GMarketData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "MarketData",
          "package": "cryptsy-api",
          "partial": "Market Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#v:MarketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "markets",
          "package": "cryptsy-api",
          "signature": "HashMap Text (GMarket p q dt t)",
          "source": "src/Cryptsy-API-Public-Types-MarketData.html#GMarketData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "markets",
          "package": "cryptsy-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#v:markets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild parser for multiple markets from parser for single market.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "parseMarketData",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser (GMarket p q dt t))-\u003e Value-\u003e Parser (GMarketData p q dt t)",
          "type": "function"
        },
        "index": {
          "description": "Build parser for multiple markets from parser for single market",
          "hierarchy": "Cryptsy API Public Types MarketData",
          "module": "Cryptsy.API.Public.Types.MarketData",
          "name": "parseMarketData",
          "normalized": "(Value-\u003eParser(GMarket a b c d))-\u003eValue-\u003eParser(GMarketData a b c d)",
          "package": "cryptsy-api",
          "partial": "Market Data",
          "signature": "(Value-\u003eParser(GMarket p q dt t))-\u003eValue-\u003eParser(GMarketData p q dt t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-MarketData.html#v:parseMarketData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad in which public API requests occur.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Monad",
          "name": "Monad",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad in which public API requests occur",
          "hierarchy": "Cryptsy API Public Types Monad",
          "module": "Cryptsy.API.Public.Types.Monad",
          "name": "Monad",
          "package": "cryptsy-api",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest monad\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Monad",
          "name": "PubCryptsy",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Monad.html#PubCryptsy",
          "type": "type"
        },
        "index": {
          "description": "request monad",
          "hierarchy": "Cryptsy API Public Types Monad",
          "module": "Cryptsy.API.Public.Types.Monad",
          "name": "PubCryptsy",
          "package": "cryptsy-api",
          "partial": "Pub Cryptsy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Monad.html#t:PubCryptsy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault numeric type for prices, quanities, and total returned from the\n API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "Num",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Num.html",
          "type": "module"
        },
        "index": {
          "description": "Default numeric type for prices quanities and total returned from the API",
          "hierarchy": "Cryptsy API Public Types Num",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "Num",
          "package": "cryptsy-api",
          "partial": "Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Num.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative number type for the API, newtype for custom FromJSON instance, which\n only accepts JSON strings.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "CryptsyNum",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Num.html#CryptsyNum",
          "type": "newtype"
        },
        "index": {
          "description": "Native number type for the API newtype for custom FromJSON instance which only accepts JSON strings",
          "hierarchy": "Cryptsy API Public Types Num",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "CryptsyNum",
          "package": "cryptsy-api",
          "partial": "Cryptsy Num",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Num.html#t:CryptsyNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom resolution for \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e; 1e8.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "E8",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Num.html#E8",
          "type": "data"
        },
        "index": {
          "description": "Custom resolution for Fixed e8",
          "hierarchy": "Cryptsy API Public Types Num",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "E8",
          "package": "cryptsy-api",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Num.html#t:E8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "CryptsyNum",
          "package": "cryptsy-api",
          "signature": "CryptsyNum",
          "source": "src/Cryptsy-API-Public-Types-Num.html#CryptsyNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Num",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "CryptsyNum",
          "package": "cryptsy-api",
          "partial": "Cryptsy Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Num.html#v:CryptsyNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "toFixed",
          "package": "cryptsy-api",
          "signature": "Fixed E8",
          "source": "src/Cryptsy-API-Public-Types-Num.html#CryptsyNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Num",
          "module": "Cryptsy.API.Public.Types.Num",
          "name": "toFixed",
          "package": "cryptsy-api",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Num.html#v:toFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for individual orders (order book entries) from the API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Order.html",
          "type": "module"
        },
        "index": {
          "description": "Type for individual orders order book entries from the API",
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "partial": "Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneralized order\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "GOrder",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Order.html#GOrder",
          "type": "data"
        },
        "index": {
          "description": "generalized order",
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "GOrder",
          "package": "cryptsy-api",
          "partial": "GOrder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#t:GOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault order\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Order.html#Order",
          "type": "type"
        },
        "index": {
          "description": "default order",
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "partial": "Order",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "signature": "Order",
          "source": "src/Cryptsy-API-Public-Types-Order.html#GOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "Order",
          "package": "cryptsy-api",
          "partial": "Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#v:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderPrice",
          "package": "cryptsy-api",
          "signature": "p",
          "source": "src/Cryptsy-API-Public-Types-Order.html#GOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderPrice",
          "package": "cryptsy-api",
          "partial": "Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#v:orderPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderQuantity",
          "package": "cryptsy-api",
          "signature": "q",
          "source": "src/Cryptsy-API-Public-Types-Order.html#GOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderQuantity",
          "package": "cryptsy-api",
          "partial": "Quantity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#v:orderQuantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderTotal",
          "package": "cryptsy-api",
          "signature": "t",
          "source": "src/Cryptsy-API-Public-Types-Order.html#GOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "orderTotal",
          "package": "cryptsy-api",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#v:orderTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine component parsers into JSON Object parser.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "parseOrder",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser p)-\u003e (Value -\u003e Parser q)-\u003e (Value -\u003e Parser t)-\u003e Value-\u003e Parser (GOrder p q t)",
          "type": "function"
        },
        "index": {
          "description": "Combine component parsers into JSON Object parser",
          "hierarchy": "Cryptsy API Public Types Order",
          "module": "Cryptsy.API.Public.Types.Order",
          "name": "parseOrder",
          "normalized": "(Value-\u003eParser a)-\u003e(Value-\u003eParser b)-\u003e(Value-\u003eParser c)-\u003eValue-\u003eParser(GOrder a b c)",
          "package": "cryptsy-api",
          "partial": "Order",
          "signature": "(Value-\u003eParser p)-\u003e(Value-\u003eParser q)-\u003e(Value-\u003eParser t)-\u003eValue-\u003eParser(GOrder p q t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Order.html#v:parseOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for order books returned from the API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html",
          "type": "module"
        },
        "index": {
          "description": "Type for order books returned from the API",
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral order book\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "GOrderBook",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "data"
        },
        "index": {
          "description": "general order book",
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "GOrderBook",
          "package": "cryptsy-api",
          "partial": "GOrder Book",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#t:GOrderBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault order book\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#OrderBook",
          "type": "type"
        },
        "index": {
          "description": "default order book",
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#t:OrderBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "signature": "OrderBook",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "OrderBook",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:OrderBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obBuyOrders",
          "package": "cryptsy-api",
          "signature": "Vector (GOrder p q t)",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obBuyOrders",
          "package": "cryptsy-api",
          "partial": "Buy Orders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obBuyOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obLabel",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obLabel",
          "package": "cryptsy-api",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obMarketId",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obMarketId",
          "package": "cryptsy-api",
          "partial": "Market Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obMarketId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obPrimaryCode",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obPrimaryCode",
          "package": "cryptsy-api",
          "partial": "Primary Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obPrimaryCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obPrimaryName",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obPrimaryName",
          "package": "cryptsy-api",
          "partial": "Primary Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obPrimaryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSecondaryCode",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSecondaryCode",
          "package": "cryptsy-api",
          "partial": "Secondary Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obSecondaryCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSecondaryName",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSecondaryName",
          "package": "cryptsy-api",
          "partial": "Secondary Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obSecondaryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSellOrders",
          "package": "cryptsy-api",
          "signature": "Vector (GOrder p q t)",
          "source": "src/Cryptsy-API-Public-Types-OrderBook.html#GOrderBook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "obSellOrders",
          "package": "cryptsy-api",
          "partial": "Sell Orders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:obSellOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild parser for orderbook from parser for a single order.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "parseOrderBook",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser (GOrder p q t))-\u003e Value-\u003e Parser (GOrderBook p q t)",
          "type": "function"
        },
        "index": {
          "description": "Build parser for orderbook from parser for single order",
          "hierarchy": "Cryptsy API Public Types OrderBook",
          "module": "Cryptsy.API.Public.Types.OrderBook",
          "name": "parseOrderBook",
          "normalized": "(Value-\u003eParser(GOrder a b c))-\u003eValue-\u003eParser(GOrderBook a b c)",
          "package": "cryptsy-api",
          "partial": "Order Book",
          "signature": "(Value-\u003eParser(GOrder p q t))-\u003eValue-\u003eParser(GOrderBook p q t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-OrderBook.html#v:parseOrderBook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault type for times returned by the API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "Time",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Default type for times returned by the API",
          "hierarchy": "Cryptsy API Public Types Time",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "Time",
          "package": "cryptsy-api",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative date/time type for the API, newtype for custom FromJSON instance,\n which only accepts JSON strings\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "CryptsyTime",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Time.html#CryptsyTime",
          "type": "newtype"
        },
        "index": {
          "description": "Native date time type for the API newtype for custom FromJSON instance which only accepts JSON strings",
          "hierarchy": "Cryptsy API Public Types Time",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "CryptsyTime",
          "package": "cryptsy-api",
          "partial": "Cryptsy Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Time.html#t:CryptsyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "CryptsyTime",
          "package": "cryptsy-api",
          "signature": "CryptsyTime",
          "source": "src/Cryptsy-API-Public-Types-Time.html#CryptsyTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Time",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "CryptsyTime",
          "package": "cryptsy-api",
          "partial": "Cryptsy Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Time.html#v:CryptsyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "toLocalTime",
          "package": "cryptsy-api",
          "signature": "LocalTime",
          "source": "src/Cryptsy-API-Public-Types-Time.html#CryptsyTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Time",
          "module": "Cryptsy.API.Public.Types.Time",
          "name": "toLocalTime",
          "package": "cryptsy-api",
          "partial": "Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Time.html#v:toLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for individual executed trades from the API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Trade.html",
          "type": "module"
        },
        "index": {
          "description": "Type for individual executed trades from the API",
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "partial": "Trade",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneralized trade\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "GTrade",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "data"
        },
        "index": {
          "description": "generalized trade",
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "GTrade",
          "package": "cryptsy-api",
          "partial": "GTrade",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#t:GTrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estandard trade\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#Trade",
          "type": "type"
        },
        "index": {
          "description": "standard trade",
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "partial": "Trade",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#t:Trade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "signature": "Trade",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "Trade",
          "package": "cryptsy-api",
          "partial": "Trade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:Trade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine component parsers into JSON Object parser.\n\u003c/p\u003e",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "parseTrade",
          "package": "cryptsy-api",
          "signature": "(Value -\u003e Parser dt)-\u003e (Value -\u003e Parser p)-\u003e (Value -\u003e Parser q)-\u003e (Value -\u003e Parser t)-\u003e Value-\u003e Parser (GTrade dt p q t)",
          "type": "function"
        },
        "index": {
          "description": "Combine component parsers into JSON Object parser",
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "parseTrade",
          "normalized": "(Value-\u003eParser a)-\u003e(Value-\u003eParser b)-\u003e(Value-\u003eParser c)-\u003e(Value-\u003eParser d)-\u003eValue-\u003eParser(GTrade a b c d)",
          "package": "cryptsy-api",
          "partial": "Trade",
          "signature": "(Value-\u003eParser dt)-\u003e(Value-\u003eParser p)-\u003e(Value-\u003eParser q)-\u003e(Value-\u003eParser t)-\u003eValue-\u003eParser(GTrade dt p q t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:parseTrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeId",
          "package": "cryptsy-api",
          "signature": "Text",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeId",
          "package": "cryptsy-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:tradeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradePrice",
          "package": "cryptsy-api",
          "signature": "p",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradePrice",
          "package": "cryptsy-api",
          "partial": "Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:tradePrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeQuantity",
          "package": "cryptsy-api",
          "signature": "q",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeQuantity",
          "package": "cryptsy-api",
          "partial": "Quantity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:tradeQuantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeTime",
          "package": "cryptsy-api",
          "signature": "dt",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeTime",
          "package": "cryptsy-api",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:tradeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeTotal",
          "package": "cryptsy-api",
          "signature": "t",
          "source": "src/Cryptsy-API-Public-Types-Trade.html#GTrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cryptsy API Public Types Trade",
          "module": "Cryptsy.API.Public.Types.Trade",
          "name": "tradeTotal",
          "package": "cryptsy-api",
          "partial": "Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types-Trade.html#v:tradeTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports the entire Cryptsy.API.Public.Types.* heirarchy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public.Types",
          "name": "Types",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports the entire Cryptsy.API.Public.Types heirarchy",
          "hierarchy": "Cryptsy API Public Types",
          "module": "Cryptsy.API.Public.Types",
          "name": "Types",
          "package": "cryptsy-api",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports the entire Cryptsy.API.Public.* heirarchy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cryptsy.API.Public",
          "name": "Public",
          "package": "cryptsy-api",
          "source": "src/Cryptsy-API-Public.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports the entire Cryptsy.API.Public heirarchy",
          "hierarchy": "Cryptsy API Public",
          "module": "Cryptsy.API.Public",
          "name": "Public",
          "package": "cryptsy-api",
          "partial": "Public",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptsy-api/docs/Cryptsy-API-Public.html#"
      }
    }
  ]
]