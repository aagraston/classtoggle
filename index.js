'use strict'

const construct = function (classNameParam) {
  const className = classNameParam

  const off = (container) => {
    container.classList.toggle(className)
  }

  const on = (container) => {
    container.classList.toggle(className)
  }

  const toggle = (container) => {
    if (container.classList.contains(className)) {
      off(container)
    } else {
      on(container)
    }
  }

  return { toggle }
}

module.exports = {
  construct
}

