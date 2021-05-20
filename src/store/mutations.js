export default {
    setConsName(state, consName) {
        state.consName = consName;
    },
    setField(state, field) {
        state.type = field
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode
    },
    setData(state, data) {
        state[state.type] = data;
    }
}
