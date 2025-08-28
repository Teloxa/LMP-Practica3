api.interceptors.request.use((config) => {
    const token = localStorage
})

export const getEmpleados = async () => {
    return await api.get(`/getalll`)
}

export const createEmpleado = async (data) => {
    return await api.post(`/create`, data)
}

export const updateEmpleado = async (id,data) => {
    return await api.put(`/update/${id}`, data)
}

export const deleteEmpleado = async (id) => {
    return await api.delete(`/delete/${id}`)
}