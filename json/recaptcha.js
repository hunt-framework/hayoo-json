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
        "word": "recaptcha"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Captcha.ReCaptcha",
          "name": "ReCaptcha",
          "package": "recaptcha",
          "source": "src/Network-Captcha-ReCaptcha.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Captcha ReCaptcha",
          "module": "Network.Captcha.ReCaptcha",
          "name": "ReCaptcha",
          "package": "recaptcha",
          "partial": "Re Captcha",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/recaptcha/docs/Network-Captcha-ReCaptcha.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns HTML element to be inserted in the form for which a CAPTCHA is wanted.\n\u003c/p\u003e",
          "module": "Network.Captcha.ReCaptcha",
          "name": "captchaFields",
          "package": "recaptcha",
          "signature": "String-\u003e Maybe String-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "Returns HTML element to be inserted in the form for which CAPTCHA is wanted",
          "hierarchy": "Network Captcha ReCaptcha",
          "module": "Network.Captcha.ReCaptcha",
          "name": "captchaFields",
          "normalized": "String-\u003eMaybe String-\u003eHtml",
          "package": "recaptcha",
          "partial": "Fields",
          "signature": "String-\u003eMaybe String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/recaptcha/docs/Network-Captcha-ReCaptcha.html#v:captchaFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a CAPTCHA.\n\u003c/p\u003e",
          "module": "Network.Captcha.ReCaptcha",
          "name": "validateCaptcha",
          "package": "recaptcha",
          "signature": "String-\u003e String-\u003e String-\u003e String-\u003e IO (Either String ())",
          "type": "function"
        },
        "index": {
          "description": "Verify CAPTCHA",
          "hierarchy": "Network Captcha ReCaptcha",
          "module": "Network.Captcha.ReCaptcha",
          "name": "validateCaptcha",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eIO(Either String())",
          "package": "recaptcha",
          "partial": "Captcha",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/recaptcha/docs/Network-Captcha-ReCaptcha.html#v:validateCaptcha"
      }
    }
  ]
]