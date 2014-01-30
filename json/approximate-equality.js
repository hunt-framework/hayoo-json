[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe purpose of this module is to provide newtype wrapper that allows one to effectively override the equality operator of a value so that it is \u003cem\u003eapproximate\u003c/em\u003e rather than \u003cem\u003eexact\u003c/em\u003e.  For example, the type\n\u003c/p\u003e\u003cpre\u003e type ApproximateDouble = AbsolutelyApproximateValue (Digits Five) Double\n\u003c/pre\u003e\u003cp\u003edefines an alias for a wrapper containing \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es such that two doubles are equal if they are equal to within five decimals of accuracy;  for example, we have that\n\u003c/p\u003e\u003cpre\u003e 1 == (1+10^^(-6) :: ApproximateDouble)\n\u003c/pre\u003e\u003cp\u003eevaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  Note that we did not need to wrap the value \u003ccode\u003e1+10^^(-6)\u003c/code\u003e since \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.  For convenience, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e as well as many other of the numerical classes such as \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e have all been derived for the wrappers defined in this package so that one can conveniently use the wrapped values in the same way as one would use the values themselves.\n\u003c/p\u003e\u003cp\u003eTwo kinds of wrappers are provided by this package.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e wraps values that are considered to be equal if their absolute difference falls within the specified tolerance.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e wraps values that are considered to be equal if the absolute difference between the values divided by the average of the absolute values is within the given relative tolerance, \u003cem\u003eor\u003c/em\u003e if the absolute value of both values falls within the zero tolerance;  the latter case is checked because otherwise no value, no matter how small, would be approximately equal to zero.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe tolerance is specified through a type annotation.  One can use any annotation that one wishes as long as the type is an instance of \u003ccode\u003e\u003ca\u003eAbsoluteTolerance\u003c/a\u003e\u003c/code\u003e (for absolute tolerances) and/or \u003ccode\u003e\u003ca\u003eRelativeTolerance\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eZeroTolerance\u003c/a\u003e\u003c/code\u003e (for relative tolerances).  For convenience, this package provides the type \u003ccode\u003e\u003ca\u003eDigits\u003c/a\u003e\u003c/code\u003e that allows one to specify the tolerance in terms of the number of digits, making use of type-level natural numbers.  The annotation \u003ccode\u003eDigits n\u003c/code\u003e sets the tolerance to \u003ccode\u003e10^-n\u003c/code\u003e, so that in the case of the absolute tolerance and the zero tolerance \u003ccode\u003en\u003c/code\u003e is the number of decimal places that numbers have to match to be equal to respectively either each other or to zero, and in the case of relative tolerance \u003ccode\u003en\u003c/code\u003e is (roughly) the number of leading digits that two numbers have to match in order to be equal to each other.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "module",
        "fct-source": "src/Data-Eq-Approximate.html",
        "fct-type": "module",
        "title": "Approximate"
      },
      "index": {
        "description": "The purpose of this module is to provide newtype wrapper that allows one to effectively override the equality operator of value so that it is approximate rather than exact For example the type type ApproximateDouble AbsolutelyApproximateValue Digits Five Double defines an alias for wrapper containing Double such that two doubles are equal if they are equal to within five decimals of accuracy for example we have that ApproximateDouble evaluates to True Note that we did not need to wrap the value since AbsolutelyApproximateValue is an instance of Num For convenience Num as well as many other of the numerical classes such as Real and Floating have all been derived for the wrappers defined in this package so that one can conveniently use the wrapped values in the same way as one would use the values themselves Two kinds of wrappers are provided by this package AbsolutelyApproximateValue wraps values that are considered to be equal if their absolute difference falls within the specified tolerance RelativelyApproximateValue wraps values that are considered to be equal if the absolute difference between the values divided by the average of the absolute values is within the given relative tolerance or if the absolute value of both values falls within the zero tolerance the latter case is checked because otherwise no value no matter how small would be approximately equal to zero The tolerance is specified through type annotation One can use any annotation that one wishes as long as the type is an instance of AbsoluteTolerance for absolute tolerances and or RelativeTolerance and ZeroTolerance for relative tolerances For convenience this package provides the type Digits that allows one to specify the tolerance in terms of the number of digits making use of type-level natural numbers The annotation Digits sets the tolerance to so that in the case of the absolute tolerance and the zero tolerance is the number of decimal places that numbers have to match to be equal to respectively either each other or to zero and in the case of relative tolerance is roughly the number of leading digits that two numbers have to match in order to be equal to each other",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "Approximate",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:AbsoluteTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eAbsoluteTolerance\u003c/a\u003e\u003c/code\u003e is used to define the absolute tolerances associated with types that will be used as absolute tolerance type annotations in \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "class",
        "fct-source": "src/Data-Eq-Approximate.html#AbsoluteTolerance",
        "fct-type": "class",
        "title": "AbsoluteTolerance"
      },
      "index": {
        "description": "The class AbsoluteTolerance is used to define the absolute tolerances associated with types that will be used as absolute tolerance type annotations in AbsolutelyApproximateValue",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "AbsoluteTolerance",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Absolute Tolerance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:AbsolutelyApproximateValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe newtype \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e is a wrapper that can contain an arbitrary value tagged with a tolerance; two values are equal to each other if the absolute difference is less than or equal to this tolerance.  The type annotation \u003ccode\u003eabsolute_tolerance\u003c/code\u003e, which must be an instance of \u003ccode\u003e\u003ca\u003eAbsoluteTolerance\u003c/a\u003e\u003c/code\u003e, specifies the tolerance.  For convenience, one may specify the tolerance using the type \u003ccode\u003eDigits n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is a type-level natural specifying the number of decimals in the tolerance (i.e., \u003ccode\u003eDigits Four\u003c/code\u003e specifies a tolerance of 0.0001).\n\u003c/p\u003e\u003cp\u003eIt is recommended that one use this wrapper by creating aliases, such as\n\u003c/p\u003e\u003cpre\u003e type ApproximateDouble = AbsolutelyApproximateValue (Digits Five)\n wrapAD :: Double -\u003e ApproximateDouble\n wrapAD = AbsolutelyApproximateValue\n unwrapAD :: ApproximateDouble -\u003e Double\n unwrapAD = unwrapAbsolutelyApproximateValue\n\u003c/pre\u003e\u003cp\u003eYou can then replace the type \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in your code with the type alias \u003ccode\u003eApproximateDouble\u003c/code\u003e to get the feature of approximate equality.  Most of the time you will find that you do not need to use wrapping functions to construct wrapped values since \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e is an instance of whatever numerical types the wrapped value is, so that for example \u003ccode\u003e1 + sqrt 2/3\u003c/code\u003e is already a value of type \u003ccode\u003eApproximateDouble\u003c/code\u003e without needing to be wrapped first.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Eq-Approximate.html#AbsolutelyApproximateValue",
        "fct-type": "newtype",
        "title": "AbsolutelyApproximateValue"
      },
      "index": {
        "description": "The newtype AbsolutelyApproximateValue is wrapper that can contain an arbitrary value tagged with tolerance two values are equal to each other if the absolute difference is less than or equal to this tolerance The type annotation absolute tolerance which must be an instance of AbsoluteTolerance specifies the tolerance For convenience one may specify the tolerance using the type Digits where is type-level natural specifying the number of decimals in the tolerance i.e Digits Four specifies tolerance of It is recommended that one use this wrapper by creating aliases such as type ApproximateDouble AbsolutelyApproximateValue Digits Five wrapAD Double ApproximateDouble wrapAD AbsolutelyApproximateValue unwrapAD ApproximateDouble Double unwrapAD unwrapAbsolutelyApproximateValue You can then replace the type Double in your code with the type alias ApproximateDouble to get the feature of approximate equality Most of the time you will find that you do not need to use wrapping functions to construct wrapped values since AbsolutelyApproximateValue is an instance of whatever numerical types the wrapped value is so that for example sqrt is already value of type ApproximateDouble without needing to be wrapped first",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "AbsolutelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Absolutely Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:Digits",
      "description": {
        "fct-descr": "\u003cp\u003eDigits is a type constructor that can be used to specify tolerances using type-level natural numbers.  Annotating a wrapper with the type \u003ccode\u003eDigits n\u003c/code\u003e specifies that the corresponding tolerance has a numerical value of \u003ccode\u003e10^(-n)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "data",
        "fct-source": "src/Data-Eq-Approximate.html#Digits",
        "fct-type": "data",
        "title": "Digits"
      },
      "index": {
        "description": "Digits is type constructor that can be used to specify tolerances using type-level natural numbers Annotating wrapper with the type Digits specifies that the corresponding tolerance has numerical value of",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "Digits",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Digits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:RelativeTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eRelativeTolerance\u003c/a\u003e\u003c/code\u003e is used to define the relative tolerances associated with types that will be used as relative tolerance type annotations in \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "class",
        "fct-source": "src/Data-Eq-Approximate.html#RelativeTolerance",
        "fct-type": "class",
        "title": "RelativeTolerance"
      },
      "index": {
        "description": "The class RelativeTolerance is used to define the relative tolerances associated with types that will be used as relative tolerance type annotations in RelativelyApproximateValue",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "RelativeTolerance",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Relative Tolerance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:RelativelyApproximateValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe newtype \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e is a wrapper that can contain an arbitrary value tagged with a zero tolerance and a relative tolerance;  two values are equal to each other if their absolute values are both less than or equal to the zero tolerance, or if the absolute difference between them divided by the average of the absolute values is less than or equal to the relative tolerance.\n\u003c/p\u003e\u003cp\u003eThe type annotation \u003ccode\u003ezero_tolerance\u003c/code\u003e, which must be an instance of \u003ccode\u003e\u003ca\u003eZeroTolerance\u003c/a\u003e\u003c/code\u003e, specifies the tolerance within which a value is considered to be equal to zero.  For convenience, one may specify the tolerance using the type \u003ccode\u003eDigits n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is a type-level natural specifying the number of decimals in the tolerance (i.e., \u003ccode\u003eDigits Four\u003c/code\u003e specifies a tolerance of 0.0001).\n\u003c/p\u003e\u003cp\u003eThe type annotation \u003ccode\u003erelative_tolerance\u003c/code\u003e, which must be an instance of \u003ccode\u003e\u003ca\u003eRelativeTolerance\u003c/a\u003e\u003c/code\u003e, specifies the relative tolerance within which two values that are not approximately equal to zero are considered to be equal to each other.  For convenience, as with the zero tolerance, one may specify the relative tolerance using the type \u003ccode\u003eDigits n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is a type-level natural specifying the number of decimals in the tolerance (i.e., \u003ccode\u003eDigits Four\u003c/code\u003e specifies a relative tolerance of 0.0001, so that two values are equal if they agree to the first four leading digits).\n\u003c/p\u003e\u003cp\u003eIt is recommended that one use this wrapper by creating aliases, such as\n\u003c/p\u003e\u003cpre\u003e type ApproximateDouble = RelativelyApproximateValue (Digits Five) (Digits Five)\n wrapAD :: Double -\u003e ApproximateDouble\n wrapAD = RelativelyApproximateValue\n unwrapAD :: ApproximateDouble -\u003e Double\n unwrapAD = unwrapRelativelyApproximateValue\n\u003c/pre\u003e\u003cp\u003eYou can then replace the type \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in your code with the type alias \u003ccode\u003eApproximateDouble\u003c/code\u003e to get the feature of approximate equality.  Most of the time you will find that you do not need to use wrapping functions to construct wrapped values since \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e is an instance of whatever numerical types the wrapped value is, so that for example \u003ccode\u003e1 + sqrt 2/3\u003c/code\u003e is already a value of type \u003ccode\u003eApproximateDouble\u003c/code\u003e without needing to be wrapped first.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Eq-Approximate.html#RelativelyApproximateValue",
        "fct-type": "newtype",
        "title": "RelativelyApproximateValue"
      },
      "index": {
        "description": "The newtype RelativelyApproximateValue is wrapper that can contain an arbitrary value tagged with zero tolerance and relative tolerance two values are equal to each other if their absolute values are both less than or equal to the zero tolerance or if the absolute difference between them divided by the average of the absolute values is less than or equal to the relative tolerance The type annotation zero tolerance which must be an instance of ZeroTolerance specifies the tolerance within which value is considered to be equal to zero For convenience one may specify the tolerance using the type Digits where is type-level natural specifying the number of decimals in the tolerance i.e Digits Four specifies tolerance of The type annotation relative tolerance which must be an instance of RelativeTolerance specifies the relative tolerance within which two values that are not approximately equal to zero are considered to be equal to each other For convenience as with the zero tolerance one may specify the relative tolerance using the type Digits where is type-level natural specifying the number of decimals in the tolerance i.e Digits Four specifies relative tolerance of so that two values are equal if they agree to the first four leading digits It is recommended that one use this wrapper by creating aliases such as type ApproximateDouble RelativelyApproximateValue Digits Five Digits Five wrapAD Double ApproximateDouble wrapAD RelativelyApproximateValue unwrapAD ApproximateDouble Double unwrapAD unwrapRelativelyApproximateValue You can then replace the type Double in your code with the type alias ApproximateDouble to get the feature of approximate equality Most of the time you will find that you do not need to use wrapping functions to construct wrapped values since RelativelyApproximateValue is an instance of whatever numerical types the wrapped value is so that for example sqrt is already value of type ApproximateDouble without needing to be wrapped first",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "RelativelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Relatively Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#t:ZeroTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eZeroTolerance\u003c/a\u003e\u003c/code\u003e is used to define the numerical zero tolerances associated with types that will be used as zero tolerance type annotations in \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "class",
        "fct-source": "src/Data-Eq-Approximate.html#ZeroTolerance",
        "fct-type": "class",
        "title": "ZeroTolerance"
      },
      "index": {
        "description": "The class ZeroTolerance is used to define the numerical zero tolerances associated with types that will be used as zero tolerance type annotations in RelativelyApproximateValue",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "ZeroTolerance",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Zero Tolerance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:AbsolutelyApproximateValue",
      "description": {
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "AbsolutelyApproximateValue",
        "fct-source": "src/Data-Eq-Approximate.html#AbsolutelyApproximateValue",
        "fct-type": "function",
        "title": "AbsolutelyApproximateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "AbsolutelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Absolutely Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:RelativelyApproximateValue",
      "description": {
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "RelativelyApproximateValue",
        "fct-source": "src/Data-Eq-Approximate.html#RelativelyApproximateValue",
        "fct-type": "function",
        "title": "RelativelyApproximateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "RelativelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Relatively Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:absoluteToleranceOf",
      "description": {
        "fct-descr": "\u003cp\u003eThis method retrieves the numerical absolute tolerance associated with the type;  it should be a constant function.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "AbsolutelyApproximateValue absolute_tolerance value -\u003e value",
        "fct-source": "src/Data-Eq-Approximate.html#absoluteToleranceOf",
        "fct-type": "method",
        "title": "absoluteToleranceOf"
      },
      "index": {
        "description": "This method retrieves the numerical absolute tolerance associated with the type it should be constant function",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "absoluteToleranceOf",
        "normalized": "AbsolutelyApproximateValue a b-\u003eb",
        "package": "approximate-equality",
        "partial": "Tolerance Of",
        "signature": "AbsolutelyApproximateValue absolute_tolerance value-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:getAbsoluteTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience (constant) function for extracting the relative tolerance type annotation from \u003ccode\u003e\u003ca\u003eAbsolutelyApproximateValue\u003c/a\u003e\u003c/code\u003e;  it returns the value \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e, so don't try to evaluate the result.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "AbsolutelyApproximateValue absolute_tolerance value -\u003e absolute_tolerance",
        "fct-source": "src/Data-Eq-Approximate.html#getAbsoluteTolerance",
        "fct-type": "function",
        "title": "getAbsoluteTolerance"
      },
      "index": {
        "description": "This is convenience constant function for extracting the relative tolerance type annotation from AbsolutelyApproximateValue it returns the value undefined so don try to evaluate the result",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "getAbsoluteTolerance",
        "normalized": "AbsolutelyApproximateValue a b-\u003ea",
        "package": "approximate-equality",
        "partial": "Absolute Tolerance",
        "signature": "AbsolutelyApproximateValue absolute_tolerance value-\u003eabsolute_tolerance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:getRelativeTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience (constant) function for extracting the relative tolerance type annotation from \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e;  it returns the value \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e, so don't try to evaluate the result.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value -\u003e relative_tolerance",
        "fct-source": "src/Data-Eq-Approximate.html#getRelativeTolerance",
        "fct-type": "function",
        "title": "getRelativeTolerance"
      },
      "index": {
        "description": "This is convenience constant function for extracting the relative tolerance type annotation from RelativelyApproximateValue it returns the value undefined so don try to evaluate the result",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "getRelativeTolerance",
        "normalized": "RelativelyApproximateValue a b c-\u003eb",
        "package": "approximate-equality",
        "partial": "Relative Tolerance",
        "signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value-\u003erelative_tolerance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:getZeroTolerance",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience (constant) function for extracting the zero tolerance type annotation from \u003ccode\u003e\u003ca\u003eRelativelyApproximateValue\u003c/a\u003e\u003c/code\u003e;  it returns the value \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e, so don't try to evaluate the result.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value -\u003e zero_tolerance",
        "fct-source": "src/Data-Eq-Approximate.html#getZeroTolerance",
        "fct-type": "function",
        "title": "getZeroTolerance"
      },
      "index": {
        "description": "This is convenience constant function for extracting the zero tolerance type annotation from RelativelyApproximateValue it returns the value undefined so don try to evaluate the result",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "getZeroTolerance",
        "normalized": "RelativelyApproximateValue a b c-\u003ea",
        "package": "approximate-equality",
        "partial": "Zero Tolerance",
        "signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value-\u003ezero_tolerance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:relativeToleranceOf",
      "description": {
        "fct-descr": "\u003cp\u003eThis method retrieves the numerical relative tolerance associated with the type;  it should be a constant function.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value -\u003e value",
        "fct-source": "src/Data-Eq-Approximate.html#relativeToleranceOf",
        "fct-type": "method",
        "title": "relativeToleranceOf"
      },
      "index": {
        "description": "This method retrieves the numerical relative tolerance associated with the type it should be constant function",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "relativeToleranceOf",
        "normalized": "RelativelyApproximateValue a b c-\u003ec",
        "package": "approximate-equality",
        "partial": "Tolerance Of",
        "signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:toleranceFromDigits",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience (constant) function that computes the numerical tolerance specified by \u003ccode\u003eDigits n\u003c/code\u003e, which is \u003ccode\u003e10^(-n)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "Digits n -\u003e value",
        "fct-source": "src/Data-Eq-Approximate.html#toleranceFromDigits",
        "fct-type": "function",
        "title": "toleranceFromDigits"
      },
      "index": {
        "description": "This is convenience constant function that computes the numerical tolerance specified by Digits which is",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "toleranceFromDigits",
        "normalized": "Digits a-\u003eb",
        "package": "approximate-equality",
        "partial": "From Digits",
        "signature": "Digits n-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:unwrapAbsolutelyApproximateValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "value",
        "fct-source": "src/Data-Eq-Approximate.html#AbsolutelyApproximateValue",
        "fct-type": "function",
        "title": "unwrapAbsolutelyApproximateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "unwrapAbsolutelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Absolutely Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:unwrapDigits",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a convenience (constant) function for extracting the type-level natural number contained within the \u003ccode\u003e\u003ca\u003eDigits\u003c/a\u003e\u003c/code\u003e type constructor; it returns the value \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e, so don't try to evaluate the result.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "Digits n -\u003e n",
        "fct-source": "src/Data-Eq-Approximate.html#unwrapDigits",
        "fct-type": "function",
        "title": "unwrapDigits"
      },
      "index": {
        "description": "This is convenience constant function for extracting the type-level natural number contained within the Digits type constructor it returns the value undefined so don try to evaluate the result",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "unwrapDigits",
        "normalized": "Digits a-\u003ea",
        "package": "approximate-equality",
        "partial": "Digits",
        "signature": "Digits n-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:unwrapRelativelyApproximateValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "value",
        "fct-source": "src/Data-Eq-Approximate.html#RelativelyApproximateValue",
        "fct-type": "function",
        "title": "unwrapRelativelyApproximateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "unwrapRelativelyApproximateValue",
        "normalized": "",
        "package": "approximate-equality",
        "partial": "Relatively Approximate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/approximate-equality/docs/Data-Eq-Approximate.html#v:zeroToleranceOf",
      "description": {
        "fct-descr": "\u003cp\u003eThis method retrieves the numerical zero tolerance associated with the type;  it should be a constant function.\n\u003c/p\u003e",
        "fct-module": "Data.Eq.Approximate",
        "fct-package": "approximate-equality",
        "fct-signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value -\u003e value",
        "fct-source": "src/Data-Eq-Approximate.html#zeroToleranceOf",
        "fct-type": "method",
        "title": "zeroToleranceOf"
      },
      "index": {
        "description": "This method retrieves the numerical zero tolerance associated with the type it should be constant function",
        "hierarchy": "Data Eq Approximate",
        "module": "Data.Eq.Approximate",
        "name": "zeroToleranceOf",
        "normalized": "RelativelyApproximateValue a b c-\u003ec",
        "package": "approximate-equality",
        "partial": "Tolerance Of",
        "signature": "RelativelyApproximateValue zero_tolerance relative_tolerance value-\u003evalue"
      }
    }
  }
]