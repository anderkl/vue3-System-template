import { CacheType } from '@/typings/types'

class Cache {
  private setStorageItem(key: string, value: any, storage: Storage) {
    storage.setItem(key, JSON.stringify(value))
  }

  private getStorageItem(key: string, storage: Storage): any | null {
    const value = storage.getItem(key)
    if (value) {
      try {
        return JSON.parse(value)
      } catch (error) {
        console.error('Error parsing cached value:', error)
      }
    }
    return null
  }

  setCache(key: string, value: any, type: CacheType) {
    switch (type) {
      case CacheType.Local:
        this.setStorageItem(key, value, window.localStorage)
        break
      case CacheType.Session:
        this.setStorageItem(key, value, window.sessionStorage)
        break
      case CacheType.Cookie: {
        const date = new Date()
        date.setTime(date.getTime() + 60 * 60 * 1000 * 24 * 30) // 三十天过期
        document.cookie = `${key}=${encodeURIComponent(
          JSON.stringify(value)
        )};expires=${date.toUTCString()};path=/`
        break
      }
    }
  }

  getCache(key: string, type: CacheType): any | null {
    switch (type) {
      case CacheType.Local:
        return this.getStorageItem(key, window.localStorage)
      case CacheType.Session:
        return this.getStorageItem(key, window.sessionStorage)
      case CacheType.Cookie: {
        const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`)
        const arr = document.cookie.match(reg)
        if (arr) {
          try {
            return JSON.parse(decodeURIComponent(arr[2]))
          } catch (error) {
            console.error('Error parsing cached cookie value:', error)
          }
        }
        return null
      }
    }
  }

  deleteCache(key: string, type: CacheType): void {
    switch (type) {
      case CacheType.Local:
        window.localStorage.removeItem(key)
        break
      case CacheType.Session:
        window.sessionStorage.removeItem(key)
        break
      case CacheType.Cookie:
        if (key) {
          const ex = new Date()
          ex.setTime(ex.getTime() - 1)
          document.cookie = `${key}=; expires=${ex.toUTCString()};path=/`
        }
        break
    }
  }
}

export default new Cache()
