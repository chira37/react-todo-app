import { ADD_ITEM, REMOVE_ITEM, MARK_COMPLETE, UPDATE_ITEM, CLEAR_ALL } from "./types";

export const addItem = (data) => ({
    type: ADD_ITEM,
    data: data,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    data: id,
});

export const updateItem = (data) => ({
    type: UPDATE_ITEM,
    data: data,
});

export const markComplete = (id) => ({
    type: MARK_COMPLETE,
    data: id,
});

export const clearAll = () => ({
    type: CLEAR_ALL,
});
