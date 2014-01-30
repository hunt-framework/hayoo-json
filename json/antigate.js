[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Text.Recognition.Antigate\n import Data.Default\n import Network\n import Control.Monad\n import Control.Monad.IO.Class\n import Data.ByteString.Lazy hiding (putStrLn)\n import System.Timeout\n\n myApiKey :: ApiKey\n myApiKey = \"0123456789abcdef0123456789abcdef\"{api_host=\"antigate.com\"}\n\n downloadJpegCaptcha :: Manager -\u003e IO ByteString\n downloadJpegCaptcha = undefined\n\n answerCaptcha :: String -\u003e Manager -\u003e IO Bool\n answerCaptcha = undefined\n\n main :: IO ()\n main = withSocketsDo $ do\n     res \u003c- timeout (30*1000000) $ withManager $ \\m -\u003e do\n         bytes \u003c- liftIO $ downloadJpegCaptcha m\n         (id, answer) \u003c- solveCaptcha def myApiKey def{phrase=True} \"captcha.jpg\" bytes m\n         res \u003c- liftIO $ answerCaptcha answer m\n         unless res $ reportBad myApiKey id m\n         return res\n     case res of\n         Nothing -\u003e do\n             putStrLn \"Timed out\"\n         Just True -\u003e do\n             putStrLn \"Solved successfully\"\n         Just False -\u003e do\n             putStrLn \"Couldn't solve\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "module",
        "fct-source": "src/Text-Recognition-Antigate.html",
        "fct-type": "module",
        "title": "Antigate"
      },
      "index": {
        "description": "Example LANGUAGE OverloadedStrings import Text.Recognition.Antigate import Data.Default import Network import Control.Monad import Control.Monad.IO.Class import Data.ByteString.Lazy hiding putStrLn import System.Timeout myApiKey ApiKey myApiKey abcdef0123456789abcdef api host antigate.com downloadJpegCaptcha Manager IO ByteString downloadJpegCaptcha undefined answerCaptcha String Manager IO Bool answerCaptcha undefined main IO main withSocketsDo do res timeout withManager do bytes liftIO downloadJpegCaptcha id answer solveCaptcha def myApiKey def phrase True captcha.jpg bytes res liftIO answerCaptcha answer unless res reportBad myApiKey id return res case res of Nothing do putStrLn Timed out Just True do putStrLn Solved successfully Just False do putStrLn Couldn solve",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "Antigate",
        "normalized": "",
        "package": "antigate",
        "partial": "Antigate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:ApiKey",
      "description": {
        "fct-descr": "\u003cp\u003eAntigate API access key paired with service provider's host.\n At least these services claim to support Antigate API:\n Antigate, Captchabot, Decaptcher, ExpertDecoders, ImageTyperz,\n DeathByCaptcha and Pixodrom.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiKey",
        "fct-type": "data",
        "title": "ApiKey"
      },
      "index": {
        "description": "Antigate API access key paired with service provider host At least these services claim to support Antigate API Antigate Captchabot Decaptcher ExpertDecoders ImageTyperz DeathByCaptcha and Pixodrom",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ApiKey",
        "normalized": "",
        "package": "antigate",
        "partial": "Api Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:ApiResult",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "data",
        "title": "ApiResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ApiResult",
        "normalized": "",
        "package": "antigate",
        "partial": "Api Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:CaptchaConf",
      "description": {
        "fct-descr": "\u003cp\u003eProperties of the captcha to be solved. See \u003ca\u003ehttp://antigate.com/panel.php?action=api\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "data",
        "title": "CaptchaConf"
      },
      "index": {
        "description": "Properties of the captcha to be solved See http antigate.com panel.php action api",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "CaptchaConf",
        "normalized": "",
        "package": "antigate",
        "partial": "Captcha Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:CaptchaID",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "type",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaID",
        "fct-type": "type",
        "title": "CaptchaID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "CaptchaID",
        "normalized": "",
        "package": "antigate",
        "partial": "Captcha ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:Manager",
      "description": {
        "fct-descr": "\u003cp\u003eKeeps track of open connections for keep-alive.\n\u003c/p\u003e\u003cp\u003eIf possible, you should share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between multiple threads and requests.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Manager"
      },
      "index": {
        "description": "Keeps track of open connections for keep-alive If possible you should share single Manager between multiple threads and requests Since",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "Manager",
        "normalized": "",
        "package": "antigate",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:Phase",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#Phase",
        "fct-type": "data",
        "title": "Phase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "Phase",
        "normalized": "",
        "package": "antigate",
        "partial": "Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:SolveConf",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "data",
        "title": "SolveConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "SolveConf",
        "normalized": "",
        "package": "antigate",
        "partial": "Solve Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#t:SolveException",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "data",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveException",
        "fct-type": "data",
        "title": "SolveException"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "SolveException",
        "normalized": "",
        "package": "antigate",
        "partial": "Solve Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CAPCHA_NOT_READY",
      "description": {
        "fct-descr": "\u003cp\u003ecaptcha is not recognized yet, repeat request withing 1-5 seconds\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "CAPCHA_NOT_READY",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "CAPCHA_NOT_READY"
      },
      "index": {
        "description": "captcha is not recognized yet repeat request withing seconds",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "CAPCHA_NOT_READY",
        "normalized": "",
        "package": "antigate",
        "partial": "CAPCHA NOT READY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CaptchaConf",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "CaptchaConf",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "CaptchaConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "CaptchaConf",
        "normalized": "",
        "package": "antigate",
        "partial": "Captcha Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:CheckPhase",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "CheckPhase",
        "fct-source": "src/Text-Recognition-Antigate.html#Phase",
        "fct-type": "function",
        "title": "CheckPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "CheckPhase",
        "normalized": "",
        "package": "antigate",
        "partial": "Check Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_IMAGE_TYPE_NOT_SUPPORTED",
      "description": {
        "fct-descr": "\u003cp\u003eCould not determine captcha file type, only allowed formats are JPG, GIF, PNG\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_IMAGE_TYPE_NOT_SUPPORTED",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_IMAGE_TYPE_NOT_SUPPORTED"
      },
      "index": {
        "description": "Could not determine captcha file type only allowed formats are JPG GIF PNG",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_IMAGE_TYPE_NOT_SUPPORTED",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR IMAGE TYPE NOT SUPPORTED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_IP_NOT_ALLOWED",
      "description": {
        "fct-descr": "\u003cp\u003eRequest with current account key is not allowed from your IP. Please refer to IP list section\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_IP_NOT_ALLOWED",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_IP_NOT_ALLOWED"
      },
      "index": {
        "description": "Request with current account key is not allowed from your IP Please refer to IP list section",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_IP_NOT_ALLOWED",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR IP NOT ALLOWED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_KEY_DOES_NOT_EXIST",
      "description": {
        "fct-descr": "\u003cp\u003eyou have set wrong user authorization key in request\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_KEY_DOES_NOT_EXIST",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_KEY_DOES_NOT_EXIST"
      },
      "index": {
        "description": "you have set wrong user authorization key in request",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_KEY_DOES_NOT_EXIST",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR KEY DOES NOT EXIST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_NO_SLOT_AVAILABLE",
      "description": {
        "fct-descr": "\u003cp\u003eno idle captcha workers are available at the moment, please try a bit later or try increasing your bid\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_NO_SLOT_AVAILABLE",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_NO_SLOT_AVAILABLE"
      },
      "index": {
        "description": "no idle captcha workers are available at the moment please try bit later or try increasing your bid",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_NO_SLOT_AVAILABLE",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR NO SLOT AVAILABLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_TOO_BIG_CAPTCHA_FILESIZE",
      "description": {
        "fct-descr": "\u003cp\u003eyour captcha size is exceeding 100kb limit\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_TOO_BIG_CAPTCHA_FILESIZE",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_TOO_BIG_CAPTCHA_FILESIZE"
      },
      "index": {
        "description": "your captcha size is exceeding kb limit",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_TOO_BIG_CAPTCHA_FILESIZE",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR TOO BIG CAPTCHA FILESIZE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_UNKNOWN",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_UNKNOWN String",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_UNKNOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_UNKNOWN",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_FILE_EXTENSION",
      "description": {
        "fct-descr": "\u003cp\u003eyour captcha file has wrong extension, the only allowed extensions are gif,jpg,jpeg,png\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_WRONG_FILE_EXTENSION",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_WRONG_FILE_EXTENSION"
      },
      "index": {
        "description": "your captcha file has wrong extension the only allowed extensions are gif jpg jpeg png",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_WRONG_FILE_EXTENSION",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR WRONG FILE EXTENSION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_ID_FORMAT",
      "description": {
        "fct-descr": "\u003cp\u003ethe captcha ID you are sending is non-numeric\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_WRONG_ID_FORMAT",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_WRONG_ID_FORMAT"
      },
      "index": {
        "description": "the captcha ID you are sending is non-numeric",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_WRONG_ID_FORMAT",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR WRONG ID FORMAT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_WRONG_USER_KEY",
      "description": {
        "fct-descr": "\u003cp\u003euser authorization key is invalid (its length is not 32 bytes as it should be)\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_WRONG_USER_KEY",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_WRONG_USER_KEY"
      },
      "index": {
        "description": "user authorization key is invalid its length is not bytes as it should be",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_WRONG_USER_KEY",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR WRONG USER KEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_ZERO_BALANCE",
      "description": {
        "fct-descr": "\u003cp\u003eaccount has zero or negative balance\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_ZERO_BALANCE",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_ZERO_BALANCE"
      },
      "index": {
        "description": "account has zero or negative balance",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_ZERO_BALANCE",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR ZERO BALANCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:ERROR_ZERO_CAPTCHA_FILESIZE",
      "description": {
        "fct-descr": "\u003cp\u003ethe size of the captcha you are uploading or pointing to is zero\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ERROR_ZERO_CAPTCHA_FILESIZE",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "ERROR_ZERO_CAPTCHA_FILESIZE"
      },
      "index": {
        "description": "the size of the captcha you are uploading or pointing to is zero",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "ERROR_ZERO_CAPTCHA_FILESIZE",
        "normalized": "",
        "package": "antigate",
        "partial": "ERROR ZERO CAPTCHA FILESIZE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:OK",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "OK a",
        "fct-source": "src/Text-Recognition-Antigate.html#ApiResult",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "OK",
        "normalized": "",
        "package": "antigate",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveConf",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "SolveConf",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "function",
        "title": "SolveConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "SolveConf",
        "normalized": "",
        "package": "antigate",
        "partial": "Solve Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveExceptionCheck",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "SolveExceptionCheck CaptchaID (ApiResult ())",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveException",
        "fct-type": "function",
        "title": "SolveExceptionCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "SolveExceptionCheck",
        "normalized": "SolveExceptionCheck CaptchaID(ApiResult())",
        "package": "antigate",
        "partial": "Solve Exception Check",
        "signature": "SolveExceptionCheck CaptchaID(ApiResult())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:SolveExceptionUpload",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "SolveExceptionUpload (ApiResult ())",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveException",
        "fct-type": "function",
        "title": "SolveExceptionUpload"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "SolveExceptionUpload",
        "normalized": "SolveExceptionUpload(ApiResult())",
        "package": "antigate",
        "partial": "Solve Exception Upload",
        "signature": "SolveExceptionUpload(ApiResult())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:UploadPhase",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "UploadPhase",
        "fct-source": "src/Text-Recognition-Antigate.html#Phase",
        "fct-type": "function",
        "title": "UploadPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "UploadPhase",
        "normalized": "",
        "package": "antigate",
        "partial": "Upload Phase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_check_sleep",
      "description": {
        "fct-descr": "\u003cp\u003ehow much to sleep between captcha checks; in microseconds.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e[6000000,2000000,3000000] -- sleep 6 seconds before checking, on first retry sleep 2 seconds, then always sleep 3 seconds. List can be infinite\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "[Int]",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "function",
        "title": "api_check_sleep"
      },
      "index": {
        "description": "how much to sleep between captcha checks in microseconds Default sleep seconds before checking on first retry sleep seconds then always sleep seconds List can be infinite",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_check_sleep",
        "normalized": "[Int]",
        "package": "antigate",
        "partial": "",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_counter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapi_counter\u003c/a\u003e\u003c/code\u003e will be called at the start of each phase\n\u003c/p\u003e\u003cpre\u003e api_counter = \\phase count -\u003e do\n     if count == 0\n       then putStrLn $ show phase ++ \" began\"\n       else putStrLn $ show phase ++ \" retries: \" ++ show count\n\u003c/pre\u003e\u003cp\u003eDefault: \u003ccode\u003e_ _ -\u003e return ()\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Phase -\u003e Int -\u003e IO ()",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "function",
        "title": "api_counter"
      },
      "index": {
        "description": "api counter will be called at the start of each phase api counter phase count do if count then putStrLn show phase began else putStrLn show phase retries show count Default return",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_counter",
        "normalized": "Phase-\u003eInt-\u003eIO()",
        "package": "antigate",
        "partial": "",
        "signature": "Phase-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_host",
      "description": {
        "fct-descr": "\u003cp\u003edefault: \"antigate.com\". This is a record selector\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e String",
        "fct-source": "src/Text-Recognition-Antigate.html#api_host",
        "fct-type": "function",
        "title": "api_host"
      },
      "index": {
        "description": "default antigate.com This is record selector",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_host",
        "normalized": "ApiKey-\u003eString",
        "package": "antigate",
        "partial": "",
        "signature": "ApiKey-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_key",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a record selector\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e String",
        "fct-source": "src/Text-Recognition-Antigate.html#api_key",
        "fct-type": "function",
        "title": "api_key"
      },
      "index": {
        "description": "This is record selector",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_key",
        "normalized": "ApiKey-\u003eString",
        "package": "antigate",
        "partial": "",
        "signature": "ApiKey-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_upload_callback",
      "description": {
        "fct-descr": "\u003cp\u003eThis will be called when upload phase finishes\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "CaptchaID -\u003e IO ()",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "function",
        "title": "api_upload_callback"
      },
      "index": {
        "description": "This will be called when upload phase finishes",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_upload_callback",
        "normalized": "CaptchaID-\u003eIO()",
        "package": "antigate",
        "partial": "",
        "signature": "CaptchaID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:api_upload_sleep",
      "description": {
        "fct-descr": "\u003cp\u003ehow much to sleep while waiting for available slot; in microseconds.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e[3000000]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "[Int]",
        "fct-source": "src/Text-Recognition-Antigate.html#SolveConf",
        "fct-type": "function",
        "title": "api_upload_sleep"
      },
      "index": {
        "description": "how much to sleep while waiting for available slot in microseconds Default",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "api_upload_sleep",
        "normalized": "[Int]",
        "package": "antigate",
        "partial": "",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:calc",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = numbers on captcha must be summed\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "calc"
      },
      "index": {
        "description": "False default value True numbers on captcha must be summed",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "calc",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:checkCaptcha",
      "description": {
        "fct-descr": "\u003cp\u003eretrieve captcha status\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e CaptchaID -\u003e Manager -\u003e m (ApiResult String)",
        "fct-source": "src/Text-Recognition-Antigate.html#checkCaptcha",
        "fct-type": "function",
        "title": "checkCaptcha"
      },
      "index": {
        "description": "retrieve captcha status throws HttpException on network errors",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "checkCaptcha",
        "normalized": "ApiKey-\u003eCaptchaID-\u003eManager-\u003ea(ApiResult String)",
        "package": "antigate",
        "partial": "Captcha",
        "signature": "ApiKey-\u003eCaptchaID-\u003eManager-\u003em(ApiResult String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:checkCaptchas",
      "description": {
        "fct-descr": "\u003cp\u003eretrieve multiple captcha status\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e [CaptchaID] -\u003e Manager -\u003e m [ApiResult String]",
        "fct-source": "src/Text-Recognition-Antigate.html#checkCaptchas",
        "fct-type": "function",
        "title": "checkCaptchas"
      },
      "index": {
        "description": "retrieve multiple captcha status throws HttpException on network errors",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "checkCaptchas",
        "normalized": "ApiKey-\u003e[CaptchaID]-\u003eManager-\u003ea[ApiResult String]",
        "package": "antigate",
        "partial": "Captchas",
        "signature": "ApiKey-\u003e[CaptchaID]-\u003eManager-\u003em[ApiResult String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:closeManager",
      "description": {
        "fct-descr": "\u003cp\u003eClose all connections in a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this doesn't affect currently in-flight connections,\n meaning you can safely use it without hurting any queries you may\n have concurrently running.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Manager -\u003e IO ()",
        "fct-type": "function",
        "title": "closeManager"
      },
      "index": {
        "description": "Close all connections in Manager Note that this doesn affect currently in-flight connections meaning you can safely use it without hurting any queries you may have concurrently running Since",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "closeManager",
        "normalized": "Manager-\u003eIO()",
        "package": "antigate",
        "partial": "Manager",
        "signature": "Manager-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:getBalance",
      "description": {
        "fct-descr": "\u003cp\u003eretrieve your current account balance\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e Manager -\u003e m Double",
        "fct-source": "src/Text-Recognition-Antigate.html#getBalance",
        "fct-type": "function",
        "title": "getBalance"
      },
      "index": {
        "description": "retrieve your current account balance throws HttpException on network errors",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "getBalance",
        "normalized": "ApiKey-\u003eManager-\u003ea Double",
        "package": "antigate",
        "partial": "Balance",
        "signature": "ApiKey-\u003eManager-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:is_russian",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha goes to Russian-speaking worker\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "is_russian"
      },
      "index": {
        "description": "False default value True captcha goes to Russian-speaking worker",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "is_russian",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:max_bid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e value is set on bids page. This parameter allows to control maximum bid without setting it on the bids page.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "max_bid"
      },
      "index": {
        "description": "Default value is set on bids page This parameter allows to control maximum bid without setting it on the bids page",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "max_bid",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:max_len",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e 0 = default value (unlimited)\n\u003c/li\u003e\u003cli\u003e \u003e0 = maximum length of captcha text workers required to input\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Word",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "max_len"
      },
      "index": {
        "description": "default value unlimited maximum length of captcha text workers required to input",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "max_len",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:min_len",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e 0 = default value\n\u003c/li\u003e\u003cli\u003e \u003e0 = minimum length of captcha text workers required to input\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Word",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "min_len"
      },
      "index": {
        "description": "default value minimum length of captcha text workers required to input",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "min_len",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:newManager",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e. You may manually call \u003ccode\u003e\u003ca\u003ecloseManager\u003c/a\u003e\u003c/code\u003e to shut it down,\n or allow the \u003ccode\u003eManager\u003c/code\u003e to be shut down automatically based on garbage\n collection.\n\u003c/p\u003e\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e is a relatively expensive operation, you are\n advised to share a single \u003ccode\u003e\u003ca\u003eManager\u003c/a\u003e\u003c/code\u003e between requests instead.\n\u003c/p\u003e\u003cp\u003eThe first argument to this function is often \u003ccode\u003e\u003ca\u003edefaultManagerSettings\u003c/a\u003e\u003c/code\u003e,\n though add-on libraries may provide a recommended replacement.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ManagerSettings -\u003e IO Manager",
        "fct-type": "function",
        "title": "newManager"
      },
      "index": {
        "description": "Create Manager You may manually call closeManager to shut it down or allow the Manager to be shut down automatically based on garbage collection Creating new Manager is relatively expensive operation you are advised to share single Manager between requests instead The first argument to this function is often defaultManagerSettings though add-on libraries may provide recommended replacement Since",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "newManager",
        "normalized": "ManagerSettings-\u003eIO Manager",
        "package": "antigate",
        "partial": "Manager",
        "signature": "ManagerSettings-\u003eIO Manager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:numeric",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e = default value\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha consists from numbers only\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = captcha does not have numbers on it\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "numeric"
      },
      "index": {
        "description": "Nothing default value Just True captcha consists from numbers only Just False captcha does not have numbers on it",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "numeric",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseCheckResponse",
      "description": {
        "fct-descr": "\u003cp\u003eParse antigate's check response\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "String -\u003e ApiResult String",
        "fct-source": "src/Text-Recognition-Antigate.html#parseCheckResponse",
        "fct-type": "function",
        "title": "parseCheckResponse"
      },
      "index": {
        "description": "Parse antigate check response",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "parseCheckResponse",
        "normalized": "String-\u003eApiResult String",
        "package": "antigate",
        "partial": "Check Response",
        "signature": "String-\u003eApiResult String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseMultiCheckResponse",
      "description": {
        "fct-descr": "\u003cp\u003eParse antigate's multi-check response\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "String -\u003e ApiResult String",
        "fct-source": "src/Text-Recognition-Antigate.html#parseMultiCheckResponse",
        "fct-type": "function",
        "title": "parseMultiCheckResponse"
      },
      "index": {
        "description": "Parse antigate multi-check response",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "parseMultiCheckResponse",
        "normalized": "String-\u003eApiResult String",
        "package": "antigate",
        "partial": "Multi Check Response",
        "signature": "String-\u003eApiResult String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseMultiCheckResponses",
      "description": {
        "fct-descr": "\u003cp\u003eParse antigate's multi-check response\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "String -\u003e [ApiResult String]",
        "fct-source": "src/Text-Recognition-Antigate.html#parseMultiCheckResponses",
        "fct-type": "function",
        "title": "parseMultiCheckResponses"
      },
      "index": {
        "description": "Parse antigate multi-check response",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "parseMultiCheckResponses",
        "normalized": "String-\u003e[ApiResult String]",
        "package": "antigate",
        "partial": "Multi Check Responses",
        "signature": "String-\u003e[ApiResult String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:parseUploadResponse",
      "description": {
        "fct-descr": "\u003cp\u003eParse antigate's upload response\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "String -\u003e ApiResult CaptchaID",
        "fct-source": "src/Text-Recognition-Antigate.html#parseUploadResponse",
        "fct-type": "function",
        "title": "parseUploadResponse"
      },
      "index": {
        "description": "Parse antigate upload response",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "parseUploadResponse",
        "normalized": "String-\u003eApiResult CaptchaID",
        "package": "antigate",
        "partial": "Upload Response",
        "signature": "String-\u003eApiResult CaptchaID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:phrase",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value (one word)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha has 2-4 words\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "phrase"
      },
      "index": {
        "description": "False default value one word True captcha has words",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "phrase",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:regsense",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e = default value (case is not important)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = captcha is case sensitive\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#CaptchaConf",
        "fct-type": "function",
        "title": "regsense"
      },
      "index": {
        "description": "False default value case is not important True captcha is case sensitive",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "regsense",
        "normalized": "",
        "package": "antigate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:renderApiResult",
      "description": {
        "fct-descr": "\u003cp\u003eMarshal \u003ca\u003eApiResult\u003c/a\u003e back to its text form\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiResult String -\u003e String",
        "fct-source": "src/Text-Recognition-Antigate.html#renderApiResult",
        "fct-type": "function",
        "title": "renderApiResult"
      },
      "index": {
        "description": "Marshal ApiResult back to its text form",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "renderApiResult",
        "normalized": "ApiResult String-\u003eString",
        "package": "antigate",
        "partial": "Api Result",
        "signature": "ApiResult String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:reportBad",
      "description": {
        "fct-descr": "\u003cp\u003ereport bad captcha result\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e CaptchaID -\u003e Manager -\u003e m Bool",
        "fct-source": "src/Text-Recognition-Antigate.html#reportBad",
        "fct-type": "function",
        "title": "reportBad"
      },
      "index": {
        "description": "report bad captcha result throws HttpException on network errors",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "reportBad",
        "normalized": "ApiKey-\u003eCaptchaID-\u003eManager-\u003ea Bool",
        "package": "antigate",
        "partial": "Bad",
        "signature": "ApiKey-\u003eCaptchaID-\u003eManager-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:solveCaptcha",
      "description": {
        "fct-descr": "\u003cp\u003eHigh level function to solve captcha, blocks until answer is provided (about 2-10 seconds).\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eSolveException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e when something goes wrong.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "SolveConf-\u003e ApiKey-\u003e CaptchaConf-\u003e FilePath-\u003e ByteString-\u003e Manager-\u003e m (CaptchaID, String)",
        "fct-type": "function",
        "title": "solveCaptcha"
      },
      "index": {
        "description": "High level function to solve captcha blocks until answer is provided about seconds throws SolveException or HttpException when something goes wrong",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "solveCaptcha",
        "normalized": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003ea(CaptchaID,String)",
        "package": "antigate",
        "partial": "Captcha",
        "signature": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003em(CaptchaID,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:solveCaptchaFromFile",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "SolveConf -\u003e ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e Manager -\u003e m (CaptchaID, String)",
        "fct-source": "src/Text-Recognition-Antigate.html#solveCaptchaFromFile",
        "fct-type": "function",
        "title": "solveCaptchaFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "solveCaptchaFromFile",
        "normalized": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003ea(CaptchaID,String)",
        "package": "antigate",
        "partial": "Captcha From File",
        "signature": "SolveConf-\u003eApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003em(CaptchaID,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:uploadCaptcha",
      "description": {
        "fct-descr": "\u003cp\u003eupload captcha for recognition\n\u003c/p\u003e\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eHttpException\u003c/a\u003e\u003c/code\u003e on network errors.\n\u003c/p\u003e",
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e ByteString -\u003e Manager -\u003e m (ApiResult CaptchaID)",
        "fct-source": "src/Text-Recognition-Antigate.html#uploadCaptcha",
        "fct-type": "function",
        "title": "uploadCaptcha"
      },
      "index": {
        "description": "upload captcha for recognition throws HttpException on network errors",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "uploadCaptcha",
        "normalized": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003ea(ApiResult CaptchaID)",
        "package": "antigate",
        "partial": "Captcha",
        "signature": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eByteString-\u003eManager-\u003em(ApiResult CaptchaID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:uploadCaptchaFromFile",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "ApiKey -\u003e CaptchaConf -\u003e FilePath -\u003e Manager -\u003e m (ApiResult CaptchaID)",
        "fct-source": "src/Text-Recognition-Antigate.html#uploadCaptchaFromFile",
        "fct-type": "function",
        "title": "uploadCaptchaFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "uploadCaptchaFromFile",
        "normalized": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003ea(ApiResult CaptchaID)",
        "package": "antigate",
        "partial": "Captcha From File",
        "signature": "ApiKey-\u003eCaptchaConf-\u003eFilePath-\u003eManager-\u003em(ApiResult CaptchaID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antigate/docs/Text-Recognition-Antigate.html#v:withManager",
      "description": {
        "fct-module": "Text.Recognition.Antigate",
        "fct-package": "antigate",
        "fct-signature": "(Manager -\u003e ResourceT m a) -\u003e m a",
        "fct-type": "function",
        "title": "withManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Recognition Antigate",
        "module": "Text.Recognition.Antigate",
        "name": "withManager",
        "normalized": "(Manager-\u003eResourceT a b)-\u003ea b",
        "package": "antigate",
        "partial": "Manager",
        "signature": "(Manager-\u003eResourceT m a)-\u003em a"
      }
    }
  }
]