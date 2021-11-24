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

export const AddService = gql`
  mutation AddService(
    $category_id: Int
    $name: String
    $price: Int
    $review: Int
    $rating: Int
    $time: Int
  ) {
    insert_data_sub_categories_one(
      object: {
        category_id: $category_id
        name: $name
        price: $price
        review: $review
        rating: $rating
        time: $time
      }
    ) {
      category_id
      name
      price
      rating
      review
      time
    }
  }
`;

export const REMOVE_TODO  = gql`
mutation deleteService($id: Int!) {
  delete_data_sub_categories_by_pk(id: $id){id}
}
`;
