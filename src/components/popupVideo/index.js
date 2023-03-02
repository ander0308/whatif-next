import Image from "next/image"
import { StylePopupVideo} from "./styles"

import IconPlay from '@/assets/play.svg'

function PopupVideo() {
  return (
    <StylePopupVideo>
      <span>ASSISTA AO TRAILER</span>
      <button>
        <div>
          <Image
            src={IconPlay}
            alt="Icone de play"
          />
        </div>
      </button>
    </StylePopupVideo>
  )
}

export default PopupVideo
