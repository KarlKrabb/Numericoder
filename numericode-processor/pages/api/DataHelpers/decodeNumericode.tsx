import generateNumericodePairs from "./generateNumericodePairs";

const decodeNumericode = (input: string) : string => {
    try {

        if(input == null || input == "") throw new Error("Input cannot be null or empty");

        const numericodePairs = generateNumericodePairs();
        const strNumberArray : Array<string> = input.split(" ");

        if(strNumberArray.length <= 0) throw new Error("Unable to split string");

        const numberArray : Array<number> = strNumberArray.map((strNum) => {return parseInt(strNum);});

        const decodedStringArray : Array<string> = numberArray.map((number) => {

            var derivedNumber = number;

            if(number >= 27){
                while (derivedNumber >= 27) {
                    if(derivedNumber % 27 > 0){
                        //Not Divisable
                        return " ";
                    } else {
                        //Is Divisable
                        derivedNumber = derivedNumber / 27;
                    }
                }
            }

            const convertedValue : string | undefined  = numericodePairs.find((numericodePair) => {
                return numericodePair.number == derivedNumber;
            })?.letter;

            if(!convertedValue) throw new Error("Not a valid numericode input, please do not use any letters or special characters i.e ABC or <./%^&*.. etc.");

            return convertedValue;
        });

        var compiledMessage = decodedStringArray.join("");
            
        return compiledMessage;
        
    } catch (error) {
        return (error instanceof Error) ? error.message : "Unexpected error";
    }
};

export default decodeNumericode;