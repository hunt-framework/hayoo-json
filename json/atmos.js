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
        "word": "atmos"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "Atmosphere",
          "package": "atmos",
          "source": "src/Atmosphere.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "Atmosphere",
          "package": "atmos",
          "partial": "Atmosphere",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "Atmos",
          "package": "atmos",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "data"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "Atmos",
          "package": "atmos",
          "partial": "Atmos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#t:Atmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "Atmos",
          "package": "atmos",
          "signature": "Atmos",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "Atmos",
          "package": "atmos",
          "partial": "Atmos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:Atmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosDensity",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosDensity",
          "package": "atmos",
          "partial": "Density",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosKinematicViscosity",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosKinematicViscosity",
          "package": "atmos",
          "partial": "Kinematic Viscosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosKinematicViscosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosPressure",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosPressure",
          "package": "atmos",
          "partial": "Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosSpeedOfSound",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosSpeedOfSound",
          "package": "atmos",
          "partial": "Speed Of Sound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosSpeedOfSound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosTemperature",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosTemperature",
          "package": "atmos",
          "partial": "Temperature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosTemperature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Atmosphere",
          "name": "atmosViscosity",
          "package": "atmos",
          "signature": "a",
          "source": "src/Atmosphere-Atmosphere.html#Atmos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "atmosViscosity",
          "package": "atmos",
          "partial": "Viscosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:atmosViscosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatmosphere in SI units\n\u003c/p\u003e\u003cp\u003eInput: altitude in meters\n\u003c/p\u003e\u003cp\u003eOutput: (pressure, density, speed of sound, viscosity, kinematic viscosity)\n\u003c/p\u003e\u003cpre\u003e pressure            - N/m^2\n density             - kg/m^3\n speed of sound      - m/s\n viscosity           - N-s/m^2\n kinematic viscosity - m^2/s\n\u003c/pre\u003e",
          "module": "Atmosphere",
          "name": "siAtmosphere",
          "package": "atmos",
          "signature": "a -\u003e (a, a, a, a, a, a)",
          "source": "src/Atmosphere-Atmosphere.html#siAtmosphere",
          "type": "function"
        },
        "index": {
          "description": "atmosphere in SI units Input altitude in meters Output pressure density speed of sound viscosity kinematic viscosity pressure density kg speed of sound viscosity N-s kinematic viscosity",
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "siAtmosphere",
          "normalized": "a-\u003e(a,a,a,a,a,a)",
          "package": "atmos",
          "partial": "Atmosphere",
          "signature": "a-\u003e(a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:siAtmosphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatmosphere in SI units with ADT output\n\u003c/p\u003e",
          "module": "Atmosphere",
          "name": "siAtmosphere'",
          "package": "atmos",
          "signature": "a -\u003e Atmos a",
          "source": "src/Atmosphere-Atmosphere.html#siAtmosphere%27",
          "type": "function"
        },
        "index": {
          "description": "atmosphere in SI units with ADT output",
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "siAtmosphere'",
          "normalized": "a-\u003eAtmos a",
          "package": "atmos",
          "partial": "Atmosphere'",
          "signature": "a-\u003eAtmos a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:siAtmosphere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatmosphere in imperial units\n\u003c/p\u003e\u003cp\u003eInput: altitude in ft\n\u003c/p\u003e\u003cp\u003eOutput: (pressure, density, speed of sound, viscosity, kinematic viscosity)\n\u003c/p\u003e\u003cpre\u003e pressure            - lb/ft^2\n density             - slugs/ft^3\n speed of sound      - ft/s\n viscosity           - slugs/(ft-s)\n kinematic viscosity - ft^2/s\n\u003c/pre\u003e",
          "module": "Atmosphere",
          "name": "usAtmosphere",
          "package": "atmos",
          "signature": "a -\u003e (a, a, a, a, a, a)",
          "source": "src/Atmosphere-Atmosphere.html#usAtmosphere",
          "type": "function"
        },
        "index": {
          "description": "atmosphere in imperial units Input altitude in ft Output pressure density speed of sound viscosity kinematic viscosity pressure lb ft density slugs ft speed of sound ft viscosity slugs ft-s kinematic viscosity ft",
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "usAtmosphere",
          "normalized": "a-\u003e(a,a,a,a,a,a)",
          "package": "atmos",
          "partial": "Atmosphere",
          "signature": "a-\u003e(a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:usAtmosphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatmosphere in imperial units with ADT output\n\u003c/p\u003e",
          "module": "Atmosphere",
          "name": "usAtmosphere'",
          "package": "atmos",
          "signature": "a -\u003e Atmos a",
          "source": "src/Atmosphere-Atmosphere.html#usAtmosphere%27",
          "type": "function"
        },
        "index": {
          "description": "atmosphere in imperial units with ADT output",
          "hierarchy": "Atmosphere",
          "module": "Atmosphere",
          "name": "usAtmosphere'",
          "normalized": "a-\u003eAtmos a",
          "package": "atmos",
          "partial": "Atmosphere'",
          "signature": "a-\u003eAtmos a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atmos/docs/Atmosphere.html#v:usAtmosphere-39-"
      }
    }
  ]
]