import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopicsForLesson
    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + topicId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [moduleId, lessonId])
    return(
        <div>
            {/*<h2>Lessons</h2>*/}
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicsForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopicsForLesson: (lessonId) => {
        console.log("CREATE TOPICS FOR LESSON: " + lessonId)
        topicService
            .createTopicsForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)