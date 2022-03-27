import generateNumericodePairs from "./generateNumericodePairs";

const encodeNumericode = (input : string) : string => {
    try {

        const numericodePairs = generateNumericodePairs();
        const wordArray = input.split(" ");

        const encodedNumberArray : Array<string> = wordArray.map((word) => {
            
            const charArray = word.split("");
            const encodedNumber : Array<number> = charArray.map((letter) => {

                const number : number | undefined = numericodePairs.find((numericodePair) => {
                    return numericodePair.letter == letter.toUpperCase();
                })?.number;

                if(!number) throw new Error("Please only use letters in your message. Numbers and special characters cannot be encoded.");
                
                const randomEncodingMultiplier = (Math.floor(Math.random() * 5) + 1);

                let multipliedNumber = number;
                for (let i = 0; i < randomEncodingMultiplier; i++) {
                    multipliedNumber = (multipliedNumber * 27);                        
                }

                return (multipliedNumber);
            });

            return encodedNumber.join(" ");
        });

        let randomSpaceNumber = (Math.floor(Math.random() * (1000 - 27 + 1)) + 27);

        while (randomSpaceNumber > 26 && randomSpaceNumber % 27 < 0) {
            randomSpaceNumber = (Math.floor(Math.random() * (1000 - 27 + 1)) + 27);
        }

        return encodedNumberArray.join(` ${randomSpaceNumber} `);

    } catch (error) {
        return (error instanceof Error) ? error.message : "Unexpected error";
    }
};

export default encodeNumericode;