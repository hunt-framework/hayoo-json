[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient creation of command-line-driven executables for\n rendering diagrams using the Postscript backend.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e creates an executable which can render a single\n   diagram at various options.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emultiMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but allows for a list of\n   diagrams from which the user can choose one to render.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epagesMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but renders a list of\n   diagrams as pages in a single file.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eanimMain\u003c/a\u003e\u003c/code\u003e renders an animation at a given frame rate\n   into separate files with an index number.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e is a generic form that does all of the above but with\n   a slightly scarier type.  See \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.  This\n   form can also take a function type that has a subtable final result\n   (any of arguments to the above types) and \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you want to generate diagrams programmatically---\u003cem\u003ei.e.\u003c/em\u003e if you\n want to do anything more complex than what the below functions\n provide---you have several options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use a function with \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e.  This may require making\n   \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e instances for custom argument types.\n\u003c/li\u003e\u003cli\u003e Make a new \u003ccode\u003e\u003ca\u003eMainable\u003c/a\u003e\u003c/code\u003e instance.  This may require a newtype\n   wrapper on your diagram type to avoid the existing instances.\n   This gives you more control over argument parsing, intervening\n   steps, and diagram creation.\n\u003c/li\u003e\u003cli\u003e Build option records and pass them along with a diagram to \u003ccode\u003e\u003ca\u003emainRender\u003c/a\u003e\u003c/code\u003e\n   from \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e An even more flexible approach is to directly call \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e; see\n   \u003ca\u003eDiagrams.Backend.Postscript\u003c/a\u003e for more information.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a tutorial on command-line diagram creation see\n \u003ca\u003ehttp://projects.haskell.org/diagrams/doc/cmdline.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Backend-Postscript-CmdLine.html",
        "fct-type": "module",
        "title": "CmdLine"
      },
      "index": {
        "description": "Convenient creation of command-line-driven executables for rendering diagrams using the Postscript backend defaultMain creates an executable which can render single diagram at various options multiMain is like defaultMain but allows for list of diagrams from which the user can choose one to render pagesMain is like defaultMain but renders list of diagrams as pages in single file animMain renders an animation at given frame rate into separate files with an index number mainWith is generic form that does all of the above but with slightly scarier type See Diagrams.Backend.CmdLine This form can also take function type that has subtable final result any of arguments to the above types and Parseable arguments If you want to generate diagrams programmatically i.e if you want to do anything more complex than what the below functions provide---you have several options Use function with mainWith This may require making Parseable instances for custom argument types Make new Mainable instance This may require newtype wrapper on your diagram type to avoid the existing instances This gives you more control over argument parsing intervening steps and diagram creation Build option records and pass them along with diagram to mainRender from Diagrams.Backend.CmdLine An even more flexible approach is to directly call renderDia see Diagrams.Backend.Postscript for more information For tutorial on command-line diagram creation see http projects.haskell.org diagrams doc cmdline.html",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "CmdLine",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Cmd Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#t:B",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-Backend-Postscript.html#B",
        "fct-type": "type",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "B",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#t:Postscript",
      "description": {
        "fct-descr": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-Backend-Postscript.html#Postscript",
        "fct-type": "data",
        "title": "Postscript"
      },
      "index": {
        "description": "This data declaration is simply used as token to distinguish this rendering engine",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "Postscript",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:animMain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eanimMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, but renders an animation\n instead of a diagram.  It takes as input an animation and produces\n a command-line program which will crudely \"render\" the animation\n by rendering one image for each frame, named by extending the given\n output file name by consecutive integers.  For example if the given\n output file name is \u003ccode\u003efoo/blah.eps\u003c/code\u003e, the frames will be saved in\n \u003ccode\u003efoo/blah001.eps\u003c/code\u003e, \u003ccode\u003efoo/blah002.eps\u003c/code\u003e, and so on (the number of\n padding digits used depends on the total number of frames).  It is\n up to the user to take these images and stitch them together into\n an actual animation format (using, \u003cem\u003ee.g.\u003c/em\u003e \u003ccode\u003effmpeg\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eOf course, this is a rather crude method of rendering animations;\n   more sophisticated methods will likely be added in the future.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e--fpu\u003c/code\u003e option can be used to control how many frames will be\n output for each second (unit time) of animation.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Animation Postscript R2 -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-Postscript-CmdLine.html#animMain",
        "fct-type": "function",
        "title": "animMain"
      },
      "index": {
        "description": "animMain is like defaultMain but renders an animation instead of diagram It takes as input an animation and produces command-line program which will crudely render the animation by rendering one image for each frame named by extending the given output file name by consecutive integers For example if the given output file name is foo blah.eps the frames will be saved in foo blah001.eps foo blah002.eps and so on the number of padding digits used depends on the total number of frames It is up to the user to take these images and stitch them together into an actual animation format using e.g ffmpeg Of course this is rather crude method of rendering animations more sophisticated methods will likely be added in the future The fpu option can be used to control how many frames will be output for each second unit time of animation",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "animMain",
        "normalized": "Animation Postscript R-\u003eIO()",
        "package": "diagrams-postscript",
        "partial": "Main",
        "signature": "Animation Postscript R-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:defaultMain",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the simplest way to render diagrams, and is intended to\n   be used like so:\n\u003c/p\u003e\u003cpre\u003e ... other definitions ...\n myDiagram = ...\n\n main = defaultMain myDiagram\n\u003c/pre\u003e\u003cp\u003eCompiling a source file like the above example will result in an\n   executable which takes command-line options for setting the size,\n   output file, and so on, and renders \u003ccode\u003emyDiagram\u003c/code\u003e with the\n   specified options.\n\u003c/p\u003e\u003cp\u003ePass \u003ccode\u003e--help\u003c/code\u003e to the generated executable to see all available\n   options.  Currently it looks something like\n\u003c/p\u003e\u003cpre\u003e\n ./Program\n\nUsage: ./Program [-w|--width WIDTH] [-h|--height HEIGHT] [-o|--output OUTPUT]\n   Command-line diagram generation.\n\nAvailable options:\n   -?,--help                Show this help text\n   -w,--width WIDTH         Desired WIDTH of the output image\n   -h,--height HEIGHT       Desired HEIGHT of the output image\n   -o,--output OUTPUT       OUTPUT file\n\u003c/pre\u003e\u003cp\u003eFor example, a common scenario is\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MyDiagram\n\n# output image.eps with a width of 400pt (and auto-determined height)\n $ ./MyDiagram -o image.eps -w 400\n\u003c/pre\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Diagram Postscript R2 -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-Postscript-CmdLine.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "This is the simplest way to render diagrams and is intended to be used like so other definitions myDiagram main defaultMain myDiagram Compiling source file like the above example will result in an executable which takes command-line options for setting the size output file and so on and renders myDiagram with the specified options Pass help to the generated executable to see all available options Currently it looks something like Program Usage Program width WIDTH height HEIGHT output OUTPUT Command-line diagram generation Available options help Show this help text width WIDTH Desired WIDTH of the output image height HEIGHT Desired HEIGHT of the output image output OUTPUT OUTPUT file For example common scenario is ghc make MyDiagram output image.eps with width of pt and auto-determined height MyDiagram image.eps",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "defaultMain",
        "normalized": "Diagram Postscript R-\u003eIO()",
        "package": "diagrams-postscript",
        "partial": "Main",
        "signature": "Diagram Postscript R-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:mainWith",
      "description": {
        "fct-descr": "\u003cp\u003eMain entry point for command-line diagram creation.  This is the method\n that users will call from their program \u003ccode\u003emain\u003c/code\u003e.  For instance an expected\n user program would take the following form.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Prelude\n import Diagrams.Backend.TheBestBackend.CmdLine\n\n d :: Diagram B R2\n d = ...\n\n main = mainWith d\n\u003c/pre\u003e\u003cp\u003eMost backends should be able to use the default implementation.  A different\n implementation should be used to handle more complex interactions with the user.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "d -\u003e IO ()",
        "fct-type": "function",
        "title": "mainWith"
      },
      "index": {
        "description": "Main entry point for command-line diagram creation This is the method that users will call from their program main For instance an expected user program would take the following form import Diagrams.Prelude import Diagrams.Backend.TheBestBackend.CmdLine Diagram R2 main mainWith Most backends should be able to use the default implementation different implementation should be used to handle more complex interactions with the user",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "mainWith",
        "normalized": "a-\u003eIO()",
        "package": "diagrams-postscript",
        "partial": "With",
        "signature": "d-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:multiMain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emultiMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams paired with names as input.\n   The generated executable then takes a \u003ccode\u003e--selection\u003c/code\u003e option\n   specifying the name of the diagram that should be rendered.  The\n   list of available diagrams may also be printed by passing the\n   option \u003ccode\u003e--list\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiTest\n [1 of 1] Compiling Main             ( MultiTest.hs, MultiTest.o )\n Linking MultiTest ...\n $ ./MultiTest --list\n Available diagrams:\n   foo bar\n $ ./MultiTest --selection bar -o Bar.eps -w 200\n\u003c/pre\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "[(String, Diagram Postscript R2)] -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-Postscript-CmdLine.html#multiMain",
        "fct-type": "function",
        "title": "multiMain"
      },
      "index": {
        "description": "multiMain is like defaultMain except instead of single diagram it takes list of diagrams paired with names as input The generated executable then takes selection option specifying the name of the diagram that should be rendered The list of available diagrams may also be printed by passing the option list Example usage ghc make MultiTest of Compiling Main MultiTest.hs MultiTest.o Linking MultiTest MultiTest list Available diagrams foo bar MultiTest selection bar Bar.eps",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "multiMain",
        "normalized": "[(String,Diagram Postscript R)]-\u003eIO()",
        "package": "diagrams-postscript",
        "partial": "Main",
        "signature": "[(String,Diagram Postscript R)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:pagesMain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epagesMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams and each will be rendered as a page\n   in the Postscript file.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiPage\n [1 of 1] Compiling Main             ( MultiPage.hs, MultiPage.o )\n Linking MultiPage ...\n $ ./MultiPage -o Pages.ps -w 200\n\u003c/pre\u003e",
        "fct-module": "Diagrams.Backend.Postscript.CmdLine",
        "fct-package": "diagrams-postscript",
        "fct-signature": "[Diagram Postscript R2] -\u003e IO ()",
        "fct-source": "src/Diagrams-Backend-Postscript-CmdLine.html#pagesMain",
        "fct-type": "function",
        "title": "pagesMain"
      },
      "index": {
        "description": "pagesMain is like defaultMain except instead of single diagram it takes list of diagrams and each will be rendered as page in the Postscript file Example usage ghc make MultiPage of Compiling Main MultiPage.hs MultiPage.o Linking MultiPage MultiPage Pages.ps",
        "hierarchy": "Diagrams Backend Postscript CmdLine",
        "module": "Diagrams.Backend.Postscript.CmdLine",
        "name": "pagesMain",
        "normalized": "[Diagram Postscript R]-\u003eIO()",
        "package": "diagrams-postscript",
        "partial": "Main",
        "signature": "[Diagram Postscript R]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Postscript rendering backend for diagrams.\n\u003c/p\u003e\u003cp\u003eTo build diagrams for Postscript rendering use the \u003ccode\u003ePostscript\u003c/code\u003e\n type in the diagram type construction\n\u003c/p\u003e\u003cpre\u003e d :: Diagram Postscript R2\n d = ...\n\u003c/pre\u003e\u003cp\u003eand render giving the \u003ccode\u003ePostscript\u003c/code\u003e token\n\u003c/p\u003e\u003cpre\u003e renderDia Postscript (PostscriptOptions \"file.eps\" (Width 400) EPS) d\n\u003c/pre\u003e\u003cp\u003eThis IO action will write the specified file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "module",
        "fct-source": "src/Diagrams-Backend-Postscript.html",
        "fct-type": "module",
        "title": "Postscript"
      },
      "index": {
        "description": "Postscript rendering backend for diagrams To build diagrams for Postscript rendering use the Postscript type in the diagram type construction Diagram Postscript R2 and render giving the Postscript token renderDia Postscript PostscriptOptions file.eps Width EPS This IO action will write the specified file",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "Postscript",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:B",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "type",
        "fct-source": "src/Diagrams-Backend-Postscript.html#B",
        "fct-type": "type",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "B",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eBackend-specific rendering options.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "Backend-specific rendering options",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "Options",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:OutputFormat",
      "description": {
        "fct-descr": "\u003cp\u003ePostscript only supports EPS style output at the moment.  Future formats would each\n   have their own associated properties that affect the output.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-Backend-Postscript.html#OutputFormat",
        "fct-type": "data",
        "title": "OutputFormat"
      },
      "index": {
        "description": "Postscript only supports EPS style output at the moment Future formats would each have their own associated properties that affect the output",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "OutputFormat",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Output Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:Postscript",
      "description": {
        "fct-descr": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Diagrams-Backend-Postscript.html#Postscript",
        "fct-type": "data",
        "title": "Postscript"
      },
      "index": {
        "description": "This data declaration is simply used as token to distinguish this rendering engine",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "Postscript",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:EPS",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulated Postscript output.\n\u003c/p\u003e",
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "EPS",
        "fct-source": "src/Diagrams-Backend-Postscript.html#OutputFormat",
        "fct-type": "function",
        "title": "EPS"
      },
      "index": {
        "description": "Encapsulated Postscript output",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "EPS",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "EPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:Postscript",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Postscript",
        "fct-source": "src/Diagrams-Backend-Postscript.html#Postscript",
        "fct-type": "function",
        "title": "Postscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "Postscript",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psOutputFormat",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' (Options Postscript R2) OutputFormat",
        "fct-source": "src/Diagrams-Backend-Postscript.html#psOutputFormat",
        "fct-type": "function",
        "title": "psOutputFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "psOutputFormat",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Output Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psSizeSpec",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' (Options Postscript R2) SizeSpec2D",
        "fct-source": "src/Diagrams-Backend-Postscript.html#psSizeSpec",
        "fct-type": "function",
        "title": "psSizeSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "psSizeSpec",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Size Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psfileName",
      "description": {
        "fct-module": "Diagrams.Backend.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' (Options Postscript R2) String",
        "fct-source": "src/Diagrams-Backend-Postscript.html#psfileName",
        "fct-type": "function",
        "title": "psfileName"
      },
      "index": {
        "description": "",
        "hierarchy": "Diagrams Backend Postscript",
        "module": "Diagrams.Backend.Postscript",
        "name": "psfileName",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric tools for generating Postscript files.  There is some\n limited support for tracking the state of the renderer when\n given a side-effecting (in the Postscript) command.  Only drawing\n operations are supported, not general Postscript language generation.\n\u003c/p\u003e\u003cp\u003eIn the future the tracking of rendering state could lead to optimizing\n output, but for now little optimization is attempted.  Most systems are\n equiped with tools to optimize Postscript such as \u003ccode\u003eeps2eps\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor details on the PostScript language see the PostScript(R) Language\n Reference: \u003ca\u003ehttp://www.adobe.com/products/postscript/pdfs/PLRM.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-Postscript.html",
        "fct-type": "module",
        "title": "Postscript"
      },
      "index": {
        "description": "Generic tools for generating Postscript files There is some limited support for tracking the state of the renderer when given side-effecting in the Postscript command Only drawing operations are supported not general Postscript language generation In the future the tracking of rendering state could lead to optimizing output but for now little optimization is attempted Most systems are equiped with tools to optimize Postscript such as eps2eps For details on the PostScript language see the PostScript Language Reference http www.adobe.com products postscript pdfs PLRM.pdf",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "Postscript",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Postscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:FontSlant",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontSlant",
        "fct-type": "data",
        "title": "FontSlant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontSlant",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Slant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:FontWeight",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontWeight",
        "fct-type": "data",
        "title": "FontWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontWeight",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:PSWriter",
      "description": {
        "fct-descr": "\u003cp\u003eType for a monad that writes Postscript using the commands we will define later.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "newtype",
        "fct-source": "src/Graphics-Rendering-Postscript.html#PSWriter",
        "fct-type": "newtype",
        "title": "PSWriter"
      },
      "index": {
        "description": "Type for monad that writes Postscript using the commands we will define later",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "PSWriter",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "PSWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:Render",
      "description": {
        "fct-descr": "\u003cp\u003eType of the monad that tracks the state from side-effecting commands.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Postscript.html#Render",
        "fct-type": "data",
        "title": "Render"
      },
      "index": {
        "description": "Type of the monad that tracks the state from side-effecting commands",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "Render",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:RenderState",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Postscript.html#RenderState",
        "fct-type": "data",
        "title": "RenderState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "RenderState",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Render State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:Surface",
      "description": {
        "fct-descr": "\u003cp\u003eAbstraction of the drawing surface details.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-Postscript.html#Surface",
        "fct-type": "data",
        "title": "Surface"
      },
      "index": {
        "description": "Abstraction of the drawing surface details",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "Surface",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlant",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontSlant Double",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontSlant",
        "fct-type": "function",
        "title": "FontSlant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontSlant",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Slant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantItalic",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontSlantItalic",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontSlant",
        "fct-type": "function",
        "title": "FontSlantItalic"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontSlantItalic",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Slant Italic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontSlantNormal",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontSlant",
        "fct-type": "function",
        "title": "FontSlantNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontSlantNormal",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Slant Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantOblique",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontSlantOblique",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontSlant",
        "fct-type": "function",
        "title": "FontSlantOblique"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontSlantOblique",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Slant Oblique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontWeightBold",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontWeightBold",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontWeight",
        "fct-type": "function",
        "title": "FontWeightBold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontWeightBold",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Weight Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontWeightNormal",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "FontWeightNormal",
        "fct-source": "src/Graphics-Rendering-Postscript.html#FontWeight",
        "fct-type": "function",
        "title": "FontWeightNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "FontWeightNormal",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Font Weight Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:PSWriter",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "PSWriter",
        "fct-source": "src/Graphics-Rendering-Postscript.html#PSWriter",
        "fct-type": "function",
        "title": "PSWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "PSWriter",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "PSWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:arc",
      "description": {
        "fct-descr": "\u003cp\u003eDraw an arc given a center, radius, start, and end angle.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
        "fct-type": "function",
        "title": "arc"
      },
      "index": {
        "description": "Draw an arc given center radius start and end angle",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "arc",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:clip",
      "description": {
        "fct-descr": "\u003cp\u003eClip with the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#clip",
        "fct-type": "function",
        "title": "clip"
      },
      "index": {
        "description": "Clip with the current path",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "clip",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:closePath",
      "description": {
        "fct-descr": "\u003cp\u003eClose the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#closePath",
        "fct-type": "function",
        "title": "closePath"
      },
      "index": {
        "description": "Close the current path",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "closePath",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "Path",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:curveTo",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a cubic B&#233;zier curve segment to the current path from the current point.\n   The current point is also moved with this command.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#curveTo",
        "fct-type": "function",
        "title": "curveTo"
      },
      "index": {
        "description": "Add cubic zier curve segment to the current path from the current point The current point is also moved with this command",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "curveTo",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "To",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:drawState",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' RenderState DrawState",
        "fct-source": "src/Graphics-Rendering-Postscript.html#drawState",
        "fct-type": "function",
        "title": "drawState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "drawState",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:face",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' PostscriptFont String",
        "fct-source": "src/Graphics-Rendering-Postscript.html#face",
        "fct-type": "function",
        "title": "face"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "face",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fill",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "fill",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillColor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the color of the fill.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "c -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#fillColor",
        "fct-type": "function",
        "title": "fillColor"
      },
      "index": {
        "description": "Set the color of the fill",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "fillColor",
        "normalized": "a-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Color",
        "signature": "c-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillPreserve",
      "description": {
        "fct-descr": "\u003cp\u003eFill the current path without affecting the graphics state.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#fillPreserve",
        "fct-type": "function",
        "title": "fillPreserve"
      },
      "index": {
        "description": "Fill the current path without affecting the graphics state",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "fillPreserve",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "Preserve",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillRule",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' DrawState FillRule",
        "fct-source": "src/Graphics-Rendering-Postscript.html#fillRule",
        "fct-type": "function",
        "title": "fillRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "fillRule",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:font",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' DrawState PostscriptFont",
        "fct-source": "src/Graphics-Rendering-Postscript.html#font",
        "fct-type": "function",
        "title": "font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "font",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:grestore",
      "description": {
        "fct-descr": "\u003cp\u003ePop the current graphics state.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#grestore",
        "fct-type": "function",
        "title": "grestore"
      },
      "index": {
        "description": "Pop the current graphics state",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "grestore",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:gsave",
      "description": {
        "fct-descr": "\u003cp\u003ePush the current graphics state.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#gsave",
        "fct-type": "function",
        "title": "gsave"
      },
      "index": {
        "description": "Push the current graphics state",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "gsave",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:ignoreFill",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' DrawState Bool",
        "fct-source": "src/Graphics-Rendering-Postscript.html#ignoreFill",
        "fct-type": "function",
        "title": "ignoreFill"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "ignoreFill",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineCap",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line cap style.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "LineCap -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#lineCap",
        "fct-type": "function",
        "title": "lineCap"
      },
      "index": {
        "description": "Set the line cap style",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "lineCap",
        "normalized": "LineCap-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Cap",
        "signature": "LineCap-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineJoin",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line join method.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "LineJoin -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#lineJoin",
        "fct-type": "function",
        "title": "lineJoin"
      },
      "index": {
        "description": "Set the line join method",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "lineJoin",
        "normalized": "LineJoin-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Join",
        "signature": "LineJoin-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineTo",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a line to the current path from the current point to the given point.\n   The current point is also moved with this command.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#lineTo",
        "fct-type": "function",
        "title": "lineTo"
      },
      "index": {
        "description": "Add line to the current path from the current point to the given point The current point is also moved with this command",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "lineTo",
        "normalized": "Double-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "To",
        "signature": "Double-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line width.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#lineWidth",
        "fct-type": "function",
        "title": "lineWidth"
      },
      "index": {
        "description": "Set the line width",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "lineWidth",
        "normalized": "Double-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Width",
        "signature": "Double-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:miterLimit",
      "description": {
        "fct-descr": "\u003cp\u003eSet the miter limit.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#miterLimit",
        "fct-type": "function",
        "title": "miterLimit"
      },
      "index": {
        "description": "Set the miter limit",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "miterLimit",
        "normalized": "Double-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Limit",
        "signature": "Double-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:moveTo",
      "description": {
        "fct-descr": "\u003cp\u003eMove the current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#moveTo",
        "fct-type": "function",
        "title": "moveTo"
      },
      "index": {
        "description": "Move the current point",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "moveTo",
        "normalized": "Double-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "To",
        "signature": "Double-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:newPath",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#newPath",
        "fct-type": "function",
        "title": "newPath"
      },
      "index": {
        "description": "Start new path",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "newPath",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "Path",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:relCurveTo",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a cubic B&#233;zier curve segment to the current path from the current point\n   using relative coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#relCurveTo",
        "fct-type": "function",
        "title": "relCurveTo"
      },
      "index": {
        "description": "Add cubic zier curve segment to the current path from the current point using relative coordinates",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "relCurveTo",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Curve To",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:relLineTo",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a line segment to the current path using relative coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#relLineTo",
        "fct-type": "function",
        "title": "relLineTo"
      },
      "index": {
        "description": "Add line segment to the current path using relative coordinates",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "relLineTo",
        "normalized": "Double-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Line To",
        "signature": "Double-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:renderPagesWith",
      "description": {
        "fct-descr": "\u003cp\u003eRenders multiple pages given as a list of \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e actions\n   to the file associated with the \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Surface -\u003e [Render a] -\u003e m [a]",
        "fct-source": "src/Graphics-Rendering-Postscript.html#renderPagesWith",
        "fct-type": "function",
        "title": "renderPagesWith"
      },
      "index": {
        "description": "Renders multiple pages given as list of Render actions to the file associated with the Surface argument",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "renderPagesWith",
        "normalized": "Surface-\u003e[Render a]-\u003eb[a]",
        "package": "diagrams-postscript",
        "partial": "Pages With",
        "signature": "Surface-\u003e[Render a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:renderWith",
      "description": {
        "fct-descr": "\u003cp\u003eHandles opening and closing the file associated with the\n   passed \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e and renders the commands built up in the\n   \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Surface -\u003e Render a -\u003e m a",
        "fct-source": "src/Graphics-Rendering-Postscript.html#renderWith",
        "fct-type": "function",
        "title": "renderWith"
      },
      "index": {
        "description": "Handles opening and closing the file associated with the passed Surface and renders the commands built up in the Render argument",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "renderWith",
        "normalized": "Surface-\u003eRender a-\u003eb a",
        "package": "diagrams-postscript",
        "partial": "With",
        "signature": "Surface-\u003eRender a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:restore",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the current state by popping the state stack.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#restore",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "Replace the current state by popping the state stack",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "restore",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:restoreMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current transform matrix to be the matrix found by popping\n   the execution stack.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#restoreMatrix",
        "fct-type": "function",
        "title": "restoreMatrix"
      },
      "index": {
        "description": "Set the current transform matrix to be the matrix found by popping the execution stack",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "restoreMatrix",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "Matrix",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the current transform matrix.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Rotate the current transform matrix",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "rotate",
        "normalized": "Double-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Double-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:runPSWriter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "WriterT (DList String) IO m",
        "fct-source": "src/Graphics-Rendering-Postscript.html#PSWriter",
        "fct-type": "function",
        "title": "runPSWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "runPSWriter",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "PSWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003ePush the current state of the renderer onto the state stack.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Push the current state of the renderer onto the state stack",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "save",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:saveMatrix",
      "description": {
        "fct-descr": "\u003cp\u003ePush the current transform matrix onto the execution stack.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#saveMatrix",
        "fct-type": "function",
        "title": "saveMatrix"
      },
      "index": {
        "description": "Push the current transform matrix onto the execution stack",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "saveMatrix",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "Matrix",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale the current transform matrix.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#scale",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "Scale the current transform matrix",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "scale",
        "normalized": "Double-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:setDash",
      "description": {
        "fct-descr": "\u003cp\u003eSet the dash style.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "[Double]-\u003e Double-\u003e Render ()",
        "fct-type": "function",
        "title": "setDash"
      },
      "index": {
        "description": "Set the dash style",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "setDash",
        "normalized": "[Double]-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Dash",
        "signature": "[Double]-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showText",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a string at the current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "String -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#showText",
        "fct-type": "function",
        "title": "showText"
      },
      "index": {
        "description": "Draw string at the current point",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "showText",
        "normalized": "String-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Text",
        "signature": "String-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextAlign",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a string with offset factors from center relative to the width and height.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e String -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#showTextAlign",
        "fct-type": "function",
        "title": "showTextAlign"
      },
      "index": {
        "description": "Draw string with offset factors from center relative to the width and height",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "showTextAlign",
        "normalized": "Double-\u003eDouble-\u003eString-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Text Align",
        "signature": "Double-\u003eDouble-\u003eString-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextCentered",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a string by first measuring the width then offseting by half.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "String -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#showTextCentered",
        "fct-type": "function",
        "title": "showTextCentered"
      },
      "index": {
        "description": "Draw string by first measuring the width then offseting by half",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "showTextCentered",
        "normalized": "String-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Text Centered",
        "signature": "String-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextInBox",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a string uniformally scaling to fit within a bounding box.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "(Double, Double) -\u003e (Double, Double) -\u003e String -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#showTextInBox",
        "fct-type": "function",
        "title": "showTextInBox"
      },
      "index": {
        "description": "Draw string uniformally scaling to fit within bounding box",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "showTextInBox",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003eString-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Text In Box",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003eString-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:size",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' PostscriptFont Double",
        "fct-source": "src/Graphics-Rendering-Postscript.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "size",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:slant",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' PostscriptFont FontSlant",
        "fct-source": "src/Graphics-Rendering-Postscript.html#slant",
        "fct-type": "function",
        "title": "slant"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "slant",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:stroke",
      "description": {
        "fct-descr": "\u003cp\u003eStroke the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#stroke",
        "fct-type": "function",
        "title": "stroke"
      },
      "index": {
        "description": "Stroke the current path",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "stroke",
        "normalized": "Render()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Render()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:strokeColor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the color of the stroke.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "c -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#strokeColor",
        "fct-type": "function",
        "title": "strokeColor"
      },
      "index": {
        "description": "Set the color of the stroke",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "strokeColor",
        "normalized": "a-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "Color",
        "signature": "c-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transform matrix to the current transform.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "Apply transform matrix to the current transform",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "transform",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate the current transform matrix.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Double -\u003e Double -\u003e Render ()",
        "fct-source": "src/Graphics-Rendering-Postscript.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Translate the current transform matrix",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "translate",
        "normalized": "Double-\u003eDouble-\u003eRender()",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eRender()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:weight",
      "description": {
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "Lens' PostscriptFont FontWeight",
        "fct-source": "src/Graphics-Rendering-Postscript.html#weight",
        "fct-type": "function",
        "title": "weight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "weight",
        "normalized": "",
        "package": "diagrams-postscript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:withEPSSurface",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds a surface and performs an action on that surface.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.Postscript",
        "fct-package": "diagrams-postscript",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e (Surface -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Graphics-Rendering-Postscript.html#withEPSSurface",
        "fct-type": "function",
        "title": "withEPSSurface"
      },
      "index": {
        "description": "Builds surface and performs an action on that surface",
        "hierarchy": "Graphics Rendering Postscript",
        "module": "Graphics.Rendering.Postscript",
        "name": "withEPSSurface",
        "normalized": "String-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
        "package": "diagrams-postscript",
        "partial": "EPSSurface",
        "signature": "String-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a"
      }
    }
  }
]