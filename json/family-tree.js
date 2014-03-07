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
        "word": "family-tree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for Family Trees.\n\u003c/p\u003e\u003cp\u003eIt uses lenses for the manipulation of people. For the usage of lenses, see\n\u003ca\u003eControl.Lens\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIt is reccomended to use \u003ca\u003eData.Binary\u003c/a\u003e to do saving and loading.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for Family Trees It uses lenses for the manipulation of people For the usage of lenses see Control.Lens It is reccomended to use Data.Binary to do saving and loading",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "partial": "Family Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type for a family. Which person is head1 and which is head2 is\n arbitrary, but try to use a consistent rule\n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "Family",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "data"
        },
        "index": {
          "description": "The basic type for family Which person is head1 and which is head2 is arbitrary but try to use consistent rule",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Family",
          "package": "family-tree",
          "partial": "Family",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:Family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe core structure of a family tree.\n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#FamilyTree",
          "type": "data"
        },
        "index": {
          "description": "The core structure of family tree",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "partial": "Family Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:FamilyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "FamilyTreePart",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#FamilyTreePart",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "FamilyTreePart",
          "package": "family-tree",
          "partial": "Family Tree Part",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:FamilyTreePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Location type. Either a coordinate or a placename.  \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "Location",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#Location",
          "type": "data"
        },
        "index": {
          "description": "The Location type Either coordinate or placename",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Location",
          "package": "family-tree",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "PartialDate",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#PartialDate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "PartialDate",
          "package": "family-tree",
          "partial": "Partial Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:PartialDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type for a person. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e meaning unknown (or otherwise \n non-existent, for intance a death date for someone still alive) is a\n convention used throughout this library.\n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "Person",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "data"
        },
        "index": {
          "description": "The basic type for person Nothing meaning unknown or otherwise non-existent for intance death date for someone still alive is convention used throughout this library",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Person",
          "package": "family-tree",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Relationship type. Marriage is the default for similarity to GEDCOM.\n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "Relationship",
          "package": "family-tree",
          "source": "src/Data-FamilyTree.html#Relationship",
          "type": "data"
        },
        "index": {
          "description": "The Relationship type Marriage is the default for similarity to GEDCOM",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Relationship",
          "package": "family-tree",
          "partial": "Relationship",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#t:Relationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "Coord",
          "package": "family-tree",
          "signature": "Coord Double Double",
          "source": "src/Data-FamilyTree.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Coord",
          "package": "family-tree",
          "partial": "Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "Family",
          "package": "family-tree",
          "signature": "Family",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Family",
          "package": "family-tree",
          "partial": "Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:Family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "signature": "FamilyTree",
          "source": "src/Data-FamilyTree.html#FamilyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "FamilyTree",
          "package": "family-tree",
          "partial": "Family Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:FamilyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "Marriage",
          "package": "family-tree",
          "signature": "Marriage",
          "source": "src/Data-FamilyTree.html#Relationship",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Marriage",
          "package": "family-tree",
          "partial": "Marriage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:Marriage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "Other",
          "package": "family-tree",
          "signature": "Other Text",
          "source": "src/Data-FamilyTree.html#Relationship",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Other",
          "package": "family-tree",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "Person",
          "package": "family-tree",
          "signature": "Person",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "Person",
          "package": "family-tree",
          "partial": "Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "PlaceName",
          "package": "family-tree",
          "signature": "PlaceName Text",
          "source": "src/Data-FamilyTree.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "PlaceName",
          "package": "family-tree",
          "partial": "Place Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:PlaceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_attributes",
          "package": "family-tree",
          "signature": "HashMap Text Text",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_attributes",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_birthdate",
          "package": "family-tree",
          "signature": "Maybe PartialDate",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_birthdate",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_birthdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_birthplace",
          "package": "family-tree",
          "signature": "Maybe Location",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_birthplace",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_birthplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_children",
          "package": "family-tree",
          "signature": "IntSet",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_children",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_deathdate",
          "package": "family-tree",
          "signature": "Maybe PartialDate",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_deathdate",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_deathdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_deathplace",
          "package": "family-tree",
          "signature": "Maybe Location",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_deathplace",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_deathplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_families",
          "package": "family-tree",
          "signature": "Table Family",
          "source": "src/Data-FamilyTree.html#FamilyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_families",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_families"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_familyId",
          "package": "family-tree",
          "signature": "Int",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_familyId",
          "package": "family-tree",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_familyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_head1",
          "package": "family-tree",
          "signature": "Maybe Int",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_head1",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_head1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_head2",
          "package": "family-tree",
          "signature": "Maybe Int",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_head2",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_head2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_name",
          "package": "family-tree",
          "signature": "Maybe Text",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_name",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_people",
          "package": "family-tree",
          "signature": "Table Person",
          "source": "src/Data-FamilyTree.html#FamilyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_people",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_people"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_personId",
          "package": "family-tree",
          "signature": "Int",
          "source": "src/Data-FamilyTree.html#Person",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_personId",
          "package": "family-tree",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_personId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_relationFrom",
          "package": "family-tree",
          "signature": "Maybe PartialDate",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_relationFrom",
          "package": "family-tree",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_relationFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_relationTo",
          "package": "family-tree",
          "signature": "Maybe PartialDate",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_relationTo",
          "package": "family-tree",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_relationTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_relationship",
          "package": "family-tree",
          "signature": "Maybe Relationship",
          "source": "src/Data-FamilyTree.html#Family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_relationship",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_relationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "_treeName",
          "package": "family-tree",
          "signature": "Text",
          "source": "src/Data-FamilyTree.html#FamilyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "_treeName",
          "package": "family-tree",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:_treeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eaccessFT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e to the part of the family tree (either a \u003ccode\u003e\u003ca\u003ePerson\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eFamily\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "accessFT",
          "package": "family-tree",
          "signature": "Int -\u003e IndexedTraversal' Int FamilyTree part",
          "source": "src/Data-FamilyTree.html#accessFT",
          "type": "method"
        },
        "index": {
          "description": "accessFT is Traversal to the part of the family tree either Person or Family",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "accessFT",
          "normalized": "Int-\u003eIndexedTraversal' Int FamilyTree a",
          "package": "family-tree",
          "partial": "FT",
          "signature": "Int-\u003eIndexedTraversal' Int FamilyTree part",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:accessFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a family with minimal information, returning the updated family tree\n and the ID of the new family.  \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "addFamily",
          "package": "family-tree",
          "signature": "FamilyTree -\u003e (Int, FamilyTree)",
          "source": "src/Data-FamilyTree.html#addFamily",
          "type": "function"
        },
        "index": {
          "description": "Adds family with minimal information returning the updated family tree and the ID of the new family",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "addFamily",
          "normalized": "FamilyTree-\u003e(Int,FamilyTree)",
          "package": "family-tree",
          "partial": "Family",
          "signature": "FamilyTree-\u003e(Int,FamilyTree)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:addFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a person with minimal information, returning the updated family tree\n and the ID of the new person.  \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "addPerson",
          "package": "family-tree",
          "signature": "FamilyTree -\u003e (Int, FamilyTree)",
          "source": "src/Data-FamilyTree.html#addPerson",
          "type": "function"
        },
        "index": {
          "description": "Adds person with minimal information returning the updated family tree and the ID of the new person",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "addPerson",
          "normalized": "FamilyTree-\u003e(Int,FamilyTree)",
          "package": "family-tree",
          "partial": "Person",
          "signature": "FamilyTree-\u003e(Int,FamilyTree)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:addPerson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "attributes",
          "package": "family-tree",
          "signature": "Lens' Person (HashMap Text Text)",
          "source": "src/Data-FamilyTree.html#attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "attributes",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "birthdate",
          "package": "family-tree",
          "signature": "Lens' Person (Maybe PartialDate)",
          "source": "src/Data-FamilyTree.html#birthdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "birthdate",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:birthdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "birthplace",
          "package": "family-tree",
          "signature": "Lens' Person (Maybe Location)",
          "source": "src/Data-FamilyTree.html#birthplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "birthplace",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:birthplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "children",
          "package": "family-tree",
          "signature": "Lens' Family IntSet",
          "source": "src/Data-FamilyTree.html#children",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "children",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "deathdate",
          "package": "family-tree",
          "signature": "Lens' Person (Maybe PartialDate)",
          "source": "src/Data-FamilyTree.html#deathdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "deathdate",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:deathdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "deathplace",
          "package": "family-tree",
          "signature": "Lens' Person (Maybe Location)",
          "source": "src/Data-FamilyTree.html#deathplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "deathplace",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:deathplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a family from the family tree, removing all references to it.    \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "deleteFamily",
          "package": "family-tree",
          "signature": "Int -\u003e FamilyTree -\u003e FamilyTree",
          "source": "src/Data-FamilyTree.html#deleteFamily",
          "type": "function"
        },
        "index": {
          "description": "Deletes family from the family tree removing all references to it",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "deleteFamily",
          "normalized": "Int-\u003eFamilyTree-\u003eFamilyTree",
          "package": "family-tree",
          "partial": "Family",
          "signature": "Int-\u003eFamilyTree-\u003eFamilyTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:deleteFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a person from the family tree, removing all references to them.  \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "deletePerson",
          "package": "family-tree",
          "signature": "Int -\u003e FamilyTree -\u003e FamilyTree",
          "source": "src/Data-FamilyTree.html#deletePerson",
          "type": "function"
        },
        "index": {
          "description": "Deletes person from the family tree removing all references to them",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "deletePerson",
          "normalized": "Int-\u003eFamilyTree-\u003eFamilyTree",
          "package": "family-tree",
          "partial": "Person",
          "signature": "Int-\u003eFamilyTree-\u003eFamilyTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:deletePerson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "families",
          "package": "family-tree",
          "signature": "Lens' FamilyTree (Table Family)",
          "source": "src/Data-FamilyTree.html#families",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "families",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:families"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "head1",
          "package": "family-tree",
          "signature": "Lens' Family (Maybe Int)",
          "source": "src/Data-FamilyTree.html#head1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "head1",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:head1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "head2",
          "package": "family-tree",
          "signature": "Lens' Family (Maybe Int)",
          "source": "src/Data-FamilyTree.html#head2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "head2",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:head2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "name",
          "package": "family-tree",
          "signature": "Lens' Person (Maybe Text)",
          "source": "src/Data-FamilyTree.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "name",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new tree with a given name.       \n\u003c/p\u003e",
          "module": "Data.FamilyTree",
          "name": "newTree",
          "package": "family-tree",
          "signature": "Text -\u003e FamilyTree",
          "source": "src/Data-FamilyTree.html#newTree",
          "type": "function"
        },
        "index": {
          "description": "Creates new tree with given name",
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "newTree",
          "normalized": "Text-\u003eFamilyTree",
          "package": "family-tree",
          "partial": "Tree",
          "signature": "Text-\u003eFamilyTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:newTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "partialDateFromDay",
          "package": "family-tree",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e PartialDate",
          "source": "src/Data-FamilyTree.html#partialDateFromDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "partialDateFromDay",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003ePartialDate",
          "package": "family-tree",
          "partial": "Date From Day",
          "signature": "Integer-\u003eInt-\u003eInt-\u003ePartialDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:partialDateFromDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "partialDateFromMonth",
          "package": "family-tree",
          "signature": "Integer -\u003e Int -\u003e PartialDate",
          "source": "src/Data-FamilyTree.html#partialDateFromMonth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "partialDateFromMonth",
          "normalized": "Integer-\u003eInt-\u003ePartialDate",
          "package": "family-tree",
          "partial": "Date From Month",
          "signature": "Integer-\u003eInt-\u003ePartialDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:partialDateFromMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "partialDateFromYear",
          "package": "family-tree",
          "signature": "Integer -\u003e PartialDate",
          "source": "src/Data-FamilyTree.html#partialDateFromYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "partialDateFromYear",
          "normalized": "Integer-\u003ePartialDate",
          "package": "family-tree",
          "partial": "Date From Year",
          "signature": "Integer-\u003ePartialDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:partialDateFromYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "people",
          "package": "family-tree",
          "signature": "Lens' FamilyTree (Table Person)",
          "source": "src/Data-FamilyTree.html#people",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "people",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:people"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "relationFrom",
          "package": "family-tree",
          "signature": "Lens' Family (Maybe PartialDate)",
          "source": "src/Data-FamilyTree.html#relationFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "relationFrom",
          "package": "family-tree",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:relationFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "relationTo",
          "package": "family-tree",
          "signature": "Lens' Family (Maybe PartialDate)",
          "source": "src/Data-FamilyTree.html#relationTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "relationTo",
          "package": "family-tree",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:relationTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "relationship",
          "package": "family-tree",
          "signature": "Lens' Family (Maybe Relationship)",
          "source": "src/Data-FamilyTree.html#relationship",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "relationship",
          "package": "family-tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:relationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FamilyTree",
          "name": "treeName",
          "package": "family-tree",
          "signature": "Lens' FamilyTree Text",
          "source": "src/Data-FamilyTree.html#treeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FamilyTree",
          "module": "Data.FamilyTree",
          "name": "treeName",
          "package": "family-tree",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/family-tree/docs/Data-FamilyTree.html#v:treeName"
      }
    }
  ]
]