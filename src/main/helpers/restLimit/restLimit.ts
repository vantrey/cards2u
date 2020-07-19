

export const getRestLimit = (maxLength: number, value: string | undefined) => {
    if (value) {
        const result = maxLength - value.length;
        if (result < 0) {
            return `you must shorten the text by ${result * -1} chars`
        }
        return result.toString()
    }  else {
        return maxLength.toString()
    }
};