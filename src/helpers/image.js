import {BASE_URL} from '../config/api'

const getImageURL = (path = '') => (path ? `${BASE_URL}/${path}` : '/images/no-photo.png')

export {getImageURL}
