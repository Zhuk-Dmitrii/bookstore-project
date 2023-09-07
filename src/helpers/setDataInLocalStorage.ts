export function setDataInLocalStorage (name: string, data: unknown) {
   localStorage.setItem(name, JSON.stringify(data))
}