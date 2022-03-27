import decodeNumericode from "../pages/api/DataHelpers/decodeNumericode";
import encodeNumericode from "../pages/api/DataHelpers/encodeNumericode";

test("Check decoder with examples", () => {
    
    const testStringOne = "13 27 26 5";
    const testStringTwo = "432 21 19 5832 5 135 14 6561 59049 15 486 275562";
    const testStringThree = "20 486 21 513 19 324 5 21924 540 135 3 8";
    const testStringFour = "8 5 324 8748 295245 730 23 405 13122 12 108";

    expect(decodeNumericode(testStringOne)).toBe("MAZE");
    expect(decodeNumericode(testStringTwo)).toBe("PUSHEENICORN");
    expect(decodeNumericode(testStringThree)).toBe("TRUSSLE TECH");
    expect(decodeNumericode(testStringFour)).toBe("HELLO WORLD");
});

test("Check encode then decode", () => {
    const testString = "This is a test message that should be encoded then decoded and then matched back up to this original message";

    const numericodeString = encodeNumericode(testString);

    expect(decodeNumericode(numericodeString)).toBe(testString.toUpperCase());

});
