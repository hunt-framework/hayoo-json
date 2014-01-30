[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription :\n\u003c/p\u003e\u003cp\u003eA collection of commonly used statistical functions designed to\n fuse under stream fusion, with attention paid to the generated assembly.\n\u003c/p\u003e\u003cp\u003eThese are high performance replacements for various list functions, \n implemented in pure Haskell using stream fusion for sequences.\n\u003c/p\u003e\u003cp\u003eTo illustrate the performance gap, consider the task of calculating\n the numerically stable mean of a sequence of 1e9 double values.\n\u003c/p\u003e\u003cp\u003eUsing the standard list implementation provided by the hstats\n package, \n\u003c/p\u003e\u003cpre\u003e    $ time ./mean \n    3.141592653589793\n    ./mean  26.80s user 0.08s system 99% cpu 26.965 total\n\u003c/pre\u003e\u003cp\u003eAnd this package,\n\u003c/p\u003e\u003cpre\u003e    $ time ./mean                      \n    3.141592653589793\n    ./mean  5.59s user 0.00s system 99% cpu 5.606 total\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "Description collection of commonly used statistical functions designed to fuse under stream fusion with attention paid to the generated assembly These are high performance replacements for various list functions implemented in pure Haskell using stream fusion for sequences To illustrate the performance gap consider the task of calculating the numerically stable mean of sequence of e9 double values Using the standard list implementation provided by the hstats package time mean mean user system cpu total And this package time mean mean user system cpu total",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "statistics-fusion",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#v:geometric",
      "description": {
        "fct-descr": "\u003cp\u003eThe geometric mean of a non-negative list.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Fusion.html#geometric",
        "fct-type": "function",
        "title": "geometric"
      },
      "index": {
        "description": "The geometric mean of non-negative list",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "geometric",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-fusion",
        "partial": "",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#v:harmonic",
      "description": {
        "fct-descr": "\u003cp\u003eThe harmonic mean\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Fusion.html#harmonic",
        "fct-type": "function",
        "title": "harmonic"
      },
      "index": {
        "description": "The harmonic mean",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "harmonic",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-fusion",
        "partial": "",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#v:mean",
      "description": {
        "fct-descr": "\u003cp\u003eA numerically stable mean.\n\u003c/p\u003e\u003cp\u003erequired.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Fusion.html#mean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "numerically stable mean required",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "mean",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-fusion",
        "partial": "",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#v:stddev",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard deviation.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Fusion.html#stddev",
        "fct-type": "function",
        "title": "stddev"
      },
      "index": {
        "description": "The standard deviation",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "stddev",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-fusion",
        "partial": "",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-fusion/docs/Math-Statistics-Fusion.html#v:var",
      "description": {
        "fct-descr": "\u003cp\u003eA numerically stable variance.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Fusion",
        "fct-package": "statistics-fusion",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Fusion.html#var",
        "fct-type": "function",
        "title": "var"
      },
      "index": {
        "description": "numerically stable variance",
        "hierarchy": "Math Statistics Fusion",
        "module": "Math.Statistics.Fusion",
        "name": "var",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-fusion",
        "partial": "",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  }
]