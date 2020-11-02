/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-04-13 16:43:18
 * @LastEditors: wujing
 * @LastEditTime: 2020-04-13 17:47:26
 */
/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}
export function changeClass(element,className){
  if (!element || !className) {
    return
  }
  // element.className = ''
  // var classString = '' + className
  element.className = className
}