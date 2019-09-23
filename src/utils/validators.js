/**
 * 验证手机号和固定电话
 * @param date
 * @returns {boolean}
 */
export const verifyTel = (date) => {
  const phone = /0\d{2,3}-\d{7,8}/// 固话
  const mobile = /^1[23456789]\d{9}$/ // 手机
  if (phone.test(date) || mobile.test(date)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证身份证号码
 * @param date
 * @returns {boolean}
 */
export const verifyID = (date) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (reg.test(date)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证邮编
 * @param date
 * @returns {boolean}
 */
export const verifyostcode = (date) => {
  const reg = /^[1-9]\d{5}$/
  if (reg.test(date)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证护照
 * @param date
 * @returns {boolean}
 */
export const verifyPassport = (date) => {
  // const reg = /^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/
  const re1 = /^[a-zA-Z]{5,17}$/
  const re2 = /^[a-zA-Z0-9]{5,17}$/
  if (re1.test(date) || re2.test(date)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证整数
 * @param date
 * @returns {boolean}
 */
export const verifyInt = (date) => {
  const reg = /^(?:0|[1-9][0-9]?|100)$/ // 0-100
  // const reg = /^([1-9]\d|\d|-1)$/     1-99
  if (reg.test(date)) {
    return true
  } else {
    return false
  }
}/**
 * 验证正整数
 * @param date
 * @returns {boolean}
 */
export const verifyNum = (date) => {
  const reg = /^\+?[1-9][0-9]*$/
  if (reg.test(date)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证邮箱
 * @param date
 * @returns {boolean}
 */
// eslint-disable-next-line
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}
