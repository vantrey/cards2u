

export const getRestLimit = (maxLength: number, value: string | undefined) => {
    if (value) {
        const result = maxLength - value.length;
        if (result < 0) {
            return `less for ${result * -1}`
        }
        return result.toString()
    }  else {
        return maxLength.toString()
    }
};