const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer
