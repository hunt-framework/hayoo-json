[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn auth plugin for accounts. Each account consists of a username, email, and password.\n\u003c/p\u003e\u003cp\u003eThis module is designed so that you can use the default pages for login, account\n creation, change password, etc.  But the module also exports some forms which you\n can embed into your own pages, customizing the account process.  The minimal requirements\n to use this module are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If you are not using persistent or just want more control over the user data, you can use\n   any datatype for user information and make it an instance of \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e.  You must\n   also create an instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e You may use a user datatype created by persistent, in which case you can make the datatype\n   an instance of \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e.  In this case, \n   \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e from this module already implements the \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e interface for you.\n\u003c/li\u003e\u003cli\u003e Make your master site an instance of \u003ccode\u003e\u003ca\u003eAccountSendEmail\u003c/a\u003e\u003c/code\u003e.  By default, this class\n   just logs a message so during development this class requires no implementation.\n\u003c/li\u003e\u003cli\u003e Make your master site and database an instance of \u003ccode\u003e\u003ca\u003eYesodAuthAccount\u003c/a\u003e\u003c/code\u003e.  There is only\n   one required function which must be implemented (\u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e) although there\n   are several functions you can override in this class to customize the behavior of this\n   module.\n\u003c/li\u003e\u003cli\u003e Include \u003ccode\u003e\u003ca\u003eaccountPlugin\u003c/a\u003e\u003c/code\u003e in the list of plugins in your instance of \u003ccode\u003e\u003ca\u003eYesodAuth\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-Account.html",
        "fct-type": "module",
        "title": "Account"
      },
      "index": {
        "description": "An auth plugin for accounts Each account consists of username email and password This module is designed so that you can use the default pages for login account creation change password etc But the module also exports some forms which you can embed into your own pages customizing the account process The minimal requirements to use this module are If you are not using persistent or just want more control over the user data you can use any datatype for user information and make it an instance of UserCredentials You must also create an instance of AccountDB You may use user datatype created by persistent in which case you can make the datatype an instance of PersistUserCredentials instead of UserCredentials In this case AccountPersistDB from this module already implements the AccountDB interface for you Make your master site an instance of AccountSendEmail By default this class just logs message so during development this class requires no implementation Make your master site and database an instance of YesodAuthAccount There is only one required function which must be implemented runAccountDB although there are several functions you can override in this class to customize the behavior of this module Include accountPlugin in the list of plugins in your instance of YesodAuth",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "Account",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountDB",
      "description": {
        "fct-descr": "\u003cp\u003eThese are the database operations to load and update user data.\n\u003c/p\u003e\u003cp\u003ePersistent users can use \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e and don't need to create their own instance.\n If you are not using persistent or are using persistent but want to customize the database\n activity, you must manually make a monad an instance of this class.  You can use any monad\n for which you can write \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e, but typically the monad will be a newtype of HandlerT.\n For example,\n\u003c/p\u003e\u003cpre\u003e newtype MyAccountDB a = MyAccountDB {runMyAccountDB :: HandlerT MyApp IO a}\n    deriving (Monad, MonadIO)\n instance AccountDB MyAccountDB where\n     ....\n\u003c/pre\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Account.html#AccountDB",
        "fct-type": "class",
        "title": "AccountDB"
      },
      "index": {
        "description": "These are the database operations to load and update user data Persistent users can use AccountPersistDB and don need to create their own instance If you are not using persistent or are using persistent but want to customize the database activity you must manually make monad an instance of this class You can use any monad for which you can write runAccountDB but typically the monad will be newtype of HandlerT For example newtype MyAccountDB MyAccountDB runMyAccountDB HandlerT MyApp IO deriving Monad MonadIO instance AccountDB MyAccountDB where",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "AccountDB",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountPersistDB",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype which when using persistent is an instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Account.html#AccountPersistDB",
        "fct-type": "data",
        "title": "AccountPersistDB"
      },
      "index": {
        "description": "newtype which when using persistent is an instance of AccountDB",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "AccountPersistDB",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Persist DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:AccountSendEmail",
      "description": {
        "fct-descr": "\u003cp\u003eA class to send email.\n\u003c/p\u003e\u003cp\u003eBoth of the methods are implemented by default to just log a message,\n so during development there are no required methods.  For production,\n I recommend \u003ca\u003ehttp://hackage.haskell.org/package/mime-mail\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Account.html#AccountSendEmail",
        "fct-type": "class",
        "title": "AccountSendEmail"
      },
      "index": {
        "description": "class to send email Both of the methods are implemented by default to just log message so during development there are no required methods For production recommend http hackage.haskell.org package mime-mail",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "AccountSendEmail",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Send Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:LoginData",
      "description": {
        "fct-descr": "\u003cp\u003eThe data collected in the login form.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Account.html#LoginData",
        "fct-type": "data",
        "title": "LoginData"
      },
      "index": {
        "description": "The data collected in the login form",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "LoginData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Login Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:NewAccountData",
      "description": {
        "fct-descr": "\u003cp\u003eThe data collected in the new account form.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "data",
        "title": "NewAccountData"
      },
      "index": {
        "description": "The data collected in the new account form",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "NewAccountData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Account Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:NewPasswordData",
      "description": {
        "fct-descr": "\u003cp\u003eThe data for setting a new password.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "data",
        "title": "NewPasswordData"
      },
      "index": {
        "description": "The data for setting new password",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "NewPasswordData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Password Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:PersistUserCredentials",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for the data type which stores the user info when using persistent.\n\u003c/p\u003e\u003cp\u003eYou must make a data type that is either an instance of this class or of\n   \u003ccode\u003e\u003ca\u003eUserCredentials\u003c/a\u003e\u003c/code\u003e, depending on if you are using persistent or not.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Account.html#PersistUserCredentials",
        "fct-type": "class",
        "title": "PersistUserCredentials"
      },
      "index": {
        "description": "Interface for the data type which stores the user info when using persistent You must make data type that is either an instance of this class or of UserCredentials depending on if you are using persistent or not",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "PersistUserCredentials",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Persist User Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:UserCredentials",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for the data type which stores the user info when not using persistent.\n\u003c/p\u003e\u003cp\u003eYou must make a data type that is either an instance of this class or of\n   \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e, depending on if you are using persistent or not.\n\u003c/p\u003e\u003cp\u003eUsers are uniquely identified by their username, and for each user we must store the email,\n   the verify status, a hashed user password, and a reset password key.  The format for the\n   hashed password is the format from \u003ca\u003eCrypto.PasswordStore\u003c/a\u003e.  If the email has been verified\n   and no password reset is in progress, the relevent keys should be the empty string.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Account.html#UserCredentials",
        "fct-type": "class",
        "title": "UserCredentials"
      },
      "index": {
        "description": "Interface for the data type which stores the user info when not using persistent You must make data type that is either an instance of this class or of PersistUserCredentials depending on if you are using persistent or not Users are uniquely identified by their username and for each user we must store the email the verify status hashed user password and reset password key The format for the hashed password is the format from Crypto.PasswordStore If the email has been verified and no password reset is in progress the relevent keys should be the empty string",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "UserCredentials",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "User Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:Username",
      "description": {
        "fct-descr": "\u003cp\u003eEach user is uniquely identified by a username.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Account.html#Username",
        "fct-type": "type",
        "title": "Username"
      },
      "index": {
        "description": "Each user is uniquely identified by username",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "Username",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#t:YesodAuthAccount",
      "description": {
        "fct-descr": "\u003cp\u003eThe main class controlling the account plugin.\n\u003c/p\u003e\u003cp\u003eYou must make your database instance of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e and your master site\n an instance of this class.  The only required method is \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e, although\n this class contains many other methods to customize the behavior of the account plugin.\n\u003c/p\u003e\u003cp\u003eContinuing the example from the manual creation of \u003ccode\u003e\u003ca\u003eAccountDB\u003c/a\u003e\u003c/code\u003e, a minimal instance is\n\u003c/p\u003e\u003cpre\u003e instance YesodAuthAccount MyAccountDB MyApp where\n     runAccountDB = runMyAccountDB\n\u003c/pre\u003e\u003cp\u003eIf instead you are using persistent and have made an instance of \u003ccode\u003e\u003ca\u003ePersistUserCredentials\u003c/a\u003e\u003c/code\u003e,\n a minimal instance is\n\u003c/p\u003e\u003cpre\u003e instance YesodAuthAccount (AccountPersistDB MyApp User) MyApp where\n    runAccountDB = runAccountPersistDB\n\u003c/pre\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Account.html#YesodAuthAccount",
        "fct-type": "class",
        "title": "YesodAuthAccount"
      },
      "index": {
        "description": "The main class controlling the account plugin You must make your database instance of AccountDB and your master site an instance of this class The only required method is runAccountDB although this class contains many other methods to customize the behavior of the account plugin Continuing the example from the manual creation of AccountDB minimal instance is instance YesodAuthAccount MyAccountDB MyApp where runAccountDB runMyAccountDB If instead you are using persistent and have made an instance of PersistUserCredentials minimal instance is instance YesodAuthAccount AccountPersistDB MyApp User MyApp where runAccountDB runAccountPersistDB",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "YesodAuthAccount",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Yesod Auth Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:LoginData",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "LoginData",
        "fct-source": "src/Yesod-Auth-Account.html#LoginData",
        "fct-type": "function",
        "title": "LoginData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "LoginData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Login Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:NewAccountData",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "NewAccountData",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "function",
        "title": "NewAccountData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "NewAccountData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Account Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:NewPasswordData",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "NewPasswordData",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "function",
        "title": "NewPasswordData"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "NewPasswordData",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Password Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:accountPlugin",
      "description": {
        "fct-descr": "\u003cp\u003eThe account authentication plugin.  Here is a complete example using persistent.\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE QuasiQuotes, TypeFamilies, GeneralizedNewtypeDeriving #-}\n{-# LANGUAGE FlexibleContexts, FlexibleInstances, TemplateHaskell, OverloadedStrings #-}\n{-# LANGUAGE GADTs, MultiParamTypeClasses, TypeSynonymInstances #-}\n\nimport Data.Text (Text)\nimport Data.ByteString (ByteString)\nimport Database.Persist.Sqlite\nimport Control.Monad.Logger (runStderrLoggingT)\nimport Yesod\nimport Yesod.Auth\nimport Yesod.Auth.Account\n\nshare [mkPersist sqlSettings, mkMigrate \"migrateAll\"] [persistUpperCase|\nUser\n    username Text\n    UniqueUsername username\n    password ByteString\n    emailAddress Text\n    verified Bool\n    verifyKey Text\n    resetPasswordKey Text\n    deriving Show\n|]\n\ninstance PersistUserCredentials User where\n    userUsernameF = UserUsername\n    userPasswordHashF = UserPassword\n    userEmailF = UserEmailAddress\n    userEmailVerifiedF = UserVerified\n    userEmailVerifyKeyF = UserVerifyKey\n    userResetPwdKeyF = UserResetPasswordKey\n    uniqueUsername = UniqueUsername\n\n    userCreate name email key pwd = User name pwd email False key \"\"\n\ndata MyApp = MyApp ConnectionPool\n\nmkYesod \"MyApp\" [parseRoutes|\n/ HomeR GET\n/auth AuthR Auth getAuth\n|]\n\ninstance Yesod MyApp\n\ninstance RenderMessage MyApp FormMessage where\n    renderMessage _ _ = defaultFormMessage\n\ninstance YesodPersist MyApp where\n    type YesodPersistBackend MyApp = SqlPersistT\n    runDB action = do\n        MyApp pool \u003c- getYesod\n        runSqlPool action pool\n\ninstance YesodAuth MyApp where\n    type AuthId MyApp = Username\n    getAuthId = return . Just . credsIdent\n    loginDest _ = HomeR\n    logoutDest _ = HomeR\n    authPlugins _ = [accountPlugin]\n    authHttpManager _ = error \"No manager needed\"\n    onLogin = return ()\n    maybeAuthId = lookupSession \"_ID\"\n\ninstance AccountSendEmail MyApp\n\ninstance YesodAuthAccount (AccountPersistDB MyApp User) MyApp where\n    runAccountDB = runAccountPersistDB\n\ngetHomeR :: Handler Html\ngetHomeR = do\n    maid \u003c- maybeAuthId\n    case maid of\n        Nothing -\u003e defaultLayout $ [whamlet|\n\u003cp\u003ePlease visit the \u003ca href=\"@{AuthR LoginR}\"\u003eLogin page\u003c/a\u003e\n|]\n        Just u -\u003e defaultLayout $ [whamlet|\n\u003cp\u003eYou are logged in as #{u}\n\u003cp\u003e\u003ca href=\"@{AuthR LogoutR}\"\u003eLogout\u003c/a\u003e\n|]\n\nmain :: IO ()\nmain = withSqlitePool \"test.db3\" 10 $ \\pool -\u003e do\n    runStderrLoggingT $ runSqlPool (runMigration migrateAll) pool\n    warp 3000 $ MyApp pool\n\u003c/pre\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthPlugin master",
        "fct-source": "src/Yesod-Auth-Account.html#accountPlugin",
        "fct-type": "function",
        "title": "accountPlugin"
      },
      "index": {
        "description": "The account authentication plugin Here is complete example using persistent LANGUAGE QuasiQuotes TypeFamilies GeneralizedNewtypeDeriving LANGUAGE FlexibleContexts FlexibleInstances TemplateHaskell OverloadedStrings LANGUAGE GADTs MultiParamTypeClasses TypeSynonymInstances import Data.Text Text import Data.ByteString ByteString import Database.Persist.Sqlite import Control.Monad.Logger runStderrLoggingT import Yesod import Yesod.Auth import Yesod.Auth.Account share mkPersist sqlSettings mkMigrate migrateAll persistUpperCase User username Text UniqueUsername username password ByteString emailAddress Text verified Bool verifyKey Text resetPasswordKey Text deriving Show instance PersistUserCredentials User where userUsernameF UserUsername userPasswordHashF UserPassword userEmailF UserEmailAddress userEmailVerifiedF UserVerified userEmailVerifyKeyF UserVerifyKey userResetPwdKeyF UserResetPasswordKey uniqueUsername UniqueUsername userCreate name email key pwd User name pwd email False key data MyApp MyApp ConnectionPool mkYesod MyApp parseRoutes HomeR GET auth AuthR Auth getAuth instance Yesod MyApp instance RenderMessage MyApp FormMessage where renderMessage defaultFormMessage instance YesodPersist MyApp where type YesodPersistBackend MyApp SqlPersistT runDB action do MyApp pool getYesod runSqlPool action pool instance YesodAuth MyApp where type AuthId MyApp Username getAuthId return Just credsIdent loginDest HomeR logoutDest HomeR authPlugins accountPlugin authHttpManager error No manager needed onLogin return maybeAuthId lookupSession ID instance AccountSendEmail MyApp instance YesodAuthAccount AccountPersistDB MyApp User MyApp where runAccountDB runAccountPersistDB getHomeR Handler Html getHomeR do maid maybeAuthId case maid of Nothing defaultLayout whamlet Please visit the href AuthR LoginR Login page Just defaultLayout whamlet You are logged in as href AuthR LogoutR Logout main IO main withSqlitePool test.db3 pool do runStderrLoggingT runSqlPool runMigration migrateAll pool warp MyApp pool",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "accountPlugin",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:addNewUser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new account.  The password reset key should be added as an empty string.\n The creation can fail with an error message, in which case the error is set in a\n message and the post handler redirects to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "addNewUser",
        "fct-source": "src/Yesod-Auth-Account.html#addNewUser",
        "fct-type": "method",
        "title": "addNewUser"
      },
      "index": {
        "description": "Create new account The password reset key should be added as an empty string The creation can fail with an error message in which case the error is set in message and the post handler redirects to newAccountR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "addNewUser",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:allowPasswordReset",
      "description": {
        "fct-descr": "\u003cp\u003eShould the password reset inside this plugin be allowed?  Defaults to True\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "master -\u003e Bool",
        "fct-source": "src/Yesod-Auth-Account.html#allowPasswordReset",
        "fct-type": "method",
        "title": "allowPasswordReset"
      },
      "index": {
        "description": "Should the password reset inside this plugin be allowed Defaults to True",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "allowPasswordReset",
        "normalized": "a-\u003eBool",
        "package": "yesod-auth-account",
        "partial": "Password Reset",
        "signature": "master-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:checkValidUsername",
      "description": {
        "fct-descr": "\u003cp\u003eA form validator for valid usernames during new account creation.\n\u003c/p\u003e\u003cp\u003eBy default this allows usernames made up of \u003ccode\u003e\u003ca\u003eisAlphaNum\u003c/a\u003e\u003c/code\u003e.  You can also ignore\n this validation and instead validate in \u003ccode\u003e\u003ca\u003eaddNewUser\u003c/a\u003e\u003c/code\u003e, but validating here\n allows the validation to occur before database activity (checking existing\n username) and before random salt creation (requires IO).\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username -\u003e m (Either Text Username)",
        "fct-source": "src/Yesod-Auth-Account.html#checkValidUsername",
        "fct-type": "method",
        "title": "checkValidUsername"
      },
      "index": {
        "description": "form validator for valid usernames during new account creation By default this allows usernames made up of isAlphaNum You can also ignore this validation and instead validate in addNewUser but validating here allows the validation to occur before database activity checking existing username and before random salt creation requires IO",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "checkValidUsername",
        "normalized": "Username-\u003ea(Either Text Username)",
        "package": "yesod-auth-account",
        "partial": "Valid Username",
        "signature": "Username-\u003em(Either Text Username)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:createNewAccount",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to create a new account.\n\u003c/p\u003e\u003cp\u003eYou can use this action inside your own implementation of \u003ccode\u003e\u003ca\u003epostNewAccountR\u003c/a\u003e\u003c/code\u003e if you\n add additional fields to the new account creation.  This action assumes the user has\n not yet been created in the database and will create the user, so this action should\n be run first in your handler.  Note that this action does not check if the passwords\n are equal. If an error occurs (username exists, etc.) this will set a message and\n redirect to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "NewAccountData -\u003e (Route Auth -\u003e Route master) -\u003e HandlerT master IO (UserAccount db)",
        "fct-source": "src/Yesod-Auth-Account.html#createNewAccount",
        "fct-type": "function",
        "title": "createNewAccount"
      },
      "index": {
        "description": "An action to create new account You can use this action inside your own implementation of postNewAccountR if you add additional fields to the new account creation This action assumes the user has not yet been created in the database and will create the user so this action should be run first in your handler Note that this action does not check if the passwords are equal If an error occurs username exists etc this will set message and redirect to newAccountR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "createNewAccount",
        "normalized": "NewAccountData-\u003e(Route Auth-\u003eRoute a)-\u003eHandlerT a IO(UserAccount b)",
        "package": "yesod-auth-account",
        "partial": "New Account",
        "signature": "NewAccountData-\u003e(Route Auth-\u003eRoute master)-\u003eHandlerT master IO(UserAccount db)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:getNewAccountR",
      "description": {
        "fct-descr": "\u003cp\u003eThe new account page.\n\u003c/p\u003e\u003cp\u003eThis is the page which is displayed on a GET to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e, and defaults to\n an embedding of \u003ccode\u003e\u003ca\u003enewAccountWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "HandlerT Auth (HandlerT master IO) Html",
        "fct-source": "src/Yesod-Auth-Account.html#getNewAccountR",
        "fct-type": "method",
        "title": "getNewAccountR"
      },
      "index": {
        "description": "The new account page This is the page which is displayed on GET to newAccountR and defaults to an embedding of newAccountWidget",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "getNewAccountR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:getResetPasswordR",
      "description": {
        "fct-descr": "\u003cp\u003eThe page which prompts for a username and sends an email allowing password reset.\n   By default, it embeds \u003ccode\u003e\u003ca\u003eresetPasswordWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "HandlerT Auth (HandlerT master IO) Html",
        "fct-source": "src/Yesod-Auth-Account.html#getResetPasswordR",
        "fct-type": "method",
        "title": "getResetPasswordR"
      },
      "index": {
        "description": "The page which prompts for username and sends an email allowing password reset By default it embeds resetPasswordWidget",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "getResetPasswordR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Reset Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:hashPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSalt and hash a password.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text -\u003e m ByteString",
        "fct-source": "src/Yesod-Auth-Account.html#hashPassword",
        "fct-type": "function",
        "title": "hashPassword"
      },
      "index": {
        "description": "Salt and hash password",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "hashPassword",
        "normalized": "Text-\u003ea ByteString",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": "Text-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loadUser",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a user by username\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username -\u003e m (Maybe (UserAccount m))",
        "fct-source": "src/Yesod-Auth-Account.html#loadUser",
        "fct-type": "method",
        "title": "loadUser"
      },
      "index": {
        "description": "Load user by username",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loadUser",
        "normalized": "Username-\u003ea(Maybe(UserAccount a))",
        "package": "yesod-auth-account",
        "partial": "User",
        "signature": "Username-\u003em(Maybe(UserAccount m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginForm",
      "description": {
        "fct-descr": "\u003cp\u003eThe login form.\n\u003c/p\u003e\u003cp\u003eYou can embed this form into your own pages if you want a custom rendering of this\n form or to include a login form on your own pages. The form submission should be\n posted to \u003ccode\u003e\u003ca\u003eloginFormPostTargetR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AForm m LoginData",
        "fct-source": "src/Yesod-Auth-Account.html#loginForm",
        "fct-type": "function",
        "title": "loginForm"
      },
      "index": {
        "description": "The login form You can embed this form into your own pages if you want custom rendering of this form or to include login form on your own pages The form submission should be posted to loginFormPostTargetR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loginForm",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginFormPostTargetR",
      "description": {
        "fct-descr": "\u003cp\u003eThe POST target for the \u003ccode\u003e\u003ca\u003eloginForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Account.html#loginFormPostTargetR",
        "fct-type": "function",
        "title": "loginFormPostTargetR"
      },
      "index": {
        "description": "The POST target for the loginForm",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loginFormPostTargetR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Form Post Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#LoginData",
        "fct-type": "function",
        "title": "loginPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loginPassword",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#LoginData",
        "fct-type": "function",
        "title": "loginUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loginUsername",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:loginWidget",
      "description": {
        "fct-descr": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eloginForm\u003c/a\u003e\u003c/code\u003e using renderDivs.\n\u003c/p\u003e\u003cp\u003eThis is the widget used in the default implementation of \u003ccode\u003e\u003ca\u003eloginHandler\u003c/a\u003e\u003c/code\u003e.\n The widget also includes links to the new account and reset password pages.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth-Account.html#loginWidget",
        "fct-type": "function",
        "title": "loginWidget"
      },
      "index": {
        "description": "default rendering of loginForm using renderDivs This is the widget used in the default implementation of loginHandler The widget also includes links to the new account and reset password pages",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "loginWidget",
        "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
        "package": "yesod-auth-account",
        "partial": "Widget",
        "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "function",
        "title": "newAccountEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountEmail",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountForm",
      "description": {
        "fct-descr": "\u003cp\u003eThe new account form.\n\u003c/p\u003e\u003cp\u003eYou can embed this form into your own pages or into \u003ccode\u003e\u003ca\u003egetNewAccountR\u003c/a\u003e\u003c/code\u003e.  The form\n submission should be posted to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.  Alternatively, you could embed this\n form into a larger form where you prompt for more information during account\n creation.  In this case, the NewAccountData should be passed to \u003ccode\u003e\u003ca\u003ecreateNewAccount\u003c/a\u003e\u003c/code\u003e\n from inside \u003ccode\u003e\u003ca\u003epostNewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AForm m NewAccountData",
        "fct-source": "src/Yesod-Auth-Account.html#newAccountForm",
        "fct-type": "function",
        "title": "newAccountForm"
      },
      "index": {
        "description": "The new account form You can embed this form into your own pages or into getNewAccountR The form submission should be posted to newAccountR Alternatively you could embed this form into larger form where you prompt for more information during account creation In this case the NewAccountData should be passed to createNewAccount from inside postNewAccountR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountForm",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountPassword1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "function",
        "title": "newAccountPassword1"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountPassword1",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountPassword2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "function",
        "title": "newAccountPassword2"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountPassword2",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountR",
      "description": {
        "fct-descr": "\u003cp\u003eRoute for the default new account page.\n\u003c/p\u003e\u003cp\u003eSee the New Account section below for customizing the new account process.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Account.html#newAccountR",
        "fct-type": "function",
        "title": "newAccountR"
      },
      "index": {
        "description": "Route for the default new account page See the New Account section below for customizing the new account process",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username",
        "fct-source": "src/Yesod-Auth-Account.html#NewAccountData",
        "fct-type": "function",
        "title": "newAccountUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountUsername",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Account Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newAccountWidget",
      "description": {
        "fct-descr": "\u003cp\u003eA default rendering of the \u003ccode\u003e\u003ca\u003enewAccountForm\u003c/a\u003e\u003c/code\u003e using renderDivs.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth-Account.html#newAccountWidget",
        "fct-type": "function",
        "title": "newAccountWidget"
      },
      "index": {
        "description": "default rendering of the newAccountForm using renderDivs",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newAccountWidget",
        "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
        "package": "yesod-auth-account",
        "partial": "Account Widget",
        "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordForm",
      "description": {
        "fct-descr": "\u003cp\u003eThe form for setting a new password. It contains hidden fields for the username and key and prompts\n for the passwords.  This form should be posted to \u003ccode\u003e\u003ca\u003esetPasswordR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username-\u003e Text-\u003e AForm m NewPasswordData",
        "fct-type": "function",
        "title": "newPasswordForm"
      },
      "index": {
        "description": "The form for setting new password It contains hidden fields for the username and key and prompts for the passwords This form should be posted to setPasswordR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordForm",
        "normalized": "Username-\u003eText-\u003eAForm a NewPasswordData",
        "package": "yesod-auth-account",
        "partial": "Password Form",
        "signature": "Username-\u003eText-\u003eAForm m NewPasswordData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "function",
        "title": "newPasswordKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordPwd1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "function",
        "title": "newPasswordPwd1"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordPwd1",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Pwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordPwd2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "function",
        "title": "newPasswordPwd2"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordPwd2",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Pwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordR",
      "description": {
        "fct-descr": "\u003cp\u003eThe URL sent in an email when the user requests to reset their password\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username-\u003e Text-\u003e AuthRoute",
        "fct-type": "function",
        "title": "newPasswordR"
      },
      "index": {
        "description": "The URL sent in an email when the user requests to reset their password",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordR",
        "normalized": "Username-\u003eText-\u003eAuthRoute",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": "Username-\u003eText-\u003eAuthRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username",
        "fct-source": "src/Yesod-Auth-Account.html#NewPasswordData",
        "fct-type": "function",
        "title": "newPasswordUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordUser",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newPasswordWidget",
      "description": {
        "fct-descr": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003enewPasswordForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "UserAccount db -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth-Account.html#newPasswordWidget",
        "fct-type": "function",
        "title": "newPasswordWidget"
      },
      "index": {
        "description": "default rendering of newPasswordForm",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newPasswordWidget",
        "normalized": "UserAccount a-\u003e(Route Auth-\u003eRoute b)-\u003eWidgetT b IO()",
        "package": "yesod-auth-account",
        "partial": "Password Widget",
        "signature": "UserAccount db-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:newVerifyKey",
      "description": {
        "fct-descr": "\u003cp\u003eRandomly create a new verification key.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "m Text",
        "fct-source": "src/Yesod-Auth-Account.html#newVerifyKey",
        "fct-type": "function",
        "title": "newVerifyKey"
      },
      "index": {
        "description": "Randomly create new verification key",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "newVerifyKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Verify Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:postNewAccountR",
      "description": {
        "fct-descr": "\u003cp\u003eHandles new account creation.\n\u003c/p\u003e\u003cp\u003eBy default, this processes \u003ccode\u003e\u003ca\u003enewAccountForm\u003c/a\u003e\u003c/code\u003e, calls \u003ccode\u003e\u003ca\u003ecreateNewAccount\u003c/a\u003e\u003c/code\u003e, sets a message\n and redirects to LoginR.  If an error occurs, a message is set and the user is\n redirected to \u003ccode\u003e\u003ca\u003enewAccountR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "HandlerT Auth (HandlerT master IO) Html",
        "fct-source": "src/Yesod-Auth-Account.html#postNewAccountR",
        "fct-type": "method",
        "title": "postNewAccountR"
      },
      "index": {
        "description": "Handles new account creation By default this processes newAccountForm calls createNewAccount sets message and redirects to LoginR If an error occurs message is set and the user is redirected to newAccountR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "postNewAccountR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyEmailForm",
      "description": {
        "fct-descr": "\u003cp\u003eA form to allow the user to request the email validation be resent.\n\u003c/p\u003e\u003cp\u003eIntended for use in \u003ccode\u003e\u003ca\u003eunregisteredLogin\u003c/a\u003e\u003c/code\u003e.  The result should be posted to\n \u003ccode\u003e\u003ca\u003eresendVerifyR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username -\u003e AForm m Username",
        "fct-source": "src/Yesod-Auth-Account.html#resendVerifyEmailForm",
        "fct-type": "function",
        "title": "resendVerifyEmailForm"
      },
      "index": {
        "description": "form to allow the user to request the email validation be resent Intended for use in unregisteredLogin The result should be posted to resendVerifyR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resendVerifyEmailForm",
        "normalized": "Username-\u003eAForm a Username",
        "package": "yesod-auth-account",
        "partial": "Verify Email Form",
        "signature": "Username-\u003eAForm m Username"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyEmailWidget",
      "description": {
        "fct-descr": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eresendVerifyEmailForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth-Account.html#resendVerifyEmailWidget",
        "fct-type": "function",
        "title": "resendVerifyEmailWidget"
      },
      "index": {
        "description": "default rendering of resendVerifyEmailForm",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resendVerifyEmailWidget",
        "normalized": "Username-\u003e(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
        "package": "yesod-auth-account",
        "partial": "Verify Email Widget",
        "signature": "Username-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resendVerifyR",
      "description": {
        "fct-descr": "\u003cp\u003eThe POST target for resending a verification email\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Account.html#resendVerifyR",
        "fct-type": "function",
        "title": "resendVerifyR"
      },
      "index": {
        "description": "The POST target for resending verification email",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resendVerifyR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Verify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordForm",
      "description": {
        "fct-descr": "\u003cp\u003eA form for the user to request that an email be sent to them to allow them to reset\n their password.  This form contains a field for the username (plus the CSRF token).\n The form should be posted to \u003ccode\u003e\u003ca\u003eresetPasswordR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AForm m Username",
        "fct-source": "src/Yesod-Auth-Account.html#resetPasswordForm",
        "fct-type": "function",
        "title": "resetPasswordForm"
      },
      "index": {
        "description": "form for the user to request that an email be sent to them to allow them to reset their password This form contains field for the username plus the CSRF token The form should be posted to resetPasswordR",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resetPasswordForm",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordR",
      "description": {
        "fct-descr": "\u003cp\u003eRoute for the reset password page.\n\u003c/p\u003e\u003cp\u003eThis page allows the user to reset their password by requesting an email with a\n reset URL be sent to them.  See the Password Reset section below for customization.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Account.html#resetPasswordR",
        "fct-type": "function",
        "title": "resetPasswordR"
      },
      "index": {
        "description": "Route for the reset password page This page allows the user to reset their password by requesting an email with reset URL be sent to them See the Password Reset section below for customization",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resetPasswordR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:resetPasswordWidget",
      "description": {
        "fct-descr": "\u003cp\u003eA default rendering of \u003ccode\u003e\u003ca\u003eresetPasswordForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth-Account.html#resetPasswordWidget",
        "fct-type": "function",
        "title": "resetPasswordWidget"
      },
      "index": {
        "description": "default rendering of resetPasswordForm",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "resetPasswordWidget",
        "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
        "package": "yesod-auth-account",
        "partial": "Password Widget",
        "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:runAccountDB",
      "description": {
        "fct-descr": "\u003cp\u003eRun a database action.  This is the only required method.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "db a -\u003e HandlerT master IO a",
        "fct-source": "src/Yesod-Auth-Account.html#runAccountDB",
        "fct-type": "method",
        "title": "runAccountDB"
      },
      "index": {
        "description": "Run database action This is the only required method",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "runAccountDB",
        "normalized": "a b-\u003eHandlerT c IO b",
        "package": "yesod-auth-account",
        "partial": "Account DB",
        "signature": "db a-\u003eHandlerT master IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:runAccountPersistDB",
      "description": {
        "fct-descr": "\u003cp\u003eUse this for \u003ccode\u003e\u003ca\u003erunAccountDB\u003c/a\u003e\u003c/code\u003e if you are using \u003ccode\u003e\u003ca\u003eAccountPersistDB\u003c/a\u003e\u003c/code\u003e as your database type.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AccountPersistDB master user a -\u003e HandlerT master IO a",
        "fct-source": "src/Yesod-Auth-Account.html#runAccountPersistDB",
        "fct-type": "function",
        "title": "runAccountPersistDB"
      },
      "index": {
        "description": "Use this for runAccountDB if you are using AccountPersistDB as your database type",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "runAccountPersistDB",
        "normalized": "AccountPersistDB a b c-\u003eHandlerT a IO c",
        "package": "yesod-auth-account",
        "partial": "Account Persist DB",
        "signature": "AccountPersistDB master user a-\u003eHandlerT master IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:sendNewPasswordEmail",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "sendNewPasswordEmail",
        "fct-source": "src/Yesod-Auth-Account.html#sendNewPasswordEmail",
        "fct-type": "method",
        "title": "sendNewPasswordEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "sendNewPasswordEmail",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Password Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:sendVerifyEmail",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "sendVerifyEmail",
        "fct-source": "src/Yesod-Auth-Account.html#sendVerifyEmail",
        "fct-type": "method",
        "title": "sendVerifyEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "sendVerifyEmail",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Verify Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setNewPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSet a new hashed password.  This should also set the password reset key to the empty\n string.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "setNewPassword",
        "fct-source": "src/Yesod-Auth-Account.html#setNewPassword",
        "fct-type": "method",
        "title": "setNewPassword"
      },
      "index": {
        "description": "Set new hashed password This should also set the password reset key to the empty string",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "setNewPassword",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setNewPasswordKey",
      "description": {
        "fct-descr": "\u003cp\u003eChange/set the users password reset key.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "setNewPasswordKey",
        "fct-source": "src/Yesod-Auth-Account.html#setNewPasswordKey",
        "fct-type": "method",
        "title": "setNewPasswordKey"
      },
      "index": {
        "description": "Change set the users password reset key",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "setNewPasswordKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "New Password Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setPasswordHandler",
      "description": {
        "fct-descr": "\u003cp\u003eThe page which allows the user to set a new password.\n\u003c/p\u003e\u003cp\u003eThis is called only when the email key has been verified as correct. By default, it embeds\n \u003ccode\u003e\u003ca\u003enewPasswordWidget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "UserAccount db -\u003e HandlerT Auth (HandlerT master IO) Html",
        "fct-source": "src/Yesod-Auth-Account.html#setPasswordHandler",
        "fct-type": "method",
        "title": "setPasswordHandler"
      },
      "index": {
        "description": "The page which allows the user to set new password This is called only when the email key has been verified as correct By default it embeds newPasswordWidget",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "setPasswordHandler",
        "normalized": "UserAccount a-\u003eHandlerT Auth(HandlerT b IO)Html",
        "package": "yesod-auth-account",
        "partial": "Password Handler",
        "signature": "UserAccount db-\u003eHandlerT Auth(HandlerT master IO)Html"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setPasswordR",
      "description": {
        "fct-descr": "\u003cp\u003eThe POST target for reseting the password\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Account.html#setPasswordR",
        "fct-type": "function",
        "title": "setPasswordR"
      },
      "index": {
        "description": "The POST target for reseting the password",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "setPasswordR",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:setVerifyKey",
      "description": {
        "fct-descr": "\u003cp\u003eChange/set the users email verification key.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "setVerifyKey",
        "fct-source": "src/Yesod-Auth-Account.html#setVerifyKey",
        "fct-type": "method",
        "title": "setVerifyKey"
      },
      "index": {
        "description": "Change set the users email verification key",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "setVerifyKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Verify Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:uniqueUsername",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text -\u003e Unique u",
        "fct-source": "src/Yesod-Auth-Account.html#uniqueUsername",
        "fct-type": "method",
        "title": "uniqueUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "uniqueUsername",
        "normalized": "Text-\u003eUnique a",
        "package": "yesod-auth-account",
        "partial": "Username",
        "signature": "Text-\u003eUnique u"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:unregisteredLogin",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to do when the user logs in and the email has not yet been verified.\n\u003c/p\u003e\u003cp\u003eBy default, this displays a message and contains \u003ccode\u003e\u003ca\u003eresendVerifyEmailForm\u003c/a\u003e\u003c/code\u003e, allowing\n the user to resend the verification email.  The handler is run inside the post\n handler for login, so you can call \u003ccode\u003e\u003ca\u003esetCreds\u003c/a\u003e\u003c/code\u003e to preform a successful login.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "UserAccount db -\u003e HandlerT Auth (HandlerT master IO) Html",
        "fct-source": "src/Yesod-Auth-Account.html#unregisteredLogin",
        "fct-type": "method",
        "title": "unregisteredLogin"
      },
      "index": {
        "description": "What to do when the user logs in and the email has not yet been verified By default this displays message and contains resendVerifyEmailForm allowing the user to resend the verification email The handler is run inside the post handler for login so you can call setCreds to preform successful login",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "unregisteredLogin",
        "normalized": "UserAccount a-\u003eHandlerT Auth(HandlerT b IO)Html",
        "package": "yesod-auth-account",
        "partial": "Login",
        "signature": "UserAccount db-\u003eHandlerT Auth(HandlerT master IO)Html"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new user for use during \u003ccode\u003e\u003ca\u003eaddNewUser\u003c/a\u003e\u003c/code\u003e.  The starting reset password\n key should be the empty string.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "userCreate",
        "fct-source": "src/Yesod-Auth-Account.html#userCreate",
        "fct-type": "method",
        "title": "userCreate"
      },
      "index": {
        "description": "Creates new user for use during addNewUser The starting reset password key should be the empty string",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userCreate",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmail",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "u -\u003e Text",
        "fct-source": "src/Yesod-Auth-Account.html#userEmail",
        "fct-type": "method",
        "title": "userEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmail",
        "normalized": "a-\u003eText",
        "package": "yesod-auth-account",
        "partial": "Email",
        "signature": "u-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u Text",
        "fct-source": "src/Yesod-Auth-Account.html#userEmailF",
        "fct-type": "method",
        "title": "userEmailF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmailF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerified",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "userEmailVerified",
        "fct-source": "src/Yesod-Auth-Account.html#userEmailVerified",
        "fct-type": "method",
        "title": "userEmailVerified"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmailVerified",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Email Verified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifiedF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u Bool",
        "fct-source": "src/Yesod-Auth-Account.html#userEmailVerifiedF",
        "fct-type": "method",
        "title": "userEmailVerifiedF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmailVerifiedF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Email Verified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifyKey",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "userEmailVerifyKey",
        "fct-source": "src/Yesod-Auth-Account.html#userEmailVerifyKey",
        "fct-type": "method",
        "title": "userEmailVerifyKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmailVerifyKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Email Verify Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userEmailVerifyKeyF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u Text",
        "fct-source": "src/Yesod-Auth-Account.html#userEmailVerifyKeyF",
        "fct-type": "method",
        "title": "userEmailVerifyKeyF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userEmailVerifyKeyF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Email Verify Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userPasswordHash",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "userPasswordHash",
        "fct-source": "src/Yesod-Auth-Account.html#userPasswordHash",
        "fct-type": "method",
        "title": "userPasswordHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userPasswordHash",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userPasswordHashF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u ByteString",
        "fct-source": "src/Yesod-Auth-Account.html#userPasswordHashF",
        "fct-type": "method",
        "title": "userPasswordHashF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userPasswordHashF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Password Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userResetPwdKey",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "userResetPwdKey",
        "fct-source": "src/Yesod-Auth-Account.html#userResetPwdKey",
        "fct-type": "method",
        "title": "userResetPwdKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userResetPwdKey",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Reset Pwd Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userResetPwdKeyF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u Text",
        "fct-source": "src/Yesod-Auth-Account.html#userResetPwdKeyF",
        "fct-type": "method",
        "title": "userResetPwdKeyF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userResetPwdKeyF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Reset Pwd Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:userUsernameF",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "EntityField u Username",
        "fct-source": "src/Yesod-Auth-Account.html#userUsernameF",
        "fct-type": "method",
        "title": "userUsernameF"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "userUsernameF",
        "normalized": "",
        "package": "yesod-auth-account",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:username",
      "description": {
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "u -\u003e Username",
        "fct-source": "src/Yesod-Auth-Account.html#username",
        "fct-type": "method",
        "title": "username"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "username",
        "normalized": "a-\u003eUsername",
        "package": "yesod-auth-account",
        "partial": "",
        "signature": "u-\u003eUsername"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyAccount",
      "description": {
        "fct-descr": "\u003cp\u003eMark the account as successfully verified.  This should reset the email validation key\n to the empty string.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "UserAccount m -\u003e m ()",
        "fct-source": "src/Yesod-Auth-Account.html#verifyAccount",
        "fct-type": "method",
        "title": "verifyAccount"
      },
      "index": {
        "description": "Mark the account as successfully verified This should reset the email validation key to the empty string",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "verifyAccount",
        "normalized": "UserAccount a-\u003ea()",
        "package": "yesod-auth-account",
        "partial": "Account",
        "signature": "UserAccount m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyPassword",
      "description": {
        "fct-descr": "\u003cp\u003eVerify a password\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Text-\u003e ByteString-\u003e Bool",
        "fct-type": "function",
        "title": "verifyPassword"
      },
      "index": {
        "description": "Verify password",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "verifyPassword",
        "normalized": "Text-\u003eByteString-\u003eBool",
        "package": "yesod-auth-account",
        "partial": "Password",
        "signature": "Text-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth-account/docs/Yesod-Auth-Account.html#v:verifyR",
      "description": {
        "fct-descr": "\u003cp\u003eThe URL sent in an email for email verification\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Account",
        "fct-package": "yesod-auth-account",
        "fct-signature": "Username-\u003e Text-\u003e AuthRoute",
        "fct-type": "function",
        "title": "verifyR"
      },
      "index": {
        "description": "The URL sent in an email for email verification",
        "hierarchy": "Yesod Auth Account",
        "module": "Yesod.Auth.Account",
        "name": "verifyR",
        "normalized": "Username-\u003eText-\u003eAuthRoute",
        "package": "yesod-auth-account",
        "partial": "",
        "signature": "Username-\u003eText-\u003eAuthRoute"
      }
    }
  }
]