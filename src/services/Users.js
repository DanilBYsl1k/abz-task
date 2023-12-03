import axios from "axios";

class UserClass {

  async create (userData) {
    const formData = new FormData();
    
    for (const property in userData) {
      if (userData.hasOwnProperty(property)) {
        formData.append(property, userData[property]);
      }
    }

    try {
      let result = await axios.post('users', formData)
        .then((response)=> response.data)
        .catch((error)=> alert(error.message));

      return result 
    } 
    catch (error) {
      return error
    }
  }

  async userList(link= 'users?page=1&count=6' ) {
    try {
      const result = await axios.get(link)
        .then((response) => response.data)
        .catch((error)=> error);

      return result
    } 
    catch (error) {
      return error;
    }
  }

  async userPosition() {
    try {
      const result = await axios.get('positions')
        .then((response) => response.data.positions)
        .catch((error)=> error);

      return result
    } 
    catch (error) {
      return error;
    }
  }
}

export const userClass = new UserClass();
