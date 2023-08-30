import { get } from "../utils/request"

export const getListQuestion = async (idTopic) => {
    const result = await get(`questions?topicId=${idTopic}`)
    return result
}