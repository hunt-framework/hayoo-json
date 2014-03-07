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
        "word": "hsnoise"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Perlin noise.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = putStrLn (\"Noise value at (1, 2, 3): \" ++ show x)\n    where seed        = 1\n          octaves     = 5\n          scale       = 0.05\n          persistance = 0.5\n          perlinNoise = perlin seed octaves scale persistance\n          x           = noiseValue perlinNoise (1, 2, 3)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Noise.Perlin",
          "name": "Perlin",
          "package": "hsnoise",
          "source": "src/Numeric-Noise-Perlin.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Perlin noise Example of use main putStrLn Noise value at show where seed octaves scale persistance perlinNoise perlin seed octaves scale persistance noiseValue perlinNoise",
          "hierarchy": "Numeric Noise Perlin",
          "module": "Numeric.Noise.Perlin",
          "name": "Perlin",
          "package": "hsnoise",
          "partial": "Perlin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Perlin noise function.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Perlin",
          "name": "Perlin",
          "package": "hsnoise",
          "source": "src/Numeric-Noise-Perlin.html#Perlin",
          "type": "data"
        },
        "index": {
          "description": "Perlin noise function",
          "hierarchy": "Numeric Noise Perlin",
          "module": "Numeric.Noise.Perlin",
          "name": "Perlin",
          "package": "hsnoise",
          "partial": "Perlin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#t:Perlin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps 3-space points to a noise value between -1 and 1 for the given noise function.\n\u003c/p\u003e",
          "module": "[\"Numeric.Noise.Perlin\",\"Numeric.Noise.Ridged\"]",
          "name": "noiseValue",
          "package": "hsnoise",
          "signature": "a -\u003e Point -\u003e Double",
          "source": "src/Numeric-Noise.html#noiseValue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#v:noiseValue\",\"http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#v:noiseValue\"]"
        },
        "index": {
          "description": "Maps space points to noise value between and for the given noise function",
          "hierarchy": "Numeric Noise Perlin",
          "module": "Numeric.Noise.Perlin",
          "name": "noiseValue",
          "normalized": "a-\u003ePoint-\u003eDouble",
          "package": "hsnoise",
          "partial": "Value",
          "signature": "a-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#v:noiseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Perlin noise function given a seed, number of octaves, scale, and persistance.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Perlin",
          "name": "perlin",
          "package": "hsnoise",
          "signature": "Seed -\u003e Int -\u003e Double -\u003e Double -\u003e Perlin",
          "source": "src/Numeric-Noise-Perlin.html#perlin",
          "type": "function"
        },
        "index": {
          "description": "Constructs Perlin noise function given seed number of octaves scale and persistance",
          "hierarchy": "Numeric Noise Perlin",
          "module": "Numeric.Noise.Perlin",
          "name": "perlin",
          "normalized": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003ePerlin",
          "package": "hsnoise",
          "signature": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003ePerlin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Perlin.html#v:perlin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of a pure linear congruential psuedo-random number generator.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = do\n    let seed = 1\n    let (r, seed') = randomInt seed\n    putStrLn (\"Random number 1: \" ++ show r)\n    let (r', seed'') = randomInt seed'\n    putStrLn (\"Random number 2: \" ++ show r')\n    putStrLn (\"Random int list: \" ++ show (randomInts 10 seed))\n    putStrLn (\"Shuffled list: \" ++ show (shuffle [1..10] seed))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Noise.Random",
          "name": "Random",
          "package": "hsnoise",
          "source": "src/Numeric-Noise-Random.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of pure linear congruential psuedo-random number generator Example of use main do let seed let seed randomInt seed putStrLn Random number show let seed randomInt seed putStrLn Random number show putStrLn Random int list show randomInts seed putStrLn Shuffled list show shuffle seed",
          "hierarchy": "Numeric Noise Random",
          "module": "Numeric.Noise.Random",
          "name": "Random",
          "package": "hsnoise",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a random \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and the next seed given a seed.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Random",
          "name": "randomInt",
          "package": "hsnoise",
          "signature": "Seed -\u003e (Int, Seed)",
          "source": "src/Numeric-Noise-Random.html#randomInt",
          "type": "function"
        },
        "index": {
          "description": "Returns random Int and the next seed given seed",
          "hierarchy": "Numeric Noise Random",
          "module": "Numeric.Noise.Random",
          "name": "randomInt",
          "normalized": "Seed-\u003e(Int,Seed)",
          "package": "hsnoise",
          "partial": "Int",
          "signature": "Seed-\u003e(Int,Seed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:randomInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a random sequence of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es given a seed and the number of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es to generate.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Random",
          "name": "randomInts",
          "package": "hsnoise",
          "signature": "Seed -\u003e Int -\u003e [Int]",
          "source": "src/Numeric-Noise-Random.html#randomInts",
          "type": "function"
        },
        "index": {
          "description": "Returns random sequence of Int given seed and the number of Int to generate",
          "hierarchy": "Numeric Noise Random",
          "module": "Numeric.Noise.Random",
          "name": "randomInts",
          "normalized": "Seed-\u003eInt-\u003e[Int]",
          "package": "hsnoise",
          "partial": "Ints",
          "signature": "Seed-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:randomInts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a shuffled list containing the same elements as the given list given a seed.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Random",
          "name": "shuffle",
          "package": "hsnoise",
          "signature": "[a] -\u003e Seed -\u003e [a]",
          "source": "src/Numeric-Noise-Random.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Returns shuffled list containing the same elements as the given list given seed",
          "hierarchy": "Numeric Noise Random",
          "module": "Numeric.Noise.Random",
          "name": "shuffle",
          "normalized": "[a]-\u003eSeed-\u003e[a]",
          "package": "hsnoise",
          "signature": "[a]-\u003eSeed-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Random.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of ridged multi-fractal noise.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e\nmain = putStrLn (\"Noise value at (1, 2, 3): \" ++ show x)\n    where seed        = 1\n          octaves     = 5\n          scale       = 0.005\n          frequency   = 1\n          lacunarity  = 2\n          ridgedNoise = ridged seed octaves scale frequency lacunarity\n          x           = noiseValue ridgedNoise (1, 2, 3)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Noise.Ridged",
          "name": "Ridged",
          "package": "hsnoise",
          "source": "src/Numeric-Noise-Ridged.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of ridged multi-fractal noise Example of use main putStrLn Noise value at show where seed octaves scale frequency lacunarity ridgedNoise ridged seed octaves scale frequency lacunarity noiseValue ridgedNoise",
          "hierarchy": "Numeric Noise Ridged",
          "module": "Numeric.Noise.Ridged",
          "name": "Ridged",
          "package": "hsnoise",
          "partial": "Ridged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ridged multi-fractal noise function.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Ridged",
          "name": "Ridged",
          "package": "hsnoise",
          "source": "src/Numeric-Noise-Ridged.html#Ridged",
          "type": "data"
        },
        "index": {
          "description": "ridged multi-fractal noise function",
          "hierarchy": "Numeric Noise Ridged",
          "module": "Numeric.Noise.Ridged",
          "name": "Ridged",
          "package": "hsnoise",
          "partial": "Ridged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#t:Ridged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a ridged multi-fractal noise function given a seed, number of octaves, scale, \n frequency, and lacunarity.\n\u003c/p\u003e",
          "module": "Numeric.Noise.Ridged",
          "name": "ridged",
          "package": "hsnoise",
          "signature": "Seed -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Ridged",
          "source": "src/Numeric-Noise-Ridged.html#ridged",
          "type": "function"
        },
        "index": {
          "description": "Constructs ridged multi-fractal noise function given seed number of octaves scale frequency and lacunarity",
          "hierarchy": "Numeric Noise Ridged",
          "module": "Numeric.Noise.Ridged",
          "name": "ridged",
          "normalized": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRidged",
          "package": "hsnoise",
          "signature": "Seed-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRidged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise-Ridged.html#v:ridged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains \u003ccode\u003e\u003ca\u003eNoise\u003c/a\u003e\u003c/code\u003e class as well as a general coherent noise generating function which\n the specific noise implementations are based on.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Noise",
          "name": "Noise",
          "package": "hsnoise",
          "source": "src/Numeric-Noise.html",
          "type": "module"
        },
        "index": {
          "description": "Contains Noise class as well as general coherent noise generating function which the specific noise implementations are based on",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "Noise",
          "package": "hsnoise",
          "partial": "Noise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of noise functions.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "Noise",
          "package": "hsnoise",
          "source": "src/Numeric-Noise.html#Noise",
          "type": "class"
        },
        "index": {
          "description": "Class of noise functions",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "Noise",
          "package": "hsnoise",
          "partial": "Noise",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Noise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in 3-space.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "Point",
          "package": "hsnoise",
          "source": "src/Numeric-Noise.html#Point",
          "type": "type"
        },
        "index": {
          "description": "point in space",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "Point",
          "package": "hsnoise",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA seed for a random function.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "Seed",
          "package": "hsnoise",
          "source": "src/Numeric-Noise.html#Seed",
          "type": "type"
        },
        "index": {
          "description": "seed for random function",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "Seed",
          "package": "hsnoise",
          "partial": "Seed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a clamped value between a min and max value.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "clamp",
          "package": "hsnoise",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Numeric-Noise.html#clamp",
          "type": "function"
        },
        "index": {
          "description": "Returns clamped value between min and max value",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "clamp",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "hsnoise",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a coherent noise value between -1 and 1 given a seed and a point in 3-space.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "coherentNoise",
          "package": "hsnoise",
          "signature": "Seed -\u003e Point -\u003e Double",
          "source": "src/Numeric-Noise.html#coherentNoise",
          "type": "function"
        },
        "index": {
          "description": "Returns coherent noise value between and given seed and point in space",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "coherentNoise",
          "normalized": "Seed-\u003ePoint-\u003eDouble",
          "package": "hsnoise",
          "partial": "Noise",
          "signature": "Seed-\u003ePoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:coherentNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps 3-space points to a noise value between -1 and 1 for the given noise function.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "noiseValue",
          "package": "hsnoise",
          "signature": "a -\u003e Point -\u003e Double",
          "source": "src/Numeric-Noise.html#noiseValue",
          "type": "method"
        },
        "index": {
          "description": "Maps space points to noise value between and for the given noise function",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "noiseValue",
          "normalized": "a-\u003ePoint-\u003eDouble",
          "package": "hsnoise",
          "partial": "Value",
          "signature": "a-\u003ePoint-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:noiseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function on a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Noise",
          "name": "pmap",
          "package": "hsnoise",
          "signature": "(Double -\u003e Double) -\u003e Point -\u003e Point",
          "source": "src/Numeric-Noise.html#pmap",
          "type": "function"
        },
        "index": {
          "description": "Map function on Point",
          "hierarchy": "Numeric Noise",
          "module": "Numeric.Noise",
          "name": "pmap",
          "normalized": "(Double-\u003eDouble)-\u003ePoint-\u003ePoint",
          "package": "hsnoise",
          "signature": "(Double-\u003eDouble)-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsnoise/docs/Numeric-Noise.html#v:pmap"
      }
    }
  ]
]