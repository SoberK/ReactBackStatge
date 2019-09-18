
/**
 *根据index删除数组中的对象
 *@Index 删除的index
 *@Arr 数组
 */
const delectArrByIndex = (Index, Arr) => {
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
const delectArrByKey = (Key, Val, Arr) => {
  Arr.forEach((i, index) => {
    if (i[Key] === Val) {
      Arr.splice(index, 1)
    }
  })
  return Arr
}

export default {
  delectArrByKey,
  delectArrByIndex
}
