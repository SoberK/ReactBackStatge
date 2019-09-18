/**
 *根据index删除数组中的对象
 *@Index 删除的index
 *@Arr 数组
 */
export const delectArrByIndex = (Index, Arr) => {
  Arr.splice(Index, 1)
  return Arr
}
/**
 * 删除数组中所有符合条件的对象
 *
 * @param {*} Key 符合对象的key
 * @param {*} Val 符合对象的值
 * @param {*} Arr 数组
 * @returns 数组
 */
export const delectArrByKey = (Key, Val, Arr) => {
  Arr.forEach((i, index) => {
    if (i[Key] === Val) {
      Arr.splice(index, 1)
    }
  })
  return Arr
}
/**
 * 判断是否为空 空返回true
 *
 * @param {*} val
 * @returns
 */
export const isEmpty = (val) => {
  if (val === null || val === undefined || val === '' || val === 'null' || val === 'undefined') {
    return true
  } else {
    return false
  }
}
/**
 * 从一个对相中获取已有的对象值
 * 支持额外添加值
 *
 * @param {*} val
 * @returns
 */
export const mapAssign = (target, source, other = {}) => {
  if (Object.keys(other).length > 0) { target = { ...target, ...other } }
  for (const k of Object.keys(target)) {
    if (source.hasOwnProperty(k)) {
      target[k] = source[k]
    }
  }
  return target
}
/**
 * 对象的空字符串都穿null
 * @param {*} obj 目标对象，arr为变成null的值的key
 * @returns obj 处理之后的对象
 */
export const Emptytonull = (obj, arr = []) => {
  for (const [k, v] of Object.entries(obj)) {
    if (v instanceof Object) {
      Emptytonull(v, arr)
    }
    if (arr.length > 0) {
      if (v === '' && arr.includes(k)) {
        obj[k] = null
      }
    } else {
      if (v === '') {
        obj[k] = null
      }
    }
  }
  return obj
}

export const debounce = (fn, timestap) => {
  let time = null
  return function() {
    clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(this, arguments)
    }, timestap)
  }
}
