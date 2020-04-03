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
}

window.onload = () => {
  document.querySelector('#bte').addEventListener('click', () => {
    posicao.x = posicao.x - 10
    desenharQuadrado()
  })

  document.querySelector('#btd').addEventListener('click', () => {
    posicao.x = posicao.x + 10
    desenharQuadrado()
  })

  desenharQuadrado()
}
