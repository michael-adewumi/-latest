// src/stores/user.js
import { defineStore } from 'pinia'
import axios from '@/api/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('/users') // API endpoint
        this.users = res.data
      } catch (err) {
        this.error = err.message || 'Error fetching users'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
})
