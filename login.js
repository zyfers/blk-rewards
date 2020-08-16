export const login = async (username, password) => {
    if (username === 'test123' && password === "pass123") {
        return true
    }

    const errMessage = "Unable to Login"
    throw new Error(errMessage)
}