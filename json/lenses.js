[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses-Template.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an automatic Template Haskell\nroutine to scour data type definitions and generate\nlense objects for them automatically.\n\u003c/p\u003e\u003cp\u003eIt was copied almost verbatim (2 line change) from the wonderful Data.Accessors.Template module \nmade by Luke Palmer, and Henning Thielemann.\n\u003c/p\u003e\u003cp\u003eYou will need to add:\n\u003c/p\u003e\u003cp\u003e{-# LANGUAGE  TemplateHaskell,\n FlexibleContexts #-}\n\u003c/p\u003e\u003cp\u003eto the top of any modules that use this one. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lenses.Template",
        "fct-package": "lenses",
        "fct-signature": "module",
        "fct-source": "src/Data-Lenses-Template.html",
        "fct-type": "module",
        "title": "Template"
      },
      "index": {
        "description": "This module provides an automatic Template Haskell routine to scour data type definitions and generate lense objects for them automatically It was copied almost verbatim line change from the wonderful Data.Accessors.Template module made by Luke Palmer and Henning Thielemann You will need to add LANGUAGE TemplateHaskell FlexibleContexts to the top of any modules that use this one",
        "hierarchy": "Data Lenses Template",
        "module": "Data.Lenses.Template",
        "name": "Template",
        "normalized": "",
        "package": "lenses",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses-Template.html#v:deriveLenses",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ederiveLenses n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e looks through all the declared fields\n of the data type, and for each field ending in an underscore\n generates an accessor of the same name without the underscore.\n\u003c/p\u003e\u003cp\u003eIt is \u003ca\u003enameDeriveLenses\u003c/a\u003e n f where \u003ccode\u003ef\u003c/code\u003e satisfies\n\u003c/p\u003e\u003cpre\u003e f (s ++ \"_\") = Just s\n f x          = Nothing    -- otherwise\n\u003c/pre\u003e\u003cp\u003eFor example, given the data type:\n\u003c/p\u003e\u003cpre\u003e data Score = Score { p1Score_ :: Int\n                    , p2Score_ :: Int\n                    , rounds   :: Int\n                    }\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ederiveLenses\u003c/code\u003e will generate the following objects:\n\u003c/p\u003e\u003cpre\u003e p1Score :: (MonadState Score m) =\u003e StateT Int m b -\u003e m b\n p1Score = fromGetSet p1Score_ (\\x s -\u003e s { p1Score_ = x })\n p2Score :: (MonadState Score m) =\u003e StateT Int m b -\u003e m b\n p2Score = fromGetSet p2Score_ (\\x s -\u003e s { p2Score_ = x })\n\u003c/pre\u003e\u003cp\u003eIt is used with Template Haskell syntax like:\n\u003c/p\u003e\u003cpre\u003e $( deriveLenses ''TypeName )\n\u003c/pre\u003e\u003cp\u003eAnd will generate accessors when TypeName was declared\n using \u003ccode\u003edata\u003c/code\u003e or \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses.Template",
        "fct-package": "lenses",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Lenses-Template.html#deriveLenses",
        "fct-type": "function",
        "title": "deriveLenses"
      },
      "index": {
        "description": "deriveLenses where is the name of data type declared with data looks through all the declared fields of the data type and for each field ending in an underscore generates an accessor of the same name without the underscore It is nameDeriveLenses where satisfies Just Nothing otherwise For example given the data type data Score Score p1Score Int p2Score Int rounds Int deriveLenses will generate the following objects p1Score MonadState Score StateT Int p1Score fromGetSet p1Score p1Score p2Score MonadState Score StateT Int p2Score fromGetSet p2Score p2Score It is used with Template Haskell syntax like deriveLenses TypeName And will generate accessors when TypeName was declared using data or newtype",
        "hierarchy": "Data Lenses Template",
        "module": "Data.Lenses.Template",
        "name": "deriveLenses",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "lenses",
        "partial": "Lenses",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses-Template.html#v:nameDeriveLenses",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enameDeriveLenses n f\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the name of a data type\n declared with \u003ccode\u003edata\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a function from names of fields\n in that data type to the name of the corresponding accessor. If\n \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003eNothing\u003c/code\u003e, then no accessor is generated for that\n field.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses.Template",
        "fct-package": "lenses",
        "fct-signature": "Name -\u003e (String -\u003e Maybe String) -\u003e Q [Dec]",
        "fct-source": "src/Data-Lenses-Template.html#nameDeriveLenses",
        "fct-type": "function",
        "title": "nameDeriveLenses"
      },
      "index": {
        "description": "nameDeriveLenses where is the name of data type declared with data and is function from names of fields in that data type to the name of the corresponding accessor If returns Nothing then no accessor is generated for that field",
        "hierarchy": "Data Lenses Template",
        "module": "Data.Lenses.Template",
        "name": "nameDeriveLenses",
        "normalized": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]",
        "package": "lenses",
        "partial": "Derive Lenses",
        "signature": "Name-\u003e(String-\u003eMaybe String)-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides a convienient way to access and update the elements of a structure.\nIt is very similar to Data.Accessors, but a bit more generic and has fewer dependencies.\nI particularly like how cleanly it handles nested structures in state monads.\n\u003ccode\u003e\u003ca\u003erunSTLense\u003c/a\u003e\u003c/code\u003e is also a very useful function.\n\u003c/p\u003e\u003cp\u003eA brief tutorial to get started:\n\u003c/p\u003e\u003cp\u003eTo create a lense, you can use fromGetSet (although usually you would just derive them using templat haskell and \u003ccode\u003ederiveLenses\u003c/code\u003e from \u003ca\u003eData.Lenses.Template\u003c/a\u003e):\n\u003c/p\u003e\u003cpre\u003e lense = fromGetSet getField setField\n\u003c/pre\u003e\u003cp\u003eThe lense has type:\n\u003c/p\u003e\u003cpre\u003e lense :: (MonadState r m) =\u003e StateT a m b -\u003e m b\n\u003c/pre\u003e\u003cp\u003eWhere r is the type of the record, and a is the type of the field, (b can be any type you choose, more on that latter). Though it may help to think of it as:\n\u003c/p\u003e\u003cpre\u003e lense :: State a b -\u003e State r b\n\u003c/pre\u003e\u003cp\u003eWhich is not entirely accurate, but emphasises how the lense works.\nYou can think of it as \"pass in an action that operates on the field, and you get an action that operates on the record\".\nSo say we pass in get (with a more specific type for clarity):\n\u003c/p\u003e\u003cpre\u003e get :: State a a\n\n lense get :: State r a\n\u003c/pre\u003e\u003cp\u003eWe get out a state monad that we can run on our record to fetch our field.\n\u003c/p\u003e\u003cpre\u003e fieldValue = lense get `evalState` record\n\u003c/pre\u003e\u003cp\u003eThis module has a special function \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e that does this:\n\u003c/p\u003e\u003cpre\u003e fieldValue = record `fetch` lense\n\u003c/pre\u003e\u003cp\u003eYou can also pass in \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e to get back an action that updates the field.\n\u003c/p\u003e\u003cpre\u003e put :: a -\u003e State a ()\n\n lense (put someValue) :: State r ()\n\u003c/pre\u003e\u003cp\u003eNow we have a state monad that we can run on our record to update our field.\n\u003c/p\u003e\u003cpre\u003e updatedRecord = lense (put someValue) `execState` record\n\u003c/pre\u003e\u003cp\u003eThis module has a special function \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e that does this:\n\u003c/p\u003e\u003cpre\u003e updatedRecord = (record `update` lense) someValue\n\u003c/pre\u003e\u003cp\u003eTo aid in clarity and to deal with the actual types of the lenses this module provides \u003ccode\u003e\u003ca\u003eexecIn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eevalFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erunOn\u003c/a\u003e\u003c/code\u003e to be used in place of \u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e. Also note that \u003ccode\u003e\u003ca\u003eexecIn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eevalFrom\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erunOn\u003c/a\u003e\u003c/code\u003e have their parameters fliped from their state counterparts. There is nothing magical about these functions, they are just a little more handy than their state counterparts.\n\u003c/p\u003e\u003cp\u003eThe lenses are especially convienient if you have nested structures. Lense composition is just function composition.\n\u003c/p\u003e\u003cpre\u003e data Point = Point {\n                 x_ :: Float,\n                 y_ :: Float\n                 }\n    deriving (Show)\n\u003c/pre\u003e\u003cp\u003e$( deriveLenses ''Point )\n\u003c/p\u003e\u003cpre\u003e data Triangle = Triangle {\n                 pa_ :: Point,\n                 pb_ :: Point,\n                 pc_ :: Point\n                 }\n    deriving (Show)\n\u003c/pre\u003e\u003cp\u003e$( deriveLenses ''Triangle )\n\u003c/p\u003e\u003cpre\u003e a_y :: (MonadState Triangle m) =\u003e StateT Float (StateT Point m) b -\u003e m b\n a_y = pa . y\n\u003c/pre\u003e\u003cp\u003ea_y is now a lense that can operate on the y coordinate of point \"a\" inside a triangle.\nWe can use a_y to fetch the coordinate or update it, on whatever triangle we choose.\n\u003c/p\u003e\u003cpre\u003e someTriangle = Triangle (Point 5 3) (Point 0 1) (Point 10 6)\n\n ayValue = someTriangle `fetch` a_y\n -- ayValue == 3\n\n updatedTriangle = (someTriangle `update` a_y) 7\n -- updatedTriangle == Triangle (Point 5 7) (Point 0 1) (Point 10 6)\n\u003c/pre\u003e\u003cp\u003eOr we could apply our lense to an action and pass it into \u003ccode\u003e\u003ca\u003eexecIn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e (someTriangle `update` a_y) 7 == execIn someTriangle (a_y (put 7))\n\u003c/pre\u003e\u003cp\u003eWe can also chain actions together:\n\u003c/p\u003e\u003cpre\u003e a_x :: (MonadState Triangle m) =\u003e StateT Float (StateT Point m) b -\u003e m b\n a_x = pa . x\n c_y :: (MonadState Triangle m) =\u003e StateT Float (StateT Point m) b -\u003e m b\n c_y = pc . y\n\n updatedTriangle = execIn someTriangle $ a_y (put 7) \u003e\u003e a_x (put 1) \u003e\u003e c_y (put 9)\n -- updatedTriangle == Triangle (Point 1 7) (Point 0 1) (Point 10 9)\n\u003c/pre\u003e\u003cp\u003eWhat if we wanted to put the value of c_y into a_x? Can do!\n\u003c/p\u003e\u003cpre\u003e  updatedTriangle = execIn someTriangle $ do\n    cy \u003c- c_y get\n    a_x $ put cy\n  -- updatedTriangle == Triangle (Point 6 3) (Point 0 1) (Point 10 6)\n\u003c/pre\u003e\u003cp\u003eOr if the order really bugs you, you can use the \u003ccode\u003e\u003ca\u003e$%\u003c/a\u003e\u003c/code\u003e operator (taken from \u003ca\u003eData.Accessors.Basic\u003c/a\u003e, it really should be in a standard lib)\n\u003c/p\u003e\u003cpre\u003e  updatedTriangle = execIn someTriangle $ do\n    cy \u003c- get $% c_y\n    put cy $% a_x\n  -- updatedTriangle == Triangle (Point 6 3) (Point 0 1) (Point 10 6)\n\u003c/pre\u003e\u003cp\u003eOr you can use the \u003ccode\u003e\u003ca\u003e$=\u003c/a\u003e\u003c/code\u003e operator:\n\u003c/p\u003e\u003cpre\u003e  updatedTriangle = execIn someTriangle $ do\n    cy \u003c- c_y get\n    a_x $= cy\n\u003c/pre\u003e\u003cp\u003eOr more concisely:\n\u003c/p\u003e\u003cpre\u003e  updatedTriangle = execIn someTriangle $ (c_y get \u003e\u003e= a_x . put)\n\u003c/pre\u003e\u003cp\u003eOr say we want to put the value of c_y into a_x, but want to throw an error if c_y is zero. We can do that as well!\n\u003c/p\u003e\u003cpre\u003e  updatedTriangle :: Either String Triangle\n  updatedTriangle = execInT someTriangle $ do\n    cy \u003c- c_y get\n    when (cy == 0) $ throwError \"Something bad happend\"\n    a_x $ put cy\n  -- updatedTriangle == Right $ Triangle (Point 6 3) (Point 0 1) (Point 10 6)\n  -- if cy had equaled 0 then we would have gotten this:\n  -- updatedTriangle == Left \"Something bad happend\"\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eexecInT\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYay for monad transformers!\n\u003c/p\u003e\u003cp\u003eThis module has one last feature that allows you to convert a function that fetches data from a structure to a function that modifies it! For an example see the documentation for \u003ccode\u003e\u003ca\u003erunSTLense\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne final note: Due to the generality of the lenses you might end up accidentally running into the monomorphism restriction.\nSo if get a type error like:\n\u003c/p\u003e\u003cpre\u003e    Couldn't match expected type `SomeMonad SomeStructureType'\n           against inferred type `Control.Monad.Identity.Identity SomeStructureType'\n\u003c/pre\u003e\u003cp\u003eand nothing appears to be wrong with your code, try turning the restriction off with -XNoMonomorphismRestriction and see if it goes away.\nIf it does then you probably need to add some explicit type signatures somewhere.\n\u003c/p\u003e\u003cp\u003eI whipped out this documentation in a hurry, so if you spot any errors, or think I should explain something better, \u003cem\u003eplease\u003c/em\u003e let me know. This library is hosted on github (click on the \u003cem\u003eContents\u003c/em\u003e link above and you should see the Homepage link) so it should be very easy to forked it and send patches to me.\nAlso since this module is new I'm open to radical modifications if you have a good suggestion, so suggest away! :)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "module",
        "fct-source": "src/Data-Lenses.html",
        "fct-type": "module",
        "title": "Lenses"
      },
      "index": {
        "description": "This modules provides convienient way to access and update the elements of structure It is very similar to Data.Accessors but bit more generic and has fewer dependencies particularly like how cleanly it handles nested structures in state monads runSTLense is also very useful function brief tutorial to get started To create lense you can use fromGetSet although usually you would just derive them using templat haskell and deriveLenses from Data.Lenses.Template lense fromGetSet getField setField The lense has type lense MonadState StateT Where is the type of the record and is the type of the field can be any type you choose more on that latter Though it may help to think of it as lense State State Which is not entirely accurate but emphasises how the lense works You can think of it as pass in an action that operates on the field and you get an action that operates on the record So say we pass in get with more specific type for clarity get State lense get State We get out state monad that we can run on our record to fetch our field fieldValue lense get evalState record This module has special function fetch that does this fieldValue record fetch lense You can also pass in put to get back an action that updates the field put State lense put someValue State Now we have state monad that we can run on our record to update our field updatedRecord lense put someValue execState record This module has special function update that does this updatedRecord record update lense someValue To aid in clarity and to deal with the actual types of the lenses this module provides execIn evalFrom and runOn to be used in place of execState evalState and runState Also note that execIn evalFrom and runOn have their parameters fliped from their state counterparts There is nothing magical about these functions they are just little more handy than their state counterparts The lenses are especially convienient if you have nested structures Lense composition is just function composition data Point Point Float Float deriving Show deriveLenses Point data Triangle Triangle pa Point pb Point pc Point deriving Show deriveLenses Triangle MonadState Triangle StateT Float StateT Point pa is now lense that can operate on the coordinate of point inside triangle We can use to fetch the coordinate or update it on whatever triangle we choose someTriangle Triangle Point Point Point ayValue someTriangle fetch ayValue updatedTriangle someTriangle update updatedTriangle Triangle Point Point Point Or we could apply our lense to an action and pass it into execIn someTriangle update execIn someTriangle put We can also chain actions together MonadState Triangle StateT Float StateT Point pa MonadState Triangle StateT Float StateT Point pc updatedTriangle execIn someTriangle put put put updatedTriangle Triangle Point Point Point What if we wanted to put the value of into Can do updatedTriangle execIn someTriangle do cy get put cy updatedTriangle Triangle Point Point Point Or if the order really bugs you you can use the operator taken from Data.Accessors.Basic it really should be in standard lib updatedTriangle execIn someTriangle do cy get put cy updatedTriangle Triangle Point Point Point Or you can use the operator updatedTriangle execIn someTriangle do cy get cy Or more concisely updatedTriangle execIn someTriangle get put Or say we want to put the value of into but want to throw an error if is zero We can do that as well updatedTriangle Either String Triangle updatedTriangle execInT someTriangle do cy get when cy throwError Something bad happend put cy updatedTriangle Right Triangle Point Point Point if cy had equaled then we would have gotten this updatedTriangle Left Something bad happend Note that execInT flip execStateT Yay for monad transformers This module has one last feature that allows you to convert function that fetches data from structure to function that modifies it For an example see the documentation for runSTLense One final note Due to the generality of the lenses you might end up accidentally running into the monomorphism restriction So if get type error like Couldn match expected type SomeMonad SomeStructureType against inferred type Control.Monad.Identity.Identity SomeStructureType and nothing appears to be wrong with your code try turning the restriction off with XNoMonomorphismRestriction and see if it goes away If it does then you probably need to add some explicit type signatures somewhere whipped out this documentation in hurry so if you spot any errors or think should explain something better please let me know This library is hosted on github click on the Contents link above and you should see the Homepage link so it should be very easy to forked it and send patches to me Also since this module is new open to radical modifications if you have good suggestion so suggest away",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "Lenses",
        "normalized": "",
        "package": "lenses",
        "partial": "Lenses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:-36--37-",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped version of '($)'.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e b",
        "fct-source": "src/Data-Lenses.html#%24%25",
        "fct-type": "function",
        "title": "($%)"
      },
      "index": {
        "description": "Flipped version of",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "($%) $%",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "lenses",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:-36--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAn operator for assigning a value to the value referenced by a lense.\n(see the example near the end of the tutorial at the start of this module)\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(m () -\u003e b) -\u003e s -\u003e b",
        "fct-source": "src/Data-Lenses.html#%24%3D",
        "fct-type": "function",
        "title": "($=)"
      },
      "index": {
        "description": "An operator for assigning value to the value referenced by lense see the example near the end of the tutorial at the start of this module",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "($=) $=",
        "normalized": "(a()-\u003eb)-\u003ec-\u003eb",
        "package": "lenses",
        "partial": "",
        "signature": "(m()-\u003eb)-\u003es-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003ealters a field in a structure using a lense and a function:\n\u003c/p\u003e\u003cpre\u003e somePoint = Point 5 3\n newPoint = (somePoint `alter` y) (+1)\n\u003c/pre\u003e\u003cpre\u003e -- newPoint == Point 5 4\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(m () -\u003e StateT r Identity b) -\u003e (a -\u003e a) -\u003e r -\u003e r",
        "fct-source": "src/Data-Lenses.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "alters field in structure using lense and function somePoint Point newPoint somePoint alter newPoint Point",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "alter",
        "normalized": "(a()-\u003eStateT b Identity c)-\u003e(d-\u003ed)-\u003eb-\u003eb",
        "package": "lenses",
        "partial": "",
        "signature": "(m()-\u003eStateT r Identity b)-\u003e(a-\u003ea)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:evalFrom",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a state monad action on a structure and returns the value returned from the action.\n\u003c/p\u003e\u003cp\u003eUse it to fetch values from fields.\n\u003c/p\u003e\u003cpre\u003e someTriangle = Triangle (Point 5 3) (Point 0 1) (Point 10 6)\n a = evalFrom someTriangle $ pb . x get\n -- a == 0\n\u003c/pre\u003e\u003cp\u003enote that:\n\u003c/p\u003e\u003cpre\u003e evalFrom someTriangle (pb . x get) == someTriangle `fetch` (pb . x)\n\u003c/pre\u003e\u003cp\u003eThe advantage over \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e is that it allows you to specify a different final action besides \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e evalFrom someTriangle $ pb . x (modifyAndGet (+1))\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "b -\u003e StateT b Identity a -\u003e a",
        "fct-source": "src/Data-Lenses.html#evalFrom",
        "fct-type": "function",
        "title": "evalFrom"
      },
      "index": {
        "description": "Runs state monad action on structure and returns the value returned from the action Use it to fetch values from fields someTriangle Triangle Point Point Point evalFrom someTriangle pb get note that evalFrom someTriangle pb get someTriangle fetch pb The advantage over fetch is that it allows you to specify different final action besides get like so evalFrom someTriangle pb modifyAndGet",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "evalFrom",
        "normalized": "a-\u003eStateT a Identity b-\u003eb",
        "package": "lenses",
        "partial": "From",
        "signature": "b-\u003eStateT b Identity a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:evalFromT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad transformer version of \u003ccode\u003e\u003ca\u003eevalFrom\u003c/a\u003e\u003c/code\u003e. Note that \u003ccode\u003e\u003ca\u003eevalFromT\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "b -\u003e StateT b m a -\u003e m a",
        "fct-source": "src/Data-Lenses.html#evalFromT",
        "fct-type": "function",
        "title": "evalFromT"
      },
      "index": {
        "description": "Monad transformer version of evalFrom Note that evalFromT flip evalStateT",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "evalFromT",
        "normalized": "a-\u003eStateT a b c-\u003eb c",
        "package": "lenses",
        "partial": "From",
        "signature": "b-\u003eStateT b m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:execIn",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a state monad action on a structure and returns the updated structure\n\u003c/p\u003e\u003cp\u003eUse it to update fields:\n\u003c/p\u003e\u003cpre\u003e somePoint = Point 5 3\n a = execIn somePoint $ x (put 1)\n -- a == Point 1 3\n\u003c/pre\u003e\u003cp\u003enote that:\n\u003c/p\u003e\u003cpre\u003e execIn somePoint (x (put 1)) == (somePoint `update` x) 1\n\u003c/pre\u003e\u003cp\u003eThe advantage over \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e is that it allows you to specify a different final action besides \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e like so:\n\u003c/p\u003e\u003cpre\u003e a = execIn somePoint $ x (modifyAndGet (+1))\n -- a = Point 6 3\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "a -\u003e StateT a Identity b -\u003e a",
        "fct-source": "src/Data-Lenses.html#execIn",
        "fct-type": "function",
        "title": "execIn"
      },
      "index": {
        "description": "Runs state monad action on structure and returns the updated structure Use it to update fields somePoint Point execIn somePoint put Point note that execIn somePoint put somePoint update The advantage over update is that it allows you to specify different final action besides put like so execIn somePoint modifyAndGet Point",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "execIn",
        "normalized": "a-\u003eStateT a Identity b-\u003ea",
        "package": "lenses",
        "partial": "In",
        "signature": "a-\u003eStateT a Identity b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:execInT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad transformer version of \u003ccode\u003e\u003ca\u003eexecIn\u003c/a\u003e\u003c/code\u003e. Note that \u003ccode\u003e\u003ca\u003eexecIn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "b -\u003e StateT b m a -\u003e m b",
        "fct-source": "src/Data-Lenses.html#execInT",
        "fct-type": "function",
        "title": "execInT"
      },
      "index": {
        "description": "Monad transformer version of execIn Note that execIn flip execStateT",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "execInT",
        "normalized": "a-\u003eStateT a b c-\u003eb a",
        "package": "lenses",
        "partial": "In",
        "signature": "b-\u003eStateT b m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:fetch",
      "description": {
        "fct-descr": "\u003cp\u003efetches a field from a structure using a lense:\n\u003c/p\u003e\u003cpre\u003e somePoint = Point 5 3\n a = somePoint `fetch` x\n b = somePoint `fetch` y\n\u003c/pre\u003e\u003cpre\u003e -- a == 5\n -- b == 3\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "r -\u003e (m a -\u003e StateT r Identity a) -\u003e a",
        "fct-source": "src/Data-Lenses.html#fetch",
        "fct-type": "function",
        "title": "fetch"
      },
      "index": {
        "description": "fetches field from structure using lense somePoint Point somePoint fetch somePoint fetch",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "fetch",
        "normalized": "a-\u003e(b c-\u003eStateT a Identity c)-\u003ec",
        "package": "lenses",
        "partial": "",
        "signature": "r-\u003e(m a-\u003eStateT r Identity a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:from",
      "description": {
        "fct-descr": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003erunSTLense\u003c/a\u003e\u003c/code\u003e to a function and a structure and returns the \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e of the result.\nSee \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e for example of use.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(forall s.  t (State a b -\u003e s) -\u003e f s) -\u003e t a -\u003e t a",
        "fct-source": "src/Data-Lenses.html#from",
        "fct-type": "function",
        "title": "from"
      },
      "index": {
        "description": "Applies runSTLense to function and structure and returns the snd of the result See to for example of use",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "from",
        "normalized": "(a b c(State d e-\u003ef)-\u003eg f)-\u003ec d-\u003ec d",
        "package": "lenses",
        "partial": "",
        "signature": "(forall s. t(State a b-\u003es)-\u003ef s)-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:fromGetSet",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a \u003ca\u003egetter\u003c/a\u003e and \u003ca\u003esetter\u003c/a\u003e function and returns our lense.\n\u003c/p\u003e\u003cp\u003eUsually you only need to use this if you don't want to use Template Haskell to derive your Lenses for you.\nWith a structure Point:\n\u003c/p\u003e\u003cpre\u003e data Point = Point {\n                 x_ :: Float,\n                 y_ :: Float\n                 }\n    deriving (Show)\n\u003c/pre\u003e\u003cp\u003eThis (from \u003ca\u003eData.Lenses.Template\u003c/a\u003e):\n\u003c/p\u003e\u003cp\u003e$( deriveLenses ''Point )\n\u003c/p\u003e\u003cp\u003eis equivalent to this:\n\u003c/p\u003e\u003cpre\u003e x :: (MonadState Point m) =\u003e StateT Float m b -\u003e m b\n x = fromGetSet x_ (\\a s -\u003e s { x_ = a })\n y :: (MonadState Point m) =\u003e StateT Float m b -\u003e m b\n y = fromGetSet y_ (\\a s -\u003e s { y_ = a })\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(r -\u003e a) -\u003e (a -\u003e r -\u003e r) -\u003e StateT a m b -\u003e m b",
        "fct-source": "src/Data-Lenses.html#fromGetSet",
        "fct-type": "function",
        "title": "fromGetSet"
      },
      "index": {
        "description": "This function takes getter and setter function and returns our lense Usually you only need to use this if you don want to use Template Haskell to derive your Lenses for you With structure Point data Point Point Float Float deriving Show This from Data.Lenses.Template deriveLenses Point is equivalent to this MonadState Point StateT Float fromGetSet MonadState Point StateT Float fromGetSet",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "fromGetSet",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eStateT b c d-\u003ec d",
        "package": "lenses",
        "partial": "Get Set",
        "signature": "(r-\u003ea)-\u003e(a-\u003er-\u003er)-\u003eStateT a m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the state in a state monad and returns the original value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAndModify\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodifyAndGet\u003c/a\u003e\u003c/code\u003e should really be in \u003ccode\u003e\u003ca\u003eClass\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(s -\u003e s) -\u003e m s",
        "fct-source": "src/Data-Lenses.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modifies the state in state monad and returns the original value getAndModify and modifyAndGet should really be in Class",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "getAndModify",
        "normalized": "(a-\u003ea)-\u003eb a",
        "package": "lenses",
        "partial": "And Modify",
        "signature": "(s-\u003es)-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the state in a state monad and returns the new value.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(s -\u003e s) -\u003e m s",
        "fct-source": "src/Data-Lenses.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modifies the state in state monad and returns the new value",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "modifyAndGet",
        "normalized": "(a-\u003ea)-\u003eb a",
        "package": "lenses",
        "partial": "And Get",
        "signature": "(s-\u003es)-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:runOn",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a state monad action on a structure and returns the value returned from the action and the updated structure.\n\u003c/p\u003e\u003cpre\u003e somePoint = Point 5 3\n a = runOn somePoint $ x (modifyAndGet (+1))\n -- a == (6, Point 6 3)\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "b -\u003e StateT b Identity a -\u003e (a, b)",
        "fct-source": "src/Data-Lenses.html#runOn",
        "fct-type": "function",
        "title": "runOn"
      },
      "index": {
        "description": "Runs state monad action on structure and returns the value returned from the action and the updated structure somePoint Point runOn somePoint modifyAndGet Point",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "runOn",
        "normalized": "a-\u003eStateT a Identity b-\u003e(b,a)",
        "package": "lenses",
        "partial": "On",
        "signature": "b-\u003eStateT b Identity a-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:runOnT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad transformer version of \u003ccode\u003e\u003ca\u003erunOn\u003c/a\u003e\u003c/code\u003e. Note that \u003ccode\u003e\u003ca\u003erunOnT\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "b -\u003e StateT b m a -\u003e m (a, b)",
        "fct-source": "src/Data-Lenses.html#runOnT",
        "fct-type": "function",
        "title": "runOnT"
      },
      "index": {
        "description": "Monad transformer version of runOn Note that runOnT runStateT",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "runOnT",
        "normalized": "a-\u003eStateT a b c-\u003eb(c,a)",
        "package": "lenses",
        "partial": "On",
        "signature": "b-\u003eStateT b m a-\u003em(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:runSTLense",
      "description": {
        "fct-descr": "\u003cp\u003eThis function has the magical ability to convert a function that fetches elements from a structure, to a function that lets you modify the elements in the structure.\nThe catch is that the structure must be a member of \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSo say you have a function that gets the diagonal of a list of lists:\n\u003c/p\u003e\u003cpre\u003e diagonal :: [[a]] -\u003e [a]\n\u003c/pre\u003e\u003cp\u003ewe can make a function that increments the diagonal like so:\n\u003c/p\u003e\u003cpre\u003e addOne :: State Int ()\n addOne = modify (+1)\n\u003c/pre\u003e\u003cpre\u003e incrementDiagonal :: [[a]] -\u003e [[a]]\n incrementDiagonal xss = snd $ runSTLense (fmap ($ addOne) . diagonal) xss\n\u003c/pre\u003e\u003cp\u003eOf course there are some helper combinators to make this cleaner:\n\u003c/p\u003e\u003cpre\u003e incrementDiagonal xss = (addOne `to` diagonal) `from` xss\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunSTLense\u003c/a\u003e\u003c/code\u003e takes a function, a traversable structure, and returns a pair of (collected values, updated structure)\nFor clarification:\n\u003c/p\u003e\u003cpre\u003e specialFunction ::  (Traversable f, Traversable t) =\u003e f (State a b -\u003e s) -\u003e t s\n (collectedValues, updatedStructure) = runSTLense specialFunction originalStructure\n collectedAlmostValues = specialFunction processedOriginalStructure\n\u003c/pre\u003e\u003cp\u003eprocessedOriginalStructure has the same shape as originalStructure but every element has been replaced with a transformer function (State a b -\u003e s).\nspecialFunction needs to return the result of the application of the functions in processedOriginalStructure to a state monad.\nThe state monad by definition will return a result and potentially update state. Getting state will get the value of the element in originalStructure.\nUpdating state will update the value of the element in updatedStructure. The returned values are gathered in collectedValues.\n\u003c/p\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "(forall s.  f (State a b -\u003e s) -\u003e t s) -\u003e f a -\u003e (t b, f a)",
        "fct-source": "src/Data-Lenses.html#runSTLense",
        "fct-type": "function",
        "title": "runSTLense"
      },
      "index": {
        "description": "This function has the magical ability to convert function that fetches elements from structure to function that lets you modify the elements in the structure The catch is that the structure must be member of Traversable So say you have function that gets the diagonal of list of lists diagonal we can make function that increments the diagonal like so addOne State Int addOne modify incrementDiagonal incrementDiagonal xss snd runSTLense fmap addOne diagonal xss Of course there are some helper combinators to make this cleaner incrementDiagonal xss addOne to diagonal from xss runSTLense takes function traversable structure and returns pair of collected values updated structure For clarification specialFunction Traversable Traversable State collectedValues updatedStructure runSTLense specialFunction originalStructure collectedAlmostValues specialFunction processedOriginalStructure processedOriginalStructure has the same shape as originalStructure but every element has been replaced with transformer function State specialFunction needs to return the result of the application of the functions in processedOriginalStructure to state monad The state monad by definition will return result and potentially update state Getting state will get the value of the element in originalStructure Updating state will update the value of the element in updatedStructure The returned values are gathered in collectedValues",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "runSTLense",
        "normalized": "(a b c(State d e-\u003ef)-\u003eg f)-\u003ec d-\u003e(g e,c d)",
        "package": "lenses",
        "partial": "STLense",
        "signature": "(forall s. f(State a b-\u003es)-\u003et s)-\u003ef a-\u003e(t b,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003eA helper combinator used for applying a monad to element collected by a fetching function.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e everyOther :: [a] -\u003e [a]\n everyOther [] = []\n everyOther (x:[]) = [x]\n everyOther (x:y:xs) = x : everyOther xs\n\u003c/pre\u003e\u003cpre\u003e addOne :: State Int ()\n addOne = modify (+1)\n\u003c/pre\u003e\u003cpre\u003e test :: [Int]\n test = (addOne `to` everyOther) `from` [1, 2, 9, 6, 7, 8, 4]\n -- test == [2, 2, 10, 6, 8, 8, 5]\n\u003c/pre\u003e\u003cp\u003ewhich is the same as:\n\u003c/p\u003e\u003cpre\u003e test = snd $ runSTLense (addOne `to` everyOther) [1, 2, 9, 6, 7, 8, 4]\n\u003c/pre\u003e\u003cp\u003ewhich is the same as:\n\u003c/p\u003e\u003cpre\u003e test = snd $ runSTLense (fmap ($ addOne) . everyOther) [1, 2, 9, 6, 7, 8, 4]\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "a -\u003e (c -\u003e f (a -\u003e b)) -\u003e c -\u003e f b",
        "fct-source": "src/Data-Lenses.html#to",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "helper combinator used for applying monad to element collected by fetching function For example everyOther everyOther everyOther everyOther xs everyOther xs addOne State Int addOne modify test Int test addOne to everyOther from test which is the same as test snd runSTLense addOne to everyOther which is the same as test snd runSTLense fmap addOne everyOther",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "to",
        "normalized": "a-\u003e(b-\u003ec(a-\u003ed))-\u003eb-\u003ec d",
        "package": "lenses",
        "partial": "",
        "signature": "a-\u003e(c-\u003ef(a-\u003eb))-\u003ec-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lenses/docs/Data-Lenses.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eupdates a field in a structure using a lense:\n\u003c/p\u003e\u003cpre\u003e somePoint = Point 5 3\n newPoint = (somePoint `update` y) 15\n\u003c/pre\u003e\u003cpre\u003e -- newPoint == Point 5 15\n\u003c/pre\u003e",
        "fct-module": "Data.Lenses",
        "fct-package": "lenses",
        "fct-signature": "r -\u003e (m () -\u003e StateT r Identity b) -\u003e a -\u003e r",
        "fct-source": "src/Data-Lenses.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "updates field in structure using lense somePoint Point newPoint somePoint update newPoint Point",
        "hierarchy": "Data Lenses",
        "module": "Data.Lenses",
        "name": "update",
        "normalized": "a-\u003e(b()-\u003eStateT a Identity c)-\u003ed-\u003ea",
        "package": "lenses",
        "partial": "",
        "signature": "r-\u003e(m()-\u003eStateT r Identity b)-\u003ea-\u003er"
      }
    }
  }
]