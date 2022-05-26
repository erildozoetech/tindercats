import requester from "../../../globalServices"
import { catServices } from "./index.endpoints"
import { ICatItem } from "./index.types";

export const getCatsList = async (callback: (arr: Array<ICatItem>) => void) => {
  try {

    let response = await requester(catServices.catsList);
    let onlyCatsWithPhotos: Array<ICatItem> = []

    response.data.map((item: ICatItem) => {
      if (item.image?.url?.length > 0)
        onlyCatsWithPhotos.push(item)
    })

    callback(onlyCatsWithPhotos);

  } catch (error) {
    console.warn('Error on getCatsList', error)
  }
}

export const postCatVote = async (value: number, cat: ICatItem) => {
  try {

    let body = {
      image_id: cat.image.id,
      value: value < 0 ? 0 : 1
    };

    await requester(catServices.catVote, body);

  } catch (error) {
    console.warn('Error on post cat vote', error)
  }
}