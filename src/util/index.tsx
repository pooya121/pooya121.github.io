export const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time))

const farsiChars = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toFarsi = (val: string | number) => val.toString().replace(/[0-9]/g, v => farsiChars[+v])
export const translateNumbers = (val: string | number, lang: string) => {
  // possible lang values are fa an en
  if (lang === 'fa') return toFarsi(val)
  return val.toString()
}
