let history = {}

const Push = (state = history, action) => {
    switch (action.type) {
        case "historyPush": {
            action.payload.his.push(action.payload.toPush)
            state = action.payload.his
            return state
        }
        default: return state
    }
}

export default Push