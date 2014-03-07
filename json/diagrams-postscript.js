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
        "word": "diagrams-postscript"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient creation of command-line-driven executables for\n rendering diagrams using the Postscript backend.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e creates an executable which can render a single\n   diagram at various options.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emultiMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but allows for a list of\n   diagrams from which the user can choose one to render.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epagesMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but renders a list of\n   diagrams as pages in a single file.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eanimMain\u003c/a\u003e\u003c/code\u003e renders an animation at a given frame rate\n   into separate files with an index number.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e is a generic form that does all of the above but with\n   a slightly scarier type.  See \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.  This\n   form can also take a function type that has a subtable final result\n   (any of arguments to the above types) and \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you want to generate diagrams programmatically---\u003cem\u003ei.e.\u003c/em\u003e if you\n want to do anything more complex than what the below functions\n provide---you have several options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use a function with \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e.  This may require making\n   \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e instances for custom argument types.\n\u003c/li\u003e\u003cli\u003e Make a new \u003ccode\u003e\u003ca\u003eMainable\u003c/a\u003e\u003c/code\u003e instance.  This may require a newtype\n   wrapper on your diagram type to avoid the existing instances.\n   This gives you more control over argument parsing, intervening\n   steps, and diagram creation.\n\u003c/li\u003e\u003cli\u003e Build option records and pass them along with a diagram to \u003ccode\u003e\u003ca\u003emainRender\u003c/a\u003e\u003c/code\u003e\n   from \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e An even more flexible approach is to directly call \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e; see\n   \u003ca\u003eDiagrams.Backend.Postscript\u003c/a\u003e for more information.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a tutorial on command-line diagram creation see\n \u003ca\u003ehttp://projects.haskell.org/diagrams/doc/cmdline.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript-CmdLine.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient creation of command-line-driven executables for rendering diagrams using the Postscript backend defaultMain creates an executable which can render single diagram at various options multiMain is like defaultMain but allows for list of diagrams from which the user can choose one to render pagesMain is like defaultMain but renders list of diagrams as pages in single file animMain renders an animation at given frame rate into separate files with an index number mainWith is generic form that does all of the above but with slightly scarier type See Diagrams.Backend.CmdLine This form can also take function type that has subtable final result any of arguments to the above types and Parseable arguments If you want to generate diagrams programmatically i.e if you want to do anything more complex than what the below functions provide---you have several options Use function with mainWith This may require making Parseable instances for custom argument types Make new Mainable instance This may require newtype wrapper on your diagram type to avoid the existing instances This gives you more control over argument parsing intervening steps and diagram creation Build option records and pass them along with diagram to mainRender from Diagrams.Backend.CmdLine An even more flexible approach is to directly call renderDia see Diagrams.Backend.Postscript for more information For tutorial on command-line diagram creation see http projects.haskell.org diagrams doc cmdline.html",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-postscript",
          "partial": "Cmd Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "B",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "B",
          "package": "diagrams-postscript",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html#Postscript",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish this rendering engine",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "partial": "Postscript",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#t:Postscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eanimMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, but renders an animation\n instead of a diagram.  It takes as input an animation and produces\n a command-line program which will crudely \"render\" the animation\n by rendering one image for each frame, named by extending the given\n output file name by consecutive integers.  For example if the given\n output file name is \u003ccode\u003efoo/blah.eps\u003c/code\u003e, the frames will be saved in\n \u003ccode\u003efoo/blah001.eps\u003c/code\u003e, \u003ccode\u003efoo/blah002.eps\u003c/code\u003e, and so on (the number of\n padding digits used depends on the total number of frames).  It is\n up to the user to take these images and stitch them together into\n an actual animation format (using, \u003cem\u003ee.g.\u003c/em\u003e \u003ccode\u003effmpeg\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eOf course, this is a rather crude method of rendering animations;\n   more sophisticated methods will likely be added in the future.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e--fpu\u003c/code\u003e option can be used to control how many frames will be\n output for each second (unit time) of animation.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "animMain",
          "package": "diagrams-postscript",
          "signature": "Animation Postscript R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Postscript-CmdLine.html#animMain",
          "type": "function"
        },
        "index": {
          "description": "animMain is like defaultMain but renders an animation instead of diagram It takes as input an animation and produces command-line program which will crudely render the animation by rendering one image for each frame named by extending the given output file name by consecutive integers For example if the given output file name is foo blah.eps the frames will be saved in foo blah001.eps foo blah002.eps and so on the number of padding digits used depends on the total number of frames It is up to the user to take these images and stitch them together into an actual animation format using e.g ffmpeg Of course this is rather crude method of rendering animations more sophisticated methods will likely be added in the future The fpu option can be used to control how many frames will be output for each second unit time of animation",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "animMain",
          "normalized": "Animation Postscript R-\u003eIO()",
          "package": "diagrams-postscript",
          "partial": "Main",
          "signature": "Animation Postscript R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:animMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest way to render diagrams, and is intended to\n   be used like so:\n\u003c/p\u003e\u003cpre\u003e ... other definitions ...\n myDiagram = ...\n\n main = defaultMain myDiagram\n\u003c/pre\u003e\u003cp\u003eCompiling a source file like the above example will result in an\n   executable which takes command-line options for setting the size,\n   output file, and so on, and renders \u003ccode\u003emyDiagram\u003c/code\u003e with the\n   specified options.\n\u003c/p\u003e\u003cp\u003ePass \u003ccode\u003e--help\u003c/code\u003e to the generated executable to see all available\n   options.  Currently it looks something like\n\u003c/p\u003e\u003cpre\u003e\n ./Program\n\nUsage: ./Program [-w|--width WIDTH] [-h|--height HEIGHT] [-o|--output OUTPUT]\n   Command-line diagram generation.\n\nAvailable options:\n   -?,--help                Show this help text\n   -w,--width WIDTH         Desired WIDTH of the output image\n   -h,--height HEIGHT       Desired HEIGHT of the output image\n   -o,--output OUTPUT       OUTPUT file\n\u003c/pre\u003e\u003cp\u003eFor example, a common scenario is\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MyDiagram\n\n# output image.eps with a width of 400pt (and auto-determined height)\n $ ./MyDiagram -o image.eps -w 400\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "defaultMain",
          "package": "diagrams-postscript",
          "signature": "Diagram Postscript R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Postscript-CmdLine.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "This is the simplest way to render diagrams and is intended to be used like so other definitions myDiagram main defaultMain myDiagram Compiling source file like the above example will result in an executable which takes command-line options for setting the size output file and so on and renders myDiagram with the specified options Pass help to the generated executable to see all available options Currently it looks something like Program Usage Program width WIDTH height HEIGHT output OUTPUT Command-line diagram generation Available options help Show this help text width WIDTH Desired WIDTH of the output image height HEIGHT Desired HEIGHT of the output image output OUTPUT OUTPUT file For example common scenario is ghc make MyDiagram output image.eps with width of pt and auto-determined height MyDiagram image.eps",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "defaultMain",
          "normalized": "Diagram Postscript R-\u003eIO()",
          "package": "diagrams-postscript",
          "partial": "Main",
          "signature": "Diagram Postscript R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain entry point for command-line diagram creation.  This is the method\n that users will call from their program \u003ccode\u003emain\u003c/code\u003e.  For instance an expected\n user program would take the following form.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Prelude\n import Diagrams.Backend.TheBestBackend.CmdLine\n\n d :: Diagram B R2\n d = ...\n\n main = mainWith d\n\u003c/pre\u003e\u003cp\u003eMost backends should be able to use the default implementation.  A different\n implementation should be used to handle more complex interactions with the user.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "mainWith",
          "package": "diagrams-postscript",
          "signature": "d -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Main entry point for command-line diagram creation This is the method that users will call from their program main For instance an expected user program would take the following form import Diagrams.Prelude import Diagrams.Backend.TheBestBackend.CmdLine Diagram R2 main mainWith Most backends should be able to use the default implementation different implementation should be used to handle more complex interactions with the user",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "mainWith",
          "normalized": "a-\u003eIO()",
          "package": "diagrams-postscript",
          "partial": "With",
          "signature": "d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:mainWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emultiMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams paired with names as input.\n   The generated executable then takes a \u003ccode\u003e--selection\u003c/code\u003e option\n   specifying the name of the diagram that should be rendered.  The\n   list of available diagrams may also be printed by passing the\n   option \u003ccode\u003e--list\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiTest\n [1 of 1] Compiling Main             ( MultiTest.hs, MultiTest.o )\n Linking MultiTest ...\n $ ./MultiTest --list\n Available diagrams:\n   foo bar\n $ ./MultiTest --selection bar -o Bar.eps -w 200\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "multiMain",
          "package": "diagrams-postscript",
          "signature": "[(String, Diagram Postscript R2)] -\u003e IO ()",
          "source": "src/Diagrams-Backend-Postscript-CmdLine.html#multiMain",
          "type": "function"
        },
        "index": {
          "description": "multiMain is like defaultMain except instead of single diagram it takes list of diagrams paired with names as input The generated executable then takes selection option specifying the name of the diagram that should be rendered The list of available diagrams may also be printed by passing the option list Example usage ghc make MultiTest of Compiling Main MultiTest.hs MultiTest.o Linking MultiTest MultiTest list Available diagrams foo bar MultiTest selection bar Bar.eps",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "multiMain",
          "normalized": "[(String,Diagram Postscript R)]-\u003eIO()",
          "package": "diagrams-postscript",
          "partial": "Main",
          "signature": "[(String,Diagram Postscript R)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:multiMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epagesMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams and each will be rendered as a page\n   in the Postscript file.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiPage\n [1 of 1] Compiling Main             ( MultiPage.hs, MultiPage.o )\n Linking MultiPage ...\n $ ./MultiPage -o Pages.ps -w 200\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "pagesMain",
          "package": "diagrams-postscript",
          "signature": "[Diagram Postscript R2] -\u003e IO ()",
          "source": "src/Diagrams-Backend-Postscript-CmdLine.html#pagesMain",
          "type": "function"
        },
        "index": {
          "description": "pagesMain is like defaultMain except instead of single diagram it takes list of diagrams and each will be rendered as page in the Postscript file Example usage ghc make MultiPage of Compiling Main MultiPage.hs MultiPage.o Linking MultiPage MultiPage Pages.ps",
          "hierarchy": "Diagrams Backend Postscript CmdLine",
          "module": "Diagrams.Backend.Postscript.CmdLine",
          "name": "pagesMain",
          "normalized": "[Diagram Postscript R]-\u003eIO()",
          "package": "diagrams-postscript",
          "partial": "Main",
          "signature": "[Diagram Postscript R]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript-CmdLine.html#v:pagesMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Postscript rendering backend for diagrams.\n\u003c/p\u003e\u003cp\u003eTo build diagrams for Postscript rendering use the \u003ccode\u003ePostscript\u003c/code\u003e\n type in the diagram type construction\n\u003c/p\u003e\u003cpre\u003e d :: Diagram Postscript R2\n d = ...\n\u003c/pre\u003e\u003cp\u003eand render giving the \u003ccode\u003ePostscript\u003c/code\u003e token\n\u003c/p\u003e\u003cpre\u003e renderDia Postscript (PostscriptOptions \"file.eps\" (Width 400) EPS) d\n\u003c/pre\u003e\u003cp\u003eThis IO action will write the specified file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html",
          "type": "module"
        },
        "index": {
          "description": "Postscript rendering backend for diagrams To build diagrams for Postscript rendering use the Postscript type in the diagram type construction Diagram Postscript R2 and render giving the Postscript token renderDia Postscript PostscriptOptions file.eps Width EPS This IO action will write the specified file",
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "partial": "Postscript",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript",
          "name": "B",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "B",
          "package": "diagrams-postscript",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackend-specific rendering options.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript",
          "name": "Options",
          "package": "diagrams-postscript",
          "signature": "Options",
          "type": "function"
        },
        "index": {
          "description": "Backend-specific rendering options",
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "Options",
          "package": "diagrams-postscript",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostscript only supports EPS style output at the moment.  Future formats would each\n   have their own associated properties that affect the output.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript",
          "name": "OutputFormat",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html#OutputFormat",
          "type": "data"
        },
        "index": {
          "description": "Postscript only supports EPS style output at the moment Future formats would each have their own associated properties that affect the output",
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "OutputFormat",
          "package": "diagrams-postscript",
          "partial": "Output Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:OutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "source": "src/Diagrams-Backend-Postscript.html#Postscript",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish this rendering engine",
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "partial": "Postscript",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#t:Postscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulated Postscript output.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Postscript",
          "name": "EPS",
          "package": "diagrams-postscript",
          "signature": "EPS",
          "source": "src/Diagrams-Backend-Postscript.html#OutputFormat",
          "type": "function"
        },
        "index": {
          "description": "Encapsulated Postscript output",
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "EPS",
          "package": "diagrams-postscript",
          "partial": "EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "signature": "Postscript",
          "source": "src/Diagrams-Backend-Postscript.html#Postscript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "partial": "Postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:Postscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript",
          "name": "psOutputFormat",
          "package": "diagrams-postscript",
          "signature": "Lens' (Options Postscript R2) OutputFormat",
          "source": "src/Diagrams-Backend-Postscript.html#psOutputFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "psOutputFormat",
          "package": "diagrams-postscript",
          "partial": "Output Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psOutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript",
          "name": "psSizeSpec",
          "package": "diagrams-postscript",
          "signature": "Lens' (Options Postscript R2) SizeSpec2D",
          "source": "src/Diagrams-Backend-Postscript.html#psSizeSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "psSizeSpec",
          "package": "diagrams-postscript",
          "partial": "Size Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psSizeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Postscript",
          "name": "psfileName",
          "package": "diagrams-postscript",
          "signature": "Lens' (Options Postscript R2) String",
          "source": "src/Diagrams-Backend-Postscript.html#psfileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Postscript",
          "module": "Diagrams.Backend.Postscript",
          "name": "psfileName",
          "package": "diagrams-postscript",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Diagrams-Backend-Postscript.html#v:psfileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric tools for generating Postscript files.  There is some\n limited support for tracking the state of the renderer when\n given a side-effecting (in the Postscript) command.  Only drawing\n operations are supported, not general Postscript language generation.\n\u003c/p\u003e\u003cp\u003eIn the future the tracking of rendering state could lead to optimizing\n output, but for now little optimization is attempted.  Most systems are\n equiped with tools to optimize Postscript such as \u003ccode\u003eeps2eps\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor details on the PostScript language see the PostScript(R) Language\n Reference: \u003ca\u003ehttp://www.adobe.com/products/postscript/pdfs/PLRM.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html",
          "type": "module"
        },
        "index": {
          "description": "Generic tools for generating Postscript files There is some limited support for tracking the state of the renderer when given side-effecting in the Postscript command Only drawing operations are supported not general Postscript language generation In the future the tracking of rendering state could lead to optimizing output but for now little optimization is attempted Most systems are equiped with tools to optimize Postscript such as eps2eps For details on the PostScript language see the PostScript Language Reference http www.adobe.com products postscript pdfs PLRM.pdf",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "Postscript",
          "package": "diagrams-postscript",
          "partial": "Postscript",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlant",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#FontSlant",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlant",
          "package": "diagrams-postscript",
          "partial": "Font Slant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:FontSlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeight",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#FontWeight",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeight",
          "package": "diagrams-postscript",
          "partial": "Font Weight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:FontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for a monad that writes Postscript using the commands we will define later.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "PSWriter",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#PSWriter",
          "type": "newtype"
        },
        "index": {
          "description": "Type for monad that writes Postscript using the commands we will define later",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "PSWriter",
          "package": "diagrams-postscript",
          "partial": "PSWriter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:PSWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the monad that tracks the state from side-effecting commands.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "Render",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#Render",
          "type": "data"
        },
        "index": {
          "description": "Type of the monad that tracks the state from side-effecting commands",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "Render",
          "package": "diagrams-postscript",
          "partial": "Render",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:Render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "RenderState",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#RenderState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "RenderState",
          "package": "diagrams-postscript",
          "partial": "Render State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:RenderState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstraction of the drawing surface details.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "Surface",
          "package": "diagrams-postscript",
          "source": "src/Graphics-Rendering-Postscript.html#Surface",
          "type": "data"
        },
        "index": {
          "description": "Abstraction of the drawing surface details",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "Surface",
          "package": "diagrams-postscript",
          "partial": "Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlant",
          "package": "diagrams-postscript",
          "signature": "FontSlant Double",
          "source": "src/Graphics-Rendering-Postscript.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlant",
          "package": "diagrams-postscript",
          "partial": "Font Slant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantItalic",
          "package": "diagrams-postscript",
          "signature": "FontSlantItalic",
          "source": "src/Graphics-Rendering-Postscript.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantItalic",
          "package": "diagrams-postscript",
          "partial": "Font Slant Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantNormal",
          "package": "diagrams-postscript",
          "signature": "FontSlantNormal",
          "source": "src/Graphics-Rendering-Postscript.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantNormal",
          "package": "diagrams-postscript",
          "partial": "Font Slant Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantOblique",
          "package": "diagrams-postscript",
          "signature": "FontSlantOblique",
          "source": "src/Graphics-Rendering-Postscript.html#FontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontSlantOblique",
          "package": "diagrams-postscript",
          "partial": "Font Slant Oblique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontSlantOblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeightBold",
          "package": "diagrams-postscript",
          "signature": "FontWeightBold",
          "source": "src/Graphics-Rendering-Postscript.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeightBold",
          "package": "diagrams-postscript",
          "partial": "Font Weight Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontWeightBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeightNormal",
          "package": "diagrams-postscript",
          "signature": "FontWeightNormal",
          "source": "src/Graphics-Rendering-Postscript.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "FontWeightNormal",
          "package": "diagrams-postscript",
          "partial": "Font Weight Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:FontWeightNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "PSWriter",
          "package": "diagrams-postscript",
          "signature": "PSWriter",
          "source": "src/Graphics-Rendering-Postscript.html#PSWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "PSWriter",
          "package": "diagrams-postscript",
          "partial": "PSWriter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:PSWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an arc given a center, radius, start, and end angle.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "arc",
          "package": "diagrams-postscript",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Draw an arc given center radius start and end angle",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "arc",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClip with the current path.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "clip",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#clip",
          "type": "function"
        },
        "index": {
          "description": "Clip with the current path",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "clip",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the current path.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "closePath",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#closePath",
          "type": "function"
        },
        "index": {
          "description": "Close the current path",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "closePath",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "partial": "Path",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:closePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a cubic B&#233;zier curve segment to the current path from the current point.\n   The current point is also moved with this command.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "curveTo",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#curveTo",
          "type": "function"
        },
        "index": {
          "description": "Add cubic zier curve segment to the current path from the current point The current point is also moved with this command",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "curveTo",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:curveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "drawState",
          "package": "diagrams-postscript",
          "signature": "Lens' RenderState DrawState",
          "source": "src/Graphics-Rendering-Postscript.html#drawState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "drawState",
          "package": "diagrams-postscript",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:drawState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "face",
          "package": "diagrams-postscript",
          "signature": "Lens' PostscriptFont String",
          "source": "src/Graphics-Rendering-Postscript.html#face",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "face",
          "package": "diagrams-postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:face"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "fill",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#fill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "fill",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the color of the fill.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "fillColor",
          "package": "diagrams-postscript",
          "signature": "c -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#fillColor",
          "type": "function"
        },
        "index": {
          "description": "Set the color of the fill",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "fillColor",
          "normalized": "a-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Color",
          "signature": "c-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill the current path without affecting the graphics state.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "fillPreserve",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#fillPreserve",
          "type": "function"
        },
        "index": {
          "description": "Fill the current path without affecting the graphics state",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "fillPreserve",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "partial": "Preserve",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillPreserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "fillRule",
          "package": "diagrams-postscript",
          "signature": "Lens' DrawState FillRule",
          "source": "src/Graphics-Rendering-Postscript.html#fillRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "fillRule",
          "package": "diagrams-postscript",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:fillRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "font",
          "package": "diagrams-postscript",
          "signature": "Lens' DrawState PostscriptFont",
          "source": "src/Graphics-Rendering-Postscript.html#font",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "font",
          "package": "diagrams-postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop the current graphics state.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "grestore",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#grestore",
          "type": "function"
        },
        "index": {
          "description": "Pop the current graphics state",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "grestore",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:grestore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the current graphics state.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "gsave",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#gsave",
          "type": "function"
        },
        "index": {
          "description": "Push the current graphics state",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "gsave",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:gsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "ignoreFill",
          "package": "diagrams-postscript",
          "signature": "Lens' DrawState Bool",
          "source": "src/Graphics-Rendering-Postscript.html#ignoreFill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "ignoreFill",
          "package": "diagrams-postscript",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:ignoreFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line cap style.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineCap",
          "package": "diagrams-postscript",
          "signature": "LineCap -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#lineCap",
          "type": "function"
        },
        "index": {
          "description": "Set the line cap style",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineCap",
          "normalized": "LineCap-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Cap",
          "signature": "LineCap-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line join method.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineJoin",
          "package": "diagrams-postscript",
          "signature": "LineJoin -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#lineJoin",
          "type": "function"
        },
        "index": {
          "description": "Set the line join method",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineJoin",
          "normalized": "LineJoin-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Join",
          "signature": "LineJoin-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a line to the current path from the current point to the given point.\n   The current point is also moved with this command.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineTo",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#lineTo",
          "type": "function"
        },
        "index": {
          "description": "Add line to the current path from the current point to the given point The current point is also moved with this command",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line width.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineWidth",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#lineWidth",
          "type": "function"
        },
        "index": {
          "description": "Set the line width",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "lineWidth",
          "normalized": "Double-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Width",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the miter limit.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "miterLimit",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#miterLimit",
          "type": "function"
        },
        "index": {
          "description": "Set the miter limit",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "miterLimit",
          "normalized": "Double-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Limit",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:miterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the current point.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "moveTo",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#moveTo",
          "type": "function"
        },
        "index": {
          "description": "Move the current point",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "moveTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new path.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "newPath",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#newPath",
          "type": "function"
        },
        "index": {
          "description": "Start new path",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "newPath",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "partial": "Path",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:newPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a cubic B&#233;zier curve segment to the current path from the current point\n   using relative coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "relCurveTo",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#relCurveTo",
          "type": "function"
        },
        "index": {
          "description": "Add cubic zier curve segment to the current path from the current point using relative coordinates",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "relCurveTo",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Curve To",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:relCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a line segment to the current path using relative coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "relLineTo",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#relLineTo",
          "type": "function"
        },
        "index": {
          "description": "Add line segment to the current path using relative coordinates",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "relLineTo",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Line To",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:relLineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders multiple pages given as a list of \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e actions\n   to the file associated with the \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "renderPagesWith",
          "package": "diagrams-postscript",
          "signature": "Surface -\u003e [Render a] -\u003e m [a]",
          "source": "src/Graphics-Rendering-Postscript.html#renderPagesWith",
          "type": "function"
        },
        "index": {
          "description": "Renders multiple pages given as list of Render actions to the file associated with the Surface argument",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "renderPagesWith",
          "normalized": "Surface-\u003e[Render a]-\u003eb[a]",
          "package": "diagrams-postscript",
          "partial": "Pages With",
          "signature": "Surface-\u003e[Render a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:renderPagesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles opening and closing the file associated with the\n   passed \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e and renders the commands built up in the\n   \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "renderWith",
          "package": "diagrams-postscript",
          "signature": "Surface -\u003e Render a -\u003e m a",
          "source": "src/Graphics-Rendering-Postscript.html#renderWith",
          "type": "function"
        },
        "index": {
          "description": "Handles opening and closing the file associated with the passed Surface and renders the commands built up in the Render argument",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "renderWith",
          "normalized": "Surface-\u003eRender a-\u003eb a",
          "package": "diagrams-postscript",
          "partial": "With",
          "signature": "Surface-\u003eRender a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:renderWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current state by popping the state stack.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "restore",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Replace the current state by popping the state stack",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "restore",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current transform matrix to be the matrix found by popping\n   the execution stack.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "restoreMatrix",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#restoreMatrix",
          "type": "function"
        },
        "index": {
          "description": "Set the current transform matrix to be the matrix found by popping the execution stack",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "restoreMatrix",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "partial": "Matrix",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:restoreMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the current transform matrix.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "rotate",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotate the current transform matrix",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "rotate",
          "normalized": "Double-\u003eRender()",
          "package": "diagrams-postscript",
          "signature": "Double-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "runPSWriter",
          "package": "diagrams-postscript",
          "signature": "WriterT (DList String) IO m",
          "source": "src/Graphics-Rendering-Postscript.html#PSWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "runPSWriter",
          "package": "diagrams-postscript",
          "partial": "PSWriter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:runPSWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the current state of the renderer onto the state stack.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "save",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#save",
          "type": "function"
        },
        "index": {
          "description": "Push the current state of the renderer onto the state stack",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "save",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the current transform matrix onto the execution stack.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "saveMatrix",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#saveMatrix",
          "type": "function"
        },
        "index": {
          "description": "Push the current transform matrix onto the execution stack",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "saveMatrix",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "partial": "Matrix",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:saveMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the current transform matrix.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "scale",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Scale the current transform matrix",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "scale",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the dash style.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "setDash",
          "package": "diagrams-postscript",
          "signature": "[Double]-\u003e Double-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "Set the dash style",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "setDash",
          "normalized": "[Double]-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Dash",
          "signature": "[Double]-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:setDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string at the current point.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "showText",
          "package": "diagrams-postscript",
          "signature": "String -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#showText",
          "type": "function"
        },
        "index": {
          "description": "Draw string at the current point",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "showText",
          "normalized": "String-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Text",
          "signature": "String-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string with offset factors from center relative to the width and height.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextAlign",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e String -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#showTextAlign",
          "type": "function"
        },
        "index": {
          "description": "Draw string with offset factors from center relative to the width and height",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextAlign",
          "normalized": "Double-\u003eDouble-\u003eString-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Text Align",
          "signature": "Double-\u003eDouble-\u003eString-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string by first measuring the width then offseting by half.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextCentered",
          "package": "diagrams-postscript",
          "signature": "String -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#showTextCentered",
          "type": "function"
        },
        "index": {
          "description": "Draw string by first measuring the width then offseting by half",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextCentered",
          "normalized": "String-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Text Centered",
          "signature": "String-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextCentered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string uniformally scaling to fit within a bounding box.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextInBox",
          "package": "diagrams-postscript",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e String -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#showTextInBox",
          "type": "function"
        },
        "index": {
          "description": "Draw string uniformally scaling to fit within bounding box",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "showTextInBox",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003eString-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Text In Box",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003eString-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:showTextInBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "size",
          "package": "diagrams-postscript",
          "signature": "Lens' PostscriptFont Double",
          "source": "src/Graphics-Rendering-Postscript.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "size",
          "package": "diagrams-postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "slant",
          "package": "diagrams-postscript",
          "signature": "Lens' PostscriptFont FontSlant",
          "source": "src/Graphics-Rendering-Postscript.html#slant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "slant",
          "package": "diagrams-postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:slant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroke the current path.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "stroke",
          "package": "diagrams-postscript",
          "signature": "Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#stroke",
          "type": "function"
        },
        "index": {
          "description": "Stroke the current path",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "stroke",
          "normalized": "Render()",
          "package": "diagrams-postscript",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the color of the stroke.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "strokeColor",
          "package": "diagrams-postscript",
          "signature": "c -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#strokeColor",
          "type": "function"
        },
        "index": {
          "description": "Set the color of the stroke",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "strokeColor",
          "normalized": "a-\u003eRender()",
          "package": "diagrams-postscript",
          "partial": "Color",
          "signature": "c-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:strokeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transform matrix to the current transform.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "transform",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Apply transform matrix to the current transform",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "transform",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the current transform matrix.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "translate",
          "package": "diagrams-postscript",
          "signature": "Double -\u003e Double -\u003e Render ()",
          "source": "src/Graphics-Rendering-Postscript.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Translate the current transform matrix",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "translate",
          "normalized": "Double-\u003eDouble-\u003eRender()",
          "package": "diagrams-postscript",
          "signature": "Double-\u003eDouble-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Postscript",
          "name": "weight",
          "package": "diagrams-postscript",
          "signature": "Lens' PostscriptFont FontWeight",
          "source": "src/Graphics-Rendering-Postscript.html#weight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "weight",
          "package": "diagrams-postscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a surface and performs an action on that surface.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Postscript",
          "name": "withEPSSurface",
          "package": "diagrams-postscript",
          "signature": "String -\u003e Int -\u003e Int -\u003e (Surface -\u003e IO a) -\u003e IO a",
          "source": "src/Graphics-Rendering-Postscript.html#withEPSSurface",
          "type": "function"
        },
        "index": {
          "description": "Builds surface and performs an action on that surface",
          "hierarchy": "Graphics Rendering Postscript",
          "module": "Graphics.Rendering.Postscript",
          "name": "withEPSSurface",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "package": "diagrams-postscript",
          "partial": "EPSSurface",
          "signature": "String-\u003eInt-\u003eInt-\u003e(Surface-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-postscript/docs/Graphics-Rendering-Postscript.html#v:withEPSSurface"
      }
    }
  ]
]