import { gql } from "@apollo/client";

export const AllData = gql`
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
`;

export const Category = gql`
  query MyQuery($category: Int) {
    data_categories(where: { masterCatId: { _eq: $category } }) {
      active
      id
      masterCatId
      name
    }
  }
`;

export const subCategory = gql`
  query subcategory($subcategory: Int) {
    data_sub_categories(where: { category_id: { _eq: $subcategory } }) {
      id
      name
      price
      rating
      review
      time
    }
  }
`;
