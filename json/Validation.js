[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types similar to \u003ccode\u003eData.Either\u003c/code\u003e that are explicit about failure and success.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "module",
        "fct-source": "src/Data-Validation.html",
        "fct-type": "module",
        "title": "Validation"
      },
      "index": {
        "description": "Data types similar to Data.Either that are explicit about failure and success",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "Validation",
        "normalized": "",
        "package": "Validation",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#t:AccValidation",
      "description": {
        "fct-descr": "\u003cp\u003eA value of the type \u003ccode\u003eerr\u003c/code\u003e or \u003ccode\u003ea\u003c/code\u003e, however, the \u003ccode\u003eApplicative\u003c/code\u003e instance\n accumulates values. This is witnessed by the \u003ccode\u003eSemigroup\u003c/code\u003e context on the instance.\n \u003cem\u003eNote that there is no @Monad@ such that @ap = (\u003c*\u003e).\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esuccess (+1) \u003ca\u003e*\u003c/a\u003e success 7 == AccSuccess 8\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efailure [\u003ca\u003ef1\u003c/a\u003e] \u003ca\u003e*\u003c/a\u003e success 7 == AccFailure [\u003ca\u003ef1\u003c/a\u003e]\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esuccess (+1) \u003ca\u003e*\u003c/a\u003e failure [\u003ca\u003ef2\u003c/a\u003e] == AccFailure [\u003ca\u003ef2\u003c/a\u003e]\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efailure [\u003ca\u003ef1\u003c/a\u003e] \u003ca\u003e*\u003c/a\u003e failure [\u003ca\u003ef2\u003c/a\u003e] == AccFailure [\u003ca\u003ef1\u003c/a\u003e,\u003ca\u003ef2\u003c/a\u003e]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "data",
        "fct-source": "src/Data-Validation.html#AccValidation",
        "fct-type": "data",
        "title": "AccValidation"
      },
      "index": {
        "description": "value of the type err or however the Applicative instance accumulates values This is witnessed by the Semigroup context on the instance Note that there is no Monad such that ap success success AccSuccess failure f1 success AccFailure f1 success failure f2 AccFailure f2 failure f1 failure f2 AccFailure f1 f2",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "AccValidation",
        "normalized": "",
        "package": "Validation",
        "partial": "Acc Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#t:Validate",
      "description": {
        "fct-descr": "\u003cp\u003eConstruction for validation values.\n\u003c/p\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "class",
        "fct-source": "src/Data-Validation.html#Validate",
        "fct-type": "class",
        "title": "Validate"
      },
      "index": {
        "description": "Construction for validation values",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "Validate",
        "normalized": "",
        "package": "Validation",
        "partial": "Validate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#t:Validation",
      "description": {
        "fct-descr": "\u003cp\u003eA value of the type \u003ccode\u003eerr\u003c/code\u003e or \u003ccode\u003ea\u003c/code\u003e and isomorphic to \u003ccode\u003eData.Either\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "data",
        "fct-source": "src/Data-Validation.html#Validation",
        "fct-type": "data",
        "title": "Validation"
      },
      "index": {
        "description": "value of the type err or and isomorphic to Data.Either",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "Validation",
        "normalized": "",
        "package": "Validation",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#t:ValidationT",
      "description": {
        "fct-descr": "\u003cp\u003eThe transformer version of \u003ccode\u003eValidation\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "data",
        "fct-source": "src/Data-Validation.html#ValidationT",
        "fct-type": "data",
        "title": "ValidationT"
      },
      "index": {
        "description": "The transformer version of Validation",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "ValidationT",
        "normalized": "",
        "package": "Validation",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#v:ValidationT",
      "description": {
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "ValidationT",
        "fct-source": "src/Data-Validation.html#ValidationT",
        "fct-type": "function",
        "title": "ValidationT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "ValidationT",
        "normalized": "",
        "package": "Validation",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#v:failure",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a failure validation value.\n\u003c/p\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "err -\u003e v err a",
        "fct-source": "src/Data-Validation.html#failure",
        "fct-type": "method",
        "title": "failure"
      },
      "index": {
        "description": "Construct failure validation value",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "failure",
        "normalized": "a-\u003eb a c",
        "package": "Validation",
        "partial": "",
        "signature": "err-\u003ev err a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#v:runValidationT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "m (Validation err a)",
        "fct-source": "src/Data-Validation.html#ValidationT",
        "fct-type": "function",
        "title": "runValidationT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "runValidationT",
        "normalized": "",
        "package": "Validation",
        "partial": "Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Validation/docs/Data-Validation.html#v:success",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a success validation value.\n\u003c/p\u003e",
        "fct-module": "Data.Validation",
        "fct-package": "Validation",
        "fct-signature": "a -\u003e v err a",
        "fct-source": "src/Data-Validation.html#success",
        "fct-type": "method",
        "title": "success"
      },
      "index": {
        "description": "Construct success validation value",
        "hierarchy": "Data Validation",
        "module": "Data.Validation",
        "name": "success",
        "normalized": "a-\u003eb c a",
        "package": "Validation",
        "partial": "",
        "signature": "a-\u003ev err a"
      }
    }
  }
]