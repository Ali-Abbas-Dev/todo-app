export const addTask = (task) => {
    return {
        type: "ADD",
        payload: task,
    }
}

export const editTask = (id) => {
    return {
        type: "EDIT",
        payload: id,
    }
}

export const delTask = (id) => {
    return {
        type: "DELETE",
        payload: id,
    }
}

export const statusToggler = (id, i) => {
    return {
        type: "STATUS",
        payload: {id, i}
    }
}