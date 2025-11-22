export function useTestAuth() {
  return {
    isAuthenticated: true,
    user: {
      name: "Dev User",
      email: "dev@example.com",
    },
    loginWithRedirect: () => console.log("You are in fake vegetable"),
    logout: () => console.log("Test successfully logged out")
  };
}