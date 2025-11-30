export interface UserProfile {
  id: string
  auth0_id: string
  display_name: string | null
  region_id: number | null
  isNew?: boolean
}

export interface UserProfileUpdate {
  display_name?: string
  region_id?: number
}
