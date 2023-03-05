import decodeNumericode from "../pages/api/DataHelpers/decodeNumericode";
import encodeNumericode from "../pages/api/DataHelpers/encodeNumericode";

test("Check decoder with examples", () => {
    
    const testStringOne = "14580 157464 129140163 10097379 72 4782969 513 72 27 72 14580 98415 513 286978140";
    const testStringTwo = "14580 5832 135 336 9034497 413343 129140163 59049 216513 336 1062882 9565938 7971615 621 378 336 162 7971615 17496 336 5314410 413343 9477 229582512 13851 336 10935 594 135 354294 336 540 114791256 3645 336 172186884 531441 511758 675 336 78732 405 100442349";
    const testStringThree = "8 5 324 8748 295245 730 23 405 13122 12 108";

    expect(decodeNumericode(testStringOne)).toBe("THIS IS A TEST");
    expect(decodeNumericode(testStringTwo)).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
    expect(decodeNumericode(testStringThree)).toBe("HELLO WORLD");
});

test("Check encode then decode", () => {
    const testString = "This is a test message that should be encoded then decoded and then matched back up to this original message";

    const numericodeString = encodeNumericode(testString);

    expect(decodeNumericode(numericodeString)).toBe(testString.toUpperCase());

});
