import { useState, useEffect } from "react";

export function useTypeWriter(Introductions) {
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    // sets a delay
    function timer(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    // push letters one by one to state
    async function type(sentence) {
      // iterate the sentence
      for (const currentLetter of sentence) {
        // add the letters cumulatively to state
        setIntroduction((prevState) => prevState + currentLetter);
        // wait a few seconds before proceeding to the next letter
        await timer(120);
      }
    }

    // pop letters one by one from state
    async function unType(sentence) {
      for (let i = 0; i < sentence.length; i++) {
        // remove last letter from sentence in state
        setIntroduction((prevState) => prevState.slice(0, -1));
        // wait a few seconds before proceeding to the next letter
        await timer(120);
      }
    }

    // invoke the type and unType functions in order
    // with delays between successive runs
    async function typeWrite() {
      // get one sentence out of the array of sentences
      for (const sentence of Introductions) {
        await timer(100);
        await type(sentence);
        await timer(4000);
        await unType(sentence);
        await timer(1000);
      }
      // recursion
      typeWrite();
    }

    // invoke the fn
    typeWrite();

    // cleanup
    return () => {
      setIntroduction("");
    };
  }, [Introductions]);
  return introduction;
}
