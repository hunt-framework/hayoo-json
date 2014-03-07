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
        "word": "Histogram"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package easily lets you create high quality histogram plots from your data in Haskell.  It automatically bins your data using whichever binning strategy you'd like, then plots the data.  It uses the gnuplot package to do all the actual graphing, so any options that work for making gnuplot pretty will also work here.\n\u003c/p\u003e\u003cp\u003eHere's a brief example that should get you going:\n\u003c/p\u003e\u003cpre\u003eimport qualified Graphics.Gnuplot.Frame.OptionSet as Opts\n\ninput = [1,0.2,0.23,0.15,0.1,0.88,0.89,0.33,0.05,0.33,0.45,0.99,0.01,0.01,0.5]\n\nsimple = do\n    let hist = histogram binSturges input\n    plot \"simple.png\" hist\n\nadvanced = do\n    let hist = histogram binSqrt input\n    let opts = Opts.title \"I'm a histogram!\" $ \n               Opts.yLabel \"Why?\" $ \n               Opts.xLabel \"Because!\" $ \n               defOpts hist\n    plotAdv \"advanced.eps\" opts hist\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.Histogram",
          "name": "Histogram",
          "package": "Histogram",
          "source": "src/Graphics-Histogram.html",
          "type": "module"
        },
        "index": {
          "description": "This package easily lets you create high quality histogram plots from your data in Haskell It automatically bins your data using whichever binning strategy you like then plots the data It uses the gnuplot package to do all the actual graphing so any options that work for making gnuplot pretty will also work here Here brief example that should get you going import qualified Graphics.Gnuplot.Frame.OptionSet as Opts input simple do let hist histogram binSturges input plot simple.png hist advanced do let hist histogram binSqrt input let opts Opts.title histogram Opts.yLabel Why Opts.xLabel Because defOpts hist plotAdv advanced.eps opts hist",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "Histogram",
          "package": "Histogram",
          "partial": "Histogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for a plot, as specified in the gnuplot library\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "PlotOptions",
          "package": "Histogram",
          "source": "src/Graphics-Histogram.html#PlotOptions",
          "type": "type"
        },
        "index": {
          "description": "Options for plot as specified in the gnuplot library",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "PlotOptions",
          "package": "Histogram",
          "partial": "Plot Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#t:PlotOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoane's binning strategy extends Sturges' for non-normal data.  It takes a little more time because it must calculate the kurtosis (peakkiness) of the distribution\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "binDoane",
          "package": "Histogram",
          "signature": "BinningStrat",
          "source": "src/Graphics-Histogram.html#binDoane",
          "type": "function"
        },
        "index": {
          "description": "Doane binning strategy extends Sturges for non-normal data It takes little more time because it must calculate the kurtosis peakkiness of the distribution",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "binDoane",
          "package": "Histogram",
          "partial": "Doane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binDoane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Freedman-Diaconis rule is less susceptible to outliers than Scott's and is also used on \"normalish\" data\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "binFreedmanDiaconis",
          "package": "Histogram",
          "signature": "BinningStrat",
          "source": "src/Graphics-Histogram.html#binFreedmanDiaconis",
          "type": "function"
        },
        "index": {
          "description": "The Freedman-Diaconis rule is less susceptible to outliers than Scott and is also used on normalish data",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "binFreedmanDiaconis",
          "package": "Histogram",
          "partial": "Freedman Diaconis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binFreedmanDiaconis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScott's rule is the optimal solution for normal data, but requires more computation than Spurges'\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "binScott",
          "package": "Histogram",
          "signature": "BinningStrat",
          "source": "src/Graphics-Histogram.html#binScott",
          "type": "function"
        },
        "index": {
          "description": "Scott rule is the optimal solution for normal data but requires more computation than Spurges",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "binScott",
          "package": "Histogram",
          "partial": "Scott",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binScott"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the sqrt of the number of samples is not supported by any theory, but is commonly used by excell and other histogram making software\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "binSqrt",
          "package": "Histogram",
          "signature": "BinningStrat",
          "source": "src/Graphics-Histogram.html#binSqrt",
          "type": "function"
        },
        "index": {
          "description": "Using the sqrt of the number of samples is not supported by any theory but is commonly used by excell and other histogram making software",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "binSqrt",
          "package": "Histogram",
          "partial": "Sqrt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSturges' binning strategy is the least computational work, but recommended for only normal data\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "binSturges",
          "package": "Histogram",
          "signature": "BinningStrat",
          "source": "src/Graphics-Histogram.html#binSturges",
          "type": "function"
        },
        "index": {
          "description": "Sturges binning strategy is the least computational work but recommended for only normal data",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "binSturges",
          "package": "Histogram",
          "partial": "Sturges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:binSturges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault plot display parameters\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "defOpts",
          "package": "Histogram",
          "signature": "Histogram -\u003e PlotOptions",
          "source": "src/Graphics-Histogram.html#defOpts",
          "type": "function"
        },
        "index": {
          "description": "Default plot display parameters",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "defOpts",
          "normalized": "Histogram-\u003ePlotOptions",
          "package": "Histogram",
          "partial": "Opts",
          "signature": "Histogram-\u003ePlotOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:defOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a histogram that's ready for plotting.  Call it with one of the binning strategies that is appropriate to the type of data you have.  If you don't know, then try using binSturges.\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "histogram",
          "package": "Histogram",
          "signature": "BinningStrat -\u003e [Double] -\u003e Histogram",
          "source": "src/Graphics-Histogram.html#histogram",
          "type": "function"
        },
        "index": {
          "description": "Creates histogram that ready for plotting Call it with one of the binning strategies that is appropriate to the type of data you have If you don know then try using binSturges",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "histogram",
          "normalized": "BinningStrat-\u003e[Double]-\u003eHistogram",
          "package": "Histogram",
          "signature": "BinningStrat-\u003e[Double]-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a histogram by specifying the exact bin size. \n You probably don't want to use this function, and should use histogram with an appropriate binning strategy.\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "histogramBinSize",
          "package": "Histogram",
          "signature": "Double -\u003e [Double] -\u003e Histogram",
          "source": "src/Graphics-Histogram.html#histogramBinSize",
          "type": "function"
        },
        "index": {
          "description": "Create histogram by specifying the exact bin size You probably don want to use this function and should use histogram with an appropriate binning strategy",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "histogramBinSize",
          "normalized": "Double-\u003e[Double]-\u003eHistogram",
          "package": "Histogram",
          "partial": "Bin Size",
          "signature": "Double-\u003e[Double]-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogramBinSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a histogram by specifying the exact number of bins\n You probably don't want to use this function, and should use histogram with an appropriate binning strategy.\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "histogramNumBins",
          "package": "Histogram",
          "signature": "Int -\u003e [Double] -\u003e Histogram",
          "source": "src/Graphics-Histogram.html#histogramNumBins",
          "type": "function"
        },
        "index": {
          "description": "Create histogram by specifying the exact number of bins You probably don want to use this function and should use histogram with an appropriate binning strategy",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "histogramNumBins",
          "normalized": "Int-\u003e[Double]-\u003eHistogram",
          "package": "Histogram",
          "partial": "Num Bins",
          "signature": "Int-\u003e[Double]-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:histogramNumBins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots your histogram using gnuplot.  If the filename is empty, then it will open a window and display the histogram on screen.  Otherwise, the filetype is automatically determined by the extension.  Supported file types are .png, .svg (vector graphics), and .eps (PostScript).\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "plot",
          "package": "Histogram",
          "signature": "String -\u003e Histogram -\u003e IO ExitCode",
          "source": "src/Graphics-Histogram.html#plot",
          "type": "function"
        },
        "index": {
          "description": "Plots your histogram using gnuplot If the filename is empty then it will open window and display the histogram on screen Otherwise the filetype is automatically determined by the extension Supported file types are png svg vector graphics and eps PostScript",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "plot",
          "normalized": "String-\u003eHistogram-\u003eIO ExitCode",
          "package": "Histogram",
          "signature": "String-\u003eHistogram-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ca\u003eplot\u003c/a\u003e, except you may specify additional options from the gnuplot library.  For example, you could add labels and a title.\n\u003c/p\u003e",
          "module": "Graphics.Histogram",
          "name": "plotAdv",
          "package": "Histogram",
          "signature": "String -\u003e PlotOptions -\u003e Histogram -\u003e IO ExitCode",
          "source": "src/Graphics-Histogram.html#plotAdv",
          "type": "function"
        },
        "index": {
          "description": "Just like plot except you may specify additional options from the gnuplot library For example you could add labels and title",
          "hierarchy": "Graphics Histogram",
          "module": "Graphics.Histogram",
          "name": "plotAdv",
          "normalized": "String-\u003ePlotOptions-\u003eHistogram-\u003eIO ExitCode",
          "package": "Histogram",
          "partial": "Adv",
          "signature": "String-\u003ePlotOptions-\u003eHistogram-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Histogram/docs/Graphics-Histogram.html#v:plotAdv"
      }
    }
  ]
]