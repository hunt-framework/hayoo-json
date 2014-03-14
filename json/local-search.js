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
        "word": "local-search"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelection routines have been made generic through the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eselect'\u003c/a\u003e\u003c/code\u003e functions, \n    which are parametrised by probability distributions. This module provides functions for \n    constructing and manipulating some example probability distributions. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "Distributions",
          "package": "local-search",
          "source": "src/Control-Search-Local-Distributions.html",
          "type": "module"
        },
        "index": {
          "description": "Selection routines have been made generic through the select and select functions which are parametrised by probability distributions This module provides functions for constructing and manipulating some example probability distributions",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "Distributions",
          "package": "local-search",
          "partial": "Distributions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type for a discrete probability distribution. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "Distribution",
          "package": "local-search",
          "source": "src/Control-Search-Local-Distributions.html#Distribution",
          "type": "type"
        },
        "index": {
          "description": "The data type for discrete probability distribution",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "Distribution",
          "package": "local-search",
          "partial": "Distribution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of elements being selected between will often vary (such as in improving neighbourhoods), \n    so it will often be necessary to construct distributions with some constant properties, but varying the \n    length. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "DistributionMaker",
          "package": "local-search",
          "source": "src/Control-Search-Local-Distributions.html#DistributionMaker",
          "type": "type"
        },
        "index": {
          "description": "The number of elements being selected between will often vary such as in improving neighbourhoods so it will often be necessary to construct distributions with some constant properties but varying the length",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "DistributionMaker",
          "package": "local-search",
          "partial": "Distribution Maker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#t:DistributionMaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines \u003ccode\u003e\u003ca\u003eDistributionMaker\u003c/a\u003e\u003c/code\u003es. This combines them with equal weighting. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributionMakers",
          "package": "local-search",
          "signature": "[DistributionMaker] -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#addDistributionMakers",
          "type": "function"
        },
        "index": {
          "description": "Combines DistributionMaker This combines them with equal weighting",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributionMakers",
          "normalized": "[DistributionMaker]-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "Distribution Makers",
          "signature": "[DistributionMaker]-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:addDistributionMakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines \u003ccode\u003e\u003ca\u003eDistributionMaker\u003c/a\u003e\u003c/code\u003es but weights each one.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributionMakers'",
          "package": "local-search",
          "signature": "[Double] -\u003e [DistributionMaker] -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#addDistributionMakers%27",
          "type": "function"
        },
        "index": {
          "description": "Combines DistributionMaker but weights each one",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributionMakers'",
          "normalized": "[Double]-\u003e[DistributionMaker]-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "Distribution Makers'",
          "signature": "[Double]-\u003e[DistributionMaker]-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:addDistributionMakers-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo enable the construction of more exotic distributions from existing distributions. The basic function \n    combines them with equal weight on each component. For example;\n\u003c/p\u003e\u003cpre\u003e addDistributions [[0,0.5,1],[1,1,1]] = [0.5,0.75,1]\n\u003c/pre\u003e\u003cp\u003eCompare this with \u003ccode\u003e\u003ca\u003eaddDistributions'\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributions",
          "package": "local-search",
          "signature": "[Distribution] -\u003e Distribution",
          "source": "src/Control-Search-Local-Distributions.html#addDistributions",
          "type": "function"
        },
        "index": {
          "description": "To enable the construction of more exotic distributions from existing distributions The basic function combines them with equal weight on each component For example addDistributions Compare this with addDistributions",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributions",
          "normalized": "[Distribution]-\u003eDistribution",
          "package": "local-search",
          "partial": "Distributions",
          "signature": "[Distribution]-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:addDistributions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more flexible variation upon \u003ccode\u003e\u003ca\u003eaddDistributions\u003c/a\u003e\u003c/code\u003e which allows the programmer to specify the weights to \n    merge the distributions with. For example;\n\u003c/p\u003e\u003cpre\u003e addDistributions [0.3,0.7] [[0,0.5,1],[1,1,1]] = [0.7,0.85,1] \n\u003c/pre\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributions'",
          "package": "local-search",
          "signature": "[Double] -\u003e [Distribution] -\u003e Distribution",
          "source": "src/Control-Search-Local-Distributions.html#addDistributions%27",
          "type": "function"
        },
        "index": {
          "description": "more flexible variation upon addDistributions which allows the programmer to specify the weights to merge the distributions with For example addDistributions",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "addDistributions'",
          "normalized": "[Double]-\u003e[Distribution]-\u003eDistribution",
          "package": "local-search",
          "partial": "Distributions'",
          "signature": "[Double]-\u003e[Distribution]-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:addDistributions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function included for debug purposes. I expect that many users will be more comfortable using CDFs, but \n    happier thinking in terms of PDFs. Use in conjunction with \u003ccode\u003e\u003ca\u003edistribution2SVG\u003c/a\u003e\u003c/code\u003e to see what a distribution \n    looks like.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "cdf2pdf",
          "package": "local-search",
          "signature": "Distribution -\u003e Distribution",
          "source": "src/Control-Search-Local-Distributions.html#cdf2pdf",
          "type": "function"
        },
        "index": {
          "description": "function included for debug purposes expect that many users will be more comfortable using CDFs but happier thinking in terms of PDFs Use in conjunction with distribution2SVG to see what distribution looks like",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "cdf2pdf",
          "normalized": "Distribution-\u003eDistribution",
          "package": "local-search",
          "signature": "Distribution-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:cdf2pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function included for debug purposes, to allow a user to visualise a distribution. \n    It generates a string, which can be stored in a file as SVG. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "distribution2SVG",
          "package": "local-search",
          "signature": "Distribution -\u003e String",
          "source": "src/Control-Search-Local-Distributions.html#distribution2SVG",
          "type": "function"
        },
        "index": {
          "description": "function included for debug purposes to allow user to visualise distribution It generates string which can be stored in file as SVG",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "distribution2SVG",
          "normalized": "Distribution-\u003eString",
          "package": "local-search",
          "partial": "SVG",
          "signature": "Distribution-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:distribution2SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is more likely that when always choosing the first element of list of choices \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e will be \n    employed, but this has been included for completeness. This is a CDF. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "firstChoice",
          "package": "local-search",
          "signature": "DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#firstChoice",
          "type": "function"
        },
        "index": {
          "description": "It is more likely that when always choosing the first element of list of choices head will be employed but this has been included for completeness This is CDF",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "firstChoice",
          "package": "local-search",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:firstChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic CDF functions (e.g. \u003ccode\u003e\u003ca\u003epoissonCDF'\u003c/a\u003e\u003c/code\u003e) often do not yield \u003cem\u003ecomplete\u003c/em\u003e CDFs. The distributions that \n    are produced tend to 1 in the last position of the list, but do not actually get there. For these to be \n    used practically, the last value of the list should be replaced with 1. This is a bodge, but under most \n    circumstances should not adversely effect results.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "fixEnd",
          "package": "local-search",
          "signature": "Distribution -\u003e Distribution",
          "source": "src/Control-Search-Local-Distributions.html#fixEnd",
          "type": "function"
        },
        "index": {
          "description": "The basic CDF functions e.g poissonCDF often do not yield complete CDFs The distributions that are produced tend to in the last position of the list but do not actually get there For these to be used practically the last value of the list should be replaced with This is bodge but under most circumstances should not adversely effect results",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "fixEnd",
          "normalized": "Distribution-\u003eDistribution",
          "package": "local-search",
          "partial": "End",
          "signature": "Distribution-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:fixEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efirstChoice\u003c/a\u003e\u003c/code\u003e it is more likely that \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e will be used for this effect. This is also a CDF. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "lastChoice",
          "package": "local-search",
          "signature": "DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#lastChoice",
          "type": "function"
        },
        "index": {
          "description": "Like firstChoice it is more likely that last will be used for this effect This is also CDF",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "lastChoice",
          "package": "local-search",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:lastChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParametrised as follows;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e mean\n\u003c/li\u003e\u003cli\u003e standard deviation \n\u003c/li\u003e\u003cli\u003e size\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe function generates the CDF of a Normal distribution, using the mean and standard deviation, over the \n    range of discrete values [0 .. size]. The result is processed by the \u003ccode\u003e\u003ca\u003efixEnd\u003c/a\u003e\u003c/code\u003e function, so the final \n    entry in the distribution is always 1. Over larger enough values of size this should be fine.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "normalCDF",
          "package": "local-search",
          "signature": "Double -\u003e Double -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#normalCDF",
          "type": "function"
        },
        "index": {
          "description": "Parametrised as follows mean standard deviation size The function generates the CDF of Normal distribution using the mean and standard deviation over the range of discrete values size The result is processed by the fixEnd function so the final entry in the distribution is always Over larger enough values of size this should be fine",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "normalCDF",
          "normalized": "Double-\u003eDouble-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "CDF",
          "signature": "Double-\u003eDouble-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:normalCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParametrised as follows;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e mean\n\u003c/li\u003e\u003cli\u003e standard deviation \n\u003c/li\u003e\u003cli\u003e size\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe function generates the CDF of a Normal distribution, using the mean and standard deviation, over the \n    range of discrete values [0 .. size]. This function is raw, and does not use \u003ccode\u003e\u003ca\u003efixEnd\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "normalCDF'",
          "package": "local-search",
          "signature": "Double -\u003e Double -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#normalCDF%27",
          "type": "function"
        },
        "index": {
          "description": "Parametrised as follows mean standard deviation size The function generates the CDF of Normal distribution using the mean and standard deviation over the range of discrete values size This function is raw and does not use fixEnd",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "normalCDF'",
          "normalized": "Double-\u003eDouble-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "CDF'",
          "signature": "Double-\u003eDouble-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:normalCDF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is parametrised as follows;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e mean \n\u003c/li\u003e\u003cli\u003e k    \n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe function generates the probability of element \u003cem\u003ek\u003c/em\u003e being chosen from a Poisson distribution with the \n    specified mean. \n\u003c/p\u003e\u003cp\u003eThis is quite a slow function and should probably be memoized in the future.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "poisson",
          "package": "local-search",
          "signature": "Double -\u003e Int -\u003e Double",
          "source": "src/Control-Search-Local-Distributions.html#poisson",
          "type": "function"
        },
        "index": {
          "description": "This is parametrised as follows mean The function generates the probability of element being chosen from Poisson distribution with the specified mean This is quite slow function and should probably be memoized in the future",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "poisson",
          "normalized": "Double-\u003eInt-\u003eDouble",
          "package": "local-search",
          "signature": "Double-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParametrised as follows;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e mean\n\u003c/li\u003e\u003cli\u003e size\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis function generates the CDF of a Poisson distribution with the specified mean, over the range of \n    discrete values [0 .. size]. This function includes a call to \u003ccode\u003e\u003ca\u003efixEnd\u003c/a\u003e\u003c/code\u003e so that the final value of the \n    distribution is always 1.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "poissonCDF",
          "package": "local-search",
          "signature": "Double -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#poissonCDF",
          "type": "function"
        },
        "index": {
          "description": "Parametrised as follows mean size This function generates the CDF of Poisson distribution with the specified mean over the range of discrete values size This function includes call to fixEnd so that the final value of the distribution is always",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "poissonCDF",
          "normalized": "Double-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "CDF",
          "signature": "Double-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:poissonCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParametrised as follows;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e mean\n\u003c/li\u003e\u003cli\u003e size\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis function generates the CDF of a Poisson distribution with the specified mean, over the range of \n    discrete values [0 .. size]. This function gives the raw distribution.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "poissonCDF'",
          "package": "local-search",
          "signature": "Double -\u003e DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#poissonCDF%27",
          "type": "function"
        },
        "index": {
          "description": "Parametrised as follows mean size This function generates the CDF of Poisson distribution with the specified mean over the range of discrete values size This function gives the raw distribution",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "poissonCDF'",
          "normalized": "Double-\u003eDistributionMaker",
          "package": "local-search",
          "partial": "CDF'",
          "signature": "Double-\u003eDistributionMaker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:poissonCDF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to generate a Uniform distribution CDF over the range [0 .. size]. For safety this includes \n    \u003ccode\u003e\u003ca\u003efixEnd\u003c/a\u003e\u003c/code\u003e, though this should have no effect.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "uniformCDF",
          "package": "local-search",
          "signature": "DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#uniformCDF",
          "type": "function"
        },
        "index": {
          "description": "function to generate Uniform distribution CDF over the range size For safety this includes fixEnd though this should have no effect",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "uniformCDF",
          "package": "local-search",
          "partial": "CDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:uniformCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw Uniform distribution without using \u003ccode\u003e\u003ca\u003efixEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Distributions",
          "name": "uniformCDF'",
          "package": "local-search",
          "signature": "DistributionMaker",
          "source": "src/Control-Search-Local-Distributions.html#uniformCDF%27",
          "type": "function"
        },
        "index": {
          "description": "The raw Uniform distribution without using fixEnd",
          "hierarchy": "Control Search Local Distributions",
          "module": "Control.Search.Local.Distributions",
          "name": "uniformCDF'",
          "package": "local-search",
          "partial": "CDF'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Distributions.html#v:uniformCDF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese combinators are for controlling local search processes at the top level and preventing stack and memory build ups.\n  The basic combinators seen in the other libraries are all lazy and will describe the structure of the computations \n  that will make up the search. When it comes to accessing values and solutions from these processes you can print \n  each solution which will push the process forwards and avoid memory problems. \n\u003c/p\u003e\u003cp\u003eTo avoid wasting processing time displaying many solutions in a process, when all you are interested in is the Nth one, \n  you might use the common list index function (!!). However this is a lazy operator and will cause Haskell to \n  construct the computation for the Nth value, in terms of the previous values, before beginning the evaluation. \n  This causes the memory problems. \n\u003c/p\u003e\u003cp\u003eInstead we provide an eager replacement for (!!) which we call (!!!). For more sophisticated applications we \n  provide two other semi-eager operations which return both an eager value and a lazy remainder.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Search.Local.Eager",
          "name": "Eager",
          "package": "local-search",
          "source": "src/Control-Search-Local-Eager.html",
          "type": "module"
        },
        "index": {
          "description": "These combinators are for controlling local search processes at the top level and preventing stack and memory build ups The basic combinators seen in the other libraries are all lazy and will describe the structure of the computations that will make up the search When it comes to accessing values and solutions from these processes you can print each solution which will push the process forwards and avoid memory problems To avoid wasting processing time displaying many solutions in process when all you are interested in is the Nth one you might use the common list index function However this is lazy operator and will cause Haskell to construct the computation for the Nth value in terms of the previous values before beginning the evaluation This causes the memory problems Instead we provide an eager replacement for which we call For more sophisticated applications we provide two other semi-eager operations which return both an eager value and lazy remainder",
          "hierarchy": "Control Search Local Eager",
          "module": "Control.Search.Local.Eager",
          "name": "Eager",
          "package": "local-search",
          "partial": "Eager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Eager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an eager list index. It acts exactly like the common (!!) operation, however it \n    evaluates each element to WHNF. In the case where each element of the list depends upon previous \n    elements in some way (usually true of the local search systems), this will result in the \n    computation being pushed forwards.  \n\u003c/p\u003e",
          "module": "Control.Search.Local.Eager",
          "name": "(!!!)",
          "package": "local-search",
          "signature": "[a] -\u003e Int -\u003e a",
          "source": "src/Control-Search-Local-Eager.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "description": "This is an eager list index It acts exactly like the common operation however it evaluates each element to WHNF In the case where each element of the list depends upon previous elements in some way usually true of the local search systems this will result in the computation being pushed forwards",
          "hierarchy": "Control Search Local Eager",
          "module": "Control.Search.Local.Eager",
          "name": "(!!!) !!!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "local-search",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Eager.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the eager list index, however it also gives back the remainder of the computation as an\n    unevaluated list. It is expected that this will be used to sample a stream for a human user, \n    allowing the user to see what has happened and make a decision to continue, or stop. If continue, then \n    the lazy remainder can be processed further. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Eager",
          "name": "indexWithRemainder",
          "package": "local-search",
          "signature": "[a] -\u003e Int -\u003e (a, [a])",
          "source": "src/Control-Search-Local-Eager.html#indexWithRemainder",
          "type": "function"
        },
        "index": {
          "description": "Similar to the eager list index however it also gives back the remainder of the computation as an unevaluated list It is expected that this will be used to sample stream for human user allowing the user to see what has happened and make decision to continue or stop If continue then the lazy remainder can be processed further",
          "hierarchy": "Control Search Local Eager",
          "module": "Control.Search.Local.Eager",
          "name": "indexWithRemainder",
          "normalized": "[a]-\u003eInt-\u003e(a,[a])",
          "package": "local-search",
          "partial": "With Remainder",
          "signature": "[a]-\u003eInt-\u003e(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Eager.html#v:indexWithRemainder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the helper function used by the others to force the list evaluation, as the list is accessed.\n    I think this is equivalent to \n\u003c/p\u003e\u003cpre\u003e evalList rseq \n\u003c/pre\u003e\u003cp\u003efrom the \u003cem\u003eControl.Parallel.Strategies\u003c/em\u003e library, but reproduced here to reduce dependencies.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Eager",
          "name": "push",
          "package": "local-search",
          "signature": "[a] -\u003e [a]",
          "source": "src/Control-Search-Local-Eager.html#push",
          "type": "function"
        },
        "index": {
          "description": "This is the helper function used by the others to force the list evaluation as the list is accessed think this is equivalent to evalList rseq from the Control.Parallel.Strategies library but reproduced here to reduce dependencies",
          "hierarchy": "Control Search Local Eager",
          "module": "Control.Search.Local.Eager",
          "name": "push",
          "normalized": "[a]-\u003e[a]",
          "package": "local-search",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Eager.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEager \u003cem\u003esplitAt\u003c/em\u003e. Looks like \u003cem\u003esplitAt\u003c/em\u003e, but the elements of the first list are evaluated to WHNF. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Eager",
          "name": "splitAt'",
          "package": "local-search",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Control-Search-Local-Eager.html#splitAt%27",
          "type": "function"
        },
        "index": {
          "description": "Eager splitAt Looks like splitAt but the elements of the first list are evaluated to WHNF",
          "hierarchy": "Control Search Local Eager",
          "module": "Control.Search.Local.Eager",
          "name": "splitAt'",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "local-search",
          "partial": "At'",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Eager.html#v:splitAt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library has embedded within it two example TSP files drawn from the TSPLIB; burma14 and fl417. \n  This module provides a loading routine for these two files only. General loading routines for \n  the TSPLIB format are provided by the Combinatorial Problems library.\n\u003c/p\u003e\u003cp\u003eThis module also provides a collection of simple TSP perturbation and recombination methods for use in the following \n  examples. Much of the code for these examples, in terms of the TSP implementation, recombination and perturbation \n  methods is not particularly efficient and only intended for example purposes. \n\u003c/p\u003e\u003cp\u003eTo run these examples first use the following imports;\n\u003c/p\u003e\u003cpre\u003e import Control.Search.Local\n import Control.Search.Local.Example\n import Control.Search.Local.Strategy\n import Control.Search.Local.Eager\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A simple maximal iterative improver. This will print out all the solutions encountered.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e loadExampleFile BURMA14 \u003e\u003e= return .  loopP (maximalii (map adjacentExchangeN))\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A stochastic choice from the improvement neighbourhood\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e iiExample  \n    = do prob\u003c-loadExampleFile FL417\n         strat\u003c-newStdGen \u003e\u003e= return . stochasticii rChoice . randoms \n         return . loopP (strat (map adjacentExchangeN)) $ prob\n where\n   rChoice xs p = xs !! (floor ((p::Float) * fromIntegral (length xs)))             \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e The standard TABU search, with a TABU list size of 5\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e loadExampleFile BURMA14 \u003e\u003e= return . bestSoFar . loopP (standardTabu 5 (map adjacentExchangeN) (map head))  \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A more complex TABU search, with a varying neighbourhood and varying TABU list size\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e tabuExample \n    = do prob\u003c-loadExampleFile FL417\n         nF  \u003c- newStdGen \u003e\u003e= return . stochasticNeighbourhood 417 \n         vWin \u003c- newStdGen \u003e\u003e= return . varyWindow . randomRs (5,10)\n         return . bestSoFar . loopP (tabu (vWin . window 15) nF (map head)) $ prob\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A simulated annealing search, using an adjacent exchange perturbation and a common geometric cooling strategy.\n    The values of the cooling strategy have been selected through rather rough and ready quick testing.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e saExample \n  = do prob\u003c-loadExampleFile FL417\n       (fIs,sIs) \u003c- newStdGen \u003e\u003e= return . (\\a-\u003e(map head a,map last a)) . chunk 2 . randomRs (0,numCities prob-1) \n       let perturb = zipWith3 swapPositions fIs sIs\n       choiceRs \u003c-newStdGen \u003e\u003e= return . randoms \n       return . bestSoFar . loopP (sa getTSPVal perturb \n                                      (geoCooling 80000 (0.99 :: Float))\n                                      choiceRs) $ prob \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A genetic algorithm which only makes use of recombination. \n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e gaNoMutate \n  = do prob\u003c-loadExampleFile FL417\n       recomb\u003c-newStdGen \u003e\u003e= return . stochasticRecombine\n       startSols \u003c- newStdGen \u003e\u003e= return . randomStarts 20 prob\n       let dist = (++[1]) . takeWhile (\u003c1) $ iterate  (*1.0884) (0.2::Float)\n       rs \u003c- newStdGen \u003e\u003e= return . randoms \n       return . bestSoFar . loopS (ga (makePop 20) \n                                      (recomb . gaSelect 2 dist rs) \n                                      id) $ startSols   \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A complete genetic algorithm that mutates in a random pattern (at a rate of 1/20th)\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e gaWithMutate \n  = do prob\u003c-loadExampleFile FL417\n       recomb\u003c-newStdGen \u003e\u003e= return . stochasticRecombine\n       startSols \u003c- newStdGen \u003e\u003e= return . randomStarts 20 prob\n       pattern \u003c- newStdGen \u003e\u003e= return . map (\u003c(0.05::Float)) . randoms -- boolean pattern\n       (fIs,sIs) \u003c- newStdGen \u003e\u003e= return . (\\a-\u003e(map head a,map last a)) . chunk 2 . randomRs (0,numCities prob-1) \n       let dist = (++[1]) . takeWhile (\u003c1) $ iterate  (*1.0884) (0.2::Float)\n       let mut = nest pattern (zipWith3 swapPositions fIs sIs) \n       rs \u003c- newStdGen \u003e\u003e= return . randoms \n       return . bestSoFar . loopS (ga (makePop 20) \n                                      (recomb . gaSelect 2 dist rs) \n                                      mut) $ startSols  \n\u003c/pre\u003e\u003cp\u003eAll these examples are best demonstrated by composition with the following limiting function, parametrised as \n  seen fit by the user;\n\u003c/p\u003e\u003cpre\u003e strategy \u003e\u003e= return . limiterTSP 0 10 \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Search.Local.Example",
          "name": "Example",
          "package": "local-search",
          "source": "src/Control-Search-Local-Example.html",
          "type": "module"
        },
        "index": {
          "description": "This library has embedded within it two example TSP files drawn from the TSPLIB burma14 and fl417 This module provides loading routine for these two files only General loading routines for the TSPLIB format are provided by the Combinatorial Problems library This module also provides collection of simple TSP perturbation and recombination methods for use in the following examples Much of the code for these examples in terms of the TSP implementation recombination and perturbation methods is not particularly efficient and only intended for example purposes To run these examples first use the following imports import Control.Search.Local import Control.Search.Local.Example import Control.Search.Local.Strategy import Control.Search.Local.Eager simple maximal iterative improver This will print out all the solutions encountered loadExampleFile BURMA14 return loopP maximalii map adjacentExchangeN stochastic choice from the improvement neighbourhood iiExample do prob loadExampleFile FL417 strat newStdGen return stochasticii rChoice randoms return loopP strat map adjacentExchangeN prob where rChoice xs xs floor Float fromIntegral length xs The standard TABU search with TABU list size of loadExampleFile BURMA14 return bestSoFar loopP standardTabu map adjacentExchangeN map head more complex TABU search with varying neighbourhood and varying TABU list size tabuExample do prob loadExampleFile FL417 nF newStdGen return stochasticNeighbourhood vWin newStdGen return varyWindow randomRs return bestSoFar loopP tabu vWin window nF map head prob simulated annealing search using an adjacent exchange perturbation and common geometric cooling strategy The values of the cooling strategy have been selected through rather rough and ready quick testing saExample do prob loadExampleFile FL417 fIs sIs newStdGen return map head map last chunk randomRs numCities prob-1 let perturb zipWith3 swapPositions fIs sIs choiceRs newStdGen return randoms return bestSoFar loopP sa getTSPVal perturb geoCooling Float choiceRs prob genetic algorithm which only makes use of recombination gaNoMutate do prob loadExampleFile FL417 recomb newStdGen return stochasticRecombine startSols newStdGen return randomStarts prob let dist takeWhile iterate Float rs newStdGen return randoms return bestSoFar loopS ga makePop recomb gaSelect dist rs id startSols complete genetic algorithm that mutates in random pattern at rate of th gaWithMutate do prob loadExampleFile FL417 recomb newStdGen return stochasticRecombine startSols newStdGen return randomStarts prob pattern newStdGen return map Float randoms boolean pattern fIs sIs newStdGen return map head map last chunk randomRs numCities prob-1 let dist takeWhile iterate Float let mut nest pattern zipWith3 swapPositions fIs sIs rs newStdGen return randoms return bestSoFar loopS ga makePop recomb gaSelect dist rs mut startSols All these examples are best demonstrated by composition with the following limiting function parametrised as seen fit by the user strategy return limiterTSP",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "Example",
          "package": "local-search",
          "partial": "Example",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Search.Local.Example",
          "name": "ExampleFiles",
          "package": "local-search",
          "source": "src/Control-Search-Local-Example.html#ExampleFiles",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "ExampleFiles",
          "package": "local-search",
          "partial": "Example Files",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#t:ExampleFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Search.Local.Example",
          "name": "BURMA14",
          "package": "local-search",
          "signature": "BURMA14",
          "source": "src/Control-Search-Local-Example.html#ExampleFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "BURMA14",
          "package": "local-search",
          "partial": "BURMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:BURMA14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Search.Local.Example",
          "name": "FL417",
          "package": "local-search",
          "signature": "FL417",
          "source": "src/Control-Search-Local-Example.html#ExampleFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "FL417",
          "package": "local-search",
          "partial": "FL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:FL417"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap a city, indicated by index, with the city after it, indicated by index.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "adjacentExchange",
          "package": "local-search",
          "signature": "Int -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/Control-Search-Local-Example.html#adjacentExchange",
          "type": "function"
        },
        "index": {
          "description": "Swap city indicated by index with the city after it indicated by index",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "adjacentExchange",
          "normalized": "Int-\u003eTSPProblem-\u003eTSPProblem",
          "package": "local-search",
          "partial": "Exchange",
          "signature": "Int-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:adjacentExchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a particular path, generate every path that can exist from swapping adjacent cities.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "adjacentExchangeN",
          "package": "local-search",
          "signature": "TSPProblem -\u003e [TSPProblem]",
          "source": "src/Control-Search-Local-Example.html#adjacentExchangeN",
          "type": "function"
        },
        "index": {
          "description": "For particular path generate every path that can exist from swapping adjacent cities",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "adjacentExchangeN",
          "normalized": "TSPProblem-\u003e[TSPProblem]",
          "package": "local-search",
          "partial": "Exchange",
          "signature": "TSPProblem-\u003e[TSPProblem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:adjacentExchangeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot a loading routine, but a synonym for a function within the \u003ccode\u003e\u003ca\u003eTSP\u003c/a\u003e\u003c/code\u003e library.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "getTSPVal",
          "package": "local-search",
          "signature": "TSPProblem -\u003e f",
          "source": "src/Control-Search-Local-Example.html#getTSPVal",
          "type": "function"
        },
        "index": {
          "description": "Not loading routine but synonym for function within the TSP library",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "getTSPVal",
          "normalized": "TSPProblem-\u003ea",
          "package": "local-search",
          "partial": "TSPVal",
          "signature": "TSPProblem-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:getTSPVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream transformation that converts a local search process into a finite list. \n    The function takes a quality function parameter, that can yield a floating point quality of a solution.\n    The remaining functions control the limiting process;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e When the difference in quality between two solutions is below the second parameter, terminate\n    (2) The two solutions that we are comparing are divided by the integer parameter\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Search.Local.Example",
          "name": "limiter",
          "package": "local-search",
          "signature": "(s -\u003e f) -\u003e f -\u003e Int -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Example.html#limiter",
          "type": "function"
        },
        "index": {
          "description": "stream transformation that converts local search process into finite list The function takes quality function parameter that can yield floating point quality of solution The remaining functions control the limiting process When the difference in quality between two solutions is below the second parameter terminate The two solutions that we are comparing are divided by the integer parameter",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "limiter",
          "normalized": "(a-\u003eb)-\u003eb-\u003eInt-\u003eStreamT a a",
          "package": "local-search",
          "signature": "(s-\u003ef)-\u003ef-\u003eInt-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:limiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of limiter, fixing the quality function and the problem data type. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "limiterTSP",
          "package": "local-search",
          "signature": "Double -\u003e Int -\u003e StreamT TSPProblem TSPProblem",
          "source": "src/Control-Search-Local-Example.html#limiterTSP",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of limiter fixing the quality function and the problem data type",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "limiterTSP",
          "normalized": "Double-\u003eInt-\u003eStreamT TSPProblem TSPProblem",
          "package": "local-search",
          "partial": "TSP",
          "signature": "Double-\u003eInt-\u003eStreamT TSPProblem TSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:limiterTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemonstration loading routine for only two files stored within this library. After loading this routine also \n    randomises the initial solution route.\n\u003c/p\u003e\u003cp\u003eFor more general TSP loading routines see \u003ccode\u003e\u003ca\u003eTSPLIB\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "loadExampleFile",
          "package": "local-search",
          "signature": "ExampleFiles -\u003e IO TSPProblem",
          "source": "src/Control-Search-Local-Example.html#loadExampleFile",
          "type": "function"
        },
        "index": {
          "description": "Demonstration loading routine for only two files stored within this library After loading this routine also randomises the initial solution route For more general TSP loading routines see TSPLIB",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "loadExampleFile",
          "normalized": "ExampleFiles-\u003eIO TSPProblem",
          "package": "local-search",
          "partial": "Example File",
          "signature": "ExampleFiles-\u003eIO TSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:loadExampleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenetic algorithms require a number of (usually) stochastically generated solutions to begin the process, not 1.\n    This function is provided for these cases, taking the parameters;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e the number of solutions to produce\n\u003c/li\u003e\u003cli\u003e a sample solution (for edgeweights and problem size)\n\u003c/li\u003e\u003cli\u003e a random number generator\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Search.Local.Example",
          "name": "randomStarts",
          "package": "local-search",
          "signature": "Int -\u003e TSPProblem -\u003e g -\u003e [TSPProblem]",
          "source": "src/Control-Search-Local-Example.html#randomStarts",
          "type": "function"
        },
        "index": {
          "description": "Genetic algorithms require number of usually stochastically generated solutions to begin the process not This function is provided for these cases taking the parameters the number of solutions to produce sample solution for edgeweights and problem size random number generator",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "randomStarts",
          "normalized": "Int-\u003eTSPProblem-\u003ea-\u003e[TSPProblem]",
          "package": "local-search",
          "partial": "Starts",
          "signature": "Int-\u003eTSPProblem-\u003eg-\u003e[TSPProblem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:randomStarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany strategies benefit from a small manageable neighbourhood, but with the opportunity to access wider options.\n    This stream transformer provides this, at each step providing a neighbourhood of size N, drawn randomly from the \n    set of all possible city swaps, adjacent or otherwise. \n\u003c/p\u003e\u003cp\u003eThis does not need to be defined as a stream transformer, but the alternative still requires parametrisation \n    with values that will be drawn from a source of random numbers. This version would then require lifting to \n    become a stream transformer, and this introduces more complications in the meta-heuristic code.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "stochasticNeighbourhood",
          "package": "local-search",
          "signature": "Int -\u003e g -\u003e StreamT TSPProblem (List TSPProblem)",
          "source": "src/Control-Search-Local-Example.html#stochasticNeighbourhood",
          "type": "function"
        },
        "index": {
          "description": "Many strategies benefit from small manageable neighbourhood but with the opportunity to access wider options This stream transformer provides this at each step providing neighbourhood of size drawn randomly from the set of all possible city swaps adjacent or otherwise This does not need to be defined as stream transformer but the alternative still requires parametrisation with values that will be drawn from source of random numbers This version would then require lifting to become stream transformer and this introduces more complications in the meta-heuristic code",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "stochasticNeighbourhood",
          "normalized": "Int-\u003ea-\u003eStreamT TSPProblem(List TSPProblem)",
          "package": "local-search",
          "partial": "Neighbourhood",
          "signature": "Int-\u003eg-\u003eStreamT TSPProblem(List TSPProblem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:stochasticNeighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recombination process, for use in the genetic algorithm examples. This is presented as a contraction, however \n    it does assume that each population has already been constrained to elements that will form the parents of the \n    new solution. This process also assumes that there will be exactly 2 parents to each new solution, so it is \n    an example of a recombination method only. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "stochasticRecombine",
          "package": "local-search",
          "signature": "g -\u003e StreamT (List TSPProblem) TSPProblem",
          "source": "src/Control-Search-Local-Example.html#stochasticRecombine",
          "type": "function"
        },
        "index": {
          "description": "recombination process for use in the genetic algorithm examples This is presented as contraction however it does assume that each population has already been constrained to elements that will form the parents of the new solution This process also assumes that there will be exactly parents to each new solution so it is an example of recombination method only",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "stochasticRecombine",
          "normalized": "a-\u003eStreamT(List TSPProblem)TSPProblem",
          "package": "local-search",
          "partial": "Recombine",
          "signature": "g-\u003eStreamT(List TSPProblem)TSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:stochasticRecombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for the function \u003ccode\u003e\u003ca\u003eswapCitiesOnIndex\u003c/a\u003e\u003c/code\u003e found in the \u003ccode\u003e\u003ca\u003eTSP\u003c/a\u003e\u003c/code\u003e library. \n    This will form the foundation of our perturbation and neighbourhood functions.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Example",
          "name": "swapPositions",
          "package": "local-search",
          "signature": "Int -\u003e Int -\u003e TSPProblem -\u003e TSPProblem",
          "source": "src/Control-Search-Local-Example.html#swapPositions",
          "type": "function"
        },
        "index": {
          "description": "synonym for the function swapCitiesOnIndex found in the TSP library This will form the foundation of our perturbation and neighbourhood functions",
          "hierarchy": "Control Search Local Example",
          "module": "Control.Search.Local.Example",
          "name": "swapPositions",
          "normalized": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "package": "local-search",
          "partial": "Positions",
          "signature": "Int-\u003eInt-\u003eTSPProblem-\u003eTSPProblem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Example.html#v:swapPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of common strategies, built out of the combinators in the other libraries. \n    For examples of their use, see \u003ca\u003eControl.Search.Local.Example\u003c/a\u003e. ACO is the least well thought through.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "Strategies",
          "package": "local-search",
          "source": "src/Control-Search-Local-Strategies.html",
          "type": "module"
        },
        "index": {
          "description": "collection of common strategies built out of the combinators in the other libraries For examples of their use see Control.Search.Local.Example ACO is the least well thought through",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "Strategies",
          "package": "local-search",
          "partial": "Strategies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple ACO implementation. It assumes that Ants will be released in groups, which is represented as the \n    population size. It requires a transformation for generating pheromones, and creating new solutions from \n    pheromone data. This will be problem specific. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "aco",
          "package": "local-search",
          "signature": "Int -\u003e StreamT (List s) a -\u003e StreamT a s -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#aco",
          "type": "function"
        },
        "index": {
          "description": "simple ACO implementation It assumes that Ants will be released in groups which is represented as the population size It requires transformation for generating pheromones and creating new solutions from pheromone data This will be problem specific",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "aco",
          "normalized": "Int-\u003eStreamT(List a)b-\u003eStreamT b a-\u003eStreamT a a",
          "package": "local-search",
          "signature": "Int-\u003eStreamT(List s)a-\u003eStreamT a s-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:aco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst found iterative improvement strategy. Fixes the choice function to \u003ccode\u003emap head\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "firstFoundii",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#firstFoundii",
          "type": "function"
        },
        "index": {
          "description": "First found iterative improvement strategy Fixes the choice function to map head",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "firstFoundii",
          "normalized": "StreamT a(List a)-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Foundii",
          "signature": "StreamT s(List s)-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:firstFoundii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Search.Local.Strategies",
          "name": "ga",
          "package": "local-search",
          "signature": "Int -\u003e Float -\u003e StreamT (List s) s -\u003e StreamT (List s) (List s) -\u003e StreamT s s -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#ga",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "ga",
          "normalized": "Int-\u003eFloat-\u003eStreamT(List a)a-\u003eStreamT(List a)(List a)-\u003eStreamT a a-\u003eStreamT a a",
          "package": "local-search",
          "signature": "Int-\u003eFloat-\u003eStreamT(List s)s-\u003eStreamT(List s)(List s)-\u003eStreamT s s-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:ga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most common cooling strategy for simulated annealing, geometric. The first value is the starting temperature, \n    the second a value between 0 and 1, the cooling rate.  \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "geoCooling",
          "package": "local-search",
          "signature": "b -\u003e b -\u003e [b]",
          "source": "src/Control-Search-Local-Strategies.html#geoCooling",
          "type": "function"
        },
        "index": {
          "description": "The most common cooling strategy for simulated annealing geometric The first value is the starting temperature the second value between and the cooling rate",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "geoCooling",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "local-search",
          "partial": "Cooling",
          "signature": "b-\u003eb-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:geoCooling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generic skeleton of iterative improvers. The first parameters is a neighbourhood stream expander, \n  the second is a stream contractor which makes choices from neighbourhoods. All neighbourhoods will be\n  filtered so that the elements can only improve upon the previous solution. \n\u003c/p\u003e\u003cp\u003eSince the parameters are stream transformers, simple functions must be lifted before they can be used \n  as parameters. For example a deterministic neighbourhood function \u003ccode\u003edf\u003c/code\u003e should be lifted with \u003ccode\u003emap\u003c/code\u003e and \n  to choose the first element from each improving neighbourhood you would use \u003ccode\u003emap head\u003c/code\u003e, giving\n\u003c/p\u003e\u003cpre\u003e iterativeImprover (map df) (map head). \n\u003c/pre\u003e\u003cp\u003eThis skeleton provides a standard infinite stream of solutions, rather than terminating \n  when a local minima is reached. This provides better safety for composition than the \n  versions suggested in the paper. When the filter results in an empty list, the seed \n  value is wrapped up as a list and returned in its place.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "iterativeImprover",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT (List s) s -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#iterativeImprover",
          "type": "function"
        },
        "index": {
          "description": "The generic skeleton of iterative improvers The first parameters is neighbourhood stream expander the second is stream contractor which makes choices from neighbourhoods All neighbourhoods will be filtered so that the elements can only improve upon the previous solution Since the parameters are stream transformers simple functions must be lifted before they can be used as parameters For example deterministic neighbourhood function df should be lifted with map and to choose the first element from each improving neighbourhood you would use map head giving iterativeImprover map df map head This skeleton provides standard infinite stream of solutions rather than terminating when local minima is reached This provides better safety for composition than the versions suggested in the paper When the filter results in an empty list the seed value is wrapped up as list and returned in its place",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "iterativeImprover",
          "normalized": "StreamT a(List a)-\u003eStreamT(List a)a-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Improver",
          "signature": "StreamT s(List s)-\u003eStreamT(List s)s-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:iterativeImprover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncluded for completeness, this is a cooling strategy for simulated annealing that is usually not very effective,\n    a linear changing strategy. The first value is the starting temperature the second is the value to increase it by \n    at each step. In order to have it reduce at each step, pass a negative value. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "linCooling",
          "package": "local-search",
          "signature": "b -\u003e b -\u003e [b]",
          "source": "src/Control-Search-Local-Strategies.html#linCooling",
          "type": "function"
        },
        "index": {
          "description": "Included for completeness this is cooling strategy for simulated annealing that is usually not very effective linear changing strategy The first value is the starting temperature the second is the value to increase it by at each step In order to have it reduce at each step pass negative value",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "linCooling",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "local-search",
          "partial": "Cooling",
          "signature": "b-\u003eb-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:linCooling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logarithmic cooling strategy intended for use within simulated annealing. Broadly the first value is \n    the starting temperature and the second a value between 0 and 1. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "logCooling",
          "package": "local-search",
          "signature": "b -\u003e b -\u003e [b]",
          "source": "src/Control-Search-Local-Strategies.html#logCooling",
          "type": "function"
        },
        "index": {
          "description": "logarithmic cooling strategy intended for use within simulated annealing Broadly the first value is the starting temperature and the second value between and",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "logCooling",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "local-search",
          "partial": "Cooling",
          "signature": "b-\u003eb-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:logCooling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal iterative improvement strategy. Since we seek the lowest possible value of solutions this \n    translates to fixing the choice function to \u003ccode\u003emap worst\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "maximalii",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#maximalii",
          "type": "function"
        },
        "index": {
          "description": "Maximal iterative improvement strategy Since we seek the lowest possible value of solutions this translates to fixing the choice function to map worst",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "maximalii",
          "normalized": "StreamT a(List a)-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT s(List s)-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:maximalii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal iterative improvement strategy. Fixes the choice function to \u003ccode\u003emap best\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "minimalii",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#minimalii",
          "type": "function"
        },
        "index": {
          "description": "Minimal iterative improvement strategy Fixes the choice function to map best",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "minimalii",
          "normalized": "StreamT a(List a)-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT s(List s)-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:minimalii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eACO's often use a degrading system, so that the next trail contains some part of the previous trails.\n    This function provides this functionality, assuming that pheromone data can be summed like a number, and \n    an initial state is provided. The stream transformation parameter represents a streamed \n    degrade, for example;\n\u003c/p\u003e\u003cpre\u003e map (*0.1)\n\u003c/pre\u003e\u003cp\u003ewould give one tenth of the previous previous pheromone data added to the result. This is a stream transformation to allow for flexibility, for example adding a stochastic element.  \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "pheromoneDegrade",
          "package": "local-search",
          "signature": "a -\u003e StreamT a a -\u003e StreamT a a",
          "source": "src/Control-Search-Local-Strategies.html#pheromoneDegrade",
          "type": "function"
        },
        "index": {
          "description": "ACO often use degrading system so that the next trail contains some part of the previous trails This function provides this functionality assuming that pheromone data can be summed like number and an initial state is provided The stream transformation parameter represents streamed degrade for example map would give one tenth of the previous previous pheromone data added to the result This is stream transformation to allow for flexibility for example adding stochastic element",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "pheromoneDegrade",
          "normalized": "a-\u003eStreamT a a-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Degrade",
          "signature": "a-\u003eStreamT a a-\u003eStreamT a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:pheromoneDegrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulated Annealing skeleton. This requires a significant number of parameters due to the \n    various stochastic components, temperatures and the need for a numerical valuation of \n    solutions qualities. The parameters are;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a function to get the numerical value of a candidate solution\n\u003c/li\u003e\u003cli\u003e a function to provide a perturbation of a solution, with respect to some external factor, \n        such as a random number, which is what the data type \u003cem\u003er\u003c/em\u003e is expected (though not required) to be.\n\u003c/li\u003e\u003cli\u003e a stream of values representing the temperature or cooling strategy\n\u003c/li\u003e\u003cli\u003e a stream of stochastic values\n\u003c/li\u003e\u003cli\u003e a stream of (stochastic) values for the creation of perturbations\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "sa",
          "package": "local-search",
          "signature": "(s -\u003e v) -\u003e StreamT s s -\u003e Stream v -\u003e Stream v -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#sa",
          "type": "function"
        },
        "index": {
          "description": "Simulated Annealing skeleton This requires significant number of parameters due to the various stochastic components temperatures and the need for numerical valuation of solutions qualities The parameters are function to get the numerical value of candidate solution function to provide perturbation of solution with respect to some external factor such as random number which is what the data type is expected though not required to be stream of values representing the temperature or cooling strategy stream of stochastic values stream of stochastic values for the creation of perturbations",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "sa",
          "normalized": "(a-\u003eb)-\u003eStreamT a a-\u003eStream b-\u003eStream b-\u003eStreamT a a",
          "package": "local-search",
          "signature": "(s-\u003ev)-\u003eStreamT s s-\u003eStream v-\u003eStream v-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:sa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe traditional choice function used within simulated annealing. The parameters are; \n    a function to yield quality of a solution, a value between 0 and 1 (stochastic expected) a temperature, \n    the old solution and the possible future solution. Frustratingly this does not make use of \u003ccode\u003e\u003ca\u003eOptimisable\u003c/a\u003e\u003c/code\u003e\n    because it requires the actual floating point quality values of solutions.\n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "saChoose",
          "package": "local-search",
          "signature": "(s -\u003e v) -\u003e v -\u003e v -\u003e s -\u003e s -\u003e s",
          "source": "src/Control-Search-Local-Strategies.html#saChoose",
          "type": "function"
        },
        "index": {
          "description": "The traditional choice function used within simulated annealing The parameters are function to yield quality of solution value between and stochastic expected temperature the old solution and the possible future solution Frustratingly this does not make use of Optimisable because it requires the actual floating point quality values of solutions",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "saChoose",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb-\u003ea-\u003ea-\u003ea",
          "package": "local-search",
          "partial": "Choose",
          "signature": "(s-\u003ev)-\u003ev-\u003ev-\u003es-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:saChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommonly TABU search does not take a function which makes a TABU list, but rather a size of \n    TABU list. We provide this less flexible form here, where the first parameter changes from \n    to being the window size. The choice function is set to \u003cem\u003emap head\u003c/em\u003e. Implemented in terms of \u003ccode\u003e\u003ca\u003etabu\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eI am not happy with this. What is really needed is a more flexible version of \u003ccode\u003e\u003ca\u003esafe\u003c/a\u003e\u003c/code\u003e, so that \n    rather than just returning the singleton it can return an alternative transformation of the neighbourhood.\n    This is also some scope for using compiler rules here to balance usability with performance. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "standardTabu",
          "package": "local-search",
          "signature": "Int -\u003e StreamT s (List s) -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#standardTabu",
          "type": "function"
        },
        "index": {
          "description": "Commonly TABU search does not take function which makes TABU list but rather size of TABU list We provide this less flexible form here where the first parameter changes from to being the window size The choice function is set to map head Implemented in terms of tabu am not happy with this What is really needed is more flexible version of safe so that rather than just returning the singleton it can return an alternative transformation of the neighbourhood This is also some scope for using compiler rules here to balance usability with performance",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "standardTabu",
          "normalized": "Int-\u003eStreamT a(List a)-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Tabu",
          "signature": "Int-\u003eStreamT s(List s)-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:standardTabu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStochastic iterative improvement strategy. The choice function is required to make a random choice from \n    the neighbourhood at each step. This is implemented in terms of the \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e function, and \n    uses a \u003ccode\u003e\u003ca\u003euniformCDF\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "stochasticii",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#stochasticii",
          "type": "function"
        },
        "index": {
          "description": "Stochastic iterative improvement strategy The choice function is required to make random choice from the neighbourhood at each step This is implemented in terms of the select function and uses uniformCDF",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "stochasticii",
          "normalized": "StreamT a(List a)-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT s(List s)-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:stochasticii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general skeleton for TABU search. The three parameters are \n\u003c/p\u003e\u003col\u003e\u003cli\u003e a stream transformer to create the stream of TABU lists (typically provided by \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e a stream transformer to create the stream of neighbourhoods, in the same manner as seen in iterative improver\n\u003c/li\u003e\u003cli\u003e a choice transformer to choose a single element from a pruned neighbourhood.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Search.Local.Strategies",
          "name": "tabu",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s (List s) -\u003e StreamT (List s) s -\u003e StreamT s s",
          "source": "src/Control-Search-Local-Strategies.html#tabu",
          "type": "function"
        },
        "index": {
          "description": "general skeleton for TABU search The three parameters are stream transformer to create the stream of TABU lists typically provided by window stream transformer to create the stream of neighbourhoods in the same manner as seen in iterative improver choice transformer to choose single element from pruned neighbourhood",
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "tabu",
          "normalized": "StreamT a(List a)-\u003eStreamT a(List a)-\u003eStreamT(List a)a-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT s(List s)-\u003eStreamT s(List s)-\u003eStreamT(List s)s-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:tabu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Search.Local.Strategies",
          "name": "tabuFilter",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s (List s) -\u003e StreamT s (List s)",
          "source": "src/Control-Search-Local-Strategies.html#tabuFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Search Local Strategies",
          "module": "Control.Search.Local.Strategies",
          "name": "tabuFilter",
          "normalized": "StreamT a(List a)-\u003eStreamT a(List a)-\u003eStreamT a(List a)",
          "package": "local-search",
          "partial": "Filter",
          "signature": "StreamT s(List s)-\u003eStreamT s(List s)-\u003eStreamT s(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local-Strategies.html#v:tabuFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe capture the pattern of meta-heuristics and local search as a process or stream of \n    evolving solutions. These combinators provide a way to describe and manipulate these \n    processes quickly. The basic pattern of their use is this;\n\u003c/p\u003e\u003cpre\u003e loopP (strategy) seed \n\u003c/pre\u003e\u003cp\u003eThe strategy itself is a stream transformer. The transformer becomes a search strategy \n    when it's output is fed back into it's input, which is the action of the loopP function.\n    For example, the following is not a search strategy but you could write;\n\u003c/p\u003e\u003cpre\u003e loopP (map (+1)) 0\n\u003c/pre\u003e\u003cp\u003eWhich would generate the stream [0,1,2...\n    A real search strategy then looks like;\n\u003c/p\u003e\u003cpre\u003e loopP iterativeImprover tspSeed\n\u003c/pre\u003e\u003cp\u003eMany search strategies do not always produce improving sequences as the iterative improver does. For these\n    we provide a simple modification of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e which can be applied to any stream, called \u003ccode\u003e\u003ca\u003ebestSoFar\u003c/a\u003e\u003c/code\u003e.\n    Finally, these streams are usually descriptions of unlimited processes. To make them \n    practical we limit them using standard Haskell combinators such as \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e and list index.\n\u003c/p\u003e\u003cpre\u003e take 20 . bestSoFar $ loopP searchStrategy seed\n\u003c/pre\u003e\u003cp\u003eSearch strategies are constructed via the composition of other functions. This often resembles the   \n    composition of an arrow pipeline, and this library can be rewritten in terms of arrows, however we have \n    found no significant advantage in doing this. \n\u003c/p\u003e\u003cp\u003eA simple TABU like search strategy, that has a memory of the recent past (10 elements) of the search process, and \n    filters neighbourhoods accordingly can be created like this;\n\u003c/p\u003e\u003cpre\u003e searchStrategy xs = map head $ zipWith (\\ws-\u003efilter (flip notElem ws)) (window 10 xs) (neighbourhood xs)  \n\u003c/pre\u003e\u003cp\u003eA common way to improve meta-heuristics is to introduce stochastic elements, such as random decisions from a constrained\n    set of choices, or neighbourhoods which will not generate exactly the same set of options each time a particular solution \n    is visited. Stream transformations allow this because they can thread additional state internally, while not exposing \n    the user of the transformation to a great deal of the process. For example in the above example, to create a random \n    choice from the constrained set at each point you would do this;\n\u003c/p\u003e\u003cpre\u003e searchStrategy rs xs = select uniformCDF $ zipWith (\\ws-\u003efilter (flip notElem ws)) (window 10 xs) (neighbourhood xs)\n\u003c/pre\u003e\u003cp\u003eThe neighbourhood can be similarly modified. We must still provide the starting points for the extra data used by \n    such transformers, in this case a stream of random values, or in other cases a random number generator, but one provided\n    it is hidden, and the transformer can be composed with any other transformation.\n\u003c/p\u003e\u003cp\u003eUsing the same transformation, which threads an internal state, in several places is harder. It involves \n    merging and dividing streams in sequenced patterns. For example;\n\u003c/p\u003e\u003cpre\u003e applyToBoth tr as bs = (\\xs-\u003e(map head xs,map last xs)) . chunk 2 $ tr (concat $ transpose [as,bs])\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Search.Local",
          "name": "Local",
          "package": "local-search",
          "source": "src/Control-Search-Local.html",
          "type": "module"
        },
        "index": {
          "description": "We capture the pattern of meta-heuristics and local search as process or stream of evolving solutions These combinators provide way to describe and manipulate these processes quickly The basic pattern of their use is this loopP strategy seed The strategy itself is stream transformer The transformer becomes search strategy when it output is fed back into it input which is the action of the loopP function For example the following is not search strategy but you could write loopP map Which would generate the stream real search strategy then looks like loopP iterativeImprover tspSeed Many search strategies do not always produce improving sequences as the iterative improver does For these we provide simple modification of scanl which can be applied to any stream called bestSoFar Finally these streams are usually descriptions of unlimited processes To make them practical we limit them using standard Haskell combinators such as take and list index take bestSoFar loopP searchStrategy seed Search strategies are constructed via the composition of other functions This often resembles the composition of an arrow pipeline and this library can be rewritten in terms of arrows however we have found no significant advantage in doing this simple TABU like search strategy that has memory of the recent past elements of the search process and filters neighbourhoods accordingly can be created like this searchStrategy xs map head zipWith ws filter flip notElem ws window xs neighbourhood xs common way to improve meta-heuristics is to introduce stochastic elements such as random decisions from constrained set of choices or neighbourhoods which will not generate exactly the same set of options each time particular solution is visited Stream transformations allow this because they can thread additional state internally while not exposing the user of the transformation to great deal of the process For example in the above example to create random choice from the constrained set at each point you would do this searchStrategy rs xs select uniformCDF zipWith ws filter flip notElem ws window xs neighbourhood xs The neighbourhood can be similarly modified We must still provide the starting points for the extra data used by such transformers in this case stream of random values or in other cases random number generator but one provided it is hidden and the transformer can be composed with any other transformation Using the same transformation which threads an internal state in several places is harder It involves merging and dividing streams in sequenced patterns For example applyToBoth tr as bs xs map head xs map last xs chunk tr concat transpose as bs",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "Local",
          "package": "local-search",
          "partial": "Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists are also used to represent finite collections or groups of solutions. This synonym is for where\n    the list is being used as a finite list. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "List",
          "package": "local-search",
          "source": "src/Control-Search-Local.html#List",
          "type": "type"
        },
        "index": {
          "description": "Lists are also used to represent finite collections or groups of solutions This synonym is for where the list is being used as finite list",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "List",
          "package": "local-search",
          "partial": "List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn previous versions I have used the standard \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e classes. However I have then \n    had to assume that every problem is a minimisation. To get around this, and provide functions that \n    match more closely to optimisation problems, where the concept we seek is \u003cem\u003ebetter than\u003c/em\u003e, rather than \n    \u003cem\u003egreater\u003c/em\u003e or \u003cem\u003eless\u003c/em\u003e than, I provide this new class. It is however very very like \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is proposed that this class is used for value of solution comparisons only, and the standard \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class\n    is retained for situations where the solutions are identical, and do not just share the same value.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "Optimisable",
          "package": "local-search",
          "source": "src/Control-Search-Local.html#Optimisable",
          "type": "class"
        },
        "index": {
          "description": "In previous versions have used the standard Eq and Ord classes However have then had to assume that every problem is minimisation To get around this and provide functions that match more closely to optimisation problems where the concept we seek is better than rather than greater or less than provide this new class It is however very very like Ord It is proposed that this class is used for value of solution comparisons only and the standard Eq class is retained for situations where the solutions are identical and do not just share the same value",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "Optimisable",
          "package": "local-search",
          "partial": "Optimisable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#t:Optimisable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternally streams are represented as standard Haskell lists. This type synonym is provided for readability. It is assumed that streams will be infinite.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "Stream",
          "package": "local-search",
          "source": "src/Control-Search-Local.html#Stream",
          "type": "type"
        },
        "index": {
          "description": "Internally streams are represented as standard Haskell lists This type synonym is provided for readability It is assumed that streams will be infinite",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "Stream",
          "package": "local-search",
          "partial": "Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic stream transformation type. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "StreamT",
          "package": "local-search",
          "source": "src/Control-Search-Local.html#StreamT",
          "type": "type"
        },
        "index": {
          "description": "The basic stream transformation type",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "StreamT",
          "package": "local-search",
          "partial": "Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#t:StreamT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorse than, assumed to be by solution quality. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "(\u003c:)",
          "package": "local-search",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Control-Search-Local.html#%3C%3A",
          "type": "method"
        },
        "index": {
          "description": "Worse than assumed to be by solution quality",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "(\u003c:) \u003c:",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "local-search",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqual to, by solution quality.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "(=:=)",
          "package": "local-search",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Control-Search-Local.html#%3D%3A%3D",
          "type": "method"
        },
        "index": {
          "description": "Equal to by solution quality",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "(=:=) =:=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "local-search",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetter than, assumed to be by solution quality. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "(\u003e:)",
          "package": "local-search",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Control-Search-Local.html#%3E%3A",
          "type": "method"
        },
        "index": {
          "description": "Better than assumed to be by solution quality",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "(\u003e:) \u003e:",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "local-search",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:-62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the best solution in an input list. It can be thought of as similar to \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "best",
          "package": "local-search",
          "signature": "[s] -\u003e s",
          "source": "src/Control-Search-Local.html#best",
          "type": "function"
        },
        "index": {
          "description": "This returns the best solution in an input list It can be thought of as similar to maximum",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "best",
          "normalized": "[a]-\u003ea",
          "package": "local-search",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:best"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the best of two input solutions. It can be thought of as similar to \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "bestOf",
          "package": "local-search",
          "signature": "s -\u003e s -\u003e s",
          "source": "src/Control-Search-Local.html#bestOf",
          "type": "function"
        },
        "index": {
          "description": "This returns the best of two input solutions It can be thought of as similar to max",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "bestOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "local-search",
          "partial": "Of",
          "signature": "s-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:bestOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transformer that is usually used as a final step in a process, to allow the user \n    to only see the best possible solution at each point, and ignore the intermediate values\n    that a strategy may produce. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "bestSoFar",
          "package": "local-search",
          "signature": "StreamT s s",
          "source": "src/Control-Search-Local.html#bestSoFar",
          "type": "function"
        },
        "index": {
          "description": "transformer that is usually used as final step in process to allow the user to only see the best possible solution at each point and ignore the intermediate values that strategy may produce",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "bestSoFar",
          "package": "local-search",
          "partial": "So Far",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:bestSoFar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks down a stream into a series of chunks, frequently finds use in preparing sets of random numbers \n    for various functions, but also in the \u003ccode\u003emakePop\u003c/code\u003e function that is important for genetic algorithms. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "chunk",
          "package": "local-search",
          "signature": "Int -\u003e StreamT s (List s)",
          "source": "src/Control-Search-Local.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Breaks down stream into series of chunks frequently finds use in preparing sets of random numbers for various functions but also in the makePop function that is important for genetic algorithms",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "chunk",
          "normalized": "Int-\u003eStreamT a(List a)",
          "package": "local-search",
          "signature": "Int-\u003eStreamT s(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide splits a stream of values into a list of substreams. The division is controlled by \n    a list of \u003cem\u003eindices\u003c/em\u003e and then a stream of these indices. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "divide",
          "package": "local-search",
          "signature": "List n -\u003e Stream n -\u003e Stream v -\u003e List (Stream v)",
          "source": "src/Control-Search-Local.html#divide",
          "type": "function"
        },
        "index": {
          "description": "Divide splits stream of values into list of substreams The division is controlled by list of indices and then stream of these indices",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "divide",
          "normalized": "List a-\u003eStream a-\u003eStream b-\u003eList(Stream b)",
          "package": "local-search",
          "signature": "List n-\u003eStream n-\u003eStream v-\u003eList(Stream v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis was original created to assist with making multiple selections from a population within a genetic \n    algorithm. More generally this is a higher order function which will take a stream transformation and apply\n    it multiple times to each element of the input stream gathering up the results. \n\u003c/p\u003e\u003cp\u003eIt can be used to make multiple selections from a population in a GA, or to create a neighbourhood \n    function from a perturbation operation. For example;\n\u003c/p\u003e\u003cpre\u003e nF = doMany 5 perturbFunction\n\u003c/pre\u003e\u003cp\u003eWhere \u003cem\u003e5\u003c/em\u003e is just an arbitrary example constant and \u003cem\u003eperturbFunction\u003c/em\u003e is a placeholder.\n\u003c/p\u003e\u003cp\u003eIf the perturb function is defined with a parameter controlling the perturbation, for example a random number,  \n    such as which pair of cities in a TSP to exchange then you can do this for a deterministic operation;\n\u003c/p\u003e\u003cpre\u003e nF = doMany 5 (zipWith perturbationFunction (cycle [0..4]))\n\u003c/pre\u003e\u003cp\u003eFor a more stochastic effect;\n\u003c/p\u003e\u003cpre\u003e nF = doMany 5 (zipWith perturbationFunction (randoms g)) \n\u003c/pre\u003e\u003cp\u003eWhere \u003cem\u003eg\u003c/em\u003e is assumed to be of the \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "doMany",
          "package": "local-search",
          "signature": "Int -\u003e StreamT s s' -\u003e StreamT s (List s')",
          "source": "src/Control-Search-Local.html#doMany",
          "type": "function"
        },
        "index": {
          "description": "This was original created to assist with making multiple selections from population within genetic algorithm More generally this is higher order function which will take stream transformation and apply it multiple times to each element of the input stream gathering up the results It can be used to make multiple selections from population in GA or to create neighbourhood function from perturbation operation For example nF doMany perturbFunction Where is just an arbitrary example constant and perturbFunction is placeholder If the perturb function is defined with parameter controlling the perturbation for example random number such as which pair of cities in TSP to exchange then you can do this for deterministic operation nF doMany zipWith perturbationFunction cycle For more stochastic effect nF doMany zipWith perturbationFunction randoms Where is assumed to be of the RandomGen class",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "doMany",
          "normalized": "Int-\u003eStreamT a b-\u003eStreamT a(List b)",
          "package": "local-search",
          "partial": "Many",
          "signature": "Int-\u003eStreamT s s'-\u003eStreamT s(List s')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:doMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function transforms a neighbourhood function to give a transformation that yields \u003cem\u003eimproving\u003c/em\u003e \n    neighbourhoods, that is, neighbourhoods that only contain solutions that improve upon the seed solution.\n    In the case that there are no improving solutions (local minima), the output is a singleton list \n    containing the seed solution. This functionality is provided byt the \u003ccode\u003e\u003ca\u003esafe\u003c/a\u003e\u003c/code\u003e helper function.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "improvement",
          "package": "local-search",
          "signature": "StreamT s (List s) -\u003e StreamT s (List s)",
          "source": "src/Control-Search-Local.html#improvement",
          "type": "function"
        },
        "index": {
          "description": "This function transforms neighbourhood function to give transformation that yields improving neighbourhoods that is neighbourhoods that only contain solutions that improve upon the seed solution In the case that there are no improving solutions local minima the output is singleton list containing the seed solution This functionality is provided byt the safe helper function",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "improvement",
          "normalized": "StreamT a(List a)-\u003eStreamT a(List a)",
          "package": "local-search",
          "signature": "StreamT s(List s)-\u003eStreamT s(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:improvement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin is the inverse of \u003ccode\u003e\u003ca\u003edivide\u003c/a\u003e\u003c/code\u003e, it combined substreams into a stream fo values. \n    It takes a list of substreams, and the indices that indicate them, and then a stream of the indices.\n    For each value in the stream of indices, the \u003cem\u003enext\u003c/em\u003e value in the appropriate substream is chosen and  \n    produced. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "join",
          "package": "local-search",
          "signature": "List (n, Stream v) -\u003e Stream n -\u003e Stream v",
          "source": "src/Control-Search-Local.html#join",
          "type": "function"
        },
        "index": {
          "description": "Join is the inverse of divide it combined substreams into stream fo values It takes list of substreams and the indices that indicate them and then stream of the indices For each value in the stream of indices the next value in the appropriate substream is chosen and produced",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "join",
          "normalized": "List(a,Stream b)-\u003eStream a-\u003eStream b",
          "package": "local-search",
          "signature": "List(n,Stream v)-\u003eStream n-\u003eStream v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more specific version of \u003ccode\u003e\u003ca\u003eloopS\u003c/a\u003e\u003c/code\u003e and implemented in terms of it. Rather than allowing a \n    number of initial values, this allows only 1.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "loopP",
          "package": "local-search",
          "signature": "StreamT s s -\u003e s -\u003e Stream s",
          "source": "src/Control-Search-Local.html#loopP",
          "type": "function"
        },
        "index": {
          "description": "more specific version of loopS and implemented in terms of it Rather than allowing number of initial values this allows only",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "loopP",
          "normalized": "StreamT a a-\u003ea-\u003eStream a",
          "package": "local-search",
          "signature": "StreamT s s-\u003es-\u003eStream s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:loopP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard function for \u003cem\u003etying the knot\u003c/em\u003e on a stream described process. \n    This links the outputs of the stream process to the inputs, with an initial set of values, and\n    provides a single stream of values to the user. \n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "loopS",
          "package": "local-search",
          "signature": "StreamT s s -\u003e StreamT s s",
          "source": "src/Control-Search-Local.html#loopS",
          "type": "function"
        },
        "index": {
          "description": "The standard function for tying the knot on stream described process This links the outputs of the stream process to the inputs with an initial set of values and provides single stream of values to the user",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "loopS",
          "normalized": "StreamT a a-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT s s-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:loopS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the combination of \u003ccode\u003e\u003ca\u003edivide\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e. It takes a set of indices and stream transformations, \n    divides the input stream, using the indices and a stream of indices, transforms each substream \n    by the related stream transformation, and then puts them all back together again as a new stream.\n\u003c/p\u003e\u003cp\u003eFor example, to apply a transformation (f) to only every third value in a stream, you could do this;\n\u003c/p\u003e\u003cpre\u003e nest [(True,id),(False,f)] (cycle [True,True,False])\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "nest",
          "package": "local-search",
          "signature": "List (n, Stream a -\u003e Stream b) -\u003e Stream n -\u003e Stream a -\u003e Stream b",
          "source": "src/Control-Search-Local.html#nest",
          "type": "function"
        },
        "index": {
          "description": "Is the combination of divide and join It takes set of indices and stream transformations divides the input stream using the indices and stream of indices transforms each substream by the related stream transformation and then puts them all back together again as new stream For example to apply transformation to only every third value in stream you could do this nest True id False cycle True True False",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "nest",
          "normalized": "List(a,Stream b-\u003eStream c)-\u003eStream a-\u003eStream b-\u003eStream c",
          "package": "local-search",
          "signature": "List(n,Stream a-\u003eStream b)-\u003eStream n-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function acts like \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e, but the name stream makes choices (or can do) based upon the initial value\n    of solutions on the input stream.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "preNest",
          "package": "local-search",
          "signature": "(Stream a -\u003e Stream n) -\u003e List (n, Stream a -\u003e Stream b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Control-Search-Local.html#preNest",
          "type": "function"
        },
        "index": {
          "description": "This function acts like nest but the name stream makes choices or can do based upon the initial value of solutions on the input stream",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "preNest",
          "normalized": "(Stream a-\u003eStream b)-\u003eList(b,Stream a-\u003eStream c)-\u003eStream a-\u003eStream c",
          "package": "local-search",
          "partial": "Nest",
          "signature": "(Stream a-\u003eStream n)-\u003eList(n,Stream a-\u003eStream b)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:preNest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestart is a little like loop. It will construct a stream of values by applying a stream transformation \n    to one value, and then the successor and so on. It differs in that it also takes a triggering mechanism\n    that can choose to stop the current sequence and continue from a different value (the next value on the \n    initial stream). For example, the following will start counting initially from 0, then -5, then -10, and \n    will count until it reaches 11 each time. \n\u003c/p\u003e\u003cpre\u003e restart (map (+1)) (map (\u003e10)) [0,-5,-10]\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "restart",
          "package": "local-search",
          "signature": "StreamT a a -\u003e StreamT a Bool -\u003e StreamT a a",
          "source": "src/Control-Search-Local.html#restart",
          "type": "function"
        },
        "index": {
          "description": "Restart is little like loop It will construct stream of values by applying stream transformation to one value and then the successor and so on It differs in that it also takes triggering mechanism that can choose to stop the current sequence and continue from different value the next value on the initial stream For example the following will start counting initially from then then and will count until it reaches each time restart map map",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "restart",
          "normalized": "StreamT a a-\u003eStreamT a Bool-\u003eStreamT a a",
          "package": "local-search",
          "signature": "StreamT a a-\u003eStreamT a Bool-\u003eStreamT a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:restart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly like \u003ccode\u003e\u003ca\u003erestart\u003c/a\u003e\u003c/code\u003e, except that it will only return the result of an iteration of transformation,\n    not the intermediate values. For example;\n\u003c/p\u003e\u003cpre\u003e restartExtract (map (+1)) (map ((==0) . flip mod 4)) [1,-5,-10,-13]\n\u003c/pre\u003e\u003cp\u003egives;\n\u003c/p\u003e\u003cpre\u003e [4,-4,-8..\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "restartExtract",
          "package": "local-search",
          "signature": "StreamT a a -\u003e StreamT a Bool -\u003e StreamT a a",
          "source": "src/Control-Search-Local.html#restartExtract",
          "type": "function"
        },
        "index": {
          "description": "Exactly like restart except that it will only return the result of an iteration of transformation not the intermediate values For example restartExtract map map flip mod gives",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "restartExtract",
          "normalized": "StreamT a a-\u003eStreamT a Bool-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Extract",
          "signature": "StreamT a a-\u003eStreamT a Bool-\u003eStreamT a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:restartExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function that chooses between elements of the two input streams at each point in the \n    stream, and returns one which is non-empty. The check looks at values in the second stream first, \n    if this list is not empty, it is returned.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "safe",
          "package": "local-search",
          "signature": "Stream (List v) -\u003e Stream (List v) -\u003e Stream (List v)",
          "source": "src/Control-Search-Local.html#safe",
          "type": "function"
        },
        "index": {
          "description": "helper function that chooses between elements of the two input streams at each point in the stream and returns one which is non-empty The check looks at values in the second stream first if this list is not empty it is returned",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "safe",
          "normalized": "Stream(List a)-\u003eStream(List a)-\u003eStream(List a)",
          "package": "local-search",
          "signature": "Stream(List v)-\u003eStream(List v)-\u003eStream(List v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalised selection routine. This takes a stream of lists and selects one element from each list, \n    to construct the new stream. The selection routine takes a \u003ccode\u003eDistributionMaker\u003c/code\u003e, and selects based upon this.\n    This only really makes sense when there is some internal structure in the stream of lists. For example;\n\u003c/p\u003e\u003cpre\u003e select (poissonCDF 1) . map sortO   \n\u003c/pre\u003e\u003cp\u003eEach list in the input stream is sorted, so that the best solutions appear first. This is then selected from\n    using a Poisson distribution, with the mean at 1. This means that the early (better) solutions are much more \n    likely to be selected.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "select",
          "package": "local-search",
          "signature": "(Int -\u003e List r) -\u003e StreamT (List a) a",
          "source": "src/Control-Search-Local.html#select",
          "type": "function"
        },
        "index": {
          "description": "The generalised selection routine This takes stream of lists and selects one element from each list to construct the new stream The selection routine takes DistributionMaker and selects based upon this This only really makes sense when there is some internal structure in the stream of lists For example select poissonCDF map sortO Each list in the input stream is sorted so that the best solutions appear first This is then selected from using Poisson distribution with the mean at This means that the early better solutions are much more likely to be selected",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "select",
          "normalized": "(Int-\u003eList a)-\u003eStreamT(List b)b",
          "package": "local-search",
          "signature": "(Int-\u003eList r)-\u003eStreamT(List a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function acts like \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e, however the distribution is fixed, not being constructed anew for each \n    list in the input stream. This is much more efficient, but does assume that the size of each list in the \n    input is the same (a fixed size neighbourhood is perfect for this).\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "select'",
          "package": "local-search",
          "signature": "List r -\u003e StreamT (List a) a",
          "source": "src/Control-Search-Local.html#select%27",
          "type": "function"
        },
        "index": {
          "description": "This function acts like select however the distribution is fixed not being constructed anew for each list in the input stream This is much more efficient but does assume that the size of each list in the input is the same fixed size neighbourhood is perfect for this",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "select'",
          "normalized": "List a-\u003eStreamT(List b)b",
          "package": "local-search",
          "signature": "List r-\u003eStreamT(List a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:select-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternative version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e (implemented in terms of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e), \n    but using \u003ccode\u003e\u003ca\u003eOptimisable\u003c/a\u003e\u003c/code\u003e, so that better solutions are earlier in the output list than worse ones.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "sortO",
          "package": "local-search",
          "signature": "[a] -\u003e [a]",
          "source": "src/Control-Search-Local.html#sortO",
          "type": "function"
        },
        "index": {
          "description": "An alternative version of sort implemented in terms of sortBy but using Optimisable so that better solutions are earlier in the output list than worse ones",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "sortO",
          "normalized": "[a]-\u003e[a]",
          "package": "local-search",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:sortO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operation which changes the structure of an underlying stream, but not the data type, by \n    replicating the elements of the stream in place. Can be thought of as changing the \u003cem\u003espeed\u003c/em\u003e of the stream. \n    This finds use in \u003ccode\u003e\u003ca\u003edoMany\u003c/a\u003e\u003c/code\u003e, genetic algorithms and ant colony optimisation.\n    For example;\n\u003c/p\u003e\u003cpre\u003e stretch 2 \"abcd\" = \"aabbccdd\"\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "stretch",
          "package": "local-search",
          "signature": "Int -\u003e StreamT s s",
          "source": "src/Control-Search-Local.html#stretch",
          "type": "function"
        },
        "index": {
          "description": "An operation which changes the structure of an underlying stream but not the data type by replicating the elements of the stream in place Can be thought of as changing the speed of the stream This finds use in doMany genetic algorithms and ant colony optimisation For example stretch abcd aabbccdd",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "stretch",
          "normalized": "Int-\u003eStreamT a a",
          "package": "local-search",
          "signature": "Int-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:stretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is very similar to the \u003cem\u003euntil\u003c/em\u003e function of FRP. It takes a stream and \n    returns the elements of that stream until \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e appears on the trigger stream. At this point \n    one of the potential futures is chosen and becomes the remainder of the stream. \n    The potential futures are zipped with the triggers, so the choice is fixed, the \u003cem\u003ecurrent\u003c/em\u003e potential \n    future is the choice. More generally this concept could be elaborated in the future.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The initial stream of values to place before the trigger\n    (2) The stream of triggers\n    (3) The stream of potential future streams\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eCould be used to provide a temperature strategy that restarts once in Simulated Annealing like so;\n\u003c/p\u003e\u003cpre\u003e let t = iterate (+1) 0 \n in until_ t triggerStream (repeat t) \n\u003c/pre\u003e\u003cp\u003eThis alternative will restart every time \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e appears on the trigger stream, not just the first time.\n\u003c/p\u003e\u003cpre\u003e let t = until_ (iterate (+1) 0) triggerStream (repeat t) in t\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "until_",
          "package": "local-search",
          "signature": "Stream a -\u003e Stream Bool -\u003e Stream (Stream a) -\u003e Stream a",
          "source": "src/Control-Search-Local.html#until_",
          "type": "function"
        },
        "index": {
          "description": "This function is very similar to the until function of FRP It takes stream and returns the elements of that stream until True appears on the trigger stream At this point one of the potential futures is chosen and becomes the remainder of the stream The potential futures are zipped with the triggers so the choice is fixed the current potential future is the choice More generally this concept could be elaborated in the future The initial stream of values to place before the trigger The stream of triggers The stream of potential future streams Could be used to provide temperature strategy that restarts once in Simulated Annealing like so let iterate in until triggerStream repeat This alternative will restart every time True appears on the trigger stream not just the first time let until iterate triggerStream repeat in",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "until_",
          "normalized": "Stream a-\u003eStream Bool-\u003eStream(Stream a)-\u003eStream a",
          "package": "local-search",
          "signature": "Stream a-\u003eStream Bool-\u003eStream(Stream a)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:until_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more flexible version of chunk which can vary the size of each chunk, in accordance with a list providing the \n    sizes required of each grouping. For example;\n\u003c/p\u003e\u003cpre\u003e chunk i = variableChunk (repeat i)\n variableChunk (cycle [1,2]) [0..] = [[0],[1,2],[3],[4,5]... \n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "variableChunk",
          "package": "local-search",
          "signature": "Stream Int -\u003e StreamT s (List s)",
          "source": "src/Control-Search-Local.html#variableChunk",
          "type": "function"
        },
        "index": {
          "description": "more flexible version of chunk which can vary the size of each chunk in accordance with list providing the sizes required of each grouping For example chunk variableChunk repeat variableChunk cycle",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "variableChunk",
          "normalized": "Stream Int-\u003eStreamT a(List a)",
          "package": "local-search",
          "partial": "Chunk",
          "signature": "Stream Int-\u003eStreamT s(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:variableChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003evariableDoMany\u003c/em\u003e perfoms the same action as \u003ccode\u003e\u003ca\u003edoMany\u003c/a\u003e\u003c/code\u003e, but allows the programmer to vary how many times \n    the transformation is applied to each underlying solution, through the use of a stream of sizes.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "variableDoMany",
          "package": "local-search",
          "signature": "Stream Int -\u003e StreamT s s' -\u003e StreamT s (List s')",
          "source": "src/Control-Search-Local.html#variableDoMany",
          "type": "function"
        },
        "index": {
          "description": "variableDoMany perfoms the same action as doMany but allows the programmer to vary how many times the transformation is applied to each underlying solution through the use of stream of sizes",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "variableDoMany",
          "normalized": "Stream Int-\u003eStreamT a b-\u003eStreamT a(List b)",
          "package": "local-search",
          "partial": "Do Many",
          "signature": "Stream Int-\u003eStreamT s s'-\u003eStreamT s(List s')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:variableDoMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more flexible version of stretch which can vary how far each value in the underlying stream is stretched, \n    in accordance with a list providing the sizes required of each grouping. For example;\n\u003c/p\u003e\u003cpre\u003e stretch i = variableStretch (repeat i)\n variableStretch [3,3,7,2] \"abcd\" = \"aaabbbcccccccdd\" \n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "variableStretch",
          "package": "local-search",
          "signature": "Stream Int -\u003e StreamT s s",
          "source": "src/Control-Search-Local.html#variableStretch",
          "type": "function"
        },
        "index": {
          "description": "more flexible version of stretch which can vary how far each value in the underlying stream is stretched in accordance with list providing the sizes required of each grouping For example stretch variableStretch repeat variableStretch abcd aaabbbcccccccdd",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "variableStretch",
          "normalized": "Stream Int-\u003eStreamT a a",
          "package": "local-search",
          "partial": "Stretch",
          "signature": "Stream Int-\u003eStreamT s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:variableStretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for transforming a stream of \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003es, taking random numbers of elements from the front \n    of each window. This can be used in the implementation of variations of the TABU search algorithm. \n    Usage as follows (with example values) ;\n\u003c/p\u003e\u003cpre\u003e varyWindow (3,6) . window 10\n\u003c/pre\u003e",
          "module": "Control.Search.Local",
          "name": "varyWindow",
          "package": "local-search",
          "signature": "(Int, Int) -\u003e Stream (List s) -\u003e Stream (List s)",
          "source": "src/Control-Search-Local.html#varyWindow",
          "type": "function"
        },
        "index": {
          "description": "function for transforming stream of window taking random numbers of elements from the front of each window This can be used in the implementation of variations of the TABU search algorithm Usage as follows with example values varyWindow window",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "varyWindow",
          "normalized": "(Int,Int)-\u003eStream(List a)-\u003eStream(List a)",
          "package": "local-search",
          "partial": "Window",
          "signature": "(Int,Int)-\u003eStream(List s)-\u003eStream(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:varyWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a rolling window over a stream of values up to the size parameter. The windows are then \n    produced as a stream of lists. This can also be done using a queue data structure, however this \n    was found to be slightly faster.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "window",
          "package": "local-search",
          "signature": "Int -\u003e StreamT s (List s)",
          "source": "src/Control-Search-Local.html#window",
          "type": "function"
        },
        "index": {
          "description": "Creates rolling window over stream of values up to the size parameter The windows are then produced as stream of lists This can also be done using queue data structure however this was found to be slightly faster",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "window",
          "normalized": "Int-\u003eStreamT a(List a)",
          "package": "local-search",
          "signature": "Int-\u003eStreamT s(List s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the worse solution in an input list. It can be thought of as similar to \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Search.Local",
          "name": "worst",
          "package": "local-search",
          "signature": "[s] -\u003e s",
          "source": "src/Control-Search-Local.html#worst",
          "type": "function"
        },
        "index": {
          "description": "This returns the worse solution in an input list It can be thought of as similar to minimum",
          "hierarchy": "Control Search Local",
          "module": "Control.Search.Local",
          "name": "worst",
          "normalized": "[a]-\u003ea",
          "package": "local-search",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/local-search/docs/Control-Search-Local.html#v:worst"
      }
    }
  ]
]