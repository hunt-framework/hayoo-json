[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package easily lets you create high quality histogram plots from your data in Haskell.  It automatically bins your data using whichever binning strategy you'd like, then plots the data.  It uses the gnuplot package to do all the actual graphing, so any options that work for making gnuplot pretty will also work here.\n\u003c/p\u003e\u003cp\u003eHere's a brief example that should get you going:\n\u003c/p\u003e\u003cpre\u003eimport qualified Graphics.Gnuplot.Frame.OptionSet as Opts\n\ninput = [1,0.2,0.23,0.15,0.1,0.88,0.89,0.33,0.05,0.33,0.45,0.99,0.01,0.01,0.5]\n\nsimple = do\n    let hist = histogram binSturges input\n    plot \"simple.png\" hist\n\nadvanced = do\n    let hist = histogram binSqrt input\n    let opts = Opts.title \"I'm a histogram!\" $ \n               Opts.yLabel \"Why?\" $ \n               Opts.xLabel \"Because!\" $ \n               defOpts hist\n    plotAdv \"advanced.eps\" opts hist\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Histogram.html",
        "fct-type": "module",
        "title": "Histogram"
      },
      "index": {
        "description": "This package easily lets you create high quality histogram plots from your data in Haskell It automatically bins your data using whichever binning strategy you like then plots the data It uses the gnuplot package to do all the actual graphing so any options that work for making gnuplot pretty will also work here Here brief example that should get you going import qualified Graphics.Gnuplot.Frame.OptionSet as Opts input simple do let hist histogram binSturges input plot simple.png hist advanced do let hist histogram binSqrt input let opts Opts.title histogram Opts.yLabel Why Opts.xLabel Because defOpts hist plotAdv advanced.eps opts hist",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "Histogram",
        "normalized": "",
        "package": "Histogram",
        "partial": "Histogram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#t:PlotOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for a plot, as specified in the gnuplot library\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Histogram.html#PlotOptions",
        "fct-type": "type",
        "title": "PlotOptions"
      },
      "index": {
        "description": "Options for plot as specified in the gnuplot library",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "PlotOptions",
        "normalized": "",
        "package": "Histogram",
        "partial": "Plot Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binDoane",
      "description": {
        "fct-descr": "\u003cp\u003eDoane's binning strategy extends Sturges' for non-normal data.  It takes a little more time because it must calculate the kurtosis (peakkiness) of the distribution\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat",
        "fct-source": "src/Graphics-Histogram.html#binDoane",
        "fct-type": "function",
        "title": "binDoane"
      },
      "index": {
        "description": "Doane binning strategy extends Sturges for non-normal data It takes little more time because it must calculate the kurtosis peakkiness of the distribution",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "binDoane",
        "normalized": "",
        "package": "Histogram",
        "partial": "Doane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binFreedmanDiaconis",
      "description": {
        "fct-descr": "\u003cp\u003eThe Freedman-Diaconis rule is less susceptible to outliers than Scott's and is also used on \"normalish\" data\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat",
        "fct-source": "src/Graphics-Histogram.html#binFreedmanDiaconis",
        "fct-type": "function",
        "title": "binFreedmanDiaconis"
      },
      "index": {
        "description": "The Freedman-Diaconis rule is less susceptible to outliers than Scott and is also used on normalish data",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "binFreedmanDiaconis",
        "normalized": "",
        "package": "Histogram",
        "partial": "Freedman Diaconis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binScott",
      "description": {
        "fct-descr": "\u003cp\u003eScott's rule is the optimal solution for normal data, but requires more computation than Spurges'\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat",
        "fct-source": "src/Graphics-Histogram.html#binScott",
        "fct-type": "function",
        "title": "binScott"
      },
      "index": {
        "description": "Scott rule is the optimal solution for normal data but requires more computation than Spurges",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "binScott",
        "normalized": "",
        "package": "Histogram",
        "partial": "Scott",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binSqrt",
      "description": {
        "fct-descr": "\u003cp\u003eUsing the sqrt of the number of samples is not supported by any theory, but is commonly used by excell and other histogram making software\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat",
        "fct-source": "src/Graphics-Histogram.html#binSqrt",
        "fct-type": "function",
        "title": "binSqrt"
      },
      "index": {
        "description": "Using the sqrt of the number of samples is not supported by any theory but is commonly used by excell and other histogram making software",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "binSqrt",
        "normalized": "",
        "package": "Histogram",
        "partial": "Sqrt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binSturges",
      "description": {
        "fct-descr": "\u003cp\u003eSturges' binning strategy is the least computational work, but recommended for only normal data\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat",
        "fct-source": "src/Graphics-Histogram.html#binSturges",
        "fct-type": "function",
        "title": "binSturges"
      },
      "index": {
        "description": "Sturges binning strategy is the least computational work but recommended for only normal data",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "binSturges",
        "normalized": "",
        "package": "Histogram",
        "partial": "Sturges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:defOpts",
      "description": {
        "fct-descr": "\u003cp\u003eDefault plot display parameters\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "Histogram -\u003e PlotOptions",
        "fct-source": "src/Graphics-Histogram.html#defOpts",
        "fct-type": "function",
        "title": "defOpts"
      },
      "index": {
        "description": "Default plot display parameters",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "defOpts",
        "normalized": "Histogram-\u003ePlotOptions",
        "package": "Histogram",
        "partial": "Opts",
        "signature": "Histogram-\u003ePlotOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogram",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a histogram that's ready for plotting.  Call it with one of the binning strategies that is appropriate to the type of data you have.  If you don't know, then try using binSturges.\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "BinningStrat -\u003e [Double] -\u003e Histogram",
        "fct-source": "src/Graphics-Histogram.html#histogram",
        "fct-type": "function",
        "title": "histogram"
      },
      "index": {
        "description": "Creates histogram that ready for plotting Call it with one of the binning strategies that is appropriate to the type of data you have If you don know then try using binSturges",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "histogram",
        "normalized": "BinningStrat-\u003e[Double]-\u003eHistogram",
        "package": "Histogram",
        "partial": "",
        "signature": "BinningStrat-\u003e[Double]-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogramBinSize",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a histogram by specifying the exact bin size. \n You probably don't want to use this function, and should use histogram with an appropriate binning strategy.\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "Double -\u003e [Double] -\u003e Histogram",
        "fct-source": "src/Graphics-Histogram.html#histogramBinSize",
        "fct-type": "function",
        "title": "histogramBinSize"
      },
      "index": {
        "description": "Create histogram by specifying the exact bin size You probably don want to use this function and should use histogram with an appropriate binning strategy",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "histogramBinSize",
        "normalized": "Double-\u003e[Double]-\u003eHistogram",
        "package": "Histogram",
        "partial": "Bin Size",
        "signature": "Double-\u003e[Double]-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogramNumBins",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a histogram by specifying the exact number of bins\n You probably don't want to use this function, and should use histogram with an appropriate binning strategy.\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "Int -\u003e [Double] -\u003e Histogram",
        "fct-source": "src/Graphics-Histogram.html#histogramNumBins",
        "fct-type": "function",
        "title": "histogramNumBins"
      },
      "index": {
        "description": "Create histogram by specifying the exact number of bins You probably don want to use this function and should use histogram with an appropriate binning strategy",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "histogramNumBins",
        "normalized": "Int-\u003e[Double]-\u003eHistogram",
        "package": "Histogram",
        "partial": "Num Bins",
        "signature": "Int-\u003e[Double]-\u003eHistogram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:plot",
      "description": {
        "fct-descr": "\u003cp\u003ePlots your histogram using gnuplot.  If the filename is empty, then it will open a window and display the histogram on screen.  Otherwise, the filetype is automatically determined by the extension.  Supported file types are .png, .svg (vector graphics), and .eps (PostScript).\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "String -\u003e Histogram -\u003e IO ExitCode",
        "fct-source": "src/Graphics-Histogram.html#plot",
        "fct-type": "function",
        "title": "plot"
      },
      "index": {
        "description": "Plots your histogram using gnuplot If the filename is empty then it will open window and display the histogram on screen Otherwise the filetype is automatically determined by the extension Supported file types are png svg vector graphics and eps PostScript",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "plot",
        "normalized": "String-\u003eHistogram-\u003eIO ExitCode",
        "package": "Histogram",
        "partial": "",
        "signature": "String-\u003eHistogram-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:plotAdv",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003ca\u003eplot\u003c/a\u003e, except you may specify additional options from the gnuplot library.  For example, you could add labels and a title.\n\u003c/p\u003e",
        "fct-module": "Graphics.Histogram",
        "fct-package": "Histogram",
        "fct-signature": "String -\u003e PlotOptions -\u003e Histogram -\u003e IO ExitCode",
        "fct-source": "src/Graphics-Histogram.html#plotAdv",
        "fct-type": "function",
        "title": "plotAdv"
      },
      "index": {
        "description": "Just like plot except you may specify additional options from the gnuplot library For example you could add labels and title",
        "hierarchy": "Graphics Histogram",
        "module": "Graphics.Histogram",
        "name": "plotAdv",
        "normalized": "String-\u003ePlotOptions-\u003eHistogram-\u003eIO ExitCode",
        "package": "Histogram",
        "partial": "Adv",
        "signature": "String-\u003ePlotOptions-\u003eHistogram-\u003eIO ExitCode"
      }
    }
  }
]