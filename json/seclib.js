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
        "word": "seclib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine the classic two-point lattice that refers to public and secret information. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "SecLib.LatticeLH",
          "name": "LatticeLH",
          "package": "seclib",
          "source": "src/SecLib-LatticeLH.html",
          "type": "module"
        },
        "index": {
          "description": "Define the classic two-point lattice that refers to public and secret information",
          "hierarchy": "SecLib LatticeLH",
          "module": "SecLib.LatticeLH",
          "name": "LatticeLH",
          "package": "seclib",
          "partial": "Lattice LH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-LatticeLH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the security level associated to secret information.\n\u003c/p\u003e",
          "module": "SecLib.LatticeLH",
          "name": "H",
          "package": "seclib",
          "source": "src/SecLib-LatticeLH.html#H",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the security level associated to secret information",
          "hierarchy": "SecLib LatticeLH",
          "module": "SecLib.LatticeLH",
          "name": "H",
          "package": "seclib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-LatticeLH.html#t:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the security level associated to public information.\n\u003c/p\u003e",
          "module": "SecLib.LatticeLH",
          "name": "L",
          "package": "seclib",
          "source": "src/SecLib-LatticeLH.html#L",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the security level associated to public information",
          "hierarchy": "SecLib LatticeLH",
          "module": "SecLib.LatticeLH",
          "name": "L",
          "package": "seclib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-LatticeLH.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe attacker is at the terminal.\n\u003c/p\u003e",
          "module": "SecLib.LatticeLH",
          "name": "scr",
          "package": "seclib",
          "signature": "Screen L",
          "source": "src/SecLib-LatticeLH.html#scr",
          "type": "function"
        },
        "index": {
          "description": "The attacker is at the terminal",
          "hierarchy": "SecLib LatticeLH",
          "module": "SecLib.LatticeLH",
          "name": "scr",
          "package": "seclib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-LatticeLH.html#v:scr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe security library interface for \u003cem\u003etrustworthy modules\u003c/em\u003e. \n     It is the same interface as the one for untrustworthy code (module \u003ca\u003eUntrustworthy\u003c/a\u003e) with the addition of \n     functions \u003ccode\u003e\u003ca\u003ereveal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erevealIO\u003c/a\u003e\u003c/code\u003e to respectively break the abstraction of the security monads \u003ccode\u003e\u003ca\u003eSec\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSecIO\u003c/a\u003e\u003c/code\u003e \n     as well as the declassification \n     combinators \u003ccode\u003e\u003ca\u003ehatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003entimes\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eflock\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edlm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Trustworthy",
          "package": "seclib",
          "source": "src/SecLib-Trustworthy.html",
          "type": "module"
        },
        "index": {
          "description": "The security library interface for trustworthy modules It is the same interface as the one for untrustworthy code module Untrustworthy with the addition of functions reveal and revealIO to respectively break the abstraction of the security monads Sec and SecIO as well as the declassification combinators hatch ntimes flock and dlm",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Trustworthy",
          "package": "seclib",
          "partial": "Trustworthy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SecLib.Trustworthy",
          "name": "Attacker",
          "package": "seclib",
          "source": "src/SecLib-Lattice.html#Attacker",
          "type": "class"
        },
        "index": {
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Attacker",
          "package": "seclib",
          "partial": "Attacker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Attacker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003edlm\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Authority",
          "package": "seclib",
          "source": "src/SecLib-Declassification.html#Authority",
          "type": "data"
        },
        "index": {
          "description": "Used by dlm",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Authority",
          "package": "seclib",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003eflock\u003c/a\u003e\u003c/code\u003e. It represents computations that close flow locks.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Close",
          "package": "seclib",
          "source": "src/SecLib-Declassification.html#Close",
          "type": "type"
        },
        "index": {
          "description": "Used by flock It represents computations that close flow locks",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Close",
          "package": "seclib",
          "partial": "Close",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent files   \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "File",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#File",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent files",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "File",
          "package": "seclib",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SecLib.Trustworthy",
          "name": "Less",
          "package": "seclib",
          "source": "src/SecLib-Lattice.html#Less",
          "type": "class"
        },
        "index": {
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Less",
          "package": "seclib",
          "partial": "Less",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent secure locations.\n    This data type is internally used to easily introduce new side-effects into this module.\n    Type \u003ccode\u003et\u003c/code\u003e is the raw type needed to perform side-effects. For instance, \n    \u003ccode\u003et\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e for files and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e for references. Type \u003ccode\u003es\u003c/code\u003e is the confidentiality level of the \n    location. Type \u003ccode\u003ea\u003c/code\u003e is the type of values written and read form \u003ccode\u003et\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Loc",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "Represent secure locations This data type is internally used to easily introduce new side-effects into this module Type is the raw type needed to perform side-effects For instance is FilePath for files and IORef for references Type is the confidentiality level of the location Type is the type of values written and read form",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Loc",
          "package": "seclib",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003eflock\u003c/a\u003e\u003c/code\u003e. It represents computations that open flow locks.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Open",
          "package": "seclib",
          "source": "src/SecLib-Declassification.html#Open",
          "type": "type"
        },
        "index": {
          "description": "Used by flock It represents computations that open flow locks",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Open",
          "package": "seclib",
          "partial": "Open",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent references. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Ref",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#Ref",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent references",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Ref",
          "package": "seclib",
          "partial": "Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation that represents the screen-keyword. Here, we can choose between \n     a) The attacker is on the screen-keyword, which implies that when taking input \n     from the screen has an effect -- the attacker can see when the input is required. \n     Therefore, we need to implement taking input from the keyword using \u003ccode\u003eeffectful_read\u003c/code\u003e.\n     b) The attacker is not on the screen-keyword. In this case, we implement \n     reading using \u003ccode\u003eeffectless_read\u003c/code\u003e. We choose option a) as a model.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Screen",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#Screen",
          "type": "type"
        },
        "index": {
          "description": "Location that represents the screen-keyword Here we can choose between The attacker is on the screen-keyword which implies that when taking input from the screen has an effect the attacker can see when the input is required Therefore we need to implement taking input from the keyword using effectful read The attacker is not on the screen-keyword In this case we implement reading using effectless read We choose option as model",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Screen",
          "package": "seclib",
          "partial": "Screen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents pure values of type \u003ccode\u003ea\u003c/code\u003e at confidentiality level \u003ccode\u003es\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "Sec",
          "package": "seclib",
          "source": "src/SecLib-Sec.html#Sec",
          "type": "data"
        },
        "index": {
          "description": "This type represents pure values of type at confidentiality level",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "Sec",
          "package": "seclib",
          "partial": "Sec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:Sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents secure side-effect computations. \n    These computations perform side-effects at security level, at least, \u003ccode\u003es\u003c/code\u003e and return\n    a value of type \u003ccode\u003ea\u003c/code\u003e with confidentiality level, at least, \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "SecIO",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecIO",
          "type": "data"
        },
        "index": {
          "description": "This type represents secure side-effect computations These computations perform side-effects at security level at least and return value of type with confidentiality level at least",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "SecIO",
          "package": "seclib",
          "partial": "Sec IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:SecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines a socket address at confidentiality level \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "SecSockAddr",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecSockAddr",
          "type": "data"
        },
        "index": {
          "description": "It defines socket address at confidentiality level",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "SecSockAddr",
          "package": "seclib",
          "partial": "Sec Sock Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:SecSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent network communications via sockets. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "SecSocket",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecSocket",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent network communications via sockets",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "SecSocket",
          "package": "seclib",
          "partial": "Sec Socket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#t:SecSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SecLib.Trustworthy",
          "name": "MkLoc",
          "package": "seclib",
          "signature": "MkLoc t",
          "source": "src/SecLib-SecIO.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "MkLoc",
          "package": "seclib",
          "partial": "Mk Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:MkLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "acceptSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e SecIO s (SecSocket s, SecSockAddr s)",
          "source": "src/SecLib-SecIO.html#acceptSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:acceptSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:acceptSecIO\"]"
        },
        "index": {
          "description": "Wrapper for accept",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "acceptSecIO",
          "normalized": "SecSocket a-\u003eSecIO a(SecSocket a,SecSockAddr a)",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "SecSocket s-\u003eSecIO s(SecSocket s,SecSockAddr s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:acceptSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "bindSocketSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e SecSockAddr s -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#bindSocketSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:bindSocketSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:bindSocketSecIO\"]"
        },
        "index": {
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "bindSocketSecIO",
          "normalized": "SecSocket a-\u003eSecSockAddr a-\u003eSecIO a()",
          "package": "seclib",
          "partial": "Socket Sec IO",
          "signature": "SecSocket s-\u003eSecSockAddr s-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:bindSocketSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertify that a piece of code have certain authority. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "certify",
          "package": "seclib",
          "signature": "sh -\u003e Authority sh -\u003e SecIO s a -\u003e SecIO s a",
          "source": "src/SecLib-Declassification.html#certify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:certify\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:certify\"]"
        },
        "index": {
          "description": "Certify that piece of code have certain authority",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "certify",
          "normalized": "a-\u003eAuthority a-\u003eSecIO b c-\u003eSecIO b c",
          "package": "seclib",
          "signature": "sh-\u003eAuthority sh-\u003eSecIO s a-\u003eSecIO s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:certify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a socket. It is a wrapper for \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "connectSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e SecSockAddr s -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#connectSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:connectSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:connectSecIO\"]"
        },
        "index": {
          "description": "Connects to socket It is wrapper for connect",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "connectSecIO",
          "normalized": "SecSocket a-\u003eSecSockAddr a-\u003eSecIO a()",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "SecSocket s-\u003eSecSockAddr s-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:connectSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function allows to an escape hatch to be applied only when \n      the running code can be certified with some authority. The certification process is just to show that \n      the code has access to a constructor of type \u003ccode\u003esh\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "dlm",
          "package": "seclib",
          "signature": "(Sec sh a -\u003e SecIO s (Sec sl b)) -\u003e IO (Sec sh a -\u003e SecIO s (Sec sl b), Authority sh)",
          "source": "src/SecLib-Declassification.html#dlm",
          "type": "function"
        },
        "index": {
          "description": "This function allows to an escape hatch to be applied only when the running code can be certified with some authority The certification process is just to show that the code has access to constructor of type sh",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "dlm",
          "normalized": "(Sec a b-\u003eSecIO c(Sec d e))-\u003eIO(Sec a b-\u003eSecIO c(Sec d e),Authority a)",
          "package": "seclib",
          "signature": "(Sec sh a-\u003eSecIO s(Sec sl b))-\u003eIO(Sec sh a-\u003eSecIO s(Sec sl b),Authority sh)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:dlm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function associates a flow lock to an escape hatch. \n      Then, the escape hatch \n      can be successfully applied when the flow lock is open. \n      The escape hatch cannot by applied after closing the flock lock.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "flock",
          "package": "seclib",
          "signature": "(Sec sh a -\u003e SecIO s (Sec sl b)) -\u003e IO (Sec sh a -\u003e SecIO s (Sec sl b), Open s, Close s)",
          "source": "src/SecLib-Declassification.html#flock",
          "type": "function"
        },
        "index": {
          "description": "This function associates flow lock to an escape hatch Then the escape hatch can be successfully applied when the flow lock is open The escape hatch cannot by applied after closing the flock lock",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "flock",
          "normalized": "(Sec a b-\u003eSecIO c(Sec d e))-\u003eIO(Sec a b-\u003eSecIO c(Sec d e),Open c,Close c)",
          "package": "seclib",
          "signature": "(Sec sh a-\u003eSecIO s(Sec sl b))-\u003eIO(Sec sh a-\u003eSecIO s(Sec sl b),Open s,Close s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:flock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure input from the keyword.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "getLineSecIO",
          "package": "seclib",
          "signature": "Screen s -\u003e SecIO s String",
          "source": "src/SecLib-SecIO.html#getLineSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:getLineSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:getLineSecIO\"]"
        },
        "index": {
          "description": "Secure input from the keyword",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "getLineSecIO",
          "normalized": "Screen a-\u003eSecIO a String",
          "package": "seclib",
          "partial": "Line Sec IO",
          "signature": "Screen s-\u003eSecIO s String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:getLineSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an escape hatch. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "hatch",
          "package": "seclib",
          "signature": "(a -\u003e b) -\u003e Sec sh a -\u003e SecIO s (Sec sl b)",
          "source": "src/SecLib-Declassification.html#hatch",
          "type": "function"
        },
        "index": {
          "description": "Create an escape hatch",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "hatch",
          "normalized": "(a-\u003eb)-\u003eSec c a-\u003eSecIO d(Sec e b)",
          "package": "seclib",
          "signature": "(a-\u003eb)-\u003eSec sh a-\u003eSecIO s(Sec sl b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:hatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003einet_addr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "inet_addrSecIO",
          "package": "seclib",
          "signature": "String -\u003e SecIO s HostAddress",
          "source": "src/SecLib-SecIO.html#inet_addrSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:inet_addrSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:inet_addrSecIO\"]"
        },
        "index": {
          "description": "Wrapper for inet addr",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "inet_addrSecIO",
          "normalized": "String-\u003eSecIO a HostAddress",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "String-\u003eSecIO s HostAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:inet_addrSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method determines that information at security level \u003ccode\u003es\u003c/code\u003e can flow to security level \u003ccode\u003es'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "less",
          "package": "seclib",
          "signature": "s -\u003e s' -\u003e ()",
          "source": "src/SecLib-Lattice.html#less",
          "type": "method"
        },
        "index": {
          "description": "This method determines that information at security level can flow to security level",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "less",
          "normalized": "a-\u003eb-\u003e()",
          "package": "seclib",
          "signature": "s-\u003es'-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreation of files is only allowed by trustworhty code. \nObserve that by creating a file, the \nconfidentiality level of its content is being established.\nTherefore, the attacker can create a public file using the name \nof a secret file and just read it! |\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "mkFile",
          "package": "seclib",
          "signature": "FilePath -\u003e File s",
          "source": "src/SecLib-SecIO.html#mkFile",
          "type": "function"
        },
        "index": {
          "description": "Creation of files is only allowed by trustworhty code Observe that by creating file the confidentiality level of its content is being established Therefore the attacker can create public file using the name of secret file and just read it",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "mkFile",
          "normalized": "FilePath-\u003eFile a",
          "package": "seclib",
          "partial": "File",
          "signature": "FilePath-\u003eFile s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:mkFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt sets the security level of the standard input/output \n(usually the keyboard/screen).\nTo be used only by trustworthy code. |\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "mkScreen",
          "package": "seclib",
          "signature": "() -\u003e Screen s",
          "source": "src/SecLib-SecIO.html#mkScreen",
          "type": "function"
        },
        "index": {
          "description": "It sets the security level of the standard input output usually the keyboard screen To be used only by trustworthy code",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "mkScreen",
          "normalized": "()-\u003eScreen a",
          "package": "seclib",
          "partial": "Screen",
          "signature": "()-\u003eScreen s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:mkScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure creation of a reference. We assume that the attacker \n    has no manner to observe the side-effect of creating a reference from inside of the program, \n    for example, by inspecting the amount of free memory. At the moment, there are no such functions inside of \n    the monad \u003ccode\u003e\u003ca\u003eSecIO\u003c/a\u003e\u003c/code\u003e. Nevertheless, if there is a consideration of include, for instance, a function that returns \n    the amount of free memory in the program, then the function type of \u003ccode\u003e\u003ca\u003enewIORefSecIO\u003c/a\u003e\u003c/code\u003e needs \n    to be changed. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "newIORefSecIO",
          "package": "seclib",
          "signature": "s -\u003e a -\u003e SecIO s' (Ref s a)",
          "source": "src/SecLib-SecIO.html#newIORefSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:newIORefSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:newIORefSecIO\"]"
        },
        "index": {
          "description": "Secure creation of reference We assume that the attacker has no manner to observe the side-effect of creating reference from inside of the program for example by inspecting the amount of free memory At the moment there are no such functions inside of the monad SecIO Nevertheless if there is consideration of include for instance function that returns the amount of free memory in the program then the function type of newIORefSecIO needs to be changed",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "newIORefSecIO",
          "normalized": "a-\u003eb-\u003eSecIO c(Ref a b)",
          "package": "seclib",
          "partial": "IORef Sec IO",
          "signature": "s-\u003ea-\u003eSecIO s'(Ref s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:newIORefSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the number of times that an escape hatch can be applied by \n      a single run of the program.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "ntimes",
          "package": "seclib",
          "signature": "Int -\u003e (Sec sh a -\u003e SecIO s (Sec sl b)) -\u003e IO (Sec sh a -\u003e SecIO s (Sec sl b))",
          "source": "src/SecLib-Declassification.html#ntimes",
          "type": "function"
        },
        "index": {
          "description": "Limit the number of times that an escape hatch can be applied by single run of the program",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "ntimes",
          "normalized": "Int-\u003e(Sec a b-\u003eSecIO c(Sec d e))-\u003eIO(Sec a b-\u003eSecIO c(Sec d e))",
          "package": "seclib",
          "signature": "Int-\u003e(Sec sh a-\u003eSecIO s(Sec sl b))-\u003eIO(Sec sh a-\u003eSecIO s(Sec sl b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:ntimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method determines the observational power of the attacker.\n       Attackers are then capable to break the abstraction of the \n       security monads in module \u003ca\u003eSec\u003c/a\u003e and \u003ca\u003eSecIO\u003c/a\u003e for security levels\n       below or equal than \u003ccode\u003es\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "observe",
          "package": "seclib",
          "signature": "s -\u003e ()",
          "source": "src/SecLib-Lattice.html#observe",
          "type": "method"
        },
        "index": {
          "description": "This method determines the observational power of the attacker Attackers are then capable to break the abstraction of the security monads in module Sec and SecIO for security levels below or equal than",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "observe",
          "normalized": "a-\u003e()",
          "package": "seclib",
          "signature": "s-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely downgrade the security level indicating the side-effects performed by the computation. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "plug",
          "package": "seclib",
          "signature": "SecIO sh a -\u003e SecIO sl (Sec sh a)",
          "source": "src/SecLib-SecIO.html#plug",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:plug\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:plug\"]"
        },
        "index": {
          "description": "Safely downgrade the security level indicating the side-effects performed by the computation",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "plug",
          "normalized": "SecIO a b-\u003eSecIO c(Sec a b)",
          "package": "seclib",
          "signature": "SecIO sh a-\u003eSecIO sl(Sec sh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:plug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssing a port to the \u003ccode\u003e\u003ca\u003eAF_INET\u003c/a\u003e\u003c/code\u003e sockets. Port numbers are public. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "portInet",
          "package": "seclib",
          "signature": "PortNumber -\u003e SecSockAddr s -\u003e SecSockAddr s",
          "source": "src/SecLib-SecIO.html#portInet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:portInet\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:portInet\"]"
        },
        "index": {
          "description": "Assing port to the AF INET sockets Port numbers are public",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "portInet",
          "normalized": "PortNumber-\u003eSecSockAddr a-\u003eSecSockAddr a",
          "package": "seclib",
          "partial": "Inet",
          "signature": "PortNumber-\u003eSecSockAddr s-\u003eSecSockAddr s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:portInet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveal values that the attacker can observe.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "public",
          "package": "seclib",
          "signature": "Sec s a -\u003e a",
          "source": "src/SecLib-Sec.html#public",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:public\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:public\"]"
        },
        "index": {
          "description": "Reveal values that the attacker can observe",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "public",
          "normalized": "Sec a b-\u003eb",
          "package": "seclib",
          "signature": "Sec s a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure output to the screen.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "putStrLnSecIO",
          "package": "seclib",
          "signature": "Screen s -\u003e String -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#putStrLnSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:putStrLnSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:putStrLnSecIO\"]"
        },
        "index": {
          "description": "Secure output to the screen",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "putStrLnSecIO",
          "normalized": "Screen a-\u003eString-\u003eSecIO a()",
          "package": "seclib",
          "partial": "Str Ln Sec IO",
          "signature": "Screen s-\u003eString-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:putStrLnSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure output to the screen.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "putStrSecIO",
          "package": "seclib",
          "signature": "Screen s -\u003e String -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#putStrSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:putStrSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:putStrSecIO\"]"
        },
        "index": {
          "description": "Secure output to the screen",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "putStrSecIO",
          "normalized": "Screen a-\u003eString-\u003eSecIO a()",
          "package": "seclib",
          "partial": "Str Sec IO",
          "signature": "Screen s-\u003eString-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:putStrSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure read operation for files.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "readFileSecIO",
          "package": "seclib",
          "signature": "File s -\u003e SecIO s' (Sec s String)",
          "source": "src/SecLib-SecIO.html#readFileSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:readFileSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:readFileSecIO\"]"
        },
        "index": {
          "description": "Secure read operation for files",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "readFileSecIO",
          "normalized": "File a-\u003eSecIO b(Sec a String)",
          "package": "seclib",
          "partial": "File Sec IO",
          "signature": "File s-\u003eSecIO s'(Sec s String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:readFileSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure read operation for references.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "readRefSecIO",
          "package": "seclib",
          "signature": "Ref s a -\u003e SecIO s' (Sec s a)",
          "source": "src/SecLib-SecIO.html#readRefSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:readRefSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:readRefSecIO\"]"
        },
        "index": {
          "description": "Secure read operation for references",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "readRefSecIO",
          "normalized": "Ref a b-\u003eSecIO c(Sec a b)",
          "package": "seclib",
          "partial": "Ref Sec IO",
          "signature": "Ref s a-\u003eSecIO s'(Sec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:readRefSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure read operation for sockets. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "recvSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e Int -\u003e SecIO s String",
          "source": "src/SecLib-SecIO.html#recvSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:recvSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:recvSecIO\"]"
        },
        "index": {
          "description": "Secure read operation for sockets",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "recvSecIO",
          "normalized": "SecSocket a-\u003eInt-\u003eSecIO a String",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "SecSocket s-\u003eInt-\u003eSecIO s String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:recvSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak the abstraction provide by \u003ccode\u003e\u003ca\u003eSec\u003c/a\u003e\u003c/code\u003e. \u003cem\u003eIt is used only in trustworthy code\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "reveal",
          "package": "seclib",
          "signature": "Sec s a -\u003e a",
          "source": "src/SecLib-Sec.html#reveal",
          "type": "function"
        },
        "index": {
          "description": "Break the abstraction provide by Sec It is used only in trustworthy code",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "reveal",
          "normalized": "Sec a b-\u003eb",
          "package": "seclib",
          "signature": "Sec s a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:reveal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak the abstraction provided by \u003ccode\u003e\u003ca\u003eSecIO\u003c/a\u003e\u003c/code\u003e. It is used only in trustworthy code!\n\u003c/p\u003e",
          "module": "SecLib.Trustworthy",
          "name": "revealIO",
          "package": "seclib",
          "signature": "SecIO s a -\u003e IO (Sec s a)",
          "source": "src/SecLib-SecIO.html#revealIO",
          "type": "function"
        },
        "index": {
          "description": "Break the abstraction provided by SecIO It is used only in trustworthy code",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "revealIO",
          "normalized": "SecIO a b-\u003eIO(Sec a b)",
          "package": "seclib",
          "partial": "IO",
          "signature": "SecIO s a-\u003eIO(Sec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:revealIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute secure computations.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "run",
          "package": "seclib",
          "signature": "SecIO s a -\u003e IO (Sec s a)",
          "source": "src/SecLib-SecIO.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:run\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:run\"]"
        },
        "index": {
          "description": "Execute secure computations",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "run",
          "normalized": "SecIO a b-\u003eIO(Sec a b)",
          "package": "seclib",
          "signature": "SecIO s a-\u003eIO(Sec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn if a socket is bound to some address.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "sIsBoundSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e SecIO s' (Sec s Bool)",
          "source": "src/SecLib-SecIO.html#sIsBoundSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sIsBoundSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:sIsBoundSecIO\"]"
        },
        "index": {
          "description": "Return if socket is bound to some address",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "sIsBoundSecIO",
          "normalized": "SecSocket a-\u003eSecIO b(Sec a Bool)",
          "package": "seclib",
          "partial": "Is Bound Sec IO",
          "signature": "SecSocket s-\u003eSecIO s'(Sec s Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sIsBoundSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines a given socket is connected. It is a wrapper for \u003ccode\u003e\u003ca\u003esIsConnected\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "sIsConnectedSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e SecIO s' (Sec s Bool)",
          "source": "src/SecLib-SecIO.html#sIsConnectedSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sIsConnectedSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:sIsConnectedSecIO\"]"
        },
        "index": {
          "description": "Determines given socket is connected It is wrapper for sIsConnected",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "sIsConnectedSecIO",
          "normalized": "SecSocket a-\u003eSecIO b(Sec a Bool)",
          "package": "seclib",
          "partial": "Is Connected Sec IO",
          "signature": "SecSocket s-\u003eSecIO s'(Sec s Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sIsConnectedSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is a derived operation for reading from files (legacy code).\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "s_read",
          "package": "seclib",
          "signature": "File s' -\u003e SecIO s String",
          "source": "src/SecLib-SecIO.html#s_read",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:s_read\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:s_read\"]"
        },
        "index": {
          "description": "It is derived operation for reading from files legacy code",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "s_read",
          "normalized": "File a-\u003eSecIO b String",
          "package": "seclib",
          "signature": "File s'-\u003eSecIO s String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:s_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is a derived operation for writing into files (legacy code).\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "s_write",
          "package": "seclib",
          "signature": "File s' -\u003e String -\u003e SecIO s (Sec s' ())",
          "source": "src/SecLib-SecIO.html#s_write",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:s_write\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:s_write\"]"
        },
        "index": {
          "description": "It is derived operation for writing into files legacy code",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "s_write",
          "normalized": "File a-\u003eString-\u003eSecIO b(Sec a())",
          "package": "seclib",
          "signature": "File s'-\u003eString-\u003eSecIO s(Sec s'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:s_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure write operation for sockets. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "sendSecIO",
          "package": "seclib",
          "signature": "SecSocket s -\u003e String -\u003e SecIO s Int",
          "source": "src/SecLib-SecIO.html#sendSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sendSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:sendSecIO\"]"
        },
        "index": {
          "description": "Secure write operation for sockets",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "sendSecIO",
          "normalized": "SecSocket a-\u003eString-\u003eSecIO a Int",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "SecSocket s-\u003eString-\u003eSecIO s Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:sendSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a socket at confidentiality level \u003ccode\u003es\u003c/code\u003e. The creation has no visible side-effects, e.g. \n     sockets cannot be compared. This function is essentially a wrapper for \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "socketSecIO",
          "package": "seclib",
          "signature": "Family -\u003e SocketType -\u003e ProtocolNumber -\u003e SecIO s' (SecSocket s)",
          "source": "src/SecLib-SecIO.html#socketSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:socketSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:socketSecIO\"]"
        },
        "index": {
          "description": "Create socket at confidentiality level The creation has no visible side-effects e.g sockets cannot be compared This function is essentially wrapper for socket",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "socketSecIO",
          "normalized": "Family-\u003eSocketType-\u003eProtocolNumber-\u003eSecIO a(SecSocket b)",
          "package": "seclib",
          "partial": "Sec IO",
          "signature": "Family-\u003eSocketType-\u003eProtocolNumber-\u003eSecIO s'(SecSocket s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:socketSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the confidentiality level of values.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "up",
          "package": "seclib",
          "signature": "Sec s a -\u003e Sec s' a",
          "source": "src/SecLib-Sec.html#up",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:up\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:up\"]"
        },
        "index": {
          "description": "Raise the confidentiality level of values",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "up",
          "normalized": "Sec a b-\u003eSec c b",
          "package": "seclib",
          "signature": "Sec s a-\u003eSec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a pure confidential value into a secure side-effect computation. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "value",
          "package": "seclib",
          "signature": "Sec s a -\u003e SecIO s a",
          "source": "src/SecLib-SecIO.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:value\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:value\"]"
        },
        "index": {
          "description": "Lift pure confidential value into secure side-effect computation",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "value",
          "normalized": "Sec a b-\u003eSecIO a b",
          "package": "seclib",
          "signature": "Sec s a-\u003eSecIO s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure write operation for files. \n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "writeFileSecIO",
          "package": "seclib",
          "signature": "File s -\u003e String -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#writeFileSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:writeFileSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:writeFileSecIO\"]"
        },
        "index": {
          "description": "Secure write operation for files",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "writeFileSecIO",
          "normalized": "File a-\u003eString-\u003eSecIO a()",
          "package": "seclib",
          "partial": "File Sec IO",
          "signature": "File s-\u003eString-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:writeFileSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecure write operation for references.\n\u003c/p\u003e",
          "module": "[\"SecLib.Trustworthy\",\"SecLib.Untrustworthy\"]",
          "name": "writeRefSecIO",
          "package": "seclib",
          "signature": "Ref s a -\u003e a -\u003e SecIO s ()",
          "source": "src/SecLib-SecIO.html#writeRefSecIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:writeRefSecIO\",\"http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#v:writeRefSecIO\"]"
        },
        "index": {
          "description": "Secure write operation for references",
          "hierarchy": "SecLib Trustworthy",
          "module": "SecLib.Trustworthy",
          "name": "writeRefSecIO",
          "normalized": "Ref a b-\u003eb-\u003eSecIO a()",
          "package": "seclib",
          "partial": "Ref Sec IO",
          "signature": "Ref s a-\u003ea-\u003eSecIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Trustworthy.html#v:writeRefSecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe security library.  This is the \u003cem\u003eonly\u003c/em\u003e module of the library to be imported by untrustworthy code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "Untrustworthy",
          "package": "seclib",
          "source": "src/SecLib-Untrustworthy.html",
          "type": "module"
        },
        "index": {
          "description": "The security library This is the only module of the library to be imported by untrustworthy code",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Untrustworthy",
          "package": "seclib",
          "partial": "Untrustworthy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SecLib.Untrustworthy",
          "name": "Attacker",
          "package": "seclib",
          "source": "src/SecLib-Lattice.html#Attacker",
          "type": "class"
        },
        "index": {
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Attacker",
          "package": "seclib",
          "partial": "Attacker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Attacker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003edlm\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "Authority",
          "package": "seclib",
          "source": "src/SecLib-Declassification.html#Authority",
          "type": "data"
        },
        "index": {
          "description": "Used by dlm",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Authority",
          "package": "seclib",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent files   \n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "File",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#File",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent files",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "File",
          "package": "seclib",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SecLib.Untrustworthy",
          "name": "Less",
          "package": "seclib",
          "source": "src/SecLib-Lattice.html#Less",
          "type": "class"
        },
        "index": {
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Less",
          "package": "seclib",
          "partial": "Less",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent references. \n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "Ref",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#Ref",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent references",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Ref",
          "package": "seclib",
          "partial": "Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation that represents the screen-keyword. Here, we can choose between \n     a) The attacker is on the screen-keyword, which implies that when taking input \n     from the screen has an effect -- the attacker can see when the input is required. \n     Therefore, we need to implement taking input from the keyword using \u003ccode\u003eeffectful_read\u003c/code\u003e.\n     b) The attacker is not on the screen-keyword. In this case, we implement \n     reading using \u003ccode\u003eeffectless_read\u003c/code\u003e. We choose option a) as a model.\n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "Screen",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#Screen",
          "type": "type"
        },
        "index": {
          "description": "Location that represents the screen-keyword Here we can choose between The attacker is on the screen-keyword which implies that when taking input from the screen has an effect the attacker can see when the input is required Therefore we need to implement taking input from the keyword using effectful read The attacker is not on the screen-keyword In this case we implement reading using effectless read We choose option as model",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Screen",
          "package": "seclib",
          "partial": "Screen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents pure values of type \u003ccode\u003ea\u003c/code\u003e at confidentiality level \u003ccode\u003es\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "Sec",
          "package": "seclib",
          "source": "src/SecLib-Sec.html#Sec",
          "type": "data"
        },
        "index": {
          "description": "This type represents pure values of type at confidentiality level",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "Sec",
          "package": "seclib",
          "partial": "Sec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:Sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents secure side-effect computations. \n    These computations perform side-effects at security level, at least, \u003ccode\u003es\u003c/code\u003e and return\n    a value of type \u003ccode\u003ea\u003c/code\u003e with confidentiality level, at least, \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "SecIO",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecIO",
          "type": "data"
        },
        "index": {
          "description": "This type represents secure side-effect computations These computations perform side-effects at security level at least and return value of type with confidentiality level at least",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "SecIO",
          "package": "seclib",
          "partial": "Sec IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:SecIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt defines a socket address at confidentiality level \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "SecSockAddr",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecSockAddr",
          "type": "data"
        },
        "index": {
          "description": "It defines socket address at confidentiality level",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "SecSockAddr",
          "package": "seclib",
          "partial": "Sec Sock Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:SecSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations that represent network communications via sockets. \n\u003c/p\u003e",
          "module": "SecLib.Untrustworthy",
          "name": "SecSocket",
          "package": "seclib",
          "source": "src/SecLib-SecIO.html#SecSocket",
          "type": "type"
        },
        "index": {
          "description": "Locations that represent network communications via sockets",
          "hierarchy": "SecLib Untrustworthy",
          "module": "SecLib.Untrustworthy",
          "name": "SecSocket",
          "package": "seclib",
          "partial": "Sec Socket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seclib/docs/SecLib-Untrustworthy.html#t:SecSocket"
      }
    }
  ]
]