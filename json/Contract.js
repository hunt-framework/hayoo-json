[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePractical typed lazy contracts.\n   Author: Olaf Chitil.\n   Version: July 2012.\n\u003c/p\u003e\u003cp\u003eContracts describe properties of expressions (esp. functions) that are\n checked at run-time.\n Thus these properties are both documented and enforced.\n Contracts are more expressive than static types.\n If a contract is violated, then an informative exception is raised.\n\u003c/p\u003e\u003cp\u003eExample uses:\n\u003c/p\u003e\u003cpre\u003e head' = $attach head (pNotNil \u003e-\u003e true)\n\u003c/pre\u003e\u003cpre\u003e nat :: (Integral a, Flat a) =\u003e Contract a\n nat = prop (\u003e=0)\n fibs = $assert (list nat) (0 : 1 : zipWith (+) fibs (tail fibs))\n\u003c/pre\u003e\u003cpre\u003e conjNF = $(p &#8217;And) conjNF conjNF |\u003e disj\n disj   = $(p &#8217;Or)  disj disj |\u003e lit\n lit    = $(p &#8217;Not) atom |\u003e atom\n atom   = $(p &#8217;Atom) true\n clausalNF' = $attach clausalNF (conjNF & right \u003e-\u003e list (list lit))\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.cs.kent.ac.uk/~oc/contracts.html\u003c/a\u003e\n or Olaf Chitil: Practical Typed Lazy Contracts, ICFP 2012, ACM.\n\u003c/p\u003e\u003cp\u003eAny user module will need Template Haskell.\n They will also need DeriveDataTypeable, if they use the deriving \n combinators for algebraic data types: \u003ccode\u003e\u003ca\u003ep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epNot\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ederiveContracts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "module",
        "fct-source": "src/Development-Contract.html",
        "fct-type": "module",
        "title": "Contract"
      },
      "index": {
        "description": "Practical typed lazy contracts Author Olaf Chitil Version July Contracts describe properties of expressions esp functions that are checked at run-time Thus these properties are both documented and enforced Contracts are more expressive than static types If contract is violated then an informative exception is raised Example uses head attach head pNotNil true nat Integral Flat Contract nat prop fibs assert list nat zipWith fibs tail fibs conjNF And conjNF conjNF disj disj Or disj disj lit lit Not atom atom atom Atom true clausalNF attach clausalNF conjNF right list list lit See http www.cs.kent.ac.uk oc contracts.html or Olaf Chitil Practical Typed Lazy Contracts ICFP ACM Any user module will need Template Haskell They will also need DeriveDataTypeable if they use the deriving combinators for algebraic data types pNot or deriveContracts",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Contract",
        "normalized": "",
        "package": "Contract",
        "partial": "Contract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Contract",
      "description": {
        "fct-descr": "\u003cp\u003eThe contract type.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "data",
        "fct-source": "src/Development-Contract.html#Contract",
        "fct-type": "data",
        "title": "Contract"
      },
      "index": {
        "description": "The contract type",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Contract",
        "normalized": "",
        "package": "Contract",
        "partial": "Contract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:ContractFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe exception raised when a contact fails.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "data",
        "fct-source": "src/Development-Contract.html#ContractFailed",
        "fct-type": "data",
        "title": "ContractFailed"
      },
      "index": {
        "description": "The exception raised when contact fails",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "ContractFailed",
        "normalized": "",
        "package": "Contract",
        "partial": "Contract Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Flat",
      "description": {
        "fct-descr": "\u003cp\u003eClass of all flat types, for which contract prop works.\n\u003c/p\u003e\u003cp\u003eA type is flat if its only partial value is bottom / undefined.\n In other words: an expression of the type is either unevaluted or\n fully evaluated, never properly partially evaluated.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "class",
        "fct-source": "src/Development-Contract.html#Flat",
        "fct-type": "class",
        "title": "Flat"
      },
      "index": {
        "description": "Class of all flat types for which contract prop works type is flat if its only partial value is bottom undefined In other words an expression of the type is either unevaluted or fully evaluated never properly partially evaluated",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Flat",
        "normalized": "",
        "package": "Contract",
        "partial": "Flat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Partner",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent contract partners. \n For any violated contract a partner is blamed.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "data",
        "fct-source": "src/Development-Contract.html#Partner",
        "fct-type": "data",
        "title": "Partner"
      },
      "index": {
        "description": "Different contract partners For any violated contract partner is blamed",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Partner",
        "normalized": "",
        "package": "Contract",
        "partial": "Partner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction of contracts, given priority to first.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract a -\u003e Contract a",
        "fct-source": "src/Development-Contract.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "Disjunction of contracts given priority to first",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "(|\u003e) |\u003e",
        "normalized": "Contract a-\u003eContract a-\u003eContract a",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract a-\u003eContract a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction of two contracts.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract a -\u003e Contract a",
        "fct-source": "src/Development-Contract.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Conjunction of two contracts",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "(&) &",
        "normalized": "Contract a-\u003eContract a-\u003eContract a",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract a-\u003eContract a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative name for \u003ccode\u003e\u003ca\u003epCons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract [a] -\u003e Contract [a]",
        "fct-source": "src/Development-Contract.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Alternative name for pCons",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "(=:) =:",
        "normalized": "Contract a-\u003eContract[a]-\u003eContract[a]",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract[a]-\u003eContract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eFunction contract combinator, taking contracts for pre- and post-condition.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract b -\u003e Contract (a -\u003e b)",
        "fct-source": "src/Development-Contract.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Function contract combinator taking contracts for pre and post-condition",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "Contract a-\u003eContract b-\u003eContract(a-\u003eb)",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract b-\u003eContract(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-62--62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eDependent function contract combinator.\n The post-condition also takes the function argument.\n Warning: This combinator does \u003cem\u003enot\u003c/em\u003e protect laziness!\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e (a -\u003e Contract b) -\u003e Contract (a -\u003e b)",
        "fct-source": "src/Development-Contract.html#%3E%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e\u003e-\u003e)"
      },
      "index": {
        "description": "Dependent function contract combinator The post-condition also takes the function argument Warning This combinator does not protect laziness",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "(\u003e\u003e-\u003e) \u003e\u003e-\u003e",
        "normalized": "Contract a-\u003e(a-\u003eContract b)-\u003eContract(a-\u003eb)",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003e(a-\u003eContract b)-\u003eContract(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Client",
      "description": {
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Client",
        "fct-source": "src/Development-Contract.html#Partner",
        "fct-type": "function",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Client",
        "normalized": "",
        "package": "Contract",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Contract",
      "description": {
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract",
        "fct-source": "src/Development-Contract.html#Partner",
        "fct-type": "function",
        "title": "Contract"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Contract",
        "normalized": "",
        "package": "Contract",
        "partial": "Contract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:ContractFailed",
      "description": {
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "ContractFailed",
        "fct-source": "src/Development-Contract.html#ContractFailed",
        "fct-type": "function",
        "title": "ContractFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "ContractFailed",
        "normalized": "",
        "package": "Contract",
        "partial": "Contract Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Server",
      "description": {
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Server",
        "fct-source": "src/Development-Contract.html#Partner",
        "fct-type": "function",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "Server",
        "normalized": "",
        "package": "Contract",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:assert",
      "description": {
        "fct-descr": "\u003cp\u003eConnect a contract with an expression.\n The resulting expression is the same except that the contract is\n monitored for it at runtime.\n assert splices in code that adds the current location in the module file.\n\u003c/p\u003e\u003cpre\u003e $assert :: Contract a -\u003e a -\u003e a\n\u003c/pre\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Q Exp",
        "fct-source": "src/Development-Contract.html#assert",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "Connect contract with an expression The resulting expression is the same except that the contract is monitored for it at runtime assert splices in code that adds the current location in the module file assert Contract",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "assert",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:attach",
      "description": {
        "fct-descr": "\u003cp\u003eSame as assert with arguments swapped.\n Useful for attaching contracts in simple variable definitions:\n fun' = $attach fun contract\n\u003c/p\u003e\u003cpre\u003e $attach :: a -\u003e Contract a -\u003e a\n\u003c/pre\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Q Exp",
        "fct-source": "src/Development-Contract.html#attach",
        "fct-type": "function",
        "title": "attach"
      },
      "index": {
        "description": "Same as assert with arguments swapped Useful for attaching contracts in simple variable definitions fun attach fun contract attach Contract",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "attach",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:culprit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Partner",
        "fct-source": "src/Development-Contract.html#ContractFailed",
        "fct-type": "function",
        "title": "culprit"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "culprit",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:deriveContracts",
      "description": {
        "fct-descr": "\u003cp\u003eFor a given algebraic data type \n declare pattern contracts for all constructors.\n The argument must be the name of an algebraic data type.\n E.g. $(deriveContracts ''Either)\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Development-Contract.html#deriveContracts",
        "fct-type": "function",
        "title": "deriveContracts"
      },
      "index": {
        "description": "For given algebraic data type declare pattern contracts for all constructors The argument must be the name of an algebraic data type E.g deriveContracts Either",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "deriveContracts",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "Contract",
        "partial": "Contracts",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:dropContext",
      "description": {
        "fct-descr": "\u003cp\u003eDrop context information in a contract to avoid unbound context growth.\n Can be wrapped around any context.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract a",
        "fct-source": "src/Development-Contract.html#dropContext",
        "fct-type": "function",
        "title": "dropContext"
      },
      "index": {
        "description": "Drop context information in contract to avoid unbound context growth Can be wrapped around any context",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "dropContext",
        "normalized": "Contract a-\u003eContract a",
        "package": "Contract",
        "partial": "Context",
        "signature": "Contract a-\u003eContract a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:explanation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "String",
        "fct-source": "src/Development-Contract.html#ContractFailed",
        "fct-type": "function",
        "title": "explanation"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "explanation",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:false",
      "description": {
        "fct-descr": "\u003cp\u003eContract that always fails, blaming the client.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a",
        "fct-source": "src/Development-Contract.html#false",
        "fct-type": "function",
        "title": "false"
      },
      "index": {
        "description": "Contract that always fails blaming the client",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "false",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for IO-monad with return value meeting given contract.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract (IO a)",
        "fct-source": "src/Development-Contract.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "Contract combinator for IO-monad with return value meeting given contract",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "io",
        "normalized": "Contract a-\u003eContract(IO a)",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract(IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for list with elements meeting given contract.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract [a]",
        "fct-source": "src/Development-Contract.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "Contract combinator for list with elements meeting given contract",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "list",
        "normalized": "Contract a-\u003eContract[a]",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:loc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Loc",
        "fct-source": "src/Development-Contract.html#ContractFailed",
        "fct-type": "function",
        "title": "loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "loc",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:maybe",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for type \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \n given contract for possible argument value. \n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract (Maybe a)",
        "fct-source": "src/Development-Contract.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "Contract combinator for type Maybe given contract for possible argument value",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "maybe",
        "normalized": "Contract a-\u003eContract(Maybe a)",
        "package": "Contract",
        "partial": "",
        "signature": "Contract a-\u003eContract(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:p",
      "description": {
        "fct-descr": "\u003cp\u003ePattern contract for given constructor.\n The argument must be the name of a data constructor.\n E.g. \n $(p 'Left)\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Development-Contract.html#p",
        "fct-type": "function",
        "title": "p"
      },
      "index": {
        "description": "Pattern contract for given constructor The argument must be the name of data constructor E.g Left",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "p",
        "normalized": "Name-\u003eExpQ",
        "package": "Contract",
        "partial": "",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pCons",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for non-empty list.\n Cf. (:) :: a -\u003e [a] -\u003e [a]\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract [a] -\u003e Contract [a]",
        "fct-source": "src/Development-Contract.html#pCons",
        "fct-type": "function",
        "title": "pCons"
      },
      "index": {
        "description": "Contract combinator for non-empty list Cf",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pCons",
        "normalized": "Contract a-\u003eContract[a]-\u003eContract[a]",
        "package": "Contract",
        "partial": "Cons",
        "signature": "Contract a-\u003eContract[a]-\u003eContract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pJust",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for data constructor \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n with value meeting given contract.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract (Maybe a)",
        "fct-source": "src/Development-Contract.html#pJust",
        "fct-type": "function",
        "title": "pJust"
      },
      "index": {
        "description": "Contract combinator for data constructor Just with value meeting given contract",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pJust",
        "normalized": "Contract a-\u003eContract(Maybe a)",
        "package": "Contract",
        "partial": "Just",
        "signature": "Contract a-\u003eContract(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNil",
      "description": {
        "fct-descr": "\u003cp\u003eContract for empty list.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract [a]",
        "fct-source": "src/Development-Contract.html#pNil",
        "fct-type": "function",
        "title": "pNil"
      },
      "index": {
        "description": "Contract for empty list",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNil",
        "normalized": "Contract[a]",
        "package": "Contract",
        "partial": "Nil",
        "signature": "Contract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNot",
      "description": {
        "fct-descr": "\u003cp\u003eNegated pattern contract for a given constructor.\n The argument must be the name of a data constructor.\n E.g. \n $(pNot 'Left)\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Development-Contract.html#pNot",
        "fct-type": "function",
        "title": "pNot"
      },
      "index": {
        "description": "Negated pattern contract for given constructor The argument must be the name of data constructor E.g pNot Left",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNot",
        "normalized": "Name-\u003eExpQ",
        "package": "Contract",
        "partial": "Not",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotCons",
      "description": {
        "fct-descr": "\u003cp\u003eContract for not non-empty list, i.e., empty list.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract [a]",
        "fct-source": "src/Development-Contract.html#pNotCons",
        "fct-type": "function",
        "title": "pNotCons"
      },
      "index": {
        "description": "Contract for not non-empty list i.e empty list",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNotCons",
        "normalized": "Contract[a]",
        "package": "Contract",
        "partial": "Not Cons",
        "signature": "Contract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotJust",
      "description": {
        "fct-descr": "\u003cp\u003eContract for non-\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract (Maybe a)",
        "fct-source": "src/Development-Contract.html#pNotJust",
        "fct-type": "function",
        "title": "pNotJust"
      },
      "index": {
        "description": "Contract for non Just value",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNotJust",
        "normalized": "",
        "package": "Contract",
        "partial": "Not Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotNil",
      "description": {
        "fct-descr": "\u003cp\u003eContract for non-empty list.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract [a]",
        "fct-source": "src/Development-Contract.html#pNotNil",
        "fct-type": "function",
        "title": "pNotNil"
      },
      "index": {
        "description": "Contract for non-empty list",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNotNil",
        "normalized": "Contract[a]",
        "package": "Contract",
        "partial": "Not Nil",
        "signature": "Contract[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotNothing",
      "description": {
        "fct-descr": "\u003cp\u003eContract for non-\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract (Maybe a)",
        "fct-source": "src/Development-Contract.html#pNotNothing",
        "fct-type": "function",
        "title": "pNotNothing"
      },
      "index": {
        "description": "Contract for non Nothing value",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNotNothing",
        "normalized": "",
        "package": "Contract",
        "partial": "Not Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNothing",
      "description": {
        "fct-descr": "\u003cp\u003eContract for data constructor \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract (Maybe a)",
        "fct-source": "src/Development-Contract.html#pNothing",
        "fct-type": "function",
        "title": "pNothing"
      },
      "index": {
        "description": "Contract for data constructor Nothing",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pNothing",
        "normalized": "",
        "package": "Contract",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple0",
      "description": {
        "fct-descr": "\u003cp\u003eContract for empty tuple.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract ()",
        "fct-source": "src/Development-Contract.html#pTuple0",
        "fct-type": "function",
        "title": "pTuple0"
      },
      "index": {
        "description": "Contract for empty tuple",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pTuple0",
        "normalized": "Contract()",
        "package": "Contract",
        "partial": "Tuple",
        "signature": "Contract()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple2",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for tuple with values meeting given contracts.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract b -\u003e Contract (a, b)",
        "fct-source": "src/Development-Contract.html#pTuple2",
        "fct-type": "function",
        "title": "pTuple2"
      },
      "index": {
        "description": "Contract combinator for tuple with values meeting given contracts",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pTuple2",
        "normalized": "Contract a-\u003eContract b-\u003eContract(a,b)",
        "package": "Contract",
        "partial": "Tuple",
        "signature": "Contract a-\u003eContract b-\u003eContract(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple3",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for 3-tuple with values meeting given contracts.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract b -\u003e Contract c -\u003e Contract (a, b, c)",
        "fct-source": "src/Development-Contract.html#pTuple3",
        "fct-type": "function",
        "title": "pTuple3"
      },
      "index": {
        "description": "Contract combinator for tuple with values meeting given contracts",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pTuple3",
        "normalized": "Contract a-\u003eContract b-\u003eContract c-\u003eContract(a,b,c)",
        "package": "Contract",
        "partial": "Tuple",
        "signature": "Contract a-\u003eContract b-\u003eContract c-\u003eContract(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple4",
      "description": {
        "fct-descr": "\u003cp\u003eContract combinator for 4-tuple with values meeting given contracts.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a -\u003e Contract b -\u003e Contract c -\u003e Contract d -\u003e Contract (a, b, c, d)",
        "fct-source": "src/Development-Contract.html#pTuple4",
        "fct-type": "function",
        "title": "pTuple4"
      },
      "index": {
        "description": "Contract combinator for tuple with values meeting given contracts",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "pTuple4",
        "normalized": "Contract a-\u003eContract b-\u003eContract c-\u003eContract d-\u003eContract(a,b,c,d)",
        "package": "Contract",
        "partial": "Tuple",
        "signature": "Contract a-\u003eContract b-\u003eContract c-\u003eContract d-\u003eContract(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:prop",
      "description": {
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "(a -\u003e Bool) -\u003e Contract a",
        "fct-source": "src/Development-Contract.html#prop",
        "fct-type": "method",
        "title": "prop"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "prop",
        "normalized": "(a-\u003eBool)-\u003eContract a",
        "package": "Contract",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eContract a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003eContract that always succeeds.\n\u003c/p\u003e",
        "fct-module": "Development.Contract",
        "fct-package": "Contract",
        "fct-signature": "Contract a",
        "fct-source": "src/Development-Contract.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "Contract that always succeeds",
        "hierarchy": "Development Contract",
        "module": "Development.Contract",
        "name": "true",
        "normalized": "",
        "package": "Contract",
        "partial": "",
        "signature": ""
      }
    }
  }
]