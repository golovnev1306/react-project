const required = (value) => {
    if (value?.length > 0) {
        return undefined;
    }
    return 'Field is required for field';
}

const maxLength = (length) => {
    return (value) => {
        if (value?.length < length) {
            return undefined;
        }
        return `Field must be less ${length} symbols`;
    }
}

export {required, maxLength};