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
        "word": "yesod-auth-account"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn auth plugin for accounts. Each account consists of a username, email, and password.\n\u003c/p\u003e\u003cp\u003eThis module is designed so that you can use the default pages for login, account\n creation, change password, etc.  But the module also exports some forms which you\n can embed into your own pages, customizing the account process.  The minimal requirements\n to use this module are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If you are not using persistent or just want more control over the user data, you can use\n   any datatype for user information and make it an instance of \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e.  You must\n   also create an instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e You may use a user datatype created by persistent, in which case you can make the datatype\n   an instance of \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e.  In this case, \n   \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e from this module already implements the \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e interface for you.\n\u003c/li\u003e\u003cli\u003e Make your master site an instance of \u003ccode\u003e\u003ca\u003eAccountSendEmail\u003c/a\u003e\u003c/code\u003e.  By default, this class\n   just logs a message so during development this class requires no implementation.\n\u003c/li\u003e\u003cli\u003e Make your master site and database an instance of \u003ccode\u003e\u003ca\u003eYesodAuthAccount\u003c/a\u003e\u003c/code\u003e.  There is only\n   one required function which must be implemented (\u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e) although there\n   are several functions you can override in this class to customize the behavior of this\n   module.\n\u003c/li\u003e\u003cli\u003e Include \u003ccode\u003e\u003ca\u003eaccountPlugin\u003c/a\u003e\u003c/code\u003e in the list of plugins in your instance of \u003ccode\u003e\u003ca\u003eYesodAuth\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Account",
          "name": "Account",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html",
          "type": "module"
        },
        "index": {
          "description": "An auth plugin for accounts Each account consists of username email and password This module is designed so that you can use the default pages for login account creation change password etc But the module also exports some forms which you can embed into your own pages customizing the account process The minimal requirements to use this module are If you are not using persistent or just want more control over the user data you can use any datatype for user information and make it an instance of UserCredentials You must also create an instance of AccountDB You may use user datatype created by persistent in which case you can make the datatype an instance of PersistUserCredentials instead of UserCredentials In this case AccountPersistDB from this module already implements the AccountDB interface for you Make your master site an instance of AccountSendEmail By default this class just logs message so during development this class requires no implementation Make your master site and database an instance of YesodAuthAccount There is only one required function which must be implemented runAccountDB although there are several functions you can override in this class to customize the behavior of this module Include accountPlugin in the list of plugins in your instance of YesodAuth",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "Account",
          "package": "yesod-auth-account",
          "partial": "Account",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the database operations to load and update user data.\n\u003c/p\u003e\u003cp\u003ePersistent users can use \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e and don't need to create their own instance.\n If you are not using persistent or are using persistent but want to customize the database\n activity, you must manually make a monad an instance of this class.  You can use any monad\n for which you can write \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e, but typically the monad will be a newtype of HandlerT.\n For example,\n\u003c/p\u003e\u003cpre\u003e newtype MyAccountDB a = MyAccountDB {runMyAccountDB :: HandlerT MyApp IO a}\n    deriving (Monad, MonadIO)\n instance AccountDB MyAccountDB where\n     ....\n\u003c/pre\u003e",
          "module": "Yesod.Auth.Account",
          "name": "AccountDB",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#AccountDB",
          "type": "class"
        },
        "index": {
          "description": "These are the database operations to load and update user data Persistent users can use AccountPersistDB and don need to create their own instance If you are not using persistent or are using persistent but want to customize the database activity you must manually make monad an instance of this class You can use any monad for which you can write runAccountDB but typically the monad will be newtype of HandlerT For example newtype MyAccountDB MyAccountDB runMyAccountDB HandlerT MyApp IO deriving Monad MonadIO instance AccountDB MyAccountDB where",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "AccountDB",
          "package": "yesod-auth-account",
          "partial": "Account DB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype which when using persistent is an instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "AccountPersistDB",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#AccountPersistDB",
          "type": "data"
        },
        "index": {
          "description": "newtype which when using persistent is an instance of AccountDB",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "AccountPersistDB",
          "package": "yesod-auth-account",
          "partial": "Account Persist DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountPersistDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to send email.\n\u003c/p\u003e\u003cp\u003eBoth of the methods are implemented by default to just log a message,\n so during development there are no required methods.  For production,\n I recommend \u003ca\u003ehttp://hackage.haskell.org/package/mime-mail\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "AccountSendEmail",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#AccountSendEmail",
          "type": "class"
        },
        "index": {
          "description": "class to send email Both of the methods are implemented by default to just log message so during development there are no required methods For production recommend http hackage.haskell.org package mime-mail",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "AccountSendEmail",
          "package": "yesod-auth-account",
          "partial": "Account Send Email",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountSendEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data collected in the login form.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "LoginData",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#LoginData",
          "type": "data"
        },
        "index": {
          "description": "The data collected in the login form",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "LoginData",
          "package": "yesod-auth-account",
          "partial": "Login Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:LoginData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data collected in the new account form.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "NewAccountData",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "data"
        },
        "index": {
          "description": "The data collected in the new account form",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "NewAccountData",
          "package": "yesod-auth-account",
          "partial": "New Account Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:NewAccountData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data for setting a new password.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "NewPasswordData",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "data"
        },
        "index": {
          "description": "The data for setting new password",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "NewPasswordData",
          "package": "yesod-auth-account",
          "partial": "New Password Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:NewPasswordData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for the data type which stores the user info when using persistent.\n\u003c/p\u003e\u003cp\u003eYou must make a data type that is either an instance of this class or of\n   \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e, depending on if you are using persistent or not.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "PersistUserCredentials",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#PersistUserCredentials",
          "type": "class"
        },
        "index": {
          "description": "Interface for the data type which stores the user info when using persistent You must make data type that is either an instance of this class or of UserCredentials depending on if you are using persistent or not",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "PersistUserCredentials",
          "package": "yesod-auth-account",
          "partial": "Persist User Credentials",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:PersistUserCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for the data type which stores the user info when not using persistent.\n\u003c/p\u003e\u003cp\u003eYou must make a data type that is either an instance of this class or of\n   \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e, depending on if you are using persistent or not.\n\u003c/p\u003e\u003cp\u003eUsers are uniquely identified by their username, and for each user we must store the email,\n   the verify status, a hashed user password, and a reset password key.  The format for the\n   hashed password is the format from \u003ca\u003eCrypto.PasswordStore\u003c/a\u003e.  If the email has been verified\n   and no password reset is in progress, the relevent keys should be the empty string.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "UserCredentials",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#UserCredentials",
          "type": "class"
        },
        "index": {
          "description": "Interface for the data type which stores the user info when not using persistent You must make data type that is either an instance of this class or of PersistUserCredentials depending on if you are using persistent or not Users are uniquely identified by their username and for each user we must store the email the verify status hashed user password and reset password key The format for the hashed password is the format from Crypto.PasswordStore If the email has been verified and no password reset is in progress the relevent keys should be the empty string",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "UserCredentials",
          "package": "yesod-auth-account",
          "partial": "User Credentials",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:UserCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach user is uniquely identified by a username.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "Username",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#Username",
          "type": "type"
        },
        "index": {
          "description": "Each user is uniquely identified by username",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "Username",
          "package": "yesod-auth-account",
          "partial": "Username",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:Username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main class controlling the account plugin.\n\u003c/p\u003e\u003cp\u003eYou must make your database instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e and your master site\n an instance of this class.  The only required method is \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e, although\n this class contains many other methods to customize the behavior of the account plugin.\n\u003c/p\u003e\u003cp\u003eContinuing the example from the manual creation of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e, a minimal instance is\n\u003c/p\u003e\u003cpre\u003e instance YesodAuthAccount MyAccountDB MyApp where\n     runAccountDB = runMyAccountDB\n\u003c/pre\u003e\u003cp\u003eIf instead you are using persistent and have made an instance of \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e,\n a minimal instance is\n\u003c/p\u003e\u003cpre\u003e instance YesodAuthAccount (AccountPersistDB MyApp User) MyApp where\n    runAccountDB = runAccountPersistDB\n\u003c/pre\u003e",
          "module": "Yesod.Auth.Account",
          "name": "YesodAuthAccount",
          "package": "yesod-auth-account",
          "source": "src/Yesod-Auth-Account.html#YesodAuthAccount",
          "type": "class"
        },
        "index": {
          "description": "The main class controlling the account plugin You must make your database instance of AccountDB and your master site an instance of this class The only required method is runAccountDB although this class contains many other methods to customize the behavior of the account plugin Continuing the example from the manual creation of AccountDB minimal instance is instance YesodAuthAccount MyAccountDB MyApp where runAccountDB runMyAccountDB If instead you are using persistent and have made an instance of PersistUserCredentials minimal instance is instance YesodAuthAccount AccountPersistDB MyApp User MyApp where runAccountDB runAccountPersistDB",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "YesodAuthAccount",
          "package": "yesod-auth-account",
          "partial": "Yesod Auth Account",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:YesodAuthAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "LoginData",
          "package": "yesod-auth-account",
          "signature": "LoginData",
          "source": "src/Yesod-Auth-Account.html#LoginData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "LoginData",
          "package": "yesod-auth-account",
          "partial": "Login Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:LoginData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "NewAccountData",
          "package": "yesod-auth-account",
          "signature": "NewAccountData",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "NewAccountData",
          "package": "yesod-auth-account",
          "partial": "New Account Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:NewAccountData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "NewPasswordData",
          "package": "yesod-auth-account",
          "signature": "NewPasswordData",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "NewPasswordData",
          "package": "yesod-auth-account",
          "partial": "New Password Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:NewPasswordData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe account authentication plugin.  Here is a complete example using persistent.\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE QuasiQuotes, TypeFamilies, GeneralizedNewtypeDeriving #-}\n{-# LANGUAGE FlexibleContexts, FlexibleInstances, TemplateHaskell, OverloadedStrings #-}\n{-# LANGUAGE GADTs, MultiParamTypeClasses, TypeSynonymInstances #-}\n\nimport Data.Text (Text)\nimport Data.ByteString (ByteString)\nimport Database.Persist.Sqlite\nimport Control.Monad.Logger (runStderrLoggingT)\nimport Yesod\nimport Yesod.Auth\nimport Yesod.Auth.Account\n\nshare [mkPersist sqlSettings, mkMigrate \"migrateAll\"] [persistUpperCase|\nUser\n    username Text\n    UniqueUsername username\n    password ByteString\n    emailAddress Text\n    verified Bool\n    verifyKey Text\n    resetPasswordKey Text\n    deriving Show\n|]\n\ninstance PersistUserCredentials User where\n    userUsernameF = UserUsername\n    userPasswordHashF = UserPassword\n    userEmailF = UserEmailAddress\n    userEmailVerifiedF = UserVerified\n    userEmailVerifyKeyF = UserVerifyKey\n    userResetPwdKeyF = UserResetPasswordKey\n    uniqueUsername = UniqueUsername\n\n    userCreate name email key pwd = User name pwd email False key \"\"\n\ndata MyApp = MyApp ConnectionPool\n\nmkYesod \"MyApp\" [parseRoutes|\n/ HomeR GET\n/auth AuthR Auth getAuth\n|]\n\ninstance Yesod MyApp\n\ninstance RenderMessage MyApp FormMessage where\n    renderMessage _ _ = defaultFormMessage\n\ninstance YesodPersist MyApp where\n    type YesodPersistBackend MyApp = SqlPersistT\n    runDB action = do\n        MyApp pool \u003c- getYesod\n        runSqlPool action pool\n\ninstance YesodAuth MyApp where\n    type AuthId MyApp = Username\n    getAuthId = return . Just . credsIdent\n    loginDest _ = HomeR\n    logoutDest _ = HomeR\n    authPlugins _ = [accountPlugin]\n    authHttpManager _ = error \"No manager needed\"\n    onLogin = return ()\n    maybeAuthId = lookupSession \"_ID\"\n\ninstance AccountSendEmail MyApp\n\ninstance YesodAuthAccount (AccountPersistDB MyApp User) MyApp where\n    runAccountDB = runAccountPersistDB\n\ngetHomeR :: Handler Html\ngetHomeR = do\n    maid \u003c- maybeAuthId\n    case maid of\n        Nothing -\u003e defaultLayout $ [whamlet|\n\u003cp\u003ePlease visit the \u003ca href=\"@{AuthR LoginR}\"\u003eLogin page\u003c/a\u003e\n|]\n        Just u -\u003e defaultLayout $ [whamlet|\n\u003cp\u003eYou are logged in as #{u}\n\u003cp\u003e\u003ca href=\"@{AuthR LogoutR}\"\u003eLogout\u003c/a\u003e\n|]\n\nmain :: IO ()\nmain = withSqlitePool \"test.db3\" 10 $ \\pool -\u003e do\n    runStderrLoggingT $ runSqlPool (runMigration migrateAll) pool\n    warp 3000 $ MyApp pool\n\u003c/pre\u003e",
          "module": "Yesod.Auth.Account",
          "name": "accountPlugin",
          "package": "yesod-auth-account",
          "signature": "AuthPlugin master",
          "source": "src/Yesod-Auth-Account.html#accountPlugin",
          "type": "function"
        },
        "index": {
          "description": "The account authentication plugin Here is complete example using persistent LANGUAGE QuasiQuotes TypeFamilies GeneralizedNewtypeDeriving LANGUAGE FlexibleContexts FlexibleInstances TemplateHaskell OverloadedStrings LANGUAGE GADTs MultiParamTypeClasses TypeSynonymInstances import Data.Text Text import Data.ByteString ByteString import Database.Persist.Sqlite import Control.Monad.Logger runStderrLoggingT import Yesod import Yesod.Auth import Yesod.Auth.Account share mkPersist sqlSettings mkMigrate migrateAll persistUpperCase User username Text UniqueUsername username password ByteString emailAddress Text verified Bool verifyKey Text resetPasswordKey Text deriving Show instance PersistUserCredentials User where userUsernameF UserUsername userPasswordHashF UserPassword userEmailF UserEmailAddress userEmailVerifiedF UserVerified userEmailVerifyKeyF UserVerifyKey userResetPwdKeyF UserResetPasswordKey uniqueUsername UniqueUsername userCreate name email key pwd User name pwd email False key data MyApp MyApp ConnectionPool mkYesod MyApp parseRoutes HomeR GET auth AuthR Auth getAuth instance Yesod MyApp instance RenderMessage MyApp FormMessage where renderMessage defaultFormMessage instance YesodPersist MyApp where type YesodPersistBackend MyApp SqlPersistT runDB action do MyApp pool getYesod runSqlPool action pool instance YesodAuth MyApp where type AuthId MyApp Username getAuthId return Just credsIdent loginDest HomeR logoutDest HomeR authPlugins accountPlugin authHttpManager error No manager needed onLogin return maybeAuthId lookupSession ID instance AccountSendEmail MyApp instance YesodAuthAccount AccountPersistDB MyApp User MyApp where runAccountDB runAccountPersistDB getHomeR Handler Html getHomeR do maid maybeAuthId case maid of Nothing defaultLayout whamlet Please visit the href AuthR LoginR Login page Just defaultLayout whamlet You are logged in as href AuthR LogoutR Logout main IO main withSqlitePool test.db3 pool do runStderrLoggingT runSqlPool runMigration migrateAll pool warp MyApp pool",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "accountPlugin",
          "package": "yesod-auth-account",
          "partial": "Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:accountPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new account.  The password reset key should be added as an empty string.\n The creation can fail with an error message, in which case the error is set in a\n message and the post handler redirects to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "addNewUser",
          "package": "yesod-auth-account",
          "signature": "addNewUser",
          "source": "src/Yesod-Auth-Account.html#addNewUser",
          "type": "method"
        },
        "index": {
          "description": "Create new account The password reset key should be added as an empty string The creation can fail with an error message in which case the error is set in message and the post handler redirects to newAccountR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "addNewUser",
          "package": "yesod-auth-account",
          "partial": "New User",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:addNewUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the password reset inside this plugin be allowed?  Defaults to True\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "allowPasswordReset",
          "package": "yesod-auth-account",
          "signature": "master -\u003e Bool",
          "source": "src/Yesod-Auth-Account.html#allowPasswordReset",
          "type": "method"
        },
        "index": {
          "description": "Should the password reset inside this plugin be allowed Defaults to True",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "allowPasswordReset",
          "normalized": "a-\u003eBool",
          "package": "yesod-auth-account",
          "partial": "Password Reset",
          "signature": "master-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:allowPasswordReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA form validator for valid usernames during new account creation.\n\u003c/p\u003e\u003cp\u003eBy default this allows usernames made up of \u003ccode\u003e\u003ca\u003eisAlphaNum\u003c/a\u003e\u003c/code\u003e.  You can also ignore\n this validation and instead validate in \u003ccode\u003e\u003ca\u003eaddNewUser\u003c/a\u003e\u003c/code\u003e, but validating here\n allows the validation to occur before database activity (checking existing\n username) and before random salt creation (requires IO).\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "checkValidUsername",
          "package": "yesod-auth-account",
          "signature": "Username -\u003e m (Either Text Username)",
          "source": "src/Yesod-Auth-Account.html#checkValidUsername",
          "type": "method"
        },
        "index": {
          "description": "form validator for valid usernames during new account creation By default this allows usernames made up of isAlphaNum You can also ignore this validation and instead validate in addNewUser but validating here allows the validation to occur before database activity checking existing username and before random salt creation requires IO",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "checkValidUsername",
          "normalized": "Username-\u003ea(Either Text Username)",
          "package": "yesod-auth-account",
          "partial": "Valid Username",
          "signature": "Username-\u003em(Either Text Username)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:checkValidUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to create a new account.\n\u003c/p\u003e\u003cp\u003eYou can use this action inside your own implementation of \u003ccode\u003e\u003ca\u003epostNewAccountR\u003c/a\u003e\u003c/code\u003e if you\n add additional fields to the new account creation.  This action assumes the user has\n not yet been created in the database and will create the user, so this action should\n be run first in your handler.  Note that this action does not check if the passwords\n are equal. If an error occurs (username exists, etc.) this will set a message and\n redirect to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "createNewAccount",
          "package": "yesod-auth-account",
          "signature": "NewAccountData -\u003e (Route Auth -\u003e Route master) -\u003e HandlerT master IO (UserAccount db)",
          "source": "src/Yesod-Auth-Account.html#createNewAccount",
          "type": "function"
        },
        "index": {
          "description": "An action to create new account You can use this action inside your own implementation of postNewAccountR if you add additional fields to the new account creation This action assumes the user has not yet been created in the database and will create the user so this action should be run first in your handler Note that this action does not check if the passwords are equal If an error occurs username exists etc this will set message and redirect to newAccountR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "createNewAccount",
          "normalized": "NewAccountData-\u003e(Route Auth-\u003eRoute a)-\u003eHandlerT a IO(UserAccount b)",
          "package": "yesod-auth-account",
          "partial": "New Account",
          "signature": "NewAccountData-\u003e(Route Auth-\u003eRoute master)-\u003eHandlerT master IO(UserAccount db)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:createNewAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new account page.\n\u003c/p\u003e\u003cp\u003eThis is the page which is displayed on a GET to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e, and defaults to\n an embedding of \u003ccode\u003e\u003ca\u003enewAccountWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "getNewAccountR",
          "package": "yesod-auth-account",
          "signature": "HandlerT Auth (HandlerT master IO) Html",
          "source": "src/Yesod-Auth-Account.html#getNewAccountR",
          "type": "method"
        },
        "index": {
          "description": "The new account page This is the page which is displayed on GET to newAccountR and defaults to an embedding of newAccountWidget",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "getNewAccountR",
          "package": "yesod-auth-account",
          "partial": "New Account",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:getNewAccountR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe page which prompts for a username and sends an email allowing password reset.\n   By default, it embeds \u003ccode\u003e\u003ca\u003eresetPasswordWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "getResetPasswordR",
          "package": "yesod-auth-account",
          "signature": "HandlerT Auth (HandlerT master IO) Html",
          "source": "src/Yesod-Auth-Account.html#getResetPasswordR",
          "type": "method"
        },
        "index": {
          "description": "The page which prompts for username and sends an email allowing password reset By default it embeds resetPasswordWidget",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "getResetPasswordR",
          "package": "yesod-auth-account",
          "partial": "Reset Password",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:getResetPasswordR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSalt and hash a password.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "hashPassword",
          "package": "yesod-auth-account",
          "signature": "Text -\u003e m ByteString",
          "source": "src/Yesod-Auth-Account.html#hashPassword",
          "type": "function"
        },
        "index": {
          "description": "Salt and hash password",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "hashPassword",
          "normalized": "Text-\u003ea ByteString",
          "package": "yesod-auth-account",
          "partial": "Password",
          "signature": "Text-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:hashPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a user by username\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "loadUser",
          "package": "yesod-auth-account",
          "signature": "Username -\u003e m (Maybe (UserAccount m))",
          "source": "src/Yesod-Auth-Account.html#loadUser",
          "type": "method"
        },
        "index": {
          "description": "Load user by username",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loadUser",
          "normalized": "Username-\u003ea(Maybe(UserAccount a))",
          "package": "yesod-auth-account",
          "partial": "User",
          "signature": "Username-\u003em(Maybe(UserAccount m))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loadUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe login form.\n\u003c/p\u003e\u003cp\u003eYou can embed this form into your own pages if you want a custom rendering of this\n form or to include a login form on your own pages. The form submission should be\n posted to \u003ccode\u003e\u003ca\u003eloginFormPostTargetR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "loginForm",
          "package": "yesod-auth-account",
          "signature": "AForm m LoginData",
          "source": "src/Yesod-Auth-Account.html#loginForm",
          "type": "function"
        },
        "index": {
          "description": "The login form You can embed this form into your own pages if you want custom rendering of this form or to include login form on your own pages The form submission should be posted to loginFormPostTargetR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loginForm",
          "package": "yesod-auth-account",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe POST target for the \u003ccode\u003e\u003ca\u003eloginForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "loginFormPostTargetR",
          "package": "yesod-auth-account",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Account.html#loginFormPostTargetR",
          "type": "function"
        },
        "index": {
          "description": "The POST target for the loginForm",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loginFormPostTargetR",
          "package": "yesod-auth-account",
          "partial": "Form Post Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginFormPostTargetR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "loginPassword",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#LoginData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loginPassword",
          "package": "yesod-auth-account",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "loginUsername",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#LoginData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loginUsername",
          "package": "yesod-auth-account",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eloginForm\u003c/a\u003e\u003c/code\u003e using renderDivs.\n\u003c/p\u003e\u003cp\u003eThis is the widget used in the default implementation of \u003ccode\u003e\u003ca\u003eloginHandler\u003c/a\u003e\u003c/code\u003e.\n The widget also includes links to the new account and reset password pages.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "loginWidget",
          "package": "yesod-auth-account",
          "signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth-Account.html#loginWidget",
          "type": "function"
        },
        "index": {
          "description": "default rendering of loginForm using renderDivs This is the widget used in the default implementation of loginHandler The widget also includes links to the new account and reset password pages",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "loginWidget",
          "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth-account",
          "partial": "Widget",
          "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newAccountEmail",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountEmail",
          "package": "yesod-auth-account",
          "partial": "Account Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new account form.\n\u003c/p\u003e\u003cp\u003eYou can embed this form into your own pages or into \u003ccode\u003e\u003ca\u003egetNewAccountR\u003c/a\u003e\u003c/code\u003e.  The form\n submission should be posted to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.  Alternatively, you could embed this\n form into a larger form where you prompt for more information during account\n creation.  In this case, the NewAccountData should be passed to \u003ccode\u003e\u003ca\u003ecreateNewAccount\u003c/a\u003e\u003c/code\u003e\n from inside \u003ccode\u003e\u003ca\u003epostNewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newAccountForm",
          "package": "yesod-auth-account",
          "signature": "AForm m NewAccountData",
          "source": "src/Yesod-Auth-Account.html#newAccountForm",
          "type": "function"
        },
        "index": {
          "description": "The new account form You can embed this form into your own pages or into getNewAccountR The form submission should be posted to newAccountR Alternatively you could embed this form into larger form where you prompt for more information during account creation In this case the NewAccountData should be passed to createNewAccount from inside postNewAccountR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountForm",
          "package": "yesod-auth-account",
          "partial": "Account Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newAccountPassword1",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountPassword1",
          "package": "yesod-auth-account",
          "partial": "Account Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountPassword1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newAccountPassword2",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountPassword2",
          "package": "yesod-auth-account",
          "partial": "Account Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountPassword2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute for the default new account page.\n\u003c/p\u003e\u003cp\u003eSee the New Account section below for customizing the new account process.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newAccountR",
          "package": "yesod-auth-account",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Account.html#newAccountR",
          "type": "function"
        },
        "index": {
          "description": "Route for the default new account page See the New Account section below for customizing the new account process",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountR",
          "package": "yesod-auth-account",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newAccountUsername",
          "package": "yesod-auth-account",
          "signature": "Username",
          "source": "src/Yesod-Auth-Account.html#NewAccountData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountUsername",
          "package": "yesod-auth-account",
          "partial": "Account Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default rendering of the \u003ccode\u003e\u003ca\u003enewAccountForm\u003c/a\u003e\u003c/code\u003e using renderDivs.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newAccountWidget",
          "package": "yesod-auth-account",
          "signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth-Account.html#newAccountWidget",
          "type": "function"
        },
        "index": {
          "description": "default rendering of the newAccountForm using renderDivs",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newAccountWidget",
          "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth-account",
          "partial": "Account Widget",
          "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe form for setting a new password. It contains hidden fields for the username and key and prompts\n for the passwords.  This form should be posted to \u003ccode\u003e\u003ca\u003esetPasswordR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordForm",
          "package": "yesod-auth-account",
          "signature": "Username-\u003e Text-\u003e AForm m NewPasswordData",
          "type": "function"
        },
        "index": {
          "description": "The form for setting new password It contains hidden fields for the username and key and prompts for the passwords This form should be posted to setPasswordR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordForm",
          "normalized": "Username-\u003eText-\u003eAForm a NewPasswordData",
          "package": "yesod-auth-account",
          "partial": "Password Form",
          "signature": "Username-\u003eText-\u003eAForm m NewPasswordData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newPasswordKey",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordKey",
          "package": "yesod-auth-account",
          "partial": "Password Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newPasswordPwd1",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordPwd1",
          "package": "yesod-auth-account",
          "partial": "Password Pwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordPwd1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newPasswordPwd2",
          "package": "yesod-auth-account",
          "signature": "Text",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordPwd2",
          "package": "yesod-auth-account",
          "partial": "Password Pwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordPwd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL sent in an email when the user requests to reset their password\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordR",
          "package": "yesod-auth-account",
          "signature": "Username-\u003e Text-\u003e AuthRoute",
          "type": "function"
        },
        "index": {
          "description": "The URL sent in an email when the user requests to reset their password",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordR",
          "normalized": "Username-\u003eText-\u003eAuthRoute",
          "package": "yesod-auth-account",
          "partial": "Password",
          "signature": "Username-\u003eText-\u003eAuthRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "newPasswordUser",
          "package": "yesod-auth-account",
          "signature": "Username",
          "source": "src/Yesod-Auth-Account.html#NewPasswordData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordUser",
          "package": "yesod-auth-account",
          "partial": "Password User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003enewPasswordForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordWidget",
          "package": "yesod-auth-account",
          "signature": "UserAccount db -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth-Account.html#newPasswordWidget",
          "type": "function"
        },
        "index": {
          "description": "default rendering of newPasswordForm",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newPasswordWidget",
          "normalized": "UserAccount a-\u003e(Route Auth-\u003eRoute b)-\u003eWidgetT b IO()",
          "package": "yesod-auth-account",
          "partial": "Password Widget",
          "signature": "UserAccount db-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly create a new verification key.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "newVerifyKey",
          "package": "yesod-auth-account",
          "signature": "m Text",
          "source": "src/Yesod-Auth-Account.html#newVerifyKey",
          "type": "function"
        },
        "index": {
          "description": "Randomly create new verification key",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "newVerifyKey",
          "package": "yesod-auth-account",
          "partial": "Verify Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newVerifyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles new account creation.\n\u003c/p\u003e\u003cp\u003eBy default, this processes \u003ccode\u003e\u003ca\u003enewAccountForm\u003c/a\u003e\u003c/code\u003e, calls \u003ccode\u003e\u003ca\u003ecreateNewAccount\u003c/a\u003e\u003c/code\u003e, sets a message\n and redirects to LoginR.  If an error occurs, a message is set and the user is\n redirected to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "postNewAccountR",
          "package": "yesod-auth-account",
          "signature": "HandlerT Auth (HandlerT master IO) Html",
          "source": "src/Yesod-Auth-Account.html#postNewAccountR",
          "type": "method"
        },
        "index": {
          "description": "Handles new account creation By default this processes newAccountForm calls createNewAccount sets message and redirects to LoginR If an error occurs message is set and the user is redirected to newAccountR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "postNewAccountR",
          "package": "yesod-auth-account",
          "partial": "New Account",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:postNewAccountR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA form to allow the user to request the email validation be resent.\n\u003c/p\u003e\u003cp\u003eIntended for use in \u003ccode\u003e\u003ca\u003eunregisteredLogin\u003c/a\u003e\u003c/code\u003e.  The result should be posted to\n \u003ccode\u003e\u003ca\u003eresendVerifyR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyEmailForm",
          "package": "yesod-auth-account",
          "signature": "Username -\u003e AForm m Username",
          "source": "src/Yesod-Auth-Account.html#resendVerifyEmailForm",
          "type": "function"
        },
        "index": {
          "description": "form to allow the user to request the email validation be resent Intended for use in unregisteredLogin The result should be posted to resendVerifyR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyEmailForm",
          "normalized": "Username-\u003eAForm a Username",
          "package": "yesod-auth-account",
          "partial": "Verify Email Form",
          "signature": "Username-\u003eAForm m Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyEmailForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eresendVerifyEmailForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyEmailWidget",
          "package": "yesod-auth-account",
          "signature": "Username -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth-Account.html#resendVerifyEmailWidget",
          "type": "function"
        },
        "index": {
          "description": "default rendering of resendVerifyEmailForm",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyEmailWidget",
          "normalized": "Username-\u003e(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth-account",
          "partial": "Verify Email Widget",
          "signature": "Username-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyEmailWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe POST target for resending a verification email\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyR",
          "package": "yesod-auth-account",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Account.html#resendVerifyR",
          "type": "function"
        },
        "index": {
          "description": "The POST target for resending verification email",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resendVerifyR",
          "package": "yesod-auth-account",
          "partial": "Verify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA form for the user to request that an email be sent to them to allow them to reset\n their password.  This form contains a field for the username (plus the CSRF token).\n The form should be posted to \u003ccode\u003e\u003ca\u003eresetPasswordR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordForm",
          "package": "yesod-auth-account",
          "signature": "AForm m Username",
          "source": "src/Yesod-Auth-Account.html#resetPasswordForm",
          "type": "function"
        },
        "index": {
          "description": "form for the user to request that an email be sent to them to allow them to reset their password This form contains field for the username plus the CSRF token The form should be posted to resetPasswordR",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordForm",
          "package": "yesod-auth-account",
          "partial": "Password Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute for the reset password page.\n\u003c/p\u003e\u003cp\u003eThis page allows the user to reset their password by requesting an email with a\n reset URL be sent to them.  See the Password Reset section below for customization.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordR",
          "package": "yesod-auth-account",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Account.html#resetPasswordR",
          "type": "function"
        },
        "index": {
          "description": "Route for the reset password page This page allows the user to reset their password by requesting an email with reset URL be sent to them See the Password Reset section below for customization",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordR",
          "package": "yesod-auth-account",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eresetPasswordForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordWidget",
          "package": "yesod-auth-account",
          "signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth-Account.html#resetPasswordWidget",
          "type": "function"
        },
        "index": {
          "description": "default rendering of resetPasswordForm",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "resetPasswordWidget",
          "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth-account",
          "partial": "Password Widget",
          "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a database action.  This is the only required method.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "runAccountDB",
          "package": "yesod-auth-account",
          "signature": "db a -\u003e HandlerT master IO a",
          "source": "src/Yesod-Auth-Account.html#runAccountDB",
          "type": "method"
        },
        "index": {
          "description": "Run database action This is the only required method",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "runAccountDB",
          "normalized": "a b-\u003eHandlerT c IO b",
          "package": "yesod-auth-account",
          "partial": "Account DB",
          "signature": "db a-\u003eHandlerT master IO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:runAccountDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this for \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e if you are using \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e as your database type.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "runAccountPersistDB",
          "package": "yesod-auth-account",
          "signature": "AccountPersistDB master user a -\u003e HandlerT master IO a",
          "source": "src/Yesod-Auth-Account.html#runAccountPersistDB",
          "type": "function"
        },
        "index": {
          "description": "Use this for runAccountDB if you are using AccountPersistDB as your database type",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "runAccountPersistDB",
          "normalized": "AccountPersistDB a b c-\u003eHandlerT a IO c",
          "package": "yesod-auth-account",
          "partial": "Account Persist DB",
          "signature": "AccountPersistDB master user a-\u003eHandlerT master IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:runAccountPersistDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "sendNewPasswordEmail",
          "package": "yesod-auth-account",
          "signature": "sendNewPasswordEmail",
          "source": "src/Yesod-Auth-Account.html#sendNewPasswordEmail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "sendNewPasswordEmail",
          "package": "yesod-auth-account",
          "partial": "New Password Email",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:sendNewPasswordEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "sendVerifyEmail",
          "package": "yesod-auth-account",
          "signature": "sendVerifyEmail",
          "source": "src/Yesod-Auth-Account.html#sendVerifyEmail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "sendVerifyEmail",
          "package": "yesod-auth-account",
          "partial": "Verify Email",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:sendVerifyEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a new hashed password.  This should also set the password reset key to the empty\n string.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "setNewPassword",
          "package": "yesod-auth-account",
          "signature": "setNewPassword",
          "source": "src/Yesod-Auth-Account.html#setNewPassword",
          "type": "method"
        },
        "index": {
          "description": "Set new hashed password This should also set the password reset key to the empty string",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "setNewPassword",
          "package": "yesod-auth-account",
          "partial": "New Password",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setNewPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange/set the users password reset key.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "setNewPasswordKey",
          "package": "yesod-auth-account",
          "signature": "setNewPasswordKey",
          "source": "src/Yesod-Auth-Account.html#setNewPasswordKey",
          "type": "method"
        },
        "index": {
          "description": "Change set the users password reset key",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "setNewPasswordKey",
          "package": "yesod-auth-account",
          "partial": "New Password Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setNewPasswordKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe page which allows the user to set a new password.\n\u003c/p\u003e\u003cp\u003eThis is called only when the email key has been verified as correct. By default, it embeds\n \u003ccode\u003e\u003ca\u003enewPasswordWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "setPasswordHandler",
          "package": "yesod-auth-account",
          "signature": "UserAccount db -\u003e HandlerT Auth (HandlerT master IO) Html",
          "source": "src/Yesod-Auth-Account.html#setPasswordHandler",
          "type": "method"
        },
        "index": {
          "description": "The page which allows the user to set new password This is called only when the email key has been verified as correct By default it embeds newPasswordWidget",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "setPasswordHandler",
          "normalized": "UserAccount a-\u003eHandlerT Auth(HandlerT b IO)Html",
          "package": "yesod-auth-account",
          "partial": "Password Handler",
          "signature": "UserAccount db-\u003eHandlerT Auth(HandlerT master IO)Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setPasswordHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe POST target for reseting the password\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "setPasswordR",
          "package": "yesod-auth-account",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Account.html#setPasswordR",
          "type": "function"
        },
        "index": {
          "description": "The POST target for reseting the password",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "setPasswordR",
          "package": "yesod-auth-account",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setPasswordR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange/set the users email verification key.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "setVerifyKey",
          "package": "yesod-auth-account",
          "signature": "setVerifyKey",
          "source": "src/Yesod-Auth-Account.html#setVerifyKey",
          "type": "method"
        },
        "index": {
          "description": "Change set the users email verification key",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "setVerifyKey",
          "package": "yesod-auth-account",
          "partial": "Verify Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setVerifyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "uniqueUsername",
          "package": "yesod-auth-account",
          "signature": "Text -\u003e Unique u",
          "source": "src/Yesod-Auth-Account.html#uniqueUsername",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "uniqueUsername",
          "normalized": "Text-\u003eUnique a",
          "package": "yesod-auth-account",
          "partial": "Username",
          "signature": "Text-\u003eUnique u",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:uniqueUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do when the user logs in and the email has not yet been verified.\n\u003c/p\u003e\u003cp\u003eBy default, this displays a message and contains \u003ccode\u003e\u003ca\u003eresendVerifyEmailForm\u003c/a\u003e\u003c/code\u003e, allowing\n the user to resend the verification email.  The handler is run inside the post\n handler for login, so you can call \u003ccode\u003e\u003ca\u003esetCreds\u003c/a\u003e\u003c/code\u003e to preform a successful login.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "unregisteredLogin",
          "package": "yesod-auth-account",
          "signature": "UserAccount db -\u003e HandlerT Auth (HandlerT master IO) Html",
          "source": "src/Yesod-Auth-Account.html#unregisteredLogin",
          "type": "method"
        },
        "index": {
          "description": "What to do when the user logs in and the email has not yet been verified By default this displays message and contains resendVerifyEmailForm allowing the user to resend the verification email The handler is run inside the post handler for login so you can call setCreds to preform successful login",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "unregisteredLogin",
          "normalized": "UserAccount a-\u003eHandlerT Auth(HandlerT b IO)Html",
          "package": "yesod-auth-account",
          "partial": "Login",
          "signature": "UserAccount db-\u003eHandlerT Auth(HandlerT master IO)Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:unregisteredLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new user for use during \u003ccode\u003e\u003ca\u003eaddNewUser\u003c/a\u003e\u003c/code\u003e.  The starting reset password\n key should be the empty string.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "userCreate",
          "package": "yesod-auth-account",
          "signature": "userCreate",
          "source": "src/Yesod-Auth-Account.html#userCreate",
          "type": "method"
        },
        "index": {
          "description": "Creates new user for use during addNewUser The starting reset password key should be the empty string",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userCreate",
          "package": "yesod-auth-account",
          "partial": "Create",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmail",
          "package": "yesod-auth-account",
          "signature": "u -\u003e Text",
          "source": "src/Yesod-Auth-Account.html#userEmail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmail",
          "normalized": "a-\u003eText",
          "package": "yesod-auth-account",
          "partial": "Email",
          "signature": "u-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmailF",
          "package": "yesod-auth-account",
          "signature": "EntityField u Text",
          "source": "src/Yesod-Auth-Account.html#userEmailF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmailF",
          "package": "yesod-auth-account",
          "partial": "Email",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerified",
          "package": "yesod-auth-account",
          "signature": "userEmailVerified",
          "source": "src/Yesod-Auth-Account.html#userEmailVerified",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerified",
          "package": "yesod-auth-account",
          "partial": "Email Verified",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifiedF",
          "package": "yesod-auth-account",
          "signature": "EntityField u Bool",
          "source": "src/Yesod-Auth-Account.html#userEmailVerifiedF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifiedF",
          "package": "yesod-auth-account",
          "partial": "Email Verified",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifiedF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifyKey",
          "package": "yesod-auth-account",
          "signature": "userEmailVerifyKey",
          "source": "src/Yesod-Auth-Account.html#userEmailVerifyKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifyKey",
          "package": "yesod-auth-account",
          "partial": "Email Verify Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifyKeyF",
          "package": "yesod-auth-account",
          "signature": "EntityField u Text",
          "source": "src/Yesod-Auth-Account.html#userEmailVerifyKeyF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userEmailVerifyKeyF",
          "package": "yesod-auth-account",
          "partial": "Email Verify Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifyKeyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userPasswordHash",
          "package": "yesod-auth-account",
          "signature": "userPasswordHash",
          "source": "src/Yesod-Auth-Account.html#userPasswordHash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userPasswordHash",
          "package": "yesod-auth-account",
          "partial": "Password Hash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userPasswordHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userPasswordHashF",
          "package": "yesod-auth-account",
          "signature": "EntityField u ByteString",
          "source": "src/Yesod-Auth-Account.html#userPasswordHashF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userPasswordHashF",
          "package": "yesod-auth-account",
          "partial": "Password Hash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userPasswordHashF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userResetPwdKey",
          "package": "yesod-auth-account",
          "signature": "userResetPwdKey",
          "source": "src/Yesod-Auth-Account.html#userResetPwdKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userResetPwdKey",
          "package": "yesod-auth-account",
          "partial": "Reset Pwd Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userResetPwdKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userResetPwdKeyF",
          "package": "yesod-auth-account",
          "signature": "EntityField u Text",
          "source": "src/Yesod-Auth-Account.html#userResetPwdKeyF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userResetPwdKeyF",
          "package": "yesod-auth-account",
          "partial": "Reset Pwd Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userResetPwdKeyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "userUsernameF",
          "package": "yesod-auth-account",
          "signature": "EntityField u Username",
          "source": "src/Yesod-Auth-Account.html#userUsernameF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "userUsernameF",
          "package": "yesod-auth-account",
          "partial": "Username",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userUsernameF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Account",
          "name": "username",
          "package": "yesod-auth-account",
          "signature": "u -\u003e Username",
          "source": "src/Yesod-Auth-Account.html#username",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "username",
          "normalized": "a-\u003eUsername",
          "package": "yesod-auth-account",
          "signature": "u-\u003eUsername",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark the account as successfully verified.  This should reset the email validation key\n to the empty string.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "verifyAccount",
          "package": "yesod-auth-account",
          "signature": "UserAccount m -\u003e m ()",
          "source": "src/Yesod-Auth-Account.html#verifyAccount",
          "type": "method"
        },
        "index": {
          "description": "Mark the account as successfully verified This should reset the email validation key to the empty string",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "verifyAccount",
          "normalized": "UserAccount a-\u003ea()",
          "package": "yesod-auth-account",
          "partial": "Account",
          "signature": "UserAccount m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a password\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "verifyPassword",
          "package": "yesod-auth-account",
          "signature": "Text-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify password",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "verifyPassword",
          "normalized": "Text-\u003eByteString-\u003eBool",
          "package": "yesod-auth-account",
          "partial": "Password",
          "signature": "Text-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL sent in an email for email verification\n\u003c/p\u003e",
          "module": "Yesod.Auth.Account",
          "name": "verifyR",
          "package": "yesod-auth-account",
          "signature": "Username-\u003e Text-\u003e AuthRoute",
          "type": "function"
        },
        "index": {
          "description": "The URL sent in an email for email verification",
          "hierarchy": "Yesod Auth Account",
          "module": "Yesod.Auth.Account",
          "name": "verifyR",
          "normalized": "Username-\u003eText-\u003eAuthRoute",
          "package": "yesod-auth-account",
          "signature": "Username-\u003eText-\u003eAuthRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyR"
      }
    }
  ]
]