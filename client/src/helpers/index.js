const helpers =  {
    toCamelCase(text) {
        const splittedText = text.split(" ")

        splittedText.forEach((x, i, arr) => {
            arr[i] = x[0].toUpperCase() + x.slice(1)
        })

        return splittedText.join(" ")
    }
}

export default helpers

