import gsap from 'gsap'
import './style.css'

gsap.fromTo("#welcome", {
  translateY: 20
},
{
  translateY: 0,
  repeat: -1,
  duration: 0.25,
  yoyo: true
})
