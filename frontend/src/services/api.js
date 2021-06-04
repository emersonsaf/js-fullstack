import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
})


export default api;


export const deleteItem = (slug) => {
    axios.delete(`/api/portfolio/${slug}`)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

export const editItem = (slug, { title, description, longDescription, image, technologies }) => {
    axios.patch(`/api/portfolio/${slug}`, {
        title: title,
        description: description,
        longDescription: longDescription,
        image: image,
        technologies: technologies
    })
        .then(res => {
            console.log(res)
            alert(`${slug} Success Edited`);
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

export const addItem = ({ title, description, longDescription, image, technologies }) => {
    axios
        .post('/api/portfolio', {
            title,
            description,
            longDescription,
            image,
            technologies
        })
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return err
        })
}