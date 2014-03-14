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
        "word": "stm-linkedlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable, doubly linked lists for use with STM (software transactional\n memory).  Provides efficient random insertion and removal.\n\u003c/p\u003e\u003cp\u003eThis module is usually imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.STM.LinkedList (LinkedList)\nimport qualified Data.STM.LinkedList as LinkedList\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.STM.LinkedList",
          "name": "LinkedList",
          "package": "stm-linkedlist",
          "source": "src/Data-STM-LinkedList.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable doubly linked lists for use with STM software transactional memory Provides efficient random insertion and removal This module is usually imported qualified import Data.STM.LinkedList LinkedList import qualified Data.STM.LinkedList as LinkedList",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "LinkedList",
          "package": "stm-linkedlist",
          "partial": "Linked List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList handle.  Used for insertion and traversal starting at the beginning\n or end of the list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "LinkedList",
          "package": "stm-linkedlist",
          "source": "src/Data-STM-LinkedList-Internal.html#LinkedList",
          "type": "data"
        },
        "index": {
          "description": "List handle Used for insertion and traversal starting at the beginning or end of the list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "LinkedList",
          "package": "stm-linkedlist",
          "partial": "Linked List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#t:LinkedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList node.  Used for insertion, traversal, and removal starting at a given\n item in the list.\n\u003c/p\u003e\u003cp\u003eA Node contains an immutable value of type \u003ccode\u003ea\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003es that point to\n the previous and next nodes.\n\u003c/p\u003e\u003cp\u003eNode equality can be likened to pointer equality in C.  Two Node values are\n considered equal if and only if they were created with the same insertion\n operation.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "Node",
          "package": "stm-linkedlist",
          "source": "src/Data-STM-LinkedList-Internal.html#Node",
          "type": "data"
        },
        "index": {
          "description": "List node Used for insertion traversal and removal starting at given item in the list Node contains an immutable value of type and TVar that point to the previous and next nodes Node equality can be likened to pointer equality in Two Node values are considered equal if and only if they were created with the same insertion operation",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "Node",
          "package": "stm-linkedlist",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add a node to the end of a linked list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "append",
          "package": "stm-linkedlist",
          "signature": "a -\u003e LinkedList a -\u003e STM (Node a)",
          "source": "src/Data-STM-LinkedList-Internal.html#append",
          "type": "function"
        },
        "index": {
          "description": "Add node to the end of linked list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "append",
          "normalized": "a-\u003eLinkedList a-\u003eSTM(Node a)",
          "package": "stm-linkedlist",
          "signature": "a-\u003eLinkedList a-\u003eSTM(Node a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Remove a node from whatever \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e it is in.  If the node\n has already been removed, this is a no-op.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "delete",
          "package": "stm-linkedlist",
          "signature": "Node a -\u003e STM ()",
          "source": "src/Data-STM-LinkedList-Internal.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove node from whatever LinkedList it is in If the node has already been removed this is no-op",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "delete",
          "normalized": "Node a-\u003eSTM()",
          "package": "stm-linkedlist",
          "signature": "Node a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create an empty linked list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "empty",
          "package": "stm-linkedlist",
          "signature": "STM (LinkedList a)",
          "source": "src/Data-STM-LinkedList-Internal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create an empty linked list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "empty",
          "package": "stm-linkedlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Version of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e that can be used in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "emptyIO",
          "package": "stm-linkedlist",
          "signature": "IO (LinkedList a)",
          "source": "src/Data-STM-LinkedList-Internal.html#emptyIO",
          "type": "function"
        },
        "index": {
          "description": "Version of empty that can be used in the IO monad",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "emptyIO",
          "package": "stm-linkedlist",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:emptyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the node corresponding to the last item of the list.  Return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list is empty.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "end",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM (Maybe (Node a))",
          "source": "src/Data-STM-LinkedList-Internal.html#end",
          "type": "function"
        },
        "index": {
          "description": "Get the node corresponding to the last item of the list Return Nothing if the list is empty",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "end",
          "normalized": "LinkedList a-\u003eSTM(Maybe(Node a))",
          "package": "stm-linkedlist",
          "signature": "LinkedList a-\u003eSTM(Maybe(Node a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item after the given node.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "insertAfter",
          "package": "stm-linkedlist",
          "signature": "a -\u003e Node a -\u003e STM (Node a)",
          "source": "src/Data-STM-LinkedList-Internal.html#insertAfter",
          "type": "function"
        },
        "index": {
          "description": "Insert an item after the given node",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "insertAfter",
          "normalized": "a-\u003eNode a-\u003eSTM(Node a)",
          "package": "stm-linkedlist",
          "partial": "After",
          "signature": "a-\u003eNode a-\u003eSTM(Node a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:insertAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert an item before the given node.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "insertBefore",
          "package": "stm-linkedlist",
          "signature": "a -\u003e Node a -\u003e STM (Node a)",
          "source": "src/Data-STM-LinkedList-Internal.html#insertBefore",
          "type": "function"
        },
        "index": {
          "description": "Insert an item before the given node",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "insertBefore",
          "normalized": "a-\u003eNode a-\u003eSTM(Node a)",
          "package": "stm-linkedlist",
          "partial": "Before",
          "signature": "a-\u003eNode a-\u003eSTM(Node a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:insertBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Count the number of items in the list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "length",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM Int",
          "source": "src/Data-STM-LinkedList-Internal.html#length",
          "type": "function"
        },
        "index": {
          "description": "Count the number of items in the list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "length",
          "normalized": "LinkedList a-\u003eSTM Int",
          "package": "stm-linkedlist",
          "signature": "LinkedList a-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the list head, a special \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eprev\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einsertBefore\u003c/a\u003e\u003c/code\u003e v . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e v\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einsertAfter\u003c/a\u003e\u003c/code\u003e v . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e v\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e ==\u003e \u003cem\u003eerror\u003c/em\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003elistHead\u003c/a\u003e\u003c/code\u003e ==\u003e \u003cem\u003eerror\u003c/em\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.STM.LinkedList",
          "name": "listHead",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e Node a",
          "source": "src/Data-STM-LinkedList-Internal.html#listHead",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the list head special Node with the following properties next listHead start prev listHead end insertBefore listHead append insertAfter listHead prepend value listHead error delete listHead error",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "listHead",
          "normalized": "LinkedList a-\u003eNode a",
          "package": "stm-linkedlist",
          "partial": "Head",
          "signature": "LinkedList a-\u003eNode a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:listHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the next node.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this is the last item,\n or if this node has been \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003ed from its list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "next",
          "package": "stm-linkedlist",
          "signature": "Node a -\u003e STM (Maybe (Node a))",
          "source": "src/Data-STM-LinkedList-Internal.html#next",
          "type": "function"
        },
        "index": {
          "description": "Get the next node Return Nothing if this is the last item or if this node has been delete from its list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "next",
          "normalized": "Node a-\u003eSTM(Maybe(Node a))",
          "package": "stm-linkedlist",
          "signature": "Node a-\u003eSTM(Maybe(Node a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the list empty?\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "null",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM Bool",
          "source": "src/Data-STM-LinkedList-Internal.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the list empty",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "null",
          "normalized": "LinkedList a-\u003eSTM Bool",
          "package": "stm-linkedlist",
          "signature": "LinkedList a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add a node to the beginning of a linked list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "prepend",
          "package": "stm-linkedlist",
          "signature": "a -\u003e LinkedList a -\u003e STM (Node a)",
          "source": "src/Data-STM-LinkedList-Internal.html#prepend",
          "type": "function"
        },
        "index": {
          "description": "Add node to the beginning of linked list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "prepend",
          "normalized": "a-\u003eLinkedList a-\u003eSTM(Node a)",
          "package": "stm-linkedlist",
          "signature": "a-\u003eLinkedList a-\u003eSTM(Node a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:prepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the previous node.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if this is the first item,\n or if this node has been \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003ed from its list.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "prev",
          "package": "stm-linkedlist",
          "signature": "Node a -\u003e STM (Maybe (Node a))",
          "source": "src/Data-STM-LinkedList-Internal.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Get the previous node Return Nothing if this is the first item or if this node has been delete from its list",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "prev",
          "normalized": "Node a-\u003eSTM(Maybe(Node a))",
          "package": "stm-linkedlist",
          "signature": "Node a-\u003eSTM(Maybe(Node a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get the node corresponding to the first item of the list.  Return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list is empty.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "start",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM (Maybe (Node a))",
          "source": "src/Data-STM-LinkedList-Internal.html#start",
          "type": "function"
        },
        "index": {
          "description": "Get the node corresponding to the first item of the list Return Nothing if the list is empty",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "start",
          "normalized": "LinkedList a-\u003eSTM(Maybe(Node a))",
          "package": "stm-linkedlist",
          "signature": "LinkedList a-\u003eSTM(Maybe(Node a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all of the items in a \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "toList",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM [a]",
          "source": "src/Data-STM-LinkedList-Internal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Return all of the items in LinkedList",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "toList",
          "normalized": "LinkedList a-\u003eSTM[a]",
          "package": "stm-linkedlist",
          "partial": "List",
          "signature": "LinkedList a-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all of the items in a \u003ccode\u003e\u003ca\u003eLinkedList\u003c/a\u003e\u003c/code\u003e, in reverse order.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "toListRev",
          "package": "stm-linkedlist",
          "signature": "LinkedList a -\u003e STM [a]",
          "source": "src/Data-STM-LinkedList-Internal.html#toListRev",
          "type": "function"
        },
        "index": {
          "description": "Return all of the items in LinkedList in reverse order",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "toListRev",
          "normalized": "LinkedList a-\u003eSTM[a]",
          "package": "stm-linkedlist",
          "partial": "List Rev",
          "signature": "LinkedList a-\u003eSTM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:toListRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the value of a node.\n\u003c/p\u003e",
          "module": "Data.STM.LinkedList",
          "name": "value",
          "package": "stm-linkedlist",
          "signature": "Node a -\u003e a",
          "source": "src/Data-STM-LinkedList-Internal.html#value",
          "type": "function"
        },
        "index": {
          "description": "Extract the value of node",
          "hierarchy": "Data STM LinkedList",
          "module": "Data.STM.LinkedList",
          "name": "value",
          "normalized": "Node a-\u003ea",
          "package": "stm-linkedlist",
          "signature": "Node a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-linkedlist/docs/Data-STM-LinkedList.html#v:value"
      }
    }
  ]
]