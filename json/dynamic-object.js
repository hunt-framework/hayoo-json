[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we use \u003ccode\u003edynamic-object\u003c/code\u003e to descibe the concept of point-like particles from\n classical mechanics. Also read the HSpec tests :\n \u003ca\u003ehttps://github.com/nushio3/dynamic-object/blob/master/test/ObjectSpec.hs\u003c/a\u003e\n for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html",
        "fct-type": "module",
        "title": "PointParticle"
      },
      "index": {
        "description": "Here we use dynamic-object to descibe the concept of point-like particles from classical mechanics Also read the HSpec tests https github.com nushio3 dynamic-object blob master test ObjectSpec.hs for more details",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "PointParticle",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Point Particle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:KineticEnergy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ekineticEnergy\u003c/a\u003e\u003c/code\u003e, unless given explicitly, is defined in terms of \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#KineticEnergy",
        "fct-type": "data",
        "title": "KineticEnergy"
      },
      "index": {
        "description": "kineticEnergy unless given explicitly is defined in terms of mass and velocity",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "KineticEnergy",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Kinetic Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Mass",
      "description": {
        "fct-descr": "\u003cp\u003eNow, let us introduce the concepts of \u003ccode\u003e\u003ca\u003eMass\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVelocity\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eMomentum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eKineticEnergy\u003c/a\u003e\u003c/code\u003e. Any such concepts are described\n in terms of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e labels.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Mass",
        "fct-type": "data",
        "title": "Mass"
      },
      "index": {
        "description": "Now let us introduce the concepts of Mass Velocity Momentum and KineticEnergy Any such concepts are described in terms of Member labels",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Mass",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Momentum",
      "description": {
        "fct-descr": "\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003emomentum\u003c/a\u003e\u003c/code\u003e field is missing, we re-calculate it\n from the \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Momentum",
        "fct-type": "data",
        "title": "Momentum"
      },
      "index": {
        "description": "If the momentum field is missing we re-calculate it from the mass and velocity",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Momentum",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Momentum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Vec",
      "description": {
        "fct-descr": "\u003cp\u003eFirst, let us create a tiny two-dimensional vector class.\n We make it an instance of \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e to use them later for tests.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Vec",
        "fct-type": "data",
        "title": "Vec"
      },
      "index": {
        "description": "First let us create tiny two-dimensional vector class We make it an instance of Arbitrary to use them later for tests",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Vec",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Velocity",
      "description": {
        "fct-descr": "\u003cp\u003eTo define a member with compound types like vector of real numbers,\n we use \u003ccode\u003e\u003ca\u003eUnderlyingReal\u003c/a\u003e\u003c/code\u003e to\n ask the object which real value it prefers, then put the response\n into the type constructors.\n\u003c/p\u003e\u003cp\u003eWe also give a fallback accessor here. If the \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e field is missing, we attempt to re-calculate it\n from the \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emomentum\u003c/a\u003e\u003c/code\u003e. Here is how we can do that.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Velocity",
        "fct-type": "data",
        "title": "Velocity"
      },
      "index": {
        "description": "To define member with compound types like vector of real numbers we use UnderlyingReal to ask the object which real value it prefers then put the response into the type constructors We also give fallback accessor here If the velocity field is missing we attempt to re-calculate it from the mass and momentum Here is how we can do that",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Velocity",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:KineticEnergy",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "KineticEnergy",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#KineticEnergy",
        "fct-type": "function",
        "title": "KineticEnergy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "KineticEnergy",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Kinetic Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Mass",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "Mass",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Mass",
        "fct-type": "function",
        "title": "Mass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Mass",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Mass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Momentum",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "Momentum",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Momentum",
        "fct-type": "function",
        "title": "Momentum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Momentum",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Momentum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Vec",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "Vec a a",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Vec",
        "fct-type": "function",
        "title": "Vec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Vec",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Velocity",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "Velocity",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Velocity",
        "fct-type": "function",
        "title": "Velocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "Velocity",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Velocity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:banana",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#banana",
        "fct-type": "function",
        "title": "banana"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "banana",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:duck",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#duck",
        "fct-type": "function",
        "title": "duck"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "duck",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:envelope",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#envelope",
        "fct-type": "function",
        "title": "envelope"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "envelope",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:fromMassMomentum",
      "description": {
        "fct-descr": "\u003cp\u003eWe can also construct a point particle from\n   its mass and momentum.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "real -\u003e Vec real -\u003e o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#fromMassMomentum",
        "fct-type": "function",
        "title": "fromMassMomentum"
      },
      "index": {
        "description": "We can also construct point particle from its mass and momentum",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "fromMassMomentum",
        "normalized": "a-\u003eVec a-\u003eb",
        "package": "dynamic-object",
        "partial": "Mass Momentum",
        "signature": "real-\u003eVec real-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:fromMassVelocity",
      "description": {
        "fct-descr": "\u003cp\u003eWe can write functions that would construct a point particle from\n   its mass and velocity. And we can make the function polymorphic over the\n   representation of the real numbers the objects prefer.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "real -\u003e Vec real -\u003e o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#fromMassVelocity",
        "fct-type": "function",
        "title": "fromMassVelocity"
      },
      "index": {
        "description": "We can write functions that would construct point particle from its mass and velocity And we can make the function polymorphic over the representation of the real numbers the objects prefer",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "fromMassVelocity",
        "normalized": "a-\u003eVec a-\u003eb",
        "package": "dynamic-object",
        "partial": "Mass Velocity",
        "signature": "real-\u003eVec real-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:ghost",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#ghost",
        "fct-type": "function",
        "title": "ghost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "ghost",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:kineticEnergy",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "MemberLens o KineticEnergy",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#kineticEnergy",
        "fct-type": "function",
        "title": "kineticEnergy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "kineticEnergy",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:laserBeam",
      "description": {
        "fct-descr": "\u003cp\u003eWe define an instance of point-like particle.  And again, we can\n keep it polymorphic, so that anyone can choose its concrete type\n later, according to their purpose.  Thus we will achieve the\n polymorphic encoding of the knowledge of this world, in Haskell.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(laserBeam :: Object DIT) ^? kineticEnergy\n\u003c/code\u003e\u003c/strong\u003eJust 1631.25\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(laserBeam :: Object Precise) ^? kineticEnergy\n\u003c/code\u003e\u003c/strong\u003eJust (6525 % 4)\n\u003c/pre\u003e\u003cp\u003eMoreover, we can ask Ichiro to sign the ball. Usually, we needed to\n create a new data-type to add a new field. But with\n 'dynamic-object' we can do so without changing the type of the\n ball. So, we can put our precious, one-of-a-kind ball\n into toybox together with less uncommon balls, and with various\n other toys. And still, we can safely access the contents of the\n toybox without runtime errors, and e.g. see which toy is the heaviest.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (mySpecialBall :: Object DIT) = laserBeam & insert Autograph \"Ichiro Suzuki\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet toybox = [laserBeam, mySpecialBall]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet toybox2 = toybox ++ [duck, lens, banana, envelope, ghost]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum $ mapMaybe (^?mass) toybox2\n\u003c/code\u003e\u003c/strong\u003e5.2\n\u003c/pre\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#laserBeam",
        "fct-type": "function",
        "title": "laserBeam"
      },
      "index": {
        "description": "We define an instance of point-like particle And again we can keep it polymorphic so that anyone can choose its concrete type later according to their purpose Thus we will achieve the polymorphic encoding of the knowledge of this world in Haskell laserBeam Object DIT kineticEnergy Just laserBeam Object Precise kineticEnergy Just Moreover we can ask Ichiro to sign the ball Usually we needed to create new data-type to add new field But with dynamic-object we can do so without changing the type of the ball So we can put our precious one-of-a-kind ball into toybox together with less uncommon balls and with various other toys And still we can safely access the contents of the toybox without runtime errors and e.g see which toy is the heaviest let mySpecialBall Object DIT laserBeam insert Autograph Ichiro Suzuki let toybox laserBeam mySpecialBall let toybox2 toybox duck lens banana envelope ghost maximum mapMaybe mass toybox2",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "laserBeam",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Beam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:lens",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#lens",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "lens",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:mass",
      "description": {
        "fct-descr": "\u003cp\u003eNow we define the lenses.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "MemberLens o Mass",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#mass",
        "fct-type": "function",
        "title": "mass"
      },
      "index": {
        "description": "Now we define the lenses",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "mass",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:momentum",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "MemberLens o Momentum",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#momentum",
        "fct-type": "function",
        "title": "momentum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "momentum",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:velocity",
      "description": {
        "fct-module": "Data.Object.Dynamic.Examples.PointParticle",
        "fct-package": "dynamic-object",
        "fct-signature": "MemberLens o Velocity",
        "fct-source": "src/Data-Object-Dynamic-Examples-PointParticle.html#velocity",
        "fct-type": "function",
        "title": "velocity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Examples PointParticle",
        "module": "Data.Object.Dynamic.Examples.PointParticle",
        "name": "velocity",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides two presets for the \u003ccode\u003eObject\u003c/code\u003e:\n \u003ccode\u003e\u003ca\u003eDIT\u003c/a\u003e\u003c/code\u003e for daily use, and \u003ccode\u003e\u003ca\u003ePrecise\u003c/a\u003e\u003c/code\u003e for arbitrary precision calculations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Object.Dynamic.Presets",
        "fct-package": "dynamic-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Dynamic-Presets.html",
        "fct-type": "module",
        "title": "Presets"
      },
      "index": {
        "description": "This module provides two presets for the Object DIT for daily use and Precise for arbitrary precision calculations",
        "hierarchy": "Data Object Dynamic Presets",
        "module": "Data.Object.Dynamic.Presets",
        "name": "Presets",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Presets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#t:DIT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eObject\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDIT\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for real numbers, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e for integers and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \n for strings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingReal (Object DIT) ~ Double) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingInteger (Object DIT) ~ Int) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingString (Object DIT) ~ Data.Text.Text) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Data.Object.Dynamic.Presets",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Presets.html#DIT",
        "fct-type": "data",
        "title": "DIT"
      },
      "index": {
        "description": "Object DIT uses Double for real numbers Int for integers and Text for strings typechecks UnderlyingReal Object DIT Double Bool True typechecks UnderlyingInteger Object DIT Int Bool True typechecks UnderlyingString Object DIT Data.Text.Text Bool True",
        "hierarchy": "Data Object Dynamic Presets",
        "module": "Data.Object.Dynamic.Presets",
        "name": "DIT",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "DIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#t:Precise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eObject\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePrecise\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for real numbers, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e for integers and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \n for strings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingReal (Object Precise) ~ Rational) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingInteger (Object Precise) ~ Integer) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingString (Object Precise) ~ Data.Text.Text) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Data.Object.Dynamic.Presets",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Presets.html#Precise",
        "fct-type": "data",
        "title": "Precise"
      },
      "index": {
        "description": "Object Precise uses Double for real numbers Int for integers and Text for strings typechecks UnderlyingReal Object Precise Rational Bool True typechecks UnderlyingInteger Object Precise Integer Bool True typechecks UnderlyingString Object Precise Data.Text.Text Bool True",
        "hierarchy": "Data Object Dynamic Presets",
        "module": "Data.Object.Dynamic.Presets",
        "name": "Precise",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Precise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Dynamic-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Type",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Acyclic",
      "description": {
        "fct-descr": "\u003cp\u003eAcyclic monad is used to lookup a member of the object\n   with infinite-loop detection.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Acyclic",
        "fct-type": "type",
        "title": "Acyclic"
      },
      "index": {
        "description": "Acyclic monad is used to lookup member of the object with infinite-loop detection",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Acyclic",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Acyclic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Member",
      "description": {
        "fct-descr": "\u003cp\u003eThis means that \u003ccode\u003ememb\u003c/code\u003e is one of the  member labels\n of \u003ccode\u003eo\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eValType\u003c/a\u003e\u003c/code\u003e of the member depends both on the label\n and (the underlying types of) the object.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Member",
        "fct-type": "class",
        "title": "Member"
      },
      "index": {
        "description": "This means that memb is one of the member labels of The ValType of the member depends both on the label and the underlying types of the object",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Member",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:MemberLens",
      "description": {
        "fct-descr": "\u003cp\u003eThe lens for accessing the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object-Dynamic-Type.html#MemberLens",
        "fct-type": "type",
        "title": "MemberLens"
      },
      "index": {
        "description": "The lens for accessing the Member of the Object",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "MemberLens",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Member Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type, where \u003ccode\u003eu\u003c/code\u003e carrying the information of its underlying types.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Object",
        "fct-type": "newtype",
        "title": "Object"
      },
      "index": {
        "description": "The Object type where carrying the information of its underlying types",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Object",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Objective",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eo\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e if given its type information,\n there is an equivalence between \u003ccode\u003eo\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Objective",
        "fct-type": "class",
        "title": "Objective"
      },
      "index": {
        "description": "is an Objective if given its type information there is an equivalence between and the Table",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Objective",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Objective",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e within an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e that carries all the member data.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Table",
        "fct-type": "newtype",
        "title": "Table"
      },
      "index": {
        "description": "The Table within an Object that carries all the member data",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Table",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:TableMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type within the table.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object-Dynamic-Type.html#TableMap",
        "fct-type": "type",
        "title": "TableMap"
      },
      "index": {
        "description": "The Map type within the table",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "TableMap",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Table Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:Object",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Object",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Object",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Object",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:Table",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Table",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Table",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "Table",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:acyclically",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Acyclic o (ValType o memb)-\u003e memb-\u003e Acyclic o (ValType o memb)",
        "fct-type": "function",
        "title": "acyclically"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "acyclically",
        "normalized": "Acyclic a(ValType a b)-\u003eb-\u003eAcyclic a(ValType a b)",
        "package": "dynamic-object",
        "partial": "",
        "signature": "Acyclic o(ValType o memb)-\u003ememb-\u003eAcyclic o(ValType o memb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a pair of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e label and a value, create the data field\n  for the member and inserts the value.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb -\u003e val -\u003e o -\u003e o",
        "fct-source": "src/Data-Object-Dynamic-Type.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Given pair of Member label and value create the data field for the member and inserts the value",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "insert",
        "normalized": "a-\u003eb-\u003ec-\u003ec",
        "package": "dynamic-object",
        "partial": "",
        "signature": "memb-\u003eval-\u003eo-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:its",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb -\u003e Acyclic o (ValType o memb)",
        "fct-source": "src/Data-Object-Dynamic-Type.html#its",
        "fct-type": "function",
        "title": "its"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "its",
        "normalized": "a-\u003eAcyclic b(ValType b a)",
        "package": "dynamic-object",
        "partial": "",
        "signature": "memb-\u003eAcyclic o(ValType o memb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:memberLens",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb -\u003e MemberLens o memb",
        "fct-source": "src/Data-Object-Dynamic-Type.html#memberLens",
        "fct-type": "method",
        "title": "memberLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "memberLens",
        "normalized": "a-\u003eMemberLens b a",
        "package": "dynamic-object",
        "partial": "Lens",
        "signature": "memb-\u003eMemberLens o memb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:memberLookup",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb -\u003e Acyclic o (ValType o memb)",
        "fct-source": "src/Data-Object-Dynamic-Type.html#memberLookup",
        "fct-type": "method",
        "title": "memberLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "memberLookup",
        "normalized": "a-\u003eAcyclic b(ValType b a)",
        "package": "dynamic-object",
        "partial": "Lookup",
        "signature": "memb-\u003eAcyclic o(ValType o memb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLens",
      "description": {
        "fct-descr": "\u003cp\u003eA utility function for defining a \u003ccode\u003e\u003ca\u003eMemberLens\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb-\u003e MemberLens o memb",
        "fct-type": "function",
        "title": "mkMemberLens"
      },
      "index": {
        "description": "utility function for defining MemberLens",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "mkMemberLens",
        "normalized": "a-\u003eMemberLens b a",
        "package": "dynamic-object",
        "partial": "Member Lens",
        "signature": "memb-\u003eMemberLens o memb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLookup",
      "description": {
        "fct-descr": "\u003cp\u003eDefining a \u003ccode\u003eMemberLookup\u003c/code\u003e, without default.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb-\u003e Acyclic o (ValType o memb)",
        "fct-type": "function",
        "title": "mkMemberLookup"
      },
      "index": {
        "description": "Defining MemberLookup without default",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "mkMemberLookup",
        "normalized": "a-\u003eAcyclic b(ValType b a)",
        "package": "dynamic-object",
        "partial": "Member Lookup",
        "signature": "memb-\u003eAcyclic o(ValType o memb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLookupDef",
      "description": {
        "fct-descr": "\u003cp\u003eA utility function for defining a \u003ccode\u003eMemberLookup\u003c/code\u003e, with a default computation\n for the case the member is missing.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "memb-\u003e Acyclic o (ValType o memb)-\u003e Acyclic o (ValType o memb)",
        "fct-type": "function",
        "title": "mkMemberLookupDef"
      },
      "index": {
        "description": "utility function for defining MemberLookup with default computation for the case the member is missing",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "mkMemberLookupDef",
        "normalized": "a-\u003eAcyclic b(ValType b a)-\u003eAcyclic b(ValType b a)",
        "package": "dynamic-object",
        "partial": "Member Lookup Def",
        "signature": "memb-\u003eAcyclic o(ValType o memb)-\u003eAcyclic o(ValType o memb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:table",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Simple Iso o Table",
        "fct-source": "src/Data-Object-Dynamic-Type.html#table",
        "fct-type": "method",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "table",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:tableMap",
      "description": {
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Simple Iso o (Map TypeRep Dynamic)",
        "fct-source": "src/Data-Object-Dynamic-Type.html#tableMap",
        "fct-type": "method",
        "title": "tableMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "tableMap",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:unObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "Table",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Object",
        "fct-type": "function",
        "title": "unObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "unObject",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:unTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Dynamic.Type",
        "fct-package": "dynamic-object",
        "fct-signature": "TableMap",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Table",
        "fct-type": "function",
        "title": "unTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Type",
        "module": "Data.Object.Dynamic.Type",
        "name": "unTable",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#",
      "description": {
        "fct-module": "Data.Object.Dynamic.Underlying",
        "fct-package": "dynamic-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Dynamic-Underlying.html",
        "fct-type": "module",
        "title": "Underlying"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Dynamic Underlying",
        "module": "Data.Object.Dynamic.Underlying",
        "name": "Underlying",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Underlying",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseInteger",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlying integer types.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Underlying",
        "fct-package": "dynamic-object",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Dynamic-Underlying.html#UseInteger",
        "fct-type": "class",
        "title": "UseInteger"
      },
      "index": {
        "description": "Underlying integer types",
        "hierarchy": "Data Object Dynamic Underlying",
        "module": "Data.Object.Dynamic.Underlying",
        "name": "UseInteger",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Use Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseReal",
      "description": {
        "fct-descr": "\u003cp\u003eThe declaration of \u003ccode\u003einstance\u003c/code\u003e \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eobj\u003c/code\u003e , \u003ccode\u003einstance\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUseReal\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eobj\u003c/code\u003e means\n that the \u003ccode\u003eobj\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e and is ready to tell the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003es which type to use \n to represent the real numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Underlying",
        "fct-package": "dynamic-object",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Dynamic-Underlying.html#UseReal",
        "fct-type": "class",
        "title": "UseReal"
      },
      "index": {
        "description": "The declaration of instance Objective obj instance UseReal obj means that the obj is an Object and is ready to tell the Member which type to use to represent the real numbers",
        "hierarchy": "Data Object Dynamic Underlying",
        "module": "Data.Object.Dynamic.Underlying",
        "name": "UseReal",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Use Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseString",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlying string types.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic.Underlying",
        "fct-package": "dynamic-object",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Dynamic-Underlying.html#UseString",
        "fct-type": "class",
        "title": "UseString"
      },
      "index": {
        "description": "Underlying string types",
        "hierarchy": "Data Object Dynamic Underlying",
        "module": "Data.Object.Dynamic.Underlying",
        "name": "UseString",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Use String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports things needed to use \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es, \n and adds a few utility functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Object.Dynamic",
        "fct-package": "dynamic-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Dynamic.html",
        "fct-type": "module",
        "title": "Dynamic"
      },
      "index": {
        "description": "This module re-exports things needed to use Object and adds few utility functions",
        "hierarchy": "Data Object Dynamic",
        "module": "Data.Object.Dynamic",
        "name": "Dynamic",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#t:MemberLens",
      "description": {
        "fct-descr": "\u003cp\u003eThe lens for accessing the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic",
        "fct-package": "dynamic-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object-Dynamic-Type.html#MemberLens",
        "fct-type": "type",
        "title": "MemberLens"
      },
      "index": {
        "description": "The lens for accessing the Member of the Object",
        "hierarchy": "Data Object Dynamic",
        "module": "Data.Object.Dynamic",
        "name": "MemberLens",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Member Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type, where \u003ccode\u003eu\u003c/code\u003e carrying the information of its underlying types.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic",
        "fct-package": "dynamic-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Dynamic-Type.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "The Object type where carrying the information of its underlying types",
        "hierarchy": "Data Object Dynamic",
        "module": "Data.Object.Dynamic",
        "name": "Object",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty object.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic",
        "fct-package": "dynamic-object",
        "fct-signature": "o",
        "fct-source": "src/Data-Object-Dynamic.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty object",
        "hierarchy": "Data Object Dynamic",
        "module": "Data.Object.Dynamic",
        "name": "empty",
        "normalized": "",
        "package": "dynamic-object",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a pair of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e label and a value, create the data field\n  for the member and inserts the value.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Dynamic",
        "fct-package": "dynamic-object",
        "fct-signature": "memb -\u003e val -\u003e o -\u003e o",
        "fct-source": "src/Data-Object-Dynamic-Type.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Given pair of Member label and value create the data field for the member and inserts the value",
        "hierarchy": "Data Object Dynamic",
        "module": "Data.Object.Dynamic",
        "name": "insert",
        "normalized": "a-\u003eb-\u003ec-\u003ec",
        "package": "dynamic-object",
        "partial": "",
        "signature": "memb-\u003eval-\u003eo-\u003eo"
      }
    }
  }
]