const initialDefaultReducer = {
    text: 'Hello World!',
};

export function defaultReducer(state = initialDefaultReducer, action) {
    switch (action.type) {
        case "TEST":
            return {
                text: "Testist"
            }
        default:
            return state;
    }
}