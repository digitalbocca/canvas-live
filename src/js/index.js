'use strict'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const posicao = {
  x: 10,
  y: 10
}

const desenharQuadrado = () => {
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#333'
  ctx.fillRect(posicao.x, posicao.y, 50, 50)

  window.requestAnimationFrame(desenharQuadrado)
}

const aumentarEixoY = () => {
  posicao.y = posicao.y + 10
}

const aumentarEixoX = () => {
  posicao.x = posicao.x + 10
}

const diminuirEixoY = () => {
  posicao.y = posicao.y - 10
}

const diminuirEixoX = () => {
  posicao.x = posicao.x - 10
}

window.onload = () => {
  window.requestAnimationFrame(desenharQuadrado)

  window.addEventListener('click', evt => {
    if (evt.target.id === 'btup') {
      diminuirEixoY()
    }

    if (evt.target.id === 'btdown') {
      aumentarEixoY()
    }

    if (evt.target.id === 'btleft') {
      diminuirEixoX()
    }

    if (evt.target.id === 'btright') {
      aumentarEixoX()
    }
  })

  window.addEventListener('keydown', evt => {
    const lower = key => key.toLowerCase()

    if (lower(evt.key) === 'arrowup' || lower(evt.key) === 'w') {
      diminuirEixoY()
    }

    if (lower(evt.key) === 'arrowdown' || lower(evt.key) === 's') {
      aumentarEixoY()
    }

    if (lower(evt.key) === 'arrowleft' || lower(evt.key) === 'a') {
      diminuirEixoX()
    }

    if (lower(evt.key) === 'arrowright' || lower(evt.key) === 'd') {
      aumentarEixoX()
    }
  })
}
