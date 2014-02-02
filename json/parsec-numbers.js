[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eadjusted and portable number parsers stolen from\nText.ParserCombinators.Parsec.Token\n\u003c/p\u003e\u003cp\u003eThe basic top-level number parsers are \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eint\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efractional\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003edecimalFract\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enatFract\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloating\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edecimalFloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enatFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enatFloat\u003c/a\u003e\u003c/code\u003e parses numeric literals as defined for Haskell. All numbers are\nunsigned, i.e. non-negative. Leading zeros are allowed. At least a single\ndigit is required. A decimal point must be preceded and followed by at least\none digit.\n\u003c/p\u003e\u003cp\u003eA result type \u003ccode\u003e(Either Integer Double)\u003c/code\u003e can be converted to a final \u003ccode\u003eDouble\u003c/code\u003e\nusing \u003ccode\u003e(either fromInteger id)\u003c/code\u003e as is done for the parsers \u003ccode\u003e\u003ca\u003efractional2\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003efloating2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser \u003ccode\u003e\u003ca\u003enat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enatFract\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enatFloat\u003c/a\u003e\u003c/code\u003e parse hexadecimal and octal\n integrals (beginning with \u003ccode\u003e0x\u003c/code\u003e, \u003ccode\u003e0X\u003c/code\u003e, \u003ccode\u003e0o\u003c/code\u003e or \u003ccode\u003e0O\u003c/code\u003e) that are disallowed when\nusing \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edecimalFract\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edecimalFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parsers \u003ccode\u003e\u003ca\u003edecimalFract\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enatFract\u003c/a\u003e\u003c/code\u003e only allow a decimal point, whereas\n\u003ccode\u003e\u003ca\u003edecimalFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enatFloat\u003c/a\u003e\u003c/code\u003e also allow the exponent notation using \u003ccode\u003ee\u003c/code\u003e or\n\u003ccode\u003eE\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser \u003ccode\u003e\u003ca\u003efractional\u003c/a\u003e\u003c/code\u003e requires a decimal point between at least two\ndigits and \u003ccode\u003e\u003ca\u003efloating\u003c/a\u003e\u003c/code\u003e requires either a decimal point or the exponent\nnotation using \u003ccode\u003ee\u003c/code\u003e or \u003ccode\u003eE\u003c/code\u003e. (Both parsers do not return integral values and do\nnot support hexadecimal or octal values).\n\u003c/p\u003e\u003cp\u003eSigned numbers can be parsed using \"\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esign\u003c/a\u003e\u003c/code\u003e\" as is done\nfor the \u003ccode\u003e\u003ca\u003eint\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e\u003cp\u003eA couple of parsers have been added that take a \u003ccode\u003eBool\u003c/code\u003e argument, where \u003ccode\u003eFalse\u003c/code\u003e\ndoes not require any digit following the decimal dot. The parsers\n\u003ccode\u003e\u003ca\u003efractional3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efloating3\u003c/a\u003e\u003c/code\u003e allow even to start a number with the decimal\ndot. Also parsers \u003ccode\u003e\u003ca\u003ehexFract\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehexFloat\u003c/a\u003e\u003c/code\u003e for hexadecimal fractions and\nfloats have been added.\n\u003c/p\u003e\u003cp\u003eNote that most top-level parsers succeed on a string like \"\u003ccode\u003e1.0e-100\u003c/code\u003e\", but\nonly the floating point parsers consume the whole string. The fractional\nparsers stop before the exponent and the integral parsers before the decimal\npoint. You may wish to check for the end of a string using\n\u003ccode\u003e\u003ca\u003eeof\u003c/a\u003e\u003c/code\u003e, i.e. \"\u003ccode\u003eliftM2 const nat eof\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eThe returned values may be inaccurate. \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e may overflow. Fractional numbers\nshould be accurate as only one division is performed. Floating point numbers\nwith decimal exponents may be inaccurate due to using \u003ccode\u003e\u003ca\u003e**\u003c/a\u003e\u003c/code\u003e. Rational numbers\nare needed for correct conversions, but large positive or negative exponents\nmay be a problem and the class \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e is needed to check for minimal and\nmaximal exponents.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html",
        "fct-type": "module",
        "title": "Number"
      },
      "index": {
        "description": "adjusted and portable number parsers stolen from Text.ParserCombinators.Parsec.Token The basic top-level number parsers are decimal nat int fractional decimalFract natFract floating decimalFloat natFloat natFloat parses numeric literals as defined for Haskell All numbers are unsigned i.e non-negative Leading zeros are allowed At least single digit is required decimal point must be preceded and followed by at least one digit result type Either Integer Double can be converted to final Double using either fromInteger id as is done for the parsers fractional2 and floating2 The parser nat natFract and natFloat parse hexadecimal and octal integrals beginning with or that are disallowed when using decimal decimalFract and decimalFloat The parsers decimalFract and natFract only allow decimal point whereas decimalFloat and natFloat also allow the exponent notation using or The parser fractional requires decimal point between at least two digits and floating requires either decimal point or the exponent notation using or Both parsers do not return integral values and do not support hexadecimal or octal values Signed numbers can be parsed using ap sign as is done for the int parser couple of parsers have been added that take Bool argument where False does not require any digit following the decimal dot The parsers fractional3 and floating3 allow even to start number with the decimal dot Also parsers hexFract and hexFloat for hexadecimal fractions and floats have been added Note that most top-level parsers succeed on string like e-100 but only the floating point parsers consume the whole string The fractional parsers stop before the exponent and the integral parsers before the decimal point You may wish to check for the end of string using eof i.e liftM2 const nat eof The returned values may be inaccurate Int may overflow Fractional numbers should be accurate as only one division is performed Floating point numbers with decimal exponents may be inaccurate due to using Rational numbers are needed for correct conversions but large positive or negative exponents may be problem and the class RealFloat is needed to check for minimal and maximal exponents",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "Number",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:baseFraction",
      "description": {
        "fct-descr": "\u003cp\u003eparse a dot followed by base dependent digits as fractional part\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e Int -\u003e CharParser st Char -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#baseFraction",
        "fct-type": "function",
        "title": "baseFraction"
      },
      "index": {
        "description": "parse dot followed by base dependent digits as fractional part",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "baseFraction",
        "normalized": "Bool-\u003eInt-\u003eCharParser a Char-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fraction",
        "signature": "Bool-\u003eInt-\u003eCharParser st Char-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:binary",
      "description": {
        "fct-descr": "\u003cp\u003eparse a binary number\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#binary",
        "fct-type": "function",
        "title": "binary"
      },
      "index": {
        "description": "parse binary number",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "binary",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:decFloat",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003efloating\u003c/a\u003e\u003c/code\u003e but returns a non-negative integral wrapped by Left if\na fractional part and exponent is missing \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#decFloat",
        "fct-type": "function",
        "title": "decFloat"
      },
      "index": {
        "description": "same as floating but returns non-negative integral wrapped by Left if fractional part and exponent is missing",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "decFloat",
        "normalized": "Bool-\u003eCharParser a(Either b c)",
        "package": "parsec-numbers",
        "partial": "Float",
        "signature": "Bool-\u003eCharParser st(Either i f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:decFract",
      "description": {
        "fct-descr": "\u003cp\u003ea decimal fractional\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#decFract",
        "fct-type": "function",
        "title": "decFract"
      },
      "index": {
        "description": "decimal fractional",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "decFract",
        "normalized": "Bool-\u003eCharParser a(Either b c)",
        "package": "parsec-numbers",
        "partial": "Fract",
        "signature": "Bool-\u003eCharParser st(Either i f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eparse plain non-negative decimal numbers given by a non-empty sequence\nof digits \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#decimal",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "parse plain non-negative decimal numbers given by non-empty sequence of digits",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "decimal",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:decimalFloat",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003efloating\u003c/a\u003e\u003c/code\u003e but returns a non-negative integral wrapped by Left if\na fractional part and exponent is missing \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#decimalFloat",
        "fct-type": "function",
        "title": "decimalFloat"
      },
      "index": {
        "description": "same as floating but returns non-negative integral wrapped by Left if fractional part and exponent is missing",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "decimalFloat",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:decimalFract",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003efractional\u003c/a\u003e\u003c/code\u003e but returns a non-negative integral wrapped by Left if\na fractional part is missing \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#decimalFract",
        "fct-type": "function",
        "title": "decimalFract"
      },
      "index": {
        "description": "same as fractional but returns non-negative integral wrapped by Left if fractional part is missing",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "decimalFract",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Fract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:exponentFactor",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point exponent starting with e or E\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (f -\u003e f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#exponentFactor",
        "fct-type": "function",
        "title": "exponentFactor"
      },
      "index": {
        "description": "parse floating point exponent starting with or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "exponentFactor",
        "normalized": "CharParser a(b-\u003eb)",
        "package": "parsec-numbers",
        "partial": "Factor",
        "signature": "CharParser st(f-\u003ef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:exponentValue",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the factor given by the number following e or E. This\nimplementation uses \u003ccode\u003e**\u003c/code\u003e rather than \u003ccode\u003e^\u003c/code\u003e for more efficiency for large\nintegers. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Int -\u003e Integer -\u003e f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#exponentValue",
        "fct-type": "function",
        "title": "exponentValue"
      },
      "index": {
        "description": "compute the factor given by the number following or This implementation uses rather than for more efficiency for large integers",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "exponentValue",
        "normalized": "Int-\u003eInteger-\u003ea",
        "package": "parsec-numbers",
        "partial": "Value",
        "signature": "Int-\u003eInteger-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:extExponentFactor",
      "description": {
        "fct-descr": "\u003cp\u003eparse a signed decimal and compute the exponent factor given a base.\nFor hexadecimal exponential notation (IEEE 754) the base is 2 and the\nleading character a p. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Int -\u003e CharParser st (f -\u003e f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#extExponentFactor",
        "fct-type": "function",
        "title": "extExponentFactor"
      },
      "index": {
        "description": "parse signed decimal and compute the exponent factor given base For hexadecimal exponential notation IEEE the base is and the leading character",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "extExponentFactor",
        "normalized": "Int-\u003eCharParser a(b-\u003eb)",
        "package": "parsec-numbers",
        "partial": "Exponent Factor",
        "signature": "Int-\u003eCharParser st(f-\u003ef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:floating",
      "description": {
        "fct-descr": "\u003cp\u003eparse a decimal unsigned floating point number containing a dot, e or E\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#floating",
        "fct-type": "function",
        "title": "floating"
      },
      "index": {
        "description": "parse decimal unsigned floating point number containing dot or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "floating",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:floating2",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number possibly containing a decimal dot, e or E\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#floating2",
        "fct-type": "function",
        "title": "floating2"
      },
      "index": {
        "description": "parse floating point number possibly containing decimal dot or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "floating2",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:floating3",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number possibly starting with a decimal dot.\nNote, that a single decimal point or a number starting with \u003ccode\u003e.E\u003c/code\u003e is illegal.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#floating3",
        "fct-type": "function",
        "title": "floating3"
      },
      "index": {
        "description": "parse floating point number possibly starting with decimal dot Note that single decimal point or number starting with is illegal",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "floating3",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractExp",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number given the number before a dot, e or E\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractExp",
        "fct-type": "function",
        "title": "fractExp"
      },
      "index": {
        "description": "parse floating point number given the number before dot or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractExp",
        "normalized": "Integer-\u003eBool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Exp",
        "signature": "Integer-\u003eBool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractExponent",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number given the number before a dot, e or E\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractExponent",
        "fct-type": "function",
        "title": "fractExponent"
      },
      "index": {
        "description": "parse floating point number given the number before dot or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractExponent",
        "normalized": "Integer-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Exponent",
        "signature": "Integer-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractFract",
      "description": {
        "fct-descr": "\u003cp\u003eparse a fractional number given the number before the dot\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractFract",
        "fct-type": "function",
        "title": "fractFract"
      },
      "index": {
        "description": "parse fractional number given the number before the dot",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractFract",
        "normalized": "Integer-\u003eBool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fract",
        "signature": "Integer-\u003eBool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fraction",
      "description": {
        "fct-descr": "\u003cp\u003eparse a dot followed by decimal digits as fractional part\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fraction",
        "fct-type": "function",
        "title": "fraction"
      },
      "index": {
        "description": "parse dot followed by decimal digits as fractional part",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fraction",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractionValue",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the fraction given by a sequence of digits following the dot.\nOnly one division is performed and trailing zeros are ignored. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Int -\u003e String -\u003e f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractionValue",
        "fct-type": "function",
        "title": "fractionValue"
      },
      "index": {
        "description": "compute the fraction given by sequence of digits following the dot Only one division is performed and trailing zeros are ignored",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractionValue",
        "normalized": "Int-\u003eString-\u003ea",
        "package": "parsec-numbers",
        "partial": "Value",
        "signature": "Int-\u003eString-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractional",
      "description": {
        "fct-descr": "\u003cp\u003eparse a fractional number containing a decimal dot\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractional",
        "fct-type": "function",
        "title": "fractional"
      },
      "index": {
        "description": "parse fractional number containing decimal dot",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractional",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractional2",
      "description": {
        "fct-descr": "\u003cp\u003eparse a fractional number possibly containing a decimal dot\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractional2",
        "fct-type": "function",
        "title": "fractional2"
      },
      "index": {
        "description": "parse fractional number possibly containing decimal dot",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractional2",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:fractional3",
      "description": {
        "fct-descr": "\u003cp\u003eparse a fractional number possibly starting with a decimal dot\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#fractional3",
        "fct-type": "function",
        "title": "fractional3"
      },
      "index": {
        "description": "parse fractional number possibly starting with decimal dot",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "fractional3",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:genFractAndExp",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number given the number before the fraction and\nexponent that must follow the fraction \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "f -\u003e CharParser st f -\u003e CharParser st (f -\u003e f) -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#genFractAndExp",
        "fct-type": "function",
        "title": "genFractAndExp"
      },
      "index": {
        "description": "parse floating point number given the number before the fraction and exponent that must follow the fraction",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "genFractAndExp",
        "normalized": "a-\u003eCharParser b a-\u003eCharParser b(a-\u003ea)-\u003eCharParser b a",
        "package": "parsec-numbers",
        "partial": "Fract And Exp",
        "signature": "f-\u003eCharParser st f-\u003eCharParser st(f-\u003ef)-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:genFractExp",
      "description": {
        "fct-descr": "\u003cp\u003eparse a floating point number given the number before the fraction and\nexponent \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e CharParser st f -\u003e CharParser st (f -\u003e f) -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#genFractExp",
        "fct-type": "function",
        "title": "genFractExp"
      },
      "index": {
        "description": "parse floating point number given the number before the fraction and exponent",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "genFractExp",
        "normalized": "Integer-\u003eCharParser a b-\u003eCharParser a(b-\u003eb)-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fract Exp",
        "signature": "Integer-\u003eCharParser st f-\u003eCharParser st(f-\u003ef)-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:genFractFract",
      "description": {
        "fct-descr": "\u003cp\u003ecombine the given number before the dot with a parser for the fractional\npart \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e CharParser st f -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#genFractFract",
        "fct-type": "function",
        "title": "genFractFract"
      },
      "index": {
        "description": "combine the given number before the dot with parser for the fractional part",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "genFractFract",
        "normalized": "Integer-\u003eCharParser a b-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fract Fract",
        "signature": "Integer-\u003eCharParser st f-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexExponentFactor",
      "description": {
        "fct-descr": "\u003cp\u003epare a hexadecimal floating point starting with p (IEEE 754)\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (f -\u003e f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexExponentFactor",
        "fct-type": "function",
        "title": "hexExponentFactor"
      },
      "index": {
        "description": "pare hexadecimal floating point starting with IEEE",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexExponentFactor",
        "normalized": "CharParser a(b-\u003eb)",
        "package": "parsec-numbers",
        "partial": "Exponent Factor",
        "signature": "CharParser st(f-\u003ef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexFloat",
      "description": {
        "fct-descr": "\u003cp\u003eparse a hexadecimal floating point number\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexFloat",
        "fct-type": "function",
        "title": "hexFloat"
      },
      "index": {
        "description": "parse hexadecimal floating point number",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexFloat",
        "normalized": "Bool-\u003eCharParser a(Either b c)",
        "package": "parsec-numbers",
        "partial": "Float",
        "signature": "Bool-\u003eCharParser st(Either i f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexFract",
      "description": {
        "fct-descr": "\u003cp\u003ea hexadecimal fractional\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexFract",
        "fct-type": "function",
        "title": "hexFract"
      },
      "index": {
        "description": "hexadecimal fractional",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexFract",
        "normalized": "Bool-\u003eCharParser a(Either b c)",
        "package": "parsec-numbers",
        "partial": "Fract",
        "signature": "Bool-\u003eCharParser st(Either i f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexFractExp",
      "description": {
        "fct-descr": "\u003cp\u003eparse a hex floating point number given the number before a dot or p\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Integer -\u003e Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexFractExp",
        "fct-type": "function",
        "title": "hexFractExp"
      },
      "index": {
        "description": "parse hex floating point number given the number before dot or",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexFractExp",
        "normalized": "Integer-\u003eBool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fract Exp",
        "signature": "Integer-\u003eBool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexFraction",
      "description": {
        "fct-descr": "\u003cp\u003eparse a dot followed by hexadecimal digits as fractional part\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Bool -\u003e CharParser st f",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexFraction",
        "fct-type": "function",
        "title": "hexFraction"
      },
      "index": {
        "description": "parse dot followed by hexadecimal digits as fractional part",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexFraction",
        "normalized": "Bool-\u003eCharParser a b",
        "package": "parsec-numbers",
        "partial": "Fraction",
        "signature": "Bool-\u003eCharParser st f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexOrOct",
      "description": {
        "fct-descr": "\u003cp\u003ehexadecimal or octal number\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexOrOct",
        "fct-type": "function",
        "title": "hexOrOct"
      },
      "index": {
        "description": "hexadecimal or octal number",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexOrOct",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Or Oct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eparse a hexadecimal number preceded by an x or X character\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexadecimal",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "parse hexadecimal number preceded by an or character",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexadecimal",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:hexnum",
      "description": {
        "fct-descr": "\u003cp\u003eparse a hexadecimal number\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#hexnum",
        "fct-type": "function",
        "title": "hexnum"
      },
      "index": {
        "description": "parse hexadecimal number",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "hexnum",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eparse an optional \u003ccode\u003e\u003ca\u003esign\u003c/a\u003e\u003c/code\u003e immediately followed by a \u003ccode\u003e\u003ca\u003enat\u003c/a\u003e\u003c/code\u003e. Note, that in\nDaan Leijen's code the sign was wrapped as lexeme in order to skip comments\nand spaces in between. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "parse an optional sign immediately followed by nat Note that in Daan Leijen code the sign was wrapped as lexeme in order to skip comments and spaces in between",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "int",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:nat",
      "description": {
        "fct-descr": "\u003cp\u003eparse non-negative hexadecimal, octal or decimal numbers\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "parse non-negative hexadecimal octal or decimal numbers",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "nat",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:natFloat",
      "description": {
        "fct-descr": "\u003cp\u003eparse hexadecimal, octal or decimal integrals or \u003ccode\u003e\u003ca\u003efloating\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#natFloat",
        "fct-type": "function",
        "title": "natFloat"
      },
      "index": {
        "description": "parse hexadecimal octal or decimal integrals or floating",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "natFloat",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:natFract",
      "description": {
        "fct-descr": "\u003cp\u003eparse hexadecimal, octal or decimal integrals or \u003ccode\u003e\u003ca\u003efractional\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#natFract",
        "fct-type": "function",
        "title": "natFract"
      },
      "index": {
        "description": "parse hexadecimal octal or decimal integrals or fractional",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "natFract",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Fract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:number",
      "description": {
        "fct-descr": "\u003cp\u003eparse a non-negative number given a base and a parser for the digits\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Int -\u003e GenParser tok st Char -\u003e GenParser tok st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#number",
        "fct-type": "function",
        "title": "number"
      },
      "index": {
        "description": "parse non-negative number given base and parser for the digits",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "number",
        "normalized": "Int-\u003eGenParser a b Char-\u003eGenParser a b c",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "Int-\u003eGenParser tok st Char-\u003eGenParser tok st i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:numberValue",
      "description": {
        "fct-descr": "\u003cp\u003ecompute the value from a string of digits using a base\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "Int -\u003e String -\u003e i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#numberValue",
        "fct-type": "function",
        "title": "numberValue"
      },
      "index": {
        "description": "compute the value from string of digits using base",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "numberValue",
        "normalized": "Int-\u003eString-\u003ea",
        "package": "parsec-numbers",
        "partial": "Value",
        "signature": "Int-\u003eString-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:octal",
      "description": {
        "fct-descr": "\u003cp\u003eparse an octal number preceded by an o or O character\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#octal",
        "fct-type": "function",
        "title": "octal"
      },
      "index": {
        "description": "parse an octal number preceded by an or character",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "octal",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:sign",
      "description": {
        "fct-descr": "\u003cp\u003eparse an optional plus or minus sign, returning \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (a -\u003e a)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#sign",
        "fct-type": "function",
        "title": "sign"
      },
      "index": {
        "description": "parse an optional plus or minus sign returning negate or id",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "sign",
        "normalized": "CharParser a(b-\u003eb)",
        "package": "parsec-numbers",
        "partial": "",
        "signature": "CharParser st(a-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:zeroNumFloat",
      "description": {
        "fct-descr": "\u003cp\u003eparse any hexadecimal, octal, decimal or floating point number following\na zero \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#zeroNumFloat",
        "fct-type": "function",
        "title": "zeroNumFloat"
      },
      "index": {
        "description": "parse any hexadecimal octal decimal or floating point number following zero",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "zeroNumFloat",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Num Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:zeroNumFract",
      "description": {
        "fct-descr": "\u003cp\u003eparse any hexadecimal, octal, decimal or fractional number following\na zero \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st (Either i f)",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#zeroNumFract",
        "fct-type": "function",
        "title": "zeroNumFract"
      },
      "index": {
        "description": "parse any hexadecimal octal decimal or fractional number following zero",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "zeroNumFract",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Num Fract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-numbers/docs/Text-ParserCombinators-Parsec-Number.html#v:zeroNumber",
      "description": {
        "fct-descr": "\u003cp\u003eparse a \u003ccode\u003e\u003ca\u003enat\u003c/a\u003e\u003c/code\u003e syntactically starting with a zero\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.Number",
        "fct-package": "parsec-numbers",
        "fct-signature": "CharParser st i",
        "fct-source": "src/Text-ParserCombinators-Parsec-Number.html#zeroNumber",
        "fct-type": "function",
        "title": "zeroNumber"
      },
      "index": {
        "description": "parse nat syntactically starting with zero",
        "hierarchy": "Text ParserCombinators Parsec Number",
        "module": "Text.ParserCombinators.Parsec.Number",
        "name": "zeroNumber",
        "normalized": "",
        "package": "parsec-numbers",
        "partial": "Number",
        "signature": ""
      }
    }
  }
]