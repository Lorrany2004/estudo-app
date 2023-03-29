const CmsApi = () => {
    const url = 'http://localhost:3000'

    return {      
        getProdutos () {
            return fetch(`${url}/produtos`)
        },
        postFuncionalidade (funcionalidade) {
            return fetch(`${url}/produtos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        patchFuncionalidade (funcionalidade) {
            return fetch(`${url}/produtos/${funcionalidade.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        deleteFuncionalidade (id) {
            return fetch(`${url}/produtos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                }
            })
        }
    }
}

export default CmsApi