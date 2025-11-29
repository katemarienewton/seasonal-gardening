import { useAuth0 } from '@auth0/auth0-react'

export function useAuthFetch() {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0()

  return async function authFetch(url: string, options: RequestInit = {}) {
    let token: string

    try {
      // Attempt to get the token silently
      token = await getAccessTokenSilently()
    } catch (err) {
      console.error('Auth0 token error:', err)

      // If token fails → redirect user to login
      await loginWithRedirect()
      throw err
    }

    // Perform the authenticated request
    const response = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response
  }
}
