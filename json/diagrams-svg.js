[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient creation of command-line-driven executables for\n rendering diagrams using the SVG backend.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e creates an executable which can render a single\n   diagram at various options.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emultiMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but allows for a list of\n   diagrams from which the user can choose one to render.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e is a generic form that does all of the above but with\n   a slightly scarier type.  See \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.  This\n   form can also take a function type that has a subtable final result\n   (any of arguments to the above types) and \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you want to generate diagrams programmatically---\u003cem\u003ei.e.\u003c/em\u003e if you\n want to do anything more complex than what the below functions\n provide---you have several options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use a function with \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e.  This may require making\n   \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e instances for custom argument types.\n\u003c/li\u003e\u003cli\u003e Make a new \u003ccode\u003e\u003ca\u003eMainable\u003c/a\u003e\u003c/code\u003e instance.  This may require a newtype\n   wrapper on your diagram type to avoid the existing instances.\n   This gives you more control over argument parsing, intervening\n   steps, and diagram creation.\n\u003c/li\u003e\u003cli\u003e Build option records and pass them along with a diagram to \u003ccode\u003e\u003ca\u003emainRender\u003c/a\u003e\u003c/code\u003e\n   from \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e You can use \u003ccode\u003e\u003ca\u003erenderSVG\u003c/a\u003e\u003c/code\u003e to render a diagram\n   to a file directly; see \u003ca\u003eDiagrams.Backend.SVG\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A more flexible approach is to directly call \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e; see\n   \u003ca\u003eDiagrams.Backend.SVG\u003c/a\u003e for more information.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a tutorial on command-line diagram creation see\n \u003ca\u003ehttp://projects.haskell.org/diagrams/doc/cmdline.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Backend-SVG-CmdLine.html",
        "fct-type": "module",
        "title": "CmdLine"
      },
      "index": {
        "description": "Convenient creation of command-line-driven executables for rendering diagrams using the SVG backend defaultMain creates an executable which can render single diagram at various options multiMain is like defaultMain but allows for list of diagrams from which the user can choose one to render mainWith is generic form that does all of the above but with slightly scarier type See Diagrams.Backend.CmdLine This form can also take function type that has subtable final result any of arguments to the above types and Parseable arguments If you want to generate diagrams programmatically i.e if you want to do anything more complex than what the below functions provide---you have several options Use function with mainWith This may require making Parseable instances for custom argument types Make new Mainable instance This may require newtype wrapper on your diagram type to avoid the existing instances This gives you more control over argument parsing intervening steps and diagram creation Build option records and pass them along with diagram to mainRender from Diagrams.Backend.CmdLine You can use renderSVG to render diagram to file directly see Diagrams.Backend.SVG more flexible approach is to directly call renderDia see Diagrams.Backend.SVG for more information For tutorial on command-line diagram creation see http projects.haskell.org diagrams doc cmdline.html",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "CmdLine",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "Cmd Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#t:B",
      "description": {
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-Backend-SVG.html#B",
        "fct-type": "type",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "B",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#t:SVG",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSVG\u003c/code\u003e is simply a token used to identify this rendering backend\n   (to aid type inference).\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-Backend-SVG.html#SVG",
        "fct-type": "data",
        "title": "SVG"
      },
      "index": {
        "description": "SVG is simply token used to identify this rendering backend to aid type inference",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "SVG",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#v:defaultMain",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the simplest way to render diagrams, and is intended to\n   be used like so:\n\u003c/p\u003e\u003cpre\u003e ... definitions ...\n\n main = defaultMain myDiagram\n\u003c/pre\u003e\u003cp\u003eCompiling this file will result in an executable which takes\n   various command-line options for setting the size, output file,\n   and so on, and renders \u003ccode\u003emyDiagram\u003c/code\u003e with the specified options.\n\u003c/p\u003e\u003cp\u003ePass \u003ccode\u003e--help\u003c/code\u003e to the generated executable to see all available\n   options.  Currently it looks something like\n\u003c/p\u003e\u003cpre\u003e\n ./Program\n\nUsage: ./Program [-w|--width WIDTH] [-h|--height HEIGHT] [-o|--output OUTPUT] [--loop] [-s|--src ARG] [-i|--interval INTERVAL]\n   Command-line diagram generation.\n\nAvailable options:\n   -?,--help                Show this help text\n   -w,--width WIDTH         Desired WIDTH of the output image\n   -h,--height HEIGHT       Desired HEIGHT of the output image\n   -o,--output OUTPUT       OUTPUT file\n   -l,--loop                Run in a self-recompiling loop\n   -s,--src ARG             Source file to watch\n   -i,--interval INTERVAL   When running in a loop, check for changes every INTERVAL seconds.\n\u003c/pre\u003e\u003cp\u003eFor example, a common scenario is\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MyDiagram\n\n# output image.svg with a width of 400pt (and auto-determined height)\n $ ./MyDiagram -o image.svg -w 400\n\u003c/pre\u003e",
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "Diagram SVG R2 -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-SVG-CmdLine.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "This is the simplest way to render diagrams and is intended to be used like so definitions main defaultMain myDiagram Compiling this file will result in an executable which takes various command-line options for setting the size output file and so on and renders myDiagram with the specified options Pass help to the generated executable to see all available options Currently it looks something like Program Usage Program width WIDTH height HEIGHT output OUTPUT loop src ARG interval INTERVAL Command-line diagram generation Available options help Show this help text width WIDTH Desired WIDTH of the output image height HEIGHT Desired HEIGHT of the output image output OUTPUT OUTPUT file loop Run in self-recompiling loop src ARG Source file to watch interval INTERVAL When running in loop check for changes every INTERVAL seconds For example common scenario is ghc make MyDiagram output image.svg with width of pt and auto-determined height MyDiagram image.svg",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "defaultMain",
        "normalized": "Diagram SVG R-\u003eIO()",
        "package": "diagrams-svg",
        "partial": "Main",
        "signature": "Diagram SVG R-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#v:mainWith",
      "description": {
        "fct-descr": "\u003cp\u003eMain entry point for command-line diagram creation.  This is the method\n that users will call from their program \u003ccode\u003emain\u003c/code\u003e.  For instance an expected\n user program would take the following form.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Prelude\n import Diagrams.Backend.TheBestBackend.CmdLine\n\n d :: Diagram B R2\n d = ...\n\n main = mainWith d\n\u003c/pre\u003e\u003cp\u003eMost backends should be able to use the default implementation.  A different\n implementation should be used to handle more complex interactions with the user.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "d -\u003e IO ()",
        "fct-type": "function",
        "title": "mainWith"
      },
      "index": {
        "description": "Main entry point for command-line diagram creation This is the method that users will call from their program main For instance an expected user program would take the following form import Diagrams.Prelude import Diagrams.Backend.TheBestBackend.CmdLine Diagram R2 main mainWith Most backends should be able to use the default implementation different implementation should be used to handle more complex interactions with the user",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "mainWith",
        "normalized": "a-\u003eIO()",
        "package": "diagrams-svg",
        "partial": "With",
        "signature": "d-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG-CmdLine.html#v:multiMain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emultiMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams paired with names as input.\n   The generated executable then takes a \u003ccode\u003e--selection\u003c/code\u003e option\n   specifying the name of the diagram that should be rendered.  The\n   list of available diagrams may also be printed by passing the\n   option \u003ccode\u003e--list\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiTest\n [1 of 1] Compiling Main             ( MultiTest.hs, MultiTest.o )\n Linking MultiTest ...\n $ ./MultiTest --list\n Available diagrams:\n   foo bar\n $ ./MultiTest --selection bar -o Bar.eps -w 200\n\u003c/pre\u003e",
        "fct-module": "Diagrams.Backend.SVG.CmdLine",
        "fct-package": "diagrams-svg",
        "fct-signature": "[(String, Diagram SVG R2)] -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-SVG-CmdLine.html#multiMain",
        "fct-type": "function",
        "title": "multiMain"
      },
      "index": {
        "description": "multiMain is like defaultMain except instead of single diagram it takes list of diagrams paired with names as input The generated executable then takes selection option specifying the name of the diagram that should be rendered The list of available diagrams may also be printed by passing the option list Example usage ghc make MultiTest of Compiling Main MultiTest.hs MultiTest.o Linking MultiTest MultiTest list Available diagrams foo bar MultiTest selection bar Bar.eps",
        "hierarchy": "Diagrams Backend SVG CmdLine",
        "module": "Diagrams.Backend.SVG.CmdLine",
        "name": "multiMain",
        "normalized": "[(String,Diagram SVG R)]-\u003eIO()",
        "package": "diagrams-svg",
        "partial": "Main",
        "signature": "[(String,Diagram SVG R)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA full-featured rendering backend for diagrams producing SVG files,\n implemented natively in Haskell (making it easy to use on any\n platform).\n\u003c/p\u003e\u003cp\u003eTo invoke the SVG backend, you have three options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You can use the \u003ca\u003eDiagrams.Backend.SVG.CmdLine\u003c/a\u003e module to create\n   standalone executables which output SVG images when invoked.\n\u003c/li\u003e\u003cli\u003e You can use the \u003ccode\u003e\u003ca\u003erenderSVG\u003c/a\u003e\u003c/code\u003e function provided by this module,\n   which gives you more flexible programmatic control over when and\n   how images are output (making it easy to, for example, write a\n   single program that outputs multiple images, or one that outputs\n   images dynamically based on user input, and so on).\n\u003c/li\u003e\u003cli\u003e For the most flexibility (\u003cem\u003ee.g.\u003c/em\u003e if you want access to the\n   resulting SVG value directly in memory without writing it to\n   disk), you can manually invoke the \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e method from the\n   \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eSVG\u003c/code\u003e.  In particular,\n   \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e has the generic type\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e renderDia :: b -\u003e Options b v -\u003e QDiagram b v m -\u003e Result b v\n\u003c/pre\u003e\u003cp\u003e(omitting a few type class constraints).  \u003ccode\u003eb\u003c/code\u003e represents the\n backend type, \u003ccode\u003ev\u003c/code\u003e the vector space, and \u003ccode\u003em\u003c/code\u003e the type of monoidal\n query annotations on the diagram.  \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e are\n associated data and type families, respectively, which yield the\n type of option records and rendering results specific to any\n particular backend.  For \u003ccode\u003eb ~ SVG\u003c/code\u003e and \u003ccode\u003ev ~ R2\u003c/code\u003e, we have\n\u003c/p\u003e\u003cpre\u003e data Options SVG R2 = SVGOptions\n                       { size :: SizeSpec2D   -- ^ The requested size.\n                       , svgDefinitions :: Maybe S.Svg\n                       -- ^ Custom definitions that will be added to the @defs@\n                       --  section of the output.\n                       }\n\u003c/pre\u003e\u003cpre\u003e\n data family Render SVG R2 = R \u003ccode\u003eSvgRenderM\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n type family Result SVG R2 = \u003ccode\u003e\u003ca\u003eSvg\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eSo the type of \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e resolves to\n\u003c/p\u003e\u003cpre\u003e\n renderDia :: SVG -\u003e Options SVG R2 -\u003e QDiagram SVG R2 m -\u003e \u003ccode\u003e\u003ca\u003eSvg\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003ewhich you could call like \u003ccode\u003erenderDia SVG (SVGOptions (Width 250))\n myDiagram\u003c/code\u003e.  (In some situations GHC may not be able to infer the\n type \u003ccode\u003em\u003c/code\u003e, in which case you can use a type annotation to specify\n it; it may be useful to simply use the type synonym \u003ccode\u003eDiagram SVG\n R2 = QDiagram SVG R2 Any\u003c/code\u003e.) This returns an\n \u003ccode\u003e\u003ca\u003eSvg\u003c/a\u003e\u003c/code\u003e value, which you can, \u003cem\u003ee.g.\u003c/em\u003e render to a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erenderSvg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Backend-SVG.html",
        "fct-type": "module",
        "title": "SVG"
      },
      "index": {
        "description": "full-featured rendering backend for diagrams producing SVG files implemented natively in Haskell making it easy to use on any platform To invoke the SVG backend you have three options You can use the Diagrams.Backend.SVG.CmdLine module to create standalone executables which output SVG images when invoked You can use the renderSVG function provided by this module which gives you more flexible programmatic control over when and how images are output making it easy to for example write single program that outputs multiple images or one that outputs images dynamically based on user input and so on For the most flexibility e.g if you want access to the resulting SVG value directly in memory without writing it to disk you can manually invoke the renderDia method from the Backend instance for SVG In particular renderDia has the generic type renderDia Options QDiagram Result omitting few type class constraints represents the backend type the vector space and the type of monoidal query annotations on the diagram Options and Result are associated data and type families respectively which yield the type of option records and rendering results specific to any particular backend For SVG and R2 we have data Options SVG R2 SVGOptions size SizeSpec2D The requested size svgDefinitions Maybe S.Svg Custom definitions that will be added to the defs section of the output data family Render SVG R2 SvgRenderM type family Result SVG R2 Svg So the type of renderDia resolves to renderDia SVG Options SVG R2 QDiagram SVG R2 Svg which you could call like renderDia SVG SVGOptions Width myDiagram In some situations GHC may not be able to infer the type in which case you can use type annotation to specify it it may be useful to simply use the type synonym Diagram SVG R2 QDiagram SVG R2 Any This returns an Svg value which you can e.g render to ByteString using renderSvg",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "SVG",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#t:B",
      "description": {
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-Backend-SVG.html#B",
        "fct-type": "type",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "B",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eBackend-specific rendering options.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "Backend-specific rendering options",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "Options",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#t:SVG",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSVG\u003c/code\u003e is simply a token used to identify this rendering backend\n   (to aid type inference).\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-Backend-SVG.html#SVG",
        "fct-type": "data",
        "title": "SVG"
      },
      "index": {
        "description": "SVG is simply token used to identify this rendering backend to aid type inference",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "SVG",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#v:SVG",
      "description": {
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "SVG",
        "fct-source": "src/Diagrams-Backend-SVG.html#SVG",
        "fct-type": "function",
        "title": "SVG"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "SVG",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#v:renderSVG",
      "description": {
        "fct-descr": "\u003cp\u003eRender a diagram as an SVG, writing to the specified output file\n   and using the requested size.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "FilePath -\u003e SizeSpec2D -\u003e Diagram SVG R2 -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-SVG.html#renderSVG",
        "fct-type": "function",
        "title": "renderSVG"
      },
      "index": {
        "description": "Render diagram as an SVG writing to the specified output file and using the requested size",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "renderSVG",
        "normalized": "FilePath-\u003eSizeSpec D-\u003eDiagram SVG R-\u003eIO()",
        "package": "diagrams-svg",
        "partial": "SVG",
        "signature": "FilePath-\u003eSizeSpec D-\u003eDiagram SVG R-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#v:size",
      "description": {
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "Lens' (Options SVG R2) SizeSpec2D",
        "fct-source": "src/Diagrams-Backend-SVG.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "size",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-svg/docs/Diagrams-Backend-SVG.html#v:svgDefinitions",
      "description": {
        "fct-module": "Diagrams.Backend.SVG",
        "fct-package": "diagrams-svg",
        "fct-signature": "Lens' (Options SVG R2) (Maybe Svg)",
        "fct-source": "src/Diagrams-Backend-SVG.html#svgDefinitions",
        "fct-type": "function",
        "title": "svgDefinitions"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend SVG",
        "module": "Diagrams.Backend.SVG",
        "name": "svgDefinitions",
        "normalized": "",
        "package": "diagrams-svg",
        "partial": "Definitions",
        "signature": ""
      }
    }
  }
]