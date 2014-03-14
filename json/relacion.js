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
        "word": "relacion"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEl contenedor Relacin modela asociaciones dos elementos.\n    Ofrece bsqueda eficiente por cualquiera de los dos elementos. \n\u003c/p\u003e\u003cp\u003eEs similar a Data.Map en que asocia llaves (k) con valores (v).\n\u003c/p\u003e\u003cp\u003eA diferencia del contenedor Data.Map, un elemento \n    puede estar asociado ms de una vez.   \n\u003c/p\u003e\u003cp\u003eLos dos propsito fundamentales de esta estructura son\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Asociar elementos.\n    2. Ofrecer eficiencia en bsquedas por cualquiera de los \n       dos elementos.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eComo no estn implementados ni map ni fold, debe convertir\n    la estructura en una lista para procesarla secuencialmente.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Relacion",
          "name": "Relacion",
          "package": "relacion",
          "source": "src/Data-Relacion.html",
          "type": "module"
        },
        "index": {
          "description": "El contenedor Relacin modela asociaciones dos elementos Ofrece bsqueda eficiente por cualquiera de los dos elementos Es similar Data.Map en que asocia llaves con valores diferencia del contenedor Data.Map un elemento puede estar asociado ms de una vez Los dos propsito fundamentales de esta estructura son Asociar elementos Ofrecer eficiencia en bsquedas por cualquiera de los dos elementos Como no estn implementados ni map ni fold debe convertir la estructura en una lista para procesarla secuencialmente",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "Relacion",
          "package": "relacion",
          "partial": "Relacion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relacion",
          "name": "Relación",
          "package": "relacion",
          "source": "src/Data-Relacion.html#Relaci%F3n",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "Relación",
          "package": "relacion",
          "partial": "Relación",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#t:Relaci-243-n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relacion",
          "name": "(|$\u003e)",
          "package": "relacion",
          "signature": "Set a -\u003e Set b -\u003e Relación a b -\u003e Set b",
          "source": "src/Data-Relacion.html#%7C%24%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "(|$\u003e) |$\u003e",
          "normalized": "Set a-\u003eSet b-\u003eRelación a b-\u003eSet b",
          "package": "relacion",
          "signature": "Set a-\u003eSet b-\u003eRelación a b-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:-124--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestriccin de rango para una relacin. Modelado como en z.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "(|\u003e)",
          "package": "relacion",
          "signature": "Relación a b -\u003e Set b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Restriccin de rango para una relacin Modelado como en",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "(|\u003e) |\u003e",
          "normalized": "Relación a b-\u003eSet b-\u003eRelación a b",
          "package": "relacion",
          "signature": "Relación a b-\u003eSet b-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestriccin de dominio para una relacin. Modelado como en z.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "(\u003c|)",
          "package": "relacion",
          "signature": "Set a -\u003e Relación a b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Restriccin de dominio para una relacin Modelado como en",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "(\u003c|) \u003c|",
          "normalized": "Set a-\u003eRelación a b-\u003eRelación a b",
          "package": "relacion",
          "signature": "Set a-\u003eRelación a b-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementacin primitiva para el operador de \n     seleccin a la izquierda o a la derecha. \n\u003c/p\u003e\u003cp\u003ePICA provee dos operadores |\u003e y \u003c|,\n     respectivamente |$\u003e y \u003c$| en esta biblioteca, que trabajan\n     sobre una Relacin y OIS's. PICA expone los operadores\n     definidos ac, para no romper con la abstraccin del\n     tipo de datos Relacin y porque teniendo acceso a los\n     componentes escondidos de Relacin, es ms eficiente\n     la implementacin de la operacin de restriccin.\n\u003c/p\u003e\u003cp\u003e(a \u003c$| b) r \n\u003c/p\u003e\u003cp\u003ese lee: por cada elemento \u003ccode\u003eb\u003c/code\u003e del conjunto \u003ccode\u003eB\u003c/code\u003e,\n              seleccione un elemento \u003ccode\u003ea\u003c/code\u003e del conjunto \u003ccode\u003eA\u003c/code\u003e\n              si \u003ccode\u003ea\u003c/code\u003e est relacionado con \u003ccode\u003eb\u003c/code\u003e en la relacin \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(a |$\u003e b) r\n\u003c/p\u003e\u003cp\u003ese lee: por cada elemento \u003ccode\u003ea\u003c/code\u003e del conjunto \u003ccode\u003eA\u003c/code\u003e, \n              seleccione un elemento \u003ccode\u003eb\u003c/code\u003e del conjunto \u003ccode\u003eB\u003c/code\u003e\n              si \u003ccode\u003ea\u003c/code\u003e est relacionado con \u003ccode\u003eb\u003c/code\u003e en la relacin \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCon respecto a los operadores de restriccin de dominio\n    y restriccin de rango del lenguaje Z que devuelven una relacin,\n    los descritos son diferentes y devuelven el dominio o el rango.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "(\u003c$|)",
          "package": "relacion",
          "signature": "Set a -\u003e Set b -\u003e Relación a b -\u003e Set a",
          "source": "src/Data-Relacion.html#%3C%24%7C",
          "type": "function"
        },
        "index": {
          "description": "Implementacin primitiva para el operador de seleccin la izquierda la derecha PICA provee dos operadores respectivamente en esta biblioteca que trabajan sobre una Relacin OIS PICA expone los operadores definidos ac para no romper con la abstraccin del tipo de datos Relacin porque teniendo acceso los componentes escondidos de Relacin es ms eficiente la implementacin de la operacin de restriccin se lee por cada elemento del conjunto seleccione un elemento del conjunto si est relacionado con en la relacin se lee por cada elemento del conjunto seleccione un elemento del conjunto si est relacionado con en la relacin Con respecto los operadores de restriccin de dominio restriccin de rango del lenguaje que devuelven una relacin los descritos son diferentes devuelven el dominio el rango",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "(\u003c$|) \u003c$|",
          "normalized": "Set a-\u003eSet b-\u003eRelación a b-\u003eSet a",
          "package": "relacion",
          "signature": "Set a-\u003eSet b-\u003eRelación a b-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:-60--36--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompacta un conjunto de conjuntos cuyos valores que pueden ser \n    \u003ccode\u003eJust (Set x)\u003c/code\u003e o \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLos casos \u003ccode\u003eNothing\u003c/code\u003e son purgados.\n\u003c/p\u003e\u003cp\u003eEs similar a \u003ccode\u003econcat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "compactarSet",
          "package": "relacion",
          "signature": "Set (Maybe (Set a)) -\u003e Set a",
          "source": "src/Data-Relacion.html#compactarSet",
          "type": "function"
        },
        "index": {
          "description": "Compacta un conjunto de conjuntos cuyos valores que pueden ser Just Set Nothing Los casos Nothing son purgados Es similar concat",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "compactarSet",
          "normalized": "Set(Maybe(Set a))-\u003eSet a",
          "package": "relacion",
          "partial": "Set",
          "signature": "Set(Maybe(Set a))-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:compactarSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemueve una asociacin de la relacin.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "delete",
          "package": "relacion",
          "signature": "a -\u003e b -\u003e Relación a b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remueve una asociacin de la relacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eRelación a b-\u003eRelación a b",
          "package": "relacion",
          "signature": "a-\u003eb-\u003eRelación a b-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevuelve el dominio de la relacin como un conjunto.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "dom",
          "package": "relacion",
          "signature": "Relación a b -\u003e Set a",
          "source": "src/Data-Relacion.html#dom",
          "type": "function"
        },
        "index": {
          "description": "Devuelve el dominio de la relacin como un conjunto",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "dom",
          "normalized": "Relación a b-\u003eSet a",
          "package": "relacion",
          "signature": "Relación a b-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruye una relacin sin elementos.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "empty",
          "package": "relacion",
          "signature": "Relación a b",
          "source": "src/Data-Relacion.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construye una relacin sin elementos",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "empty",
          "package": "relacion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLa lista debe tener formato [(k1, v1), (k2, v2),..,(kn, vn)].\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "fromList",
          "package": "relacion",
          "signature": "[(a, b)] -\u003e Relación a b",
          "source": "src/Data-Relacion.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "La lista debe tener formato k1 v1 k2 v2 kn vn",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eRelación a b",
          "package": "relacion",
          "partial": "List",
          "signature": "[(a,b)]-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserta la asociacin entre \u003ccode\u003e x \u003c/code\u003e y \u003ccode\u003e y \u003c/code\u003e en la relacin \u003ccode\u003e r \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "insert",
          "package": "relacion",
          "signature": "a -\u003e b -\u003e Relación a b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserta la asociacin entre en la relacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eRelación a b-\u003eRelación a b",
          "package": "relacion",
          "signature": "a-\u003eb-\u003eRelación a b-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEl conjunto de valores asociados a un valor del dominio.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "lookupDom",
          "package": "relacion",
          "signature": "a -\u003e Relación a b -\u003e Maybe (Set b)",
          "source": "src/Data-Relacion.html#lookupDom",
          "type": "function"
        },
        "index": {
          "description": "El conjunto de valores asociados un valor del dominio",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "lookupDom",
          "normalized": "a-\u003eRelación a b-\u003eMaybe(Set b)",
          "package": "relacion",
          "partial": "Dom",
          "signature": "a-\u003eRelación a b-\u003eMaybe(Set b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:lookupDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEl conjunto de valores asociados a un valor del rango.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "lookupRan",
          "package": "relacion",
          "signature": "b -\u003e Relación a b -\u003e Maybe (Set a)",
          "source": "src/Data-Relacion.html#lookupRan",
          "type": "function"
        },
        "index": {
          "description": "El conjunto de valores asociados un valor del rango",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "lookupRan",
          "normalized": "a-\u003eRelación b a-\u003eMaybe(Set b)",
          "package": "relacion",
          "partial": "Ran",
          "signature": "b-\u003eRelación a b-\u003eMaybe(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:lookupRan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue si la relacin contiene la asociacin \u003ccode\u003ex\u003c/code\u003e y \u003ccode\u003ey\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "member",
          "package": "relacion",
          "signature": "a -\u003e b -\u003e Relación a b -\u003e Bool",
          "source": "src/Data-Relacion.html#member",
          "type": "function"
        },
        "index": {
          "description": "True si la relacin contiene la asociacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "member",
          "normalized": "a-\u003eb-\u003eRelación a b-\u003eBool",
          "package": "relacion",
          "signature": "a-\u003eb-\u003eRelación a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue si el elemento \u003ccode\u003e x \u003c/code\u003e pertenece al dominio de \u003ccode\u003e r \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "memberDom",
          "package": "relacion",
          "signature": "a -\u003e Relación a b -\u003e Bool",
          "source": "src/Data-Relacion.html#memberDom",
          "type": "function"
        },
        "index": {
          "description": "True si el elemento pertenece al dominio de",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "memberDom",
          "normalized": "a-\u003eRelación a b-\u003eBool",
          "package": "relacion",
          "partial": "Dom",
          "signature": "a-\u003eRelación a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:memberDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue si el elemento pertenece al rango.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "memberRan",
          "package": "relacion",
          "signature": "b -\u003e Relación a b -\u003e Bool",
          "source": "src/Data-Relacion.html#memberRan",
          "type": "function"
        },
        "index": {
          "description": "True si el elemento pertenece al rango",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "memberRan",
          "normalized": "a-\u003eRelación b a-\u003eBool",
          "package": "relacion",
          "partial": "Ran",
          "signature": "b-\u003eRelación a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:memberRan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue si un par no pertenece a la relacin\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "notMember",
          "package": "relacion",
          "signature": "a -\u003e b -\u003e Relación a b -\u003e Bool",
          "source": "src/Data-Relacion.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "True si un par no pertenece la relacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "notMember",
          "normalized": "a-\u003eb-\u003eRelación a b-\u003eBool",
          "package": "relacion",
          "partial": "Member",
          "signature": "a-\u003eb-\u003eRelación a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue si la relacin est vaca.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "null",
          "package": "relacion",
          "signature": "Relación a b -\u003e Bool",
          "source": "src/Data-Relacion.html#null",
          "type": "function"
        },
        "index": {
          "description": "True si la relacin est vaca",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "null",
          "normalized": "Relación a b-\u003eBool",
          "package": "relacion",
          "signature": "Relación a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevuelve el rango de la relacin como un conjunto.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "ran",
          "package": "relacion",
          "signature": "Relación a b -\u003e Set b",
          "source": "src/Data-Relacion.html#ran",
          "type": "function"
        },
        "index": {
          "description": "Devuelve el rango de la relacin como un conjunto",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "ran",
          "normalized": "Relación a b-\u003eSet b",
          "package": "relacion",
          "signature": "Relación a b-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:ran"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruye una relacin compuesta por la asociacin de \u003ccode\u003ex\u003c/code\u003e y \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "singleton",
          "package": "relacion",
          "signature": "a -\u003e b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construye una relacin compuesta por la asociacin de",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eRelación a b",
          "package": "relacion",
          "signature": "a-\u003eb-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esize r\u003c/code\u003e devuelve la cantidad de tuplas en la relacin.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "size",
          "package": "relacion",
          "signature": "Relación a b -\u003e Int",
          "source": "src/Data-Relacion.html#size",
          "type": "function"
        },
        "index": {
          "description": "size devuelve la cantidad de tuplas en la relacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "size",
          "normalized": "Relación a b-\u003eInt",
          "package": "relacion",
          "signature": "Relación a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Relacion",
          "name": "toList",
          "package": "relacion",
          "signature": "Relación a b -\u003e [(a, b)]",
          "source": "src/Data-Relacion.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "toList",
          "normalized": "Relación a b-\u003e[(a,b)]",
          "package": "relacion",
          "partial": "List",
          "signature": "Relación a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLa relacin que resulta de unir dos relaciones \u003ccode\u003er\u003c/code\u003e y \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "union",
          "package": "relacion",
          "signature": "Relación a b -\u003e Relación a b -\u003e Relación a b",
          "source": "src/Data-Relacion.html#union",
          "type": "function"
        },
        "index": {
          "description": "La relacin que resulta de unir dos relaciones",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "union",
          "normalized": "Relación a b-\u003eRelación a b-\u003eRelación a b",
          "package": "relacion",
          "signature": "Relación a b-\u003eRelación a b-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatena una lista de relaciones en una sola relacin.\n\u003c/p\u003e",
          "module": "Data.Relacion",
          "name": "unions",
          "package": "relacion",
          "signature": "[Relación a b] -\u003e Relación a b",
          "source": "src/Data-Relacion.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Concatena una lista de relaciones en una sola relacin",
          "hierarchy": "Data Relacion",
          "module": "Data.Relacion",
          "name": "unions",
          "normalized": "[Relación a b]-\u003eRelación a b",
          "package": "relacion",
          "signature": "[Relación a b]-\u003eRelación a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/relacion/docs/Data-Relacion.html#v:unions"
      }
    }
  ]
]