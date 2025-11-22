export function useTestAuth() {
  return {
    isAuthenticated: true,
    user: {
      id: 'jackfruit123',
      name: 'We Want Fruits',
      email: 'wheredafruits@test.com',
    },
  }
  ;() => Promise.resolve()
}
