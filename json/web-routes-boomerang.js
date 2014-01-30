[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eweb-routes-boomerang\u003c/code\u003e makes it easy to use write custom\npretty-printers and parsers for your URL types. Instead of writing a\nparser and a separate pretty-printer you can specify both at once by\nusing the \u003ccode\u003eboomerang\u003c/code\u003e library:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://hackage.haskell.org/package/boomerang\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis demo will show the basics of getting started.\n\u003c/p\u003e\u003cp\u003eFirst we need to enable some language extensions:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell, TypeOperators, OverloadedStrings #-}\u003c/pre\u003e\u003cpre\u003e \n module Main where\n\u003c/pre\u003e\u003cp\u003eNote in the imports that we hide \u003ccode\u003e(id, (.))\u003c/code\u003e from the \u003ca\u003ePrelude\u003c/a\u003e and\nuse the versions from \u003ca\u003eControl.Category\u003c/a\u003e instead.\n\u003c/p\u003e\u003cpre\u003e import Prelude              hiding (id, (.))\n import Control.Category     (Category(id, (.)))\n import Control.Monad.Trans  (MonadIO(liftIO))\n import Text.Boomerang.TH    (makeBoomerangs)\n import Web.Routes           (Site(..), RouteT(..), decodePathInfo, encodePathInfo, runSite, showURL)\n import Web.Routes.Boomerang (Router, (\u003c\u003e), (\u003c/\u003e), int, parse1, boomerangSiteRouteT, anyString, parseStrings)\n\u003c/pre\u003e\u003cp\u003eNext we define a data type that represents our sitemap.\n\u003c/p\u003e\u003cpre\u003e -- | the routes\n data Sitemap\n    = Home\n    | UserOverview\n    | UserDetail Int\n    | Article Int String\n    deriving (Eq, Show)\n\u003c/pre\u003e\u003cp\u003eTo use the \u003ccode\u003eSitemap\u003c/code\u003e type with \u003ccode\u003eboomerang\u003c/code\u003e we need to call \u003ccode\u003emakeBoomerangs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e $(makeBoomerangs ''Sitemap)\n\u003c/pre\u003e\u003cp\u003eThat will create new combinators corresponding to the constructors for\n\u003ccode\u003eSitemap\u003c/code\u003e. They will be named, \u003ccode\u003erHome\u003c/code\u003e, \u003ccode\u003erUserOverview\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eNow we can specify how the \u003ccode\u003eSitemap\u003c/code\u003e type is mapped to a url and back:\n\u003c/p\u003e\u003cpre\u003e sitemap :: Router Sitemap\n sitemap =\n     (  rHome\n     \u003c\u003e \"users\" . users\n     \u003c\u003e rArticle . (\"article\" \u003c/\u003e int . \"-\" . anyString)\n     )\n   where\n     users  =  rUserOverview\n            \u003c\u003e rUserDetail \u003c/\u003e int\n\u003c/pre\u003e\u003cp\u003eThe mapping looks like this:\n\u003c/p\u003e\u003cpre\u003e\n /                       \u003c=\u003e Home\n /users                  \u003c=\u003e UserOverview\n /users/\u003cem\u003e\u003cint\u003e\u003c/em\u003e            \u003c=\u003e UserDetail \u003cem\u003e\u003cint\u003e\u003c/em\u003e\n /article/\u003cem\u003e\u003cint\u003e\u003c/em\u003e-\u003cem\u003e\u003cstring\u003e\u003c/em\u003e \u003c=\u003e Article \u003cem\u003e\u003cint\u003e\u003c/em\u003e \u003cem\u003e\u003cstring\u003e\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eNext we have our function which maps a parsed route to the handler for\nthat route. (There is nothing \u003ccode\u003eboomerang\u003c/code\u003e specific about this\nfunction):\n\u003c/p\u003e\u003cpre\u003e handle :: Sitemap -\u003e RouteT Sitemap IO ()\n handle url =\n     case url of\n       _ -\u003e do liftIO $ print url\n               s \u003c- showURL url\n               liftIO $ putStrLn s\n\u003c/pre\u003e\u003cp\u003eNormally the \u003ccode\u003ecase\u003c/code\u003e statement would match on the different constructors and map them to different handlers. But in this case we use the same handler for all constructors. Also, instead of running in the IO monad, we would typically use a web framework monad like Happstack's \u003ccode\u003eServerPartT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handler does two things:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e prints the parsed url\n\u003c/li\u003e\u003cli\u003e unparses the url and prints it\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWe now have two pieces:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003esitemap\u003c/code\u003e - which converts urls to the \u003ccode\u003eSitemap\u003c/code\u003e type and back\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ehandle\u003c/code\u003e - which maps \u003ccode\u003eSitemap\u003c/code\u003e to handlers\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWe tie these two pieces together use \u003ccode\u003e\u003ca\u003eboomerangSiteRouteT\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e site :: Site Sitemap (IO ())\n site = boomerangSiteRouteT handle sitemap\n\u003c/pre\u003e\u003cp\u003eThis gives as a standard \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e value that we can use with \u003ccode\u003erunSite\u003c/code\u003e\nor with framework specific wrappers like \u003ccode\u003eimplSite\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf we were not using \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e then we could use \u003ccode\u003eboomerangSite\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eNow we can create a simple test function that takes the path info part\nof a url and runs our site:\n\u003c/p\u003e\u003cpre\u003e test :: ByteString -- ^ path info of incoming url\n      -\u003e IO ()\n test path =\n     case runSite \"\" site (decodePathInfo path) of\n       (Left e)   -\u003e putStrLn e\n       (Right io) -\u003e io\n\u003c/pre\u003e\u003cp\u003eWe can use it like this:\n\u003c/p\u003e\u003cpre\u003e\nghci\u003e test \u003ca\u003eusers/1\u003c/a\u003e\nUserDetail 1\nusers/1\n\u003c/pre\u003e\u003cp\u003eHere is a simple wrapper to call test interactively:\n\u003c/p\u003e\u003cpre\u003e -- | interactively call 'test'\n main :: IO ()\n main = mapM_ test =\u003c\u003c fmap lines getContents\n\u003c/pre\u003e\u003cp\u003eHere are two more helper functions you can use to experiment interactively:\n\u003c/p\u003e\u003cpre\u003e -- | a little function to test rendering a url\n showurl :: Sitemap -\u003e String\n showurl url =\n     let (ps, params) = formatPathSegments site url\n     in (encodePathInfo ps params)\n\u003c/pre\u003e\u003cpre\u003e -- | a little function to test parsing a url\n testParse :: String -\u003e Either String Sitemap\n testParse pathInfo =\n     case parsePathSegments site $ decodePathInfo pathInfo of\n       (Left e)  -\u003e Left (show e)\n       (Right a) -\u003e Right a\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-Boomerang.html",
        "fct-type": "module",
        "title": "Boomerang"
      },
      "index": {
        "description": "web-routes-boomerang makes it easy to use write custom pretty-printers and parsers for your URL types Instead of writing parser and separate pretty-printer you can specify both at once by using the boomerang library http hackage.haskell.org package boomerang This demo will show the basics of getting started First we need to enable some language extensions LANGUAGE TemplateHaskell TypeOperators OverloadedStrings module Main where Note in the imports that we hide id from the Prelude and use the versions from Control.Category instead import Prelude hiding id import Control.Category Category id import Control.Monad.Trans MonadIO liftIO import Text.Boomerang.TH makeBoomerangs import Web.Routes Site RouteT decodePathInfo encodePathInfo runSite showURL import Web.Routes.Boomerang Router int parse1 boomerangSiteRouteT anyString parseStrings Next we define data type that represents our sitemap the routes data Sitemap Home UserOverview UserDetail Int Article Int String deriving Eq Show To use the Sitemap type with boomerang we need to call makeBoomerangs makeBoomerangs Sitemap That will create new combinators corresponding to the constructors for Sitemap They will be named rHome rUserOverview etc Now we can specify how the Sitemap type is mapped to url and back sitemap Router Sitemap sitemap rHome users users rArticle article int anyString where users rUserOverview rUserDetail int The mapping looks like this Home users UserOverview users int UserDetail int article int string Article int string Next we have our function which maps parsed route to the handler for that route There is nothing boomerang specific about this function handle Sitemap RouteT Sitemap IO handle url case url of do liftIO print url showURL url liftIO putStrLn Normally the case statement would match on the different constructors and map them to different handlers But in this case we use the same handler for all constructors Also instead of running in the IO monad we would typically use web framework monad like Happstack ServerPartT The handler does two things prints the parsed url unparses the url and prints it We now have two pieces sitemap which converts urls to the Sitemap type and back handle which maps Sitemap to handlers We tie these two pieces together use boomerangSiteRouteT site Site Sitemap IO site boomerangSiteRouteT handle sitemap This gives as standard Site value that we can use with runSite or with framework specific wrappers like implSite If we were not using RouteT then we could use boomerangSite instead Now we can create simple test function that takes the path info part of url and runs our site test ByteString path info of incoming url IO test path case runSite site decodePathInfo path of Left putStrLn Right io io We can use it like this ghci test users UserDetail users Here is simple wrapper to call test interactively interactively call test main IO main mapM test fmap lines getContents Here are two more helper functions you can use to experiment interactively little function to test rendering url showurl Sitemap String showurl url let ps params formatPathSegments site url in encodePathInfo ps params little function to test parsing url testParse String Either String Sitemap testParse pathInfo case parsePathSegments site decodePathInfo pathInfo of Left Left show Right Right",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "Boomerang",
        "normalized": "",
        "package": "web-routes-boomerang",
        "partial": "Boomerang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#t:Router",
      "description": {
        "fct-descr": "\u003cp\u003e'Router a b' is a simple type alias for 'Boomerang TextsError [Text] a b'\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "type",
        "fct-source": "src/Web-Routes-Boomerang.html#Router",
        "fct-type": "type",
        "title": "Router"
      },
      "index": {
        "description": "Router is simple type alias for Boomerang TextsError Text",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "Router",
        "normalized": "",
        "package": "web-routes-boomerang",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#v:boomerangFromPathSegments",
      "description": {
        "fct-descr": "\u003cp\u003econvert to a \u003ccode\u003e\u003ca\u003eURLParser\u003c/a\u003e\u003c/code\u003e so we can create a \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instance\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "Boomerang TextsError [Text] () (url :- ()) -\u003e URLParser url",
        "fct-source": "src/Web-Routes-Boomerang.html#boomerangFromPathSegments",
        "fct-type": "function",
        "title": "boomerangFromPathSegments"
      },
      "index": {
        "description": "convert to URLParser so we can create PathInfo instance",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "boomerangFromPathSegments",
        "normalized": "Boomerang TextsError[Text]()(a())-\u003eURLParser a",
        "package": "web-routes-boomerang",
        "partial": "From Path Segments",
        "signature": "Boomerang TextsError[Text]()(url())-\u003eURLParser url"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#v:boomerangSite",
      "description": {
        "fct-descr": "\u003cp\u003efunction which creates a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRouter\u003c/a\u003e\u003c/code\u003e and a handler\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e a)-\u003e Router () (url :- ())-\u003e Site url a",
        "fct-type": "function",
        "title": "boomerangSite"
      },
      "index": {
        "description": "function which creates Site from Router and handler",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "boomerangSite",
        "normalized": "((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb)-\u003eRouter()(a())-\u003eSite a b",
        "package": "web-routes-boomerang",
        "partial": "Site",
        "signature": "((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003ea)-\u003eRouter()(url())-\u003eSite url a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#v:boomerangSiteRouteT",
      "description": {
        "fct-descr": "\u003cp\u003efunction which creates a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRouter\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e handler\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "(url -\u003e RouteT url m a)-\u003e Router () (url :- ())-\u003e Site url (m a)",
        "fct-type": "function",
        "title": "boomerangSiteRouteT"
      },
      "index": {
        "description": "function which creates Site from Router and RouteT handler",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "boomerangSiteRouteT",
        "normalized": "(a-\u003eRouteT a b c)-\u003eRouter()(a())-\u003eSite a(b c)",
        "package": "web-routes-boomerang",
        "partial": "Site Route",
        "signature": "(url-\u003eRouteT url m a)-\u003eRouter()(url())-\u003eSite url(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-boomerang/docs/Web-Routes-Boomerang.html#v:boomerangToPathSegments",
      "description": {
        "fct-descr": "\u003cp\u003econvert to the type expected by \u003ccode\u003e\u003ca\u003etoPathSegments\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Boomerang",
        "fct-package": "web-routes-boomerang",
        "fct-signature": "Boomerang TextsError [Text] () (url :- ()) -\u003e url -\u003e [Text]",
        "fct-source": "src/Web-Routes-Boomerang.html#boomerangToPathSegments",
        "fct-type": "function",
        "title": "boomerangToPathSegments"
      },
      "index": {
        "description": "convert to the type expected by toPathSegments from PathInfo",
        "hierarchy": "Web Routes Boomerang",
        "module": "Web.Routes.Boomerang",
        "name": "boomerangToPathSegments",
        "normalized": "Boomerang TextsError[Text]()(a())-\u003ea-\u003e[Text]",
        "package": "web-routes-boomerang",
        "partial": "To Path Segments",
        "signature": "Boomerang TextsError[Text]()(url())-\u003eurl-\u003e[Text]"
      }
    }
  }
]