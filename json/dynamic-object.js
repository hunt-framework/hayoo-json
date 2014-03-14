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
        "word": "dynamic-object"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we use \u003ccode\u003edynamic-object\u003c/code\u003e to descibe the concept of point-like particles from\n classical mechanics. Also read the HSpec tests :\n \u003ca\u003ehttps://github.com/nushio3/dynamic-object/blob/master/test/ObjectSpec.hs\u003c/a\u003e\n for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "PointParticle",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html",
          "type": "module"
        },
        "index": {
          "description": "Here we use dynamic-object to descibe the concept of point-like particles from classical mechanics Also read the HSpec tests https github.com nushio3 dynamic-object blob master test ObjectSpec.hs for more details",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "PointParticle",
          "package": "dynamic-object",
          "partial": "Point Particle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ekineticEnergy\u003c/a\u003e\u003c/code\u003e, unless given explicitly, is defined in terms of \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "KineticEnergy",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#KineticEnergy",
          "type": "data"
        },
        "index": {
          "description": "kineticEnergy unless given explicitly is defined in terms of mass and velocity",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "KineticEnergy",
          "package": "dynamic-object",
          "partial": "Kinetic Energy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:KineticEnergy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow, let us introduce the concepts of \u003ccode\u003e\u003ca\u003eMass\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVelocity\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eMomentum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eKineticEnergy\u003c/a\u003e\u003c/code\u003e. Any such concepts are described\n in terms of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e labels.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Mass",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Mass",
          "type": "data"
        },
        "index": {
          "description": "Now let us introduce the concepts of Mass Velocity Momentum and KineticEnergy Any such concepts are described in terms of Member labels",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Mass",
          "package": "dynamic-object",
          "partial": "Mass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003emomentum\u003c/a\u003e\u003c/code\u003e field is missing, we re-calculate it\n from the \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Momentum",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Momentum",
          "type": "data"
        },
        "index": {
          "description": "If the momentum field is missing we re-calculate it from the mass and velocity",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Momentum",
          "package": "dynamic-object",
          "partial": "Momentum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Momentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst, let us create a tiny two-dimensional vector class.\n We make it an instance of \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e to use them later for tests.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Vec",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Vec",
          "type": "data"
        },
        "index": {
          "description": "First let us create tiny two-dimensional vector class We make it an instance of Arbitrary to use them later for tests",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Vec",
          "package": "dynamic-object",
          "partial": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo define a member with compound types like vector of real numbers,\n we use \u003ccode\u003e\u003ca\u003eUnderlyingReal\u003c/a\u003e\u003c/code\u003e to\n ask the object which real value it prefers, then put the response\n into the type constructors.\n\u003c/p\u003e\u003cp\u003eWe also give a fallback accessor here. If the \u003ccode\u003e\u003ca\u003evelocity\u003c/a\u003e\u003c/code\u003e field is missing, we attempt to re-calculate it\n from the \u003ccode\u003e\u003ca\u003emass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emomentum\u003c/a\u003e\u003c/code\u003e. Here is how we can do that.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Velocity",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Velocity",
          "type": "data"
        },
        "index": {
          "description": "To define member with compound types like vector of real numbers we use UnderlyingReal to ask the object which real value it prefers then put the response into the type constructors We also give fallback accessor here If the velocity field is missing we attempt to re-calculate it from the mass and momentum Here is how we can do that",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Velocity",
          "package": "dynamic-object",
          "partial": "Velocity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#t:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "KineticEnergy",
          "package": "dynamic-object",
          "signature": "KineticEnergy",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#KineticEnergy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "KineticEnergy",
          "package": "dynamic-object",
          "partial": "Kinetic Energy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:KineticEnergy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Mass",
          "package": "dynamic-object",
          "signature": "Mass",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Mass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Mass",
          "package": "dynamic-object",
          "partial": "Mass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Momentum",
          "package": "dynamic-object",
          "signature": "Momentum",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Momentum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Momentum",
          "package": "dynamic-object",
          "partial": "Momentum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Momentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Vec",
          "package": "dynamic-object",
          "signature": "Vec a a",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Vec",
          "package": "dynamic-object",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Velocity",
          "package": "dynamic-object",
          "signature": "Velocity",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#Velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "Velocity",
          "package": "dynamic-object",
          "partial": "Velocity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "banana",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#banana",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "banana",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:banana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "duck",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#duck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "duck",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:duck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "envelope",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#envelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "envelope",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can also construct a point particle from\n   its mass and momentum.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "fromMassMomentum",
          "package": "dynamic-object",
          "signature": "real -\u003e Vec real -\u003e o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#fromMassMomentum",
          "type": "function"
        },
        "index": {
          "description": "We can also construct point particle from its mass and momentum",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "fromMassMomentum",
          "normalized": "a-\u003eVec a-\u003eb",
          "package": "dynamic-object",
          "partial": "Mass Momentum",
          "signature": "real-\u003eVec real-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:fromMassMomentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can write functions that would construct a point particle from\n   its mass and velocity. And we can make the function polymorphic over the\n   representation of the real numbers the objects prefer.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "fromMassVelocity",
          "package": "dynamic-object",
          "signature": "real -\u003e Vec real -\u003e o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#fromMassVelocity",
          "type": "function"
        },
        "index": {
          "description": "We can write functions that would construct point particle from its mass and velocity And we can make the function polymorphic over the representation of the real numbers the objects prefer",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "fromMassVelocity",
          "normalized": "a-\u003eVec a-\u003eb",
          "package": "dynamic-object",
          "partial": "Mass Velocity",
          "signature": "real-\u003eVec real-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:fromMassVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "ghost",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#ghost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "ghost",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:ghost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "kineticEnergy",
          "package": "dynamic-object",
          "signature": "MemberLens o KineticEnergy",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#kineticEnergy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "kineticEnergy",
          "package": "dynamic-object",
          "partial": "Energy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:kineticEnergy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe define an instance of point-like particle.  And again, we can\n keep it polymorphic, so that anyone can choose its concrete type\n later, according to their purpose.  Thus we will achieve the\n polymorphic encoding of the knowledge of this world, in Haskell.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(laserBeam :: Object DIT) ^? kineticEnergy\n\u003c/code\u003e\u003c/strong\u003eJust 1631.25\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(laserBeam :: Object Precise) ^? kineticEnergy\n\u003c/code\u003e\u003c/strong\u003eJust (6525 % 4)\n\u003c/pre\u003e\u003cp\u003eMoreover, we can ask Ichiro to sign the ball. Usually, we needed to\n create a new data-type to add a new field. But with\n 'dynamic-object' we can do so without changing the type of the\n ball. So, we can put our precious, one-of-a-kind ball\n into toybox together with less uncommon balls, and with various\n other toys. And still, we can safely access the contents of the\n toybox without runtime errors, and e.g. see which toy is the heaviest.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (mySpecialBall :: Object DIT) = laserBeam & insert Autograph \"Ichiro Suzuki\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet toybox = [laserBeam, mySpecialBall]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet toybox2 = toybox ++ [duck, lens, banana, envelope, ghost]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum $ mapMaybe (^?mass) toybox2\n\u003c/code\u003e\u003c/strong\u003e5.2\n\u003c/pre\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "laserBeam",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#laserBeam",
          "type": "function"
        },
        "index": {
          "description": "We define an instance of point-like particle And again we can keep it polymorphic so that anyone can choose its concrete type later according to their purpose Thus we will achieve the polymorphic encoding of the knowledge of this world in Haskell laserBeam Object DIT kineticEnergy Just laserBeam Object Precise kineticEnergy Just Moreover we can ask Ichiro to sign the ball Usually we needed to create new data-type to add new field But with dynamic-object we can do so without changing the type of the ball So we can put our precious one-of-a-kind ball into toybox together with less uncommon balls and with various other toys And still we can safely access the contents of the toybox without runtime errors and e.g see which toy is the heaviest let mySpecialBall Object DIT laserBeam insert Autograph Ichiro Suzuki let toybox laserBeam mySpecialBall let toybox2 toybox duck lens banana envelope ghost maximum mapMaybe mass toybox2",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "laserBeam",
          "package": "dynamic-object",
          "partial": "Beam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:laserBeam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "lens",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "lens",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow we define the lenses.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "mass",
          "package": "dynamic-object",
          "signature": "MemberLens o Mass",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#mass",
          "type": "function"
        },
        "index": {
          "description": "Now we define the lenses",
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "mass",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "momentum",
          "package": "dynamic-object",
          "signature": "MemberLens o Momentum",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#momentum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "momentum",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:momentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "velocity",
          "package": "dynamic-object",
          "signature": "MemberLens o Velocity",
          "source": "src/Data-Object-Dynamic-Examples-PointParticle.html#velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Examples PointParticle",
          "module": "Data.Object.Dynamic.Examples.PointParticle",
          "name": "velocity",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Examples-PointParticle.html#v:velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides two presets for the \u003ccode\u003eObject\u003c/code\u003e:\n \u003ccode\u003e\u003ca\u003eDIT\u003c/a\u003e\u003c/code\u003e for daily use, and \u003ccode\u003e\u003ca\u003ePrecise\u003c/a\u003e\u003c/code\u003e for arbitrary precision calculations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Object.Dynamic.Presets",
          "name": "Presets",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Presets.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides two presets for the Object DIT for daily use and Precise for arbitrary precision calculations",
          "hierarchy": "Data Object Dynamic Presets",
          "module": "Data.Object.Dynamic.Presets",
          "name": "Presets",
          "package": "dynamic-object",
          "partial": "Presets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eObject\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDIT\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for real numbers, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e for integers and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \n for strings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingReal (Object DIT) ~ Double) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingInteger (Object DIT) ~ Int) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingString (Object DIT) ~ Data.Text.Text) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Object.Dynamic.Presets",
          "name": "DIT",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Presets.html#DIT",
          "type": "data"
        },
        "index": {
          "description": "Object DIT uses Double for real numbers Int for integers and Text for strings typechecks UnderlyingReal Object DIT Double Bool True typechecks UnderlyingInteger Object DIT Int Bool True typechecks UnderlyingString Object DIT Data.Text.Text Bool True",
          "hierarchy": "Data Object Dynamic Presets",
          "module": "Data.Object.Dynamic.Presets",
          "name": "DIT",
          "package": "dynamic-object",
          "partial": "DIT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#t:DIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eObject\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePrecise\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for real numbers, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e for integers and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \n for strings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingReal (Object Precise) ~ Rational) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingInteger (Object Precise) ~ Integer) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etypechecks :: (UnderlyingString (Object Precise) ~ Data.Text.Text) =\u003e Bool\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Object.Dynamic.Presets",
          "name": "Precise",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Presets.html#Precise",
          "type": "data"
        },
        "index": {
          "description": "Object Precise uses Double for real numbers Int for integers and Text for strings typechecks UnderlyingReal Object Precise Rational Bool True typechecks UnderlyingInteger Object Precise Integer Bool True typechecks UnderlyingString Object Precise Data.Text.Text Bool True",
          "hierarchy": "Data Object Dynamic Presets",
          "module": "Data.Object.Dynamic.Presets",
          "name": "Precise",
          "package": "dynamic-object",
          "partial": "Precise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Presets.html#t:Precise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "Type",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Type",
          "package": "dynamic-object",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcyclic monad is used to lookup a member of the object\n   with infinite-loop detection.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "Acyclic",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Acyclic",
          "type": "type"
        },
        "index": {
          "description": "Acyclic monad is used to lookup member of the object with infinite-loop detection",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Acyclic",
          "package": "dynamic-object",
          "partial": "Acyclic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Acyclic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis means that \u003ccode\u003ememb\u003c/code\u003e is one of the  member labels\n of \u003ccode\u003eo\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eValType\u003c/a\u003e\u003c/code\u003e of the member depends both on the label\n and (the underlying types of) the object.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "Member",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Member",
          "type": "class"
        },
        "index": {
          "description": "This means that memb is one of the member labels of The ValType of the member depends both on the label and the underlying types of the object",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Member",
          "package": "dynamic-object",
          "partial": "Member",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lens for accessing the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "MemberLens",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#MemberLens",
          "type": "type"
        },
        "index": {
          "description": "The lens for accessing the Member of the Object",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "MemberLens",
          "package": "dynamic-object",
          "partial": "Member Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:MemberLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type, where \u003ccode\u003eu\u003c/code\u003e carrying the information of its underlying types.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "Object",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Object",
          "type": "newtype"
        },
        "index": {
          "description": "The Object type where carrying the information of its underlying types",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Object",
          "package": "dynamic-object",
          "partial": "Object",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eo\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e if given its type information,\n there is an equivalence between \u003ccode\u003eo\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "Objective",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Objective",
          "type": "class"
        },
        "index": {
          "description": "is an Objective if given its type information there is an equivalence between and the Table",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Objective",
          "package": "dynamic-object",
          "partial": "Objective",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Objective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e within an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e that carries all the member data.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "Table",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Table",
          "type": "newtype"
        },
        "index": {
          "description": "The Table within an Object that carries all the member data",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Table",
          "package": "dynamic-object",
          "partial": "Table",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type within the table.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "TableMap",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#TableMap",
          "type": "type"
        },
        "index": {
          "description": "The Map type within the table",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "TableMap",
          "package": "dynamic-object",
          "partial": "Table Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#t:TableMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "Object",
          "package": "dynamic-object",
          "signature": "Object",
          "source": "src/Data-Object-Dynamic-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Object",
          "package": "dynamic-object",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "Table",
          "package": "dynamic-object",
          "signature": "Table",
          "source": "src/Data-Object-Dynamic-Type.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "Table",
          "package": "dynamic-object",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "acyclically",
          "package": "dynamic-object",
          "signature": "Acyclic o (ValType o memb)-\u003e memb-\u003e Acyclic o (ValType o memb)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "acyclically",
          "normalized": "Acyclic a(ValType a b)-\u003eb-\u003eAcyclic a(ValType a b)",
          "package": "dynamic-object",
          "signature": "Acyclic o(ValType o memb)-\u003ememb-\u003eAcyclic o(ValType o memb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:acyclically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e label and a value, create the data field\n  for the member and inserts the value.\n\u003c/p\u003e",
          "module": "[\"Data.Object.Dynamic.Type\",\"Data.Object.Dynamic\"]",
          "name": "insert",
          "package": "dynamic-object",
          "signature": "memb -\u003e val -\u003e o -\u003e o",
          "source": "src/Data-Object-Dynamic-Type.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:insert\",\"http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#v:insert\"]"
        },
        "index": {
          "description": "Given pair of Member label and value create the data field for the member and inserts the value",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "dynamic-object",
          "signature": "memb-\u003eval-\u003eo-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "its",
          "package": "dynamic-object",
          "signature": "memb -\u003e Acyclic o (ValType o memb)",
          "source": "src/Data-Object-Dynamic-Type.html#its",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "its",
          "normalized": "a-\u003eAcyclic b(ValType b a)",
          "package": "dynamic-object",
          "signature": "memb-\u003eAcyclic o(ValType o memb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:its"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "memberLens",
          "package": "dynamic-object",
          "signature": "memb -\u003e MemberLens o memb",
          "source": "src/Data-Object-Dynamic-Type.html#memberLens",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "memberLens",
          "normalized": "a-\u003eMemberLens b a",
          "package": "dynamic-object",
          "partial": "Lens",
          "signature": "memb-\u003eMemberLens o memb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:memberLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "memberLookup",
          "package": "dynamic-object",
          "signature": "memb -\u003e Acyclic o (ValType o memb)",
          "source": "src/Data-Object-Dynamic-Type.html#memberLookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "memberLookup",
          "normalized": "a-\u003eAcyclic b(ValType b a)",
          "package": "dynamic-object",
          "partial": "Lookup",
          "signature": "memb-\u003eAcyclic o(ValType o memb)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:memberLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function for defining a \u003ccode\u003e\u003ca\u003eMemberLens\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLens",
          "package": "dynamic-object",
          "signature": "memb-\u003e MemberLens o memb",
          "type": "function"
        },
        "index": {
          "description": "utility function for defining MemberLens",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLens",
          "normalized": "a-\u003eMemberLens b a",
          "package": "dynamic-object",
          "partial": "Member Lens",
          "signature": "memb-\u003eMemberLens o memb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefining a \u003ccode\u003eMemberLookup\u003c/code\u003e, without default.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLookup",
          "package": "dynamic-object",
          "signature": "memb-\u003e Acyclic o (ValType o memb)",
          "type": "function"
        },
        "index": {
          "description": "Defining MemberLookup without default",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLookup",
          "normalized": "a-\u003eAcyclic b(ValType b a)",
          "package": "dynamic-object",
          "partial": "Member Lookup",
          "signature": "memb-\u003eAcyclic o(ValType o memb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function for defining a \u003ccode\u003eMemberLookup\u003c/code\u003e, with a default computation\n for the case the member is missing.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLookupDef",
          "package": "dynamic-object",
          "signature": "memb-\u003e Acyclic o (ValType o memb)-\u003e Acyclic o (ValType o memb)",
          "type": "function"
        },
        "index": {
          "description": "utility function for defining MemberLookup with default computation for the case the member is missing",
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "mkMemberLookupDef",
          "normalized": "a-\u003eAcyclic b(ValType b a)-\u003eAcyclic b(ValType b a)",
          "package": "dynamic-object",
          "partial": "Member Lookup Def",
          "signature": "memb-\u003eAcyclic o(ValType o memb)-\u003eAcyclic o(ValType o memb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:mkMemberLookupDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "table",
          "package": "dynamic-object",
          "signature": "Simple Iso o Table",
          "source": "src/Data-Object-Dynamic-Type.html#table",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "table",
          "package": "dynamic-object",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "tableMap",
          "package": "dynamic-object",
          "signature": "Simple Iso o (Map TypeRep Dynamic)",
          "source": "src/Data-Object-Dynamic-Type.html#tableMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "tableMap",
          "package": "dynamic-object",
          "partial": "Map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:tableMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "unObject",
          "package": "dynamic-object",
          "signature": "Table",
          "source": "src/Data-Object-Dynamic-Type.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "unObject",
          "package": "dynamic-object",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:unObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Type",
          "name": "unTable",
          "package": "dynamic-object",
          "signature": "TableMap",
          "source": "src/Data-Object-Dynamic-Type.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Type",
          "module": "Data.Object.Dynamic.Type",
          "name": "unTable",
          "package": "dynamic-object",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Type.html#v:unTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Dynamic.Underlying",
          "name": "Underlying",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Underlying.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Object Dynamic Underlying",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "Underlying",
          "package": "dynamic-object",
          "partial": "Underlying",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying integer types.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseInteger",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Underlying.html#UseInteger",
          "type": "class"
        },
        "index": {
          "description": "Underlying integer types",
          "hierarchy": "Data Object Dynamic Underlying",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseInteger",
          "package": "dynamic-object",
          "partial": "Use Integer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe declaration of \u003ccode\u003einstance\u003c/code\u003e \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eobj\u003c/code\u003e , \u003ccode\u003einstance\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUseReal\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eobj\u003c/code\u003e means\n that the \u003ccode\u003eobj\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e and is ready to tell the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003es which type to use \n to represent the real numbers.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseReal",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Underlying.html#UseReal",
          "type": "class"
        },
        "index": {
          "description": "The declaration of instance Objective obj instance UseReal obj means that the obj is an Object and is ready to tell the Member which type to use to represent the real numbers",
          "hierarchy": "Data Object Dynamic Underlying",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseReal",
          "package": "dynamic-object",
          "partial": "Use Real",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying string types.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseString",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Underlying.html#UseString",
          "type": "class"
        },
        "index": {
          "description": "Underlying string types",
          "hierarchy": "Data Object Dynamic Underlying",
          "module": "Data.Object.Dynamic.Underlying",
          "name": "UseString",
          "package": "dynamic-object",
          "partial": "Use String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic-Underlying.html#t:UseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports things needed to use \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es, \n and adds a few utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Object.Dynamic",
          "name": "Dynamic",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports things needed to use Object and adds few utility functions",
          "hierarchy": "Data Object Dynamic",
          "module": "Data.Object.Dynamic",
          "name": "Dynamic",
          "package": "dynamic-object",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lens for accessing the \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic",
          "name": "MemberLens",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#MemberLens",
          "type": "type"
        },
        "index": {
          "description": "The lens for accessing the Member of the Object",
          "hierarchy": "Data Object Dynamic",
          "module": "Data.Object.Dynamic",
          "name": "MemberLens",
          "package": "dynamic-object",
          "partial": "Member Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#t:MemberLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e type, where \u003ccode\u003eu\u003c/code\u003e carrying the information of its underlying types.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic",
          "name": "Object",
          "package": "dynamic-object",
          "source": "src/Data-Object-Dynamic-Type.html#Object",
          "type": "data"
        },
        "index": {
          "description": "The Object type where carrying the information of its underlying types",
          "hierarchy": "Data Object Dynamic",
          "module": "Data.Object.Dynamic",
          "name": "Object",
          "package": "dynamic-object",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty object.\n\u003c/p\u003e",
          "module": "Data.Object.Dynamic",
          "name": "empty",
          "package": "dynamic-object",
          "signature": "o",
          "source": "src/Data-Object-Dynamic.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty object",
          "hierarchy": "Data Object Dynamic",
          "module": "Data.Object.Dynamic",
          "name": "empty",
          "package": "dynamic-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-object/docs/Data-Object-Dynamic.html#v:empty"
      }
    }
  ]
]