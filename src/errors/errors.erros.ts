function notFound(resource = "Item"){
    return {
        name: "notFound", message: `${resource}`
    };
}

export const errors = {
    notFound
}