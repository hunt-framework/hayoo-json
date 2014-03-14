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
        "word": "game-probability"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for efficiently calculating the probability of drawing cards.  Here\n are some examples of using the module.\n\u003c/p\u003e\u003cp\u003eIn the game Dominion you start out with a deck consisting of 7 \"Copper\" cards\n and 3 \"Estate\" cards.  On your first turn you draw five cards from this deck.\n  To calculate the chances of drawing the different number of \"Copper\" cards\n (as a map from number of \"Copper\" cards to probability), you can use this code:\n\u003c/p\u003e\u003cpre\u003e copperChances :: Map Int Rational\n copperChances = chanceMap startingDeck (drawCount (== \"Copper\") 5)\n   where startingDeck = makeCards $ replicate 7 \"Copper \" ++ replicate 3 \"Estate\"\n\u003c/pre\u003e\u003cp\u003eYou could equally define a data-type for the cards rather than use Strings,\n but often Strings are easiest for one-off queries.\n\u003c/p\u003e\u003cp\u003eAs a different example, in the game Ticket To Ride: Europe, the deck of cards consists of 12 cards of each\n of eight colours and 14 multi-colour cards.  We can describe it using a custom\n data-type this time:\n\u003c/p\u003e\u003cpre\u003e data TTRECard = Purple | White | Blue | Yellow | Orange | Black | Red | Green | MultiColour\n\u003c/pre\u003e\u003cpre\u003e ttreDeck :: Cards TTRECard\n ttreDeck = replicate 14 MultiColour ++ concatMap (replicate 12) [Purple, White, Blue, Yellow, Orange, Black, Red, Green]\n\u003c/pre\u003e\u003cp\u003eIn the game, there are always 5 communal cards visible.  Imagine you wanted\n to calculate the probability of receiving a particular colour when drawing from\n the deck.  You must first remove the cards in your hand and those visible communal\n cards (we'll ignore the discards), then calculate the probability for drawing\n one card with the \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e colourChances :: Map TTRECard Rational\n colourChances = chanceMap (ttreDeck `minusCards` (myHand `mappend` communal)) draw\n\u003c/pre\u003e\u003cp\u003eThis will give you a map from TTRECard (i.e. colour) to probability.\n\u003c/p\u003e\u003cp\u003eTo continue with that example, when you build tunnels in the game, you must\n lay out the required number of coloured cards, then draw three from the\n deck.  If any of the three match the colour of tunnel you are building, you\n must pay that many additional cards.  You may want a function that, given\n your hand (we'll ignore the communal cards to keep the example shorter) and\n the length of the tunnel, works out if you are likely to make it.  One way to\n do this is:\n\u003c/p\u003e\u003cpre\u003e tunnel :: Cards TTRECard -\u003e Int -\u003e Rational\n tunnel myHand n = chance (ttreDeck `minusCards` myHand)\n                          (drawCount match 3 \u003e\u003e= ensure . (\u003c= spare))\n   where\n     spare = length (filter match $ sortedCards myHand) - n\n     match a = a == MultiColour || a == tunnelColour\n\u003c/pre\u003e\u003cp\u003eThat should be fairly fast.  But to illustrate how to speed up these calculations,\n here is another, faster way to do this: pre-process the cards into those that\n match and those that don't, using \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e tunnel :: Cards TTRECard -\u003e Int -\u003e Rational\n tunnel myHand n = chanceOn match (ttreDeck `minusCards` myHand)\n                          (drawCount (== True) 3 \u003e\u003e= ensure . (\u003c= spare))\n   where\n     spare = length (filter match $ sortedCards myHand) - n\n     match a = a == MultiColour || a == tunnelColour\n\u003c/pre\u003e\u003cp\u003eThis may seem like a relatively small difference, and indeed it is a small change\n to the code.  However, it will execute much faster, because the \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e function\n only has two different card values to consider: True, and False, so it just\n considers those two.  Previously it had to consider the nine different types\n of card separately, even though only two would match (the function has no way\n of knowing that a priori).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "Hand",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for efficiently calculating the probability of drawing cards Here are some examples of using the module In the game Dominion you start out with deck consisting of Copper cards and Estate cards On your first turn you draw five cards from this deck To calculate the chances of drawing the different number of Copper cards as map from number of Copper cards to probability you can use this code copperChances Map Int Rational copperChances chanceMap startingDeck drawCount Copper where startingDeck makeCards replicate Copper replicate Estate You could equally define data-type for the cards rather than use Strings but often Strings are easiest for one-off queries As different example in the game Ticket To Ride Europe the deck of cards consists of cards of each of eight colours and multi-colour cards We can describe it using custom data-type this time data TTRECard Purple White Blue Yellow Orange Black Red Green MultiColour ttreDeck Cards TTRECard ttreDeck replicate MultiColour concatMap replicate Purple White Blue Yellow Orange Black Red Green In the game there are always communal cards visible Imagine you wanted to calculate the probability of receiving particular colour when drawing from the deck You must first remove the cards in your hand and those visible communal cards we ll ignore the discards then calculate the probability for drawing one card with the draw function colourChances Map TTRECard Rational colourChances chanceMap ttreDeck minusCards myHand mappend communal draw This will give you map from TTRECard i.e colour to probability To continue with that example when you build tunnels in the game you must lay out the required number of coloured cards then draw three from the deck If any of the three match the colour of tunnel you are building you must pay that many additional cards You may want function that given your hand we ll ignore the communal cards to keep the example shorter and the length of the tunnel works out if you are likely to make it One way to do this is tunnel Cards TTRECard Int Rational tunnel myHand chance ttreDeck minusCards myHand drawCount match ensure spare where spare length filter match sortedCards myHand match MultiColour tunnelColour That should be fairly fast But to illustrate how to speed up these calculations here is another faster way to do this pre-process the cards into those that match and those that don using chanceOn tunnel Cards TTRECard Int Rational tunnel myHand chanceOn match ttreDeck minusCards myHand drawCount True ensure spare where spare length filter match sortedCards myHand match MultiColour tunnelColour This may seem like relatively small difference and indeed it is small change to the code However it will execute much faster because the chanceOn function only has two different card values to consider True and False so it just considers those two Previously it had to consider the nine different types of card separately even though only two would match the function has no way of knowing that priori",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "Hand",
          "package": "game-probability",
          "partial": "Hand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for describing drawing cards.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the type of the card (this must match the deck you end\n up drawing from), the second parameter is the monadic return type as normal.\n\u003c/p\u003e\u003cp\u003eEach action in the monad is the drawing of a card, see \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e and similar functions.\n  There is the notion of failure: \u003ccode\u003e\u003ca\u003ebadHand\u003c/a\u003e\u003c/code\u003e makes the current draw fail, as does\n \u003ccode\u003e\u003ca\u003edrawWhere\u003c/a\u003e\u003c/code\u003e if no cards satisfy the criteria, and attempting to \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e when\n there are no more cards will also fail.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance allows you to choose between two sequences of draws.\n  If the LHS of '(\u003c|\u003e)' fails, the right-hand side is used instead.  \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n is the same as \u003ccode\u003e\u003ca\u003ebadHand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "DrawM",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#DrawM",
          "type": "data"
        },
        "index": {
          "description": "monad for describing drawing cards The first parameter is the type of the card this must match the deck you end up drawing from the second parameter is the monadic return type as normal Each action in the monad is the drawing of card see draw and similar functions There is the notion of failure badHand makes the current draw fail as does drawWhere if no cards satisfy the criteria and attempting to draw when there are no more cards will also fail The Alternative instance allows you to choose between two sequences of draws If the LHS of fails the right-hand side is used instead empty is the same as badHand",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "DrawM",
          "package": "game-probability",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#t:DrawM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that the current draw should not be continued.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "badHand",
          "package": "game-probability",
          "signature": "DrawM card a",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#badHand",
          "type": "function"
        },
        "index": {
          "description": "Indicates that the current draw should not be continued",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "badHand",
          "package": "game-probability",
          "partial": "Hand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:badHand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the chance of the given draw succeeding (i.e. not failing) with\n the given deck.  Note that the return value of the draw is ignored; this function\n is only interested in whether the draw succeeds.\n\u003c/p\u003e\u003cp\u003eNote that if you are only interested in partial aspects of the cards (e.g. just\n the rank in a deck of playing cards), \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e is much more efficient.  See\n \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e chance deck (return ()) == 1\n chance (makeCards [\"a\", \"a\", \"b\"]) (drawWhere (== \"a\")) == 2 % 3\n chance (makeCards [\"a\", \"a\", \"b\"]) (drawSame 2) == 1 % 3\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chance",
          "package": "game-probability",
          "signature": "Cards card -\u003e DrawM card a -\u003e Rational",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#chance",
          "type": "function"
        },
        "index": {
          "description": "Calculates the chance of the given draw succeeding i.e not failing with the given deck Note that the return value of the draw is ignored this function is only interested in whether the draw succeeds Note that if you are only interested in partial aspects of the cards e.g just the rank in deck of playing cards chanceOn is much more efficient See chanceOn for more details Examples chance deck return chance makeCards drawWhere chance makeCards drawSame",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chance",
          "normalized": "Cards a-\u003eDrawM a b-\u003eRational",
          "package": "game-probability",
          "signature": "Cards card-\u003eDrawM card a-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:chance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the probability of each result of the given draw with the given\n deck.  The probabilities will exclude the chance of a failed draw; therefore\n the chance of a failed draw is \u003ccode\u003e1 - sum (elems $ chanceMap ..)\u003c/code\u003e.  Alternatively\n you can incorporate the possibility of a failed draw with a Maybe wrapper using\n \u003ccode\u003echanceMap cards (optional m)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e chanceMap (makeCards [\"a\",\"b\"]) (drawWhere (== \"a\"))) == singleton \"a\" (1 % 2)\n\u003c/pre\u003e\u003cpre\u003e outcomes (eventDraw (makeCards [\"a\",\"a\",\"a\",\"b\",\"b\"]) (drawSame 2)\n   == fromList [(\"a\", 3 % 10), (\"b\", 1 % 5)]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceMap",
          "package": "game-probability",
          "signature": "Cards card -\u003e DrawM card a -\u003e Map a Rational",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#chanceMap",
          "type": "function"
        },
        "index": {
          "description": "Calculates the probability of each result of the given draw with the given deck The probabilities will exclude the chance of failed draw therefore the chance of failed draw is sum elems chanceMap Alternatively you can incorporate the possibility of failed draw with Maybe wrapper using chanceMap cards optional Examples chanceMap makeCards drawWhere singleton outcomes eventDraw makeCards drawSame fromList",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceMap",
          "normalized": "Cards a-\u003eDrawM a b-\u003eMap b Rational",
          "package": "game-probability",
          "partial": "Map",
          "signature": "Cards card-\u003eDrawM card a-\u003eMap a Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:chanceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echanceMap\u003c/a\u003e\u003c/code\u003e but can be much more efficient.  See \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e for an\n explanation of why.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceMapOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e Cards card -\u003e DrawM aspect a -\u003e Map a Rational",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#chanceMapOn",
          "type": "function"
        },
        "index": {
          "description": "Like chanceMap but can be much more efficient See chanceOn for an explanation of why",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceMapOn",
          "normalized": "(a-\u003eb)-\u003eCards a-\u003eDrawM b c-\u003eMap c Rational",
          "package": "game-probability",
          "partial": "Map On",
          "signature": "(card-\u003easpect)-\u003eCards card-\u003eDrawM aspect a-\u003eMap a Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:chanceMapOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the chance of the given draw succeeding (i.e. not failing) with\n the given deck.  Note that the return value of the draw is ignored; this function\n is only interested in whether the draw succeeds.\n\u003c/p\u003e\u003cp\u003eThe given function is used to transform the cards for drawing.  This can make\n the function much more efficient if the transform maps several cards onto the\n same aspect.  Consider if you wanted the probability of\n drawing two aces from a deck of playing cards.  If you use \u003ccode\u003e\u003ca\u003echance\u003c/a\u003e\u003c/code\u003e, it will\n check all 52 distinct cards in the deck separately to see if they are aces when you are\n drawing.  However if you use \u003ccode\u003echanceOn rank\u003c/code\u003e, it can collapse the 52 playing\n cards into 13 distinct cards (one per rank) with frequency 4, and only check\n each of the 13 cards separately.  Since this saving is made across repeated\n draws, using \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003echance\u003c/a\u003e\u003c/code\u003e can reduce queries from taking\n many seconds into being instant.  This also applies to all the other chance..On and\n event..On variants of functions in this module.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e chanceOn id deck m == chance deck m\n chanceOn (map toLower) (makeCards [\"a\", \"a\", \"A\", \"A\", \"b\"]) (drawWhere (== \"a\")) == 4 % 5\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e Cards card -\u003e DrawM aspect a -\u003e Rational",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#chanceOn",
          "type": "function"
        },
        "index": {
          "description": "Calculates the chance of the given draw succeeding i.e not failing with the given deck Note that the return value of the draw is ignored this function is only interested in whether the draw succeeds The given function is used to transform the cards for drawing This can make the function much more efficient if the transform maps several cards onto the same aspect Consider if you wanted the probability of drawing two aces from deck of playing cards If you use chance it will check all distinct cards in the deck separately to see if they are aces when you are drawing However if you use chanceOn rank it can collapse the playing cards into distinct cards one per rank with frequency and only check each of the cards separately Since this saving is made across repeated draws using chanceOn rather than chance can reduce queries from taking many seconds into being instant This also applies to all the other chance..On and event..On variants of functions in this module Examples chanceOn id deck chance deck chanceOn map toLower makeCards drawWhere",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "chanceOn",
          "normalized": "(a-\u003eb)-\u003eCards a-\u003eDrawM b c-\u003eRational",
          "package": "game-probability",
          "partial": "On",
          "signature": "(card-\u003easpect)-\u003eCards card-\u003eDrawM aspect a-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:chanceOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a single card and returns it.\n\u003c/p\u003e\u003cp\u003eIf you are not interested in the value of the returned card, \u003ccode\u003e\u003ca\u003edrawAny\u003c/a\u003e\u003c/code\u003e is much\n more efficient.  If you want to constrain which card might be drawn, use \u003ccode\u003e\u003ca\u003edrawWhere\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "draw",
          "package": "game-probability",
          "signature": "DrawM card card",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Draws single card and returns it If you are not interested in the value of the returned card drawAny is much more efficient If you want to constrain which card might be drawn use drawWhere",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "draw",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws any card from the deck. In cases where you are not interested in what\n the card is, this is much more efficient than \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawAny",
          "package": "game-probability",
          "signature": "DrawM card ()",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawAny",
          "type": "function"
        },
        "index": {
          "description": "Draws any card from the deck In cases where you are not interested in what the card is this is much more efficient than draw",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawAny",
          "normalized": "DrawM a()",
          "package": "game-probability",
          "partial": "Any",
          "signature": "DrawM card()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the given number of cards and then counts how many meet the given criteria.\n  The definition is:\n\u003c/p\u003e\u003cpre\u003e drawCount f n = length . filter f \u003c$\u003e replicateM n draw\n\u003c/pre\u003e\u003cp\u003eNote that this is definitely \u003cem\u003eNOT\u003c/em\u003e the same as \u003ccode\u003ereplicateM n (drawWhere f)\u003c/code\u003e.\n  The \u003ccode\u003edrawWhere\u003c/code\u003e code makes sure that it draws n cards that meet the given criteria\n (and fails in other cases), whereas this function draws the given number then\n checks how many meet the criteria.  Therefore this function will only fail if\n there are insufficient cards to draw that many.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawCount",
          "package": "game-probability",
          "signature": "(card -\u003e Bool) -\u003e Int -\u003e DrawM card Int",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawCount",
          "type": "function"
        },
        "index": {
          "description": "Draws the given number of cards and then counts how many meet the given criteria The definition is drawCount length filter replicateM draw Note that this is definitely NOT the same as replicateM drawWhere The drawWhere code makes sure that it draws cards that meet the given criteria and fails in other cases whereas this function draws the given number then checks how many meet the criteria Therefore this function will only fail if there are insufficient cards to draw that many",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawCount",
          "normalized": "(a-\u003eBool)-\u003eInt-\u003eDrawM a Int",
          "package": "game-probability",
          "partial": "Count",
          "signature": "(card-\u003eBool)-\u003eInt-\u003eDrawM card Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws cards in groups of identical cards (but in any order) according to the given sizes.\n\u003c/p\u003e\u003cp\u003eThis function is best explained by example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003edrawGroups [2]\u003c/code\u003e will draw two identical cards, much as \u003ccode\u003edrawSame 2\u003c/code\u003e does.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003edrawGroups [2,1]\u003c/code\u003e will draw two identical cards, and a third card that is\n guaranteed not to be equal to the two identical cards.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003edrawGroups [2,2]\u003c/code\u003e will draw two different lots of two identical cards (i.e.\n it cannot return 4 of the same card).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is perhaps helpful to think of this function in terms of poker hands.  \u003ccode\u003edrawGroups\n [4,1]\u003c/code\u003e looks for 4-of-a-kind in a hand of 5, \u003ccode\u003edrawGroups [3,2]\u003c/code\u003e looks for a\n full house, \u003ccode\u003edrawGroups [2,2,1]\u003c/code\u003e looks for two-pair, while \u003ccode\u003edrawGroups [2,1,1,1]\u003c/code\u003e\n looks for exactly one pair.\n\u003c/p\u003e\u003cp\u003eThe order of groups requested corresponds to the returns.  Thus, for example,\n this code should never fail a pattern match:\n\u003c/p\u003e\u003cpre\u003e do [[a1,a2], [b1,b2,b3]] \u003c- drawGroups [2,3]\n\u003c/pre\u003e\u003cp\u003eThe groups have no correspondence to the order in which the cards were drawn.\n  So although the groups above and returned together, those 5 cards could have\n been drawn in any order, for example: \u003ccode\u003e[b2, a1, b3, b2, a2]\u003c/code\u003e.  This function is intended\n for cases when you want particular identical groups but don't mind about the\n order.  That is surprisingly fiddly to write without this helper function.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawGroups",
          "package": "game-probability",
          "signature": "[Int] -\u003e DrawM card [[card]]",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawGroups",
          "type": "function"
        },
        "index": {
          "description": "Draws cards in groups of identical cards but in any order according to the given sizes This function is best explained by example drawGroups will draw two identical cards much as drawSame does drawGroups will draw two identical cards and third card that is guaranteed not to be equal to the two identical cards drawGroups will draw two different lots of two identical cards i.e it cannot return of the same card It is perhaps helpful to think of this function in terms of poker hands drawGroups looks for of-a-kind in hand of drawGroups looks for full house drawGroups looks for two-pair while drawGroups looks for exactly one pair The order of groups requested corresponds to the returns Thus for example this code should never fail pattern match do a1 a2 b1 b2 b3 drawGroups The groups have no correspondence to the order in which the cards were drawn So although the groups above and returned together those cards could have been drawn in any order for example b2 a1 b3 b2 a2 This function is intended for cases when you want particular identical groups but don mind about the order That is surprisingly fiddly to write without this helper function",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawGroups",
          "normalized": "[Int]-\u003eDrawM a[[a]]",
          "package": "game-probability",
          "partial": "Groups",
          "signature": "[Int]-\u003eDrawM card[[card]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edrawGroups\u003c/a\u003e\u003c/code\u003e, but considers them equal if their given aspect is equal.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawGroupsOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e [Int] -\u003e DrawM card [[card]]",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawGroupsOn",
          "type": "function"
        },
        "index": {
          "description": "Like drawGroups but considers them equal if their given aspect is equal",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawGroupsOn",
          "normalized": "(a-\u003eb)-\u003e[Int]-\u003eDrawM a[[a]]",
          "package": "game-probability",
          "partial": "Groups On",
          "signature": "(card-\u003easpect)-\u003e[Int]-\u003eDrawM card[[card]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawGroupsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the given number of identical cards from the deck.\n\u003c/p\u003e\u003cp\u003eThis corresponds to drawing one card from the deck with \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e and then using \u003ccode\u003e\u003ca\u003edrawWhere\u003c/a\u003e\u003c/code\u003e\n to make sure the rest of the cards match.  The card that was drawn is returned\n (since all of them are identical, only a single example is returned rather than\n a list).\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawSame",
          "package": "game-probability",
          "signature": "Int -\u003e DrawM card card",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawSame",
          "type": "function"
        },
        "index": {
          "description": "Draws the given number of identical cards from the deck This corresponds to drawing one card from the deck with draw and then using drawWhere to make sure the rest of the cards match The card that was drawn is returned since all of them are identical only single example is returned rather than list",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawSame",
          "normalized": "Int-\u003eDrawM a a",
          "package": "game-probability",
          "partial": "Same",
          "signature": "Int-\u003eDrawM card card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the given number of identical (by the given aspect) cards from the deck.\n\u003c/p\u003e\u003cp\u003eThis corresponds to drawing one card from the deck with \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e and then using \u003ccode\u003e\u003ca\u003edrawWhere\u003c/a\u003e\u003c/code\u003e\n with the given mapping function to make sure the rest of the cards match on\n the aspect specified.  The card that was drawn is returned\n (since all of them are identical, only a single example is returned rather than\n a list).  The order of the returned list is arbitrary.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e drawSameOn (map toLower) 5\n\u003c/pre\u003e\u003cp\u003ewill draw 5 cards (where the card type is simply String) that have matching\n names when compared case-insensitive.  The return list you get might be something\n like \u003ccode\u003e[\"a\",\"A\",\"A\",\"a\",\"a\"]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawSameOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e Int -\u003e DrawM card [card]",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawSameOn",
          "type": "function"
        },
        "index": {
          "description": "Draws the given number of identical by the given aspect cards from the deck This corresponds to drawing one card from the deck with draw and then using drawWhere with the given mapping function to make sure the rest of the cards match on the aspect specified The card that was drawn is returned since all of them are identical only single example is returned rather than list The order of the returned list is arbitrary For example drawSameOn map toLower will draw cards where the card type is simply String that have matching names when compared case-insensitive The return list you get might be something like",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawSameOn",
          "normalized": "(a-\u003eb)-\u003eInt-\u003eDrawM a[a]",
          "package": "game-probability",
          "partial": "Same On",
          "signature": "(card-\u003easpect)-\u003eInt-\u003eDrawM card[card]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawSameOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws cards until it draws a card that satisfies the given condition or it\n hits the optional limit of cards.  If the limit is zero, the function will fail\n every time, 1 will only draw a single card, 2 will draw up to 2 and so on.\n\u003c/p\u003e\u003cp\u003eAll the cards drawn will be returned in order, therefore you can be guaranteed\n that the last card in the list (and only that card) satisfies the given function.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawUntil",
          "package": "game-probability",
          "signature": "(card -\u003e Bool) -\u003e Maybe Int -\u003e DrawM card [card]",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawUntil",
          "type": "function"
        },
        "index": {
          "description": "Draws cards until it draws card that satisfies the given condition or it hits the optional limit of cards If the limit is zero the function will fail every time will only draw single card will draw up to and so on All the cards drawn will be returned in order therefore you can be guaranteed that the last card in the list and only that card satisfies the given function",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawUntil",
          "normalized": "(a-\u003eBool)-\u003eMaybe Int-\u003eDrawM a[a]",
          "package": "game-probability",
          "partial": "Until",
          "signature": "(card-\u003eBool)-\u003eMaybe Int-\u003eDrawM card[card]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a single card that matches the given criteria (i.e. where the given\n function returns True for the card).\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e drawWhere (/= \"c\")\n\u003c/pre\u003e\u003cp\u003ewill draw any card that is not \u003ccode\u003e\"c\"\u003c/code\u003e.  Note that:\n\u003c/p\u003e\u003cpre\u003e (draw \u003e\u003e= ensure f) == (drawWhere f \u003e\u003e return ())\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawWhere",
          "package": "game-probability",
          "signature": "(card -\u003e Bool) -\u003e DrawM card card",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#drawWhere",
          "type": "function"
        },
        "index": {
          "description": "Draws single card that matches the given criteria i.e where the given function returns True for the card For example drawWhere will draw any card that is not Note that draw ensure drawWhere return",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "drawWhere",
          "normalized": "(a-\u003eBool)-\u003eDrawM a a",
          "package": "game-probability",
          "partial": "Where",
          "signature": "(card-\u003eBool)-\u003eDrawM card card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:drawWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the given property holds, otherwise fails the current draw.  Its\n definition is simple:\n\u003c/p\u003e\u003cpre\u003e ensure b = if b then return () else badHand\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "ensure",
          "package": "game-probability",
          "signature": "Bool -\u003e DrawM a ()",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#ensure",
          "type": "function"
        },
        "index": {
          "description": "Checks that the given property holds otherwise fails the current draw Its definition is simple ensure if then return else badHand",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "ensure",
          "normalized": "Bool-\u003eDrawM a()",
          "package": "game-probability",
          "signature": "Bool-\u003eDrawM a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns the successful outcomes of the given draw into an \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e type, which will return\n the different values of the successful draw with their corresponding relative probabilities.  Note\n that only successful draws are included; a failed draw will have a probability\n of zero.  To incorporate the possibility of a failed draw, use \u003ccode\u003e\u003ca\u003eeventDrawMaybe\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e\u003cp\u003eAs with other functions, \u003ccode\u003e\u003ca\u003eeventDrawOn\u003c/a\u003e\u003c/code\u003e can be much more efficient; see \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e\n for details.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e outcomes (eventDraw (makeCards [\"a\",\"b\"]) (drawWhere (== \"a\"))) == [(\"a\", 1)]\n\u003c/pre\u003e\u003cpre\u003e outcomes (eventDraw (makeCards [\"a\",\"a\",\"a\",\"b\",\"b\"]) (drawSame 2)\n   == [(\"a\", 3 % 5), (\"b\", 2 % 5)]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDraw",
          "package": "game-probability",
          "signature": "Cards card -\u003e DrawM card a -\u003e EventM a",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#eventDraw",
          "type": "function"
        },
        "index": {
          "description": "Turns the successful outcomes of the given draw into an EventM type which will return the different values of the successful draw with their corresponding relative probabilities Note that only successful draws are included failed draw will have probability of zero To incorporate the possibility of failed draw use eventDrawMaybe instead As with other functions eventDrawOn can be much more efficient see chanceOn for details For example outcomes eventDraw makeCards drawWhere outcomes eventDraw makeCards drawSame",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDraw",
          "normalized": "Cards a-\u003eDrawM a b-\u003eEventM b",
          "package": "game-probability",
          "partial": "Draw",
          "signature": "Cards card-\u003eDrawM card a-\u003eEventM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:eventDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns the outcomes of the given draw into an \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e type, which will return\n the different values of the draw with their corresponding probabilities.  Successful\n draws are the Just values; Nothing indicates an unsuccessful draw, with its\n corresponding probability.\n\u003c/p\u003e\u003cp\u003eAs with other functions, \u003ccode\u003e\u003ca\u003eeventDrawMaybeOn\u003c/a\u003e\u003c/code\u003e can be much more efficient; see \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e\n for details.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e outcomes (eventDraw (makeCards [\"a\",\"b\"]) (drawWhere (== \"a\"))) == [(Just \"a\", 1 % 2), (Nothing, 1 % 2)]\n\u003c/pre\u003e\u003cpre\u003e outcomes (eventDraw (makeCards [\"a\",\"a\",\"a\",\"b\",\"b\"]) (drawSame 2)\n   == [(Just \"a\", 3 % 10), (Just \"b\", 1 % 5), (Nothing, 1 % 2)]\n\u003c/pre\u003e\u003cpre\u003e eventDrawMaybe cards m == eventDraw cards (optional m)\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawMaybe",
          "package": "game-probability",
          "signature": "Cards card -\u003e DrawM card a -\u003e EventM (Maybe a)",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#eventDrawMaybe",
          "type": "function"
        },
        "index": {
          "description": "Turns the outcomes of the given draw into an EventM type which will return the different values of the draw with their corresponding probabilities Successful draws are the Just values Nothing indicates an unsuccessful draw with its corresponding probability As with other functions eventDrawMaybeOn can be much more efficient see chanceOn for details For example outcomes eventDraw makeCards drawWhere Just Nothing outcomes eventDraw makeCards drawSame Just Just Nothing eventDrawMaybe cards eventDraw cards optional",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawMaybe",
          "normalized": "Cards a-\u003eDrawM a b-\u003eEventM(Maybe b)",
          "package": "game-probability",
          "partial": "Draw Maybe",
          "signature": "Cards card-\u003eDrawM card a-\u003eEventM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:eventDrawMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeventDrawMaybe\u003c/a\u003e\u003c/code\u003e but can be much more efficient.  See \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e for an\n explanation of why.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawMaybeOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e Cards card -\u003e DrawM aspect a -\u003e EventM (Maybe a)",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#eventDrawMaybeOn",
          "type": "function"
        },
        "index": {
          "description": "Like eventDrawMaybe but can be much more efficient See chanceOn for an explanation of why",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawMaybeOn",
          "normalized": "(a-\u003eb)-\u003eCards a-\u003eDrawM b c-\u003eEventM(Maybe c)",
          "package": "game-probability",
          "partial": "Draw Maybe On",
          "signature": "(card-\u003easpect)-\u003eCards card-\u003eDrawM aspect a-\u003eEventM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:eventDrawMaybeOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeventDraw\u003c/a\u003e\u003c/code\u003e but can be much more efficient.  See \u003ccode\u003e\u003ca\u003echanceOn\u003c/a\u003e\u003c/code\u003e for an\n explanation of why.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawOn",
          "package": "game-probability",
          "signature": "(card -\u003e aspect) -\u003e Cards card -\u003e DrawM aspect a -\u003e EventM a",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#eventDrawOn",
          "type": "function"
        },
        "index": {
          "description": "Like eventDraw but can be much more efficient See chanceOn for an explanation of why",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "eventDrawOn",
          "normalized": "(a-\u003eb)-\u003eCards a-\u003eDrawM b c-\u003eEventM c",
          "package": "game-probability",
          "partial": "Draw On",
          "signature": "(card-\u003easpect)-\u003eCards card-\u003eDrawM aspect a-\u003eEventM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:eventDrawOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to perform the two draws interleaved with each other in any sequence,\n favouring those where the left-hand side acts first.\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e interleave (replicateM 2 (drawWhere (== \"a\"))) (replicateM 3 (drawWhere (== \"b\")))\n\u003c/pre\u003e\u003cp\u003ewill attempt to draw two \"a\" cards and three \"b\" cards, in any order and return them\n as a pair.  If you want to draw identical groupings like this where the exact\n values of the cards can vary, look at \u003ccode\u003e\u003ca\u003edrawGroups\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "interleave",
          "package": "game-probability",
          "signature": "DrawM card a -\u003e DrawM card b -\u003e DrawM card (a, b)",
          "source": "src/Numeric-Probability-Game-Cards-Hand.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Tries to perform the two draws interleaved with each other in any sequence favouring those where the left-hand side acts first As an example interleave replicateM drawWhere replicateM drawWhere will attempt to draw two cards and three cards in any order and return them as pair If you want to draw identical groupings like this where the exact values of the cards can vary look at drawGroups",
          "hierarchy": "Numeric Probability Game Cards Hand",
          "module": "Numeric.Probability.Game.Cards.Hand",
          "name": "interleave",
          "normalized": "DrawM a b-\u003eDrawM a c-\u003eDrawM a(b,c)",
          "package": "game-probability",
          "signature": "DrawM card a-\u003eDrawM card b-\u003eDrawM card(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards-Hand.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.Cards",
          "name": "Cards",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Cards.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "Cards",
          "package": "game-probability",
          "partial": "Cards",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection/deck of cards.  The collection of cards has no implicit order,\n and each card is deemed to be equally likely to be drawn.\n\u003c/p\u003e\u003cp\u003eSo, for example, \u003ccode\u003emakeCards [\"a\",\"a\",\"a\",\"b\",\"c\"]\u003c/code\u003e is a collection of cards\n with a 3/5 chance of drawing an \u003ccode\u003e\"a\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that in \u003ccode\u003e\u003ca\u003eCards\u003c/a\u003e\u003c/code\u003e and all functions using it, the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is considered\n to be authoritative.  Imagine you have some type like:\n\u003c/p\u003e\u003cpre\u003e data MyCard = MyCard {cardType :: String, cardDescription :: String}\n instance Ord MyCard where compare = comparing cardType\n\u003c/pre\u003e\u003cp\u003eIf you then create a collection of cards, all those with the same \u003ccode\u003ecardType\u003c/code\u003e will\n be considered the same, and differences in \u003ccode\u003ecardDescription\u003c/code\u003e will be collapsed.  So,\n for example you may find that:\n\u003c/p\u003e\u003cpre\u003e cardsMap (makeCards [MyCard \"Sword\" \"Long Sword\", MyCard \"Sword\" \"Legendary Sword of the Ancient King of Rak'Tharr\", MyCard \"Shield\" \"Buckler\"])\n  == fromList [(MyCard \"Sword\" \"Long Sword\", 2), (MyCard \"Shield\" Buckler\", 1)]\n\u003c/pre\u003e\u003cp\u003eThe two sword cards are indistinguishable from each other by the Ord\n instance, so an arbitrary card for the two is kept in the collection to\n represent them both -- the legendary sword is treated the same as the long\n sword (so, equally, you might get two legendary swords in the deck and no\n long sword).\n\u003c/p\u003e\u003cp\u003eIf you want the difference to matter, use an \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance that recognises\n the difference.  If you want the difference to matter some of the time, and\n not matter at other times, you may want to use \u003ccode\u003e\u003ca\u003emapCards\u003c/a\u003e\u003c/code\u003e to either pick\n out just the aspects you are interested in, or to use a default value\n (e.g. empty description) for the aspects you are not interested in.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance can be used to get an empty \u003ccode\u003e\u003ca\u003eCards\u003c/a\u003e\u003c/code\u003e object, and to add\n two collections of cards together.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "Cards",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Cards.html#Cards",
          "type": "data"
        },
        "index": {
          "description": "collection deck of cards The collection of cards has no implicit order and each card is deemed to be equally likely to be drawn So for example makeCards is collection of cards with chance of drawing an Note that in Cards and all functions using it the Ord instance is considered to be authoritative Imagine you have some type like data MyCard MyCard cardType String cardDescription String instance Ord MyCard where compare comparing cardType If you then create collection of cards all those with the same cardType will be considered the same and differences in cardDescription will be collapsed So for example you may find that cardsMap makeCards MyCard Sword Long Sword MyCard Sword Legendary Sword of the Ancient King of Rak Tharr MyCard Shield Buckler fromList MyCard Sword Long Sword MyCard Shield Buckler The two sword cards are indistinguishable from each other by the Ord instance so an arbitrary card for the two is kept in the collection to represent them both the legendary sword is treated the same as the long sword so equally you might get two legendary swords in the deck and no long sword If you want the difference to matter use an Ord instance that recognises the difference If you want the difference to matter some of the time and not matter at other times you may want to use mapCards to either pick out just the aspects you are interested in or to use default value e.g empty description for the aspects you are not interested in The Monoid instance can be used to get an empty Cards object and to add two collections of cards together",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "Cards",
          "package": "game-probability",
          "partial": "Cards",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#t:Cards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given card and frequency to the collection of cards.  If the card\n is already in the collection, the frequencies are added.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e addCard (\"c\", 2) (makeCards [\"a\",\"a\",\"b\"]) == makeCards [\"a\",\"a\",\"b\",\"c\",\"c\"]\n addCard (\"b\", 1) (makeCards [\"a\",\"a\",\"b\"]) == makeCards [\"a\",\"a\",\"b\",\"b\"]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "addCard",
          "package": "game-probability",
          "signature": "(a, Int) -\u003e Cards a -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#addCard",
          "type": "function"
        },
        "index": {
          "description": "Adds the given card and frequency to the collection of cards If the card is already in the collection the frequencies are added Example addCard makeCards makeCards addCard makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "addCard",
          "normalized": "(a,Int)-\u003eCards a-\u003eCards a",
          "package": "game-probability",
          "partial": "Card",
          "signature": "(a,Int)-\u003eCards a-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:addCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of cards (i.e. the sum of the frequencies of each distinct\n card) in the collection.  \u003ccode\u003ecardCount cards == length (sortedCards count)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf you want the number of distinct cards in a collection, use \u003ccode\u003esize . cardsMap\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "cardCount",
          "package": "game-probability",
          "signature": "Cards a -\u003e Int",
          "source": "src/Numeric-Probability-Game-Cards.html#cardCount",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of cards i.e the sum of the frequencies of each distinct card in the collection cardCount cards length sortedCards count If you want the number of distinct cards in collection use size cardsMap",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "cardCount",
          "normalized": "Cards a-\u003eInt",
          "package": "game-probability",
          "partial": "Count",
          "signature": "Cards a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:cardCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a map from card to frequency for the given \u003ccode\u003e\u003ca\u003eCards\u003c/a\u003e\u003c/code\u003e item.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "cardsMap",
          "package": "game-probability",
          "signature": "Cards a -\u003e Map a Int",
          "source": "src/Numeric-Probability-Game-Cards.html#cardsMap",
          "type": "function"
        },
        "index": {
          "description": "Gets map from card to frequency for the given Cards item",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "cardsMap",
          "normalized": "Cards a-\u003eMap a Int",
          "package": "game-probability",
          "partial": "Map",
          "signature": "Cards a-\u003eMap a Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:cardsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the given number of cards from the given deck of cards at random,\n without replacement.  Returns the collection of cards that were drawn (the\n first part of the result pait), and the corresponding remaining deck of\n cards.  If the deck is empty or does not contain enough cards to draw the\n specified number, the result is undefined.\n\u003c/p\u003e\u003cp\u003eNote that using this function to draw a hand of cards can be quite\n computationally intensive; for more efficient methods, see the \u003ca\u003eNumeric.Probability.Game.Cards.Hand\u003c/a\u003e\n module.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003emakeCards n cards == swap \u003c$\u003e makeCards (cardCount cards - n) cards\u003c/code\u003e;\n this method will be much more efficient with a smaller number as parameter than\n a larger number. \n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e outcomes (drawNoReplace 2 (makeCards [\"a\",\"a\",\"a\",\"a\", \"b\"])) ==\n   [((makeCards [\"a\",\"a\"], makeCards [\"a\",\"a\", \"b\"]), 3 % 5), ((makeCards [\"a\",\"b\"], makeCards [\"a,\"a\",\"a\"]), 2 % 5)]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawNoReplace",
          "package": "game-probability",
          "signature": "Int -\u003e Cards a -\u003e EventM (Cards a, Cards a)",
          "source": "src/Numeric-Probability-Game-Cards.html#drawNoReplace",
          "type": "function"
        },
        "index": {
          "description": "Draws the given number of cards from the given deck of cards at random without replacement Returns the collection of cards that were drawn the first part of the result pait and the corresponding remaining deck of cards If the deck is empty or does not contain enough cards to draw the specified number the result is undefined Note that using this function to draw hand of cards can be quite computationally intensive for more efficient methods see the Numeric.Probability.Game.Cards.Hand module Note that makeCards cards swap makeCards cardCount cards cards this method will be much more efficient with smaller number as parameter than larger number Example outcomes drawNoReplace makeCards makeCards makeCards makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawNoReplace",
          "normalized": "Int-\u003eCards a-\u003eEventM(Cards a,Cards a)",
          "package": "game-probability",
          "partial": "No Replace",
          "signature": "Int-\u003eCards a-\u003eEventM(Cards a,Cards a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:drawNoReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws one card from the given collection of cards at random.  Returns the\n card, and the collection of cards after the card has been drawn (i.e. with one\n of that card removed).  If the collection is empty, the result is undefined.\n\u003c/p\u003e\u003cp\u003eNote that using this function repeatedly to draw a hand of cards can be quite\n computationally intensive; for more efficient methods, see the \u003ca\u003eNumeric.Probability.Game.Cards.Hand\u003c/a\u003e\n module.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e outcomes (drawOne (makeCards [\"a\",\"a\",\"a\",\"b\"])) == [((\"a\", makeCards [\"a\",\"a\",\"b\"]), 3 % 4), ((\"b\", makeCards [\"a\",\"a\",\"a\"]), 1 % 4)]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawOne",
          "package": "game-probability",
          "signature": "Cards a -\u003e EventM (a, Cards a)",
          "source": "src/Numeric-Probability-Game-Cards.html#drawOne",
          "type": "function"
        },
        "index": {
          "description": "Draws one card from the given collection of cards at random Returns the card and the collection of cards after the card has been drawn i.e with one of that card removed If the collection is empty the result is undefined Note that using this function repeatedly to draw hand of cards can be quite computationally intensive for more efficient methods see the Numeric.Probability.Game.Cards.Hand module Example outcomes drawOne makeCards makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawOne",
          "normalized": "Cards a-\u003eEventM(a,Cards a)",
          "package": "game-probability",
          "partial": "One",
          "signature": "Cards a-\u003eEventM(a,Cards a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:drawOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the given number of cards from the given collection with replacement.\n  Returns the collection of cards that will be drawn (and thus you can be sure\n that: \u003ccode\u003ecardsCount \u003c$\u003e drawReplace n cards\u003c/code\u003e will be \u003ccode\u003en\u003c/code\u003e, provided \u003ccode\u003ecards\u003c/code\u003e is not\n empty).  If the given collection of cards is empty, the result is undefined.\n\u003c/p\u003e\u003cp\u003eNote that using this function to draw a hand of cards can be quite\n computationally intensive; for more efficient methods, see the \u003ca\u003eNumeric.Probability.Game.Cards.Hand\u003c/a\u003e\n module.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e outcomes (drawReplace 2 (makeCards [\"a\",\"a\",\"a\",\"b\"])) ==\n   [(makeCards [\"a\",\"a\"], 9 % 16), (makeCards [\"a\",\"b\"], 3 % 8), (makeCards [\"b\",\"b\"], 1 % 16)]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawReplace",
          "package": "game-probability",
          "signature": "Int -\u003e Cards a -\u003e EventM (Cards a)",
          "source": "src/Numeric-Probability-Game-Cards.html#drawReplace",
          "type": "function"
        },
        "index": {
          "description": "Draws the given number of cards from the given collection with replacement Returns the collection of cards that will be drawn and thus you can be sure that cardsCount drawReplace cards will be provided cards is not empty If the given collection of cards is empty the result is undefined Note that using this function to draw hand of cards can be quite computationally intensive for more efficient methods see the Numeric.Probability.Game.Cards.Hand module Example outcomes drawReplace makeCards makeCards makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "drawReplace",
          "normalized": "Int-\u003eCards a-\u003eEventM(Cards a)",
          "package": "game-probability",
          "partial": "Replace",
          "signature": "Int-\u003eCards a-\u003eEventM(Cards a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:drawReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a collection of cards from the given list.  The order of the list does\n not matter, but duplicates are important: if a card occurs multiple times in\n the list, it will appear multiple times in the collection.  So \u003ccode\u003emakeCards [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003eb\u003c/a\u003e]\u003c/code\u003e\n has one card named \"a\" and one named \"b\", but \u003ccode\u003emakeCards [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ea\u003c/a\u003e,\u003ca\u003eb\u003c/a\u003e,\u003ca\u003ea\u003c/a\u003e]\u003c/code\u003e\n has three cards named \"a\" and one named \"b\".\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "makeCards",
          "package": "game-probability",
          "signature": "[a] -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#makeCards",
          "type": "function"
        },
        "index": {
          "description": "Makes collection of cards from the given list The order of the list does not matter but duplicates are important if card occurs multiple times in the list it will appear multiple times in the collection So makeCards has one card named and one named but makeCards has three cards named and one named",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "makeCards",
          "normalized": "[a]-\u003eCards a",
          "package": "game-probability",
          "partial": "Cards",
          "signature": "[a]-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:makeCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a \u003ccode\u003e\u003ca\u003eCards\u003c/a\u003e\u003c/code\u003e item using a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from card to frequency.  Any card with\n a frequency of 0 or less will be ignored.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "makeCardsMap",
          "package": "game-probability",
          "signature": "Map a Int -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#makeCardsMap",
          "type": "function"
        },
        "index": {
          "description": "Makes Cards item using Map from card to frequency Any card with frequency of or less will be ignored",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "makeCardsMap",
          "normalized": "Map a Int-\u003eCards a",
          "package": "game-probability",
          "partial": "Cards Map",
          "signature": "Map a Int-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:makeCardsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to the cards.  Like \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eCards\u003c/a\u003e\u003c/code\u003e, but we can't use\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e because of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e constraint.\n\u003c/p\u003e\u003cp\u003eIf this function maps two old cards to the same single new card, their frequencies\n are added together, but otherwise the frequencies are left untouched.\n\u003c/p\u003e\u003cp\u003eThis function is particularly useful for narrowing the number of distinct cards;\n see functions in the \u003ca\u003eNumeric.Probability.Game.Cards.Hand\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e mapCards (map toUpper) (makeCardsMap (fromList [(\"a\", 2), (\"A\", 3), (\"b\", 2)])) == makeCardsMap (fromList [(\"A\", 5), (\"B\", 2)])\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "mapCards",
          "package": "game-probability",
          "signature": "(a -\u003e b) -\u003e Cards a -\u003e Cards b",
          "source": "src/Numeric-Probability-Game-Cards.html#mapCards",
          "type": "function"
        },
        "index": {
          "description": "Applies function to the cards Like fmap for Cards but we can use Functor because of the Ord constraint If this function maps two old cards to the same single new card their frequencies are added together but otherwise the frequencies are left untouched This function is particularly useful for narrowing the number of distinct cards see functions in the Numeric.Probability.Game.Cards.Hand module Example mapCards map toUpper makeCardsMap fromList makeCardsMap fromList",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "mapCards",
          "normalized": "(a-\u003eb)-\u003eCards a-\u003eCards b",
          "package": "game-probability",
          "partial": "Cards",
          "signature": "(a-\u003eb)-\u003eCards a-\u003eCards b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:mapCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the cards in the second parameter from the cards in the first parameter.\n If the frequency of a card in the second parameter is greater than or equal\n to the frequency of a card in the first parameter, all of them are removed.\n  Negative frequencies are not possible.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e makeCardsMap (fromList [(\"a\", 3), (\"b\", 1), (\"c\", 2)]) `minusCards` (makeCards [\"a\",\"b\",\"b\",\"c\"]) == makeCards [\"a\",\"a\",\"c\"]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "minusCards",
          "package": "game-probability",
          "signature": "Cards a -\u003e Cards a -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#minusCards",
          "type": "function"
        },
        "index": {
          "description": "Removes the cards in the second parameter from the cards in the first parameter If the frequency of card in the second parameter is greater than or equal to the frequency of card in the first parameter all of them are removed Negative frequencies are not possible Example makeCardsMap fromList minusCards makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "minusCards",
          "normalized": "Cards a-\u003eCards a-\u003eCards a",
          "package": "game-probability",
          "partial": "Cards",
          "signature": "Cards a-\u003eCards a-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:minusCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a given number of cards that match the given criteria.\n\u003c/p\u003e\u003cp\u003eAs the name suggests, the choice of cards removed is arbitrary.  This function\n is mainly useful if you later want to check for the odds of finding a card that \u003cem\u003edoes\u003c/em\u003e\n match the given criteria, but first want to express that you know of many cards\n that don't meet the criteria that aren't in the deck.\n\u003c/p\u003e\u003cp\u003eIf not enough cards meet the criteria in the collection, all that don't\n meet the criteria will be removed.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "removeArbitrary",
          "package": "game-probability",
          "signature": "(a -\u003e Bool) -\u003e Int -\u003e Cards a -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#removeArbitrary",
          "type": "function"
        },
        "index": {
          "description": "Removes given number of cards that match the given criteria As the name suggests the choice of cards removed is arbitrary This function is mainly useful if you later want to check for the odds of finding card that does match the given criteria but first want to express that you know of many cards that don meet the criteria that aren in the deck If not enough cards meet the criteria in the collection all that don meet the criteria will be removed",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "removeArbitrary",
          "normalized": "(a-\u003eBool)-\u003eInt-\u003eCards a-\u003eCards a",
          "package": "game-probability",
          "partial": "Arbitrary",
          "signature": "(a-\u003eBool)-\u003eInt-\u003eCards a-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:removeArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves one of the given cards from the collection.  This only reduces the\n frequency by one; it does not remove all of the given card from the collection.\n  If the card is not in the collection, this has no effect.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e removeOneCard \"a\" (makeCards [\"a\",\"a\",\"a\",\"b\"]) == makeCards [\"a\",\"a\",\"b\"]\n removeOneCard \"c\" (makeCards [\"a\",\"a\",\"a\",\"b\"]) == makeCards [\"a\",\"a\",\"a\",\"b\"]\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "removeOneCard",
          "package": "game-probability",
          "signature": "a -\u003e Cards a -\u003e Cards a",
          "source": "src/Numeric-Probability-Game-Cards.html#removeOneCard",
          "type": "function"
        },
        "index": {
          "description": "Removes one of the given cards from the collection This only reduces the frequency by one it does not remove all of the given card from the collection If the card is not in the collection this has no effect Example removeOneCard makeCards makeCards removeOneCard makeCards makeCards",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "removeOneCard",
          "normalized": "a-\u003eCards a-\u003eCards a",
          "package": "game-probability",
          "partial": "One Card",
          "signature": "a-\u003eCards a-\u003eCards a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:removeOneCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a sorted list of cards.  For example:\n\u003c/p\u003e\u003cpre\u003e [\"a\",\"a\",\"a\",\"b\",\"c\",\"c\"] == sortedCards (makeCardsMap (fromList [(\"c\", 2), (\"b\", 1), (\"a\", 3)]))\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Cards",
          "name": "sortedCards",
          "package": "game-probability",
          "signature": "Cards a -\u003e [a]",
          "source": "src/Numeric-Probability-Game-Cards.html#sortedCards",
          "type": "function"
        },
        "index": {
          "description": "Gets sorted list of cards For example sortedCards makeCardsMap fromList",
          "hierarchy": "Numeric Probability Game Cards",
          "module": "Numeric.Probability.Game.Cards",
          "name": "sortedCards",
          "normalized": "Cards a-\u003e[a]",
          "package": "game-probability",
          "partial": "Cards",
          "signature": "Cards a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Cards.html#v:sortedCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing various definitions of dice as random events, and a few\n associated helper functions.  See \u003ccode\u003e\u003ca\u003eDieRoll\u003c/a\u003e\u003c/code\u003e, which is really a synonym for \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e\n Int.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "Dice",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Dice.html",
          "type": "module"
        },
        "index": {
          "description": "module containing various definitions of dice as random events and few associated helper functions See DieRoll which is really synonym for EventM Int",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "Dice",
          "package": "game-probability",
          "partial": "Dice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for events with an integer outcome (i.e. all standard die rolls).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003eEventM Int\u003c/code\u003e allows you to add the results of two die\n rolls, or subtract them (if it helps, \u003ccode\u003e(+) = liftA2 (+)\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eMultiplication works as follows.  \u003ccode\u003ed * e\u003c/code\u003e evaluates the first die roll,\n then sums that many rolls of the second.  So \u003ccode\u003e2 * d6\u003c/code\u003e rolls two d6 and adds\n the outcomes.  However, this definition means that \u003ccode\u003ed6 * 2\u003c/code\u003e rolls one d6,\n then effectively scales the result by 2.  And \u003ccode\u003ed6 * d4\u003c/code\u003e rolls one d6, then\n rolls that number of \u003ccode\u003ed4\u003c/code\u003e, adding their results together.  The simple rule\n when one of the terms is a constant is: use the constant on the left-hand\n side to get more dice, and use the constant on the right-hand side to scale\n the result.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "DieRoll",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Dice.html#DieRoll",
          "type": "type"
        },
        "index": {
          "description": "type synonym for events with an integer outcome i.e all standard die rolls The Num instance for EventM Int allows you to add the results of two die rolls or subtract them if it helps liftA2 Multiplication works as follows evaluates the first die roll then sums that many rolls of the second So d6 rolls two d6 and adds the outcomes However this definition means that d6 rolls one d6 then effectively scales the result by And d6 d4 rolls one d6 then rolls that number of d4 adding their results together The simple rule when one of the terms is constant is use the constant on the left-hand side to get more dice and use the constant on the right-hand side to scale the result",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "DieRoll",
          "package": "game-probability",
          "partial": "Die Roll",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#t:DieRoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a die that has an equal chance of achieving the numbers 1 through the\n number given.  \u003ccode\u003ed 4\u003c/code\u003e has an equal chance of producing the outcomes 1, 2, 3 and\n 4, \u003ccode\u003ed 1\u003c/code\u003e is equivalent to \u003ccode\u003ereturn 1\u003c/code\u003e (a certain result of 1), and\n \u003ccode\u003ed\u003c/code\u003e is undefined for any number below 1.  For convenience, all the standard dice are\n provided, e.g. \u003ccode\u003ed6 = d 6\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d",
          "package": "game-probability",
          "signature": "Int -\u003e DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d",
          "type": "function"
        },
        "index": {
          "description": "Makes die that has an equal chance of achieving the numbers through the number given has an equal chance of producing the outcomes and is equivalent to return certain result of and is undefined for any number below For convenience all the standard dice are provided e.g d6",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d",
          "normalized": "Int-\u003eDieRoll",
          "package": "game-probability",
          "signature": "Int-\u003eDieRoll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d10",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d10",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling or",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d10",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1 to 100 inclusive.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d100",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d100",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling to inclusive",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d100",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1 to 12 inclusive.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d12",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d12",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling to inclusive",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d12",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1 to 20 inclusive.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d20",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d20",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling to inclusive",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d20",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1, 2, 3 or 4.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d4",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d4",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling or",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d4",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1, 2, 3, 4, 5 or 6.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d6",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d6",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling or",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d6",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 1, 2, 3, 4, 5, 6, 7 or 8.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d8",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#d8",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling or",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "d8",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:d8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRerolls the die when the specified outcome(s) occur.  This has the effect\n of removing the outcomes from the set of outcomes and rescaling all the other\n probabilities linearly to sum to 1.  For example:\n\u003c/p\u003e\u003cpre\u003e d6 `rerollOn` [5,6] == d4\n chancePred (== 12) ((2*d6) `rerollOn` [7]) == 1/30\n\u003c/pre\u003e\u003cp\u003eWith the latter example, the standard chance of 12 on 2d6 is 1/36, which\n is rescaled by 36/30, the reciprocal of the chance of \u003cem\u003enot\u003c/em\u003e hitting\n a 7.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "rerollOn",
          "package": "game-probability",
          "signature": "DieRoll -\u003e [Int] -\u003e DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#rerollOn",
          "type": "function"
        },
        "index": {
          "description": "Rerolls the die when the specified outcome occur This has the effect of removing the outcomes from the set of outcomes and rescaling all the other probabilities linearly to sum to For example d6 rerollOn d4 chancePred d6 rerollOn With the latter example the standard chance of on d6 is which is rescaled by the reciprocal of the chance of not hitting",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "rerollOn",
          "normalized": "DieRoll-\u003e[Int]-\u003eDieRoll",
          "package": "game-probability",
          "partial": "On",
          "signature": "DieRoll-\u003e[Int]-\u003eDieRoll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:rerollOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice synonym for \u003ccode\u003e\u003ca\u003eenact\u003c/a\u003e\u003c/code\u003e: actually rolls the die and produces a single result according to the probabilities\n in the \u003ccode\u003eEventM a\u003c/code\u003e parameter.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "roll",
          "package": "game-probability",
          "signature": "DieRoll -\u003e IO Int",
          "source": "src/Numeric-Probability-Game-Dice.html#roll",
          "type": "function"
        },
        "index": {
          "description": "nice synonym for enact actually rolls the die and produces single result according to the probabilities in the EventM parameter",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "roll",
          "normalized": "DieRoll-\u003eIO Int",
          "package": "game-probability",
          "signature": "DieRoll-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a die that has an equal chance of achieving the numbers 0 through\n the one less than the number given.  \u003ccode\u003ez 4\u003c/code\u003e has an equal chance of producing\n the outcomes 0, 1, 2 and 3, while \u003ccode\u003ez 1\u003c/code\u003e is equivalent to \u003ccode\u003ereturn 0\u003c/code\u003e (a\n certain result of 0), and \u003ccode\u003ez\u003c/code\u003e is undefined for any number below 1.  For\n convenience, several standard dice that can be interpreted with a lower\n result of 0 are provided, e.g. \u003ccode\u003ez10 = z 10\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z",
          "package": "game-probability",
          "signature": "Int -\u003e DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#z",
          "type": "function"
        },
        "index": {
          "description": "Makes die that has an equal chance of achieving the numbers through the one less than the number given has an equal chance of producing the outcomes and while is equivalent to return certain result of and is undefined for any number below For convenience several standard dice that can be interpreted with lower result of are provided e.g z10",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z",
          "normalized": "Int-\u003eDieRoll",
          "package": "game-probability",
          "signature": "Int-\u003eDieRoll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 0, 1, 2, 3, 4, 5, 6, 7, 8 or 9.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z10",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#z10",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling or",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z10",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:z10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA die with an equal chance of rolling 0 to 99 inclusive.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z100",
          "package": "game-probability",
          "signature": "DieRoll",
          "source": "src/Numeric-Probability-Game-Dice.html#z100",
          "type": "function"
        },
        "index": {
          "description": "die with an equal chance of rolling to inclusive",
          "hierarchy": "Numeric Probability Game Dice",
          "module": "Numeric.Probability.Game.Dice",
          "name": "z100",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Dice.html#v:z100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing the central type of the library, \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e, and various\n related helper functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "Event",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Event.html",
          "type": "module"
        },
        "index": {
          "description": "module containing the central type of the library EventM and various related helper functions",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "Event",
          "package": "game-probability",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA probabilistic event with an outcome of type \u003ccode\u003ea\u003c/code\u003e.  See the \u003ccode\u003e\u003ca\u003eenact\u003c/a\u003e\u003c/code\u003e function\n to actually run the event and randomly pick an outcome. \n\u003c/p\u003e\u003cp\u003eFor an explanation of the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance, see the DieRoll type in the \u003ca\u003eNumeric.Probability.Game.Dice\u003c/a\u003e\n module.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance compares the two distributions to see if they are equal.\n This looks at all the outcomes and sees if their probabilities are equal on\n the left-hand side and the right-hand side.  For example,\n \u003ccode\u003ecoinToss == fmap (\u003e= 4) d6\u003c/code\u003e, but \u003ccode\u003ed12 /= d6 + d6\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance will display a horizontal bar-chart of relative outcome\n probability.  Note: this really is a relative probability -- common factors\n are cancelled, and is not a count of the different outcomes.  If you wish to\n show the raw numbers, use \u003ccode\u003eshow . outcomes\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance allows you to modify the outcome values without changing\n their associated probabilities.  For example, \u003ccode\u003efmap show d6\u003c/code\u003e changes the outcomes\n into their String representations.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance allows you to join together the results of two events\n in a predetermined manner.  For example, \u003ccode\u003emakeEvent [id, (* 2)] \u003c*\u003e d6\u003c/code\u003e allows\n you to roll a d6 that has a 50% chance of being doubled.  Note that \u003ccode\u003epure\n 6\u003c/code\u003e is an event that is certain to produce the outcome 6.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance allows you to base the choice of the next event on the\n result of the previous event.  For example, \u003ccode\u003ecoinToss \u003e\u003e= x -\u003e if x then d6\n else d4\u003c/code\u003e will roll a d4 50% of the time and a d6 the other 50%.  Note that \u003ccode\u003ereturn\n 6\u003c/code\u003e is an event that is certain to produce the outcome 6.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "EventM",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Event.html#EventM",
          "type": "data"
        },
        "index": {
          "description": "probabilistic event with an outcome of type See the enact function to actually run the event and randomly pick an outcome For an explanation of the Num instance see the DieRoll type in the Numeric.Probability.Game.Dice module The Eq instance compares the two distributions to see if they are equal This looks at all the outcomes and sees if their probabilities are equal on the left-hand side and the right-hand side For example coinToss fmap d6 but d12 d6 d6 The Show instance will display horizontal bar-chart of relative outcome probability Note this really is relative probability common factors are cancelled and is not count of the different outcomes If you wish to show the raw numbers use show outcomes instead The Functor instance allows you to modify the outcome values without changing their associated probabilities For example fmap show d6 changes the outcomes into their String representations The Applicative instance allows you to join together the results of two events in predetermined manner For example makeEvent id d6 allows you to roll d6 that has chance of being doubled Note that pure is an event that is certain to produce the outcome The Monad instance allows you to base the choice of the next event on the result of the previous event For example coinToss if then d6 else d4 will roll d4 of the time and d6 the other Note that return is an event that is certain to produce the outcome",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "EventM",
          "package": "game-probability",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#t:EventM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event with a 50% chance of giving True, and a 50% chance of giving False.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "coinToss",
          "package": "game-probability",
          "signature": "EventM Bool",
          "source": "src/Numeric-Probability-Game-Event.html#coinToss",
          "type": "function"
        },
        "index": {
          "description": "An event with chance of giving True and chance of giving False",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "coinToss",
          "package": "game-probability",
          "partial": "Toss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:coinToss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares the outcomes of the two events, and works out the probability associated\n with the first outcome being greater than, equal to or less than the second\n outcome.  The probabilites for each are returned in an associative map.\n\u003c/p\u003e\u003cp\u003eAdded in version 1.1.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "compareEvent",
          "package": "game-probability",
          "signature": "EventM a -\u003e EventM a -\u003e Map Ordering Rational",
          "source": "src/Numeric-Probability-Game-Event.html#compareEvent",
          "type": "function"
        },
        "index": {
          "description": "Compares the outcomes of the two events and works out the probability associated with the first outcome being greater than equal to or less than the second outcome The probabilites for each are returned in an associative map Added in version",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "compareEvent",
          "normalized": "EventM a-\u003eEventM a-\u003eMap Ordering Rational",
          "package": "game-probability",
          "partial": "Event",
          "signature": "EventM a-\u003eEventM a-\u003eMap Ordering Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:compareEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActually enacts the event and produces a single result according to the probabilities\n in the \u003ccode\u003eEventM a\u003c/code\u003e parameter.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "enact",
          "package": "game-probability",
          "signature": "EventM a -\u003e IO a",
          "source": "src/Numeric-Probability-Game-Event.html#enact",
          "type": "function"
        },
        "index": {
          "description": "Actually enacts the event and produces single result according to the probabilities in the EventM parameter",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "enact",
          "normalized": "EventM a-\u003eIO a",
          "package": "game-probability",
          "signature": "EventM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:enact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an event that has an equal chance of taking on the value of each\n entry in the list.  Note that duplicates in the list are permitted and do\n have an effect: \u003ccode\u003emakeEvent [True, False]\u003c/code\u003e has a 50% chance of giving a True\n result, but \u003ccode\u003emakeEvent [True, True, False, False, False]\u003c/code\u003e only has a 40%\n chance of giving a True result.  If you do not want this behaviour, use\n \u003ccode\u003emakeEvent . nub\u003c/code\u003e to remove duplicates. \n\u003c/p\u003e\u003cp\u003eThe result of passing the empty list is undefined.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "makeEvent",
          "package": "game-probability",
          "signature": "[a] -\u003e EventM a",
          "source": "src/Numeric-Probability-Game-Event.html#makeEvent",
          "type": "function"
        },
        "index": {
          "description": "Makes an event that has an equal chance of taking on the value of each entry in the list Note that duplicates in the list are permitted and do have an effect makeEvent True False has chance of giving True result but makeEvent True True False False False only has chance of giving True result If you do not want this behaviour use makeEvent nub to remove duplicates The result of passing the empty list is undefined",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "makeEvent",
          "normalized": "[a]-\u003eEventM a",
          "package": "game-probability",
          "partial": "Event",
          "signature": "[a]-\u003eEventM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:makeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of events and their associated probabilities, forms a\n corresponding event.  The probabilities must be non-negative.  If the\n probabilities do not sum to one, they are all scaled linearly so that their\n sum is one.  Duplicate items will have their probabilities added.\n\u003c/p\u003e\u003cp\u003eThe result of passing the empty list, a list containing negative probabilities,\n or a list where all the probabilities are zero is undefined.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "makeEventProb",
          "package": "game-probability",
          "signature": "[(a, prob)] -\u003e EventM a",
          "source": "src/Numeric-Probability-Game-Event.html#makeEventProb",
          "type": "function"
        },
        "index": {
          "description": "Given list of events and their associated probabilities forms corresponding event The probabilities must be non-negative If the probabilities do not sum to one they are all scaled linearly so that their sum is one Duplicate items will have their probabilities added The result of passing the empty list list containing negative probabilities or list where all the probabilities are zero is undefined",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "makeEventProb",
          "normalized": "[(a,b)]-\u003eEventM a",
          "package": "game-probability",
          "partial": "Event Prob",
          "signature": "[(a,prob)]-\u003eEventM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:makeEventProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of all the outcomes of the event and their associated probability.\n  You can be sure that the probabilities will all sum to 1, and that there will\n only be one item in the list per outcome.  It is possible that some of the outcomes\n in the list will have zero probability. \n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "outcomes",
          "package": "game-probability",
          "signature": "EventM a -\u003e [(a, Rational)]",
          "source": "src/Numeric-Probability-Game-Event.html#outcomes",
          "type": "function"
        },
        "index": {
          "description": "Gets list of all the outcomes of the event and their associated probability You can be sure that the probabilities will all sum to and that there will only be one item in the list per outcome It is possible that some of the outcomes in the list will have zero probability",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "outcomes",
          "normalized": "EventM a-\u003e[(a,Rational)]",
          "package": "game-probability",
          "signature": "EventM a-\u003e[(a,Rational)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:outcomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the \u003ccode\u003eEventM a\u003c/code\u003e parameter returns a result equal to the first parameter,\n it is changed to be the second parameter; otherwise it is left untouched.  For\n example \u003ccode\u003ereplace 4 8 d4\u003c/code\u003e has an equal chance of producing the outcomes 1, 2,\n 3 and 8, \u003ccode\u003ereplace 10 0 d10 == z10\u003c/code\u003e, and \u003ccode\u003ereplace 10 20 d6 == d6\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Event",
          "name": "subst",
          "package": "game-probability",
          "signature": "a -\u003e a -\u003e EventM a -\u003e EventM a",
          "source": "src/Numeric-Probability-Game-Event.html#subst",
          "type": "function"
        },
        "index": {
          "description": "If the EventM parameter returns result equal to the first parameter it is changed to be the second parameter otherwise it is left untouched For example replace d4 has an equal chance of producing the outcomes and replace d10 z10 and replace d6 d6",
          "hierarchy": "Numeric Probability Game Event",
          "module": "Numeric.Probability.Game.Event",
          "name": "subst",
          "normalized": "a-\u003ea-\u003eEventM a-\u003eEventM a",
          "package": "game-probability",
          "signature": "a-\u003ea-\u003eEventM a-\u003eEventM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Event.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing some simple data definitions for a deck of playing cards.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCards",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-PlayingCards.html",
          "type": "module"
        },
        "index": {
          "description": "module containing some simple data definitions for deck of playing cards",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCards",
          "package": "game-probability",
          "partial": "Playing Cards",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for \u003ccode\u003e\u003ca\u003eRank\u003c/a\u003e\u003c/code\u003e where the Ord, Enum and Bounded instances are adjusted\n to list Ace as the lowest item rather than the highest.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "AceLowRank",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#AceLowRank",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for Rank where the Ord Enum and Bounded instances are adjusted to list Ace as the lowest item rather than the highest",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "AceLowRank",
          "package": "game-probability",
          "partial": "Ace Low Rank",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#t:AceLowRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA playing card with a rank and suit.  The ordering on them is arbitrary (by\n rank then by suit).\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCard",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#PlayingCard",
          "type": "data"
        },
        "index": {
          "description": "playing card with rank and suit The ordering on them is arbitrary by rank then by suit",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCard",
          "package": "game-probability",
          "partial": "Playing Card",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#t:PlayingCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rank of playing cards.  The ranking is specified ace-high, as this is\n how many games operate.  If you wish to have an ace-low ordering you can use\n the \u003ccode\u003e\u003ca\u003eAceLowRank\u003c/a\u003e\u003c/code\u003e newtype.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Rank",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "data"
        },
        "index": {
          "description": "The rank of playing cards The ranking is specified ace-high as this is how many games operate If you wish to have an ace-low ordering you can use the AceLowRank newtype",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Rank",
          "package": "game-probability",
          "partial": "Rank",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard four suits of playing cards.  The ordering on them is arbitrary\n (alphabetical, in fact).\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Suit",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Suit",
          "type": "data"
        },
        "index": {
          "description": "The standard four suits of playing cards The ordering on them is arbitrary alphabetical in fact",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Suit",
          "package": "game-probability",
          "partial": "Suit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#t:Suit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Ace",
          "package": "game-probability",
          "signature": "Ace",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Ace",
          "package": "game-probability",
          "partial": "Ace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Ace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "AceLow",
          "package": "game-probability",
          "signature": "AceLow",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#AceLowRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "AceLow",
          "package": "game-probability",
          "partial": "Ace Low",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:AceLow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Clubs",
          "package": "game-probability",
          "signature": "Clubs",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Clubs",
          "package": "game-probability",
          "partial": "Clubs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Clubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Diamonds",
          "package": "game-probability",
          "signature": "Diamonds",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Diamonds",
          "package": "game-probability",
          "partial": "Diamonds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Diamonds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Eight",
          "package": "game-probability",
          "signature": "Eight",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Eight",
          "package": "game-probability",
          "partial": "Eight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Eight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Five",
          "package": "game-probability",
          "signature": "Five",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Five",
          "package": "game-probability",
          "partial": "Five",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Five"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Four",
          "package": "game-probability",
          "signature": "Four",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Four",
          "package": "game-probability",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Hearts",
          "package": "game-probability",
          "signature": "Hearts",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Hearts",
          "package": "game-probability",
          "partial": "Hearts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Hearts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Jack",
          "package": "game-probability",
          "signature": "Jack",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Jack",
          "package": "game-probability",
          "partial": "Jack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Jack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "King",
          "package": "game-probability",
          "signature": "King",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "King",
          "package": "game-probability",
          "partial": "King",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:King"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Nine",
          "package": "game-probability",
          "signature": "Nine",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Nine",
          "package": "game-probability",
          "partial": "Nine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Nine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCard",
          "package": "game-probability",
          "signature": "PlayingCard",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#PlayingCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "PlayingCard",
          "package": "game-probability",
          "partial": "Playing Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:PlayingCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Queen",
          "package": "game-probability",
          "signature": "Queen",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Queen",
          "package": "game-probability",
          "partial": "Queen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Queen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Seven",
          "package": "game-probability",
          "signature": "Seven",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Seven",
          "package": "game-probability",
          "partial": "Seven",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Seven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Six",
          "package": "game-probability",
          "signature": "Six",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Six",
          "package": "game-probability",
          "partial": "Six",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Six"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Spades",
          "package": "game-probability",
          "signature": "Spades",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Spades",
          "package": "game-probability",
          "partial": "Spades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Spades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Ten",
          "package": "game-probability",
          "signature": "Ten",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Ten",
          "package": "game-probability",
          "partial": "Ten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Ten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Three",
          "package": "game-probability",
          "signature": "Three",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Three",
          "package": "game-probability",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Two",
          "package": "game-probability",
          "signature": "Two",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "Two",
          "package": "game-probability",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "alRank",
          "package": "game-probability",
          "signature": "Rank",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#AceLowRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "alRank",
          "package": "game-probability",
          "partial": "Rank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:alRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard full deck of 52 playing cards.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "deck",
          "package": "game-probability",
          "signature": "Cards PlayingCard",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#deck",
          "type": "function"
        },
        "index": {
          "description": "The standard full deck of playing cards",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "deck",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:deck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "rank",
          "package": "game-probability",
          "signature": "Rank",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#PlayingCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "rank",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the two cards have the same rank.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "sameRank",
          "package": "game-probability",
          "signature": "PlayingCard -\u003e PlayingCard -\u003e Bool",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#sameRank",
          "type": "function"
        },
        "index": {
          "description": "Checks if the two cards have the same rank",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "sameRank",
          "normalized": "PlayingCard-\u003ePlayingCard-\u003eBool",
          "package": "game-probability",
          "partial": "Rank",
          "signature": "PlayingCard-\u003ePlayingCard-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:sameRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the two cards have the same suit.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "sameSuit",
          "package": "game-probability",
          "signature": "PlayingCard -\u003e PlayingCard -\u003e Bool",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#sameSuit",
          "type": "function"
        },
        "index": {
          "description": "Checks if the two cards have the same suit",
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "sameSuit",
          "normalized": "PlayingCard-\u003ePlayingCard-\u003eBool",
          "package": "game-probability",
          "partial": "Suit",
          "signature": "PlayingCard-\u003ePlayingCard-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:sameSuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "suit",
          "package": "game-probability",
          "signature": "Suit",
          "source": "src/Numeric-Probability-Game-PlayingCards.html#PlayingCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Game PlayingCards",
          "module": "Numeric.Probability.Game.PlayingCards",
          "name": "suit",
          "package": "game-probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-PlayingCards.html#v:suit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with functions for querying the probabilities of various outcomes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Game.Query",
          "name": "Query",
          "package": "game-probability",
          "source": "src/Numeric-Probability-Game-Query.html",
          "type": "module"
        },
        "index": {
          "description": "module with functions for querying the probabilities of various outcomes",
          "hierarchy": "Numeric Probability Game Query",
          "module": "Numeric.Probability.Game.Query",
          "name": "Query",
          "package": "game-probability",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the probability that the outcome will satisfy the given predicate.  For\n example:\n\u003c/p\u003e\u003cpre\u003e chancePred (\u003c= 2) d6 == 1/3   -- The chance of getting 2 or less on a d6\n chancePred even d6 == 1/2     -- The chance of rolling an event number on a d6\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Query",
          "name": "chancePred",
          "package": "game-probability",
          "signature": "(a -\u003e Bool) -\u003e EventM a -\u003e Rational",
          "source": "src/Numeric-Probability-Game-Query.html#chancePred",
          "type": "function"
        },
        "index": {
          "description": "Gets the probability that the outcome will satisfy the given predicate For example chancePred d6 The chance of getting or less on d6 chancePred even d6 The chance of rolling an event number on d6",
          "hierarchy": "Numeric Probability Game Query",
          "module": "Numeric.Probability.Game.Query",
          "name": "chancePred",
          "normalized": "(a-\u003eBool)-\u003eEventM a-\u003eRational",
          "package": "game-probability",
          "partial": "Pred",
          "signature": "(a-\u003eBool)-\u003eEventM a-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Query.html#v:chancePred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the probability that the given relation will hold between the two events.\n  For example:\n\u003c/p\u003e\u003cpre\u003e chanceRel (==) d6 d6 == 1/6   -- The chance of rolling doubles on d6\n chanceRel (\u003e) (2*d6) d12      -- The chance of beating a d12 with two d6\n\u003c/pre\u003e",
          "module": "Numeric.Probability.Game.Query",
          "name": "chanceRel",
          "package": "game-probability",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e EventM a -\u003e EventM a -\u003e Rational",
          "source": "src/Numeric-Probability-Game-Query.html#chanceRel",
          "type": "function"
        },
        "index": {
          "description": "Gets the probability that the given relation will hold between the two events For example chanceRel d6 d6 The chance of rolling doubles on d6 chanceRel d6 d12 The chance of beating d12 with two d6",
          "hierarchy": "Numeric Probability Game Query",
          "module": "Numeric.Probability.Game.Query",
          "name": "chanceRel",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eEventM a-\u003eEventM a-\u003eRational",
          "package": "game-probability",
          "partial": "Rel",
          "signature": "(a-\u003ea-\u003eBool)-\u003eEventM a-\u003eEventM a-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Query.html#v:chanceRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the probability that the given boolean-outcome event will give a True\n outcome.  For example:\n\u003c/p\u003e\u003cpre\u003e chanceTrue coinToss == 1/2\n chanceTrue ((== 3) \u003c$\u003e d6) == 1/6\n\u003c/pre\u003e\u003cp\u003e(For the latter example, \u003ccode\u003e\u003ca\u003echancePred\u003c/a\u003e\u003c/code\u003e is more concise.)\n\u003c/p\u003e",
          "module": "Numeric.Probability.Game.Query",
          "name": "chanceTrue",
          "package": "game-probability",
          "signature": "EventM Bool -\u003e Rational",
          "source": "src/Numeric-Probability-Game-Query.html#chanceTrue",
          "type": "function"
        },
        "index": {
          "description": "Gets the probability that the given boolean-outcome event will give True outcome For example chanceTrue coinToss chanceTrue d6 For the latter example chancePred is more concise",
          "hierarchy": "Numeric Probability Game Query",
          "module": "Numeric.Probability.Game.Query",
          "name": "chanceTrue",
          "normalized": "EventM Bool-\u003eRational",
          "package": "game-probability",
          "partial": "True",
          "signature": "EventM Bool-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/game-probability/docs/Numeric-Probability-Game-Query.html#v:chanceTrue"
      }
    }
  ]
]