const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream)
      video.src = window.URL.createObjectURL(localMediaStream)
      video.play()
    })
    .catch((err) => {
      console.log(`OH NO!!`, err)
    })
}

function painToCavas() {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height
  console.log(width, height)

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    //take the pixels out
    const pixels = ctx.getImageData(0, 0, width, height)
    // mess with them
    pixels = redEffect(pixels)

    pixels = rgbSplit(pixels)
    ctx.globalAlpha = 0.1
    // put them back
    ctx.putImageData(pixcels, 0, 0)
  }, 16)
}
painToCavas()

function takePhoto() {
  snap.currentTime = 0
  snap.play()

  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.href = datalink.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data}" alt="Handsome Man">`
  strip.insertBefore(link, strip.firstChild)
}

function redEffect(pixcels) {
  for (let i = 0; i < pixcels.data.length; i += 4) {
    pixcels.data[i + 0] = pixcels.data[i + 0] + 100 //red
    pixcels.data[i + 1] = pixcels.data[i + 1] - 50 //red
    pixcels.data[i + 2] = pixcels.data[i + 2] * 0.5 //red
  }
  return pixcels
}

function

getVideo()

video.addEventListener('canplay', painToCavas)
