let defaultcity = '贵港'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {
}
export default {
  city: defaultcity
}
