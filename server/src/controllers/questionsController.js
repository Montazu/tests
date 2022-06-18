import { questionsService } from "../services"

export default new (class questionsController {
	get = async (request, response) => {
		try {
			const result = await questionsService.get()
			response.status(200).json(result)
		} catch (error) {
			response.sendStatus(500)
		}
	}

	add = async (request, response) => {
		try {
			const result = await questionsService.add(request.body)
			response.status(201).json(result)
		} catch (error) {
			response.sendStatus(500)
		}
	}
})
