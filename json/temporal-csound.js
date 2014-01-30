[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-csound/docs/Csound.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines instance of \u003ccode\u003e\u003ca\u003eCsdSco\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eScore\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eWe can trigger Csound orchestra with \u003ccode\u003e\u003ca\u003eScore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHow to put the values in the container \u003ccode\u003e\u003ca\u003eScore\u003c/a\u003e\u003c/code\u003e? There are many functions to construct the \u003ccode\u003e\u003ca\u003eScore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThey live in the module \u003ca\u003eTemporal.Music.Score\u003c/a\u003e. If you are not familiar with it, you can start with six basic functions. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erest\u003c/a\u003e\u003c/code\u003e -- makes a pause that lasts for some time (in seconds).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etemp\u003c/a\u003e\u003c/code\u003e -- makes a score of one note that lasts for one second.    \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emel\u003c/a\u003e\u003c/code\u003e -- plays a list of notes in sequence (one after the other, short for \u003ccode\u003emelody\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehar\u003c/a\u003e\u003c/code\u003e -- plays a list of notes in parallel (at the same time, short for \u003ccode\u003eharmony\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edel\u003c/a\u003e\u003c/code\u003e -- delays all notes for some time (short for \u003ccode\u003edelay\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e -- change the tempo for all notes by the given ratio (short for \u003ccode\u003estretch\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLet's play something:\n\u003c/p\u003e\u003cpre\u003e res = str 0.5 $ mel [ temp a, str 2 $ temp b, rest 1, har [temp a, temp b] ]\n\u003c/pre\u003e\u003cp\u003eThere are two handy infix operators for delay and stretch: \u003ccode\u003e(+|)\u003c/code\u003e and \u003ccode\u003e(*|)\u003c/code\u003e. So we can write the previous score:\n\u003c/p\u003e\u003cpre\u003e res = 0.5 *| mel [ temp a, 2 *| temp b, 1 +| har [temp a, temp b] ]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Csound",
        "fct-package": "temporal-csound",
        "fct-signature": "module",
        "fct-source": "src/Csound.html",
        "fct-type": "module",
        "title": "Csound"
      },
      "index": {
        "description": "Defines instance of CsdSco for Score We can trigger Csound orchestra with Score How to put the values in the container Score There are many functions to construct the Score They live in the module Temporal.Music.Score If you are not familiar with it you can start with six basic functions rest makes pause that lasts for some time in seconds temp makes score of one note that lasts for one second mel plays list of notes in sequence one after the other short for melody har plays list of notes in parallel at the same time short for harmony del delays all notes for some time short for delay str change the tempo for all notes by the given ratio short for stretch Let play something res str mel temp str temp rest har temp temp There are two handy infix operators for delay and stretch and So we can write the previous score res mel temp temp har temp temp",
        "hierarchy": "Csound",
        "module": "Csound",
        "name": "Csound",
        "normalized": "",
        "package": "temporal-csound",
        "partial": "Csound",
        "signature": ""
      }
    }
  }
]