export default class Http {

    public url = process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEVELOPMENT_URL : process.env.REACT_APP_PUBLIC_URL;

    public postQueryExample() {
        return fetch(this.url + '/PATH', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    }

    public getQueryAuthExample (token: string) {
        return fetch(this.url + '/PATH', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    }

}
