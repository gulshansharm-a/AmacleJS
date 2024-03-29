
class Apis {
    constructor(apiKey) {

        this.apiKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwiaWF0IjoxNzA3NjMzMzI1LCJleHAiOjE3MDc2MzY5MjV9.oq3_Xc0Ievq4AAjM5kQw9ZHG9iX07E3IzpIz05ASgkI';
        this.baseUrl = 'http://localhost:3000';
      }
    
 static create_database(col = () => { }) {
        this.create_table_api = 'http://localhost:3000/createtable';
        try {
           
             fetch(this.create_table_api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwiaWF0IjoxNzA3NjMzMzI1LCJleHAiOjE3MDc2MzY5MjV9.oq3_Xc0Ievq4AAjM5kQw9ZHG9iX07E3IzpIz05ASgkI`,

                },

                body: JSON.stringify({ data:  col() })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    data;
                })
                .catch(error => {
                    console.error('Error sending data:', error.message);
                });

            return Promise.resolve('Request sent successfully');
        } catch (error) {
            console.error('Error sending data:', error.message);
            return Promise.reject(error);
        }
    }

    async getData(dataFromBlueprint) {

        const apiUrl = 'http://localhost:3000/getData';
    
        try {
           
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.apiKey}`,

                },
                body: JSON.stringify({ data:await dataFromBlueprint() }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            return await data.data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
    

    static OtherActions(col = () => { }) {
        this.create_table_api = 'http://localhost:3000/createtable';
        try {
          
            fetch(this.create_table_api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,

                },
                body: JSON.stringify({ data: col() })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    data;
                })
                .catch(error => {
                    console.error('Error sending data:', error.message);
                });

            return Promise.resolve('Request sent successfully');
        } catch (error) {
            console.error('Error sending data:', error.message);
            return Promise.reject(error);
        }
    }

}

module.exports = Apis;
