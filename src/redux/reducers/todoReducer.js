import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, MARK_COMPLETE, CLEAR_ALL } from "../actions/types";

const initialState = {
    items: [],
};

export const todoReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, data],
            };

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== data),
            };

        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((item) => (item.id === data.id ? { ...item, content: data.content } : item)),
            };
        case MARK_COMPLETE:
            return {
                ...state,
                items: state.items.map((item) => (item.id === data ? { ...item, complete: true } : item)),
            };

        case CLEAR_ALL:
            return {
                ...state,
                items: [],
            };

        default:
            return state;
    }
};
