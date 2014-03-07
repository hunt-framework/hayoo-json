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
        "word": "antigate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Text.Recognition.Antigate\n import Data.Default\n import Network\n import Control.Monad\n import Control.Monad.IO.Class\n import Data.ByteString.Lazy hiding (putStrLn)\n import System.Timeout\n\n myApiKey :: ApiKey\n myApiKey = \"0123456789abcdef0123456789abcdef\"{api_host=\"antigate.com\"}\n\n downloadJpegCaptcha :: Manager -\u003e IO ByteString\n downloadJpegCaptcha = undefined\n\n answerCaptcha :: String -\u003e Manager -\u003e IO Bool\n answerCaptcha = undefined\n\n main :: IO ()\n main = withSocketsDo $ do\n     res \u003c- timeout (30*1000000) $ withManager $ \\m -\u003e do\n         bytes \u003c- liftIO $ downloadJpegCaptcha m\n         (id, answer) \u003c- solveCaptcha def myApiKey def{phrase=True} \"captcha.jpg\" bytes m\n         res \u003c- liftIO $ answerCaptcha answer m\n         unless res $ reportBad myApiKey id m\n         return res\n     case res of\n         Nothing -\u003e do\n             putStrLn \"Timed out\"\n         Just True -\u003e do\n             putStrLn \"Solved successfully\"\n         Just False -\u003e do\n             putStrLn \"Couldn't solve\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "Antigate",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html",
          "type": "module"
        },
        "index": {
          "description": "Example LANGUAGE OverloadedStrings import Text.Recognition.Antigate import Data.Default import Network import Control.Monad import Control.Monad.IO.Class import Data.ByteString.Lazy hiding putStrLn import System.Timeout myApiKey ApiKey myApiKey abcdef0123456789abcdef api host antigate.com downloadJpegCaptcha Manager IO ByteString downloadJpegCaptcha undefined answerCaptcha String Manager IO Bool answerCaptcha undefined main IO main withSocketsDo do res timeout withManager do bytes liftIO downloadJpegCaptcha id answer solveCaptcha def myApiKey def phrase True captcha.jpg bytes res liftIO answerCaptcha answer unless res reportBad myApiKey id return res case res of Nothing do putStrLn Timed out Just True do putStrLn Solved successfully Just False do putStrLn Couldn solve",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "Antigate",
          "package": "antigate",
          "partial": "Antigate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAntigate API access key paired with service provider's host.\n At least these services claim to support Antigate API:\n Antigate, Captchabot, Decaptcher, ExpertDecoders, ImageTyperz,\n DeathByCaptcha and Pixodrom.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ApiKey",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#ApiKey",
          "type": "data"
        },
        "index": {
          "description": "Antigate API access key paired with service provider host At least these services claim to support Antigate API Antigate Captchabot Decaptcher ExpertDecoders ImageTyperz DeathByCaptcha and Pixodrom",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ApiKey",
          "package": "antigate",
          "partial": "Api Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:ApiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "ApiResult",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ApiResult",
          "package": "antigate",
          "partial": "Api Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:ApiResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperties of the captcha to be solved. See \u003ca\u003ehttp://antigate.com/panel.php?action=api\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaConf",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "data"
        },
        "index": {
          "description": "Properties of the captcha to be solved See http antigate.com panel.php action api",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaConf",
          "package": "antigate",
          "partial": "Captcha Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:CaptchaConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaID",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#CaptchaID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaID",
          "package": "antigate",
          "partial": "Captcha ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:CaptchaID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e\u003cp\u003eIf possible, you should share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between multiple threads and requests.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "Manager",
          "package": "antigate",
          "type": "data"
        },
        "index": {
          "description": "Keeps track of open connections for keep-alive If possible you should share single Manager between multiple threads and requests Since",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "Manager",
          "package": "antigate",
          "partial": "Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "Phase",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#Phase",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "Phase",
          "package": "antigate",
          "partial": "Phase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "SolveConf",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "SolveConf",
          "package": "antigate",
          "partial": "Solve Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:SolveConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "SolveException",
          "package": "antigate",
          "source": "src/Text-Recognition-Antigate.html#SolveException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "SolveException",
          "package": "antigate",
          "partial": "Solve Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:SolveException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecaptcha is not recognized yet, repeat request withing 1-5 seconds\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "CAPCHA_NOT_READY",
          "package": "antigate",
          "signature": "CAPCHA_NOT_READY",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "captcha is not recognized yet repeat request withing seconds",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "CAPCHA_NOT_READY",
          "package": "antigate",
          "partial": "CAPCHA NOT READY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CAPCHA_NOT_READY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaConf",
          "package": "antigate",
          "signature": "CaptchaConf",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "CaptchaConf",
          "package": "antigate",
          "partial": "Captcha Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CaptchaConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "CheckPhase",
          "package": "antigate",
          "signature": "CheckPhase",
          "source": "src/Text-Recognition-Antigate.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "CheckPhase",
          "package": "antigate",
          "partial": "Check Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CheckPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCould not determine captcha file type, only allowed formats are JPG, GIF, PNG\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_IMAGE_TYPE_NOT_SUPPORTED",
          "package": "antigate",
          "signature": "ERROR_IMAGE_TYPE_NOT_SUPPORTED",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "Could not determine captcha file type only allowed formats are JPG GIF PNG",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_IMAGE_TYPE_NOT_SUPPORTED",
          "package": "antigate",
          "partial": "ERROR IMAGE TYPE NOT SUPPORTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_IMAGE_TYPE_NOT_SUPPORTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest with current account key is not allowed from your IP. Please refer to IP list section\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_IP_NOT_ALLOWED",
          "package": "antigate",
          "signature": "ERROR_IP_NOT_ALLOWED",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "Request with current account key is not allowed from your IP Please refer to IP list section",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_IP_NOT_ALLOWED",
          "package": "antigate",
          "partial": "ERROR IP NOT ALLOWED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_IP_NOT_ALLOWED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyou have set wrong user authorization key in request\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_KEY_DOES_NOT_EXIST",
          "package": "antigate",
          "signature": "ERROR_KEY_DOES_NOT_EXIST",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "you have set wrong user authorization key in request",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_KEY_DOES_NOT_EXIST",
          "package": "antigate",
          "partial": "ERROR KEY DOES NOT EXIST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_KEY_DOES_NOT_EXIST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno idle captcha workers are available at the moment, please try a bit later or try increasing your bid\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_NO_SLOT_AVAILABLE",
          "package": "antigate",
          "signature": "ERROR_NO_SLOT_AVAILABLE",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "no idle captcha workers are available at the moment please try bit later or try increasing your bid",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_NO_SLOT_AVAILABLE",
          "package": "antigate",
          "partial": "ERROR NO SLOT AVAILABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_NO_SLOT_AVAILABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyour captcha size is exceeding 100kb limit\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_TOO_BIG_CAPTCHA_FILESIZE",
          "package": "antigate",
          "signature": "ERROR_TOO_BIG_CAPTCHA_FILESIZE",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "your captcha size is exceeding kb limit",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_TOO_BIG_CAPTCHA_FILESIZE",
          "package": "antigate",
          "partial": "ERROR TOO BIG CAPTCHA FILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_TOO_BIG_CAPTCHA_FILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_UNKNOWN",
          "package": "antigate",
          "signature": "ERROR_UNKNOWN String",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_UNKNOWN",
          "package": "antigate",
          "partial": "ERROR UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyour captcha file has wrong extension, the only allowed extensions are gif,jpg,jpeg,png\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_FILE_EXTENSION",
          "package": "antigate",
          "signature": "ERROR_WRONG_FILE_EXTENSION",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "your captcha file has wrong extension the only allowed extensions are gif jpg jpeg png",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_FILE_EXTENSION",
          "package": "antigate",
          "partial": "ERROR WRONG FILE EXTENSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_FILE_EXTENSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe captcha ID you are sending is non-numeric\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_ID_FORMAT",
          "package": "antigate",
          "signature": "ERROR_WRONG_ID_FORMAT",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "the captcha ID you are sending is non-numeric",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_ID_FORMAT",
          "package": "antigate",
          "partial": "ERROR WRONG ID FORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_ID_FORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser authorization key is invalid (its length is not 32 bytes as it should be)\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_USER_KEY",
          "package": "antigate",
          "signature": "ERROR_WRONG_USER_KEY",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "user authorization key is invalid its length is not bytes as it should be",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_WRONG_USER_KEY",
          "package": "antigate",
          "partial": "ERROR WRONG USER KEY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_USER_KEY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaccount has zero or negative balance\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_ZERO_BALANCE",
          "package": "antigate",
          "signature": "ERROR_ZERO_BALANCE",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "account has zero or negative balance",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_ZERO_BALANCE",
          "package": "antigate",
          "partial": "ERROR ZERO BALANCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_ZERO_BALANCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe size of the captcha you are uploading or pointing to is zero\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_ZERO_CAPTCHA_FILESIZE",
          "package": "antigate",
          "signature": "ERROR_ZERO_CAPTCHA_FILESIZE",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "description": "the size of the captcha you are uploading or pointing to is zero",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "ERROR_ZERO_CAPTCHA_FILESIZE",
          "package": "antigate",
          "partial": "ERROR ZERO CAPTCHA FILESIZE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_ZERO_CAPTCHA_FILESIZE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "OK",
          "package": "antigate",
          "signature": "OK a",
          "source": "src/Text-Recognition-Antigate.html#ApiResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "OK",
          "package": "antigate",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "SolveConf",
          "package": "antigate",
          "signature": "SolveConf",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "SolveConf",
          "package": "antigate",
          "partial": "Solve Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "SolveExceptionCheck",
          "package": "antigate",
          "signature": "SolveExceptionCheck CaptchaID (ApiResult ())",
          "source": "src/Text-Recognition-Antigate.html#SolveException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "SolveExceptionCheck",
          "normalized": "SolveExceptionCheck CaptchaID(ApiResult())",
          "package": "antigate",
          "partial": "Solve Exception Check",
          "signature": "SolveExceptionCheck CaptchaID(ApiResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveExceptionCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "SolveExceptionUpload",
          "package": "antigate",
          "signature": "SolveExceptionUpload (ApiResult ())",
          "source": "src/Text-Recognition-Antigate.html#SolveException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "SolveExceptionUpload",
          "normalized": "SolveExceptionUpload(ApiResult())",
          "package": "antigate",
          "partial": "Solve Exception Upload",
          "signature": "SolveExceptionUpload(ApiResult())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveExceptionUpload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "UploadPhase",
          "package": "antigate",
          "signature": "UploadPhase",
          "source": "src/Text-Recognition-Antigate.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "UploadPhase",
          "package": "antigate",
          "partial": "Upload Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:UploadPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehow much to sleep between captcha checks; in microseconds.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e[6000000,2000000,3000000] -- sleep 6 seconds before checking, on first retry sleep 2 seconds, then always sleep 3 seconds. List can be infinite\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_check_sleep",
          "package": "antigate",
          "signature": "[Int]",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "function"
        },
        "index": {
          "description": "how much to sleep between captcha checks in microseconds Default sleep seconds before checking on first retry sleep seconds then always sleep seconds List can be infinite",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_check_sleep",
          "normalized": "[Int]",
          "package": "antigate",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_check_sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapi_counter\u003c/a\u003e\u003c/code\u003e will be called at the start of each phase\n\u003c/p\u003e\u003cpre\u003e api_counter = \\phase count -\u003e do\n     if count == 0\n       then putStrLn $ show phase ++ \" began\"\n       else putStrLn $ show phase ++ \" retries: \" ++ show count\n\u003c/pre\u003e\u003cp\u003eDefault: \u003ccode\u003e_ _ -\u003e return ()\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_counter",
          "package": "antigate",
          "signature": "Phase -\u003e Int -\u003e IO ()",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "function"
        },
        "index": {
          "description": "api counter will be called at the start of each phase api counter phase count do if count then putStrLn show phase began else putStrLn show phase retries show count Default return",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_counter",
          "normalized": "Phase-\u003eInt-\u003eIO()",
          "package": "antigate",
          "signature": "Phase-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault: \"antigate.com\". This is a record selector\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_host",
          "package": "antigate",
          "signature": "ApiKey -\u003e String",
          "source": "src/Text-Recognition-Antigate.html#api_host",
          "type": "function"
        },
        "index": {
          "description": "default antigate.com This is record selector",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_host",
          "normalized": "ApiKey-\u003eString",
          "package": "antigate",
          "signature": "ApiKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a record selector\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_key",
          "package": "antigate",
          "signature": "ApiKey -\u003e String",
          "source": "src/Text-Recognition-Antigate.html#api_key",
          "type": "function"
        },
        "index": {
          "description": "This is record selector",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_key",
          "normalized": "ApiKey-\u003eString",
          "package": "antigate",
          "signature": "ApiKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will be called when upload phase finishes\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_upload_callback",
          "package": "antigate",
          "signature": "CaptchaID -\u003e IO ()",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "function"
        },
        "index": {
          "description": "This will be called when upload phase finishes",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_upload_callback",
          "normalized": "CaptchaID-\u003eIO()",
          "package": "antigate",
          "signature": "CaptchaID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_upload_callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehow much to sleep while waiting for available slot; in microseconds.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e[3000000]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "api_upload_sleep",
          "package": "antigate",
          "signature": "[Int]",
          "source": "src/Text-Recognition-Antigate.html#SolveConf",
          "type": "function"
        },
        "index": {
          "description": "how much to sleep while waiting for available slot in microseconds Default",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "api_upload_sleep",
          "normalized": "[Int]",
          "package": "antigate",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_upload_sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = numbers on captcha must be summed\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "calc",
          "package": "antigate",
          "signature": "Bool",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "False default value True numbers on captcha must be summed",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "calc",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:calc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieve captcha status\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "checkCaptcha",
          "package": "antigate",
          "signature": "ApiKey -\u003e CaptchaID -\u003e Manager -\u003e m (ApiResult String)",
          "source": "src/Text-Recognition-Antigate.html#checkCaptcha",
          "type": "function"
        },
        "index": {
          "description": "retrieve captcha status throws HttpException on network errors",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "checkCaptcha",
          "normalized": "ApiKey-\u003eCaptchaID-\u003eManager-\u003ea(ApiResult String)",
          "package": "antigate",
          "partial": "Captcha",
          "signature": "ApiKey-\u003eCaptchaID-\u003eManager-\u003em(ApiResult String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:checkCaptcha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieve multiple captcha status\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "checkCaptchas",
          "package": "antigate",
          "signature": "ApiKey -\u003e [CaptchaID] -\u003e Manager -\u003e m [ApiResult String]",
          "source": "src/Text-Recognition-Antigate.html#checkCaptchas",
          "type": "function"
        },
        "index": {
          "description": "retrieve multiple captcha status throws HttpException on network errors",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "checkCaptchas",
          "normalized": "ApiKey-\u003e[CaptchaID]-\u003eManager-\u003ea[ApiResult String]",
          "package": "antigate",
          "partial": "Captchas",
          "signature": "ApiKey-\u003e[CaptchaID]-\u003eManager-\u003em[ApiResult String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:checkCaptchas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all connections in a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this doesn't affect currently in-flight connections,\n meaning you can safely use it without hurting any queries you may\n have concurrently running.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "closeManager",
          "package": "antigate",
          "signature": "Manager -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Close all connections in Manager Note that this doesn affect currently in-flight connections meaning you can safely use it without hurting any queries you may have concurrently running Since",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "closeManager",
          "normalized": "Manager-\u003eIO()",
          "package": "antigate",
          "partial": "Manager",
          "signature": "Manager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:closeManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretrieve your current account balance\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "getBalance",
          "package": "antigate",
          "signature": "ApiKey -\u003e Manager -\u003e m Double",
          "source": "src/Text-Recognition-Antigate.html#getBalance",
          "type": "function"
        },
        "index": {
          "description": "retrieve your current account balance throws HttpException on network errors",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "getBalance",
          "normalized": "ApiKey-\u003eManager-\u003ea Double",
          "package": "antigate",
          "partial": "Balance",
          "signature": "ApiKey-\u003eManager-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:getBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha goes to Russian-speaking worker\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "is_russian",
          "package": "antigate",
          "signature": "Bool",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "False default value True captcha goes to Russian-speaking worker",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "is_russian",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:is_russian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e value is set on bids page. This parameter allows to control maximum bid without setting it on the bids page.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "max_bid",
          "package": "antigate",
          "signature": "Maybe Double",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "Default value is set on bids page This parameter allows to control maximum bid without setting it on the bids page",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "max_bid",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:max_bid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e 0 = default value (unlimited)\n\u003c/li\u003e\u003cli\u003e \u003e0 = maximum length of captcha text workers required to input\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "max_len",
          "package": "antigate",
          "signature": "Word",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "default value unlimited maximum length of captcha text workers required to input",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "max_len",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:max_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e 0 = default value\n\u003c/li\u003e\u003cli\u003e \u003e0 = minimum length of captcha text workers required to input\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "min_len",
          "package": "antigate",
          "signature": "Word",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "default value minimum length of captcha text workers required to input",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "min_len",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:min_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. You may manually call \u003ccode\u003e\u003ca\u003ecloseManager\u003c/a\u003e\u003c/code\u003e to shut it down,\n or allow the \u003ccode\u003eManager\u003c/code\u003e to be shut down automatically based on garbage\n collection.\n\u003c/p\u003e\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e is a relatively expensive operation, you are\n advised to share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between requests instead.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function is often \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e,\n though add-on libraries may provide a recommended replacement.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "newManager",
          "package": "antigate",
          "signature": "ManagerSettings -\u003e IO Manager",
          "type": "function"
        },
        "index": {
          "description": "Create Manager You may manually call closeManager to shut it down or allow the Manager to be shut down automatically based on garbage collection Creating new Manager is relatively expensive operation you are advised to share single Manager between requests instead The first argument to this function is often defaultManagerSettings though add-on libraries may provide recommended replacement Since",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "newManager",
          "normalized": "ManagerSettings-\u003eIO Manager",
          "package": "antigate",
          "partial": "Manager",
          "signature": "ManagerSettings-\u003eIO Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:newManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha consists from numbers only\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = captcha does not have numbers on it\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "numeric",
          "package": "antigate",
          "signature": "Maybe Bool",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "Nothing default value Just True captcha consists from numbers only Just False captcha does not have numbers on it",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "numeric",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse antigate's check response\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "parseCheckResponse",
          "package": "antigate",
          "signature": "String -\u003e ApiResult String",
          "source": "src/Text-Recognition-Antigate.html#parseCheckResponse",
          "type": "function"
        },
        "index": {
          "description": "Parse antigate check response",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "parseCheckResponse",
          "normalized": "String-\u003eApiResult String",
          "package": "antigate",
          "partial": "Check Response",
          "signature": "String-\u003eApiResult String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseCheckResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse antigate's multi-check response\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "parseMultiCheckResponse",
          "package": "antigate",
          "signature": "String -\u003e ApiResult String",
          "source": "src/Text-Recognition-Antigate.html#parseMultiCheckResponse",
          "type": "function"
        },
        "index": {
          "description": "Parse antigate multi-check response",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "parseMultiCheckResponse",
          "normalized": "String-\u003eApiResult String",
          "package": "antigate",
          "partial": "Multi Check Response",
          "signature": "String-\u003eApiResult String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseMultiCheckResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse antigate's multi-check response\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "parseMultiCheckResponses",
          "package": "antigate",
          "signature": "String -\u003e [ApiResult String]",
          "source": "src/Text-Recognition-Antigate.html#parseMultiCheckResponses",
          "type": "function"
        },
        "index": {
          "description": "Parse antigate multi-check response",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "parseMultiCheckResponses",
          "normalized": "String-\u003e[ApiResult String]",
          "package": "antigate",
          "partial": "Multi Check Responses",
          "signature": "String-\u003e[ApiResult String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseMultiCheckResponses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse antigate's upload response\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "parseUploadResponse",
          "package": "antigate",
          "signature": "String -\u003e ApiResult CaptchaID",
          "source": "src/Text-Recognition-Antigate.html#parseUploadResponse",
          "type": "function"
        },
        "index": {
          "description": "Parse antigate upload response",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "parseUploadResponse",
          "normalized": "String-\u003eApiResult CaptchaID",
          "package": "antigate",
          "partial": "Upload Response",
          "signature": "String-\u003eApiResult CaptchaID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseUploadResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value (one word)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha has 2-4 words\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "phrase",
          "package": "antigate",
          "signature": "Bool",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "False default value one word True captcha has words",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "phrase",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value (case is not important)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha is case sensitive\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "regsense",
          "package": "antigate",
          "signature": "Bool",
          "source": "src/Text-Recognition-Antigate.html#CaptchaConf",
          "type": "function"
        },
        "index": {
          "description": "False default value case is not important True captcha is case sensitive",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "regsense",
          "package": "antigate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:regsense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal \u003ca\u003eApiResult\u003c/a\u003e back to its text form\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "renderApiResult",
          "package": "antigate",
          "signature": "ApiResult String -\u003e String",
          "source": "src/Text-Recognition-Antigate.html#renderApiResult",
          "type": "function"
        },
        "index": {
          "description": "Marshal ApiResult back to its text form",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "renderApiResult",
          "normalized": "ApiResult String-\u003eString",
          "package": "antigate",
          "partial": "Api Result",
          "signature": "ApiResult String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:renderApiResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereport bad captcha result\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "reportBad",
          "package": "antigate",
          "signature": "ApiKey -\u003e CaptchaID -\u003e Manager -\u003e m Bool",
          "source": "src/Text-Recognition-Antigate.html#reportBad",
          "type": "function"
        },
        "index": {
          "description": "report bad captcha result throws HttpException on network errors",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "reportBad",
          "normalized": "ApiKey-\u003eCaptchaID-\u003eManager-\u003ea Bool",
          "package": "antigate",
          "partial": "Bad",
          "signature": "ApiKey-\u003eCaptchaID-\u003eManager-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:reportBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh level function to solve captcha, blocks until answer is provided (about 2-10 seconds).\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eSolveException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e when something goes wrong.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "solveCaptcha",
          "package": "antigate",
          "signature": "SolveConf-\u003e ApiKey-\u003e CaptchaConf-\u003e FilePath-\u003e ByteString-\u003e Manager-\u003e m (CaptchaID, String)",
          "type": "function"
        },
        "index": {
          "description": "High level function to solve captcha blocks until answer is provided about seconds throws SolveException or HttpException when something goes wrong",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "solveCaptcha",
          "normalized": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003ea(CaptchaID,String)",
          "package": "antigate",
          "partial": "Captcha",
          "signature": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003em(CaptchaID,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:solveCaptcha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "solveCaptchaFromFile",
          "package": "antigate",
          "signature": "SolveConf -\u003e ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e Manager -\u003e m (CaptchaID, String)",
          "source": "src/Text-Recognition-Antigate.html#solveCaptchaFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "solveCaptchaFromFile",
          "normalized": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003ea(CaptchaID,String)",
          "package": "antigate",
          "partial": "Captcha From File",
          "signature": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003em(CaptchaID,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:solveCaptchaFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupload captcha for recognition\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
          "module": "Text.Recognition.Antigate",
          "name": "uploadCaptcha",
          "package": "antigate",
          "signature": "ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e ByteString -\u003e Manager -\u003e m (ApiResult CaptchaID)",
          "source": "src/Text-Recognition-Antigate.html#uploadCaptcha",
          "type": "function"
        },
        "index": {
          "description": "upload captcha for recognition throws HttpException on network errors",
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "uploadCaptcha",
          "normalized": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003ea(ApiResult CaptchaID)",
          "package": "antigate",
          "partial": "Captcha",
          "signature": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003em(ApiResult CaptchaID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:uploadCaptcha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "uploadCaptchaFromFile",
          "package": "antigate",
          "signature": "ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e Manager -\u003e m (ApiResult CaptchaID)",
          "source": "src/Text-Recognition-Antigate.html#uploadCaptchaFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "uploadCaptchaFromFile",
          "normalized": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003ea(ApiResult CaptchaID)",
          "package": "antigate",
          "partial": "Captcha From File",
          "signature": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003em(ApiResult CaptchaID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:uploadCaptchaFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Recognition.Antigate",
          "name": "withManager",
          "package": "antigate",
          "signature": "(Manager -\u003e ResourceT m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Recognition Antigate",
          "module": "Text.Recognition.Antigate",
          "name": "withManager",
          "normalized": "(Manager-\u003eResourceT a b)-\u003ea b",
          "package": "antigate",
          "partial": "Manager",
          "signature": "(Manager-\u003eResourceT m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:withManager"
      }
    }
  ]
]