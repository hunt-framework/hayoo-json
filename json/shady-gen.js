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
        "word": "shady-gen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eName supply monad.  Non-abstract synonym for \u003ccode\u003eState [String]\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NameM",
          "name": "NameM",
          "package": "shady-gen",
          "source": "src/Data-NameM.html",
          "type": "module"
        },
        "index": {
          "description": "Name supply monad Non-abstract synonym for State String",
          "hierarchy": "Data NameM",
          "module": "Data.NameM",
          "name": "NameM",
          "package": "shady-gen",
          "partial": "Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-NameM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NameM",
          "name": "NameM",
          "package": "shady-gen",
          "source": "src/Data-NameM.html#NameM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data NameM",
          "module": "Data.NameM",
          "name": "NameM",
          "package": "shady-gen",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-NameM.html#t:NameM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NameM",
          "name": "allNames",
          "package": "shady-gen",
          "signature": "[String]",
          "source": "src/Data-NameM.html#allNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NameM",
          "module": "Data.NameM",
          "name": "allNames",
          "normalized": "[String]",
          "package": "shady-gen",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-NameM.html#v:allNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NameM",
          "name": "genName",
          "package": "shady-gen",
          "signature": "State [x] x",
          "source": "src/Data-NameM.html#genName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NameM",
          "module": "Data.NameM",
          "name": "genName",
          "normalized": "State[a]a",
          "package": "shady-gen",
          "partial": "Name",
          "signature": "State[x]x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-NameM.html#v:genName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NameM",
          "name": "runNameM",
          "package": "shady-gen",
          "signature": "NameM a -\u003e a",
          "source": "src/Data-NameM.html#runNameM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NameM",
          "module": "Data.NameM",
          "name": "runNameM",
          "normalized": "NameM a-\u003ea",
          "package": "shady-gen",
          "partial": "Name",
          "signature": "NameM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-NameM.html#v:runNameM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePolymorphic memoization based using stable names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PolyStableMemo",
          "name": "PolyStableMemo",
          "package": "shady-gen",
          "source": "src/Data-PolyStableMemo.html",
          "type": "module"
        },
        "index": {
          "description": "Polymorphic memoization based using stable names",
          "hierarchy": "Data PolyStableMemo",
          "module": "Data.PolyStableMemo",
          "name": "PolyStableMemo",
          "package": "shady-gen",
          "partial": "Poly Stable Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-PolyStableMemo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PolyStableMemo",
          "name": ":--\u003e",
          "package": "shady-gen",
          "source": "src/Data-PolyStableMemo.html#%3A--%3E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data PolyStableMemo",
          "module": "Data.PolyStableMemo",
          "name": ":--\u003e",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-PolyStableMemo.html#t::-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer-based memoization.  Evaluates keys to WHNF to improve hit rate.\n\u003c/p\u003e",
          "module": "Data.PolyStableMemo",
          "name": "memo",
          "package": "shady-gen",
          "signature": "(k :--\u003e v) -\u003e k :--\u003e v",
          "source": "src/Data-PolyStableMemo.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Pointer-based memoization Evaluates keys to WHNF to improve hit rate",
          "hierarchy": "Data PolyStableMemo",
          "module": "Data.PolyStableMemo",
          "name": "memo",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "shady-gen",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-PolyStableMemo.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMemoization based using stable names.  WHNFs keys.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StableMemo",
          "name": "StableMemo",
          "package": "shady-gen",
          "source": "src/Data-StableMemo.html",
          "type": "module"
        },
        "index": {
          "description": "Memoization based using stable names WHNFs keys",
          "hierarchy": "Data StableMemo",
          "module": "Data.StableMemo",
          "name": "StableMemo",
          "package": "shady-gen",
          "partial": "Stable Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-StableMemo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer-based memoization.  Evaluates keys to WHNF to improve hit rate.\n\u003c/p\u003e",
          "module": "Data.StableMemo",
          "name": "memo",
          "package": "shady-gen",
          "signature": "(k -\u003e v) -\u003e k -\u003e v",
          "source": "src/Data-StableMemo.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Pointer-based memoization Evaluates keys to WHNF to improve hit rate",
          "hierarchy": "Data StableMemo",
          "module": "Data.StableMemo",
          "name": "memo",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "shady-gen",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-StableMemo.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoized binary function\n\u003c/p\u003e",
          "module": "Data.StableMemo",
          "name": "memo2",
          "package": "shady-gen",
          "signature": "(k -\u003e l -\u003e v) -\u003e k -\u003e l -\u003e v",
          "source": "src/Data-StableMemo.html#memo2",
          "type": "function"
        },
        "index": {
          "description": "Memoized binary function",
          "hierarchy": "Data StableMemo",
          "module": "Data.StableMemo",
          "name": "memo2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "shady-gen",
          "signature": "(k-\u003el-\u003ev)-\u003ek-\u003el-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-StableMemo.html#v:memo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoized ternary function\n\u003c/p\u003e",
          "module": "Data.StableMemo",
          "name": "memo3",
          "package": "shady-gen",
          "signature": "(k -\u003e l -\u003e m -\u003e v) -\u003e k -\u003e l -\u003e m -\u003e v",
          "source": "src/Data-StableMemo.html#memo3",
          "type": "function"
        },
        "index": {
          "description": "Memoized ternary function",
          "hierarchy": "Data StableMemo",
          "module": "Data.StableMemo",
          "name": "memo3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "shady-gen",
          "signature": "(k-\u003el-\u003em-\u003ev)-\u003ek-\u003el-\u003em-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Data-StableMemo.html#v:memo3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate and compile vertex and fragment shaders.\n\u003c/p\u003e\u003cp\u003eIn this version, shader programs are represented by functions function\n a single expression to a single expression.  See also CompileEs, which\n allows functions between more flexible representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.CompileE",
          "name": "CompileE",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html",
          "type": "module"
        },
        "index": {
          "description": "Generate and compile vertex and fragment shaders In this version shader programs are represented by functions function single expression to single expression See also CompileEs which allows functions between more flexible representations",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "CompileE",
          "package": "shady-gen",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor building vertex/fragment shader pairs.  The idea is that a\n complete parameterized shader program has type \u003ccode\u003eu :=\u003e a :- v :--\u003e o\u003c/code\u003e,\n which expands to \u003ccode\u003eu :=\u003e (a :-^\u003e v, v :-* o)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eu == uniform, a == (vertex) attribute, v == varying, o == fragment output.\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eo == ()\u003c/code\u003e (color-only output), use the short-hand \u003ccode\u003eu :=\u003e a :-\u003e v\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGeneral vertex/fragment shader pair.\n\u003c/p\u003e",
          "module": "Shady.CompileE",
          "name": ":-\u003e",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "For building vertex fragment shader pairs The idea is that complete parameterized shader program has type which expands to uniform vertex attribute varying fragment output When color-only output use the short-hand General vertex fragment shader pair",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": ":-\u003e",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGLSL vertex program, fragment program, uniform and vertex attribute.\n\u003c/p\u003e",
          "module": "Shady.CompileE",
          "name": "GLSL",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#GLSL",
          "type": "data"
        },
        "index": {
          "description": "GLSL vertex program fragment program uniform and vertex attribute",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "GLSL",
          "package": "shady-gen",
          "partial": "GLSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#t:GLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor gl_Position\n\u003c/p\u003e",
          "module": "Shady.CompileE",
          "name": "Pos",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#Pos",
          "type": "type"
        },
        "index": {
          "description": "For gl Position",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "Pos",
          "package": "shady-gen",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertex/fragment pair with no extra output besides color\n\u003c/p\u003e",
          "module": "Shady.CompileE",
          "name": "ShaderVF",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#ShaderVF",
          "type": "type"
        },
        "index": {
          "description": "Vertex fragment pair with no extra output besides color",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "ShaderVF",
          "package": "shady-gen",
          "partial": "Shader VF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#t:ShaderVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.CompileE",
          "name": "GLSL",
          "package": "shady-gen",
          "signature": "GLSL String String (Pat u) (Pat a)",
          "source": "src/Shady-CompileE.html#GLSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "GLSL",
          "package": "shady-gen",
          "partial": "GLSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#v:GLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.CompileE",
          "name": "ShaderVF",
          "package": "shady-gen",
          "signature": "ShaderVF (a :-^ v) (v :-* o)",
          "source": "src/Shady-CompileE.html#%3A-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "ShaderVF",
          "package": "shady-gen",
          "partial": "Shader VF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#v:ShaderVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a parameterized shader program.  TODO: generalize to non-()\n outputs, i.e., to \u003ccode\u003eu :=\u003e a :-\u003e o\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shady.CompileE",
          "name": "shaderProgram",
          "package": "shady-gen",
          "signature": "ShaderVF a) -\u003e GLSL u a",
          "source": "src/Shady-CompileE.html#shaderProgram",
          "type": "function"
        },
        "index": {
          "description": "Compile parameterized shader program TODO generalize to non outputs i.e to",
          "hierarchy": "Shady CompileE",
          "module": "Shady.CompileE",
          "name": "shaderProgram",
          "normalized": "ShaderVF a)-\u003eGLSL b a",
          "package": "shady-gen",
          "partial": "Program",
          "signature": "ShaderVF a)-\u003eGLSL u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileE.html#v:shaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate and compile vertex and fragment shaders.  Unlike\n \u003ca\u003eShady.CompileE\u003c/a\u003e, this version allows a looser structure to\n the inputs & outputs of shaders, according to \u003ccode\u003e\u003ca\u003eFromE\u003c/a\u003e\u003c/code\u003e.  You can use\n the types and \u003ccode\u003ecompile\u003c/code\u003e in this module, or just \u003ccode\u003e\u003ca\u003eshaders\u003c/a\u003e\u003c/code\u003e, along with\n \u003ca\u003eShady.CompileE\u003c/a\u003e, e.g., \u003ccode\u003ecompile (shaders sh)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.CompileEs",
          "name": "CompileEs",
          "package": "shady-gen",
          "source": "src/Shady-CompileEs.html",
          "type": "module"
        },
        "index": {
          "description": "Generate and compile vertex and fragment shaders Unlike Shady.CompileE this version allows looser structure to the inputs outputs of shaders according to FromE You can use the types and compile in this module or just shaders along with Shady.CompileE e.g compile shaders sh",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "CompileEs",
          "package": "shady-gen",
          "partial": "Compile Es",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral vertex/fragment shader pair.\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": ":-\u003e",
          "package": "shady-gen",
          "source": "src/Shady-CompileEs.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "General vertex fragment shader pair",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": ":-\u003e",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGLSL vertex program, fragment program, uniform and vertex attribute.\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": "GLSL",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#GLSL",
          "type": "data"
        },
        "index": {
          "description": "GLSL vertex program fragment program uniform and vertex attribute",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "GLSL",
          "package": "shady-gen",
          "partial": "GLSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#t:GLSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor gl_Position\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": "Pos",
          "package": "shady-gen",
          "source": "src/Shady-CompileE.html#Pos",
          "type": "type"
        },
        "index": {
          "description": "For gl Position",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "Pos",
          "package": "shady-gen",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertex/fragment pair with no extra output besides color\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": "ShaderVF",
          "package": "shady-gen",
          "source": "src/Shady-CompileEs.html#ShaderVF",
          "type": "type"
        },
        "index": {
          "description": "Vertex fragment pair with no extra output besides color",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "ShaderVF",
          "package": "shady-gen",
          "partial": "Shader VF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#t:ShaderVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.CompileEs",
          "name": "ShaderVF",
          "package": "shady-gen",
          "signature": "ShaderVF (a' :-^ v') (v' :-* o')",
          "source": "src/Shady-CompileEs.html#%3A-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "ShaderVF",
          "package": "shady-gen",
          "partial": "Shader VF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#v:ShaderVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a parameterized shader program.  TODO: generalize to non-()\n outputs, i.e., to \u003ccode\u003eu :=\u003e a :-\u003e o\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": "shaderProgram",
          "package": "shady-gen",
          "signature": "(u' -\u003e ShaderVF a') -\u003e GLSL u a",
          "source": "src/Shady-CompileEs.html#shaderProgram",
          "type": "function"
        },
        "index": {
          "description": "Compile parameterized shader program TODO generalize to non outputs i.e to",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "shaderProgram",
          "normalized": "(a-\u003eShaderVF b)-\u003eGLSL c d",
          "package": "shady-gen",
          "partial": "Program",
          "signature": "(u'-\u003eShaderVF a')-\u003eGLSL u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#v:shaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert loosely structured shaders into single-exp shader\n\u003c/p\u003e",
          "module": "Shady.CompileEs",
          "name": "shaders",
          "package": "shady-gen",
          "signature": "(a :-\u003e o)",
          "source": "src/Shady-CompileEs.html#shaders",
          "type": "function"
        },
        "index": {
          "description": "Convert loosely structured shaders into single-exp shader",
          "hierarchy": "Shady CompileEs",
          "module": "Shady.CompileEs",
          "name": "shaders",
          "normalized": "(a-\u003eb)",
          "package": "shady-gen",
          "signature": "(a-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-CompileEs.html#v:shaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComplex numbers.  This version is modified from Data.Complex in base.\n It eliminates the RealFloat requirement by using a more naive\n definition of \u003ccode\u003e\u003ca\u003emagnitude\u003c/a\u003e\u003c/code\u003e.  Also, defines instances for vector-space classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Complex",
          "name": "Complex",
          "package": "shady-gen",
          "source": "src/Shady-Complex.html",
          "type": "module"
        },
        "index": {
          "description": "Complex numbers This version is modified from Data.Complex in base It eliminates the RealFloat requirement by using more naive definition of magnitude Also defines instances for vector-space classes",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "Complex",
          "package": "shady-gen",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "Complex",
          "package": "shady-gen",
          "source": "src/Shady-Complex.html#Complex",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "Complex",
          "package": "shady-gen",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": ":+",
          "package": "shady-gen",
          "signature": "a :+ !a",
          "source": "src/Shady-Complex.html#Complex",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its real and imaginary rectangular components",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": ":+",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v::-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "cis",
          "package": "shady-gen",
          "signature": "a -\u003e Complex a",
          "source": "src/Shady-Complex.html#cis",
          "type": "function"
        },
        "index": {
          "description": "cis is complex value with magnitude and phase modulo pi",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "cis",
          "normalized": "a-\u003eComplex a",
          "package": "shady-gen",
          "signature": "a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "conjugate",
          "package": "shady-gen",
          "signature": "Unop (Complex a)",
          "source": "src/Shady-Complex.html#conjugate",
          "type": "function"
        },
        "index": {
          "description": "The conjugate of complex number",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "conjugate",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "imagPart",
          "package": "shady-gen",
          "signature": "Complex a -\u003e a",
          "source": "src/Shady-Complex.html#imagPart",
          "type": "function"
        },
        "index": {
          "description": "Extracts the imaginary part of complex number",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "imagPart",
          "normalized": "Complex a-\u003ea",
          "package": "shady-gen",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "mkPolar",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e Complex a",
          "source": "src/Shady-Complex.html#mkPolar",
          "type": "function"
        },
        "index": {
          "description": "Form complex number from polar components of magnitude and phase",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "mkPolar",
          "normalized": "a-\u003ea-\u003eComplex a",
          "package": "shady-gen",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperate on the real & imaginary components\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "onRI",
          "package": "shady-gen",
          "signature": "Unop a -\u003e Unop (Complex a)",
          "source": "src/Shady-Complex.html#onRI",
          "type": "function"
        },
        "index": {
          "description": "Operate on the real imaginary components",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "onRI",
          "normalized": "Unop a-\u003eUnop(Complex a)",
          "package": "shady-gen",
          "partial": "RI",
          "signature": "Unop a-\u003eUnop(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:onRI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperate on the real & imaginary components\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "onRI2",
          "package": "shady-gen",
          "signature": "Binop a -\u003e Binop (Complex a)",
          "source": "src/Shady-Complex.html#onRI2",
          "type": "function"
        },
        "index": {
          "description": "Operate on the real imaginary components",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "onRI2",
          "normalized": "Binop a-\u003eBinop(Complex a)",
          "package": "shady-gen",
          "partial": "RI",
          "signature": "Binop a-\u003eBinop(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:onRI2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "phase",
          "package": "shady-gen",
          "signature": "Complex a -\u003e a",
          "source": "src/Shady-Complex.html#phase",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "phase",
          "normalized": "Complex a-\u003ea",
          "package": "shady-gen",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "polar",
          "package": "shady-gen",
          "signature": "Complex a -\u003e (a, a)",
          "source": "src/Shady-Complex.html#polar",
          "type": "function"
        },
        "index": {
          "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "polar",
          "normalized": "Complex a-\u003e(a,a)",
          "package": "shady-gen",
          "signature": "Complex a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
          "module": "Shady.Complex",
          "name": "realPart",
          "package": "shady-gen",
          "signature": "Complex a -\u003e a",
          "source": "src/Shady-Complex.html#realPart",
          "type": "function"
        },
        "index": {
          "description": "Extracts the real part of complex number",
          "hierarchy": "Shady Complex",
          "module": "Shady.Complex",
          "name": "realPart",
          "normalized": "Complex a-\u003ea",
          "package": "shady-gen",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Complex.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon subexpression elimination.\n\u003c/p\u003e\u003cp\u003eTODO: Improve variable names (now \"x8\" etc).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Cse",
          "name": "Cse",
          "package": "shady-gen",
          "source": "src/Shady-Language-Cse.html",
          "type": "module"
        },
        "index": {
          "description": "Common subexpression elimination TODO Improve variable names now x8 etc",
          "hierarchy": "Shady Language Cse",
          "module": "Shady.Language.Cse",
          "name": "Cse",
          "package": "shady-gen",
          "partial": "Cse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Cse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon subexpression elimination.  Use with care, since it breaks\n referential transparency on the \u003cem\u003erepresentation\u003c/em\u003e of expressions, but\n not on their meaning.\n\u003c/p\u003e",
          "module": "Shady.Language.Cse",
          "name": "cse",
          "package": "shady-gen",
          "signature": "E a -\u003e E a",
          "source": "src/Shady-Language-Cse.html#cse",
          "type": "function"
        },
        "index": {
          "description": "Common subexpression elimination Use with care since it breaks referential transparency on the representation of expressions but not on their meaning",
          "hierarchy": "Shady Language Cse",
          "module": "Shady.Language.Cse",
          "name": "cse",
          "normalized": "E a-\u003eE a",
          "package": "shady-gen",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Cse.html#v:cse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExpressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Exp",
          "name": "Exp",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html",
          "type": "module"
        },
        "index": {
          "description": "Expressions",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Exp",
          "package": "shady-gen",
          "partial": "Exp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction from expressions.  Nestable.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": ":=\u003e",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#%3A%3D%3E",
          "type": "type"
        },
        "index": {
          "description": "Function from expressions Nestable",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": ":=\u003e",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression to expression.  Ends a chain of '(:=\u003e)'\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": ":=\u003e*",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#%3A%3D%3E%2A",
          "type": "type"
        },
        "index": {
          "description": "Expression to expression Ends chain of",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": ":=\u003e*",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t::-61--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "BoolE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#BoolE",
          "type": "type"
        },
        "index": {
          "description": "Bool",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "BoolE",
          "package": "shady-gen",
          "partial": "Bool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:BoolE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex-valued expressions\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "ComplexE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#ComplexE",
          "type": "type"
        },
        "index": {
          "description": "Complex-valued expressions",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "ComplexE",
          "package": "shady-gen",
          "partial": "Complex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:ComplexE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple expressions (no \u003ccode\u003eLet\u003c/code\u003e).  Statically typed.\n Constructors for operator/constant (\u003ccode\u003e\u003ca\u003eOp\u003c/a\u003e\u003c/code\u003e), variable (\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e),\n application ('(:^)'), and abstraction (\u003ccode\u003e\u003ca\u003eLam\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "E",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#E",
          "type": "data"
        },
        "index": {
          "description": "Simple expressions no Let Statically typed Constructors for operator constant Op variable Var application and abstraction Lam",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "E",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "FloatE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#FloatE",
          "type": "type"
        },
        "index": {
          "description": "Float expression",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "FloatE",
          "package": "shady-gen",
          "partial": "Float",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:FloatE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue convertible from an expression\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "FromE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#FromE",
          "type": "class"
        },
        "index": {
          "description": "Value convertible from an expression",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "FromE",
          "package": "shady-gen",
          "partial": "From",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:FromE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable name\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "Id",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Variable name",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Id",
          "package": "shady-gen",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable patterns\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "Pat",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#Pat",
          "type": "type"
        },
        "index": {
          "description": "Variable patterns",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Pat",
          "package": "shady-gen",
          "partial": "Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "R1E",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#R1E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "R1E",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:R1E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "R2E",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#R2E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "R2E",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:R2E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "R3E",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#R3E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "R3E",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:R3E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "R4E",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#R4E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "R4E",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:R4E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "SamplerE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#SamplerE",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "SamplerE",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:SamplerE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType path\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "TPath",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#TPath",
          "type": "data"
        },
        "index": {
          "description": "Type path",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "TPath",
          "package": "shady-gen",
          "partial": "TPath",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:TPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue convertible to an expression\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "ToE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#ToE",
          "type": "class"
        },
        "index": {
          "description": "Value convertible to an expression",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "ToE",
          "package": "shady-gen",
          "partial": "To",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:ToE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped variables\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "V",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#V",
          "type": "data"
        },
        "index": {
          "description": "Typed variables",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "V",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression vector\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "VecE",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#VecE",
          "type": "type"
        },
        "index": {
          "description": "Expression vector",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "VecE",
          "package": "shady-gen",
          "partial": "Vec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#t:VecE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector inequality, resulting in a single Bool.   See also '(/=*)'.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "(/=^)",
          "package": "shady-gen",
          "signature": "* B1)",
          "source": "src/Shady-Language-Exp.html#%2F%3D%5E",
          "type": "function"
        },
        "index": {
          "description": "Vector inequality resulting in single Bool See also",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "(/=^) /=^",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:-47--61--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of vectors\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "(\u003c+\u003e)",
          "package": "shady-gen",
          "signature": "* Vec (m :+: n) a)",
          "source": "src/Shady-Language-Exp.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of vectors",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector equality, resulting in a single Bool.  See also '(==*)'.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "(==^)",
          "package": "shady-gen",
          "signature": "* B1)",
          "source": "src/Shady-Language-Exp.html#%3D%3D%5E",
          "type": "function"
        },
        "index": {
          "description": "Vector equality resulting in single Bool See also",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "(==^) ==^",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:-61--61--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": ":^",
          "package": "shady-gen",
          "signature": "E (a -\u003e b) -\u003e E a -\u003e E b",
          "source": "src/Shady-Language-Exp.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": ":^",
          "normalized": "E(a-\u003eb)-\u003eE a-\u003eE b",
          "package": "shady-gen",
          "signature": "E(a-\u003eb)-\u003eE a-\u003eE b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v::-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "Lam",
          "package": "shady-gen",
          "signature": "V a -\u003e E b -\u003e E (a -\u003e b)",
          "source": "src/Shady-Language-Exp.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Lam",
          "normalized": "V a-\u003eE b-\u003eE(a-\u003eb)",
          "package": "shady-gen",
          "partial": "Lam",
          "signature": "V a-\u003eE b-\u003eE(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:Lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "Op",
          "package": "shady-gen",
          "signature": "Op a -\u003e E a",
          "source": "src/Shady-Language-Exp.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Op",
          "normalized": "Op a-\u003eE a",
          "package": "shady-gen",
          "partial": "Op",
          "signature": "Op a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "V",
          "package": "shady-gen",
          "signature": "V",
          "source": "src/Shady-Language-Exp.html#V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "V",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "Var",
          "package": "shady-gen",
          "signature": "V a -\u003e E a",
          "source": "src/Shady-Language-Exp.html#E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "Var",
          "normalized": "V a-\u003eE a",
          "package": "shady-gen",
          "partial": "Var",
          "signature": "V a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre all of the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es true?\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "allV",
          "package": "shady-gen",
          "signature": "* B1",
          "source": "src/Shady-Language-Exp.html#allV",
          "type": "function"
        },
        "index": {
          "description": "Are all of the Bool true",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "allV",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:allV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs all of the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es true?\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "anyV",
          "package": "shady-gen",
          "signature": "* B1",
          "source": "src/Shady-Language-Exp.html#anyV",
          "type": "function"
        },
        "index": {
          "description": "Is all of the Bool true",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "anyV",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:anyV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "ceilingE",
          "package": "shady-gen",
          "signature": "* Vec n R",
          "source": "src/Shady-Language-Exp.html#ceilingE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "ceilingE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:ceilingE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty type path\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "emptyP",
          "package": "shady-gen",
          "signature": "TPath",
          "source": "src/Shady-Language-Exp.html#emptyP",
          "type": "function"
        },
        "index": {
          "description": "Empty type path",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "emptyP",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:emptyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "floorE",
          "package": "shady-gen",
          "signature": "* Vec n R",
          "source": "src/Shady-Language-Exp.html#floorE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "floorE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:floorE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a unary operator, with constant-folding and simplifications\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "fmapE",
          "package": "shady-gen",
          "signature": "* b",
          "source": "src/Shady-Language-Exp.html#fmapE",
          "type": "function"
        },
        "index": {
          "description": "Apply unary operator with constant-folding and simplifications",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "fmapE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:fmapE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "fromE",
          "package": "shady-gen",
          "signature": "E (ExpT w) -\u003e w",
          "source": "src/Shady-Language-Exp.html#fromE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "fromE",
          "normalized": "E(ExpT a)-\u003ea",
          "package": "shady-gen",
          "signature": "E(ExpT w)-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:fromE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression-lifted \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "fstE",
          "package": "shady-gen",
          "signature": "E (a, b) -\u003e E a",
          "source": "src/Shady-Language-Exp.html#fstE",
          "type": "function"
        },
        "index": {
          "description": "Expression-lifted fst",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "fstE",
          "normalized": "E(a,b)-\u003eE a",
          "package": "shady-gen",
          "signature": "E(a,b)-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:fstE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "fstP",
          "package": "shady-gen",
          "signature": "TPath -\u003e TPath",
          "source": "src/Shady-Language-Exp.html#fstP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "fstP",
          "normalized": "TPath-\u003eTPath",
          "package": "shady-gen",
          "signature": "TPath-\u003eTPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:fstP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "genVar",
          "package": "shady-gen",
          "signature": "NameM (V a)",
          "source": "src/Shady-Language-Exp.html#genVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "genVar",
          "package": "shady-gen",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:genVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract vector component\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "get",
          "package": "shady-gen",
          "signature": "* One a",
          "source": "src/Shady-Language-Exp.html#get",
          "type": "function"
        },
        "index": {
          "description": "Extract vector component",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "get",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract W component\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "getW",
          "package": "shady-gen",
          "signature": "* One a",
          "source": "src/Shady-Language-Exp.html#getW",
          "type": "function"
        },
        "index": {
          "description": "Extract component",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "getW",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:getW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract X component\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "getX",
          "package": "shady-gen",
          "signature": "* One a",
          "source": "src/Shady-Language-Exp.html#getX",
          "type": "function"
        },
        "index": {
          "description": "Extract component",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "getX",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:getX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract Y component\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "getY",
          "package": "shady-gen",
          "signature": "* One a",
          "source": "src/Shady-Language-Exp.html#getY",
          "type": "function"
        },
        "index": {
          "description": "Extract component",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "getY",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:getY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract Z component\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "getZ",
          "package": "shady-gen",
          "signature": "* One a",
          "source": "src/Shady-Language-Exp.html#getZ",
          "type": "function"
        },
        "index": {
          "description": "Extract component",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "getZ",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:getZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for beta-redex\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "letE",
          "package": "shady-gen",
          "signature": "V a -\u003e E a -\u003e E b -\u003e E b",
          "source": "src/Shady-Language-Exp.html#letE",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for beta-redex",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "letE",
          "normalized": "V a-\u003eE a-\u003eE b-\u003eE b",
          "package": "shady-gen",
          "signature": "V a-\u003eE a-\u003eE b-\u003eE b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:letE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a binary operator, with constant-folding and simplifications\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "liftE2",
          "package": "shady-gen",
          "signature": "* c)",
          "source": "src/Shady-Language-Exp.html#liftE2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary operator with constant-folding and simplifications",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "liftE2",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:liftE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a ternary operator, with constant-folding and simplifications\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "liftE3",
          "package": "shady-gen",
          "signature": "* d))",
          "source": "src/Shady-Language-Exp.html#liftE3",
          "type": "function"
        },
        "index": {
          "description": "Apply ternary operator with constant-folding and simplifications",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "liftE3",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:liftE3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an quaternary operator, with constant-folding and simplifications\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "liftE4",
          "package": "shady-gen",
          "signature": "* e)))",
          "source": "src/Shady-Language-Exp.html#liftE4",
          "type": "function"
        },
        "index": {
          "description": "Apply an quaternary operator with constant-folding and simplifications",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "liftE4",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:liftE4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral value\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "lit",
          "package": "shady-gen",
          "signature": "a -\u003e E a",
          "source": "src/Shady-Language-Exp.html#lit",
          "type": "function"
        },
        "index": {
          "description": "Literal value",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "lit",
          "normalized": "a-\u003eE a",
          "package": "shady-gen",
          "signature": "a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAugment a variable name with a type path\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "namePath",
          "package": "shady-gen",
          "signature": "String -\u003e TPath -\u003e String",
          "source": "src/Shady-Language-Exp.html#namePath",
          "type": "function"
        },
        "index": {
          "description": "Augment variable name with type path",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "namePath",
          "normalized": "String-\u003eTPath-\u003eString",
          "package": "shady-gen",
          "partial": "Path",
          "signature": "String-\u003eTPath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:namePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransitional synonym for notB\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "notE",
          "package": "shady-gen",
          "signature": "* Vec n Bool",
          "source": "src/Shady-Language-Exp.html#notE",
          "type": "function"
        },
        "index": {
          "description": "Transitional synonym for notB",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "notE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:notE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient operator application\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "op1",
          "package": "shady-gen",
          "signature": "* b",
          "source": "src/Shady-Language-Exp.html#op1",
          "type": "function"
        },
        "index": {
          "description": "Convenient operator application",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "op1",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:op1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient operator application\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "op2",
          "package": "shady-gen",
          "signature": "* c)",
          "source": "src/Shady-Language-Exp.html#op2",
          "type": "function"
        },
        "index": {
          "description": "Convenient operator application",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "op2",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:op2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient operator application\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "op3",
          "package": "shady-gen",
          "signature": "* d))",
          "source": "src/Shady-Language-Exp.html#op3",
          "type": "function"
        },
        "index": {
          "description": "Convenient operator application",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "op3",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:op3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient operator application\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "op4",
          "package": "shady-gen",
          "signature": "* e)))",
          "source": "src/Shady-Language-Exp.html#op4",
          "type": "function"
        },
        "index": {
          "description": "Convenient operator application",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "op4",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:op4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression-lifted '(,)'\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "pairE",
          "package": "shady-gen",
          "signature": "E a -\u003e E b -\u003e E (a, b)",
          "source": "src/Shady-Language-Exp.html#pairE",
          "type": "function"
        },
        "index": {
          "description": "Expression-lifted",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "pairE",
          "normalized": "E a-\u003eE b-\u003eE(a,b)",
          "package": "shady-gen",
          "signature": "E a-\u003eE b-\u003eE(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:pairE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a variable pattern, inferring the type from context.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "pat",
          "package": "shady-gen",
          "signature": "String -\u003e Pat a",
          "source": "src/Shady-Language-Exp.html#pat",
          "type": "function"
        },
        "index": {
          "description": "Make variable pattern inferring the type from context",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "pat",
          "normalized": "String-\u003ePat a",
          "package": "shady-gen",
          "signature": "String-\u003ePat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a pattern into an expression.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "patE",
          "package": "shady-gen",
          "signature": "Pat a -\u003e E a",
          "source": "src/Shady-Language-Exp.html#patE",
          "type": "function"
        },
        "index": {
          "description": "Turn pattern into an expression",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "patE",
          "normalized": "Pat a-\u003eE a",
          "package": "shady-gen",
          "signature": "Pat a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:patE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a pattern\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "patT",
          "package": "shady-gen",
          "signature": "Pat a -\u003e Type a",
          "source": "src/Shady-Language-Exp.html#patT",
          "type": "function"
        },
        "index": {
          "description": "The type of pattern",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "patT",
          "normalized": "Pat a-\u003eType a",
          "package": "shady-gen",
          "signature": "Pat a-\u003eType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:patT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral expression\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "pureE",
          "package": "shady-gen",
          "signature": "a -\u003e E a",
          "source": "src/Shady-Language-Exp.html#pureE",
          "type": "function"
        },
        "index": {
          "description": "Literal expression",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "pureE",
          "normalized": "a-\u003eE a",
          "package": "shady-gen",
          "signature": "a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:pureE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "roundE",
          "package": "shady-gen",
          "signature": "* Vec n R",
          "source": "src/Shady-Language-Exp.html#roundE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "roundE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:roundE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression-lifted \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "sndE",
          "package": "shady-gen",
          "signature": "E (a, b) -\u003e E b",
          "source": "src/Shady-Language-Exp.html#sndE",
          "type": "function"
        },
        "index": {
          "description": "Expression-lifted snd",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "sndE",
          "normalized": "E(a,b)-\u003eE b",
          "package": "shady-gen",
          "signature": "E(a,b)-\u003eE b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:sndE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a type path\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "sndP",
          "package": "shady-gen",
          "signature": "TPath -\u003e TPath",
          "source": "src/Shady-Language-Exp.html#sndP",
          "type": "function"
        },
        "index": {
          "description": "Extend type path",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "sndP",
          "normalized": "TPath-\u003eTPath",
          "package": "shady-gen",
          "signature": "TPath-\u003eTPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:sndP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTexturing\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "texture",
          "package": "shady-gen",
          "signature": "* R4)",
          "source": "src/Shady-Language-Exp.html#texture",
          "type": "function"
        },
        "index": {
          "description": "Texturing",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "texture",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an expression, using fresh name supply\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "toE",
          "package": "shady-gen",
          "signature": "w -\u003e E (ExpT w)",
          "source": "src/Shady-Language-Exp.html#toE",
          "type": "function"
        },
        "index": {
          "description": "Convert to an expression using fresh name supply",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "toE",
          "normalized": "a-\u003eE(ExpT a)",
          "package": "shady-gen",
          "signature": "w-\u003eE(ExpT w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:toE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "toEN",
          "package": "shady-gen",
          "signature": "w -\u003e NameM (E (ExpT w))",
          "source": "src/Shady-Language-Exp.html#toEN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "toEN",
          "normalized": "a-\u003eNameM(E(ExpT a))",
          "package": "shady-gen",
          "partial": "EN",
          "signature": "w-\u003eNameM(E(ExpT w))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:toEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eE\u003c/a\u003e\u003c/code\u003e transformer from an \u003ccode\u003e\u003ca\u003eExpT\u003c/a\u003e\u003c/code\u003e transformer\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "toFromE",
          "package": "shady-gen",
          "signature": "(v -\u003e w) -\u003e E (ExpT v) -\u003e E (ExpT w)",
          "source": "src/Shady-Language-Exp.html#toFromE",
          "type": "function"
        },
        "index": {
          "description": "Construct an transformer from an ExpT transformer",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "toFromE",
          "normalized": "(a-\u003eb)-\u003eE(ExpT a)-\u003eE(ExpT b)",
          "package": "shady-gen",
          "partial": "From",
          "signature": "(v-\u003ew)-\u003eE(ExpT v)-\u003eE(ExpT w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:toFromE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "truncateE",
          "package": "shady-gen",
          "signature": "* Vec n R",
          "source": "src/Shady-Language-Exp.html#truncateE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "truncateE",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:truncateE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "un2",
          "package": "shady-gen",
          "signature": "(E (One a), E (One a))",
          "source": "src/Shady-Language-Exp.html#un2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "un2",
          "normalized": "(E(One a),E(One a))",
          "package": "shady-gen",
          "signature": "(E(One a),E(One a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:un2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "un3",
          "package": "shady-gen",
          "signature": "(E (One a), E (One a), E (One a))",
          "source": "src/Shady-Language-Exp.html#un3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "un3",
          "normalized": "(E(One a),E(One a),E(One a))",
          "package": "shady-gen",
          "signature": "(E(One a),E(One a),E(One a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:un3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "un4",
          "package": "shady-gen",
          "signature": "(E (One a), E (One a), E (One a), E (One a))",
          "source": "src/Shady-Language-Exp.html#un4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "un4",
          "normalized": "(E(One a),E(One a),E(One a),E(One a))",
          "package": "shady-gen",
          "signature": "(E(One a),E(One a),E(One a),E(One a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:un4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a pair\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "unPairE",
          "package": "shady-gen",
          "signature": "E (a, b) -\u003e (E a, E b)",
          "source": "src/Shady-Language-Exp.html#unPairE",
          "type": "function"
        },
        "index": {
          "description": "Unpack pair",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "unPairE",
          "normalized": "E(a,b)-\u003e(E a,E b)",
          "package": "shady-gen",
          "partial": "Pair",
          "signature": "E(a,b)-\u003e(E a,E b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:unPairE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform version of a function on vectors\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "uniform",
          "package": "shady-gen",
          "signature": "(E (Vec n a) -\u003e b) -\u003e E (One a) -\u003e b",
          "source": "src/Shady-Language-Exp.html#uniform",
          "type": "function"
        },
        "index": {
          "description": "Uniform version of function on vectors",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "uniform",
          "normalized": "(E(Vec a b)-\u003ec)-\u003eE(One b)-\u003ec",
          "package": "shady-gen",
          "signature": "(E(Vec n a)-\u003eb)-\u003eE(One a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform vector\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "uniformV",
          "package": "shady-gen",
          "signature": "* Vec n a",
          "source": "src/Shady-Language-Exp.html#uniformV",
          "type": "function"
        },
        "index": {
          "description": "Uniform vector",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "uniformV",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:uniformV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression-lifted '()'\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "unitE",
          "package": "shady-gen",
          "signature": "E ()",
          "source": "src/Shady-Language-Exp.html#unitE",
          "type": "function"
        },
        "index": {
          "description": "Expression-lifted",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "unitE",
          "normalized": "E()",
          "package": "shady-gen",
          "signature": "E()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:unitE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a variable, inferring the type from context.\n\u003c/p\u003e",
          "module": "Shady.Language.Exp",
          "name": "var",
          "package": "shady-gen",
          "signature": "Id -\u003e V a",
          "source": "src/Shady-Language-Exp.html#var",
          "type": "function"
        },
        "index": {
          "description": "Make variable inferring the type from context",
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "var",
          "normalized": "Id-\u003eV a",
          "package": "shady-gen",
          "signature": "Id-\u003eV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "varName",
          "package": "shady-gen",
          "signature": "Id",
          "source": "src/Shady-Language-Exp.html#V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "varName",
          "package": "shady-gen",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:varName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "varType",
          "package": "shady-gen",
          "signature": "Type a",
          "source": "src/Shady-Language-Exp.html#V",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "varType",
          "package": "shady-gen",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:varType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "vec2",
          "package": "shady-gen",
          "signature": "* Two a)",
          "source": "src/Shady-Language-Exp.html#vec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "vec2",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "vec3",
          "package": "shady-gen",
          "signature": "* Three a))",
          "source": "src/Shady-Language-Exp.html#vec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "vec3",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Exp",
          "name": "vec4",
          "package": "shady-gen",
          "signature": "* Four a)))",
          "source": "src/Shady-Language-Exp.html#vec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Exp",
          "module": "Shady.Language.Exp",
          "name": "vec4",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Exp.html#v:vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract syntax for GLSL.  Evolving.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.GLSL",
          "name": "GLSL",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract syntax for GLSL Evolving",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "GLSL",
          "package": "shady-gen",
          "partial": "GLSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable binding\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Bind",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Bind",
          "type": "data"
        },
        "index": {
          "description": "Variable binding",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Bind",
          "package": "shady-gen",
          "partial": "Bind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding with open (exposed) type.  Build with '(=::)' and '(#)'.\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "BindO",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#BindO",
          "type": "data"
        },
        "index": {
          "description": "Binding with open exposed type Build with and",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "BindO",
          "package": "shady-gen",
          "partial": "Bind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:BindO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable declaration/initialization.\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Declaration",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Declaration",
          "type": "data"
        },
        "index": {
          "description": "Variable declaration initialization",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Declaration",
          "package": "shady-gen",
          "partial": "Declaration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Declaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level definition\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Definition",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Definition",
          "type": "data"
        },
        "index": {
          "description": "Top-level definition",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Definition",
          "package": "shady-gen",
          "partial": "Definition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Definition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable name\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Id",
          "package": "shady-gen",
          "source": "src/Shady-Language-Exp.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Variable name",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Id",
          "package": "shady-gen",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformal parameter\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Param",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Param",
          "type": "data"
        },
        "index": {
          "description": "formal parameter",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Param",
          "package": "shady-gen",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram: Vertex shader and Fragment shader\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Program",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Program",
          "type": "data"
        },
        "index": {
          "description": "Program Vertex shader and Fragment shader",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Program",
          "package": "shady-gen",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStorage qualifier\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Qualifier",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Qualifier",
          "type": "data"
        },
        "index": {
          "description": "Storage qualifier",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Qualifier",
          "package": "shady-gen",
          "partial": "Qualifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Qualifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "ScalarT",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#ScalarT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "ScalarT",
          "package": "shady-gen",
          "partial": "Scalar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:ScalarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShader\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Shader",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Shader",
          "type": "data"
        },
        "index": {
          "description": "Shader",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Shader",
          "package": "shady-gen",
          "partial": "Shader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Shader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "Statement",
          "package": "shady-gen",
          "source": "src/Shady-Language-GLSL.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "Statement",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Statement",
          "package": "shady-gen",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "VectorT",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#VectorT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "VectorT",
          "package": "shady-gen",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#t:VectorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssignment statement\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "(=:)",
          "package": "shady-gen",
          "signature": "Pat a -\u003e E a -\u003e Statement",
          "source": "src/Shady-Language-GLSL.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Assignment statement",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "(=:) =:",
          "normalized": "Pat a-\u003eE a-\u003eStatement",
          "package": "shady-gen",
          "signature": "Pat a-\u003eE a-\u003eStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e specialization of '(=:)'.\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "(=::)",
          "package": "shady-gen",
          "signature": "V a -\u003e E a -\u003e BindO a",
          "source": "src/Shady-Language-GLSL.html#%3D%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "specialization of",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "(=::) =::",
          "normalized": "V a-\u003eE a-\u003eBindO a",
          "package": "shady-gen",
          "signature": "V a-\u003eE a-\u003eBindO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:-61-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "Assign",
          "package": "shady-gen",
          "signature": "Assign Bind",
          "source": "src/Shady-Language-GLSL.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Assign",
          "package": "shady-gen",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "Attribute",
          "package": "shady-gen",
          "signature": "Attribute",
          "source": "src/Shady-Language-GLSL.html#Qualifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Attribute",
          "package": "shady-gen",
          "partial": "Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "B",
          "package": "shady-gen",
          "signature": "forall a . B (Pat a) (E a)",
          "source": "src/Shady-Language-GLSL.html#Bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "B",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shady.Language.GLSL\",\"Shady.Language.Type\"]",
          "name": "Bool",
          "package": "shady-gen",
          "signature": "ScalarT Bool",
          "source": "src/Shady-Language-Type.html#ScalarT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Bool\",\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:Bool\"]"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Bool",
          "package": "shady-gen",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "D",
          "package": "shady-gen",
          "signature": "forall a . D [Qualifier] (Pat a)",
          "source": "src/Shady-Language-GLSL.html#Declaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "D",
          "normalized": "a b D[Qualifier](Pat b)",
          "package": "shady-gen",
          "signature": "forall a D[Qualifier](Pat a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "F",
          "package": "shady-gen",
          "signature": "forall n a . F (Maybe (VectorT n a)) Id [Param] Statement",
          "source": "src/Shady-Language-GLSL.html#Definition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "F",
          "normalized": "a b c F(Maybe(VectorT b c))Id[Param]Statement",
          "package": "shady-gen",
          "signature": "forall n a F(Maybe(VectorT n a))Id[Param]Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shady.Language.GLSL\",\"Shady.Language.Type\"]",
          "name": "Float",
          "package": "shady-gen",
          "signature": "ScalarT Float",
          "source": "src/Shady-Language-Type.html#ScalarT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Float\",\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:Float\"]"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Float",
          "package": "shady-gen",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shady.Language.GLSL\",\"Shady.Language.Type\"]",
          "name": "Int",
          "package": "shady-gen",
          "signature": "ScalarT Int",
          "source": "src/Shady-Language-Type.html#ScalarT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Int\",\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:Int\"]"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Int",
          "package": "shady-gen",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "LetS",
          "package": "shady-gen",
          "signature": "LetS Bind Statement",
          "source": "src/Shady-Language-GLSL.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "LetS",
          "package": "shady-gen",
          "partial": "Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:LetS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "M",
          "package": "shady-gen",
          "signature": "forall n a . M (VectorT n a) Id",
          "source": "src/Shady-Language-GLSL.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "M",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "P",
          "package": "shady-gen",
          "signature": "P",
          "source": "src/Shady-Language-GLSL.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "P",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "Sh",
          "package": "shady-gen",
          "signature": "Sh [Declaration] [Definition]",
          "source": "src/Shady-Language-GLSL.html#Shader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Sh",
          "normalized": "Sh[Declaration][Definition]",
          "package": "shady-gen",
          "partial": "Sh",
          "signature": "Sh[Declaration][Definition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "SkipS",
          "package": "shady-gen",
          "signature": "SkipS",
          "source": "src/Shady-Language-GLSL.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "SkipS",
          "package": "shady-gen",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:SkipS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "ThenS",
          "package": "shady-gen",
          "signature": "ThenS Statement Statement",
          "source": "src/Shady-Language-GLSL.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "ThenS",
          "package": "shady-gen",
          "partial": "Then",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:ThenS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "Uniform",
          "package": "shady-gen",
          "signature": "Uniform",
          "source": "src/Shady-Language-GLSL.html#Qualifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Uniform",
          "package": "shady-gen",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "Varying",
          "package": "shady-gen",
          "signature": "Varying",
          "source": "src/Shady-Language-GLSL.html#Qualifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "Varying",
          "package": "shady-gen",
          "partial": "Varying",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:Varying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shady.Language.GLSL\",\"Shady.Language.Type\"]",
          "name": "VectorT",
          "package": "shady-gen",
          "signature": "VectorT (Nat n) (ScalarT a)",
          "source": "src/Shady-Language-Type.html#VectorT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:VectorT\",\"http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:VectorT\"]"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "VectorT",
          "package": "shady-gen",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:VectorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open binding\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "closeB",
          "package": "shady-gen",
          "signature": "BindO a -\u003e Statement",
          "source": "src/Shady-Language-GLSL.html#closeB",
          "type": "function"
        },
        "index": {
          "description": "Close an open binding",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "closeB",
          "normalized": "BindO a-\u003eStatement",
          "package": "shady-gen",
          "signature": "BindO a-\u003eStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:closeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard gl_FragColor variable, which must be set in a fragment shader\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "glFragColor",
          "package": "shady-gen",
          "signature": "Pat R4",
          "source": "src/Shady-Language-GLSL.html#glFragColor",
          "type": "function"
        },
        "index": {
          "description": "The standard gl FragColor variable which must be set in fragment shader",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "glFragColor",
          "package": "shady-gen",
          "partial": "Frag Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:glFragColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard gl_Position variable, which must be set in a vertex shader\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "glPosition",
          "package": "shady-gen",
          "signature": "Pat R4",
          "source": "src/Shady-Language-GLSL.html#glPosition",
          "type": "function"
        },
        "index": {
          "description": "The standard gl Position variable which must be set in vertex shader",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "glPosition",
          "package": "shady-gen",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:glPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emain\u003c/code\u003e in a shader program.\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "mainDef",
          "package": "shady-gen",
          "signature": "Statement -\u003e Definition",
          "source": "src/Shady-Language-GLSL.html#mainDef",
          "type": "function"
        },
        "index": {
          "description": "main in shader program",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "mainDef",
          "normalized": "Statement-\u003eDefinition",
          "package": "shady-gen",
          "partial": "Def",
          "signature": "Statement-\u003eDefinition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:mainDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a normal using the standard normal matrix\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "nTrans",
          "package": "shady-gen",
          "signature": "E R3 -\u003e E R3",
          "source": "src/Shady-Language-GLSL.html#nTrans",
          "type": "function"
        },
        "index": {
          "description": "Transform normal using the standard normal matrix",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "nTrans",
          "normalized": "E R-\u003eE R",
          "package": "shady-gen",
          "partial": "Trans",
          "signature": "E R-\u003eE R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:nTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "pFragment",
          "package": "shady-gen",
          "signature": "Shader",
          "source": "src/Shady-Language-GLSL.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "pFragment",
          "package": "shady-gen",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:pFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.GLSL",
          "name": "pVertex",
          "package": "shady-gen",
          "signature": "Shader",
          "source": "src/Shady-Language-GLSL.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "pVertex",
          "package": "shady-gen",
          "partial": "Vertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:pVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a vertex using the standard model/view matrix\n\u003c/p\u003e",
          "module": "Shady.Language.GLSL",
          "name": "vTrans",
          "package": "shady-gen",
          "signature": "E R4 -\u003e E R4",
          "source": "src/Shady-Language-GLSL.html#vTrans",
          "type": "function"
        },
        "index": {
          "description": "Transform vertex using the standard model view matrix",
          "hierarchy": "Shady Language GLSL",
          "module": "Shady.Language.GLSL",
          "name": "vTrans",
          "normalized": "E R-\u003eE R",
          "package": "shady-gen",
          "partial": "Trans",
          "signature": "E R-\u003eE R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-GLSL.html#v:vTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTyped conglomerate of values\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Glom",
          "name": "Glom",
          "package": "shady-gen",
          "source": "src/Shady-Language-Glom.html",
          "type": "module"
        },
        "index": {
          "description": "Typed conglomerate of values",
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "Glom",
          "package": "shady-gen",
          "partial": "Glom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a polymorphic function over a conglomerate (preserving\n structure).  The required laws are the same as with \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shady.Language.Glom",
          "name": "FunctorU",
          "package": "shady-gen",
          "source": "src/Shady-Language-Glom.html#FunctorU",
          "type": "class"
        },
        "index": {
          "description": "Map polymorphic function over conglomerate preserving structure The required laws are the same as with Functor",
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "FunctorU",
          "package": "shady-gen",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#t:FunctorU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typed conglomerate of values\n\u003c/p\u003e",
          "module": "Shady.Language.Glom",
          "name": "Glom",
          "package": "shady-gen",
          "source": "src/Shady-Language-Glom.html#Glom",
          "type": "data"
        },
        "index": {
          "description": "typed conglomerate of values",
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "Glom",
          "package": "shady-gen",
          "partial": "Glom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#t:Glom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "MonadU",
          "package": "shady-gen",
          "source": "src/Shady-Language-Glom.html#MonadU",
          "type": "class"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "MonadU",
          "package": "shady-gen",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#t:MonadU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": ":*",
          "package": "shady-gen",
          "signature": "Glom f a -\u003e Glom f b -\u003e Glom f (a, b)",
          "source": "src/Shady-Language-Glom.html#Glom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": ":*",
          "normalized": "Glom a b-\u003eGlom a c-\u003eGlom a(b,c)",
          "package": "shady-gen",
          "signature": "Glom f a-\u003eGlom f b-\u003eGlom f(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "BaseG",
          "package": "shady-gen",
          "signature": "f a -\u003e Glom f a",
          "source": "src/Shady-Language-Glom.html#Glom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "BaseG",
          "normalized": "a b-\u003eGlom a b",
          "package": "shady-gen",
          "partial": "Base",
          "signature": "f a-\u003eGlom f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:BaseG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "UnitG",
          "package": "shady-gen",
          "signature": "Glom f ()",
          "source": "src/Shady-Language-Glom.html#Glom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "UnitG",
          "normalized": "Glom a()",
          "package": "shady-gen",
          "partial": "Unit",
          "signature": "Glom f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:UnitG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "extendU",
          "package": "shady-gen",
          "signature": "(forall a.  f a -\u003e m g a) -\u003e forall a.  m f a -\u003e m g a",
          "source": "src/Shady-Language-Glom.html#extendU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "extendU",
          "normalized": "(a b c d-\u003ee f d)-\u003ea b e c d-\u003ee f d",
          "package": "shady-gen",
          "signature": "(forall a. f a-\u003em g a)-\u003eforall a. m f a-\u003em g a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:extendU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "fmapU",
          "package": "shady-gen",
          "signature": "(forall a.  f a -\u003e g a) -\u003e forall a.  q f a -\u003e q g a",
          "source": "src/Shady-Language-Glom.html#fmapU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "fmapU",
          "normalized": "(a b c d-\u003ee d)-\u003ea b f c d-\u003ef e d",
          "package": "shady-gen",
          "signature": "(forall a. f a-\u003eg a)-\u003eforall a. q f a-\u003eq g a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:fmapU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over a \u003ccode\u003e\u003ca\u003eGlom\u003c/a\u003e\u003c/code\u003e, given handlers for '(:*)', \u003ccode\u003e\u003ca\u003eUnitG\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eBaseG\u003c/a\u003e\u003c/code\u003e,\n respectively.\n\u003c/p\u003e",
          "module": "Shady.Language.Glom",
          "name": "foldG",
          "package": "shady-gen",
          "signature": "(c -\u003e c -\u003e c) -\u003e c -\u003e (forall b.  f b -\u003e c) -\u003e Glom f a -\u003e c",
          "source": "src/Shady-Language-Glom.html#foldG",
          "type": "function"
        },
        "index": {
          "description": "Fold over Glom given handlers for UnitG and BaseG respectively",
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "foldG",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b c d e-\u003ea)-\u003eGlom d f-\u003ea",
          "package": "shady-gen",
          "signature": "(c-\u003ec-\u003ec)-\u003ec-\u003e(forall b. f b-\u003ec)-\u003eGlom f a-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:foldG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative/monadic map over a \u003ccode\u003e\u003ca\u003eGlom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shady.Language.Glom",
          "name": "mapAG",
          "package": "shady-gen",
          "signature": "(forall a.  f a -\u003e m (g a)) -\u003e forall a.  Glom f a -\u003e m (Glom g a)",
          "source": "src/Shady-Language-Glom.html#mapAG",
          "type": "function"
        },
        "index": {
          "description": "Applicative monadic map over Glom",
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "mapAG",
          "normalized": "(a b c d-\u003ee(f d))-\u003ea b Glom c d-\u003ee(Glom f d)",
          "package": "shady-gen",
          "partial": "AG",
          "signature": "(forall a. f a-\u003em(g a))-\u003eforall a. Glom f a-\u003em(Glom g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:mapAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Glom",
          "name": "returnU",
          "package": "shady-gen",
          "signature": "f a -\u003e m f a",
          "source": "src/Shady-Language-Glom.html#returnU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Glom",
          "module": "Shady.Language.Glom",
          "name": "returnU",
          "normalized": "a b-\u003ec a b",
          "package": "shady-gen",
          "signature": "f a-\u003em f a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Glom.html#v:returnU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBased on a typed variant of Andy Gill's data-reify.  After several\n tries, I wasn't able to reuse data-reify or my typed variant of it.\n The problem was that I need my \u003ccode\u003e\u003ca\u003eHasType\u003c/a\u003e\u003c/code\u003e class and \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e type, but I\n couldn't parameterize data-reify by the \u003cem\u003eclass\u003c/em\u003e \u003ccode\u003e\u003ca\u003eHasType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "Based on typed variant of Andy Gill data-reify After several tries wasn able to reuse data-reify or my typed variant of it The problem was that need my HasType class and Type type but couldn parameterize data-reify by the class HasType",
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "package": "shady-gen",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding pair \n\u003c/p\u003e",
          "module": "Shady.Language.Graph",
          "name": "Bind",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html#Bind",
          "type": "data"
        },
        "index": {
          "description": "Binding pair",
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Bind",
          "package": "shady-gen",
          "partial": "Bind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#t:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraph, described by bindings and a root variable\n\u003c/p\u003e",
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "Graph described by bindings and root variable",
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "package": "shady-gen",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "N",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html#N",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "N",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode Identifiers\n\u003c/p\u003e",
          "module": "Shady.Language.Graph",
          "name": "NodeId",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html#NodeId",
          "type": "type"
        },
        "index": {
          "description": "Node Identifiers",
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "NodeId",
          "package": "shady-gen",
          "partial": "Node Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped variables\n\u003c/p\u003e",
          "module": "Shady.Language.Graph",
          "name": "Tid",
          "package": "shady-gen",
          "source": "src/Shady-Language-Graph.html#Tid",
          "type": "data"
        },
        "index": {
          "description": "Typed variables",
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Tid",
          "package": "shady-gen",
          "partial": "Tid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#t:Tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "App",
          "package": "shady-gen",
          "signature": "Tid (a -\u003e b) -\u003e Tid a -\u003e N b",
          "source": "src/Shady-Language-Graph.html#N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "App",
          "normalized": "Tid(a-\u003eb)-\u003eTid a-\u003eN b",
          "package": "shady-gen",
          "partial": "App",
          "signature": "Tid(a-\u003eb)-\u003eTid a-\u003eN b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "Bind",
          "package": "shady-gen",
          "signature": "Bind NodeId (N a)",
          "source": "src/Shady-Language-Graph.html#Bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Bind",
          "package": "shady-gen",
          "partial": "Bind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "package": "shady-gen",
          "signature": "Graph [Bind] (Tid a)",
          "source": "src/Shady-Language-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Graph",
          "normalized": "Graph[Bind](Tid a)",
          "package": "shady-gen",
          "partial": "Graph",
          "signature": "Graph[Bind](Tid a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "ON",
          "package": "shady-gen",
          "signature": "Op a -\u003e N a",
          "source": "src/Shady-Language-Graph.html#N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "ON",
          "normalized": "Op a-\u003eN a",
          "package": "shady-gen",
          "partial": "ON",
          "signature": "Op a-\u003eN a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:ON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "Tid",
          "package": "shady-gen",
          "signature": "Tid NodeId (Type a)",
          "source": "src/Shady-Language-Graph.html#Tid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "Tid",
          "package": "shady-gen",
          "partial": "Tid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:Tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "VN",
          "package": "shady-gen",
          "signature": "V a -\u003e N a",
          "source": "src/Shady-Language-Graph.html#N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "VN",
          "normalized": "V a-\u003eN a",
          "package": "shady-gen",
          "partial": "VN",
          "signature": "V a-\u003eN a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:VN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Graph",
          "name": "mapDeRef",
          "package": "shady-gen",
          "signature": "E a -\u003e m (N a)",
          "source": "src/Shady-Language-Graph.html#mapDeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Graph",
          "module": "Shady.Language.Graph",
          "name": "mapDeRef",
          "normalized": "E a-\u003eb(N a)",
          "package": "shady-gen",
          "partial": "De Ref",
          "signature": "E a-\u003em(N a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Graph.html#v:mapDeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKnown constants\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Operator",
          "name": "Operator",
          "package": "shady-gen",
          "source": "src/Shady-Language-Operator.html",
          "type": "module"
        },
        "index": {
          "description": "Known constants",
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Operator",
          "package": "shady-gen",
          "partial": "Operator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Op",
          "package": "shady-gen",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Op",
          "package": "shady-gen",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "OpInfo",
          "package": "shady-gen",
          "source": "src/Shady-Language-Operator.html#OpInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "OpInfo",
          "package": "shady-gen",
          "partial": "Op Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#t:OpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Abs",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Abs",
          "package": "shady-gen",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Acos",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Acos",
          "package": "shady-gen",
          "partial": "Acos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Acosh",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Acosh",
          "package": "shady-gen",
          "partial": "Acosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Add",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Add",
          "package": "shady-gen",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "AllV",
          "package": "shady-gen",
          "signature": "Op (Vec n Bool -\u003e B1)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "AllV",
          "normalized": "Op(Vec a Bool-\u003eB)",
          "package": "shady-gen",
          "partial": "All",
          "signature": "Op(Vec n Bool-\u003eB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:AllV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "And",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n Bool))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "And",
          "package": "shady-gen",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "AnyV",
          "package": "shady-gen",
          "signature": "Op (Vec n Bool -\u003e B1)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "AnyV",
          "normalized": "Op(Vec a Bool-\u003eB)",
          "package": "shady-gen",
          "partial": "Any",
          "signature": "Op(Vec n Bool-\u003eB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:AnyV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Asin",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Asin",
          "package": "shady-gen",
          "partial": "Asin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Asinh",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Asinh",
          "package": "shady-gen",
          "partial": "Asinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Atan",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Atan",
          "package": "shady-gen",
          "partial": "Atan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Atanh",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Atanh",
          "package": "shady-gen",
          "partial": "Atanh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Cat",
          "package": "shady-gen",
          "signature": "Nat m -\u003e Nat n -\u003e VectorT (m :+: n) a -\u003e Op (Vec m a -\u003e Vec n a -\u003e Vec (m :+: n) a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Cat",
          "normalized": "Nat a-\u003eNat b-\u003eVectorT(a b)c-\u003eOp(Vec a c-\u003eVec b c-\u003eVec(a b)c)",
          "package": "shady-gen",
          "partial": "Cat",
          "signature": "Nat m-\u003eNat n-\u003eVectorT(m n)a-\u003eOp(Vec m a-\u003eVec n a-\u003eVec(m n)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Ceiling",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n R))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Ceiling",
          "package": "shady-gen",
          "partial": "Ceiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Cos",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Cos",
          "package": "shady-gen",
          "partial": "Cos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Cosh",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Cosh",
          "package": "shady-gen",
          "partial": "Cosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Div",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Div",
          "package": "shady-gen",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Divide",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Divide",
          "package": "shady-gen",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Dot",
          "package": "shady-gen",
          "signature": "Op (Vec n R -\u003e Vec n R -\u003e R1)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Dot",
          "normalized": "Op(Vec a R-\u003eVec a R-\u003eR)",
          "package": "shady-gen",
          "partial": "Dot",
          "signature": "Op(Vec n R-\u003eVec n R-\u003eR)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Equal",
          "package": "shady-gen",
          "signature": "Op (Pred2 (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Equal",
          "package": "shady-gen",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "EqualV",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Op (Vec n a -\u003e Vec n a -\u003e Vec n Bool)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "EqualV",
          "normalized": "Nat a-\u003eOp(Vec a b-\u003eVec a b-\u003eVec a Bool)",
          "package": "shady-gen",
          "partial": "Equal",
          "signature": "Nat n-\u003eOp(Vec n a-\u003eVec n a-\u003eVec n Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:EqualV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Exp",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Exp",
          "package": "shady-gen",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "FMod",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "FMod",
          "package": "shady-gen",
          "partial": "FMod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:FMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Floor",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n R))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Floor",
          "package": "shady-gen",
          "partial": "Floor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Fst",
          "package": "shady-gen",
          "signature": "Op ((a, b) -\u003e a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Fst",
          "normalized": "Op((a,b)-\u003ea)",
          "package": "shady-gen",
          "partial": "Fst",
          "signature": "Op((a,b)-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "If",
          "package": "shady-gen",
          "signature": "Op (B1 -\u003e Binop a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "If",
          "normalized": "Op(B-\u003eBinop a)",
          "package": "shady-gen",
          "partial": "If",
          "signature": "Op(B-\u003eBinop a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Le",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Op (Vec n a -\u003e Vec n a -\u003e Vec n Bool)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Le",
          "normalized": "Nat a-\u003eOp(Vec a b-\u003eVec a b-\u003eVec a Bool)",
          "package": "shady-gen",
          "partial": "Le",
          "signature": "Nat n-\u003eOp(Vec n a-\u003eVec n a-\u003eVec n Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Lit",
          "package": "shady-gen",
          "signature": "a -\u003e Op a",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Lit",
          "normalized": "a-\u003eOp a",
          "package": "shady-gen",
          "partial": "Lit",
          "signature": "a-\u003eOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Log",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Log",
          "package": "shady-gen",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Lt",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Op (Vec n a -\u003e Vec n a -\u003e Vec n Bool)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Lt",
          "normalized": "Nat a-\u003eOp(Vec a b-\u003eVec a b-\u003eVec a Bool)",
          "package": "shady-gen",
          "partial": "Lt",
          "signature": "Nat n-\u003eOp(Vec n a-\u003eVec n a-\u003eVec n Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Max",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Max",
          "package": "shady-gen",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Min",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Min",
          "package": "shady-gen",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Mod",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Mod",
          "package": "shady-gen",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Mul",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Mul",
          "package": "shady-gen",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Negate",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Negate",
          "package": "shady-gen",
          "partial": "Negate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Not",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n Bool))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Not",
          "package": "shady-gen",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "OpInfo",
          "package": "shady-gen",
          "signature": "OpInfo",
          "source": "src/Shady-Language-Operator.html#OpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "OpInfo",
          "package": "shady-gen",
          "partial": "Op Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:OpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Or",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n Bool))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Or",
          "package": "shady-gen",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Pair",
          "package": "shady-gen",
          "signature": "Op (a -\u003e b -\u003e (a, b))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Pair",
          "normalized": "Op(a-\u003eb-\u003e(a,b))",
          "package": "shady-gen",
          "partial": "Pair",
          "signature": "Op(a-\u003eb-\u003e(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Quot",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Quot",
          "package": "shady-gen",
          "partial": "Quot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Recip",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Recip",
          "package": "shady-gen",
          "partial": "Recip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Rem",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Rem",
          "package": "shady-gen",
          "partial": "Rem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Round",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n R))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Round",
          "package": "shady-gen",
          "partial": "Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Scale",
          "package": "shady-gen",
          "signature": "Op (One a -\u003e Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Scale",
          "normalized": "Op(One a-\u003eUnop(Vec b a))",
          "package": "shady-gen",
          "partial": "Scale",
          "signature": "Op(One a-\u003eUnop(Vec n a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Signum",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Signum",
          "package": "shady-gen",
          "partial": "Signum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Sin",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Sin",
          "package": "shady-gen",
          "partial": "Sin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Sinh",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Sinh",
          "package": "shady-gen",
          "partial": "Sinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Snd",
          "package": "shady-gen",
          "signature": "Op ((a, b) -\u003e b)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Snd",
          "normalized": "Op((a,b)-\u003eb)",
          "package": "shady-gen",
          "partial": "Snd",
          "signature": "Op((a,b)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Sqrt",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Sqrt",
          "package": "shady-gen",
          "partial": "Sqrt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Sub",
          "package": "shady-gen",
          "signature": "Op (Binop (Vec n a))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Sub",
          "package": "shady-gen",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Swizzle",
          "package": "shady-gen",
          "signature": "Vec n (Index m) -\u003e Op (Vec m a -\u003e Vec n a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Swizzle",
          "normalized": "Vec a(Index b)-\u003eOp(Vec b c-\u003eVec a c)",
          "package": "shady-gen",
          "partial": "Swizzle",
          "signature": "Vec n(Index m)-\u003eOp(Vec m a-\u003eVec n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Swizzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Texture",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Op (Sampler n -\u003e Vec n R -\u003e R4)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Texture",
          "normalized": "Nat a-\u003eOp(Sampler a-\u003eVec a R-\u003eR)",
          "package": "shady-gen",
          "partial": "Texture",
          "signature": "Nat n-\u003eOp(Sampler n-\u003eVec n R-\u003eR)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Truncate",
          "package": "shady-gen",
          "signature": "Op (Unop (Vec n R))",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Truncate",
          "package": "shady-gen",
          "partial": "Truncate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "UniformV",
          "package": "shady-gen",
          "signature": "VectorT n a -\u003e Op (One a -\u003e Vec n a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "UniformV",
          "normalized": "VectorT a b-\u003eOp(One b-\u003eVec a b)",
          "package": "shady-gen",
          "partial": "Uniform",
          "signature": "VectorT n a-\u003eOp(One a-\u003eVec n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:UniformV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "Unit",
          "package": "shady-gen",
          "signature": "Op ()",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "Unit",
          "normalized": "Op()",
          "package": "shady-gen",
          "partial": "Unit",
          "signature": "Op()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "VVec2",
          "package": "shady-gen",
          "signature": "Op (One a -\u003e One a -\u003e Two a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "VVec2",
          "normalized": "Op(One a-\u003eOne a-\u003eTwo a)",
          "package": "shady-gen",
          "partial": "VVec",
          "signature": "Op(One a-\u003eOne a-\u003eTwo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:VVec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "VVec3",
          "package": "shady-gen",
          "signature": "Op (One a -\u003e One a -\u003e One a -\u003e Three a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "VVec3",
          "normalized": "Op(One a-\u003eOne a-\u003eOne a-\u003eThree a)",
          "package": "shady-gen",
          "partial": "VVec",
          "signature": "Op(One a-\u003eOne a-\u003eOne a-\u003eThree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:VVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "VVec4",
          "package": "shady-gen",
          "signature": "Op (One a -\u003e One a -\u003e One a -\u003e One a -\u003e Four a)",
          "source": "src/Shady-Language-Operator.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "VVec4",
          "normalized": "Op(One a-\u003eOne a-\u003eOne a-\u003eOne a-\u003eFour a)",
          "package": "shady-gen",
          "partial": "VVec",
          "signature": "Op(One a-\u003eOne a-\u003eOne a-\u003eOne a-\u003eFour a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:VVec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "info",
          "package": "shady-gen",
          "signature": "Op a -\u003e OpInfo a",
          "source": "src/Shady-Language-Operator.html#info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "info",
          "normalized": "Op a-\u003eOpInfo a",
          "package": "shady-gen",
          "signature": "Op a-\u003eOpInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "oiFix",
          "package": "shady-gen",
          "signature": "Fixity",
          "source": "src/Shady-Language-Operator.html#OpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "oiFix",
          "package": "shady-gen",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:oiFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "oiName",
          "package": "shady-gen",
          "signature": "String",
          "source": "src/Shady-Language-Operator.html#OpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "oiName",
          "package": "shady-gen",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:oiName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "oiVal",
          "package": "shady-gen",
          "signature": "a",
          "source": "src/Shady-Language-Operator.html#OpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "oiVal",
          "package": "shady-gen",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:oiVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "opEq",
          "package": "shady-gen",
          "signature": "Op a -\u003e Op b -\u003e Bool",
          "source": "src/Shady-Language-Operator.html#opEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "opEq",
          "normalized": "Op a-\u003eOp b-\u003eBool",
          "package": "shady-gen",
          "partial": "Eq",
          "signature": "Op a-\u003eOp b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:opEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator application\n\u003c/p\u003e",
          "module": "Shady.Language.Operator",
          "name": "opExpr",
          "package": "shady-gen",
          "signature": "Op z -\u003e [Expr] -\u003e Expr",
          "source": "src/Shady-Language-Operator.html#opExpr",
          "type": "function"
        },
        "index": {
          "description": "Operator application",
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "opExpr",
          "normalized": "Op a-\u003e[Expr]-\u003eExpr",
          "package": "shady-gen",
          "partial": "Expr",
          "signature": "Op z-\u003e[Expr]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:opExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Operator",
          "name": "opVal",
          "package": "shady-gen",
          "signature": "Op a -\u003e a",
          "source": "src/Shady-Language-Operator.html#opVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Operator",
          "module": "Shady.Language.Operator",
          "name": "opVal",
          "normalized": "Op a-\u003ea",
          "package": "shady-gen",
          "partial": "Val",
          "signature": "Op a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Operator.html#v:opVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiscover representation sharing in expressions\n Variation on Andy Gill's Data.Reify.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Reify",
          "name": "Reify",
          "package": "shady-gen",
          "source": "src/Shady-Language-Reify.html",
          "type": "module"
        },
        "index": {
          "description": "Discover representation sharing in expressions Variation on Andy Gill Data.Reify",
          "hierarchy": "Shady Language Reify",
          "module": "Shady.Language.Reify",
          "name": "Reify",
          "package": "shady-gen",
          "partial": "Reify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Reify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereifyGraph\u003c/a\u003e\u003c/code\u003e takes a data structure that admits \u003ccode\u003eMuRef\u003c/code\u003e, and returns\n a \u003ccode\u003e\u003ca\u003eGraph\u003c/a\u003e\u003c/code\u003e that contains the dereferenced nodes, with their children as\n integers rather than recursive values.\n\u003c/p\u003e",
          "module": "Shady.Language.Reify",
          "name": "reifyGraph",
          "package": "shady-gen",
          "signature": "E a -\u003e IO (Graph a)",
          "source": "src/Shady-Language-Reify.html#reifyGraph",
          "type": "function"
        },
        "index": {
          "description": "reifyGraph takes data structure that admits MuRef and returns Graph that contains the dereferenced nodes with their children as integers rather than recursive values",
          "hierarchy": "Shady Language Reify",
          "module": "Shady.Language.Reify",
          "name": "reifyGraph",
          "normalized": "E a-\u003eIO(Graph a)",
          "package": "shady-gen",
          "partial": "Graph",
          "signature": "E a-\u003eIO(Graph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Reify.html#v:reifyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperiments with sharing recovery on GADT-based expression representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Share",
          "name": "Share",
          "package": "shady-gen",
          "source": "src/Shady-Language-Share.html",
          "type": "module"
        },
        "index": {
          "description": "Experiments with sharing recovery on GADT-based expression representations",
          "hierarchy": "Shady Language Share",
          "module": "Shady.Language.Share",
          "name": "Share",
          "package": "shady-gen",
          "partial": "Share",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Share.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Share",
          "name": "cse",
          "package": "shady-gen",
          "signature": "E a -\u003e E a",
          "source": "src/Shady-Language-Share.html#cse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Share",
          "module": "Shady.Language.Share",
          "name": "cse",
          "normalized": "E a-\u003eE a",
          "package": "shady-gen",
          "signature": "E a-\u003eE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Share.html#v:cse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Language.Type",
          "name": "Type",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Types",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Type",
          "package": "shady-gen",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyntactic alternative for pairing.  Convenient for right-associative\n infix use.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": ":#",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#%3A%23",
          "type": "type"
        },
        "index": {
          "description": "Syntactic alternative for pairing Convenient for right-associative infix use",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": ":#",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t::-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality proof\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": ":=:",
          "package": "shady-gen",
          "type": "data"
        },
        "index": {
          "description": "Type equality proof",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": ":=:",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle boolean\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "B1",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#B1",
          "type": "type"
        },
        "index": {
          "description": "Single boolean",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "B1",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:B1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKnown types\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "HasType",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#HasType",
          "type": "class"
        },
        "index": {
          "description": "Known types",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "HasType",
          "package": "shady-gen",
          "partial": "Has Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:HasType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas scalar type\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "IsScalar",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#IsScalar",
          "type": "class"
        },
        "index": {
          "description": "Has scalar type",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "IsScalar",
          "package": "shady-gen",
          "partial": "Is Scalar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:IsScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemonstration that a type argument is a vector type.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "IsVec",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#IsVec",
          "type": "data"
        },
        "index": {
          "description": "Demonstration that type argument is vector type",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "IsVec",
          "package": "shady-gen",
          "partial": "Is Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:IsVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "PairF",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#PairF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "PairF",
          "package": "shady-gen",
          "partial": "Pair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:PairF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary predicate\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "Pred1",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Pred1",
          "type": "type"
        },
        "index": {
          "description": "Unary predicate",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Pred1",
          "package": "shady-gen",
          "partial": "Pred",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Pred1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary predicate\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "Pred2",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Pred2",
          "type": "type"
        },
        "index": {
          "description": "Binary predicate",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Pred2",
          "package": "shady-gen",
          "partial": "Pred",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Pred2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "R",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#R",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "R",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient short-hand\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "R1",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#R1",
          "type": "type"
        },
        "index": {
          "description": "Convenient short-hand",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "R1",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient short-hand\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "R2",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#R2",
          "type": "type"
        },
        "index": {
          "description": "Convenient short-hand",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "R2",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient short-hand\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "R3",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#R3",
          "type": "type"
        },
        "index": {
          "description": "Convenient short-hand",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "R3",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:R3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient short-hand\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "R4",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#R4",
          "type": "type"
        },
        "index": {
          "description": "Convenient short-hand",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "R4",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:R4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003en\u003c/code\u003e-dimensional GLSL sampler.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "Sampler",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Sampler",
          "type": "data"
        },
        "index": {
          "description": "An dimensional GLSL sampler",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Sampler",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "Sampler1",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Sampler1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Sampler1",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Sampler1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "Sampler2",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Sampler2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Sampler2",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Sampler2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "Sampler3",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Sampler3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Sampler3",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Sampler3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "ScalarT",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#ScalarT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "ScalarT",
          "package": "shady-gen",
          "partial": "Scalar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:ScalarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyntactic equality.  Requires same argument type.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "SynEq",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#SynEq",
          "type": "class"
        },
        "index": {
          "description": "Syntactic equality Requires same argument type",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "SynEq",
          "package": "shady-gen",
          "partial": "Syn Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:SynEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher-order variant of \u003ccode\u003e\u003ca\u003eSynEq\u003c/a\u003e\u003c/code\u003e.  Can be defined via '(=-=)', or vice versa.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "SynEq2",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#SynEq2",
          "type": "class"
        },
        "index": {
          "description": "Higher-order variant of SynEq Can be defined via or vice versa",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "SynEq2",
          "package": "shady-gen",
          "partial": "Syn Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:SynEq2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding of texture ids in values.  I'm using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e instead of\n \u003ccode\u003eGLuint\u003c/code\u003e here to avoid depending on OpenGL in this module & package.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "TextureId",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#TextureId",
          "type": "type"
        },
        "index": {
          "description": "Encoding of texture ids in values using Int instead of GLuint here to avoid depending on OpenGL in this module package",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "TextureId",
          "package": "shady-gen",
          "partial": "Texture Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:TextureId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended types.  Vector types, samplers, unit, pairing, and functions.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "Type",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Extended types Vector types samplers unit pairing and functions",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Type",
          "package": "shady-gen",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "UnitF",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#UnitF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "UnitF",
          "package": "shady-gen",
          "partial": "Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:UnitF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "VectorT",
          "package": "shady-gen",
          "source": "src/Shady-Language-Type.html#VectorT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "VectorT",
          "package": "shady-gen",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#t:VectorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "(#)",
          "package": "shady-gen",
          "signature": "f a -\u003e f b -\u003e f (a :# b)",
          "source": "src/Shady-Language-Type.html#%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "(#) #",
          "normalized": "a b-\u003ea c-\u003ea(b # c)",
          "package": "shady-gen",
          "signature": "f a-\u003ef b-\u003ef(a # b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "(=--=)",
          "package": "shady-gen",
          "signature": "f v c -\u003e f v c -\u003e Bool",
          "source": "src/Shady-Language-Type.html#%3D--%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "(=--=) =--=",
          "normalized": "a b c-\u003ea b c-\u003eBool",
          "package": "shady-gen",
          "signature": "f v c-\u003ef v c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:-61--45--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "(=-=)",
          "package": "shady-gen",
          "signature": "f c -\u003e f c -\u003e Bool",
          "source": "src/Shady-Language-Type.html#%3D-%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "(=-=) =-=",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "shady-gen",
          "signature": "f c-\u003ef c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:-61--45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame type and syntactically equal\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "(===)",
          "package": "shady-gen",
          "signature": "f a -\u003e f b -\u003e Bool",
          "source": "src/Shady-Language-Type.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Same type and syntactically equal",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "(===) ===",
          "normalized": "a b-\u003ea c-\u003eBool",
          "package": "shady-gen",
          "signature": "f a-\u003ef b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRefl\u003c/a\u003e\u003c/code\u003e if type-compatible \u003cem\u003eand\u003c/em\u003e equal.  Otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "(=:=)",
          "package": "shady-gen",
          "signature": "f a -\u003e f b -\u003e Maybe (a :=: b)",
          "source": "src/Shady-Language-Type.html#%3D%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "Yields Just Refl if type-compatible and equal Otherwise Nothing",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "(=:=) =:=",
          "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
          "package": "shady-gen",
          "signature": "f a-\u003ef b-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": ":*:",
          "package": "shady-gen",
          "signature": "Type a -\u003e Type b -\u003e Type (a, b)",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": ":*:",
          "normalized": "Type a-\u003eType b-\u003eType(a,b)",
          "package": "shady-gen",
          "signature": "Type a-\u003eType b-\u003eType(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": ":-\u003e:",
          "package": "shady-gen",
          "signature": "Type a -\u003e Type b -\u003e Type (a -\u003e b)",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": ":-\u003e:",
          "normalized": "Type a-\u003eType b-\u003eType(a-\u003eb)",
          "package": "shady-gen",
          "signature": "Type a-\u003eType b-\u003eType(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v::-45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "IsVec",
          "package": "shady-gen",
          "signature": "IsVec (Vec n a)",
          "source": "src/Shady-Language-Type.html#IsVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "IsVec",
          "package": "shady-gen",
          "partial": "Is Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:IsVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "Refl",
          "package": "shady-gen",
          "signature": ":=: a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Refl",
          "package": "shady-gen",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "Sampler",
          "package": "shady-gen",
          "signature": "Sampler",
          "source": "src/Shady-Language-Type.html#Sampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "Sampler",
          "package": "shady-gen",
          "partial": "Sampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "SamplerT",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Type (Sampler n)",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "SamplerT",
          "normalized": "Nat a-\u003eType(Sampler a)",
          "package": "shady-gen",
          "partial": "Sampler",
          "signature": "Nat n-\u003eType(Sampler n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:SamplerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "UnitT",
          "package": "shady-gen",
          "signature": "Type ()",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "UnitT",
          "normalized": "Type()",
          "package": "shady-gen",
          "partial": "Unit",
          "signature": "Type()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:UnitT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "VecT",
          "package": "shady-gen",
          "signature": "VectorT n a -\u003e Type (Vec n a)",
          "source": "src/Shady-Language-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "VecT",
          "normalized": "VectorT a b-\u003eType(Vec a b)",
          "package": "shady-gen",
          "partial": "Vec",
          "signature": "VectorT n a-\u003eType(Vec n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:VecT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for a vector type\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "checkVec",
          "package": "shady-gen",
          "signature": "Maybe (IsVec t)",
          "source": "src/Shady-Language-Type.html#checkVec",
          "type": "function"
        },
        "index": {
          "description": "Check for vector type",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "checkVec",
          "package": "shady-gen",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:checkVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient wrapper around \u003ccode\u003e\u003ca\u003echeckVec\u003c/a\u003e\u003c/code\u003e.  Ignores argument.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "checkVec'",
          "package": "shady-gen",
          "signature": "f t -\u003e Maybe (IsVec t)",
          "source": "src/Shady-Language-Type.html#checkVec%27",
          "type": "function"
        },
        "index": {
          "description": "Convenient wrapper around checkVec Ignores argument",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "checkVec'",
          "normalized": "a b-\u003eMaybe(IsVec b)",
          "package": "shady-gen",
          "partial": "Vec'",
          "signature": "f t-\u003eMaybe(IsVec t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:checkVec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo two values have the same type.  If so, return a proof.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "compatible",
          "package": "shady-gen",
          "signature": "a -\u003e b -\u003e Maybe (a :=: b)",
          "source": "src/Shady-Language-Type.html#compatible",
          "type": "function"
        },
        "index": {
          "description": "Do two values have the same type If so return proof",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "compatible",
          "normalized": "a-\u003eb-\u003eMaybe(a b)",
          "package": "shady-gen",
          "signature": "a-\u003eb-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:compatible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo two values have the same argument type.  If so, return a proof.\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "compatible1",
          "package": "shady-gen",
          "signature": "f a -\u003e g b -\u003e Maybe (a :=: b)",
          "source": "src/Shady-Language-Type.html#compatible1",
          "type": "function"
        },
        "index": {
          "description": "Do two values have the same argument type If so return proof",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "compatible1",
          "normalized": "a b-\u003ec d-\u003eMaybe(b d)",
          "package": "shady-gen",
          "signature": "f a-\u003eg b-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:compatible1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to prove equality of primitive types\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "ptyEq",
          "package": "shady-gen",
          "signature": "ScalarT a -\u003e ScalarT b -\u003e Maybe (a :=: b)",
          "source": "src/Shady-Language-Type.html#ptyEq",
          "type": "function"
        },
        "index": {
          "description": "Try to prove equality of primitive types",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "ptyEq",
          "normalized": "ScalarT a-\u003eScalarT b-\u003eMaybe(a b)",
          "package": "shady-gen",
          "partial": "Eq",
          "signature": "ScalarT a-\u003eScalarT b-\u003eMaybe(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:ptyEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "sampler1",
          "package": "shady-gen",
          "signature": "TextureId -\u003e Sampler1",
          "source": "src/Shady-Language-Type.html#sampler1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "sampler1",
          "normalized": "TextureId-\u003eSampler",
          "package": "shady-gen",
          "signature": "TextureId-\u003eSampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:sampler1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "sampler2",
          "package": "shady-gen",
          "signature": "TextureId -\u003e Sampler2",
          "source": "src/Shady-Language-Type.html#sampler2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "sampler2",
          "normalized": "TextureId-\u003eSampler",
          "package": "shady-gen",
          "signature": "TextureId-\u003eSampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:sampler2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "sampler3",
          "package": "shady-gen",
          "signature": "TextureId -\u003e Sampler3",
          "source": "src/Shady-Language-Type.html#sampler3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "sampler3",
          "normalized": "TextureId-\u003eSampler",
          "package": "shady-gen",
          "signature": "TextureId-\u003eSampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:sampler3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "samplerDim",
          "package": "shady-gen",
          "signature": "Nat n",
          "source": "src/Shady-Language-Type.html#Sampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "samplerDim",
          "package": "shady-gen",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:samplerDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "samplerTexture",
          "package": "shady-gen",
          "signature": "TextureId",
          "source": "src/Shady-Language-Type.html#Sampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "samplerTexture",
          "package": "shady-gen",
          "partial": "Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:samplerTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "scalarT",
          "package": "shady-gen",
          "signature": "ScalarT a",
          "source": "src/Shady-Language-Type.html#scalarT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "scalarT",
          "package": "shady-gen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:scalarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to prove equality of types\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "tyEq",
          "package": "shady-gen",
          "signature": "Type c -\u003e Type c' -\u003e Maybe (c :=: c')",
          "source": "src/Shady-Language-Type.html#tyEq",
          "type": "function"
        },
        "index": {
          "description": "Try to prove equality of types",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "tyEq",
          "normalized": "Type a-\u003eType b-\u003eMaybe(a b)",
          "package": "shady-gen",
          "partial": "Eq",
          "signature": "Type c-\u003eType c'-\u003eMaybe(c c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:tyEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify a type\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "typeOf",
          "package": "shady-gen",
          "signature": "a -\u003e Type a",
          "source": "src/Shady-Language-Type.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Reify type",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "typeOf",
          "normalized": "a-\u003eType a",
          "package": "shady-gen",
          "partial": "Of",
          "signature": "a-\u003eType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify a type argument\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "typeOf1",
          "package": "shady-gen",
          "signature": "f a -\u003e Type a",
          "source": "src/Shady-Language-Type.html#typeOf1",
          "type": "function"
        },
        "index": {
          "description": "Reify type argument",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "typeOf1",
          "normalized": "a b-\u003eType b",
          "package": "shady-gen",
          "partial": "Of",
          "signature": "f a-\u003eType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:typeOf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify a type argument's argument\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "typeOf2",
          "package": "shady-gen",
          "signature": "g (f a) -\u003e Type a",
          "source": "src/Shady-Language-Type.html#typeOf2",
          "type": "function"
        },
        "index": {
          "description": "Reify type argument argument",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "typeOf2",
          "normalized": "a(b c)-\u003eType c",
          "package": "shady-gen",
          "partial": "Of",
          "signature": "g(f a)-\u003eType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:typeOf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "typeT",
          "package": "shady-gen",
          "signature": "Type t",
          "source": "src/Shady-Language-Type.html#typeT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "typeT",
          "package": "shady-gen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:typeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "unit",
          "package": "shady-gen",
          "signature": "f ()",
          "source": "src/Shady-Language-Type.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "unit",
          "normalized": "a()",
          "package": "shady-gen",
          "signature": "f()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Language.Type",
          "name": "vectorT",
          "package": "shady-gen",
          "signature": "VectorT n a",
          "source": "src/Shady-Language-Type.html#vectorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "vectorT",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:vectorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to prove equality of types\n\u003c/p\u003e",
          "module": "Shady.Language.Type",
          "name": "vtyEq",
          "package": "shady-gen",
          "signature": "VectorT m a -\u003e VectorT n b -\u003e Maybe (Vec m a :=: Vec n b)",
          "source": "src/Shady-Language-Type.html#vtyEq",
          "type": "function"
        },
        "index": {
          "description": "Try to prove equality of types",
          "hierarchy": "Shady Language Type",
          "module": "Shady.Language.Type",
          "name": "vtyEq",
          "normalized": "VectorT a b-\u003eVectorT c d-\u003eMaybe(Vec a b Vec c d)",
          "package": "shady-gen",
          "partial": "Eq",
          "signature": "VectorT m a-\u003eVectorT n b-\u003eMaybe(Vec m a Vec n b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Language-Type.html#v:vtyEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMisc useful definitions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Misc",
          "name": "Misc",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html",
          "type": "module"
        },
        "index": {
          "description": "Misc useful definitions",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Misc",
          "package": "shady-gen",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003eIO ()\u003c/code\u003e.  Obviates some parentheses.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "Action",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#Action",
          "type": "type"
        },
        "index": {
          "description": "Synonym for IO Obviates some parentheses",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Action",
          "package": "shady-gen",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary transformation\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "Binop",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#Binop",
          "type": "type"
        },
        "index": {
          "description": "Binary transformation",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Binop",
          "package": "shady-gen",
          "partial": "Binop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:Binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Misc",
          "name": "EyePos",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#EyePos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "EyePos",
          "package": "shady-gen",
          "partial": "Eye Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:EyePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal-valued modulo.  You can use \u003ccode\u003e\u003ca\u003efmodRF\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e types and\n \u003ccode\u003e\u003ca\u003efmodViaFrac\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFrac\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "FMod",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#FMod",
          "type": "class"
        },
        "index": {
          "description": "Real-valued modulo You can use fmodRF for RealFrac types and fmodViaFrac for Frac types",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "FMod",
          "package": "shady-gen",
          "partial": "FMod",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:FMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake fractional component(s).  Always non-negative.  You can use\n \u003ccode\u003e\u003ca\u003efracRF\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e types and \u003ccode\u003e\u003ca\u003efracViaFmod\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eFmod\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "Frac",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#Frac",
          "type": "class"
        },
        "index": {
          "description": "Take fractional component Always non-negative You can use fracRF for RealFrac types and fracViaFmod for Fmod types",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Frac",
          "package": "shady-gen",
          "partial": "Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:Frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Misc",
          "name": "R",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#R",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "R",
          "package": "shady-gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink of information\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "Sink",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#Sink",
          "type": "type"
        },
        "index": {
          "description": "Sink of information",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Sink",
          "package": "shady-gen",
          "partial": "Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary transformation (endomorphism)\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "Unop",
          "package": "shady-gen",
          "source": "src/Shady-Misc.html#Unop",
          "type": "type"
        },
        "index": {
          "description": "Unary transformation endomorphism",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "Unop",
          "package": "shady-gen",
          "partial": "Unop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#t:Unop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine sinks\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "(\u003e+\u003e)",
          "package": "shady-gen",
          "signature": "Sink a -\u003e Sink b -\u003e Sink (a, b)",
          "source": "src/Shady-Misc.html#%3E%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine sinks",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "(\u003e+\u003e) \u003e+\u003e",
          "normalized": "Sink a-\u003eSink b-\u003eSink(a,b)",
          "package": "shady-gen",
          "signature": "Sink a-\u003eSink b-\u003eSink(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:-62--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClamp to a given range\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "clamp",
          "package": "shady-gen",
          "signature": "(a, a) -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#clamp",
          "type": "function"
        },
        "index": {
          "description": "Clamp to given range",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "clamp",
          "normalized": "(a,a)-\u003ea-\u003ea",
          "package": "shady-gen",
          "signature": "(a,a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003eclamp\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003eOrdB\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "clampB",
          "package": "shady-gen",
          "signature": "(a, a) -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#clampB",
          "type": "function"
        },
        "index": {
          "description": "Variation on clamp using OrdB instead of Ord",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "clampB",
          "normalized": "(a,a)-\u003ea-\u003ea",
          "package": "shady-gen",
          "signature": "(a,a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:clampB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove first argument to first place (for style uniformity)\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "flip1",
          "package": "shady-gen",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Shady-Misc.html#flip1",
          "type": "function"
        },
        "index": {
          "description": "Move first argument to first place for style uniformity",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "flip1",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "shady-gen",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:flip1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove second argument to first place (\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e synonym for style uniformity)\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "flip2",
          "package": "shady-gen",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "source": "src/Shady-Misc.html#flip2",
          "type": "function"
        },
        "index": {
          "description": "Move second argument to first place flip synonym for style uniformity",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "flip2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "shady-gen",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:flip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove third argument to first place\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "flip3",
          "package": "shady-gen",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e c -\u003e a -\u003e b -\u003e d",
          "source": "src/Shady-Misc.html#flip3",
          "type": "function"
        },
        "index": {
          "description": "Move third argument to first place",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "flip3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003ea-\u003eb-\u003ed",
          "package": "shady-gen",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ec-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:flip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove fourth argument to first place\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "flip4",
          "package": "shady-gen",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e d -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Shady-Misc.html#flip4",
          "type": "function"
        },
        "index": {
          "description": "Move fourth argument to first place",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "flip4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ed-\u003ea-\u003eb-\u003ec-\u003ee",
          "package": "shady-gen",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ed-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:flip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Misc",
          "name": "fmod",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#fmod",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "fmod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "shady-gen",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:fmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional modulo.  Useful for defining \u003ccode\u003e\u003ca\u003efmod\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "fmodRF",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#fmodRF",
          "type": "function"
        },
        "index": {
          "description": "Fractional modulo Useful for defining fmod on RealFrac types",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "fmodRF",
          "normalized": "a-\u003ea-\u003ea",
          "package": "shady-gen",
          "partial": "RF",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:fmodRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy defining \u003ccode\u003e\u003ca\u003efmod\u003c/a\u003e\u003c/code\u003e on a \u003ccode\u003e\u003ca\u003eFrac\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "fmodViaFrac",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#fmodViaFrac",
          "type": "function"
        },
        "index": {
          "description": "Handy defining fmod on Frac type",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "fmodViaFrac",
          "normalized": "a-\u003ea-\u003ea",
          "package": "shady-gen",
          "partial": "Via Frac",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:fmodViaFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard a functor value.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "forget",
          "package": "shady-gen",
          "signature": "f a -\u003e f ()",
          "source": "src/Shady-Misc.html#forget",
          "type": "function"
        },
        "index": {
          "description": "Discard functor value",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "forget",
          "normalized": "a b-\u003ea()",
          "package": "shady-gen",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Misc",
          "name": "frac",
          "package": "shady-gen",
          "signature": "a -\u003e a",
          "source": "src/Shady-Misc.html#frac",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "frac",
          "normalized": "a-\u003ea",
          "package": "shady-gen",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:frac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional component.  Useful for defining \u003ccode\u003e\u003ca\u003efrac\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "fracRF",
          "package": "shady-gen",
          "signature": "a -\u003e a",
          "source": "src/Shady-Misc.html#fracRF",
          "type": "function"
        },
        "index": {
          "description": "Fractional component Useful for defining frac on RealFrac types",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "fracRF",
          "normalized": "a-\u003ea",
          "package": "shady-gen",
          "partial": "RF",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:fracRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy defining \u003ccode\u003e\u003ca\u003efrac\u003c/a\u003e\u003c/code\u003e on a \u003ccode\u003e\u003ca\u003eFMod\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "fracViaFmod",
          "package": "shady-gen",
          "signature": "a -\u003e a",
          "source": "src/Shady-Misc.html#fracViaFmod",
          "type": "function"
        },
        "index": {
          "description": "Handy defining frac on FMod type",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "fracViaFmod",
          "normalized": "a-\u003ea",
          "package": "shady-gen",
          "partial": "Via Fmod",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:fracViaFmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad a string to the given length, adding spaces on the right as needed.\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "padTo",
          "package": "shady-gen",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Shady-Misc.html#padTo",
          "type": "function"
        },
        "index": {
          "description": "Pad string to the given length adding spaces on the right as needed",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "padTo",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "shady-gen",
          "partial": "To",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:padTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmooth, clamped transition\n\u003c/p\u003e",
          "module": "Shady.Misc",
          "name": "smoothStep",
          "package": "shady-gen",
          "signature": "(a, a) -\u003e a -\u003e a",
          "source": "src/Shady-Misc.html#smoothStep",
          "type": "function"
        },
        "index": {
          "description": "Smooth clamped transition",
          "hierarchy": "Shady Misc",
          "module": "Shady.Misc",
          "name": "smoothStep",
          "normalized": "(a,a)-\u003ea-\u003ea",
          "package": "shady-gen",
          "partial": "Step",
          "signature": "(a,a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Misc.html#v:smoothStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest new CSE stuff\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Play.CseTest",
          "name": "CseTest",
          "package": "shady-gen",
          "source": "src/Shady-Play-CseTest.html",
          "type": "module"
        },
        "index": {
          "description": "Test new CSE stuff",
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "CseTest",
          "package": "shady-gen",
          "partial": "Cse Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "Point",
          "package": "shady-gen",
          "source": "src/Shady-Play-CseTest.html#Point",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "Point",
          "package": "shady-gen",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "a1",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#a1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "a1",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:a1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "q",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "q",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "t",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "t",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "t1",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#t1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "t1",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:t1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "t2",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#t2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "t2",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "u",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#u",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "u",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "uv",
          "package": "shady-gen",
          "signature": "Point",
          "source": "src/Shady-Play-CseTest.html#uv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "uv",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:uv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "v",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-CseTest.html#v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "v",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.CseTest",
          "name": "x",
          "package": "shady-gen",
          "signature": "a -\u003e Expr",
          "source": "src/Shady-Play-CseTest.html#x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play CseTest",
          "module": "Shady.Play.CseTest",
          "name": "x",
          "normalized": "a-\u003eExpr",
          "package": "shady-gen",
          "signature": "a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-CseTest.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest auto vectorization\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Play.VectorTest",
          "name": "VectorTest",
          "package": "shady-gen",
          "source": "src/Shady-Play-VectorTest.html",
          "type": "module"
        },
        "index": {
          "description": "Test auto vectorization",
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "VectorTest",
          "package": "shady-gen",
          "partial": "Vector Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "l",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-VectorTest.html#l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "l",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "m",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-VectorTest.html#m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "m",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "n",
          "package": "shady-gen",
          "signature": "FloatE",
          "source": "src/Shady-Play-VectorTest.html#n",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "n",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "q",
          "package": "shady-gen",
          "signature": "R2E",
          "source": "src/Shady-Play-VectorTest.html#q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "q",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "r",
          "package": "shady-gen",
          "signature": "R2E",
          "source": "src/Shady-Play-VectorTest.html#r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "r",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Play.VectorTest",
          "name": "x",
          "package": "shady-gen",
          "signature": "a -\u003e Expr",
          "source": "src/Shady-Play-VectorTest.html#x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Play VectorTest",
          "module": "Shady.Play.VectorTest",
          "name": "x",
          "normalized": "a-\u003eExpr",
          "package": "shady-gen",
          "signature": "a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Play-VectorTest.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperiment in length-typed vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shady.Vec",
          "name": "Vec",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html",
          "type": "module"
        },
        "index": {
          "description": "Experiment in length-typed vectors",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Vec",
          "package": "shady-gen",
          "partial": "Vec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of type-level numbers\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": ":+:",
          "package": "shady-gen",
          "signature": ":+:",
          "type": "function"
        },
        "index": {
          "description": "Sum of type-level numbers",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": ":+:",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProof that \u003ccode\u003em \u003c n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": ":\u003c:",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#%3A%3C%3A",
          "type": "data"
        },
        "index": {
          "description": "Proof that",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": ":\u003c:",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t::-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Four",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Four",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Four",
          "package": "shady-gen",
          "partial": "Four",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "FourT",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#FourT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "FourT",
          "package": "shady-gen",
          "partial": "Four",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:FourT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number under the given limit, with proof\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "Index",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Index",
          "type": "data"
        },
        "index": {
          "description": "number under the given limit with proof",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Index",
          "package": "shady-gen",
          "partial": "Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003en\u003c/code\u003e a vector length.\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "IsNat",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#IsNat",
          "type": "class"
        },
        "index": {
          "description": "vector length",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "IsNat",
          "package": "shady-gen",
          "partial": "Is Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:IsNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Nat",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Nat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Nat",
          "package": "shady-gen",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "One",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#One",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "One",
          "package": "shady-gen",
          "partial": "One",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "OneT",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#OneT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "OneT",
          "package": "shady-gen",
          "partial": "One",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:OneT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level representation of successor\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "S",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#S",
          "type": "data"
        },
        "index": {
          "description": "Type-level representation of successor",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "S",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Three",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Three",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Three",
          "package": "shady-gen",
          "partial": "Three",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "ThreeT",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#ThreeT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "ThreeT",
          "package": "shady-gen",
          "partial": "Three",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:ThreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Two",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Two",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Two",
          "package": "shady-gen",
          "partial": "Two",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "TwoT",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#TwoT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "TwoT",
          "package": "shady-gen",
          "partial": "Two",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:TwoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectors with type-determined length, having empty vector (\u003ccode\u003e\u003ca\u003eZVec\u003c/a\u003e\u003c/code\u003e) and\n vector cons ('(:\u003c)').\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "Vec",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Vec",
          "type": "data"
        },
        "index": {
          "description": "Vectors with type-determined length having empty vector ZVec and vector cons",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Vec",
          "package": "shady-gen",
          "partial": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level representation of zero\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "Z",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Z",
          "type": "data"
        },
        "index": {
          "description": "Type-level representation of zero",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Z",
          "package": "shady-gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Zero",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#Zero",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Zero",
          "package": "shady-gen",
          "partial": "Zero",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "ZeroT",
          "package": "shady-gen",
          "source": "src/Shady-Vec.html#ZeroT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "ZeroT",
          "package": "shady-gen",
          "partial": "Zero",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#t:ZeroT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenation of vectors\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "(\u003c+\u003e)",
          "package": "shady-gen",
          "signature": "Vec m a -\u003e Vec n a -\u003e Vec (m :+: n) a",
          "source": "src/Shady-Vec.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenation of vectors",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Vec a b-\u003eVec c b-\u003eVec(a c)b",
          "package": "shady-gen",
          "signature": "Vec m a-\u003eVec n a-\u003eVec(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": ":\u003c",
          "package": "shady-gen",
          "signature": "a -\u003e Vec n a -\u003e Vec (S n) a",
          "source": "src/Shady-Vec.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": ":\u003c",
          "normalized": "a-\u003eVec b a-\u003eVec(S b)a",
          "package": "shady-gen",
          "signature": "a-\u003eVec n a-\u003eVec(S n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Index",
          "package": "shady-gen",
          "signature": "Index (n :\u003c: lim) (Nat n)",
          "source": "src/Shady-Vec.html#Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Index",
          "package": "shady-gen",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Succ",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Nat (S n)",
          "source": "src/Shady-Vec.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Succ",
          "normalized": "Nat a-\u003eNat(S a)",
          "package": "shady-gen",
          "partial": "Succ",
          "signature": "Nat n-\u003eNat(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "ZVec",
          "package": "shady-gen",
          "signature": "Vec Z a",
          "source": "src/Shady-Vec.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "ZVec",
          "package": "shady-gen",
          "partial": "ZVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:ZVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "Zero",
          "package": "shady-gen",
          "signature": "Nat Z",
          "source": "src/Shady-Vec.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "Zero",
          "package": "shady-gen",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "elemsV",
          "package": "shady-gen",
          "signature": "[a] -\u003e Vec n a",
          "source": "src/Shady-Vec.html#elemsV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "elemsV",
          "normalized": "[a]-\u003eVec b a",
          "package": "shady-gen",
          "signature": "[a]-\u003eVec n a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:elemsV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "four",
          "package": "shady-gen",
          "signature": "Nat FourT",
          "source": "src/Shady-Vec.html#four",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "four",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral indexing, taking a proof that the index is within bounds.\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "get",
          "package": "shady-gen",
          "signature": "Index n -\u003e Vec n a -\u003e One a",
          "source": "src/Shady-Vec.html#get",
          "type": "function"
        },
        "index": {
          "description": "General indexing taking proof that the index is within bounds",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "get",
          "normalized": "Index a-\u003eVec a b-\u003eOne b",
          "package": "shady-gen",
          "signature": "Index n-\u003eVec n a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "get0",
          "package": "shady-gen",
          "signature": "Vec (S n) a -\u003e One a",
          "source": "src/Shady-Vec.html#get0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "get0",
          "normalized": "Vec(S a)b-\u003eOne b",
          "package": "shady-gen",
          "signature": "Vec(S n)a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:get0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "get1",
          "package": "shady-gen",
          "signature": "Vec (S (S n)) a -\u003e One a",
          "source": "src/Shady-Vec.html#get1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "get1",
          "normalized": "Vec(S(S a))b-\u003eOne b",
          "package": "shady-gen",
          "signature": "Vec(S(S n))a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:get1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "get2",
          "package": "shady-gen",
          "signature": "Vec (S (S (S n))) a -\u003e One a",
          "source": "src/Shady-Vec.html#get2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "get2",
          "normalized": "Vec(S(S(S a)))b-\u003eOne b",
          "package": "shady-gen",
          "signature": "Vec(S(S(S n)))a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:get2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "get3",
          "package": "shady-gen",
          "signature": "Vec (S (S (S (S n)))) a -\u003e One a",
          "source": "src/Shady-Vec.html#get3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "get3",
          "normalized": "Vec(S(S(S(S a))))b-\u003eOne b",
          "package": "shady-gen",
          "signature": "Vec(S(S(S(S n))))a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:get3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "index0",
          "package": "shady-gen",
          "signature": "Index (S n)",
          "source": "src/Shady-Vec.html#index0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "index0",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:index0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "index1",
          "package": "shady-gen",
          "signature": "Index (S (S n))",
          "source": "src/Shady-Vec.html#index1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "index1",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:index1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "index2",
          "package": "shady-gen",
          "signature": "Index (S (S (S n)))",
          "source": "src/Shady-Vec.html#index2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "index2",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:index2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "index3",
          "package": "shady-gen",
          "signature": "Index (S (S (S (S n))))",
          "source": "src/Shady-Vec.html#index3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "index3",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:index3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndices under \u003ccode\u003en\u003c/code\u003e: \u003ccode\u003e\u003ca\u003eindex0\u003c/a\u003e\u003c/code\u003e :\u003c \u003ccode\u003e\u003ca\u003eindex1\u003c/a\u003e\u003c/code\u003e :\u003c ...\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "indices",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Vec n (Index n)",
          "source": "src/Shady-Vec.html#indices",
          "type": "function"
        },
        "index": {
          "description": "Indices under index0 index1",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "indices",
          "normalized": "Nat a-\u003eVec a(Index a)",
          "package": "shady-gen",
          "signature": "Nat n-\u003eVec n(Index n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "nat",
          "package": "shady-gen",
          "signature": "Nat n",
          "source": "src/Shady-Vec.html#nat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "nat",
          "package": "shady-gen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of naturals\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "natAdd",
          "package": "shady-gen",
          "signature": "Nat m -\u003e Nat n -\u003e Nat (m :+: n)",
          "source": "src/Shady-Vec.html#natAdd",
          "type": "function"
        },
        "index": {
          "description": "Sum of naturals",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "natAdd",
          "normalized": "Nat a-\u003eNat b-\u003eNat(a b)",
          "package": "shady-gen",
          "partial": "Add",
          "signature": "Nat m-\u003eNat n-\u003eNat(m n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:natAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality test\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "natEq",
          "package": "shady-gen",
          "signature": "Nat m -\u003e Nat n -\u003e Maybe (m :=: n)",
          "source": "src/Shady-Vec.html#natEq",
          "type": "function"
        },
        "index": {
          "description": "Equality test",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "natEq",
          "normalized": "Nat a-\u003eNat b-\u003eMaybe(a b)",
          "package": "shady-gen",
          "partial": "Eq",
          "signature": "Nat m-\u003eNat n-\u003eMaybe(m n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:natEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "natIsNat",
          "package": "shady-gen",
          "signature": "Nat n",
          "source": "src/Shady-Vec.html#natIsNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "natIsNat",
          "package": "shady-gen",
          "partial": "Is Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:natIsNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "natSucc",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Nat (S n)",
          "source": "src/Shady-Vec.html#natSucc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "natSucc",
          "normalized": "Nat a-\u003eNat(S a)",
          "package": "shady-gen",
          "partial": "Succ",
          "signature": "Nat n-\u003eNat(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:natSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "natToZ",
          "package": "shady-gen",
          "signature": "Nat n -\u003e Integer",
          "source": "src/Shady-Vec.html#natToZ",
          "type": "function"
        },
        "index": {
          "description": "Interpret Nat as an Integer",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "natToZ",
          "normalized": "Nat a-\u003eInteger",
          "package": "shady-gen",
          "partial": "To",
          "signature": "Nat n-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:natToZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "one",
          "package": "shady-gen",
          "signature": "Nat OneT",
          "source": "src/Shady-Vec.html#one",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "one",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "peekV",
          "package": "shady-gen",
          "signature": "Ptr a -\u003e IO (Vec n a)",
          "source": "src/Shady-Vec.html#peekV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "peekV",
          "normalized": "Ptr a-\u003eIO(Vec b a)",
          "package": "shady-gen",
          "signature": "Ptr a-\u003eIO(Vec n a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:peekV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "pokeV",
          "package": "shady-gen",
          "signature": "Ptr a -\u003e Sink (Vec n a)",
          "source": "src/Shady-Vec.html#pokeV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "pokeV",
          "normalized": "Ptr a-\u003eSink(Vec b a)",
          "package": "shady-gen",
          "signature": "Ptr a-\u003eSink(Vec n a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:pokeV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "pureV",
          "package": "shady-gen",
          "signature": "a -\u003e Vec n a",
          "source": "src/Shady-Vec.html#pureV",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "pureV",
          "normalized": "a-\u003eVec b a",
          "package": "shady-gen",
          "signature": "a-\u003eVec n a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:pureV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "succI",
          "package": "shady-gen",
          "signature": "Index m -\u003e Index (S m)",
          "source": "src/Shady-Vec.html#succI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "succI",
          "normalized": "Index a-\u003eIndex(S a)",
          "package": "shady-gen",
          "signature": "Index m-\u003eIndex(S m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:succI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwizzling.  Extract multiple elements simultaneously.\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "swizzle",
          "package": "shady-gen",
          "signature": "Vec n (Index m) -\u003e Vec m a -\u003e Vec n a",
          "source": "src/Shady-Vec.html#swizzle",
          "type": "function"
        },
        "index": {
          "description": "Swizzling Extract multiple elements simultaneously",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "swizzle",
          "normalized": "Vec a(Index b)-\u003eVec b c-\u003eVec a c",
          "package": "shady-gen",
          "signature": "Vec n(Index m)-\u003eVec m a-\u003eVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:swizzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "three",
          "package": "shady-gen",
          "signature": "Nat ThreeT",
          "source": "src/Shady-Vec.html#three",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "three",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "two",
          "package": "shady-gen",
          "signature": "Nat TwoT",
          "source": "src/Shady-Vec.html#two",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "two",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract element\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "un1",
          "package": "shady-gen",
          "signature": "One a -\u003e a",
          "source": "src/Shady-Vec.html#un1",
          "type": "function"
        },
        "index": {
          "description": "Extract element",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "un1",
          "normalized": "One a-\u003ea",
          "package": "shady-gen",
          "signature": "One a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:un1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract elements\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "un2",
          "package": "shady-gen",
          "signature": "Two a -\u003e (a, a)",
          "source": "src/Shady-Vec.html#un2",
          "type": "function"
        },
        "index": {
          "description": "Extract elements",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "un2",
          "normalized": "Two a-\u003e(a,a)",
          "package": "shady-gen",
          "signature": "Two a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:un2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract elements\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "un3",
          "package": "shady-gen",
          "signature": "Three a -\u003e (a, a, a)",
          "source": "src/Shady-Vec.html#un3",
          "type": "function"
        },
        "index": {
          "description": "Extract elements",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "un3",
          "normalized": "Three a-\u003e(a,a,a)",
          "package": "shady-gen",
          "signature": "Three a-\u003e(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:un3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract elements\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "un4",
          "package": "shady-gen",
          "signature": "Four a -\u003e (a, a, a, a)",
          "source": "src/Shady-Vec.html#un4",
          "type": "function"
        },
        "index": {
          "description": "Extract elements",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "un4",
          "normalized": "Four a-\u003e(a,a,a,a)",
          "package": "shady-gen",
          "signature": "Four a-\u003e(a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:un4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the elements of a vector.  See also \u003ccode\u003e\u003ca\u003eelemsV\u003c/a\u003e\u003c/code\u003e\n vElems :: Vec n a -\u003e [a]\n vElems ZVec      = []\n vElems (a :\u003c as) = a : vElems as\n\u003c/p\u003e",
          "module": "Shady.Vec",
          "name": "vElems",
          "package": "shady-gen",
          "signature": "Vec n a -\u003e [a]",
          "source": "src/Shady-Vec.html#vElems",
          "type": "function"
        },
        "index": {
          "description": "Enumerate the elements of vector See also elemsV vElems Vec vElems ZVec vElems as vElems as",
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "vElems",
          "normalized": "Vec a b-\u003e[b]",
          "package": "shady-gen",
          "partial": "Elems",
          "signature": "Vec n a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:vElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "vec1",
          "package": "shady-gen",
          "signature": "a -\u003e One a",
          "source": "src/Shady-Vec.html#vec1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "vec1",
          "normalized": "a-\u003eOne a",
          "package": "shady-gen",
          "signature": "a-\u003eOne a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:vec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "vec2",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e Two a",
          "source": "src/Shady-Vec.html#vec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "vec2",
          "normalized": "a-\u003ea-\u003eTwo a",
          "package": "shady-gen",
          "signature": "a-\u003ea-\u003eTwo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:vec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "vec3",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e a -\u003e Three a",
          "source": "src/Shady-Vec.html#vec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "vec3",
          "normalized": "a-\u003ea-\u003ea-\u003eThree a",
          "package": "shady-gen",
          "signature": "a-\u003ea-\u003ea-\u003eThree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "vec4",
          "package": "shady-gen",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Four a",
          "source": "src/Shady-Vec.html#vec4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "vec4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eFour a",
          "package": "shady-gen",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eFour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:vec4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "withIsNat",
          "package": "shady-gen",
          "signature": "Nat n -\u003e a) -\u003e Nat n -\u003e a",
          "source": "src/Shady-Vec.html#withIsNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "withIsNat",
          "normalized": "Nat a-\u003eb)-\u003eNat a-\u003eb",
          "package": "shady-gen",
          "partial": "Is Nat",
          "signature": "Nat n-\u003ea)-\u003eNat n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:withIsNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shady.Vec",
          "name": "zero",
          "package": "shady-gen",
          "signature": "Nat ZeroT",
          "source": "src/Shady-Vec.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shady Vec",
          "module": "Shady.Vec",
          "name": "zero",
          "package": "shady-gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Shady-Vec.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariation of Twan van Laarhoven's simple-reflect\n \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/simple-reflect\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eDifferences from Twan's version:\n + Generates pretty-printings instead of strings\n + No evaluation\n + Removed overloadings that disagree with semantic versions (e.g., '(==)')\n + A few stylistic tweaks\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "DocExpr",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html",
          "type": "module"
        },
        "index": {
          "description": "Variation of Twan van Laarhoven simple-reflect http hackage.haskell.org cgi-bin hackage-scripts package simple-reflect Differences from Twan version Generates pretty-printings instead of strings No evaluation Removed overloadings that disagree with semantic versions e.g few stylistic tweaks",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "DocExpr",
          "package": "shady-gen",
          "partial": "Doc Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right or none. \n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Associativity",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Associativity",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Associativity",
          "package": "shady-gen",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reflected expression\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Expr",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "reflected expression",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Expr",
          "package": "shady-gen",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e to other types\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "FromExpr",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#FromExpr",
          "type": "class"
        },
        "index": {
          "description": "Conversion from Expr to other types",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "FromExpr",
          "package": "shady-gen",
          "partial": "From Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#t:FromExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "HasExpr",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#HasExpr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "HasExpr",
          "package": "shady-gen",
          "partial": "Has Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#t:HasExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "HasExprU",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#HasExprU",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "HasExprU",
          "package": "shady-gen",
          "partial": "Has Expr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#t:HasExprU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "($$)",
          "package": "shady-gen",
          "signature": "Expr -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Function application",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "($$) $$",
          "normalized": "Expr-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "Expr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Expr",
          "package": "shady-gen",
          "signature": "Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Expr",
          "package": "shady-gen",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Infix",
          "package": "shady-gen",
          "signature": "Infix",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "Infix",
          "package": "shady-gen",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "InfixL",
          "package": "shady-gen",
          "signature": "InfixL",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "InfixL",
          "package": "shady-gen",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:InfixL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "InfixR",
          "package": "shady-gen",
          "signature": "InfixR",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "InfixR",
          "package": "shady-gen",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:InfixR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "apply",
          "package": "shady-gen",
          "signature": "Expr -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "apply",
          "normalized": "Expr-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "Expr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC-style call\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "ccall",
          "package": "shady-gen",
          "signature": "String -\u003e [Expr] -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#ccall",
          "type": "function"
        },
        "index": {
          "description": "C-style call",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "ccall",
          "normalized": "String-\u003e[Expr]-\u003eExpr",
          "package": "shady-gen",
          "signature": "String-\u003e[Expr]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:ccall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of showParen\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "docParen",
          "package": "shady-gen",
          "signature": "Bool -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#docParen",
          "type": "function"
        },
        "index": {
          "description": "Variant of showParen",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "docParen",
          "normalized": "Bool-\u003eDoc-\u003eDoc",
          "package": "shady-gen",
          "partial": "Paren",
          "signature": "Bool-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:docParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee.foo\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "dotX",
          "package": "shady-gen",
          "signature": "String -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#dotX",
          "type": "function"
        },
        "index": {
          "description": "e.foo",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "dotX",
          "normalized": "String-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "String-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:dotX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate doc, given contextual precedence level\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "edoc",
          "package": "shady-gen",
          "signature": "Int -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#Expr",
          "type": "function"
        },
        "index": {
          "description": "Generate doc given contextual precedence level",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "edoc",
          "normalized": "Int-\u003eDoc",
          "package": "shady-gen",
          "signature": "Int-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:edoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "expr",
          "package": "shady-gen",
          "signature": "a -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#expr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "expr",
          "normalized": "a-\u003eExpr",
          "package": "shady-gen",
          "signature": "a-\u003eExpr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "exprU",
          "package": "shady-gen",
          "signature": "forall a.  h a -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#exprU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "exprU",
          "normalized": "a b c d-\u003eExpr",
          "package": "shady-gen",
          "signature": "forall a. h a-\u003eExpr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:exprU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "fromExpr",
          "package": "shady-gen",
          "signature": "Expr -\u003e a",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#fromExpr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "fromExpr",
          "normalized": "Expr-\u003ea",
          "package": "shady-gen",
          "partial": "Expr",
          "signature": "Expr-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:fromExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic, overloaded, function variable\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "fun",
          "package": "shady-gen",
          "signature": "String -\u003e a",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#fun",
          "type": "function"
        },
        "index": {
          "description": "generic overloaded function variable",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "fun",
          "normalized": "String-\u003ea",
          "package": "shady-gen",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lambda expression\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "lambdaX",
          "package": "shady-gen",
          "signature": "String -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#lambdaX",
          "type": "function"
        },
        "index": {
          "description": "lambda expression",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "lambdaX",
          "normalized": "String-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "String-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:lambdaX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"let\" expression\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "letX",
          "package": "shady-gen",
          "signature": "String -\u003e Expr -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#letX",
          "type": "function"
        },
        "index": {
          "description": "let expression",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "letX",
          "normalized": "String-\u003eExpr-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "String-\u003eExpr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:letX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "lift",
          "package": "shady-gen",
          "signature": "a -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "lift",
          "normalized": "a-\u003eExpr",
          "package": "shady-gen",
          "signature": "a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAltering the generated Doc\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "onDoc",
          "package": "shady-gen",
          "signature": "(Doc -\u003e Doc) -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#onDoc",
          "type": "function"
        },
        "index": {
          "description": "Altering the generated Doc",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "onDoc",
          "normalized": "(Doc-\u003eDoc)-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "partial": "Doc",
          "signature": "(Doc-\u003eDoc)-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:onDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix operator with the given associativity, precedence and name\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "op",
          "package": "shady-gen",
          "signature": "Associativity -\u003e Int -\u003e String -\u003e Expr -\u003e Expr -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#op",
          "type": "function"
        },
        "index": {
          "description": "An infix operator with the given associativity precedence and name",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "op",
          "normalized": "Associativity-\u003eInt-\u003eString-\u003eExpr-\u003eExpr-\u003eExpr",
          "package": "shady-gen",
          "signature": "Associativity-\u003eInt-\u003eString-\u003eExpr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient for defining \u003ccode\u003e\u003ca\u003ePrettyPrec\u003c/a\u003e\u003c/code\u003e when we have a \u003ccode\u003e\u003ca\u003eHasExpr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "prettyExpr",
          "package": "shady-gen",
          "signature": "Int -\u003e a -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#prettyExpr",
          "type": "function"
        },
        "index": {
          "description": "Convenient for defining PrettyPrec when we have HasExpr",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "prettyExpr",
          "normalized": "Int-\u003ea-\u003eDoc",
          "package": "shady-gen",
          "partial": "Expr",
          "signature": "Int-\u003ea-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:prettyExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tuple expression\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "tupleX",
          "package": "shady-gen",
          "signature": "[Expr] -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#tupleX",
          "type": "function"
        },
        "index": {
          "description": "tuple expression",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "tupleX",
          "normalized": "[Expr]-\u003eExpr",
          "package": "shady-gen",
          "signature": "[Expr]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:tupleX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable with the given name\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "var",
          "package": "shady-gen",
          "signature": "String -\u003e Expr",
          "source": "src/Text-PrettyPrint-Leijen-DocExpr.html#var",
          "type": "function"
        },
        "index": {
          "description": "variable with the given name",
          "hierarchy": "Text PrettyPrint Leijen DocExpr",
          "module": "Text.PrettyPrint.Leijen.DocExpr",
          "name": "var",
          "normalized": "String-\u003eExpr",
          "package": "shady-gen",
          "signature": "String-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-DocExpr.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty class with precedence\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "PrettyPrec",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty class with precedence",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "PrettyPrec",
          "package": "shady-gen",
          "partial": "Pretty Prec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing with precedence.  A cross between \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eprettyPrec\u003c/a\u003e\u003c/code\u003e method defaults to discarding the context precedence\n and invoking \u003ccode\u003e\u003ca\u003epretty\u003c/a\u003e\u003c/code\u003e.  The reason \u003ccode\u003e\u003ca\u003ePrettyPrec\u003c/a\u003e\u003c/code\u003e derives from Pretty is\n that so that this default is possible.\n\u003c/p\u003e\u003cp\u003eTo make a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for a \u003ccode\u003e\u003ca\u003ePrettyPrec\u003c/a\u003e\u003c/code\u003e instance \u003ccode\u003eFoo\u003c/code\u003e, define\n\u003c/p\u003e\u003cp\u003einstance Show Foo where showsPrec p e = showsPrec p (prettyPrec p e)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "PrettyPrec",
          "package": "shady-gen",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#PrettyPrec",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing with precedence cross between Show and Pretty The prettyPrec method defaults to discarding the context precedence and invoking pretty The reason PrettyPrec derives from Pretty is that so that this default is possible To make Show instance for PrettyPrec instance Foo define instance Show Foo where showsPrec showsPrec prettyPrec",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "PrettyPrec",
          "package": "shady-gen",
          "partial": "Pretty Prec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#t:PrettyPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "prettyPrec",
          "package": "shady-gen",
          "signature": "Int -\u003e a -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#prettyPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "prettyPrec",
          "normalized": "Int-\u003ea-\u003eDoc",
          "package": "shady-gen",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#v:prettyPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient definition for \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.  Uses\n ribbon fraction of 0.9 and width of 80.  To set these values, use\n \u003ccode\u003e\u003ca\u003eshowsPretty'\u003c/a\u003e\u003c/code\u003e instead.  If you want to take precedence into account,\n use \u003ccode\u003e\u003ca\u003eshowsPrettyPrec\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPretty",
          "package": "shady-gen",
          "signature": "Int -\u003e a -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#showsPretty",
          "type": "function"
        },
        "index": {
          "description": "Convenient definition for showsPrec in Show instance Uses ribbon fraction of and width of To set these values use showsPretty instead If you want to take precedence into account use showsPrettyPrec instead",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPretty",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "shady-gen",
          "partial": "Pretty",
          "signature": "Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#v:showsPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient definition for \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n Arguments are ribbon fraction and line width.  To get my defaults, use\n \u003ccode\u003e\u003ca\u003eshowsPretty\u003c/a\u003e\u003c/code\u003e instead.  Ignores precedence, which \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e doesn't\n understand.  If you have a \u003ccode\u003e\u003ca\u003ePrettyPrec\u003c/a\u003e\u003c/code\u003e instance, you can use\n \u003ccode\u003e\u003ca\u003eshowsPrettyPrec\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPretty'",
          "package": "shady-gen",
          "signature": "Float -\u003e Int -\u003e Int -\u003e a -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#showsPretty%27",
          "type": "function"
        },
        "index": {
          "description": "Convenient definition for showsPrec in Show instance Arguments are ribbon fraction and line width To get my defaults use showsPretty instead Ignores precedence which Pretty doesn understand If you have PrettyPrec instance you can use showsPrettyPrec instead",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPretty'",
          "normalized": "Float-\u003eInt-\u003eInt-\u003ea-\u003eShowS",
          "package": "shady-gen",
          "partial": "Pretty'",
          "signature": "Float-\u003eInt-\u003eInt-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#v:showsPretty-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient definition for \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.  Uses\n ribbon fraction of 0.9 and width of 80.  To set these values, use\n \u003ccode\u003e\u003ca\u003eshowsPrettyPrec'\u003c/a\u003e\u003c/code\u003e instead.  See also \u003ccode\u003e\u003ca\u003eshowsPretty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPrettyPrec",
          "package": "shady-gen",
          "signature": "Int -\u003e a -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#showsPrettyPrec",
          "type": "function"
        },
        "index": {
          "description": "Convenient definition for showsPrec in Show instance Uses ribbon fraction of and width of To set these values use showsPrettyPrec instead See also showsPretty",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPrettyPrec",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "shady-gen",
          "partial": "Pretty Prec",
          "signature": "Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#v:showsPrettyPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient definition for \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n Arguments are ribbon fraction and line width.  To get my defaults, use\n \u003ccode\u003eshowsPrettyPretty\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPrettyPrec'",
          "package": "shady-gen",
          "signature": "Float -\u003e Int -\u003e Int -\u003e a -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Leijen-PrettyPrec.html#showsPrettyPrec%27",
          "type": "function"
        },
        "index": {
          "description": "Convenient definition for showsPrec in Show instance Arguments are ribbon fraction and line width To get my defaults use showsPrettyPretty instead",
          "hierarchy": "Text PrettyPrint Leijen PrettyPrec",
          "module": "Text.PrettyPrint.Leijen.PrettyPrec",
          "name": "showsPrettyPrec'",
          "normalized": "Float-\u003eInt-\u003eInt-\u003ea-\u003eShowS",
          "package": "shady-gen",
          "partial": "Pretty Prec'",
          "signature": "Float-\u003eInt-\u003eInt-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shady-gen/docs/Text-PrettyPrint-Leijen-PrettyPrec.html#v:showsPrettyPrec-39-"
      }
    }
  ]
]