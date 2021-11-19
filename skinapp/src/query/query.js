import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
query Data {
  data_master_categories {
    name
    active
    icon
    id
    categories {
      name
      active
      id
      masterCatId
      sub_categories {
        name
        category_id
        id
        price
        rating
        review
        time
      }
    }
  }
}

`