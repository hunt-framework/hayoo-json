[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 3.4 (Attenuation By Distance) of the\n OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html",
        "fct-type": "module",
        "title": "Attenuation"
      },
      "index": {
        "description": "This module corresponds to section Attenuation By Distance of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "Attenuation",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Attenuation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#t:DistanceModel",
      "description": {
        "fct-descr": "\u003cp\u003eOpenAL currently supports six modes of operation with respect to distance\n attenuation, including one that is similar to the IASIG I3DL2 model. The\n application chooses one of these models (or chooses to disable\n distance-dependent attenuation) on a per-context basis.\n\u003c/p\u003e\u003cp\u003eThe distance used in the formulas for the \"clamped\" modes below is clamped\n to be in the range between \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eclamped distance\u003c/em\u003e =\n    max(\u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e, min(\u003cem\u003edistance\u003c/em\u003e, \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e\u003cp\u003eThe linear models are not physically realistic, but do allow full attenuation\n of a source beyond a specified distance. The OpenAL implementation is still\n free to apply any range clamping as necessary.\n\u003c/p\u003e\u003cp\u003eWith all the distance models, if the formula can not be evaluated then the\n source will not be attenuated. For example, if a linear model is being used\n with \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e equal to \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e, then the gain equation will\n have a divide-by-zero error in it. In this case, there is no attenuation for\n that source.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "data",
        "title": "DistanceModel"
      },
      "index": {
        "description": "OpenAL currently supports six modes of operation with respect to distance attenuation including one that is similar to the IASIG I3DL2 model The application chooses one of these models or chooses to disable distance-dependent attenuation on per-context basis The distance used in the formulas for the clamped modes below is clamped to be in the range between referenceDistance and maxDistance clamped distance max referenceDistance min distance maxDistance The linear models are not physically realistic but do allow full attenuation of source beyond specified distance The OpenAL implementation is still free to apply any range clamping as necessary With all the distance models if the formula can not be evaluated then the source will not be attenuated For example if linear model is being used with referenceDistance equal to maxDistance then the gain equation will have divide-by-zero error in it In this case there is no attenuation for that source",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "DistanceModel",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Distance Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:ExponentDistance",
      "description": {
        "fct-descr": "\u003cp\u003eExponential distance rolloff model, modeling an exponential dropoff in\n   gain as distance increases between the source and listener.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003egain\u003c/em\u003e = (\u003cem\u003edistance\u003c/em\u003e / \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e) ** (- \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "ExponentDistance",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "ExponentDistance"
      },
      "index": {
        "description": "Exponential distance rolloff model modeling an exponential dropoff in gain as distance increases between the source and listener gain distance referenceDistance rolloffFactor",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "ExponentDistance",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Exponent Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:ExponentDistanceClamped",
      "description": {
        "fct-descr": "\u003cp\u003eExponential Distance clamped model, which is the exponential model,\n   extended to guarantee that for distances below \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e,\n   gain is clamped.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "ExponentDistanceClamped",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "ExponentDistanceClamped"
      },
      "index": {
        "description": "Exponential Distance clamped model which is the exponential model extended to guarantee that for distances below referenceDistance gain is clamped",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "ExponentDistanceClamped",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Exponent Distance Clamped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:InverseDistance",
      "description": {
        "fct-descr": "\u003cp\u003eInverse distance rolloff model, which is equivalent to the IASIG I3DL2\n   model with the exception that \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e does not imply any\n   clamping.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003egain\u003c/em\u003e = \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e / (\u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e +\n             \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e * (\u003cem\u003edistance\u003c/em\u003e - \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e parameter used here is a per-source attribute\n   which is the distance at which the listener will experience gain\n   (unless the implementation had to clamp effective gain to the available\n   dynamic range). \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e is per-source parameter the application\n   can use to increase or decrease the range of a source by decreasing or\n   increasing the attenuation, respectively. The default value is 1. The\n   implementation is free to optimize for a \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e value of 0,\n   which indicates that the application does not wish any distance\n   attenuation on the respective source.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "InverseDistance",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "InverseDistance"
      },
      "index": {
        "description": "Inverse distance rolloff model which is equivalent to the IASIG I3DL2 model with the exception that referenceDistance does not imply any clamping gain referenceDistance referenceDistance rolloffFactor distance referenceDistance The referenceDistance parameter used here is per-source attribute which is the distance at which the listener will experience gain unless the implementation had to clamp effective gain to the available dynamic range rolloffFactor is per-source parameter the application can use to increase or decrease the range of source by decreasing or increasing the attenuation respectively The default value is The implementation is free to optimize for rolloffFactor value of which indicates that the application does not wish any distance attenuation on the respective source",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "InverseDistance",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Inverse Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:InverseDistanceClamped",
      "description": {
        "fct-descr": "\u003cp\u003eInverse Distance clamped model, which is essentially the inverse\n   distance rolloff model, extended to guarantee that for distances below\n   \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e, gain is clamped. This mode is equivalent to the\n   IASIG I3DL2 distance model.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "InverseDistanceClamped",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "InverseDistanceClamped"
      },
      "index": {
        "description": "Inverse Distance clamped model which is essentially the inverse distance rolloff model extended to guarantee that for distances below referenceDistance gain is clamped This mode is equivalent to the IASIG I3DL2 distance model",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "InverseDistanceClamped",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Inverse Distance Clamped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:LinearDistance",
      "description": {
        "fct-descr": "\u003cp\u003eLinear distance rolloff model, modeling a linear dropoff in gain as\n distance increases between the source and listener.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003egain\u003c/em\u003e = (1 - \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e * (\u003cem\u003edistance\u003c/em\u003e - \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e) /\n            (\u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e - \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "LinearDistance",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "LinearDistance"
      },
      "index": {
        "description": "Linear distance rolloff model modeling linear dropoff in gain as distance increases between the source and listener gain rolloffFactor distance referenceDistance maxDistance referenceDistance",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "LinearDistance",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Linear Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:LinearDistanceClamped",
      "description": {
        "fct-descr": "\u003cp\u003eLinear Distance clamped model, which is the linear model, extended to\n   guarantee that for distances below \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e, gain is clamped.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "LinearDistanceClamped",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "LinearDistanceClamped"
      },
      "index": {
        "description": "Linear Distance clamped model which is the linear model extended to guarantee that for distances below referenceDistance gain is clamped",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "LinearDistanceClamped",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Linear Distance Clamped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:NoAttenuation",
      "description": {
        "fct-descr": "\u003cp\u003eBypass all distance attenuation calculation for all sources. The\n   implementation is expected to optimize this situation.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "NoAttenuation",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#DistanceModel",
        "fct-type": "function",
        "title": "NoAttenuation"
      },
      "index": {
        "description": "Bypass all distance attenuation calculation for all sources The implementation is expected to optimize this situation",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "NoAttenuation",
        "normalized": "",
        "package": "OpenAL",
        "partial": "No Attenuation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Attenuation.html#v:distanceModel",
      "description": {
        "fct-descr": "\u003cp\u003eContains the current per-context distance model.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Attenuation",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar DistanceModel",
        "fct-source": "src/Sound-OpenAL-AL-Attenuation.html#distanceModel",
        "fct-type": "function",
        "title": "distanceModel"
      },
      "index": {
        "description": "Contains the current per-context distance model",
        "hierarchy": "Sound OpenAL AL Attenuation",
        "module": "Sound.OpenAL.AL.Attenuation",
        "name": "distanceModel",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 2.2 (Primitive Types) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-BasicTypes.html",
        "fct-type": "module",
        "title": "BasicTypes"
      },
      "index": {
        "description": "This module corresponds to section Primitive Types of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "BasicTypes",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Basic Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALboolean",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit boolean\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALboolean",
        "fct-type": "type",
        "title": "ALboolean"
      },
      "index": {
        "description": "bit boolean",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALboolean",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALboolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALbyte",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 8-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALbyte",
        "fct-type": "type",
        "title": "ALbyte"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALbyte",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALbyte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALchar",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALchar",
        "fct-type": "type",
        "title": "ALchar"
      },
      "index": {
        "description": "Character",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALchar",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALchar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALdouble",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit IEEE754 floating-point\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALdouble",
        "fct-type": "type",
        "title": "ALdouble"
      },
      "index": {
        "description": "bit IEEE754 floating-point",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALdouble",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALdouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALenum",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerated 32-bit value\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALenum",
        "fct-type": "type",
        "title": "ALenum"
      },
      "index": {
        "description": "Enumerated bit value",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALenum",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALenum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALfloat",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit IEEE754 floating-point\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALfloat",
        "fct-type": "type",
        "title": "ALfloat"
      },
      "index": {
        "description": "bit IEEE754 floating-point",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALfloat",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALfloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALint",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 32-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALint",
        "fct-type": "type",
        "title": "ALint"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALint",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALshort",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 16-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALshort",
        "fct-type": "type",
        "title": "ALshort"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALshort",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALshort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALsizei",
      "description": {
        "fct-descr": "\u003cp\u003eNon-negatitve 32-bit binary integer size\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALsizei",
        "fct-type": "type",
        "title": "ALsizei"
      },
      "index": {
        "description": "Non-negatitve bit binary integer size",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALsizei",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALsizei",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALubyte",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 8-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALubyte",
        "fct-type": "type",
        "title": "ALubyte"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALubyte",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALubyte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALuint",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 32-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALuint",
        "fct-type": "type",
        "title": "ALuint"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALuint",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALuint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-BasicTypes.html#t:ALushort",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 16-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALushort",
        "fct-type": "type",
        "title": "ALushort"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL AL BasicTypes",
        "module": "Sound.OpenAL.AL.BasicTypes",
        "name": "ALushort",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALushort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to chapter 6 (Buffers) of the OpenAL Specification\n and Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eA buffer encapsulates OpenAL state related to storing sample data. The\n application can request and release buffer objects, and fill them with\n data. Data can be supplied compressed and encoded as long as the format is\n supported. Buffers can, internally, contain waveform data as uncompressed or\n compressed samples.\n\u003c/p\u003e\u003cp\u003eUnlike source (see \u003ca\u003eSound.OpenAL.AL.Source\u003c/a\u003e) and listener (see\n \u003ca\u003eSound.OpenAL.AL.Listener\u003c/a\u003e) objects, buffer objects can be shared among AL\n contexts. Buffers are referenced by sources. A single buffer can be referred\n to by multiple sources. This separation allows drivers and hardware to\n optimize storage and processing where applicable.\n\u003c/p\u003e\u003cp\u003eThe simplest supported format for buffer data is PCM. PCM data is assumed to\n use the processor's native byte order. Other formats use the byte order\n native to that format.\n\u003c/p\u003e\u003cp\u003eAt this time, buffer states are defined for purposes of discussion. The\n states described in this section are not exposed through the API (can not be\n queried, or be set directly), and the state description used in the\n implementation might differ from this.\n\u003c/p\u003e\u003cp\u003eA buffer is considered to be in one of the following states, with respect to\n all sources:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eunused\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e The buffer is not included in any queue for any source. In\n particular, the buffer is neither pending nor current for any source. The\n buffer name can be deleted at this time.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eprocessed\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e The buffer is listed in the queue of at least one source, but\n is neither pending nor current for any source. The buffer can be deleted as\n soon as it has been unqueued for all sources it is queued with.\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003epending\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e There is at least one source for which the buffer has been queued,\n for which the buffer data has not yet been dereferenced. The buffer can only\n be unqueued for those sources that have dereferenced the data in the buffer\n in its entirety, and cannot be deleted or changed.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe buffer state is dependent on the state of all sources that is has been\n queued for. A single queue occurrence of a buffer propagates the buffer state\n (over all sources) from \u003cem\u003eunused\u003c/em\u003e to \u003cem\u003eprocessed\u003c/em\u003e or higher. Sources that are\n in the \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e states still have queue entries that cause\n buffers to be \u003cem\u003eprocessed\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eA single queue entry with a single source for which the buffer is not yet\n \u003cem\u003eprocessed\u003c/em\u003e propagates the buffer's queuing state to \u003cem\u003epending\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eBuffers that are \u003cem\u003eprocessed\u003c/em\u003e for a given source can be unqueued from that\n source's queue. Buffers that have been unqueued from all sources are\n \u003cem\u003eunused\u003c/em\u003e. Buffers that are \u003cem\u003eunused\u003c/em\u003e can be deleted, or changed by writing\n \u003ccode\u003e\u003ca\u003ebufferData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html",
        "fct-type": "module",
        "title": "Buffer"
      },
      "index": {
        "description": "This module corresponds to chapter Buffers of the OpenAL Specification and Reference version buffer encapsulates OpenAL state related to storing sample data The application can request and release buffer objects and fill them with data Data can be supplied compressed and encoded as long as the format is supported Buffers can internally contain waveform data as uncompressed or compressed samples Unlike source see Sound.OpenAL.AL.Source and listener see Sound.OpenAL.AL.Listener objects buffer objects can be shared among AL contexts Buffers are referenced by sources single buffer can be referred to by multiple sources This separation allows drivers and hardware to optimize storage and processing where applicable The simplest supported format for buffer data is PCM PCM data is assumed to use the processor native byte order Other formats use the byte order native to that format At this time buffer states are defined for purposes of discussion The states described in this section are not exposed through the API can not be queried or be set directly and the state description used in the implementation might differ from this buffer is considered to be in one of the following states with respect to all sources unused The buffer is not included in any queue for any source In particular the buffer is neither pending nor current for any source The buffer name can be deleted at this time processed The buffer is listed in the queue of at least one source but is neither pending nor current for any source The buffer can be deleted as soon as it has been unqueued for all sources it is queued with pending There is at least one source for which the buffer has been queued for which the buffer data has not yet been dereferenced The buffer can only be unqueued for those sources that have dereferenced the data in the buffer in its entirety and cannot be deleted or changed The buffer state is dependent on the state of all sources that is has been queued for single queue occurrence of buffer propagates the buffer state over all sources from unused to processed or higher Sources that are in the Stopped or Initial states still have queue entries that cause buffers to be processed single queue entry with single source for which the buffer is not yet processed propagates the buffer queuing state to pending Buffers that are processed for given source can be unqueued from that source queue Buffers that have been unqueued from all sources are unused Buffers that are unused can be deleted or changed by writing bufferData",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#t:Buffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract buffer type.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-BufferInternal.html#Buffer",
        "fct-type": "data",
        "title": "Buffer"
      },
      "index": {
        "description": "The abstract buffer type",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#t:BufferData",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html#BufferData",
        "fct-type": "data",
        "title": "BufferData"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "BufferData",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Buffer Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eValid sound formats. An implementation may expose other formats, see\n \u003ca\u003eSound.OpenAL.ALC.Extensions\u003c/a\u003e for information on determining if additional\n formats are supported.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "Valid sound formats An implementation may expose other formats see Sound.OpenAL.ALC.Extensions for information on determining if additional formats are supported",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Format",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#t:MemoryRegion",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html#MemoryRegion",
        "fct-type": "data",
        "title": "MemoryRegion"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "MemoryRegion",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Memory Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:BufferData",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "BufferData (MemoryRegion a) Format Frequency",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html#BufferData",
        "fct-type": "function",
        "title": "BufferData"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "BufferData",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Buffer Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:MemoryRegion",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "MemoryRegion (Ptr a) ALsizei",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html#MemoryRegion",
        "fct-type": "function",
        "title": "MemoryRegion"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "MemoryRegion",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Memory Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:Mono16",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "Mono16",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#Format",
        "fct-type": "function",
        "title": "Mono16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Mono16",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:Mono8",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "Mono8",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#Format",
        "fct-type": "function",
        "title": "Mono8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Mono8",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:Stereo16",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "Stereo16",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#Format",
        "fct-type": "function",
        "title": "Stereo16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Stereo16",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Stereo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:Stereo8",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "Stereo8",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#Format",
        "fct-type": "function",
        "title": "Stereo8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "Stereo8",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Stereo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Buffer.html#v:bufferData",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of buffer state is the actual sound sample data stored in\n association with the buffer. Applications can specify sample data using\n \u003ccode\u003e\u003ca\u003ebufferData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe data specified is copied to an internal software, or if possible,\n hardware buffer. The implementation is free to apply decompression,\n conversion, resampling, and filtering as needed. The internal format of the\n buffer is not exposed to the application, and not accessible.\n\u003c/p\u003e\u003cp\u003eBuffers containing audio data with more than one channel will be played\n without 3D spatialization features, these formats are normally used for\n background music. Applications should always check for an error condition\n after attempting to specify buffer data in case an implementation has to\n generate an \u003ccode\u003e\u003ca\u003eALOutOfMemory\u003c/a\u003e\u003c/code\u003e or a conversion related \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error.\n The application is free to reuse the memory specified by the data pointer\n once \u003ccode\u003e\u003ca\u003ebufferData\u003c/a\u003e\u003c/code\u003e is set. The implementation has to dereference, e.g. copy,\n the data while accessing \u003ccode\u003e\u003ca\u003ebufferData\u003c/a\u003e\u003c/code\u003e execution.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Buffer",
        "fct-package": "OpenAL",
        "fct-signature": "Buffer -\u003e StateVar (BufferData a)",
        "fct-source": "src/Sound-OpenAL-AL-Buffer.html#bufferData",
        "fct-type": "function",
        "title": "bufferData"
      },
      "index": {
        "description": "special case of buffer state is the actual sound sample data stored in association with the buffer Applications can specify sample data using bufferData The data specified is copied to an internal software or if possible hardware buffer The implementation is free to apply decompression conversion resampling and filtering as needed The internal format of the buffer is not exposed to the application and not accessible Buffers containing audio data with more than one channel will be played without spatialization features these formats are normally used for background music Applications should always check for an error condition after attempting to specify buffer data in case an implementation has to generate an ALOutOfMemory or conversion related ALInvalidValue error The application is free to reuse the memory specified by the data pointer once bufferData is set The implementation has to dereference e.g copy the data while accessing bufferData execution",
        "hierarchy": "Sound OpenAL AL Buffer",
        "module": "Sound.OpenAL.AL.Buffer",
        "name": "bufferData",
        "normalized": "Buffer-\u003eStateVar(BufferData a)",
        "package": "OpenAL",
        "partial": "Data",
        "signature": "Buffer-\u003eStateVar(BufferData a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Doppler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 3.5.2. (Velocity Dependent Doppler Effect)\n of the OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Doppler",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Doppler.html",
        "fct-type": "module",
        "title": "Doppler"
      },
      "index": {
        "description": "This module corresponds to section Velocity Dependent Doppler Effect of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL Doppler",
        "module": "Sound.OpenAL.AL.Doppler",
        "name": "Doppler",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Doppler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Doppler.html#v:dopplerFactor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edopplerFactor\u003c/a\u003e\u003c/code\u003e is a simple scaling of source and listener velocities to\n exaggerate or deemphasize the Doppler (pitch) shift resulting from the\n calculation. Setting \u003ccode\u003e\u003ca\u003edopplerFactor\u003c/a\u003e\u003c/code\u003e to a negative value will result in an\n \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error, the command is then ignored. The default value is 1.\n The implementation is free to optimize the case of \u003ccode\u003e\u003ca\u003edopplerFactor\u003c/a\u003e\u003c/code\u003e containing\n zero, as this effectively disables the effect.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Doppler",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Doppler.html#dopplerFactor",
        "fct-type": "function",
        "title": "dopplerFactor"
      },
      "index": {
        "description": "dopplerFactor is simple scaling of source and listener velocities to exaggerate or deemphasize the Doppler pitch shift resulting from the calculation Setting dopplerFactor to negative value will result in an ALInvalidValue error the command is then ignored The default value is The implementation is free to optimize the case of dopplerFactor containing zero as this effectively disables the effect",
        "hierarchy": "Sound OpenAL AL Doppler",
        "module": "Sound.OpenAL.AL.Doppler",
        "name": "dopplerFactor",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Doppler.html#v:speedOfSound",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espeedOfSound\u003c/a\u003e\u003c/code\u003e allows the application to change the reference (propagation)\n speed used in the Doppler calculation. The source and listener velocities\n should be expressed in the same units as the speed of sound. Setting\n \u003ccode\u003e\u003ca\u003espeedOfSound\u003c/a\u003e\u003c/code\u003e to a negative or zero value will result in an \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e\n error, the command is ignored then. The default value is 343.3 (appropriate\n for velocity units of meters and air as the propagation medium).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Doppler",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Doppler.html#speedOfSound",
        "fct-type": "function",
        "title": "speedOfSound"
      },
      "index": {
        "description": "speedOfSound allows the application to change the reference propagation speed used in the Doppler calculation The source and listener velocities should be expressed in the same units as the speed of sound Setting speedOfSound to negative or zero value will result in an ALInvalidValue error the command is ignored then The default value is appropriate for velocity units of meters and air as the propagation medium",
        "hierarchy": "Sound OpenAL AL Doppler",
        "module": "Sound.OpenAL.AL.Doppler",
        "name": "speedOfSound",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Of Sound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 2.7 (AL Errors) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html",
        "fct-type": "module",
        "title": "Errors"
      },
      "index": {
        "description": "This module corresponds to section AL Errors of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "Errors",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#t:ALError",
      "description": {
        "fct-descr": "\u003cp\u003eAL errors consist of a general error category and a description of what\n went wrong.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALError",
        "fct-type": "data",
        "title": "ALError"
      },
      "index": {
        "description": "AL errors consist of general error category and description of what went wrong",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALError",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#t:ALErrorCategory",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral AL error categories.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "data",
        "title": "ALErrorCategory"
      },
      "index": {
        "description": "General AL error categories",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALErrorCategory",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALError Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALError",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALError ALErrorCategory String",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALError",
        "fct-type": "function",
        "title": "ALError"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALError",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALInvalidEnum",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALInvalidEnum",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "function",
        "title": "ALInvalidEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALInvalidEnum",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALInvalid Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALInvalidName",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALInvalidName",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "function",
        "title": "ALInvalidName"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALInvalidName",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALInvalid Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALInvalidOperation",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALInvalidOperation",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "function",
        "title": "ALInvalidOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALInvalidOperation",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALInvalid Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALInvalidValue",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALInvalidValue",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "function",
        "title": "ALInvalidValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALInvalidValue",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALInvalid Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:ALOutOfMemory",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALOutOfMemory",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#ALErrorCategory",
        "fct-type": "function",
        "title": "ALOutOfMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "ALOutOfMemory",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALOut Of Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Errors.html#v:alErrors",
      "description": {
        "fct-descr": "\u003cp\u003eOpenAL detects only a subset of those conditions that could be considered\n errors. This is because in many cases error checking would adversely impact\n the performance of an error-free program. The state variable \u003ccode\u003e\u003ca\u003ealErrors\u003c/a\u003e\u003c/code\u003e is\n used to obtain error information. When an error is detected by AL, a flag is\n set and the error code is recorded. Further errors, if they occur, do not\n affect this recorded code. When \u003ccode\u003e\u003ca\u003ealErrors\u003c/a\u003e\u003c/code\u003e is read, the error is returned and\n the flag is cleared, so that a further error will again record its code. If\n reading \u003ccode\u003e\u003ca\u003ealErrors\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e[]\u003c/code\u003e then there has been no detectable error\n since the last time \u003ccode\u003e\u003ca\u003ealErrors\u003c/a\u003e\u003c/code\u003e (or since the AL was initialized).\n\u003c/p\u003e\u003cp\u003eWhen an error flag is set, results of AL operations are undefined only if\n \u003ccode\u003e\u003ca\u003eALOutOfMemory\u003c/a\u003e\u003c/code\u003e has occurred. In other cases, the command generating the\n error is ignored so that it has no effect on AL state or output buffer\n contents. If the error generating command returns a value, it returns zero.\n If the generating command modifies values through a pointer argument, no\n change is made to these values. These error semantics apply only to AL\n errors, not to system errors such as memory access errors.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar [ALError]",
        "fct-source": "src/Sound-OpenAL-AL-Errors.html#alErrors",
        "fct-type": "function",
        "title": "alErrors"
      },
      "index": {
        "description": "OpenAL detects only subset of those conditions that could be considered errors This is because in many cases error checking would adversely impact the performance of an error-free program The state variable alErrors is used to obtain error information When an error is detected by AL flag is set and the error code is recorded Further errors if they occur do not affect this recorded code When alErrors is read the error is returned and the flag is cleared so that further error will again record its code If reading alErrors returns then there has been no detectable error since the last time alErrors or since the AL was initialized When an error flag is set results of AL operations are undefined only if ALOutOfMemory has occurred In other cases the command generating the error is ignored so that it has no effect on AL state or output buffer contents If the error generating command returns value it returns zero If the generating command modifies values through pointer argument no change is made to these values These error semantics apply only to AL errors not to system errors such as memory access errors",
        "hierarchy": "Sound OpenAL AL Errors",
        "module": "Sound.OpenAL.AL.Errors",
        "name": "alErrors",
        "normalized": "GettableStateVar[ALError]",
        "package": "OpenAL",
        "partial": "Errors",
        "signature": "GettableStateVar[ALError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 3.1.2 (String Queries) and chapter 7\n (Appendix: Extensions) of the OpenAL Specification and Reference (version\n 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html",
        "fct-type": "module",
        "title": "Extensions"
      },
      "index": {
        "description": "This module corresponds to section String Queries and chapter Appendix Extensions of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:alEnumValue",
      "description": {
        "fct-descr": "\u003cp\u003eTo obtain enumeration values for extensions, the application has to use\n \u003ccode\u003e\u003ca\u003ealEnumValue\u003c/a\u003e\u003c/code\u003e of an extension token. Enumeration values are defined within\n the OpenAL name space and allocated according to specification of the core\n API and the extensions, thus they are context-independent.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ealEnumValue\u003c/a\u003e\u003c/code\u003e contains 0 if the enumeration can not be found. The presence of\n an enum value does not guarantee the applicability of an extension to the\n current context. A non-zero value indicates merely that the implementation is\n aware of the existence of this extension. Implementations should not attempt\n to use 0 to indicate that the extensions is not supported for the current\n context.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "String -\u003e GettableStateVar ALenum",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html#alEnumValue",
        "fct-type": "function",
        "title": "alEnumValue"
      },
      "index": {
        "description": "To obtain enumeration values for extensions the application has to use alEnumValue of an extension token Enumeration values are defined within the OpenAL name space and allocated according to specification of the core API and the extensions thus they are context-independent alEnumValue contains if the enumeration can not be found The presence of an enum value does not guarantee the applicability of an extension to the current context non-zero value indicates merely that the implementation is aware of the existence of this extension Implementations should not attempt to use to indicate that the extensions is not supported for the current context",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "alEnumValue",
        "normalized": "String-\u003eGettableStateVar ALenum",
        "package": "OpenAL",
        "partial": "Enum Value",
        "signature": "String-\u003eGettableStateVar ALenum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:alExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eContains the list of available extensions.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar [String]",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html#alExtensions",
        "fct-type": "function",
        "title": "alExtensions"
      },
      "index": {
        "description": "Contains the list of available extensions",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "alExtensions",
        "normalized": "GettableStateVar[String]",
        "package": "OpenAL",
        "partial": "Extensions",
        "signature": "GettableStateVar[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:alIsExtensionPresent",
      "description": {
        "fct-descr": "\u003cp\u003eTo verify that a given extension is available for the current context, use\n \u003ccode\u003e\u003ca\u003ealIsExtensionPresent\u003c/a\u003e\u003c/code\u003e. For invalid and unsupported string tokens it contains\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. The extension name is not case sensitive: The implementation will\n convert the name to all upper-case internally (and will express extension\n names in upper-case).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "String -\u003e GettableStateVar Bool",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html#alIsExtensionPresent",
        "fct-type": "function",
        "title": "alIsExtensionPresent"
      },
      "index": {
        "description": "To verify that given extension is available for the current context use alIsExtensionPresent For invalid and unsupported string tokens it contains False The extension name is not case sensitive The implementation will convert the name to all upper-case internally and will express extension names in upper-case",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "alIsExtensionPresent",
        "normalized": "String-\u003eGettableStateVar Bool",
        "package": "OpenAL",
        "partial": "Is Extension Present",
        "signature": "String-\u003eGettableStateVar Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:alProcAddress",
      "description": {
        "fct-descr": "\u003cp\u003eTo retrieving function entry addresses, applications can use\n \u003ccode\u003e\u003ca\u003ealProcAddress\u003c/a\u003e\u003c/code\u003e. It contains \u003ccode\u003e\u003ca\u003enullFunPtr\u003c/a\u003e\u003c/code\u003e if no entry point with the given\n name can be found. Implementations are free to use \u003ccode\u003e\u003ca\u003enullFunPtr\u003c/a\u003e\u003c/code\u003e if an\n entry point is present, but not applicable for the current context. However\n the specification does not guarantee this behavior. Applications can use\n \u003ccode\u003e\u003ca\u003ealProcAddress\u003c/a\u003e\u003c/code\u003e to obtain core API entry points, not just extensions. This\n is the recommended way to dynamically load and unload OpenAL DLLs as sound\n drivers.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "String -\u003e GettableStateVar (FunPtr a)",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html#alProcAddress",
        "fct-type": "function",
        "title": "alProcAddress"
      },
      "index": {
        "description": "To retrieving function entry addresses applications can use alProcAddress It contains nullFunPtr if no entry point with the given name can be found Implementations are free to use nullFunPtr if an entry point is present but not applicable for the current context However the specification does not guarantee this behavior Applications can use alProcAddress to obtain core API entry points not just extensions This is the recommended way to dynamically load and unload OpenAL DLLs as sound drivers",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "alProcAddress",
        "normalized": "String-\u003eGettableStateVar(FunPtr a)",
        "package": "OpenAL",
        "partial": "Proc Address",
        "signature": "String-\u003eGettableStateVar(FunPtr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:alVersion",
      "description": {
        "fct-descr": "\u003cp\u003eContains a version string in the format \u003ccode\u003e\"\u003cem\u003e\\\u003cspec major number\\\u003e\u003c/em\u003e./\u003cspec\n minor number\u003e\u003cem\u003e \u003c/em\u003e\u003coptional vendor version information\u003e/\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-AL-Extensions.html#alVersion",
        "fct-type": "function",
        "title": "alVersion"
      },
      "index": {
        "description": "Contains version string in the format spec major number spec minor number optional vendor version information",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "alVersion",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:unmarshalALboolean",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "ALboolean -\u003e Bool",
        "fct-source": "src/Sound-OpenAL-AL-ALboolean.html#unmarshalALboolean",
        "fct-type": "function",
        "title": "unmarshalALboolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "unmarshalALboolean",
        "normalized": "ALboolean-\u003eBool",
        "package": "OpenAL",
        "partial": "ALboolean",
        "signature": "ALboolean-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:unmarshalBuffer",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "ALuint -\u003e Maybe Buffer",
        "fct-source": "src/Sound-OpenAL-AL-BufferInternal.html#unmarshalBuffer",
        "fct-type": "function",
        "title": "unmarshalBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "unmarshalBuffer",
        "normalized": "ALuint-\u003eMaybe Buffer",
        "package": "OpenAL",
        "partial": "Buffer",
        "signature": "ALuint-\u003eMaybe Buffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Extensions.html#v:unmarshalFormat",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "ALenum -\u003e Format",
        "fct-source": "src/Sound-OpenAL-AL-Format.html#unmarshalFormat",
        "fct-type": "function",
        "title": "unmarshalFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Extensions",
        "module": "Sound.OpenAL.AL.Extensions",
        "name": "unmarshalFormat",
        "normalized": "ALenum-\u003eFormat",
        "package": "OpenAL",
        "partial": "Format",
        "signature": "ALenum-\u003eFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to sections 4.1 (Basic Listener and Source\n Attributes) and 4.2 (Listener Object) of the OpenAL Specification and\n Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eThe listener object defines various properties that affect processing of the\n sound for the actual output. The listener is unique for an OpenAL Context,\n and has no name. By controlling the listener, the application controls the\n way the user experiences the virtual world, as the listener defines the\n sampling/pickup point and orientation, and other parameters that affect the\n output stream.\n\u003c/p\u003e\u003cp\u003eIt is entirely up to the driver and hardware configuration, i.e. the\n installation of OpenAL as part of the operating system and hardware setup,\n whether the output stream is generated for headphones or 2 speakers, 4.1\n speakers, or other arrangements, whether (and which) HRTFs are applied,\n etc...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html",
        "fct-type": "module",
        "title": "Listener"
      },
      "index": {
        "description": "This module corresponds to sections Basic Listener and Source Attributes and Listener Object of the OpenAL Specification and Reference version The listener object defines various properties that affect processing of the sound for the actual output The listener is unique for an OpenAL Context and has no name By controlling the listener the application controls the way the user experiences the virtual world as the listener defines the sampling pickup point and orientation and other parameters that affect the output stream It is entirely up to the driver and hardware configuration i.e the installation of OpenAL as part of the operating system and hardware setup whether the output stream is generated for headphones or speakers speakers or other arrangements whether and which HRTFs are applied etc",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "Listener",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Listener",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#t:Gain",
      "description": {
        "fct-descr": "\u003cp\u003eA scalar amplitude multiplier.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html#Gain",
        "fct-type": "type",
        "title": "Gain"
      },
      "index": {
        "description": "scalar amplitude multiplier",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "Gain",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Gain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#v:listenerGain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e contains a scalar amplitude multiplier, which is effectively\n applied to all sources in the current context. The initial value 1 means\n that the sound is unattenuated. A \u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e value of 0.5 is equivalent\n to an attenuation of 6dB. The value zero equals silence (no output). Driver\n implementations are free to optimize this case and skip mixing and processing\n stages where applicable. The implementation is in charge of ensuring\n artifact-free (click-free) changes of gain values and is free to defer actual\n modification of the sound samples, within the limits of acceptable latencies.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e larger than 1 (amplification) is permitted. However, the\n implementation is free to clamp the total gain (effective gain per source\n times listener gain) to 1 to prevent overflow.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar Gain",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html#listenerGain",
        "fct-type": "function",
        "title": "listenerGain"
      },
      "index": {
        "description": "listenerGain contains scalar amplitude multiplier which is effectively applied to all sources in the current context The initial value means that the sound is unattenuated listenerGain value of is equivalent to an attenuation of dB The value zero equals silence no output Driver implementations are free to optimize this case and skip mixing and processing stages where applicable The implementation is in charge of ensuring artifact-free click-free changes of gain values and is free to defer actual modification of the sound samples within the limits of acceptable latencies listenerGain larger than amplification is permitted However the implementation is free to clamp the total gain effective gain per source times listener gain to to prevent overflow",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "listenerGain",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Gain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#v:listenerPosition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenerPosition\u003c/a\u003e\u003c/code\u003e contains the current location of the listener in the\n world coordinate system. Any 3-tuple of valid float values is allowed.\n Implementation behavior on encountering NaN and infinity is not defined. The\n initial position is (\u003ccode\u003e\u003ca\u003eVertex3\u003c/a\u003e\u003c/code\u003e 0 0 0).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar (Vertex3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html#listenerPosition",
        "fct-type": "function",
        "title": "listenerPosition"
      },
      "index": {
        "description": "listenerPosition contains the current location of the listener in the world coordinate system Any tuple of valid float values is allowed Implementation behavior on encountering NaN and infinity is not defined The initial position is Vertex3",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "listenerPosition",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#v:listenerVelocity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenerVelocity\u003c/a\u003e\u003c/code\u003e contains current velocity (speed and direction) of the\n listener in the world coordinate system. Any 3-tuple of valid float\n values is allowed, and the initial velocity is (\u003ccode\u003e\u003ca\u003eVector3\u003c/a\u003e\u003c/code\u003e 0 0 0).\n \u003ccode\u003e\u003ca\u003elistenerVelocity\u003c/a\u003e\u003c/code\u003e does not affect \u003ccode\u003e\u003ca\u003elistenerPosition\u003c/a\u003e\u003c/code\u003e. OpenAL does not\n calculate the velocity from subsequent position updates, nor does it\n adjust the position over time based on the specified velocity. Any\n such calculation is left to the application. For the purposes of sound\n processing, position and velocity are independent parameters affecting\n different aspects of the sounds.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elistenerVelocity\u003c/a\u003e\u003c/code\u003e is taken into account by the driver to synthesize the\n Doppler effect perceived by the listener for each source, based on the\n velocity of both source and listener, and the Doppler related parameters.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar (Vector3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html#listenerVelocity",
        "fct-type": "function",
        "title": "listenerVelocity"
      },
      "index": {
        "description": "listenerVelocity contains current velocity speed and direction of the listener in the world coordinate system Any tuple of valid float values is allowed and the initial velocity is Vector3 listenerVelocity does not affect listenerPosition OpenAL does not calculate the velocity from subsequent position updates nor does it adjust the position over time based on the specified velocity Any such calculation is left to the application For the purposes of sound processing position and velocity are independent parameters affecting different aspects of the sounds listenerVelocity is taken into account by the driver to synthesize the Doppler effect perceived by the listener for each source based on the velocity of both source and listener and the Doppler related parameters",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "listenerVelocity",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Listener.html#v:orientation",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eorientation\u003c/a\u003e\u003c/code\u003e contains an \"at\" vector and an \"up\" vector, where the\n \"at\" vector represents the \"forward\" direction of the listener and the\n orthogonal projection of the \"up\" vector into the subspace perpendicular to\n the \"at\" vector represents the \"up\" direction for the listener. OpenAL\n expects two vectors that are linearly independent. These vectors are not\n expected to be normalized. If the two vectors are linearly dependent,\n behavior is undefined. The initial orientation is (\u003ccode\u003e\u003ca\u003eVector3\u003c/a\u003e\u003c/code\u003e 0 0 (-1),\n \u003ccode\u003e\u003ca\u003eVector3\u003c/a\u003e\u003c/code\u003e 0 1 0), i.e. looking down the Z axis with the Y axis pointing\n upwards.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Listener",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar (Vector3 ALfloat, Vector3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Listener.html#orientation",
        "fct-type": "function",
        "title": "orientation"
      },
      "index": {
        "description": "orientation contains an at vector and an up vector where the at vector represents the forward direction of the listener and the orthogonal projection of the up vector into the subspace perpendicular to the at vector represents the up direction for the listener OpenAL expects two vectors that are linearly independent These vectors are not expected to be normalized If the two vectors are linearly dependent behavior is undefined The initial orientation is Vector3 Vector3 i.e looking down the axis with the axis pointing upwards",
        "hierarchy": "Sound OpenAL AL Listener",
        "module": "Sound.OpenAL.AL.Listener",
        "name": "orientation",
        "normalized": "StateVar(Vector ALfloat,Vector ALfloat)",
        "package": "OpenAL",
        "partial": "",
        "signature": "StateVar(Vector ALfloat,Vector ALfloat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to sections 4.1 (Basic Listener and Source\n Attributes) and 4.3 (Source Objects) of the OpenAL Specification and\n Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eSources specify attributes like position, velocity, and a buffer with sample\n data. By controlling a source's attributes the application can modify and\n parameterize the static sample data provided by the buffer referenced by the\n source. Sources define a localized sound, and encapsulate a set of attributes\n applied to a sound at its origin, i.e. in the very first stage of the\n processing on the way to the listener. Source related effects have to be\n applied before listener related effects unless the output is invariant to any\n collapse or reversal of order. OpenAL also provides additional functions to\n manipulate and query the execution state of sources: the current playing\n status of a source, including access to the current sampling position within\n the associated buffer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-Source.html",
        "fct-type": "module",
        "title": "Source"
      },
      "index": {
        "description": "This module corresponds to sections Basic Listener and Source Attributes and Source Objects of the OpenAL Specification and Reference version Sources specify attributes like position velocity and buffer with sample data By controlling source attributes the application can modify and parameterize the static sample data provided by the buffer referenced by the source Sources define localized sound and encapsulate set of attributes applied to sound at its origin i.e in the very first stage of the processing on the way to the listener Source related effects have to be applied before listener related effects unless the output is invariant to any collapse or reversal of order OpenAL also provides additional functions to manipulate and query the execution state of sources the current playing status of source including access to the current sampling position within the associated buffer",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Source",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#t:LoopingMode",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies what should happen when the end of a buffer queue is reached.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#LoopingMode",
        "fct-type": "data",
        "title": "LoopingMode"
      },
      "index": {
        "description": "Specifies what should happen when the end of buffer queue is reached",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "LoopingMode",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Looping Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract buffer type.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#Source",
        "fct-type": "data",
        "title": "Source"
      },
      "index": {
        "description": "The abstract buffer type",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Source",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#t:SourceRelative",
      "description": {
        "fct-descr": "\u003cp\u003eThe entity to which the source attributes \u003ccode\u003e\u003ca\u003esourcePosition\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003esourceVelocity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edirection\u003c/a\u003e\u003c/code\u003e are to be interpreted.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceRelative",
        "fct-type": "data",
        "title": "SourceRelative"
      },
      "index": {
        "description": "The entity to which the source attributes sourcePosition sourceVelocity and direction are to be interpreted",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "SourceRelative",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Source Relative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#t:SourceState",
      "description": {
        "fct-descr": "\u003cp\u003eEach source can be in one of four possible execution states: \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e. Sources that are either \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e\n are considered active. Sources that are \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e are considered\n inactive. Only \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e sources are included in the processing. The\n implementation is free to skip those processing stages for sources that have\n no effect on the output (e.g. mixing for a source muted by zero gain, but not\n sample offset increments). Depending on the current state of a source certain\n (e.g. repeated) state transition commands are legal NOPs: they will be\n ignored, no error is generated.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-SourceState.html#SourceState",
        "fct-type": "data",
        "title": "SourceState"
      },
      "index": {
        "description": "Each source can be in one of four possible execution states Initial Playing Paused Stopped Sources that are either Playing or Paused are considered active Sources that are Stopped or Initial are considered inactive Only Playing sources are included in the processing The implementation is free to skip those processing stages for sources that have no effect on the output e.g mixing for source muted by zero gain but not sample offset increments Depending on the current state of source certain e.g repeated state transition commands are legal NOPs they will be ignored no error is generated",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "SourceState",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Source State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#t:SourceType",
      "description": {
        "fct-descr": "\u003cp\u003eWhen first created, a source will be in the \u003ccode\u003e\u003ca\u003eUndetermined\u003c/a\u003e\u003c/code\u003e state. If a\n buffer is then attached using \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e, then the source will enter the\n \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e state. If the first buffer attached to a source is attached using\n \u003ccode\u003e\u003ca\u003equeueBuffers\u003c/a\u003e\u003c/code\u003e, then the source will enter the \u003ccode\u003e\u003ca\u003eStreaming\u003c/a\u003e\u003c/code\u003e state. A source of\n either state will be reset to state \u003ccode\u003e\u003ca\u003eUndetermined\u003c/a\u003e\u003c/code\u003e by setting its \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and attaching any buffer to a streaming source will change the\n state to \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e. Attempting to queue a buffer on a static source will\n result in an \u003ccode\u003e\u003ca\u003eALInvalidOperation\u003c/a\u003e\u003c/code\u003e error.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceType",
        "fct-type": "data",
        "title": "SourceType"
      },
      "index": {
        "description": "When first created source will be in the Undetermined state If buffer is then attached using buffer then the source will enter the Static state If the first buffer attached to source is attached using queueBuffers then the source will enter the Streaming state source of either state will be reset to state Undetermined by setting its buffer to Nothing and attaching any buffer to streaming source will change the state to Static Attempting to queue buffer on static source will result in an ALInvalidOperation error",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "SourceType",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Source Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Initial",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Initial",
        "fct-source": "src/Sound-OpenAL-AL-SourceState.html#SourceState",
        "fct-type": "function",
        "title": "Initial"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Initial",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Initial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Listener",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Listener",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceRelative",
        "fct-type": "function",
        "title": "Listener"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Listener",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Listener",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Looping",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Looping",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#LoopingMode",
        "fct-type": "function",
        "title": "Looping"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Looping",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Looping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:OneShot",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "OneShot",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#LoopingMode",
        "fct-type": "function",
        "title": "OneShot"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "OneShot",
        "normalized": "",
        "package": "OpenAL",
        "partial": "One Shot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Paused",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Paused",
        "fct-source": "src/Sound-OpenAL-AL-SourceState.html#SourceState",
        "fct-type": "function",
        "title": "Paused"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Paused",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Paused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Playing",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Playing",
        "fct-source": "src/Sound-OpenAL-AL-SourceState.html#SourceState",
        "fct-type": "function",
        "title": "Playing"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Playing",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Static",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Static",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceType",
        "fct-type": "function",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Static",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Stopped",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Stopped",
        "fct-source": "src/Sound-OpenAL-AL-SourceState.html#SourceState",
        "fct-type": "function",
        "title": "Stopped"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Stopped",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Stopped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Streaming",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Streaming",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceType",
        "fct-type": "function",
        "title": "Streaming"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Streaming",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Streaming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:Undetermined",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Undetermined",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceType",
        "fct-type": "function",
        "title": "Undetermined"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "Undetermined",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Undetermined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:World",
      "description": {
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "World",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#SourceRelative",
        "fct-type": "function",
        "title": "World"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "World",
        "normalized": "",
        "package": "OpenAL",
        "partial": "World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:buffer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e contains the current buffer object. Setting \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\n buffer object makes it the head entry in the source's queue. Setting\n \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003efor a source in the \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e state empties the entire\n queue, then appends the one buffer specified (or none at all if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n was specified).\n\u003c/p\u003e\u003cp\u003eFor a source in the \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e state, setting \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e will result\n in the \u003ccode\u003e\u003ca\u003eALInvalidOperation\u003c/a\u003e\u003c/code\u003e error state being set. \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e can be applied only\n to sources in the \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e states. Specifying an invalid\n buffer name (either because the buffer name doesn't exist or because that\n buffer can't be attached to the specified source) will result in an\n \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error while specifying an invalid source name results in an\n \u003ccode\u003e\u003ca\u003eALInvalidName\u003c/a\u003e\u003c/code\u003e error. Setting \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is a legal way to release\n the current buffer queue on a source in the \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e state,\n whether the source has just one entry (current buffer) or more. Setting\n \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e still causes an \u003ccode\u003e\u003ca\u003eALInvalidOperation\u003c/a\u003e\u003c/code\u003e for any source in\n the \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e state, consequently it cannot be used to mute or\n stop a source. The initial value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (Maybe Buffer)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#buffer",
        "fct-type": "function",
        "title": "buffer"
      },
      "index": {
        "description": "buffer contains the current buffer object Setting buffer to Just buffer object makes it the head entry in the source queue Setting buffer for source in the Stopped or Initial state empties the entire queue then appends the one buffer specified or none at all if Nothing was specified For source in the Playing or Paused state setting buffer will result in the ALInvalidOperation error state being set buffer can be applied only to sources in the Initial and Stopped states Specifying an invalid buffer name either because the buffer name doesn exist or because that buffer can be attached to the specified source will result in an ALInvalidValue error while specifying an invalid source name results in an ALInvalidName error Setting buffer to Nothing is legal way to release the current buffer queue on source in the Initial or Stopped state whether the source has just one entry current buffer or more Setting buffer to Nothing still causes an ALInvalidOperation for any source in the Playing or Paused state consequently it cannot be used to mute or stop source The initial value is Nothing",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "buffer",
        "normalized": "Source-\u003eStateVar(Maybe Buffer)",
        "package": "OpenAL",
        "partial": "",
        "signature": "Source-\u003eStateVar(Maybe Buffer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:buffersProcessed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuffersProcessed\u003c/a\u003e\u003c/code\u003e contains the number of buffers that have been played\n by a given source.  Indirectly, this gives the index of the buffer currently\n playing. It can be used to determine how much slots are needed for unqueuing\n them. On a source in the \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e state, all buffers are processed. On a\n source in the \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e state, no buffers are processed, all buffers are\n pending. It will contain 0 if \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e has been set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e GettableStateVar ALint",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#buffersProcessed",
        "fct-type": "function",
        "title": "buffersProcessed"
      },
      "index": {
        "description": "buffersProcessed contains the number of buffers that have been played by given source Indirectly this gives the index of the buffer currently playing It can be used to determine how much slots are needed for unqueuing them On source in the Stopped state all buffers are processed On source in the Initial state no buffers are processed all buffers are pending It will contain if buffer has been set to Nothing",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "buffersProcessed",
        "normalized": "Source-\u003eGettableStateVar ALint",
        "package": "OpenAL",
        "partial": "Processed",
        "signature": "Source-\u003eGettableStateVar ALint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:buffersQueued",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuffersQueued\u003c/a\u003e\u003c/code\u003e contains the number of buffers in the queue of a given\n source. This includes those not yet played, the one currently playing, and\n the ones that have been played already. It will contain 0 if \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e has\n been set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e GettableStateVar ALint",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#buffersQueued",
        "fct-type": "function",
        "title": "buffersQueued"
      },
      "index": {
        "description": "buffersQueued contains the number of buffers in the queue of given source This includes those not yet played the one currently playing and the ones that have been played already It will contain if buffer has been set to Nothing",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "buffersQueued",
        "normalized": "Source-\u003eGettableStateVar ALint",
        "package": "OpenAL",
        "partial": "Queued",
        "signature": "Source-\u003eGettableStateVar ALint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:byteOffset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebyteOffset\u003c/a\u003e\u003c/code\u003e contains the playback position, expressed in bytes (the value\n will loop back to zero for looping sources). For a compressed format, this\n value may represent an approximate offset within the compressed data buffer.\n\u003c/p\u003e\u003cp\u003eWhen setting \u003ccode\u003e\u003ca\u003ebyteOffset\u003c/a\u003e\u003c/code\u003e on a source which is already playing, the playback\n will jump to the new offset unless the new offset is out of range, in which\n case an \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error is set. If the source is not playing, then the\n offset will be applied on the next \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e call. A \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e, or a\n second \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e call will reset the offset to the beginning of the buffer.\n\u003c/p\u003e\u003cp\u003eThe position is relative to the beginning of all the queued buffers for the\n source, and any queued buffers traversed by a set call will be marked as\n processed.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALint",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#byteOffset",
        "fct-type": "function",
        "title": "byteOffset"
      },
      "index": {
        "description": "byteOffset contains the playback position expressed in bytes the value will loop back to zero for looping sources For compressed format this value may represent an approximate offset within the compressed data buffer When setting byteOffset on source which is already playing the playback will jump to the new offset unless the new offset is out of range in which case an ALInvalidValue error is set If the source is not playing then the offset will be applied on the next play call stop rewind or second play call will reset the offset to the beginning of the buffer The position is relative to the beginning of all the queued buffers for the source and any queued buffers traversed by set call will be marked as processed",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "byteOffset",
        "normalized": "Source-\u003eStateVar ALint",
        "package": "OpenAL",
        "partial": "Offset",
        "signature": "Source-\u003eStateVar ALint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:coneAngles",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econeAngles\u003c/a\u003e\u003c/code\u003e contains the inner and outer angles of the sound cone, in\n degrees. The default of 360 for the inner cone angle means that it covers the\n entire world, which is equivalent to an omni-directional source. The default\n of 360 for the outer cone angle means that it covers the entire world. If the\n inner angle is also 360, then the zone for angle-dependent attenuation is\n zero.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (ALfloat, ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#coneAngles",
        "fct-type": "function",
        "title": "coneAngles"
      },
      "index": {
        "description": "coneAngles contains the inner and outer angles of the sound cone in degrees The default of for the inner cone angle means that it covers the entire world which is equivalent to an omni-directional source The default of for the outer cone angle means that it covers the entire world If the inner angle is also then the zone for angle-dependent attenuation is zero",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "coneAngles",
        "normalized": "Source-\u003eStateVar(ALfloat,ALfloat)",
        "package": "OpenAL",
        "partial": "Angles",
        "signature": "Source-\u003eStateVar(ALfloat,ALfloat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:coneOuterGain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econeOuterGain\u003c/a\u003e\u003c/code\u003e contains the factor with which \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e is multiplied\n to determine the effective gain outside the cone defined by the outer angle.\n The effective gain applied outside the outer cone is \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e times\n \u003ccode\u003e\u003ca\u003econeOuterGain\u003c/a\u003e\u003c/code\u003e. Changing \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e affects all directions, i.e. the\n source is attenuated in all directions, for any position of the listener. The\n application has to change \u003ccode\u003e\u003ca\u003econeOuterGain\u003c/a\u003e\u003c/code\u003e as well if a different behavior is\n desired.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar Gain",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#coneOuterGain",
        "fct-type": "function",
        "title": "coneOuterGain"
      },
      "index": {
        "description": "coneOuterGain contains the factor with which sourceGain is multiplied to determine the effective gain outside the cone defined by the outer angle The effective gain applied outside the outer cone is sourceGain times coneOuterGain Changing sourceGain affects all directions i.e the source is attenuated in all directions for any position of the listener The application has to change coneOuterGain as well if different behavior is desired",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "coneOuterGain",
        "normalized": "Source-\u003eStateVar Gain",
        "package": "OpenAL",
        "partial": "Outer Gain",
        "signature": "Source-\u003eStateVar Gain"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:direction",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003edirection\u003c/a\u003e\u003c/code\u003e does not contain the zero vector (\u003ccode\u003e\u003ca\u003eVector3\u003c/a\u003e\u003c/code\u003e 0 0 0), the\n source is directional. The sound emission is presumed to be symmetric around\n the direction vector (cylinder symmetry). Sources are not oriented in full 3\n degrees of freedom, only two angles are effectively needed.\n\u003c/p\u003e\u003cp\u003eThe zero vector is the initial value, indicating that a source is not\n directional. Specifying a non-zero vector will make the source directional.\n Specifying a zero vector for a directional source will effectively mark it as\n nondirectional.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (Vector3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#direction",
        "fct-type": "function",
        "title": "direction"
      },
      "index": {
        "description": "If direction does not contain the zero vector Vector3 the source is directional The sound emission is presumed to be symmetric around the direction vector cylinder symmetry Sources are not oriented in full degrees of freedom only two angles are effectively needed The zero vector is the initial value indicating that source is not directional Specifying non-zero vector will make the source directional Specifying zero vector for directional source will effectively mark it as nondirectional",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "direction",
        "normalized": "Source-\u003eStateVar(Vector ALfloat)",
        "package": "OpenAL",
        "partial": "",
        "signature": "Source-\u003eStateVar(Vector ALfloat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:gainBounds",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egainBounds\u003c/a\u003e\u003c/code\u003e contains two scalar amplitude thresholds between 0 and 1\n (included): The minimum guaranteed gain for this source and the maximum gain\n permitted, with initial values 0 and 1, respectively At the end of the\n processing of various attenuation factors such as distance based attenuation\n and \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e, the effective gain calculated is compared to these values:\n\u003c/p\u003e\u003cp\u003eIf the effective gain is lower than the minimum gain, the minimum gain is\n applied. This happens before the \u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e is applied. If a zero minimum\n gain is set, then the effective gain will not be corrected.\n\u003c/p\u003e\u003cp\u003eIf the effective gain is higher than the maximum gain, the maximum gain is\n applied. This happens before the \u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e is applied. If the\n \u003ccode\u003e\u003ca\u003elistenerGain\u003c/a\u003e\u003c/code\u003e times the maximum gain still exceeds the maximum gain the\n implementation can handle, the implementation is free to clamp. If a zero\n maximum gain is set, then the source is effectively muted. The implementation\n is free to optimize for this situation, but no optimization is required or\n recommended as setting \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e to zero is the proper way to mute a\n source.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (Gain, Gain)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#gainBounds",
        "fct-type": "function",
        "title": "gainBounds"
      },
      "index": {
        "description": "gainBounds contains two scalar amplitude thresholds between and included The minimum guaranteed gain for this source and the maximum gain permitted with initial values and respectively At the end of the processing of various attenuation factors such as distance based attenuation and sourceGain the effective gain calculated is compared to these values If the effective gain is lower than the minimum gain the minimum gain is applied This happens before the listenerGain is applied If zero minimum gain is set then the effective gain will not be corrected If the effective gain is higher than the maximum gain the maximum gain is applied This happens before the listenerGain is applied If the listenerGain times the maximum gain still exceeds the maximum gain the implementation can handle the implementation is free to clamp If zero maximum gain is set then the source is effectively muted The implementation is free to optimize for this situation but no optimization is required or recommended as setting sourceGain to zero is the proper way to mute source",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "gainBounds",
        "normalized": "Source-\u003eStateVar(Gain,Gain)",
        "package": "OpenAL",
        "partial": "Bounds",
        "signature": "Source-\u003eStateVar(Gain,Gain)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:loopingMode",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eloopingMode\u003c/a\u003e\u003c/code\u003e contains \u003ccode\u003e\u003ca\u003eLooping\u003c/a\u003e\u003c/code\u003e, it indicates that the source will not\n be in the \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e state once it reaches the end of last buffer in the\n buffer queue. Instead, the source will immediately promote to \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e.  The initial value is \u003ccode\u003e\u003ca\u003eOneShot\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eloopingMode\u003c/a\u003e\u003c/code\u003e can be changed on a\n source in any execution state. In particular, it can be changed on a\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar LoopingMode",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#loopingMode",
        "fct-type": "function",
        "title": "loopingMode"
      },
      "index": {
        "description": "If loopingMode contains Looping it indicates that the source will not be in the Stopped state once it reaches the end of last buffer in the buffer queue Instead the source will immediately promote to Initial and Playing The initial value is OneShot loopingMode can be changed on source in any execution state In particular it can be changed on Playing source",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "loopingMode",
        "normalized": "Source-\u003eStateVar LoopingMode",
        "package": "OpenAL",
        "partial": "Mode",
        "signature": "Source-\u003eStateVar LoopingMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:maxDistance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e is used for distance attenuation calculations based on\n inverse distance with rolloff, if the inverse clamped distance model is\n used. In this case, distances greater than \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e will be clamped to\n \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e based clamping is applied before minimum gain\n clamping (see \u003ccode\u003e\u003ca\u003egainBounds\u003c/a\u003e\u003c/code\u003e), so if the effective gain at \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e is\n larger than the minimum gain, the minimum gain will have no effect. No\n culling is supported. The initial value is the largest representable\n \u003ccode\u003e\u003ca\u003eALfloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#maxDistance",
        "fct-type": "function",
        "title": "maxDistance"
      },
      "index": {
        "description": "maxDistance is used for distance attenuation calculations based on inverse distance with rolloff if the inverse clamped distance model is used In this case distances greater than maxDistance will be clamped to maxDistance maxDistance based clamping is applied before minimum gain clamping see gainBounds so if the effective gain at maxDistance is larger than the minimum gain the minimum gain will have no effect No culling is supported The initial value is the largest representable ALfloat",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "maxDistance",
        "normalized": "Source-\u003eStateVar ALfloat",
        "package": "OpenAL",
        "partial": "Distance",
        "signature": "Source-\u003eStateVar ALfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:pause",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e applied to an \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e source is a legal NOP. \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e applied to a\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source will change its state to \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e. The source is exempt from\n processing, its current state is preserved. \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e\n source is a legal NOP. \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e source is a legal NOP.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "[Source] -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "pause applied to an Initial source is legal NOP pause applied to Playing source will change its state to Paused The source is exempt from processing its current state is preserved pause applied to Paused source is legal NOP pause applied to Stopped source is legal NOP",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "pause",
        "normalized": "[Source]-\u003eIO()",
        "package": "OpenAL",
        "partial": "",
        "signature": "[Source]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:pitch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epitch\u003c/a\u003e\u003c/code\u003e contains the desired pitch shift, where 1 (the initial value)\n equals identity. Each reduction by 50 percent equals a pitch shift of -12\n semitones (one octave reduction). Each doubling equals a pitch shift of 12\n semitones (one octave increase). Zero is not a legal value. Implementations\n may clamp the actual output pitch range to any values subject to the\n implementation's own limits.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#pitch",
        "fct-type": "function",
        "title": "pitch"
      },
      "index": {
        "description": "pitch contains the desired pitch shift where the initial value equals identity Each reduction by percent equals pitch shift of semitones one octave reduction Each doubling equals pitch shift of semitones one octave increase Zero is not legal value Implementations may clamp the actual output pitch range to any values subject to the implementation own limits",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "pitch",
        "normalized": "Source-\u003eStateVar ALfloat",
        "package": "OpenAL",
        "partial": "",
        "signature": "Source-\u003eStateVar ALfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:play",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e applied to an \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e source will promote the source to \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e,\n thus the data found in the buffer will be fed into the processing, starting\n at the beginning. \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source will restart the\n source from the beginning. It will not affect the configuration, and will\n leave the source in \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e state, but reset the sampling offset to the\n beginning. \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e source will resume processing using\n the source state as preserved at the \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e operation. \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e applied to a\n \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e source will propagate it to \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e then to \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e\n immediately.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "[Source] -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#play",
        "fct-type": "function",
        "title": "play"
      },
      "index": {
        "description": "play applied to an Initial source will promote the source to Playing thus the data found in the buffer will be fed into the processing starting at the beginning play applied to Playing source will restart the source from the beginning It will not affect the configuration and will leave the source in Playing state but reset the sampling offset to the beginning play applied to Paused source will resume processing using the source state as preserved at the pause operation play applied to Stopped source will propagate it to Initial then to Playing immediately",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "play",
        "normalized": "[Source]-\u003eIO()",
        "package": "OpenAL",
        "partial": "",
        "signature": "[Source]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:queueBuffers",
      "description": {
        "fct-descr": "\u003cp\u003eThe application can queue up one or multiple buffer names using\n \u003ccode\u003e\u003ca\u003equeueBuffers\u003c/a\u003e\u003c/code\u003e. The buffers will be queued in the sequence in which they\n appear in the list.\n\u003c/p\u003e\u003cp\u003eThis command is legal on a source in any playback state (to allow for\n streaming, queuing has to be possible on a \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source).\n\u003c/p\u003e\u003cp\u003eAll buffers in a queue must have the same format and attributes. An attempt\n to mix formats or other buffer attributes will result in a failure and an\n \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error will be thrown. If the queue operation fails, the source\n queue will remain unchanged (even if some of the buffers could have been\n queued).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e [Buffer] -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#queueBuffers",
        "fct-type": "function",
        "title": "queueBuffers"
      },
      "index": {
        "description": "The application can queue up one or multiple buffer names using queueBuffers The buffers will be queued in the sequence in which they appear in the list This command is legal on source in any playback state to allow for streaming queuing has to be possible on Playing source All buffers in queue must have the same format and attributes An attempt to mix formats or other buffer attributes will result in failure and an ALInvalidValue error will be thrown If the queue operation fails the source queue will remain unchanged even if some of the buffers could have been queued",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "queueBuffers",
        "normalized": "Source-\u003e[Buffer]-\u003eIO()",
        "package": "OpenAL",
        "partial": "Buffers",
        "signature": "Source-\u003e[Buffer]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:referenceDistance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e is used for distance attenuation calculations based on\n inverse distance with rolloff. Depending on the distance model it will also\n act as a distance threshold below which gain is clamped. See\n \u003ca\u003eSound.OpenAL.AL.Attenuation\u003c/a\u003e for details. The initial value is 1.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#referenceDistance",
        "fct-type": "function",
        "title": "referenceDistance"
      },
      "index": {
        "description": "referenceDistance is used for distance attenuation calculations based on inverse distance with rolloff Depending on the distance model it will also act as distance threshold below which gain is clamped See Sound.OpenAL.AL.Attenuation for details The initial value is",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "referenceDistance",
        "normalized": "Source-\u003eStateVar ALfloat",
        "package": "OpenAL",
        "partial": "Distance",
        "signature": "Source-\u003eStateVar ALfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:rewind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e applied to an \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e source is a legal NOP. \u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e applied to\n a \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source will change its state to \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e. The\n source is exempt from processing: its current state is preserved, with the\n exception of the sampling offset, which is reset to the beginning.  \u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e\n applied to a \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e source will change its state to \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e, with the\n same consequences as on a \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source.  \u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e applied to an \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e\n source promotes the source to \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e, resetting the sampling offset to the\n beginning.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "[Source] -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#rewind",
        "fct-type": "function",
        "title": "rewind"
      },
      "index": {
        "description": "rewind applied to an Initial source is legal NOP rewind applied to Playing source will change its state to Stopped then Initial The source is exempt from processing its current state is preserved with the exception of the sampling offset which is reset to the beginning rewind applied to Paused source will change its state to Initial with the same consequences as on Playing source rewind applied to an Stopped source promotes the source to Initial resetting the sampling offset to the beginning",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "rewind",
        "normalized": "[Source]-\u003eIO()",
        "package": "OpenAL",
        "partial": "",
        "signature": "[Source]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:rolloffFactor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e is used for distance attenuation calculations based on\n inverse distance with rolloff. For distances smaller than \u003ccode\u003e\u003ca\u003emaxDistance\u003c/a\u003e\u003c/code\u003e (and,\n depending on the distance model, larger than \u003ccode\u003e\u003ca\u003ereferenceDistance\u003c/a\u003e\u003c/code\u003e), this will\n scale the distance attenuation over the applicable range. See\n \u003ca\u003eSound.OpenAL.AL.Attenuation\u003c/a\u003e for details how the attenuation is computed as\n a function of the distance. The initial value is 1.\n\u003c/p\u003e\u003cp\u003eIn particular, \u003ccode\u003e\u003ca\u003erolloffFactor\u003c/a\u003e\u003c/code\u003e can be set to zero for those sources that are\n supposed to be exempt from distance attenuation. The implementation is\n encouraged to optimize this case, bypassing distance attenuation calculation\n entirely on a persource basis.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#rolloffFactor",
        "fct-type": "function",
        "title": "rolloffFactor"
      },
      "index": {
        "description": "rolloffFactor is used for distance attenuation calculations based on inverse distance with rolloff For distances smaller than maxDistance and depending on the distance model larger than referenceDistance this will scale the distance attenuation over the applicable range See Sound.OpenAL.AL.Attenuation for details how the attenuation is computed as function of the distance The initial value is In particular rolloffFactor can be set to zero for those sources that are supposed to be exempt from distance attenuation The implementation is encouraged to optimize this case bypassing distance attenuation calculation entirely on persource basis",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "rolloffFactor",
        "normalized": "Source-\u003eStateVar ALfloat",
        "package": "OpenAL",
        "partial": "Factor",
        "signature": "Source-\u003eStateVar ALfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sampleOffset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esampleOffset\u003c/a\u003e\u003c/code\u003e contains the playback position, expressed in samples (the\n value will loop back to zero for looping sources). For a compressed format,\n this value will represent an exact offset within the uncompressed data.\n\u003c/p\u003e\u003cp\u003eWhen setting \u003ccode\u003e\u003ca\u003esampleOffset\u003c/a\u003e\u003c/code\u003e on a source which is already playing, the\n playback will jump to the new offset unless the new offset is out of range,\n in which case an \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error is set. If the source is not playing,\n then the offset will be applied on the next \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e call. A \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erewind\u003c/a\u003e\u003c/code\u003e,\n or a second \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e call will reset the offset to the beginning of the buffer.\n\u003c/p\u003e\u003cp\u003eThe position is relative to the beginning of all the queued buffers for the\n source, and any queued buffers traversed by a set call will be marked as\n processed.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALint",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sampleOffset",
        "fct-type": "function",
        "title": "sampleOffset"
      },
      "index": {
        "description": "sampleOffset contains the playback position expressed in samples the value will loop back to zero for looping sources For compressed format this value will represent an exact offset within the uncompressed data When setting sampleOffset on source which is already playing the playback will jump to the new offset unless the new offset is out of range in which case an ALInvalidValue error is set If the source is not playing then the offset will be applied on the next play call stop rewind or second play call will reset the offset to the beginning of the buffer The position is relative to the beginning of all the queued buffers for the source and any queued buffers traversed by set call will be marked as processed",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sampleOffset",
        "normalized": "Source-\u003eStateVar ALint",
        "package": "OpenAL",
        "partial": "Offset",
        "signature": "Source-\u003eStateVar ALint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:secOffset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esecOffset\u003c/a\u003e\u003c/code\u003e contains the playback position, expressed in seconds (the value\n will loop back to zero for looping sources).\n\u003c/p\u003e\u003cp\u003eWhen setting \u003ccode\u003e\u003ca\u003esecOffset\u003c/a\u003e\u003c/code\u003e on a source which is already playing, the playback\n will jump to the new offset unless the new offset is out of range, in which\n case an \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error is set. If the source is not playing, then the\n offset will be applied on the next \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e\u003cp\u003eThe position is relative to the beginning of all the queued buffers for the\n source, and any queued buffers traversed by a set call will be marked as\n processed.\n\u003c/p\u003e\u003cp\u003eThis value is based on byte position, so a pitch-shifted source will have an\n exaggerated playback speed. For example, you can be 0.5 seconds into a buffer\n having taken only 0.25 seconds to get there if the pitch is set to 2.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar ALfloat",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#secOffset",
        "fct-type": "function",
        "title": "secOffset"
      },
      "index": {
        "description": "secOffset contains the playback position expressed in seconds the value will loop back to zero for looping sources When setting secOffset on source which is already playing the playback will jump to the new offset unless the new offset is out of range in which case an ALInvalidValue error is set If the source is not playing then the offset will be applied on the next play call The position is relative to the beginning of all the queued buffers for the source and any queued buffers traversed by set call will be marked as processed This value is based on byte position so pitch-shifted source will have an exaggerated playback speed For example you can be seconds into buffer having taken only seconds to get there if the pitch is set to",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "secOffset",
        "normalized": "Source-\u003eStateVar ALfloat",
        "package": "OpenAL",
        "partial": "Offset",
        "signature": "Source-\u003eStateVar ALfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourceGain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e contains a scalar amplitude multiplier for the given source.\n The initial value 1 means that the sound is unattenuated. A \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e\n value of 0.5 is equivalent to an attenuation of 6dB. The value zero equals\n silence (no output). Driver implementations are free to optimize this case\n and skip mixing and processing stages where applicable. The implementation is\n in charge of ensuring artifact-free (click-free) changes of gain values and\n is free to defer actual modification of the sound samples, within the limits\n of acceptable latencies.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003esourceGain\u003c/a\u003e\u003c/code\u003e larger than 1 (amplification) is permitted. However, the\n implementation is free to clamp the total gain (effective gain per source\n times listener gain) to 1 to prevent overflow.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar Gain",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourceGain",
        "fct-type": "function",
        "title": "sourceGain"
      },
      "index": {
        "description": "sourceGain contains scalar amplitude multiplier for the given source The initial value means that the sound is unattenuated sourceGain value of is equivalent to an attenuation of dB The value zero equals silence no output Driver implementations are free to optimize this case and skip mixing and processing stages where applicable The implementation is in charge of ensuring artifact-free click-free changes of gain values and is free to defer actual modification of the sound samples within the limits of acceptable latencies sourceGain larger than amplification is permitted However the implementation is free to clamp the total gain effective gain per source times listener gain to to prevent overflow",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourceGain",
        "normalized": "Source-\u003eStateVar Gain",
        "package": "OpenAL",
        "partial": "Gain",
        "signature": "Source-\u003eStateVar Gain"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourcePosition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esourcePosition\u003c/a\u003e\u003c/code\u003e contains the current location of the source in the world\n coordinate system. Any 3-tuple of valid float values is allowed.\n Implementation behavior on encountering NaN and infinity is not defined. The\n initial position is (\u003ccode\u003e\u003ca\u003eVertex3\u003c/a\u003e\u003c/code\u003e 0 0 0).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (Vertex3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourcePosition",
        "fct-type": "function",
        "title": "sourcePosition"
      },
      "index": {
        "description": "sourcePosition contains the current location of the source in the world coordinate system Any tuple of valid float values is allowed Implementation behavior on encountering NaN and infinity is not defined The initial position is Vertex3",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourcePosition",
        "normalized": "Source-\u003eStateVar(Vertex ALfloat)",
        "package": "OpenAL",
        "partial": "Position",
        "signature": "Source-\u003eStateVar(Vertex ALfloat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourceRelative",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003esourceRelative\u003c/a\u003e\u003c/code\u003e contains \u003ccode\u003e\u003ca\u003eListener\u003c/a\u003e\u003c/code\u003e, it indicates indicates that the\n values specified by \u003ccode\u003e\u003ca\u003esourcePosition\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esourceVelocity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edirection\u003c/a\u003e\u003c/code\u003e are to\n be interpreted relative to the listener position. The initial value is\n \u003ccode\u003e\u003ca\u003eWorld\u003c/a\u003e\u003c/code\u003e, indicating that those source attributes are to be interpreted\n relative to the world, i.e. they are considered absolute.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar SourceRelative",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourceRelative",
        "fct-type": "function",
        "title": "sourceRelative"
      },
      "index": {
        "description": "If sourceRelative contains Listener it indicates indicates that the values specified by sourcePosition sourceVelocity and direction are to be interpreted relative to the listener position The initial value is World indicating that those source attributes are to be interpreted relative to the world i.e they are considered absolute",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourceRelative",
        "normalized": "Source-\u003eStateVar SourceRelative",
        "package": "OpenAL",
        "partial": "Relative",
        "signature": "Source-\u003eStateVar SourceRelative"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourceState",
      "description": {
        "fct-descr": "\u003cp\u003eContains the current execution state of the given source. The initial state\n of any source is \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e state is not necessarily identical to the initial\n state in which a source is created, because the other source attributes are\n not automatically reset to their initial values. \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e merely indicates\n that the source can be executed using the \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e command. A \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e source can be reset into the default configuration by using a\n sequence of source commands as necessary. As the application has to specify\n all relevant state anyway to create a useful source configuration, no reset\n command is provided.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e GettableStateVar SourceState",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourceState",
        "fct-type": "function",
        "title": "sourceState"
      },
      "index": {
        "description": "Contains the current execution state of the given source The initial state of any source is Initial Note that the Initial state is not necessarily identical to the initial state in which source is created because the other source attributes are not automatically reset to their initial values Initial merely indicates that the source can be executed using the play command Stopped or Initial source can be reset into the default configuration by using sequence of source commands as necessary As the application has to specify all relevant state anyway to create useful source configuration no reset command is provided",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourceState",
        "normalized": "Source-\u003eGettableStateVar SourceState",
        "package": "OpenAL",
        "partial": "State",
        "signature": "Source-\u003eGettableStateVar SourceState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourceType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esourceType\u003c/a\u003e\u003c/code\u003e indicates whether a source is ready to queue buffers, ready to\n use a static buffer, or is in an undetermined state where it can be used for\n either streaming or static playback.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e GettableStateVar SourceType",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourceType",
        "fct-type": "function",
        "title": "sourceType"
      },
      "index": {
        "description": "sourceType indicates whether source is ready to queue buffers ready to use static buffer or is in an undetermined state where it can be used for either streaming or static playback",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourceType",
        "normalized": "Source-\u003eGettableStateVar SourceType",
        "package": "OpenAL",
        "partial": "Type",
        "signature": "Source-\u003eGettableStateVar SourceType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:sourceVelocity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esourceVelocity\u003c/a\u003e\u003c/code\u003e contains current velocity (speed and direction) of the\n source in the world coordinate system. Any 3-tuple of valid float values is\n allowed, and the initial velocity is (\u003ccode\u003e\u003ca\u003eVector3\u003c/a\u003e\u003c/code\u003e 0 0 0). \u003ccode\u003e\u003ca\u003esourceVelocity\u003c/a\u003e\u003c/code\u003e does\n not affect \u003ccode\u003e\u003ca\u003esourcePosition\u003c/a\u003e\u003c/code\u003e. OpenAL does not calculate the velocity from\n subsequent position updates, nor does it adjust the position over time based\n on the specified velocity. Any such calculation is left to the application.\n For the purposes of sound processing, position and velocity are independent\n parameters affecting different aspects of the sounds.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esourceVelocity\u003c/a\u003e\u003c/code\u003e is taken into account by the driver to synthesize the\n Doppler effect perceived by the listener for each source, based on the\n velocity of both source and listener, and the Doppler related parameters.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e StateVar (Vector3 ALfloat)",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#sourceVelocity",
        "fct-type": "function",
        "title": "sourceVelocity"
      },
      "index": {
        "description": "sourceVelocity contains current velocity speed and direction of the source in the world coordinate system Any tuple of valid float values is allowed and the initial velocity is Vector3 sourceVelocity does not affect sourcePosition OpenAL does not calculate the velocity from subsequent position updates nor does it adjust the position over time based on the specified velocity Any such calculation is left to the application For the purposes of sound processing position and velocity are independent parameters affecting different aspects of the sounds sourceVelocity is taken into account by the driver to synthesize the Doppler effect perceived by the listener for each source based on the velocity of both source and listener and the Doppler related parameters",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "sourceVelocity",
        "normalized": "Source-\u003eStateVar(Vector ALfloat)",
        "package": "OpenAL",
        "partial": "Velocity",
        "signature": "Source-\u003eStateVar(Vector ALfloat)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e applied to an \u003ccode\u003e\u003ca\u003eInitial\u003c/a\u003e\u003c/code\u003e source is a legal NOP. \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e applied to a\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source will change its state to \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e. The source is exempt\n from processing, its current state is preserved. \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e\n source will change its state to \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e, with the same consequences as on a\n \u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e source. \u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e source is a legal NOP.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "[Source] -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "stop applied to an Initial source is legal NOP stop applied to Playing source will change its state to Stopped The source is exempt from processing its current state is preserved stop applied to Paused source will change its state to Stopped with the same consequences as on Playing source stop applied to Stopped source is legal NOP",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "stop",
        "normalized": "[Source]-\u003eIO()",
        "package": "OpenAL",
        "partial": "",
        "signature": "[Source]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-Source.html#v:unqueueBuffers",
      "description": {
        "fct-descr": "\u003cp\u003eOnce a queue entry for a buffer has been appended to a queue and is pending\n processing, it should not be changed. Removal of a given queue entry is not\n possible unless either the source is stopped (in which case then entire queue\n is considered processed), or if the queue entry has already been processed\n (\u003ccode\u003e\u003ca\u003ePlaying\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePaused\u003c/a\u003e\u003c/code\u003e source). A playing source will enter the \u003ccode\u003e\u003ca\u003eStopped\u003c/a\u003e\u003c/code\u003e\n state if it completes playback of the last buffer in its queue (the same\n behavior as when a single buffer has been attached to a source and has\n finished playback).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunqueueBuffers\u003c/a\u003e\u003c/code\u003e command removes a number of buffers entries that have\n finished processing from the queue, returning the buffers that were unqueued.\n The operation will fail with an \u003ccode\u003e\u003ca\u003eALInvalidValue\u003c/a\u003e\u003c/code\u003e error if more buffers are\n requested than available, leaving the destination arguments unchanged.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.Source",
        "fct-package": "OpenAL",
        "fct-signature": "Source -\u003e ALsizei -\u003e IO [Buffer]",
        "fct-source": "src/Sound-OpenAL-AL-Source.html#unqueueBuffers",
        "fct-type": "function",
        "title": "unqueueBuffers"
      },
      "index": {
        "description": "Once queue entry for buffer has been appended to queue and is pending processing it should not be changed Removal of given queue entry is not possible unless either the source is stopped in which case then entire queue is considered processed or if the queue entry has already been processed Playing or Paused source playing source will enter the Stopped state if it completes playback of the last buffer in its queue the same behavior as when single buffer has been attached to source and has finished playback The unqueueBuffers command removes number of buffers entries that have finished processing from the queue returning the buffers that were unqueued The operation will fail with an ALInvalidValue error if more buffers are requested than available leaving the destination arguments unchanged",
        "hierarchy": "Sound OpenAL AL Source",
        "module": "Sound.OpenAL.AL.Source",
        "name": "unqueueBuffers",
        "normalized": "Source-\u003eALsizei-\u003eIO[Buffer]",
        "package": "OpenAL",
        "partial": "Buffers",
        "signature": "Source-\u003eALsizei-\u003eIO[Buffer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-StringQueries.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 3.1.2 (String Queries) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL.StringQueries",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL-StringQueries.html",
        "fct-type": "module",
        "title": "StringQueries"
      },
      "index": {
        "description": "This module corresponds to section String Queries of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL StringQueries",
        "module": "Sound.OpenAL.AL.StringQueries",
        "name": "StringQueries",
        "normalized": "",
        "package": "OpenAL",
        "partial": "String Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-StringQueries.html#v:alRenderer",
      "description": {
        "fct-descr": "\u003cp\u003eContains information about the specific renderer.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.StringQueries",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-AL-StringQueries.html#alRenderer",
        "fct-type": "function",
        "title": "alRenderer"
      },
      "index": {
        "description": "Contains information about the specific renderer",
        "hierarchy": "Sound OpenAL AL StringQueries",
        "module": "Sound.OpenAL.AL.StringQueries",
        "name": "alRenderer",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Renderer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL-StringQueries.html#v:alVendor",
      "description": {
        "fct-descr": "\u003cp\u003eContains the name of the vendor.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.AL.StringQueries",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-AL-StringQueries.html#alVendor",
        "fct-type": "function",
        "title": "alVendor"
      },
      "index": {
        "description": "Contains the name of the vendor",
        "hierarchy": "Sound OpenAL AL StringQueries",
        "module": "Sound.OpenAL.AL.StringQueries",
        "name": "alVendor",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Vendor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-AL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to chapters 2 (OpenAL Operation), 3 (State and State\n Requests), 4 (Listener and Sources) and 5 (Buffers) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.AL",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-AL.html",
        "fct-type": "module",
        "title": "AL"
      },
      "index": {
        "description": "This module corresponds to chapters OpenAL Operation State and State Requests Listener and Sources and Buffers of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL AL",
        "module": "Sound.OpenAL.AL",
        "name": "AL",
        "normalized": "",
        "package": "OpenAL",
        "partial": "AL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to the introductory parts of chapter 6 (AL Contexts\n and the ALC API) of the OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eThe context API makes use of ALC types which are defined separately from the\n AL types - there is an \u003ccode\u003e\u003ca\u003eALCboolean\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eALCchar\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-BasicTypes.html",
        "fct-type": "module",
        "title": "BasicTypes"
      },
      "index": {
        "description": "This module corresponds to the introductory parts of chapter AL Contexts and the ALC API of the OpenAL Specification and Reference version The context API makes use of ALC types which are defined separately from the AL types there is an ALCboolean ALCchar etc",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "BasicTypes",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Basic Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCboolean",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit boolean\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCboolean",
        "fct-type": "type",
        "title": "ALCboolean"
      },
      "index": {
        "description": "bit boolean",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCboolean",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCboolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCbyte",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 8-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCbyte",
        "fct-type": "type",
        "title": "ALCbyte"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCbyte",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCbyte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCchar",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCchar",
        "fct-type": "type",
        "title": "ALCchar"
      },
      "index": {
        "description": "Character",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCchar",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCchar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCdouble",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit IEEE754 floating-point\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCdouble",
        "fct-type": "type",
        "title": "ALCdouble"
      },
      "index": {
        "description": "bit IEEE754 floating-point",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCdouble",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCdouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCenum",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerated 32-bit value\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCenum",
        "fct-type": "type",
        "title": "ALCenum"
      },
      "index": {
        "description": "Enumerated bit value",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCenum",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCenum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCfloat",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit IEEE754 floating-point\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCfloat",
        "fct-type": "type",
        "title": "ALCfloat"
      },
      "index": {
        "description": "bit IEEE754 floating-point",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCfloat",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCfloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCint",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 32-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCint",
        "fct-type": "type",
        "title": "ALCint"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCint",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCshort",
      "description": {
        "fct-descr": "\u003cp\u003eSigned 16-bit 2's complement integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCshort",
        "fct-type": "type",
        "title": "ALCshort"
      },
      "index": {
        "description": "Signed bit complement integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCshort",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCshort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCsizei",
      "description": {
        "fct-descr": "\u003cp\u003eNon-negatitve 32-bit binary integer size\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCsizei",
        "fct-type": "type",
        "title": "ALCsizei"
      },
      "index": {
        "description": "Non-negatitve bit binary integer size",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCsizei",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCsizei",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCubyte",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 8-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCubyte",
        "fct-type": "type",
        "title": "ALCubyte"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCubyte",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCubyte",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCuint",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 32-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCuint",
        "fct-type": "type",
        "title": "ALCuint"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCuint",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCuint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-BasicTypes.html#t:ALCushort",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 16-bit integer\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.BasicTypes",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-Config.html#ALCushort",
        "fct-type": "type",
        "title": "ALCushort"
      },
      "index": {
        "description": "Unsigned bit integer",
        "hierarchy": "Sound OpenAL ALC BasicTypes",
        "module": "Sound.OpenAL.ALC.BasicTypes",
        "name": "ALCushort",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCushort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 6.4.2. (Capture) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html",
        "fct-type": "module",
        "title": "Capture"
      },
      "index": {
        "description": "This module corresponds to section Capture of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "Capture",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Capture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#t:NumSamples",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#NumSamples",
        "fct-type": "type",
        "title": "NumSamples"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "NumSamples",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Num Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:allCaptureDeviceSpecifiers",
      "description": {
        "fct-descr": "\u003cp\u003eContains a list of specifiers for all available capture devices.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar [String]",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#allCaptureDeviceSpecifiers",
        "fct-type": "function",
        "title": "allCaptureDeviceSpecifiers"
      },
      "index": {
        "description": "Contains list of specifiers for all available capture devices",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "allCaptureDeviceSpecifiers",
        "normalized": "GettableStateVar[String]",
        "package": "OpenAL",
        "partial": "Capture Device Specifiers",
        "signature": "GettableStateVar[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureCloseDevice",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e IO Bool",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureCloseDevice",
        "fct-type": "function",
        "title": "captureCloseDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureCloseDevice",
        "normalized": "Device-\u003eIO Bool",
        "package": "OpenAL",
        "partial": "Close Device",
        "signature": "Device-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureDefaultDeviceSpecifier",
      "description": {
        "fct-descr": "\u003cp\u003eContains the name of the default capture device.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureDefaultDeviceSpecifier",
        "fct-type": "function",
        "title": "captureDefaultDeviceSpecifier"
      },
      "index": {
        "description": "Contains the name of the default capture device",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureDefaultDeviceSpecifier",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Default Device Specifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureDeviceSpecifier",
      "description": {
        "fct-descr": "\u003cp\u003eContains the specifier string for the given capture device.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureDeviceSpecifier",
        "fct-type": "function",
        "title": "captureDeviceSpecifier"
      },
      "index": {
        "description": "Contains the specifier string for the given capture device",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureDeviceSpecifier",
        "normalized": "Device-\u003eGettableStateVar String",
        "package": "OpenAL",
        "partial": "Device Specifier",
        "signature": "Device-\u003eGettableStateVar String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureNumSamples",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar NumSamples",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureNumSamples",
        "fct-type": "function",
        "title": "captureNumSamples"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureNumSamples",
        "normalized": "Device-\u003eGettableStateVar NumSamples",
        "package": "OpenAL",
        "partial": "Num Samples",
        "signature": "Device-\u003eGettableStateVar NumSamples"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureOpenDevice",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Maybe String -\u003e Frequency -\u003e Format -\u003e NumSamples -\u003e IO (Maybe Device)",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureOpenDevice",
        "fct-type": "function",
        "title": "captureOpenDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureOpenDevice",
        "normalized": "Maybe String-\u003eFrequency-\u003eFormat-\u003eNumSamples-\u003eIO(Maybe Device)",
        "package": "OpenAL",
        "partial": "Open Device",
        "signature": "Maybe String-\u003eFrequency-\u003eFormat-\u003eNumSamples-\u003eIO(Maybe Device)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureSamples",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e Ptr a -\u003e NumSamples -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureSamples",
        "fct-type": "function",
        "title": "captureSamples"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureSamples",
        "normalized": "Device-\u003ePtr a-\u003eNumSamples-\u003eIO()",
        "package": "OpenAL",
        "partial": "Samples",
        "signature": "Device-\u003ePtr a-\u003eNumSamples-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureStart",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureStart",
        "fct-type": "function",
        "title": "captureStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureStart",
        "normalized": "Device-\u003eIO()",
        "package": "OpenAL",
        "partial": "Start",
        "signature": "Device-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Capture.html#v:captureStop",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Capture",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Capture.html#captureStop",
        "fct-type": "function",
        "title": "captureStop"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Capture",
        "module": "Sound.OpenAL.ALC.Capture",
        "name": "captureStop",
        "normalized": "Device-\u003eIO()",
        "package": "OpenAL",
        "partial": "Stop",
        "signature": "Device-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 6.2 (Managing Rendering Contexts) of the\n OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eAll operations of the AL core API affect a current AL context. Within the\n scope of AL, the ALC is implied - it is not visible as a handle or function\n parameter. Only one AL Context per process can be current at a time.\n Applications maintaining multiple AL Contexts, whether threaded or not,\n have to set the current context accordingly. Applications can have multiple\n threads that share one more or contexts. In other words, AL and ALC are\n threadsafe.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "This module corresponds to section Managing Rendering Contexts of the OpenAL Specification and Reference version All operations of the AL core API affect current AL context Within the scope of AL the ALC is implied it is not visible as handle or function parameter Only one AL Context per process can be current at time Applications maintaining multiple AL Contexts whether threaded or not have to set the current context accordingly Applications can have multiple threads that share one more or contexts In other words AL and ALC are threadsafe",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Context",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract context type.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-Config.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "The abstract context type",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Context",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#t:ContextAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eThe application can choose to specify certain attributes for a context at\n context-creation time. Attributes not specified explicitly are set to\n implementation dependent defaults.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "data",
        "title": "ContextAttribute"
      },
      "index": {
        "description": "The application can choose to specify certain attributes for context at context-creation time Attributes not specified explicitly are set to implementation dependent defaults",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "ContextAttribute",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Context Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#t:Frequency",
      "description": {
        "fct-descr": "\u003cp\u003eFrequency, specified in samples per second, i.e. units of Hertz [Hz].\n Note that the underlying OpenAL API currently uses integral frequencies\n only, but we want to mirror physical reality here more closely.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "type",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#Frequency",
        "fct-type": "type",
        "title": "Frequency"
      },
      "index": {
        "description": "Frequency specified in samples per second i.e units of Hertz Hz Note that the underlying OpenAL API currently uses integral frequencies only but we want to mirror physical reality here more closely",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Frequency",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:Frequency",
      "description": {
        "fct-descr": "\u003cp\u003eFrequency for mixing output buffer, in units of\n   Hz\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Frequency Frequency",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "function",
        "title": "Frequency"
      },
      "index": {
        "description": "Frequency for mixing output buffer in units of Hz",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Frequency",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:MonoSources",
      "description": {
        "fct-descr": "\u003cp\u003eA hint indicating how many sources should be\n   capable of supporting mono data\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "MonoSources Int",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "function",
        "title": "MonoSources"
      },
      "index": {
        "description": "hint indicating how many sources should be capable of supporting mono data",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "MonoSources",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Mono Sources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:Refresh",
      "description": {
        "fct-descr": "\u003cp\u003eRefresh intervals, in units of Hz\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Refresh Frequency",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "function",
        "title": "Refresh"
      },
      "index": {
        "description": "Refresh intervals in units of Hz",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Refresh",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Refresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:StereoSources",
      "description": {
        "fct-descr": "\u003cp\u003eA hint indicating how many sources should be\n   capable of supporting stereo data\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "StereoSources Int",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "function",
        "title": "StereoSources"
      },
      "index": {
        "description": "hint indicating how many sources should be capable of supporting stereo data",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "StereoSources",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Stereo Sources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:Sync",
      "description": {
        "fct-descr": "\u003cp\u003eFlag, indicating a synchronous context\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Sync Bool",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#ContextAttribute",
        "fct-type": "function",
        "title": "Sync"
      },
      "index": {
        "description": "Flag indicating synchronous context",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "Sync",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Sync",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:allAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eContains the attribute list for the current context of the specified\n device.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar [ContextAttribute]",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#allAttributes",
        "fct-type": "function",
        "title": "allAttributes"
      },
      "index": {
        "description": "Contains the attribute list for the current context of the specified device",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "allAttributes",
        "normalized": "Device-\u003eGettableStateVar[ContextAttribute]",
        "package": "OpenAL",
        "partial": "Attributes",
        "signature": "Device-\u003eGettableStateVar[ContextAttribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:contextsDevice",
      "description": {
        "fct-descr": "\u003cp\u003eContains \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the device of the given context or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the context\n is invalid.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Context -\u003e GettableStateVar (Maybe Device)",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#contextsDevice",
        "fct-type": "function",
        "title": "contextsDevice"
      },
      "index": {
        "description": "Contains Just the device of the given context or Nothing if the context is invalid",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "contextsDevice",
        "normalized": "Context-\u003eGettableStateVar(Maybe Device)",
        "package": "OpenAL",
        "partial": "Device",
        "signature": "Context-\u003eGettableStateVar(Maybe Device)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:createContext",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a context for a given device and given attributes. Context creation\n will fail in the following cases: a) if the application requests attributes\n that, by themselves, can not be provided b) if the combination of specified\n attributes can not be provided c) if a specified attribute, or the\n combination of attributes, does not match the default values for unspecified\n attributes If context creation fails, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned, otherwise\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the new context. Note that \u003ccode\u003e\u003ca\u003ecreateContext\u003c/a\u003e\u003c/code\u003e does \u003cem\u003enot\u003c/em\u003e set the current\n context, this must be done separately via \u003ccode\u003e\u003ca\u003ecurrentContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e [ContextAttribute] -\u003e IO (Maybe Context)",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#createContext",
        "fct-type": "function",
        "title": "createContext"
      },
      "index": {
        "description": "Create context for given device and given attributes Context creation will fail in the following cases if the application requests attributes that by themselves can not be provided if the combination of specified attributes can not be provided if specified attribute or the combination of attributes does not match the default values for unspecified attributes If context creation fails Nothing will be returned otherwise Just the new context Note that createContext does not set the current context this must be done separately via currentContext",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "createContext",
        "normalized": "Device-\u003e[ContextAttribute]-\u003eIO(Maybe Context)",
        "package": "OpenAL",
        "partial": "Context",
        "signature": "Device-\u003e[ContextAttribute]-\u003eIO(Maybe Context)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:currentContext",
      "description": {
        "fct-descr": "\u003cp\u003eContains \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the current context with respect to OpenAL operation, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no current context. Setting it to the latter is useful\n when shutting OpenAL down. The state variable applies to the device that the\n context was created for. For each OS process (usually this means for each\n application), only one context can be current at any given time. All AL\n commands apply to the current context. Commands that affect objects shared\n among contexts (e.g. buffers) have side effects on other contexts.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "StateVar (Maybe Context)",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#currentContext",
        "fct-type": "function",
        "title": "currentContext"
      },
      "index": {
        "description": "Contains Just the current context with respect to OpenAL operation or Nothing if there is no current context Setting it to the latter is useful when shutting OpenAL down The state variable applies to the device that the context was created for For each OS process usually this means for each application only one context can be current at any given time All AL commands apply to the current context Commands that affect objects shared among contexts e.g buffers have side effects on other contexts",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "currentContext",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:destroyContext",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy the given context. Note that the the correct way to destroy a\n context is to first release it by setting \u003ccode\u003e\u003ca\u003ecurrentContext\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Applications should not attempt to destroy a current context,\n doing so will not work and will result in an \u003ccode\u003e\u003ca\u003eALCInvalidOperation\u003c/a\u003e\u003c/code\u003e error.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Context -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#destroyContext",
        "fct-type": "function",
        "title": "destroyContext"
      },
      "index": {
        "description": "Destroy the given context Note that the the correct way to destroy context is to first release it by setting currentContext to Nothing Applications should not attempt to destroy current context doing so will not work and will result in an ALCInvalidOperation error",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "destroyContext",
        "normalized": "Context-\u003eIO()",
        "package": "OpenAL",
        "partial": "Context",
        "signature": "Context-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:processContext",
      "description": {
        "fct-descr": "\u003cp\u003eThe current context is the only context accessible to state changes by AL\n commands (aside from state changes affecting shared objects). However,\n multiple contexts can be processed at the same time. To indicate that a\n context should be processed (i.e. that internal execution state like offset\n increments are supposed to be performed), the application has to use\n \u003ccode\u003e\u003ca\u003eprocessContext\u003c/a\u003e\u003c/code\u003e. Repeated calls to \u003ccode\u003e\u003ca\u003eprocessContext\u003c/a\u003e\u003c/code\u003e are legal, and do not\n affect a context that is already marked as processing. The default state of a\n context created by \u003ccode\u003e\u003ca\u003ecreateContext\u003c/a\u003e\u003c/code\u003e is that it is processing.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Context -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#processContext",
        "fct-type": "function",
        "title": "processContext"
      },
      "index": {
        "description": "The current context is the only context accessible to state changes by AL commands aside from state changes affecting shared objects However multiple contexts can be processed at the same time To indicate that context should be processed i.e that internal execution state like offset increments are supposed to be performed the application has to use processContext Repeated calls to processContext are legal and do not affect context that is already marked as processing The default state of context created by createContext is that it is processing",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "processContext",
        "normalized": "Context-\u003eIO()",
        "package": "OpenAL",
        "partial": "Context",
        "signature": "Context-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Context.html#v:suspendContext",
      "description": {
        "fct-descr": "\u003cp\u003eThe application can suspend any context from processing (including the\n current one). To indicate that a context should be suspended from processing\n (i.e. that internal execution state like offset increments is not supposed to\n be changed), the application has to use \u003ccode\u003e\u003ca\u003esuspendContext\u003c/a\u003e\u003c/code\u003e. Repeated calls to\n \u003ccode\u003e\u003ca\u003esuspendContext\u003c/a\u003e\u003c/code\u003e are legal, and do not affect a context that is already\n marked as suspended.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Context",
        "fct-package": "OpenAL",
        "fct-signature": "Context -\u003e IO ()",
        "fct-source": "src/Sound-OpenAL-ALC-Context.html#suspendContext",
        "fct-type": "function",
        "title": "suspendContext"
      },
      "index": {
        "description": "The application can suspend any context from processing including the current one To indicate that context should be suspended from processing i.e that internal execution state like offset increments is not supposed to be changed the application has to use suspendContext Repeated calls to suspendContext are legal and do not affect context that is already marked as suspended",
        "hierarchy": "Sound OpenAL ALC Context",
        "module": "Sound.OpenAL.ALC.Context",
        "name": "suspendContext",
        "normalized": "Context-\u003eIO()",
        "package": "OpenAL",
        "partial": "Context",
        "signature": "Context-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 6.1 (Managing Devices) of the OpenAL\n Specification and Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eALC introduces the notion of a device. A device can be, depending on the\n implementation, a hardware device, or a daemon/OS service/actual\n server. This mechanism also permits different drivers (and hardware) to\n coexist within the same system, as well as allowing several applications to\n share system resources for audio, including a single hardware output\n device. The details are left to the implementation, which has to map the\n available backends to unique device specifiers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-Device.html",
        "fct-type": "module",
        "title": "Device"
      },
      "index": {
        "description": "This module corresponds to section Managing Devices of the OpenAL Specification and Reference version ALC introduces the notion of device device can be depending on the implementation hardware device or daemon OS service actual server This mechanism also permits different drivers and hardware to coexist within the same system as well as allowing several applications to share system resources for audio including single hardware output device The details are left to the implementation which has to map the available backends to unique device specifiers",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "Device",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#t:Device",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract device type.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-Config.html#Device",
        "fct-type": "data",
        "title": "Device"
      },
      "index": {
        "description": "The abstract device type",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "Device",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#v:allDeviceSpecifiers",
      "description": {
        "fct-descr": "\u003cp\u003eContains a list of specifiers for all available devices.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar [String]",
        "fct-source": "src/Sound-OpenAL-ALC-Device.html#allDeviceSpecifiers",
        "fct-type": "function",
        "title": "allDeviceSpecifiers"
      },
      "index": {
        "description": "Contains list of specifiers for all available devices",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "allDeviceSpecifiers",
        "normalized": "GettableStateVar[String]",
        "package": "OpenAL",
        "partial": "Device Specifiers",
        "signature": "GettableStateVar[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#v:closeDevice",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloseDevice\u003c/a\u003e\u003c/code\u003e allows the application (i.e. the client program) to\n disconnect from a device (i.e. the server). It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for success and\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for failure. Once closed, the \u003ccode\u003e\u003ca\u003eDevice\u003c/a\u003e\u003c/code\u003e is invalid.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Older OpenAL implementations will always report a success!\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e IO Bool",
        "fct-source": "src/Sound-OpenAL-Config.html#closeDevice",
        "fct-type": "function",
        "title": "closeDevice"
      },
      "index": {
        "description": "closeDevice allows the application i.e the client program to disconnect from device i.e the server It returns True for success and False for failure Once closed the Device is invalid Note Older OpenAL implementations will always report success",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "closeDevice",
        "normalized": "Device-\u003eIO Bool",
        "package": "OpenAL",
        "partial": "Device",
        "signature": "Device-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#v:defaultDeviceSpecifier",
      "description": {
        "fct-descr": "\u003cp\u003eContains \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the specifier string for the default device or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no sound support at all.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar (Maybe String)",
        "fct-source": "src/Sound-OpenAL-ALC-Device.html#defaultDeviceSpecifier",
        "fct-type": "function",
        "title": "defaultDeviceSpecifier"
      },
      "index": {
        "description": "Contains Just the specifier string for the default device or Nothing if there is no sound support at all",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "defaultDeviceSpecifier",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Device Specifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#v:deviceSpecifier",
      "description": {
        "fct-descr": "\u003cp\u003eContains the specifier string for the given device.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-ALC-Device.html#deviceSpecifier",
        "fct-type": "function",
        "title": "deviceSpecifier"
      },
      "index": {
        "description": "Contains the specifier string for the given device",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "deviceSpecifier",
        "normalized": "Device-\u003eGettableStateVar String",
        "package": "OpenAL",
        "partial": "Specifier",
        "signature": "Device-\u003eGettableStateVar String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Device.html#v:openDevice",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e allows the application (i.e. the client program) to connect to\n a device (i.e. the server). If the function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then no sound\n driver/device has been found. The argument to \u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e specifies a\n certain device or device configuration. If it is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the\n implementation will provide an implementation specific default, see\n \u003ccode\u003e\u003ca\u003edefaultDeviceSpecifier\u003c/a\u003e\u003c/code\u003e. Otherwise it is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e an implementation-dependent\n string. You can use \u003ccode\u003e\u003ca\u003eallDeviceSpecifiers\u003c/a\u003e\u003c/code\u003e to get a list of the known OpenAL\n devices.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNotes for Windows:\u003c/em\u003e There are 3 possible device strings, each having a\n deprecated equivalent for legacy applications only:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\"Generic Hardware\"\u003c/code\u003e (legacy string: \u003ccode\u003e\"DirectSound3D\"\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"Generic Software\"\u003c/code\u003e (legacy string: \u003ccode\u003e\"DirectSound\"\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"Generic Software Fallback\"\u003c/code\u003e (legacy string: \u003ccode\u003e\"MMSYSTEM\"\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eNotes for Linux\\\u003c/em\u003e*nix:/ If an \u003ccode\u003e.openalrc\u003c/code\u003e file is present in the user's\n home directory, it is loaded first, otherwise \u003ccode\u003e/etc/openalrc\u003c/code\u003e is tried.\n The bindings (if any) of \u003ccode\u003edevices\u003c/code\u003e, \u003ccode\u003edirection\u003c/code\u003e, \u003ccode\u003esampling-rate\u003c/code\u003e, and\n \u003ccode\u003espeaker-num\u003c/code\u003e (see below) after loading one of these files take precedence\n over any bindings done via the argument to \u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe syntax of these files is lisp-based and a sequence of expressions, where\n an expression is one the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A boolean value of the form \u003ccode\u003e#f\u003c/code\u003e or \u003ccode\u003e#t\u003c/code\u003e, which evaluate to \u003cem\u003efalse\u003c/em\u003e and\n \u003cem\u003etrue\u003c/em\u003e, respectively.\n\u003c/li\u003e\u003cli\u003e An non-negative integer value, i.e. a sequence of decimal digits,\n evaluating to itself.\n\u003c/li\u003e\u003cli\u003e A (signed) floating point value, as recoginzed by C's \u003ccode\u003eatof()\u003c/code\u003e, evaluating\n to itself.\n\u003c/li\u003e\u003cli\u003e A pointer value of the form \u003ccode\u003e#p\u003cem\u003enum\u003c/em\u003e\u003c/code\u003e, where \u003cem\u003enum\u003c/em\u003e can be an octal,\n decimal or hexadecimal value, as recoginzed by C`s \u003ccode\u003estrtol()\u003c/code\u003e, evaluating\n to itself. This kind of expression is currently unused.\n\u003c/li\u003e\u003cli\u003e A string, i.e. a sequence of printable/whitespace characters between\n double quotes, evaluating to itself.\n\u003c/li\u003e\u003cli\u003e A symbol, i.e. a sequence of almost all characters which don't form a\n simple expression like the ones mentioned below, e.g. \u003ccode\u003efoo\u003c/code\u003e, \u003ccode\u003ebar1\u003c/code\u003e, \u003ccode\u003e3baz\u003c/code\u003e,\n ... The symbol evaluates to the value currently bound to it.\n\u003c/li\u003e\u003cli\u003e A function application of the form \u003ccode\u003e(\u003cem\u003esymbol\u003c/em\u003e \u003cem\u003eexpression\u003c/em\u003e...)\u003c/code\u003e. The\n function bound to the symbol is applied to the evaluated arguments.\n\u003c/li\u003e\u003cli\u003e A quotation of the form \u003ccode\u003e(quote \u003cem\u003eexpression\u003c/em\u003e)\u003c/code\u003e or \u003ccode\u003e'\u003cem\u003eexpression\u003c/em\u003e\u003c/code\u003e,\n evaluating to the unevaluated \u003cem\u003eexpression\u003c/em\u003e itself.\n\u003c/li\u003e\u003cli\u003e A definition of the form \u003ccode\u003e(define \u003cem\u003esymbol\u003c/em\u003e \u003cem\u003eexpression\u003c/em\u003e)\u003c/code\u003e, binding \u003cem\u003esymbol\u003c/em\u003e\n to the value of \u003cem\u003eexpression\u003c/em\u003e. The whole expression evaluates to the value of\n \u003cem\u003eexpression\u003c/em\u003e, too.\n\u003c/li\u003e\u003cli\u003e A conjunction of boolean expressions of the form \u003ccode\u003e(and \u003cem\u003eexpression\u003c/em\u003e...)\u003c/code\u003e.\n Each \u003cem\u003eexpression\u003c/em\u003e is evaluated in turn, and if one of them evaluates to\n \u003cem\u003efalse\u003c/em\u003e, the value of the whole expression is \u003cem\u003efalse\u003c/em\u003e. Otherwise the value is\n \u003cem\u003etrue\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e An extension loading mechanism of the form \u003ccode\u003e(load-extension\n \u003cem\u003elibraryName\u003c/em\u003e)\u003c/code\u003e, where \u003cem\u003elibraryName\u003c/em\u003e has to evaluate to a string. This tries\n to load the dynamic library with up to 3 special entry points:\n \u003ccode\u003ealExtension_03282000\u003c/code\u003e (pointing to a mandatory NULL-terminated sequence of\n pairs of pointers to names and extension functions), \u003ccode\u003ealExtInit_03282000\u003c/code\u003e (an\n optional initialization function), and \u003ccode\u003ealExtFini_03282000\u003c/code\u003e (an optional\n cleanup function). If the extension could be loaded successfully, the whole\n expression evaluates to \u003cem\u003etrue\u003c/em\u003e, otherwise to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSome symbols have a special meaning for OpenAL:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003edevices\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Has the form \u003ccode\u003e(\u003cem\u003edevspec\u003c/em\u003e...)\u003c/code\u003e, where \u003cem\u003edevspec\u003c/em\u003e is either a\n symbol/string specifying a device or \u003ccode\u003e(\u003cem\u003edevice\u003c/em\u003e \u003cem\u003edevice-param\u003c/em\u003e...)\u003c/code\u003e,\n specifying a device with additional parameters. These optional device\n parameters are stored in a variable \u003ccode\u003edevice-params\u003c/code\u003e, but are currently\n unused. The first device which can successfully opened is used.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003edirection\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string or symbol: \u003ccode\u003e\"read\"\u003c/code\u003e specifies that the device\n should be an input device, everything else means output device (default).\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003esampling-rate\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type integer or float: Specifies the internal mixing\n frequency, default is 44.1kHz.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003espeaker-num\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type integer or float: Specifies the number of speakers,\n which can be 1, 2 (default), or 4.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ealsa-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003ealsa\u003c/code\u003e backend only: Specifies both\n \u003ccode\u003ealsa-out-device\u003c/code\u003e and \u003ccode\u003ealsa-in-device\u003c/code\u003e, default \u003ccode\u003e\"plughw:0,0\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ealsa-out-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003ealsa\u003c/code\u003e backend only: Specifies the ALSA\n output device, defaults to the value of \u003ccode\u003ealsa-device\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ealsa-in-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003ealsa\u003c/code\u003e backend only: Specifies the ALSA\n input device, defaults to the value of \u003ccode\u003ealsa-device\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enative-in-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003enative\u003c/code\u003e backend on IRIX only.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enative-out-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003enative\u003c/code\u003e backend on IRIX only.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enative-rear-out-device\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003enative\u003c/code\u003e backend on IRIX only.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enative-use-select\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type boolean, \u003ccode\u003enative\u003c/code\u003e backend on Linux only: If \u003ccode\u003e#t\u003c/code\u003e,\n wait up to 0.8sec for the device to become ready for writing. If \u003ccode\u003e#f\u003c/code\u003e, just\n try to write and hope it won't hang forever. The latter might be necessary\n for some drivers which don't implement \u003ccode\u003eselect()\u003c/code\u003e , like some Aureal\n drivers.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elin-dsp-path\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003enative\u003c/code\u003e backend on Linux only: Path to DSP\n device for writing, tried before \u003ccode\u003e/dev/sound/dsp\u003c/code\u003e and \u003ccode\u003e/dev/sound\u003c/code\u003e if\n set.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elin-dsp-read-path\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type string, \u003ccode\u003enative\u003c/code\u003e backend on Linux only: Path to\n DSP device for reading, tried before \u003ccode\u003e/dev/sound/dsp\u003c/code\u003e and \u003ccode\u003e/dev/sound\u003c/code\u003e\n if set. Defaults to the value of \u003ccode\u003elin-dsp-path\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003enative-backend-debug\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type boolean, \u003ccode\u003enative\u003c/code\u003e backend on Darwin only: If\n set to \u003ccode\u003e#f\u003c/code\u003e, be a bit verbose on stderr about what's going on in the\n backend.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003esource-rolloff-factor\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Type integer or float: Value of the initial rolloff\n factor for sources, default is \u003ccode\u003e1.0\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elistener-position\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e List of 3 integers or floats: Value of the initial\n listener position, default is \u003ccode\u003e(0 0 0)\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elistener-velocity\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e List of 3 integers or floats: Value of the initial\n listener velocity, default is \u003ccode\u003e(0 0 0)\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elistener-orientation\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e List of 6 integers or floats: Value of the initial\n listener orientation (at/up), default is \u003ccode\u003e(0 0 -1 0 1 0)\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe string given to \u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e has to be of the form \u003ccode\u003e'((\u003cem\u003esymbol\u003c/em\u003e\n \u003cem\u003eexpression\u003c/em\u003e) ...)\u003c/code\u003e, which means basically a sequence of \u003ccode\u003edefine\u003c/code\u003e\n expressions. Example:\n\u003c/p\u003e\u003cpre\u003e\n \"'((sampling-rate 8000) (native-backend-debug #f))\"\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The information above has been reverse-engineered from the OpenAL SI\n and could be inaccurate. Any corrections and/or additions are highly\n welcome.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Device",
        "fct-package": "OpenAL",
        "fct-signature": "Maybe String -\u003e IO (Maybe Device)",
        "fct-source": "src/Sound-OpenAL-ALC-Device.html#openDevice",
        "fct-type": "function",
        "title": "openDevice"
      },
      "index": {
        "description": "openDevice allows the application i.e the client program to connect to device i.e the server If the function returns Nothing then no sound driver device has been found The argument to openDevice specifies certain device or device configuration If it is Nothing the implementation will provide an implementation specific default see defaultDeviceSpecifier Otherwise it is Just an implementation-dependent string You can use allDeviceSpecifiers to get list of the known OpenAL devices Notes for Windows There are possible device strings each having deprecated equivalent for legacy applications only Generic Hardware legacy string DirectSound3D Generic Software legacy string DirectSound Generic Software Fallback legacy string MMSYSTEM Notes for Linux nix If an openalrc file is present in the user home directory it is loaded first otherwise etc openalrc is tried The bindings if any of devices direction sampling-rate and speaker-num see below after loading one of these files take precedence over any bindings done via the argument to openDevice The syntax of these files is lisp-based and sequence of expressions where an expression is one the following boolean value of the form or which evaluate to false and true respectively An non-negative integer value i.e sequence of decimal digits evaluating to itself signed floating point value as recoginzed by atof evaluating to itself pointer value of the form num where num can be an octal decimal or hexadecimal value as recoginzed by strtol evaluating to itself This kind of expression is currently unused string i.e sequence of printable whitespace characters between double quotes evaluating to itself symbol i.e sequence of almost all characters which don form simple expression like the ones mentioned below e.g foo bar1 baz The symbol evaluates to the value currently bound to it function application of the form symbol expression The function bound to the symbol is applied to the evaluated arguments quotation of the form quote expression or expression evaluating to the unevaluated expression itself definition of the form define symbol expression binding symbol to the value of expression The whole expression evaluates to the value of expression too conjunction of boolean expressions of the form and expression Each expression is evaluated in turn and if one of them evaluates to false the value of the whole expression is false Otherwise the value is true An extension loading mechanism of the form load-extension libraryName where libraryName has to evaluate to string This tries to load the dynamic library with up to special entry points alExtension pointing to mandatory NULL-terminated sequence of pairs of pointers to names and extension functions alExtInit an optional initialization function and alExtFini an optional cleanup function If the extension could be loaded successfully the whole expression evaluates to true otherwise to false Some symbols have special meaning for OpenAL devices Has the form devspec where devspec is either symbol string specifying device or device device-param specifying device with additional parameters These optional device parameters are stored in variable device-params but are currently unused The first device which can successfully opened is used direction Type string or symbol read specifies that the device should be an input device everything else means output device default sampling-rate Type integer or float Specifies the internal mixing frequency default is kHz speaker-num Type integer or float Specifies the number of speakers which can be default or alsa-device Type string alsa backend only Specifies both alsa-out-device and alsa-in-device default plughw alsa-out-device Type string alsa backend only Specifies the ALSA output device defaults to the value of alsa-device alsa-in-device Type string alsa backend only Specifies the ALSA input device defaults to the value of alsa-device native-in-device Type string native backend on IRIX only native-out-device Type string native backend on IRIX only native-rear-out-device Type string native backend on IRIX only native-use-select Type boolean native backend on Linux only If wait up to sec for the device to become ready for writing If just try to write and hope it won hang forever The latter might be necessary for some drivers which don implement select like some Aureal drivers lin-dsp-path Type string native backend on Linux only Path to DSP device for writing tried before dev sound dsp and dev sound if set lin-dsp-read-path Type string native backend on Linux only Path to DSP device for reading tried before dev sound dsp and dev sound if set Defaults to the value of lin-dsp-path native-backend-debug Type boolean native backend on Darwin only If set to be bit verbose on stderr about what going on in the backend source-rolloff-factor Type integer or float Value of the initial rolloff factor for sources default is listener-position List of integers or floats Value of the initial listener position default is listener-velocity List of integers or floats Value of the initial listener velocity default is listener-orientation List of integers or floats Value of the initial listener orientation at up default is The string given to openDevice has to be of the form symbol expression which means basically sequence of define expressions Example sampling-rate native-backend-debug Note The information above has been reverse-engineered from the OpenAL SI and could be inaccurate Any corrections and or additions are highly welcome",
        "hierarchy": "Sound OpenAL ALC Device",
        "module": "Sound.OpenAL.ALC.Device",
        "name": "openDevice",
        "normalized": "Maybe String-\u003eIO(Maybe Device)",
        "package": "OpenAL",
        "partial": "Device",
        "signature": "Maybe String-\u003eIO(Maybe Device)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to section 6.3.6 (Query for Error Conditions) of the\n OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html",
        "fct-type": "module",
        "title": "Errors"
      },
      "index": {
        "description": "This module corresponds to section Query for Error Conditions of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "Errors",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#t:ALCError",
      "description": {
        "fct-descr": "\u003cp\u003eALC errors consist of a general error category and a description of what\n went wrong.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCError",
        "fct-type": "data",
        "title": "ALCError"
      },
      "index": {
        "description": "ALC errors consist of general error category and description of what went wrong",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCError",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#t:ALCErrorCategory",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral ALC error categories.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "data",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "data",
        "title": "ALCErrorCategory"
      },
      "index": {
        "description": "General ALC error categories",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCErrorCategory",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCError Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCError",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCError ALCErrorCategory String",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCError",
        "fct-type": "function",
        "title": "ALCError"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCError",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCInvalidContext",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCInvalidContext",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCInvalidContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCInvalidContext",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCInvalid Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCInvalidDevice",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCInvalidDevice",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCInvalidDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCInvalidDevice",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCInvalid Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCInvalidEnum",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCInvalidEnum",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCInvalidEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCInvalidEnum",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCInvalid Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCInvalidOperation",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCInvalidOperation",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCInvalidOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCInvalidOperation",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCInvalid Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCInvalidValue",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCInvalidValue",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCInvalidValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCInvalidValue",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCInvalid Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:ALCOutOfMemory",
      "description": {
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "ALCOutOfMemory",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#ALCErrorCategory",
        "fct-type": "function",
        "title": "ALCOutOfMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "ALCOutOfMemory",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALCOut Of Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Errors.html#v:alcErrors",
      "description": {
        "fct-descr": "\u003cp\u003eOpenAL detects only a subset of those conditions that could be considered\n errors. This is because in many cases error checking would adversely impact\n the performance of an error-free program. The state variable \u003ccode\u003e\u003ca\u003ealcErrors\u003c/a\u003e\u003c/code\u003e is\n used to obtain error information. When an error is detected by ALC, a flag is\n set and the error code is recorded. Further errors, if they occur, do not\n affect this recorded code. When \u003ccode\u003e\u003ca\u003ealcErrors\u003c/a\u003e\u003c/code\u003e is read, the error for the given\n device is returned and the flag is cleared, so that a further error will\n again record its code. If reading \u003ccode\u003e\u003ca\u003ealcErrors\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e[]\u003c/code\u003e then there has\n been no detectable error since the last time \u003ccode\u003e\u003ca\u003ealcErrors\u003c/a\u003e\u003c/code\u003e (or since the ALC\n was initialized).\n\u003c/p\u003e\u003cp\u003eWhen an error flag is set, results of ALC operations are undefined only if\n \u003ccode\u003e\u003ca\u003eALCOutOfMemory\u003c/a\u003e\u003c/code\u003e has occurred. In other cases, the command generating the\n error is ignored so that it has no effect on ALC state or output buffer\n contents. If the error generating command returns a value, it returns zero.\n If the generating command modifies values through a pointer argument, no\n change is made to these values. These error semantics apply only to ALC\n errors, not to system errors such as memory access errors.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Errors",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar [ALCError]",
        "fct-source": "src/Sound-OpenAL-ALC-Errors.html#alcErrors",
        "fct-type": "function",
        "title": "alcErrors"
      },
      "index": {
        "description": "OpenAL detects only subset of those conditions that could be considered errors This is because in many cases error checking would adversely impact the performance of an error-free program The state variable alcErrors is used to obtain error information When an error is detected by ALC flag is set and the error code is recorded Further errors if they occur do not affect this recorded code When alcErrors is read the error for the given device is returned and the flag is cleared so that further error will again record its code If reading alcErrors returns then there has been no detectable error since the last time alcErrors or since the ALC was initialized When an error flag is set results of ALC operations are undefined only if ALCOutOfMemory has occurred In other cases the command generating the error is ignored so that it has no effect on ALC state or output buffer contents If the error generating command returns value it returns zero If the generating command modifies values through pointer argument no change is made to these values These error semantics apply only to ALC errors not to system errors such as memory access errors",
        "hierarchy": "Sound OpenAL ALC Errors",
        "module": "Sound.OpenAL.ALC.Errors",
        "name": "alcErrors",
        "normalized": "Device-\u003eGettableStateVar[ALCError]",
        "package": "OpenAL",
        "partial": "Errors",
        "signature": "Device-\u003eGettableStateVar[ALCError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to the extension handling parts of section 6.3\n (ALC Queries) of the OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC-Extensions.html",
        "fct-type": "module",
        "title": "Extensions"
      },
      "index": {
        "description": "This module corresponds to the extension handling parts of section ALC Queries of the OpenAL Specification and Reference version",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#v:alcEnumValue",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration/token values are device independent, but tokens defined for\n extensions might not be present for a given device. Using \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the\n device is legal, but only the tokens defined by the AL core are\n guaranteed. Availability of extension tokens depends on the ALC extension.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "Maybe Device -\u003e String -\u003e GettableStateVar ALCenum",
        "fct-source": "src/Sound-OpenAL-ALC-Extensions.html#alcEnumValue",
        "fct-type": "function",
        "title": "alcEnumValue"
      },
      "index": {
        "description": "Enumeration token values are device independent but tokens defined for extensions might not be present for given device Using Nothing as the device is legal but only the tokens defined by the AL core are guaranteed Availability of extension tokens depends on the ALC extension",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "alcEnumValue",
        "normalized": "Maybe Device-\u003eString-\u003eGettableStateVar ALCenum",
        "package": "OpenAL",
        "partial": "Enum Value",
        "signature": "Maybe Device-\u003eString-\u003eGettableStateVar ALCenum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#v:alcExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eContains a list of available context extensions.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "Device -\u003e GettableStateVar [String]",
        "fct-source": "src/Sound-OpenAL-ALC-Extensions.html#alcExtensions",
        "fct-type": "function",
        "title": "alcExtensions"
      },
      "index": {
        "description": "Contains list of available context extensions",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "alcExtensions",
        "normalized": "Device-\u003eGettableStateVar[String]",
        "package": "OpenAL",
        "partial": "Extensions",
        "signature": "Device-\u003eGettableStateVar[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#v:alcIsExtensionPresent",
      "description": {
        "fct-descr": "\u003cp\u003eTo verify that a given extension is available for the current context and\n the device it is associated with, use \u003ccode\u003e\u003ca\u003ealcIsExtensionPresent\u003c/a\u003e\u003c/code\u003e. For invalid\n and unsupported string tokens it contains \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. Using \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the\n device is acceptable. The extension name is not case sensitive: The\n implementation will convert the name to all upper-case internally (and will\n express extension names in upper-case).\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "Maybe Device -\u003e String -\u003e GettableStateVar Bool",
        "fct-source": "src/Sound-OpenAL-ALC-QueryUtils.html#alcIsExtensionPresent",
        "fct-type": "function",
        "title": "alcIsExtensionPresent"
      },
      "index": {
        "description": "To verify that given extension is available for the current context and the device it is associated with use alcIsExtensionPresent For invalid and unsupported string tokens it contains False Using Nothing as the device is acceptable The extension name is not case sensitive The implementation will convert the name to all upper-case internally and will express extension names in upper-case",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "alcIsExtensionPresent",
        "normalized": "Maybe Device-\u003eString-\u003eGettableStateVar Bool",
        "package": "OpenAL",
        "partial": "Is Extension Present",
        "signature": "Maybe Device-\u003eString-\u003eGettableStateVar Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#v:alcProcAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe application is expected to verify the applicability of an extension or\n core function entry point before requesting it by name, by use of\n \u003ccode\u003e\u003ca\u003ealcIsExtensionPresent\u003c/a\u003e\u003c/code\u003e. Extension entry points can be retrieved using\n \u003ccode\u003e\u003ca\u003ealcProcAddress\u003c/a\u003e\u003c/code\u003e. Entry points can be device specific, but are not context\n specific. Using \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the device does not guarantee that the entry\n point is returned, even if available for one of the available devices.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "Maybe Device -\u003e String -\u003e GettableStateVar (FunPtr a)",
        "fct-source": "src/Sound-OpenAL-ALC-Extensions.html#alcProcAddress",
        "fct-type": "function",
        "title": "alcProcAddress"
      },
      "index": {
        "description": "The application is expected to verify the applicability of an extension or core function entry point before requesting it by name by use of alcIsExtensionPresent Extension entry points can be retrieved using alcProcAddress Entry points can be device specific but are not context specific Using Nothing as the device does not guarantee that the entry point is returned even if available for one of the available devices",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "alcProcAddress",
        "normalized": "Maybe Device-\u003eString-\u003eGettableStateVar(FunPtr a)",
        "package": "OpenAL",
        "partial": "Proc Address",
        "signature": "Maybe Device-\u003eString-\u003eGettableStateVar(FunPtr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC-Extensions.html#v:alcVersion",
      "description": {
        "fct-descr": "\u003cp\u003eContains the \"\u003cem\u003emajor\u003c/em\u003e.\u003cem\u003eminor\u003c/em\u003e\" specification revision for this implementation.\n\u003c/p\u003e",
        "fct-module": "Sound.OpenAL.ALC.Extensions",
        "fct-package": "OpenAL",
        "fct-signature": "GettableStateVar String",
        "fct-source": "src/Sound-OpenAL-ALC-Extensions.html#alcVersion",
        "fct-type": "function",
        "title": "alcVersion"
      },
      "index": {
        "description": "Contains the major minor specification revision for this implementation",
        "hierarchy": "Sound OpenAL ALC Extensions",
        "module": "Sound.OpenAL.ALC.Extensions",
        "name": "alcVersion",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL-ALC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module corresponds to chapter 6 (AL Contexts and the ALC API) of the\n OpenAL Specification and Reference (version 1.1).\n\u003c/p\u003e\u003cp\u003eALC is a portable API for managing OpenAL contexts, including resource\n sharing, locking, and unlocking. Within the core AL API the existence of a\n context is implied, but the context is not exposed. The context encapsulates\n the state of a given instance of the AL state machine.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL.ALC",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL-ALC.html",
        "fct-type": "module",
        "title": "ALC"
      },
      "index": {
        "description": "This module corresponds to chapter AL Contexts and the ALC API of the OpenAL Specification and Reference version ALC is portable API for managing OpenAL contexts including resource sharing locking and unlocking Within the core AL API the existence of context is implied but the context is not exposed The context encapsulates the state of given instance of the AL state machine",
        "hierarchy": "Sound OpenAL ALC",
        "module": "Sound.OpenAL.ALC",
        "name": "ALC",
        "normalized": "",
        "package": "OpenAL",
        "partial": "ALC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/OpenAL/docs/Sound-OpenAL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenience module, combining the Haskell bindings for AL and ALC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.OpenAL",
        "fct-package": "OpenAL",
        "fct-signature": "module",
        "fct-source": "src/Sound-OpenAL.html",
        "fct-type": "module",
        "title": "OpenAL"
      },
      "index": {
        "description": "convenience module combining the Haskell bindings for AL and ALC",
        "hierarchy": "Sound OpenAL",
        "module": "Sound.OpenAL",
        "name": "OpenAL",
        "normalized": "",
        "package": "OpenAL",
        "partial": "Open AL",
        "signature": ""
      }
    }
  }
]