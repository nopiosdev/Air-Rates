
import { Post } from "../utils/RestClient";


const GoolgePlaceSearch = (input) => {
    let payload = {
        input: input
    }
    return Post(`https://www.searates.com/search/google-autocomplete`, payload)
}

const GoolgeGenerateMap = (placeid, code, placetype) => {
    let payload = {
        input: placeid,
        type: 'place_id',
        country_code: code,
        place_type: placetype
    }

    return Post(`https://www.searates.com/search/google-geocode`, payload)
}


const uploadAll = {
    GoolgePlaceSearch, GoolgeGenerateMap
}

export default uploadAll