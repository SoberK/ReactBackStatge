import moment from 'moment'

/**
 *  格式化时间 YY-MM-DD
 *
 * @param {*} date
 * @returns
 */
export const momentYMD = (date) => {
  const formdate = moment(date).format('YYYY-MM-DD')
  return formdate
}
/**
 * 格式化时间 YY-MM-DD HH:MM
 *
 * @param {*} date
 * @returns
 */
export const momentYMDHM = (date) => {
  const formdate = moment(date).format('YYYY-MM-DD HH:mm')
  return formdate
}

export const momentYMDHMSS = (date) => {
  const formdate = moment(date).format('YYYY-MM-DD HH:mm:ss')
  return formdate
}


export const momentYMDHMEND = (date) => {
  const formdate = moment(date).format('YYYY-MM-DD 23:59')
  return formdate
}
export const momentHM = (date) => {
  // const formdate = moment(date).format('HH:mm')
  const formdate = date.substr(0, 5)
  return formdate
}

export const getCurrentMonthLast = () => {
  var date = new Date()
  var currentMonth = date.getMonth()
  var nextMonth = ++currentMonth
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
  var oneDay = 1000 * 60 * 60 * 24
  var lastTime = new Date(nextMonthFirstDay - oneDay)
  var month = parseInt(lastTime.getMonth() + 1)
  var day = lastTime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }

  return date.getFullYear() + '-' + month + '-' + day
}

export const getCurrentMonthFirst = () => {
  var date = new Date()
  date.setDate(1)
  var month = parseInt(date.getMonth() + 1)
  var day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day
}
