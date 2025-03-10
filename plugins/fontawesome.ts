import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong, faH } from '@fortawesome/free-solid-svg-icons' 
import { faHouse } from '@fortawesome/free-solid-svg-icons' 
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'  
import { faHammer } from '@fortawesome/free-solid-svg-icons'  
import { faBook } from '@fortawesome/free-solid-svg-icons'  
import { faGem } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowRightLong, faHouse, faCalendarDays, faHammer,faBook, faGem)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
