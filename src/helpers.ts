import type { Picture } from "./types"

export const apiBaseUrl = 'http://localhost:4000'
export const buildImageLocatorUrl = (picture:Picture) => {

    if(!picture) {
        return ""
    }

    return `https://res.cloudinary.com/dyivtryy7/image/upload/v1652346037/${picture.externalPublicId}.jpg`
}