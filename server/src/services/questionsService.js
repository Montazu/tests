import database from "../database";
import shuffle from "../utils/shuffle.js";

export default class questionsService {
  static get = async () => {
    const result = await database.get();
    const questions = result.map((question) => ({
      id: question.id,
      question: question.question,
      answers: shuffle(question.answers_incorrect.concat(question.answer_correct)),
    }));
    return questions;
  };

  static add = async (data) => {
    const result = await database.add({
      ...data,
      answers_incorrect: JSON.stringify(data.answers_incorrect),
      updated: new Date().toISOString(),
    });
    return result;
  };
}
