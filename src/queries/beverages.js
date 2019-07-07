let beveragesQuery = `
    query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
        poc(id: $id) {
            products(categoryId: $categoryId, search: $search) {
                productVariants{
                    title
                    description
                    imageUrl
                    price
                }
            }
        }
    }
`

export default {
    beveragesQuery
}