

import {
    ADD_ITEM,
    REMOVE_ITEM,
    MARK_COMPLETE,
    UPDATE_ITEM
} from './types'


export const addItem = (data) => ({
    type: ADD_ITEM,
    data: data,
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    data: id,
})

export const updateItem = (data) => ({
    type: UPDATE_ITEM,
    data: data,
})

export const markComplete = (id) => ({
    type: MARK_COMPLETE,
    data: id,
})








