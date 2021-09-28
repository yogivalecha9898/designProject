const trigger = false

const Animate = (state = trigger, action) => {
    switch (action.type) {
        case "startInitialAnimation": return !trigger
        default: return state
    }
}

export default Animate