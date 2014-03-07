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
        "word": "hstatistics"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecreate histograms from density functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Histogram",
          "name": "Histogram",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-Histogram.html",
          "type": "module"
        },
        "index": {
          "description": "create histograms from density functions",
          "hierarchy": "Numeric Statistics Histogram",
          "module": "Numeric.Statistics.Histogram",
          "name": "Histogram",
          "package": "hstatistics",
          "partial": "Histogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Histogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Histogram",
          "name": "cumulativeToHistogram",
          "package": "hstatistics",
          "signature": "(Double -\u003e Double)-\u003e Vector Double-\u003e Histogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Histogram",
          "module": "Numeric.Statistics.Histogram",
          "name": "cumulativeToHistogram",
          "normalized": "(Double-\u003eDouble)-\u003eVector Double-\u003eHistogram",
          "package": "hstatistics",
          "partial": "To Histogram",
          "signature": "(Double-\u003eDouble)-\u003eVector Double-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Histogram.html#v:cumulativeToHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Histogram",
          "name": "gaussianHistogram",
          "package": "hstatistics",
          "signature": "Double-\u003e Double-\u003e Vector Double-\u003e Histogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Histogram",
          "module": "Numeric.Statistics.Histogram",
          "name": "gaussianHistogram",
          "normalized": "Double-\u003eDouble-\u003eVector Double-\u003eHistogram",
          "package": "hstatistics",
          "partial": "Histogram",
          "signature": "Double-\u003eDouble-\u003eVector Double-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Histogram.html#v:gaussianHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIndependent Components Analysis\n\u003c/p\u003e\u003cp\u003eimplements the FastICA algorithm found in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Aapo Hyv&#228;rinen and Erkki Oja,\n   Independent Component Analysis: Algorithms and Applications,\n   \u003cem\u003eNeural Networks\u003c/em\u003e, 13(4-5):411-430, 2000\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ca\u003ehttp://www.google.com/url?sa=t&source=web&cd=2&ved=0CBgQFjAB&url=http%3A%2F%2Fciteseerx.ist.psu.edu%2Fviewdoc%2Fdownload%3Fdoi%3D10.1.1.79.7003%26rep%3Drep1%26type%3Dpdf&ei=RQozTJb6L4_fcbCV6cMD&usg=AFQjCNGClLIB9MAvbrEj45SyUx9cYubLyA&sig2=hg5Wnfy3dLPkoIc1hqSfjg\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "ICA",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-ICA.html",
          "type": "module"
        },
        "index": {
          "description": "Independent Components Analysis implements the FastICA algorithm found in Aapo Hyv rinen and Erkki Oja Independent Component Analysis Algorithms and Applications Neural Networks http www.google.com url sa source web cd ved CBgQFjAB url http Fciteseerx.ist.psu.edu Fviewdoc Fdownload Fdoi D10.1.1.79.7003 rep Drep1 type Dpdf ei RQozTJb6L4 fcbCV6cMD usg AFQjCNGClLIB9MAvbrEj45SyUx9cYubLyA sig2 hg5Wnfy3dLPkoIc1hqSfjg",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "ICA",
          "package": "hstatistics",
          "partial": "ICA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove the mean from data\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "demean",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double)-\u003e (Array Int (Vector Double), Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "remove the mean from data",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "demean",
          "normalized": "Array Int(Vector Double)-\u003e(Array Int(Vector Double),Vector Double)",
          "package": "hstatistics",
          "signature": "Array Int(Vector Double)-\u003e(Array Int(Vector Double),Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:demean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform an ICA transform\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "ica",
          "package": "hstatistics",
          "signature": "Int-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e NormType-\u003e Double-\u003e Int-\u003e Array Int (Vector Double)-\u003e (Array Int (Vector Double), Matrix Double)",
          "type": "function"
        },
        "index": {
          "description": "perform an ICA transform",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "ica",
          "normalized": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eNormType-\u003eDouble-\u003eInt-\u003eArray Int(Vector Double)-\u003e(Array Int(Vector Double),Matrix Double)",
          "package": "hstatistics",
          "signature": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eNormType-\u003eDouble-\u003eInt-\u003eArray Int(Vector Double)-\u003e(Array Int(Vector Double),Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:ica"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICA with default values: no dimension reduction, euclidean norms, 16 sample groups, sigmoid\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "icaDefaults",
          "package": "hstatistics",
          "signature": "Int-\u003e Array Int (Vector Double)-\u003e (Array Int (Vector Double), Matrix Double)",
          "type": "function"
        },
        "index": {
          "description": "ICA with default values no dimension reduction euclidean norms sample groups sigmoid",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "icaDefaults",
          "normalized": "Int-\u003eArray Int(Vector Double)-\u003e(Array Int(Vector Double),Matrix Double)",
          "package": "hstatistics",
          "partial": "Defaults",
          "signature": "Int-\u003eArray Int(Vector Double)-\u003e(Array Int(Vector Double),Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:icaDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigmoid transfer function\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "sigmoid",
          "package": "hstatistics",
          "signature": "Double -\u003e Double",
          "source": "src/Numeric-Statistics-ICA.html#sigmoid",
          "type": "function"
        },
        "index": {
          "description": "sigmoid transfer function",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "sigmoid",
          "normalized": "Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:sigmoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ederivative of sigmoid transfer function\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "sigmoid'",
          "package": "hstatistics",
          "signature": "Double -\u003e Double",
          "source": "src/Numeric-Statistics-ICA.html#sigmoid%27",
          "type": "function"
        },
        "index": {
          "description": "derivative of sigmoid transfer function",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "sigmoid'",
          "normalized": "Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:sigmoid-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhiten data\n\u003c/p\u003e",
          "module": "Numeric.Statistics.ICA",
          "name": "whiten",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double)-\u003e Double-\u003e (Array Int (Vector Double), Matrix Double)",
          "type": "function"
        },
        "index": {
          "description": "whiten data",
          "hierarchy": "Numeric Statistics ICA",
          "module": "Numeric.Statistics.ICA",
          "name": "whiten",
          "normalized": "Array Int(Vector Double)-\u003eDouble-\u003e(Array Int(Vector Double),Matrix Double)",
          "package": "hstatistics",
          "signature": "Array Int(Vector Double)-\u003eDouble-\u003e(Array Int(Vector Double),Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-ICA.html#v:whiten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShannon entropy\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Information",
          "name": "Information",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-Information.html",
          "type": "module"
        },
        "index": {
          "description": "Shannon entropy",
          "hierarchy": "Numeric Statistics Information",
          "module": "Numeric.Statistics.Information",
          "name": "Information",
          "package": "hstatistics",
          "partial": "Information",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Information.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe entropy sum p_i lln{p_i} of a sequence\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Information",
          "name": "entropy",
          "package": "hstatistics",
          "signature": "a-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "the entropy sum lln of sequence",
          "hierarchy": "Numeric Statistics Information",
          "module": "Numeric.Statistics.Information",
          "name": "entropy",
          "normalized": "a-\u003eVector Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "a-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Information.html#v:entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe mutual information sum_x sum_y p(x,y) ln{frac{p(x,y)}{p(x)p(y)}}\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Information",
          "name": "mutual_information",
          "package": "hstatistics",
          "signature": "b-\u003e a-\u003e a-\u003e (Vector Double, Vector Double)-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "the mutual information sum sum ln frac",
          "hierarchy": "Numeric Statistics Information",
          "module": "Numeric.Statistics.Information",
          "name": "mutual_information",
          "normalized": "a-\u003eb-\u003eb-\u003e(Vector Double,Vector Double)-\u003eDouble",
          "package": "hstatistics",
          "signature": "b-\u003ea-\u003ea-\u003e(Vector Double,Vector Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Information.html#v:mutual_information"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrincipal Components Analysis\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.PCA",
          "name": "PCA",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-PCA.html",
          "type": "module"
        },
        "index": {
          "description": "Principal Components Analysis",
          "hierarchy": "Numeric Statistics PCA",
          "module": "Numeric.Statistics.PCA",
          "name": "PCA",
          "package": "hstatistics",
          "partial": "PCA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PCA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind the principal components of multidimensional data greater than\n    the threshhold\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PCA",
          "name": "pca",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double) -\u003e Double -\u003e Matrix Double",
          "source": "src/Numeric-Statistics-PCA.html#pca",
          "type": "function"
        },
        "index": {
          "description": "find the principal components of multidimensional data greater than the threshhold",
          "hierarchy": "Numeric Statistics PCA",
          "module": "Numeric.Statistics.PCA",
          "name": "pca",
          "normalized": "Array Int(Vector Double)-\u003eDouble-\u003eMatrix Double",
          "package": "hstatistics",
          "signature": "Array Int(Vector Double)-\u003eDouble-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PCA.html#v:pca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind N greatest principal components of multidimensional data\n    according to size of the eigenvalue\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaN",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double) -\u003e Int -\u003e Matrix Double",
          "source": "src/Numeric-Statistics-PCA.html#pcaN",
          "type": "function"
        },
        "index": {
          "description": "find greatest principal components of multidimensional data according to size of the eigenvalue",
          "hierarchy": "Numeric Statistics PCA",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaN",
          "normalized": "Array Int(Vector Double)-\u003eInt-\u003eMatrix Double",
          "package": "hstatistics",
          "signature": "Array Int(Vector Double)-\u003eInt-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PCA.html#v:pcaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform a dimension-reducing PCA modification, \n     using an eigenvalue threshhold\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaReduce",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double)-\u003e Double-\u003e Array Int (Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "perform dimension-reducing PCA modification using an eigenvalue threshhold",
          "hierarchy": "Numeric Statistics PCA",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaReduce",
          "normalized": "Array Int(Vector Double)-\u003eDouble-\u003eArray Int(Vector Double)",
          "package": "hstatistics",
          "partial": "Reduce",
          "signature": "Array Int(Vector Double)-\u003eDouble-\u003eArray Int(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PCA.html#v:pcaReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform a PCA transform of the original data (remove mean)\n |     Final = M^T Data^T\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaTransform",
          "package": "hstatistics",
          "signature": "Array Int (Vector Double)-\u003e Matrix Double-\u003e Array Int (Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "perform PCA transform of the original data remove mean Final Data",
          "hierarchy": "Numeric Statistics PCA",
          "module": "Numeric.Statistics.PCA",
          "name": "pcaTransform",
          "normalized": "Array Int(Vector Double)-\u003eMatrix Double-\u003eArray Int(Vector Double)",
          "package": "hstatistics",
          "partial": "Transform",
          "signature": "Array Int(Vector Double)-\u003eMatrix Double-\u003eArray Int(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PCA.html#v:pcaTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProbability Distribution Function interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.PDF",
          "name": "PDF",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-PDF.html",
          "type": "module"
        },
        "index": {
          "description": "Probability Distribution Function interface",
          "hierarchy": "Numeric Statistics PDF",
          "module": "Numeric.Statistics.PDF",
          "name": "PDF",
          "package": "hstatistics",
          "partial": "PDF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PDF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.PDF",
          "name": "PDF",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-PDF.html#PDF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Statistics PDF",
          "module": "Numeric.Statistics.PDF",
          "name": "PDF",
          "package": "hstatistics",
          "partial": "PDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PDF.html#t:PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea probability distribution function\n\u003c/p\u003e\u003cp\u003ea PDF interface\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PDF",
          "name": "PDFFunction",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-PDF.html#PDFFunction",
          "type": "data"
        },
        "index": {
          "description": "probability distribution function PDF interface",
          "hierarchy": "Numeric Statistics PDF",
          "module": "Numeric.Statistics.PDF",
          "name": "PDFFunction",
          "package": "hstatistics",
          "partial": "PDFFunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PDF.html#t:PDFFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a PDF from an arbtrary function f :-\u003e [0,1]\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PDF",
          "name": "pdfFromFunction",
          "package": "hstatistics",
          "signature": "(a -\u003e Double) -\u003e PDFFunction a",
          "source": "src/Numeric-Statistics-PDF.html#pdfFromFunction",
          "type": "function"
        },
        "index": {
          "description": "create PDF from an arbtrary function",
          "hierarchy": "Numeric Statistics PDF",
          "module": "Numeric.Statistics.PDF",
          "name": "pdfFromFunction",
          "normalized": "(a-\u003eDouble)-\u003ePDFFunction a",
          "package": "hstatistics",
          "partial": "From Function",
          "signature": "(a-\u003eDouble)-\u003ePDFFunction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PDF.html#v:pdfFromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate a probability\n\u003c/p\u003e",
          "module": "Numeric.Statistics.PDF",
          "name": "probability",
          "package": "hstatistics",
          "signature": "b -\u003e Vector a -\u003e Vector Double",
          "source": "src/Numeric-Statistics-PDF.html#probability",
          "type": "method"
        },
        "index": {
          "description": "calculate probability",
          "hierarchy": "Numeric Statistics PDF",
          "module": "Numeric.Statistics.PDF",
          "name": "probability",
          "normalized": "a-\u003eVector b-\u003eVector Double",
          "package": "hstatistics",
          "signature": "b-\u003eVector a-\u003eVector Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-PDF.html#v:probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMethods for tests using surrogate data\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Surrogate",
          "name": "Surrogate",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics-Surrogate.html",
          "type": "module"
        },
        "index": {
          "description": "Methods for tests using surrogate data",
          "hierarchy": "Numeric Statistics Surrogate",
          "module": "Numeric.Statistics.Surrogate",
          "name": "Surrogate",
          "package": "hstatistics",
          "partial": "Surrogate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Surrogate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform an analysis using surrogate data\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Surrogate",
          "name": "surrogate",
          "package": "hstatistics",
          "signature": "Int-\u003e Int-\u003e (Array Int (Vector Double) -\u003e a)-\u003e Array Int (Vector Double)-\u003e Array Int a",
          "type": "function"
        },
        "index": {
          "description": "perform an analysis using surrogate data",
          "hierarchy": "Numeric Statistics Surrogate",
          "module": "Numeric.Statistics.Surrogate",
          "name": "surrogate",
          "normalized": "Int-\u003eInt-\u003e(Array Int(Vector Double)-\u003ea)-\u003eArray Int(Vector Double)-\u003eArray Int a",
          "package": "hstatistics",
          "signature": "Int-\u003eInt-\u003e(Array Int(Vector Double)-\u003ea)-\u003eArray Int(Vector Double)-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics-Surrogate.html#v:surrogate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful statistical functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics",
          "name": "Statistics",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics.html",
          "type": "module"
        },
        "index": {
          "description": "Useful statistical functions",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "Statistics",
          "package": "hstatistics",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics",
          "name": "Sample",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics.html#Sample",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "Sample",
          "package": "hstatistics",
          "partial": "Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics",
          "name": "Samples",
          "package": "hstatistics",
          "source": "src/Numeric-Statistics.html#Samples",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "Samples",
          "package": "hstatistics",
          "partial": "Samples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#t:Samples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecentre the data to 0: (x - (mean x))\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "centre",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector Double",
          "source": "src/Numeric-Statistics.html#centre",
          "type": "function"
        },
        "index": {
          "description": "centre the data to mean",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "centre",
          "normalized": "Vector Double-\u003eVector Double",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:centre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomplementary log-log function\ncloglog :: Vector Double -\u003e Vector Double\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "cloglog",
          "package": "hstatistics",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Statistics.html#cloglog",
          "type": "function"
        },
        "index": {
          "description": "complementary log-log function cloglog Vector Double Vector Double",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "cloglog",
          "normalized": "a-\u003ea",
          "package": "hstatistics",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:cloglog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecorcoeff = covariance x / (std dev x * std dev y)\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "corcoeff",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector Double -\u003e Double",
          "source": "src/Numeric-Statistics.html#corcoeff",
          "type": "function"
        },
        "index": {
          "description": "corcoeff covariance std dev std dev",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "corcoeff",
          "normalized": "Vector Double-\u003eVector Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:corcoeff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe correlation coefficient: (cov x y) / (std x) (std y)\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "correlationCoefficientMatrix",
          "package": "hstatistics",
          "signature": "Samples Double -\u003e Matrix Double",
          "source": "src/Numeric-Statistics.html#correlationCoefficientMatrix",
          "type": "function"
        },
        "index": {
          "description": "the correlation coefficient cov std std",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "correlationCoefficientMatrix",
          "normalized": "Samples Double-\u003eMatrix Double",
          "package": "hstatistics",
          "partial": "Coefficient Matrix",
          "signature": "Samples Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:correlationCoefficientMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe covariance matrix\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "covarianceMatrix",
          "package": "hstatistics",
          "signature": "Samples Double-\u003e Matrix Double",
          "type": "function"
        },
        "index": {
          "description": "the covariance matrix",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "covarianceMatrix",
          "normalized": "Samples Double-\u003eMatrix Double",
          "package": "hstatistics",
          "partial": "Matrix",
          "signature": "Samples Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:covarianceMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecut numerical data into intervals, data must fall inside the bounds\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "cut",
          "package": "hstatistics",
          "signature": "Vector Double-\u003e Vector Double-\u003e Vector Int",
          "type": "function"
        },
        "index": {
          "description": "cut numerical data into intervals data must fall inside the bounds",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "cut",
          "normalized": "Vector Double-\u003eVector Double-\u003eVector Int",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekendall's rank correlation &#964;\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "kendall",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector Double -\u003e Matrix Double",
          "source": "src/Numeric-Statistics.html#kendall",
          "type": "function"
        },
        "index": {
          "description": "kendall rank correlation",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "kendall",
          "normalized": "Vector Double-\u003eVector Double-\u003eMatrix Double",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:kendall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(logit p) = log(p/(1-p))\nlogit :: Vector Double -\u003e Vector Double\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "logit",
          "package": "hstatistics",
          "signature": "Vector b -\u003e Vector b",
          "source": "src/Numeric-Statistics.html#logit",
          "type": "function"
        },
        "index": {
          "description": "logit log logit Vector Double Vector Double",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "logit",
          "normalized": "Vector a-\u003eVector a",
          "package": "hstatistics",
          "signature": "Vector b-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:logit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Mahalanobis D-square distance between samples\n     columns are components and rows are observations (uses pseudoinverse)\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "mahalanobis",
          "package": "hstatistics",
          "signature": "Samples Double-\u003e Maybe (Sample Double)-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "the Mahalanobis D-square distance between samples columns are components and rows are observations uses pseudoinverse",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "mahalanobis",
          "normalized": "Samples Double-\u003eMaybe(Sample Double)-\u003eDouble",
          "package": "hstatistics",
          "signature": "Samples Double-\u003eMaybe(Sample Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:mahalanobis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe mean of an array of vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "meanArray",
          "package": "hstatistics",
          "signature": "Samples a -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#meanArray",
          "type": "function"
        },
        "index": {
          "description": "the mean of an array of vectors",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "meanArray",
          "normalized": "Samples a-\u003eSample a",
          "package": "hstatistics",
          "partial": "Array",
          "signature": "Samples a-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:meanArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe mean of a list of vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "meanList",
          "package": "hstatistics",
          "signature": "[Sample a] -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#meanList",
          "type": "function"
        },
        "index": {
          "description": "the mean of list of vectors",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "meanList",
          "normalized": "[Sample a]-\u003eSample a",
          "package": "hstatistics",
          "partial": "List",
          "signature": "[Sample a]-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:meanList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe mean of a matrix with data series in rows\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "meanMatrix",
          "package": "hstatistics",
          "signature": "Matrix a -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#meanMatrix",
          "type": "function"
        },
        "index": {
          "description": "the mean of matrix with data series in rows",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "meanMatrix",
          "normalized": "Matrix a-\u003eSample a",
          "package": "hstatistics",
          "partial": "Matrix",
          "signature": "Matrix a-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:meanMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of element frequencies\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "mode",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e [(Double, Integer)]",
          "source": "src/Numeric-Statistics.html#mode",
          "type": "function"
        },
        "index": {
          "description": "list of element frequencies",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "mode",
          "normalized": "Vector Double-\u003e[(Double,Integer)]",
          "package": "hstatistics",
          "signature": "Vector Double-\u003e[(Double,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe p'th moment of a vector\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "moment",
          "package": "hstatistics",
          "signature": "a-\u003e Bool-\u003e Bool-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "the th moment of vector",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "moment",
          "normalized": "a-\u003eBool-\u003eBool-\u003eVector Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "a-\u003eBool-\u003eBool-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:moment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eordinary least squares estimation for the multivariate model\n   Y = X B + e        rows are observations, columns are elements\n   mean e = 0, cov e = kronecker s I\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "ols",
          "package": "hstatistics",
          "signature": "Matrix t-\u003e Matrix t-\u003e (Matrix t, Matrix t, Matrix t)",
          "type": "function"
        },
        "index": {
          "description": "ordinary least squares estimation for the multivariate model rows are observations columns are elements mean cov kronecker",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "ols",
          "normalized": "Matrix a-\u003eMatrix a-\u003e(Matrix a,Matrix a,Matrix a)",
          "package": "hstatistics",
          "signature": "Matrix t-\u003eMatrix t-\u003e(Matrix t,Matrix t,Matrix t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:ols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute quantiles in percent\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "percentile",
          "package": "hstatistics",
          "signature": "Double-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "compute quantiles in percent",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "percentile",
          "normalized": "Double-\u003eVector Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "Double-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:percentile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe difference between the maximum and minimum of the input\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "range",
          "package": "hstatistics",
          "signature": "c e -\u003e e",
          "source": "src/Numeric-Statistics.html#range",
          "type": "function"
        },
        "index": {
          "description": "the difference between the maximum and minimum of the input",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "range",
          "normalized": "a b-\u003eb",
          "package": "hstatistics",
          "signature": "c e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the rank of each element of the vector\n     multiple identical entries result in the average rank of those entries\nranks :: Vector Double -\u003e Vector Double\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "ranks",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector b",
          "source": "src/Numeric-Statistics.html#ranks",
          "type": "function"
        },
        "index": {
          "description": "return the rank of each element of the vector multiple identical entries result in the average rank of those entries ranks Vector Double Vector Double",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "ranks",
          "normalized": "Vector Double-\u003eVector a",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:ranks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount the number of runs greater than or equal to \u003ccode\u003en\u003c/code\u003e in the data\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "run_count",
          "package": "hstatistics",
          "signature": "a-\u003e Vector b-\u003e [(a, t)]",
          "type": "function"
        },
        "index": {
          "description": "count the number of runs greater than or equal to in the data",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "run_count",
          "normalized": "a-\u003eVector b-\u003e[(a,c)]",
          "package": "hstatistics",
          "signature": "a-\u003eVector b-\u003e[(a,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:run_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpearman's rank correlation coefficient\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "spearman",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector Double -\u003e Double",
          "source": "src/Numeric-Statistics.html#spearman",
          "type": "function"
        },
        "index": {
          "description": "Spearman rank correlation coefficient",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "spearman",
          "normalized": "Vector Double-\u003eVector Double-\u003eDouble",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:spearman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecentre and normalise a vector\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "studentize",
          "package": "hstatistics",
          "signature": "Vector Double -\u003e Vector Double",
          "source": "src/Numeric-Statistics.html#studentize",
          "type": "function"
        },
        "index": {
          "description": "centre and normalise vector",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "studentize",
          "normalized": "Vector Double-\u003eVector Double",
          "package": "hstatistics",
          "signature": "Vector Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:studentize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe variance of an array of vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "varianceArray",
          "package": "hstatistics",
          "signature": "Samples a -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#varianceArray",
          "type": "function"
        },
        "index": {
          "description": "the variance of an array of vectors",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "varianceArray",
          "normalized": "Samples a-\u003eSample a",
          "package": "hstatistics",
          "partial": "Array",
          "signature": "Samples a-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:varianceArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe variance of a list of vectors\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "varianceList",
          "package": "hstatistics",
          "signature": "[Sample a] -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#varianceList",
          "type": "function"
        },
        "index": {
          "description": "the variance of list of vectors",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "varianceList",
          "normalized": "[Sample a]-\u003eSample a",
          "package": "hstatistics",
          "partial": "List",
          "signature": "[Sample a]-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:varianceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe variance of a matrix with data series in rows\n\u003c/p\u003e",
          "module": "Numeric.Statistics",
          "name": "varianceMatrix",
          "package": "hstatistics",
          "signature": "Matrix a -\u003e Sample a",
          "source": "src/Numeric-Statistics.html#varianceMatrix",
          "type": "function"
        },
        "index": {
          "description": "the variance of matrix with data series in rows",
          "hierarchy": "Numeric Statistics",
          "module": "Numeric.Statistics",
          "name": "varianceMatrix",
          "normalized": "Matrix a-\u003eSample a",
          "package": "hstatistics",
          "partial": "Matrix",
          "signature": "Matrix a-\u003eSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatistics/docs/Numeric-Statistics.html#v:varianceMatrix"
      }
    }
  ]
]