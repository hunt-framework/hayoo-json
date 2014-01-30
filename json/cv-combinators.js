[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImageProcessors is a functional (Processor-based) interface to computer vision using OpenCV.\n\u003c/p\u003e\u003cp\u003eThe Processor interface allows the primitives in this library to take care of all the allocation / deallocation\n of resources and other setup/teardown requirements, and to appropriately nest them when combining primitives.\n\u003c/p\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e win = window 0        -- The number is essentially a label for the window\n cam = camera 0        -- Autodetect camera\n edge = canny 30 190 3 -- Edge detecting processor using canny operator\n\n test = cam \u003e\u003e\u003e edge \u003e\u003e\u003e win   \n\u003c/pre\u003e\u003cp\u003eThe last expression is a processor that captures frames from camera and displays edge-detected version in the window.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "module",
        "fct-source": "src/AI-CV-ImageProcessors.html",
        "fct-type": "module",
        "title": "ImageProcessors"
      },
      "index": {
        "description": "ImageProcessors is functional Processor-based interface to computer vision using OpenCV The Processor interface allows the primitives in this library to take care of all the allocation deallocation of resources and other setup teardown requirements and to appropriately nest them when combining primitives Simple example win window The number is essentially label for the window cam camera Autodetect camera edge canny Edge detecting processor using canny operator test cam edge win The last expression is processor that captures frames from camera and displays edge-detected version in the window",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "ImageProcessors",
        "normalized": "",
        "package": "cv-combinators",
        "partial": "Image Processors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#t:Image",
      "description": {
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "type",
        "fct-source": "src/AI-CV-ImageProcessors.html#Image",
        "fct-type": "type",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "Image",
        "normalized": "",
        "package": "cv-combinators",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#t:ImageProcessor",
      "description": {
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "type",
        "fct-source": "src/AI-CV-ImageProcessors.html#ImageProcessor",
        "fct-type": "type",
        "title": "ImageProcessor"
      },
      "index": {
        "description": "",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "ImageProcessor",
        "normalized": "",
        "package": "cv-combinators",
        "partial": "Image Processor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#t:ImageSink",
      "description": {
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "type",
        "fct-source": "src/AI-CV-ImageProcessors.html#ImageSink",
        "fct-type": "type",
        "title": "ImageSink"
      },
      "index": {
        "description": "",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "ImageSink",
        "normalized": "",
        "package": "cv-combinators",
        "partial": "Image Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#t:ImageSource",
      "description": {
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "type",
        "fct-source": "src/AI-CV-ImageProcessors.html#ImageSource",
        "fct-type": "type",
        "title": "ImageSource"
      },
      "index": {
        "description": "",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "ImageSource",
        "normalized": "",
        "package": "cv-combinators",
        "partial": "Image Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:camera",
      "description": {
        "fct-descr": "\u003cp\u003eA capture device, using OpenCV's HighGui lib's cvCreateCameraCapture\n should work with most webcames. See OpenCV's docs for information.\n This processor outputs the latest image from the camera at each invocation.\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "Int -\u003e ImageSource",
        "fct-source": "src/AI-CV-ImageProcessors.html#camera",
        "fct-type": "function",
        "title": "camera"
      },
      "index": {
        "description": "capture device using OpenCV HighGui lib cvCreateCameraCapture should work with most webcames See OpenCV docs for information This processor outputs the latest image from the camera at each invocation",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "camera",
        "normalized": "Int-\u003eImageSource",
        "package": "cv-combinators",
        "partial": "",
        "signature": "Int-\u003eImageSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:canny",
      "description": {
        "fct-descr": "\u003cp\u003eOpenCV's cvCanny            \n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "Int-\u003e Int-\u003e Int-\u003e ImageProcessor",
        "fct-type": "function",
        "title": "canny"
      },
      "index": {
        "description": "OpenCV cvCanny",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "canny",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eImageProcessor",
        "package": "cv-combinators",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003eImageProcessor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:dilate",
      "description": {
        "fct-descr": "\u003cp\u003eOpenCV's cvDilate\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "Int -\u003e ImageProcessor",
        "fct-source": "src/AI-CV-ImageProcessors.html#dilate",
        "fct-type": "function",
        "title": "dilate"
      },
      "index": {
        "description": "OpenCV cvDilate",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "dilate",
        "normalized": "Int-\u003eImageProcessor",
        "package": "cv-combinators",
        "partial": "",
        "signature": "Int-\u003eImageProcessor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:drawRects",
      "description": {
        "fct-descr": "\u003cp\u003eOpenCV's cvRectangle, currently without width, color or line type control\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "IOProcessor (Image, [CvRect]) Image",
        "fct-source": "src/AI-CV-ImageProcessors.html#drawRects",
        "fct-type": "function",
        "title": "drawRects"
      },
      "index": {
        "description": "OpenCV cvRectangle currently without width color or line type control",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "drawRects",
        "normalized": "IOProcessor(Image,[CvRect])Image",
        "package": "cv-combinators",
        "partial": "Rects",
        "signature": "IOProcessor(Image,[CvRect])Image"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:haarDetect",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for OpenCV's cvHaarDetectObjects and the surrounding required things (mem storage, cascade loading, etc).\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "String-\u003e Double-\u003e Int-\u003e HaarDetectFlag-\u003e CvSize-\u003e IOProcessor Image [CvRect]",
        "fct-type": "function",
        "title": "haarDetect"
      },
      "index": {
        "description": "Wrapper for OpenCV cvHaarDetectObjects and the surrounding required things mem storage cascade loading etc",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "haarDetect",
        "normalized": "String-\u003eDouble-\u003eInt-\u003eHaarDetectFlag-\u003eCvSize-\u003eIOProcessor Image[CvRect]",
        "package": "cv-combinators",
        "partial": "Detect",
        "signature": "String-\u003eDouble-\u003eInt-\u003eHaarDetectFlag-\u003eCvSize-\u003eIOProcessor Image[CvRect]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:keyPressed",
      "description": {
        "fct-descr": "\u003cp\u003eSome general utility functions for use with Processors and OpenCV\n\u003c/p\u003e\u003cp\u003ePredicate for pressed keys\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/AI-CV-ImageProcessors.html#keyPressed",
        "fct-type": "function",
        "title": "keyPressed"
      },
      "index": {
        "description": "Some general utility functions for use with Processors and OpenCV Predicate for pressed keys",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "keyPressed",
        "normalized": "a-\u003eIO Bool",
        "package": "cv-combinators",
        "partial": "Pressed",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:resize",
      "description": {
        "fct-descr": "\u003cp\u003eOpenCV's cvResize\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "Int -\u003e Int -\u003e InterpolationMethod -\u003e ImageProcessor",
        "fct-source": "src/AI-CV-ImageProcessors.html#resize",
        "fct-type": "function",
        "title": "resize"
      },
      "index": {
        "description": "OpenCV cvResize",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "resize",
        "normalized": "Int-\u003eInt-\u003eInterpolationMethod-\u003eImageProcessor",
        "package": "cv-combinators",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInterpolationMethod-\u003eImageProcessor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:runTill",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the processor until a predicate is true, for predicates, and processors that take () as input\n (such as chains that start with a camera).\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "IOProcessor () b -\u003e (b -\u003e IO Bool) -\u003e IO b",
        "fct-source": "src/AI-CV-ImageProcessors.html#runTill",
        "fct-type": "function",
        "title": "runTill"
      },
      "index": {
        "description": "Runs the processor until predicate is true for predicates and processors that take as input such as chains that start with camera",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "runTill",
        "normalized": "IOProcessor()a-\u003e(a-\u003eIO Bool)-\u003eIO a",
        "package": "cv-combinators",
        "partial": "Till",
        "signature": "IOProcessor()b-\u003e(b-\u003eIO Bool)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:runTillKeyPressed",
      "description": {
        "fct-descr": "\u003cp\u003eName (and type) says it all.\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "IOProcessor () a -\u003e IO ()",
        "fct-source": "src/AI-CV-ImageProcessors.html#runTillKeyPressed",
        "fct-type": "function",
        "title": "runTillKeyPressed"
      },
      "index": {
        "description": "Name and type says it all",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "runTillKeyPressed",
        "normalized": "IOProcessor()a-\u003eIO()",
        "package": "cv-combinators",
        "partial": "Till Key Pressed",
        "signature": "IOProcessor()a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:videoFile",
      "description": {
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "String -\u003e ImageSource",
        "fct-source": "src/AI-CV-ImageProcessors.html#videoFile",
        "fct-type": "function",
        "title": "videoFile"
      },
      "index": {
        "description": "",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "videoFile",
        "normalized": "String-\u003eImageSource",
        "package": "cv-combinators",
        "partial": "File",
        "signature": "String-\u003eImageSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cv-combinators/docs/AI-CV-ImageProcessors.html#v:window",
      "description": {
        "fct-descr": "\u003cp\u003eA window that displays images.\n Note: windows with the same index will be the same window....is this ok?\n\u003c/p\u003e",
        "fct-module": "AI.CV.ImageProcessors",
        "fct-package": "cv-combinators",
        "fct-signature": "Int -\u003e ImageSink",
        "fct-source": "src/AI-CV-ImageProcessors.html#window",
        "fct-type": "function",
        "title": "window"
      },
      "index": {
        "description": "window that displays images Note windows with the same index will be the same window....is this ok",
        "hierarchy": "AI CV ImageProcessors",
        "module": "AI.CV.ImageProcessors",
        "name": "window",
        "normalized": "Int-\u003eImageSink",
        "package": "cv-combinators",
        "partial": "",
        "signature": "Int-\u003eImageSink"
      }
    }
  }
]