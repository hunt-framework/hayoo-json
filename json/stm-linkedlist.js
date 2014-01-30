[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable, doubly linked lists for use with STM (software transactional\n memory).  Provides efficient random insertion and removal.\n\u003c/p\u003e\u003cp\u003eThis module is usually imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.STM.LinkedList (LinkedList)\nimport qualified Data.STM.LinkedList as LinkedList\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "module",
        "fct-source": "src/Data-STM-LinkedList.html",
        "fct-type": "module",
        "title": "LinkedList"
      },
      "index": {
        "description": "Mutable doubly linked lists for use with STM software transactional memory Provides efficient random insertion and removal This module is usually imported qualified import Data.STM.LinkedList LinkedList import qualified Data.STM.LinkedList as LinkedList",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "LinkedList",
        "normalized": "",
        "package": "stm-linkedlist",
        "partial": "Linked List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#t:LinkedList",
      "description": {
        "fct-descr": "\u003cp\u003eList handle.  Used for insertion and traversal starting at the beginning\n or end of the list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "data",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#LinkedList",
        "fct-type": "data",
        "title": "LinkedList"
      },
      "index": {
        "description": "List handle Used for insertion and traversal starting at the beginning or end of the list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "LinkedList",
        "normalized": "",
        "package": "stm-linkedlist",
        "partial": "Linked List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eList node.  Used for insertion, traversal, and removal starting at a given\n item in the list.\n\u003c/p\u003e\u003cp\u003eA Node contains an immutable value of type \u003ccode\u003ea\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003es that point to\n the previous and next nodes.\n\u003c/p\u003e\u003cp\u003eNode equality can be likened to pointer equality in C.  Two Node values are\n considered equal if and only if they were created with the same insertion\n operation.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "data",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "List node Used for insertion traversal and removal starting at given item in the list Node contains an immutable value of type and TVar that point to the previous and next nodes Node equality can be likened to pointer equality in Two Node values are considered equal if and only if they were created with the same insertion operation",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "Node",
        "normalized": "",
        "package": "stm-linkedlist",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add a node to the end of a linked list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "a -\u003e LinkedList a -\u003e STM (Node a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Add node to the end of linked list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "append",
        "normalized": "a-\u003eLinkedList a-\u003eSTM(Node a)",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "a-\u003eLinkedList a-\u003eSTM(Node a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Remove a node from whatever \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e it is in.  If the node\n has already been removed, this is a no-op.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "Node a -\u003e STM ()",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove node from whatever LinkedList it is in If the node has already been removed this is no-op",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "delete",
        "normalized": "Node a-\u003eSTM()",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "Node a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create an empty linked list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "STM (LinkedList a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Create an empty linked list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "empty",
        "normalized": "",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:emptyIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Version of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e that can be used in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "IO (LinkedList a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#emptyIO",
        "fct-type": "function",
        "title": "emptyIO"
      },
      "index": {
        "description": "Version of empty that can be used in the IO monad",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "emptyIO",
        "normalized": "",
        "package": "stm-linkedlist",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:end",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the node corresponding to the last item of the list.  Return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list is empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM (Maybe (Node a))",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#end",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "Get the node corresponding to the last item of the list Return Nothing if the list is empty",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "end",
        "normalized": "LinkedList a-\u003eSTM(Maybe(Node a))",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "LinkedList a-\u003eSTM(Maybe(Node a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:insertAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item after the given node.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "a -\u003e Node a -\u003e STM (Node a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#insertAfter",
        "fct-type": "function",
        "title": "insertAfter"
      },
      "index": {
        "description": "Insert an item after the given node",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "insertAfter",
        "normalized": "a-\u003eNode a-\u003eSTM(Node a)",
        "package": "stm-linkedlist",
        "partial": "After",
        "signature": "a-\u003eNode a-\u003eSTM(Node a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:insertBefore",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item before the given node.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "a -\u003e Node a -\u003e STM (Node a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#insertBefore",
        "fct-type": "function",
        "title": "insertBefore"
      },
      "index": {
        "description": "Insert an item before the given node",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "insertBefore",
        "normalized": "a-\u003eNode a-\u003eSTM(Node a)",
        "package": "stm-linkedlist",
        "partial": "Before",
        "signature": "a-\u003eNode a-\u003eSTM(Node a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Count the number of items in the list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM Int",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Count the number of items in the list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "length",
        "normalized": "LinkedList a-\u003eSTM Int",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "LinkedList a-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:listHead",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap the list head, a special \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eprev\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einsertBefore\u003c/a\u003e\u003c/code\u003e v . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e v\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einsertAfter\u003c/a\u003e\u003c/code\u003e v . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e v\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e ==\u003e \u003cem\u003eerror\u003c/em\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e ==\u003e \u003cem\u003eerror\u003c/em\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e Node a",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#listHead",
        "fct-type": "function",
        "title": "listHead"
      },
      "index": {
        "description": "Unwrap the list head special Node with the following properties next listHead start prev listHead end insertBefore listHead append insertAfter listHead prepend value listHead error delete listHead error",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "listHead",
        "normalized": "LinkedList a-\u003eNode a",
        "package": "stm-linkedlist",
        "partial": "Head",
        "signature": "LinkedList a-\u003eNode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the next node.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this is the last item,\n or if this node has been \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003ed from its list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "Node a -\u003e STM (Maybe (Node a))",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Get the next node Return Nothing if this is the last item or if this node has been delete from its list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "next",
        "normalized": "Node a-\u003eSTM(Maybe(Node a))",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "Node a-\u003eSTM(Maybe(Node a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the list empty?\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM Bool",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the list empty",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "null",
        "normalized": "LinkedList a-\u003eSTM Bool",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "LinkedList a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:prepend",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add a node to the beginning of a linked list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "a -\u003e LinkedList a -\u003e STM (Node a)",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#prepend",
        "fct-type": "function",
        "title": "prepend"
      },
      "index": {
        "description": "Add node to the beginning of linked list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "prepend",
        "normalized": "a-\u003eLinkedList a-\u003eSTM(Node a)",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "a-\u003eLinkedList a-\u003eSTM(Node a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:prev",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the previous node.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this is the first item,\n or if this node has been \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003ed from its list.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "Node a -\u003e STM (Maybe (Node a))",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#prev",
        "fct-type": "function",
        "title": "prev"
      },
      "index": {
        "description": "Get the previous node Return Nothing if this is the first item or if this node has been delete from its list",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "prev",
        "normalized": "Node a-\u003eSTM(Maybe(Node a))",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "Node a-\u003eSTM(Maybe(Node a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the node corresponding to the first item of the list.  Return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list is empty.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM (Maybe (Node a))",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Get the node corresponding to the first item of the list Return Nothing if the list is empty",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "start",
        "normalized": "LinkedList a-\u003eSTM(Maybe(Node a))",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "LinkedList a-\u003eSTM(Maybe(Node a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all of the items in a \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM [a]",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Return all of the items in LinkedList",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "toList",
        "normalized": "LinkedList a-\u003eSTM[a]",
        "package": "stm-linkedlist",
        "partial": "List",
        "signature": "LinkedList a-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:toListRev",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all of the items in a \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e, in reverse order.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "LinkedList a -\u003e STM [a]",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#toListRev",
        "fct-type": "function",
        "title": "toListRev"
      },
      "index": {
        "description": "Return all of the items in LinkedList in reverse order",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "toListRev",
        "normalized": "LinkedList a-\u003eSTM[a]",
        "package": "stm-linkedlist",
        "partial": "List Rev",
        "signature": "LinkedList a-\u003eSTM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the value of a node.\n\u003c/p\u003e",
        "fct-module": "Data.STM.LinkedList",
        "fct-package": "stm-linkedlist",
        "fct-signature": "Node a -\u003e a",
        "fct-source": "src/Data-STM-LinkedList-Internal.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Extract the value of node",
        "hierarchy": "Data STM LinkedList",
        "module": "Data.STM.LinkedList",
        "name": "value",
        "normalized": "Node a-\u003ea",
        "package": "stm-linkedlist",
        "partial": "",
        "signature": "Node a-\u003ea"
      }
    }
  }
]