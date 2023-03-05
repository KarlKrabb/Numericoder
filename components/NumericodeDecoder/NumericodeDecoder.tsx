import React, { useEffect, useState } from "react";
import styles from "./NumericodeDecoder.module.css";
import useNumericoder from "../../hooks/useNumericoder";
import Image from "next/image";

const NumericodeDecoder = () => {

    const {decodeNumericode, encodeToNumericode} = useNumericoder();

    const [numericodeInput, setNumericodeInput] = useState<string>();
    const [numericodeOutput, setNumericodeOutput] = useState<string>();

    useEffect(() => {
        const message = sessionStorage.getItem("message");
        if(message){
            setNumericodeInput(message);
        }
    },[]);

    const handleDecode = async (message : string) => {
        const response = await decodeNumericode(message);
        setNumericodeOutput(response);
    };

    const handleEncode = async (message : string) => {
        const response = await encodeToNumericode(message);
        setNumericodeOutput(response);
    };

    const handleSessionStorage = (input: string) => {
        sessionStorage.setItem("message", input);
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.headerSection}>
                <Image 
                    src="/TrussleLogo.png" 
                    alt="Trussle Logo"
                    width={106}
                    height={25}
                />
            </header>
            <div className={styles.sectionLayout}>
                <div className={styles.decoderContainer}>
                    <section>
                        <div id="inputLabel">
                            Enter your numericode here:
                        </div>
                        <div className={styles.numericodeInputWrapper}>
                            <textarea
                                data-testid="numericodeTextArea"
                                id="numericodeTextArea"
                                className={styles.numericodeInputBox} 
                                cols={30}
                                rows={5}
                                value={numericodeInput}
                                onChange={(e) => {
                                    setNumericodeInput(e.target.value);
                                    handleSessionStorage(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.butttonWrapper}>
                            <button
                                className={styles.decodeButton}
                                onClick={() => {
                                    numericodeInput && handleDecode(numericodeInput);
                                }}
                            >
                                Decode
                            </button>
                            <button
                                className={styles.encodeButton}
                                onClick={() => {
                                    numericodeInput && handleEncode(numericodeInput);
                                }}
                            >
                                Encode
                            </button>
                        </div>
                    </section>
                    <section>
                        <p className={styles.outputBox}>
                            {numericodeOutput}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NumericodeDecoder;