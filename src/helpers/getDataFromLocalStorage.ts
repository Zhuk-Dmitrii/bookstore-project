export function getDataFromLocalStorage (name: string) {
   const data = JSON.parse(localStorage.getItem(name) as string)
   if (!data) return []
   return data
}