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
        "word": "weather-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi.WWOnline",
          "name": "WWOnline",
          "package": "weather-api",
          "source": "src/WeatherApi-WWOnline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "WWOnline",
          "package": "weather-api",
          "partial": "WWOnline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi.WWOnline",
          "name": "ApiKey",
          "package": "weather-api",
          "source": "src/WeatherApi-WWOnline.html#ApiKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "ApiKey",
          "package": "weather-api",
          "partial": "Api Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#t:ApiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi.WWOnline",
          "name": "apiUrl",
          "package": "weather-api",
          "signature": "[Char]",
          "source": "src/WeatherApi-WWOnline.html#apiUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "apiUrl",
          "normalized": "[Char]",
          "package": "weather-api",
          "partial": "Url",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#v:apiUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi.WWOnline",
          "name": "get",
          "package": "weather-api",
          "signature": "HandleStream b -\u003e URI -\u003e IO (Either ApiError b)",
          "source": "src/WeatherApi-WWOnline.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "get",
          "normalized": "HandleStream a-\u003eURI-\u003eIO(Either ApiError a)",
          "package": "weather-api",
          "signature": "HandleStream b-\u003eURI-\u003eIO(Either ApiError b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake config for use with WeatherApi functions\n\u003c/p\u003e",
          "module": "WeatherApi.WWOnline",
          "name": "initApi",
          "package": "weather-api",
          "signature": "ApiKey -\u003e Config",
          "source": "src/WeatherApi-WWOnline.html#initApi",
          "type": "function"
        },
        "index": {
          "description": "Make config for use with WeatherApi functions",
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "initApi",
          "normalized": "ApiKey-\u003eConfig",
          "package": "weather-api",
          "partial": "Api",
          "signature": "ApiKey-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#v:initApi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis return function witch will actualy retrieve and parse weather from stream\n\u003c/p\u003e",
          "module": "WeatherApi.WWOnline",
          "name": "makeQueryFun",
          "package": "weather-api",
          "signature": "(String -\u003e String) -\u003e HandleStream String -\u003e String -\u003e IO ApiResponse",
          "source": "src/WeatherApi-WWOnline.html#makeQueryFun",
          "type": "function"
        },
        "index": {
          "description": "This return function witch will actualy retrieve and parse weather from stream",
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "makeQueryFun",
          "normalized": "(String-\u003eString)-\u003eHandleStream String-\u003eString-\u003eIO ApiResponse",
          "package": "weather-api",
          "partial": "Query Fun",
          "signature": "(String-\u003eString)-\u003eHandleStream String-\u003eString-\u003eIO ApiResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#v:makeQueryFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi.WWOnline",
          "name": "retrieve",
          "package": "weather-api",
          "signature": "HandleStream b -\u003e [Char] -\u003e IO (Either ApiError b)",
          "source": "src/WeatherApi-WWOnline.html#retrieve",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi WWOnline",
          "module": "WeatherApi.WWOnline",
          "name": "retrieve",
          "normalized": "HandleStream a-\u003e[Char]-\u003eIO(Either ApiError a)",
          "package": "weather-api",
          "signature": "HandleStream b-\u003e[Char]-\u003eIO(Either ApiError b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi-WWOnline.html#v:retrieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cp\u003erequired imports\n\u003c/p\u003e\u003cpre\u003e import WeatherApi\n import WeatherApi.Google\n\u003c/pre\u003e\u003cp\u003eWith handler in case server will alow you to make\n few requests with one connection\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet h = mkWeatherHandler $ initApi \"en\" \"utf-8\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetWeather h \"moscow\"\n\u003c/code\u003e\u003c/strong\u003eRight (Weather { tempF = 75.0\n               , tempC = 24.0\n               , humidity = \"Humidity: 25%\"\n               , windCondition = \"Wind: S at 16 mph\"\n               , condition = \"Clear\"\n               })\n\u003c/pre\u003e\u003cp\u003eSimple case\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetWeather' (initApi \"en\" \"utf-8\") \"moscow\"\n\u003c/code\u003e\u003c/strong\u003eRight (Weather { tempF = 75.0\n               , tempC = 24.0\n               , humidity = \"Humidity: 25%\"\n               , windCondition = \"Wind: S at 16 mph\"\n               , condition = \"Clear\"\n               })\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "WeatherApi",
          "name": "WeatherApi",
          "package": "weather-api",
          "source": "src/WeatherApi.html",
          "type": "module"
        },
        "index": {
          "description": "Usage required imports import WeatherApi import WeatherApi.Google With handler in case server will alow you to make few requests with one connection let mkWeatherHandler initApi en utf-8 getWeather moscow Right Weather tempF tempC humidity Humidity windCondition Wind at mph condition Clear Simple case getWeather initApi en utf-8 moscow Right Weather tempF tempC humidity Humidity windCondition Wind at mph condition Clear",
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "WeatherApi",
          "package": "weather-api",
          "partial": "Weather Api",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "ApiError",
          "package": "weather-api",
          "source": "src/WeatherApi.html#ApiError",
          "type": "data"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "ApiError",
          "package": "weather-api",
          "partial": "Api Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#t:ApiError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "ApiResponse",
          "package": "weather-api",
          "source": "src/WeatherApi.html#ApiResponse",
          "type": "type"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "ApiResponse",
          "package": "weather-api",
          "partial": "Api Response",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#t:ApiResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "Config",
          "package": "weather-api",
          "source": "src/WeatherApi.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "Config",
          "package": "weather-api",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "Weather",
          "package": "weather-api",
          "source": "src/WeatherApi.html#Weather",
          "type": "data"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "Weather",
          "package": "weather-api",
          "partial": "Weather",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#t:Weather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "WeatherApiHandler",
          "package": "weather-api",
          "source": "src/WeatherApi.html#WeatherApiHandler",
          "type": "data"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "WeatherApiHandler",
          "package": "weather-api",
          "partial": "Weather Api Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#t:WeatherApiHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "Config",
          "package": "weather-api",
          "signature": "Config",
          "source": "src/WeatherApi.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "Config",
          "package": "weather-api",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "NetworkError",
          "package": "weather-api",
          "signature": "NetworkError String",
          "source": "src/WeatherApi.html#ApiError",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "NetworkError",
          "package": "weather-api",
          "partial": "Network Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:NetworkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "NotFoundError",
          "package": "weather-api",
          "signature": "NotFoundError String",
          "source": "src/WeatherApi.html#ApiError",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "NotFoundError",
          "package": "weather-api",
          "partial": "Not Found Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:NotFoundError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "ParseError",
          "package": "weather-api",
          "signature": "ParseError String",
          "source": "src/WeatherApi.html#ApiError",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "ParseError",
          "package": "weather-api",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "Weather",
          "package": "weather-api",
          "signature": "Weather",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "Weather",
          "package": "weather-api",
          "partial": "Weather",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:Weather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "WeatherApiHandler",
          "package": "weather-api",
          "signature": "WeatherApiHandler",
          "source": "src/WeatherApi.html#WeatherApiHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "WeatherApiHandler",
          "package": "weather-api",
          "partial": "Weather Api Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:WeatherApiHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "apiHost",
          "package": "weather-api",
          "signature": "String",
          "source": "src/WeatherApi.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "apiHost",
          "package": "weather-api",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:apiHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "apiPort",
          "package": "weather-api",
          "signature": "Int",
          "source": "src/WeatherApi.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "apiPort",
          "package": "weather-api",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:apiPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "closeHandler",
          "package": "weather-api",
          "signature": "WeatherApiHandler -\u003e IO ()",
          "source": "src/WeatherApi.html#closeHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "closeHandler",
          "normalized": "WeatherApiHandler-\u003eIO()",
          "package": "weather-api",
          "partial": "Handler",
          "signature": "WeatherApiHandler-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:closeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "condition",
          "package": "weather-api",
          "signature": "String",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "condition",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "config",
          "package": "weather-api",
          "signature": "Config",
          "source": "src/WeatherApi.html#WeatherApiHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "config",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve weather using existing handler\n\u003c/p\u003e",
          "module": "WeatherApi",
          "name": "getWeather",
          "package": "weather-api",
          "signature": "WeatherApiHandler -\u003e String -\u003e IO ApiResponse",
          "source": "src/WeatherApi.html#getWeather",
          "type": "function"
        },
        "index": {
          "description": "Retrieve weather using existing handler",
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "getWeather",
          "normalized": "WeatherApiHandler-\u003eString-\u003eIO ApiResponse",
          "package": "weather-api",
          "partial": "Weather",
          "signature": "WeatherApiHandler-\u003eString-\u003eIO ApiResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:getWeather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve weather using just config\n It's usefull when you don't need one connection for few requests\n\u003c/p\u003e",
          "module": "WeatherApi",
          "name": "getWeather'",
          "package": "weather-api",
          "signature": "Config -\u003e String -\u003e IO ApiResponse",
          "source": "src/WeatherApi.html#getWeather%27",
          "type": "function"
        },
        "index": {
          "description": "Retrieve weather using just config It usefull when you don need one connection for few requests",
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "getWeather'",
          "normalized": "Config-\u003eString-\u003eIO ApiResponse",
          "package": "weather-api",
          "partial": "Weather'",
          "signature": "Config-\u003eString-\u003eIO ApiResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:getWeather-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "humidity",
          "package": "weather-api",
          "signature": "String",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "humidity",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:humidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "isHandlerAlive",
          "package": "weather-api",
          "signature": "WeatherApiHandler -\u003e IO Bool",
          "source": "src/WeatherApi.html#isHandlerAlive",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "isHandlerAlive",
          "normalized": "WeatherApiHandler-\u003eIO Bool",
          "package": "weather-api",
          "partial": "Handler Alive",
          "signature": "WeatherApiHandler-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:isHandlerAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "mkWeatherHandler",
          "package": "weather-api",
          "signature": "Config -\u003e WeatherApiHandler",
          "source": "src/WeatherApi.html#mkWeatherHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "mkWeatherHandler",
          "normalized": "Config-\u003eWeatherApiHandler",
          "package": "weather-api",
          "partial": "Weather Handler",
          "signature": "Config-\u003eWeatherApiHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:mkWeatherHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "queryFun",
          "package": "weather-api",
          "signature": "HandleStream String -\u003e String -\u003e IO ApiResponse",
          "source": "src/WeatherApi.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "queryFun",
          "normalized": "HandleStream String-\u003eString-\u003eIO ApiResponse",
          "package": "weather-api",
          "partial": "Fun",
          "signature": "HandleStream String-\u003eString-\u003eIO ApiResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:queryFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "stream",
          "package": "weather-api",
          "signature": "IO (HandleStream String)",
          "source": "src/WeatherApi.html#WeatherApiHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "stream",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "tempC",
          "package": "weather-api",
          "signature": "Double",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "tempC",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:tempC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "tempF",
          "package": "weather-api",
          "signature": "Double",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "tempF",
          "package": "weather-api",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:tempF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WeatherApi",
          "name": "windCondition",
          "package": "weather-api",
          "signature": "String",
          "source": "src/WeatherApi.html#Weather",
          "type": "function"
        },
        "index": {
          "hierarchy": "WeatherApi",
          "module": "WeatherApi",
          "name": "windCondition",
          "package": "weather-api",
          "partial": "Condition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weather-api/docs/WeatherApi.html#v:windCondition"
      }
    }
  ]
]