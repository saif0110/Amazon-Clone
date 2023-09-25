import { ADDRESS_DETAIL } from "./AddressType"

const initialValue = {
    addressDetail: {
        checkDefaul: false,
        city: "Nederland B.V.",
        country: "NETHERLANDS",
        fullName: "Robert orton",
        houseNumber: "202",
        landmark: "3439 MN Nieuwegein",
        mobile: 123045210,
        pin: 271200,
        state: "Informatica",
        street: "Edisonbaan 14a"
    }
}
// 
// 
// 
// 
export const addressReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADDRESS_DETAIL:
            return {
                addressDetail: action.payload
            }
        default: return state
    }
}