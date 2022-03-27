

interface ResponseBody{
    message: string
}

const useNumericoder = () => {
    
    const decodeNumericode = async (input : string) : Promise<string> => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const response = await fetch("/api/DecodeNumericode", {
                method: "POST",
                headers,
                body: JSON.stringify({
                    message: input
                })
            });

            const responseBody : ResponseBody = await response.json();

            return responseBody.message;
            
        } catch (error) {
            return (error instanceof Error) ? error.message : "Unexpected error";
        }
    };

    const encodeToNumericode = async (input : string) : Promise<string> => {
        try {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const response = await fetch("/api/EncodeNumericode", {
                method: "POST",
                headers,
                body: JSON.stringify({
                    message: input
                })
            });

            const responseBody : ResponseBody = await response.json();

            return responseBody.message;
            
        } catch (error) {
            return (error instanceof Error) ? error.message : "Unexpected error";
        }
    };

    return {decodeNumericode, encodeToNumericode};
};

export default useNumericoder;