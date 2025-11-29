import { useAuth0 } from '@auth0/auth0-react'

export function useAuthFetch() {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0()

  return async function authFetch(url: string, options: RequestInit = {}) {
    try {
      // 1. Get a valid JWT from Auth0
      const token = await getAccessTokenSilently()

      // 2. Make the authenticated request
      const res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers ?? {}),
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      // 3. If backend returns errors, catch them
      if (!res.ok) {
        const message = await res.text()
        throw new Error(`API error ${res.status}: ${message}`)
      }

      return res
    } catch (err: any) {
      console.error('AuthFetch error:', err)

      // If token expired or missing, try logging in again
      if (err.error === 'login_required' || err.error === 'consent_required') {
        await loginWithRedirect()
      }

      throw err
    }
  }
}
