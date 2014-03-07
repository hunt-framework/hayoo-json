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
        "word": "CV"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides QuickCheck generators for images.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Arbitrary",
          "name": "Arbitrary",
          "package": "CV",
          "source": "src/CV-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides QuickCheck generators for images",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "Arbitrary",
          "package": "CV",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a (10m x 10m) sized noisy image.\n\u003c/p\u003e",
          "module": "CV.Arbitrary",
          "name": "blockNoise",
          "package": "CV",
          "signature": "Int -\u003e Gen (Image GrayScale D32)",
          "source": "src/CV-Arbitrary.html#blockNoise",
          "type": "function"
        },
        "index": {
          "description": "Generate sized noisy image",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "blockNoise",
          "normalized": "Int-\u003eGen(Image GrayScale D)",
          "package": "CV",
          "partial": "Noise",
          "signature": "Int-\u003eGen(Image GrayScale D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#v:blockNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate 10x10 constant image\n\u003c/p\u003e",
          "module": "CV.Arbitrary",
          "name": "constImage",
          "package": "CV",
          "signature": "Gen (Image GrayScale D32)",
          "source": "src/CV-Arbitrary.html#constImage",
          "type": "function"
        },
        "index": {
          "description": "Generate x10 constant image",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "constImage",
          "package": "CV",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#v:constImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate 10x10 noisy image\n\u003c/p\u003e",
          "module": "CV.Arbitrary",
          "name": "noisyImage",
          "package": "CV",
          "signature": "Gen (Image GrayScale D32)",
          "source": "src/CV-Arbitrary.html#noisyImage",
          "type": "function"
        },
        "index": {
          "description": "Generate x10 noisy image",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "noisyImage",
          "package": "CV",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#v:noisyImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Generate a random small image, that might be constant, noisy or smoothly varying\n   Range of values is [0,1]\n\u003c/p\u003e",
          "module": "CV.Arbitrary",
          "name": "smallImage",
          "package": "CV",
          "signature": "Gen (Image GrayScale D32)",
          "source": "src/CV-Arbitrary.html#smallImage",
          "type": "function"
        },
        "index": {
          "description": "Generate random small image that might be constant noisy or smoothly varying Range of values is",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "smallImage",
          "package": "CV",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#v:smallImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Generate 10x10 smoothly varying image\n\u003c/p\u003e",
          "module": "CV.Arbitrary",
          "name": "smoothImage",
          "package": "CV",
          "signature": "Gen (Image GrayScale D32)",
          "source": "src/CV-Arbitrary.html#smoothImage",
          "type": "function"
        },
        "index": {
          "description": "Generate x10 smoothly varying image",
          "hierarchy": "CV Arbitrary",
          "module": "CV.Arbitrary",
          "name": "smoothImage",
          "package": "CV",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Arbitrary.html#v:smoothImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary instances for images. Currently it only supports the type \n `Image Grayscale D32`.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Binary",
          "name": "Binary",
          "package": "CV",
          "source": "src/CV-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Binary instances for images Currently it only supports the type Image Grayscale D32",
          "hierarchy": "CV Binary",
          "module": "CV.Binary",
          "name": "Binary",
          "package": "CV",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "Types",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "Types",
          "package": "CV",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvArr",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvArr",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvArr",
          "package": "CV",
          "partial": "C' Cv Arr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvBox2D",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvBox2D",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvBox2D",
          "package": "CV",
          "partial": "C' Cv Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvBox2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvConnectedComp",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvConnectedComp",
          "package": "CV",
          "partial": "C' Cv Connected Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvConnectedComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvContour",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvContour",
          "package": "CV",
          "partial": "C' Cv Contour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvContour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvConvexityDefect",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvConvexityDefect",
          "package": "CV",
          "partial": "C' Cv Convexity Defect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvConvexityDefect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvHistogram",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvHistogram",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvHistogram",
          "package": "CV",
          "partial": "C' Cv Histogram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHu invariants\n\u003c/p\u003e",
          "module": "CV.Bindings.Types",
          "name": "C'CvHuMoments",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "data"
        },
        "index": {
          "description": "Hu invariants",
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvHuMoments",
          "package": "CV",
          "partial": "C' Cv Hu Moments",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvHuMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvMemStorage",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvMemStorage",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvMemStorage",
          "package": "CV",
          "partial": "C' Cv Mem Storage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espatial moments\n\u003c/p\u003e\u003cp\u003ecentral moments\n\u003c/p\u003e\u003cpre\u003em00 != 0 ? 1/sqrt(m00) : 0\u003c/pre\u003e",
          "module": "CV.Bindings.Types",
          "name": "C'CvMoments",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "data"
        },
        "index": {
          "description": "spatial moments central moments m00 sqrt m00",
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvMoments",
          "package": "CV",
          "partial": "C' Cv Moments",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint",
          "package": "CV",
          "partial": "C' Cv Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint2D32f",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint2D32f",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint2D32f",
          "package": "CV",
          "partial": "C' Cv Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvPoint2D32f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvRect",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvRect",
          "package": "CV",
          "partial": "C' Cv Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSURFPoint",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSURFPoint",
          "package": "CV",
          "partial": "C' Cv SURFPoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvSURFPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvScalar",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvScalar",
          "package": "CV",
          "partial": "C' Cv Scalar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSeq",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSeq",
          "package": "CV",
          "partial": "C' Cv Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSeqBlock",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvSeqBlock",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSeqBlock",
          "package": "CV",
          "partial": "C' Cv Seq Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvSeqBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSize",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSize",
          "package": "CV",
          "partial": "C' Cv Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSize2D32f",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvSize2D32f",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSize2D32f",
          "package": "CV",
          "partial": "C' Cv Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvSize2D32f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvTermCriteria",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27CvTermCriteria",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvTermCriteria",
          "package": "CV",
          "partial": "C' Cv Term Criteria",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-CvTermCriteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'IplImage",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#C%27IplImage",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'IplImage",
          "package": "CV",
          "partial": "C' Ipl Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:C-39-IplImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "TermCriteria",
          "package": "CV",
          "source": "src/CV-Bindings-Types.html#TermCriteria",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "TermCriteria",
          "package": "CV",
          "partial": "Term Criteria",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#t:TermCriteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvArr",
          "package": "CV",
          "signature": "C'CvArr",
          "source": "src/CV-Bindings-Types.html#C%27CvArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvArr",
          "package": "CV",
          "partial": "C' Cv Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvBox2D",
          "package": "CV",
          "signature": "C'CvBox2D",
          "source": "src/CV-Bindings-Types.html#C%27CvBox2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvBox2D",
          "package": "CV",
          "partial": "C' Cv Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvBox2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvConnectedComp",
          "package": "CV",
          "signature": "C'CvConnectedComp",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvConnectedComp",
          "package": "CV",
          "partial": "C' Cv Connected Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvConnectedComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvContour",
          "package": "CV",
          "signature": "C'CvContour",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvContour",
          "package": "CV",
          "partial": "C' Cv Contour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvContour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvConvexityDefect",
          "package": "CV",
          "signature": "C'CvConvexityDefect",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvConvexityDefect",
          "package": "CV",
          "partial": "C' Cv Convexity Defect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvConvexityDefect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvHistogram",
          "package": "CV",
          "signature": "C'CvHistogram",
          "source": "src/CV-Bindings-Types.html#C%27CvHistogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvHistogram",
          "package": "CV",
          "partial": "C' Cv Histogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvHuMoments",
          "package": "CV",
          "signature": "C'CvHuMoments",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvHuMoments",
          "package": "CV",
          "partial": "C' Cv Hu Moments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvHuMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvMemStorage",
          "package": "CV",
          "signature": "C'CvMemStorage",
          "source": "src/CV-Bindings-Types.html#C%27CvMemStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvMemStorage",
          "package": "CV",
          "partial": "C' Cv Mem Storage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvMoments",
          "package": "CV",
          "signature": "C'CvMoments",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvMoments",
          "package": "CV",
          "partial": "C' Cv Moments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint",
          "package": "CV",
          "signature": "C'CvPoint",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint",
          "package": "CV",
          "partial": "C' Cv Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint2D32f",
          "package": "CV",
          "signature": "C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvPoint2D32f",
          "package": "CV",
          "partial": "C' Cv Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvPoint2D32f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvRect",
          "package": "CV",
          "signature": "C'CvRect",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvRect",
          "package": "CV",
          "partial": "C' Cv Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSURFPoint",
          "package": "CV",
          "signature": "C'CvSURFPoint",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSURFPoint",
          "package": "CV",
          "partial": "C' Cv SURFPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvSURFPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvScalar",
          "package": "CV",
          "signature": "C'CvScalar",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvScalar",
          "package": "CV",
          "partial": "C' Cv Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSeq",
          "package": "CV",
          "signature": "C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSeq",
          "package": "CV",
          "partial": "C' Cv Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSeqBlock",
          "package": "CV",
          "signature": "C'CvSeqBlock",
          "source": "src/CV-Bindings-Types.html#C%27CvSeqBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSeqBlock",
          "package": "CV",
          "partial": "C' Cv Seq Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvSeqBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSize",
          "package": "CV",
          "signature": "C'CvSize",
          "source": "src/CV-Bindings-Types.html#C%27CvSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSize",
          "package": "CV",
          "partial": "C' Cv Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvSize2D32f",
          "package": "CV",
          "signature": "C'CvSize2D32f",
          "source": "src/CV-Bindings-Types.html#C%27CvSize2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvSize2D32f",
          "package": "CV",
          "partial": "C' Cv Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvSize2D32f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'CvTermCriteria",
          "package": "CV",
          "signature": "C'CvTermCriteria",
          "source": "src/CV-Bindings-Types.html#C%27CvTermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'CvTermCriteria",
          "package": "CV",
          "partial": "C' Cv Term Criteria",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-CvTermCriteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "C'IplImage",
          "package": "CV",
          "signature": "C'IplImage",
          "source": "src/CV-Bindings-Types.html#C%27IplImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "C'IplImage",
          "package": "CV",
          "partial": "C' Ipl Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:C-39-IplImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "EPS",
          "package": "CV",
          "signature": "EPS Double",
          "source": "src/CV-Bindings-Types.html#TermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "EPS",
          "package": "CV",
          "partial": "EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "ITER",
          "package": "CV",
          "signature": "ITER Int",
          "source": "src/CV-Bindings-Types.html#TermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "ITER",
          "package": "CV",
          "partial": "ITER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:ITER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16SC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC1",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16SC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16SC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC2",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16SC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16SC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC3",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16SC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16SC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16SC4",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16SC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16UC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC1",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16UC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16UC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC2",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16UC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16UC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC3",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16UC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_16UC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_16UC4",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_16UC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32FC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC1",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32FC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32FC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC2",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32FC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32FC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC3",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32FC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32FC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32FC4",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32FC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32SC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC1",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32SC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32SC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC2",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32SC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32SC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC3",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32SC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_32SC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_32SC4",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_32SC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_64FC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC1",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_64FC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_64FC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC2",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_64FC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_64FC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC3",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_64FC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_64FC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_64FC4",
          "package": "CV",
          "partial": "CV FC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_64FC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8SC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC1",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8SC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8SC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC2",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8SC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8SC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC3",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8SC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8SC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8SC4",
          "package": "CV",
          "partial": "CV SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8SC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC1",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8UC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC1",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8UC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC2",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8UC2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC2",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8UC2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC3",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8UC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC3",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8UC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC4",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_8UC4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_8UC4",
          "package": "CV",
          "partial": "CV UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_8UC4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_CLOCKWISE",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_CLOCKWISE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_CLOCKWISE",
          "package": "CV",
          "partial": "CV CLOCKWISE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_CLOCKWISE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_COUNTER_CLOCKWISE",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_COUNTER_CLOCKWISE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_COUNTER_CLOCKWISE",
          "package": "CV",
          "partial": "CV COUNTER CLOCKWISE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_COUNTER_CLOCKWISE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_EPS",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_TERMCRIT_EPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_EPS",
          "package": "CV",
          "partial": "CV TERMCRIT EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_TERMCRIT_EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_ITER",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_TERMCRIT_ITER",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_ITER",
          "package": "CV",
          "partial": "CV TERMCRIT ITER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_TERMCRIT_ITER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_NUMBER",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27CV_TERMCRIT_NUMBER",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CV_TERMCRIT_NUMBER",
          "package": "CV",
          "partial": "CV TERMCRIT NUMBER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CV_TERMCRIT_NUMBER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'angle",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvBox2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'angle",
          "package": "CV",
          "partial": "Cv Box D'angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvBox2D-39-angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'center",
          "package": "CV",
          "signature": "C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#C%27CvBox2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'center",
          "package": "CV",
          "partial": "Cv Box D'center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvBox2D-39-center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'size",
          "package": "CV",
          "signature": "C'CvSize2D32f",
          "source": "src/CV-Bindings-Types.html#C%27CvBox2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvBox2D'size",
          "package": "CV",
          "partial": "Cv Box D'size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvBox2D-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'area",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'area",
          "package": "CV",
          "partial": "Cv Connected Comp'area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConnectedComp-39-area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'contour",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'contour",
          "package": "CV",
          "partial": "Cv Connected Comp'contour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConnectedComp-39-contour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'rect",
          "package": "CV",
          "signature": "C'CvRect",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'rect",
          "package": "CV",
          "partial": "Cv Connected Comp'rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConnectedComp-39-rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'value",
          "package": "CV",
          "signature": "C'CvScalar",
          "source": "src/CV-Bindings-Types.html#C%27CvConnectedComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConnectedComp'value",
          "package": "CV",
          "partial": "Cv Connected Comp'value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConnectedComp-39-value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'block_max",
          "package": "CV",
          "signature": "Ptr Char",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'block_max",
          "package": "CV",
          "partial": "Cv Contour'block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-block_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'color",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'color",
          "package": "CV",
          "partial": "Cv Contour'color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'delta_elems",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'delta_elems",
          "package": "CV",
          "partial": "Cv Contour'delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-delta_elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'elem_size",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'elem_size",
          "package": "CV",
          "partial": "Cv Contour'elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-elem_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'first",
          "package": "CV",
          "signature": "Ptr C'CvSeqBlock",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'first",
          "package": "CV",
          "partial": "Cv Contour'first",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'flags",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'flags",
          "package": "CV",
          "partial": "Cv Contour'flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'free_blocks",
          "package": "CV",
          "signature": "Ptr C'CvSeqBlock",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'free_blocks",
          "package": "CV",
          "partial": "Cv Contour'free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-free_blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'h_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'h_next",
          "package": "CV",
          "partial": "Cv Contour'h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-h_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'h_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'h_prev",
          "package": "CV",
          "partial": "Cv Contour'h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-h_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'header_size",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'header_size",
          "package": "CV",
          "partial": "Cv Contour'header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'ptr",
          "package": "CV",
          "signature": "Ptr Char",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'ptr",
          "package": "CV",
          "partial": "Cv Contour'ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'rect",
          "package": "CV",
          "signature": "C'CvRect",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'rect",
          "package": "CV",
          "partial": "Cv Contour'rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_0_",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_0_",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-reserved_0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_1_",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_1_",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-reserved_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_2_",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'reserved_2_",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-reserved_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'total",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'total",
          "package": "CV",
          "partial": "Cv Contour'total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'v_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'v_next",
          "package": "CV",
          "partial": "Cv Contour'v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-v_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'v_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvContour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvContour'v_prev",
          "package": "CV",
          "partial": "Cv Contour'v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvContour-39-v_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'depth",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'depth",
          "package": "CV",
          "partial": "Cv Convexity Defect'depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConvexityDefect-39-depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'depth_point",
          "package": "CV",
          "signature": "Ptr C'CvPoint",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'depth_point",
          "package": "CV",
          "partial": "Cv Convexity Defect'depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConvexityDefect-39-depth_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'end",
          "package": "CV",
          "signature": "Ptr C'CvPoint",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'end",
          "package": "CV",
          "partial": "Cv Convexity Defect'end",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConvexityDefect-39-end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'start",
          "package": "CV",
          "signature": "Ptr C'CvPoint",
          "source": "src/CV-Bindings-Types.html#C%27CvConvexityDefect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvConvexityDefect'start",
          "package": "CV",
          "partial": "Cv Convexity Defect'start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvConvexityDefect-39-start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu1",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu1",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu2",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu2",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu3",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu3",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu4",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu4",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu5",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu5",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu6",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu6",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu7",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvHuMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvHuMoments'hu7",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvHuMoments-39-hu7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'inv_sqrt_m00",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'inv_sqrt_m00",
          "package": "CV",
          "partial": "Cv Moments'inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-inv_sqrt_m00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm00",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm00",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm01",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm01",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm02",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm02",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm03",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm03",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm10",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm10",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm11",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm11",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm12",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm12",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm20",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm20",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm21",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm21",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm30",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'm30",
          "package": "CV",
          "partial": "Cv Moments'm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-m30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu02",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu02",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu03",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu03",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu11",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu11",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu12",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu12",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu20",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu20",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu21",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu21",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu30",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvMoments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvMoments'mu30",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvMoments-39-mu30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint'x",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint'x",
          "package": "CV",
          "partial": "Cv Point'x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvPoint-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint'y",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint'y",
          "package": "CV",
          "partial": "Cv Point'y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvPoint-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint2D32f'x",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint2D32f'x",
          "package": "CV",
          "partial": "Cv Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvPoint2D32f-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint2D32f'y",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvPoint2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvPoint2D32f'y",
          "package": "CV",
          "partial": "Cv Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvPoint2D32f-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'height",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'height",
          "package": "CV",
          "partial": "Cv Rect'height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvRect-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'width",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'width",
          "package": "CV",
          "partial": "Cv Rect'width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvRect-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'x",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'x",
          "package": "CV",
          "partial": "Cv Rect'x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvRect-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'y",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvRect'y",
          "package": "CV",
          "partial": "Cv Rect'y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvRect-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'dir",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'dir",
          "package": "CV",
          "partial": "Cv SURFPoint'dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSURFPoint-39-dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'hessian",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'hessian",
          "package": "CV",
          "partial": "Cv SURFPoint'hessian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSURFPoint-39-hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'laplacian",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'laplacian",
          "package": "CV",
          "partial": "Cv SURFPoint'laplacian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSURFPoint-39-laplacian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'pt",
          "package": "CV",
          "signature": "C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'pt",
          "package": "CV",
          "partial": "Cv SURFPoint'pt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSURFPoint-39-pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'size",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSURFPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSURFPoint'size",
          "package": "CV",
          "partial": "Cv SURFPoint'size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSURFPoint-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_0_",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_0_",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvScalar-39-val_0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_1_",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_1_",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvScalar-39-val_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_2_",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_2_",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvScalar-39-val_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_3_",
          "package": "CV",
          "signature": "CDouble",
          "source": "src/CV-Bindings-Types.html#C%27CvScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvScalar'val_3_",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvScalar-39-val_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'block_max",
          "package": "CV",
          "signature": "Ptr Char",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'block_max",
          "package": "CV",
          "partial": "Cv Seq'block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-block_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'delta_elems",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'delta_elems",
          "package": "CV",
          "partial": "Cv Seq'delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-delta_elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'elem_size",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'elem_size",
          "package": "CV",
          "partial": "Cv Seq'elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-elem_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'first",
          "package": "CV",
          "signature": "Ptr C'CvSeqBlock",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'first",
          "package": "CV",
          "partial": "Cv Seq'first",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'flags",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'flags",
          "package": "CV",
          "partial": "Cv Seq'flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'free_blocks",
          "package": "CV",
          "signature": "Ptr C'CvSeqBlock",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'free_blocks",
          "package": "CV",
          "partial": "Cv Seq'free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-free_blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'h_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'h_next",
          "package": "CV",
          "partial": "Cv Seq'h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-h_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'h_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'h_prev",
          "package": "CV",
          "partial": "Cv Seq'h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-h_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'header_size",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'header_size",
          "package": "CV",
          "partial": "Cv Seq'header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'ptr",
          "package": "CV",
          "signature": "Ptr Char",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'ptr",
          "package": "CV",
          "partial": "Cv Seq'ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'total",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'total",
          "package": "CV",
          "partial": "Cv Seq'total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'v_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'v_next",
          "package": "CV",
          "partial": "Cv Seq'v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-v_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'v_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq",
          "source": "src/CV-Bindings-Types.html#C%27CvSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSeq'v_prev",
          "package": "CV",
          "partial": "Cv Seq'v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSeq-39-v_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSize'height",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSize'height",
          "package": "CV",
          "partial": "Cv Size'height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSize-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSize'width",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSize'width",
          "package": "CV",
          "partial": "Cv Size'width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSize-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSize2D32f'height",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvSize2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSize2D32f'height",
          "package": "CV",
          "partial": "Cv Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSize2D32f-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvSize2D32f'width",
          "package": "CV",
          "signature": "CFloat",
          "source": "src/CV-Bindings-Types.html#C%27CvSize2D32f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvSize2D32f'width",
          "package": "CV",
          "partial": "Cv Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvSize2D32f-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'epsilon",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-Bindings-Types.html#C%27CvTermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'epsilon",
          "package": "CV",
          "partial": "Cv Term Criteria'epsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvTermCriteria-39-epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'max_iter",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvTermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'max_iter",
          "package": "CV",
          "partial": "Cv Term Criteria'max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvTermCriteria-39-max_iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'type",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Bindings-Types.html#C%27CvTermCriteria",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'CvTermCriteria'type",
          "package": "CV",
          "partial": "Cv Term Criteria'type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-CvTermCriteria-39-type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_CONSTANT",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_BORDER_CONSTANT",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_CONSTANT",
          "package": "CV",
          "partial": "IPL BORDER CONSTANT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_BORDER_CONSTANT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_REFLECT",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_BORDER_REFLECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_REFLECT",
          "package": "CV",
          "partial": "IPL BORDER REFLECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_BORDER_REFLECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_REPLICATE",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_BORDER_REPLICATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_REPLICATE",
          "package": "CV",
          "partial": "IPL BORDER REPLICATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_BORDER_REPLICATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_WRAP",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_BORDER_WRAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_BORDER_WRAP",
          "package": "CV",
          "partial": "IPL BORDER WRAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_BORDER_WRAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_16S",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_16S",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_16S",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_16S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_16U",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_16U",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_16U",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_16U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_1U",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_1U",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_1U",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_1U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_32F",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_32F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_32F",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_32F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_32S",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_32S",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_32S",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_32S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_8S",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_8S",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_8S",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_8S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_8U",
          "package": "CV",
          "signature": "a",
          "source": "src/CV-Bindings-Types.html#c%27IPL_DEPTH_8U",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'IPL_DEPTH_8U",
          "package": "CV",
          "partial": "IPL DEPTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-IPL_DEPTH_8U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'cvCreateMemStorage",
          "package": "CV",
          "signature": "Int -\u003e IO (Ptr C'CvMemStorage)",
          "source": "src/CV-Bindings-Types.html#c%27cvCreateMemStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'cvCreateMemStorage",
          "normalized": "Int-\u003eIO(Ptr C'CvMemStorage)",
          "package": "CV",
          "partial": "Create Mem Storage",
          "signature": "Int-\u003eIO(Ptr C'CvMemStorage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-cvCreateMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'cvGetSeqElem",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e CInt -\u003e IO (Ptr CChar)",
          "source": "src/CV-Bindings-Types.html#c%27cvGetSeqElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'cvGetSeqElem",
          "normalized": "Ptr C'CvSeq-\u003eCInt-\u003eIO(Ptr CChar)",
          "package": "CV",
          "partial": "Get Seq Elem",
          "signature": "Ptr C'CvSeq-\u003eCInt-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-cvGetSeqElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'cvReleaseMemStorage",
          "package": "CV",
          "signature": "Ptr (Ptr C'CvMemStorage) -\u003e IO ()",
          "source": "src/CV-Bindings-Types.html#c%27cvReleaseMemStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'cvReleaseMemStorage",
          "normalized": "Ptr(Ptr C'CvMemStorage)-\u003eIO()",
          "package": "CV",
          "partial": "Release Mem Storage",
          "signature": "Ptr(Ptr C'CvMemStorage)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-cvReleaseMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'extractCVSeq",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr () -\u003e IO ()",
          "source": "src/CV-Bindings-Types.html#c%27extractCVSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'extractCVSeq",
          "normalized": "Ptr C'CvSeq-\u003ePtr()-\u003eIO()",
          "package": "CV",
          "partial": "CVSeq",
          "signature": "Ptr C'CvSeq-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-extractCVSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "c'printSeq",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e IO ()",
          "source": "src/CV-Bindings-Types.html#c%27printSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "c'printSeq",
          "normalized": "Ptr C'CvSeq-\u003eIO()",
          "package": "CV",
          "partial": "Seq",
          "signature": "Ptr C'CvSeq-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:c-39-printSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "cvSeqToList",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e IO [a]",
          "source": "src/CV-Bindings-Types.html#cvSeqToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "cvSeqToList",
          "normalized": "Ptr C'CvSeq-\u003eIO[a]",
          "package": "CV",
          "partial": "Seq To List",
          "signature": "Ptr C'CvSeq-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:cvSeqToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "cvSeqToVector",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e IO (Vector a)",
          "source": "src/CV-Bindings-Types.html#cvSeqToVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "cvSeqToVector",
          "normalized": "Ptr C'CvSeq-\u003eIO(Vector a)",
          "package": "CV",
          "partial": "Seq To Vector",
          "signature": "Ptr C'CvSeq-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:cvSeqToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "mkCvPoint2D32F",
          "package": "CV",
          "signature": "(CFloat, CFloat) -\u003e C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#mkCvPoint2D32F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "mkCvPoint2D32F",
          "normalized": "(CFloat,CFloat)-\u003eC'CvPoint D a",
          "package": "CV",
          "partial": "Cv Point",
          "signature": "(CFloat,CFloat)-\u003eC'CvPoint D f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:mkCvPoint2D32F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'angle",
          "package": "CV",
          "signature": "Ptr C'CvBox2D -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvBox2D%27angle",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'angle",
          "normalized": "Ptr C'CvBox D-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Box D'angle",
          "signature": "Ptr C'CvBox D-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvBox2D-39-angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'center",
          "package": "CV",
          "signature": "Ptr C'CvBox2D -\u003e Ptr C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#p%27CvBox2D%27center",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'center",
          "normalized": "Ptr C'CvBox D-\u003ePtr C'CvPoint D a",
          "package": "CV",
          "partial": "Cv Box D'center",
          "signature": "Ptr C'CvBox D-\u003ePtr C'CvPoint D f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvBox2D-39-center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'size",
          "package": "CV",
          "signature": "Ptr C'CvBox2D -\u003e Ptr C'CvSize2D32f",
          "source": "src/CV-Bindings-Types.html#p%27CvBox2D%27size",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvBox2D'size",
          "normalized": "Ptr C'CvBox D-\u003ePtr C'CvSize D a",
          "package": "CV",
          "partial": "Cv Box D'size",
          "signature": "Ptr C'CvBox D-\u003ePtr C'CvSize D f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvBox2D-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'area",
          "package": "CV",
          "signature": "Ptr C'CvConnectedComp -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvConnectedComp%27area",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'area",
          "normalized": "Ptr C'CvConnectedComp-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Connected Comp'area",
          "signature": "Ptr C'CvConnectedComp-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConnectedComp-39-area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'contour",
          "package": "CV",
          "signature": "Ptr C'CvConnectedComp -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvConnectedComp%27contour",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'contour",
          "normalized": "Ptr C'CvConnectedComp-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Connected Comp'contour",
          "signature": "Ptr C'CvConnectedComp-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConnectedComp-39-contour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'rect",
          "package": "CV",
          "signature": "Ptr C'CvConnectedComp -\u003e Ptr C'CvRect",
          "source": "src/CV-Bindings-Types.html#p%27CvConnectedComp%27rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'rect",
          "normalized": "Ptr C'CvConnectedComp-\u003ePtr C'CvRect",
          "package": "CV",
          "partial": "Cv Connected Comp'rect",
          "signature": "Ptr C'CvConnectedComp-\u003ePtr C'CvRect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConnectedComp-39-rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'value",
          "package": "CV",
          "signature": "Ptr C'CvConnectedComp -\u003e Ptr C'CvScalar",
          "source": "src/CV-Bindings-Types.html#p%27CvConnectedComp%27value",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConnectedComp'value",
          "normalized": "Ptr C'CvConnectedComp-\u003ePtr C'CvScalar",
          "package": "CV",
          "partial": "Cv Connected Comp'value",
          "signature": "Ptr C'CvConnectedComp-\u003ePtr C'CvScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConnectedComp-39-value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'block_max",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr Char)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27block_max",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'block_max",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr Char)",
          "package": "CV",
          "partial": "Cv Contour'block",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-block_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'color",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27color",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'color",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'color",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'delta_elems",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27delta_elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'delta_elems",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'delta",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-delta_elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecvSeqToList\u003c/a\u003e\u003c/code\u003e that returns a vector instead. All the warnings of \u003ccode\u003eCvSeqToList\u003c/code\u003e apply.\n\u003c/p\u003e",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'elem_size",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27elem_size",
          "type": "function"
        },
        "index": {
          "description": "version of cvSeqToList that returns vector instead All the warnings of CvSeqToList apply",
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'elem_size",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'elem",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-elem_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'first",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeqBlock)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27first",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'first",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeqBlock)",
          "package": "CV",
          "partial": "Cv Contour'first",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeqBlock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'flags",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'flags",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'flags",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'free_blocks",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeqBlock)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27free_blocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'free_blocks",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeqBlock)",
          "package": "CV",
          "partial": "Cv Contour'free",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeqBlock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-free_blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'h_next",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27h_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'h_next",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Contour'h",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-h_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'h_prev",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27h_prev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'h_prev",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Contour'h",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-h_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CvSeq object into list of its contents. Note that\n since CvSeq can be approximately anything, including a crazy man from the moon,\n this is pretty unsafe and you must make sure that \u003ccode\u003ea\u003c/code\u003e is actually the element\n in the seq, and the seq is something that remotely represents a sequence of elements.\n\u003c/p\u003e",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'header_size",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27header_size",
          "type": "function"
        },
        "index": {
          "description": "Convert CvSeq object into list of its contents Note that since CvSeq can be approximately anything including crazy man from the moon this is pretty unsafe and you must make sure that is actually the element in the seq and the seq is something that remotely represents sequence of elements",
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'header_size",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'header",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'ptr",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr Char)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27ptr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'ptr",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr Char)",
          "package": "CV",
          "partial": "Cv Contour'ptr",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'rect",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr C'CvRect",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'rect",
          "normalized": "Ptr C'CvContour-\u003ePtr C'CvRect",
          "package": "CV",
          "partial": "Cv Contour'rect",
          "signature": "Ptr C'CvContour-\u003ePtr C'CvRect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_0_",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27reserved_0_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_0_",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-reserved_0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_1_",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27reserved_1_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_1_",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-reserved_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_2_",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27reserved_2_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'reserved_2_",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'reserved",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-reserved_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'total",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27total",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'total",
          "normalized": "Ptr C'CvContour-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Contour'total",
          "signature": "Ptr C'CvContour-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'v_next",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27v_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'v_next",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Contour'v",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-v_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'v_prev",
          "package": "CV",
          "signature": "Ptr C'CvContour -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvContour%27v_prev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvContour'v_prev",
          "normalized": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Contour'v",
          "signature": "Ptr C'CvContour-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvContour-39-v_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'depth",
          "package": "CV",
          "signature": "Ptr C'CvConvexityDefect -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvConvexityDefect%27depth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'depth",
          "normalized": "Ptr C'CvConvexityDefect-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Convexity Defect'depth",
          "signature": "Ptr C'CvConvexityDefect-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConvexityDefect-39-depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'depth_point",
          "package": "CV",
          "signature": "Ptr C'CvConvexityDefect -\u003e Ptr (Ptr C'CvPoint)",
          "source": "src/CV-Bindings-Types.html#p%27CvConvexityDefect%27depth_point",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'depth_point",
          "normalized": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "package": "CV",
          "partial": "Cv Convexity Defect'depth",
          "signature": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConvexityDefect-39-depth_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'end",
          "package": "CV",
          "signature": "Ptr C'CvConvexityDefect -\u003e Ptr (Ptr C'CvPoint)",
          "source": "src/CV-Bindings-Types.html#p%27CvConvexityDefect%27end",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'end",
          "normalized": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "package": "CV",
          "partial": "Cv Convexity Defect'end",
          "signature": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConvexityDefect-39-end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'start",
          "package": "CV",
          "signature": "Ptr C'CvConvexityDefect -\u003e Ptr (Ptr C'CvPoint)",
          "source": "src/CV-Bindings-Types.html#p%27CvConvexityDefect%27start",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvConvexityDefect'start",
          "normalized": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "package": "CV",
          "partial": "Cv Convexity Defect'start",
          "signature": "Ptr C'CvConvexityDefect-\u003ePtr(Ptr C'CvPoint)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvConvexityDefect-39-start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu1",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu1",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu2",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu2",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu2",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu3",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu3",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu4",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu4",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu5",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu5",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu5",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu6",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu6",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu6",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu7",
          "package": "CV",
          "signature": "Ptr C'CvHuMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvHuMoments%27hu7",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvHuMoments'hu7",
          "normalized": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Hu Moments'hu",
          "signature": "Ptr C'CvHuMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvHuMoments-39-hu7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'inv_sqrt_m00",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27inv_sqrt_m00",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'inv_sqrt_m00",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'inv",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-inv_sqrt_m00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm00",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m00",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm00",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm01",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m01",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm01",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm02",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m02",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm02",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm03",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m03",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm03",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm10",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m10",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm10",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm11",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m11",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm11",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm12",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m12",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm12",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm20",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m20",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm20",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm21",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m21",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm21",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm30",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27m30",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'm30",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'm",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-m30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu02",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu02",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu02",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu03",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu03",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu03",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu03"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu11",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu11",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu11",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu12",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu12",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu12",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu20",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu20",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu20",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu21",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu21",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu21",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu30",
          "package": "CV",
          "signature": "Ptr C'CvMoments -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvMoments%27mu30",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvMoments'mu30",
          "normalized": "Ptr C'CvMoments-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Moments'mu",
          "signature": "Ptr C'CvMoments-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvMoments-39-mu30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint'x",
          "package": "CV",
          "signature": "Ptr C'CvPoint -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvPoint%27x",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint'x",
          "normalized": "Ptr C'CvPoint-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Point'x",
          "signature": "Ptr C'CvPoint-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvPoint-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint'y",
          "package": "CV",
          "signature": "Ptr C'CvPoint -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvPoint%27y",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint'y",
          "normalized": "Ptr C'CvPoint-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Point'y",
          "signature": "Ptr C'CvPoint-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvPoint-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint2D32f'x",
          "package": "CV",
          "signature": "Ptr C'CvPoint2D32f -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvPoint2D32f%27x",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint2D32f'x",
          "normalized": "Ptr C'CvPoint D a-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Point",
          "signature": "Ptr C'CvPoint D f-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvPoint2D32f-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint2D32f'y",
          "package": "CV",
          "signature": "Ptr C'CvPoint2D32f -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvPoint2D32f%27y",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvPoint2D32f'y",
          "normalized": "Ptr C'CvPoint D a-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Point",
          "signature": "Ptr C'CvPoint D f-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvPoint2D32f-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'height",
          "package": "CV",
          "signature": "Ptr C'CvRect -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvRect%27height",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'height",
          "normalized": "Ptr C'CvRect-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Rect'height",
          "signature": "Ptr C'CvRect-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvRect-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'width",
          "package": "CV",
          "signature": "Ptr C'CvRect -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvRect%27width",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'width",
          "normalized": "Ptr C'CvRect-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Rect'width",
          "signature": "Ptr C'CvRect-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvRect-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'x",
          "package": "CV",
          "signature": "Ptr C'CvRect -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvRect%27x",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'x",
          "normalized": "Ptr C'CvRect-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Rect'x",
          "signature": "Ptr C'CvRect-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvRect-39-x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'y",
          "package": "CV",
          "signature": "Ptr C'CvRect -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvRect%27y",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvRect'y",
          "normalized": "Ptr C'CvRect-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Rect'y",
          "signature": "Ptr C'CvRect-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvRect-39-y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'dir",
          "package": "CV",
          "signature": "Ptr C'CvSURFPoint -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvSURFPoint%27dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'dir",
          "normalized": "Ptr C'CvSURFPoint-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv SURFPoint'dir",
          "signature": "Ptr C'CvSURFPoint-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSURFPoint-39-dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'hessian",
          "package": "CV",
          "signature": "Ptr C'CvSURFPoint -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvSURFPoint%27hessian",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'hessian",
          "normalized": "Ptr C'CvSURFPoint-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv SURFPoint'hessian",
          "signature": "Ptr C'CvSURFPoint-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSURFPoint-39-hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'laplacian",
          "package": "CV",
          "signature": "Ptr C'CvSURFPoint -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSURFPoint%27laplacian",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'laplacian",
          "normalized": "Ptr C'CvSURFPoint-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv SURFPoint'laplacian",
          "signature": "Ptr C'CvSURFPoint-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSURFPoint-39-laplacian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'pt",
          "package": "CV",
          "signature": "Ptr C'CvSURFPoint -\u003e Ptr C'CvPoint2D32f",
          "source": "src/CV-Bindings-Types.html#p%27CvSURFPoint%27pt",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'pt",
          "normalized": "Ptr C'CvSURFPoint-\u003ePtr C'CvPoint D a",
          "package": "CV",
          "partial": "Cv SURFPoint'pt",
          "signature": "Ptr C'CvSURFPoint-\u003ePtr C'CvPoint D f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSURFPoint-39-pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'size",
          "package": "CV",
          "signature": "Ptr C'CvSURFPoint -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSURFPoint%27size",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSURFPoint'size",
          "normalized": "Ptr C'CvSURFPoint-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv SURFPoint'size",
          "signature": "Ptr C'CvSURFPoint-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSURFPoint-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_0_",
          "package": "CV",
          "signature": "Ptr C'CvScalar -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvScalar%27val_0_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_0_",
          "normalized": "Ptr C'CvScalar-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "signature": "Ptr C'CvScalar-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvScalar-39-val_0_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_1_",
          "package": "CV",
          "signature": "Ptr C'CvScalar -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvScalar%27val_1_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_1_",
          "normalized": "Ptr C'CvScalar-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "signature": "Ptr C'CvScalar-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvScalar-39-val_1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_2_",
          "package": "CV",
          "signature": "Ptr C'CvScalar -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvScalar%27val_2_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_2_",
          "normalized": "Ptr C'CvScalar-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "signature": "Ptr C'CvScalar-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvScalar-39-val_2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_3_",
          "package": "CV",
          "signature": "Ptr C'CvScalar -\u003e Ptr CDouble",
          "source": "src/CV-Bindings-Types.html#p%27CvScalar%27val_3_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvScalar'val_3_",
          "normalized": "Ptr C'CvScalar-\u003ePtr CDouble",
          "package": "CV",
          "partial": "Cv Scalar'val",
          "signature": "Ptr C'CvScalar-\u003ePtr CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvScalar-39-val_3_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'block_max",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr Char)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27block_max",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'block_max",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr Char)",
          "package": "CV",
          "partial": "Cv Seq'block",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-block_max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'delta_elems",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27delta_elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'delta_elems",
          "normalized": "Ptr C'CvSeq-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Seq'delta",
          "signature": "Ptr C'CvSeq-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-delta_elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'elem_size",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27elem_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'elem_size",
          "normalized": "Ptr C'CvSeq-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Seq'elem",
          "signature": "Ptr C'CvSeq-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-elem_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'first",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeqBlock)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27first",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'first",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeqBlock)",
          "package": "CV",
          "partial": "Cv Seq'first",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeqBlock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'flags",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'flags",
          "normalized": "Ptr C'CvSeq-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Seq'flags",
          "signature": "Ptr C'CvSeq-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'free_blocks",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeqBlock)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27free_blocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'free_blocks",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeqBlock)",
          "package": "CV",
          "partial": "Cv Seq'free",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeqBlock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-free_blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'h_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27h_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'h_next",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Seq'h",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-h_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'h_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27h_prev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'h_prev",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Seq'h",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-h_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'header_size",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27header_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'header_size",
          "normalized": "Ptr C'CvSeq-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Seq'header",
          "signature": "Ptr C'CvSeq-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-header_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'ptr",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr Char)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27ptr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'ptr",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr Char)",
          "package": "CV",
          "partial": "Cv Seq'ptr",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'total",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27total",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'total",
          "normalized": "Ptr C'CvSeq-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Seq'total",
          "signature": "Ptr C'CvSeq-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'v_next",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27v_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'v_next",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Seq'v",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-v_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'v_prev",
          "package": "CV",
          "signature": "Ptr C'CvSeq -\u003e Ptr (Ptr C'CvSeq)",
          "source": "src/CV-Bindings-Types.html#p%27CvSeq%27v_prev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSeq'v_prev",
          "normalized": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "package": "CV",
          "partial": "Cv Seq'v",
          "signature": "Ptr C'CvSeq-\u003ePtr(Ptr C'CvSeq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSeq-39-v_prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSize'height",
          "package": "CV",
          "signature": "Ptr C'CvSize -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSize%27height",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSize'height",
          "normalized": "Ptr C'CvSize-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Size'height",
          "signature": "Ptr C'CvSize-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSize-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSize'width",
          "package": "CV",
          "signature": "Ptr C'CvSize -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvSize%27width",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSize'width",
          "normalized": "Ptr C'CvSize-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Size'width",
          "signature": "Ptr C'CvSize-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSize-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSize2D32f'height",
          "package": "CV",
          "signature": "Ptr C'CvSize2D32f -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvSize2D32f%27height",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSize2D32f'height",
          "normalized": "Ptr C'CvSize D a-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Size",
          "signature": "Ptr C'CvSize D f-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSize2D32f-39-height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvSize2D32f'width",
          "package": "CV",
          "signature": "Ptr C'CvSize2D32f -\u003e Ptr CFloat",
          "source": "src/CV-Bindings-Types.html#p%27CvSize2D32f%27width",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvSize2D32f'width",
          "normalized": "Ptr C'CvSize D a-\u003ePtr CFloat",
          "package": "CV",
          "partial": "Cv Size",
          "signature": "Ptr C'CvSize D f-\u003ePtr CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvSize2D32f-39-width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'epsilon",
          "package": "CV",
          "signature": "Ptr C'CvTermCriteria -\u003e Ptr Double",
          "source": "src/CV-Bindings-Types.html#p%27CvTermCriteria%27epsilon",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'epsilon",
          "normalized": "Ptr C'CvTermCriteria-\u003ePtr Double",
          "package": "CV",
          "partial": "Cv Term Criteria'epsilon",
          "signature": "Ptr C'CvTermCriteria-\u003ePtr Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvTermCriteria-39-epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'max_iter",
          "package": "CV",
          "signature": "Ptr C'CvTermCriteria -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvTermCriteria%27max_iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'max_iter",
          "normalized": "Ptr C'CvTermCriteria-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Term Criteria'max",
          "signature": "Ptr C'CvTermCriteria-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvTermCriteria-39-max_iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'type",
          "package": "CV",
          "signature": "Ptr C'CvTermCriteria -\u003e Ptr CInt",
          "source": "src/CV-Bindings-Types.html#p%27CvTermCriteria%27type",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'CvTermCriteria'type",
          "normalized": "Ptr C'CvTermCriteria-\u003ePtr CInt",
          "package": "CV",
          "partial": "Cv Term Criteria'type",
          "signature": "Ptr C'CvTermCriteria-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-CvTermCriteria-39-type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'cvCreateMemStorage",
          "package": "CV",
          "signature": "FunPtr (Int -\u003e IO (Ptr C'CvMemStorage))",
          "source": "src/CV-Bindings-Types.html#p%27cvCreateMemStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'cvCreateMemStorage",
          "normalized": "FunPtr(Int-\u003eIO(Ptr C'CvMemStorage))",
          "package": "CV",
          "partial": "Create Mem Storage",
          "signature": "FunPtr(Int-\u003eIO(Ptr C'CvMemStorage))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-cvCreateMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'cvGetSeqElem",
          "package": "CV",
          "signature": "FunPtr (Ptr C'CvSeq -\u003e CInt -\u003e IO (Ptr CChar))",
          "source": "src/CV-Bindings-Types.html#p%27cvGetSeqElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'cvGetSeqElem",
          "normalized": "FunPtr(Ptr C'CvSeq-\u003eCInt-\u003eIO(Ptr CChar))",
          "package": "CV",
          "partial": "Get Seq Elem",
          "signature": "FunPtr(Ptr C'CvSeq-\u003eCInt-\u003eIO(Ptr CChar))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-cvGetSeqElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'cvReleaseMemStorage",
          "package": "CV",
          "signature": "FunPtr (Ptr (Ptr C'CvMemStorage) -\u003e IO ())",
          "source": "src/CV-Bindings-Types.html#p%27cvReleaseMemStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'cvReleaseMemStorage",
          "normalized": "FunPtr(Ptr(Ptr C'CvMemStorage)-\u003eIO())",
          "package": "CV",
          "partial": "Release Mem Storage",
          "signature": "FunPtr(Ptr(Ptr C'CvMemStorage)-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-cvReleaseMemStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'extractCVSeq",
          "package": "CV",
          "signature": "FunPtr (Ptr C'CvSeq -\u003e Ptr () -\u003e IO ())",
          "source": "src/CV-Bindings-Types.html#p%27extractCVSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'extractCVSeq",
          "normalized": "FunPtr(Ptr C'CvSeq-\u003ePtr()-\u003eIO())",
          "package": "CV",
          "partial": "CVSeq",
          "signature": "FunPtr(Ptr C'CvSeq-\u003ePtr()-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-extractCVSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "p'printSeq",
          "package": "CV",
          "signature": "FunPtr (Ptr C'CvSeq -\u003e IO ())",
          "source": "src/CV-Bindings-Types.html#p%27printSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "p'printSeq",
          "normalized": "FunPtr(Ptr C'CvSeq-\u003eIO())",
          "package": "CV",
          "partial": "Seq",
          "signature": "FunPtr(Ptr C'CvSeq-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:p-39-printSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "toCvTCrit",
          "package": "CV",
          "signature": "TermCriteria -\u003e C'CvTermCriteria",
          "source": "src/CV-Bindings-Types.html#toCvTCrit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "toCvTCrit",
          "normalized": "TermCriteria-\u003eC'CvTermCriteria",
          "package": "CV",
          "partial": "Cv TCrit",
          "signature": "TermCriteria-\u003eC'CvTermCriteria",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:toCvTCrit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Bindings.Types",
          "name": "withNewMemory",
          "package": "CV",
          "signature": "(Ptr C'CvMemStorage -\u003e IO b) -\u003e IO b",
          "source": "src/CV-Bindings-Types.html#withNewMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Bindings Types",
          "module": "CV.Bindings.Types",
          "name": "withNewMemory",
          "normalized": "(Ptr C'CvMemStorage-\u003eIO a)-\u003eIO a",
          "package": "CV",
          "partial": "New Memory",
          "signature": "(Ptr C'CvMemStorage-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Bindings-Types.html#v:withNewMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes opencv functions for camera calibration using a chessboard rig. This module follows opencv quite closely and the best documentation\n   is probably found there. As quick example however, the following program detects and draws chessboard corners from an image.\n\u003c/p\u003e\u003cpre\u003e\n module Main where\n import CV.Image\n import CV.Calibration\n\nmain = do\n     Just i \u003c- loadColorImage \"chess.png\"\n     let corners = findChessboardCorners (unsafeImageTo8Bit i) (4,5) (FastCheck:defaultFlags)\n     let y = drawChessboardCorners (unsafeImageTo8Bit i) (4,5) corners\n     mapM_ print (corners)\n     saveImage \"found_chessboard.png\" y\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "CV.Calibration",
          "name": "Calibration",
          "package": "CV",
          "source": "src/CV-Calibration.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes opencv functions for camera calibration using chessboard rig This module follows opencv quite closely and the best documentation is probably found there As quick example however the following program detects and draws chessboard corners from an image module Main where import CV.Image import CV.Calibration main do Just loadColorImage chess.png let corners findChessboardCorners unsafeImageTo8Bit FastCheck defaultFlags let drawChessboardCorners unsafeImageTo8Bit corners mapM print corners saveImage found chessboard.png",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "Calibration",
          "package": "CV",
          "partial": "Calibration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Flags for the chessboard corner detector. See opencv documentation for cvFindChessboardCorners.\n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "FindFlags",
          "package": "CV",
          "source": "src/CV-Calibration.html#FindFlags",
          "type": "data"
        },
        "index": {
          "description": "Flags for the chessboard corner detector See opencv documentation for cvFindChessboardCorners",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "FindFlags",
          "package": "CV",
          "partial": "Find Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#t:FindFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Calibration",
          "name": "AdaptiveThresh",
          "package": "CV",
          "signature": "AdaptiveThresh",
          "source": "src/CV-Calibration.html#FindFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "AdaptiveThresh",
          "package": "CV",
          "partial": "Adaptive Thresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:AdaptiveThresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Calibration",
          "name": "FastCheck",
          "package": "CV",
          "signature": "FastCheck",
          "source": "src/CV-Calibration.html#FindFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "FastCheck",
          "package": "CV",
          "partial": "Fast Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:FastCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Calibration",
          "name": "FilterQuads",
          "package": "CV",
          "signature": "FilterQuads",
          "source": "src/CV-Calibration.html#FindFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "FilterQuads",
          "package": "CV",
          "partial": "Filter Quads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:FilterQuads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Calibration",
          "name": "NormalizeImage",
          "package": "CV",
          "signature": "NormalizeImage",
          "source": "src/CV-Calibration.html#FindFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "NormalizeImage",
          "package": "CV",
          "partial": "Normalize Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:NormalizeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;See opencv function cvCalibrateCamera2. This function takes a list of world-screen coordinate pairs acquired with find-chessboard corners\n   and attempts to find the camera parameters for the system. It returns the fitting error, the camera matrix, list of distortion co-efficients\n   and rotation and translation vectors for each coordinate pair. \n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "calibrateCamera2",
          "package": "CV",
          "signature": "[[((Float, Float, Float), (Float, Float))]] -\u003e (Int, Int) -\u003e IO (Double, Matrix Float, [[Float]], [[Float]], [[Float]])",
          "source": "src/CV-Calibration.html#calibrateCamera2",
          "type": "function"
        },
        "index": {
          "description": "See opencv function cvCalibrateCamera2 This function takes list of world-screen coordinate pairs acquired with find-chessboard corners and attempts to find the camera parameters for the system It returns the fitting error the camera matrix list of distortion co-efficients and rotation and translation vectors for each coordinate pair",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "calibrateCamera2",
          "normalized": "[[((Float,Float,Float),(Float,Float))]]-\u003e(Int,Int)-\u003eIO(Double,Matrix Float,[[Float]],[[Float]],[[Float]])",
          "package": "CV",
          "partial": "Camera",
          "signature": "[[((Float,Float,Float),(Float,Float))]]-\u003e(Int,Int)-\u003eIO(Double,Matrix Float,[[Float]],[[Float]],[[Float]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:calibrateCamera2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault flags for finding corners\n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "defaultFlags",
          "package": "CV",
          "signature": "[FindFlags]",
          "source": "src/CV-Calibration.html#defaultFlags",
          "type": "function"
        },
        "index": {
          "description": "Default flags for finding corners",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "defaultFlags",
          "normalized": "[FindFlags]",
          "package": "CV",
          "partial": "Flags",
          "signature": "[FindFlags]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:defaultFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Draw the found chessboard corners to an image\n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "drawChessboardCorners",
          "package": "CV",
          "signature": "Image RGB D8 -\u003e (Int, Int) -\u003e [(Float, Float)] -\u003e Image RGB D8",
          "source": "src/CV-Calibration.html#drawChessboardCorners",
          "type": "function"
        },
        "index": {
          "description": "Draw the found chessboard corners to an image",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "drawChessboardCorners",
          "normalized": "Image RGB D-\u003e(Int,Int)-\u003e[(Float,Float)]-\u003eImage RGB D",
          "package": "CV",
          "partial": "Chessboard Corners",
          "signature": "Image RGB D-\u003e(Int,Int)-\u003e[(Float,Float)]-\u003eImage RGB D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:drawChessboardCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the inner corners of a chessboard in a given image. \n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "findChessboardCorners",
          "package": "CV",
          "signature": "Image RGB D8 -\u003e (Int, Int) -\u003e [FindFlags] -\u003e [(Float, Float)]",
          "source": "src/CV-Calibration.html#findChessboardCorners",
          "type": "function"
        },
        "index": {
          "description": "Find the inner corners of chessboard in given image",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "findChessboardCorners",
          "normalized": "Image RGB D-\u003e(Int,Int)-\u003e[FindFlags]-\u003e[(Float,Float)]",
          "package": "CV",
          "partial": "Chessboard Corners",
          "signature": "Image RGB D-\u003e(Int,Int)-\u003e[FindFlags]-\u003e[(Float,Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:findChessboardCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an estimate of chessboard corners, provide a subpixel estimation of actual corners.\n\u003c/p\u003e",
          "module": "CV.Calibration",
          "name": "refineChessboardCorners",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e [(Float, Float)] -\u003e (Int, Int) -\u003e (Int, Int) -\u003e [(Float, Float)]",
          "source": "src/CV-Calibration.html#refineChessboardCorners",
          "type": "function"
        },
        "index": {
          "description": "Given an estimate of chessboard corners provide subpixel estimation of actual corners",
          "hierarchy": "CV Calibration",
          "module": "CV.Calibration",
          "name": "refineChessboardCorners",
          "normalized": "Image GrayScale D-\u003e[(Float,Float)]-\u003e(Int,Int)-\u003e(Int,Int)-\u003e[(Float,Float)]",
          "package": "CV",
          "partial": "Chessboard Corners",
          "signature": "Image GrayScale D-\u003e[(Float,Float)]-\u003e(Int,Int)-\u003e(Int,Int)-\u003e[(Float,Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Calibration.html#v:refineChessboardCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for simple histogram manipulation. Use this\n to scale the image for viewing or to perform simple light-level normalization\n accross multiple images.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.ColourUtils",
          "name": "ColourUtils",
          "package": "CV",
          "source": "src/CV-ColourUtils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for simple histogram manipulation Use this to scale the image for viewing or to perform simple light-level normalization accross multiple images",
          "hierarchy": "CV ColourUtils",
          "module": "CV.ColourUtils",
          "name": "ColourUtils",
          "package": "CV",
          "partial": "Colour Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ColourUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the image histogram to have fixed mean and standard deviation. This can\n  be used for simple light level normalization.\n\u003c/p\u003e",
          "module": "CV.ColourUtils",
          "name": "balance",
          "package": "CV",
          "signature": "(D32, D32) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ColourUtils.html#balance",
          "type": "function"
        },
        "index": {
          "description": "Adjust the image histogram to have fixed mean and standard deviation This can be used for simple light level normalization",
          "hierarchy": "CV ColourUtils",
          "module": "CV.ColourUtils",
          "name": "balance",
          "normalized": "(D,D)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(D,D)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ColourUtils.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqualize contrast of the image. This is good for visualizing \n   images with backgrounds and foregrounds that are both bright or both dark.\n\u003c/p\u003e",
          "module": "CV.ColourUtils",
          "name": "equalizeHistogram",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Image GrayScale D8",
          "source": "src/CV-ColourUtils.html#equalizeHistogram",
          "type": "function"
        },
        "index": {
          "description": "Equalize contrast of the image This is good for visualizing images with backgrounds and foregrounds that are both bright or both dark",
          "hierarchy": "CV ColourUtils",
          "module": "CV.ColourUtils",
          "name": "equalizeHistogram",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Histogram",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ColourUtils.html#v:equalizeHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform logarithmic compression on the image. This will enhance dark features\n  and suppress bright features. Use this to visualize images with high dynamic range. \n  (FFT results, for example)\n\u003c/p\u003e",
          "module": "CV.ColourUtils",
          "name": "logarithmicCompression",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ColourUtils.html#logarithmicCompression",
          "type": "function"
        },
        "index": {
          "description": "Perform logarithmic compression on the image This will enhance dark features and suppress bright features Use this to visualize images with high dynamic range FFT results for example",
          "hierarchy": "CV ColourUtils",
          "module": "CV.ColourUtils",
          "name": "logarithmicCompression",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Compression",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ColourUtils.html#v:logarithmicCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHistogram stretch scales the image to fit the range [0,1]\n\u003c/p\u003e",
          "module": "CV.ColourUtils",
          "name": "stretchHistogram",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ColourUtils.html#stretchHistogram",
          "type": "function"
        },
        "index": {
          "description": "Histogram stretch scales the image to fit the range",
          "hierarchy": "CV ColourUtils",
          "module": "CV.ColourUtils",
          "name": "stretchHistogram",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Histogram",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ColourUtils.html#v:stretchHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for extracting features from connected components\n   of black and white images as well as extracting other shape related features. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.ConnectedComponents",
          "name": "ConnectedComponents",
          "package": "CV",
          "source": "src/CV-ConnectedComponents.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for extracting features from connected components of black and white images as well as extracting other shape related features",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "ConnectedComponents",
          "package": "CV",
          "partial": "Connected Components",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure that contains the opencv sequence holding the contour data.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "Contours",
          "package": "CV",
          "source": "src/CV-ConnectedComponents.html#Contours",
          "type": "data"
        },
        "index": {
          "description": "Structure that contains the opencv sequence holding the contour data",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "Contours",
          "package": "CV",
          "partial": "Contours",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#t:Contours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract central moments of the image. These are useful for describing the\n   object shape for a classifier system.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "centralMoments",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Bool -\u003e [Double]",
          "source": "src/CV-ConnectedComponents.html#centralMoments",
          "type": "function"
        },
        "index": {
          "description": "Extract central moments of the image These are useful for describing the object shape for classifier system",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "centralMoments",
          "normalized": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "package": "CV",
          "partial": "Moments",
          "signature": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:centralMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe area of a contour.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "contourArea",
          "package": "CV",
          "signature": "ContourFunctionUS Double",
          "source": "src/CV-ConnectedComponents.html#contourArea",
          "type": "function"
        },
        "index": {
          "description": "The area of contour",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "contourArea",
          "package": "CV",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:contourArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Operation for extracting Hu-moments from a contour\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "contourHuMoments",
          "package": "CV",
          "signature": "ContourFunctionUS [Double]",
          "source": "src/CV-ConnectedComponents.html#contourHuMoments",
          "type": "function"
        },
        "index": {
          "description": "Operation for extracting Hu-moments from contour",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "contourHuMoments",
          "normalized": "ContourFunctionUS[Double]",
          "package": "CV",
          "partial": "Hu Moments",
          "signature": "ContourFunctionUS[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:contourHuMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the perimeter of a contour.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "contourPerimeter",
          "package": "CV",
          "signature": "ContourFunctionUS Double",
          "source": "src/CV-ConnectedComponents.html#contourPerimeter",
          "type": "function"
        },
        "index": {
          "description": "Get the perimeter of contour",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "contourPerimeter",
          "package": "CV",
          "partial": "Perimeter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:contourPerimeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the points in the contour.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "contourPoints",
          "package": "CV",
          "signature": "ContourFunctionUS [(Double, Double)]",
          "source": "src/CV-ConnectedComponents.html#contourPoints",
          "type": "function"
        },
        "index": {
          "description": "Get list of the points in the contour",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "contourPoints",
          "normalized": "ContourFunctionUS[(Double,Double)]",
          "package": "CV",
          "partial": "Points",
          "signature": "ContourFunctionUS[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:contourPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of connected components in the image\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "countBlobs",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int",
          "source": "src/CV-ConnectedComponents.html#countBlobs",
          "type": "function"
        },
        "index": {
          "description": "Count the number of connected components in the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "countBlobs",
          "normalized": "Image GrayScale D-\u003eInt",
          "package": "CV",
          "partial": "Blobs",
          "signature": "Image GrayScale D-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:countBlobs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ConnectedComponents",
          "name": "fillConnectedComponents",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e (Image GrayScale D8, Int)",
          "source": "src/CV-ConnectedComponents.html#fillConnectedComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "fillConnectedComponents",
          "normalized": "Image GrayScale D-\u003e(Image GrayScale D,Int)",
          "package": "CV",
          "partial": "Connected Components",
          "signature": "Image GrayScale D-\u003e(Image GrayScale D,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:fillConnectedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract contours of connected components of the image.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "getContours",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Contours",
          "source": "src/CV-ConnectedComponents.html#getContours",
          "type": "function"
        },
        "index": {
          "description": "Extract contours of connected components of the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "getContours",
          "normalized": "Image GrayScale D-\u003eContours",
          "package": "CV",
          "partial": "Contours",
          "signature": "Image GrayScale D-\u003eContours",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:getContours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract Hu-moments of the image. These features are rotation invariant.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "huMoments",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Bool -\u003e [Double]",
          "source": "src/CV-ConnectedComponents.html#huMoments",
          "type": "function"
        },
        "index": {
          "description": "Extract Hu-moments of the image These features are rotation invariant",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "huMoments",
          "normalized": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "package": "CV",
          "partial": "Moments",
          "signature": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:huMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function maps an opencv contour calculation over all\n   contours of the image. \n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "mapContours",
          "package": "CV",
          "signature": "ContourFunctionUS a -\u003e Contours -\u003e [a]",
          "source": "src/CV-ConnectedComponents.html#mapContours",
          "type": "function"
        },
        "index": {
          "description": "This function maps an opencv contour calculation over all contours of the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "mapContours",
          "normalized": "ContourFunctionUS a-\u003eContours-\u003e[a]",
          "package": "CV",
          "partial": "Contours",
          "signature": "ContourFunctionUS a-\u003eContours-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:mapContours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ConnectedComponents",
          "name": "maskConnectedComponent",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int -\u003e Image GrayScale D8",
          "source": "src/CV-ConnectedComponents.html#maskConnectedComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "maskConnectedComponent",
          "normalized": "Image GrayScale D-\u003eInt-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Connected Component",
          "signature": "Image GrayScale D-\u003eInt-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:maskConnectedComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract normalized central moments of the image.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "normalizedCentralMoments",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Bool -\u003e [Double]",
          "source": "src/CV-ConnectedComponents.html#normalizedCentralMoments",
          "type": "function"
        },
        "index": {
          "description": "Extract normalized central moments of the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "normalizedCentralMoments",
          "normalized": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "package": "CV",
          "partial": "Central Moments",
          "signature": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:normalizedCentralMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all connected components that fall outside of given size range from the image.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "selectSizedComponents",
          "package": "CV",
          "signature": "Double -\u003e Double -\u003e Image GrayScale D8 -\u003e Image GrayScale D8",
          "source": "src/CV-ConnectedComponents.html#selectSizedComponents",
          "type": "function"
        },
        "index": {
          "description": "Remove all connected components that fall outside of given size range from the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "selectSizedComponents",
          "normalized": "Double-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Sized Components",
          "signature": "Double-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:selectSizedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract raw spatial moments of the image.\n\u003c/p\u003e",
          "module": "CV.ConnectedComponents",
          "name": "spatialMoments",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Bool -\u003e [Double]",
          "source": "src/CV-ConnectedComponents.html#spatialMoments",
          "type": "function"
        },
        "index": {
          "description": "Extract raw spatial moments of the image",
          "hierarchy": "CV ConnectedComponents",
          "module": "CV.ConnectedComponents",
          "name": "spatialMoments",
          "normalized": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "package": "CV",
          "partial": "Moments",
          "signature": "Image GrayScale D-\u003eBool-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ConnectedComponents.html#v:spatialMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis  module provides slow but functional means for exporting images from and to\n  CArrays, which can easily be passed into foreign functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Conversions",
          "name": "Conversions",
          "package": "CV",
          "source": "src/CV-Conversions.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides slow but functional means for exporting images from and to CArrays which can easily be passed into foreign functions",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "Conversions",
          "package": "CV",
          "partial": "Conversions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Conversions",
          "name": "acquireImageSlow'",
          "package": "CV",
          "signature": "Int -\u003e Int -\u003e Ptr Double -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Conversions.html#acquireImageSlow%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "acquireImageSlow'",
          "normalized": "Int-\u003eInt-\u003ePtr Double-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Image Slow'",
          "signature": "Int-\u003eInt-\u003ePtr Double-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:acquireImageSlow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Conversions",
          "name": "acquireImageSlow8URGB'",
          "package": "CV",
          "signature": "Int -\u003e Int -\u003e Ptr Word8 -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Conversions.html#acquireImageSlow8URGB%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "acquireImageSlow8URGB'",
          "normalized": "Int-\u003eInt-\u003ePtr Word-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Image Slow URGB'",
          "signature": "Int-\u003eInt-\u003ePtr Word-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:acquireImageSlow8URGB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Conversions",
          "name": "acquireImageSlowF'",
          "package": "CV",
          "signature": "Int -\u003e Int -\u003e Ptr Float -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Conversions.html#acquireImageSlowF%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "acquireImageSlowF'",
          "normalized": "Int-\u003eInt-\u003ePtr Float-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Image Slow F'",
          "signature": "Int-\u003eInt-\u003ePtr Float-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:acquireImageSlowF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of a CArray into CV.Image type.\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copy8UCArrayToImage",
          "package": "CV",
          "signature": "CArray (Int, Int) Word8 -\u003e Image GrayScale D8",
          "source": "src/CV-Conversions.html#copy8UCArrayToImage",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of CArray into CV.Image type",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copy8UCArrayToImage",
          "normalized": "CArray(Int,Int)Word-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "UCArray To Image",
          "signature": "CArray(Int,Int)Word-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copy8UCArrayToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of a CArray into CV.Image type.\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyCArrayToImage",
          "package": "CV",
          "signature": "CArray (Int, Int) Double -\u003e Image GrayScale D32",
          "source": "src/CV-Conversions.html#copyCArrayToImage",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of CArray into CV.Image type",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyCArrayToImage",
          "normalized": "CArray(Int,Int)Double-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "CArray To Image",
          "signature": "CArray(Int,Int)Double-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyCArrayToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the real part of an array to image\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyComplexCArrayToImage",
          "package": "CV",
          "signature": "CArray (Int, Int) (Complex Double) -\u003e Image GrayScale D32",
          "source": "src/CV-Conversions.html#copyComplexCArrayToImage",
          "type": "function"
        },
        "index": {
          "description": "Copy the real part of an array to image",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyComplexCArrayToImage",
          "normalized": "CArray(Int,Int)(Complex Double)-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Complex CArray To Image",
          "signature": "CArray(Int,Int)(Complex Double)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyComplexCArrayToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy CArray of floats to image\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyFCArrayToImage",
          "package": "CV",
          "signature": "CArray (Int, Int) Float -\u003e Image GrayScale D32",
          "source": "src/CV-Conversions.html#copyFCArrayToImage",
          "type": "function"
        },
        "index": {
          "description": "Copy CArray of floats to image",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyFCArrayToImage",
          "normalized": "CArray(Int,Int)Float-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "FCArray To Image",
          "signature": "CArray(Int,Int)Float-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyFCArrayToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of a CV.Image into a CArray.\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyImageToCArray",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e CArray (Int, Int) Double",
          "source": "src/CV-Conversions.html#copyImageToCArray",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of CV.Image into CArray",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyImageToCArray",
          "normalized": "Image GrayScale D-\u003eCArray(Int,Int)Double",
          "package": "CV",
          "partial": "Image To CArray",
          "signature": "Image GrayScale D-\u003eCArray(Int,Int)Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyImageToCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy image as a real part of a complex CArray\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyImageToComplexCArray",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e CArray (Int, Int) (Complex Double)",
          "source": "src/CV-Conversions.html#copyImageToComplexCArray",
          "type": "function"
        },
        "index": {
          "description": "Copy image as real part of complex CArray",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyImageToComplexCArray",
          "normalized": "Image GrayScale D-\u003eCArray(Int,Int)(Complex Double)",
          "package": "CV",
          "partial": "Image To Complex CArray",
          "signature": "Image GrayScale D-\u003eCArray(Int,Int)(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyImageToComplexCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of CV.Image into a pre-existing CArray.\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyImageToExistingCArray",
          "package": "CV",
          "signature": "Image t t1 -\u003e CArray i Double -\u003e IO ()",
          "source": "src/CV-Conversions.html#copyImageToExistingCArray",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of CV.Image into pre-existing CArray",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyImageToExistingCArray",
          "normalized": "Image a a-\u003eCArray b Double-\u003eIO()",
          "package": "CV",
          "partial": "Image To Existing CArray",
          "signature": "Image t t-\u003eCArray i Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyImageToExistingCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy D32 grayscale image to CArray\n\u003c/p\u003e",
          "module": "CV.Conversions",
          "name": "copyImageToFCArray",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e CArray (Int, Int) Float",
          "source": "src/CV-Conversions.html#copyImageToFCArray",
          "type": "function"
        },
        "index": {
          "description": "Copy D32 grayscale image to CArray",
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "copyImageToFCArray",
          "normalized": "Image GrayScale D-\u003eCArray(Int,Int)Float",
          "package": "CV",
          "partial": "Image To FCArray",
          "signature": "Image GrayScale D-\u003eCArray(Int,Int)Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:copyImageToFCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Conversions",
          "name": "unsafe8UC_BGRFromPtr",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Ptr Word8 -\u003e IO (Image RGB D8)",
          "source": "src/CV-Conversions.html#unsafe8UC_BGRFromPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "unsafe8UC_BGRFromPtr",
          "normalized": "(Int,Int)-\u003ePtr Word-\u003eIO(Image RGB D)",
          "package": "CV",
          "partial": "UC BGRFrom Ptr",
          "signature": "(Int,Int)-\u003ePtr Word-\u003eIO(Image RGB D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:unsafe8UC_BGRFromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Conversions",
          "name": "unsafe8UC_RGBFromPtr",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Ptr Word8 -\u003e IO (Image RGB D8)",
          "source": "src/CV-Conversions.html#unsafe8UC_RGBFromPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Conversions",
          "module": "CV.Conversions",
          "name": "unsafe8UC_RGBFromPtr",
          "normalized": "(Int,Int)-\u003ePtr Word-\u003eIO(Image RGB D)",
          "package": "CV",
          "partial": "UC RGBFrom Ptr",
          "signature": "(Int,Int)-\u003ePtr Word-\u003eIO(Image RGB D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Conversions.html#v:unsafe8UC_RGBFromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "Corners",
          "package": "CV",
          "source": "src/CV-Corners.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "Corners",
          "package": "CV",
          "partial": "Corners",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "Corner",
          "package": "CV",
          "source": "src/CV-Corners.html#Corner",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "Corner",
          "package": "CV",
          "partial": "Corner",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#t:Corner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "HarrisDesc",
          "package": "CV",
          "source": "src/CV-Corners.html#HarrisDesc",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "HarrisDesc",
          "package": "CV",
          "partial": "Harris Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#t:HarrisDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "ImageWithCorners",
          "package": "CV",
          "source": "src/CV-Corners.html#ImageWithCorners",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "ImageWithCorners",
          "package": "CV",
          "partial": "Image With Corners",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#t:ImageWithCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "Corner",
          "package": "CV",
          "signature": "Corner",
          "source": "src/CV-Corners.html#Corner",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "Corner",
          "package": "CV",
          "partial": "Corner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:Corner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "ImageWithCorners",
          "package": "CV",
          "signature": "ImageWithCorners",
          "source": "src/CV-Corners.html#ImageWithCorners",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "ImageWithCorners",
          "package": "CV",
          "partial": "Image With Corners",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:ImageWithCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "corners",
          "package": "CV",
          "signature": "[Corner d]",
          "source": "src/CV-Corners.html#ImageWithCorners",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "corners",
          "normalized": "[Corner a]",
          "package": "CV",
          "signature": "[Corner d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "desc",
          "package": "CV",
          "signature": "d",
          "source": "src/CV-Corners.html#Corner",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "desc",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "harris",
          "package": "CV",
          "signature": "Int -\u003e Int -\u003e Double -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Corners.html#harris",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "harris",
          "normalized": "Int-\u003eInt-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Int-\u003eInt-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:harris"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "harrisCorners",
          "package": "CV",
          "signature": "Float -\u003e Image GrayScale D32 -\u003e ImageWithCorners HarrisDesc",
          "source": "src/CV-Corners.html#harrisCorners",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "harrisCorners",
          "normalized": "Float-\u003eImage GrayScale D-\u003eImageWithCorners HarrisDesc",
          "package": "CV",
          "partial": "Corners",
          "signature": "Float-\u003eImage GrayScale D-\u003eImageWithCorners HarrisDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:harrisCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "image",
          "package": "CV",
          "signature": "Image GrayScale D32",
          "source": "src/CV-Corners.html#ImageWithCorners",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "image",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Corners",
          "name": "pos",
          "package": "CV",
          "signature": "(Int, Int)",
          "source": "src/CV-Corners.html#Corner",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Corners",
          "module": "CV.Corners",
          "name": "pos",
          "normalized": "(Int,Int)",
          "package": "CV",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Corners.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DFT",
          "name": "DFT",
          "package": "CV",
          "source": "src/CV-DFT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV DFT",
          "module": "CV.DFT",
          "name": "DFT",
          "package": "CV",
          "partial": "DFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DFT",
          "name": "complexSplit",
          "package": "CV",
          "signature": "Image Complex D32 -\u003e (Image GrayScale D32, Image GrayScale D32)",
          "source": "src/CV-DFT.html#complexSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV DFT",
          "module": "CV.DFT",
          "name": "complexSplit",
          "normalized": "Image Complex D-\u003e(Image GrayScale D,Image GrayScale D)",
          "package": "CV",
          "partial": "Split",
          "signature": "Image Complex D-\u003e(Image GrayScale D,Image GrayScale D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DFT.html#v:complexSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DFT",
          "name": "complexToMagnitude",
          "package": "CV",
          "signature": "Image Complex D32 -\u003e Image GrayScale D32",
          "source": "src/CV-DFT.html#complexToMagnitude",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV DFT",
          "module": "CV.DFT",
          "name": "complexToMagnitude",
          "normalized": "Image Complex D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "To Magnitude",
          "signature": "Image Complex D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DFT.html#v:complexToMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DFT",
          "name": "dft",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image Complex D32",
          "source": "src/CV-DFT.html#dft",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV DFT",
          "module": "CV.DFT",
          "name": "dft",
          "normalized": "Image GrayScale a-\u003eImage Complex D",
          "package": "CV",
          "signature": "Image GrayScale d-\u003eImage Complex D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DFT.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DFT",
          "name": "idft",
          "package": "CV",
          "signature": "Image Complex D32 -\u003e Image GrayScale D32",
          "source": "src/CV-DFT.html#idft",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV DFT",
          "module": "CV.DFT",
          "name": "idft",
          "normalized": "Image Complex D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image Complex D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DFT.html#v:idft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.DrawableInstances",
          "name": "DrawableInstances",
          "package": "CV",
          "source": "src/CV-DrawableInstances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV DrawableInstances",
          "module": "CV.DrawableInstances",
          "name": "DrawableInstances",
          "package": "CV",
          "partial": "Drawable Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-DrawableInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for exposing opencv drawing functions. These are meant for quick and dirty marking\n   and not for anything presentable. For any real drawing\n   you should figure out how to use cairo or related package, such as diagrams. They are\n   way better.\n\u003c/p\u003e\u003cp\u003eConsult the \u003ca\u003eCV.ImageOp\u003c/a\u003e module for functions to apply the operations in this module to images.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Drawing",
          "name": "Drawing",
          "package": "CV",
          "source": "src/CV-Drawing.html",
          "type": "module"
        },
        "index": {
          "description": "Module for exposing opencv drawing functions These are meant for quick and dirty marking and not for anything presentable For any real drawing you should figure out how to use cairo or related package such as diagrams They are way better Consult the CV.ImageOp module for functions to apply the operations in this module to images",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "Drawing",
          "package": "CV",
          "partial": "Drawing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for images that support elementary drawing operations.\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "Drawable",
          "package": "CV",
          "source": "src/CV-Drawing.html#Drawable",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for images that support elementary drawing operations",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "Drawable",
          "package": "CV",
          "partial": "Drawable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#t:Drawable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the shape filled or just a boundary?\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "ShapeStyle",
          "package": "CV",
          "source": "src/CV-Drawing.html#ShapeStyle",
          "type": "data"
        },
        "index": {
          "description": "Is the shape filled or just boundary",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "ShapeStyle",
          "package": "CV",
          "partial": "Shape Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#t:ShapeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Drawing",
          "name": "Filled",
          "package": "CV",
          "signature": "Filled",
          "source": "src/CV-Drawing.html#ShapeStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "Filled",
          "package": "CV",
          "partial": "Filled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:Filled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Drawing",
          "name": "Stroked",
          "package": "CV",
          "signature": "Stroked Int",
          "source": "src/CV-Drawing.html#ShapeStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "Stroked",
          "package": "CV",
          "partial": "Stroked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:Stroked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply circleOp to an image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "circle",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Int -\u003e Color c d -\u003e ShapeStyle -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Drawing.html#circle",
          "type": "function"
        },
        "index": {
          "description": "Apply circleOp to an image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "circle",
          "normalized": "(Int,Int)-\u003eInt-\u003eColor a b-\u003eShapeStyle-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int)-\u003eInt-\u003eColor c d-\u003eShapeStyle-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Draw a Circle\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "circleOp",
          "package": "CV",
          "signature": "Color a b -\u003e (Int, Int) -\u003e Int -\u003e ShapeStyle -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#circleOp",
          "type": "method"
        },
        "index": {
          "description": "Draw Circle",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "circleOp",
          "normalized": "Color a b-\u003e(Int,Int)-\u003eInt-\u003eShapeStyle-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "Color a b-\u003e(Int,Int)-\u003eInt-\u003eShapeStyle-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:circleOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Draw C'CvBox2D\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "drawBox2Dop",
          "package": "CV",
          "signature": "Color c d -\u003e C'CvBox2D -\u003e ImageOperation c d",
          "source": "src/CV-Drawing.html#drawBox2Dop",
          "type": "function"
        },
        "index": {
          "description": "Draw CvBox2D",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "drawBox2Dop",
          "normalized": "Color a b-\u003eC'CvBox D-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Box Dop",
          "signature": "Color c d-\u003eC'CvBox D-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:drawBox2Dop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Apply drawLinesOp to an image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "drawLines",
          "package": "CV",
          "signature": "Image c d -\u003e Color c d -\u003e Int -\u003e [((Int, Int), (Int, Int))] -\u003e IO (Image c d)",
          "source": "src/CV-Drawing.html#drawLines",
          "type": "function"
        },
        "index": {
          "description": "Apply drawLinesOp to an image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "drawLines",
          "normalized": "Image a b-\u003eColor a b-\u003eInt-\u003e[((Int,Int),(Int,Int))]-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Lines",
          "signature": "Image c d-\u003eColor c d-\u003eInt-\u003e[((Int,Int),(Int,Int))]-\u003eIO(Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:drawLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a line segments\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "drawLinesOp",
          "package": "CV",
          "signature": "Color c d -\u003e Int -\u003e [((Int, Int), (Int, Int))] -\u003e ImageOperation c d",
          "source": "src/CV-Drawing.html#drawLinesOp",
          "type": "function"
        },
        "index": {
          "description": "Draw line segments",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "drawLinesOp",
          "normalized": "Color a b-\u003eInt-\u003e[((Int,Int),(Int,Int))]-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Lines Op",
          "signature": "Color c d-\u003eInt-\u003e[((Int,Int),(Int,Int))]-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:drawLinesOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a polyline\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "drawPolyLineOp",
          "package": "CV",
          "signature": "Color c d -\u003e Int -\u003e [(Int, Int)] -\u003e ImageOperation c d",
          "source": "src/CV-Drawing.html#drawPolyLineOp",
          "type": "function"
        },
        "index": {
          "description": "Draw polyline",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "drawPolyLineOp",
          "normalized": "Color a b-\u003eInt-\u003e[(Int,Int)]-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Poly Line Op",
          "signature": "Color c d-\u003eInt-\u003e[(Int,Int)]-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:drawPolyLineOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Drawing",
          "name": "ellipseBoxOp",
          "package": "CV",
          "signature": "Color a b -\u003e C'CvBox2D -\u003e Int -\u003e Int -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#ellipseBoxOp",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "ellipseBoxOp",
          "normalized": "Color a b-\u003eC'CvBox D-\u003eInt-\u003eInt-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Box Op",
          "signature": "Color a b-\u003eC'CvBox D-\u003eInt-\u003eInt-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:ellipseBoxOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an ellipse or elliptic arc\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "ellipseOp",
          "package": "CV",
          "signature": "Color a b -\u003e Int -\u003e (Int, Int) -\u003e (Int, Int) -\u003e Float -\u003e (Float, Float) -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#ellipseOp",
          "type": "method"
        },
        "index": {
          "description": "Draw an ellipse or elliptic arc",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "ellipseOp",
          "normalized": "Color a b-\u003eInt-\u003e(Int,Int)-\u003e(Int,Int)-\u003eFloat-\u003e(Float,Float)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "Color a b-\u003eInt-\u003e(Int,Int)-\u003e(Int,Int)-\u003eFloat-\u003e(Float,Float)-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:ellipseOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlood fill a region of the image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "fillOp",
          "package": "CV",
          "signature": "(Int, Int) -\u003e D32 -\u003e D32 -\u003e D32 -\u003e Bool -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Drawing.html#fillOp",
          "type": "function"
        },
        "index": {
          "description": "Flood fill region of the image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "fillOp",
          "normalized": "(Int,Int)-\u003eD-\u003eD-\u003eD-\u003eBool-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "(Int,Int)-\u003eD-\u003eD-\u003eD-\u003eBool-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:fillOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply fillPolyOp to an image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "fillPoly",
          "package": "CV",
          "signature": "Color c d -\u003e [(Int, Int)] -\u003e Image c d -\u003e IO (Image c d)",
          "source": "src/CV-Drawing.html#fillPoly",
          "type": "function"
        },
        "index": {
          "description": "Apply fillPolyOp to an image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "fillPoly",
          "normalized": "Color a b-\u003e[(Int,Int)]-\u003eImage a b-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Poly",
          "signature": "Color c d-\u003e[(Int,Int)]-\u003eImage c d-\u003eIO(Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:fillPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Draw a filled polygon\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "fillPolyOp",
          "package": "CV",
          "signature": "Color a b -\u003e [(Int, Int)] -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#fillPolyOp",
          "type": "method"
        },
        "index": {
          "description": "Draw filled polygon",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "fillPolyOp",
          "normalized": "Color a b-\u003e[(Int,Int)]-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Poly Op",
          "signature": "Color a b-\u003e[(Int,Int)]-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:fillPolyOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Apply fillOp to an image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "floodfill",
          "package": "CV",
          "signature": "(Int, Int) -\u003e D32 -\u003e D32 -\u003e D32 -\u003e Bool -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Drawing.html#floodfill",
          "type": "function"
        },
        "index": {
          "description": "Apply fillOp to an image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "floodfill",
          "normalized": "(Int,Int)-\u003eD-\u003eD-\u003eD-\u003eBool-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eD-\u003eD-\u003eD-\u003eBool-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:floodfill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Draw a line between two points.\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "lineOp",
          "package": "CV",
          "signature": "Color a b -\u003e Int -\u003e (Int, Int) -\u003e (Int, Int) -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#lineOp",
          "type": "method"
        },
        "index": {
          "description": "Draw line between two points",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "lineOp",
          "normalized": "Color a b-\u003eInt-\u003e(Int,Int)-\u003e(Int,Int)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "Color a b-\u003eInt-\u003e(Int,Int)-\u003e(Int,Int)-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:lineOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Put text of certain color to given coordinates. Good size seems to be around 0.5-1.5.\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "putTextOp",
          "package": "CV",
          "signature": "Color a b -\u003e Float -\u003e String -\u003e (Int, Int) -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#putTextOp",
          "type": "method"
        },
        "index": {
          "description": "Put text of certain color to given coordinates Good size seems to be around",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "putTextOp",
          "normalized": "Color a b-\u003eFloat-\u003eString-\u003e(Int,Int)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Text Op",
          "signature": "Color a b-\u003eFloat-\u003eString-\u003e(Int,Int)-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:putTextOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a Rectangle by supplying two corners\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "rectOp",
          "package": "CV",
          "signature": "Color a b -\u003e Int -\u003e bb -\u003e ImageOperation a b",
          "source": "src/CV-Drawing.html#rectOp",
          "type": "method"
        },
        "index": {
          "description": "Draw Rectangle by supplying two corners",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "rectOp",
          "normalized": "Color a b-\u003eInt-\u003ec-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "Color a b-\u003eInt-\u003ebb-\u003eImageOperation a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:rectOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply rectOp to an image\n\u003c/p\u003e",
          "module": "CV.Drawing",
          "name": "rectangle",
          "package": "CV",
          "signature": "Color c d -\u003e Int -\u003e bb -\u003e Image c d -\u003e IO (Image c d)",
          "source": "src/CV-Drawing.html#rectangle",
          "type": "function"
        },
        "index": {
          "description": "Apply rectOp to an image",
          "hierarchy": "CV Drawing",
          "module": "CV.Drawing",
          "name": "rectangle",
          "normalized": "Color a b-\u003eInt-\u003ec-\u003eImage a b-\u003eIO(Image a b)",
          "package": "CV",
          "signature": "Color c d-\u003eInt-\u003ebb-\u003eImage c d-\u003eIO(Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Drawing.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e&#160;This module is a collection of simple edge detectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Edges",
          "name": "Edges",
          "package": "CV",
          "source": "src/CV-Edges.html",
          "type": "module"
        },
        "index": {
          "description": "This module is collection of simple edge detectors",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "Edges",
          "package": "CV",
          "partial": "Edges",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAperture sizes for laplacian operator\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "LaplacianAperture",
          "package": "CV",
          "source": "src/CV-Edges.html#LaplacianAperture",
          "type": "data"
        },
        "index": {
          "description": "Aperture sizes for laplacian operator",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "LaplacianAperture",
          "package": "CV",
          "partial": "Laplacian Aperture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#t:LaplacianAperture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAperture sizes for sobel operator\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "SobelAperture",
          "package": "CV",
          "source": "src/CV-Edges.html#SobelAperture",
          "type": "data"
        },
        "index": {
          "description": "Aperture sizes for sobel operator",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "SobelAperture",
          "package": "CV",
          "partial": "Sobel Aperture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#t:SobelAperture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform canny thresholding using two threshold values and given aperture\n  Works only on 8-bit images\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "canny",
          "package": "CV",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Image GrayScale D8 -\u003e Image GrayScale D8",
          "source": "src/CV-Edges.html#canny",
          "type": "function"
        },
        "index": {
          "description": "Perform canny thresholding using two threshold values and given aperture Works only on bit images",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "canny",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Int-\u003eInt-\u003eInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:canny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "l1",
          "package": "CV",
          "signature": "LaplacianAperture",
          "source": "src/CV-Edges.html#l1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "l1",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:l1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "l3",
          "package": "CV",
          "signature": "LaplacianAperture",
          "source": "src/CV-Edges.html#l3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "l3",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:l3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "l5",
          "package": "CV",
          "signature": "LaplacianAperture",
          "source": "src/CV-Edges.html#l5",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "l5",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:l5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "l7",
          "package": "CV",
          "signature": "LaplacianAperture",
          "source": "src/CV-Edges.html#l7",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "l7",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:l7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "laplace",
          "package": "CV",
          "signature": "LaplacianAperture -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Edges.html#laplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "laplace",
          "normalized": "LaplacianAperture-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "LaplacianAperture-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:laplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform laplacian filtering of given aperture to image\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "laplaceOp",
          "package": "CV",
          "signature": "LaplacianAperture -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Edges.html#laplaceOp",
          "type": "function"
        },
        "index": {
          "description": "Perform laplacian filtering of given aperture to image",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "laplaceOp",
          "normalized": "LaplacianAperture-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "LaplacianAperture-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:laplaceOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "s1",
          "package": "CV",
          "signature": "SobelAperture",
          "source": "src/CV-Edges.html#s1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "s1",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:s1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "s3",
          "package": "CV",
          "signature": "SobelAperture",
          "source": "src/CV-Edges.html#s3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "s3",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:s3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "s5",
          "package": "CV",
          "signature": "SobelAperture",
          "source": "src/CV-Edges.html#s5",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "s5",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:s5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "s7",
          "package": "CV",
          "signature": "SobelAperture",
          "source": "src/CV-Edges.html#s7",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "s7",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:s7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Use Scharr mask instead\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "sScharr",
          "package": "CV",
          "signature": "SobelAperture",
          "source": "src/CV-Edges.html#sScharr",
          "type": "function"
        },
        "index": {
          "description": "Use Scharr mask instead",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "sScharr",
          "package": "CV",
          "partial": "Scharr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:sScharr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Edges",
          "name": "sobel",
          "package": "CV",
          "signature": "(Int, Int) -\u003e SobelAperture -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Edges.html#sobel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "sobel",
          "normalized": "(Int,Int)-\u003eSobelAperture-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eSobelAperture-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:sobel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Sobel filtering on image. First argument gives order of horizontal and vertical\n   derivative estimates and second one is the aperture. This function can also calculate\n   Scharr filter with aperture specification of sScharr\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "sobelOp",
          "package": "CV",
          "signature": "(Int, Int) -\u003e SobelAperture -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Edges.html#sobelOp",
          "type": "function"
        },
        "index": {
          "description": "Perform Sobel filtering on image First argument gives order of horizontal and vertical derivative estimates and second one is the aperture This function can also calculate Scharr filter with aperture specification of sScharr",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "sobelOp",
          "normalized": "(Int,Int)-\u003eSobelAperture-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "(Int,Int)-\u003eSobelAperture-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:sobelOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSUSAN edge detection filter, see \u003ca\u003ehttp://users.fmrib.ox.ac.uk/~steve/susan/susan/susan.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "CV.Edges",
          "name": "susan",
          "package": "CV",
          "signature": "(Int, Int) -\u003e D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-Edges.html#susan",
          "type": "function"
        },
        "index": {
          "description": "SUSAN edge detection filter see http users.fmrib.ox.ac.uk steve susan susan susan.html",
          "hierarchy": "CV Edges",
          "module": "CV.Edges",
          "name": "susan",
          "normalized": "(Int,Int)-\u003eD-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eD-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Edges.html#v:susan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "Features",
          "package": "CV",
          "source": "src/CV-Features.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "Features",
          "package": "CV",
          "partial": "Features",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "MSERParams",
          "package": "CV",
          "source": "src/CV-Features.html#MSERParams",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "MSERParams",
          "package": "CV",
          "partial": "MSERParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#t:MSERParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "Moments",
          "package": "CV",
          "source": "src/CV-Features.html#Moments",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "Moments",
          "package": "CV",
          "partial": "Moments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#t:Moments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for SURF feature extraction\n\u003c/p\u003e",
          "module": "CV.Features",
          "name": "SURFParams",
          "package": "CV",
          "source": "src/CV-Features.html#SURFParams",
          "type": "data"
        },
        "index": {
          "description": "Parameters for SURF feature extraction",
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "SURFParams",
          "package": "CV",
          "partial": "SURFParams",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#t:SURFParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "defaultMSERParams",
          "package": "CV",
          "signature": "MSERParams",
          "source": "src/CV-Features.html#defaultMSERParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "defaultMSERParams",
          "package": "CV",
          "partial": "MSERParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:defaultMSERParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault parameters for getSURF\n\u003c/p\u003e",
          "module": "CV.Features",
          "name": "defaultSURFParams",
          "package": "CV",
          "signature": "SURFParams",
          "source": "src/CV-Features.html#defaultSURFParams",
          "type": "function"
        },
        "index": {
          "description": "Default parameters for getSURF",
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "defaultSURFParams",
          "package": "CV",
          "partial": "SURFParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:defaultSURFParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "getCentralMoment",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Moments -\u003e Double",
          "source": "src/CV-Features.html#getCentralMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "getCentralMoment",
          "normalized": "(Int,Int)-\u003eMoments-\u003eDouble",
          "package": "CV",
          "partial": "Central Moment",
          "signature": "(Int,Int)-\u003eMoments-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:getCentralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function encapsulates all the parameters of the MSER extraction algorithm (see\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Maximally_stable_extremal_regions\u003c/a\u003e\n\u003c/p\u003e",
          "module": "CV.Features",
          "name": "getMSER",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Maybe (Image GrayScale D8) -\u003e MSERParams -\u003e [[a]]",
          "source": "src/CV-Features.html#getMSER",
          "type": "function"
        },
        "index": {
          "description": "The function encapsulates all the parameters of the MSER extraction algorithm see http en.wikipedia.org wiki Maximally stable extremal regions",
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "getMSER",
          "normalized": "Image GrayScale D-\u003eMaybe(Image GrayScale D)-\u003eMSERParams-\u003e[[a]]",
          "package": "CV",
          "partial": "MSER",
          "signature": "Image GrayScale D-\u003eMaybe(Image GrayScale D)-\u003eMSERParams-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:getMSER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "getNormalizedCentralMoment",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Moments -\u003e Double",
          "source": "src/CV-Features.html#getNormalizedCentralMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "getNormalizedCentralMoment",
          "normalized": "(Int,Int)-\u003eMoments-\u003eDouble",
          "package": "CV",
          "partial": "Normalized Central Moment",
          "signature": "(Int,Int)-\u003eMoments-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:getNormalizedCentralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract Speeded Up Robust Features from an image.\n\u003c/p\u003e",
          "module": "CV.Features",
          "name": "getSURF",
          "package": "CV",
          "signature": "SURFParams-\u003e Image GrayScale D8-\u003e Maybe (Image GrayScale D8)-\u003e [(C'CvSURFPoint, [Float])]",
          "type": "function"
        },
        "index": {
          "description": "Extract Speeded Up Robust Features from an image",
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "getSURF",
          "normalized": "SURFParams-\u003eImage GrayScale D-\u003eMaybe(Image GrayScale D)-\u003e[(C'CvSURFPoint,[Float])]",
          "package": "CV",
          "partial": "SURF",
          "signature": "SURFParams-\u003eImage GrayScale D-\u003eMaybe(Image GrayScale D)-\u003e[(C'CvSURFPoint,[Float])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:getSURF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "getSpatialMoment",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Moments -\u003e Double",
          "source": "src/CV-Features.html#getSpatialMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "getSpatialMoment",
          "normalized": "(Int,Int)-\u003eMoments-\u003eDouble",
          "package": "CV",
          "partial": "Spatial Moment",
          "signature": "(Int,Int)-\u003eMoments-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:getSpatialMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate parameters for getMSER.\n\u003c/p\u003e",
          "module": "CV.Features",
          "name": "mkMSERParams",
          "package": "CV",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Float-\u003e Float-\u003e Int-\u003e Double-\u003e Double-\u003e Int-\u003e MSERParams",
          "type": "function"
        },
        "index": {
          "description": "Create parameters for getMSER",
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "mkMSERParams",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eFloat-\u003eFloat-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eMSERParams",
          "package": "CV",
          "partial": "MSERParams",
          "signature": "Int-\u003eInt-\u003eInt-\u003eFloat-\u003eFloat-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eMSERParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:mkMSERParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "mkSURFParams",
          "package": "CV",
          "signature": "Double-\u003e Int-\u003e Int-\u003e Bool-\u003e SURFParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "mkSURFParams",
          "normalized": "Double-\u003eInt-\u003eInt-\u003eBool-\u003eSURFParams",
          "package": "CV",
          "partial": "SURFParams",
          "signature": "Double-\u003eInt-\u003eInt-\u003eBool-\u003eSURFParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:mkSURFParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Features",
          "name": "moments",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Moments",
          "source": "src/CV-Features.html#moments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Features",
          "module": "CV.Features",
          "name": "moments",
          "normalized": "Image GrayScale D-\u003eMoments",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eMoments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Features.html#v:moments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Files",
          "name": "Files",
          "package": "CV",
          "source": "src/CV-Files.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Files",
          "module": "CV.Files",
          "name": "Files",
          "package": "CV",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Files",
          "name": "calcDerivativeDirection",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Files.html#calcDerivativeDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Files",
          "module": "CV.Files",
          "name": "calcDerivativeDirection",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Derivative Direction",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Files.html#v:calcDerivativeDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Files",
          "name": "readFromTcr",
          "package": "CV",
          "signature": "String -\u003e Image GrayScale D32",
          "source": "src/CV-Files.html#readFromTcr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Files",
          "module": "CV.Files",
          "name": "readFromTcr",
          "normalized": "String-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "From Tcr",
          "signature": "String-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Files.html#v:readFromTcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Files",
          "name": "readFromTcrMag",
          "package": "CV",
          "signature": "String -\u003e Image GrayScale D32",
          "source": "src/CV-Files.html#readFromTcrMag",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Files",
          "module": "CV.Files",
          "name": "readFromTcrMag",
          "normalized": "String-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "From Tcr Mag",
          "signature": "String-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Files.html#v:readFromTcrMag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Files",
          "name": "readFromTcrRectified",
          "package": "CV",
          "signature": "String -\u003e Image GrayScale D32",
          "source": "src/CV-Files.html#readFromTcrRectified",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Files",
          "module": "CV.Files",
          "name": "readFromTcrRectified",
          "normalized": "String-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "From Tcr Rectified",
          "signature": "String-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Files.html#v:readFromTcrRectified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a collection of various image filters\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Filters",
          "name": "Filters",
          "package": "CV",
          "source": "src/CV-Filters.html",
          "type": "module"
        },
        "index": {
          "description": "This module is collection of various image filters",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "Filters",
          "package": "CV",
          "partial": "Filters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "HasMedianFiltering",
          "package": "CV",
          "source": "src/CV-Filters.html#HasMedianFiltering",
          "type": "class"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "HasMedianFiltering",
          "package": "CV",
          "partial": "Has Median Filtering",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#t:HasMedianFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;A type for storing integral images. Integral image stores for every pixel the sum of pixels\n   above and left of it. Such images are used for significantly accelerating the calculation of\n   area averages. \n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "IntegralImage",
          "package": "CV",
          "source": "src/CV-Filters.html#IntegralImage",
          "type": "data"
        },
        "index": {
          "description": "type for storing integral images Integral image stores for every pixel the sum of pixels above and left of it Such images are used for significantly accelerating the calculation of area averages",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "IntegralImage",
          "package": "CV",
          "partial": "Integral Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#t:IntegralImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply bilateral filtering \n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "bilateral",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Image a D8 -\u003e Image a D8",
          "source": "src/CV-Filters.html#bilateral",
          "type": "function"
        },
        "index": {
          "description": "Apply bilateral filtering",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "bilateral",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eImage a D-\u003eImage a D",
          "package": "CV",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eImage a D-\u003eImage a D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:bilateral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new image by applying gaussian, or uniform smoothing.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "blur",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#blur",
          "type": "function"
        },
        "index": {
          "description": "Create new image by applying gaussian or uniform smoothing",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "blur",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:blur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new image by applying gaussian, or uniform smoothing.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "blurNS",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#blurNS",
          "type": "function"
        },
        "index": {
          "description": "Create new image by applying gaussian or uniform smoothing",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "blurNS",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "NS",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:blurNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage operation which applies gaussian or unifarm smoothing with a given window size to the image.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "blurOp",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Filters.html#blurOp",
          "type": "function"
        },
        "index": {
          "description": "Image operation which applies gaussian or unifarm smoothing with given window size to the image",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "blurOp",
          "normalized": "(Int,Int)-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "(Int,Int)-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:blurOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "convolve2D",
          "package": "CV",
          "signature": "Matrix D32 -\u003e anchor -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#convolve2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "convolve2D",
          "normalized": "Matrix D-\u003ea-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Matrix D-\u003eanchor-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:convolve2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "convolve2DI",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e Image c1 d1 -\u003e Image c d -\u003e Image channels depth",
          "source": "src/CV-Filters.html#convolve2DI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "convolve2DI",
          "normalized": "(CInt,CInt)-\u003eImage a b-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "DI",
          "signature": "(CInt,CInt)-\u003eImage c d-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:convolve2DI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new image by applying gaussian, or uniform smoothing.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "gaussian",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#gaussian",
          "type": "function"
        },
        "index": {
          "description": "Create new image by applying gaussian or uniform smoothing",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "gaussian",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage operation which applies gaussian or unifarm smoothing with a given window size to the image.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "gaussianOp",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Filters.html#gaussianOp",
          "type": "function"
        },
        "index": {
          "description": "Image operation which applies gaussian or unifarm smoothing with given window size to the image",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "gaussianOp",
          "normalized": "(Int,Int)-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "(Int,Int)-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:gaussianOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "getAbsCentralMoment",
          "package": "CV",
          "signature": "CInt -\u003e (CInt, CInt) -\u003e Image c d -\u003e Image channels depth",
          "source": "src/CV-Filters.html#getAbsCentralMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "getAbsCentralMoment",
          "normalized": "CInt-\u003e(CInt,CInt)-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "Abs Central Moment",
          "signature": "CInt-\u003e(CInt,CInt)-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:getAbsCentralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "getCentralMoment",
          "package": "CV",
          "signature": "CInt -\u003e (CInt, CInt) -\u003e Image c d -\u003e Image channels depth",
          "source": "src/CV-Filters.html#getCentralMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "getCentralMoment",
          "normalized": "CInt-\u003e(CInt,CInt)-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "Central Moment",
          "signature": "CInt-\u003e(CInt,CInt)-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:getCentralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "getMoment",
          "package": "CV",
          "signature": "CInt -\u003e (CInt, CInt) -\u003e Image c d -\u003e Image channels depth",
          "source": "src/CV-Filters.html#getMoment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "getMoment",
          "normalized": "CInt-\u003e(CInt,CInt)-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "Moment",
          "signature": "CInt-\u003e(CInt,CInt)-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:getMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the image with box shaped averaging mask.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "haar",
          "package": "CV",
          "signature": "IntegralImage -\u003e (Int, Int, Int, Int) -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#haar",
          "type": "function"
        },
        "index": {
          "description": "Filter the image with box shaped averaging mask",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "haar",
          "normalized": "IntegralImage-\u003e(Int,Int,Int,Int)-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "IntegralImage-\u003e(Int,Int,Int,Int)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:haar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an average of a given region.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "haarAt",
          "package": "CV",
          "signature": "IntegralImage -\u003e (Int, Int, Int, Int) -\u003e Double",
          "source": "src/CV-Filters.html#haarAt",
          "type": "function"
        },
        "index": {
          "description": "Get an average of given region",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "haarAt",
          "normalized": "IntegralImage-\u003e(Int,Int,Int,Int)-\u003eDouble",
          "package": "CV",
          "partial": "At",
          "signature": "IntegralImage-\u003e(Int,Int,Int,Int)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:haarAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Calculate the integral image from the given image.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "integralImage",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e IntegralImage",
          "source": "src/CV-Filters.html#integralImage",
          "type": "function"
        },
        "index": {
          "description": "Calculate the integral image from the given image",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "integralImage",
          "normalized": "Image GrayScale D-\u003eIntegralImage",
          "package": "CV",
          "partial": "Image",
          "signature": "Image GrayScale D-\u003eIntegralImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:integralImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "median",
          "package": "CV",
          "signature": "(Int, Int) -\u003e a -\u003e a",
          "source": "src/CV-Filters.html#median",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "median",
          "normalized": "(Int,Int)-\u003ea-\u003ea",
          "package": "CV",
          "signature": "(Int,Int)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "secondMomentAdaptiveBinarize",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e CDouble -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Filters.html#secondMomentAdaptiveBinarize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "secondMomentAdaptiveBinarize",
          "normalized": "CInt-\u003eCInt-\u003eCDouble-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Moment Adaptive Binarize",
          "signature": "CInt-\u003eCInt-\u003eCDouble-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:secondMomentAdaptiveBinarize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "secondMomentAdaptiveBinarizeOp",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e CDouble -\u003e ImageOperation c d",
          "source": "src/CV-Filters.html#secondMomentAdaptiveBinarizeOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "secondMomentAdaptiveBinarizeOp",
          "normalized": "CInt-\u003eCInt-\u003eCDouble-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Moment Adaptive Binarize Op",
          "signature": "CInt-\u003eCInt-\u003eCDouble-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:secondMomentAdaptiveBinarizeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "secondMomentBinarize",
          "package": "CV",
          "signature": "CDouble -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Filters.html#secondMomentBinarize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "secondMomentBinarize",
          "normalized": "CDouble-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Moment Binarize",
          "signature": "CDouble-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:secondMomentBinarize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Filters",
          "name": "secondMomentBinarizeOp",
          "package": "CV",
          "signature": "CDouble -\u003e ImageOperation c d",
          "source": "src/CV-Filters.html#secondMomentBinarizeOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "secondMomentBinarizeOp",
          "normalized": "CDouble-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Moment Binarize Op",
          "signature": "CDouble-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:secondMomentBinarizeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA selective average filter is an edge preserving noise reduction filter.\n   It is a standard gaussian filter which ignores pixel values\n   that are more than a given threshold away from the filtered pixel value.\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "selectiveAvg",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Double -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#selectiveAvg",
          "type": "function"
        },
        "index": {
          "description": "selective average filter is an edge preserving noise reduction filter It is standard gaussian filter which ignores pixel values that are more than given threshold away from the filtered pixel value",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "selectiveAvg",
          "normalized": "(Int,Int)-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Avg",
          "signature": "(Int,Int)-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:selectiveAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSUSAN adaptive smoothing filter, see \u003ca\u003ehttp://users.fmrib.ox.ac.uk/~steve/susan/susan/susan.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "susan",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Double -\u003e Double -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#susan",
          "type": "function"
        },
        "index": {
          "description": "SUSAN adaptive smoothing filter see http users.fmrib.ox.ac.uk steve susan susan susan.html",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "susan",
          "normalized": "(Int,Int)-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:susan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace pixel values by the average of the row. \n\u003c/p\u003e",
          "module": "CV.Filters",
          "name": "verticalAverage",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Filters.html#verticalAverage",
          "type": "function"
        },
        "index": {
          "description": "Replace pixel values by the average of the row",
          "hierarchy": "CV Filters",
          "module": "CV.Filters",
          "name": "verticalAverage",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Average",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Filters.html#v:verticalAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "Fitting",
          "package": "CV",
          "source": "src/CV-Fitting.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "Fitting",
          "package": "CV",
          "partial": "Fitting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "Ellipse",
          "package": "CV",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "Ellipse",
          "package": "CV",
          "partial": "Ellipse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#t:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "Ellipse",
          "package": "CV",
          "signature": "Ellipse",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "Ellipse",
          "package": "CV",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "angle",
          "package": "CV",
          "signature": "Float",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "angle",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the minimum enclosing circle of a point set.\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "boundingCircle",
          "package": "CV",
          "signature": "Matrix (Float, Float) -\u003e (a, Double)",
          "source": "src/CV-Fitting.html#boundingCircle",
          "type": "function"
        },
        "index": {
          "description": "Calculate the minimum enclosing circle of point set",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "boundingCircle",
          "normalized": "Matrix(Float,Float)-\u003e(a,Double)",
          "package": "CV",
          "partial": "Circle",
          "signature": "Matrix(Float,Float)-\u003e(a,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:boundingCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Calculate the minimum axis-aligned bounding rectangle of given points.\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "boundingRect",
          "package": "CV",
          "signature": "Matrix (Float, Float) -\u003e C'CvRect",
          "source": "src/CV-Fitting.html#boundingRect",
          "type": "function"
        },
        "index": {
          "description": "Calculate the minimum axis-aligned bounding rectangle of given points",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "boundingRect",
          "normalized": "Matrix(Float,Float)-\u003eC'CvRect",
          "package": "CV",
          "partial": "Rect",
          "signature": "Matrix(Float,Float)-\u003eC'CvRect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:boundingRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "center",
          "package": "CV",
          "signature": "(Float, Float)",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "center",
          "normalized": "(Float,Float)",
          "package": "CV",
          "signature": "(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculcate the clockwise convex hull of a point set\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "convexHull",
          "package": "CV",
          "signature": "Matrix (Float, Float) -\u003e Matrix (Float, Float)",
          "source": "src/CV-Fitting.html#convexHull",
          "type": "function"
        },
        "index": {
          "description": "Calculcate the clockwise convex hull of point set",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "convexHull",
          "normalized": "Matrix(Float,Float)-\u003eMatrix(Float,Float)",
          "package": "CV",
          "partial": "Hull",
          "signature": "Matrix(Float,Float)-\u003eMatrix(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:convexHull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate convexity defects of a contour.\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "convexityDefects",
          "package": "CV",
          "signature": "Matrix (Int, Int) -\u003e [(C'CvPoint, C'CvPoint, C'CvPoint, CFloat)]",
          "source": "src/CV-Fitting.html#convexityDefects",
          "type": "function"
        },
        "index": {
          "description": "Calculate convexity defects of contour",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "convexityDefects",
          "normalized": "Matrix(Int,Int)-\u003e[(C'CvPoint,C'CvPoint,C'CvPoint,CFloat)]",
          "package": "CV",
          "partial": "Defects",
          "signature": "Matrix(Int,Int)-\u003e[(C'CvPoint,C'CvPoint,C'CvPoint,CFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:convexityDefects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a (1,n) or (n,1) matrix of points, calculate\n (in the least squares sense) the best ellipse around the\n points\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "fitEllipse",
          "package": "CV",
          "signature": "Matrix (Float, Float) -\u003e Ellipse",
          "source": "src/CV-Fitting.html#fitEllipse",
          "type": "function"
        },
        "index": {
          "description": "Given or matrix of points calculate in the least squares sense the best ellipse around the points",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "fitEllipse",
          "normalized": "Matrix(Float,Float)-\u003eEllipse",
          "package": "CV",
          "partial": "Ellipse",
          "signature": "Matrix(Float,Float)-\u003eEllipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:fitEllipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFit a line to set of points.\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "fitLine2D",
          "package": "CV",
          "signature": "Dist -\u003e Double -\u003e Double -\u003e Double -\u003e Matrix (Float, Float) -\u003e ((Float, Float), (Float, Float))",
          "source": "src/CV-Fitting.html#fitLine2D",
          "type": "function"
        },
        "index": {
          "description": "Fit line to set of points",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "fitLine2D",
          "normalized": "Dist-\u003eDouble-\u003eDouble-\u003eDouble-\u003eMatrix(Float,Float)-\u003e((Float,Float),(Float,Float))",
          "package": "CV",
          "partial": "Line",
          "signature": "Dist-\u003eDouble-\u003eDouble-\u003eDouble-\u003eMatrix(Float,Float)-\u003e((Float,Float),(Float,Float))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:fitLine2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "height",
          "package": "CV",
          "signature": "Float",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "height",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Fit a minimum area rectangle over a set of points\n\u003c/p\u003e",
          "module": "CV.Fitting",
          "name": "minAreaRect",
          "package": "CV",
          "signature": "Matrix (Float, Float) -\u003e C'CvBox2D",
          "source": "src/CV-Fitting.html#minAreaRect",
          "type": "function"
        },
        "index": {
          "description": "Fit minimum area rectangle over set of points",
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "minAreaRect",
          "normalized": "Matrix(Float,Float)-\u003eC'CvBox D",
          "package": "CV",
          "partial": "Area Rect",
          "signature": "Matrix(Float,Float)-\u003eC'CvBox D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:minAreaRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Fitting",
          "name": "width",
          "package": "CV",
          "signature": "Float",
          "source": "src/CV-Fitting.html#Ellipse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Fitting",
          "module": "CV.Fitting",
          "name": "width",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Fitting.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "FunnyStatistics",
          "package": "CV",
          "source": "src/CV-FunnyStatistics.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "FunnyStatistics",
          "package": "CV",
          "partial": "Funny Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "pearsonSkewness1",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-FunnyStatistics.html#pearsonSkewness1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "pearsonSkewness1",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Skewness",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#v:pearsonSkewness1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "r_stdDev",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-FunnyStatistics.html#r_stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "r_stdDev",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Dev",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#v:r_stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "r_variance",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-FunnyStatistics.html#r_variance",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "r_variance",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#v:r_variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "stdDev",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-FunnyStatistics.html#stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "stdDev",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Dev",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.FunnyStatistics",
          "name": "variance",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-FunnyStatistics.html#variance",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV FunnyStatistics",
          "module": "CV.FunnyStatistics",
          "name": "variance",
          "normalized": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-FunnyStatistics.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "Gabor",
          "package": "CV",
          "source": "src/CV-Gabor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "Gabor",
          "package": "CV",
          "partial": "Gabor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "GaborMask",
          "package": "CV",
          "source": "src/CV-Gabor.html#GaborMask",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "GaborMask",
          "package": "CV",
          "partial": "Gabor Mask",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#t:GaborMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "GaborMask",
          "package": "CV",
          "signature": "GaborMask (CInt, CInt, CDouble, CDouble, CDouble, CDouble, CDouble)",
          "source": "src/CV-Gabor.html#GaborMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "GaborMask",
          "normalized": "GaborMask(CInt,CInt,CDouble,CDouble,CDouble,CDouble,CDouble)",
          "package": "CV",
          "partial": "Gabor Mask",
          "signature": "GaborMask(CInt,CInt,CDouble,CDouble,CDouble,CDouble,CDouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:GaborMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "gaborFilter",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO ()",
          "source": "src/CV-Gabor.html#gaborFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "gaborFilter",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "package": "CV",
          "partial": "Filter",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:gaborFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "gaborFiltering",
          "package": "CV",
          "signature": "GaborMask -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Gabor.html#gaborFiltering",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "gaborFiltering",
          "normalized": "GaborMask-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Filtering",
          "signature": "GaborMask-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:gaborFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "gaborImage",
          "package": "CV",
          "signature": "(Int, Int, CDouble, CDouble, CDouble, CDouble, CDouble, CDouble, CDouble) -\u003e Image GrayScale D32",
          "source": "src/CV-Gabor.html#gaborImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "gaborImage",
          "normalized": "(Int,Int,CDouble,CDouble,CDouble,CDouble,CDouble,CDouble,CDouble)-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Image",
          "signature": "(Int,Int,CDouble,CDouble,CDouble,CDouble,CDouble,CDouble,CDouble)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:gaborImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "radialGaborFilter",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO ()",
          "source": "src/CV-Gabor.html#radialGaborFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "radialGaborFilter",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "package": "CV",
          "partial": "Gabor Filter",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:radialGaborFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "radialGaborFiltering",
          "package": "CV",
          "signature": "(CInt, CInt, CDouble, CDouble, CDouble, CDouble) -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Gabor.html#radialGaborFiltering",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "radialGaborFiltering",
          "normalized": "(CInt,CInt,CDouble,CDouble,CDouble,CDouble)-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Gabor Filtering",
          "signature": "(CInt,CInt,CDouble,CDouble,CDouble,CDouble)-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:radialGaborFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "radialGaborImage",
          "package": "CV",
          "signature": "(Int, Int, CDouble, CDouble, CDouble, CDouble) -\u003e Image GrayScale D32",
          "source": "src/CV-Gabor.html#radialGaborImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "radialGaborImage",
          "normalized": "(Int,Int,CDouble,CDouble,CDouble,CDouble)-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Gabor Image",
          "signature": "(Int,Int,CDouble,CDouble,CDouble,CDouble)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:radialGaborImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "renderGabor",
          "package": "CV",
          "signature": "Ptr () -\u003e CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO ()",
          "source": "src/CV-Gabor.html#renderGabor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "renderGabor",
          "normalized": "Ptr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "package": "CV",
          "partial": "Gabor",
          "signature": "Ptr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:renderGabor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Gabor",
          "name": "renderRadialGabor",
          "package": "CV",
          "signature": "Ptr () -\u003e CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO ()",
          "source": "src/CV-Gabor.html#renderRadialGabor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Gabor",
          "module": "CV.Gabor",
          "name": "renderRadialGabor",
          "normalized": "Ptr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "package": "CV",
          "partial": "Radial Gabor",
          "signature": "Ptr()-\u003eCInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Gabor.html#v:renderRadialGabor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "HighGUI",
          "package": "CV",
          "source": "src/CV-HighGUI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "HighGUI",
          "package": "CV",
          "partial": "High GUI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "cvCreateTrackbar",
          "package": "CV",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e Ptr CInt -\u003e CInt -\u003e FunPtr (CInt -\u003e IO ()) -\u003e IO CInt",
          "source": "src/CV-HighGUI.html#cvCreateTrackbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "cvCreateTrackbar",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003ePtr CInt-\u003eCInt-\u003eFunPtr(CInt-\u003eIO())-\u003eIO CInt",
          "package": "CV",
          "partial": "Create Trackbar",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003ePtr CInt-\u003eCInt-\u003eFunPtr(CInt-\u003eIO())-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:cvCreateTrackbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "cvDestroyWindow",
          "package": "CV",
          "signature": "Ptr CChar -\u003e IO ()",
          "source": "src/CV-HighGUI.html#cvDestroyWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "cvDestroyWindow",
          "normalized": "Ptr CChar-\u003eIO()",
          "package": "CV",
          "partial": "Destroy Window",
          "signature": "Ptr CChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:cvDestroyWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "cvWaitKey",
          "package": "CV",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/CV-HighGUI.html#cvWaitKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "cvWaitKey",
          "normalized": "CInt-\u003eIO CInt",
          "package": "CV",
          "partial": "Wait Key",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:cvWaitKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "destroyWindow",
          "package": "CV",
          "signature": "String -\u003e IO ()",
          "source": "src/CV-HighGUI.html#destroyWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "destroyWindow",
          "normalized": "String-\u003eIO()",
          "package": "CV",
          "partial": "Window",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:destroyWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "display",
          "package": "CV",
          "signature": "Image c d -\u003e IO ()",
          "source": "src/CV-HighGUI.html#display",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "display",
          "normalized": "Image a b-\u003eIO()",
          "package": "CV",
          "signature": "Image c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "makeWindow",
          "package": "CV",
          "signature": "String -\u003e IO ()",
          "source": "src/CV-HighGUI.html#makeWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "makeWindow",
          "normalized": "String-\u003eIO()",
          "package": "CV",
          "partial": "Window",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:makeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "mkTrackbar",
          "package": "CV",
          "signature": "a -\u003e t -\u003e String -\u003e String -\u003e (CInt -\u003e IO ()) -\u003e IO CInt",
          "source": "src/CV-HighGUI.html#mkTrackbar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "mkTrackbar",
          "normalized": "a-\u003eb-\u003eString-\u003eString-\u003e(CInt-\u003eIO())-\u003eIO CInt",
          "package": "CV",
          "partial": "Trackbar",
          "signature": "a-\u003et-\u003eString-\u003eString-\u003e(CInt-\u003eIO())-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:mkTrackbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "mkWin",
          "package": "CV",
          "signature": "String -\u003e Int -\u003e IO ()",
          "source": "src/CV-HighGUI.html#mkWin",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "mkWin",
          "normalized": "String-\u003eInt-\u003eIO()",
          "package": "CV",
          "partial": "Win",
          "signature": "String-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:mkWin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "mkWin'_",
          "package": "CV",
          "signature": "Ptr CChar -\u003e CInt -\u003e IO CInt",
          "source": "src/CV-HighGUI.html#mkWin%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "mkWin'_",
          "normalized": "Ptr CChar-\u003eCInt-\u003eIO CInt",
          "package": "CV",
          "partial": "Win'",
          "signature": "Ptr CChar-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:mkWin-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "showImage",
          "package": "CV",
          "signature": "String -\u003e Image c d -\u003e IO ()",
          "source": "src/CV-HighGUI.html#showImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "showImage",
          "normalized": "String-\u003eImage a b-\u003eIO()",
          "package": "CV",
          "partial": "Image",
          "signature": "String-\u003eImage c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:showImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "showImage'_",
          "package": "CV",
          "signature": "Ptr CChar -\u003e Ptr () -\u003e IO ()",
          "source": "src/CV-HighGUI.html#showImage%27_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "showImage'_",
          "normalized": "Ptr CChar-\u003ePtr()-\u003eIO()",
          "package": "CV",
          "partial": "Image'",
          "signature": "Ptr CChar-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:showImage-39-_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "trackbarCallback",
          "package": "CV",
          "signature": "(CInt -\u003e IO ()) -\u003e IO (FunPtr (CInt -\u003e IO ()))",
          "source": "src/CV-HighGUI.html#trackbarCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "trackbarCallback",
          "normalized": "(CInt-\u003eIO())-\u003eIO(FunPtr(CInt-\u003eIO()))",
          "package": "CV",
          "partial": "Callback",
          "signature": "(CInt-\u003eIO())-\u003eIO(FunPtr(CInt-\u003eIO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:trackbarCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HighGUI",
          "name": "waitKey",
          "package": "CV",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/CV-HighGUI.html#waitKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HighGUI",
          "module": "CV.HighGUI",
          "name": "waitKey",
          "normalized": "CInt-\u003eIO CInt",
          "package": "CV",
          "partial": "Key",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HighGUI.html#v:waitKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "Histogram",
          "package": "CV",
          "source": "src/CV-Histogram.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "Histogram",
          "package": "CV",
          "partial": "Histogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "HistogramData",
          "package": "CV",
          "source": "src/CV-Histogram.html#HistogramData",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "HistogramData",
          "package": "CV",
          "partial": "Histogram Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#t:HistogramData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "HGD",
          "package": "CV",
          "signature": "HGD [(a, a)]",
          "source": "src/CV-Histogram.html#HistogramData",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "HGD",
          "normalized": "HGD[(a,a)]",
          "package": "CV",
          "partial": "HGD",
          "signature": "HGD[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:HGD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of images, such as the color channels of color image, and\n   a histogram with corresponding number of channels, replace the pixels of\n   the image with the likelihoods from the histogram\n\u003c/p\u003e",
          "module": "CV.Histogram",
          "name": "backProjectHistogram",
          "package": "CV",
          "signature": "[Image GrayScale D8] -\u003e Histogram -\u003e Image GrayScale D8",
          "source": "src/CV-Histogram.html#backProjectHistogram",
          "type": "function"
        },
        "index": {
          "description": "Given set of images such as the color channels of color image and histogram with corresponding number of channels replace the pixels of the image with the likelihoods from the histogram",
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "backProjectHistogram",
          "normalized": "[Image GrayScale D]-\u003eHistogram-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Project Histogram",
          "signature": "[Image GrayScale D]-\u003eHistogram-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:backProjectHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "chiSqr",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Histogram.html#chiSqr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "chiSqr",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Sqr",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:chiSqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "chiSqrHG",
          "package": "CV",
          "signature": "HistogramData a -\u003e HistogramData a -\u003e a",
          "source": "src/CV-Histogram.html#chiSqrHG",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "chiSqrHG",
          "normalized": "HistogramData a-\u003eHistogramData a-\u003ea",
          "package": "CV",
          "partial": "Sqr HG",
          "signature": "HistogramData a-\u003eHistogramData a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:chiSqrHG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "cmpAbs",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Histogram.html#cmpAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "cmpAbs",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Abs",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:cmpAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "cmpEuclidian",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Histogram.html#cmpEuclidian",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "cmpEuclidian",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Euclidian",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:cmpEuclidian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "cmpIntersect",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Histogram.html#cmpIntersect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "cmpIntersect",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Intersect",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:cmpIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "cmpUnion",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Histogram.html#cmpUnion",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "cmpUnion",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Union",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:cmpUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "getPositivePart",
          "package": "CV",
          "signature": "HistogramData b -\u003e HistogramData b",
          "source": "src/CV-Histogram.html#getPositivePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "getPositivePart",
          "normalized": "HistogramData a-\u003eHistogramData a",
          "package": "CV",
          "partial": "Positive Part",
          "signature": "HistogramData b-\u003eHistogramData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:getPositivePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "get_histogram",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e CFloat -\u003e CFloat -\u003e CInt -\u003e CInt -\u003e Ptr CDouble -\u003e IO ()",
          "source": "src/CV-Histogram.html#get_histogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "get_histogram",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003eCFloat-\u003eCFloat-\u003eCInt-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "package": "CV",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003eCFloat-\u003eCFloat-\u003eCInt-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:get_histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "get_weighted_histogram",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e CDouble -\u003e CDouble -\u003e CInt -\u003e Ptr CDouble -\u003e IO ()",
          "source": "src/CV-Histogram.html#get_weighted_histogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "get_weighted_histogram",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003eCDouble-\u003eCDouble-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "package": "CV",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003eCDouble-\u003eCDouble-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:get_weighted_histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Calculate an opencv histogram object from set of images, each with it's\n own number of bins.\n\u003c/p\u003e",
          "module": "CV.Histogram",
          "name": "histogram",
          "package": "CV",
          "signature": "[(Image GrayScale D8, Int)] -\u003e Bool -\u003e Maybe (Image GrayScale D8) -\u003e Histogram",
          "source": "src/CV-Histogram.html#histogram",
          "type": "function"
        },
        "index": {
          "description": "Calculate an opencv histogram object from set of images each with it own number of bins",
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "histogram",
          "normalized": "[(Image GrayScale D,Int)]-\u003eBool-\u003eMaybe(Image GrayScale D)-\u003eHistogram",
          "package": "CV",
          "signature": "[(Image GrayScale D,Int)]-\u003eBool-\u003eMaybe(Image GrayScale D)-\u003eHistogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "liftBins",
          "package": "CV",
          "signature": "([b] -\u003e [a]) -\u003e HistogramData b -\u003e [(a, b)]",
          "source": "src/CV-Histogram.html#liftBins",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "liftBins",
          "normalized": "([a]-\u003e[b])-\u003eHistogramData a-\u003e[(b,a)]",
          "package": "CV",
          "partial": "Bins",
          "signature": "([b]-\u003e[a])-\u003eHistogramData b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:liftBins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "liftValues",
          "package": "CV",
          "signature": "([a] -\u003e [b]) -\u003e HistogramData a -\u003e [(a, b)]",
          "source": "src/CV-Histogram.html#liftValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "liftValues",
          "normalized": "([a]-\u003e[b])-\u003eHistogramData a-\u003e[(a,b)]",
          "package": "CV",
          "partial": "Values",
          "signature": "([a]-\u003e[b])-\u003eHistogramData a-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:liftValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "noBins",
          "package": "CV",
          "signature": "HistogramData t -\u003e Int",
          "source": "src/CV-Histogram.html#noBins",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "noBins",
          "normalized": "HistogramData a-\u003eInt",
          "package": "CV",
          "partial": "Bins",
          "signature": "HistogramData t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:noBins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "simpleGetHistogram",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Maybe (Image GrayScale D8) -\u003e D32 -\u003e D32 -\u003e Int -\u003e Bool -\u003e [D32]",
          "source": "src/CV-Histogram.html#simpleGetHistogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "simpleGetHistogram",
          "normalized": "Image GrayScale D-\u003eMaybe(Image GrayScale D)-\u003eD-\u003eD-\u003eInt-\u003eBool-\u003e[D]",
          "package": "CV",
          "partial": "Get Histogram",
          "signature": "Image GrayScale D-\u003eMaybe(Image GrayScale D)-\u003eD-\u003eD-\u003eInt-\u003eBool-\u003e[D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:simpleGetHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "sub",
          "package": "CV",
          "signature": "HistogramData b -\u003e HistogramData b -\u003e HistogramData b",
          "source": "src/CV-Histogram.html#sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "sub",
          "normalized": "HistogramData a-\u003eHistogramData a-\u003eHistogramData a",
          "package": "CV",
          "signature": "HistogramData b-\u003eHistogramData b-\u003eHistogramData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "tcumulate",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/CV-Histogram.html#tcumulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "tcumulate",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:tcumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "values",
          "package": "CV",
          "signature": "HistogramData b -\u003e [b]",
          "source": "src/CV-Histogram.html#values",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "values",
          "normalized": "HistogramData a-\u003e[a]",
          "package": "CV",
          "signature": "HistogramData b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Histogram",
          "name": "weightedHistogram",
          "package": "CV",
          "signature": "Image c d -\u003e Image c1 d1 -\u003e a -\u003e a1 -\u003e Int -\u003e [b]",
          "source": "src/CV-Histogram.html#weightedHistogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Histogram",
          "module": "CV.Histogram",
          "name": "weightedHistogram",
          "normalized": "Image a b-\u003eImage a b-\u003ec-\u003ec-\u003eInt-\u003e[d]",
          "package": "CV",
          "partial": "Histogram",
          "signature": "Image c d-\u003eImage c d-\u003ea-\u003ea-\u003eInt-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Histogram.html#v:weightedHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "HoughTransform",
          "package": "CV",
          "source": "src/CV-HoughTransform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "HoughTransform",
          "package": "CV",
          "partial": "Hough Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "HoughDesc",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#HoughDesc",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "HoughDesc",
          "package": "CV",
          "partial": "Hough Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:HoughDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "ImageWithLines",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#ImageWithLines",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "ImageWithLines",
          "package": "CV",
          "partial": "Image With Lines",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:ImageWithLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "ImageWithSegments",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#ImageWithSegments",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "ImageWithSegments",
          "package": "CV",
          "partial": "Image With Segments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:ImageWithSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "Line",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "Line",
          "package": "CV",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "Segment",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#Segment",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "Segment",
          "package": "CV",
          "partial": "Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "With",
          "package": "CV",
          "source": "src/CV-HoughTransform.html#With",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "With",
          "package": "CV",
          "partial": "With",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#t:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "θ",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "θ",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:-952-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "Line",
          "package": "CV",
          "signature": "Line",
          "source": "src/CV-HoughTransform.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "Line",
          "package": "CV",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "Segment",
          "package": "CV",
          "signature": "Segment",
          "source": "src/CV-HoughTransform.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "Segment",
          "package": "CV",
          "partial": "Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "With",
          "package": "CV",
          "signature": "a With b",
          "source": "src/CV-HoughTransform.html#With",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "With",
          "package": "CV",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "bias",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "bias",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:bias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "end",
          "package": "CV",
          "signature": "(Int, Int)",
          "source": "src/CV-HoughTransform.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "end",
          "normalized": "(Int,Int)",
          "package": "CV",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "houghCirclesGradient",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Int -\u003e Int -\u003e [(CFloat, CFloat, CFloat)]",
          "source": "src/CV-HoughTransform.html#houghCirclesGradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "houghCirclesGradient",
          "normalized": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eInt-\u003e[(CFloat,CFloat,CFloat)]",
          "package": "CV",
          "partial": "Circles Gradient",
          "signature": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eInt-\u003e[(CFloat,CFloat,CFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:houghCirclesGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "houghLinesMultiscale",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int -\u003e Double -\u003e Double -\u003e Int -\u003e Double -\u003e Double -\u003e [(CFloat, CFloat)]",
          "source": "src/CV-HoughTransform.html#houghLinesMultiscale",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "houghLinesMultiscale",
          "normalized": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003e[(CFloat,CFloat)]",
          "package": "CV",
          "partial": "Lines Multiscale",
          "signature": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003e[(CFloat,CFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:houghLinesMultiscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "houghLinesProbabilistic",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int -\u003e Double -\u003e Double -\u003e Int -\u003e Double -\u003e Double -\u003e [(CInt, CInt, CInt, CInt)]",
          "source": "src/CV-HoughTransform.html#houghLinesProbabilistic",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "houghLinesProbabilistic",
          "normalized": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003e[(CInt,CInt,CInt,CInt)]",
          "package": "CV",
          "partial": "Lines Probabilistic",
          "signature": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003e[(CInt,CInt,CInt,CInt)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:houghLinesProbabilistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "houghLinesStandard",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Int -\u003e Double -\u003e Double -\u003e Int -\u003e [(CFloat, CFloat)]",
          "source": "src/CV-HoughTransform.html#houghLinesStandard",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "houghLinesStandard",
          "normalized": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(CFloat,CFloat)]",
          "package": "CV",
          "partial": "Lines Standard",
          "signature": "Image GrayScale D-\u003eInt-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(CFloat,CFloat)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:houghLinesStandard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "houghProbabilisticToLine",
          "package": "CV",
          "signature": "t -\u003e (Int, Int) -\u003e (Int, Int) -\u003e Segment",
          "source": "src/CV-HoughTransform.html#houghProbabilisticToLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "houghProbabilisticToLine",
          "normalized": "a-\u003e(Int,Int)-\u003e(Int,Int)-\u003eSegment",
          "package": "CV",
          "partial": "Probabilistic To Line",
          "signature": "t-\u003e(Int,Int)-\u003e(Int,Int)-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:houghProbabilisticToLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "image",
          "package": "CV",
          "signature": "(Image c d `With` e) -\u003e Image c d",
          "source": "src/CV-HoughTransform.html#image",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "image",
          "normalized": "(Image a b With c)-\u003eImage a b",
          "package": "CV",
          "signature": "(Image c d With e)-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesMultiScale",
          "package": "CV",
          "signature": "Int -\u003e Double -\u003e Double -\u003e Int -\u003e Double -\u003e Double -\u003e Image GrayScale D8 -\u003e ImageWithLines",
          "source": "src/CV-HoughTransform.html#imageHoughLinesMultiScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesMultiScale",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImageWithLines",
          "package": "CV",
          "partial": "Hough Lines Multi Scale",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImageWithLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:imageHoughLinesMultiScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesProbabilistic",
          "package": "CV",
          "signature": "Int -\u003e Double -\u003e Double -\u003e Int -\u003e Double -\u003e Double -\u003e Image GrayScale D8 -\u003e ImageWithSegments",
          "source": "src/CV-HoughTransform.html#imageHoughLinesProbabilistic",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesProbabilistic",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImageWithSegments",
          "package": "CV",
          "partial": "Hough Lines Probabilistic",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eDouble-\u003eDouble-\u003eImage GrayScale D-\u003eImageWithSegments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:imageHoughLinesProbabilistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesStandard",
          "package": "CV",
          "signature": "Int -\u003e Double -\u003e Double -\u003e Int -\u003e Image GrayScale D8 -\u003e ImageWithLines",
          "source": "src/CV-HoughTransform.html#imageHoughLinesStandard",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "imageHoughLinesStandard",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eImage GrayScale D-\u003eImageWithLines",
          "package": "CV",
          "partial": "Hough Lines Standard",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eInt-\u003eImage GrayScale D-\u003eImageWithLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:imageHoughLinesStandard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "lineToSegment",
          "package": "CV",
          "signature": "(Int, t) -\u003e Line -\u003e Segment",
          "source": "src/CV-HoughTransform.html#lineToSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "lineToSegment",
          "normalized": "(Int,a)-\u003eLine-\u003eSegment",
          "package": "CV",
          "partial": "To Segment",
          "signature": "(Int,t)-\u003eLine-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:lineToSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "lines",
          "package": "CV",
          "signature": "(a `With` [Line]) -\u003e [Line]",
          "source": "src/CV-HoughTransform.html#lines",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "lines",
          "normalized": "(a With[Line])-\u003e[Line]",
          "package": "CV",
          "signature": "(a With[Line])-\u003e[Line]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "rho1pix",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#rho1pix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "rho1pix",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:rho1pix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "rho5pix",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#rho5pix",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "rho5pix",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:rho5pix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "segments",
          "package": "CV",
          "signature": "(a `With` [Segment]) -\u003e [Segment]",
          "source": "src/CV-HoughTransform.html#segments",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "segments",
          "normalized": "(a With[Segment])-\u003e[Segment]",
          "package": "CV",
          "signature": "(a With[Segment])-\u003e[Segment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "start",
          "package": "CV",
          "signature": "(Int, Int)",
          "source": "src/CV-HoughTransform.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "start",
          "normalized": "(Int,Int)",
          "package": "CV",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "theta1deg",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#theta1deg",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "theta1deg",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:theta1deg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.HoughTransform",
          "name": "theta2deg",
          "package": "CV",
          "signature": "Double",
          "source": "src/CV-HoughTransform.html#theta2deg",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV HoughTransform",
          "module": "CV.HoughTransform",
          "name": "theta2deg",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-HoughTransform.html#v:theta2deg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Image",
          "package": "CV",
          "source": "src/CV-Image.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Image",
          "package": "CV",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "BareImage",
          "package": "CV",
          "source": "src/CV-Image.html#BareImage",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "BareImage",
          "package": "CV",
          "partial": "Bare Image",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:BareImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType family for expressing which channels a colorspace contains. This needs to be fixed wrt. the BGR color space.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "ChannelOf",
          "package": "CV",
          "signature": "ChannelOf",
          "type": "function"
        },
        "index": {
          "description": "Type family for expressing which channels colorspace contains This needs to be fixed wrt the BGR color space",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "ChannelOf",
          "package": "CV",
          "partial": "Channel Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:ChannelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Complex",
          "package": "CV",
          "source": "src/CV-Image.html#Complex",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Complex",
          "package": "CV",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Class for images that exist.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "CreateImage",
          "package": "CV",
          "source": "src/CV-Image.html#CreateImage",
          "type": "class"
        },
        "index": {
          "description": "Class for images that exist",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CreateImage",
          "package": "CV",
          "partial": "Create Image",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:CreateImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "CvException",
          "package": "CV",
          "source": "src/CV-Image.html#CvException",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CvException",
          "package": "CV",
          "partial": "Cv Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:CvException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "CvIOError",
          "package": "CV",
          "source": "src/CV-Image.html#CvIOError",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CvIOError",
          "package": "CV",
          "partial": "Cv IOError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:CvIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "CvSizeError",
          "package": "CV",
          "source": "src/CV-Image.html#CvSizeError",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CvSizeError",
          "package": "CV",
          "partial": "Cv Size Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:CvSizeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "D32",
          "package": "CV",
          "source": "src/CV-Image.html#D32",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "D32",
          "package": "CV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:D32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "D64",
          "package": "CV",
          "source": "src/CV-Image.html#D64",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "D64",
          "package": "CV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:D64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "D8",
          "package": "CV",
          "source": "src/CV-Image.html#D8",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "D8",
          "package": "CV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:D8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "GetPixel",
          "package": "CV",
          "source": "src/CV-Image.html#GetPixel",
          "type": "class"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "GetPixel",
          "package": "CV",
          "partial": "Get Pixel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:GetPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle channel grayscale image\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "GrayScale",
          "package": "CV",
          "source": "src/CV-Image.html#GrayScale",
          "type": "data"
        },
        "index": {
          "description": "Single channel grayscale image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "GrayScale",
          "package": "CV",
          "partial": "Gray Scale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:GrayScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for Images\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "Image",
          "package": "CV",
          "source": "src/CV-Image.html#Image",
          "type": "newtype"
        },
        "index": {
          "description": "The type for Images",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Image",
          "package": "CV",
          "partial": "Image",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "ImageDepth",
          "package": "CV",
          "source": "src/CV-Image.html#ImageDepth",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "ImageDepth",
          "package": "CV",
          "partial": "Image Depth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:ImageDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "LAB",
          "package": "CV",
          "source": "src/CV-Image.html#LAB",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "LAB",
          "package": "CV",
          "partial": "LAB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:LAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "LAB_Channel",
          "package": "CV",
          "source": "src/CV-Image.html#LAB_Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "LAB_Channel",
          "package": "CV",
          "partial": "LAB Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:LAB_Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for CV items that can be read from file. Mainly images at this point.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "Loadable",
          "package": "CV",
          "source": "src/CV-Image.html#Loadable",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for CV items that can be read from file Mainly images at this point",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Loadable",
          "package": "CV",
          "partial": "Loadable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:Loadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "RGB",
          "package": "CV",
          "source": "src/CV-Image.html#RGB",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "RGB",
          "package": "CV",
          "partial": "RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "RGBA",
          "package": "CV",
          "source": "src/CV-Image.html#RGBA",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "RGBA",
          "package": "CV",
          "partial": "RGBA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:RGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "RGB_Channel",
          "package": "CV",
          "source": "src/CV-Image.html#RGB_Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "RGB_Channel",
          "package": "CV",
          "partial": "RGB Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:RGB_Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "SetPixel",
          "package": "CV",
          "source": "src/CV-Image.html#SetPixel",
          "type": "class"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "SetPixel",
          "package": "CV",
          "partial": "Set Pixel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:SetPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for elements with a size, such as images and matrices.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "Sized",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#Sized",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for elements with size such as images and matrices",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Sized",
          "package": "CV",
          "partial": "Sized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Tag",
          "package": "CV",
          "source": "src/CV-Image.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Tag",
          "package": "CV",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "BareImage",
          "package": "CV",
          "signature": "BareImage (ForeignPtr BareImage)",
          "source": "src/CV-Image.html#BareImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "BareImage",
          "package": "CV",
          "partial": "Bare Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:BareImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Blue",
          "package": "CV",
          "signature": "Blue",
          "source": "src/CV-Image.html#RGB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Blue",
          "package": "CV",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "CvIOError",
          "package": "CV",
          "signature": "CvIOError String",
          "source": "src/CV-Image.html#CvIOError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CvIOError",
          "package": "CV",
          "partial": "Cv IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:CvIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "CvSizeError",
          "package": "CV",
          "signature": "CvSizeError String",
          "source": "src/CV-Image.html#CvSizeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "CvSizeError",
          "package": "CV",
          "partial": "Cv Size Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:CvSizeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Green",
          "package": "CV",
          "signature": "Green",
          "source": "src/CV-Image.html#RGB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Green",
          "package": "CV",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "LAB_A",
          "package": "CV",
          "signature": "LAB_A",
          "source": "src/CV-Image.html#LAB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "LAB_A",
          "package": "CV",
          "partial": "LAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:LAB_A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "LAB_B",
          "package": "CV",
          "signature": "LAB_B",
          "source": "src/CV-Image.html#LAB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "LAB_B",
          "package": "CV",
          "partial": "LAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:LAB_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "LAB_L",
          "package": "CV",
          "signature": "LAB_L",
          "source": "src/CV-Image.html#LAB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "LAB_L",
          "package": "CV",
          "partial": "LAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:LAB_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "Red",
          "package": "CV",
          "signature": "Red",
          "source": "src/CV-Image.html#RGB_Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "Red",
          "package": "CV",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "S",
          "package": "CV",
          "signature": "S BareImage",
          "source": "src/CV-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "S",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "bgrToRgb",
          "package": "CV",
          "signature": "Image BGR D8 -\u003e Image RGB D8",
          "source": "src/CV-Image.html#bgrToRgb",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "bgrToRgb",
          "normalized": "Image BGR D-\u003eImage RGB D",
          "package": "CV",
          "partial": "To Rgb",
          "signature": "Image BGR D-\u003eImage RGB D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:bgrToRgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"CV.Image\",\"Utils.GeometryClass\"]",
          "name": "biggerThan",
          "package": "CV",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/Utils-GeometryClass.html#biggerThan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:biggerThan\",\"http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:biggerThan\"]"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "biggerThan",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "CV",
          "partial": "Than",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:biggerThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlit image2 onto image1.\n   This uses an alpha channel bitmap for determining the regions where the image should be \u003ca\u003eblended\u003c/a\u003e with\n   the base image.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "blendBlit",
          "package": "CV",
          "signature": "Image c d -\u003e Image c1 d1 -\u003e Image c3 d3 -\u003e Image c2 d2 -\u003e (CInt, CInt) -\u003e IO ()",
          "source": "src/CV-Image.html#blendBlit",
          "type": "function"
        },
        "index": {
          "description": "Blit image2 onto image1 This uses an alpha channel bitmap for determining the regions where the image should be blended with the base image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "blendBlit",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b-\u003eImage a b-\u003e(CInt,CInt)-\u003eIO()",
          "package": "CV",
          "partial": "Blit",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d-\u003eImage c d-\u003e(CInt,CInt)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:blendBlit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "blit",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e (Int, Int) -\u003e IO ()",
          "source": "src/CV-Image.html#blit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "blit",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003e(Int,Int)-\u003eIO()",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003e(Int,Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:blit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "blitM",
          "package": "CV",
          "signature": "(a, a1) -\u003e [((a2, a3), Image GrayScale D32)] -\u003e Image GrayScale D32",
          "source": "src/CV-Image.html#blitM",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "blitM",
          "normalized": "(a,a)-\u003e[((a,a),Image GrayScale D)]-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(a,a)-\u003e[((a,a),Image GrayScale D)]-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:blitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a copy of an image\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "cloneImage",
          "package": "CV",
          "signature": "Image a b -\u003e IO (Image a b)",
          "source": "src/CV-Image.html#cloneImage",
          "type": "function"
        },
        "index": {
          "description": "Create copy of an image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "cloneImage",
          "normalized": "Image a b-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Image",
          "signature": "Image a b-\u003eIO(Image a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:cloneImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "cloneTo64F",
          "package": "CV",
          "signature": "Image c d -\u003e IO (Image c D64)",
          "source": "src/CV-Image.html#cloneTo64F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "cloneTo64F",
          "normalized": "Image a b-\u003eIO(Image a D)",
          "package": "CV",
          "partial": "To",
          "signature": "Image c d-\u003eIO(Image c D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:cloneTo64F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "compose",
          "package": "CV",
          "signature": "Source a -\u003e a",
          "source": "src/CV-Image.html#compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "compose",
          "normalized": "Source a-\u003ea",
          "package": "CV",
          "signature": "Source a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This is unsafe. Use compose instead\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Image",
          "name": "composeMultichannelImage",
          "package": "CV",
          "signature": "Maybe (Image GrayScale a) -\u003e Maybe (Image GrayScale a) -\u003e Maybe (Image GrayScale a) -\u003e Maybe (Image GrayScale a) -\u003e Tag tp -\u003e Image tp a",
          "source": "src/CV-Image.html#composeMultichannelImage",
          "type": "function"
        },
        "index": {
          "description": "Deprecated This is unsafe Use compose instead",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "composeMultichannelImage",
          "normalized": "Maybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eTag b-\u003eImage b a",
          "package": "CV",
          "partial": "Multichannel Image",
          "signature": "Maybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eMaybe(Image GrayScale a)-\u003eTag tp-\u003eImage tp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:composeMultichannelImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an image from size\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "create",
          "package": "CV",
          "signature": "(Int, Int) -\u003e IO a",
          "source": "src/CV-Image.html#create",
          "type": "method"
        },
        "index": {
          "description": "Create an image from size",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "create",
          "normalized": "(Int,Int)-\u003eIO a",
          "package": "CV",
          "signature": "(Int,Int)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "creatingBareImage",
          "package": "CV",
          "signature": "IO (Ptr BareImage) -\u003e IO BareImage",
          "source": "src/CV-Image.html#creatingBareImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "creatingBareImage",
          "normalized": "IO(Ptr BareImage)-\u003eIO BareImage",
          "package": "CV",
          "partial": "Bare Image",
          "signature": "IO(Ptr BareImage)-\u003eIO BareImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:creatingBareImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "creatingImage",
          "package": "CV",
          "signature": "IO (Ptr BareImage) -\u003e IO (Image channels depth)",
          "source": "src/CV-Image.html#creatingImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "creatingImage",
          "normalized": "IO(Ptr BareImage)-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Image",
          "signature": "IO(Ptr BareImage)-\u003eIO(Image channels depth)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:creatingImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new empty image\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "empty",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image a b",
          "source": "src/CV-Image.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Allocate new empty image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "empty",
          "normalized": "(Int,Int)-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Allocate a new image that of the same size and type as the exemplar image given.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "emptyCopy",
          "package": "CV",
          "signature": "Image a b -\u003e Image a b",
          "source": "src/CV-Image.html#emptyCopy",
          "type": "function"
        },
        "index": {
          "description": "Allocate new image that of the same size and type as the exemplar image given",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "emptyCopy",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "partial": "Copy",
          "signature": "Image a b-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:emptyCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "emptyCopy'",
          "package": "CV",
          "signature": "Image a b -\u003e IO (Image a b)",
          "source": "src/CV-Image.html#emptyCopy%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "emptyCopy'",
          "normalized": "Image a b-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Copy'",
          "signature": "Image a b-\u003eIO(Image a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:emptyCopy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "ensure32F",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Image.html#ensure32F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "ensure32F",
          "normalized": "Ptr BareImage-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "signature": "Ptr BareImage-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:ensure32F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getAllPixels",
          "package": "CV",
          "signature": "a -\u003e [P a]",
          "source": "src/CV-Image.html#getAllPixels",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getAllPixels",
          "normalized": "a-\u003e[P a]",
          "package": "CV",
          "partial": "All Pixels",
          "signature": "a-\u003e[P a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getAllPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getAllPixelsRowMajor",
          "package": "CV",
          "signature": "a -\u003e [P a]",
          "source": "src/CV-Image.html#getAllPixelsRowMajor",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getAllPixelsRowMajor",
          "normalized": "a-\u003e[P a]",
          "package": "CV",
          "partial": "All Pixels Row Major",
          "signature": "a-\u003e[P a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getAllPixelsRowMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getArea",
          "package": "CV",
          "signature": "a -\u003e b",
          "source": "src/CV-Image.html#getArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getArea",
          "normalized": "a-\u003eb",
          "package": "CV",
          "partial": "Area",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getChannel",
          "package": "CV",
          "signature": "a -\u003e Image (ChannelOf a) d -\u003e Image GrayScale d",
          "source": "src/CV-Image.html#getChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getChannel",
          "normalized": "a-\u003eImage(ChannelOf a)b-\u003eImage GrayScale b",
          "package": "CV",
          "partial": "Channel",
          "signature": "a-\u003eImage(ChannelOf a)d-\u003eImage GrayScale d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getImageChannels",
          "package": "CV",
          "signature": "Image c d -\u003e IO CInt",
          "source": "src/CV-Image.html#getImageChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getImageChannels",
          "normalized": "Image a b-\u003eIO CInt",
          "package": "CV",
          "partial": "Image Channels",
          "signature": "Image c d-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getImageChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getImageDepth",
          "package": "CV",
          "signature": "Image c d -\u003e IO ImageDepth",
          "source": "src/CV-Image.html#getImageDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getImageDepth",
          "normalized": "Image a b-\u003eIO ImageDepth",
          "package": "CV",
          "partial": "Image Depth",
          "signature": "Image c d-\u003eIO ImageDepth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getImageDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getImageInfo",
          "package": "CV",
          "signature": "Image c d -\u003e IO ((Int, Int), ImageDepth, CInt)",
          "source": "src/CV-Image.html#getImageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getImageInfo",
          "normalized": "Image a b-\u003eIO((Int,Int),ImageDepth,CInt)",
          "package": "CV",
          "partial": "Image Info",
          "signature": "Image c d-\u003eIO((Int,Int),ImageDepth,CInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getPixel",
          "package": "CV",
          "signature": "(Int, Int) -\u003e a -\u003e P a",
          "source": "src/CV-Image.html#getPixel",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getPixel",
          "normalized": "(Int,Int)-\u003ea-\u003eP a",
          "package": "CV",
          "partial": "Pixel",
          "signature": "(Int,Int)-\u003ea-\u003eP a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getRegion",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Image.html#getRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getRegion",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Region",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "getSize",
          "package": "CV",
          "signature": "a -\u003e Size a",
          "source": "src/Utils-GeometryClass.html#getSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "getSize",
          "normalized": "a-\u003eSize a",
          "package": "CV",
          "partial": "Size",
          "signature": "a-\u003eSize a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "grayToRGB",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image RGB D32",
          "source": "src/CV-Image.html#grayToRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "grayToRGB",
          "normalized": "Image GrayScale D-\u003eImage RGB D",
          "package": "CV",
          "partial": "To RGB",
          "signature": "Image GrayScale D-\u003eImage RGB D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:grayToRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "imageFPTR",
          "package": "CV",
          "signature": "Image c d -\u003e ForeignPtr BareImage",
          "source": "src/CV-Image.html#imageFPTR",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "imageFPTR",
          "normalized": "Image a b-\u003eForeignPtr BareImage",
          "package": "CV",
          "partial": "FPTR",
          "signature": "Image c d-\u003eForeignPtr BareImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:imageFPTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "lab",
          "package": "CV",
          "signature": "Tag LAB",
          "source": "src/CV-Image.html#lab",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "lab",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:lab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "loadColorImage",
          "package": "CV",
          "signature": "FilePath -\u003e IO (Maybe (Image BGR D32))",
          "source": "src/CV-Image.html#loadColorImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "loadColorImage",
          "normalized": "FilePath-\u003eIO(Maybe(Image BGR D))",
          "package": "CV",
          "partial": "Color Image",
          "signature": "FilePath-\u003eIO(Maybe(Image BGR D))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:loadColorImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "loadImage",
          "package": "CV",
          "signature": "FilePath -\u003e IO (Maybe (Image GrayScale D32))",
          "source": "src/CV-Image.html#loadImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "loadImage",
          "normalized": "FilePath-\u003eIO(Maybe(Image GrayScale D))",
          "package": "CV",
          "partial": "Image",
          "signature": "FilePath-\u003eIO(Maybe(Image GrayScale D))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:loadImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform (a destructive) inplace map of the image. This should be wrapped inside\n withClone or an image operation\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "mapImageInplace",
          "package": "CV",
          "signature": "(P (Image GrayScale D32) -\u003e P (Image GrayScale D32)) -\u003e Image GrayScale D32 -\u003e IO ()",
          "source": "src/CV-Image.html#mapImageInplace",
          "type": "function"
        },
        "index": {
          "description": "Perform destructive inplace map of the image This should be wrapped inside withClone or an image operation",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "mapImageInplace",
          "normalized": "(P(Image GrayScale D)-\u003eP(Image GrayScale D))-\u003eImage GrayScale D-\u003eIO()",
          "package": "CV",
          "partial": "Image Inplace",
          "signature": "(P(Image GrayScale D)-\u003eP(Image GrayScale D))-\u003eImage GrayScale D-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:mapImageInplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a montage form given images (u,v) determines the layout and space the spacing\n  between images. Images are assumed to be the same size (determined by the first image)\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "montage",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Int -\u003e [Image GrayScale D32] -\u003e Image GrayScale D32",
          "source": "src/CV-Image.html#montage",
          "type": "function"
        },
        "index": {
          "description": "Create montage form given images determines the layout and space the spacing between images Images are assumed to be the same size determined by the first image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "montage",
          "normalized": "(Int,Int)-\u003eInt-\u003e[Image GrayScale D]-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eInt-\u003e[Image GrayScale D]-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:montage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "readFromFile",
          "package": "CV",
          "signature": "FilePath -\u003e IO a",
          "source": "src/CV-Image.html#readFromFile",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "readFromFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "CV",
          "partial": "From File",
          "signature": "FilePath-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:readFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "resetROI",
          "package": "CV",
          "signature": "Image c d -\u003e IO ()",
          "source": "src/CV-Image.html#resetROI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "resetROI",
          "normalized": "Image a b-\u003eIO()",
          "package": "CV",
          "partial": "ROI",
          "signature": "Image c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:resetROI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "rgb",
          "package": "CV",
          "signature": "Tag RGB",
          "source": "src/CV-Image.html#rgb",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "rgb",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "rgbToBgr",
          "package": "CV",
          "signature": "Image RGB D8 -\u003e Image BGR D8",
          "source": "src/CV-Image.html#rgbToBgr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "rgbToBgr",
          "normalized": "Image RGB D-\u003eImage BGR D",
          "package": "CV",
          "partial": "To Bgr",
          "signature": "Image RGB D-\u003eImage BGR D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:rgbToBgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "rgbToGray",
          "package": "CV",
          "signature": "Image RGB D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Image.html#rgbToGray",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "rgbToGray",
          "normalized": "Image RGB D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "To Gray",
          "signature": "Image RGB D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:rgbToGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "rgbToLab",
          "package": "CV",
          "signature": "Image RGB D32 -\u003e Image LAB D32",
          "source": "src/CV-Image.html#rgbToLab",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "rgbToLab",
          "normalized": "Image RGB D-\u003eImage LAB D",
          "package": "CV",
          "partial": "To Lab",
          "signature": "Image RGB D-\u003eImage LAB D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:rgbToLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "rgba",
          "package": "CV",
          "signature": "Tag RGBA",
          "source": "src/CV-Image.html#rgba",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "rgba",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:rgba"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "safeBlit",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e (Int, Int) -\u003e Image GrayScale D32",
          "source": "src/CV-Image.html#safeBlit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "safeBlit",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003e(Int,Int)-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Blit",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003e(Int,Int)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:safeBlit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "saveImage",
          "package": "CV",
          "signature": "FilePath -\u003e Image c d -\u003e IO ()",
          "source": "src/CV-Image.html#saveImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "saveImage",
          "normalized": "FilePath-\u003eImage a b-\u003eIO()",
          "package": "CV",
          "partial": "Image",
          "signature": "FilePath-\u003eImage c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:saveImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "setCOI",
          "package": "CV",
          "signature": "a -\u003e Image c d -\u003e IO ()",
          "source": "src/CV-Image.html#setCOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "setCOI",
          "normalized": "a-\u003eImage b c-\u003eIO()",
          "package": "CV",
          "partial": "COI",
          "signature": "a-\u003eImage c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:setCOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "setCatch",
          "package": "CV",
          "signature": "IO CInt",
          "source": "src/CV-Image.html#setCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "setCatch",
          "package": "CV",
          "partial": "Catch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:setCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "setPixel",
          "package": "CV",
          "signature": "(Int, Int) -\u003e SP a -\u003e a -\u003e IO ()",
          "source": "src/CV-Image.html#setPixel",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "setPixel",
          "normalized": "(Int,Int)-\u003eSP a-\u003ea-\u003eIO()",
          "package": "CV",
          "partial": "Pixel",
          "signature": "(Int,Int)-\u003eSP a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:setPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "setROI",
          "package": "CV",
          "signature": "(t, t1) -\u003e (t2, t3) -\u003e Image c d -\u003e IO ()",
          "source": "src/CV-Image.html#setROI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "setROI",
          "normalized": "(a,a)-\u003e(a,a)-\u003eImage b c-\u003eIO()",
          "package": "CV",
          "partial": "ROI",
          "signature": "(t,t)-\u003e(t,t)-\u003eImage c d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:setROI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "subPixelBlit",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d -\u003e (CDouble, CDouble) -\u003e IO ()",
          "source": "src/CV-Image.html#subPixelBlit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "subPixelBlit",
          "normalized": "Image a b-\u003eImage a b-\u003e(CDouble,CDouble)-\u003eIO()",
          "package": "CV",
          "partial": "Pixel Blit",
          "signature": "Image c d-\u003eImage c d-\u003e(CDouble,CDouble)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:subPixelBlit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTile images by overlapping them on a black canvas.\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "tileImages",
          "package": "CV",
          "signature": "Image c d -\u003e Image c1 d1 -\u003e (CInt, CInt) -\u003e Image channels depth",
          "source": "src/CV-Image.html#tileImages",
          "type": "function"
        },
        "index": {
          "description": "Tile images by overlapping them on black canvas",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "tileImages",
          "normalized": "Image a b-\u003eImage a b-\u003e(CInt,CInt)-\u003eImage c d",
          "package": "CV",
          "partial": "Images",
          "signature": "Image c d-\u003eImage c d-\u003e(CInt,CInt)-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:tileImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "unImage",
          "package": "CV",
          "signature": "Image t t1 -\u003e ForeignPtr BareImage",
          "source": "src/CV-Image.html#unImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "unImage",
          "normalized": "Image a a-\u003eForeignPtr BareImage",
          "package": "CV",
          "partial": "Image",
          "signature": "Image t t-\u003eForeignPtr BareImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:unImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Remove typing info from an image\n\u003c/p\u003e",
          "module": "CV.Image",
          "name": "unS",
          "package": "CV",
          "signature": "Image t t1 -\u003e BareImage",
          "source": "src/CV-Image.html#unS",
          "type": "function"
        },
        "index": {
          "description": "Remove typing info from an image",
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "unS",
          "normalized": "Image a a-\u003eBareImage",
          "package": "CV",
          "signature": "Image t t-\u003eBareImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:unS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "unsafeImageTo32F",
          "package": "CV",
          "signature": "Image c d -\u003e Image c D32",
          "source": "src/CV-Image.html#unsafeImageTo32F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "unsafeImageTo32F",
          "normalized": "Image a b-\u003eImage a D",
          "package": "CV",
          "partial": "Image To",
          "signature": "Image c d-\u003eImage c D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:unsafeImageTo32F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "unsafeImageTo64F",
          "package": "CV",
          "signature": "Image c d -\u003e Image c D64",
          "source": "src/CV-Image.html#unsafeImageTo64F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "unsafeImageTo64F",
          "normalized": "Image a b-\u003eImage a D",
          "package": "CV",
          "partial": "Image To",
          "signature": "Image c d-\u003eImage c D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:unsafeImageTo64F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "unsafeImageTo8Bit",
          "package": "CV",
          "signature": "Image cspace a -\u003e Image cspace D8",
          "source": "src/CV-Image.html#unsafeImageTo8Bit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "unsafeImageTo8Bit",
          "normalized": "Image a b-\u003eImage a D",
          "package": "CV",
          "partial": "Image To Bit",
          "signature": "Image cspace a-\u003eImage cspace D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:unsafeImageTo8Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withBareImage",
          "package": "CV",
          "signature": "BareImage -\u003e (Ptr BareImage -\u003e IO b) -\u003e IO b",
          "source": "src/CV-Image.html#withBareImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withBareImage",
          "normalized": "BareImage-\u003e(Ptr BareImage-\u003eIO a)-\u003eIO a",
          "package": "CV",
          "partial": "Bare Image",
          "signature": "BareImage-\u003e(Ptr BareImage-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withBareImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withClone",
          "package": "CV",
          "signature": "Image channels depth -\u003e (Image channels depth -\u003e IO ()) -\u003e IO (Image channels depth)",
          "source": "src/CV-Image.html#withClone",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withClone",
          "normalized": "Image a b-\u003e(Image a b-\u003eIO())-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "Clone",
          "signature": "Image channels depth-\u003e(Image channels depth-\u003eIO())-\u003eIO(Image channels depth)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withClone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withCloneValue",
          "package": "CV",
          "signature": "Image channels depth -\u003e (Image channels depth -\u003e IO a) -\u003e IO a",
          "source": "src/CV-Image.html#withCloneValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withCloneValue",
          "normalized": "Image a b-\u003e(Image a b-\u003eIO c)-\u003eIO c",
          "package": "CV",
          "partial": "Clone Value",
          "signature": "Image channels depth-\u003e(Image channels depth-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withCloneValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withGenBareImage",
          "package": "CV",
          "signature": "BareImage -\u003e (Ptr b -\u003e IO b1) -\u003e IO b1",
          "source": "src/CV-Image.html#withGenBareImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withGenBareImage",
          "normalized": "BareImage-\u003e(Ptr a-\u003eIO a)-\u003eIO a",
          "package": "CV",
          "partial": "Gen Bare Image",
          "signature": "BareImage-\u003e(Ptr b-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withGenBareImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withGenImage",
          "package": "CV",
          "signature": "Image c d -\u003e (Ptr b -\u003e IO a) -\u003e IO a",
          "source": "src/CV-Image.html#withGenImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withGenImage",
          "normalized": "Image a b-\u003e(Ptr c-\u003eIO d)-\u003eIO d",
          "package": "CV",
          "partial": "Gen Image",
          "signature": "Image c d-\u003e(Ptr b-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withGenImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withIOROI",
          "package": "CV",
          "signature": "(t, t1) -\u003e (t2, t3) -\u003e Image c d -\u003e IO b -\u003e IO b",
          "source": "src/CV-Image.html#withIOROI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withIOROI",
          "normalized": "(a,a)-\u003e(a,a)-\u003eImage b c-\u003eIO d-\u003eIO d",
          "package": "CV",
          "partial": "IOROI",
          "signature": "(t,t)-\u003e(t,t)-\u003eImage c d-\u003eIO b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withIOROI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withImage",
          "package": "CV",
          "signature": "Image c d -\u003e (Ptr BareImage -\u003e IO a) -\u003e IO a",
          "source": "src/CV-Image.html#withImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withImage",
          "normalized": "Image a b-\u003e(Ptr BareImage-\u003eIO c)-\u003eIO c",
          "package": "CV",
          "partial": "Image",
          "signature": "Image c d-\u003e(Ptr BareImage-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Image",
          "name": "withROI",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Image c d -\u003e (Image c d -\u003e a) -\u003e a",
          "source": "src/CV-Image.html#withROI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Image",
          "module": "CV.Image",
          "name": "withROI",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eImage a b-\u003e(Image a b-\u003ec)-\u003ec",
          "package": "CV",
          "partial": "ROI",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eImage c d-\u003e(Image c d-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Image.html#v:withROI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMathematical and statistical operations for images. See also module\n   \u003ca\u003eCV.ImageMathOp\u003c/a\u003e which contains handy operators for some of these.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.ImageMath",
          "name": "ImageMath",
          "package": "CV",
          "source": "src/CV-ImageMath.html",
          "type": "module"
        },
        "index": {
          "description": "Mathematical and statistical operations for images See also module CV.ImageMathOp which contains handy operators for some of these",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "ImageMath",
          "package": "CV",
          "partial": "Image Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the absolute value of every pixel.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "abs",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d",
          "source": "src/CV-ImageMath.html#abs",
          "type": "function"
        },
        "index": {
          "description": "Calculates the absolute value of every pixel",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "abs",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel absolute difference of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "absDiff",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#absDiff",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel absolute difference of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "absDiff",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Diff",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:absDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel sum of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "add",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#add",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel sum of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "add",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a scalar to every pixel.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "addS",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#addS",
          "type": "function"
        },
        "index": {
          "description": "Adds scalar to every pixel",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "addS",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:addS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the atan of every pixel.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "atan",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#atan",
          "type": "function"
        },
        "index": {
          "description": "Calculates the atan of every pixel",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "atan",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the atan2 of pixel values in two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "atan2",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#atan2",
          "type": "function"
        },
        "index": {
          "description": "Calculates the atan2 of pixel values in two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "atan2",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:atan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average pixel value in whole image.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "average",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32",
          "source": "src/CV-ImageMath.html#average",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average pixel value in whole image",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "average",
          "normalized": "Image GrayScale D-\u003eD",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average of multiple images by adding the pixel values and\n   dividing the resulting values by number of images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "averageImages",
          "package": "CV",
          "signature": "[Image GrayScale D32] -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#averageImages",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average of multiple images by adding the pixel values and dividing the resulting values by number of images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "averageImages",
          "normalized": "[Image GrayScale D]-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Images",
          "signature": "[Image GrayScale D]-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:averageImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average value for pixels that have non-zero mask value.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "averageMask",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D8 -\u003e D32",
          "source": "src/CV-ImageMath.html#averageMask",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average value for pixels that have non-zero mask value",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "averageMask",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eD",
          "package": "CV",
          "partial": "Mask",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:averageMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel division of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "div",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#div",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel division of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "div",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce image where pixel is coloured according to distance from the edge.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "fadeToCenter",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e Image channels depth",
          "source": "src/CV-ImageMath.html#fadeToCenter",
          "type": "function"
        },
        "index": {
          "description": "Produce image where pixel is coloured according to distance from the edge",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "fadeToCenter",
          "normalized": "(CInt,CInt)-\u003eImage a b",
          "package": "CV",
          "partial": "To Center",
          "signature": "(CInt,CInt)-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:fadeToCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce white image with \u003ccode\u003eedgeW\u003c/code\u003e amount of edges fading to black.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "fadedEdgeImage",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e CInt -\u003e Image channels depth",
          "source": "src/CV-ImageMath.html#fadedEdgeImage",
          "type": "function"
        },
        "index": {
          "description": "Produce white image with edgeW amount of edges fading to black",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "fadedEdgeImage",
          "normalized": "(CInt,CInt)-\u003eCInt-\u003eImage a b",
          "package": "CV",
          "partial": "Edge Image",
          "signature": "(CInt,CInt)-\u003eCInt-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:fadedEdgeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the minimum and maximum pixel value in the image.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "findMinMax",
          "package": "CV",
          "signature": "Image t t1 -\u003e (D32, D32)",
          "source": "src/CV-ImageMath.html#findMinMax",
          "type": "function"
        },
        "index": {
          "description": "Finds the minimum and maximum pixel value in the image",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "findMinMax",
          "normalized": "Image a a-\u003e(D,D)",
          "package": "CV",
          "partial": "Min Max",
          "signature": "Image t t-\u003e(D,D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:findMinMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the minimum and maximum pixel value in the image and the locations\n   where these values were found.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "findMinMaxLoc",
          "package": "CV",
          "signature": "Image c d -\u003e (((t1, t2), t), ((t4, t5), t3))",
          "source": "src/CV-ImageMath.html#findMinMaxLoc",
          "type": "function"
        },
        "index": {
          "description": "Finds the minimum and maximum pixel value in the image and the locations where these values were found",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "findMinMaxLoc",
          "normalized": "Image a b-\u003e(((c,c),c),((c,c),c))",
          "package": "CV",
          "partial": "Min Max Loc",
          "signature": "Image c d-\u003e(((t,t),t),((t,t),t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:findMinMaxLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the minimum and maximum value for pixels with non-zero mask value.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "findMinMaxMask",
          "package": "CV",
          "signature": "BareImage -\u003e BareImage -\u003e (D32, D32)",
          "source": "src/CV-ImageMath.html#findMinMaxMask",
          "type": "function"
        },
        "index": {
          "description": "Finds the minimum and maximum value for pixels with non-zero mask value",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "findMinMaxMask",
          "normalized": "BareImage-\u003eBareImage-\u003e(D,D)",
          "package": "CV",
          "partial": "Min Max Mask",
          "signature": "BareImage-\u003eBareImage-\u003e(D,D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:findMinMaxMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender image of 2D gaussian curve with standard deviation of (stdX,stdY) to image size (w,h)\n   The origin/center of curve is in center of the image.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "gaussianImage",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (Double, Double) -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#gaussianImage",
          "type": "function"
        },
        "index": {
          "description": "Render image of gaussian curve with standard deviation of stdX stdY to image size The origin center of curve is in center of the image",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "gaussianImage",
          "normalized": "(Int,Int)-\u003e(Double,Double)-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Image",
          "signature": "(Int,Int)-\u003e(Double,Double)-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:gaussianImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average and standard deviation of pixel values in the image\n   in one operation.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "imageAvgSdv",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e (d, d)",
          "source": "src/CV-ImageMath.html#imageAvgSdv",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average and standard deviation of pixel values in the image in one operation",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "imageAvgSdv",
          "normalized": "Image GrayScale a-\u003e(a,a)",
          "package": "CV",
          "partial": "Avg Sdv",
          "signature": "Image GrayScale d-\u003e(d,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:imageAvgSdv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the minimum and maximum pixel value in the image.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "imageMinMax",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e (d, d)",
          "source": "src/CV-ImageMath.html#imageMinMax",
          "type": "function"
        },
        "index": {
          "description": "Finds the minimum and maximum pixel value in the image",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "imageMinMax",
          "normalized": "Image GrayScale a-\u003e(a,a)",
          "package": "CV",
          "partial": "Min Max",
          "signature": "Image GrayScale d-\u003e(d,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:imageMinMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical inversion of image (ie. invert, but stay on [0..1] range;\n   multiply by \u003ccode\u003e-1\u003c/code\u003e and add \u003ccode\u003e1\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "invert",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Logical inversion of image ie invert but stay on range multiply by and add",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "invert",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two images and produces a binary image that has white pixels in\n   those positions where the comparison is true. For example,\n   \u003ccode\u003e(less2Than A B)\u003c/code\u003e has white pixels where value of A is less than value of\n   B. Notice that these functions follow the intuitive order of operands,\n   unlike \u003ccode\u003e\u003ca\u003elessThan\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emoreThan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "less2Than",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMath.html#less2Than",
          "type": "function"
        },
        "index": {
          "description": "Compares two images and produces binary image that has white pixels in those positions where the comparison is true For example less2Than has white pixels where value of is less than value of Notice that these functions follow the intuitive order of operands unlike lessThan and moreThan",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "less2Than",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Than",
          "signature": "Image GrayScale d-\u003eImage GrayScale d-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:less2Than"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares each pixel to a scalar, and produces a binary image where the\n   pixel value is less than the scalar. For example, \u003ccode\u003e(lessThan s I)\u003c/code\u003e has\n   white pixels where value of I is less than s. Notice that the order of\n   operands is opposite to the intuitive interpretation of \u003ccode\u003es `\u003ccode\u003e\u003ca\u003elessThan\u003c/a\u003e\u003c/code\u003e` I\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "lessThan",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMath.html#lessThan",
          "type": "function"
        },
        "index": {
          "description": "Compares each pixel to scalar and produces binary image where the pixel value is less than the scalar For example lessThan has white pixels where value of is less than Notice that the order of operands is opposite to the intuitive interpretation of lessThan",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "lessThan",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Than",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:lessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperation to limit image with another image; same as \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "limitToOp",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e ImageOperation c d",
          "source": "src/CV-ImageMath.html#limitToOp",
          "type": "function"
        },
        "index": {
          "description": "Operation to limit image with another image same as min",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "limitToOp",
          "normalized": "Image a b-\u003eImageOperation a b",
          "package": "CV",
          "partial": "To Op",
          "signature": "Image c d-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:limitToOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the natural logarithm of every pixel.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "log",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#log",
          "type": "function"
        },
        "index": {
          "description": "Calculates the natural logarithm of every pixel",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "log",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two images according to a mask. Result is \u003ccode\u003eR = A*m + B*(m-1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "maskedMerge",
          "package": "CV",
          "signature": "Image GrayScale D8 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#maskedMerge",
          "type": "function"
        },
        "index": {
          "description": "Merge two images according to mask Result is m-1",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "maskedMerge",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Merge",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:maskedMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel maximum of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "max",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#max",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel maximum of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "max",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel maximum between an image and a scalar.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "maxS",
          "package": "CV",
          "signature": "Float -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageMath.html#maxS",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel maximum between an image and scalar",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "maxS",
          "normalized": "Float-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Float-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:maxS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility functions for getting the maximum or minimum pixel value of the \n   image; equal to \u003ccode\u003esnd . findMinMax\u003c/code\u003e and \u003ccode\u003efst . findMinMax\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "maxValue",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32",
          "source": "src/CV-ImageMath.html#maxValue",
          "type": "function"
        },
        "index": {
          "description": "Utility functions for getting the maximum or minimum pixel value of the image equal to snd findMinMax and fst findMinMax",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "maxValue",
          "normalized": "Image GrayScale D-\u003eD",
          "package": "CV",
          "partial": "Value",
          "signature": "Image GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:maxValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a distance map and a circle, return the biggest circle with radius less\n   than given in the distance map that fully covers the previous one.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "maximalCoveringCircle",
          "package": "CV",
          "signature": "Image c d -\u003e (CInt, CInt, CDouble) -\u003e (t, t1, t2)",
          "source": "src/CV-ImageMath.html#maximalCoveringCircle",
          "type": "function"
        },
        "index": {
          "description": "Given distance map and circle return the biggest circle with radius less than given in the distance map that fully covers the previous one",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "maximalCoveringCircle",
          "normalized": "Image a b-\u003e(CInt,CInt,CDouble)-\u003e(c,c,c)",
          "package": "CV",
          "partial": "Covering Circle",
          "signature": "Image c d-\u003e(CInt,CInt,CDouble)-\u003e(t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:maximalCoveringCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel minimum of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "min",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#min",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel minimum of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "min",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel minimum between an image and a scalar.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "minS",
          "package": "CV",
          "signature": "Float -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageMath.html#minS",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel minimum between an image and scalar",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "minS",
          "normalized": "Float-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Float-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:minS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility functions for getting the maximum or minimum pixel value of the \n   image; equal to \u003ccode\u003esnd . findMinMax\u003c/code\u003e and \u003ccode\u003efst . findMinMax\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "minValue",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32",
          "source": "src/CV-ImageMath.html#minValue",
          "type": "function"
        },
        "index": {
          "description": "Utility functions for getting the maximum or minimum pixel value of the image equal to snd findMinMax and fst findMinMax",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "minValue",
          "normalized": "Image GrayScale D-\u003eD",
          "package": "CV",
          "partial": "Value",
          "signature": "Image GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:minValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two images and produces a binary image that has white pixels in\n   those positions where the comparison is true. For example,\n   \u003ccode\u003e(less2Than A B)\u003c/code\u003e has white pixels where value of A is less than value of\n   B. Notice that these functions follow the intuitive order of operands,\n   unlike \u003ccode\u003e\u003ca\u003elessThan\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emoreThan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "more2Than",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMath.html#more2Than",
          "type": "function"
        },
        "index": {
          "description": "Compares two images and produces binary image that has white pixels in those positions where the comparison is true For example less2Than has white pixels where value of is less than value of Notice that these functions follow the intuitive order of operands unlike lessThan and moreThan",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "more2Than",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Than",
          "signature": "Image GrayScale d-\u003eImage GrayScale d-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:more2Than"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares each pixel to a scalar, and produces a binary image where the\n   pixel value is greater than the scalar. For example, \u003ccode\u003e(moreThan s I)\u003c/code\u003e has\n   white pixels where value of I is greater than s. Notice that the order of\n   operands is opposite to the intuitive interpretation of \u003ccode\u003es `\u003ccode\u003e\u003ca\u003emoreThan\u003c/a\u003e\u003c/code\u003e` I\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "moreThan",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMath.html#moreThan",
          "type": "function"
        },
        "index": {
          "description": "Compares each pixel to scalar and produces binary image where the pixel value is greater than the scalar For example moreThan has white pixels where value of is greater than Notice that the order of operands is opposite to the intuitive interpretation of moreThan",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "moreThan",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Than",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:moreThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel product of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "mul",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#mul",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel product of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "mul",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplies every pixel by a scalar.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "mulS",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#mulS",
          "type": "function"
        },
        "index": {
          "description": "Multiplies every pixel by scalar",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "mulS",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:mulS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the square root of every pixel.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "sqrt",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#sqrt",
          "type": "function"
        },
        "index": {
          "description": "Calculates the square root of every pixel",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "sqrt",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the standard deviation of pixel values in whole image.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "stdDeviation",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32",
          "source": "src/CV-ImageMath.html#stdDeviation",
          "type": "function"
        },
        "index": {
          "description": "Calculates the standard deviation of pixel values in whole image",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "stdDeviation",
          "normalized": "Image GrayScale D-\u003eD",
          "package": "CV",
          "partial": "Deviation",
          "signature": "Image GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:stdDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the standard deviation of values for pixels that have non-zero\n   mask value.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "stdDeviationMask",
          "package": "CV",
          "signature": "Image c d -\u003e Image c1 d1 -\u003e CDouble",
          "source": "src/CV-ImageMath.html#stdDeviationMask",
          "type": "function"
        },
        "index": {
          "description": "Calculates the standard deviation of values for pixels that have non-zero mask value",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "stdDeviationMask",
          "normalized": "Image a b-\u003eImage a b-\u003eCDouble",
          "package": "CV",
          "partial": "Deviation Mask",
          "signature": "Image c d-\u003eImage c d-\u003eCDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:stdDeviationMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the per-pixel difference of two images.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "sub",
          "package": "CV",
          "signature": "Image c1 d1 -\u003e Image c1 d1 -\u003e Image c1 d1",
          "source": "src/CV-ImageMath.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Calculates the per-pixel difference of two images",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "sub",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the (non-absolute) difference of every pixel to image mean.\n   See also \u003ccode\u003e\u003ca\u003esubMeanAbs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "subMean",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#subMean",
          "type": "function"
        },
        "index": {
          "description": "Calculates the non-absolute difference of every pixel to image mean See also subMeanAbs",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "subMean",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Mean",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:subMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the absolute difference of every pixel to image mean.\n   See also \u003ccode\u003e\u003ca\u003esubMean\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "subMeanAbs",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#subMeanAbs",
          "type": "function"
        },
        "index": {
          "description": "Calculates the absolute difference of every pixel to image mean See also subMean",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "subMeanAbs",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Mean Abs",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:subMeanAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts a scalar from every pixel, scalar on right.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "subRS",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMath.html#subRS",
          "type": "function"
        },
        "index": {
          "description": "Subtracts scalar from every pixel scalar on right",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "subRS",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "RS",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:subRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts a scalar from every pixel, scalar on left.\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "subS",
          "package": "CV",
          "signature": "Image c d -\u003e a -\u003e Image c d",
          "source": "src/CV-ImageMath.html#subS",
          "type": "function"
        },
        "index": {
          "description": "Subtracts scalar from every pixel scalar on left",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "subS",
          "normalized": "Image a b-\u003ec-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003ea-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:subS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the sum of pixel values in whole image\n   (notice that OpenCV automatically casts the result to double).\n\u003c/p\u003e",
          "module": "CV.ImageMath",
          "name": "sum",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32",
          "source": "src/CV-ImageMath.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Calculates the sum of pixel values in whole image notice that OpenCV automatically casts the result to double",
          "hierarchy": "CV ImageMath",
          "module": "CV.ImageMath",
          "name": "sum",
          "normalized": "Image GrayScale D-\u003eD",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMath.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMathematical operators for images; see also module \u003ca\u003eImageMath\u003c/a\u003e for the\n   functions these operators are based on.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.ImageMathOp",
          "name": "ImageMathOp",
          "package": "CV",
          "source": "src/CV-ImageMathOp.html",
          "type": "module"
        },
        "index": {
          "description": "Mathematical operators for images see also module ImageMath for the functions these operators are based on",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "ImageMathOp",
          "package": "CV",
          "partial": "Image Math Op",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar multiplication, addition, and subtraction (scalar on left) operators;\n   same as \u003ccode\u003e\u003ca\u003emulS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esubRS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(|*)",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMathOp.html#%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "Scalar multiplication addition and subtraction scalar on left operators same as mulS addS and subRS",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(|*) |*",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar multiplication, addition, and subtraction (scalar on left) operators;\n   same as \u003ccode\u003e\u003ca\u003emulS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esubRS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(|+)",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMathOp.html#%7C%2B",
          "type": "function"
        },
        "index": {
          "description": "Scalar multiplication addition and subtraction scalar on left operators same as mulS addS and subRS",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(|+) |+",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar subtraction operator (scalar on right); same as \u003ccode\u003e\u003ca\u003esubS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(|-)",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMathOp.html#%7C-",
          "type": "function"
        },
        "index": {
          "description": "Scalar subtraction operator scalar on right same as subS",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(|-) |-",
          "normalized": "Image GrayScale D-\u003eD-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eD-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar comparison operators; same as \u003ccode\u003e\u003ca\u003emoreThan\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003elessThan\u003c/a\u003e\u003c/code\u003e. Example: \u003ccode\u003es |\u003e I\u003c/code\u003e produces a binary image that has\n   white pixels in those positions where the value of I is larger than s.\n   Notice that this is opposite to the intuitive interpretation.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(|\u003c)",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMathOp.html#%7C%3C",
          "type": "function"
        },
        "index": {
          "description": "Scalar comparison operators same as moreThan and lessThan Example produces binary image that has white pixels in those positions where the value of is larger than Notice that this is opposite to the intuitive interpretation",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(|\u003c) |\u003c",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-124--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar comparison operators; same as \u003ccode\u003e\u003ca\u003emoreThan\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003elessThan\u003c/a\u003e\u003c/code\u003e. Example: \u003ccode\u003es |\u003e I\u003c/code\u003e produces a binary image that has\n   white pixels in those positions where the value of I is larger than s.\n   Notice that this is opposite to the intuitive interpretation.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(|\u003e)",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMathOp.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Scalar comparison operators same as moreThan and lessThan Example produces binary image that has white pixels in those positions where the value of is larger than Notice that this is opposite to the intuitive interpretation",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(|\u003e) |\u003e",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage addition, subtraction, and multiplication operator; same as \n   \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003emul\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(#*)",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageMathOp.html#%23%2A",
          "type": "function"
        },
        "index": {
          "description": "Image addition subtraction and multiplication operator same as add sub and mul",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(#*) #*",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-35--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage addition, subtraction, and multiplication operator; same as \n   \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003emul\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(#+)",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageMathOp.html#%23%2B",
          "type": "function"
        },
        "index": {
          "description": "Image addition subtraction and multiplication operator same as add sub and mul",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(#+) #+",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-35--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage addition, subtraction, and multiplication operator; same as \n   \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003emul\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(#-)",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageMathOp.html#%23-",
          "type": "function"
        },
        "index": {
          "description": "Image addition subtraction and multiplication operator same as add sub and mul",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(#-) #-",
          "normalized": "Image a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-35--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage comparison operators; same as \u003ccode\u003e\u003ca\u003eless2Than\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003emore2Than\u003c/a\u003e\u003c/code\u003e. Example: \u003ccode\u003eA #\u003c B\u003c/code\u003e produces a binary image that has \n   white pixels in those positions where value of A is less than value of B.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(#\u003c)",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMathOp.html#%23%3C",
          "type": "function"
        },
        "index": {
          "description": "Image comparison operators same as less2Than and more2Than Example produces binary image that has white pixels in those positions where value of is less than value of",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(#\u003c) #\u003c",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale d-\u003eImage GrayScale d-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-35--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage comparison operators; same as \u003ccode\u003e\u003ca\u003eless2Than\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003emore2Than\u003c/a\u003e\u003c/code\u003e. Example: \u003ccode\u003eA #\u003c B\u003c/code\u003e produces a binary image that has \n   white pixels in those positions where value of A is less than value of B.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(#\u003e)",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d -\u003e Image GrayScale D8",
          "source": "src/CV-ImageMathOp.html#%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Image comparison operators same as less2Than and more2Than Example produces binary image that has white pixels in those positions where value of is less than value of",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(#\u003e) #\u003e",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale d-\u003eImage GrayScale d-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar multiplication, addition, and subtraction (scalar on left) operators;\n   same as \u003ccode\u003e\u003ca\u003emulS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddS\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esubRS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CV.ImageMathOp",
          "name": "(-|)",
          "package": "CV",
          "signature": "D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-ImageMathOp.html#-%7C",
          "type": "function"
        },
        "index": {
          "description": "Scalar multiplication addition and subtraction scalar on left operators same as mulS addS and subRS",
          "hierarchy": "CV ImageMathOp",
          "module": "CV.ImageMathOp",
          "name": "(-|) -|",
          "normalized": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageMathOp.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "ImageOp",
          "package": "CV",
          "source": "src/CV-ImageOp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "ImageOp",
          "package": "CV",
          "partial": "Image Op",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "IOP",
          "package": "CV",
          "source": "src/CV-ImageOp.html#IOP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "IOP",
          "package": "CV",
          "partial": "IOP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#t:IOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImageOperation is a name for unary operators that mutate images inplace.\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "ImageOperation",
          "package": "CV",
          "source": "src/CV-ImageOp.html#ImageOperation",
          "type": "newtype"
        },
        "index": {
          "description": "ImageOperation is name for unary operators that mutate images inplace",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "ImageOperation",
          "package": "CV",
          "partial": "Image Operation",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#t:ImageOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two image operations\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "(#\u003e)",
          "package": "CV",
          "signature": "ImageOperation c d -\u003e ImageOperation c d -\u003e ImageOperation c d",
          "source": "src/CV-ImageOp.html#%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Compose two image operations",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "(#\u003e) #\u003e",
          "normalized": "ImageOperation a b-\u003eImageOperation a b-\u003eImageOperation a b",
          "package": "CV",
          "signature": "ImageOperation c d-\u003eImageOperation c d-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:-35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "(&#&)",
          "package": "CV",
          "signature": "IOP (Image c d) e -\u003e IOP (Image c d) f -\u003e IOP (Image c d) (Image c d, Image c d)",
          "source": "src/CV-ImageOp.html#%26%23%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "(&#&) &#&",
          "normalized": "IOP(Image a b)c-\u003eIOP(Image a b)d-\u003eIOP(Image a b)(Image a b,Image a b)",
          "package": "CV",
          "signature": "IOP(Image c d)e-\u003eIOP(Image c d)f-\u003eIOP(Image c d)(Image c d,Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:-38--35--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply image operation to a Copy of an image\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "(\u003c#)",
          "package": "CV",
          "signature": "Image c d -\u003e ImageOperation c d -\u003e Image c d",
          "source": "src/CV-ImageOp.html#%3C%23",
          "type": "function"
        },
        "index": {
          "description": "Apply image operation to Copy of an image",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "(\u003c#) \u003c#",
          "normalized": "Image a b-\u003eImageOperation a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImageOperation c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:-60--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply list of image operations to a Copy of an image. (Makes a single copy and is\n faster than folding over (\u003c#)\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "(\u003c##)",
          "package": "CV",
          "signature": "Image c d -\u003e [ImageOperation c d] -\u003e Image c d",
          "source": "src/CV-ImageOp.html#%3C%23%23",
          "type": "function"
        },
        "index": {
          "description": "Apply list of image operations to Copy of an image Makes single copy and is faster than folding over",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "(\u003c##) \u003c##",
          "normalized": "Image a b-\u003e[ImageOperation a b]-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003e[ImageOperation c d]-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:-60--35--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "IOP",
          "package": "CV",
          "signature": "IOP (a -\u003e IO b)",
          "source": "src/CV-ImageOp.html#IOP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "IOP",
          "normalized": "IOP(a-\u003eIO b)",
          "package": "CV",
          "partial": "IOP",
          "signature": "IOP(a-\u003eIO b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:IOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "ImgOp",
          "package": "CV",
          "signature": "ImgOp (Image c d -\u003e IO ())",
          "source": "src/CV-ImageOp.html#ImageOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "ImgOp",
          "normalized": "ImgOp(Image a b-\u003eIO())",
          "package": "CV",
          "partial": "Img Op",
          "signature": "ImgOp(Image c d-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:ImgOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "blitOp",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e (Int, Int) -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-ImageOp.html#blitOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "blitOp",
          "normalized": "Image GrayScale D-\u003e(Int,Int)-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "Image GrayScale D-\u003e(Int,Int)-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:blitOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "directOp",
          "package": "CV",
          "signature": "Image t t1 -\u003e ImageOperation t t1 -\u003e IO ()",
          "source": "src/CV-ImageOp.html#directOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "directOp",
          "normalized": "Image a a-\u003eImageOperation a a-\u003eIO()",
          "package": "CV",
          "partial": "Op",
          "signature": "Image t t-\u003eImageOperation t t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:directOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "fromImageOp",
          "package": "CV",
          "signature": "ImageOperation t t1 -\u003e IOP (Image t t1) (Image t t1)",
          "source": "src/CV-ImageOp.html#fromImageOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "fromImageOp",
          "normalized": "ImageOperation a a-\u003eIOP(Image a a)(Image a a)",
          "package": "CV",
          "partial": "Image Op",
          "signature": "ImageOperation t t-\u003eIOP(Image t t)(Image t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:fromImageOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unit operation for compose\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "nonOp",
          "package": "CV",
          "signature": "ImageOperation c d",
          "source": "src/CV-ImageOp.html#nonOp",
          "type": "function"
        },
        "index": {
          "description": "An unit operation for compose",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "nonOp",
          "package": "CV",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:nonOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "operate",
          "package": "CV",
          "signature": "ImageOperation c d -\u003e Image c d -\u003e IO (Image c d)",
          "source": "src/CV-ImageOp.html#operate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "operate",
          "normalized": "ImageOperation a b-\u003eImage a b-\u003eIO(Image a b)",
          "package": "CV",
          "signature": "ImageOperation c d-\u003eImage c d-\u003eIO(Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:operate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "operateInPlace",
          "package": "CV",
          "signature": "ImageOperation t t1 -\u003e Image t t1 -\u003e IO ()",
          "source": "src/CV-ImageOp.html#operateInPlace",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "operateInPlace",
          "normalized": "ImageOperation a a-\u003eImage a a-\u003eIO()",
          "package": "CV",
          "partial": "In Place",
          "signature": "ImageOperation t t-\u003eImage t t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:operateInPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "operateOn",
          "package": "CV",
          "signature": "Image c d -\u003e ImageOperation c d -\u003e IO (Image c d)",
          "source": "src/CV-ImageOp.html#operateOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "operateOn",
          "normalized": "Image a b-\u003eImageOperation a b-\u003eIO(Image a b)",
          "package": "CV",
          "partial": "On",
          "signature": "Image c d-\u003eImageOperation c d-\u003eIO(Image c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:operateOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "operateWithROI",
          "package": "CV",
          "signature": "(t2, t3) -\u003e (t4, t5) -\u003e ImageOperation t t1 -\u003e Image t t1 -\u003e IO (Image t t1)",
          "source": "src/CV-ImageOp.html#operateWithROI",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "operateWithROI",
          "normalized": "(a,a)-\u003e(a,a)-\u003eImageOperation a a-\u003eImage a a-\u003eIO(Image a a)",
          "package": "CV",
          "partial": "With ROI",
          "signature": "(t,t)-\u003e(t,t)-\u003eImageOperation t t-\u003eImage t t-\u003eIO(Image t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:operateWithROI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "runIOP",
          "package": "CV",
          "signature": "IOP (Image channels depth) a -\u003e Image channels depth -\u003e IO a",
          "source": "src/CV-ImageOp.html#runIOP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "runIOP",
          "normalized": "IOP(Image a b)c-\u003eImage a b-\u003eIO c",
          "package": "CV",
          "partial": "IOP",
          "signature": "IOP(Image channels depth)a-\u003eImage channels depth-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:runIOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "setPixelOp",
          "package": "CV",
          "signature": "(Int, Int) -\u003e SP (Image c d) -\u003e ImageOperation c d",
          "source": "src/CV-ImageOp.html#setPixelOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "setPixelOp",
          "normalized": "(Int,Int)-\u003eSP(Image a b)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Pixel Op",
          "signature": "(Int,Int)-\u003eSP(Image c d)-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:setPixelOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterate an operation N times\n\u003c/p\u003e",
          "module": "CV.ImageOp",
          "name": "times",
          "package": "CV",
          "signature": "Int -\u003e ImageOperation c d -\u003e ImageOperation c d",
          "source": "src/CV-ImageOp.html#times",
          "type": "function"
        },
        "index": {
          "description": "Iterate an operation times",
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "times",
          "normalized": "Int-\u003eImageOperation a b-\u003eImageOperation a b",
          "package": "CV",
          "signature": "Int-\u003eImageOperation c d-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "unsafeOperate",
          "package": "CV",
          "signature": "ImageOperation c d -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-ImageOp.html#unsafeOperate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "unsafeOperate",
          "normalized": "ImageOperation a b-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Operate",
          "signature": "ImageOperation c d-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:unsafeOperate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.ImageOp",
          "name": "unsafeOperateOn",
          "package": "CV",
          "signature": "Image c d -\u003e ImageOperation c d -\u003e Image c d",
          "source": "src/CV-ImageOp.html#unsafeOperateOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV ImageOp",
          "module": "CV.ImageOp",
          "name": "unsafeOperateOn",
          "normalized": "Image a b-\u003eImageOperation a b-\u003eImage a b",
          "package": "CV",
          "partial": "Operate On",
          "signature": "Image c d-\u003eImageOperation c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-ImageOp.html#v:unsafeOperateOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "Iterators",
          "package": "CV",
          "source": "src/CV-Iterators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "Iterators",
          "package": "CV",
          "partial": "Iterators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "F32I",
          "package": "CV",
          "source": "src/CV-Iterators.html#F32I",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "F32I",
          "package": "CV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#t:F32I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "ImageContext",
          "package": "CV",
          "source": "src/CV-Iterators.html#ImageContext",
          "type": "class"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "ImageContext",
          "package": "CV",
          "partial": "Image Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#t:ImageContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "evolve",
          "package": "CV",
          "signature": "c -\u003e c",
          "source": "src/CV-Iterators.html#evolve",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "evolve",
          "normalized": "a-\u003ea",
          "package": "CV",
          "signature": "c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#v:evolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "filterPixels",
          "package": "CV",
          "signature": "(Float -\u003e Bool) -\u003e Image GrayScale D32 -\u003e [((Int, Int), Float)]",
          "source": "src/CV-Iterators.html#filterPixels",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "filterPixels",
          "normalized": "(Float-\u003eBool)-\u003eImage GrayScale D-\u003e[((Int,Int),Float)]",
          "package": "CV",
          "partial": "Pixels",
          "signature": "(Float-\u003eBool)-\u003eImage GrayScale D-\u003e[((Int,Int),Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#v:filterPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "filterPixelsSlow",
          "package": "CV",
          "signature": "(Float -\u003e Bool) -\u003e Image GrayScale D32 -\u003e [((Int, Int), Float)]",
          "source": "src/CV-Iterators.html#filterPixelsSlow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "filterPixelsSlow",
          "normalized": "(Float-\u003eBool)-\u003eImage GrayScale D-\u003e[((Int,Int),Float)]",
          "package": "CV",
          "partial": "Pixels Slow",
          "signature": "(Float-\u003eBool)-\u003eImage GrayScale D-\u003e[((Int,Int),Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#v:filterPixelsSlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "getPos",
          "package": "CV",
          "signature": "c -\u003e (Int, Int)",
          "source": "src/CV-Iterators.html#getPos",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "getPos",
          "normalized": "a-\u003e(Int,Int)",
          "package": "CV",
          "partial": "Pos",
          "signature": "c-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#v:getPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Iterators",
          "name": "getVal",
          "package": "CV",
          "signature": "c -\u003e Maybe (V c)",
          "source": "src/CV-Iterators.html#getVal",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Iterators",
          "module": "CV.Iterators",
          "name": "getVal",
          "normalized": "a-\u003eMaybe(V a)",
          "package": "CV",
          "partial": "Val",
          "signature": "c-\u003eMaybe(V c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Iterators.html#v:getVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "LightBalance",
          "package": "CV",
          "source": "src/CV-LightBalance.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "LightBalance",
          "package": "CV",
          "partial": "Light Balance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "cos4cylinder",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image channels depth",
          "source": "src/CV-LightBalance.html#cos4cylinder",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "cos4cylinder",
          "normalized": "(Int,Int)-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:cos4cylinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "cos4vignetting",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image channels depth",
          "source": "src/CV-LightBalance.html#cos4vignetting",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "cos4vignetting",
          "normalized": "(Int,Int)-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int)-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:cos4vignetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "f",
          "package": "CV",
          "signature": "Int -\u003e CInt",
          "source": "src/CV-LightBalance.html#f",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "f",
          "normalized": "Int-\u003eCInt",
          "package": "CV",
          "signature": "Int-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "threeB",
          "package": "CV",
          "signature": "(Int, Int) -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e Image channels depth",
          "source": "src/CV-LightBalance.html#threeB",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "threeB",
          "normalized": "(Int,Int)-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int)-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:threeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "twoPar",
          "package": "CV",
          "signature": "(Int, Int) -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e Image channels depth",
          "source": "src/CV-LightBalance.html#twoPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "twoPar",
          "normalized": "(Int,Int)-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eImage a b",
          "package": "CV",
          "partial": "Par",
          "signature": "(Int,Int)-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:twoPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "vignettingModelB3",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO (Ptr BareImage)",
          "source": "src/CV-LightBalance.html#vignettingModelB3",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "vignettingModelB3",
          "normalized": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Model",
          "signature": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:vignettingModelB3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "vignettingModelCos4",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e IO (Ptr BareImage)",
          "source": "src/CV-LightBalance.html#vignettingModelCos4",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "vignettingModelCos4",
          "normalized": "CInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Model Cos",
          "signature": "CInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:vignettingModelCos4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "vignettingModelCos4XCyl",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e IO (Ptr BareImage)",
          "source": "src/CV-LightBalance.html#vignettingModelCos4XCyl",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "vignettingModelCos4XCyl",
          "normalized": "CInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Model Cos XCyl",
          "signature": "CInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:vignettingModelCos4XCyl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "vignettingModelP",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO (Ptr BareImage)",
          "source": "src/CV-LightBalance.html#vignettingModelP",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "vignettingModelP",
          "normalized": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Model",
          "signature": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:vignettingModelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "vignettingModelX2Cyl",
          "package": "CV",
          "signature": "CInt -\u003e CInt -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO (Ptr BareImage)",
          "source": "src/CV-LightBalance.html#vignettingModelX2Cyl",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "vignettingModelX2Cyl",
          "normalized": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Model Cyl",
          "signature": "CInt-\u003eCInt-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:vignettingModelX2Cyl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.LightBalance",
          "name": "x2cylinder",
          "package": "CV",
          "signature": "(Int, Int) -\u003e a -\u003e a1 -\u003e a2 -\u003e Image channels depth",
          "source": "src/CV-LightBalance.html#x2cylinder",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV LightBalance",
          "module": "CV.LightBalance",
          "name": "x2cylinder",
          "normalized": "(Int,Int)-\u003ea-\u003ea-\u003ea-\u003eImage b c",
          "package": "CV",
          "signature": "(Int,Int)-\u003ea-\u003ea-\u003ea-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-LightBalance.html#v:x2cylinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "Marking",
          "package": "CV",
          "source": "src/CV-Marking.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "Marking",
          "package": "CV",
          "partial": "Marking",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "Marker",
          "package": "CV",
          "source": "src/CV-Marking.html#Marker",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "Marker",
          "package": "CV",
          "partial": "Marker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#t:Marker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "boxFlaws",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Marking.html#boxFlaws",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "boxFlaws",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Flaws",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:boxFlaws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "condMarker",
          "package": "CV",
          "signature": "(t1 -\u003e Bool) -\u003e (t -\u003e t1 -\u003e t2 -\u003e ImageOperation c d) -\u003e t -\u003e t1 -\u003e t2 -\u003e ImageOperation c d",
          "source": "src/CV-Marking.html#condMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "condMarker",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea-\u003ea-\u003eImageOperation b c)-\u003ea-\u003ea-\u003ea-\u003eImageOperation b c",
          "package": "CV",
          "partial": "Marker",
          "signature": "(t-\u003eBool)-\u003e(t-\u003et-\u003et-\u003eImageOperation c d)-\u003et-\u003et-\u003et-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:condMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "cuteCircle",
          "package": "CV",
          "signature": "Marker GrayScale D32",
          "source": "src/CV-Marking.html#cuteCircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "cuteCircle",
          "package": "CV",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:cuteCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "cuteCircle1",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ImageOperation c d",
          "source": "src/CV-Marking.html#cuteCircle1",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "cuteCircle1",
          "normalized": "(Int,Int)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Circle",
          "signature": "(Int,Int)-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:cuteCircle1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "cuteDot",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ImageOperation c d",
          "source": "src/CV-Marking.html#cuteDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "cuteDot",
          "normalized": "(Int,Int)-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Dot",
          "signature": "(Int,Int)-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:cuteDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "cuteRect",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e ImageOperation c d",
          "source": "src/CV-Marking.html#cuteRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "cuteRect",
          "normalized": "(a,a)-\u003e(a,a)-\u003eImageOperation b c",
          "package": "CV",
          "partial": "Rect",
          "signature": "(a,a)-\u003e(a,a)-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:cuteRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "displayFlaws",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Marking.html#displayFlaws",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "displayFlaws",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Flaws",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:displayFlaws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "displayLargeFlaws",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Marking.html#displayLargeFlaws",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "displayLargeFlaws",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Large Flaws",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:displayLargeFlaws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "getCoordsForMarkedTiles",
          "package": "CV",
          "signature": "(t2, t3) -\u003e (t, t1) -\u003e [Bool] -\u003e a -\u003e [(t2, t3)]",
          "source": "src/CV-Marking.html#getCoordsForMarkedTiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "getCoordsForMarkedTiles",
          "normalized": "(a,a)-\u003e(a,a)-\u003e[Bool]-\u003eb-\u003e[(a,a)]",
          "package": "CV",
          "partial": "Coords For Marked Tiles",
          "signature": "(t,t)-\u003e(t,t)-\u003e[Bool]-\u003ea-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:getCoordsForMarkedTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "highLightFlaws",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Marking.html#highLightFlaws",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "highLightFlaws",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Light Flaws",
          "signature": "Image GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:highLightFlaws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Marking",
          "name": "markTiles",
          "package": "CV",
          "signature": "Image c d -\u003e (Int, Int) -\u003e (t, t1) -\u003e ((Int, Int) -\u003e t2 -\u003e (Int, Int) -\u003e ImageOperation c d) -\u003e [t2] -\u003e Image c d",
          "source": "src/CV-Marking.html#markTiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Marking",
          "module": "CV.Marking",
          "name": "markTiles",
          "normalized": "Image a b-\u003e(Int,Int)-\u003e(c,c)-\u003e((Int,Int)-\u003ec-\u003e(Int,Int)-\u003eImageOperation a b)-\u003e[c]-\u003eImage a b",
          "package": "CV",
          "partial": "Tiles",
          "signature": "Image c d-\u003e(Int,Int)-\u003e(t,t)-\u003e((Int,Int)-\u003et-\u003e(Int,Int)-\u003eImageOperation c d)-\u003e[t]-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Marking.html#v:markTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides wrappers for CvMat type. This is still preliminary as the type of the\n   matrix isn't coded in the haskell type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Matrix",
          "name": "Matrix",
          "package": "CV",
          "source": "src/CV-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides wrappers for CvMat type This is still preliminary as the type of the matrix isn coded in the haskell type",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "Matrix",
          "package": "CV",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Matrix",
          "name": "Exists",
          "package": "CV",
          "source": "src/CV-Matrix.html#Exists",
          "type": "class"
        },
        "index": {
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "Exists",
          "package": "CV",
          "partial": "Exists",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#t:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Matrix",
          "name": "Matrix",
          "package": "CV",
          "source": "src/CV-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "Matrix",
          "package": "CV",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Matrix",
          "name": "create",
          "package": "CV",
          "signature": "Args a -\u003e IO a",
          "source": "src/CV-Matrix.html#create",
          "type": "method"
        },
        "index": {
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "create",
          "normalized": "Args a-\u003eIO a",
          "package": "CV",
          "signature": "Args a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty matrix of given dimensions\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "emptyMatrix",
          "package": "CV",
          "signature": "Args (Matrix a) -\u003e Matrix a",
          "source": "src/CV-Matrix.html#emptyMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create an empty matrix of given dimensions",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "emptyMatrix",
          "normalized": "Args(Matrix a)-\u003eMatrix a",
          "package": "CV",
          "partial": "Matrix",
          "signature": "Args(Matrix a)-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:emptyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a matrix from a index function\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "fromFunction",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ((Int, Int) -\u003e t) -\u003e Matrix t",
          "source": "src/CV-Matrix.html#fromFunction",
          "type": "function"
        },
        "index": {
          "description": "Generate matrix from index function",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "fromFunction",
          "normalized": "(Int,Int)-\u003e((Int,Int)-\u003ea)-\u003eMatrix a",
          "package": "CV",
          "partial": "Function",
          "signature": "(Int,Int)-\u003e((Int,Int)-\u003et)-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:fromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Matrix",
          "name": "fromList",
          "package": "CV",
          "signature": "(Int, Int) -\u003e [t] -\u003e Matrix t",
          "source": "src/CV-Matrix.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "fromList",
          "normalized": "(Int,Int)-\u003e[a]-\u003eMatrix a",
          "package": "CV",
          "partial": "List",
          "signature": "(Int,Int)-\u003e[t]-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Get an element of the matrix\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "get",
          "package": "CV",
          "signature": "Matrix t -\u003e Int -\u003e Int -\u003e IO t",
          "source": "src/CV-Matrix.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get an element of the matrix",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "get",
          "normalized": "Matrix a-\u003eInt-\u003eInt-\u003eIO a",
          "package": "CV",
          "signature": "Matrix t-\u003eInt-\u003eInt-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Create an identity matrix\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "identity",
          "package": "CV",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/CV-Matrix.html#identity",
          "type": "function"
        },
        "index": {
          "description": "Create an identity matrix",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "identity",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "CV",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix inversion\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "invert",
          "package": "CV",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/CV-Matrix.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Matrix inversion",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "invert",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "CV",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Ordinary matrix multiplication\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "mxm",
          "package": "CV",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/CV-Matrix.html#mxm",
          "type": "function"
        },
        "index": {
          "description": "Ordinary matrix multiplication",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "mxm",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "CV",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:mxm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Write an element to a matrix\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "put",
          "package": "CV",
          "signature": "Matrix t -\u003e Int -\u003e Int -\u003e t -\u003e IO ()",
          "source": "src/CV-Matrix.html#put",
          "type": "function"
        },
        "index": {
          "description": "Write an element to matrix",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "put",
          "normalized": "Matrix a-\u003eInt-\u003eInt-\u003ea-\u003eIO()",
          "package": "CV",
          "signature": "Matrix t-\u003eInt-\u003eInt-\u003et-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a rotation vector to a rotation matrix (1x3 -\u003e 3x3)\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "rodrigues2",
          "package": "CV",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/CV-Matrix.html#rodrigues2",
          "type": "function"
        },
        "index": {
          "description": "Convert rotation vector to rotation matrix x3 x3",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "rodrigues2",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "CV",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:rodrigues2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert matrix to cols represented as nested lists\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "toCols",
          "package": "CV",
          "signature": "Matrix t -\u003e [[t]]",
          "source": "src/CV-Matrix.html#toCols",
          "type": "function"
        },
        "index": {
          "description": "Convert matrix to cols represented as nested lists",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "toCols",
          "normalized": "Matrix a-\u003e[[a]]",
          "package": "CV",
          "partial": "Cols",
          "signature": "Matrix t-\u003e[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:toCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Convert a matrix to flat list (row major order)\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "toList",
          "package": "CV",
          "signature": "Matrix a -\u003e [a]",
          "source": "src/CV-Matrix.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert matrix to flat list row major order",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "toList",
          "normalized": "Matrix a-\u003e[a]",
          "package": "CV",
          "partial": "List",
          "signature": "Matrix a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert matrix to rows represented as nested lists\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "toRows",
          "package": "CV",
          "signature": "Matrix t -\u003e [[t]]",
          "source": "src/CV-Matrix.html#toRows",
          "type": "function"
        },
        "index": {
          "description": "Convert matrix to rows represented as nested lists",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "toRows",
          "normalized": "Matrix a-\u003e[[a]]",
          "package": "CV",
          "partial": "Rows",
          "signature": "Matrix t-\u003e[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:toRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a matrix. Does not do complex conjugation for complex matrices\n\u003c/p\u003e",
          "module": "CV.Matrix",
          "name": "transpose",
          "package": "CV",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/CV-Matrix.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "Transpose matrix Does not do complex conjugation for complex matrices",
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "transpose",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "CV",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Matrix",
          "name": "withMatPtr",
          "package": "CV",
          "signature": "Matrix x -\u003e (Ptr C'CvMat -\u003e IO a) -\u003e IO a",
          "source": "src/CV-Matrix.html#withMatPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Matrix",
          "module": "CV.Matrix",
          "name": "withMatPtr",
          "normalized": "Matrix a-\u003e(Ptr C'CvMat-\u003eIO b)-\u003eIO b",
          "package": "CV",
          "partial": "Mat Ptr",
          "signature": "Matrix x-\u003e(Ptr C'CvMat-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Matrix.html#v:withMatPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "Morphology",
          "package": "CV",
          "source": "src/CV-Morphology.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "Morphology",
          "package": "CV",
          "partial": "Morphology",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "KernelShape",
          "package": "CV",
          "source": "src/CV-Morphology.html#KernelShape",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "KernelShape",
          "package": "CV",
          "partial": "Kernel Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#t:KernelShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "StructuringElement",
          "package": "CV",
          "source": "src/CV-Morphology.html#StructuringElement",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "StructuringElement",
          "package": "CV",
          "partial": "Structuring Element",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#t:StructuringElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "CrossShape",
          "package": "CV",
          "signature": "CrossShape",
          "source": "src/CV-Morphology.html#KernelShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "CrossShape",
          "package": "CV",
          "partial": "Cross Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:CrossShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "EllipseShape",
          "package": "CV",
          "signature": "EllipseShape",
          "source": "src/CV-Morphology.html#KernelShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "EllipseShape",
          "package": "CV",
          "partial": "Ellipse Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:EllipseShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "RectShape",
          "package": "CV",
          "signature": "RectShape",
          "source": "src/CV-Morphology.html#KernelShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "RectShape",
          "package": "CV",
          "partial": "Rect Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:RectShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "basicSE",
          "package": "CV",
          "signature": "ConvKernel",
          "source": "src/CV-Morphology.html#basicSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "basicSE",
          "package": "CV",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:basicSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "bigSE",
          "package": "CV",
          "signature": "ConvKernel",
          "source": "src/CV-Morphology.html#bigSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "bigSE",
          "package": "CV",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:bigSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a black tophat filtering of size\n\u003c/p\u003e",
          "module": "CV.Morphology",
          "name": "blackTopHat",
          "package": "CV",
          "signature": "CInt -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Morphology.html#blackTopHat",
          "type": "function"
        },
        "index": {
          "description": "Perform black tophat filtering of size",
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "blackTopHat",
          "normalized": "CInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Top Hat",
          "signature": "CInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:blackTopHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "close",
          "package": "CV",
          "signature": "StructuringElement -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Morphology.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "close",
          "normalized": "StructuringElement-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "StructuringElement-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "closeOp",
          "package": "CV",
          "signature": "StructuringElement -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Morphology.html#closeOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "closeOp",
          "normalized": "StructuringElement-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "StructuringElement-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:closeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "customSE",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e (CInt, CInt) -\u003e [CInt] -\u003e ConvKernel",
          "source": "src/CV-Morphology.html#customSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "customSE",
          "normalized": "(CInt,CInt)-\u003e(CInt,CInt)-\u003e[CInt]-\u003eConvKernel",
          "package": "CV",
          "partial": "SE",
          "signature": "(CInt,CInt)-\u003e(CInt,CInt)-\u003e[CInt]-\u003eConvKernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:customSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "dilate",
          "package": "CV",
          "signature": "ConvKernel -\u003e Int -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Morphology.html#dilate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "dilate",
          "normalized": "ConvKernel-\u003eInt-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "ConvKernel-\u003eInt-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:dilate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "dilateOp",
          "package": "CV",
          "signature": "ConvKernel -\u003e Int -\u003e ImageOperation c d",
          "source": "src/CV-Morphology.html#dilateOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "dilateOp",
          "normalized": "ConvKernel-\u003eInt-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "ConvKernel-\u003eInt-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:dilateOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "erode",
          "package": "CV",
          "signature": "ConvKernel -\u003e Int -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Morphology.html#erode",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "erode",
          "normalized": "ConvKernel-\u003eInt-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "ConvKernel-\u003eInt-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:erode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "erodeOp",
          "package": "CV",
          "signature": "ConvKernel -\u003e Int -\u003e ImageOperation c d",
          "source": "src/CV-Morphology.html#erodeOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "erodeOp",
          "normalized": "ConvKernel-\u003eInt-\u003eImageOperation a b",
          "package": "CV",
          "partial": "Op",
          "signature": "ConvKernel-\u003eInt-\u003eImageOperation c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:erodeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "geodesic",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e ImageOperation GrayScale D32 -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Morphology.html#geodesic",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "geodesic",
          "normalized": "Image GrayScale D-\u003eImageOperation GrayScale D-\u003eImageOperation GrayScale D",
          "package": "CV",
          "signature": "Image GrayScale D-\u003eImageOperation GrayScale D-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:geodesic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "open",
          "package": "CV",
          "signature": "StructuringElement -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Morphology.html#open",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "open",
          "normalized": "StructuringElement-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "StructuringElement-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "openOp",
          "package": "CV",
          "signature": "StructuringElement -\u003e ImageOperation GrayScale D32",
          "source": "src/CV-Morphology.html#openOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "openOp",
          "normalized": "StructuringElement-\u003eImageOperation GrayScale D",
          "package": "CV",
          "partial": "Op",
          "signature": "StructuringElement-\u003eImageOperation GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:openOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Morphology",
          "name": "structuringElement",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e (CInt, CInt) -\u003e a -\u003e ConvKernel",
          "source": "src/CV-Morphology.html#structuringElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "structuringElement",
          "normalized": "(CInt,CInt)-\u003e(CInt,CInt)-\u003ea-\u003eConvKernel",
          "package": "CV",
          "partial": "Element",
          "signature": "(CInt,CInt)-\u003e(CInt,CInt)-\u003ea-\u003eConvKernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:structuringElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a white tophat filtering of size\n\u003c/p\u003e",
          "module": "CV.Morphology",
          "name": "whiteTopHat",
          "package": "CV",
          "signature": "CInt -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Morphology.html#whiteTopHat",
          "type": "function"
        },
        "index": {
          "description": "Perform white tophat filtering of size",
          "hierarchy": "CV Morphology",
          "module": "CV.Morphology",
          "name": "whiteTopHat",
          "normalized": "CInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Top Hat",
          "signature": "CInt-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Morphology.html#v:whiteTopHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e&#160;This module provides the elementary image splining (seamless merging) using the burt-adelson multiresolution splines\n introduced in \u003ca\u003eA multiresolution spline with application to image mosaics\u003c/a\u003e, Burt, P.J. and Adelson, E.H., ACM Transactions on Graphics,1983.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.MultiresolutionSpline",
          "name": "MultiresolutionSpline",
          "package": "CV",
          "source": "src/CV-MultiresolutionSpline.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the elementary image splining seamless merging using the burt-adelson multiresolution splines introduced in multiresolution spline with application to image mosaics Burt P.J and Adelson E.H ACM Transactions on Graphics",
          "hierarchy": "CV MultiresolutionSpline",
          "module": "CV.MultiresolutionSpline",
          "name": "MultiresolutionSpline",
          "package": "CV",
          "partial": "Multiresolution Spline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-MultiresolutionSpline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function merges two images based on given mask, the first image dominates on areas where the mask\n   is 1 and the second where the mask is 0. The merging should be relatively seamless and is controlled by\n   the \u003ccode\u003elevels\u003c/code\u003e parameter, which adjusts the accuracy. Usually, decent results can be obtained with 4 pyramid \n   levels.\n\u003c/p\u003e\u003cp\u003eNote that the mask should contain a tiny blurred region between images for optimal result.\n\u003c/p\u003e",
          "module": "CV.MultiresolutionSpline",
          "name": "burtAdelsonMerge",
          "package": "CV",
          "signature": "Int -\u003e Image GrayScale D8 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-MultiresolutionSpline.html#burtAdelsonMerge",
          "type": "function"
        },
        "index": {
          "description": "This function merges two images based on given mask the first image dominates on areas where the mask is and the second where the mask is The merging should be relatively seamless and is controlled by the levels parameter which adjusts the accuracy Usually decent results can be obtained with pyramid levels Note that the mask should contain tiny blurred region between images for optimal result",
          "hierarchy": "CV MultiresolutionSpline",
          "module": "CV.MultiresolutionSpline",
          "name": "burtAdelsonMerge",
          "normalized": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Adelson Merge",
          "signature": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-MultiresolutionSpline.html#v:burtAdelsonMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "Operations",
          "package": "CV",
          "source": "src/CV-Operations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "Operations",
          "package": "CV",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormType",
          "package": "CV",
          "source": "src/CV-Operations.html#NormType",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormType",
          "package": "CV",
          "partial": "Norm Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#t:NormType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormC",
          "package": "CV",
          "signature": "NormC",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormC",
          "package": "CV",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiff",
          "package": "CV",
          "signature": "NormDiff",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiff",
          "package": "CV",
          "partial": "Norm Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffC",
          "package": "CV",
          "signature": "NormDiffC",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffC",
          "package": "CV",
          "partial": "Norm Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffL1",
          "package": "CV",
          "signature": "NormDiffL1",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffL1",
          "package": "CV",
          "partial": "Norm Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffL2",
          "package": "CV",
          "signature": "NormDiffL2",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffL2",
          "package": "CV",
          "partial": "Norm Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffRelativeC",
          "package": "CV",
          "signature": "NormDiffRelativeC",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffRelativeC",
          "package": "CV",
          "partial": "Norm Diff Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffRelativeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffRelativeL1",
          "package": "CV",
          "signature": "NormDiffRelativeL1",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffRelativeL1",
          "package": "CV",
          "partial": "Norm Diff Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffRelativeL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormDiffRelativeL2",
          "package": "CV",
          "signature": "NormDiffRelativeL2",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormDiffRelativeL2",
          "package": "CV",
          "partial": "Norm Diff Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormDiffRelativeL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormL1",
          "package": "CV",
          "signature": "NormL1",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormL1",
          "package": "CV",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormL2",
          "package": "CV",
          "signature": "NormL2",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormL2",
          "package": "CV",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormMask",
          "package": "CV",
          "signature": "NormMask",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormMask",
          "package": "CV",
          "partial": "Norm Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormMinMax",
          "package": "CV",
          "signature": "NormMinMax",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormMinMax",
          "package": "CV",
          "partial": "Norm Min Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormMinMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "NormRelative",
          "package": "CV",
          "signature": "NormRelative",
          "source": "src/CV-Operations.html#NormType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "NormRelative",
          "package": "CV",
          "partial": "Norm Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:NormRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "cartToPolar",
          "package": "CV",
          "signature": "(Image GrayScale D32, Image GrayScale D32) -\u003e (Image GrayScale D32, Image GrayScale D32)",
          "source": "src/CV-Operations.html#cartToPolar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "cartToPolar",
          "normalized": "(Image GrayScale D,Image GrayScale D)-\u003e(Image GrayScale D,Image GrayScale D)",
          "package": "CV",
          "partial": "To Polar",
          "signature": "(Image GrayScale D,Image GrayScale D)-\u003e(Image GrayScale D,Image GrayScale D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:cartToPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "clear",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d",
          "source": "src/CV-Operations.html#clear",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "clear",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "expand",
          "package": "CV",
          "signature": "(Int, Int, Int, Int) -\u003e Image d c -\u003e Image d c",
          "source": "src/CV-Operations.html#expand",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "expand",
          "normalized": "(Int,Int,Int,Int)-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "(Int,Int,Int,Int)-\u003eImage d c-\u003eImage d c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "logNormalize",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Operations.html#logNormalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "logNormalize",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Normalize",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:logNormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "normalize",
          "package": "CV",
          "signature": "Double -\u003e Double -\u003e NormType -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Operations.html#normalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "normalize",
          "normalized": "Double-\u003eDouble-\u003eNormType-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Double-\u003eDouble-\u003eNormType-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "set",
          "package": "CV",
          "signature": "Double -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Operations.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "set",
          "normalized": "Double-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Double-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "unitNormalize",
          "package": "CV",
          "signature": "Image GrayScale a -\u003e Image GrayScale a",
          "source": "src/CV-Operations.html#unitNormalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "unitNormalize",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "partial": "Normalize",
          "signature": "Image GrayScale a-\u003eImage GrayScale a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:unitNormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Operations",
          "name": "unitStretch",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d",
          "source": "src/CV-Operations.html#unitStretch",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Operations",
          "module": "CV.Operations",
          "name": "unitStretch",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "partial": "Stretch",
          "signature": "Image c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Operations.html#v:unitStretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e&#160;This module is an applicative wrapper for images. It introduces Pixelwise type that\n   can be converted from and to grayscale images and which has an applicative and functor\n   instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Pixelwise",
          "name": "Pixelwise",
          "package": "CV",
          "source": "src/CV-Pixelwise.html",
          "type": "module"
        },
        "index": {
          "description": "This module is an applicative wrapper for images It introduces Pixelwise type that can be converted from and to grayscale images and which has an applicative and functor instances",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "Pixelwise",
          "package": "CV",
          "partial": "Pixelwise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for allowing functor and applicative instances for non-polymorphic image types.\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "Pixelwise",
          "package": "CV",
          "source": "src/CV-Pixelwise.html#Pixelwise",
          "type": "data"
        },
        "index": {
          "description": "wrapper for allowing functor and applicative instances for non-polymorphic image types",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "Pixelwise",
          "package": "CV",
          "partial": "Pixelwise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#t:Pixelwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for `a \u003ca\u003e$\u003c/a\u003e fromImage b`\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "(\u003c$$\u003e)",
          "package": "CV",
          "signature": "(P b1 -\u003e b) -\u003e b1 -\u003e Pixelwise b",
          "source": "src/CV-Pixelwise.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for fromImage",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(P a-\u003ea)-\u003ea-\u003ePixelwise a",
          "package": "CV",
          "signature": "(P b-\u003eb)-\u003eb-\u003ePixelwise b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for `a \u003ca\u003e*\u003c/a\u003e fromImage b`\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "(\u003c+\u003e)",
          "package": "CV",
          "signature": "Pixelwise (P b1 -\u003e b) -\u003e b1 -\u003e Pixelwise b",
          "source": "src/CV-Pixelwise.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for fromImage",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Pixelwise(P a-\u003ea)-\u003ea-\u003ePixelwise a",
          "package": "CV",
          "signature": "Pixelwise(P b-\u003eb)-\u003eb-\u003ePixelwise b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "MkP",
          "package": "CV",
          "signature": "MkP",
          "source": "src/CV-Pixelwise.html#Pixelwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "MkP",
          "package": "CV",
          "partial": "Mk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:MkP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "eltOf",
          "package": "CV",
          "signature": "(Int, Int) -\u003e x",
          "source": "src/CV-Pixelwise.html#Pixelwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "eltOf",
          "normalized": "(Int,Int)-\u003ea",
          "package": "CV",
          "partial": "Of",
          "signature": "(Int,Int)-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:eltOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a function into construct into a Pixelwise construct\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "fromFunction",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ((Int, Int) -\u003e x) -\u003e Pixelwise x",
          "source": "src/CV-Pixelwise.html#fromFunction",
          "type": "function"
        },
        "index": {
          "description": "Convert function into construct into Pixelwise construct",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "fromFunction",
          "normalized": "(Int,Int)-\u003e((Int,Int)-\u003ea)-\u003ePixelwise a",
          "package": "CV",
          "partial": "Function",
          "signature": "(Int,Int)-\u003e((Int,Int)-\u003ex)-\u003ePixelwise x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:fromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "fromImage",
          "package": "CV",
          "signature": "b -\u003e Pixelwise (P b)",
          "source": "src/CV-Pixelwise.html#fromImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "fromImage",
          "normalized": "a-\u003ePixelwise(P a)",
          "package": "CV",
          "partial": "Image",
          "signature": "b-\u003ePixelwise(P b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:fromImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "imageFromFunction",
          "package": "CV",
          "signature": "(Int, Int) -\u003e ((Int, Int) -\u003e SP (Image a b)) -\u003e Image a b",
          "source": "src/CV-Pixelwise.html#imageFromFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "imageFromFunction",
          "normalized": "(Int,Int)-\u003e((Int,Int)-\u003eSP(Image a b))-\u003eImage a b",
          "package": "CV",
          "partial": "From Function",
          "signature": "(Int,Int)-\u003e((Int,Int)-\u003eSP(Image a b))-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:imageFromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert image to a function, which returns pixel values in the domain of\n the image and zero elsewhere\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "imageToFunction",
          "package": "CV",
          "signature": "Image a b -\u003e (Int, Int) -\u003e P (Image a b)",
          "source": "src/CV-Pixelwise.html#imageToFunction",
          "type": "function"
        },
        "index": {
          "description": "Convert image to function which returns pixel values in the domain of the image and zero elsewhere",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "imageToFunction",
          "normalized": "Image a b-\u003e(Int,Int)-\u003eP(Image a b)",
          "package": "CV",
          "partial": "To Function",
          "signature": "Image a b-\u003e(Int,Int)-\u003eP(Image a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:imageToFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "mapImage",
          "package": "CV",
          "signature": "(P (Image a b) -\u003e SP (Image c d)) -\u003e Image a b -\u003e Image c d",
          "source": "src/CV-Pixelwise.html#mapImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "mapImage",
          "normalized": "(P(Image a b)-\u003eSP(Image c d))-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "Image",
          "signature": "(P(Image a b)-\u003eSP(Image c d))-\u003eImage a b-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:mapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "mapPixels",
          "package": "CV",
          "signature": "(t -\u003e x) -\u003e Pixelwise t -\u003e Pixelwise x",
          "source": "src/CV-Pixelwise.html#mapPixels",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "mapPixels",
          "normalized": "(a-\u003eb)-\u003ePixelwise a-\u003ePixelwise b",
          "package": "CV",
          "partial": "Pixels",
          "signature": "(t-\u003ex)-\u003ePixelwise t-\u003ePixelwise x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:mapPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-arrange pixel positions and values\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "remap",
          "package": "CV",
          "signature": "(((Int, Int) -\u003e b) -\u003e (Int, Int) -\u003e x) -\u003e Pixelwise b -\u003e Pixelwise x",
          "source": "src/CV-Pixelwise.html#remap",
          "type": "function"
        },
        "index": {
          "description": "Re-arrange pixel positions and values",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "remap",
          "normalized": "(((Int,Int)-\u003ea)-\u003e(Int,Int)-\u003eb)-\u003ePixelwise a-\u003ePixelwise b",
          "package": "CV",
          "signature": "(((Int,Int)-\u003eb)-\u003e(Int,Int)-\u003ex)-\u003ePixelwise b-\u003ePixelwise x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:remap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "remapImage",
          "package": "CV",
          "signature": "(((Int, Int) -\u003e P (Image a b)) -\u003e (Int, Int) -\u003e SP (Image a b)) -\u003e Image a b -\u003e Image a b",
          "source": "src/CV-Pixelwise.html#remapImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "remapImage",
          "normalized": "(((Int,Int)-\u003eP(Image a b))-\u003e(Int,Int)-\u003eSP(Image a b))-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "partial": "Image",
          "signature": "(((Int,Int)-\u003eP(Image a b))-\u003e(Int,Int)-\u003eSP(Image a b))-\u003eImage a b-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:remapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Pixelwise",
          "name": "sizeOf",
          "package": "CV",
          "signature": "(Int, Int)",
          "source": "src/CV-Pixelwise.html#Pixelwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "sizeOf",
          "normalized": "(Int,Int)",
          "package": "CV",
          "partial": "Of",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pixelwise construct to image.\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "toImage",
          "package": "CV",
          "signature": "Pixelwise (SP (Image a b)) -\u003e Image a b",
          "source": "src/CV-Pixelwise.html#toImage",
          "type": "function"
        },
        "index": {
          "description": "Convert pixelwise construct to image",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "toImage",
          "normalized": "Pixelwise(SP(Image a b))-\u003eImage a b",
          "package": "CV",
          "partial": "Image",
          "signature": "Pixelwise(SP(Image a b))-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:toImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pixelwise construct to image.\n\u003c/p\u003e",
          "module": "CV.Pixelwise",
          "name": "toImagePar",
          "package": "CV",
          "signature": "Int -\u003e Pixelwise (SP (Image a b)) -\u003e Image a b",
          "source": "src/CV-Pixelwise.html#toImagePar",
          "type": "function"
        },
        "index": {
          "description": "Convert pixelwise construct to image",
          "hierarchy": "CV Pixelwise",
          "module": "CV.Pixelwise",
          "name": "toImagePar",
          "normalized": "Int-\u003ePixelwise(SP(Image a b))-\u003eImage a b",
          "package": "CV",
          "partial": "Image Par",
          "signature": "Int-\u003ePixelwise(SP(Image a b))-\u003eImage a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Pixelwise.html#v:toImagePar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Projection",
          "name": "Projection",
          "package": "CV",
          "source": "src/CV-Projection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Projection",
          "module": "CV.Projection",
          "name": "Projection",
          "package": "CV",
          "partial": "Projection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Projection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Projection",
          "name": "projectPolar",
          "package": "CV",
          "signature": "Image c d -\u003e Image GrayScale D32",
          "source": "src/CV-Projection.html#projectPolar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Projection",
          "module": "CV.Projection",
          "name": "projectPolar",
          "normalized": "Image a b-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Polar",
          "signature": "Image c d-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Projection.html#v:projectPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "Sampling",
          "package": "CV",
          "source": "src/CV-Sampling.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "Sampling",
          "package": "CV",
          "partial": "Sampling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "allButLast",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/CV-Sampling.html#allButLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "allButLast",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "partial": "But Last",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:allButLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "allPatches",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image c d -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#allPatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "allPatches",
          "normalized": "(Int,Int)-\u003eImage a b-\u003e[Image a b]",
          "package": "CV",
          "partial": "Patches",
          "signature": "(Int,Int)-\u003eImage c d-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:allPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "both",
          "package": "CV",
          "signature": "(t -\u003e t1) -\u003e (t, t) -\u003e (t1, t1)",
          "source": "src/CV-Sampling.html#both",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "both",
          "normalized": "(a-\u003ea)-\u003e(a,a)-\u003e(a,a)",
          "package": "CV",
          "signature": "(t-\u003et)-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "discardAroundEdges",
          "package": "CV",
          "signature": "(t, t1) -\u003e (t, t1) -\u003e [(t, t1)] -\u003e [(t, t1)]",
          "source": "src/CV-Sampling.html#discardAroundEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "discardAroundEdges",
          "normalized": "(a,a)-\u003e(a,a)-\u003e[(a,a)]-\u003e[(a,a)]",
          "package": "CV",
          "partial": "Around Edges",
          "signature": "(t,t)-\u003e(t,t)-\u003e[(t,t)]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:discardAroundEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getCenteredPatches",
          "package": "CV",
          "signature": "(Int, Int) -\u003e [(Int, Int)] -\u003e Image c d -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#getCenteredPatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getCenteredPatches",
          "normalized": "(Int,Int)-\u003e[(Int,Int)]-\u003eImage a b-\u003e[Image a b]",
          "package": "CV",
          "partial": "Centered Patches",
          "signature": "(Int,Int)-\u003e[(Int,Int)]-\u003eImage c d-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getCenteredPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getCoordsFromMarks",
          "package": "CV",
          "signature": "a -\u003e [(Int, Int)]",
          "source": "src/CV-Sampling.html#getCoordsFromMarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getCoordsFromMarks",
          "normalized": "a-\u003e[(Int,Int)]",
          "package": "CV",
          "partial": "Coords From Marks",
          "signature": "a-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getCoordsFromMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getMarkedAndUnmarkedTiles",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (CDouble, CDouble) -\u003e Image c d -\u003e Image GrayScale Float -\u003e ([Image c d], [Image c d])",
          "source": "src/CV-Sampling.html#getMarkedAndUnmarkedTiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getMarkedAndUnmarkedTiles",
          "normalized": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage a b-\u003eImage GrayScale Float-\u003e([Image a b],[Image a b])",
          "package": "CV",
          "partial": "Marked And Unmarked Tiles",
          "signature": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage c d-\u003eImage GrayScale Float-\u003e([Image c d],[Image c d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getMarkedAndUnmarkedTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getMarkedPatches",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image c d -\u003e a -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#getMarkedPatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getMarkedPatches",
          "normalized": "(Int,Int)-\u003eImage a b-\u003ec-\u003e[Image a b]",
          "package": "CV",
          "partial": "Marked Patches",
          "signature": "(Int,Int)-\u003eImage c d-\u003ea-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getMarkedPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getOverlappedTileCoords",
          "package": "CV",
          "signature": "(t2, t3) -\u003e (t, t1) -\u003e a -\u003e [(t2, t3)]",
          "source": "src/CV-Sampling.html#getOverlappedTileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getOverlappedTileCoords",
          "normalized": "(a,a)-\u003e(a,a)-\u003eb-\u003e[(a,a)]",
          "package": "CV",
          "partial": "Overlapped Tile Coords",
          "signature": "(t,t)-\u003e(t,t)-\u003ea-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getOverlappedTileCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getOverlappedTiles",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (CDouble, CDouble) -\u003e Image c d -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#getOverlappedTiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getOverlappedTiles",
          "normalized": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage a b-\u003e[Image a b]",
          "package": "CV",
          "partial": "Overlapped Tiles",
          "signature": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage c d-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getOverlappedTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getOverlappedTilesC",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (CDouble, CDouble) -\u003e Image c d -\u003e [((Int, Int), Image c d)]",
          "source": "src/CV-Sampling.html#getOverlappedTilesC",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getOverlappedTilesC",
          "normalized": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage a b-\u003e[((Int,Int),Image a b)]",
          "package": "CV",
          "partial": "Overlapped Tiles",
          "signature": "(Int,Int)-\u003e(CDouble,CDouble)-\u003eImage c d-\u003e[((Int,Int),Image c d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getOverlappedTilesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getPatches",
          "package": "CV",
          "signature": "(Int, Int) -\u003e [(Int, Int)] -\u003e Image c d -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#getPatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getPatches",
          "normalized": "(Int,Int)-\u003e[(Int,Int)]-\u003eImage a b-\u003e[Image a b]",
          "package": "CV",
          "partial": "Patches",
          "signature": "(Int,Int)-\u003e[(Int,Int)]-\u003eImage c d-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getTiles",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image c d -\u003e [Image c d]",
          "source": "src/CV-Sampling.html#getTiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getTiles",
          "normalized": "(Int,Int)-\u003eImage a b-\u003e[Image a b]",
          "package": "CV",
          "partial": "Tiles",
          "signature": "(Int,Int)-\u003eImage c d-\u003e[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "getTilesC",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Image c d -\u003e [((Int, Int), Image c d)]",
          "source": "src/CV-Sampling.html#getTilesC",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "getTilesC",
          "normalized": "(Int,Int)-\u003eImage a b-\u003e[((Int,Int),Image a b)]",
          "package": "CV",
          "partial": "Tiles",
          "signature": "(Int,Int)-\u003eImage c d-\u003e[((Int,Int),Image c d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:getTilesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "randomCoord",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Gen (PrimState m) -\u003e m (Int, Int)",
          "source": "src/CV-Sampling.html#randomCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "randomCoord",
          "normalized": "(Int,Int)-\u003eGen(PrimState a)-\u003ea(Int,Int)",
          "package": "CV",
          "partial": "Coord",
          "signature": "(Int,Int)-\u003eGen(PrimState m)-\u003em(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:randomCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Sampling",
          "name": "randomPatches",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Int -\u003e Image c d -\u003e Gen (PrimState m) -\u003e m [Image c d]",
          "source": "src/CV-Sampling.html#randomPatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Sampling",
          "module": "CV.Sampling",
          "name": "randomPatches",
          "normalized": "(Int,Int)-\u003eInt-\u003eImage a b-\u003eGen(PrimState c)-\u003ec[Image a b]",
          "package": "CV",
          "partial": "Patches",
          "signature": "(Int,Int)-\u003eInt-\u003eImage c d-\u003eGen(PrimState m)-\u003em[Image c d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Sampling.html#v:randomPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "TemplateMatching",
          "package": "CV",
          "source": "src/CV-TemplateMatching.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "TemplateMatching",
          "package": "CV",
          "partial": "Template Matching",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "MatchType",
          "package": "CV",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "MatchType",
          "package": "CV",
          "partial": "Match Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#t:MatchType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "ShapeMatchMethod",
          "package": "CV",
          "source": "src/CV-TemplateMatching.html#ShapeMatchMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "ShapeMatchMethod",
          "package": "CV",
          "partial": "Shape Match Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#t:ShapeMatchMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "CCOEFF",
          "package": "CV",
          "signature": "CCOEFF",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "CCOEFF",
          "package": "CV",
          "partial": "CCOEFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:CCOEFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "CCOEFF_NORMED",
          "package": "CV",
          "signature": "CCOEFF_NORMED",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "CCOEFF_NORMED",
          "package": "CV",
          "partial": "CCOEFF NORMED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:CCOEFF_NORMED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "CCORR",
          "package": "CV",
          "signature": "CCORR",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "CCORR",
          "package": "CV",
          "partial": "CCORR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:CCORR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "CCORR_NORMED",
          "package": "CV",
          "signature": "CCORR_NORMED",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "CCORR_NORMED",
          "package": "CV",
          "partial": "CCORR NORMED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:CCORR_NORMED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "Method1",
          "package": "CV",
          "signature": "Method1",
          "source": "src/CV-TemplateMatching.html#ShapeMatchMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "Method1",
          "package": "CV",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:Method1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "Method2",
          "package": "CV",
          "signature": "Method2",
          "source": "src/CV-TemplateMatching.html#ShapeMatchMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "Method2",
          "package": "CV",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:Method2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "Method3",
          "package": "CV",
          "signature": "Method3",
          "source": "src/CV-TemplateMatching.html#ShapeMatchMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "Method3",
          "package": "CV",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:Method3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "SQDIFF",
          "package": "CV",
          "signature": "SQDIFF",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "SQDIFF",
          "package": "CV",
          "partial": "SQDIFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:SQDIFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "SQDIFF_NORMED",
          "package": "CV",
          "signature": "SQDIFF_NORMED",
          "source": "src/CV-TemplateMatching.html#MatchType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "SQDIFF_NORMED",
          "package": "CV",
          "partial": "SQDIFF NORMED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:SQDIFF_NORMED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "cvMatchShapes",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e CDouble -\u003e IO CDouble",
          "source": "src/CV-TemplateMatching.html#cvMatchShapes",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "cvMatchShapes",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCDouble-\u003eIO CDouble",
          "package": "CV",
          "partial": "Match Shapes",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCDouble-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:cvMatchShapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "cvMatchTemplate",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-TemplateMatching.html#cvMatchTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "cvMatchTemplate",
          "normalized": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Match Template",
          "signature": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:cvMatchTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "getTemplateMap",
          "package": "CV",
          "signature": "Image c d -\u003e Image c1 d1 -\u003e Image channels depth",
          "source": "src/CV-TemplateMatching.html#getTemplateMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "getTemplateMap",
          "normalized": "Image a b-\u003eImage a b-\u003eImage c d",
          "package": "CV",
          "partial": "Template Map",
          "signature": "Image c d-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:getTemplateMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "matchShapes",
          "package": "CV",
          "signature": "ShapeMatchMethod -\u003e Image GrayScale D8 -\u003e Image GrayScale D8 -\u003e Double",
          "source": "src/CV-TemplateMatching.html#matchShapes",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "matchShapes",
          "normalized": "ShapeMatchMethod-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eDouble",
          "package": "CV",
          "partial": "Shapes",
          "signature": "ShapeMatchMethod-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:matchShapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "matchTemplate",
          "package": "CV",
          "signature": "MatchType -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-TemplateMatching.html#matchTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "matchTemplate",
          "normalized": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Template",
          "signature": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:matchTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "regionToInt",
          "package": "CV",
          "signature": "Rectangle a1 -\u003e Rectangle a",
          "source": "src/CV-TemplateMatching.html#regionToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "regionToInt",
          "normalized": "Rectangle a-\u003eRectangle a",
          "package": "CV",
          "partial": "To Int",
          "signature": "Rectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:regionToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "simpleMatchTemplate",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CDouble -\u003e CInt -\u003e IO ()",
          "source": "src/CV-TemplateMatching.html#simpleMatchTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "simpleMatchTemplate",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CDouble-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Match Template",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CDouble-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:simpleMatchTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "simpleTemplateMatch",
          "package": "CV",
          "signature": "MatchType -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e ((Int, Int), Double)",
          "source": "src/CV-TemplateMatching.html#simpleTemplateMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "simpleTemplateMatch",
          "normalized": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003e((Int,Int),Double)",
          "package": "CV",
          "partial": "Template Match",
          "signature": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003e((Int,Int),Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:simpleTemplateMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform subpixel template matching using intensity interpolation\n\u003c/p\u003e",
          "module": "CV.TemplateMatching",
          "name": "subPixelTemplateMatch",
          "package": "CV",
          "signature": "MatchType -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e Double -\u003e (Double, Double)",
          "source": "src/CV-TemplateMatching.html#subPixelTemplateMatch",
          "type": "function"
        },
        "index": {
          "description": "Perform subpixel template matching using intensity interpolation",
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "subPixelTemplateMatch",
          "normalized": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eDouble-\u003e(Double,Double)",
          "package": "CV",
          "partial": "Pixel Template Match",
          "signature": "MatchType-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003eDouble-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:subPixelTemplateMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.TemplateMatching",
          "name": "templateImage",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e IO (Ptr BareImage)",
          "source": "src/CV-TemplateMatching.html#templateImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV TemplateMatching",
          "module": "CV.TemplateMatching",
          "name": "templateImage",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Image",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-TemplateMatching.html#v:templateImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides implementations for basic versions of Local Binary Pattern texture features introduced in\n T. Ojala, M. Pietik&#228;inen, and D. Harwood (1994), \u003ca\u003ePerformance evaluation of texture measures with classification\n  based on Kullback discrimination of distributions\u003c/a\u003e, Proceedings of the 12th IAPR International Conference on Pattern Recognition (ICPR 1994).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Textures",
          "name": "Textures",
          "package": "CV",
          "source": "src/CV-Textures.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides implementations for basic versions of Local Binary Pattern texture features introduced in Ojala Pietik inen and Harwood Performance evaluation of texture measures with classification based on Kullback discrimination of distributions Proceedings of the th IAPR International Conference on Pattern Recognition ICPR",
          "hierarchy": "CV Textures",
          "module": "CV.Textures",
          "name": "Textures",
          "package": "CV",
          "partial": "Textures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Textures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;The most basic 3x3 lbp operator\n\u003c/p\u003e",
          "module": "CV.Textures",
          "name": "lbp",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e [Double]",
          "source": "src/CV-Textures.html#lbp",
          "type": "function"
        },
        "index": {
          "description": "The most basic x3 lbp operator",
          "hierarchy": "CV Textures",
          "module": "CV.Textures",
          "name": "lbp",
          "normalized": "Image GrayScale D-\u003e[Double]",
          "package": "CV",
          "signature": "Image GrayScale D-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Textures.html#v:lbp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;The larger radius basic 5x5 lbp operator\n\u003c/p\u003e",
          "module": "CV.Textures",
          "name": "lbp5",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e [Double]",
          "source": "src/CV-Textures.html#lbp5",
          "type": "function"
        },
        "index": {
          "description": "The larger radius basic x5 lbp operator",
          "hierarchy": "CV Textures",
          "module": "CV.Textures",
          "name": "lbp5",
          "normalized": "Image GrayScale D-\u003e[Double]",
          "package": "CV",
          "signature": "Image GrayScale D-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Textures.html#v:lbp5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an LBP histogram into rotation invariant form\n\u003c/p\u003e",
          "module": "CV.Textures",
          "name": "rotationInvariant",
          "package": "CV",
          "signature": "[Double] -\u003e Vector Double",
          "source": "src/CV-Textures.html#rotationInvariant",
          "type": "function"
        },
        "index": {
          "description": "Convert an LBP histogram into rotation invariant form",
          "hierarchy": "CV Textures",
          "module": "CV.Textures",
          "name": "rotationInvariant",
          "normalized": "[Double]-\u003eVector Double",
          "package": "CV",
          "partial": "Invariant",
          "signature": "[Double]-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Textures.html#v:rotationInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of LBP which is weighted. This can be used to select only parts of the\n image by using binary masks, or to give higher weight for some areas of the image.\n\u003c/p\u003e",
          "module": "CV.Textures",
          "name": "weightedLBP",
          "package": "CV",
          "signature": "a -\u003e a1 -\u003e Image GrayScale D32 -\u003e Image GrayScale D32 -\u003e [Double]",
          "source": "src/CV-Textures.html#weightedLBP",
          "type": "function"
        },
        "index": {
          "description": "variant of LBP which is weighted This can be used to select only parts of the image by using binary masks or to give higher weight for some areas of the image",
          "hierarchy": "CV Textures",
          "module": "CV.Textures",
          "name": "weightedLBP",
          "normalized": "a-\u003ea-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003e[Double]",
          "package": "CV",
          "partial": "LBP",
          "signature": "a-\u003ea-\u003eImage GrayScale D-\u003eImage GrayScale D-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Textures.html#v:weightedLBP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImage thresholding operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Thresholding",
          "name": "Thresholding",
          "package": "CV",
          "source": "src/CV-Thresholding.html",
          "type": "module"
        },
        "index": {
          "description": "Image thresholding operations",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "Thresholding",
          "package": "CV",
          "partial": "Thresholding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod used for selecting the adaptive threshold value\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "AdaptiveType",
          "package": "CV",
          "source": "src/CV-Thresholding.html#AdaptiveType",
          "type": "data"
        },
        "index": {
          "description": "Method used for selecting the adaptive threshold value",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "AdaptiveType",
          "package": "CV",
          "partial": "Adaptive Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#t:AdaptiveType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThresholding behavior for values larger and smaller than threshold\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ThresholdType",
          "package": "CV",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "data"
        },
        "index": {
          "description": "Thresholding behavior for values larger and smaller than threshold",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ThresholdType",
          "package": "CV",
          "partial": "Threshold Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#t:ThresholdType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreshold using the gaussian weighted mean of pixel neighborhood\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ByGaussian",
          "package": "CV",
          "signature": "ByGaussian",
          "source": "src/CV-Thresholding.html#AdaptiveType",
          "type": "function"
        },
        "index": {
          "description": "Threshold using the gaussian weighted mean of pixel neighborhood",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ByGaussian",
          "package": "CV",
          "partial": "By Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ByGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreshold using the arithmetic mean of pixel neighborhood\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ByMean",
          "package": "CV",
          "signature": "ByMean",
          "source": "src/CV-Thresholding.html#AdaptiveType",
          "type": "function"
        },
        "index": {
          "description": "Threshold using the arithmetic mean of pixel neighborhood",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ByMean",
          "package": "CV",
          "partial": "By Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ByMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues larger than threshold are set to max, smaller to zero\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "MaxAndZero",
          "package": "CV",
          "signature": "MaxAndZero",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "function"
        },
        "index": {
          "description": "Values larger than threshold are set to max smaller to zero",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "MaxAndZero",
          "package": "CV",
          "partial": "Max And Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:MaxAndZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues larger than threshold are truncated to threshold, smaller are not touched\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ThreshAndValue",
          "package": "CV",
          "signature": "ThreshAndValue",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "function"
        },
        "index": {
          "description": "Values larger than threshold are truncated to threshold smaller are not touched",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ThreshAndValue",
          "package": "CV",
          "partial": "Thresh And Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ThreshAndValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues larger than threshold are not touched, smaller are set to zero\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ValueAndZero",
          "package": "CV",
          "signature": "ValueAndZero",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "function"
        },
        "index": {
          "description": "Values larger than threshold are not touched smaller are set to zero",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ValueAndZero",
          "package": "CV",
          "partial": "Value And Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ValueAndZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues larger than threshold are set to zero, smaller to max\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ZeroAndMax",
          "package": "CV",
          "signature": "ZeroAndMax",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "function"
        },
        "index": {
          "description": "Values larger than threshold are set to zero smaller to max",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ZeroAndMax",
          "package": "CV",
          "partial": "Zero And Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ZeroAndMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues larger than threshold are set to zero, smaller are not touched\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "ZeroAndValue",
          "package": "CV",
          "signature": "ZeroAndValue",
          "source": "src/CV-Thresholding.html#ThresholdType",
          "type": "function"
        },
        "index": {
          "description": "Values larger than threshold are set to zero smaller are not touched",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "ZeroAndValue",
          "package": "CV",
          "partial": "Zero And Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:ZeroAndValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies adaptive thresholding by selecting the optimal threshold value for\n   each pixel. The threshold is selected by calculating the arithmetic or\n   gaussian-weighted mean of a pixel neighborhood, and applying a bias term to\n   the obtained value.\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "adaptiveThreshold",
          "package": "CV",
          "signature": "AdaptiveType -\u003e ThresholdType -\u003e Int -\u003e Double -\u003e Image GrayScale d -\u003e Image GrayScale d",
          "source": "src/CV-Thresholding.html#adaptiveThreshold",
          "type": "function"
        },
        "index": {
          "description": "Applies adaptive thresholding by selecting the optimal threshold value for each pixel The threshold is selected by calculating the arithmetic or gaussian-weighted mean of pixel neighborhood and applying bias term to the obtained value",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "adaptiveThreshold",
          "normalized": "AdaptiveType-\u003eThresholdType-\u003eInt-\u003eDouble-\u003eImage GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "partial": "Threshold",
          "signature": "AdaptiveType-\u003eThresholdType-\u003eInt-\u003eDouble-\u003eImage GrayScale d-\u003eImage GrayScale d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:adaptiveThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "bernsen",
          "package": "CV",
          "signature": "(CInt, CInt) -\u003e Float -\u003e Image GrayScale Float -\u003e Image GrayScale D8",
          "source": "src/CV-Thresholding.html#bernsen",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "bernsen",
          "normalized": "(CInt,CInt)-\u003eFloat-\u003eImage GrayScale Float-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(CInt,CInt)-\u003eFloat-\u003eImage GrayScale Float-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:bernsen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "betweenClassVariance",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/CV-Thresholding.html#betweenClassVariance",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "betweenClassVariance",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "CV",
          "partial": "Class Variance",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:betweenClassVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "kittler",
          "package": "CV",
          "signature": "Float -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-Thresholding.html#kittler",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "kittler",
          "normalized": "Float-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Float-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:kittler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "kittlerMeasure",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Float -\u003e D32",
          "source": "src/CV-Thresholding.html#kittlerMeasure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "kittlerMeasure",
          "normalized": "Image GrayScale D-\u003eFloat-\u003eD",
          "package": "CV",
          "partial": "Measure",
          "signature": "Image GrayScale D-\u003eFloat-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:kittlerMeasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "nibbly",
          "package": "CV",
          "signature": "D32 -\u003e D32 -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-Thresholding.html#nibbly",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "nibbly",
          "normalized": "D-\u003eD-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "D-\u003eD-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:nibbly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "nibblyr",
          "package": "CV",
          "signature": "(Int, Int) -\u003e Float -\u003e Image GrayScale D32 -\u003e Image GrayScale D8",
          "source": "src/CV-Thresholding.html#nibblyr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "nibblyr",
          "normalized": "(Int,Int)-\u003eFloat-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "(Int,Int)-\u003eFloat-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:nibblyr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThresholds a grayscale image according to the selected type, using the\n   given threshold value.\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "threshold",
          "package": "CV",
          "signature": "ThresholdType -\u003e Double -\u003e Image GrayScale d -\u003e Image GrayScale d",
          "source": "src/CV-Thresholding.html#threshold",
          "type": "function"
        },
        "index": {
          "description": "Thresholds grayscale image according to the selected type using the given threshold value",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "threshold",
          "normalized": "ThresholdType-\u003eDouble-\u003eImage GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "signature": "ThresholdType-\u003eDouble-\u003eImage GrayScale d-\u003eImage GrayScale d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:threshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Thresholding",
          "name": "thresholdInPlace",
          "package": "CV",
          "signature": "ThresholdType -\u003e Double -\u003e Image GrayScale d -\u003e IO (Image GrayScale D8)",
          "source": "src/CV-Thresholding.html#thresholdInPlace",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "thresholdInPlace",
          "normalized": "ThresholdType-\u003eDouble-\u003eImage GrayScale a-\u003eIO(Image GrayScale D)",
          "package": "CV",
          "partial": "In Place",
          "signature": "ThresholdType-\u003eDouble-\u003eImage GrayScale d-\u003eIO(Image GrayScale D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:thresholdInPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThresholds a grayscale image using the otsu method according to the\n   selected type. Threshold value is selected automatically, and only 8-bit\n   images are supported.\n\u003c/p\u003e",
          "module": "CV.Thresholding",
          "name": "thresholdOtsu",
          "package": "CV",
          "signature": "ThresholdType -\u003e Image GrayScale D8 -\u003e Image GrayScale D8",
          "source": "src/CV-Thresholding.html#thresholdOtsu",
          "type": "function"
        },
        "index": {
          "description": "Thresholds grayscale image using the otsu method according to the selected type Threshold value is selected automatically and only bit images are supported",
          "hierarchy": "CV Thresholding",
          "module": "CV.Thresholding",
          "name": "thresholdOtsu",
          "normalized": "ThresholdType-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Otsu",
          "signature": "ThresholdType-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Thresholding.html#v:thresholdOtsu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Tracking",
          "name": "Tracking",
          "package": "CV",
          "source": "src/CV-Tracking.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Tracking",
          "module": "CV.Tracking",
          "name": "Tracking",
          "package": "CV",
          "partial": "Tracking",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Tracking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Tracking",
          "name": "meanShift",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e a -\u003e TermCriteria -\u003e (Double, Rectangle Int)",
          "source": "src/CV-Tracking.html#meanShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Tracking",
          "module": "CV.Tracking",
          "name": "meanShift",
          "normalized": "Image GrayScale D-\u003ea-\u003eTermCriteria-\u003e(Double,Rectangle Int)",
          "package": "CV",
          "partial": "Shift",
          "signature": "Image GrayScale D-\u003ea-\u003eTermCriteria-\u003e(Double,Rectangle Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Tracking.html#v:meanShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Tracking",
          "name": "snake",
          "package": "CV",
          "signature": "Image c d -\u003e [(Int, Int)] -\u003e Float -\u003e Float -\u003e Float -\u003e (CInt, CInt) -\u003e C'CvTermCriteria -\u003e Bool -\u003e IO [C'CvPoint]",
          "source": "src/CV-Tracking.html#snake",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Tracking",
          "module": "CV.Tracking",
          "name": "snake",
          "normalized": "Image a b-\u003e[(Int,Int)]-\u003eFloat-\u003eFloat-\u003eFloat-\u003e(CInt,CInt)-\u003eC'CvTermCriteria-\u003eBool-\u003eIO[C'CvPoint]",
          "package": "CV",
          "signature": "Image c d-\u003e[(Int,Int)]-\u003eFloat-\u003eFloat-\u003eFloat-\u003e(CInt,CInt)-\u003eC'CvTermCriteria-\u003eBool-\u003eIO[C'CvPoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Tracking.html#v:snake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious image transformations from opencv and other sources.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CV.Transforms",
          "name": "Transforms",
          "package": "CV",
          "source": "src/CV-Transforms.html",
          "type": "module"
        },
        "index": {
          "description": "Various image transformations from opencv and other sources",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Transforms",
          "package": "CV",
          "partial": "Transforms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "DistanceType",
          "package": "CV",
          "source": "src/CV-Transforms.html#DistanceType",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "DistanceType",
          "package": "CV",
          "partial": "Distance Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#t:DistanceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "HomographyMethod",
          "package": "CV",
          "source": "src/CV-Transforms.html#HomographyMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "HomographyMethod",
          "package": "CV",
          "partial": "Homography Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#t:HomographyMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Interpolation",
          "package": "CV",
          "source": "src/CV-Transforms.html#Interpolation",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Interpolation",
          "package": "CV",
          "partial": "Interpolation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#t:Interpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMask sizes accepted by distanceTransform\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "MaskSize",
          "package": "CV",
          "source": "src/CV-Transforms.html#MaskSize",
          "type": "data"
        },
        "index": {
          "description": "Mask sizes accepted by distanceTransform",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "MaskSize",
          "package": "CV",
          "partial": "Mask Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#t:MaskSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "MirrorAxis",
          "package": "CV",
          "source": "src/CV-Transforms.html#MirrorAxis",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "MirrorAxis",
          "package": "CV",
          "partial": "Mirror Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#t:MirrorAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Area",
          "package": "CV",
          "signature": "Area",
          "source": "src/CV-Transforms.html#Interpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Area",
          "package": "CV",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "C",
          "package": "CV",
          "signature": "C",
          "source": "src/CV-Transforms.html#DistanceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "C",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Cubic",
          "package": "CV",
          "signature": "Cubic",
          "source": "src/CV-Transforms.html#Interpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Cubic",
          "package": "CV",
          "partial": "Cubic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Cubic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Default",
          "package": "CV",
          "signature": "Default",
          "source": "src/CV-Transforms.html#HomographyMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Default",
          "package": "CV",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Horizontal",
          "package": "CV",
          "signature": "Horizontal",
          "source": "src/CV-Transforms.html#MirrorAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Horizontal",
          "package": "CV",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Horizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "L1",
          "package": "CV",
          "signature": "L1",
          "source": "src/CV-Transforms.html#DistanceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "L1",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:L1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "L2",
          "package": "CV",
          "signature": "L2",
          "source": "src/CV-Transforms.html#DistanceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "L2",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:L2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "LMeds",
          "package": "CV",
          "signature": "LMeds",
          "source": "src/CV-Transforms.html#HomographyMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "LMeds",
          "package": "CV",
          "partial": "LMeds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:LMeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Linear",
          "package": "CV",
          "signature": "Linear",
          "source": "src/CV-Transforms.html#Interpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Linear",
          "package": "CV",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "M3",
          "package": "CV",
          "signature": "M3",
          "source": "src/CV-Transforms.html#MaskSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "M3",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:M3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "M5",
          "package": "CV",
          "signature": "M5",
          "source": "src/CV-Transforms.html#MaskSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "M5",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:M5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "NearestNeighbour",
          "package": "CV",
          "signature": "NearestNeighbour",
          "source": "src/CV-Transforms.html#Interpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "NearestNeighbour",
          "package": "CV",
          "partial": "Nearest Neighbour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:NearestNeighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Ransac",
          "package": "CV",
          "signature": "Ransac",
          "source": "src/CV-Transforms.html#HomographyMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Ransac",
          "package": "CV",
          "partial": "Ransac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Ransac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "Vertical",
          "package": "CV",
          "signature": "Vertical",
          "source": "src/CV-Transforms.html#MirrorAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "Vertical",
          "package": "CV",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "blitShadow",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e IO ()",
          "source": "src/CV-Transforms.html#blitShadow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "blitShadow",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003eIO()",
          "package": "CV",
          "partial": "Shadow",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:blitShadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvDCT",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvDCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvDCT",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "DCT",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvDCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvDistTransform",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e CInt -\u003e Ptr CFloat -\u003e Ptr () -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvDistTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvDistTransform",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003ePtr CFloat-\u003ePtr()-\u003eIO()",
          "package": "CV",
          "partial": "Dist Transform",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eCInt-\u003ePtr CFloat-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvDistTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvFindHomography",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e Ptr () -\u003e CInt -\u003e CDouble -\u003e Ptr () -\u003e IO CInt",
          "source": "src/CV-Transforms.html#cvFindHomography",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvFindHomography",
          "normalized": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eCInt-\u003eCDouble-\u003ePtr()-\u003eIO CInt",
          "package": "CV",
          "partial": "Find Homography",
          "signature": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eCInt-\u003eCDouble-\u003ePtr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvFindHomography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvFlip",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvFlip",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvFlip",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Flip",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvPyrDown",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvPyrDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvPyrDown",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Pyr Down",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvPyrDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvPyrUp",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvPyrUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvPyrUp",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Pyr Up",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvPyrUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cvResize",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e CInt -\u003e IO ()",
          "source": "src/CV-Transforms.html#cvResize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cvResize",
          "normalized": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "package": "CV",
          "partial": "Resize",
          "signature": "Ptr()-\u003ePtr()-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cvResize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "cv_Gaussian",
          "package": "CV",
          "signature": "CInt",
          "source": "src/CV-Transforms.html#cv_Gaussian",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "cv_Gaussian",
          "package": "CV",
          "partial": "Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:cv_Gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Discrete Cosine Transform\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "dct",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d",
          "source": "src/CV-Transforms.html#dct",
          "type": "function"
        },
        "index": {
          "description": "Perform Discrete Cosine Transform",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "dct",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "signature": "Image GrayScale d-\u003eImage GrayScale d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:dct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "distanceTransform",
          "package": "CV",
          "signature": "DistanceType -\u003e MaskSize -\u003e Image GrayScale D8 -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#distanceTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "distanceTransform",
          "normalized": "DistanceType-\u003eMaskSize-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Transform",
          "signature": "DistanceType-\u003eMaskSize-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:distanceTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnlargen the image so that its size is divisible by 2^n. Fill the area\n  outside the image with black.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "enlarge",
          "package": "CV",
          "signature": "Int -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#enlarge",
          "type": "function"
        },
        "index": {
          "description": "Enlargen the image so that its size is divisible by Fill the area outside the image with black",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "enlarge",
          "normalized": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "signature": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:enlarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Enlargen the image so that its size is is divisible by 2^n. Replicate\n   the border of the image.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "enlargeShadow",
          "package": "CV",
          "signature": "Int -\u003e Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#enlargeShadow",
          "type": "function"
        },
        "index": {
          "description": "Enlargen the image so that its size is is divisible by Replicate the border of the image",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "enlargeShadow",
          "normalized": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Shadow",
          "signature": "Int-\u003eImage GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:enlargeShadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a copy of an image with an even size\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "evenize",
          "package": "CV",
          "signature": "Image channels depth -\u003e Image channels depth",
          "source": "src/CV-Transforms.html#evenize",
          "type": "function"
        },
        "index": {
          "description": "Return copy of an image with an even size",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "evenize",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image channels depth-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:evenize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "findHomography",
          "package": "CV",
          "signature": "Ptr CDouble -\u003e Ptr CDouble -\u003e CInt -\u003e Ptr CDouble -\u003e IO ()",
          "source": "src/CV-Transforms.html#findHomography",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "findHomography",
          "normalized": "Ptr CDouble-\u003ePtr CDouble-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "package": "CV",
          "partial": "Homography",
          "signature": "Ptr CDouble-\u003ePtr CDouble-\u003eCInt-\u003ePtr CDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:findHomography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirror an image over a cardinal axis\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "flip",
          "package": "CV",
          "signature": "MirrorAxis -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Transforms.html#flip",
          "type": "function"
        },
        "index": {
          "description": "Mirror an image over cardinal axis",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "flip",
          "normalized": "MirrorAxis-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "MirrorAxis-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate an infinite gaussian pyramid of an image while keeping track of\n   various corner cases and gotchas.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "gaussianPyramid",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e [Image GrayScale D32]",
          "source": "src/CV-Transforms.html#gaussianPyramid",
          "type": "function"
        },
        "index": {
          "description": "Calculate an infinite gaussian pyramid of an image while keeping track of various corner cases and gotchas",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "gaussianPyramid",
          "normalized": "Image GrayScale D-\u003e[Image GrayScale D]",
          "package": "CV",
          "partial": "Pyramid",
          "signature": "Image GrayScale D-\u003e[Image GrayScale D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:gaussianPyramid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a homography between two sets of points in. The resulting 3x3 matrix is returned as a list.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "getHomography",
          "package": "CV",
          "signature": "[(a, a)] -\u003e [(a, a)] -\u003e [CDouble]",
          "source": "src/CV-Transforms.html#getHomography",
          "type": "function"
        },
        "index": {
          "description": "Find homography between two sets of points in The resulting x3 matrix is returned as list",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "getHomography",
          "normalized": "[(a,a)]-\u003e[(a,a)]-\u003e[CDouble]",
          "package": "CV",
          "partial": "Homography",
          "signature": "[(a,a)]-\u003e[(a,a)]-\u003e[CDouble]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:getHomography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "getHomography'",
          "package": "CV",
          "signature": "Matrix Float -\u003e Matrix Float -\u003e HomographyMethod -\u003e Float -\u003e Matrix Float",
          "source": "src/CV-Transforms.html#getHomography%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "getHomography'",
          "normalized": "Matrix Float-\u003eMatrix Float-\u003eHomographyMethod-\u003eFloat-\u003eMatrix Float",
          "package": "CV",
          "partial": "Homography'",
          "signature": "Matrix Float-\u003eMatrix Float-\u003eHomographyMethod-\u003eFloat-\u003eMatrix Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:getHomography-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Inverse Discrete Cosine Transform\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "idct",
          "package": "CV",
          "signature": "Image GrayScale d -\u003e Image GrayScale d",
          "source": "src/CV-Transforms.html#idct",
          "type": "function"
        },
        "index": {
          "description": "Perform Inverse Discrete Cosine Transform",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "idct",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "signature": "Image GrayScale d-\u003eImage GrayScale d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:idct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the laplacian pyramid of an image up to the nth level.\n  Notice that the image size must be divisible by 2^n or opencv \n  will abort (TODO!)\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "laplacianPyramid",
          "package": "CV",
          "signature": "Int -\u003e Image GrayScale D32 -\u003e [Image GrayScale D32]",
          "source": "src/CV-Transforms.html#laplacianPyramid",
          "type": "function"
        },
        "index": {
          "description": "Calculate the laplacian pyramid of an image up to the nth level Notice that the image size must be divisible by or opencv will abort TODO",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "laplacianPyramid",
          "normalized": "Int-\u003eImage GrayScale D-\u003e[Image GrayScale D]",
          "package": "CV",
          "partial": "Pyramid",
          "signature": "Int-\u003eImage GrayScale D-\u003e[Image GrayScale D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:laplacianPyramid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "makeEvenUp",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Transforms.html#makeEvenUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "makeEvenUp",
          "normalized": "Ptr BareImage-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Even Up",
          "signature": "Ptr BareImage-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:makeEvenUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnlargen the image so that its size is a power of two.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "minEnlarge",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#minEnlarge",
          "type": "function"
        },
        "index": {
          "description": "Enlargen the image so that its size is power of two",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "minEnlarge",
          "normalized": "Image GrayScale D-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Enlarge",
          "signature": "Image GrayScale D-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:minEnlarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a copy of an image with an odd size\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "oddize",
          "package": "CV",
          "signature": "Image channels depth -\u003e Image channels depth",
          "source": "src/CV-Transforms.html#oddize",
          "type": "function"
        },
        "index": {
          "description": "Return copy of an image with an odd size",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "oddize",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "signature": "Image channels depth-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:oddize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "padUp",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e CInt -\u003e CInt -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Transforms.html#padUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "padUp",
          "normalized": "Ptr BareImage-\u003eCInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Up",
          "signature": "Ptr BareImage-\u003eCInt-\u003eCInt-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:padUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a perspective transform to the image. The transformation 3x3 matrix is supplied as\n  a row ordered, flat, list.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "perspectiveTransform",
          "package": "CV",
          "signature": "Image c d -\u003e [a] -\u003e Image c d",
          "source": "src/CV-Transforms.html#perspectiveTransform",
          "type": "function"
        },
        "index": {
          "description": "Apply perspective transform to the image The transformation x3 matrix is supplied as row ordered flat list",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "perspectiveTransform",
          "normalized": "Image a b-\u003e[c]-\u003eImage a b",
          "package": "CV",
          "partial": "Transform",
          "signature": "Image c d-\u003e[a]-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:perspectiveTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "perspectiveTransform'",
          "package": "CV",
          "signature": "Matrix Float -\u003e Image c d -\u003e (Int, Int) -\u003e Image c d",
          "source": "src/CV-Transforms.html#perspectiveTransform%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "perspectiveTransform'",
          "normalized": "Matrix Float-\u003eImage a b-\u003e(Int,Int)-\u003eImage a b",
          "package": "CV",
          "partial": "Transform'",
          "signature": "Matrix Float-\u003eImage c d-\u003e(Int,Int)-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:perspectiveTransform-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownsize image by 50% efficiently. Image dimensions must be even.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "pyrDown",
          "package": "CV",
          "signature": "Image GrayScale a -\u003e Image GrayScale a",
          "source": "src/CV-Transforms.html#pyrDown",
          "type": "function"
        },
        "index": {
          "description": "Downsize image by efficiently Image dimensions must be even",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "pyrDown",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "partial": "Down",
          "signature": "Image GrayScale a-\u003eImage GrayScale a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:pyrDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "pyrUp",
          "package": "CV",
          "signature": "Image GrayScale a -\u003e Image GrayScale a",
          "source": "src/CV-Transforms.html#pyrUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "pyrUp",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "partial": "Up",
          "signature": "Image GrayScale a-\u003eImage GrayScale a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:pyrUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulate a radial distortion over an image\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "radialDistort",
          "package": "CV",
          "signature": "Image GrayScale D32 -\u003e Double -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#radialDistort",
          "type": "function"
        },
        "index": {
          "description": "Simulate radial distortion over an image",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "radialDistort",
          "normalized": "Image GrayScale D-\u003eDouble-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "Distort",
          "signature": "Image GrayScale D-\u003eDouble-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:radialDistort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "radialRemap",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e Ptr BareImage -\u003e CDouble -\u003e IO ()",
          "source": "src/CV-Transforms.html#radialRemap",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "radialRemap",
          "normalized": "Ptr BareImage-\u003ePtr BareImage-\u003eCDouble-\u003eIO()",
          "package": "CV",
          "partial": "Remap",
          "signature": "Ptr BareImage-\u003ePtr BareImage-\u003eCDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:radialRemap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReconstruct an image from a laplacian pyramid\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "reconstructFromLaplacian",
          "package": "CV",
          "signature": "[Image GrayScale D32] -\u003e Image GrayScale D32",
          "source": "src/CV-Transforms.html#reconstructFromLaplacian",
          "type": "function"
        },
        "index": {
          "description": "Reconstruct an image from laplacian pyramid",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "reconstructFromLaplacian",
          "normalized": "[Image GrayScale D]-\u003eImage GrayScale D",
          "package": "CV",
          "partial": "From Laplacian",
          "signature": "[Image GrayScale D]-\u003eImage GrayScale D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:reconstructFromLaplacian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate \u003ccode\u003eimg\u003c/code\u003e \u003ccode\u003eangle\u003c/code\u003e radians.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "rotate",
          "package": "CV",
          "signature": "Double -\u003e Image c d -\u003e Image c d",
          "source": "src/CV-Transforms.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotate img angle radians",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "rotate",
          "normalized": "Double-\u003eImage a b-\u003eImage a b",
          "package": "CV",
          "signature": "Double-\u003eImage c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "rotateImage",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e CDouble -\u003e CDouble -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Transforms.html#rotateImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "rotateImage",
          "normalized": "Ptr BareImage-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Image",
          "signature": "Ptr BareImage-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:rotateImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "safePyrDown",
          "package": "CV",
          "signature": "Image GrayScale depth -\u003e Image GrayScale depth",
          "source": "src/CV-Transforms.html#safePyrDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "safePyrDown",
          "normalized": "Image GrayScale a-\u003eImage GrayScale a",
          "package": "CV",
          "partial": "Pyr Down",
          "signature": "Image GrayScale depth-\u003eImage GrayScale depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:safePyrDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad images to same size\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "sameSizePad",
          "package": "CV",
          "signature": "Image channels depth -\u003e Image c d -\u003e Image channels depth",
          "source": "src/CV-Transforms.html#sameSizePad",
          "type": "function"
        },
        "index": {
          "description": "Pad images to same size",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "sameSizePad",
          "normalized": "Image a b-\u003eImage c d-\u003eImage a b",
          "package": "CV",
          "partial": "Size Pad",
          "signature": "Image channels depth-\u003eImage c d-\u003eImage channels depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:sameSizePad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale an image with different ratios for axes\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "scale",
          "package": "CV",
          "signature": "Interpolation -\u003e (a, a) -\u003e Image c D32 -\u003e Image c D32",
          "source": "src/CV-Transforms.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Scale an image with different ratios for axes",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "scale",
          "normalized": "Interpolation-\u003e(a,a)-\u003eImage b D-\u003eImage b D",
          "package": "CV",
          "signature": "Interpolation-\u003e(a,a)-\u003eImage c D-\u003eImage c D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale image by one ratio on both of the axes\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "scaleSingleRatio",
          "package": "CV",
          "signature": "Interpolation -\u003e a -\u003e Image c D32 -\u003e Image c D32",
          "source": "src/CV-Transforms.html#scaleSingleRatio",
          "type": "function"
        },
        "index": {
          "description": "Scale image by one ratio on both of the axes",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "scaleSingleRatio",
          "normalized": "Interpolation-\u003ea-\u003eImage b D-\u003eImage b D",
          "package": "CV",
          "partial": "Single Ratio",
          "signature": "Interpolation-\u003ea-\u003eImage c D-\u003eImage c D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:scaleSingleRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale an image to a given size\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "scaleToSize",
          "package": "CV",
          "signature": "Interpolation -\u003e Bool -\u003e (Int, Int) -\u003e Image c D32 -\u003e Image c D32",
          "source": "src/CV-Transforms.html#scaleToSize",
          "type": "function"
        },
        "index": {
          "description": "Scale an image to given size",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "scaleToSize",
          "normalized": "Interpolation-\u003eBool-\u003e(Int,Int)-\u003eImage a D-\u003eImage a D",
          "package": "CV",
          "partial": "To Size",
          "signature": "Interpolation-\u003eBool-\u003e(Int,Int)-\u003eImage c D-\u003eImage c D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:scaleToSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince DCT is valid only for even sized images, we provide a\n function to crop images to even sizes.\n\u003c/p\u003e",
          "module": "CV.Transforms",
          "name": "takeEvenSized",
          "package": "CV",
          "signature": "Image c d -\u003e Image c d",
          "source": "src/CV-Transforms.html#takeEvenSized",
          "type": "function"
        },
        "index": {
          "description": "Since DCT is valid only for even sized images we provide function to crop images to even sizes",
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "takeEvenSized",
          "normalized": "Image a b-\u003eImage a b",
          "package": "CV",
          "partial": "Even Sized",
          "signature": "Image c d-\u003eImage c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:takeEvenSized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "wrapPerspective",
          "package": "CV",
          "signature": "Ptr BareImage -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e CDouble -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Transforms.html#wrapPerspective",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "wrapPerspective",
          "normalized": "Ptr BareImage-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Perspective",
          "signature": "Ptr BareImage-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eCDouble-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:wrapPerspective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Transforms",
          "name": "wrapWarpPerspective",
          "package": "CV",
          "signature": "Ptr () -\u003e Ptr () -\u003e Ptr () -\u003e IO ()",
          "source": "src/CV-Transforms.html#wrapWarpPerspective",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Transforms",
          "module": "CV.Transforms",
          "name": "wrapWarpPerspective",
          "normalized": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eIO()",
          "package": "CV",
          "partial": "Warp Perspective",
          "signature": "Ptr()-\u003ePtr()-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Transforms.html#v:wrapWarpPerspective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "Video",
          "package": "CV",
          "source": "src/CV-Video.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "Video",
          "package": "CV",
          "partial": "Video",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CapProp",
          "package": "CV",
          "source": "src/CV-Video.html#CapProp",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CapProp",
          "package": "CV",
          "partial": "Cap Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#t:CapProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "Capture",
          "package": "CV",
          "source": "src/CV-Video.html#Capture",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "Capture",
          "package": "CV",
          "partial": "Capture",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#t:Capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "Codec",
          "package": "CV",
          "source": "src/CV-Video.html#Codec",
          "type": "data"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "Codec",
          "package": "CV",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "VideoStream",
          "package": "CV",
          "source": "src/CV-Video.html#VideoStream",
          "type": "type"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "VideoStream",
          "package": "CV",
          "partial": "Video Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#t:VideoStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "VideoWriter",
          "package": "CV",
          "source": "src/CV-Video.html#VideoWriter",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "VideoWriter",
          "package": "CV",
          "partial": "Video Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#t:VideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_BRIGHTNESS",
          "package": "CV",
          "signature": "CAP_PROP_BRIGHTNESS",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_BRIGHTNESS",
          "package": "CV",
          "partial": "CAP PROP BRIGHTNESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_BRIGHTNESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_CONTRAST",
          "package": "CV",
          "signature": "CAP_PROP_CONTRAST",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_CONTRAST",
          "package": "CV",
          "partial": "CAP PROP CONTRAST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_CONTRAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_CONVERT_RGB",
          "package": "CV",
          "signature": "CAP_PROP_CONVERT_RGB",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_CONVERT_RGB",
          "package": "CV",
          "partial": "CAP PROP CONVERT RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_CONVERT_RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_EXPOSURE",
          "package": "CV",
          "signature": "CAP_PROP_EXPOSURE",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_EXPOSURE",
          "package": "CV",
          "partial": "CAP PROP EXPOSURE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_EXPOSURE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FORMAT",
          "package": "CV",
          "signature": "CAP_PROP_FORMAT",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FORMAT",
          "package": "CV",
          "partial": "CAP PROP FORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FOURCC",
          "package": "CV",
          "signature": "CAP_PROP_FOURCC",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FOURCC",
          "package": "CV",
          "partial": "CAP PROP FOURCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FOURCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FPS",
          "package": "CV",
          "signature": "CAP_PROP_FPS",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FPS",
          "package": "CV",
          "partial": "CAP PROP FPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_COUNT",
          "package": "CV",
          "signature": "CAP_PROP_FRAME_COUNT",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_COUNT",
          "package": "CV",
          "partial": "CAP PROP FRAME COUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FRAME_COUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_HEIGHT",
          "package": "CV",
          "signature": "CAP_PROP_FRAME_HEIGHT",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_HEIGHT",
          "package": "CV",
          "partial": "CAP PROP FRAME HEIGHT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FRAME_HEIGHT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_WIDTH",
          "package": "CV",
          "signature": "CAP_PROP_FRAME_WIDTH",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_FRAME_WIDTH",
          "package": "CV",
          "partial": "CAP PROP FRAME WIDTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_FRAME_WIDTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_GAIN",
          "package": "CV",
          "signature": "CAP_PROP_GAIN",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_GAIN",
          "package": "CV",
          "partial": "CAP PROP GAIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_GAIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_HUE",
          "package": "CV",
          "signature": "CAP_PROP_HUE",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_HUE",
          "package": "CV",
          "partial": "CAP PROP HUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_HUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_MODE",
          "package": "CV",
          "signature": "CAP_PROP_MODE",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_MODE",
          "package": "CV",
          "partial": "CAP PROP MODE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_MODE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_MONOCROME",
          "package": "CV",
          "signature": "CAP_PROP_MONOCROME",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_MONOCROME",
          "package": "CV",
          "partial": "CAP PROP MONOCROME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_MONOCROME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_POS_AVI_RATIO",
          "package": "CV",
          "signature": "CAP_PROP_POS_AVI_RATIO",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_POS_AVI_RATIO",
          "package": "CV",
          "partial": "CAP PROP POS AVI RATIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_POS_AVI_RATIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_POS_FRAMES",
          "package": "CV",
          "signature": "CAP_PROP_POS_FRAMES",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_POS_FRAMES",
          "package": "CV",
          "partial": "CAP PROP POS FRAMES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_POS_FRAMES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_POS_MSEC",
          "package": "CV",
          "signature": "CAP_PROP_POS_MSEC",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_POS_MSEC",
          "package": "CV",
          "partial": "CAP PROP POS MSEC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_POS_MSEC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_RECTIFICATION",
          "package": "CV",
          "signature": "CAP_PROP_RECTIFICATION",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_RECTIFICATION",
          "package": "CV",
          "partial": "CAP PROP RECTIFICATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_RECTIFICATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_SATURATION",
          "package": "CV",
          "signature": "CAP_PROP_SATURATION",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_SATURATION",
          "package": "CV",
          "partial": "CAP PROP SATURATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_SATURATION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_WHITE_BALANCE_BLUE_U",
          "package": "CV",
          "signature": "CAP_PROP_WHITE_BALANCE_BLUE_U",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_WHITE_BALANCE_BLUE_U",
          "package": "CV",
          "partial": "CAP PROP WHITE BALANCE BLUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_WHITE_BALANCE_BLUE_U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "CAP_PROP_WHITE_BALANCE_RED_V",
          "package": "CV",
          "signature": "CAP_PROP_WHITE_BALANCE_RED_V",
          "source": "src/CV-Video.html#CapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "CAP_PROP_WHITE_BALANCE_RED_V",
          "package": "CV",
          "partial": "CAP PROP WHITE BALANCE RED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:CAP_PROP_WHITE_BALANCE_RED_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "Capture",
          "package": "CV",
          "signature": "Capture (ForeignPtr Capture)",
          "source": "src/CV-Video.html#Capture",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "Capture",
          "package": "CV",
          "partial": "Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:Capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "MPG4",
          "package": "CV",
          "signature": "MPG4",
          "source": "src/CV-Video.html#Codec",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "MPG4",
          "package": "CV",
          "partial": "MPG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:MPG4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "VideoWriter",
          "package": "CV",
          "signature": "VideoWriter (ForeignPtr VideoWriter)",
          "source": "src/CV-Video.html#VideoWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "VideoWriter",
          "package": "CV",
          "partial": "Video Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:VideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "captureFromCam",
          "package": "CV",
          "signature": "a -\u003e IO (Maybe Capture)",
          "source": "src/CV-Video.html#captureFromCam",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "captureFromCam",
          "normalized": "a-\u003eIO(Maybe Capture)",
          "package": "CV",
          "partial": "From Cam",
          "signature": "a-\u003eIO(Maybe Capture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:captureFromCam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "captureFromFile",
          "package": "CV",
          "signature": "String -\u003e IO Capture",
          "source": "src/CV-Video.html#captureFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "captureFromFile",
          "normalized": "String-\u003eIO Capture",
          "package": "CV",
          "partial": "From File",
          "signature": "String-\u003eIO Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:captureFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "createVideoWriter",
          "package": "CV",
          "signature": "String -\u003e Codec -\u003e CDouble -\u003e (t, t1) -\u003e IO VideoWriter",
          "source": "src/CV-Video.html#createVideoWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "createVideoWriter",
          "normalized": "String-\u003eCodec-\u003eCDouble-\u003e(a,a)-\u003eIO VideoWriter",
          "package": "CV",
          "partial": "Video Writer",
          "signature": "String-\u003eCodec-\u003eCDouble-\u003e(t,t)-\u003eIO VideoWriter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:createVideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvCreateCameraCapture",
          "package": "CV",
          "signature": "CInt -\u003e IO (Ptr Capture)",
          "source": "src/CV-Video.html#cvCreateCameraCapture",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvCreateCameraCapture",
          "normalized": "CInt-\u003eIO(Ptr Capture)",
          "package": "CV",
          "partial": "Create Camera Capture",
          "signature": "CInt-\u003eIO(Ptr Capture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvCreateCameraCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvCreateFileCapture",
          "package": "CV",
          "signature": "Ptr CChar -\u003e IO (Ptr Capture)",
          "source": "src/CV-Video.html#cvCreateFileCapture",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvCreateFileCapture",
          "normalized": "Ptr CChar-\u003eIO(Ptr Capture)",
          "package": "CV",
          "partial": "Create File Capture",
          "signature": "Ptr CChar-\u003eIO(Ptr Capture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvCreateFileCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvGetCaptureProperty",
          "package": "CV",
          "signature": "Ptr Capture -\u003e CInt -\u003e IO CDouble",
          "source": "src/CV-Video.html#cvGetCaptureProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvGetCaptureProperty",
          "normalized": "Ptr Capture-\u003eCInt-\u003eIO CDouble",
          "package": "CV",
          "partial": "Get Capture Property",
          "signature": "Ptr Capture-\u003eCInt-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvGetCaptureProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvGrabFrame",
          "package": "CV",
          "signature": "Ptr Capture -\u003e IO CInt",
          "source": "src/CV-Video.html#cvGrabFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvGrabFrame",
          "normalized": "Ptr Capture-\u003eIO CInt",
          "package": "CV",
          "partial": "Grab Frame",
          "signature": "Ptr Capture-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvGrabFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvQueryFrame",
          "package": "CV",
          "signature": "Ptr Capture -\u003e IO (Ptr BareImage)",
          "source": "src/CV-Video.html#cvQueryFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvQueryFrame",
          "normalized": "Ptr Capture-\u003eIO(Ptr BareImage)",
          "package": "CV",
          "partial": "Query Frame",
          "signature": "Ptr Capture-\u003eIO(Ptr BareImage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvQueryFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvSetCaptureProperty",
          "package": "CV",
          "signature": "Ptr Capture -\u003e CInt -\u003e CDouble -\u003e IO CInt",
          "source": "src/CV-Video.html#cvSetCaptureProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvSetCaptureProperty",
          "normalized": "Ptr Capture-\u003eCInt-\u003eCDouble-\u003eIO CInt",
          "package": "CV",
          "partial": "Set Capture Property",
          "signature": "Ptr Capture-\u003eCInt-\u003eCDouble-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvSetCaptureProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "cvWriteFrame",
          "package": "CV",
          "signature": "Ptr VideoWriter -\u003e Ptr BareImage -\u003e IO CInt",
          "source": "src/CV-Video.html#cvWriteFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "cvWriteFrame",
          "normalized": "Ptr VideoWriter-\u003ePtr BareImage-\u003eIO CInt",
          "package": "CV",
          "partial": "Write Frame",
          "signature": "Ptr VideoWriter-\u003ePtr BareImage-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:cvWriteFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "dropFrame",
          "package": "CV",
          "signature": "Capture -\u003e IO ()",
          "source": "src/CV-Video.html#dropFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "dropFrame",
          "normalized": "Capture-\u003eIO()",
          "package": "CV",
          "partial": "Frame",
          "signature": "Capture-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:dropFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "frameNumber",
          "package": "CV",
          "signature": "Capture -\u003e a",
          "source": "src/CV-Video.html#frameNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "frameNumber",
          "normalized": "Capture-\u003ea",
          "package": "CV",
          "partial": "Number",
          "signature": "Capture-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:frameNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "fromProp",
          "package": "CV",
          "signature": "CapProp -\u003e CInt",
          "source": "src/CV-Video.html#fromProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "fromProp",
          "normalized": "CapProp-\u003eCInt",
          "package": "CV",
          "partial": "Prop",
          "signature": "CapProp-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:fromProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "getCapProp",
          "package": "CV",
          "signature": "Capture -\u003e CapProp -\u003e IO b",
          "source": "src/CV-Video.html#getCapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "getCapProp",
          "normalized": "Capture-\u003eCapProp-\u003eIO a",
          "package": "CV",
          "partial": "Cap Prop",
          "signature": "Capture-\u003eCapProp-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:getCapProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "getFrame",
          "package": "CV",
          "signature": "Capture -\u003e IO (Maybe (Image RGB D32))",
          "source": "src/CV-Video.html#getFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "getFrame",
          "normalized": "Capture-\u003eIO(Maybe(Image RGB D))",
          "package": "CV",
          "partial": "Frame",
          "signature": "Capture-\u003eIO(Maybe(Image RGB D))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:getFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "getFrameRate",
          "package": "CV",
          "signature": "Capture -\u003e a",
          "source": "src/CV-Video.html#getFrameRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "getFrameRate",
          "normalized": "Capture-\u003ea",
          "package": "CV",
          "partial": "Frame Rate",
          "signature": "Capture-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:getFrameRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "getFrameSize",
          "package": "CV",
          "signature": "Capture -\u003e (t, t1)",
          "source": "src/CV-Video.html#getFrameSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "getFrameSize",
          "normalized": "Capture-\u003e(a,a)",
          "package": "CV",
          "partial": "Frame Size",
          "signature": "Capture-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:getFrameSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "numberOfFrames",
          "package": "CV",
          "signature": "Capture -\u003e a",
          "source": "src/CV-Video.html#numberOfFrames",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "numberOfFrames",
          "normalized": "Capture-\u003ea",
          "package": "CV",
          "partial": "Of Frames",
          "signature": "Capture-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:numberOfFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "releaseCapture",
          "package": "CV",
          "signature": "FinalizerPtr Capture",
          "source": "src/CV-Video.html#releaseCapture",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "releaseCapture",
          "package": "CV",
          "partial": "Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:releaseCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "releaseVideoWriter",
          "package": "CV",
          "signature": "FinalizerPtr VideoWriter",
          "source": "src/CV-Video.html#releaseVideoWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "releaseVideoWriter",
          "package": "CV",
          "partial": "Video Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:releaseVideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "setCapProp",
          "package": "CV",
          "signature": "Capture -\u003e CapProp -\u003e a -\u003e IO CInt",
          "source": "src/CV-Video.html#setCapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "setCapProp",
          "normalized": "Capture-\u003eCapProp-\u003ea-\u003eIO CInt",
          "package": "CV",
          "partial": "Cap Prop",
          "signature": "Capture-\u003eCapProp-\u003ea-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:setCapProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "streamFromVideo",
          "package": "CV",
          "signature": "Capture -\u003e Stream IO (Image RGB D32)",
          "source": "src/CV-Video.html#streamFromVideo",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "streamFromVideo",
          "normalized": "Capture-\u003eStream IO(Image RGB D)",
          "package": "CV",
          "partial": "From Video",
          "signature": "Capture-\u003eStream IO(Image RGB D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:streamFromVideo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "streamFromVideo'",
          "package": "CV",
          "signature": "Image RGB D32 -\u003e Capture -\u003e Stream IO (Image RGB D32)",
          "source": "src/CV-Video.html#streamFromVideo%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "streamFromVideo'",
          "normalized": "Image RGB D-\u003eCapture-\u003eStream IO(Image RGB D)",
          "package": "CV",
          "partial": "From Video'",
          "signature": "Image RGB D-\u003eCapture-\u003eStream IO(Image RGB D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:streamFromVideo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "withCapture",
          "package": "CV",
          "signature": "Capture -\u003e (Ptr Capture -\u003e IO b) -\u003e IO b",
          "source": "src/CV-Video.html#withCapture",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "withCapture",
          "normalized": "Capture-\u003e(Ptr Capture-\u003eIO a)-\u003eIO a",
          "package": "CV",
          "partial": "Capture",
          "signature": "Capture-\u003e(Ptr Capture-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:withCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "withVideoWriter",
          "package": "CV",
          "signature": "VideoWriter -\u003e (Ptr VideoWriter -\u003e IO b) -\u003e IO b",
          "source": "src/CV-Video.html#withVideoWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "withVideoWriter",
          "normalized": "VideoWriter-\u003e(Ptr VideoWriter-\u003eIO a)-\u003eIO a",
          "package": "CV",
          "partial": "Video Writer",
          "signature": "VideoWriter-\u003e(Ptr VideoWriter-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:withVideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "wrapCreateVideoWriter",
          "package": "CV",
          "signature": "Ptr CChar -\u003e CInt -\u003e CDouble -\u003e CInt -\u003e CInt -\u003e CInt -\u003e IO (Ptr VideoWriter)",
          "source": "src/CV-Video.html#wrapCreateVideoWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "wrapCreateVideoWriter",
          "normalized": "Ptr CChar-\u003eCInt-\u003eCDouble-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO(Ptr VideoWriter)",
          "package": "CV",
          "partial": "Create Video Writer",
          "signature": "Ptr CChar-\u003eCInt-\u003eCDouble-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO(Ptr VideoWriter)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:wrapCreateVideoWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CV.Video",
          "name": "writeFrame",
          "package": "CV",
          "signature": "VideoWriter -\u003e Image RGB D32 -\u003e IO ()",
          "source": "src/CV-Video.html#writeFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "CV Video",
          "module": "CV.Video",
          "name": "writeFrame",
          "normalized": "VideoWriter-\u003eImage RGB D-\u003eIO()",
          "package": "CV",
          "partial": "Frame",
          "signature": "VideoWriter-\u003eImage RGB D-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/CV-Video.html#v:writeFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DrawingClass",
          "name": "DrawingClass",
          "package": "CV",
          "source": "src/Utils-DrawingClass.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils DrawingClass",
          "module": "Utils.DrawingClass",
          "name": "DrawingClass",
          "package": "CV",
          "partial": "Drawing Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-DrawingClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DrawingClass",
          "name": "Draws",
          "package": "CV",
          "source": "src/Utils-DrawingClass.html#Draws",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils DrawingClass",
          "module": "Utils.DrawingClass",
          "name": "Draws",
          "package": "CV",
          "partial": "Draws",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-DrawingClass.html#t:Draws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.DrawingClass",
          "name": "draw",
          "package": "CV",
          "signature": "a -\u003e b",
          "source": "src/Utils-DrawingClass.html#draw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils DrawingClass",
          "module": "Utils.DrawingClass",
          "name": "draw",
          "normalized": "a-\u003eb",
          "package": "CV",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-DrawingClass.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "Function",
          "package": "CV",
          "source": "src/Utils-Function.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "Function",
          "package": "CV",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "affine1d",
          "package": "CV",
          "signature": "(t, t) -\u003e (t, t) -\u003e t -\u003e t",
          "source": "src/Utils-Function.html#affine1d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "affine1d",
          "normalized": "(a,a)-\u003e(a,a)-\u003ea-\u003ea",
          "package": "CV",
          "signature": "(t,t)-\u003e(t,t)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:affine1d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "both",
          "package": "CV",
          "signature": "(t -\u003e t1) -\u003e (t, t) -\u003e (t1, t1)",
          "source": "src/Utils-Function.html#both",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "both",
          "normalized": "(a-\u003ea)-\u003e(a,a)-\u003e(a,a)",
          "package": "CV",
          "signature": "(t-\u003et)-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "maxBy",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e a -\u003e a",
          "source": "src/Utils-Function.html#maxBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "maxBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "package": "CV",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:maxBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "minBy",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e a -\u003e a",
          "source": "src/Utils-Function.html#minBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "minBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "package": "CV",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:minBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "mkFst",
          "package": "CV",
          "signature": "(t1 -\u003e t) -\u003e t1 -\u003e (t, t1)",
          "source": "src/Utils-Function.html#mkFst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "mkFst",
          "normalized": "(a-\u003ea)-\u003ea-\u003e(a,a)",
          "package": "CV",
          "partial": "Fst",
          "signature": "(t-\u003et)-\u003et-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:mkFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "mkSnd",
          "package": "CV",
          "signature": "(t -\u003e t1) -\u003e t -\u003e (t, t1)",
          "source": "src/Utils-Function.html#mkSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "mkSnd",
          "normalized": "(a-\u003ea)-\u003ea-\u003e(a,a)",
          "package": "CV",
          "partial": "Snd",
          "signature": "(t-\u003et)-\u003et-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:mkSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "under",
          "package": "CV",
          "signature": "(t1 -\u003e t) -\u003e (t2 -\u003e t3 -\u003e t1) -\u003e t2 -\u003e t3 -\u003e t",
          "source": "src/Utils-Function.html#under",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "under",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea",
          "package": "CV",
          "signature": "(t-\u003et)-\u003e(t-\u003et-\u003et)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:under"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Function",
          "name": "with",
          "package": "CV",
          "signature": "(t -\u003e t1) -\u003e t -\u003e (t, t1)",
          "source": "src/Utils-Function.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Function",
          "module": "Utils.Function",
          "name": "with",
          "normalized": "(a-\u003ea)-\u003ea-\u003e(a,a)",
          "package": "CV",
          "signature": "(t-\u003et)-\u003et-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Function.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "GeometryClass",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "GeometryClass",
          "package": "CV",
          "partial": "Geometry Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "BoundingBox",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#BoundingBox",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "BoundingBox",
          "package": "CV",
          "partial": "Bounding Box",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:BoundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "FromBounds",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#FromBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "FromBounds",
          "package": "CV",
          "partial": "From Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:FromBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "Line2D",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#Line2D",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "Line2D",
          "package": "CV",
          "partial": "Line",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:Line2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "LineSegment",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#LineSegment",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "LineSegment",
          "package": "CV",
          "partial": "Line Segment",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:LineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "Point2D",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#Point2D",
          "type": "class"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "Point2D",
          "package": "CV",
          "partial": "Point",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:Point2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for elements with a size, such as images and matrices.\n\u003c/p\u003e",
          "module": "Utils.GeometryClass",
          "name": "Sized",
          "package": "CV",
          "source": "src/Utils-GeometryClass.html#Sized",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for elements with size such as images and matrices",
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "Sized",
          "package": "CV",
          "partial": "Sized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#t:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "bounds",
          "package": "CV",
          "signature": "a -\u003e Rectangle (ELBB a)",
          "source": "src/Utils-GeometryClass.html#bounds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "bounds",
          "normalized": "a-\u003eRectangle(ELBB a)",
          "package": "CV",
          "signature": "a-\u003eRectangle(ELBB a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "convertBounds",
          "package": "CV",
          "signature": "a -\u003e b",
          "source": "src/Utils-GeometryClass.html#convertBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "convertBounds",
          "normalized": "a-\u003eb",
          "package": "CV",
          "partial": "Bounds",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:convertBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "convertPt",
          "package": "CV",
          "signature": "a -\u003e b",
          "source": "src/Utils-GeometryClass.html#convertPt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "convertPt",
          "normalized": "a-\u003eb",
          "package": "CV",
          "partial": "Pt",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:convertPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "fromBounds",
          "package": "CV",
          "signature": "Rectangle (ELFB a) -\u003e a",
          "source": "src/Utils-GeometryClass.html#fromBounds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "fromBounds",
          "normalized": "Rectangle(ELFB a)-\u003ea",
          "package": "CV",
          "partial": "Bounds",
          "signature": "Rectangle(ELFB a)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:fromBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "getSize",
          "package": "CV",
          "signature": "a -\u003e Size a",
          "source": "src/Utils-GeometryClass.html#getSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "getSize",
          "normalized": "a-\u003eSize a",
          "package": "CV",
          "partial": "Size",
          "signature": "a-\u003eSize a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract integer coordinates of a point\n\u003c/p\u003e",
          "module": "Utils.GeometryClass",
          "name": "ipt",
          "package": "CV",
          "signature": "a -\u003e (Int, Int)",
          "source": "src/Utils-GeometryClass.html#ipt",
          "type": "function"
        },
        "index": {
          "description": "Extract integer coordinates of point",
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "ipt",
          "normalized": "a-\u003e(Int,Int)",
          "package": "CV",
          "signature": "a-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:ipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "offsetAngle",
          "package": "CV",
          "signature": "a -\u003e (ELL a, Double)",
          "source": "src/Utils-GeometryClass.html#offsetAngle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "offsetAngle",
          "normalized": "a-\u003e(ELL a,Double)",
          "package": "CV",
          "partial": "Angle",
          "signature": "a-\u003e(ELL a,Double)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:offsetAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "pt",
          "package": "CV",
          "signature": "a -\u003e (ELP a, ELP a)",
          "source": "src/Utils-GeometryClass.html#pt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "pt",
          "normalized": "a-\u003e(ELP a,ELP a)",
          "package": "CV",
          "signature": "a-\u003e(ELP a,ELP a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "startEnd",
          "package": "CV",
          "signature": "a -\u003e ((ELS a, ELS a), (ELS a, ELS a))",
          "source": "src/Utils-GeometryClass.html#startEnd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "startEnd",
          "normalized": "a-\u003e((ELS a,ELS a),(ELS a,ELS a))",
          "package": "CV",
          "partial": "End",
          "signature": "a-\u003e((ELS a,ELS a),(ELS a,ELS a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:startEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.GeometryClass",
          "name": "toPt",
          "package": "CV",
          "signature": "(ELP a, ELP a) -\u003e a",
          "source": "src/Utils-GeometryClass.html#toPt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Utils GeometryClass",
          "module": "Utils.GeometryClass",
          "name": "toPt",
          "normalized": "(ELP a,ELP a)-\u003ea",
          "package": "CV",
          "partial": "Pt",
          "signature": "(ELP a,ELP a)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-GeometryClass.html#v:toPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "List",
          "package": "CV",
          "source": "src/Utils-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "List",
          "package": "CV",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "applyMap",
          "package": "CV",
          "signature": "t -\u003e [t -\u003e b] -\u003e [b]",
          "source": "src/Utils-List.html#applyMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "applyMap",
          "normalized": "a-\u003e[a-\u003eb]-\u003e[b]",
          "package": "CV",
          "partial": "Map",
          "signature": "t-\u003e[t-\u003eb]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:applyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "applyMapM",
          "package": "CV",
          "signature": "a -\u003e [a -\u003e m b] -\u003e m [b]",
          "source": "src/Utils-List.html#applyMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "applyMapM",
          "normalized": "a-\u003e[a-\u003eb c]-\u003eb[c]",
          "package": "CV",
          "partial": "Map",
          "signature": "a-\u003e[a-\u003em b]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:applyMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "average",
          "package": "CV",
          "signature": "[b] -\u003e b",
          "source": "src/Utils-List.html#average",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "average",
          "normalized": "[a]-\u003ea",
          "package": "CV",
          "signature": "[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "binList",
          "package": "CV",
          "signature": "a -\u003e ([b] -\u003e b1) -\u003e [(a, b)] -\u003e [(a, b1)]",
          "source": "src/Utils-List.html#binList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "binList",
          "normalized": "a-\u003e([b]-\u003eb)-\u003e[(a,b)]-\u003e[(a,b)]",
          "package": "CV",
          "partial": "List",
          "signature": "a-\u003e([b]-\u003eb)-\u003e[(a,b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:binList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "changesM",
          "package": "CV",
          "signature": "[a -\u003e m b] -\u003e a -\u003e m [b]",
          "source": "src/Utils-List.html#changesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "changesM",
          "normalized": "[a-\u003eb c]-\u003ea-\u003eb[c]",
          "package": "CV",
          "signature": "[a-\u003em b]-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:changesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "clusterBy",
          "package": "CV",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#clusterBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "clusterBy",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:clusterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "comparing",
          "package": "CV",
          "signature": "(t -\u003e a) -\u003e t -\u003e t -\u003e Ordering",
          "source": "src/Utils-List.html#comparing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "comparing",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eOrdering",
          "package": "CV",
          "signature": "(t-\u003ea)-\u003et-\u003et-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:comparing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "concatZipNub",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#concatZipNub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "concatZipNub",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Zip Nub",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:concatZipNub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "count",
          "package": "CV",
          "signature": "(b -\u003e Bool) -\u003e [b] -\u003e a",
          "source": "src/Utils-List.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "count",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eb",
          "package": "CV",
          "signature": "(b-\u003eBool)-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "crease",
          "package": "CV",
          "signature": "(b1 -\u003e b1 -\u003e b) -\u003e [b1] -\u003e [b]",
          "source": "src/Utils-List.html#crease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "crease",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "signature": "(b-\u003eb-\u003eb)-\u003e[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:crease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "creaseM",
          "package": "CV",
          "signature": "(b -\u003e b -\u003e m a) -\u003e [b] -\u003e m [a]",
          "source": "src/Utils-List.html#creaseM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "creaseM",
          "normalized": "(a-\u003ea-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "CV",
          "signature": "(b-\u003eb-\u003em a)-\u003e[b]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:creaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "cumulate",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/Utils-List.html#cumulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "cumulate",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:cumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "cycles",
          "package": "CV",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Utils-List.html#cycles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "cycles",
          "normalized": "[a]-\u003e[[a]]",
          "package": "CV",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:cycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "editingMap",
          "package": "CV",
          "signature": "([t] -\u003e t -\u003e t) -\u003e [t] -\u003e [t]",
          "source": "src/Utils-List.html#editingMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "editingMap",
          "normalized": "([a]-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Map",
          "signature": "([t]-\u003et-\u003et)-\u003e[t]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:editingMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "editingTrav",
          "package": "CV",
          "signature": "([t] -\u003e t -\u003e t) -\u003e [t] -\u003e [t] -\u003e [t]",
          "source": "src/Utils-List.html#editingTrav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "editingTrav",
          "normalized": "([a]-\u003ea-\u003ea)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Trav",
          "signature": "([t]-\u003et-\u003et)-\u003e[t]-\u003e[t]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:editingTrav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "forEach",
          "package": "CV",
          "signature": "(a -\u003e a) -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#forEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "forEach",
          "normalized": "(a-\u003ea)-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "Each",
          "signature": "(a-\u003ea)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:forEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "forPairs",
          "package": "CV",
          "signature": "(b -\u003e b1 -\u003e b) -\u003e [b] -\u003e [b1] -\u003e [[b]]",
          "source": "src/Utils-List.html#forPairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "forPairs",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "Pairs",
          "signature": "(b-\u003eb-\u003eb)-\u003e[b]-\u003e[b]-\u003e[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:forPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "frequencies",
          "package": "CV",
          "signature": "[b] -\u003e [(b, t)]",
          "source": "src/Utils-List.html#frequencies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "frequencies",
          "normalized": "[a]-\u003e[(a,b)]",
          "package": "CV",
          "signature": "[b]-\u003e[(b,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:frequencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndo pairs function\n\u003c/p\u003e",
          "module": "Utils.List",
          "name": "fromPairs",
          "package": "CV",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Utils-List.html#fromPairs",
          "type": "function"
        },
        "index": {
          "description": "Undo pairs function",
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "fromPairs",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "CV",
          "partial": "Pairs",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:fromPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndo pairs1 function\n\u003c/p\u003e",
          "module": "Utils.List",
          "name": "fromPairs1",
          "package": "CV",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Utils-List.html#fromPairs1",
          "type": "function"
        },
        "index": {
          "description": "Undo pairs1 function",
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "fromPairs1",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "CV",
          "partial": "Pairs",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:fromPairs1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "getKNeighbourhoods",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#getKNeighbourhoods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "getKNeighbourhoods",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "KNeighbourhoods",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:getKNeighbourhoods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "groupItems",
          "package": "CV",
          "signature": "(a -\u003e a1) -\u003e (a -\u003e b) -\u003e [a] -\u003e [(a1, [b])]",
          "source": "src/Utils-List.html#groupItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "groupItems",
          "normalized": "(a-\u003ea)-\u003e(a-\u003eb)-\u003e[a]-\u003e[(a,[b])]",
          "package": "CV",
          "partial": "Items",
          "signature": "(a-\u003ea)-\u003e(a-\u003eb)-\u003e[a]-\u003e[(a,[b])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:groupItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "histogram",
          "package": "CV",
          "signature": "a -\u003e [a] -\u003e [(a, t)]",
          "source": "src/Utils-List.html#histogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "histogram",
          "normalized": "a-\u003e[a]-\u003e[(a,b)]",
          "package": "CV",
          "signature": "a-\u003e[a]-\u003e[(a,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "lookupDef",
          "package": "CV",
          "signature": "a -\u003e a1 -\u003e [(a1, a)] -\u003e a",
          "source": "src/Utils-List.html#lookupDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "lookupDef",
          "normalized": "a-\u003ea-\u003e[(a,a)]-\u003ea",
          "package": "CV",
          "partial": "Def",
          "signature": "a-\u003ea-\u003e[(a,a)]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:lookupDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "majority",
          "package": "CV",
          "signature": "[a] -\u003e a",
          "source": "src/Utils-List.html#majority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "majority",
          "normalized": "[a]-\u003ea",
          "package": "CV",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:majority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "median",
          "package": "CV",
          "signature": "[a] -\u003e a",
          "source": "src/Utils-List.html#median",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "median",
          "normalized": "[a]-\u003ea",
          "package": "CV",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "mergeList",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#mergeList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "mergeList",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "List",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:mergeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "normalizeFrequencies",
          "package": "CV",
          "signature": "[(t, t1)] -\u003e [(t, t1)]",
          "source": "src/Utils-List.html#normalizeFrequencies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "normalizeFrequencies",
          "normalized": "[(a,a)]-\u003e[(a,a)]",
          "package": "CV",
          "partial": "Frequencies",
          "signature": "[(t,t)]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:normalizeFrequencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "pairings",
          "package": "CV",
          "signature": "[t] -\u003e [(t, t)]",
          "source": "src/Utils-List.html#pairings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "pairings",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "CV",
          "signature": "[t]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:pairings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Group list into indevidual pairs: [1,2,3,4] =\u003e [(1,2),(3,4)]. \n   Works only with even number of elements\n\u003c/p\u003e",
          "module": "Utils.List",
          "name": "pairs",
          "package": "CV",
          "signature": "[t] -\u003e [(t, t)]",
          "source": "src/Utils-List.html#pairs",
          "type": "function"
        },
        "index": {
          "description": "Group list into indevidual pairs Works only with even number of elements",
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "pairs",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "CV",
          "signature": "[t]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Group list into pairs: [1,2,3] =\u003e [(1,2),(2,3)]. \n   Works with non null lists\n\u003c/p\u003e",
          "module": "Utils.List",
          "name": "pairs1",
          "package": "CV",
          "signature": "[b] -\u003e [(b, b)]",
          "source": "src/Utils-List.html#pairs1",
          "type": "function"
        },
        "index": {
          "description": "Group list into pairs Works with non null lists",
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "pairs1",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "CV",
          "signature": "[b]-\u003e[(b,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:pairs1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_headIdentical_KN",
          "package": "CV",
          "signature": "Int -\u003e [b] -\u003e Property",
          "source": "src/Utils-List.html#prop_headIdentical_KN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_headIdentical_KN",
          "normalized": "Int-\u003e[a]-\u003eProperty",
          "package": "CV",
          "partial": "Identical KN",
          "signature": "Int-\u003e[b]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_headIdentical_KN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_pairsFromTo",
          "package": "CV",
          "signature": "[a] -\u003e Property",
          "source": "src/Utils-List.html#prop_pairsFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_pairsFromTo",
          "normalized": "[a]-\u003eProperty",
          "package": "CV",
          "partial": "From To",
          "signature": "[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_pairsFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_pairsFromTo1",
          "package": "CV",
          "signature": "[a] -\u003e Property",
          "source": "src/Utils-List.html#prop_pairsFromTo1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_pairsFromTo1",
          "normalized": "[a]-\u003eProperty",
          "package": "CV",
          "partial": "From To",
          "signature": "[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_pairsFromTo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_splitEq",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e Property",
          "source": "src/Utils-List.html#prop_splitEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_splitEq",
          "normalized": "Int-\u003e[a]-\u003eProperty",
          "package": "CV",
          "partial": "Eq",
          "signature": "Int-\u003e[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_splitEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_splitLen",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e Property",
          "source": "src/Utils-List.html#prop_splitLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_splitLen",
          "normalized": "Int-\u003e[a]-\u003eProperty",
          "package": "CV",
          "partial": "Len",
          "signature": "Int-\u003e[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_splitLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_takeLen",
          "package": "CV",
          "signature": "[Int] -\u003e [a] -\u003e Property",
          "source": "src/Utils-List.html#prop_takeLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_takeLen",
          "normalized": "[Int]-\u003e[a]-\u003eProperty",
          "package": "CV",
          "partial": "Len",
          "signature": "[Int]-\u003e[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_takeLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "prop_takeLens",
          "package": "CV",
          "signature": "[Int] -\u003e [a] -\u003e Property",
          "source": "src/Utils-List.html#prop_takeLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "prop_takeLens",
          "normalized": "[Int]-\u003e[a]-\u003eProperty",
          "package": "CV",
          "partial": "Lens",
          "signature": "[Int]-\u003e[a]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:prop_takeLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "rankBy",
          "package": "CV",
          "signature": "(b -\u003e b -\u003e Ordering) -\u003e [b] -\u003e [(t, b)]",
          "source": "src/Utils-List.html#rankBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "rankBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[(b,a)]",
          "package": "CV",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e[b]-\u003e[(t,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:rankBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "ranks",
          "package": "CV",
          "signature": "(b1 -\u003e b1 -\u003e Ordering) -\u003e [b1] -\u003e [b]",
          "source": "src/Utils-List.html#ranks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "ranks",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:ranks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "replicateList",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#replicateList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "replicateList",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "List",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:replicateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "roll",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/Utils-List.html#roll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "roll",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "rollList",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/Utils-List.html#rollList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "rollList",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "partial": "List",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:rollList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "rotate",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/Utils-List.html#rotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "rotate",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "schwartzianTransform",
          "package": "CV",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#schwartzianTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "schwartzianTransform",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Transform",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:schwartzianTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "select",
          "package": "CV",
          "signature": "(c -\u003e c -\u003e Bool) -\u003e [c] -\u003e [c] -\u003e [c]",
          "source": "src/Utils-List.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "select",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "CV",
          "signature": "(c-\u003ec-\u003eBool)-\u003e[c]-\u003e[c]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "smallestBy",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#smallestBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "smallestBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:smallestBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "smallestBy'",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#smallestBy%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "smallestBy'",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "By'",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:smallestBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "sortVia",
          "package": "CV",
          "signature": "(b -\u003e a) -\u003e [b] -\u003e [b]",
          "source": "src/Utils-List.html#sortVia",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "sortVia",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Via",
          "signature": "(b-\u003ea)-\u003e[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:sortVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "splitBetween",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#splitBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "splitBetween",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "Between",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:splitBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "splitBy",
          "package": "CV",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#splitBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "splitBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:splitBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "splitToLength",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#splitToLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "splitToLength",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "To Length",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:splitToLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "splitToNParts",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#splitToNParts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "splitToNParts",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "To NParts",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:splitToNParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "stdDev",
          "package": "CV",
          "signature": "[b] -\u003e b",
          "source": "src/Utils-List.html#stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "stdDev",
          "normalized": "[a]-\u003ea",
          "package": "CV",
          "partial": "Dev",
          "signature": "[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "swapEverywhere",
          "package": "CV",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#swapEverywhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "swapEverywhere",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "Everywhere",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:swapEverywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeHalf",
          "package": "CV",
          "signature": "[a] -\u003e [a]",
          "source": "src/Utils-List.html#takeHalf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeHalf",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "partial": "Half",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeHalf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeLengths",
          "package": "CV",
          "signature": "[Int] -\u003e [a] -\u003e [[a]]",
          "source": "src/Utils-List.html#takeLengths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeLengths",
          "normalized": "[Int]-\u003e[a]-\u003e[[a]]",
          "package": "CV",
          "partial": "Lengths",
          "signature": "[Int]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeNAccordingTo",
          "package": "CV",
          "signature": "Int -\u003e ([a], [b]) -\u003e [(a, b)]",
          "source": "src/Utils-List.html#takeNAccordingTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeNAccordingTo",
          "normalized": "Int-\u003e([a],[b])-\u003e[(a,b)]",
          "package": "CV",
          "partial": "NAccording To",
          "signature": "Int-\u003e([a],[b])-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeNAccordingTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeTail",
          "package": "CV",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#takeTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeTail",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "Tail",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeWhile1",
          "package": "CV",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeWhile1",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "takeWhile2",
          "package": "CV",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Utils-List.html#takeWhile2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "takeWhile2",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "CV",
          "partial": "While",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:takeWhile2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "tear",
          "package": "CV",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Utils-List.html#tear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "tear",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "CV",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:tear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.List",
          "name": "zeroMean",
          "package": "CV",
          "signature": "[b] -\u003e [b]",
          "source": "src/Utils-List.html#zeroMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils List",
          "module": "Utils.List",
          "name": "zeroMean",
          "normalized": "[a]-\u003e[a]",
          "package": "CV",
          "partial": "Mean",
          "signature": "[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-List.html#v:zeroMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "Point",
          "package": "CV",
          "source": "src/Utils-Point.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "Point",
          "package": "CV",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "Pt",
          "package": "CV",
          "source": "src/Utils-Point.html#Pt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "Pt",
          "package": "CV",
          "partial": "Pt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Point.html#t:Pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "(\u003e/)",
          "package": "CV",
          "signature": "(t, t1) -\u003e (t, t1) -\u003e (t, t1)",
          "source": "src/Utils-Point.html#%3E%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "(\u003e/) \u003e/",
          "normalized": "(a,a)-\u003e(a,a)-\u003e(a,a)",
          "package": "CV",
          "signature": "(t,t)-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Point.html#v:-62--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "norm",
          "package": "CV",
          "signature": "Pt Double -\u003e Double",
          "source": "src/Utils-Point.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "norm",
          "normalized": "Pt Double-\u003eDouble",
          "package": "CV",
          "signature": "Pt Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Point.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Point",
          "name": "norm2",
          "package": "CV",
          "signature": "Pt a -\u003e a",
          "source": "src/Utils-Point.html#norm2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Point",
          "module": "Utils.Point",
          "name": "norm2",
          "normalized": "Pt a-\u003ea",
          "package": "CV",
          "signature": "Pt a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Point.html#v:norm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Pointer",
          "name": "Pointer",
          "package": "CV",
          "source": "src/Utils-Pointer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Pointer",
          "module": "Utils.Pointer",
          "name": "Pointer",
          "package": "CV",
          "partial": "Pointer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Pointer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Pointer",
          "name": "withPtrList",
          "package": "CV",
          "signature": "[ForeignPtr a] -\u003e (Ptr (Ptr a) -\u003e IO b) -\u003e IO b",
          "source": "src/Utils-Pointer.html#withPtrList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Pointer",
          "module": "Utils.Pointer",
          "name": "withPtrList",
          "normalized": "[ForeignPtr a]-\u003e(Ptr(Ptr a)-\u003eIO b)-\u003eIO b",
          "package": "CV",
          "partial": "Ptr List",
          "signature": "[ForeignPtr a]-\u003e(Ptr(Ptr a)-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Pointer.html#v:withPtrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "source": "src/Utils-Rectangle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "partial": "Rectangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "source": "src/Utils-Rectangle.html#Rectangle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "partial": "Rectangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "signature": "Rectangle !a !a !a !a",
          "source": "src/Utils-Rectangle.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "Rectangle",
          "package": "CV",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate rectangle around point (x,y)\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "around",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#around",
          "type": "function"
        },
        "index": {
          "description": "Create rectangle around point",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "around",
          "normalized": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "package": "CV",
          "signature": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:around"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "bottom",
          "package": "CV",
          "signature": "Rectangle a -\u003e a",
          "source": "src/Utils-Rectangle.html#bottom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "bottom",
          "normalized": "Rectangle a-\u003ea",
          "package": "CV",
          "signature": "Rectangle a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "bottomLeft",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#bottomLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "bottomLeft",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "partial": "Left",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:bottomLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "bottomRight",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#bottomRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "bottomRight",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "partial": "Right",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:bottomRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "center",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#center",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "center",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "centerI",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#centerI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "centerI",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:centerI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "contains",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a -\u003e Bool",
          "source": "src/Utils-Rectangle.html#contains",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "contains",
          "normalized": "Rectangle a-\u003eRectangle a-\u003eBool",
          "package": "CV",
          "signature": "Rectangle a-\u003eRectangle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Adjust the size of the rectangle to be divisible by 2^n.\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "enlargeToNthPower",
          "package": "CV",
          "signature": "b -\u003e Rectangle a -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#enlargeToNthPower",
          "type": "function"
        },
        "index": {
          "description": "Adjust the size of the rectangle to be divisible by",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "enlargeToNthPower",
          "normalized": "a-\u003eRectangle b-\u003eRectangle b",
          "package": "CV",
          "partial": "To Nth Power",
          "signature": "b-\u003eRectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:enlargeToNthPower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "fromInt",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a1",
          "source": "src/Utils-Rectangle.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "fromInt",
          "normalized": "Rectangle a-\u003eRectangle a",
          "package": "CV",
          "partial": "Int",
          "signature": "Rectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "fromPtSize",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#fromPtSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "fromPtSize",
          "normalized": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "package": "CV",
          "partial": "Pt Size",
          "signature": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:fromPtSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn rectangle r2 in coordinate system defined by r1\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "inCoords",
          "package": "CV",
          "signature": "Rectangle t -\u003e Rectangle t -\u003e ((t, t), (t, t)) -\u003e Rectangle (t, t)",
          "source": "src/Utils-Rectangle.html#inCoords",
          "type": "function"
        },
        "index": {
          "description": "Return rectangle r2 in coordinate system defined by r1",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "inCoords",
          "normalized": "Rectangle a-\u003eRectangle a-\u003e((a,a),(a,a))-\u003eRectangle(a,a)",
          "package": "CV",
          "partial": "Coords",
          "signature": "Rectangle t-\u003eRectangle t-\u003e((t,t),(t,t))-\u003eRectangle(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:inCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a point in coordinates of given rectangle\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "inCoords'",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t) -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#inCoords%27",
          "type": "function"
        },
        "index": {
          "description": "Return point in coordinates of given rectangle",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "inCoords'",
          "normalized": "Rectangle a-\u003e(a,a)-\u003e(a,a)",
          "package": "CV",
          "partial": "Coords'",
          "signature": "Rectangle t-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:inCoords-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "intersect1D",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Bool",
          "source": "src/Utils-Rectangle.html#intersect1D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "intersect1D",
          "normalized": "(a,a)-\u003e(a,a)-\u003eBool",
          "package": "CV",
          "signature": "(a,a)-\u003e(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:intersect1D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "intersection",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#intersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "intersection",
          "normalized": "Rectangle a-\u003eRectangle a-\u003eRectangle a",
          "package": "CV",
          "signature": "Rectangle a-\u003eRectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "intersects",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a -\u003e Bool",
          "source": "src/Utils-Rectangle.html#intersects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "intersects",
          "normalized": "Rectangle a-\u003eRectangle a-\u003eBool",
          "package": "CV",
          "signature": "Rectangle a-\u003eRectangle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:intersects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "left",
          "package": "CV",
          "signature": "Rectangle t -\u003e t",
          "source": "src/Utils-Rectangle.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "left",
          "normalized": "Rectangle a-\u003ea",
          "package": "CV",
          "signature": "Rectangle t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "mkRec",
          "package": "CV",
          "signature": "((Integer, Integer), (Integer, Integer)) -\u003e Rectangle Integer",
          "source": "src/Utils-Rectangle.html#mkRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "mkRec",
          "normalized": "((Integer,Integer),(Integer,Integer))-\u003eRectangle Integer",
          "package": "CV",
          "partial": "Rec",
          "signature": "((Integer,Integer),(Integer,Integer))-\u003eRectangle Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:mkRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "mkRectCorners",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#mkRectCorners",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "mkRectCorners",
          "normalized": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "package": "CV",
          "partial": "Rect Corners",
          "signature": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:mkRectCorners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "mkRectangle",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#mkRectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "mkRectangle",
          "normalized": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "package": "CV",
          "partial": "Rectangle",
          "signature": "(a,a)-\u003e(a,a)-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:mkRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "propIntersectionArea",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a -\u003e Bool",
          "source": "src/Utils-Rectangle.html#propIntersectionArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "propIntersectionArea",
          "normalized": "Rectangle a-\u003eRectangle a-\u003eBool",
          "package": "CV",
          "partial": "Intersection Area",
          "signature": "Rectangle a-\u003eRectangle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:propIntersectionArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "propIntersectionCommutes",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a -\u003e Bool",
          "source": "src/Utils-Rectangle.html#propIntersectionCommutes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "propIntersectionCommutes",
          "normalized": "Rectangle a-\u003eRectangle a-\u003eBool",
          "package": "CV",
          "partial": "Intersection Commutes",
          "signature": "Rectangle a-\u003eRectangle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:propIntersectionCommutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "prop_Corners",
          "package": "CV",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Bool",
          "source": "src/Utils-Rectangle.html#prop_Corners",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "prop_Corners",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eBool",
          "package": "CV",
          "partial": "Corners",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:prop_Corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "prop_intersect1DCommutes",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Bool",
          "source": "src/Utils-Rectangle.html#prop_intersect1DCommutes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "prop_intersect1DCommutes",
          "normalized": "(a,a)-\u003e(a,a)-\u003eBool",
          "package": "CV",
          "partial": "DCommutes",
          "signature": "(a,a)-\u003e(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:prop_intersect1DCommutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "prop_intersectsCommutes",
          "package": "CV",
          "signature": "((Integer, Integer), (Integer, Integer)) -\u003e ((Integer, Integer), (Integer, Integer)) -\u003e Bool",
          "source": "src/Utils-Rectangle.html#prop_intersectsCommutes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "prop_intersectsCommutes",
          "normalized": "((Integer,Integer),(Integer,Integer))-\u003e((Integer,Integer),(Integer,Integer))-\u003eBool",
          "package": "CV",
          "partial": "Commutes",
          "signature": "((Integer,Integer),(Integer,Integer))-\u003e((Integer,Integer),(Integer,Integer))-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:prop_intersectsCommutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "rArea",
          "package": "CV",
          "signature": "Rectangle a -\u003e a",
          "source": "src/Utils-Rectangle.html#rArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "rArea",
          "normalized": "Rectangle a-\u003ea",
          "package": "CV",
          "partial": "Area",
          "signature": "Rectangle a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:rArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "rSize",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#rSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "rSize",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "partial": "Size",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:rSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "right",
          "package": "CV",
          "signature": "Rectangle a -\u003e a",
          "source": "src/Utils-Rectangle.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "right",
          "normalized": "Rectangle a-\u003ea",
          "package": "CV",
          "signature": "Rectangle a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "roundR",
          "package": "CV",
          "signature": "Rectangle a -\u003e Rectangle a1",
          "source": "src/Utils-Rectangle.html#roundR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "roundR",
          "normalized": "Rectangle a-\u003eRectangle a",
          "package": "CV",
          "signature": "Rectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:roundR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "s",
          "package": "CV",
          "signature": "a -\u003e t -\u003e t",
          "source": "src/Utils-Rectangle.html#s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "s",
          "normalized": "a-\u003eb-\u003eb",
          "package": "CV",
          "signature": "a-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a rectangle\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "scale",
          "package": "CV",
          "signature": "(a1, a2) -\u003e Rectangle a3 -\u003e Rectangle a",
          "source": "src/Utils-Rectangle.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Scale rectangle",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "scale",
          "normalized": "(a,a)-\u003eRectangle a-\u003eRectangle a",
          "package": "CV",
          "signature": "(a,a)-\u003eRectangle a-\u003eRectangle a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a tiling of a rectangles.\n\u003c/p\u003e",
          "module": "Utils.Rectangle",
          "name": "tile",
          "package": "CV",
          "signature": "(a, a) -\u003e (a, a) -\u003e Rectangle a -\u003e [Rectangle a]",
          "source": "src/Utils-Rectangle.html#tile",
          "type": "function"
        },
        "index": {
          "description": "Create tiling of rectangles",
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "tile",
          "normalized": "(a,a)-\u003e(a,a)-\u003eRectangle a-\u003e[Rectangle a]",
          "package": "CV",
          "signature": "(a,a)-\u003e(a,a)-\u003eRectangle a-\u003e[Rectangle a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "top",
          "package": "CV",
          "signature": "Rectangle t -\u003e t",
          "source": "src/Utils-Rectangle.html#top",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "top",
          "normalized": "Rectangle a-\u003ea",
          "package": "CV",
          "signature": "Rectangle t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "topLeft",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#topLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "topLeft",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "partial": "Left",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:topLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "topRight",
          "package": "CV",
          "signature": "Rectangle t -\u003e (t, t)",
          "source": "src/Utils-Rectangle.html#topRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "topRight",
          "normalized": "Rectangle a-\u003e(a,a)",
          "package": "CV",
          "partial": "Right",
          "signature": "Rectangle t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:topRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Rectangle",
          "name": "vertices",
          "package": "CV",
          "signature": "Rectangle t -\u003e [(t, t)]",
          "source": "src/Utils-Rectangle.html#vertices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Rectangle",
          "module": "Utils.Rectangle",
          "name": "vertices",
          "normalized": "Rectangle a-\u003e[(a,a)]",
          "package": "CV",
          "signature": "Rectangle t-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Rectangle.html#v:vertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "CV",
          "source": "src/Utils-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "CV",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "LRB",
          "package": "CV",
          "source": "src/Utils-Stream.html#LRB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "LRB",
          "package": "CV",
          "partial": "LRB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#t:LRB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream of monadic values\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "CV",
          "source": "src/Utils-Stream.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "Stream of monadic values",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Stream",
          "package": "CV",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "B",
          "package": "CV",
          "signature": "B b",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "B",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "L",
          "package": "CV",
          "signature": "L a",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "L",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "R",
          "package": "CV",
          "signature": "R c",
          "source": "src/Utils-Stream.html#LRB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "R",
          "package": "CV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Terminated",
          "package": "CV",
          "signature": "Terminated",
          "source": "src/Utils-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Terminated",
          "package": "CV",
          "partial": "Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:Terminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "Value",
          "package": "CV",
          "signature": "Value (m (a, Stream m a))",
          "source": "src/Utils-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "Value",
          "normalized": "Value(a(b,Stream a b))",
          "package": "CV",
          "partial": "Value",
          "signature": "Value(m(a,Stream m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "consS",
          "package": "CV",
          "signature": "a -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#consS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "consS",
          "normalized": "a-\u003eStream b a-\u003eStream b a",
          "package": "CV",
          "signature": "a-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:consS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop elements from the stream. Due to stream structure, this operation cannot\n  fail gracefully when dropping more elements than what is found in the stream\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "dropS",
          "package": "CV",
          "signature": "Int -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#dropS",
          "type": "function"
        },
        "index": {
          "description": "Drop elements from the stream Due to stream structure this operation cannot fail gracefully when dropping more elements than what is found in the stream",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "dropS",
          "normalized": "Int-\u003eStream a b-\u003eStream a b",
          "package": "CV",
          "signature": "Int-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:dropS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure and monadic left fold over a stream\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "foldS",
          "package": "CV",
          "signature": "(a -\u003e t -\u003e a) -\u003e a -\u003e Stream m t -\u003e m a",
          "source": "src/Utils-Stream.html#foldS",
          "type": "function"
        },
        "index": {
          "description": "Pure and monadic left fold over stream",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "foldS",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream c b-\u003ec a",
          "package": "CV",
          "signature": "(a-\u003et-\u003ea)-\u003ea-\u003eStream m t-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:foldS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "foldSM",
          "package": "CV",
          "signature": "(a -\u003e t -\u003e m a) -\u003e a -\u003e Stream m t -\u003e m a",
          "source": "src/Utils-Stream.html#foldSM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "foldSM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eStream c b-\u003ec a",
          "package": "CV",
          "partial": "SM",
          "signature": "(a-\u003et-\u003em a)-\u003ea-\u003eStream m t-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:foldSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stream by iterating a monadic action\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "iterateS",
          "package": "CV",
          "signature": "(a -\u003e m a) -\u003e a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#iterateS",
          "type": "function"
        },
        "index": {
          "description": "Create stream by iterating monadic action",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "iterateS",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eStream b a",
          "package": "CV",
          "signature": "(a-\u003em a)-\u003ea-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:iterateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeating stream\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "listToStream",
          "package": "CV",
          "signature": "[a] -\u003e Stream m a",
          "source": "src/Utils-Stream.html#listToStream",
          "type": "function"
        },
        "index": {
          "description": "Repeating stream",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "listToStream",
          "normalized": "[a]-\u003eStream b a",
          "package": "CV",
          "partial": "To Stream",
          "signature": "[a]-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:listToStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mapMS",
          "package": "CV",
          "signature": "(a -\u003e m b) -\u003e Stream m a -\u003e Stream m b",
          "source": "src/Utils-Stream.html#mapMS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mapMS",
          "normalized": "(a-\u003eb c)-\u003eStream b a-\u003eStream b c",
          "package": "CV",
          "partial": "MS",
          "signature": "(a-\u003em b)-\u003eStream m a-\u003eStream m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mapMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mergeE",
          "package": "CV",
          "signature": "(t, t1) -\u003e Stream m (LRB (t2, t) (t2, (t, t1)) (t2, t1)) -\u003e Stream m (t2, (t, t1))",
          "source": "src/Utils-Stream.html#mergeE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mergeE",
          "normalized": "(a,a)-\u003eStream b(LRB(a,a)(a,(a,a))(a,a))-\u003eStream b(a,(a,a))",
          "package": "CV",
          "signature": "(t,t)-\u003eStream m(LRB(t,t)(t,(t,t))(t,t))-\u003eStream m(t,(t,t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mergeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mergeManyW",
          "package": "CV",
          "signature": "[t1] -\u003e (t1 -\u003e t1 -\u003e t1) -\u003e [Stream m (t, t1)] -\u003e Stream m (t, t1)",
          "source": "src/Utils-Stream.html#mergeManyW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mergeManyW",
          "normalized": "[a]-\u003e(a-\u003ea-\u003ea)-\u003e[Stream b(a,a)]-\u003eStream b(a,a)",
          "package": "CV",
          "partial": "Many",
          "signature": "[t]-\u003e(t-\u003et-\u003et)-\u003e[Stream m(t,t)]-\u003eStream m(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mergeManyW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mergeS",
          "package": "CV",
          "signature": "Stream m (a, t) -\u003e Stream m (a, t1) -\u003e Stream m (LRB (a, t) (a, (t, t1)) (a, t1))",
          "source": "src/Utils-Stream.html#mergeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mergeS",
          "normalized": "Stream a(b,c)-\u003eStream a(b,c)-\u003eStream a(LRB(b,c)(b,(c,c))(b,c))",
          "package": "CV",
          "signature": "Stream m(a,t)-\u003eStream m(a,t)-\u003eStream m(LRB(a,t)(a,(t,t))(a,t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mergeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mergeTimeStreams",
          "package": "CV",
          "signature": "t -\u003e t1 -\u003e Stream m (t2, t) -\u003e Stream m (t2, t1) -\u003e Stream m (t2, (t, t1))",
          "source": "src/Utils-Stream.html#mergeTimeStreams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mergeTimeStreams",
          "normalized": "a-\u003ea-\u003eStream b(a,a)-\u003eStream b(a,a)-\u003eStream b(a,(a,a))",
          "package": "CV",
          "partial": "Time Streams",
          "signature": "t-\u003et-\u003eStream m(t,t)-\u003eStream m(t,t)-\u003eStream m(t,(t,t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mergeTimeStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "mergeTimeStreamsWith",
          "package": "CV",
          "signature": "t -\u003e t1 -\u003e (t -\u003e t1 -\u003e t3) -\u003e Stream m (t2, t) -\u003e Stream m (t2, t1) -\u003e Stream m (t2, t3)",
          "source": "src/Utils-Stream.html#mergeTimeStreamsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "mergeTimeStreamsWith",
          "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003ea)-\u003eStream b(a,a)-\u003eStream b(a,a)-\u003eStream b(a,a)",
          "package": "CV",
          "partial": "Time Streams With",
          "signature": "t-\u003et-\u003e(t-\u003et-\u003et)-\u003eStream m(t,t)-\u003eStream m(t,t)-\u003eStream m(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:mergeTimeStreamsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "pairS",
          "package": "CV",
          "signature": "Stream m a -\u003e Stream m (a, a)",
          "source": "src/Utils-Stream.html#pairS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "pairS",
          "normalized": "Stream a b-\u003eStream a(b,b)",
          "package": "CV",
          "signature": "Stream m a-\u003eStream m(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:pairS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "push",
          "package": "CV",
          "signature": "a -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#push",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "push",
          "normalized": "a-\u003eStream b a-\u003eStream b a",
          "package": "CV",
          "signature": "a-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "repeatS",
          "package": "CV",
          "signature": "a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#repeatS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "repeatS",
          "normalized": "a-\u003eStream b a",
          "package": "CV",
          "signature": "a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:repeatS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "repeatSM",
          "package": "CV",
          "signature": "m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#repeatSM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "repeatSM",
          "normalized": "a b-\u003eStream a b",
          "package": "CV",
          "partial": "SM",
          "signature": "m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:repeatSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "runLast",
          "package": "CV",
          "signature": "a -\u003e Stream m a -\u003e m a",
          "source": "src/Utils-Stream.html#runLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "runLast",
          "normalized": "a-\u003eStream b a-\u003eb a",
          "package": "CV",
          "partial": "Last",
          "signature": "a-\u003eStream m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:runLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "runLast1",
          "package": "CV",
          "signature": "Stream m a -\u003e m a",
          "source": "src/Utils-Stream.html#runLast1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "runLast1",
          "normalized": "Stream a b-\u003ea b",
          "package": "CV",
          "partial": "Last",
          "signature": "Stream m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:runLast1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "runStream",
          "package": "CV",
          "signature": "Stream m a -\u003e m [a]",
          "source": "src/Utils-Stream.html#runStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "runStream",
          "normalized": "Stream a b-\u003ea[b]",
          "package": "CV",
          "partial": "Stream",
          "signature": "Stream m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:runStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "runStream_",
          "package": "CV",
          "signature": "Stream m t -\u003e m ()",
          "source": "src/Utils-Stream.html#runStream_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "runStream_",
          "normalized": "Stream a b-\u003ea()",
          "package": "CV",
          "partial": "Stream",
          "signature": "Stream m t-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:runStream_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "sequenceS",
          "package": "CV",
          "signature": "Stream m (m a) -\u003e Stream m a",
          "source": "src/Utils-Stream.html#sequenceS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "sequenceS",
          "normalized": "Stream a(a b)-\u003eStream a b",
          "package": "CV",
          "signature": "Stream m(m a)-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:sequenceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaching side effects\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "sideEffect",
          "package": "CV",
          "signature": "(a -\u003e m ()) -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#sideEffect",
          "type": "function"
        },
        "index": {
          "description": "Attaching side effects",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "sideEffect",
          "normalized": "(a-\u003eb())-\u003eStream b a-\u003eStream b a",
          "package": "CV",
          "partial": "Effect",
          "signature": "(a-\u003em())-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:sideEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "takeS",
          "package": "CV",
          "signature": "Int -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#takeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "takeS",
          "normalized": "Int-\u003eStream a b-\u003eStream a b",
          "package": "CV",
          "signature": "Int-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:takeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "takeWhileS",
          "package": "CV",
          "signature": "(a -\u003e Bool) -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#takeWhileS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "takeWhileS",
          "normalized": "(a-\u003eBool)-\u003eStream b a-\u003eStream b a",
          "package": "CV",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:takeWhileS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "terminateOn",
          "package": "CV",
          "signature": "(a -\u003e Bool) -\u003e Stream m a -\u003e Stream m a",
          "source": "src/Utils-Stream.html#terminateOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "terminateOn",
          "normalized": "(a-\u003eBool)-\u003eStream b a-\u003eStream b a",
          "package": "CV",
          "partial": "On",
          "signature": "(a-\u003eBool)-\u003eStream m a-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:terminateOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two (time)streams\n\u003c/p\u003e",
          "module": "Utils.Stream",
          "name": "time",
          "package": "CV",
          "signature": "(t, t1) -\u003e t",
          "source": "src/Utils-Stream.html#time",
          "type": "function"
        },
        "index": {
          "description": "Merge two time streams",
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "time",
          "normalized": "(a,a)-\u003ea",
          "package": "CV",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "value",
          "package": "CV",
          "signature": "(t, t1) -\u003e t1",
          "source": "src/Utils-Stream.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "value",
          "normalized": "(a,a)-\u003ea",
          "package": "CV",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Stream",
          "name": "zipS",
          "package": "CV",
          "signature": "f a1 -\u003e f a -\u003e f (a1, a)",
          "source": "src/Utils-Stream.html#zipS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Stream",
          "module": "Utils.Stream",
          "name": "zipS",
          "normalized": "a b-\u003ea b-\u003ea(b,b)",
          "package": "CV",
          "signature": "f a-\u003ef a-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CV/docs/Utils-Stream.html#v:zipS"
      }
    }
  ]
]