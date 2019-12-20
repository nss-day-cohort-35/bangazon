const remoteURL = "http://localhost:5000/api"

export default {

    // Used for customers, products, paymentTypes, productTypes, employees,     departments, trainingPrograms and revenueReport
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(result => result.json())
    },
    // Used for customers, paymentTypes, orders, productTypes, employees, departments, computers, and trainingPrograms
    getById(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`).then(result => result.json())
    },
    // Only for searching customers and products
    searchByName(resource, searchTerm) {
        return fetch(`${remoteURL}/${resource}?q=${searchTerm}`).then(result => result.json())
    },
    //Used for customers and productTypes
    getDataWithProduct(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}?include=products`)
    },

    // Used for customers, products, paymentTypes, userPaymentTypes, orders, productTypes, employees, departments, computers, trainingPrograms
    addData(resource, newObj) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(data => data.json)
    },

    // Used for customers, products, paymentTypes, userPaymentTypes, orders, productTypes,employees, departments,computers, and trainingPrograms
    updateData(resource, editedObj) {
        return fetch(`${remoteURL}/${resource}/${editedObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObj)
        }).then(data => data.json)
    },

    // Used for customers, products, paymentTypes, userPaymentTypes, computers, and trainingPrograms
    deleteData(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE",
        }).then(data => data.json)
    },

    // Option will either be "recent" or "popularity"
    sortProductsBy(option) {
        return fetch(`${remoteURL}/products?sortBy=${option}`).then(result => result.json())
    },

    // Option will either be "true" or "false"
    sortProductsByPrice(option) {
        return fetch(`${remoteURL}/products?sortBy=price&asc=${option}`).then(result => result.json())
    },

    getCustomerPaymentTypes(id) {
        return fetch(`${remoteURL}/userPaymentTypes?customerId=${id}`).then(result => result.json())
    },

    getOrdersByCustomer(id) {
        return fetch(`${remoteURL}/orders?customerId=${id}`).then(result => result.json())
    },

    getCustomerShoppingCart(id) {
        return fetch(`${remoteURL}/orders?customerId=${id}&cart=true`).then(result => result.json())
    },

    searchForEmployeeByName(firstName, lastName) {
        return fetch(`${remoteURL}/employees?firstName=${firstName}&lastName=${lastName}`).then(result => result.json())
    },

    getDeptWithEmployees(id) {
        return fetch(`${remoteURL}/departments/${id}?include=employees`).then(result => result.json())
    },

    // Option will either be "true" or "false"
    getComputersByAvailability(option) {
        return fetch(`${remoteURL}/computers?available=${option}`).then(result => result.json())
    },

    addEmployeeToTrainingProgram(id) {
        return fetch(`${remoteURL}/trainingPrograms/${id}/employees`).then(result => result.json())
    },

    removeEmployeeFromTrainingProgram(trainingId, employeeId) {
        return fetch(`${remoteURL}/trainingPrograms/${trainingId}/employees/${employeeId}`, {
            method: "DELETE",
        }).then(data => data.json)
    }

}
