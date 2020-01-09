describe('<ListLayout />', () => {
  describe('initialize', () => {
    test.todo('`state.categories`, is initialized as an empty `CategoryList')
    test.todo('the initial window.location is `/restaurants`')
    test.todo('the `filters.openNow` filter is set to `false`')
    test.todo('the `filters.prices` filter is set to `null`')
    test.todo('the `filters.categories` filter is set to `all`')
  })
  describe('state', () => {
    test.todo('has a `pageTitle` that is `Restaurants`')
  })
  describe('handlers', () => {
    test.todo('`componentDidMount` calls `fetchCategories`')
    test.todo('`fetchRestaurantCategories`, updates state with `CategoryList`')
    test.todo('`filterLocal` is called as the `onSelect` for `filters.openNow`')
    test.todo('`filterLocal` is called as the `onSelect` for `filters.prices`')
    test.todo('`filterCategories` is called as the `onSelect` for `filters.categories`')
    test.todo('`loadMore` is called as the `onClick` for `Load More` button')
  })
  describe('styles', () => {
    test.todo('`margin-left` matches spec spec value of `64`')
    test.todo('`margin-top` matches spec spec value of `36`')
    test.todo('`margin-right` matches spec spec value of `64`')
  })
  describe('render', () => {
    test.todo('<PageHeader />')
    test.todo('<SubHeader />')
    test.todo('<FilterBar />')
    test.todo('<ListSection />')
  })
})