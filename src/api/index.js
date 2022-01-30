import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      url: URL,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '72e69a234fmsh6c742d06e687ea0p16a98ajsnf371185e4b03'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
