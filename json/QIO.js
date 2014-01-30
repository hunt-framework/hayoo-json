[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the definition of a Type Class that represents a Heap.\n In the context of QIO, a Heap is the type used to represent a classical \n basis state. An instance of a Heap is also defined, that makes use of a Map.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Heap.html",
        "fct-type": "module",
        "title": "Heap"
      },
      "index": {
        "description": "This module contains the definition of Type Class that represents Heap In the context of QIO Heap is the type used to represent classical basis state An instance of Heap is also defined that makes use of Map",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "QIO",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#t:Heap",
      "description": {
        "fct-descr": "\u003cp\u003eThe Heap Type Class\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "class",
        "fct-source": "src/QIO-Heap.html#Heap",
        "fct-type": "class",
        "title": "Heap"
      },
      "index": {
        "description": "The Heap Type Class",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "QIO",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#t:HeapMap",
      "description": {
        "fct-descr": "\u003cp\u003eHeapMap is simply a type synonym for a Map from Qubits to Boolean values\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "type",
        "fct-source": "src/QIO-Heap.html#HeapMap",
        "fct-type": "type",
        "title": "HeapMap"
      },
      "index": {
        "description": "HeapMap is simply type synonym for Map from Qubits to Boolean values",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "HeapMap",
        "normalized": "",
        "package": "QIO",
        "partial": "Heap Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value of the given Qubit in the Heap (if it exists)\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "h -\u003e Qbit -\u003e Maybe Bool",
        "fct-source": "src/QIO-Heap.html#%3F",
        "fct-type": "method",
        "title": "(?)"
      },
      "index": {
        "description": "Lookup the value of the given Qubit in the Heap if it exists",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "(?) ?",
        "normalized": "a-\u003eQbit-\u003eMaybe Bool",
        "package": "QIO",
        "partial": "",
        "signature": "h-\u003eQbit-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#v:forget",
      "description": {
        "fct-descr": "\u003cp\u003eremove the given Qubit from the Heap\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "h -\u003e Qbit -\u003e h",
        "fct-source": "src/QIO-Heap.html#forget",
        "fct-type": "method",
        "title": "forget"
      },
      "index": {
        "description": "remove the given Qubit from the Heap",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "forget",
        "normalized": "a-\u003eQbit-\u003ea",
        "package": "QIO",
        "partial": "",
        "signature": "h-\u003eQbit-\u003eh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#v:hswap",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the values associated with two Qubits within the Heap\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "h -\u003e Qbit -\u003e Qbit -\u003e h",
        "fct-source": "src/QIO-Heap.html#hswap",
        "fct-type": "method",
        "title": "hswap"
      },
      "index": {
        "description": "Swap the values associated with two Qubits within the Heap",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "hswap",
        "normalized": "a-\u003eQbit-\u003eQbit-\u003ea",
        "package": "QIO",
        "partial": "",
        "signature": "h-\u003eQbit-\u003eQbit-\u003eh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#v:initial",
      "description": {
        "fct-descr": "\u003cp\u003edefine an \u003ccode\u003e\u003ca\u003einitial\u003c/a\u003e\u003c/code\u003e (i.e. empty) Heap\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "h",
        "fct-source": "src/QIO-Heap.html#initial",
        "fct-type": "method",
        "title": "initial"
      },
      "index": {
        "description": "define an initial i.e empty Heap",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "initial",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Heap.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e the value of a Qubit within the Heap to the given Boolen value\n\u003c/p\u003e",
        "fct-module": "QIO.Heap",
        "fct-package": "QIO",
        "fct-signature": "h -\u003e Qbit -\u003e Bool -\u003e h",
        "fct-source": "src/QIO-Heap.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "update the value of Qubit within the Heap to the given Boolen value",
        "hierarchy": "QIO Heap",
        "module": "QIO.Heap",
        "name": "update",
        "normalized": "a-\u003eQbit-\u003eBool-\u003ea",
        "package": "QIO",
        "partial": "",
        "signature": "h-\u003eQbit-\u003eBool-\u003eh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains QIO unitaries that represent various Arithmetic \n functions. These are exactly the Arithmetic functions required to implement \n Shor's algorithm.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-QArith.html",
        "fct-type": "module",
        "title": "QArith"
      },
      "index": {
        "description": "This module contains QIO unitaries that represent various Arithmetic functions These are exactly the Arithmetic functions required to implement Shor algorithm",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "QArith",
        "normalized": "",
        "package": "QIO",
        "partial": "QArith",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:addBit",
      "description": {
        "fct-descr": "\u003cp\u003eA three-qubit adder.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#addBit",
        "fct-type": "function",
        "title": "addBit"
      },
      "index": {
        "description": "three-qubit adder",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "addBit",
        "normalized": "Qbit-\u003eQbit-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "Bit",
        "signature": "Qbit-\u003eQbit-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:addBits",
      "description": {
        "fct-descr": "\u003cp\u003euses the \u003ccode\u003e\u003ca\u003eaddBit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecarry\u003c/a\u003e\u003c/code\u003e unitaries to add the contents of two quantum\n registers, setting an overflow bit if necessary. This unitary makes use of a\n letU construct to introduce ancilla bits as necessary.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "[Qbit] -\u003e [Qbit] -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#addBits",
        "fct-type": "function",
        "title": "addBits"
      },
      "index": {
        "description": "uses the addBit and carry unitaries to add the contents of two quantum registers setting an overflow bit if necessary This unitary makes use of letU construct to introduce ancilla bits as necessary",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "addBits",
        "normalized": "[Qbit]-\u003e[Qbit]-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "Bits",
        "signature": "[Qbit]-\u003e[Qbit]-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:addBits-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate implementation of \u003ccode\u003e\u003ca\u003eaddBits\u003c/a\u003e\u003c/code\u003e that is explicitly given\n a register of ancilla qubits for all the intermediate \u003ccode\u003e\u003ca\u003ecarry\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "[Qbit] -\u003e [Qbit] -\u003e [Qbit] -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#addBits%27",
        "fct-type": "function",
        "title": "addBits'"
      },
      "index": {
        "description": "An alternate implementation of addBits that is explicitly given register of ancilla qubits for all the intermediate carry results",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "addBits'",
        "normalized": "[Qbit]-\u003e[Qbit]-\u003e[Qbit]-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "Bits'",
        "signature": "[Qbit]-\u003e[Qbit]-\u003e[Qbit]-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:adder",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the QIO unitary that adds two QInts, with an overflow qubit \n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "QInt -\u003e QInt -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#adder",
        "fct-type": "function",
        "title": "adder"
      },
      "index": {
        "description": "Defines the QIO unitary that adds two QInts with an overflow qubit",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "adder",
        "normalized": "QInt-\u003eQInt-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "QInt-\u003eQInt-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:adderMod",
      "description": {
        "fct-descr": "\u003cp\u003eThis unitary is for modular addition, and is done modulo some fixed\n classical modulus, given as the first Int argument.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QInt -\u003e QInt -\u003e U",
        "fct-source": "src/QIO-QArith.html#adderMod",
        "fct-type": "function",
        "title": "adderMod"
      },
      "index": {
        "description": "This unitary is for modular addition and is done modulo some fixed classical modulus given as the first Int argument",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "adderMod",
        "normalized": "Int-\u003eQInt-\u003eQInt-\u003eU",
        "package": "QIO",
        "partial": "Mod",
        "signature": "Int-\u003eQInt-\u003eQInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:carry",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the carry (qu)bit. \n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e Qbit -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#carry",
        "fct-type": "function",
        "title": "carry"
      },
      "index": {
        "description": "Calculates the carry qu bit",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "carry",
        "normalized": "Qbit-\u003eQbit-\u003eQbit-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQbit-\u003eQbit-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:cnot",
      "description": {
        "fct-descr": "\u003cp\u003eA controlled-not operations, that applies a Not to the second qubit, \n depending on the state of the first qubit.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QArith.html#cnot",
        "fct-type": "function",
        "title": "cnot"
      },
      "index": {
        "description": "controlled-not operations that applies Not to the second qubit depending on the state of the first qubit",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "cnot",
        "normalized": "Qbit-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:condMultMod",
      "description": {
        "fct-descr": "\u003cp\u003eA unitary that adds a single qubit control to modular multiplication\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Int -\u003e Int -\u003e QInt -\u003e QInt -\u003e U",
        "fct-source": "src/QIO-QArith.html#condMultMod",
        "fct-type": "function",
        "title": "condMultMod"
      },
      "index": {
        "description": "unitary that adds single qubit control to modular multiplication",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "condMultMod",
        "normalized": "Qbit-\u003eInt-\u003eInt-\u003eQInt-\u003eQInt-\u003eU",
        "package": "QIO",
        "partial": "Mult Mod",
        "signature": "Qbit-\u003eInt-\u003eInt-\u003eQInt-\u003eQInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:ifElseQ",
      "description": {
        "fct-descr": "\u003cp\u003eifElseQ defines a quantum If statement, whereby depending on the state of\n the given (control) qubit, one of two unitaries are applied.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e U -\u003e U -\u003e U",
        "fct-source": "src/QIO-QArith.html#ifElseQ",
        "fct-type": "function",
        "title": "ifElseQ"
      },
      "index": {
        "description": "ifElseQ defines quantum If statement whereby depending on the state of the given control qubit one of two unitaries are applied",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "ifElseQ",
        "normalized": "Qbit-\u003eU-\u003eU-\u003eU",
        "package": "QIO",
        "partial": "Else",
        "signature": "Qbit-\u003eU-\u003eU-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:ifQ",
      "description": {
        "fct-descr": "\u003cp\u003eifQ defines a special case of ifElseQ, where the Else part of the computation\n is simply the identity.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e U -\u003e U",
        "fct-source": "src/QIO-QArith.html#ifQ",
        "fct-type": "function",
        "title": "ifQ"
      },
      "index": {
        "description": "ifQ defines special case of ifElseQ where the Else part of the computation is simply the identity",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "ifQ",
        "normalized": "Qbit-\u003eU-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eU-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:inverseMod",
      "description": {
        "fct-descr": "\u003cp\u003eA classical Haskell function that returns the smalles positive inverse\n of a `mod n (if one exists). That is, the smallest positive integer\n x, such that x*a \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e n equals 1. \n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/QIO-QArith.html#inverseMod",
        "fct-type": "function",
        "title": "inverseMod"
      },
      "index": {
        "description": "classical Haskell function that returns the smalles positive inverse of mod if one exists That is the smallest positive integer such that mod equals",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "inverseMod",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "QIO",
        "partial": "Mod",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:modExp",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines a unitary that implements modular exponentiation, as\n required in Shor's algorithm. Given classical arguments n and a, a quantum\n register containg x, and a quantum register o in state 1, this unitary will \n leave the quantum register o in the state a^x mod n.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e QInt -\u003e QInt -\u003e U",
        "fct-source": "src/QIO-QArith.html#modExp",
        "fct-type": "function",
        "title": "modExp"
      },
      "index": {
        "description": "This function defines unitary that implements modular exponentiation as required in Shor algorithm Given classical arguments and quantum register containg and quantum register in state this unitary will leave the quantum register in the state mod",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "modExp",
        "normalized": "Int-\u003eInt-\u003eQInt-\u003eQInt-\u003eU",
        "package": "QIO",
        "partial": "Exp",
        "signature": "Int-\u003eInt-\u003eQInt-\u003eQInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:modExpStep",
      "description": {
        "fct-descr": "\u003cp\u003eThe unitary that represents modular exponentiation is constructed in terms\n of multiple \"steps\". This function defines those steps.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Int -\u003e Int -\u003e QInt -\u003e Int -\u003e U",
        "fct-source": "src/QIO-QArith.html#modExpStep",
        "fct-type": "function",
        "title": "modExpStep"
      },
      "index": {
        "description": "The unitary that represents modular exponentiation is constructed in terms of multiple steps This function defines those steps",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "modExpStep",
        "normalized": "Qbit-\u003eInt-\u003eInt-\u003eQInt-\u003eInt-\u003eU",
        "package": "QIO",
        "partial": "Exp Step",
        "signature": "Qbit-\u003eInt-\u003eInt-\u003eQInt-\u003eInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:modExpStept",
      "description": {
        "fct-descr": "\u003cp\u003eA QIO computation that forms a test of the \u003ccode\u003e\u003ca\u003emodExpStep\u003c/a\u003e\u003c/code\u003e unitary\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e QIO Int",
        "fct-source": "src/QIO-QArith.html#modExpStept",
        "fct-type": "function",
        "title": "modExpStept"
      },
      "index": {
        "description": "QIO computation that forms test of the modExpStep unitary",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "modExpStept",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eQIO Int",
        "package": "QIO",
        "partial": "Exp Stept",
        "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:modExpt",
      "description": {
        "fct-descr": "\u003cp\u003eA QIO computation that forms a test of the modular exponentiation unitary.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e (Int, Int) -\u003e QIO Int",
        "fct-source": "src/QIO-QArith.html#modExpt",
        "fct-type": "function",
        "title": "modExpt"
      },
      "index": {
        "description": "QIO computation that forms test of the modular exponentiation unitary",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "modExpt",
        "normalized": "Int-\u003e(Int,Int)-\u003eQIO Int",
        "package": "QIO",
        "partial": "Expt",
        "signature": "Int-\u003e(Int,Int)-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:multMod",
      "description": {
        "fct-descr": "\u003cp\u003eThis unitary defines modular multiplication, whereby the integer \u003ccode\u003en\u003c/code\u003e is the\n the modulus, and the integer \u003ccode\u003ea\u003c/code\u003e is the scalar by which to multiply the quantum\n integer \u003ccode\u003ex\u003c/code\u003e. The result is added to the quantum integer \u003ccode\u003ey\u003c/code\u003e, ie. if \u003ccode\u003ey\u003c/code\u003e is in \n state 0 before the operation, then it is left in the sate a*x mod n.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e QInt -\u003e QInt -\u003e U",
        "fct-source": "src/QIO-QArith.html#multMod",
        "fct-type": "function",
        "title": "multMod"
      },
      "index": {
        "description": "This unitary defines modular multiplication whereby the integer is the the modulus and the integer is the scalar by which to multiply the quantum integer The result is added to the quantum integer ie if is in state before the operation then it is left in the sate mod",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "multMod",
        "normalized": "Int-\u003eInt-\u003eQInt-\u003eQInt-\u003eU",
        "package": "QIO",
        "partial": "Mod",
        "signature": "Int-\u003eInt-\u003eQInt-\u003eQInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:swapQInt",
      "description": {
        "fct-descr": "\u003cp\u003eA swap operation can be applied to two QInts, by mapping qubit swap operations\n over the underlying qubits that make up a QInt.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "QInt -\u003e QInt -\u003e U",
        "fct-source": "src/QIO-QArith.html#swapQInt",
        "fct-type": "function",
        "title": "swapQInt"
      },
      "index": {
        "description": "swap operation can be applied to two QInts by mapping qubit swap operations over the underlying qubits that make up QInt",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "swapQInt",
        "normalized": "QInt-\u003eQInt-\u003eU",
        "package": "QIO",
        "partial": "QInt",
        "signature": "QInt-\u003eQInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:tBiAdder",
      "description": {
        "fct-descr": "\u003cp\u003eA small function to test applying the adder unitary, and then applying\n the reverse of the adder unitary, which should give the identity function.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "(Int, (Int, Bool)) -\u003e QIO (Int, (Int, Bool))",
        "fct-source": "src/QIO-QArith.html#tBiAdder",
        "fct-type": "function",
        "title": "tBiAdder"
      },
      "index": {
        "description": "small function to test applying the adder unitary and then applying the reverse of the adder unitary which should give the identity function",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "tBiAdder",
        "normalized": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))",
        "package": "QIO",
        "partial": "Bi Adder",
        "signature": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:tRadder",
      "description": {
        "fct-descr": "\u003cp\u003eA small function to test applying the adder unitary in reverse, ie.\n this defines subtraction.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "(Int, (Int, Bool)) -\u003e QIO (Int, (Int, Bool))",
        "fct-source": "src/QIO-QArith.html#tRadder",
        "fct-type": "function",
        "title": "tRadder"
      },
      "index": {
        "description": "small function to test applying the adder unitary in reverse ie this defines subtraction",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "tRadder",
        "normalized": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))",
        "package": "QIO",
        "partial": "Radder",
        "signature": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:tadder",
      "description": {
        "fct-descr": "\u003cp\u003eA small function to test the adder unitary\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "(Int, (Int, Bool)) -\u003e QIO (Int, (Int, Bool))",
        "fct-source": "src/QIO-QArith.html#tadder",
        "fct-type": "function",
        "title": "tadder"
      },
      "index": {
        "description": "small function to test the adder unitary",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "tadder",
        "normalized": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))",
        "package": "QIO",
        "partial": "",
        "signature": "(Int,(Int,Bool))-\u003eQIO(Int,(Int,Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:tadderMod",
      "description": {
        "fct-descr": "\u003cp\u003eA small function to test the modular addition unitary.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e (Int, Int) -\u003e QIO (Int, Int)",
        "fct-source": "src/QIO-QArith.html#tadderMod",
        "fct-type": "function",
        "title": "tadderMod"
      },
      "index": {
        "description": "small function to test the modular addition unitary",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "tadderMod",
        "normalized": "Int-\u003e(Int,Int)-\u003eQIO(Int,Int)",
        "package": "QIO",
        "partial": "Mod",
        "signature": "Int-\u003e(Int,Int)-\u003eQIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QArith.html#v:tmultMod",
      "description": {
        "fct-descr": "\u003cp\u003eA small function for testing the modular multiplication unitary. This function\n initialises \u003ccode\u003ey\u003c/code\u003e as zero, so the output is as expected.\n\u003c/p\u003e",
        "fct-module": "QIO.QArith",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e QIO (Int, Int)",
        "fct-source": "src/QIO-QArith.html#tmultMod",
        "fct-type": "function",
        "title": "tmultMod"
      },
      "index": {
        "description": "small function for testing the modular multiplication unitary This function initialises as zero so the output is as expected",
        "hierarchy": "QIO QArith",
        "module": "QIO.QArith",
        "name": "tmultMod",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eQIO(Int,Int)",
        "package": "QIO",
        "partial": "Mod",
        "signature": "Int-\u003eInt-\u003eInt-\u003eQIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains some simple examples of quantum computations written\n using the Quantum IO Monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-QExamples.html",
        "fct-type": "module",
        "title": "QExamples"
      },
      "index": {
        "description": "This module contains some simple examples of quantum computations written using the Quantum IO Monad",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "QExamples",
        "normalized": "",
        "package": "QIO",
        "partial": "QExamples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:alice",
      "description": {
        "fct-descr": "\u003cp\u003eThe operations that Alice must perform in the classic quantum teleportation\n example.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e QIO (Bool, Bool)",
        "fct-source": "src/QIO-QExamples.html#alice",
        "fct-type": "function",
        "title": "alice"
      },
      "index": {
        "description": "The operations that Alice must perform in the classic quantum teleportation example",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "alice",
        "normalized": "Qbit-\u003eQbit-\u003eQIO(Bool,Bool)",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQbit-\u003eQIO(Bool,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:bell",
      "description": {
        "fct-descr": "\u003cp\u003eA Bell state can be created by sharing the |+\u003e state\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO (Qbit, Qbit)",
        "fct-source": "src/QIO-QExamples.html#bell",
        "fct-type": "function",
        "title": "bell"
      },
      "index": {
        "description": "Bell state can be created by sharing the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "bell",
        "normalized": "QIO(Qbit,Qbit)",
        "package": "QIO",
        "partial": "",
        "signature": "QIO(Qbit,Qbit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:bob",
      "description": {
        "fct-descr": "\u003cp\u003eThe overall operations that Bob must perform in the classic quantum\n teleportation example\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e (Bool, Bool) -\u003e QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#bob",
        "fct-type": "function",
        "title": "bob"
      },
      "index": {
        "description": "The overall operations that Bob must perform in the classic quantum teleportation example",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "bob",
        "normalized": "Qbit-\u003e(Bool,Bool)-\u003eQIO Qbit",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003e(Bool,Bool)-\u003eQIO Qbit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:bobsU",
      "description": {
        "fct-descr": "\u003cp\u003eThe unitary operations that Bob must perform in the classic quantum\n teleportation example.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "(Bool, Bool) -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QExamples.html#bobsU",
        "fct-type": "function",
        "title": "bobsU"
      },
      "index": {
        "description": "The unitary operations that Bob must perform in the classic quantum teleportation example",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "bobsU",
        "normalized": "(Bool,Bool)-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "(Bool,Bool)-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:deutsch",
      "description": {
        "fct-descr": "\u003cp\u003eDeutsch's algorithm takes an \u003ca\u003eoracle\u003c/a\u003e function, and returns a Boolean\n that states whether the given function is balanced, or consant.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "(Bool -\u003e Bool) -\u003e QIO Bool",
        "fct-source": "src/QIO-QExamples.html#deutsch",
        "fct-type": "function",
        "title": "deutsch"
      },
      "index": {
        "description": "Deutsch algorithm takes an oracle function and returns Boolean that states whether the given function is balanced or consant",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "deutsch",
        "normalized": "(Bool-\u003eBool)-\u003eQIO Bool",
        "package": "QIO",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eQIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:hadTwice",
      "description": {
        "fct-descr": "\u003cp\u003eThis function initiaslised a qubit in the state corresponding to the given\n Boolean value. The Hadamard transform (which is self-inverse) is applied to\n the qubit twice, and then the qubit is measured. This should correspond to\n the identity function on the given Boolean value.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e QIO Bool",
        "fct-source": "src/QIO-QExamples.html#hadTwice",
        "fct-type": "function",
        "title": "hadTwice"
      },
      "index": {
        "description": "This function initiaslised qubit in the state corresponding to the given Boolean value The Hadamard transform which is self-inverse is applied to the qubit twice and then the qubit is measured This should correspond to the identity function on the given Boolean value",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "hadTwice",
        "normalized": "Bool-\u003eQIO Bool",
        "package": "QIO",
        "partial": "Twice",
        "signature": "Bool-\u003eQIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:hadTwice-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA different implementation of \u003ccode\u003e\u003ca\u003ehadTwice\u003c/a\u003e\u003c/code\u003e where QIO is used to apply two\n unitaries, each of which is a single Hadamard gate, as opposed to a single\n unitary, which is two Hadamard gates. \n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e QIO Bool",
        "fct-source": "src/QIO-QExamples.html#hadTwice%27",
        "fct-type": "function",
        "title": "hadTwice'"
      },
      "index": {
        "description": "different implementation of hadTwice where QIO is used to apply two unitaries each of which is single Hadamard gate as opposed to single unitary which is two Hadamard gates",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "hadTwice'",
        "normalized": "Bool-\u003eQIO Bool",
        "package": "QIO",
        "partial": "Twice'",
        "signature": "Bool-\u003eQIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:problem",
      "description": {
        "fct-descr": "\u003cp\u003eA test QIO computation that is infinite in one measurement path. This is\n a problem if we try to calculate the probability distribution of possible\n results, as the infinite path will be followed.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Bool",
        "fct-source": "src/QIO-QExamples.html#problem",
        "fct-type": "function",
        "title": "problem"
      },
      "index": {
        "description": "test QIO computation that is infinite in one measurement path This is problem if we try to calculate the probability distribution of possible results as the infinite path will be followed",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "problem",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:q0",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a qubit in the |0\u003e state\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#q0",
        "fct-type": "function",
        "title": "q0"
      },
      "index": {
        "description": "Initialise qubit in the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "q0",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:q1",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a qubit in the |1\u003e state\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#q1",
        "fct-type": "function",
        "title": "q1"
      },
      "index": {
        "description": "Initialise qubit in the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "q1",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:qMinus",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a qubit in the |-\u003e state. This is done by applying a Hadamard\n gate to the |1\u003e state.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#qMinus",
        "fct-type": "function",
        "title": "qMinus"
      },
      "index": {
        "description": "Initialise qubit in the state This is done by applying Hadamard gate to the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "qMinus",
        "normalized": "",
        "package": "QIO",
        "partial": "Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:qPlus",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a qubit in the |+\u003e state. This is done by applying a Hadamard\n gate to the |0\u003e state.    \n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#qPlus",
        "fct-type": "function",
        "title": "qPlus"
      },
      "index": {
        "description": "Initialise qubit in the state This is done by applying Hadamard gate to the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "qPlus",
        "normalized": "",
        "package": "QIO",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:randBit",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a random Boolean value, by measuring the state |+\u003e \n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Bool",
        "fct-source": "src/QIO-QExamples.html#randBit",
        "fct-type": "function",
        "title": "randBit"
      },
      "index": {
        "description": "Create random Boolean value by measuring the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "randBit",
        "normalized": "",
        "package": "QIO",
        "partial": "Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eThis function can be used to \u003ca\u003eshare\u003c/a\u003e the state of one qubit, with another\n newly initialised qubit. This is not the same as \u003ca\u003ecloning\u003c/a\u003e, as the two qubits\n will be in an entangled state. \u003ca\u003esharing\u003c/a\u003e is achieved by simply initialising\n a new qubit in state |0\u003e, and then applying a controlled-not to that qubit, \n depending on the state of the given qubit.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "This function can be used to share the state of one qubit with another newly initialised qubit This is not the same as cloning as the two qubits will be in an entangled state sharing is achieved by simply initialising new qubit in state and then applying controlled-not to that qubit depending on the state of the given qubit",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "share",
        "normalized": "Qbit-\u003eQIO Qbit",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQIO Qbit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:teleport_random",
      "description": {
        "fct-descr": "\u003cp\u003eteleports a qubit in the state |+\u003e, and then measures it.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Bool",
        "fct-source": "src/QIO-QExamples.html#teleport_random",
        "fct-type": "function",
        "title": "teleport_random"
      },
      "index": {
        "description": "teleports qubit in the state and then measures it",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "teleport_random",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:teleport_random-39-",
      "description": {
        "fct-descr": "\u003cp\u003eteleports a qubit in the state |+\u003e\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#teleport_random%27",
        "fct-type": "function",
        "title": "teleport_random'"
      },
      "index": {
        "description": "teleports qubit in the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "teleport_random'",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:teleport_true",
      "description": {
        "fct-descr": "\u003cp\u003eteleports a qubit in the state |1\u003e, and then measures it\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Bool",
        "fct-source": "src/QIO-QExamples.html#teleport_true",
        "fct-type": "function",
        "title": "teleport_true"
      },
      "index": {
        "description": "teleports qubit in the state and then measures it",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "teleport_true",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:teleport_true-39-",
      "description": {
        "fct-descr": "\u003cp\u003eteleports a qubit in the state |1\u003e\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#teleport_true%27",
        "fct-type": "function",
        "title": "teleport_true'"
      },
      "index": {
        "description": "teleports qubit in the state",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "teleport_true'",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:teleportation",
      "description": {
        "fct-descr": "\u003cp\u003eThe overall QIO computation that teleports the state of single qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e QIO Qbit",
        "fct-source": "src/QIO-QExamples.html#teleportation",
        "fct-type": "function",
        "title": "teleportation"
      },
      "index": {
        "description": "The overall QIO computation that teleports the state of single qubit",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "teleportation",
        "normalized": "Qbit-\u003eQIO Qbit",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQIO Qbit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:test_bell",
      "description": {
        "fct-descr": "\u003cp\u003eThis function creates a Bell state, and then measures it. The resulting pair\n of Booleans will always be in the same state as one another.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO (Bool, Bool)",
        "fct-source": "src/QIO-QExamples.html#test_bell",
        "fct-type": "function",
        "title": "test_bell"
      },
      "index": {
        "description": "This function creates Bell state and then measures it The resulting pair of Booleans will always be in the same state as one another",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "test_bell",
        "normalized": "QIO(Bool,Bool)",
        "package": "QIO",
        "partial": "",
        "signature": "QIO(Bool,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:test_teleport",
      "description": {
        "fct-descr": "\u003cp\u003eA small test function of quantum teleportation, which teleports a\n bell state, and then measures it.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "QIO (Bool, Bool)",
        "fct-source": "src/QIO-QExamples.html#test_teleport",
        "fct-type": "function",
        "title": "test_teleport"
      },
      "index": {
        "description": "small test function of quantum teleportation which teleports bell state and then measures it",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "test_teleport",
        "normalized": "QIO(Bool,Bool)",
        "package": "QIO",
        "partial": "",
        "signature": "QIO(Bool,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:u",
      "description": {
        "fct-descr": "\u003cp\u003eThe implementation of Deutsch's algorithm requires a unitary to represent\n the \u003ca\u003eoracle\u003c/a\u003e function.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "(Bool -\u003e Bool) -\u003e Qbit -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QExamples.html#u",
        "fct-type": "function",
        "title": "u"
      },
      "index": {
        "description": "The implementation of Deutsch algorithm requires unitary to represent the oracle function",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "u",
        "normalized": "(Bool-\u003eBool)-\u003eQbit-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "(Bool-\u003eBool)-\u003eQbit-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QExamples.html#v:uZZ",
      "description": {
        "fct-descr": "\u003cp\u003eA definition of the Pauli-Z gate.\n\u003c/p\u003e",
        "fct-module": "QIO.QExamples",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e U",
        "fct-source": "src/QIO-QExamples.html#uZZ",
        "fct-type": "function",
        "title": "uZZ"
      },
      "index": {
        "description": "definition of the Pauli-Z gate",
        "hierarchy": "QIO QExamples",
        "module": "QIO.QExamples",
        "name": "uZZ",
        "normalized": "Qbit-\u003eU",
        "package": "QIO",
        "partial": "ZZ",
        "signature": "Qbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements various functions that return a probabilistic result, \n defined as unitary operators, and quantum computations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-QIORandom.html",
        "fct-type": "module",
        "title": "QIORandom"
      },
      "index": {
        "description": "This module implements various functions that return probabilistic result defined as unitary operators and quantum computations",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "QIORandom",
        "normalized": "",
        "package": "QIO",
        "partial": "QIORandom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:dice",
      "description": {
        "fct-descr": "\u003cp\u003eThis function uses a Quantum computation to simulate the roll of a dice\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "IO Int",
        "fct-source": "src/QIO-QIORandom.html#dice",
        "fct-type": "function",
        "title": "dice"
      },
      "index": {
        "description": "This function uses Quantum computation to simulate the roll of dice",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "dice",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:dice_rolls",
      "description": {
        "fct-descr": "\u003cp\u003eThis function simulates the given number of repitions of dice rolls\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e IO [Int]",
        "fct-source": "src/QIO-QIORandom.html#dice_rolls",
        "fct-type": "function",
        "title": "dice_rolls"
      },
      "index": {
        "description": "This function simulates the given number of repitions of dice rolls",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "dice_rolls",
        "normalized": "Int-\u003eIO[Int]",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eIO[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:hadamards",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a Hadamard rotation to each qubit in the given list of qubits\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "[Qbit] -\u003e U",
        "fct-source": "src/QIO-QIORandom.html#hadamards",
        "fct-type": "function",
        "title": "hadamards"
      },
      "index": {
        "description": "Applies Hadamard rotation to each qubit in the given list of qubits",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "hadamards",
        "normalized": "[Qbit]-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "[Qbit]-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:occs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of occurences of 1 through 6 in the given list of Ints\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "[Int] -\u003e (Int, Int, Int, Int, Int, Int)",
        "fct-source": "src/QIO-QIORandom.html#occs",
        "fct-type": "function",
        "title": "occs"
      },
      "index": {
        "description": "Returns the number of occurences of through in the given list of Ints",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "occs",
        "normalized": "[Int]-\u003e(Int,Int,Int,Int,Int,Int)",
        "package": "QIO",
        "partial": "",
        "signature": "[Int]-\u003e(Int,Int,Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:pow2",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the highest integer power of 2 that is less than or equal to x\\\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/QIO-QIORandom.html#pow2",
        "fct-type": "function",
        "title": "pow2"
      },
      "index": {
        "description": "returns the highest integer power of that is less than or equal to",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "pow2",
        "normalized": "Int-\u003eInt",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:probs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the percentage of occurences of 1 through 6, after the given number\n of rolls of the dice.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e IO (RR, RR, RR, RR, RR, RR)",
        "fct-source": "src/QIO-QIORandom.html#probs",
        "fct-type": "function",
        "title": "probs"
      },
      "index": {
        "description": "Returns the percentage of occurences of through after the given number of rolls of the dice",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "probs",
        "normalized": "Int-\u003eIO(RR,RR,RR,RR,RR,RR)",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eIO(RR,RR,RR,RR,RR,RR)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:probs-39-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of occurences of 1 through 6 in the given number of\n rolls of the dice.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e IO (Int, Int, Int, Int, Int, Int)",
        "fct-source": "src/QIO-QIORandom.html#probs%27",
        "fct-type": "function",
        "title": "probs'"
      },
      "index": {
        "description": "Returns the number of occurences of through in the given number of rolls of the dice",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "probs'",
        "normalized": "Int-\u003eIO(Int,Int,Int,Int,Int,Int)",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eIO(Int,Int,Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:rX",
      "description": {
        "fct-descr": "\u003cp\u003eThe exponentiated Pauli-X rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e Rotation",
        "fct-source": "src/QIO-QIORandom.html#rX",
        "fct-type": "function",
        "title": "rX"
      },
      "index": {
        "description": "The exponentiated Pauli-X rotation",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "rX",
        "normalized": "RR-\u003eRotation",
        "package": "QIO",
        "partial": "",
        "signature": "RR-\u003eRotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:rY",
      "description": {
        "fct-descr": "\u003cp\u003eThe exponentiated Pauli-Y rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e Rotation",
        "fct-source": "src/QIO-QIORandom.html#rY",
        "fct-type": "function",
        "title": "rY"
      },
      "index": {
        "description": "The exponentiated Pauli-Y rotation",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "rY",
        "normalized": "RR-\u003eRotation",
        "package": "QIO",
        "partial": "",
        "signature": "RR-\u003eRotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:random",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum computation that returns an integer that is equally likely to be\n any number in the range 0 to x-1\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO Int",
        "fct-source": "src/QIO-QIORandom.html#random",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "quantum computation that returns an integer that is equally likely to be any number in the range to x-1",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "random",
        "normalized": "Int-\u003eQIO Int",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:randomInt",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum computation that measures the outcome of \u003ca\u003erandomQInt\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO Int",
        "fct-source": "src/QIO-QIORandom.html#randomInt",
        "fct-type": "function",
        "title": "randomInt"
      },
      "index": {
        "description": "quantum computation that measures the outcome of randomQInt",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "randomInt",
        "normalized": "Int-\u003eQIO Int",
        "package": "QIO",
        "partial": "Int",
        "signature": "Int-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:randomQIO",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum computation that will return a quantum integer in a state that\n has equal probabilities of being measured in any of the state min to max.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "(Int, Int) -\u003e QIO Int",
        "fct-source": "src/QIO-QIORandom.html#randomQIO",
        "fct-type": "function",
        "title": "randomQIO"
      },
      "index": {
        "description": "quantum computation that will return quantum integer in state that has equal probabilities of being measured in any of the state min to max",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "randomQIO",
        "normalized": "(Int,Int)-\u003eQIO Int",
        "package": "QIO",
        "partial": "QIO",
        "signature": "(Int,Int)-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:randomQInt",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum computation that will return a quantum integer in a state that\n has equal probabilities of being measured in any of the state 0 to max.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO QInt",
        "fct-source": "src/QIO-QIORandom.html#randomQInt",
        "fct-type": "function",
        "title": "randomQInt"
      },
      "index": {
        "description": "quantum computation that will return quantum integer in state that has equal probabilities of being measured in any of the state to max",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "randomQInt",
        "normalized": "Int-\u003eQIO QInt",
        "package": "QIO",
        "partial": "QInt",
        "signature": "Int-\u003eQIO QInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:randomU",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Int max, and a quantum register in the state max, this function \n defines a unitary operation that will leave the quantum register in state that\n has equal probability of being measured in any of the states 0 to max.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e [Qbit] -\u003e U",
        "fct-source": "src/QIO-QIORandom.html#randomU",
        "fct-type": "function",
        "title": "randomU"
      },
      "index": {
        "description": "Given an Int max and quantum register in the state max this function defines unitary operation that will leave the quantum register in state that has equal probability of being measured in any of the states to max",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "randomU",
        "normalized": "Int-\u003e[Qbit]-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003e[Qbit]-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:rlf",
      "description": {
        "fct-descr": "\u003cp\u003eremoves any leading Falses from a list of booleans\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "[Bool] -\u003e [Bool]",
        "fct-source": "src/QIO-QIORandom.html#rlf",
        "fct-type": "function",
        "title": "rlf"
      },
      "index": {
        "description": "removes any leading Falses from list of booleans",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "rlf",
        "normalized": "[Bool]-\u003e[Bool]",
        "package": "QIO",
        "partial": "",
        "signature": "[Bool]-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:rlf_l",
      "description": {
        "fct-descr": "\u003cp\u003eremoves any leading Falses from the (big-endian) bit-wise representation\n of the given Int.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e [Bool]",
        "fct-source": "src/QIO-QIORandom.html#rlf_l",
        "fct-type": "function",
        "title": "rlf_l"
      },
      "index": {
        "description": "removes any leading Falses from the big-endian bit-wise representation of the given Int",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "rlf_l",
        "normalized": "Int-\u003e[Bool]",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:rlf_n",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the number of bits left after calling the \u003ca\u003eflf_l\u003c/a\u003e function\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/QIO-QIORandom.html#rlf_n",
        "fct-type": "function",
        "title": "rlf_n"
      },
      "index": {
        "description": "returns the number of bits left after calling the flf function",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "rlf_n",
        "normalized": "Int-\u003eInt",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Int max that is the largest number required to be represented in\n a quantum register, this function trims the front off the given register, to\n leave the number of qubits required to represent max.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e [Qbit] -\u003e [Qbit]",
        "fct-source": "src/QIO-QIORandom.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Given an Int max that is the largest number required to be represented in quantum register this function trims the front off the given register to leave the number of qubits required to represent max",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "trim",
        "normalized": "Int-\u003e[Qbit]-\u003e[Qbit]",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003e[Qbit]-\u003e[Qbit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:weightedBool",
      "description": {
        "fct-descr": "\u003cp\u003eA QIO computation that uses the \u003ca\u003eweightedU\u003c/a\u003e unitary, to return a Bool that\n has a probablity of pf of being False.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e QIO Bool",
        "fct-source": "src/QIO-QIORandom.html#weightedBool",
        "fct-type": "function",
        "title": "weightedBool"
      },
      "index": {
        "description": "QIO computation that uses the weightedU unitary to return Bool that has probablity of pf of being False",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "weightedBool",
        "normalized": "RR-\u003eQIO Bool",
        "package": "QIO",
        "partial": "Bool",
        "signature": "RR-\u003eQIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QIORandom.html#v:weightedU",
      "description": {
        "fct-descr": "\u003cp\u003eA rotation that, given a qubit in state 0, leaves it in a super-position of\n 0 and 1, such that the probability of measuring as state 0 is ps.\n\u003c/p\u003e",
        "fct-module": "QIO.QIORandom",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QIORandom.html#weightedU",
        "fct-type": "function",
        "title": "weightedU"
      },
      "index": {
        "description": "rotation that given qubit in state leaves it in super-position of and such that the probability of measuring as state is ps",
        "hierarchy": "QIO QIORandom",
        "module": "QIO.QIORandom",
        "name": "weightedU",
        "normalized": "RR-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "RR-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type class for quantum data types, as well as some\n instances of this class for pairs, lists, and quantum integers\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Qdata.html",
        "fct-type": "module",
        "title": "Qdata"
      },
      "index": {
        "description": "This module defines type class for quantum data types as well as some instances of this class for pairs lists and quantum integers",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "Qdata",
        "normalized": "",
        "package": "QIO",
        "partial": "Qdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#t:QInt",
      "description": {
        "fct-descr": "\u003cp\u003eA Quantum integer is a wrapper around a fixed-length list of qubits\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-Qdata.html#QInt",
        "fct-type": "newtype",
        "title": "QInt"
      },
      "index": {
        "description": "Quantum integer is wrapper around fixed-length list of qubits",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "QInt",
        "normalized": "",
        "package": "QIO",
        "partial": "QInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#t:Qdata",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eQdata\u003c/a\u003e\u003c/code\u003e type class defines the operation a quantum datatype must implement.\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "class",
        "fct-source": "src/QIO-Qdata.html#Qdata",
        "fct-type": "class",
        "title": "Qdata"
      },
      "index": {
        "description": "The Qdata type class defines the operation quantum datatype must implement",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "Qdata",
        "normalized": "",
        "package": "QIO",
        "partial": "Qdata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:QInt",
      "description": {
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "QInt [Qbit]",
        "fct-source": "src/QIO-Qdata.html#QInt",
        "fct-type": "function",
        "title": "QInt"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "QInt",
        "normalized": "QInt[Qbit]",
        "package": "QIO",
        "partial": "QInt",
        "signature": "QInt[Qbit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:bits2int",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of Booleans to an integer\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "[Bool] -\u003e Int",
        "fct-source": "src/QIO-Qdata.html#bits2int",
        "fct-type": "function",
        "title": "bits2int"
      },
      "index": {
        "description": "Convert list of Booleans to an integer",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "bits2int",
        "normalized": "[Bool]-\u003eInt",
        "package": "QIO",
        "partial": "",
        "signature": "[Bool]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:condQ",
      "description": {
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "qa -\u003e (a -\u003e U) -\u003e U",
        "fct-source": "src/QIO-Qdata.html#condQ",
        "fct-type": "method",
        "title": "condQ"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "condQ",
        "normalized": "a-\u003e(b-\u003eU)-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "qa-\u003e(a-\u003eU)-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:condQRec",
      "description": {
        "fct-descr": "\u003cp\u003eA recursive conditional on a list of quantum data\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "[qa] -\u003e [a -\u003e U] -\u003e U",
        "fct-source": "src/QIO-Qdata.html#condQRec",
        "fct-type": "function",
        "title": "condQRec"
      },
      "index": {
        "description": "recursive conditional on list of quantum data",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "condQRec",
        "normalized": "[a]-\u003e[b-\u003eU]-\u003eU",
        "package": "QIO",
        "partial": "QRec",
        "signature": "[qa]-\u003e[a-\u003eU]-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:int2bits",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an integer to a list of Booleans\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e [Bool]",
        "fct-source": "src/QIO-Qdata.html#int2bits",
        "fct-type": "function",
        "title": "int2bits"
      },
      "index": {
        "description": "Convert an integer to list of Booleans",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "int2bits",
        "normalized": "Int-\u003e[Bool]",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:letU",
      "description": {
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e (qa -\u003e U) -\u003e U",
        "fct-source": "src/QIO-Qdata.html#letU",
        "fct-type": "method",
        "title": "letU"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "letU",
        "normalized": "a-\u003e(b-\u003eU)-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "a-\u003e(qa-\u003eU)-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:measQ",
      "description": {
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "qa -\u003e QIO a",
        "fct-source": "src/QIO-Qdata.html#measQ",
        "fct-type": "method",
        "title": "measQ"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "measQ",
        "normalized": "a-\u003eQIO b",
        "package": "QIO",
        "partial": "",
        "signature": "qa-\u003eQIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:mkQ",
      "description": {
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e QIO qa",
        "fct-source": "src/QIO-Qdata.html#mkQ",
        "fct-type": "method",
        "title": "mkQ"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "mkQ",
        "normalized": "a-\u003eQIO b",
        "package": "QIO",
        "partial": "",
        "signature": "a-\u003eQIO qa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qdata.html#v:qIntSize",
      "description": {
        "fct-descr": "\u003cp\u003eQuantum integers are of a fixed length, which is defined by this constant.\n Currently, this is set to 4.\n\u003c/p\u003e",
        "fct-module": "QIO.Qdata",
        "fct-package": "QIO",
        "fct-signature": "Int",
        "fct-source": "src/QIO-Qdata.html#qIntSize",
        "fct-type": "function",
        "title": "qIntSize"
      },
      "index": {
        "description": "Quantum integers are of fixed length which is defined by this constant Currently this is set to",
        "hierarchy": "QIO Qdata",
        "module": "QIO.Qdata",
        "name": "qIntSize",
        "normalized": "",
        "package": "QIO",
        "partial": "Int Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an implementation of the Quantum Fourier Transform\n in QIO.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Qft.html",
        "fct-type": "module",
        "title": "Qft"
      },
      "index": {
        "description": "This module provides an implementation of the Quantum Fourier Transform in QIO",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "Qft",
        "normalized": "",
        "package": "QIO",
        "partial": "Qft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#v:qft",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the unitary the represents appliying a Quantum Fourier Transform\n to the given quantum register.\n\u003c/p\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "[Qbit] -\u003e U",
        "fct-source": "src/QIO-Qft.html#qft",
        "fct-type": "function",
        "title": "qft"
      },
      "index": {
        "description": "Defines the unitary the represents appliying Quantum Fourier Transform to the given quantum register",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "qft",
        "normalized": "[Qbit]-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "[Qbit]-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#v:qftAcu",
      "description": {
        "fct-descr": "\u003cp\u003eThe definition of the QFT unitary makes use of an accumulator, to repeatedly\n apply smaller QFTs to the tail of the given quantum register.\n\u003c/p\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "[Qbit] -\u003e [Bool] -\u003e [Bool] -\u003e U",
        "fct-source": "src/QIO-Qft.html#qftAcu",
        "fct-type": "function",
        "title": "qftAcu"
      },
      "index": {
        "description": "The definition of the QFT unitary makes use of an accumulator to repeatedly apply smaller QFTs to the tail of the given quantum register",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "qftAcu",
        "normalized": "[Qbit]-\u003e[Bool]-\u003e[Bool]-\u003eU",
        "package": "QIO",
        "partial": "Acu",
        "signature": "[Qbit]-\u003e[Bool]-\u003e[Bool]-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#v:qftBase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \"base\" step involved in a QFT is a series of controlled rotations.\n\u003c/p\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "[Bool] -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-Qft.html#qftBase",
        "fct-type": "function",
        "title": "qftBase"
      },
      "index": {
        "description": "The base step involved in QFT is series of controlled rotations",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "qftBase",
        "normalized": "[Bool]-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "Base",
        "signature": "[Bool]-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#v:rotK",
      "description": {
        "fct-descr": "\u003cp\u003eThe rotation used in the QFT is a phase rotation, parameterised by the \n angle 1/(2^k)\n\u003c/p\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-Qft.html#rotK",
        "fct-type": "function",
        "title": "rotK"
      },
      "index": {
        "description": "The rotation used in the QFT is phase rotation parameterised by the angle",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "rotK",
        "normalized": "Int-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qft.html#v:tryQft",
      "description": {
        "fct-descr": "\u003cp\u003eA test of the QFT unitary, over a quantum integer initialised to n.\n\u003c/p\u003e",
        "fct-module": "QIO.Qft",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO Int",
        "fct-source": "src/QIO-Qft.html#tryQft",
        "fct-type": "function",
        "title": "tryQft"
      },
      "index": {
        "description": "test of the QFT unitary over quantum integer initialised to",
        "hierarchy": "QIO Qft",
        "module": "QIO.Qft",
        "name": "tryQft",
        "normalized": "Int-\u003eQIO Int",
        "package": "QIO",
        "partial": "Qft",
        "signature": "Int-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions that can be used to simulate the running of\n QIO computations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Qio.html",
        "fct-type": "module",
        "title": "Qio"
      },
      "index": {
        "description": "This module defines the functions that can be used to simulate the running of QIO computations",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Qio",
        "normalized": "",
        "package": "QIO",
        "partial": "Qio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:PMonad",
      "description": {
        "fct-descr": "\u003cp\u003eWe can extend a Monad into a PMonad if it defines a way of probabilistically\n merging two computations, based on a given probability.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "class",
        "fct-source": "src/QIO-Qio.html#PMonad",
        "fct-type": "class",
        "title": "PMonad"
      },
      "index": {
        "description": "We can extend Monad into PMonad if it defines way of probabilistically merging two computations based on given probability",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "PMonad",
        "normalized": "",
        "package": "QIO",
        "partial": "PMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:Prob",
      "description": {
        "fct-descr": "\u003cp\u003eThe type Prob is defined as a wrapper around Vectors with Real probabilities.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-Qio.html#Prob",
        "fct-type": "data",
        "title": "Prob"
      },
      "index": {
        "description": "The type Prob is defined as wrapper around Vectors with Real probabilities",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Prob",
        "normalized": "",
        "package": "QIO",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:Pure",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003ePure\u003c/a\u003e state can be thought of as a vector of classical basis states, stored\n as Heaps, along with complex amplitudes.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "type",
        "fct-source": "src/QIO-Qio.html#Pure",
        "fct-type": "type",
        "title": "Pure"
      },
      "index": {
        "description": "Pure state can be thought of as vector of classical basis states stored as Heaps along with complex amplitudes",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Pure",
        "normalized": "",
        "package": "QIO",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:Split",
      "description": {
        "fct-descr": "\u003cp\u003eA Split, is defined as a probability, along with the two Pure states. \n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-Qio.html#Split",
        "fct-type": "data",
        "title": "Split"
      },
      "index": {
        "description": "Split is defined as probability along with the two Pure states",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Split",
        "normalized": "",
        "package": "QIO",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:StateQ",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum state is a defined as the next free qubit reference, along with the\n Pure state that represents the overall quantum state\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-Qio.html#StateQ",
        "fct-type": "data",
        "title": "StateQ"
      },
      "index": {
        "description": "quantum state is defined as the next free qubit reference along with the Pure state that represents the overall quantum state",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "StateQ",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#t:Unitary",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003eUnitary\u003c/a\u003e can be thought of as an operation on a HeapMap that may produce\n a Pure state.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-Qio.html#Unitary",
        "fct-type": "newtype",
        "title": "Unitary"
      },
      "index": {
        "description": "Unitary can be thought of as an operation on HeapMap that may produce Pure state",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Unitary",
        "normalized": "",
        "package": "QIO",
        "partial": "Unitary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:Prob",
      "description": {
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Prob",
        "fct-source": "src/QIO-Qio.html#Prob",
        "fct-type": "function",
        "title": "Prob"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Prob",
        "normalized": "",
        "package": "QIO",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:Split",
      "description": {
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Split",
        "fct-source": "src/QIO-Qio.html#Split",
        "fct-type": "function",
        "title": "Split"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "Split",
        "normalized": "",
        "package": "QIO",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:StateQ",
      "description": {
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "StateQ",
        "fct-source": "src/QIO-Qio.html#StateQ",
        "fct-type": "function",
        "title": "StateQ"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "StateQ",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:U",
      "description": {
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "U",
        "fct-source": "src/QIO-Qio.html#Unitary",
        "fct-type": "function",
        "title": "U"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "U",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eA QIO computation is evaluated by converting it into a stateful computation\n and then evaluating that over the initial state.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e m a",
        "fct-source": "src/QIO-Qio.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "QIO computation is evaluated by converting it into stateful computation and then evaluating that over the initial state",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "eval",
        "normalized": "QIO a-\u003eb a",
        "package": "QIO",
        "partial": "",
        "signature": "QIO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:evalWith",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a PMonad, a QIO Computation can be converted into a Stateful computation\n over a quantum state (of type \u003ccode\u003e\u003ca\u003eStateQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e State StateQ (m a)",
        "fct-source": "src/QIO-Qio.html#evalWith",
        "fct-type": "function",
        "title": "evalWith"
      },
      "index": {
        "description": "Given PMonad QIO Computation can be converted into Stateful computation over quantum state of type StateQ",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "evalWith",
        "normalized": "QIO a-\u003eState StateQ(b a)",
        "package": "QIO",
        "partial": "With",
        "signature": "QIO a-\u003eState StateQ(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:free",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Int",
        "fct-source": "src/QIO-Qio.html#StateQ",
        "fct-type": "function",
        "title": "free"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "free",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:ifFalse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure",
        "fct-source": "src/QIO-Qio.html#Split",
        "fct-type": "function",
        "title": "ifFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "ifFalse",
        "normalized": "",
        "package": "QIO",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:ifTrue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure",
        "fct-source": "src/QIO-Qio.html#Split",
        "fct-type": "function",
        "title": "ifTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "ifTrue",
        "normalized": "",
        "package": "QIO",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:initialStateQ",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial \u003ccode\u003e\u003ca\u003eStateQ\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "StateQ",
        "fct-source": "src/QIO-Qio.html#initialStateQ",
        "fct-type": "function",
        "title": "initialStateQ"
      },
      "index": {
        "description": "The initial StateQ",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "initialStateQ",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:merge",
      "description": {
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e m a -\u003e m a -\u003e m a",
        "fct-source": "src/QIO-Qio.html#merge",
        "fct-type": "method",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "merge",
        "normalized": "RR-\u003ea b-\u003ea b-\u003ea b",
        "package": "QIO",
        "partial": "",
        "signature": "RR-\u003em a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:p",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "RR",
        "fct-source": "src/QIO-Qio.html#Split",
        "fct-type": "function",
        "title": "p"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "p",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:pa",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Pure state, return a sum of all the amplitudes.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure -\u003e RR",
        "fct-source": "src/QIO-Qio.html#pa",
        "fct-type": "function",
        "title": "pa"
      },
      "index": {
        "description": "Given Pure state return sum of all the amplitudes",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "pa",
        "normalized": "Pure-\u003eRR",
        "package": "QIO",
        "partial": "",
        "signature": "Pure-\u003eRR"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:pure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure",
        "fct-source": "src/QIO-Qio.html#StateQ",
        "fct-type": "function",
        "title": "pure"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "pure",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRunning a QIO computation evaluates it in the IO PMonad\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e IO a",
        "fct-source": "src/QIO-Qio.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Running QIO computation evaluates it in the IO PMonad",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "run",
        "normalized": "QIO a-\u003eIO a",
        "package": "QIO",
        "partial": "",
        "signature": "QIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:runU",
      "description": {
        "fct-descr": "\u003cp\u003eAny member of the \u003ca\u003eU\u003c/a\u003e type can be \"run\" by converting it into a Unitary.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "U -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#runU",
        "fct-type": "function",
        "title": "runU"
      },
      "index": {
        "description": "Any member of the type can be run by converting it into Unitary",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "runU",
        "normalized": "U-\u003eUnitary",
        "package": "QIO",
        "partial": "",
        "signature": "U-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:sim",
      "description": {
        "fct-descr": "\u003cp\u003eSimulating a QIO computation evaluates it in the Prob PMonad\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e Prob a",
        "fct-source": "src/QIO-Qio.html#sim",
        "fct-type": "function",
        "title": "sim"
      },
      "index": {
        "description": "Simulating QIO computation evaluates it in the Prob PMonad",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "sim",
        "normalized": "QIO a-\u003eProb a",
        "package": "QIO",
        "partial": "",
        "signature": "QIO a-\u003eProb a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Pure state, we can create a Split, by essentially splitting the\n state into the part where the qubit is True, and the part where the qubit is\n False. This is how measurements are implemented in QIO.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure -\u003e Qbit -\u003e Split",
        "fct-source": "src/QIO-Qio.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Given Pure state we can create Split by essentially splitting the state into the part where the qubit is True and the part where the qubit is False This is how measurements are implemented in QIO",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "split",
        "normalized": "Pure-\u003eQbit-\u003eSplit",
        "package": "QIO",
        "partial": "",
        "signature": "Pure-\u003eQbit-\u003eSplit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:uCond",
      "description": {
        "fct-descr": "\u003cp\u003eA conditional operation can be defined as a Unitary\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e (Bool -\u003e Unitary) -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#uCond",
        "fct-type": "function",
        "title": "uCond"
      },
      "index": {
        "description": "conditional operation can be defined as Unitary",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "uCond",
        "normalized": "Qbit-\u003e(Bool-\u003eUnitary)-\u003eUnitary",
        "package": "QIO",
        "partial": "Cond",
        "signature": "Qbit-\u003e(Bool-\u003eUnitary)-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:uLet",
      "description": {
        "fct-descr": "\u003cp\u003eA let operation can be defined as a Unitary\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e (Qbit -\u003e Unitary) -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#uLet",
        "fct-type": "function",
        "title": "uLet"
      },
      "index": {
        "description": "let operation can be defined as Unitary",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "uLet",
        "normalized": "Bool-\u003e(Qbit-\u003eUnitary)-\u003eUnitary",
        "package": "QIO",
        "partial": "Let",
        "signature": "Bool-\u003e(Qbit-\u003eUnitary)-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:uMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the four complex numbers that make up a 2-by-2 matrix, we can create\n a Unitary that applies the rotation to the given qubit.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e (CC, CC, CC, CC) -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#uMatrix",
        "fct-type": "function",
        "title": "uMatrix"
      },
      "index": {
        "description": "Given the four complex numbers that make up by-2 matrix we can create Unitary that applies the rotation to the given qubit",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "uMatrix",
        "normalized": "Qbit-\u003e(CC,CC,CC,CC)-\u003eUnitary",
        "package": "QIO",
        "partial": "Matrix",
        "signature": "Qbit-\u003e(CC,CC,CC,CC)-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:uRot",
      "description": {
        "fct-descr": "\u003cp\u003eA rotation can be converted into a \u003ca\u003eUnitary\u003c/a\u003e, using the \u003ccode\u003e\u003ca\u003euMatrix\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Rotation -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#uRot",
        "fct-type": "function",
        "title": "uRot"
      },
      "index": {
        "description": "rotation can be converted into Unitary using the uMatrix function",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "uRot",
        "normalized": "Qbit-\u003eRotation-\u003eUnitary",
        "package": "QIO",
        "partial": "Rot",
        "signature": "Qbit-\u003eRotation-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:uSwap",
      "description": {
        "fct-descr": "\u003cp\u003eA swap operation can be defined as a Unitary\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e Unitary",
        "fct-source": "src/QIO-Qio.html#uSwap",
        "fct-type": "function",
        "title": "uSwap"
      },
      "index": {
        "description": "swap operation can be defined as Unitary",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "uSwap",
        "normalized": "Qbit-\u003eQbit-\u003eUnitary",
        "package": "QIO",
        "partial": "Swap",
        "signature": "Qbit-\u003eQbit-\u003eUnitary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:unProb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Vec RR a",
        "fct-source": "src/QIO-Qio.html#Prob",
        "fct-type": "function",
        "title": "unProb"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "unProb",
        "normalized": "",
        "package": "QIO",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:unU",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e HeapMap -\u003e Pure",
        "fct-source": "src/QIO-Qio.html#Unitary",
        "fct-type": "function",
        "title": "unU"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "unU",
        "normalized": "Int-\u003eHeapMap-\u003ePure",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eHeapMap-\u003ePure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:unitaryRot",
      "description": {
        "fct-descr": "\u003cp\u003eA function that checks if a given \u003ca\u003eRotation\u003c/a\u003e is in face unitary. Note that\n this is currently a dummy stub function, and states that any rotation is\n unitary. (This is only o.k. at the moment as all the rotations defined in the\n QIO library are unitary, but won't catch un-unitary user-defined Rotations)\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Rotation -\u003e Bool",
        "fct-source": "src/QIO-Qio.html#unitaryRot",
        "fct-type": "function",
        "title": "unitaryRot"
      },
      "index": {
        "description": "function that checks if given Rotation is in face unitary Note that this is currently dummy stub function and states that any rotation is unitary This is only o.k at the moment as all the rotations defined in the QIO library are unitary but won catch un-unitary user-defined Rotations",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "unitaryRot",
        "normalized": "Rotation-\u003eBool",
        "package": "QIO",
        "partial": "Rot",
        "signature": "Rotation-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Qio.html#v:updateP",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of a qubit can be updated in a Pure state, by mapping the update\n operation over each Heap.\n\u003c/p\u003e",
        "fct-module": "QIO.Qio",
        "fct-package": "QIO",
        "fct-signature": "Pure -\u003e Qbit -\u003e Bool -\u003e Pure",
        "fct-source": "src/QIO-Qio.html#updateP",
        "fct-type": "function",
        "title": "updateP"
      },
      "index": {
        "description": "The state of qubit can be updated in Pure state by mapping the update operation over each Heap",
        "hierarchy": "QIO Qio",
        "module": "QIO.Qio",
        "name": "updateP",
        "normalized": "Pure-\u003eQbit-\u003eBool-\u003ePure",
        "package": "QIO",
        "partial": "",
        "signature": "Pure-\u003eQbit-\u003eBool-\u003ePure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions that can be used run the classical subset\n of QIO. That is, QIO computations that only use classical unitary operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-QioClass.html",
        "fct-type": "module",
        "title": "QioClass"
      },
      "index": {
        "description": "This module defines the functions that can be used run the classical subset of QIO That is QIO computations that only use classical unitary operations",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "QioClass",
        "normalized": "",
        "package": "QIO",
        "partial": "Qio Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#t:StateC",
      "description": {
        "fct-descr": "\u003cp\u003eA classical state consists of the next free qubit reference, along with \n a Heap that represents the overall state of the current qubits in scope.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-QioClass.html#StateC",
        "fct-type": "data",
        "title": "StateC"
      },
      "index": {
        "description": "classical state consists of the next free qubit reference along with Heap that represents the overall state of the current qubits in scope",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "StateC",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#t:UnitaryC",
      "description": {
        "fct-descr": "\u003cp\u003eA classical unitary operation is defined as a function that will\n update the current classical state.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-QioClass.html#UnitaryC",
        "fct-type": "newtype",
        "title": "UnitaryC"
      },
      "index": {
        "description": "classical unitary operation is defined as function that will update the current classical state",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "UnitaryC",
        "normalized": "",
        "package": "QIO",
        "partial": "Unitary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:StateC",
      "description": {
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "StateC",
        "fct-source": "src/QIO-QioClass.html#StateC",
        "fct-type": "function",
        "title": "StateC"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "StateC",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:U",
      "description": {
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "U",
        "fct-source": "src/QIO-QioClass.html#UnitaryC",
        "fct-type": "function",
        "title": "U"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "U",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:fv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Int",
        "fct-source": "src/QIO-QioClass.html#StateC",
        "fct-type": "function",
        "title": "fv"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "fv",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:heap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "HeapMap",
        "fct-source": "src/QIO-QioClass.html#StateC",
        "fct-type": "function",
        "title": "heap"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "heap",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:initialStateC",
      "description": {
        "fct-descr": "\u003cp\u003eAn initial state is defined as an empty heap, with 0 set as the next \n free qubit referece\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "StateC",
        "fct-source": "src/QIO-QioClass.html#initialStateC",
        "fct-type": "function",
        "title": "initialStateC"
      },
      "index": {
        "description": "An initial state is defined as an empty heap with set as the next free qubit referece",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "initialStateC",
        "normalized": "",
        "package": "QIO",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:runC",
      "description": {
        "fct-descr": "\u003cp\u003eWe can run a classical QIO computation by converting it into a stateful\n computation, and evaluating that using the initial state.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e a",
        "fct-source": "src/QIO-QioClass.html#runC",
        "fct-type": "function",
        "title": "runC"
      },
      "index": {
        "description": "We can run classical QIO computation by converting it into stateful computation and evaluating that using the initial state",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "runC",
        "normalized": "QIO a-\u003ea",
        "package": "QIO",
        "partial": "",
        "signature": "QIO a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:runQStateC",
      "description": {
        "fct-descr": "\u003cp\u003eA QIO computation can be converted into a stateful computation, over\n a state of type \u003ca\u003eStateC\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e State StateC a",
        "fct-source": "src/QIO-QioClass.html#runQStateC",
        "fct-type": "function",
        "title": "runQStateC"
      },
      "index": {
        "description": "QIO computation can be converted into stateful computation over state of type StateC",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "runQStateC",
        "normalized": "QIO a-\u003eState StateC a",
        "package": "QIO",
        "partial": "QState",
        "signature": "QIO a-\u003eState StateC a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:runUC",
      "description": {
        "fct-descr": "\u003cp\u003eA unitary can be run by converting it into the classical unitary type.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "U -\u003e UnitaryC",
        "fct-source": "src/QIO-QioClass.html#runUC",
        "fct-type": "function",
        "title": "runUC"
      },
      "index": {
        "description": "unitary can be run by converting it into the classical unitary type",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "runUC",
        "normalized": "U-\u003eUnitaryC",
        "package": "QIO",
        "partial": "UC",
        "signature": "U-\u003eUnitaryC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:uCondC",
      "description": {
        "fct-descr": "\u003cp\u003eA conditional operation can be defined in the classical unitary type.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e (Bool -\u003e UnitaryC) -\u003e UnitaryC",
        "fct-source": "src/QIO-QioClass.html#uCondC",
        "fct-type": "function",
        "title": "uCondC"
      },
      "index": {
        "description": "conditional operation can be defined in the classical unitary type",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "uCondC",
        "normalized": "Qbit-\u003e(Bool-\u003eUnitaryC)-\u003eUnitaryC",
        "package": "QIO",
        "partial": "Cond",
        "signature": "Qbit-\u003e(Bool-\u003eUnitaryC)-\u003eUnitaryC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:uLetC",
      "description": {
        "fct-descr": "\u003cp\u003eA let operation can be defined in the classical unitary type.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e (Qbit -\u003e UnitaryC) -\u003e UnitaryC",
        "fct-source": "src/QIO-QioClass.html#uLetC",
        "fct-type": "function",
        "title": "uLetC"
      },
      "index": {
        "description": "let operation can be defined in the classical unitary type",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "uLetC",
        "normalized": "Bool-\u003e(Qbit-\u003eUnitaryC)-\u003eUnitaryC",
        "package": "QIO",
        "partial": "Let",
        "signature": "Bool-\u003e(Qbit-\u003eUnitaryC)-\u003eUnitaryC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:uRotC",
      "description": {
        "fct-descr": "\u003cp\u003eA single qubit rotation can be converted into the classical unitary type, \n if it is indeed classical (otherwise an error is thrown).\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Rotation -\u003e UnitaryC",
        "fct-source": "src/QIO-QioClass.html#uRotC",
        "fct-type": "function",
        "title": "uRotC"
      },
      "index": {
        "description": "single qubit rotation can be converted into the classical unitary type if it is indeed classical otherwise an error is thrown",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "uRotC",
        "normalized": "Qbit-\u003eRotation-\u003eUnitaryC",
        "package": "QIO",
        "partial": "Rot",
        "signature": "Qbit-\u003eRotation-\u003eUnitaryC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:uSwapC",
      "description": {
        "fct-descr": "\u003cp\u003eA swap operation can be defined in the classical unitary type.\n\u003c/p\u003e",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e UnitaryC",
        "fct-source": "src/QIO-QioClass.html#uSwapC",
        "fct-type": "function",
        "title": "uSwapC"
      },
      "index": {
        "description": "swap operation can be defined in the classical unitary type",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "uSwapC",
        "normalized": "Qbit-\u003eQbit-\u003eUnitaryC",
        "package": "QIO",
        "partial": "Swap",
        "signature": "Qbit-\u003eQbit-\u003eUnitaryC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioClass.html#v:unU",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.QioClass",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e HeapMap -\u003e HeapMap",
        "fct-source": "src/QIO-QioClass.html#UnitaryC",
        "fct-type": "function",
        "title": "unU"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioClass",
        "module": "QIO.QioClass",
        "name": "unU",
        "normalized": "Int-\u003eHeapMap-\u003eHeapMap",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eHeapMap-\u003eHeapMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the Syntax of the Quantum IO Monad, which is an embedded\n language for writing quantum computations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-QioSyn.html",
        "fct-type": "module",
        "title": "QioSyn"
      },
      "index": {
        "description": "This module defines the Syntax of the Quantum IO Monad which is an embedded language for writing quantum computations",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "QioSyn",
        "normalized": "",
        "package": "QIO",
        "partial": "Qio Syn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:CC",
      "description": {
        "fct-descr": "\u003cp\u003eFor Complex numbers, we use the built in Complex numbers, over our Real \n number type (i.e. Double)\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "type",
        "fct-source": "src/QIO-QioSyn.html#CC",
        "fct-type": "type",
        "title": "CC"
      },
      "index": {
        "description": "For Complex numbers we use the built in Complex numbers over our Real number type i.e Double",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "CC",
        "normalized": "",
        "package": "QIO",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:QIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying data type of a QIO Computation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-QioSyn.html#QIO",
        "fct-type": "data",
        "title": "QIO"
      },
      "index": {
        "description": "The underlying data type of QIO Computation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "QIO",
        "normalized": "",
        "package": "QIO",
        "partial": "QIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:Qbit",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of Qubits in QIO are simply integer references.\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-QioSyn.html#Qbit",
        "fct-type": "newtype",
        "title": "Qbit"
      },
      "index": {
        "description": "The type of Qubits in QIO are simply integer references",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Qbit",
        "normalized": "",
        "package": "QIO",
        "partial": "Qbit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:RR",
      "description": {
        "fct-descr": "\u003cp\u003eFor Real numbers, we simply use the built in Double type\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "type",
        "fct-source": "src/QIO-QioSyn.html#RR",
        "fct-type": "type",
        "title": "RR"
      },
      "index": {
        "description": "For Real numbers we simply use the built in Double type",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "RR",
        "normalized": "",
        "package": "QIO",
        "partial": "RR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:Rotation",
      "description": {
        "fct-descr": "\u003cp\u003eA rotation is in essence a two-by-two complex valued matrix\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "type",
        "fct-source": "src/QIO-QioSyn.html#Rotation",
        "fct-type": "type",
        "title": "Rotation"
      },
      "index": {
        "description": "rotation is in essence two-by-two complex valued matrix",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Rotation",
        "normalized": "",
        "package": "QIO",
        "partial": "Rotation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#t:U",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying data type of a U unitary operation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "data",
        "title": "U"
      },
      "index": {
        "description": "The underlying data type of unitary operation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "U",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:ApplyU",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "ApplyU U (QIO a)",
        "fct-source": "src/QIO-QioSyn.html#QIO",
        "fct-type": "function",
        "title": "ApplyU"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "ApplyU",
        "normalized": "",
        "package": "QIO",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Cond",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Cond Qbit (Bool -\u003e U) U",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "function",
        "title": "Cond"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Cond",
        "normalized": "Cond Qbit(Bool-\u003eU)U",
        "package": "QIO",
        "partial": "Cond",
        "signature": "Cond Qbit(Bool-\u003eU)U"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Meas",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Meas Qbit (Bool -\u003e QIO a)",
        "fct-source": "src/QIO-QioSyn.html#QIO",
        "fct-type": "function",
        "title": "Meas"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Meas",
        "normalized": "Meas Qbit(Bool-\u003eQIO a)",
        "package": "QIO",
        "partial": "Meas",
        "signature": "Meas Qbit(Bool-\u003eQIO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:MkQbit",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "MkQbit Bool (Qbit -\u003e QIO a)",
        "fct-source": "src/QIO-QioSyn.html#QIO",
        "fct-type": "function",
        "title": "MkQbit"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "MkQbit",
        "normalized": "MkQbit Bool(Qbit-\u003eQIO a)",
        "package": "QIO",
        "partial": "Mk Qbit",
        "signature": "MkQbit Bool(Qbit-\u003eQIO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:QReturn",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "QReturn a",
        "fct-source": "src/QIO-QioSyn.html#QIO",
        "fct-type": "function",
        "title": "QReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "QReturn",
        "normalized": "",
        "package": "QIO",
        "partial": "QReturn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Qbit",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit Int",
        "fct-source": "src/QIO-QioSyn.html#Qbit",
        "fct-type": "function",
        "title": "Qbit"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Qbit",
        "normalized": "",
        "package": "QIO",
        "partial": "Qbit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Rot",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Rot Qbit Rotation U",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "function",
        "title": "Rot"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Rot",
        "normalized": "",
        "package": "QIO",
        "partial": "Rot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Swap",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Swap Qbit Qbit U",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "function",
        "title": "Swap"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Swap",
        "normalized": "",
        "package": "QIO",
        "partial": "Swap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:UReturn",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "UReturn",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "function",
        "title": "UReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "UReturn",
        "normalized": "",
        "package": "QIO",
        "partial": "UReturn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:Ulet",
      "description": {
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Ulet Bool (Qbit -\u003e U) U",
        "fct-source": "src/QIO-QioSyn.html#U",
        "fct-type": "function",
        "title": "Ulet"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "Ulet",
        "normalized": "Ulet Bool(Qbit-\u003eU)U",
        "package": "QIO",
        "partial": "Ulet",
        "signature": "Ulet Bool(Qbit-\u003eU)U"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:amp",
      "description": {
        "fct-descr": "\u003cp\u003eThe amplitude of a complex number is the magnitude squared.\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "CC -\u003e RR",
        "fct-source": "src/QIO-QioSyn.html#amp",
        "fct-type": "function",
        "title": "amp"
      },
      "index": {
        "description": "The amplitude of complex number is the magnitude squared",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "amp",
        "normalized": "CC-\u003eRR",
        "package": "QIO",
        "partial": "",
        "signature": "CC-\u003eRR"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:applyU",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given unitary operation to the current quantum state\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "U -\u003e QIO ()",
        "fct-source": "src/QIO-QioSyn.html#applyU",
        "fct-type": "function",
        "title": "applyU"
      },
      "index": {
        "description": "Apply the given unitary operation to the current quantum state",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "applyU",
        "normalized": "U-\u003eQIO()",
        "package": "QIO",
        "partial": "",
        "signature": "U-\u003eQIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003eApply the conditional unitary, depending on the value of the given qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e (Bool -\u003e U) -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "Apply the conditional unitary depending on the value of the given qubit",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "cond",
        "normalized": "Qbit-\u003e(Bool-\u003eU)-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003e(Bool-\u003eU)-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:measQbit",
      "description": {
        "fct-descr": "\u003cp\u003eMeasure the given qubit, and return the measurement outcome (note that this\n operation may affect the overall quantum state, as a measurement is destructive)\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e QIO Bool",
        "fct-source": "src/QIO-QioSyn.html#measQbit",
        "fct-type": "function",
        "title": "measQbit"
      },
      "index": {
        "description": "Measure the given qubit and return the measurement outcome note that this operation may affect the overall quantum state as measurement is destructive",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "measQbit",
        "normalized": "Qbit-\u003eQIO Bool",
        "package": "QIO",
        "partial": "Qbit",
        "signature": "Qbit-\u003eQIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:mkQbit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a qubit in the given state (adding it to the overall quantum state)\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e QIO Qbit",
        "fct-source": "src/QIO-QioSyn.html#mkQbit",
        "fct-type": "function",
        "title": "mkQbit"
      },
      "index": {
        "description": "Initialise qubit in the given state adding it to the overall quantum state",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "mkQbit",
        "normalized": "Bool-\u003eQIO Qbit",
        "package": "QIO",
        "partial": "Qbit",
        "signature": "Bool-\u003eQIO Qbit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rhad",
      "description": {
        "fct-descr": "\u003cp\u003eThe hadamard rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Rotation",
        "fct-source": "src/QIO-QioSyn.html#rhad",
        "fct-type": "function",
        "title": "rhad"
      },
      "index": {
        "description": "The hadamard rotation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rhad",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rid",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Rotation",
        "fct-source": "src/QIO-QioSyn.html#rid",
        "fct-type": "function",
        "title": "rid"
      },
      "index": {
        "description": "The identity rotation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rid",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rnot",
      "description": {
        "fct-descr": "\u003cp\u003eThe not rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Rotation",
        "fct-source": "src/QIO-QioSyn.html#rnot",
        "fct-type": "function",
        "title": "rnot"
      },
      "index": {
        "description": "The not rotation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rnot",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rot",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given rotation to the given qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Rotation -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#rot",
        "fct-type": "function",
        "title": "rot"
      },
      "index": {
        "description": "Apply the given rotation to the given qubit",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rot",
        "normalized": "Qbit-\u003eRotation-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eRotation-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rphase",
      "description": {
        "fct-descr": "\u003cp\u003eThe phase rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "RR -\u003e Rotation",
        "fct-source": "src/QIO-QioSyn.html#rphase",
        "fct-type": "function",
        "title": "rphase"
      },
      "index": {
        "description": "The phase rotation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rphase",
        "normalized": "RR-\u003eRotation",
        "package": "QIO",
        "partial": "",
        "signature": "RR-\u003eRotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:rrev",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the inverse (or reverse) of the given rotation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Rotation -\u003e Rotation",
        "fct-source": "src/QIO-QioSyn.html#rrev",
        "fct-type": "function",
        "title": "rrev"
      },
      "index": {
        "description": "Returns the inverse or reverse of the given rotation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "rrev",
        "normalized": "Rotation-\u003eRotation",
        "package": "QIO",
        "partial": "",
        "signature": "Rotation-\u003eRotation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:show-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function for the show instance of U\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "U -\u003e Int -\u003e Int -\u003e String",
        "fct-source": "src/QIO-QioSyn.html#show%27",
        "fct-type": "function",
        "title": "show'"
      },
      "index": {
        "description": "helper function for the show instance of",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "show'",
        "normalized": "U-\u003eInt-\u003eInt-\u003eString",
        "package": "QIO",
        "partial": "",
        "signature": "U-\u003eInt-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:spaces",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function that returns a string of 4x spaces.\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/QIO-QioSyn.html#spaces",
        "fct-type": "function",
        "title": "spaces"
      },
      "index": {
        "description": "helper function that returns string of spaces",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "spaces",
        "normalized": "Int-\u003eString",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the state of the two given qubits\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e Qbit -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Swap the state of the two given qubits",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "swap",
        "normalized": "Qbit-\u003eQbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eQbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:uhad",
      "description": {
        "fct-descr": "\u003cp\u003eApply a hadamard rotation to the given qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#uhad",
        "fct-type": "function",
        "title": "uhad"
      },
      "index": {
        "description": "Apply hadamard rotation to the given qubit",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "uhad",
        "normalized": "Qbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:ulet",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce an Ancilla qubit in the given state, for use in the sub-unitary\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Bool -\u003e (Qbit -\u003e U) -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#ulet",
        "fct-type": "function",
        "title": "ulet"
      },
      "index": {
        "description": "Introduce an Ancilla qubit in the given state for use in the sub-unitary",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "ulet",
        "normalized": "Bool-\u003e(Qbit-\u003eU)-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Bool-\u003e(Qbit-\u003eU)-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:unot",
      "description": {
        "fct-descr": "\u003cp\u003eApply a not rotation to the given qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#unot",
        "fct-type": "function",
        "title": "unot"
      },
      "index": {
        "description": "Apply not rotation to the given qubit",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "unot",
        "normalized": "Qbit-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:uphase",
      "description": {
        "fct-descr": "\u003cp\u003eApply a phase rotation (of the given angle) to the given qubit\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "Qbit -\u003e RR -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#uphase",
        "fct-type": "function",
        "title": "uphase"
      },
      "index": {
        "description": "Apply phase rotation of the given angle to the given qubit",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "uphase",
        "normalized": "Qbit-\u003eRR-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "Qbit-\u003eRR-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-QioSyn.html#v:urev",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the inverse (or reverse) of the given unitary operation\n\u003c/p\u003e",
        "fct-module": "QIO.QioSyn",
        "fct-package": "QIO",
        "fct-signature": "U -\u003e U",
        "fct-source": "src/QIO-QioSyn.html#urev",
        "fct-type": "function",
        "title": "urev"
      },
      "index": {
        "description": "Returns the inverse or reverse of the given unitary operation",
        "hierarchy": "QIO QioSyn",
        "module": "QIO.QioSyn",
        "name": "urev",
        "normalized": "U-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "U-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the QIO computation that represents Shor's factorisation\n algorithm. It makes use of the Arithmetic library, and the Quantum Fourier \n Transform.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Shor.html",
        "fct-type": "module",
        "title": "Shor"
      },
      "index": {
        "description": "This module defines the QIO computation that represents Shor factorisation algorithm It makes use of the Arithmetic library and the Quantum Fourier Transform",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "Shor",
        "normalized": "",
        "package": "QIO",
        "partial": "Shor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:factor",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper for Shor's algorithm, that returns prime factors of n.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO (Int, Int)",
        "fct-source": "src/QIO-Shor.html#factor",
        "fct-type": "function",
        "title": "factor"
      },
      "index": {
        "description": "wrapper for Shor algorithm that returns prime factors of",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "factor",
        "normalized": "Int-\u003eQIO(Int,Int)",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eQIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:factorV",
      "description": {
        "fct-descr": "\u003cp\u003eCalls the \u003ccode\u003e\u003ca\u003efactorV'\u003c/a\u003e\u003c/code\u003e, and times the overall factorisation.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/QIO-Shor.html#factorV",
        "fct-type": "function",
        "title": "factorV"
      },
      "index": {
        "description": "Calls the factorV and times the overall factorisation",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "factorV",
        "normalized": "Int-\u003eIO()",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:factorV-39-",
      "description": {
        "fct-descr": "\u003cp\u003eTimes the running of various subroutines within the factorisation algorithm.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e IO (Int, Int)",
        "fct-source": "src/QIO-Shor.html#factorV%27",
        "fct-type": "function",
        "title": "factorV'"
      },
      "index": {
        "description": "Times the running of various subroutines within the factorisation algorithm",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "factorV'",
        "normalized": "Int-\u003eIO(Int,Int)",
        "package": "QIO",
        "partial": "V'",
        "signature": "Int-\u003eIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:hadamardsI",
      "description": {
        "fct-descr": "\u003cp\u003eThe Hadamard transform can be mapped over the qubits in a Quantum Integer.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "QInt -\u003e U",
        "fct-source": "src/QIO-Shor.html#hadamardsI",
        "fct-type": "function",
        "title": "hadamardsI"
      },
      "index": {
        "description": "The Hadamard transform can be mapped over the qubits in Quantum Integer",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "hadamardsI",
        "normalized": "QInt-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "QInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:half",
      "description": {
        "fct-descr": "\u003cp\u003eInteger division by 2.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/QIO-Shor.html#half",
        "fct-type": "function",
        "title": "half"
      },
      "index": {
        "description": "Integer division by",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "half",
        "normalized": "Int-\u003eInt",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:period",
      "description": {
        "fct-descr": "\u003cp\u003eA classical (inefficient) implementation of the period finding subroutine \n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/QIO-Shor.html#period",
        "fct-type": "function",
        "title": "period"
      },
      "index": {
        "description": "classical inefficient implementation of the period finding subroutine",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "period",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:qftI",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse Quantum Fourier Transform is defined by reversing the QFT\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "QInt -\u003e U",
        "fct-source": "src/QIO-Shor.html#qftI",
        "fct-type": "function",
        "title": "qftI"
      },
      "index": {
        "description": "The inverse Quantum Fourier Transform is defined by reversing the QFT",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "qftI",
        "normalized": "QInt-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "QInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:rand_co-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA different implementation of \u003ca\u003erand_coprime\u003c/a\u003e, that defines a quantum\n computation that returns a random number between 2 and n, that is then\n returned if it is co-prime to n.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO Int",
        "fct-source": "src/QIO-Shor.html#rand_co%27",
        "fct-type": "function",
        "title": "rand_co'"
      },
      "index": {
        "description": "different implementation of rand coprime that defines quantum computation that returns random number between and that is then returned if it is co-prime to",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "rand_co'",
        "normalized": "Int-\u003eQIO Int",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:rand_coprime",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines a quantum computation that returns a random index, that\n is used to pick from a list of integers that are co-prime to n.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e QIO Int",
        "fct-source": "src/QIO-Shor.html#rand_coprime",
        "fct-type": "function",
        "title": "rand_coprime"
      },
      "index": {
        "description": "This function defines quantum computation that returns random index that is used to pick from list of integers that are co-prime to",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "rand_coprime",
        "normalized": "Int-\u003eQIO Int",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:reduce",
      "description": {
        "fct-descr": "\u003cp\u003eReduces a pair of integers, by dividing them by thier gcd, \n until their gcd is 1.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "(Int, Int) -\u003e (Int, Int)",
        "fct-source": "src/QIO-Shor.html#reduce",
        "fct-type": "function",
        "title": "reduce"
      },
      "index": {
        "description": "Reduces pair of integers by dividing them by thier gcd until their gcd is",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "reduce",
        "normalized": "(Int,Int)-\u003e(Int,Int)",
        "package": "QIO",
        "partial": "",
        "signature": "(Int,Int)-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:runTime",
      "description": {
        "fct-descr": "\u003cp\u003eThis function simulates the running of a QIO computation, whilst using\n System.Time functions to time how long the simulation took.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "QIO a -\u003e IO a",
        "fct-source": "src/QIO-Shor.html#runTime",
        "fct-type": "function",
        "title": "runTime"
      },
      "index": {
        "description": "This function simulates the running of QIO computation whilst using System.Time functions to time how long the simulation took",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "runTime",
        "normalized": "QIO a-\u003eIO a",
        "package": "QIO",
        "partial": "Time",
        "signature": "QIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:shor",
      "description": {
        "fct-descr": "\u003cp\u003eA quantum computation the implementes shor's algorithm, returning the period\n of the function.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "Int -\u003e Int -\u003e QIO Int",
        "fct-source": "src/QIO-Shor.html#shor",
        "fct-type": "function",
        "title": "shor"
      },
      "index": {
        "description": "quantum computation the implementes shor algorithm returning the period of the function",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "shor",
        "normalized": "Int-\u003eInt-\u003eQIO Int",
        "package": "QIO",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eQIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Shor.html#v:shorU",
      "description": {
        "fct-descr": "\u003cp\u003eThe overall \"phase-estimation\" structure of Shor's algorithm.\n\u003c/p\u003e",
        "fct-module": "QIO.Shor",
        "fct-package": "QIO",
        "fct-signature": "QInt -\u003e QInt -\u003e Int -\u003e Int -\u003e U",
        "fct-source": "src/QIO-Shor.html#shorU",
        "fct-type": "function",
        "title": "shorU"
      },
      "index": {
        "description": "The overall phase-estimation structure of Shor algorithm",
        "hierarchy": "QIO Shor",
        "module": "QIO.Shor",
        "name": "shorU",
        "normalized": "QInt-\u003eQInt-\u003eInt-\u003eInt-\u003eU",
        "package": "QIO",
        "partial": "",
        "signature": "QInt-\u003eQInt-\u003eInt-\u003eInt-\u003eU"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a Vector as a list of pairs. \n In the context of QIO, a Vector is the type used to represent a probability\n distribution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-Vec.html",
        "fct-type": "module",
        "title": "Vec"
      },
      "index": {
        "description": "This module defines Vector as list of pairs In the context of QIO Vector is the type used to represent probability distribution",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "Vec",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#t:Vec",
      "description": {
        "fct-descr": "\u003cp\u003eA Vector over types \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ea\u003c/code\u003e is a wrapper around list of \n pairs of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-Vec.html#Vec",
        "fct-type": "newtype",
        "title": "Vec"
      },
      "index": {
        "description": "Vector over types and is wrapper around list of pairs of and",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "Vec",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:-60--42--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA Vector can be multiplied by a scalar, by mapping the multiplcation\n over each probability in the vector.\n\u003c/p\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "x -\u003e Vec x a -\u003e Vec x a",
        "fct-source": "src/QIO-Vec.html#%3C%2A%2A%3E",
        "fct-type": "function",
        "title": "(\u003c**\u003e)"
      },
      "index": {
        "description": "Vector can be multiplied by scalar by mapping the multiplcation over each probability in the vector",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "(\u003c**\u003e) \u003c**\u003e",
        "normalized": "a-\u003eVec a b-\u003eVec a b",
        "package": "QIO",
        "partial": "",
        "signature": "x-\u003eVec x a-\u003eVec x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:-60--43--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTwo Vectors can be added, using list concatenation.\n\u003c/p\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "Vec x a -\u003e Vec x a -\u003e Vec x a",
        "fct-source": "src/QIO-Vec.html#%3C%2B%2B%3E",
        "fct-type": "function",
        "title": "(\u003c++\u003e)"
      },
      "index": {
        "description": "Two Vectors can be added using list concatenation",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "(\u003c++\u003e) \u003c++\u003e",
        "normalized": "Vec a b-\u003eVec a b-\u003eVec a b",
        "package": "QIO",
        "partial": "",
        "signature": "Vec x a-\u003eVec x a-\u003eVec x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:-60--64--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \"probability\" of an object in a Vector, is the sum of all the\n probabilities associated with that object.\n\u003c/p\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "Vec x a -\u003e a -\u003e x",
        "fct-source": "src/QIO-Vec.html#%3C%40%40%3E",
        "fct-type": "function",
        "title": "(\u003c@@\u003e)"
      },
      "index": {
        "description": "The probability of an object in Vector is the sum of all the probabilities associated with that object",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "(\u003c@@\u003e) \u003c@@\u003e",
        "normalized": "Vec a b-\u003eb-\u003ea",
        "package": "QIO",
        "partial": "",
        "signature": "Vec x a-\u003ea-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:Vec",
      "description": {
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "Vec",
        "fct-source": "src/QIO-Vec.html#Vec",
        "fct-type": "function",
        "title": "Vec"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "Vec",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty Vector is defined as the empty list\n\u003c/p\u003e",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "Vec x a",
        "fct-source": "src/QIO-Vec.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty Vector is defined as the empty list",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "empty",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-Vec.html#v:unVec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.Vec",
        "fct-package": "QIO",
        "fct-signature": "[(a, x)]",
        "fct-source": "src/QIO-Vec.html#Vec",
        "fct-type": "function",
        "title": "unVec"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO Vec",
        "module": "QIO.Vec",
        "name": "unVec",
        "normalized": "[(a,b)]",
        "package": "QIO",
        "partial": "Vec",
        "signature": "[(a,x)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a class of Vectors over types with Equality, along with\n an instance of this class using lists of pairs. In the context of QIO, these\n Vectors are used to hold the amplitudes of various basis-states within a\n superposition.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "module",
        "fct-source": "src/QIO-VecEq.html",
        "fct-type": "module",
        "title": "VecEq"
      },
      "index": {
        "description": "This module defines class of Vectors over types with Equality along with an instance of this class using lists of pairs In the context of QIO these Vectors are used to hold the amplitudes of various basis-states within superposition",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "VecEq",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#t:AsMonad",
      "description": {
        "fct-descr": "\u003cp\u003eWe can define a datatype that holds EqMonad operations, so that it can\n be defined as a Monad. \n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "data",
        "fct-source": "src/QIO-VecEq.html#AsMonad",
        "fct-type": "data",
        "title": "AsMonad"
      },
      "index": {
        "description": "We can define datatype that holds EqMonad operations so that it can be defined as Monad",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "AsMonad",
        "normalized": "",
        "package": "QIO",
        "partial": "As Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#t:EqMonad",
      "description": {
        "fct-descr": "\u003cp\u003eAn EqMonad is a monad that has Return and Bind operations that depend on\n the type in the monad being a member of the Eq class\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "class",
        "fct-source": "src/QIO-VecEq.html#EqMonad",
        "fct-type": "class",
        "title": "EqMonad"
      },
      "index": {
        "description": "An EqMonad is monad that has Return and Bind operations that depend on the type in the monad being member of the Eq class",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "EqMonad",
        "normalized": "",
        "package": "QIO",
        "partial": "Eq Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#t:VecEq",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that fulfills this type class is a Vector over types with equality\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "class",
        "fct-source": "src/QIO-VecEq.html#VecEq",
        "fct-type": "class",
        "title": "VecEq"
      },
      "index": {
        "description": "Any type that fulfills this type class is Vector over types with equality",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "VecEq",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#t:VecEqL",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is a wrapper around a list of pairs.\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "newtype",
        "fct-source": "src/QIO-VecEq.html#VecEqL",
        "fct-type": "newtype",
        "title": "VecEqL"
      },
      "index": {
        "description": "This type is wrapper around list of pairs",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "VecEqL",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:-60--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA Vector can be multiplied by a scalar\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "x -\u003e v x a -\u003e v x a",
        "fct-source": "src/QIO-VecEq.html#%3C%2A%3E",
        "fct-type": "method",
        "title": "(\u003c*\u003e)"
      },
      "index": {
        "description": "Vector can be multiplied by scalar",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "(\u003c*\u003e) \u003c*\u003e",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "QIO",
        "partial": "",
        "signature": "x-\u003ev x a-\u003ev x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTwo Vectors can be combined\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "v x a -\u003e v x a -\u003e v x a",
        "fct-source": "src/QIO-VecEq.html#%3C%2B%3E",
        "fct-type": "method",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Two Vectors can be combined",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a b c-\u003ea b c-\u003ea b c",
        "package": "QIO",
        "partial": "",
        "signature": "v x a-\u003ev x a-\u003ev x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:-60--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe amplitude of a given element can be accessed\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e v x a -\u003e x",
        "fct-source": "src/QIO-VecEq.html#%3C%40%3E",
        "fct-type": "method",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "The amplitude of given element can be accessed",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "a-\u003eb c a-\u003ec",
        "package": "QIO",
        "partial": "",
        "signature": "a-\u003ev x a-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:Bind",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "AsMonad m a -\u003e (a -\u003e AsMonad m b) -\u003e AsMonad m b",
        "fct-source": "src/QIO-VecEq.html#AsMonad",
        "fct-type": "function",
        "title": "Bind"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "Bind",
        "normalized": "AsMonad a b-\u003e(b-\u003eAsMonad a c)-\u003eAsMonad a c",
        "package": "QIO",
        "partial": "Bind",
        "signature": "AsMonad m a-\u003e(a-\u003eAsMonad m b)-\u003eAsMonad m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:Embed",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "m a -\u003e AsMonad m a",
        "fct-source": "src/QIO-VecEq.html#AsMonad",
        "fct-type": "function",
        "title": "Embed"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "Embed",
        "normalized": "a b-\u003eAsMonad a b",
        "package": "QIO",
        "partial": "Embed",
        "signature": "m a-\u003eAsMonad m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:Return",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e AsMonad m a",
        "fct-source": "src/QIO-VecEq.html#AsMonad",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "Return",
        "normalized": "a-\u003eAsMonad b a",
        "package": "QIO",
        "partial": "Return",
        "signature": "a-\u003eAsMonad m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:VecEqL",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "VecEqL",
        "fct-source": "src/QIO-VecEq.html#VecEqL",
        "fct-type": "function",
        "title": "VecEqL"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "VecEqL",
        "normalized": "",
        "package": "QIO",
        "partial": "Vec Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eA basis state with the given amplitude can be added to a VecEqL by adding\n the amplitudes if the state is already in the vector, or by inserting the\n base state if it isn't already in the vector.\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "(a, x) -\u003e VecEqL x a -\u003e VecEqL x a",
        "fct-source": "src/QIO-VecEq.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "basis state with the given amplitude can be added to VecEqL by adding the amplitudes if the state is already in the vector or by inserting the base state if it isn already in the vector",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "add",
        "normalized": "(a,b)-\u003eVecEqL b a-\u003eVecEqL b a",
        "package": "QIO",
        "partial": "",
        "signature": "(a,x)-\u003eVecEqL x a-\u003eVecEqL x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:eqBind",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/QIO-VecEq.html#eqBind",
        "fct-type": "method",
        "title": "eqBind"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "eqBind",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "QIO",
        "partial": "Bind",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:eqReturn",
      "description": {
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/QIO-VecEq.html#eqReturn",
        "fct-type": "method",
        "title": "eqReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "eqReturn",
        "normalized": "a-\u003eb a",
        "package": "QIO",
        "partial": "Return",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eThe vector can be created from a list of pairs\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "[(a, x)] -\u003e v x a",
        "fct-source": "src/QIO-VecEq.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "The vector can be created from list of pairs",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003ec b a",
        "package": "QIO",
        "partial": "List",
        "signature": "[(a,x)]-\u003ev x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eThe cevtor can be converted into a list of pairs\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "v x a -\u003e [(a, x)]",
        "fct-source": "src/QIO-VecEq.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "The cevtor can be converted into list of pairs",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "toList",
        "normalized": "a b c-\u003e[(c,b)]",
        "package": "QIO",
        "partial": "List",
        "signature": "v x a-\u003e[(a,x)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:unEmbed",
      "description": {
        "fct-descr": "\u003cp\u003eGiven Equality, we can unembed the EqMonad operations from an AsMonad\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "AsMonad m a -\u003e m a",
        "fct-source": "src/QIO-VecEq.html#unEmbed",
        "fct-type": "function",
        "title": "unEmbed"
      },
      "index": {
        "description": "Given Equality we can unembed the EqMonad operations from an AsMonad",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "unEmbed",
        "normalized": "AsMonad a b-\u003ea b",
        "package": "QIO",
        "partial": "Embed",
        "signature": "AsMonad m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:unVecEqL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "[(a, x)]",
        "fct-source": "src/QIO-VecEq.html#VecEqL",
        "fct-type": "function",
        "title": "unVecEqL"
      },
      "index": {
        "description": "",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "unVecEqL",
        "normalized": "[(a,b)]",
        "package": "QIO",
        "partial": "Vec Eq",
        "signature": "[(a,x)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:vEqAt",
      "description": {
        "fct-descr": "\u003cp\u003eThe amplitude of an element can be found by looking through each element\n until the matchinf one is found.\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "a -\u003e VecEqL x a -\u003e x",
        "fct-source": "src/QIO-VecEq.html#vEqAt",
        "fct-type": "function",
        "title": "vEqAt"
      },
      "index": {
        "description": "The amplitude of an element can be found by looking through each element until the matchinf one is found",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "vEqAt",
        "normalized": "a-\u003eVecEqL b a-\u003eb",
        "package": "QIO",
        "partial": "Eq At",
        "signature": "a-\u003eVecEqL x a-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:vEqPlus",
      "description": {
        "fct-descr": "\u003cp\u003eCombining two vectors is achieved by folding the add operation over\n the second vector\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "VecEqL x a -\u003e VecEqL x a -\u003e VecEqL x a",
        "fct-source": "src/QIO-VecEq.html#vEqPlus",
        "fct-type": "function",
        "title": "vEqPlus"
      },
      "index": {
        "description": "Combining two vectors is achieved by folding the add operation over the second vector",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "vEqPlus",
        "normalized": "VecEqL a b-\u003eVecEqL a b-\u003eVecEqL a b",
        "package": "QIO",
        "partial": "Eq Plus",
        "signature": "VecEqL x a-\u003eVecEqL x a-\u003eVecEqL x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:vEqTimes",
      "description": {
        "fct-descr": "\u003cp\u003eScalar multiplcation is achieved by mapping the multiplication over\n each pair in the vector. Multiplication by 0 is a special case, and will\n remove all the basis states from the vector.\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "x -\u003e VecEqL x a -\u003e VecEqL x a",
        "fct-source": "src/QIO-VecEq.html#vEqTimes",
        "fct-type": "function",
        "title": "vEqTimes"
      },
      "index": {
        "description": "Scalar multiplcation is achieved by mapping the multiplication over each pair in the vector Multiplication by is special case and will remove all the basis states from the vector",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "vEqTimes",
        "normalized": "a-\u003eVecEqL a b-\u003eVecEqL a b",
        "package": "QIO",
        "partial": "Eq Times",
        "signature": "x-\u003eVecEqL x a-\u003eVecEqL x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:vEqZero",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty VecEqL is a wrapper around the empty list\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "VecEqL x a",
        "fct-source": "src/QIO-VecEq.html#vEqZero",
        "fct-type": "function",
        "title": "vEqZero"
      },
      "index": {
        "description": "An empty VecEqL is wrapper around the empty list",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "vEqZero",
        "normalized": "",
        "package": "QIO",
        "partial": "Eq Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QIO/docs/QIO-VecEq.html#v:vzero",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty instance of the vector\n\u003c/p\u003e",
        "fct-module": "QIO.VecEq",
        "fct-package": "QIO",
        "fct-signature": "v x a",
        "fct-source": "src/QIO-VecEq.html#vzero",
        "fct-type": "method",
        "title": "vzero"
      },
      "index": {
        "description": "An empty instance of the vector",
        "hierarchy": "QIO VecEq",
        "module": "QIO.VecEq",
        "name": "vzero",
        "normalized": "",
        "package": "QIO",
        "partial": "",
        "signature": ""
      }
    }
  }
]