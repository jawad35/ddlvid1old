const axios = require("axios");

const MailChimpApi = async (userData) => {
    const bodyData = {
        members:[
            {
                email_address:userData.email,
                status:"subscribed",
                merge_fields : {
                    NAME:userData.name,
                }
            }
          
        ]
        
    }
    const data = JSON.stringify(bodyData)
    const options = {
        method: 'POST',
        url: 'https://us21.api.mailchimp.com/3.0/lists/4b9c3b04c8',
        headers: {
         Authorization:"auth 403072cc8fec286611fae9d28e3cb04c-us21" 
        },
        data
      };
      
      try {
          const response = await axios.request(options);
          return {
            success: true,
            data:response.data
        }
      } catch (error) {
        return {
          success: false,
          result: null
      }
      }
}

module.exports = {
    MailChimpApi
};