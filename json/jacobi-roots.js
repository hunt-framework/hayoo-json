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
        "word": "jacobi-roots"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGet the roots of shifted Legendre and Radau polynomials\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshiftedLegendreRoots 3\n\u003c/code\u003e\u003c/strong\u003eJust (fromList [0.11270166537925831,0.5,0.8872983346207417])\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshiftedRadauRoots 2\n\u003c/code\u003e\u003c/strong\u003eJust (fromList [0.1550510257216822,0.6449489742783178])\n\u003c/pre\u003e\u003cp\u003eThe roots are pre-computed and only a finite number are provided\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(V.length allShiftedLegendreRoots, V.length allShiftedRadauRoots)\n\u003c/code\u003e\u003c/strong\u003e(301,301)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshiftedLegendreRoots 1000000000000000\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eThere are N roots in the Nth Jacobi polynomial\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Maybe ( fromJust )\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV.length (fromJust (shiftedLegendreRoots 5))\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eall (\\k -\u003e k == V.length (fromJust (shiftedLegendreRoots k))) [0..(V.length allShiftedLegendreRoots - 1)]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eall (\\k -\u003e k == V.length (fromJust (shiftedRadauRoots k))) [0..(V.length allShiftedRadauRoots - 1)]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "JacobiRoots",
          "name": "JacobiRoots",
          "package": "jacobi-roots",
          "source": "src/JacobiRoots.html",
          "type": "module"
        },
        "index": {
          "description": "Get the roots of shifted Legendre and Radau polynomials shiftedLegendreRoots Just fromList shiftedRadauRoots Just fromList The roots are pre-computed and only finite number are provided V.length allShiftedLegendreRoots V.length allShiftedRadauRoots shiftedLegendreRoots Nothing There are roots in the Nth Jacobi polynomial import Data.Maybe fromJust V.length fromJust shiftedLegendreRoots all V.length fromJust shiftedLegendreRoots V.length allShiftedLegendreRoots True all V.length fromJust shiftedRadauRoots V.length allShiftedRadauRoots True",
          "hierarchy": "JacobiRoots",
          "module": "JacobiRoots",
          "name": "JacobiRoots",
          "package": "jacobi-roots",
          "partial": "Jacobi Roots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jacobi-roots/docs/JacobiRoots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eroots of shifted Jacobi polynomials with alpha=0, beta=0\n\u003c/p\u003e",
          "module": "JacobiRoots",
          "name": "allShiftedLegendreRoots",
          "package": "jacobi-roots",
          "signature": "Vector (Vector Double)",
          "source": "src/JacobiRoots.html#allShiftedLegendreRoots",
          "type": "function"
        },
        "index": {
          "description": "roots of shifted Jacobi polynomials with alpha beta",
          "hierarchy": "JacobiRoots",
          "module": "JacobiRoots",
          "name": "allShiftedLegendreRoots",
          "package": "jacobi-roots",
          "partial": "Shifted Legendre Roots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jacobi-roots/docs/JacobiRoots.html#v:allShiftedLegendreRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eroots of shifted Jacobi polynomials with alpha=1, beta=0\n\u003c/p\u003e",
          "module": "JacobiRoots",
          "name": "allShiftedRadauRoots",
          "package": "jacobi-roots",
          "signature": "Vector (Vector Double)",
          "source": "src/JacobiRoots.html#allShiftedRadauRoots",
          "type": "function"
        },
        "index": {
          "description": "roots of shifted Jacobi polynomials with alpha beta",
          "hierarchy": "JacobiRoots",
          "module": "JacobiRoots",
          "name": "allShiftedRadauRoots",
          "package": "jacobi-roots",
          "partial": "Shifted Radau Roots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jacobi-roots/docs/JacobiRoots.html#v:allShiftedRadauRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the roots of the Nth shifted Legendre polynomial\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eshiftedLegendreRoots\u003c/a\u003e\u003c/code\u003e == (\u003ccode\u003e\u003ca\u003eallShiftedLegendreRoots\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e!?\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ (print . shiftedLegendreRoots) [0..3]\n\u003c/code\u003e\u003c/strong\u003eJust (fromList [])\nJust (fromList [0.5])\nJust (fromList [0.2113248654051871,0.7886751345948129])\nJust (fromList [0.11270166537925831,0.5,0.8872983346207417])\n\u003c/pre\u003e",
          "module": "JacobiRoots",
          "name": "shiftedLegendreRoots",
          "package": "jacobi-roots",
          "signature": "Int -\u003e Maybe (Vector Double)",
          "source": "src/JacobiRoots.html#shiftedLegendreRoots",
          "type": "function"
        },
        "index": {
          "description": "get the roots of the Nth shifted Legendre polynomial shiftedLegendreRoots allShiftedLegendreRoots mapM print shiftedLegendreRoots Just fromList Just fromList Just fromList Just fromList",
          "hierarchy": "JacobiRoots",
          "module": "JacobiRoots",
          "name": "shiftedLegendreRoots",
          "normalized": "Int-\u003eMaybe(Vector Double)",
          "package": "jacobi-roots",
          "partial": "Legendre Roots",
          "signature": "Int-\u003eMaybe(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jacobi-roots/docs/JacobiRoots.html#v:shiftedLegendreRoots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the roots of the Nth shifted Radau polynomial\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eshiftedRadauRoots\u003c/a\u003e\u003c/code\u003e == (\u003ccode\u003e\u003ca\u003eallShiftedRadauRoots\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e!?\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ (print . shiftedRadauRoots) [0..3]\n\u003c/code\u003e\u003c/strong\u003eJust (fromList [])\nJust (fromList [0.3333333333333333])\nJust (fromList [0.1550510257216822,0.6449489742783178])\nJust (fromList [8.858795951270394e-2,0.4094668644407347,0.787659461760847])\n\u003c/pre\u003e",
          "module": "JacobiRoots",
          "name": "shiftedRadauRoots",
          "package": "jacobi-roots",
          "signature": "Int -\u003e Maybe (Vector Double)",
          "source": "src/JacobiRoots.html#shiftedRadauRoots",
          "type": "function"
        },
        "index": {
          "description": "get the roots of the Nth shifted Radau polynomial shiftedRadauRoots allShiftedRadauRoots mapM print shiftedRadauRoots Just fromList Just fromList Just fromList Just fromList e-2",
          "hierarchy": "JacobiRoots",
          "module": "JacobiRoots",
          "name": "shiftedRadauRoots",
          "normalized": "Int-\u003eMaybe(Vector Double)",
          "package": "jacobi-roots",
          "partial": "Radau Roots",
          "signature": "Int-\u003eMaybe(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jacobi-roots/docs/JacobiRoots.html#v:shiftedRadauRoots"
      }
    }
  ]
]