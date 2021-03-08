const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001086188/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001086188/topics";

export const createTopicsForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export default {
    findTopicForLesson, createTopicsForLesson
}