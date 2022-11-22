import { BASE_URL } from '../config/api'

const getImageURL = (path = '') => (path ? `${BASE_URL}/${path}` : '/images/no-photo.png')
const getImagesURL = (path = '') => (path.map(e => (e.media ? `${BASE_URL}/${e.media}` : '/images/no-photo.png')))

export { getImageURL, getImagesURL }
