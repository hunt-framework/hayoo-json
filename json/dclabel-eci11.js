[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements Disjunction Category labels.\n\u003c/p\u003e\u003cp\u003eA DCLabel is a pair of \u003ccode\u003e\u003ca\u003esecrecy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eintegrity\u003c/a\u003e\u003c/code\u003e category sets (of type \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e).\nA category set (of type \u003ccode\u003e\u003ca\u003eConj\u003c/a\u003e\u003c/code\u003e) is a conjunction of categories (of type \u003ccode\u003e\u003ca\u003eDisj\u003c/a\u003e\u003c/code\u003e).\nEach category, in turn, is a disjunction of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es, where a \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e \nis just a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e whose meaning is up to the application.\n\u003c/p\u003e\u003cp\u003eA category imposes an information flow restriction. In the case of secrecy, a \ncategory restricts who can read, receive, or propagate the information, while in \nthe case of integrity it restricts who can modify a piece of data. The \nprincipals constructing a category are said to \u003cem\u003eown\u003c/em\u003e the category.\n\u003c/p\u003e\u003cp\u003eFor information to flow from a source labeled \u003ccode\u003eL_1\u003c/code\u003e to a sink \u003ccode\u003eL_2\u003c/code\u003e, the \nrestrictions imposed by the categories of \u003ccode\u003eL_2\u003c/code\u003e must at least as restrictive as \nall the restrictions imposed by the categories of \u003ccode\u003eL_1\u003c/code\u003e (hence the conjunction)\nin the case of secrecy, and at least as permissive in the case of integrity.\nMore specifically, for information to flow from \u003ccode\u003eL_1\u003c/code\u003e to \u003ccode\u003eL_2\u003c/code\u003e,\nthe labels must satisfy the \"can-flow-to\" relation: \u003ccode\u003eL_1 &#8849; L_2\u003c/code\u003e.\nThe &#8849; label check is implemented by the \u003ccode\u003e\u003ca\u003ecanflowto\u003c/a\u003e\u003c/code\u003e function.\nFor labels \u003ccode\u003eL_1=\u003cS_1, I_1\u003e\u003c/code\u003e, \u003ccode\u003eL_2=\u003cS_2, I_2\u003e\u003c/code\u003e the can-flow-to relation is \nsatisfied if the secrecy category set \u003ccode\u003eS_2\u003c/code\u003e \u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eS_1\u003c/code\u003e and \u003ccode\u003eI_1\u003c/code\u003e \n\u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eI_2\u003c/code\u003e (recall that a category set is a conjunction of \ndisjunctions of principals).\nFor example, \u003ccode\u003e\u003c{[P_1 &#8897; P_2]},{}\u003e &#8849; \u003c{[P_1]},{}\u003e\u003c/code\u003e because data \nthat can be read by \u003ccode\u003eP_1\u003c/code\u003e is more restricting than that readable by \u003ccode\u003eP_1\u003c/code\u003e or \n\u003ccode\u003eP_2\u003c/code\u003e. Conversely, \u003ccode\u003e\u003c{{},[P_1]}\u003e &#8849; \u003c{},[P_1 &#8897; P_2]},{}\u003e\u003c/code\u003e because\ndata vouched for by \u003ccode\u003eP_1\u003c/code\u003e or \u003ccode\u003eP_2\u003c/code\u003e is more permissive than just \u003ccode\u003eP_1\u003c/code\u003e (note \nthe same idea holds when writing to sinks with such labeling).\n\u003c/p\u003e\u003cp\u003eA piece of a code running with a privilege object (of type \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e), i.e.,\nowning a \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e confers the right to modify\nlabels by removing any \u003ccode\u003e\u003ca\u003esecrecy\u003c/a\u003e\u003c/code\u003e categories containing that \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e and\nadding any \u003ccode\u003e\u003ca\u003eintegrity\u003c/a\u003e\u003c/code\u003e categories containing the \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e \n(hence the name disjunction categories: the category \u003ccode\u003e[P1 &#8897; P2]\u003c/code\u003e can be\n\u003cem\u003edowngraded\u003c/em\u003e by either \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eP1\u003c/code\u003e or \u003ccode\u003eP2\u003c/code\u003e).\nMore specifically, privileges can be used to bypass information flow restrictions\nby using the more permissive \"can-flow-to given permission\"\nrelation:&#8849;&#7528;. The label check function implementing this restriction\nis \u003ccode\u003e\u003ca\u003ecanflowto_p\u003c/a\u003e\u003c/code\u003e, taking an additional argument (of type \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e). For\nexample, if\n\u003ccode\u003eL_1=\u003c{[P_1 &#8897; P_2] &#8896; [P_3]},{}\u003e\u003c/code\u003e, and \u003ccode\u003eL_2=\u003c{[P_1]},{}\u003e\u003c/code\u003e, then\n\u003ccode\u003eL_1 &#8930; L_2\u003c/code\u003e, but given a privilege object corresponding to \u003ccode\u003e[P_3]\u003c/code\u003e the\n\u003ccode\u003eL_1 &#8849;&#7528; L_2\u003c/code\u003e holds.\n\u003c/p\u003e\u003cp\u003eTo construct DC labels and privilege objects the constructors exported by this \nmodule may be used, but we strongly suggest using \u003ca\u003eDCLabel.NanoEDSL\u003c/a\u003e as exported by \n\u003ca\u003eDCLabel.TCB\u003c/a\u003e and \u003ca\u003eDCLabel.Safe\u003c/a\u003e. The former is to be used by trusted code \nonly, while the latter module should be imported by untrusted code as it prevents the\ncreation of arbitrary privileges.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module implements Disjunction Category labels DCLabel is pair of secrecy and integrity category sets of type Label category set of type Conj is conjunction of categories of type Disj Each category in turn is disjunction of Principal where Principal is just String whose meaning is up to the application category imposes an information flow restriction In the case of secrecy category restricts who can read receive or propagate the information while in the case of integrity it restricts who can modify piece of data The principals constructing category are said to own the category For information to flow from source labeled to sink the restrictions imposed by the categories of must at least as restrictive as all the restrictions imposed by the categories of hence the conjunction in the case of secrecy and at least as permissive in the case of integrity More specifically for information to flow from to the labels must satisfy the can-flow-to relation The label check is implemented by the canflowto function For labels the can-flow-to relation is satisfied if the secrecy category set implies and implies recall that category set is conjunction of disjunctions of principals For example because data that can be read by is more restricting than that readable by or Conversely because data vouched for by or is more permissive than just note the same idea holds when writing to sinks with such labeling piece of code running with privilege object of type TCBPriv i.e owning Principal confers the right to modify labels by removing any secrecy categories containing that Principal and adding any integrity categories containing the Principal hence the name disjunction categories the category P1 P2 can be downgraded by either Principal P1 or P2 More specifically privileges can be used to bypass information flow restrictions by using the more permissive can-flow-to given permission relation The label check function implementing this restriction is canflowto taking an additional argument of type TCBPriv For example if and then but given privilege object corresponding to the holds To construct DC labels and privilege objects the constructors exported by this module may be used but we strongly suggest using DCLabel.NanoEDSL as exported by DCLabel.TCB and DCLabel.Safe The former is to be used by trusted code only while the latter module should be imported by untrusted code as it prevents the creation of arbitrary privileges",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Core",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:CanDelegate",
      "description": {
        "fct-descr": "\u003cp\u003eClass used for checking if a computation can use a privilege in place of\n the other. This notion is similar to the DLM \"can-act-for\".\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#CanDelegate",
        "fct-type": "class",
        "title": "CanDelegate"
      },
      "index": {
        "description": "Class used for checking if computation can use privilege in place of the other This notion is similar to the DLM can-act-for",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "CanDelegate",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Can Delegate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Conj",
      "description": {
        "fct-descr": "\u003cp\u003eA category set, i.e., a conjunction of disjunctions. \n The empty list '[]' corresponds to the single disjunction of all principals.\n In other words, conceptually, \u003ccode\u003e[] =  {[P_1 &#8897; P_2 &#8897; ...]}\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/DCLabel-Core.html#Conj",
        "fct-type": "newtype",
        "title": "Conj"
      },
      "index": {
        "description": "category set i.e conjunction of disjunctions The empty list corresponds to the single disjunction of all principals In other words conceptually",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Conj",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Conj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:DCLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDCLabel\u003c/code\u003e is a pair of secrecy and integrity category sets, i.e., \n a pair of \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#DCLabel",
        "fct-type": "data",
        "title": "DCLabel"
      },
      "index": {
        "description": "DCLabel is pair of secrecy and integrity category sets i.e pair of Label",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "DCLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "DCLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Disj",
      "description": {
        "fct-descr": "\u003cp\u003eA category, i.e., disjunction, of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es.\n The empty list '[]' corresponds to the disjunction of all principals.\n Conceptually, \u003ccode\u003e[] =  [P_1 &#8897;  P_2 &#8897; ...]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/DCLabel-Core.html#Disj",
        "fct-type": "newtype",
        "title": "Disj"
      },
      "index": {
        "description": "category i.e disjunction of Principal The empty list corresponds to the disjunction of all principals Conceptually",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Disj",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:DisjToFromList",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to convert list of principals to a disjunction category and\n vice versa.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#DisjToFromList",
        "fct-type": "class",
        "title": "DisjToFromList"
      },
      "index": {
        "description": "Class used to convert list of principals to disjunction category and vice versa",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "DisjToFromList",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Disj To From List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA label is a conjunction of disjunctions, where \u003ccode\u003eMkLabelAll\u003c/code\u003e is \n the constructor that is associated with the conjunction of all\n possible disjunctions.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "label is conjunction of disjunctions where MkLabelAll is the constructor that is associated with the conjunction of all possible disjunctions",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Label",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Lattice",
      "description": {
        "fct-descr": "\u003cp\u003eLabels forma a partial order according to the &#8849; relation.\n Specifically, this means that for any two labels \u003ccode\u003eL_1\u003c/code\u003e and \u003ccode\u003eL_2\u003c/code\u003e there is a \n unique label \u003ccode\u003eL_3 = L_1 &#8852; L_2\u003c/code\u003e, known as the \u003cem\u003ejoin\u003c/em\u003e, such that\n \u003ccode\u003eL_1 &#8849; L_3\u003c/code\u003e and \u003ccode\u003eL_2 &#8849; L_3\u003c/code\u003e. Similarly, there is a unique label \n \u003ccode\u003eL_3' = L_1 &#8851; L_2\u003c/code\u003e, known as the \u003cem\u003emeet\u003c/em\u003e, such that\n \u003ccode\u003eL_3 &#8849; L_1\u003c/code\u003e and \u003ccode\u003eL_3 &#8849; L_2\u003c/code\u003e. This class defines a \u003cem\u003ebounded\u003c/em\u003e \n lattice, which further requires the definition of the \u003cem\u003ebottom\u003c/em\u003e &#8869; and \n \u003cem\u003etop\u003c/em\u003e &#8868; elements of the lattice, such that \u003ccode\u003e&#8869; &#8849; L\u003c/code\u003e and\n \u003ccode\u003eL &#8849; &#8868;\u003c/code\u003e for any label \u003ccode\u003eL\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#Lattice",
        "fct-type": "class",
        "title": "Lattice"
      },
      "index": {
        "description": "Labels forma partial order according to the relation Specifically this means that for any two labels and there is unique label known as the join such that and Similarly there is unique label known as the meet such that and This class defines bounded lattice which further requires the definition of the bottom and top elements of the lattice such that and for any label",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Lattice",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Lattice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Owns",
      "description": {
        "fct-descr": "\u003cp\u003eWe say a \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e privilege object owns a category when the privileges\n allow code to bypass restrictions implied by the category. This is the\n case if and only if the \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e object contains one of the \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es\n in the \u003ccode\u003e\u003ca\u003eDisj\u003c/a\u003e\u003c/code\u003e. This class is used to check ownership\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#Owns",
        "fct-type": "class",
        "title": "Owns"
      },
      "index": {
        "description": "We say TCBPriv privilege object owns category when the privileges allow code to bypass restrictions implied by the category This is the case if and only if the TCBPriv object contains one of the Principal in the Disj This class is used to check ownership",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Owns",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Owns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Principal",
      "description": {
        "fct-descr": "\u003cp\u003ePrincipal is a simple string representing a source of authority. Any piece \n of code can create principals, regarless of how untrusted it is. However, \n for principals to be used in integrity labels or be ignoerd a corresponding \n privilege (\u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e) must be created (by trusted code) or delegated.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/DCLabel-Core.html#Principal",
        "fct-type": "newtype",
        "title": "Principal"
      },
      "index": {
        "description": "Principal is simple string representing source of authority Any piece of code can create principals regarless of how untrusted it is However for principals to be used in integrity labels or be ignoerd corresponding privilege TCBPriv must be created by trusted code or delegated",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Principal",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Principal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:Priv",
      "description": {
        "fct-descr": "\u003cp\u003eUntrusted privileged object, which can be converted to a \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003edelegatePriv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "type",
        "fct-source": "src/DCLabel-Core.html#Priv",
        "fct-type": "type",
        "title": "Priv"
      },
      "index": {
        "description": "Untrusted privileged object which can be converted to TCBPriv with delegatePriv",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "Priv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:RelaxedLattice",
      "description": {
        "fct-descr": "\u003cp\u003eClass extending \u003ccode\u003e\u003ca\u003eLattice\u003c/a\u003e\u003c/code\u003e, by allowing for the more relaxed label\n comparison  \u003ccode\u003ecanflowto_p\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#RelaxedLattice",
        "fct-type": "class",
        "title": "RelaxedLattice"
      },
      "index": {
        "description": "Class extending Lattice by allowing for the more relaxed label comparison canflowto",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "RelaxedLattice",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Relaxed Lattice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:TCBPriv",
      "description": {
        "fct-descr": "\u003cp\u003ePrivilege object is just a conjunction of disjunctions, i.e., a \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e.\n A trusted privileged object must be introduced by trusted code, after which\n trusted privileged objects can be created by delegation.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#TCBPriv",
        "fct-type": "data",
        "title": "TCBPriv"
      },
      "index": {
        "description": "Privilege object is just conjunction of disjunctions i.e Label trusted privileged object must be introduced by trusted code after which trusted privileged objects can be created by delegation",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "TCBPriv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "TCBPriv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#t:ToLNF",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to reduce labels to a unique label normal form (LNF), which \n corresponds to conjunctive normal form of principals. We use this class \n to overload the reduce function used by the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-Core.html#ToLNF",
        "fct-type": "class",
        "title": "ToLNF"
      },
      "index": {
        "description": "Class used to reduce labels to unique label normal form LNF which corresponds to conjunctive normal form of principals We use this class to overload the reduce function used by the Label DCLabel etc",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "ToLNF",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "To LNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkConj",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkConj",
        "fct-source": "src/DCLabel-Core.html#Conj",
        "fct-type": "function",
        "title": "MkConj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkConj",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk Conj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkDCLabel",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkDCLabel",
        "fct-source": "src/DCLabel-Core.html#DCLabel",
        "fct-type": "function",
        "title": "MkDCLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkDCLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk DCLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkDisj",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkDisj",
        "fct-source": "src/DCLabel-Core.html#Disj",
        "fct-type": "function",
        "title": "MkDisj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkDisj",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkLabel",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkLabel",
        "fct-source": "src/DCLabel-Core.html#Label",
        "fct-type": "function",
        "title": "MkLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkLabelAll",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkLabelAll",
        "fct-source": "src/DCLabel-Core.html#Label",
        "fct-type": "function",
        "title": "MkLabelAll"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkLabelAll",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk Label All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkPrincipal",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkPrincipal",
        "fct-source": "src/DCLabel-Core.html#Principal",
        "fct-type": "function",
        "title": "MkPrincipal"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkPrincipal",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk Principal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:MkTCBPriv",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkTCBPriv",
        "fct-source": "src/DCLabel-Core.html#TCBPriv",
        "fct-type": "function",
        "title": "MkTCBPriv"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "MkTCBPriv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk TCBPriv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:allLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003eemptyLabel\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eallLabel\u003c/a\u003e\u003c/code\u003e consists of the conjunction of\n all possible disjunctions, i.e., it is the label that implies all\n other labels. Conceptually,\n \u003ccode\u003eallLabel = \u003c{[P_1] &#8896; [P_2] &#8896; ...}\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-Core.html#allLabel",
        "fct-type": "function",
        "title": "allLabel"
      },
      "index": {
        "description": "The dual of emptyLabel allLabel consists of the conjunction of all possible disjunctions i.e it is the label that implies all other labels Conceptually allLabel",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "allLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:and_label",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two labels, take the union of the disjunctions, i.e., simply \n perform an \"and\". Note the new label is not necessarily in LNF.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label -\u003e Label -\u003e Label",
        "fct-source": "src/DCLabel-Core.html#and_label",
        "fct-type": "function",
        "title": "and_label"
      },
      "index": {
        "description": "Given two labels take the union of the disjunctions i.e simply perform an and Note the new label is not necessarily in LNF",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "and_label",
        "normalized": "Label-\u003eLabel-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "Label-\u003eLabel-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:bottom",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "bottom",
        "fct-source": "src/DCLabel-Core.html#bottom",
        "fct-type": "method",
        "title": "bottom"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "bottom",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:canDelegate",
      "description": {
        "fct-descr": "\u003cp\u003eCan use first privilege in place of second.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e b -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#canDelegate",
        "fct-type": "method",
        "title": "canDelegate"
      },
      "index": {
        "description": "Can use first privilege in place of second",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "canDelegate",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "Delegate",
        "signature": "a-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:canflowto",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "canflowto",
        "fct-source": "src/DCLabel-Core.html#canflowto",
        "fct-type": "method",
        "title": "canflowto"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "canflowto",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:canflowto_p",
      "description": {
        "fct-descr": "\u003cp\u003eRelaxed partial-order relation\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#canflowto_p",
        "fct-type": "method",
        "title": "canflowto_p"
      },
      "index": {
        "description": "Relaxed partial-order relation",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "canflowto_p",
        "normalized": "TCBPriv-\u003ea-\u003ea-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "TCBPriv-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:cleanLabel",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves any duplicate principals from categories, and any duplicate\n categories from the label. To return a clean label, it sorts the label\n and removes empty disjunctions.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label -\u003e Label",
        "fct-source": "src/DCLabel-Core.html#cleanLabel",
        "fct-type": "function",
        "title": "cleanLabel"
      },
      "index": {
        "description": "Removes any duplicate principals from categories and any duplicate categories from the label To return clean label it sorts the label and removes empty disjunctions",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "cleanLabel",
        "normalized": "Label-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "Label",
        "signature": "Label-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:conj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "[Disj]",
        "fct-source": "src/DCLabel-Core.html#Conj",
        "fct-type": "function",
        "title": "conj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "conj",
        "normalized": "[Disj]",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "[Disj]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:createPrivTCB",
      "description": {
        "fct-descr": "\u003cp\u003eThis function creates any privilege object given an untrusted \n privilege \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e. Note that this function should not be exported\n to untrusted code.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Priv -\u003e TCBPriv",
        "fct-source": "src/DCLabel-Core.html#createPrivTCB",
        "fct-type": "function",
        "title": "createPrivTCB"
      },
      "index": {
        "description": "This function creates any privilege object given an untrusted privilege Priv Note that this function should not be exported to untrusted code",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "createPrivTCB",
        "normalized": "Priv-\u003eTCBPriv",
        "package": "dclabel-eci11",
        "partial": "Priv TCB",
        "signature": "Priv-\u003eTCBPriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:delegatePriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven trusted privilege and a \"desired\" untrusted privilege,\n return a trusted version of the untrusted privilege, if the\n provided (trusted) privilege implies it.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e Priv -\u003e Maybe TCBPriv",
        "fct-source": "src/DCLabel-Core.html#delegatePriv",
        "fct-type": "function",
        "title": "delegatePriv"
      },
      "index": {
        "description": "Given trusted privilege and desired untrusted privilege return trusted version of the untrusted privilege if the provided trusted privilege implies it",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "delegatePriv",
        "normalized": "TCBPriv-\u003ePriv-\u003eMaybe TCBPriv",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": "TCBPriv-\u003ePriv-\u003eMaybe TCBPriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:disj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "[Principal]",
        "fct-source": "src/DCLabel-Core.html#Disj",
        "fct-type": "function",
        "title": "disj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "disj",
        "normalized": "[Principal]",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "[Principal]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:disjToList",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "disjToList",
        "fct-source": "src/DCLabel-Core.html#disjToList",
        "fct-type": "method",
        "title": "disjToList"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "disjToList",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "To List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:emptyLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA label without any disjunctions or conjunctions. This label, conceptually\n corresponds to the label consisting of a single category containing all\n principals. Conceptually,\n \u003ccode\u003eemptyLabel = \u003c{[P_1 &#8897; P_2 &#8897; ...]}\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-Core.html#emptyLabel",
        "fct-type": "function",
        "title": "emptyLabel"
      },
      "index": {
        "description": "label without any disjunctions or conjunctions This label conceptually corresponds to the label consisting of single category containing all principals Conceptually emptyLabel",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "emptyLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:implies",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if a label implies (in the logical sense) another label. \n In other words, d_1 &#8896; ... &#8896; d_n =\u003e d_1' &#8896; ... &#8896; d_n'.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e &#8704; X, \u003ccode\u003e\u003ca\u003eallLabel\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e` X := True\n\u003c/li\u003e\u003cli\u003e &#8704; X&#8800;\u003ccode\u003e\u003ca\u003eallLabel\u003c/a\u003e\u003c/code\u003e, X `\u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003eallLabel\u003c/a\u003e\u003c/code\u003e := False\n\u003c/li\u003e\u003cli\u003e &#8704; X, X `\u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003eemptyLabel\u003c/a\u003e\u003c/code\u003e := True\n\u003c/li\u003e\u003cli\u003e &#8704; X&#8800;\u003ccode\u003e\u003ca\u003eemptyLabel\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eemptyLabel\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eimplies\u003c/a\u003e\u003c/code\u003e` X := False\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label -\u003e Label -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#implies",
        "fct-type": "function",
        "title": "implies"
      },
      "index": {
        "description": "Determines if label implies in the logical sense another label In other words Properties allLabel implies True allLabel implies allLabel False implies emptyLabel True emptyLabel emptyLabel implies False",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "implies",
        "normalized": "Label-\u003eLabel-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "Label-\u003eLabel-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:integrity",
      "description": {
        "fct-descr": "\u003cp\u003eSecrecy category set.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-Core.html#DCLabel",
        "fct-type": "function",
        "title": "integrity"
      },
      "index": {
        "description": "Secrecy category set",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "integrity",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:join",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "join",
        "fct-source": "src/DCLabel-Core.html#join",
        "fct-type": "method",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "join",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Conj",
        "fct-source": "src/DCLabel-Core.html#Label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "label",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:labelToList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a label return a list of categories.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label-\u003e [Disj]",
        "fct-type": "function",
        "title": "labelToList"
      },
      "index": {
        "description": "Given label return list of categories",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "labelToList",
        "normalized": "Label-\u003e[Disj]",
        "package": "dclabel-eci11",
        "partial": "To List",
        "signature": "Label-\u003e[Disj]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:listToDisj",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "listToDisj",
        "fct-source": "src/DCLabel-Core.html#listToDisj",
        "fct-type": "method",
        "title": "listToDisj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "listToDisj",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "To Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:listToLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of categories, return a label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "[Disj]-\u003e Label",
        "fct-type": "function",
        "title": "listToLabel"
      },
      "index": {
        "description": "Given list of categories return label",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "listToLabel",
        "normalized": "[Disj]-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "To Label",
        "signature": "[Disj]-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:meet",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "meet",
        "fct-source": "src/DCLabel-Core.html#meet",
        "fct-type": "method",
        "title": "meet"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "meet",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "String",
        "fct-source": "src/DCLabel-Core.html#Principal",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "name",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:noPriv",
      "description": {
        "fct-descr": "\u003cp\u003ePrivilege object corresponding to no privileges.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv",
        "fct-source": "src/DCLabel-Core.html#noPriv",
        "fct-type": "function",
        "title": "noPriv"
      },
      "index": {
        "description": "Privilege object corresponding to no privileges",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "noPriv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:or_label",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two labels, perform an \"or\".\n Note that the new label is not necessarily in LNF.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label -\u003e Label -\u003e Label",
        "fct-source": "src/DCLabel-Core.html#or_label",
        "fct-type": "function",
        "title": "or_label"
      },
      "index": {
        "description": "Given two labels perform an or Note that the new label is not necessarily in LNF",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "or_label",
        "normalized": "Label-\u003eLabel-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "Label-\u003eLabel-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:owns",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if category restriction can be bypassed given the privilege.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#owns",
        "fct-type": "method",
        "title": "owns"
      },
      "index": {
        "description": "Checks if category restriction can be bypassed given the privilege",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "owns",
        "normalized": "TCBPriv-\u003ea-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "TCBPriv-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:principal",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a principal from an string. \n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "String -\u003e Principal",
        "fct-source": "src/DCLabel-Core.html#principal",
        "fct-type": "function",
        "title": "principal"
      },
      "index": {
        "description": "Generates principal from an string",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "principal",
        "normalized": "String-\u003ePrincipal",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "String-\u003ePrincipal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:priv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-Core.html#TCBPriv",
        "fct-type": "function",
        "title": "priv"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "priv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:rootPrivTCB",
      "description": {
        "fct-descr": "\u003cp\u003ePrivilege object corresponding to the \"root\", or all privileges.\n Any other privilege may be delegated using this privilege object and it must\n therefore not be exported to untrusted code. \n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv",
        "fct-source": "src/DCLabel-Core.html#rootPrivTCB",
        "fct-type": "function",
        "title": "rootPrivTCB"
      },
      "index": {
        "description": "Privilege object corresponding to the root or all privileges Any other privilege may be delegated using this privilege object and it must therefore not be exported to untrusted code",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "rootPrivTCB",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Priv TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:secrecy",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrity category set.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-Core.html#DCLabel",
        "fct-type": "function",
        "title": "secrecy"
      },
      "index": {
        "description": "Integrity category set",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "secrecy",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:toLNF",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/DCLabel-Core.html#toLNF",
        "fct-type": "method",
        "title": "toLNF"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "toLNF",
        "normalized": "a-\u003ea",
        "package": "dclabel-eci11",
        "partial": "LNF",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Core.html#v:top",
      "description": {
        "fct-module": "DCLabel.Core",
        "fct-package": "dclabel-eci11",
        "fct-signature": "top",
        "fct-source": "src/DCLabel-Core.html#top",
        "fct-type": "method",
        "title": "top"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Core",
        "module": "DCLabel.Core",
        "name": "top",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Integrity.html#",
      "description": {
        "fct-module": "DCLabel.Integrity",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-Integrity.html",
        "fct-type": "module",
        "title": "Integrity"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Integrity",
        "module": "DCLabel.Integrity",
        "name": "Integrity",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Integrity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Integrity.html#t:ILabel",
      "description": {
        "fct-descr": "\u003cp\u003eAn integrity-only DC label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Integrity",
        "fct-package": "dclabel-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/DCLabel-Integrity.html#ILabel",
        "fct-type": "newtype",
        "title": "ILabel"
      },
      "index": {
        "description": "An integrity-only DC label",
        "hierarchy": "DCLabel Integrity",
        "module": "DCLabel.Integrity",
        "name": "ILabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "ILabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Integrity.html#v:MkILabel",
      "description": {
        "fct-module": "DCLabel.Integrity",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkILabel DCLabel",
        "fct-source": "src/DCLabel-Integrity.html#ILabel",
        "fct-type": "function",
        "title": "MkILabel"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Integrity",
        "module": "DCLabel.Integrity",
        "name": "MkILabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk ILabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a `\u003ccode\u003enano\u003c/code\u003e`, very simple, embedded domain specific\n  language to create \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003eilages from conjunctions of\n  principal disjunctions.\n\u003c/p\u003e\u003cp\u003eA 'Label'/'Priv' is created using the (\u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e) and (\u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e) operators.\n  The disjunction operator (\u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e) is used to create a category from\n  \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, or a disjunctive sub-expression. For example:\n\u003c/p\u003e\u003cpre\u003e\n     p1 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p1\"\n     p2 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p2\"\n     p3 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p3\"\n     e1 = p1 \u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e p2\n     e2 = e1 \u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e \"p4\"\n\u003c/pre\u003e\u003cp\u003eSimilarly, the conjunction operator (\u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e) is used to create category-sets\n  from \u003ccode\u003ePrincipals\u003c/code\u003e, \u003ccode\u003eStrings\u003c/code\u003e, and conjunctive or disjunctive sub-expressions.\n  For example:\n\u003c/p\u003e\u003cpre\u003e\n     e3 = p1 \u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e p2\n     e4 = e1 \u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e \"p4\" \u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e p3\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e that because a category consists of a disjunction of principals, and a\n  category set is composed of the conjunction of categories, (\u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e) binds\n  more tightly than (\u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eGiven two \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es, one for secrecy and one for integrity, you can\n  create a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003enewDC\u003c/a\u003e\u003c/code\u003e. And, similarly, given a \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e \n  you can create a new minted privilege with \u003ccode\u003e\u003ca\u003enewTCBPriv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConsider the following, example:\n\u003c/p\u003e\u003cpre\u003e\n     l1 = \"Alice\" \u003ccode\u003e\u003ca\u003e.\\/.\u003c/a\u003e\u003c/code\u003e \"Bob\" \u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e \"Carla\" \n     l2 = \"Alice\" \u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e \"Carla\" \n     dc1 = \u003ccode\u003e\u003ca\u003enewDC\u003c/a\u003e\u003c/code\u003e l1 l2\n     dc2 = \u003ccode\u003e\u003ca\u003enewDC\u003c/a\u003e\u003c/code\u003e \"Deian\" \"Alice\"\n     pr = \u003ccode\u003e\u003ca\u003ecreatePrivTCB\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003enewPriv\u003c/a\u003e\u003c/code\u003e (\"Alice\" \u003ccode\u003e\u003ca\u003e./\\.\u003c/a\u003e\u003c/code\u003e \"Carla\")\n\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e dc1 = \u003c{[\"Alice\" &#8897; \"Bob\"] &#8896; [\"Carla\"]} , {[\"Alice\"] &#8896; [\"Carla\"]}\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e dc2 = \u003c{[\"Deian\"]} , {[\"Alice\"]}\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003ecanflowto\u003c/a\u003e\u003c/code\u003e dc1 dc2 = False\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003ecanflowto_p\u003c/a\u003e\u003c/code\u003e pr dc1 dc2 = True\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-NanoEDSL.html",
        "fct-type": "module",
        "title": "NanoEDSL"
      },
      "index": {
        "description": "This module implements nano very simple embedded domain specific language to create Label and Priv ilages from conjunctions of principal disjunctions Label Priv is created using the and operators The disjunction operator is used to create category from Principal String or disjunctive sub-expression For example p1 principal p1 p2 principal p2 p3 principal p3 e1 p1 p2 e2 e1 p4 Similarly the conjunction operator is used to create category-sets from Principals Strings and conjunctive or disjunctive sub-expressions For example e3 p1 p2 e4 e1 p4 p3 Note that because category consists of disjunction of principals and category set is composed of the conjunction of categories binds more tightly than Given two Label one for secrecy and one for integrity you can create DCLabel with newDC And similarly given TCBPriv and Priv you can create new minted privilege with newTCBPriv Consider the following example l1 Alice Bob Carla l2 Alice Carla dc1 newDC l1 l2 dc2 newDC Deian Alice pr createPrivTCB newPriv Alice Carla where dc1 Alice Bob Carla Alice Carla dc2 Deian Alice canflowto dc1 dc2 False canflowto pr dc1 dc2 True",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "NanoEDSL",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Nano EDSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-NanoEDSL.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Empty label",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eAll label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-NanoEDSL.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "All label",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:.-47--92-.",
      "description": {
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e Label",
        "fct-type": "function",
        "title": "(./\\.)"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "(./\\.) ./\\.",
        "normalized": "a-\u003eb-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003eb-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:.-92--47-.",
      "description": {
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e Label",
        "fct-type": "function",
        "title": "(.\\/.)"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "(.\\/.) .\\/.",
        "normalized": "a-\u003eb-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003eb-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:newDC",
      "description": {
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e DCLabel",
        "fct-type": "function",
        "title": "newDC"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "newDC",
        "normalized": "a-\u003eb-\u003eDCLabel",
        "package": "dclabel-eci11",
        "partial": "DC",
        "signature": "a-\u003eb-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:newPriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven element create privilege.\n\u003c/p\u003e",
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e Priv",
        "fct-source": "src/DCLabel-NanoEDSL.html#newPriv",
        "fct-type": "function",
        "title": "newPriv"
      },
      "index": {
        "description": "Given element create privilege",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "newPriv",
        "normalized": "a-\u003ePriv",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": "a-\u003ePriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-NanoEDSL.html#v:newTCBPriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven privilege and new element, create (maybe) trusted privileged object.\n\u003c/p\u003e",
        "fct-module": "DCLabel.NanoEDSL",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e Maybe TCBPriv",
        "fct-source": "src/DCLabel-NanoEDSL.html#newTCBPriv",
        "fct-type": "function",
        "title": "newTCBPriv"
      },
      "index": {
        "description": "Given privilege and new element create maybe trusted privileged object",
        "hierarchy": "DCLabel NanoEDSL",
        "module": "DCLabel.NanoEDSL",
        "name": "newTCBPriv",
        "normalized": "TCBPriv-\u003ea-\u003eMaybe TCBPriv",
        "package": "dclabel-eci11",
        "partial": "TCBPriv",
        "signature": "TCBPriv-\u003ea-\u003eMaybe TCBPriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-PrettyShow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a function \u003ccode\u003e\u003ca\u003eprettyShow\u003c/a\u003e\u003c/code\u003e that pretty prints \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es,\n\u003ccode\u003e\u003ca\u003eDisj\u003c/a\u003e\u003c/code\u003eunctions, \u003ccode\u003e\u003ca\u003eConj\u003c/a\u003e\u003c/code\u003eunctions, \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DCLabel.PrettyShow",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-PrettyShow.html",
        "fct-type": "module",
        "title": "PrettyShow"
      },
      "index": {
        "description": "This module exports function prettyShow that pretty prints Principal Disj unctions Conj unctions Label and DCLabel",
        "hierarchy": "DCLabel PrettyShow",
        "module": "DCLabel.PrettyShow",
        "name": "PrettyShow",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Pretty Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-PrettyShow.html#t:PrettyShow",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to create a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e type of DCLabel-related types\n\u003c/p\u003e",
        "fct-module": "DCLabel.PrettyShow",
        "fct-package": "dclabel-eci11",
        "fct-signature": "class",
        "fct-source": "src/DCLabel-PrettyShow.html#PrettyShow",
        "fct-type": "class",
        "title": "PrettyShow"
      },
      "index": {
        "description": "Class used to create Doc type of DCLabel-related types",
        "hierarchy": "DCLabel PrettyShow",
        "module": "DCLabel.PrettyShow",
        "name": "PrettyShow",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Pretty Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-PrettyShow.html#v:pShow",
      "description": {
        "fct-module": "DCLabel.PrettyShow",
        "fct-package": "dclabel-eci11",
        "fct-signature": "pShow",
        "fct-source": "src/DCLabel-PrettyShow.html#pShow",
        "fct-type": "method",
        "title": "pShow"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel PrettyShow",
        "module": "DCLabel.PrettyShow",
        "name": "pShow",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-PrettyShow.html#v:prettyShow",
      "description": {
        "fct-descr": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003ePrettyShow\u003c/a\u003e\u003c/code\u003e type to a string.\n\u003c/p\u003e",
        "fct-module": "DCLabel.PrettyShow",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/DCLabel-PrettyShow.html#prettyShow",
        "fct-type": "function",
        "title": "prettyShow"
      },
      "index": {
        "description": "Render PrettyShow type to string",
        "hierarchy": "DCLabel PrettyShow",
        "module": "DCLabel.PrettyShow",
        "name": "prettyShow",
        "normalized": "a-\u003eString",
        "package": "dclabel-eci11",
        "partial": "Show",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a safe-subset of \u003ca\u003eDCLabel.Core\u003c/a\u003e,\nimplementing Disjunction Category Labels. \nThe exported functions and constructors may be used by  \nuntrusted code, guaranteeing that they cannot perform\nanything unsafe.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "This module exports safe-subset of DCLabel.Core implementing Disjunction Category Labels The exported functions and constructors may be used by untrusted code guaranteeing that they cannot perform anything unsafe",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#t:DCLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDCLabel\u003c/code\u003e is a pair of secrecy and integrity category sets, i.e., \n a pair of \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#DCLabel",
        "fct-type": "data",
        "title": "DCLabel"
      },
      "index": {
        "description": "DCLabel is pair of secrecy and integrity category sets i.e pair of Label",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "DCLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "DCLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA label is a conjunction of disjunctions, where \u003ccode\u003eMkLabelAll\u003c/code\u003e is \n the constructor that is associated with the conjunction of all\n possible disjunctions.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "label is conjunction of disjunctions where MkLabelAll is the constructor that is associated with the conjunction of all possible disjunctions",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "Label",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#t:Priv",
      "description": {
        "fct-descr": "\u003cp\u003eUntrusted privileged object, which can be converted to a \u003ccode\u003e\u003ca\u003eTCBPriv\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003edelegatePriv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "type",
        "fct-source": "src/DCLabel-Core.html#Priv",
        "fct-type": "type",
        "title": "Priv"
      },
      "index": {
        "description": "Untrusted privileged object which can be converted to TCBPriv with delegatePriv",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "Priv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#t:TCBPriv",
      "description": {
        "fct-descr": "\u003cp\u003ePrivilege object is just a conjunction of disjunctions, i.e., a \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e.\n A trusted privileged object must be introduced by trusted code, after which\n trusted privileged objects can be created by delegation.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "data",
        "fct-source": "src/DCLabel-Core.html#TCBPriv",
        "fct-type": "data",
        "title": "TCBPriv"
      },
      "index": {
        "description": "Privilege object is just conjunction of disjunctions i.e Label trusted privileged object must be introduced by trusted code after which trusted privileged objects can be created by delegation",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "TCBPriv",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "TCBPriv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-NanoEDSL.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Empty label",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eAll label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label",
        "fct-source": "src/DCLabel-NanoEDSL.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "All label",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:.-47--92-.",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e Label",
        "fct-type": "function",
        "title": "(./\\.)"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "(./\\.) ./\\.",
        "normalized": "a-\u003eb-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003eb-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:.-92--47-.",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e Label",
        "fct-type": "function",
        "title": "(.\\/.)"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "(.\\/.) .\\/.",
        "normalized": "a-\u003eb-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003eb-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:bottom",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "bottom"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "bottom",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:canDelegate",
      "description": {
        "fct-descr": "\u003cp\u003eCan use first privilege in place of second.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e b -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#canDelegate",
        "fct-type": "function",
        "title": "canDelegate"
      },
      "index": {
        "description": "Can use first privilege in place of second",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "canDelegate",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "Delegate",
        "signature": "a-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:canflowto",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e a-\u003e Bool",
        "fct-type": "function",
        "title": "canflowto"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "canflowto",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:canflowto_p",
      "description": {
        "fct-descr": "\u003cp\u003eRelaxed partial-order relation\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#canflowto_p",
        "fct-type": "function",
        "title": "canflowto_p"
      },
      "index": {
        "description": "Relaxed partial-order relation",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "canflowto_p",
        "normalized": "TCBPriv-\u003ea-\u003ea-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "TCBPriv-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:delegatePriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven trusted privilege and a \"desired\" untrusted privilege,\n return a trusted version of the untrusted privilege, if the\n provided (trusted) privilege implies it.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e Priv -\u003e Maybe TCBPriv",
        "fct-source": "src/DCLabel-Core.html#delegatePriv",
        "fct-type": "function",
        "title": "delegatePriv"
      },
      "index": {
        "description": "Given trusted privilege and desired untrusted privilege return trusted version of the untrusted privilege if the provided trusted privilege implies it",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "delegatePriv",
        "normalized": "TCBPriv-\u003ePriv-\u003eMaybe TCBPriv",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": "TCBPriv-\u003ePriv-\u003eMaybe TCBPriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:disjToList",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Disj-\u003e [a]",
        "fct-type": "function",
        "title": "disjToList"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "disjToList",
        "normalized": "Disj-\u003e[a]",
        "package": "dclabel-eci11",
        "partial": "To List",
        "signature": "Disj-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:integrity",
      "description": {
        "fct-descr": "\u003cp\u003eSecrecy category set.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "DCLabel -\u003e Label",
        "fct-source": "src/DCLabel-Core.html#integrity",
        "fct-type": "function",
        "title": "integrity"
      },
      "index": {
        "description": "Secrecy category set",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "integrity",
        "normalized": "DCLabel-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "DCLabel-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:join",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "join",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:labelToList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a label return a list of categories.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "Label-\u003e [Disj]",
        "fct-type": "function",
        "title": "labelToList"
      },
      "index": {
        "description": "Given label return list of categories",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "labelToList",
        "normalized": "Label-\u003e[Disj]",
        "package": "dclabel-eci11",
        "partial": "To List",
        "signature": "Label-\u003e[Disj]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:listToDisj",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "[a]-\u003e Disj",
        "fct-type": "function",
        "title": "listToDisj"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "listToDisj",
        "normalized": "[a]-\u003eDisj",
        "package": "dclabel-eci11",
        "partial": "To Disj",
        "signature": "[a]-\u003eDisj"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:listToLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of categories, return a label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "[Disj]-\u003e Label",
        "fct-type": "function",
        "title": "listToLabel"
      },
      "index": {
        "description": "Given list of categories return label",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "listToLabel",
        "normalized": "[Disj]-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "To Label",
        "signature": "[Disj]-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:meet",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "meet"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "meet",
        "normalized": "a-\u003ea-\u003ea",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:newDC",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a-\u003e b-\u003e DCLabel",
        "fct-type": "function",
        "title": "newDC"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "newDC",
        "normalized": "a-\u003eb-\u003eDCLabel",
        "package": "dclabel-eci11",
        "partial": "DC",
        "signature": "a-\u003eb-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:newPriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven element create privilege.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a -\u003e Priv",
        "fct-source": "src/DCLabel-NanoEDSL.html#newPriv",
        "fct-type": "function",
        "title": "newPriv"
      },
      "index": {
        "description": "Given element create privilege",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "newPriv",
        "normalized": "a-\u003ePriv",
        "package": "dclabel-eci11",
        "partial": "Priv",
        "signature": "a-\u003ePriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:newTCBPriv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven privilege and new element, create (maybe) trusted privileged object.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e Maybe TCBPriv",
        "fct-source": "src/DCLabel-NanoEDSL.html#newTCBPriv",
        "fct-type": "function",
        "title": "newTCBPriv"
      },
      "index": {
        "description": "Given privilege and new element create maybe trusted privileged object",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "newTCBPriv",
        "normalized": "TCBPriv-\u003ea-\u003eMaybe TCBPriv",
        "package": "dclabel-eci11",
        "partial": "TCBPriv",
        "signature": "TCBPriv-\u003ea-\u003eMaybe TCBPriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:owns",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if category restriction can be bypassed given the privilege.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "TCBPriv -\u003e a -\u003e Bool",
        "fct-source": "src/DCLabel-Core.html#owns",
        "fct-type": "function",
        "title": "owns"
      },
      "index": {
        "description": "Checks if category restriction can be bypassed given the privilege",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "owns",
        "normalized": "TCBPriv-\u003ea-\u003eBool",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "TCBPriv-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:principal",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a principal from an string. \n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "String -\u003e Principal",
        "fct-source": "src/DCLabel-Core.html#principal",
        "fct-type": "function",
        "title": "principal"
      },
      "index": {
        "description": "Generates principal from an string",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "principal",
        "normalized": "String-\u003ePrincipal",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "String-\u003ePrincipal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:secrecy",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrity category set.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "DCLabel -\u003e Label",
        "fct-source": "src/DCLabel-Core.html#secrecy",
        "fct-type": "function",
        "title": "secrecy"
      },
      "index": {
        "description": "Integrity category set",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "secrecy",
        "normalized": "DCLabel-\u003eLabel",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": "DCLabel-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Safe.html#v:top",
      "description": {
        "fct-module": "DCLabel.Safe",
        "fct-package": "dclabel-eci11",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Safe",
        "module": "DCLabel.Safe",
        "name": "top",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Secrecy.html#",
      "description": {
        "fct-module": "DCLabel.Secrecy",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-Secrecy.html",
        "fct-type": "module",
        "title": "Secrecy"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Secrecy",
        "module": "DCLabel.Secrecy",
        "name": "Secrecy",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Secrecy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Secrecy.html#t:SLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA secrecy-only DC label.\n\u003c/p\u003e",
        "fct-module": "DCLabel.Secrecy",
        "fct-package": "dclabel-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/DCLabel-Secrecy.html#SLabel",
        "fct-type": "newtype",
        "title": "SLabel"
      },
      "index": {
        "description": "secrecy-only DC label",
        "hierarchy": "DCLabel Secrecy",
        "module": "DCLabel.Secrecy",
        "name": "SLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "SLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-Secrecy.html#v:MkSLabel",
      "description": {
        "fct-module": "DCLabel.Secrecy",
        "fct-package": "dclabel-eci11",
        "fct-signature": "MkSLabel DCLabel",
        "fct-source": "src/DCLabel-Secrecy.html#SLabel",
        "fct-type": "function",
        "title": "MkSLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "DCLabel Secrecy",
        "module": "DCLabel.Secrecy",
        "name": "MkSLabel",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "Mk SLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dclabel-eci11/docs/DCLabel-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports an unsafe-subset of \u003ca\u003eDCLabel.Core\u003c/a\u003e,\nimplementing Disjunction Category Labels. \nA subset of the exported functions and constructors\nshoul not be exposed to untrusted code; instead, \nuntursted code should import the \u003ca\u003eDCLabel.Safe\u003c/a\u003e\nmodule.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DCLabel.TCB",
        "fct-package": "dclabel-eci11",
        "fct-signature": "module",
        "fct-source": "src/DCLabel-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module exports an unsafe-subset of DCLabel.Core implementing Disjunction Category Labels subset of the exported functions and constructors shoul not be exposed to untrusted code instead untursted code should import the DCLabel.Safe module",
        "hierarchy": "DCLabel TCB",
        "module": "DCLabel.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "dclabel-eci11",
        "partial": "TCB",
        "signature": ""
      }
    }
  }
]