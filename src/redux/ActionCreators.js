export const CHANGE_LOCATION = 'CHANGE_LOCATION';

export function changeLocation(text) {
    return {
        type: CHANGE_LOCATION, 
        location: text
    }
}
