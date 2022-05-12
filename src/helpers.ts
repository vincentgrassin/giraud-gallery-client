import type { Picture } from "./types"

export const apiUrl = ''
export const buildImageLocatorUrl = (picture:Picture) => {

    if(!picture) {
        return ""
    }

    return `https://res.cloudinary.com/dyivtryy7/image/upload/v1652346037/${picture.externalPublicId}.jpg`
}