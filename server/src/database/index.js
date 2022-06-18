import pg from "pg"
import config from "../config/default.json" assert { type: "json" }

const { Pool } = pg
const { database: { user, host, database, password, port } } = config
const pool = new Pool({ user, host, database, password, port })

pool.connect()

export default class pgDatabase {
	static get = async () => {
		const sql = `SELECT id, question, answers_incorrect, answer_correct FROM questions ORDER BY random() LIMIT 15`
		return (await pool.query(sql)).rows
	}

	static add = async ({ test, question, answers_incorrect, answer_correct, updated }) => {
		const sql = `INSERT INTO questions (test, question, answers_incorrect, answer_correct, updated) VALUES ('${test}', '${question}', '${answers_incorrect}', '${answer_correct}', '${updated}')` 
		return (await pool.query(sql)).rows
	}
}
