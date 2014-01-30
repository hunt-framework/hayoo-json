[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Perlin noise.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = putStrLn (\"Noise value at (1, 2, 3): \" ++ show x)\n    where seed        = 1\n          octaves     = 5\n          scale       = 0.05\n          persistance = 0.5\n          perlinNoise = perlin seed octaves scale persistance\n          x           = noiseValue perlinNoise (1, 2, 3)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Noise.Perlin",
        "fct-package": "hsnoise",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Noise-Perlin.html",
        "fct-type": "module",
        "title": "Perlin"
      },
      "index": {
        "description": "Implementation of Perlin noise Example of use main putStrLn Noise value at show where seed octaves scale persistance perlinNoise perlin seed octaves scale persistance noiseValue perlinNoise",
        "hierarchy": "Numeric Noise Perlin",
        "module": "Numeric.Noise.Perlin",
        "name": "Perlin",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Perlin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#t:Perlin",
      "description": {
        "fct-descr": "\u003cp\u003eA Perlin noise function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Perlin",
        "fct-package": "hsnoise",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Noise-Perlin.html#Perlin",
        "fct-type": "data",
        "title": "Perlin"
      },
      "index": {
        "description": "Perlin noise function",
        "hierarchy": "Numeric Noise Perlin",
        "module": "Numeric.Noise.Perlin",
        "name": "Perlin",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Perlin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#v:noiseValue",
      "description": {
        "fct-descr": "\u003cp\u003eMaps 3-space points to a noise value between -1 and 1 for the given noise function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Perlin",
        "fct-package": "hsnoise",
        "fct-signature": "a -\u003e Point -\u003e Double",
        "fct-source": "src/Numeric-Noise.html#noiseValue",
        "fct-type": "function",
        "title": "noiseValue"
      },
      "index": {
        "description": "Maps space points to noise value between and for the given noise function",
        "hierarchy": "Numeric Noise Perlin",
        "module": "Numeric.Noise.Perlin",
        "name": "noiseValue",
        "normalized": "a-\u003ePoint-\u003eDouble",
        "package": "hsnoise",
        "partial": "Value",
        "signature": "a-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#v:perlin",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a Perlin noise function given a seed, number of octaves, scale, and persistance.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Perlin",
        "fct-package": "hsnoise",
        "fct-signature": "Seed -\u003e Int -\u003e Double -\u003e Double -\u003e Perlin",
        "fct-source": "src/Numeric-Noise-Perlin.html#perlin",
        "fct-type": "function",
        "title": "perlin"
      },
      "index": {
        "description": "Constructs Perlin noise function given seed number of octaves scale and persistance",
        "hierarchy": "Numeric Noise Perlin",
        "module": "Numeric.Noise.Perlin",
        "name": "perlin",
        "normalized": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003ePerlin",
        "package": "hsnoise",
        "partial": "",
        "signature": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003ePerlin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of a pure linear congruential psuedo-random number generator.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = do\n    let seed = 1\n    let (r, seed') = randomInt seed\n    putStrLn (\"Random number 1: \" ++ show r)\n    let (r', seed'') = randomInt seed'\n    putStrLn (\"Random number 2: \" ++ show r')\n    putStrLn (\"Random int list: \" ++ show (randomInts 10 seed))\n    putStrLn (\"Shuffled list: \" ++ show (shuffle [1..10] seed))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Noise.Random",
        "fct-package": "hsnoise",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Noise-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "simple implementation of pure linear congruential psuedo-random number generator Example of use main do let seed let seed randomInt seed putStrLn Random number show let seed randomInt seed putStrLn Random number show putStrLn Random int list show randomInts seed putStrLn Shuffled list show shuffle seed",
        "hierarchy": "Numeric Noise Random",
        "module": "Numeric.Noise.Random",
        "name": "Random",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:randomInt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a random \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and the next seed given a seed.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Random",
        "fct-package": "hsnoise",
        "fct-signature": "Seed -\u003e (Int, Seed)",
        "fct-source": "src/Numeric-Noise-Random.html#randomInt",
        "fct-type": "function",
        "title": "randomInt"
      },
      "index": {
        "description": "Returns random Int and the next seed given seed",
        "hierarchy": "Numeric Noise Random",
        "module": "Numeric.Noise.Random",
        "name": "randomInt",
        "normalized": "Seed-\u003e(Int,Seed)",
        "package": "hsnoise",
        "partial": "Int",
        "signature": "Seed-\u003e(Int,Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:randomInts",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a random sequence of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es given a seed and the number of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es to generate.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Random",
        "fct-package": "hsnoise",
        "fct-signature": "Seed -\u003e Int -\u003e [Int]",
        "fct-source": "src/Numeric-Noise-Random.html#randomInts",
        "fct-type": "function",
        "title": "randomInts"
      },
      "index": {
        "description": "Returns random sequence of Int given seed and the number of Int to generate",
        "hierarchy": "Numeric Noise Random",
        "module": "Numeric.Noise.Random",
        "name": "randomInts",
        "normalized": "Seed-\u003eInt-\u003e[Int]",
        "package": "hsnoise",
        "partial": "Ints",
        "signature": "Seed-\u003eInt-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:shuffle",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a shuffled list containing the same elements as the given list given a seed.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Random",
        "fct-package": "hsnoise",
        "fct-signature": "[a] -\u003e Seed -\u003e [a]",
        "fct-source": "src/Numeric-Noise-Random.html#shuffle",
        "fct-type": "function",
        "title": "shuffle"
      },
      "index": {
        "description": "Returns shuffled list containing the same elements as the given list given seed",
        "hierarchy": "Numeric Noise Random",
        "module": "Numeric.Noise.Random",
        "name": "shuffle",
        "normalized": "[a]-\u003eSeed-\u003e[a]",
        "package": "hsnoise",
        "partial": "",
        "signature": "[a]-\u003eSeed-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of ridged multi-fractal noise.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = putStrLn (\"Noise value at (1, 2, 3): \" ++ show x)\n    where seed        = 1\n          octaves     = 5\n          scale       = 0.005\n          frequency   = 1\n          lacunarity  = 2\n          ridgedNoise = ridged seed octaves scale frequency lacunarity\n          x           = noiseValue ridgedNoise (1, 2, 3)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Noise.Ridged",
        "fct-package": "hsnoise",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Noise-Ridged.html",
        "fct-type": "module",
        "title": "Ridged"
      },
      "index": {
        "description": "Implementation of ridged multi-fractal noise Example of use main putStrLn Noise value at show where seed octaves scale frequency lacunarity ridgedNoise ridged seed octaves scale frequency lacunarity noiseValue ridgedNoise",
        "hierarchy": "Numeric Noise Ridged",
        "module": "Numeric.Noise.Ridged",
        "name": "Ridged",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Ridged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#t:Ridged",
      "description": {
        "fct-descr": "\u003cp\u003eA ridged multi-fractal noise function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Ridged",
        "fct-package": "hsnoise",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Noise-Ridged.html#Ridged",
        "fct-type": "data",
        "title": "Ridged"
      },
      "index": {
        "description": "ridged multi-fractal noise function",
        "hierarchy": "Numeric Noise Ridged",
        "module": "Numeric.Noise.Ridged",
        "name": "Ridged",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Ridged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#v:noiseValue",
      "description": {
        "fct-descr": "\u003cp\u003eMaps 3-space points to a noise value between -1 and 1 for the given noise function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Ridged",
        "fct-package": "hsnoise",
        "fct-signature": "a -\u003e Point -\u003e Double",
        "fct-source": "src/Numeric-Noise.html#noiseValue",
        "fct-type": "function",
        "title": "noiseValue"
      },
      "index": {
        "description": "Maps space points to noise value between and for the given noise function",
        "hierarchy": "Numeric Noise Ridged",
        "module": "Numeric.Noise.Ridged",
        "name": "noiseValue",
        "normalized": "a-\u003ePoint-\u003eDouble",
        "package": "hsnoise",
        "partial": "Value",
        "signature": "a-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#v:ridged",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a ridged multi-fractal noise function given a seed, number of octaves, scale, \n frequency, and lacunarity.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise.Ridged",
        "fct-package": "hsnoise",
        "fct-signature": "Seed -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Ridged",
        "fct-source": "src/Numeric-Noise-Ridged.html#ridged",
        "fct-type": "function",
        "title": "ridged"
      },
      "index": {
        "description": "Constructs ridged multi-fractal noise function given seed number of octaves scale frequency and lacunarity",
        "hierarchy": "Numeric Noise Ridged",
        "module": "Numeric.Noise.Ridged",
        "name": "ridged",
        "normalized": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRidged",
        "package": "hsnoise",
        "partial": "",
        "signature": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRidged"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains \u003ccode\u003e\u003ca\u003eNoise\u003c/a\u003e\u003c/code\u003e class as well as a general coherent noise generating function which\n the specific noise implementations are based on.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Noise.html",
        "fct-type": "module",
        "title": "Noise"
      },
      "index": {
        "description": "Contains Noise class as well as general coherent noise generating function which the specific noise implementations are based on",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "Noise",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Noise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Noise",
      "description": {
        "fct-descr": "\u003cp\u003eClass of noise functions.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Noise.html#Noise",
        "fct-type": "class",
        "title": "Noise"
      },
      "index": {
        "description": "Class of noise functions",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "Noise",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Noise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point in 3-space.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Noise.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "point in space",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "Point",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Seed",
      "description": {
        "fct-descr": "\u003cp\u003eA seed for a random function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Noise.html#Seed",
        "fct-type": "type",
        "title": "Seed"
      },
      "index": {
        "description": "seed for random function",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "Seed",
        "normalized": "",
        "package": "hsnoise",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:clamp",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a clamped value between a min and max value.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-Noise.html#clamp",
        "fct-type": "function",
        "title": "clamp"
      },
      "index": {
        "description": "Returns clamped value between min and max value",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "clamp",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "hsnoise",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:coherentNoise",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a coherent noise value between -1 and 1 given a seed and a point in 3-space.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "Seed -\u003e Point -\u003e Double",
        "fct-source": "src/Numeric-Noise.html#coherentNoise",
        "fct-type": "function",
        "title": "coherentNoise"
      },
      "index": {
        "description": "Returns coherent noise value between and given seed and point in space",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "coherentNoise",
        "normalized": "Seed-\u003ePoint-\u003eDouble",
        "package": "hsnoise",
        "partial": "Noise",
        "signature": "Seed-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:noiseValue",
      "description": {
        "fct-descr": "\u003cp\u003eMaps 3-space points to a noise value between -1 and 1 for the given noise function.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "a -\u003e Point -\u003e Double",
        "fct-source": "src/Numeric-Noise.html#noiseValue",
        "fct-type": "method",
        "title": "noiseValue"
      },
      "index": {
        "description": "Maps space points to noise value between and for the given noise function",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "noiseValue",
        "normalized": "a-\u003ePoint-\u003eDouble",
        "package": "hsnoise",
        "partial": "Value",
        "signature": "a-\u003ePoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:pmap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function on a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Noise",
        "fct-package": "hsnoise",
        "fct-signature": "(Double -\u003e Double) -\u003e Point -\u003e Point",
        "fct-source": "src/Numeric-Noise.html#pmap",
        "fct-type": "function",
        "title": "pmap"
      },
      "index": {
        "description": "Map function on Point",
        "hierarchy": "Numeric Noise",
        "module": "Numeric.Noise",
        "name": "pmap",
        "normalized": "(Double-\u003eDouble)-\u003ePoint-\u003ePoint",
        "package": "hsnoise",
        "partial": "",
        "signature": "(Double-\u003eDouble)-\u003ePoint-\u003ePoint"
      }
    }
  }
]