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
        "word": "interpolate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Interpolate",
          "name": "Interpolate",
          "package": "interpolate",
          "source": "src/Data-String-Interpolate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String Interpolate",
          "module": "Data.String.Interpolate",
          "name": "Interpolate",
          "package": "interpolate",
          "partial": "Interpolate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/interpolate/docs/Data-String-Interpolate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e for string interpolation.  Expression enclosed within\n \u003ccode\u003e#{...}\u003c/code\u003e are interpolated, the result has to be in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eIt interpolates strings\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet name = \"Marvin\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn [i|name: #{name}|]\n\u003c/code\u003e\u003c/strong\u003ename: Marvin\n\u003c/pre\u003e\u003cp\u003eor integers\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet age = 23\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn [i|age: #{age}|]\n\u003c/code\u003e\u003c/strong\u003eage: 23\n\u003c/pre\u003e\u003cp\u003eor arbitrary Haskell expressions\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet profession = \"\\955-scientist\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn [i|profession: #{unwords [name, \"the\", profession]}|]\n\u003c/code\u003e\u003c/strong\u003eprofession: Marvin the &#955;-scientist\n\u003c/pre\u003e",
          "module": "Data.String.Interpolate",
          "name": "i",
          "package": "interpolate",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Interpolate.html#i",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for string interpolation Expression enclosed within are interpolated the result has to be in the Show class It interpolates strings let name Marvin putStrLn name name name Marvin or integers let age putStrLn age age age or arbitrary Haskell expressions let profession scientist putStrLn profession unwords name the profession profession Marvin the scientist",
          "hierarchy": "Data String Interpolate",
          "module": "Data.String.Interpolate",
          "name": "i",
          "package": "interpolate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpolate/docs/Data-String-Interpolate.html#v:i"
      }
    }
  ]
]