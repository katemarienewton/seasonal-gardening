interface TestUser {
  name: string
  email: string
  picture?: string
}

interface TestAuth {
  isAuthenticated: boolean
  user: TestUser
  loginWithRedirect: () => void
  logout: () => void
}

export function useTestAuth(): TestAuth {
  return {
    isAuthenticated: true,
    user: {
      name: 'Dev User',
      email: 'dev@example.com',
      picture: 'https://via.placeholder.com/80',
    },
    loginWithRedirect: () => console.log('FakeAuth: redirected to login'),
    logout: () => console.log('FakeAuth: user logged out'),
  }
}
