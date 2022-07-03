import { useEffect, useState } from "react";
import styles from "../../styles/Test.module.css";

export default function test() {
  const [questions, setQuestions] = useState(false);
  const [select, setSelect] = useState([{ id: 14, index: 2 }]);

  const quizLetters = ["A", "B", "C", "D"];
  const API = "http://192.168.1.71:8080/api";

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(`${API}/questions`).then(async (res) => await res.json());
        setQuestions(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Test</h1>

      <form>
        {questions
          ? questions.map(({ id, question, answers }, index) => (
              <div className={styles.quiz} key={id}>
                <div className={styles.wrapper}>
                  <span className={styles.quiz__number}>Pytanie {index + 1}</span>
                  <h2 className={styles.quiz__question}>{question}</h2>
                  {answers.map((answer, index) => (
                    <div key={`${id}-${index}`}>
                      <input
                        type='radio'
                        id={`${id}-${index}`}
                        name={id}
                        className={styles.quiz__answer__radio}
                      />
                      <label for={`${id}-${index}`} className={styles.quiz__answer}>
                        <span className={styles.quiz__answer__letter}>{quizLetters[index]}</span>
                        <span className={styles.quiz__answer__content}>{answer}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : ""}
        <button className={styles.button} type='submit'>
          Zakończ test
        </button>
      </form>
    </main>
  );
}
