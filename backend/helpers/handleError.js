export const handleServerError = (error, res) => {
    res.status(500).json({ message: error.message });
}