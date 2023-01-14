const reducer = (state, action) => {
    if (action.type === 'SHOW_ALERT') {
        return { ...state, showAlert: true, alertType: 'danger', alertText: 'Please provide all values!' };
    }
    if (action.type === 'CLEAR_ALERT') {
        return { ...state, showAlert: false, alertType: '', alertText: '' };
    }
    if (action.type === 'REGISTER_USER') {
        return { ...state, isLoading: true };
    }
    if (action.type === 'REGISTER_USER_SUCCESS') {
        return { ...state, user: action.payload.user, _id: action.payload._id };
    }
    if (action.type === 'REGISTER_USER_ERROR') {
        return { ...state, isLoading: false, showAlert: true, alertText: action.payload };
    }
    if (action.type === 'LOGIN_USER') {
        return { ...state, isLoading: true };
    }
    if (action.type === 'LOGIN_USER_SUCCESS') {
        return { ...state, user: action.payload.username, _id: action.payload._id, role: action.payload.role };
    }
    if (action.type === 'LOGIN_USER_ERROR') {
        return { ...state, isLoading: false, showAlert: true, alertText: action.payload };
    }
    if (action.type === 'AUTH_CHECK_SUCCESS') {
        return { ...state, user: action.payload.username, _id: action.payload._id, role: action.payload.role };
    }

    throw new Error(`no such action: ${action.type}`);
};

export default reducer;
