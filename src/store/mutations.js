export default {
    setConsName(state, consName) {
        state.consName = consName;
    },
    setField(state, field) {
        state.type = field
    },
    setErrorCode(state, errcode) {
        state.errcode = errcode
    },
    setData(state, data) {
        state[state.type] = data;
    }
}
