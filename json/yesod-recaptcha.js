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
        "word": "yesod-recaptcha"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.ReCAPTCHA",
          "name": "ReCAPTCHA",
          "package": "yesod-recaptcha",
          "source": "src/Yesod-ReCAPTCHA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "ReCAPTCHA",
          "package": "yesod-recaptcha",
          "partial": "Re CAPTCHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that may be given to reCAPTCHA.  In order to use\n them on your site, use \u003ccode\u003e\u003ca\u003erecaptchaOptions\u003c/a\u003e\u003c/code\u003e anywhere before the\n form that contains the \u003ccode\u003erecaptchaField\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that there's an instance for \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e, so you may use\n \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "RecaptchaOptions",
          "package": "yesod-recaptcha",
          "source": "src/Yesod-ReCAPTCHA.html#RecaptchaOptions",
          "type": "data"
        },
        "index": {
          "description": "Options that may be given to reCAPTCHA In order to use them on your site use recaptchaOptions anywhere before the form that contains the recaptchaField Note that there an instance for Default so you may use def",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "RecaptchaOptions",
          "package": "yesod-recaptcha",
          "partial": "Recaptcha Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#t:RecaptchaOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass used by \u003ccode\u003eyesod-recaptcha\u003c/code\u003e's fields.  It should be\n fairly easy to implement a barebones instance of this class\n for you foundation data type:\n\u003c/p\u003e\u003cpre\u003e instance YesodReCAPTCHA MyType where\n   recaptchaPublicKey  = return \"[your public key]\"\n   recaptchaPrivateKey = return \"[your private key]\"\n\u003c/pre\u003e\u003cp\u003eYou may also write a more sophisticated instance.  For\n example, you may get these values from your \u003ccode\u003esettings.yml\u003c/code\u003e\n instead of hardcoding them. Or you may give different keys\n depending on the request (maybe you're serving to two\n different domains in the same application).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eYesodAuth\u003c/a\u003e\u003c/code\u003e superclass is used only for the HTTP\n request.  Please fill a bug report if you think that this\n \u003ccode\u003eYesodReCAPTCHA\u003c/code\u003e may be useful without \u003ccode\u003eYesodAuth\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMinimum complete definition:\u003c/em\u003e \u003ccode\u003e\u003ca\u003erecaptchaPublicKey\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erecaptchaPrivateKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "YesodReCAPTCHA",
          "package": "yesod-recaptcha",
          "source": "src/Yesod-ReCAPTCHA.html#YesodReCAPTCHA",
          "type": "class"
        },
        "index": {
          "description": "Class used by yesod-recaptcha fields It should be fairly easy to implement barebones instance of this class for you foundation data type instance YesodReCAPTCHA MyType where recaptchaPublicKey return your public key recaptchaPrivateKey return your private key You may also write more sophisticated instance For example you may get these values from your settings.yml instead of hardcoding them Or you may give different keys depending on the request maybe you re serving to two different domains in the same application The YesodAuth superclass is used only for the HTTP request Please fill bug report if you think that this YesodReCAPTCHA may be useful without YesodAuth Minimum complete definition recaptchaPublicKey and recaptchaPrivateKey",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "YesodReCAPTCHA",
          "package": "yesod-recaptcha",
          "partial": "Yesod Re CAPTCHA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#t:YesodReCAPTCHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.ReCAPTCHA",
          "name": "RecaptchaOptions",
          "package": "yesod-recaptcha",
          "signature": "RecaptchaOptions",
          "source": "src/Yesod-ReCAPTCHA.html#RecaptchaOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "RecaptchaOptions",
          "package": "yesod-recaptcha",
          "partial": "Recaptcha Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:RecaptchaOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA backdoor to the reCAPTCHA mechanism.  While doing\n automated tests you may need to fill a form that is\n protected by a CAPTCHA.  The whole point of using a\n CAPTCHA is disallowing access to non-humans, which\n hopefully your test suite is.\n\u003c/p\u003e\u003cp\u003eIn order to solve this problem, you may define\n\u003c/p\u003e\u003cpre\u003e insecureRecaptchaBackdoor = return (Just \"\u003csecret CAPTCHA\u003e\")\n\u003c/pre\u003e\u003cp\u003eNow, whenever someone fills \u003ccode\u003e\u003csecret CAPTCHA\u003e\u003c/code\u003e as the\n CAPTCHA, the \u003ccode\u003eyesod-recaptcha\u003c/code\u003e library will \u003cem\u003enot\u003c/em\u003e contact\n reCAPTCHA's servers and instead will blindly accept the\n secret CAPTCHA.\n\u003c/p\u003e\u003cp\u003eNote that this is a *huge* security hole in the wrong\n hands.  We \u003cem\u003edo not\u003c/em\u003e recommend using this function on a\n production environment without a good reason.  If for\n whatever reason you must use this function on a production\n environment, please make use of its access to \u003ccode\u003eGHandler\u003c/code\u003e\n in order to return \u003ccode\u003eJust\u003c/code\u003e only when strictly necessary.\n For example, you may return \u003ccode\u003eJust\u003c/code\u003e only when the request\n comes from \u003ccode\u003elocalhost\u003c/code\u003e and read its contents from a secret\n file accessible only by SSH which is afterwards removed.\n\u003c/p\u003e\u003cp\u003eBy default, this function returns \u003ccode\u003eNothing\u003c/code\u003e, which\n completely disables the backdoor.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "insecureRecaptchaBackdoor",
          "package": "yesod-recaptcha",
          "signature": "HandlerT site IO (Maybe Text)",
          "source": "src/Yesod-ReCAPTCHA.html#insecureRecaptchaBackdoor",
          "type": "method"
        },
        "index": {
          "description": "backdoor to the reCAPTCHA mechanism While doing automated tests you may need to fill form that is protected by CAPTCHA The whole point of using CAPTCHA is disallowing access to non-humans which hopefully your test suite is In order to solve this problem you may define insecureRecaptchaBackdoor return Just secret CAPTCHA Now whenever someone fills secret CAPTCHA as the CAPTCHA the yesod-recaptcha library will not contact reCAPTCHA servers and instead will blindly accept the secret CAPTCHA Note that this is huge security hole in the wrong hands We do not recommend using this function on production environment without good reason If for whatever reason you must use this function on production environment please make use of its access to GHandler in order to return Just only when strictly necessary For example you may return Just only when the request comes from localhost and read its contents from secret file accessible only by SSH which is afterwards removed By default this function returns Nothing which completely disables the backdoor",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "insecureRecaptchaBackdoor",
          "package": "yesod-recaptcha",
          "partial": "Recaptcha Backdoor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:insecureRecaptchaBackdoor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "lang",
          "package": "yesod-recaptcha",
          "signature": "Maybe Text",
          "source": "src/Yesod-ReCAPTCHA.html#RecaptchaOptions",
          "type": "function"
        },
        "index": {
          "description": "Language",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "lang",
          "package": "yesod-recaptcha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reCAPTCHA field.  This \u003ccode\u003e\u003ca\u003eAForm\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e()\u003c/code\u003e because\n CAPTCHAs give no useful information besides having being typed\n correctly or not.  When the user does not type the CAPTCHA\n correctly, this \u003ccode\u003e\u003ca\u003eAForm\u003c/a\u003e\u003c/code\u003e will automatically fail in the same\n way as any other \u003ccode\u003eyesod-form\u003c/code\u003e widget fails, so you may just\n ignore the \u003ccode\u003e()\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaAForm",
          "package": "yesod-recaptcha",
          "signature": "AForm (HandlerT site IO) ()",
          "source": "src/Yesod-ReCAPTCHA.html#recaptchaAForm",
          "type": "function"
        },
        "index": {
          "description": "reCAPTCHA field This AForm returns because CAPTCHAs give no useful information besides having being typed correctly or not When the user does not type the CAPTCHA correctly this AForm will automatically fail in the same way as any other yesod-form widget fails so you may just ignore the value",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaAForm",
          "normalized": "AForm(HandlerT a IO)()",
          "package": "yesod-recaptcha",
          "partial": "AForm",
          "signature": "AForm(HandlerT site IO)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:recaptchaAForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erecaptchaAForm\u003c/a\u003e\u003c/code\u003e, but instead of being an\n \u003ccode\u003e\u003ca\u003eAForm\u003c/a\u003e\u003c/code\u003e, it's an \u003ccode\u003e\u003ca\u003eMForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaMForm",
          "package": "yesod-recaptcha",
          "signature": "MForm (HandlerT site IO) (FormResult (), [FieldView site])",
          "source": "src/Yesod-ReCAPTCHA.html#recaptchaMForm",
          "type": "function"
        },
        "index": {
          "description": "Same as recaptchaAForm but instead of being an AForm it an MForm",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaMForm",
          "normalized": "MForm(HandlerT a IO)(FormResult(),[FieldView a])",
          "package": "yesod-recaptcha",
          "partial": "MForm",
          "signature": "MForm(HandlerT site IO)(FormResult(),[FieldView site])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:recaptchaMForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the given \u003ccode\u003e\u003ca\u003eRecaptchaOptions\u003c/a\u003e\u003c/code\u003e for all forms declared\n after this widget.  This widget may be used anywhere, on the\n \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e or on the \u003ccode\u003e\u003ca\u003ebody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this is \u003cem\u003enot\u003c/em\u003e required to use \u003ccode\u003e\u003ca\u003erecaptchaAForm\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003erecaptchaMForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaOptions",
          "package": "yesod-recaptcha",
          "signature": "RecaptchaOptions -\u003e WidgetT site IO ()",
          "source": "src/Yesod-ReCAPTCHA.html#recaptchaOptions",
          "type": "function"
        },
        "index": {
          "description": "Define the given RecaptchaOptions for all forms declared after this widget This widget may be used anywhere on the head or on the body Note that this is not required to use recaptchaAForm or recaptchaMForm",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaOptions",
          "normalized": "RecaptchaOptions-\u003eWidgetT a IO()",
          "package": "yesod-recaptcha",
          "partial": "Options",
          "signature": "RecaptchaOptions-\u003eWidgetT site IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:recaptchaOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour reCAPTCHA private key.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaPrivateKey",
          "package": "yesod-recaptcha",
          "signature": "HandlerT site IO Text",
          "source": "src/Yesod-ReCAPTCHA.html#recaptchaPrivateKey",
          "type": "method"
        },
        "index": {
          "description": "Your reCAPTCHA private key",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaPrivateKey",
          "package": "yesod-recaptcha",
          "partial": "Private Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:recaptchaPrivateKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour reCAPTCHA public key.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaPublicKey",
          "package": "yesod-recaptcha",
          "signature": "HandlerT site IO Text",
          "source": "src/Yesod-ReCAPTCHA.html#recaptchaPublicKey",
          "type": "method"
        },
        "index": {
          "description": "Your reCAPTCHA public key",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "recaptchaPublicKey",
          "package": "yesod-recaptcha",
          "partial": "Public Key",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:recaptchaPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheme of the reCAPTCHA field.  Currently may be\n \u003ccode\u003e\"red\"\u003c/code\u003e, \u003ccode\u003e\"white\"\u003c/code\u003e, \u003ccode\u003e\"blackglass\"\u003c/code\u003e or \u003ccode\u003e\"clean\"\u003c/code\u003e.\n A value of \u003ccode\u003eNothing\u003c/code\u003e uses the default.\n\u003c/p\u003e",
          "module": "Yesod.ReCAPTCHA",
          "name": "theme",
          "package": "yesod-recaptcha",
          "signature": "Maybe Text",
          "source": "src/Yesod-ReCAPTCHA.html#RecaptchaOptions",
          "type": "function"
        },
        "index": {
          "description": "Theme of the reCAPTCHA field Currently may be red white blackglass or clean value of Nothing uses the default",
          "hierarchy": "Yesod ReCAPTCHA",
          "module": "Yesod.ReCAPTCHA",
          "name": "theme",
          "package": "yesod-recaptcha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-recaptcha/docs/Yesod-ReCAPTCHA.html#v:theme"
      }
    }
  ]
]