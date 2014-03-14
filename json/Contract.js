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
        "word": "Contract"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePractical typed lazy contracts.\n   Author: Olaf Chitil.\n   Version: July 2012.\n\u003c/p\u003e\u003cp\u003eContracts describe properties of expressions (esp. functions) that are\n checked at run-time.\n Thus these properties are both documented and enforced.\n Contracts are more expressive than static types.\n If a contract is violated, then an informative exception is raised.\n\u003c/p\u003e\u003cp\u003eExample uses:\n\u003c/p\u003e\u003cpre\u003e head' = $attach head (pNotNil \u003e-\u003e true)\n\u003c/pre\u003e\u003cpre\u003e nat :: (Integral a, Flat a) =\u003e Contract a\n nat = prop (\u003e=0)\n fibs = $assert (list nat) (0 : 1 : zipWith (+) fibs (tail fibs))\n\u003c/pre\u003e\u003cpre\u003e conjNF = $(p &#8217;And) conjNF conjNF |\u003e disj\n disj   = $(p &#8217;Or)  disj disj |\u003e lit\n lit    = $(p &#8217;Not) atom |\u003e atom\n atom   = $(p &#8217;Atom) true\n clausalNF' = $attach clausalNF (conjNF & right \u003e-\u003e list (list lit))\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.cs.kent.ac.uk/~oc/contracts.html\u003c/a\u003e\n or Olaf Chitil: Practical Typed Lazy Contracts, ICFP 2012, ACM.\n\u003c/p\u003e\u003cp\u003eAny user module will need Template Haskell.\n They will also need DeriveDataTypeable, if they use the deriving \n combinators for algebraic data types: \u003ccode\u003e\u003ca\u003ep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epNot\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ederiveContracts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "source": "src/Development-Contract.html",
          "type": "module"
        },
        "index": {
          "description": "Practical typed lazy contracts Author Olaf Chitil Version July Contracts describe properties of expressions esp functions that are checked at run-time Thus these properties are both documented and enforced Contracts are more expressive than static types If contract is violated then an informative exception is raised Example uses head attach head pNotNil true nat Integral Flat Contract nat prop fibs assert list nat zipWith fibs tail fibs conjNF And conjNF conjNF disj disj Or disj disj lit lit Not atom atom atom Atom true clausalNF attach clausalNF conjNF right list list lit See http www.cs.kent.ac.uk oc contracts.html or Olaf Chitil Practical Typed Lazy Contracts ICFP ACM Any user module will need Template Haskell They will also need DeriveDataTypeable if they use the deriving combinators for algebraic data types pNot or deriveContracts",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "partial": "Contract",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contract type.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "source": "src/Development-Contract.html#Contract",
          "type": "data"
        },
        "index": {
          "description": "The contract type",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "partial": "Contract",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Contract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exception raised when a contact fails.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "ContractFailed",
          "package": "Contract",
          "source": "src/Development-Contract.html#ContractFailed",
          "type": "data"
        },
        "index": {
          "description": "The exception raised when contact fails",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "ContractFailed",
          "package": "Contract",
          "partial": "Contract Failed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:ContractFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of all flat types, for which contract prop works.\n\u003c/p\u003e\u003cp\u003eA type is flat if its only partial value is bottom / undefined.\n In other words: an expression of the type is either unevaluted or\n fully evaluated, never properly partially evaluated.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "Flat",
          "package": "Contract",
          "source": "src/Development-Contract.html#Flat",
          "type": "class"
        },
        "index": {
          "description": "Class of all flat types for which contract prop works type is flat if its only partial value is bottom undefined In other words an expression of the type is either unevaluted or fully evaluated never properly partially evaluated",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Flat",
          "package": "Contract",
          "partial": "Flat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent contract partners. \n For any violated contract a partner is blamed.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "Partner",
          "package": "Contract",
          "source": "src/Development-Contract.html#Partner",
          "type": "data"
        },
        "index": {
          "description": "Different contract partners For any violated contract partner is blamed",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Partner",
          "package": "Contract",
          "partial": "Partner",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#t:Partner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction of contracts, given priority to first.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "(|\u003e)",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract a -\u003e Contract a",
          "source": "src/Development-Contract.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Disjunction of contracts given priority to first",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "(|\u003e) |\u003e",
          "normalized": "Contract a-\u003eContract a-\u003eContract a",
          "package": "Contract",
          "signature": "Contract a-\u003eContract a-\u003eContract a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction of two contracts.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "(&)",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract a -\u003e Contract a",
          "source": "src/Development-Contract.html#%26",
          "type": "function"
        },
        "index": {
          "description": "Conjunction of two contracts",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "(&) &",
          "normalized": "Contract a-\u003eContract a-\u003eContract a",
          "package": "Contract",
          "signature": "Contract a-\u003eContract a-\u003eContract a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative name for \u003ccode\u003e\u003ca\u003epCons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "(=:)",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract [a] -\u003e Contract [a]",
          "source": "src/Development-Contract.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Alternative name for pCons",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "(=:) =:",
          "normalized": "Contract a-\u003eContract[a]-\u003eContract[a]",
          "package": "Contract",
          "signature": "Contract a-\u003eContract[a]-\u003eContract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction contract combinator, taking contracts for pre- and post-condition.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "(\u003e-\u003e)",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract b -\u003e Contract (a -\u003e b)",
          "source": "src/Development-Contract.html#%3E-%3E",
          "type": "function"
        },
        "index": {
          "description": "Function contract combinator taking contracts for pre and post-condition",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "(\u003e-\u003e) \u003e-\u003e",
          "normalized": "Contract a-\u003eContract b-\u003eContract(a-\u003eb)",
          "package": "Contract",
          "signature": "Contract a-\u003eContract b-\u003eContract(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependent function contract combinator.\n The post-condition also takes the function argument.\n Warning: This combinator does \u003cem\u003enot\u003c/em\u003e protect laziness!\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "(\u003e\u003e-\u003e)",
          "package": "Contract",
          "signature": "Contract a -\u003e (a -\u003e Contract b) -\u003e Contract (a -\u003e b)",
          "source": "src/Development-Contract.html#%3E%3E-%3E",
          "type": "function"
        },
        "index": {
          "description": "Dependent function contract combinator The post-condition also takes the function argument Warning This combinator does not protect laziness",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "(\u003e\u003e-\u003e) \u003e\u003e-\u003e",
          "normalized": "Contract a-\u003e(a-\u003eContract b)-\u003eContract(a-\u003eb)",
          "package": "Contract",
          "signature": "Contract a-\u003e(a-\u003eContract b)-\u003eContract(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:-62--62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "Client",
          "package": "Contract",
          "signature": "Client",
          "source": "src/Development-Contract.html#Partner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Client",
          "package": "Contract",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "signature": "Contract",
          "source": "src/Development-Contract.html#Partner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Contract",
          "package": "Contract",
          "partial": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Contract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "ContractFailed",
          "package": "Contract",
          "signature": "ContractFailed",
          "source": "src/Development-Contract.html#ContractFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "ContractFailed",
          "package": "Contract",
          "partial": "Contract Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:ContractFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "Server",
          "package": "Contract",
          "signature": "Server",
          "source": "src/Development-Contract.html#Partner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "Server",
          "package": "Contract",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect a contract with an expression.\n The resulting expression is the same except that the contract is\n monitored for it at runtime.\n assert splices in code that adds the current location in the module file.\n\u003c/p\u003e\u003cpre\u003e $assert :: Contract a -\u003e a -\u003e a\n\u003c/pre\u003e",
          "module": "Development.Contract",
          "name": "assert",
          "package": "Contract",
          "signature": "Q Exp",
          "source": "src/Development-Contract.html#assert",
          "type": "function"
        },
        "index": {
          "description": "Connect contract with an expression The resulting expression is the same except that the contract is monitored for it at runtime assert splices in code that adds the current location in the module file assert Contract",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "assert",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as assert with arguments swapped.\n Useful for attaching contracts in simple variable definitions:\n fun' = $attach fun contract\n\u003c/p\u003e\u003cpre\u003e $attach :: a -\u003e Contract a -\u003e a\n\u003c/pre\u003e",
          "module": "Development.Contract",
          "name": "attach",
          "package": "Contract",
          "signature": "Q Exp",
          "source": "src/Development-Contract.html#attach",
          "type": "function"
        },
        "index": {
          "description": "Same as assert with arguments swapped Useful for attaching contracts in simple variable definitions fun attach fun contract attach Contract",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "attach",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "culprit",
          "package": "Contract",
          "signature": "Partner",
          "source": "src/Development-Contract.html#ContractFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "culprit",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:culprit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a given algebraic data type \n declare pattern contracts for all constructors.\n The argument must be the name of an algebraic data type.\n E.g. $(deriveContracts ''Either)\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "deriveContracts",
          "package": "Contract",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Development-Contract.html#deriveContracts",
          "type": "function"
        },
        "index": {
          "description": "For given algebraic data type declare pattern contracts for all constructors The argument must be the name of an algebraic data type E.g deriveContracts Either",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "deriveContracts",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "Contract",
          "partial": "Contracts",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:deriveContracts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop context information in a contract to avoid unbound context growth.\n Can be wrapped around any context.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "dropContext",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract a",
          "source": "src/Development-Contract.html#dropContext",
          "type": "function"
        },
        "index": {
          "description": "Drop context information in contract to avoid unbound context growth Can be wrapped around any context",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "dropContext",
          "normalized": "Contract a-\u003eContract a",
          "package": "Contract",
          "partial": "Context",
          "signature": "Contract a-\u003eContract a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:dropContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "explanation",
          "package": "Contract",
          "signature": "String",
          "source": "src/Development-Contract.html#ContractFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "explanation",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:explanation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract that always fails, blaming the client.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "false",
          "package": "Contract",
          "signature": "Contract a",
          "source": "src/Development-Contract.html#false",
          "type": "function"
        },
        "index": {
          "description": "Contract that always fails blaming the client",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "false",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for IO-monad with return value meeting given contract.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "io",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract (IO a)",
          "source": "src/Development-Contract.html#io",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for IO-monad with return value meeting given contract",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "io",
          "normalized": "Contract a-\u003eContract(IO a)",
          "package": "Contract",
          "signature": "Contract a-\u003eContract(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for list with elements meeting given contract.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "list",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract [a]",
          "source": "src/Development-Contract.html#list",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for list with elements meeting given contract",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "list",
          "normalized": "Contract a-\u003eContract[a]",
          "package": "Contract",
          "signature": "Contract a-\u003eContract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "loc",
          "package": "Contract",
          "signature": "Loc",
          "source": "src/Development-Contract.html#ContractFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "loc",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for type \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \n given contract for possible argument value. \n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "maybe",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract (Maybe a)",
          "source": "src/Development-Contract.html#maybe",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for type Maybe given contract for possible argument value",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "maybe",
          "normalized": "Contract a-\u003eContract(Maybe a)",
          "package": "Contract",
          "signature": "Contract a-\u003eContract(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern contract for given constructor.\n The argument must be the name of a data constructor.\n E.g. \n $(p 'Left)\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "p",
          "package": "Contract",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Development-Contract.html#p",
          "type": "function"
        },
        "index": {
          "description": "Pattern contract for given constructor The argument must be the name of data constructor E.g Left",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "p",
          "normalized": "Name-\u003eExpQ",
          "package": "Contract",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for non-empty list.\n Cf. (:) :: a -\u003e [a] -\u003e [a]\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pCons",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract [a] -\u003e Contract [a]",
          "source": "src/Development-Contract.html#pCons",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for non-empty list Cf",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pCons",
          "normalized": "Contract a-\u003eContract[a]-\u003eContract[a]",
          "package": "Contract",
          "partial": "Cons",
          "signature": "Contract a-\u003eContract[a]-\u003eContract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for data constructor \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n with value meeting given contract.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pJust",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract (Maybe a)",
          "source": "src/Development-Contract.html#pJust",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for data constructor Just with value meeting given contract",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pJust",
          "normalized": "Contract a-\u003eContract(Maybe a)",
          "package": "Contract",
          "partial": "Just",
          "signature": "Contract a-\u003eContract(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for empty list.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNil",
          "package": "Contract",
          "signature": "Contract [a]",
          "source": "src/Development-Contract.html#pNil",
          "type": "function"
        },
        "index": {
          "description": "Contract for empty list",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNil",
          "normalized": "Contract[a]",
          "package": "Contract",
          "partial": "Nil",
          "signature": "Contract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegated pattern contract for a given constructor.\n The argument must be the name of a data constructor.\n E.g. \n $(pNot 'Left)\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNot",
          "package": "Contract",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Development-Contract.html#pNot",
          "type": "function"
        },
        "index": {
          "description": "Negated pattern contract for given constructor The argument must be the name of data constructor E.g pNot Left",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNot",
          "normalized": "Name-\u003eExpQ",
          "package": "Contract",
          "partial": "Not",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for not non-empty list, i.e., empty list.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNotCons",
          "package": "Contract",
          "signature": "Contract [a]",
          "source": "src/Development-Contract.html#pNotCons",
          "type": "function"
        },
        "index": {
          "description": "Contract for not non-empty list i.e empty list",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNotCons",
          "normalized": "Contract[a]",
          "package": "Contract",
          "partial": "Not Cons",
          "signature": "Contract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for non-\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNotJust",
          "package": "Contract",
          "signature": "Contract (Maybe a)",
          "source": "src/Development-Contract.html#pNotJust",
          "type": "function"
        },
        "index": {
          "description": "Contract for non Just value",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNotJust",
          "package": "Contract",
          "partial": "Not Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for non-empty list.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNotNil",
          "package": "Contract",
          "signature": "Contract [a]",
          "source": "src/Development-Contract.html#pNotNil",
          "type": "function"
        },
        "index": {
          "description": "Contract for non-empty list",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNotNil",
          "normalized": "Contract[a]",
          "package": "Contract",
          "partial": "Not Nil",
          "signature": "Contract[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for non-\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNotNothing",
          "package": "Contract",
          "signature": "Contract (Maybe a)",
          "source": "src/Development-Contract.html#pNotNothing",
          "type": "function"
        },
        "index": {
          "description": "Contract for non Nothing value",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNotNothing",
          "package": "Contract",
          "partial": "Not Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNotNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for data constructor \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pNothing",
          "package": "Contract",
          "signature": "Contract (Maybe a)",
          "source": "src/Development-Contract.html#pNothing",
          "type": "function"
        },
        "index": {
          "description": "Contract for data constructor Nothing",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pNothing",
          "package": "Contract",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract for empty tuple.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pTuple0",
          "package": "Contract",
          "signature": "Contract ()",
          "source": "src/Development-Contract.html#pTuple0",
          "type": "function"
        },
        "index": {
          "description": "Contract for empty tuple",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pTuple0",
          "normalized": "Contract()",
          "package": "Contract",
          "partial": "Tuple",
          "signature": "Contract()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for tuple with values meeting given contracts.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pTuple2",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract b -\u003e Contract (a, b)",
          "source": "src/Development-Contract.html#pTuple2",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for tuple with values meeting given contracts",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pTuple2",
          "normalized": "Contract a-\u003eContract b-\u003eContract(a,b)",
          "package": "Contract",
          "partial": "Tuple",
          "signature": "Contract a-\u003eContract b-\u003eContract(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for 3-tuple with values meeting given contracts.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pTuple3",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract b -\u003e Contract c -\u003e Contract (a, b, c)",
          "source": "src/Development-Contract.html#pTuple3",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for tuple with values meeting given contracts",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pTuple3",
          "normalized": "Contract a-\u003eContract b-\u003eContract c-\u003eContract(a,b,c)",
          "package": "Contract",
          "partial": "Tuple",
          "signature": "Contract a-\u003eContract b-\u003eContract c-\u003eContract(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract combinator for 4-tuple with values meeting given contracts.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "pTuple4",
          "package": "Contract",
          "signature": "Contract a -\u003e Contract b -\u003e Contract c -\u003e Contract d -\u003e Contract (a, b, c, d)",
          "source": "src/Development-Contract.html#pTuple4",
          "type": "function"
        },
        "index": {
          "description": "Contract combinator for tuple with values meeting given contracts",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "pTuple4",
          "normalized": "Contract a-\u003eContract b-\u003eContract c-\u003eContract d-\u003eContract(a,b,c,d)",
          "package": "Contract",
          "partial": "Tuple",
          "signature": "Contract a-\u003eContract b-\u003eContract c-\u003eContract d-\u003eContract(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:pTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Contract",
          "name": "prop",
          "package": "Contract",
          "signature": "(a -\u003e Bool) -\u003e Contract a",
          "source": "src/Development-Contract.html#prop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "prop",
          "normalized": "(a-\u003eBool)-\u003eContract a",
          "package": "Contract",
          "signature": "(a-\u003eBool)-\u003eContract a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract that always succeeds.\n\u003c/p\u003e",
          "module": "Development.Contract",
          "name": "true",
          "package": "Contract",
          "signature": "Contract a",
          "source": "src/Development-Contract.html#true",
          "type": "function"
        },
        "index": {
          "description": "Contract that always succeeds",
          "hierarchy": "Development Contract",
          "module": "Development.Contract",
          "name": "true",
          "package": "Contract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Contract/docs/Development-Contract.html#v:true"
      }
    }
  ]
]