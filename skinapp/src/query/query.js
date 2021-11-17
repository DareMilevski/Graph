import { gql } from "@apollo/client";
export const LAUNCHES_QUERY = gql`
{
    defaultItems {
      categories {
        active
        id
        name
        parent_id
        rdmValue
        parent_relationship {
          active
          id
          name
        }
      }
    }
  }
`