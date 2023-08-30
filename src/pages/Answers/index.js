import { useEffect, useState } from "react"
import { getAnswersByUserId } from "../../services/anwerService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";

function Answers() {
    const [dataAnswers, setDataAnswers] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const answer = await getAnswersByUserId();
            const topic = await getListTopic();
            let result = [];
            for(let i = 0; i< answer.length;i++){
                result.push({
                    ...topic.find(item => item.id === answer[i].topicId),
                    ...answer[i],
                })
            }
            setDataAnswers(result.reverse());
        }
        fetchApi()
    },[]);
    return (
        <>
            <h2>Danh sách bài đã luyện tập</h2>
            {dataAnswers.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswers.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/result/"+item.id}>Xem chi tiết</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
export default Answers