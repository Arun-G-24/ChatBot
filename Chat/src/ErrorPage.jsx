import React from 'react'
import image from './assets/404.jpg'
function ErrorPage() {
  return (
   <div
  style={{ '--image-url': `url(${image})` }}
  className="bg-[image:var(--image-url)]  bg-cover bg-center h-157 w-full"
>
</div>
  )
}

export default ErrorPage
