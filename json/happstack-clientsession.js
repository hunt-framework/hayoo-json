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
        "word": "happstack-clientsession"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple session implementation which stores\nsession data on the client as a cookie value.\n\u003c/p\u003e\u003cp\u003eThe cookie values are stored in an encrypted cookie to make it more\ndifficult for users to tamper with the values. However, this does not\nprevent replay attacks, and should not be seen as a substitute for\nusing HTTPS. Additionally, the cryptography libraries used to encrypt\nthe cookie have never been audited. Hence you are encouraged to think\ncarefully about what data you put in the session data.\n\u003c/p\u003e\u003cp\u003eAnother important thing to realize is client-side sessions do not\nprovide Isolation. Imagine if the browser makes multiple simultaneous\nrequests, which each modify the session data. The browser will submit\nthe same cookie for each the requests, and each request handling\nthread will get their own copy of the session data. The threads will\nthen modify their local copies independently and send their modified\nvalues back to the browser, overwriting each other. The final value\nwill be determined by which ever request is sent last, and any changes\nmade by the other request will be entirely lost.\n\u003c/p\u003e\u003cp\u003eThis means that clientsessions would not be suitable for implementing\na request counter, because if overlapping requests are made, the count\nwill be off. The count will only be accurate if the requests are\nprocessed sequentially. That said, the demo code implements a request\ncounter anyway, because it is short and sweet. Also, this caveat was\nforgotten when the example code was being written.\n\u003c/p\u003e\u003cp\u003eIf you only modify the session data for POST requests, but not GET\nrequests you are less likely to run into situations where you are\nlosing changes, because there are not a lot of cases where a client\nwill be submitting multiple POST requests in parallel. Though there is\nno guarantee.\n\u003c/p\u003e\u003cp\u003eAlternatively, you can choose to \u003cem\u003eonly\u003c/em\u003e store data where it is OK if\nmodifications are lost. For example, if the session data contains only\na userid and the time of the last request they made, then there is no\ngreat loss if some of the modifications are lost, because the access\ntimes are going to all be about the same anyway.\n\u003c/p\u003e\u003cp\u003eBy default the client will need to submit the cookie that contains the\nclient session data for every request (including images, and other\nstatic assets). So, storing a large amount of data in the client\nsession will make requests slower and is not recommended. If you have\nassets which can be served with out examining the client session data\nyou can use the \u003ccode\u003e\u003ca\u003esessionPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esessionDomain\u003c/a\u003e\u003c/code\u003e parameters of\n\u003ccode\u003e\u003ca\u003eSessionConf\u003c/a\u003e\u003c/code\u003e to limit when the browser sends the session data cookie.\n\u003c/p\u003e\u003cp\u003eThe first thing you need to do is enable some extensions which can be\ndone via a \u003ccode\u003eLANGUAGE\u003c/code\u003e pragma at the top of your app:\n\u003c/p\u003e\u003cp\u003e{-# LANGUAGE DeriveDataTypeable, TemplateHaskell #-}\n\u003c/p\u003e\u003cp\u003eThen you will need some imports:\n\u003c/p\u003e\u003cpre\u003e module Main where\n\n import Happstack.Server   (ServerPartT, Response, simpleHTTP\n                          , nullConf, nullDir, ok, toResponse\n                          )\n import Happstack.Server.ClientSession\n                           ( ClientSession(..), ClientSessionT(..)\n                          , getDefaultKey, mkSessionConf\n                          , liftSessionStateT, withClientSessionT\n                          )\n import Data.Data          (Data, Typeable)\n import Data.Lens          ((+=))\n import Data.Lens.Template (makeLens)\n import Data.SafeCopy      (base, deriveSafeCopy)\n\u003c/pre\u003e\u003cp\u003eNext you will want to create a type to hold your session data. Here we\nuse a simple record which we will update using \u003ccode\u003edata-lens-fd\u003c/code\u003e. But,\nyou could also store a, \u003ccode\u003eMap Text Text\u003c/code\u003e, or whatever suits your fancy\nas long as it can be serialized. (So no data types that include\nfunctions, existential types, etc).\n\u003c/p\u003e\u003cpre\u003e data SessionData = SessionData\n     { _count    :: Integer\n     }\n    deriving (Eq, Ord, Read, Show, Data, Typeable)\n\n -- | here we make it a lens, but that is not required\n $(makeLens ''SessionData)\n\u003c/pre\u003e\u003cp\u003eWe use the \u003ccode\u003esafecopy\u003c/code\u003e library to serialize the data so we can encrypt\nit and store it in a cookie. \u003ccode\u003esafecopy\u003c/code\u003e provides version migration,\nwhich means that we will be able to read-in old session data if we\nchange the data type. The easiest way to create a \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e instance\nis with \u003ccode\u003ederiveSafeCopy\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e $(deriveSafeCopy 0 'base ''SessionData)\n\u003c/pre\u003e\u003cp\u003eWe also need to define what an \u003ccode\u003e\u003ca\u003eemptySession\u003c/a\u003e\u003c/code\u003e looks like. This will be\nused for creating new sessions when the client does not already have\none:\n\u003c/p\u003e\u003cpre\u003e instance ClientSession SessionData where\n     emptySession = SessionData { _count = 0 }\n\u003c/pre\u003e\u003cp\u003eNext we have a function which reads a client-specific page counter and returns\nthe number of times the page has been reloaded.\n\u003c/p\u003e\u003cp\u003eIn this function we use, \u003ccode\u003e\u003ca\u003eliftSessionStateT\u003c/a\u003e\u003c/code\u003e to lift the \u003ccode\u003e+=\u003c/code\u003e lens\nfunction into \u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e to increment and return the value\nstored in the client session.\n\u003c/p\u003e\u003cp\u003eAlternatively, we could have used the \u003ccode\u003e\u003ca\u003egetSession\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputSession\u003c/a\u003e\u003c/code\u003e\nfunctions from \u003ccode\u003e\u003ca\u003eMonadClientSession\u003c/a\u003e\u003c/code\u003e. Those functions do not require\nthe use of \u003ccode\u003e\u003ca\u003eliftSessionStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e routes :: ClientSessionT SessionData (ServerPartT IO) Response\n routes =\n     do nullDir\n        c \u003c- liftSessionStateT $ count += 1\n        ok $ toResponse $ \"you have viewed this page \" ++ (show c) ++ \" time(s).\"\n\u003c/pre\u003e\u003cp\u003eFinally, we unwrap the \u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e monad transformer using \u003ccode\u003e\u003ca\u003ewithClientSessionT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSessionConf\u003c/a\u003e\u003c/code\u003e type requires an encryption key. You can generate\nthe key using \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e uses a default filename. Alternatively,\nyou can specific the name you want to use explicitly using\n\u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e. The key will be created automatically if it does not already\nexist.\n\u003c/p\u003e\u003cp\u003eIf you change the key, all existing client sessions will be invalidated.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main =\n     do key \u003c- getDefaultKey\n        let sessionConf = mkSessionConf key\n        simpleHTTP nullConf $ withClientSessionT sessionConf $ routes\n\u003c/pre\u003e\u003cp\u003eIn a real application you might want to use a \u003ccode\u003enewtype\u003c/code\u003e wrapper around\n\u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e to keep your type signatures sane. An alternative\nversion of this demo which does that can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://patch-tag.com/r/mae/happstack/snapshot/current/content/pretty/happstack-clientsession/demo/demo.hs\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSession",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides simple session implementation which stores session data on the client as cookie value The cookie values are stored in an encrypted cookie to make it more difficult for users to tamper with the values However this does not prevent replay attacks and should not be seen as substitute for using HTTPS Additionally the cryptography libraries used to encrypt the cookie have never been audited Hence you are encouraged to think carefully about what data you put in the session data Another important thing to realize is client-side sessions do not provide Isolation Imagine if the browser makes multiple simultaneous requests which each modify the session data The browser will submit the same cookie for each the requests and each request handling thread will get their own copy of the session data The threads will then modify their local copies independently and send their modified values back to the browser overwriting each other The final value will be determined by which ever request is sent last and any changes made by the other request will be entirely lost This means that clientsessions would not be suitable for implementing request counter because if overlapping requests are made the count will be off The count will only be accurate if the requests are processed sequentially That said the demo code implements request counter anyway because it is short and sweet Also this caveat was forgotten when the example code was being written If you only modify the session data for POST requests but not GET requests you are less likely to run into situations where you are losing changes because there are not lot of cases where client will be submitting multiple POST requests in parallel Though there is no guarantee Alternatively you can choose to only store data where it is OK if modifications are lost For example if the session data contains only userid and the time of the last request they made then there is no great loss if some of the modifications are lost because the access times are going to all be about the same anyway By default the client will need to submit the cookie that contains the client session data for every request including images and other static assets So storing large amount of data in the client session will make requests slower and is not recommended If you have assets which can be served with out examining the client session data you can use the sessionPath and sessionDomain parameters of SessionConf to limit when the browser sends the session data cookie The first thing you need to do is enable some extensions which can be done via LANGUAGE pragma at the top of your app LANGUAGE DeriveDataTypeable TemplateHaskell Then you will need some imports module Main where import Happstack.Server ServerPartT Response simpleHTTP nullConf nullDir ok toResponse import Happstack.Server.ClientSession ClientSession ClientSessionT getDefaultKey mkSessionConf liftSessionStateT withClientSessionT import Data.Data Data Typeable import Data.Lens import Data.Lens.Template makeLens import Data.SafeCopy base deriveSafeCopy Next you will want to create type to hold your session data Here we use simple record which we will update using data-lens-fd But you could also store Map Text Text or whatever suits your fancy as long as it can be serialized So no data types that include functions existential types etc data SessionData SessionData count Integer deriving Eq Ord Read Show Data Typeable here we make it lens but that is not required makeLens SessionData We use the safecopy library to serialize the data so we can encrypt it and store it in cookie safecopy provides version migration which means that we will be able to read-in old session data if we change the data type The easiest way to create SafeCopy instance is with deriveSafeCopy deriveSafeCopy base SessionData We also need to define what an emptySession looks like This will be used for creating new sessions when the client does not already have one instance ClientSession SessionData where emptySession SessionData count Next we have function which reads client-specific page counter and returns the number of times the page has been reloaded In this function we use liftSessionStateT to lift the lens function into ClientSessionT to increment and return the value stored in the client session Alternatively we could have used the getSession and putSession functions from MonadClientSession Those functions do not require the use of liftSessionStateT routes ClientSessionT SessionData ServerPartT IO Response routes do nullDir liftSessionStateT count ok toResponse you have viewed this page show time Finally we unwrap the ClientSessionT monad transformer using withClientSessionT The SessionConf type requires an encryption key You can generate the key using getDefaultKey uses default filename Alternatively you can specific the name you want to use explicitly using getKey The key will be created automatically if it does not already exist If you change the key all existing client sessions will be invalidated main IO main do key getDefaultKey let sessionConf mkSessionConf key simpleHTTP nullConf withClientSessionT sessionConf routes In real application you might want to use newtype wrapper around ClientSessionT to keep your type signatures sane An alternative version of this demo which does that can be found here http patch-tag.com mae happstack snapshot current content pretty happstack-clientsession demo demo.hs",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSession",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour session type must have an instance for this class.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSession",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#ClientSession",
          "type": "class"
        },
        "index": {
          "description": "Your session type must have an instance for this class",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSession",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:ClientSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e provides an environment in which we can access and update the client-side session state\n\u003c/p\u003e\u003cp\u003eThe inner monad needs to provide an instance of \u003ccode\u003e\u003ca\u003eHappstack\u003c/a\u003e\u003c/code\u003e so that\n the cookie value can be read and set. According \u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e\n must appear outside \u003ccode\u003eServerPartT\u003c/code\u003e not inside it.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSessionT",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#ClientSessionT",
          "type": "newtype"
        },
        "index": {
          "description": "ClientSessionT provides an environment in which we can access and update the client-side session state The inner monad needs to provide an instance of Happstack so that the cookie value can be read and set According ClientSessionT must appear outside ServerPartT not inside it",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSessionT",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:ClientSessionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe keys used to store the cookies.  We have an AES key used\n to encrypt the cookie and a Skein-MAC-512-256 key used verify\n the authencity and integrity of the cookie.  The AES key needs\n to have exactly 32 bytes (256 bits) while Skein-MAC-512-256\n should have 64 bytes (512 bits).\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einitKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "Key",
          "package": "happstack-clientsession",
          "type": "data"
        },
        "index": {
          "description": "The keys used to store the cookies We have an AES key used to encrypt the cookie and Skein-MAC-512-256 key used verify the authencity and integrity of the cookie The AES key needs to have exactly bytes bits while Skein-MAC-512-256 should have bytes bits See also getDefaultKey and initKey",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "Key",
          "package": "happstack-clientsession",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadClientSession\u003c/a\u003e\u003c/code\u003e provides the primary interface to get \u003ccode\u003esessionData\u003c/code\u003e, put \u003ccode\u003esessionData\u003c/code\u003e or expire \u003ccode\u003esessionData\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a class so you can use newtype deriving to make the functions available in your custom server monad.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "MonadClientSession",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#MonadClientSession",
          "type": "class"
        },
        "index": {
          "description": "MonadClientSession provides the primary interface to get sessionData put sessionData or expire sessionData This is class so you can use newtype deriving to make the functions available in your custom server monad",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "MonadClientSession",
          "package": "happstack-clientsession",
          "partial": "Monad Client Session",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:MonadClientSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for the session cookie for passing to \u003ccode\u003e\u003ca\u003erunClientSessionT\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithClientSessionT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionConf",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "data"
        },
        "index": {
          "description": "Configuration for the session cookie for passing to runClientSessionT or withClientSessionT",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionConf",
          "package": "happstack-clientsession",
          "partial": "Session Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:SessionConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSessionStateT\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003eStateT\u003c/code\u003e, except it records if \u003ccode\u003eput\u003c/code\u003e was ever called\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionStateT",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#SessionStateT",
          "type": "data"
        },
        "index": {
          "description": "SessionStateT is like StateT except it records if put was ever called",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionStateT",
          "package": "happstack-clientsession",
          "partial": "Session State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:SessionStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around the sessionData which tracks it state so we can\n avoid decoding or encoding/sending the cookie when not required\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionStatus",
          "package": "happstack-clientsession",
          "source": "src/Happstack-Server-ClientSession.html#SessionStatus",
          "type": "data"
        },
        "index": {
          "description": "Wrapper around the sessionData which tracks it state so we can avoid decoding or encoding sending the cookie when not required",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionStatus",
          "package": "happstack-clientsession",
          "partial": "Session Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#t:SessionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSessionT",
          "package": "happstack-clientsession",
          "signature": "ClientSessionT",
          "source": "src/Happstack-Server-ClientSession.html#ClientSessionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "ClientSessionT",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:ClientSessionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "Expired",
          "package": "happstack-clientsession",
          "signature": "Expired",
          "source": "src/Happstack-Server-ClientSession.html#SessionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "Expired",
          "package": "happstack-clientsession",
          "partial": "Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:Expired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "Modified",
          "package": "happstack-clientsession",
          "signature": "Modified sessionData",
          "source": "src/Happstack-Server-ClientSession.html#SessionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "Modified",
          "package": "happstack-clientsession",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "NoChange",
          "package": "happstack-clientsession",
          "signature": "NoChange sessionData",
          "source": "src/Happstack-Server-ClientSession.html#SessionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "NoChange",
          "package": "happstack-clientsession",
          "partial": "No Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:NoChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "SessionConf",
          "package": "happstack-clientsession",
          "signature": "SessionConf",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "SessionConf",
          "package": "happstack-clientsession",
          "partial": "Session Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:SessionConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "Unread",
          "package": "happstack-clientsession",
          "signature": "Unread",
          "source": "src/Happstack-Server-ClientSession.html#SessionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "Unread",
          "package": "happstack-clientsession",
          "partial": "Unread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:Unread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty session, i.e. what you get when there is no existing\n session stored.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "emptySession",
          "package": "happstack-clientsession",
          "signature": "st",
          "source": "src/Happstack-Server-ClientSession.html#emptySession",
          "type": "method"
        },
        "index": {
          "description": "An empty session i.e what you get when there is no existing session stored",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "emptySession",
          "package": "happstack-clientsession",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:emptySession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "expireSession",
          "package": "happstack-clientsession",
          "signature": "expireSession",
          "source": "src/Happstack-Server-ClientSession.html#expireSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "expireSession",
          "package": "happstack-clientsession",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:expireSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply calls \u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultKeyFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "getDefaultKey",
          "package": "happstack-clientsession",
          "signature": "IO Key",
          "type": "function"
        },
        "index": {
          "description": "Simply calls getKey defaultKeyFile",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "getDefaultKey",
          "package": "happstack-clientsession",
          "partial": "Default Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:getDefaultKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a key from the given text file.\n\u003c/p\u003e\u003cp\u003eIf the file does not exist or is corrupted a random key will\n be generated and stored in that file.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "getKey",
          "package": "happstack-clientsession",
          "signature": "FilePath-\u003e IO Key",
          "type": "function"
        },
        "index": {
          "description": "Get key from the given text file If the file does not exist or is corrupted random key will be generated and stored in that file",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "getKey",
          "normalized": "FilePath-\u003eIO Key",
          "package": "happstack-clientsession",
          "partial": "Key",
          "signature": "FilePath-\u003eIO Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "getSession",
          "package": "happstack-clientsession",
          "signature": "getSession",
          "source": "src/Happstack-Server-ClientSession.html#getSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "getSession",
          "package": "happstack-clientsession",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elift a computation from the \u003ccode\u003e\u003ca\u003eSessionStateT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cp\u003eThe primary purpose of this function is to make it possible to use\n the \u003ccode\u003eMonadState\u003c/code\u003e functions such as \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eset\u003c/code\u003e to get and set\n the current session data.\n\u003c/p\u003e\u003cp\u003eThat makes it possible to use the \u003ccode\u003eMonadState\u003c/code\u003e based functions provided by \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e do c \u003c- liftSessionStateT $ count += 1\n\u003c/pre\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "liftSessionStateT",
          "package": "happstack-clientsession",
          "signature": "SessionStateT sessionData m a -\u003e t m a",
          "source": "src/Happstack-Server-ClientSession.html#liftSessionStateT",
          "type": "function"
        },
        "index": {
          "description": "lift computation from the SessionStateT monad The primary purpose of this function is to make it possible to use the MonadState functions such as get and set to get and set the current session data That makes it possible to use the MonadState based functions provided by Lens e.g do liftSessionStateT count",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "liftSessionStateT",
          "normalized": "SessionStateT a b c-\u003ed b c",
          "package": "happstack-clientsession",
          "partial": "Session State",
          "signature": "SessionStateT sessionData m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:liftSessionStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform the inner monad, but leave the session data alone.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "mapClientSessionT",
          "package": "happstack-clientsession",
          "signature": "(forall s.  m (a, s) -\u003e n (b, s)) -\u003e ClientSessionT sessionData m a -\u003e ClientSessionT sessionData n b",
          "source": "src/Happstack-Server-ClientSession.html#mapClientSessionT",
          "type": "function"
        },
        "index": {
          "description": "transform the inner monad but leave the session data alone",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "mapClientSessionT",
          "normalized": "(a b c(d,e)-\u003ef(g,e))-\u003eClientSessionT h c d-\u003eClientSessionT h f g",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "signature": "(forall s. m(a,s)-\u003en(b,s))-\u003eClientSessionT sessionData m a-\u003eClientSessionT sessionData n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:mapClientSessionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the inner monad. (similar to \u003ccode\u003emapStateT\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eforall s.\u003c/code\u003e is to prevent you from modifying the session state.\n\u003c/p\u003e\u003cp\u003eIn theory we want this function to have the type:\n\u003c/p\u003e\u003cpre\u003e mapSessionStateT :: (m a -\u003e n b) -\u003e SessionStateT s m a -\u003e SessionStateT s n b\n\u003c/pre\u003e\u003cp\u003eBut that can not be done, so this is the next best thing.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "mapSessionStateT",
          "package": "happstack-clientsession",
          "signature": "(forall s.  m (a, s) -\u003e n (b, s)) -\u003e SessionStateT sessionData m a -\u003e SessionStateT sessionData n b",
          "source": "src/Happstack-Server-ClientSession.html#mapSessionStateT",
          "type": "function"
        },
        "index": {
          "description": "Transform the inner monad similar to mapStateT The forall is to prevent you from modifying the session state In theory we want this function to have the type mapSessionStateT SessionStateT SessionStateT But that can not be done so this is the next best thing",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "mapSessionStateT",
          "normalized": "(a b c(d,e)-\u003ef(g,e))-\u003eSessionStateT h c d-\u003eSessionStateT h f g",
          "package": "happstack-clientsession",
          "partial": "Session State",
          "signature": "(forall s. m(a,s)-\u003en(b,s))-\u003eSessionStateT sessionData m a-\u003eSessionStateT sessionData n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:mapSessionStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eSessionConf\u003c/a\u003e\u003c/code\u003e using defaults for everything except\n \u003ccode\u003e\u003ca\u003esessionKey\u003c/a\u003e\u003c/code\u003e.  You can use record update syntax to override individual\n fields.\n\u003c/p\u003e\u003cpre\u003e main = do key \u003c- getDefaultKey\n           let sessConf = (mkSessionConf key) { sessionCookieLife = oneWeek }\n           simpleHTTP nullConf $ withClientSessionT sessConf handlers\n   where\n     oneWeek  = MaxAge $ 60 * 60 * 24 * 7\n     handlers = msum [...]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emkSessionConf\u003c/a\u003e\u003c/code\u003e is currently defined as:\n\u003c/p\u003e\u003cpre\u003e mkSessionConf :: Key -\u003e SessionConf\n mkSessionConf key = SessionConf\n    { sessionCookieName = \"Happstack.ClientSession\"\n    , sessionCookieLife = Session\n    , sessionKey        = key\n    , sessionDomain     = \"\"\n    , sessionPath       = \"/\"\n    , sessionSecure     = False\n    , sessionHttpOnly   = True\n    }\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "mkSessionConf",
          "package": "happstack-clientsession",
          "signature": "Key -\u003e SessionConf",
          "source": "src/Happstack-Server-ClientSession.html#mkSessionConf",
          "type": "function"
        },
        "index": {
          "description": "Create SessionConf using defaults for everything except sessionKey You can use record update syntax to override individual fields main do key getDefaultKey let sessConf mkSessionConf key sessionCookieLife oneWeek simpleHTTP nullConf withClientSessionT sessConf handlers where oneWeek MaxAge handlers msum mkSessionConf is currently defined as mkSessionConf Key SessionConf mkSessionConf key SessionConf sessionCookieName Happstack.ClientSession sessionCookieLife Session sessionKey key sessionDomain sessionPath sessionSecure False sessionHttpOnly True see also getKey getDefaultKey",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "mkSessionConf",
          "normalized": "Key-\u003eSessionConf",
          "package": "happstack-clientsession",
          "partial": "Session Conf",
          "signature": "Key-\u003eSessionConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:mkSessionConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "putSession",
          "package": "happstack-clientsession",
          "signature": "putSession",
          "source": "src/Happstack-Server-ClientSession.html#putSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "putSession",
          "package": "happstack-clientsession",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:putSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.  Besides the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003eByteString\u003c/code\u003e passed to \u003ccode\u003e\u003ca\u003einitKey\u003c/a\u003e\u003c/code\u003e is returned so that it can be\n saved for later use.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "randomKey",
          "package": "happstack-clientsession",
          "signature": "IO (ByteString, Key)",
          "type": "function"
        },
        "index": {
          "description": "Generate random Key Besides the Key the ByteString passed to initKey is returned so that it can be saved for later use",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "randomKey",
          "normalized": "IO(ByteString,Key)",
          "package": "happstack-clientsession",
          "partial": "Key",
          "signature": "IO(ByteString,Key)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:randomKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the \u003ccode\u003e\u003ca\u003eClientSessionT\u003c/a\u003e\u003c/code\u003e monad and get the result plus the final \u003ccode\u003eSessionStatus sessionData\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis function does \u003cem\u003enot\u003c/em\u003e automatically update the cookie if the\n session has been modified. It is up to you to do that. You probably\n want to use \u003ccode\u003e\u003ca\u003ewithClientSessionT\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ewithClientSessionT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkSessionConf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "runClientSessionT",
          "package": "happstack-clientsession",
          "signature": "ClientSessionT sessionData m a -\u003e SessionConf -\u003e m (a, SessionStatus sessionData)",
          "source": "src/Happstack-Server-ClientSession.html#runClientSessionT",
          "type": "function"
        },
        "index": {
          "description": "run the ClientSessionT monad and get the result plus the final SessionStatus sessionData This function does not automatically update the cookie if the session has been modified It is up to you to do that You probably want to use withClientSessionT instead see also withClientSessionT mkSessionConf",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "runClientSessionT",
          "normalized": "ClientSessionT a b c-\u003eSessionConf-\u003eb(c,SessionStatus a)",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "signature": "ClientSessionT sessionData m a-\u003eSessionConf-\u003em(a,SessionStatus sessionData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:runClientSessionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifetime of that cookie.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionCookieLife",
          "package": "happstack-clientsession",
          "signature": "CookieLife",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "Lifetime of that cookie",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionCookieLife",
          "package": "happstack-clientsession",
          "partial": "Cookie Life",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionCookieLife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the cookie to hold your session data.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionCookieName",
          "package": "happstack-clientsession",
          "signature": "String",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "Name of the cookie to hold your session data",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionCookieName",
          "package": "happstack-clientsession",
          "partial": "Cookie Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionCookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie domain\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionDomain",
          "package": "happstack-clientsession",
          "signature": "String",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "cookie domain",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionDomain",
          "package": "happstack-clientsession",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly use session over HTTP (to prevent it from being stolen via cross-site scripting)\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionHttpOnly",
          "package": "happstack-clientsession",
          "signature": "Bool",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "Only use session over HTTP to prevent it from being stolen via cross-site scripting",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionHttpOnly",
          "package": "happstack-clientsession",
          "partial": "Http Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionHttpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncryption key, usually from one of \u003ccode\u003e\u003ca\u003egetKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetDefaultKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandomKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionKey",
          "package": "happstack-clientsession",
          "signature": "Key",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "Encryption key usually from one of getKey getDefaultKey and randomKey",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionKey",
          "package": "happstack-clientsession",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie path\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionPath",
          "package": "happstack-clientsession",
          "signature": "String",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "cookie path",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionPath",
          "package": "happstack-clientsession",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly use a session over secure transports.\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionSecure",
          "package": "happstack-clientsession",
          "signature": "Bool",
          "source": "src/Happstack-Server-ClientSession.html#SessionConf",
          "type": "function"
        },
        "index": {
          "description": "Only use session over secure transports",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "sessionSecure",
          "package": "happstack-clientsession",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:sessionSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.ClientSession",
          "name": "unClientSessionT",
          "package": "happstack-clientsession",
          "signature": "ReaderT SessionConf (SessionStateT sessionData m) a",
          "source": "src/Happstack-Server-ClientSession.html#ClientSessionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "unClientSessionT",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:unClientSessionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around your handlers that use the session.\n\u003c/p\u003e\u003cp\u003eThis function automatically takes care of expiring or updating the\n cookie if the \u003ccode\u003e\u003ca\u003eexpireSession\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003emodifySession\u003c/code\u003e is called.\n\u003c/p\u003e\u003cp\u003eIf no changes are made to the session, then the cookie will not be\n resent (because there is no need to).\n\u003c/p\u003e",
          "module": "Happstack.Server.ClientSession",
          "name": "withClientSessionT",
          "package": "happstack-clientsession",
          "signature": "SessionConf -\u003e ClientSessionT sessionData m a -\u003e m a",
          "source": "src/Happstack-Server-ClientSession.html#withClientSessionT",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around your handlers that use the session This function automatically takes care of expiring or updating the cookie if the expireSession or modifySession is called If no changes are made to the session then the cookie will not be resent because there is no need to",
          "hierarchy": "Happstack Server ClientSession",
          "module": "Happstack.Server.ClientSession",
          "name": "withClientSessionT",
          "normalized": "SessionConf-\u003eClientSessionT a b c-\u003eb c",
          "package": "happstack-clientsession",
          "partial": "Client Session",
          "signature": "SessionConf-\u003eClientSessionT sessionData m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-clientsession/docs/Happstack-Server-ClientSession.html#v:withClientSessionT"
      }
    }
  ]
]