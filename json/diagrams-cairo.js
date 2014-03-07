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
        "word": "diagrams-cairo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient creation of command-line-driven executables for\n rendering diagrams using the cairo backend.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e creates an executable which can render a single\n   diagram at various options.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emultiMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but allows for a list of\n   diagrams from which the user can choose one to render.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eanimMain\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but for animations instead of\n   diagrams.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e is a generic form that does all of the above but with\n   a slightly scarier type.  See \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.  This\n   form can also take a function type that has a subtable final result\n   (any of arguments to the above types) and \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you want to generate diagrams programmatically---\u003cem\u003ei.e.\u003c/em\u003e if you\n want to do anything more complex than what the below functions\n provide---you have several options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use a function with \u003ccode\u003e\u003ca\u003emainWith\u003c/a\u003e\u003c/code\u003e.  This may require making\n   \u003ccode\u003e\u003ca\u003eParseable\u003c/a\u003e\u003c/code\u003e instances for custom argument types.\n\u003c/li\u003e\u003cli\u003e Make a new \u003ccode\u003e\u003ca\u003eMainable\u003c/a\u003e\u003c/code\u003e instance.  This may require a newtype\n   wrapper on your diagram type to avoid the existing instances.\n   This gives you more control over argument parsing, intervening\n   steps, and diagram creation.\n\u003c/li\u003e\u003cli\u003e Build option records and pass them along with a diagram to \u003ccode\u003e\u003ca\u003emainRender\u003c/a\u003e\u003c/code\u003e\n   from \u003ca\u003eDiagrams.Backend.CmdLine\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e A more flexible approach is to use the \u003ccode\u003e\u003ca\u003erenderCairo\u003c/a\u003e\u003c/code\u003e function\n   provided in the \u003ca\u003eDiagrams.Backend.Cairo\u003c/a\u003e module.\n\u003c/li\u003e\u003cli\u003e For the most flexibility, you can call the generic \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e\n   function directly; see \u003ca\u003eDiagrams.Backend.Cairo\u003c/a\u003e for more\n   information.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a tutorial on command-line diagram creation see\n \u003ca\u003ehttp://projects.haskell.org/diagrams/doc/cmdline.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-CmdLine.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient creation of command-line-driven executables for rendering diagrams using the cairo backend defaultMain creates an executable which can render single diagram at various options multiMain is like defaultMain but allows for list of diagrams from which the user can choose one to render animMain is like defaultMain but for animations instead of diagrams mainWith is generic form that does all of the above but with slightly scarier type See Diagrams.Backend.CmdLine This form can also take function type that has subtable final result any of arguments to the above types and Parseable arguments If you want to generate diagrams programmatically i.e if you want to do anything more complex than what the below functions provide---you have several options Use function with mainWith This may require making Parseable instances for custom argument types Make new Mainable instance This may require newtype wrapper on your diagram type to avoid the existing instances This gives you more control over argument parsing intervening steps and diagram creation Build option records and pass them along with diagram to mainRender from Diagrams.Backend.CmdLine more flexible approach is to use the renderCairo function provided in the Diagrams.Backend.Cairo module For the most flexibility you can call the generic renderDia function directly see Diagrams.Backend.Cairo for more information For tutorial on command-line diagram creation see http projects.haskell.org diagrams doc cmdline.html",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-cairo",
          "partial": "Cmd Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "B",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "B",
          "package": "diagrams-cairo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish\n   the cairo backend: (1) when calling functions where the type\n   inference engine would otherwise have no way to know which\n   backend you wanted to use, and (2) as an argument to the\n   \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRenderable\u003c/a\u003e\u003c/code\u003e type classes.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#Cairo",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish the cairo backend when calling functions where the type inference engine would otherwise have no way to know which backend you wanted to use and as an argument to the Backend and Renderable type classes",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#t:Cairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eanimMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, but renders an animation\n instead of a diagram.  It takes as input an animation and produces\n a command-line program which will crudely \"render\" the animation\n by rendering one image for each frame, named by extending the given\n output file name by consecutive integers.  For example if the given\n output file name is \u003ccode\u003efoo/blah.png\u003c/code\u003e, the frames will be saved in\n \u003ccode\u003efoo/blah001.png\u003c/code\u003e, \u003ccode\u003efoo/blah002.png\u003c/code\u003e, and so on (the number of\n padding digits used depends on the total number of frames).  It is\n up to the user to take these images and stitch them together into\n an actual animation format (using, \u003cem\u003ee.g.\u003c/em\u003e \u003ccode\u003effmpeg\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eOf course, this is a rather crude method of rendering animations;\n   more sophisticated methods will likely be added in the future.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e--fpu\u003c/code\u003e option can be used to control how many frames will be\n output for each second (unit time) of animation.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "animMain",
          "package": "diagrams-cairo",
          "signature": "Animation Cairo R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Cairo-CmdLine.html#animMain",
          "type": "function"
        },
        "index": {
          "description": "animMain is like defaultMain but renders an animation instead of diagram It takes as input an animation and produces command-line program which will crudely render the animation by rendering one image for each frame named by extending the given output file name by consecutive integers For example if the given output file name is foo blah.png the frames will be saved in foo blah001.png foo blah002.png and so on the number of padding digits used depends on the total number of frames It is up to the user to take these images and stitch them together into an actual animation format using e.g ffmpeg Of course this is rather crude method of rendering animations more sophisticated methods will likely be added in the future The fpu option can be used to control how many frames will be output for each second unit time of animation",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "animMain",
          "normalized": "Animation Cairo R-\u003eIO()",
          "package": "diagrams-cairo",
          "partial": "Main",
          "signature": "Animation Cairo R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#v:animMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest way to render diagrams, and is intended to\n   be used like so:\n\u003c/p\u003e\u003cpre\u003e ... other definitions ...\n myDiagram = ...\n\n main = defaultMain myDiagram\n\u003c/pre\u003e\u003cp\u003eCompiling a source file like the above example will result in an\n   executable which takes command-line options for setting the size,\n   output file, and so on, and renders \u003ccode\u003emyDiagram\u003c/code\u003e with the\n   specified options.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, the generated executable also supports a\n   rudimentary \"looped\" mode, which watches the source file for\n   changes and recompiles itself on the fly.\n\u003c/p\u003e\u003cp\u003ePass \u003ccode\u003e--help\u003c/code\u003e to the generated executable to see all available\n   options.  Currently it looks something like\n\u003c/p\u003e\u003cpre\u003e\n ./Program\n\nUsage: ./Program [-w|--width WIDTH] [-h|--height HEIGHT] [-o|--output OUTPUT]\n                  [--loop] [-s|--src ARG] [-i|--interval INTERVAL]\n   Command-line diagram generation.\n\nAvailable options:\n   -?,--help                Show this help text\n   -w,--width WIDTH         Desired WIDTH of the output image\n   -h,--height HEIGHT       Desired HEIGHT of the output image\n   -o,--output OUTPUT       OUTPUT file\n   -l,--loop                Run in a self-recompiling loop\n   -s,--src ARG             Source file to watch\n   -i,--interval INTERVAL   When running in a loop, check for changes every INTERVAL seconds.\n\u003c/pre\u003e\u003cp\u003eFor example, a couple common scenarios include\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MyDiagram\n\n# output image.png with a width of 400px (and auto-determined height)\n $ ./MyDiagram -o image.png -w 400\n\n# output 200x200 dia.pdf, then watch for changes every 10 seconds\n $ ./MyDiagram -o dia.pdf -h 200 -w 200 -l -i 10\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "defaultMain",
          "package": "diagrams-cairo",
          "signature": "Diagram Cairo R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Cairo-CmdLine.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "This is the simplest way to render diagrams and is intended to be used like so other definitions myDiagram main defaultMain myDiagram Compiling source file like the above example will result in an executable which takes command-line options for setting the size output file and so on and renders myDiagram with the specified options On Unix systems the generated executable also supports rudimentary looped mode which watches the source file for changes and recompiles itself on the fly Pass help to the generated executable to see all available options Currently it looks something like Program Usage Program width WIDTH height HEIGHT output OUTPUT loop src ARG interval INTERVAL Command-line diagram generation Available options help Show this help text width WIDTH Desired WIDTH of the output image height HEIGHT Desired HEIGHT of the output image output OUTPUT OUTPUT file loop Run in self-recompiling loop src ARG Source file to watch interval INTERVAL When running in loop check for changes every INTERVAL seconds For example couple common scenarios include ghc make MyDiagram output image.png with width of px and auto-determined height MyDiagram image.png output x200 dia.pdf then watch for changes every seconds MyDiagram dia.pdf",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "defaultMain",
          "normalized": "Diagram Cairo R-\u003eIO()",
          "package": "diagrams-cairo",
          "partial": "Main",
          "signature": "Diagram Cairo R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain entry point for command-line diagram creation.  This is the method\n that users will call from their program \u003ccode\u003emain\u003c/code\u003e.  For instance an expected\n user program would take the following form.\n\u003c/p\u003e\u003cpre\u003e import Diagrams.Prelude\n import Diagrams.Backend.TheBestBackend.CmdLine\n\n d :: Diagram B R2\n d = ...\n\n main = mainWith d\n\u003c/pre\u003e\u003cp\u003eMost backends should be able to use the default implementation.  A different\n implementation should be used to handle more complex interactions with the user.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "mainWith",
          "package": "diagrams-cairo",
          "signature": "d -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Main entry point for command-line diagram creation This is the method that users will call from their program main For instance an expected user program would take the following form import Diagrams.Prelude import Diagrams.Backend.TheBestBackend.CmdLine Diagram R2 main mainWith Most backends should be able to use the default implementation different implementation should be used to handle more complex interactions with the user",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "mainWith",
          "normalized": "a-\u003eIO()",
          "package": "diagrams-cairo",
          "partial": "With",
          "signature": "d-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#v:mainWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emultiMain\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e, except instead of a single\n   diagram it takes a list of diagrams paired with names as input.\n   The generated executable then takes a \u003ccode\u003e--selection\u003c/code\u003e option\n   specifying the name of the diagram that should be rendered.  The\n   list of available diagrams may also be printed by passing the\n   option \u003ccode\u003e--list\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MultiTest\n [1 of 1] Compiling Main             ( MultiTest.hs, MultiTest.o )\n Linking MultiTest ...\n $ ./MultiTest --list\n Available diagrams:\n   foo bar\n $ ./MultiTest --selection bar -o Bar.png -w 200\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "multiMain",
          "package": "diagrams-cairo",
          "signature": "[(String, Diagram Cairo R2)] -\u003e IO ()",
          "source": "src/Diagrams-Backend-Cairo-CmdLine.html#multiMain",
          "type": "function"
        },
        "index": {
          "description": "multiMain is like defaultMain except instead of single diagram it takes list of diagrams paired with names as input The generated executable then takes selection option specifying the name of the diagram that should be rendered The list of available diagrams may also be printed by passing the option list Example usage ghc make MultiTest of Compiling Main MultiTest.hs MultiTest.o Linking MultiTest MultiTest list Available diagrams foo bar MultiTest selection bar Bar.png",
          "hierarchy": "Diagrams Backend Cairo CmdLine",
          "module": "Diagrams.Backend.Cairo.CmdLine",
          "name": "multiMain",
          "normalized": "[(String,Diagram Cairo R)]-\u003eIO()",
          "package": "diagrams-cairo",
          "partial": "Main",
          "signature": "[(String,Diagram Cairo R)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-CmdLine.html#v:multiMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the internal implementation guts of the\n diagrams cairo backend.  If you want to see how the cairo backend\n works under the hood, you are in the right place (try clicking on\n the \"Source\" links).  (Guts under the hood, what an awful mixed\n metaphor.)  If you know what you are doing and really want access\n to the internals of the implementation, you are also in the right\n place.  Otherwise, you should have no need of this module; import\n \u003ca\u003eDiagrams.Backend.Cairo.CmdLine\u003c/a\u003e or \u003ca\u003eDiagrams.Backend.Cairo\u003c/a\u003e\n instead.\n\u003c/p\u003e\u003cp\u003eThe one exception is that this module may have to be imported\n sometimes to work around an apparent bug in certain versions of\n GHC, which results in a \"not in scope\" error for \u003ccode\u003eCairoOptions\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe types of all the \u003ccode\u003efromX\u003c/code\u003e functions look funny in the Haddock\n output, which displays them like \u003ccode\u003eType -\u003e Type\u003c/code\u003e.  In fact they are\n all of the form \u003ccode\u003eType -\u003e Graphics.Rendering.Cairo.Type\u003c/code\u003e, \u003cem\u003ei.e.\u003c/em\u003e\n they convert from a diagrams type to a cairo type of the same name.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "Internal",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the internal implementation guts of the diagrams cairo backend If you want to see how the cairo backend works under the hood you are in the right place try clicking on the Source links Guts under the hood what an awful mixed metaphor If you know what you are doing and really want access to the internals of the implementation you are also in the right place Otherwise you should have no need of this module import Diagrams.Backend.Cairo.CmdLine or Diagrams.Backend.Cairo instead The one exception is that this module may have to be imported sometimes to work around an apparent bug in certain versions of GHC which results in not in scope error for CairoOptions The types of all the fromX functions look funny in the Haddock output which displays them like Type Type In fact they are all of the form Type Graphics.Rendering.Cairo.Type i.e they convert from diagrams type to cairo type of the same name",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "Internal",
          "package": "diagrams-cairo",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "B",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "B",
          "package": "diagrams-cairo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish\n   the cairo backend: (1) when calling functions where the type\n   inference engine would otherwise have no way to know which\n   backend you wanted to use, and (2) as an argument to the\n   \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRenderable\u003c/a\u003e\u003c/code\u003e type classes.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#Cairo",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish the cairo backend when calling functions where the type inference engine would otherwise have no way to know which backend you wanted to use and as an argument to the Backend and Renderable type classes",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#t:Cairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom state tracked in the \u003ccode\u003e\u003ca\u003eRenderM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "CairoState",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#CairoState",
          "type": "data"
        },
        "index": {
          "description": "Custom state tracked in the RenderM monad",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "CairoState",
          "package": "diagrams-cairo",
          "partial": "Cairo State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#t:CairoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput types supported by cairo, including four different file\n   types (PNG, PS, PDF, SVG).  If you want to output directly to GTK\n   windows, see the \u003ccode\u003ediagrams-gtk\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "OutputType",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "data"
        },
        "index": {
          "description": "Output types supported by cairo including four different file types PNG PS PDF SVG If you want to output directly to GTK windows see the diagrams-gtk package",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "OutputType",
          "package": "diagrams-cairo",
          "partial": "Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#t:OutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe custom monad in which intermediate drawing options take\n   place; \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e is cairo's own rendering\n   monad.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "RenderM",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#RenderM",
          "type": "type"
        },
        "index": {
          "description": "The custom monad in which intermediate drawing options take place Render is cairo own rendering monad",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "RenderM",
          "package": "diagrams-cairo",
          "partial": "Render",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#t:RenderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "signature": "Cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#Cairo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:Cairo\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:Cairo\"]"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:Cairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "CairoState",
          "package": "diagrams-cairo",
          "signature": "CairoState",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#CairoState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "CairoState",
          "package": "diagrams-cairo",
          "partial": "Cairo State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:CairoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePortable Document Format output.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "PDF",
          "package": "diagrams-cairo",
          "signature": "PDF",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PDF\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:PDF\"]"
        },
        "index": {
          "description": "Portable Document Format output",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "PDF",
          "package": "diagrams-cairo",
          "partial": "PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePortable Network Graphics output.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "PNG",
          "package": "diagrams-cairo",
          "signature": "PNG",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PNG\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:PNG\"]"
        },
        "index": {
          "description": "Portable Network Graphics output",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "PNG",
          "package": "diagrams-cairo",
          "partial": "PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostScript output\n\u003c/p\u003e",
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "PS",
          "package": "diagrams-cairo",
          "signature": "PS",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PS\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:PS\"]"
        },
        "index": {
          "description": "PostScript output",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "PS",
          "package": "diagrams-cairo",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't output any file; the returned \u003ccode\u003eIO ()\u003c/code\u003e\n   action will do nothing, but the \u003ccode\u003eRender ()\u003c/code\u003e\n   action can be used (\u003cem\u003ee.g.\u003c/em\u003e to draw to a Gtk\n   window; see the \u003ccode\u003ediagrams-gtk\u003c/code\u003e package).\n\u003c/p\u003e",
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "RenderOnly",
          "package": "diagrams-cairo",
          "signature": "RenderOnly",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:RenderOnly\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:RenderOnly\"]"
        },
        "index": {
          "description": "Don output any file the returned IO action will do nothing but the Render action can be used e.g to draw to Gtk window see the diagrams-gtk package",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "RenderOnly",
          "package": "diagrams-cairo",
          "partial": "Render Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:RenderOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalable Vector Graphics output.\n\u003c/p\u003e",
          "module": "[\"Diagrams.Backend.Cairo.Internal\",\"Diagrams.Backend.Cairo\"]",
          "name": "SVG",
          "package": "diagrams-cairo",
          "signature": "SVG",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:SVG\",\"http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:SVG\"]"
        },
        "index": {
          "description": "Scalable Vector Graphics output",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "SVG",
          "package": "diagrams-cairo",
          "partial": "SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current accumulated style.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "_accumStyle",
          "package": "diagrams-cairo",
          "signature": "Style R2",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#CairoState",
          "type": "function"
        },
        "index": {
          "description": "The current accumulated style",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "_accumStyle",
          "package": "diagrams-cairo",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:_accumStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not we saw any lines in the most\n   recent path (as opposed to loops).  If we did,\n   we should ignore any fill attribute.\n   diagrams-lib separates lines and loops into\n   separate path primitives so we don't have to\n   worry about seeing them together in the same\n   path.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "_ignoreFill",
          "package": "diagrams-cairo",
          "signature": "Bool",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#CairoState",
          "type": "function"
        },
        "index": {
          "description": "Whether or not we saw any lines in the most recent path as opposed to loops If we did we should ignore any fill attribute diagrams-lib separates lines and loops into separate path primitives so we don have to worry about seeing them together in the same path",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "_ignoreFill",
          "package": "diagrams-cairo",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:_ignoreFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "accumStyle",
          "package": "diagrams-cairo",
          "signature": "Lens' CairoState (Style R2)",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#accumStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "accumStyle",
          "package": "diagrams-cairo",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:accumStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the opacity from a style to a given color.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "applyOpacity",
          "package": "diagrams-cairo",
          "signature": "c -\u003e Style v -\u003e AlphaColour Double",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#applyOpacity",
          "type": "function"
        },
        "index": {
          "description": "Apply the opacity from style to given color",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "applyOpacity",
          "normalized": "a-\u003eStyle b-\u003eAlphaColour Double",
          "package": "diagrams-cairo",
          "partial": "Opacity",
          "signature": "c-\u003eStyle v-\u003eAlphaColour Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:applyOpacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoBypassAdjust",
          "package": "diagrams-cairo",
          "signature": "Lens' (Options Cairo R2) Bool",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoBypassAdjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoBypassAdjust",
          "package": "diagrams-cairo",
          "partial": "Bypass Adjust",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoBypassAdjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoFileName",
          "package": "diagrams-cairo",
          "signature": "Lens' (Options Cairo R2) String",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoFileName",
          "package": "diagrams-cairo",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoOutputType",
          "package": "diagrams-cairo",
          "signature": "Lens' (Options Cairo R2) OutputType",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoOutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoOutputType",
          "package": "diagrams-cairo",
          "partial": "Output Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoOutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoPath",
          "package": "diagrams-cairo",
          "signature": "Path R2 -\u003e RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoPath",
          "normalized": "Path R-\u003eRenderM()",
          "package": "diagrams-cairo",
          "partial": "Path",
          "signature": "Path R-\u003eRenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoSizeSpec",
          "package": "diagrams-cairo",
          "signature": "Lens' (Options Cairo R2) SizeSpec2D",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoSizeSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoSizeSpec",
          "package": "diagrams-cairo",
          "partial": "Size Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoSizeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle those style attributes for which we can immediately emit\n   cairo instructions as we encounter them in the tree (clip, font\n   size, fill rule, line width, cap, join, and dashing).  Other\n   attributes (font face, slant, weight; fill color, stroke color,\n   opacity) must be accumulated.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoStyle",
          "package": "diagrams-cairo",
          "signature": "Style v -\u003e RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoStyle",
          "type": "function"
        },
        "index": {
          "description": "Handle those style attributes for which we can immediately emit cairo instructions as we encounter them in the tree clip font size fill rule line width cap join and dashing Other attributes font face slant weight fill color stroke color opacity must be accumulated",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoStyle",
          "normalized": "Style a-\u003eRenderM()",
          "package": "diagrams-cairo",
          "partial": "Style",
          "signature": "Style v-\u003eRenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply the current transformation matrix by the given 2D\n   transformation.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoTransf",
          "package": "diagrams-cairo",
          "signature": "T2 -\u003e Render ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#cairoTransf",
          "type": "function"
        },
        "index": {
          "description": "Multiply the current transformation matrix by the given transformation",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "cairoTransf",
          "normalized": "T-\u003eRender()",
          "package": "diagrams-cairo",
          "partial": "Transf",
          "signature": "T-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:cairoTransf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFillRule",
          "package": "diagrams-cairo",
          "signature": "FillRule -\u003e FillRule",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#fromFillRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFillRule",
          "normalized": "FillRule-\u003eFillRule",
          "package": "diagrams-cairo",
          "partial": "Fill Rule",
          "signature": "FillRule-\u003eFillRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:fromFillRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFontSlant",
          "package": "diagrams-cairo",
          "signature": "FontSlant -\u003e FontSlant",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#fromFontSlant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFontSlant",
          "normalized": "FontSlant-\u003eFontSlant",
          "package": "diagrams-cairo",
          "partial": "Font Slant",
          "signature": "FontSlant-\u003eFontSlant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:fromFontSlant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFontWeight",
          "package": "diagrams-cairo",
          "signature": "FontWeight -\u003e FontWeight",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#fromFontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromFontWeight",
          "normalized": "FontWeight-\u003eFontWeight",
          "package": "diagrams-cairo",
          "partial": "Font Weight",
          "signature": "FontWeight-\u003eFontWeight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:fromFontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromLineCap",
          "package": "diagrams-cairo",
          "signature": "LineCap -\u003e LineCap",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#fromLineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromLineCap",
          "normalized": "LineCap-\u003eLineCap",
          "package": "diagrams-cairo",
          "partial": "Line Cap",
          "signature": "LineCap-\u003eLineCap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:fromLineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromLineJoin",
          "package": "diagrams-cairo",
          "signature": "LineJoin -\u003e LineJoin",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#fromLineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "fromLineJoin",
          "normalized": "LineJoin-\u003eLineJoin",
          "package": "diagrams-cairo",
          "partial": "Line Join",
          "signature": "LineJoin-\u003eLineJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:fromLineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an accumulated style attribute from the render monad state.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "getStyleAttrib",
          "package": "diagrams-cairo",
          "signature": "(a -\u003e b) -\u003e RenderM (Maybe b)",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#getStyleAttrib",
          "type": "function"
        },
        "index": {
          "description": "Get an accumulated style attribute from the render monad state",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "getStyleAttrib",
          "normalized": "(a-\u003eb)-\u003eRenderM(Maybe b)",
          "package": "diagrams-cairo",
          "partial": "Style Attrib",
          "signature": "(a-\u003eb)-\u003eRenderM(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:getStyleAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "ignoreFill",
          "package": "diagrams-cairo",
          "signature": "Lens' CairoState Bool",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#ignoreFill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "ignoreFill",
          "package": "diagrams-cairo",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:ignoreFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "liftC",
          "package": "diagrams-cairo",
          "signature": "Render a -\u003e RenderM a",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#liftC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "liftC",
          "normalized": "Render a-\u003eRenderM a",
          "package": "diagrams-cairo",
          "signature": "Render a-\u003eRenderM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:liftC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an object that the cairo backend knows how to render.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "renderC",
          "package": "diagrams-cairo",
          "signature": "a -\u003e RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#renderC",
          "type": "function"
        },
        "index": {
          "description": "Render an object that the cairo backend knows how to render",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "renderC",
          "normalized": "a-\u003eRenderM()",
          "package": "diagrams-cairo",
          "signature": "a-\u003eRenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:renderC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "renderRTree",
          "package": "diagrams-cairo",
          "signature": "RTree Cairo R2 a -\u003e Render Cairo R2",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#renderRTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "renderRTree",
          "normalized": "RTree Cairo R a-\u003eRender Cairo R",
          "package": "diagrams-cairo",
          "partial": "RTree",
          "signature": "RTree Cairo R a-\u003eRender Cairo R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:renderRTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore the context from a stack.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "restore",
          "package": "diagrams-cairo",
          "signature": "RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Restore the context from stack",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "restore",
          "normalized": "RenderM()",
          "package": "diagrams-cairo",
          "signature": "RenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "runC",
          "package": "diagrams-cairo",
          "signature": "Render Cairo R2 -\u003e RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#runC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "runC",
          "normalized": "Render Cairo R-\u003eRenderM()",
          "package": "diagrams-cairo",
          "signature": "Render Cairo R-\u003eRenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:runC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "runRenderM",
          "package": "diagrams-cairo",
          "signature": "RenderM a -\u003e Render a",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#runRenderM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "runRenderM",
          "normalized": "RenderM a-\u003eRender a",
          "package": "diagrams-cairo",
          "partial": "Render",
          "signature": "RenderM a-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:runRenderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the current context onto a stack.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "save",
          "package": "diagrams-cairo",
          "signature": "RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#save",
          "type": "function"
        },
        "index": {
          "description": "Push the current context onto stack",
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "save",
          "normalized": "RenderM()",
          "package": "diagrams-cairo",
          "signature": "RenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "setSourceColor",
          "package": "diagrams-cairo",
          "signature": "Maybe (AlphaColour Double) -\u003e RenderM ()",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#setSourceColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Internal",
          "module": "Diagrams.Backend.Cairo.Internal",
          "name": "setSourceColor",
          "normalized": "Maybe(AlphaColour Double)-\u003eRenderM()",
          "package": "diagrams-cairo",
          "partial": "Source Color",
          "signature": "Maybe(AlphaColour Double)-\u003eRenderM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Internal.html#v:setSourceColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRender a diagram directly to a list of lists of Colour values\n (\u003cem\u003ei.e.\u003c/em\u003e pixels).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo.List",
          "name": "List",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-List.html",
          "type": "module"
        },
        "index": {
          "description": "Render diagram directly to list of lists of Colour values i.e pixels",
          "hierarchy": "Diagrams Backend Cairo List",
          "module": "Diagrams.Backend.Cairo.List",
          "name": "List",
          "package": "diagrams-cairo",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender to a regular list of Colour values.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.List",
          "name": "renderToList",
          "package": "diagrams-cairo",
          "signature": "Int -\u003e Int -\u003e Diagram Cairo R2 -\u003e IO [[AlphaColour a]]",
          "source": "src/Diagrams-Backend-Cairo-List.html#renderToList",
          "type": "function"
        },
        "index": {
          "description": "Render to regular list of Colour values",
          "hierarchy": "Diagrams Backend Cairo List",
          "module": "Diagrams.Backend.Cairo.List",
          "name": "renderToList",
          "normalized": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO[[AlphaColour a]]",
          "package": "diagrams-cairo",
          "partial": "To List",
          "signature": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO[[AlphaColour a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-List.html#v:renderToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRender diagrams to buffers in memory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "Ptr",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Ptr.html",
          "type": "module"
        },
        "index": {
          "description": "Render diagrams to buffers in memory",
          "hierarchy": "Diagrams Backend Cairo Ptr",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "Ptr",
          "package": "diagrams-cairo",
          "partial": "Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Ptr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erenderPtr\u003c/a\u003e\u003c/code\u003e but automatically garbage collected by Haskell.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "renderForeignPtr",
          "package": "diagrams-cairo",
          "signature": "Int -\u003e Int -\u003e Diagram Cairo R2 -\u003e IO (ForeignPtr Word8)",
          "source": "src/Diagrams-Backend-Cairo-Ptr.html#renderForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Like renderPtr but automatically garbage collected by Haskell",
          "hierarchy": "Diagrams Backend Cairo Ptr",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "renderForeignPtr",
          "normalized": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO(ForeignPtr Word)",
          "package": "diagrams-cairo",
          "partial": "Foreign Ptr",
          "signature": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO(ForeignPtr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Ptr.html#v:renderForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a diagram to a new buffer in memory, with the format ARGB32.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "renderPtr",
          "package": "diagrams-cairo",
          "signature": "Int -\u003e Int -\u003e Diagram Cairo R2 -\u003e IO (Ptr Word8)",
          "source": "src/Diagrams-Backend-Cairo-Ptr.html#renderPtr",
          "type": "function"
        },
        "index": {
          "description": "Render diagram to new buffer in memory with the format ARGB32",
          "hierarchy": "Diagrams Backend Cairo Ptr",
          "module": "Diagrams.Backend.Cairo.Ptr",
          "name": "renderPtr",
          "normalized": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO(Ptr Word)",
          "package": "diagrams-cairo",
          "partial": "Ptr",
          "signature": "Int-\u003eInt-\u003eDiagram Cairo R-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Ptr.html#v:renderPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenience functions for querying information\n from cairo.  In particular, this provides utilities for information\n about fonts, and creating text primitives with bounds based on the\n font being used. To render text with automatically determined\n envelopes, use \u003ccode\u003e\u003ca\u003etextLineBounded\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etextLineBoundedIO\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003etextVisualBounded\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003etextVisualBoundedIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMany of these functions take a \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eR2\u003c/a\u003e\u003c/code\u003e parameter, determining the\n style to apply to the text before rendering / querying information about\n the text.  These \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eR2\u003c/a\u003e\u003c/code\u003e parameters can be created a variety of ways,\n but the most direct will likely be by applying style-transforming functions\n such as \u003ccode\u003e\u003ca\u003efont\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efontSize\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003efontSlant\u003c/code\u003e, and \u003ccode\u003efontWeight\u003c/code\u003e to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n This works because there are instances of \u003ccode\u003e\u003ca\u003eHasStyle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "Text",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenience functions for querying information from cairo In particular this provides utilities for information about fonts and creating text primitives with bounds based on the font being used To render text with automatically determined envelopes use textLineBounded textLineBoundedIO textVisualBounded or textVisualBoundedIO Many of these functions take Style R2 parameter determining the style to apply to the text before rendering querying information about the text These Style R2 parameters can be created variety of ways but the most direct will likely be by applying style-transforming functions such as font fontSize fontSlant and fontWeight to mempty This works because there are instances of HasStyle and Monoid for Style",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "Text",
          "package": "diagrams-cairo",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient data structure for the results of a font-extents query.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "FontExtents",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Text.html#FontExtents",
          "type": "data"
        },
        "index": {
          "description": "more convenient data structure for the results of font-extents query",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "FontExtents",
          "package": "diagrams-cairo",
          "partial": "Font Extents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#t:FontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient data structure for the results of a text-extents query.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "TextExtents",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Text.html#TextExtents",
          "type": "data"
        },
        "index": {
          "description": "more convenient data structure for the results of text-extents query",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "TextExtents",
          "package": "diagrams-cairo",
          "partial": "Text Extents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#t:TextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "FontExtents",
          "package": "diagrams-cairo",
          "signature": "FontExtents Double Double Double R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#FontExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "FontExtents",
          "package": "diagrams-cairo",
          "partial": "Font Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:FontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "TextExtents",
          "package": "diagrams-cairo",
          "signature": "TextExtents R2 R2 R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#TextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "TextExtents",
          "package": "diagrams-cairo",
          "partial": "Text Extents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:TextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "advance",
          "package": "diagrams-cairo",
          "signature": "Lens' TextExtents R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#advance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "advance",
          "package": "diagrams-cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:advance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "ascent",
          "package": "diagrams-cairo",
          "signature": "Lens' FontExtents Double",
          "source": "src/Diagrams-Backend-Cairo-Text.html#ascent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "ascent",
          "package": "diagrams-cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:ascent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "bearing",
          "package": "diagrams-cairo",
          "signature": "Lens' TextExtents R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#bearing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "bearing",
          "package": "diagrams-cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:bearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the given cairo action, with styling applied.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "cairoWithStyle",
          "package": "diagrams-cairo",
          "signature": "Render a -\u003e Style R2 -\u003e Render a",
          "source": "src/Diagrams-Backend-Cairo-Text.html#cairoWithStyle",
          "type": "function"
        },
        "index": {
          "description": "Executes the given cairo action with styling applied",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "cairoWithStyle",
          "normalized": "Render a-\u003eStyle R-\u003eRender a",
          "package": "diagrams-cairo",
          "partial": "With Style",
          "signature": "Render a-\u003eStyle R-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:cairoWithStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "descent",
          "package": "diagrams-cairo",
          "signature": "Lens' FontExtents Double",
          "source": "src/Diagrams-Backend-Cairo-Text.html#descent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "descent",
          "package": "diagrams-cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:descent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets both the \u003ccode\u003e\u003ca\u003eFontExtents\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTextExtents\u003c/a\u003e\u003c/code\u003e of the string with the a\n   particular style applied.  This is more efficient than calling both\n   \u003ccode\u003e\u003ca\u003egetFontExtents\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetTextExtents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getExtents",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e Render (FontExtents, TextExtents)",
          "source": "src/Diagrams-Backend-Cairo-Text.html#getExtents",
          "type": "function"
        },
        "index": {
          "description": "Gets both the FontExtents and TextExtents of the string with the particular style applied This is more efficient than calling both getFontExtents and getTextExtents",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getExtents",
          "normalized": "Style R-\u003eString-\u003eRender(FontExtents,TextExtents)",
          "package": "diagrams-cairo",
          "partial": "Extents",
          "signature": "Style R-\u003eString-\u003eRender(FontExtents,TextExtents)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:getExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the intrinsic extents of a font.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getFontExtents",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e Render FontExtents",
          "source": "src/Diagrams-Backend-Cairo-Text.html#getFontExtents",
          "type": "function"
        },
        "index": {
          "description": "Gets the intrinsic extents of font",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getFontExtents",
          "normalized": "Style R-\u003eRender FontExtents",
          "package": "diagrams-cairo",
          "partial": "Font Extents",
          "signature": "Style R-\u003eRender FontExtents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:getFontExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the extents of a string of text, given a style to render it with.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getTextExtents",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e Render TextExtents",
          "source": "src/Diagrams-Backend-Cairo-Text.html#getTextExtents",
          "type": "function"
        },
        "index": {
          "description": "Get the extents of string of text given style to render it with",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "getTextExtents",
          "normalized": "Style R-\u003eString-\u003eRender TextExtents",
          "package": "diagrams-cairo",
          "partial": "Text Extents",
          "signature": "Style R-\u003eString-\u003eRender TextExtents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:getTextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "height",
          "package": "diagrams-cairo",
          "signature": "Lens' FontExtents Double",
          "source": "src/Diagrams-Backend-Cairo-Text.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "height",
          "package": "diagrams-cairo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the amount of horizontal offset that needs to be applied\n   in order to position the second character properly, in the event\n   that it is \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e-ed \u003ccode\u003e\u003ca\u003ebaselineText\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ekerningCorrectionIO\u003c/a\u003e\u003c/code\u003e;\n   this variant uses \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e but should be fairly safe in\n   practice.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "kerningCorrection",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e Char -\u003e Char -\u003e Double",
          "source": "src/Diagrams-Backend-Cairo-Text.html#kerningCorrection",
          "type": "function"
        },
        "index": {
          "description": "Queries the amount of horizontal offset that needs to be applied in order to position the second character properly in the event that it is hcat ed baselineText See kerningCorrectionIO this variant uses unsafePerformIO but should be fairly safe in practice",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "kerningCorrection",
          "normalized": "Style R-\u003eChar-\u003eChar-\u003eDouble",
          "package": "diagrams-cairo",
          "partial": "Correction",
          "signature": "Style R-\u003eChar-\u003eChar-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:kerningCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the amount of horizontal offset that needs to be applied in order to\n   position the second character properly, in the event that it is \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e-ed\n   \u003ccode\u003e\u003ca\u003ebaselineText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "kerningCorrectionIO",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e Char -\u003e Char -\u003e IO Double",
          "source": "src/Diagrams-Backend-Cairo-Text.html#kerningCorrectionIO",
          "type": "function"
        },
        "index": {
          "description": "Queries the amount of horizontal offset that needs to be applied in order to position the second character properly in the event that it is hcat ed baselineText",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "kerningCorrectionIO",
          "normalized": "Style R-\u003eChar-\u003eChar-\u003eIO Double",
          "package": "diagrams-cairo",
          "partial": "Correction IO",
          "signature": "Style R-\u003eChar-\u003eChar-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:kerningCorrectionIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "maxAdvance",
          "package": "diagrams-cairo",
          "signature": "Lens' FontExtents R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#maxAdvance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "maxAdvance",
          "package": "diagrams-cairo",
          "partial": "Advance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:maxAdvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a cairo action on a dummy, zero-size image surface, in order to\n   query things like font information.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "queryCairo",
          "package": "diagrams-cairo",
          "signature": "Render a -\u003e IO a",
          "source": "src/Diagrams-Backend-Cairo-Text.html#queryCairo",
          "type": "function"
        },
        "index": {
          "description": "Executes cairo action on dummy zero-size image surface in order to query things like font information",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "queryCairo",
          "normalized": "Render a-\u003eIO a",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "signature": "Render a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:queryCairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates text diagrams with their envelopes set such that using\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e . map (\u003ccode\u003e\u003ca\u003etextLineBounded\u003c/a\u003e\u003c/code\u003e style)\u003c/code\u003e stacks them in the way\n   that the font designer intended. See \u003ccode\u003e\u003ca\u003etextLineBoundedIO\u003c/a\u003e\u003c/code\u003e; this\n   variant uses \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e but should be fairly safe in\n   practice.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textLineBounded",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e Diagram Cairo R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#textLineBounded",
          "type": "function"
        },
        "index": {
          "description": "Creates text diagrams with their envelopes set such that using vcat map textLineBounded style stacks them in the way that the font designer intended See textLineBoundedIO this variant uses unsafePerformIO but should be fairly safe in practice",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textLineBounded",
          "normalized": "Style R-\u003eString-\u003eDiagram Cairo R",
          "package": "diagrams-cairo",
          "partial": "Line Bounded",
          "signature": "Style R-\u003eString-\u003eDiagram Cairo R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:textLineBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates text diagrams with their envelopes set such that using\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e . map (\u003ccode\u003e\u003ca\u003etextLineBounded\u003c/a\u003e\u003c/code\u003e style)\u003c/code\u003e stacks them in the way that\n   the font designer intended.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textLineBoundedIO",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e IO (Diagram Cairo R2)",
          "source": "src/Diagrams-Backend-Cairo-Text.html#textLineBoundedIO",
          "type": "function"
        },
        "index": {
          "description": "Creates text diagrams with their envelopes set such that using vcat map textLineBounded style stacks them in the way that the font designer intended",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textLineBoundedIO",
          "normalized": "Style R-\u003eString-\u003eIO(Diagram Cairo R)",
          "package": "diagrams-cairo",
          "partial": "Line Bounded IO",
          "signature": "Style R-\u003eString-\u003eIO(Diagram Cairo R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:textLineBoundedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textSize",
          "package": "diagrams-cairo",
          "signature": "Lens' TextExtents R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#textSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textSize",
          "package": "diagrams-cairo",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:textSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a text diagram with its envelope set to enclose the\n   glyphs of the text, including leading (though not trailing)\n   whitespace. See \u003ccode\u003e\u003ca\u003etextVisualBoundedIO\u003c/a\u003e\u003c/code\u003e; this variant uses\n   \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e but should be fairly safe in practice.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textVisualBounded",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e Diagram Cairo R2",
          "source": "src/Diagrams-Backend-Cairo-Text.html#textVisualBounded",
          "type": "function"
        },
        "index": {
          "description": "Creates text diagram with its envelope set to enclose the glyphs of the text including leading though not trailing whitespace See textVisualBoundedIO this variant uses unsafePerformIO but should be fairly safe in practice",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textVisualBounded",
          "normalized": "Style R-\u003eString-\u003eDiagram Cairo R",
          "package": "diagrams-cairo",
          "partial": "Visual Bounded",
          "signature": "Style R-\u003eString-\u003eDiagram Cairo R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:textVisualBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a text diagram with its envelope set to enclose the glyphs of the text,\n   including leading (though not trailing) whitespace.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textVisualBoundedIO",
          "package": "diagrams-cairo",
          "signature": "Style R2 -\u003e String -\u003e IO (Diagram Cairo R2)",
          "source": "src/Diagrams-Backend-Cairo-Text.html#textVisualBoundedIO",
          "type": "function"
        },
        "index": {
          "description": "Creates text diagram with its envelope set to enclose the glyphs of the text including leading though not trailing whitespace",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "textVisualBoundedIO",
          "normalized": "Style R-\u003eString-\u003eIO(Diagram Cairo R)",
          "package": "diagrams-cairo",
          "partial": "Visual Bounded IO",
          "signature": "Style R-\u003eString-\u003eIO(Diagram Cairo R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:textVisualBoundedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely invokes \u003ccode\u003e\u003ca\u003equeryCairo\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "unsafeCairo",
          "package": "diagrams-cairo",
          "signature": "Render a -\u003e a",
          "source": "src/Diagrams-Backend-Cairo-Text.html#unsafeCairo",
          "type": "function"
        },
        "index": {
          "description": "Unsafely invokes queryCairo using unsafePerformIO",
          "hierarchy": "Diagrams Backend Cairo Text",
          "module": "Diagrams.Backend.Cairo.Text",
          "name": "unsafeCairo",
          "normalized": "Render a-\u003ea",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "signature": "Render a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo-Text.html#v:unsafeCairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA full-featured rendering backend for diagrams using the\n cairo rendering engine.\n\u003c/p\u003e\u003cp\u003eTo invoke the cairo backend, you have three options.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You can use the \u003ca\u003eDiagrams.Backend.Cairo.CmdLine\u003c/a\u003e module to create\n   standalone executables which output images when invoked.\n\u003c/li\u003e\u003cli\u003e You can use the \u003ccode\u003e\u003ca\u003erenderCairo\u003c/a\u003e\u003c/code\u003e function provided by this module,\n   which gives you more flexible programmatic control over when and\n   how images are output (making it easy to, for example, write a\n   single program that outputs multiple images, or one that outputs\n   images dynamically based on user input, and so on).\n\u003c/li\u003e\u003cli\u003e Finally, for the most flexibility, you can directly\n   use methods from the\n   \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eCairo\u003c/code\u003e.  In particular,\n   \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e has the generic type\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e renderDia :: b -\u003e Options b v -\u003e QDiagram b v m -\u003e Result b v\n\u003c/pre\u003e\u003cp\u003e(omitting a few type class constraints).  \u003ccode\u003eb\u003c/code\u003e represents the\n backend type, \u003ccode\u003ev\u003c/code\u003e the vector space, and \u003ccode\u003em\u003c/code\u003e the type of monoidal\n query annotations on the diagram.  \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e are\n associated data and type families, respectively, which yield the\n type of option records and rendering results specific to any\n particular backend.  For \u003ccode\u003eb ~ Cairo\u003c/code\u003e and \u003ccode\u003ev ~ R2\u003c/code\u003e, we have\n\u003c/p\u003e\u003cpre\u003e data family Options Cairo R2 = CairoOptions\n          { _cairoFileName     :: String     -- ^ The name of the file you want generated\n          , _cairoSizeSpec     :: SizeSpec2D -- ^ The requested size of the output\n          , _cairoOutputType   :: OutputType -- ^ the output format and associated options\n          , _cairoBypassAdjust :: Bool       -- ^ Should the 'adjustDia' step be bypassed during rendering?\n          }\n\u003c/pre\u003e\u003cpre\u003e\n type family Result Cairo R2 = (IO (), \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e ())\n\u003c/pre\u003e\u003cp\u003eSo the type of \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e resolves to\n\u003c/p\u003e\u003cpre\u003e\n renderDia :: Cairo -\u003e Options Cairo R2 -\u003e QDiagram Cairo R2 m -\u003e (IO (), \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e ())\n\u003c/pre\u003e\u003cp\u003ewhich you could call like so:\n\u003c/p\u003e\u003cpre\u003e\n renderDia Cairo (CairoOptions \"foo.png\" (Width 250) PNG False) (myDiagram :: Diagram Cairo R2)\n\u003c/pre\u003e\u003cp\u003eThis would return a pair; the first element is an \u003ccode\u003eIO ()\u003c/code\u003e action\n which will write out \u003ccode\u003efoo.png\u003c/code\u003e to disk, and the second is a cairo\n rendering action which can be used, for example, to directly draw\n to a Gtk window.  Note the type annotation on \u003ccode\u003emyDiagram\u003c/code\u003e which may\n be necessary to fix the type variable \u003ccode\u003em\u003c/code\u003e; this example uses the\n type synonym \u003ccode\u003eDiagram b v = QDiagram b v Any\u003c/code\u003e to fix \u003ccode\u003em = Any\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Cairo",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo.html",
          "type": "module"
        },
        "index": {
          "description": "full-featured rendering backend for diagrams using the cairo rendering engine To invoke the cairo backend you have three options You can use the Diagrams.Backend.Cairo.CmdLine module to create standalone executables which output images when invoked You can use the renderCairo function provided by this module which gives you more flexible programmatic control over when and how images are output making it easy to for example write single program that outputs multiple images or one that outputs images dynamically based on user input and so on Finally for the most flexibility you can directly use methods from the Backend instance for Cairo In particular renderDia has the generic type renderDia Options QDiagram Result omitting few type class constraints represents the backend type the vector space and the type of monoidal query annotations on the diagram Options and Result are associated data and type families respectively which yield the type of option records and rendering results specific to any particular backend For Cairo and R2 we have data family Options Cairo R2 CairoOptions cairoFileName String The name of the file you want generated cairoSizeSpec SizeSpec2D The requested size of the output cairoOutputType OutputType the output format and associated options cairoBypassAdjust Bool Should the adjustDia step be bypassed during rendering type family Result Cairo R2 IO Render So the type of renderDia resolves to renderDia Cairo Options Cairo R2 QDiagram Cairo R2 IO Render which you could call like so renderDia Cairo CairoOptions foo.png Width PNG False myDiagram Diagram Cairo R2 This would return pair the first element is an IO action which will write out foo.png to disk and the second is cairo rendering action which can be used for example to directly draw to Gtk window Note the type annotation on myDiagram which may be necessary to fix the type variable this example uses the type synonym Diagram QDiagram Any to fix Any",
          "hierarchy": "Diagrams Backend Cairo",
          "module": "Diagrams.Backend.Cairo",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Cairo",
          "name": "B",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#B",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Cairo",
          "module": "Diagrams.Backend.Cairo",
          "name": "B",
          "package": "diagrams-cairo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish\n   the cairo backend: (1) when calling functions where the type\n   inference engine would otherwise have no way to know which\n   backend you wanted to use, and (2) as an argument to the\n   \u003ccode\u003e\u003ca\u003eBackend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRenderable\u003c/a\u003e\u003c/code\u003e type classes.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#Cairo",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish the cairo backend when calling functions where the type inference engine would otherwise have no way to know which backend you wanted to use and as an argument to the Backend and Renderable type classes",
          "hierarchy": "Diagrams Backend Cairo",
          "module": "Diagrams.Backend.Cairo",
          "name": "Cairo",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#t:Cairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput types supported by cairo, including four different file\n   types (PNG, PS, PDF, SVG).  If you want to output directly to GTK\n   windows, see the \u003ccode\u003ediagrams-gtk\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo",
          "name": "OutputType",
          "package": "diagrams-cairo",
          "source": "src/Diagrams-Backend-Cairo-Internal.html#OutputType",
          "type": "data"
        },
        "index": {
          "description": "Output types supported by cairo including four different file types PNG PS PDF SVG If you want to output directly to GTK windows see the diagrams-gtk package",
          "hierarchy": "Diagrams Backend Cairo",
          "module": "Diagrams.Backend.Cairo",
          "name": "OutputType",
          "package": "diagrams-cairo",
          "partial": "Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#t:OutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a diagram using the cairo backend, writing to the given\n   output file and using the requested size.  The output type (PNG,\n   PS, PDF, or SVG) is determined automatically from the output file\n   extension.\n\u003c/p\u003e\u003cp\u003eThis function is provided as a convenience; if you need more\n   flexibility than it provides, you can call \u003ccode\u003e\u003ca\u003erenderDia\u003c/a\u003e\u003c/code\u003e directly,\n   as described above.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Cairo",
          "name": "renderCairo",
          "package": "diagrams-cairo",
          "signature": "FilePath -\u003e SizeSpec2D -\u003e Diagram Cairo R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Cairo.html#renderCairo",
          "type": "function"
        },
        "index": {
          "description": "Render diagram using the cairo backend writing to the given output file and using the requested size The output type PNG PS PDF or SVG is determined automatically from the output file extension This function is provided as convenience if you need more flexibility than it provides you can call renderDia directly as described above",
          "hierarchy": "Diagrams Backend Cairo",
          "module": "Diagrams.Backend.Cairo",
          "name": "renderCairo",
          "normalized": "FilePath-\u003eSizeSpec D-\u003eDiagram Cairo R-\u003eIO()",
          "package": "diagrams-cairo",
          "partial": "Cairo",
          "signature": "FilePath-\u003eSizeSpec D-\u003eDiagram Cairo R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-cairo/docs/Diagrams-Backend-Cairo.html#v:renderCairo"
      }
    }
  ]
]