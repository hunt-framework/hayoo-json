[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library deals with the common task of pseudo-random number\n generation. The library makes it possible to generate repeatable\n results, by starting with a specified initial random number generator,\n or to get different results on each run by using the system-initialised\n generator or by supplying a seed from some other source.\n\u003c/p\u003e\u003cp\u003eThe library is split into two layers: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A core \u003cem\u003erandom number generator\u003c/em\u003e provides a supply of bits.\n   The class \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e provides a common interface to such generators.\n   The library provides one instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e, the abstract\n   data type \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e.  Programmers may, of course, supply their own\n   instances of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The class \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e provides a way to extract values of a particular\n   type from a random number generator.  For example, the \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\n   instance of \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e allows one to generate random values of type\n   \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis implementation uses the Portable Combined Generator of L'Ecuyer\n [\u003ca\u003eSystem.Random\u003c/a\u003e] for 32-bit computers, transliterated by\n Lennart Augustsson.  It has a period of roughly 2.30584e18.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "module",
        "fct-source": "src/System-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "This library deals with the common task of pseudo-random number generation The library makes it possible to generate repeatable results by starting with specified initial random number generator or to get different results on each run by using the system-initialised generator or by supplying seed from some other source The library is split into two layers core random number generator provides supply of bits The class RandomGen provides common interface to such generators The library provides one instance of RandomGen the abstract data type StdGen Programmers may of course supply their own instances of RandomGen The class Random provides way to extract values of particular type from random number generator For example the Float instance of Random allows one to generate random values of type Float This implementation uses the Portable Combined Generator of Ecuyer System.Random for bit computers transliterated by Lennart Augustsson It has period of roughly e18",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "Random",
        "normalized": "",
        "package": "random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#t:Random",
      "description": {
        "fct-descr": "\u003cp\u003eWith a source of random number supply in hand, the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e class allows the\nprogrammer to extract random values of a variety of types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "class",
        "fct-source": "src/System-Random.html#Random",
        "fct-type": "class",
        "title": "Random"
      },
      "index": {
        "description": "With source of random number supply in hand the Random class allows the programmer to extract random values of variety of types Minimal complete definition randomR and random",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "Random",
        "normalized": "",
        "package": "random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#t:RandomGen",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e provides a common interface to random number\n generators.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "class",
        "fct-source": "src/System-Random.html#RandomGen",
        "fct-type": "class",
        "title": "RandomGen"
      },
      "index": {
        "description": "The class RandomGen provides common interface to random number generators",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "RandomGen",
        "normalized": "",
        "package": "random",
        "partial": "Random Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#t:StdGen",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e of at least 30 bits.\n\u003c/p\u003e\u003cp\u003eThe result of repeatedly using \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e should be at least as statistically\nrobust as the \u003cem\u003eMinimal Standard Random Number Generator\u003c/em\u003e described by\n[\u003ca\u003eSystem.Random\u003c/a\u003e, \u003ca\u003eSystem.Random\u003c/a\u003e].\nUntil more is known about implementations of \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, all we require is\nthat \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e deliver generators that are (a) not identical and\n(b) independently robust in the sense just given.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instances of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e provide a primitive way to save the\nstate of a random number generator.\nIt is required that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e g) == g\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition, \u003ccode\u003e\u003ca\u003ereads\u003c/a\u003e\u003c/code\u003e may be used to map an arbitrary string (not necessarily one\nproduced by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e) onto a value of type \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e. In general, the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\ninstance of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e has the following properties: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It guarantees to succeed on any string. \n\u003c/li\u003e\u003cli\u003e It guarantees to consume only a finite portion of the string. \n\u003c/li\u003e\u003cli\u003e Different argument strings are likely to result in different results.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "data",
        "fct-source": "src/System-Random.html#StdGen",
        "fct-type": "data",
        "title": "StdGen"
      },
      "index": {
        "description": "The StdGen instance of RandomGen has genRange of at least bits The result of repeatedly using next should be at least as statistically robust as the Minimal Standard Random Number Generator described by System.Random System.Random Until more is known about implementations of split all we require is that split deliver generators that are not identical and independently robust in the sense just given The Show and Read instances of StdGen provide primitive way to save the state of random number generator It is required that read show In addition reads may be used to map an arbitrary string not necessarily one produced by show onto value of type StdGen In general the Read instance of StdGen has the following properties It guarantees to succeed on any string It guarantees to consume only finite portion of the string Different argument strings are likely to result in different results",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "StdGen",
        "normalized": "",
        "package": "random",
        "partial": "Std Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:genRange",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e operation yields the range of values returned by\n the generator.\n\u003c/p\u003e\u003cp\u003eIt is required that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e(a,b) = \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e, then \u003ccode\u003ea \u003c b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e always returns a pair of defined \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe second condition ensures that \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e cannot examine its\n argument, and hence the value it returns can be determined only by the\n instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.  That in turn allows an implementation to make\n a single call to \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e to establish a generator's range, without\n being concerned that the generator returned by (say) \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e might have\n a different range to the generator passed to \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition spans the full range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "g -\u003e (Int, Int)",
        "fct-source": "src/System-Random.html#genRange",
        "fct-type": "method",
        "title": "genRange"
      },
      "index": {
        "description": "The genRange operation yields the range of values returned by the generator It is required that If genRange then genRange always returns pair of defined Int The second condition ensures that genRange cannot examine its argument and hence the value it returns can be determined only by the instance of RandomGen That in turn allows an implementation to make single call to genRange to establish generator range without being concerned that the generator returned by say next might have different range to the generator passed to next The default definition spans the full range of Int",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "genRange",
        "normalized": "a-\u003e(Int,Int)",
        "package": "random",
        "partial": "Range",
        "signature": "g-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:getStdGen",
      "description": {
        "fct-descr": "\u003cp\u003eGets the global random number generator.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "IO StdGen",
        "fct-source": "src/System-Random.html#getStdGen",
        "fct-type": "function",
        "title": "getStdGen"
      },
      "index": {
        "description": "Gets the global random number generator",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "getStdGen",
        "normalized": "",
        "package": "random",
        "partial": "Std Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:getStdRandom",
      "description": {
        "fct-descr": "\u003cp\u003eUses the supplied function to get a value from the current global\nrandom generator, and updates the global generator with the new generator\nreturned by the function. For example, \u003ccode\u003erollDice\u003c/code\u003e gets a random integer\nbetween 1 and 6:\n\u003c/p\u003e\u003cpre\u003e  rollDice :: IO Int\n  rollDice = getStdRandom (randomR (1,6))\n\u003c/pre\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "(StdGen -\u003e (a, StdGen)) -\u003e IO a",
        "fct-source": "src/System-Random.html#getStdRandom",
        "fct-type": "function",
        "title": "getStdRandom"
      },
      "index": {
        "description": "Uses the supplied function to get value from the current global random generator and updates the global generator with the new generator returned by the function For example rollDice gets random integer between and rollDice IO Int rollDice getStdRandom randomR",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "getStdRandom",
        "normalized": "(StdGen-\u003e(a,StdGen))-\u003eIO a",
        "package": "random",
        "partial": "Std Random",
        "signature": "(StdGen-\u003e(a,StdGen))-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:mkStdGen",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003emkStdGen\u003c/a\u003e\u003c/code\u003e provides an alternative way of producing an initial\ngenerator, by mapping an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e into a generator. Again, distinct arguments\nshould be likely to produce distinct generators.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "Int -\u003e StdGen",
        "fct-source": "src/System-Random.html#mkStdGen",
        "fct-type": "function",
        "title": "mkStdGen"
      },
      "index": {
        "description": "The function mkStdGen provides an alternative way of producing an initial generator by mapping an Int into generator Again distinct arguments should be likely to produce distinct generators",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "mkStdGen",
        "normalized": "Int-\u003eStdGen",
        "package": "random",
        "partial": "Std Gen",
        "signature": "Int-\u003eStdGen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:newStdGen",
      "description": {
        "fct-descr": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e to the current global random generator,\n updates it with one of the results, and returns the other.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "IO StdGen",
        "fct-source": "src/System-Random.html#newStdGen",
        "fct-type": "function",
        "title": "newStdGen"
      },
      "index": {
        "description": "Applies split to the current global random generator updates it with one of the results and returns the other",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "newStdGen",
        "normalized": "",
        "package": "random",
        "partial": "Std Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation returns an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e that is uniformly distributed\n in the range returned by \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e (including both end points),\n and a new generator.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "g -\u003e (Int, g)",
        "fct-source": "src/System-Random.html#next",
        "fct-type": "method",
        "title": "next"
      },
      "index": {
        "description": "The next operation returns an Int that is uniformly distributed in the range returned by genRange including both end points and new generator",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "next",
        "normalized": "a-\u003e(Int,a)",
        "package": "random",
        "partial": "",
        "signature": "g-\u003e(Int,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:random",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, but using a default range determined by the type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For bounded types (instances of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e),\n   the range is normally the whole type.\n\u003c/li\u003e\u003cli\u003e For fractional types, the range is normally the semi-closed interval\n \u003ccode\u003e[0,1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the range is (arbitrarily) the range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "g -\u003e (a, g)",
        "fct-source": "src/System-Random.html#random",
        "fct-type": "method",
        "title": "random"
      },
      "index": {
        "description": "The same as randomR but using default range determined by the type For bounded types instances of Bounded such as Char the range is normally the whole type For fractional types the range is normally the semi-closed interval For Integer the range is arbitrarily the range of Int",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "random",
        "normalized": "a-\u003e(b,a)",
        "package": "random",
        "partial": "",
        "signature": "g-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:randomIO",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "IO a",
        "fct-source": "src/System-Random.html#randomIO",
        "fct-type": "method",
        "title": "randomIO"
      },
      "index": {
        "description": "variant of random that uses the global random number generator see System.Random",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "randomIO",
        "normalized": "",
        "package": "random",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:randomR",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a range \u003cem\u003e(lo,hi)\u003c/em\u003e and a random number generator\n \u003cem\u003eg\u003c/em\u003e, and returns a random value uniformly distributed in the closed\n interval \u003cem\u003e[lo,hi]\u003c/em\u003e, together with a new generator. It is unspecified\n what happens if \u003cem\u003elo\u003ehi\u003c/em\u003e. For continuous types there is no requirement\n that the values \u003cem\u003elo\u003c/em\u003e and \u003cem\u003ehi\u003c/em\u003e are ever produced, but they may be,\n depending on the implementation and the interval.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "(a, a) -\u003e g -\u003e (a, g)",
        "fct-source": "src/System-Random.html#randomR",
        "fct-type": "method",
        "title": "randomR"
      },
      "index": {
        "description": "Takes range lo hi and random number generator and returns random value uniformly distributed in the closed interval lo hi together with new generator It is unspecified what happens if lo hi For continuous types there is no requirement that the values lo and hi are ever produced but they may be depending on the implementation and the interval",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "randomR",
        "normalized": "(a,a)-\u003eb-\u003e(a,b)",
        "package": "random",
        "partial": "",
        "signature": "(a,a)-\u003eg-\u003e(a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:randomRIO",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "(a, a) -\u003e IO a",
        "fct-source": "src/System-Random.html#randomRIO",
        "fct-type": "method",
        "title": "randomRIO"
      },
      "index": {
        "description": "variant of randomR that uses the global random number generator see System.Random",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "randomRIO",
        "normalized": "(a,a)-\u003eIO a",
        "package": "random",
        "partial": "RIO",
        "signature": "(a,a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:randomRs",
      "description": {
        "fct-descr": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "(a, a) -\u003e g -\u003e [a]",
        "fct-source": "src/System-Random.html#randomRs",
        "fct-type": "method",
        "title": "randomRs"
      },
      "index": {
        "description": "Plural variant of randomR producing an infinite list of random values instead of returning new generator",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "randomRs",
        "normalized": "(a,a)-\u003eb-\u003e[a]",
        "package": "random",
        "partial": "Rs",
        "signature": "(a,a)-\u003eg-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:randoms",
      "description": {
        "fct-descr": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "g -\u003e [a]",
        "fct-source": "src/System-Random.html#randoms",
        "fct-type": "method",
        "title": "randoms"
      },
      "index": {
        "description": "Plural variant of random producing an infinite list of random values instead of returning new generator",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "randoms",
        "normalized": "a-\u003e[b]",
        "package": "random",
        "partial": "",
        "signature": "g-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:setStdGen",
      "description": {
        "fct-descr": "\u003cp\u003eSets the global random number generator.\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "StdGen -\u003e IO ()",
        "fct-source": "src/System-Random.html#setStdGen",
        "fct-type": "function",
        "title": "setStdGen"
      },
      "index": {
        "description": "Sets the global random number generator",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "setStdGen",
        "normalized": "StdGen-\u003eIO()",
        "package": "random",
        "partial": "Std Gen",
        "signature": "StdGen-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random/docs/System-Random.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e operation allows one to obtain two distinct random number\n generators. This is very useful in functional programs (for example, when\n passing a random number generator down to recursive calls), but very\n little work has been done on statistically robust implementations of\n \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e ([\u003ca\u003eSystem.Random\u003c/a\u003e, \u003ca\u003eSystem.Random\u003c/a\u003e]\n are the only examples we know of).\n\u003c/p\u003e",
        "fct-module": "System.Random",
        "fct-package": "random",
        "fct-signature": "g -\u003e (g, g)",
        "fct-source": "src/System-Random.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "The split operation allows one to obtain two distinct random number generators This is very useful in functional programs for example when passing random number generator down to recursive calls but very little work has been done on statistically robust implementations of split System.Random System.Random are the only examples we know of",
        "hierarchy": "System Random",
        "module": "System.Random",
        "name": "split",
        "normalized": "a-\u003e(a,a)",
        "package": "random",
        "partial": "",
        "signature": "g-\u003e(g,g)"
      }
    }
  }
]