const trigger = () => {
    return {
        type: "startInitialAnimation"
    }
}

const push = (val) => {
    return {
        type: "historyPush",
        payload: val
    }
}

export { trigger, push }  