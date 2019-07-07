import axios from 'axios'

const apiPath = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'

export default axios.create({
    baseURL: apiPath,
});