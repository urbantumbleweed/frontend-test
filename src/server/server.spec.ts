describe('server', () => {
  describe('initialize', () => {
    test.todo('spins up to listen on port 3002')
  })
  describe('endpoints', () => {
    test.todo('respond to valid requests on `/categories`')
    test.todo('respond to invalid requests on `/categories`')
    test.todo('respond to valid requests on `/search`')
    test.todo('respond to invalid requests on `/search`')
    test.todo('respond to valid requests on `/business/:id`')
    test.todo('respond to invalid requests on `/business/:id`')
  })
  describe('error handling', () => {
    test.todo('errors in response handling are reported to `Sentry`')
  })
})