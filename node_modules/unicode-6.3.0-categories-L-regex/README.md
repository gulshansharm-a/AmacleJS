Unicode v6.3.0 L Character Category Regex
-----------------------------------------

This is the L character class regexp extracted from the unicode-6.3.0
module.  That module is unfortunately large enough to make it an
installation and distribution headache.  Splitting out the particular pieces
that one needs from it is thus substantially useful.

Usage
-----

Where previously you said:

    var L = require('unicode-6.3.0/categories/L/regex');

You can now say:

    var L = require('unicode-6.3.0-categories-L-regex');

Details
-------

The module returns a regular expression object that will match the L
character category, that is, all characters considered "letters".

