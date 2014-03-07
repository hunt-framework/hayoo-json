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
        "word": "graphics-drawingcombinators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn affine transformation is a linear transformation followed by\na translation; i.e. it is a function\n\u003c/p\u003e\u003cpre\u003e \\x -\u003e A*x + b\n\u003c/pre\u003e\u003cp\u003eWhere A is a linear transformation.  Affine transformations are the\nset of image transformations supported by Graphics.DrawingCombinators,\nroughly translate, rotate, scale, and compositions thereof.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "Affine",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators-Affine.html",
          "type": "module"
        },
        "index": {
          "description": "An affine transformation is linear transformation followed by translation i.e it is function Where is linear transformation Affine transformations are the set of image transformations supported by Graphics.DrawingCombinators roughly translate rotate scale and compositions thereof",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "Affine",
          "package": "graphics-drawingcombinators",
          "partial": "Affine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Affine transformation from R2 to R2.\n\u003c/p\u003e\u003cpre\u003e [[Affine]] = R2 -\u003e R2\n\u003c/pre\u003e\u003cp\u003eWith the Monoid instance \u003ccode\u003e(identity, compose)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "Affine",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators-Affine.html#Affine",
          "type": "data"
        },
        "index": {
          "description": "An Affine transformation from R2 to R2 Affine R2 R2 With the Monoid instance identity compose",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "Affine",
          "package": "graphics-drawingcombinators",
          "partial": "Affine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#t:Affine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "R",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators-Affine.html#R",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "R",
          "package": "graphics-drawingcombinators",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "R2",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators-Affine.html#R2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "R2",
          "package": "graphics-drawingcombinators",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[apply a]] = [[a]]\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "apply",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e R2 -\u003e R2",
          "source": "src/Graphics-DrawingCombinators-Affine.html#apply",
          "type": "function"
        },
        "index": {
          "description": "apply",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "apply",
          "normalized": "Affine-\u003eR-\u003eR",
          "package": "graphics-drawingcombinators",
          "signature": "Affine-\u003eR-\u003eR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[compose a b]] = [[a]] . [[b]]\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "compose",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e Affine -\u003e Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#compose",
          "type": "function"
        },
        "index": {
          "description": "compose",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "compose",
          "normalized": "Affine-\u003eAffine-\u003eAffine",
          "package": "graphics-drawingcombinators",
          "signature": "Affine-\u003eAffine-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[identity]] = id\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "identity",
          "package": "graphics-drawingcombinators",
          "signature": "Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#identity",
          "type": "function"
        },
        "index": {
          "description": "identity id",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "identity",
          "package": "graphics-drawingcombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[inverse x]] = inverse [[x]]\n\u003c/pre\u003e\u003cp\u003eIf the transformation is not invertible, this operation is\n undefined.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "inverse",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "inverse inverse If the transformation is not invertible this operation is undefined",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "inverse",
          "normalized": "Affine-\u003eAffine",
          "package": "graphics-drawingcombinators",
          "signature": "Affine-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply this Affine by the top of the OpenGL matrix stack.\n Don't mind this, it's an implementation detail.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "multGLmatrix",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e IO ()",
          "source": "src/Graphics-DrawingCombinators-Affine.html#multGLmatrix",
          "type": "function"
        },
        "index": {
          "description": "Multiply this Affine by the top of the OpenGL matrix stack Don mind this it an implementation detail",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "multGLmatrix",
          "normalized": "Affine-\u003eIO()",
          "package": "graphics-drawingcombinators",
          "partial": "GLmatrix",
          "signature": "Affine-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:multGLmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[rotate r]] (x,y) = (cos(r)x - sin(r)y, sin(r)x + cos(r)y)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "rotate",
          "package": "graphics-drawingcombinators",
          "signature": "R -\u003e Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "rotate cos sin sin cos",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "rotate",
          "normalized": "R-\u003eAffine",
          "package": "graphics-drawingcombinators",
          "signature": "R-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[scale xs ys]] (x,y) = (xs*x, ys*y)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "scale",
          "package": "graphics-drawingcombinators",
          "signature": "R -\u003e R -\u003e Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#scale",
          "type": "function"
        },
        "index": {
          "description": "scale xs ys xs ys",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "scale",
          "normalized": "R-\u003eR-\u003eAffine",
          "package": "graphics-drawingcombinators",
          "signature": "R-\u003eR-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e [[translate t]] x = [[t]] x + t\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "translate",
          "package": "graphics-drawingcombinators",
          "signature": "R2 -\u003e Affine",
          "source": "src/Graphics-DrawingCombinators-Affine.html#translate",
          "type": "function"
        },
        "index": {
          "description": "translate",
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "translate",
          "normalized": "R-\u003eAffine",
          "package": "graphics-drawingcombinators",
          "signature": "R-\u003eAffine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "withMultGLmatrix",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-DrawingCombinators-Affine.html#withMultGLmatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators Affine",
          "module": "Graphics.DrawingCombinators.Affine",
          "name": "withMultGLmatrix",
          "normalized": "Affine-\u003eIO a-\u003eIO a",
          "package": "graphics-drawingcombinators",
          "partial": "Mult GLmatrix",
          "signature": "Affine-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators-Affine.html#v:withMultGLmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDrawing combinators as a functional interface to 2D graphics using OpenGL.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, as in:\n\u003c/p\u003e\u003cpre\u003e import qualified Graphics.DrawingCombinators as Draw\n\u003c/pre\u003e\u003cp\u003eWhenever possible, a \u003cem\u003edenotational semantics\u003c/em\u003e for operations in this library\n is given.  Read \u003ccode\u003e[[x]]\u003c/code\u003e as \"the meaning of \u003ccode\u003ex\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eIntuitively, an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e is an infinite plane of pairs of colors \u003cem\u003eand\u003c/em\u003e\n \u003ccode\u003ea\u003c/code\u003e's.  The colors are what are drawn on the screen when you \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e, and\n the \u003ccode\u003ea\u003c/code\u003e's are what you can recover from coordinates using \u003ccode\u003e\u003ca\u003esample\u003c/a\u003e\u003c/code\u003e.  The\n latter allows you to tell, for example, what a user clicked on.\n\u003c/p\u003e\u003cp\u003eThe following discussion is about the associated data.  If you are only\n interested in drawing, rather than mapping from coordinates to values, you\n can ignore the following and just use \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e to overlay images.\n\u003c/p\u003e\u003cp\u003eWrangling the \u003ccode\u003ea\u003c/code\u003e's -- the associated data with each \"pixel\" -- is done\n using the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eThe primitive \u003ccode\u003eImage\u003c/code\u003es such as \u003ccode\u003e\u003ca\u003ecircle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e all return \u003ccode\u003eImage Any\u003c/code\u003e\n objects.  \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e is just a wrapper around \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, with \u003ccode\u003e(||)\u003c/code\u003e as its monoid\n operator.  So e.g. the points inside the circle will have the value \u003ccode\u003eAny\n True\u003c/code\u003e, and those outside will have the value \u003ccode\u003eAny False\u003c/code\u003e.  Returning \u003ccode\u003eAny\u003c/code\u003e\n instead of plain \u003ccode\u003eBool\u003c/code\u003e allows you to use \u003ccode\u003eImage\u003c/code\u003es as a monoid, e.g.\n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e to overlay two images. But if you are doing anything with\n sampling, you probably want to map this to something.  Here is a drawing\n with two circles that reports which one was hit:\n\u003c/p\u003e\u003cpre\u003e twoCircles :: Image String\n twoCircles = liftA2 test (translate (-1,0) %% circle) (translate (1,0) %% circle)\n   where\n   test (Any False) (Any False) = \"Miss!\"\n   test (Any False) (Any True)  = \"Hit Right!\"\n   test (Any True)  (Any False) = \"Hit Left!\"\n   test (Any True)  (Any True)  = \"Hit Both??!\"\n\u003c/pre\u003e\u003cp\u003eThe last case would only be possible if the circles were overlapping.\n\u003c/p\u003e\u003cp\u003eNote, the area-less shapes such as \u003ccode\u003e\u003ca\u003epoint\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ebezierCurve\u003c/a\u003e\u003c/code\u003e\n \u003cem\u003ealways\u003c/em\u003e return \u003ccode\u003eAny False\u003c/code\u003e when sampled, even if the exact same\n coordinates are given.  This is because miniscule floating-point error\n can make these shapes very brittle under transformations.  If you need\n a point to be clickable, make it, for example, a very small box.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "DrawingCombinators",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators.html",
          "type": "module"
        },
        "index": {
          "description": "Drawing combinators as functional interface to graphics using OpenGL This module is intended to be imported qualified as in import qualified Graphics.DrawingCombinators as Draw Whenever possible denotational semantics for operations in this library is given Read as the meaning of Intuitively an Image is an infinite plane of pairs of colors and The colors are what are drawn on the screen when you render and the are what you can recover from coordinates using sample The latter allows you to tell for example what user clicked on The following discussion is about the associated data If you are only interested in drawing rather than mapping from coordinates to values you can ignore the following and just use mappend and mconcat to overlay images Wrangling the the associated data with each pixel is done using the Functor Applicative and Monoid instances The primitive Image such as circle and text all return Image Any objects Any is just wrapper around Bool with as its monoid operator So e.g the points inside the circle will have the value Any True and those outside will have the value Any False Returning Any instead of plain Bool allows you to use Image as monoid e.g mappend to overlay two images But if you are doing anything with sampling you probably want to map this to something Here is drawing with two circles that reports which one was hit twoCircles Image String twoCircles liftA2 test translate circle translate circle where test Any False Any False Miss test Any False Any True Hit Right test Any True Any False Hit Left test Any True Any True Hit Both The last case would only be possible if the circles were overlapping Note the area-less shapes such as point line and bezierCurve always return Any False when sampled even if the exact same coordinates are given This is because miniscule floating-point error can make these shapes very brittle under transformations If you need point to be clickable make it for example very small box",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "DrawingCombinators",
          "package": "graphics-drawingcombinators",
          "partial": "Drawing Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under disjunction.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "Any",
          "package": "graphics-drawingcombinators",
          "type": "newtype"
        },
        "index": {
          "description": "Boolean monoid under disjunction",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Any",
          "package": "graphics-drawingcombinators",
          "partial": "Any",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor is defined in the usual computer graphics sense:\n a 4 vector containing red, green, blue, and alpha.\n\u003c/p\u003e\u003cp\u003eThe Monoid instance is given by alpha composition, described\n at \u003ccode\u003ehttp://lukepalmer.wordpress.com/2010/02/05/associative-alpha-blending/\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIn the semantcs the values \u003ccode\u003ezero\u003c/code\u003e and \u003ccode\u003eone\u003c/code\u003e are used, which are defined as:\n\u003c/p\u003e\u003cpre\u003e zero = Color 0 0 0 0\n one = Color 1 1 1 1\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "Color",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Color is defined in the usual computer graphics sense vector containing red green blue and alpha The Monoid instance is given by alpha composition described at http lukepalmer.wordpress.com associative-alpha-blending In the semantcs the values zero and one are used which are defined as zero Color one Color",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Color",
          "package": "graphics-drawingcombinators",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators",
          "name": "Font",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators.html#Font",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Font",
          "package": "graphics-drawingcombinators",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of images.\n\u003c/p\u003e\u003cpre\u003e [[Image a]] = R2 -\u003e (Color, a)\n\u003c/pre\u003e\u003cp\u003eThe semantics of the instances are all consistent with \u003cem\u003etype class morphism\u003c/em\u003e.\n I.e. Functor, Applicative, and Monoid act point-wise, using the \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e monoid\n described below.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "Image",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators.html#Image",
          "type": "data"
        },
        "index": {
          "description": "The type of images Image R2 Color The semantics of the instances are all consistent with type class morphism I.e Functor Applicative and Monoid act point-wise using the Color monoid described below",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Image",
          "package": "graphics-drawingcombinators",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "Monoid",
          "package": "graphics-drawingcombinators",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Monoid",
          "package": "graphics-drawingcombinators",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Sprite represents a finite bitmap image.\n\u003c/p\u003e\u003cpre\u003e [[Sprite]] = [-1,1]^2 -\u003e Color\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "Sprite",
          "package": "graphics-drawingcombinators",
          "source": "src/Graphics-DrawingCombinators.html#Sprite",
          "type": "data"
        },
        "index": {
          "description": "Sprite represents finite bitmap image Sprite Color",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Sprite",
          "package": "graphics-drawingcombinators",
          "partial": "Sprite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#t:Sprite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an image by an \u003ccode\u003e\u003ca\u003eAffine\u003c/a\u003e\u003c/code\u003e transformation.\n\u003c/p\u003e\u003cpre\u003e [[tr % im]] = [[im]] . inverse [[tr]]\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "(%%)",
          "package": "graphics-drawingcombinators",
          "signature": "Affine -\u003e Image a -\u003e Image a",
          "source": "src/Graphics-DrawingCombinators.html#%25%25",
          "type": "function"
        },
        "index": {
          "description": "Transform an image by an Affine transformation tr im im inverse tr",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "(%%) %%",
          "normalized": "Affine-\u003eImage a-\u003eImage a",
          "package": "graphics-drawingcombinators",
          "signature": "Affine-\u003eImage a-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:-37--37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators",
          "name": "Any",
          "package": "graphics-drawingcombinators",
          "signature": "Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Any",
          "package": "graphics-drawingcombinators",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators",
          "name": "Color",
          "package": "graphics-drawingcombinators",
          "signature": "Color !R !R !R !R",
          "source": "src/Graphics-DrawingCombinators.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "Color",
          "package": "graphics-drawingcombinators",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bezier curve given a list of control points.  It is a curve\n that begins at the first point in the list, ends at the last one,\n and smoothly interpolates between the rest.  It is the empty\n image (\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e) if zero or one points are given.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "bezierCurve",
          "package": "graphics-drawingcombinators",
          "signature": "[R2] -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#bezierCurve",
          "type": "function"
        },
        "index": {
          "description": "Bezier curve given list of control points It is curve that begins at the first point in the list ends at the last one and smoothly interpolates between the rest It is the empty image mempty if zero or one points are given",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "bezierCurve",
          "normalized": "[R]-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "partial": "Curve",
          "signature": "[R]-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:bezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn (imperfect) unit circle centered at the origin.  Implemented as:\n\u003c/p\u003e\u003cpre\u003e circle = regularPoly 24\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "circle",
          "package": "graphics-drawingcombinators",
          "signature": "Image Any",
          "source": "src/Graphics-DrawingCombinators.html#circle",
          "type": "function"
        },
        "index": {
          "description": "An imperfect unit circle centered at the origin Implemented as circle regularPoly",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "circle",
          "package": "graphics-drawingcombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e, but clears the screen first. This is so\n you can use this module and pretend that OpenGL doesn't\n exist at all.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "clearRender",
          "package": "graphics-drawingcombinators",
          "signature": "Image a -\u003e IO ()",
          "source": "src/Graphics-DrawingCombinators.html#clearRender",
          "type": "function"
        },
        "index": {
          "description": "Like render but clears the screen first This is so you can use this module and pretend that OpenGL doesn exist at all",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "clearRender",
          "normalized": "Image a-\u003eIO()",
          "package": "graphics-drawingcombinators",
          "partial": "Render",
          "signature": "Image a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:clearRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convex polygon given by the list of points.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "convexPoly",
          "package": "graphics-drawingcombinators",
          "signature": "[R2] -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#convexPoly",
          "type": "function"
        },
        "index": {
          "description": "convex polygon given by the list of points",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "convexPoly",
          "normalized": "[R]-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "partial": "Poly",
          "signature": "[R]-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:convexPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.DrawingCombinators",
          "name": "getAny",
          "package": "graphics-drawingcombinators",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "getAny",
          "package": "graphics-drawingcombinators",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:getAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line connecting the two given points.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "line",
          "package": "graphics-drawingcombinators",
          "signature": "R2 -\u003e R2 -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#line",
          "type": "function"
        },
        "index": {
          "description": "line connecting the two given points",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "line",
          "normalized": "R-\u003eR-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "signature": "R-\u003eR-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "mappend",
          "package": "graphics-drawingcombinators",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "graphics-drawingcombinators",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "mconcat",
          "package": "graphics-drawingcombinators",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "graphics-drawingcombinators",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "mempty",
          "package": "graphics-drawingcombinators",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "mempty",
          "package": "graphics-drawingcombinators",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulate two colors by each other.\n\u003c/p\u003e\u003cpre\u003e modulate (Color r g b a) (Color r' g' b' a')\n           = Color (r*r') (g*g') (b*b') (a*a')\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "modulate",
          "package": "graphics-drawingcombinators",
          "signature": "Color -\u003e Color -\u003e Color",
          "source": "src/Graphics-DrawingCombinators.html#modulate",
          "type": "function"
        },
        "index": {
          "description": "Modulate two colors by each other modulate Color Color Color",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "modulate",
          "normalized": "Color-\u003eColor-\u003eColor",
          "package": "graphics-drawingcombinators",
          "signature": "Color-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:modulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a TTF font from a file.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "openFont",
          "package": "graphics-drawingcombinators",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-DrawingCombinators.html#openFont",
          "type": "function"
        },
        "index": {
          "description": "Load TTF font from file",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "openFont",
          "normalized": "String-\u003eIO Font",
          "package": "graphics-drawingcombinators",
          "partial": "Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:openFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an image from a file and create a sprite out of it.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "openSprite",
          "package": "graphics-drawingcombinators",
          "signature": "FilePath -\u003e IO Sprite",
          "source": "src/Graphics-DrawingCombinators.html#openSprite",
          "type": "function"
        },
        "index": {
          "description": "Load an image from file and create sprite out of it",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "openSprite",
          "normalized": "FilePath-\u003eIO Sprite",
          "package": "graphics-drawingcombinators",
          "partial": "Sprite",
          "signature": "FilePath-\u003eIO Sprite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:openSprite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single \"pixel\" at the specified point.\n\u003c/p\u003e\u003cpre\u003e [[point p]] r | [[r]] == [[p]] = (one, Any True)\n               | otherwise      = (zero, Any False)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "point",
          "package": "graphics-drawingcombinators",
          "signature": "R2 -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#point",
          "type": "function"
        },
        "index": {
          "description": "single pixel at the specified point point one Any True otherwise zero Any False",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "point",
          "normalized": "R-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "signature": "R-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular polygon centered at the origin with n sides.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "regularPoly",
          "package": "graphics-drawingcombinators",
          "signature": "Int -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#regularPoly",
          "type": "function"
        },
        "index": {
          "description": "regular polygon centered at the origin with sides",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "regularPoly",
          "normalized": "Int-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "partial": "Poly",
          "signature": "Int-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:regularPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an Image on the screen in the current OpenGL coordinate\n system (which, in absense of information, is (-1,-1) in the\n lower left and (1,1) in the upper right).\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "render",
          "package": "graphics-drawingcombinators",
          "signature": "Image a -\u003e IO ()",
          "source": "src/Graphics-DrawingCombinators.html#render",
          "type": "function"
        },
        "index": {
          "description": "Draw an Image on the screen in the current OpenGL coordinate system which in absense of information is in the lower left and in the upper right",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "render",
          "normalized": "Image a-\u003eIO()",
          "package": "graphics-drawingcombinators",
          "signature": "Image a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the value of the image at a point.\n\u003c/p\u003e\u003cpre\u003e [[sample i p]] = snd ([[i]] p)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "sample",
          "package": "graphics-drawingcombinators",
          "signature": "Image a -\u003e R2 -\u003e a",
          "source": "src/Graphics-DrawingCombinators.html#sample",
          "type": "function"
        },
        "index": {
          "description": "Sample the value of the image at point sample snd",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "sample",
          "normalized": "Image a-\u003eR-\u003ea",
          "package": "graphics-drawingcombinators",
          "signature": "Image a-\u003eR-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe image of a sprite at the origin.\n\u003c/p\u003e\u003cpre\u003e [[sprite s]] p | p `elem` [-1,1]^2 = ([[s]] p, Any True)\n                | otherwise         = (zero, Any False)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "sprite",
          "package": "graphics-drawingcombinators",
          "signature": "Sprite -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#sprite",
          "type": "function"
        },
        "index": {
          "description": "The image of sprite at the origin sprite elem Any True otherwise zero Any False",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "sprite",
          "normalized": "Sprite-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "signature": "Sprite-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:sprite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe image representing some text rendered with a font.  The baseline\n is at y=0, the text starts at x=0, and the height of a lowercase x is\n 1 unit.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "text",
          "package": "graphics-drawingcombinators",
          "signature": "Font -\u003e String -\u003e Image Any",
          "source": "src/Graphics-DrawingCombinators.html#text",
          "type": "function"
        },
        "index": {
          "description": "The image representing some text rendered with font The baseline is at the text starts at and the height of lowercase is unit",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "text",
          "normalized": "Font-\u003eString-\u003eImage Any",
          "package": "graphics-drawingcombinators",
          "signature": "Font-\u003eString-\u003eImage Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etextWidth font str\u003c/code\u003e is the width of the text in \u003ccode\u003etext font str\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "textWidth",
          "package": "graphics-drawingcombinators",
          "signature": "Font -\u003e String -\u003e R",
          "source": "src/Graphics-DrawingCombinators.html#textWidth",
          "type": "function"
        },
        "index": {
          "description": "textWidth font str is the width of the text in text font str",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "textWidth",
          "normalized": "Font-\u003eString-\u003eR",
          "package": "graphics-drawingcombinators",
          "partial": "Width",
          "signature": "Font-\u003eString-\u003eR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:textWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTint an image by a color; i.e. modulate the colors of an image by\n a color.\n\u003c/p\u003e\u003cpre\u003e [[tint c im]] = first (modulate c) . [[im]]\n    where first f (x,y) = (f x, y)\n\u003c/pre\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "tint",
          "package": "graphics-drawingcombinators",
          "signature": "Color -\u003e Image a -\u003e Image a",
          "source": "src/Graphics-DrawingCombinators.html#tint",
          "type": "function"
        },
        "index": {
          "description": "Tint an image by color i.e modulate the colors of an image by color tint im first modulate im where first",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "tint",
          "normalized": "Color-\u003eImage a-\u003eImage a",
          "package": "graphics-drawingcombinators",
          "signature": "Color-\u003eImage a-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:tint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport an OpenGL action and pure sampler function into an Image.\n This ought to be a well-behaved, compositional action (make sure\n it responds to different initial ModelViews, don't change matrix\n modes or render or anything like that).  The color given to the\n action is the current tint color; modulate all your colors by this\n before setting them.\n\u003c/p\u003e",
          "module": "Graphics.DrawingCombinators",
          "name": "unsafeOpenGLImage",
          "package": "graphics-drawingcombinators",
          "signature": "(Color -\u003e IO ()) -\u003e (R2 -\u003e a) -\u003e Image a",
          "source": "src/Graphics-DrawingCombinators.html#unsafeOpenGLImage",
          "type": "function"
        },
        "index": {
          "description": "Import an OpenGL action and pure sampler function into an Image This ought to be well-behaved compositional action make sure it responds to different initial ModelViews don change matrix modes or render or anything like that The color given to the action is the current tint color modulate all your colors by this before setting them",
          "hierarchy": "Graphics DrawingCombinators",
          "module": "Graphics.DrawingCombinators",
          "name": "unsafeOpenGLImage",
          "normalized": "(Color-\u003eIO())-\u003e(R-\u003ea)-\u003eImage a",
          "package": "graphics-drawingcombinators",
          "partial": "Open GLImage",
          "signature": "(Color-\u003eIO())-\u003e(R-\u003ea)-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graphics-drawingcombinators/docs/Graphics-DrawingCombinators.html#v:unsafeOpenGLImage"
      }
    }
  ]
]