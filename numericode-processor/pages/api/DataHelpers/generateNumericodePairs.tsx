interface NumericodePair{
    letter: string,
    number: number
}
const generateNumericodePairs = () : Array<NumericodePair> => {
    const alphabet : Array<string> = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const numericodeDictionary : Array<NumericodePair> = alphabet.map((character, i) => {
        return {
            letter: character,
            number: i + 1
        };
    });

    return numericodeDictionary; 
};

export default generateNumericodePairs;