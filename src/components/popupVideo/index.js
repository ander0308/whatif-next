import Image from "next/image"
import { StylePopupVideo} from "./styles"

import IconPlay from '@/assets/play.svg'

function PopupVideo({ label, thumb }) {
  return (
    <StylePopupVideo>
      <span>{label}</span>
      <button style={{background: `url(${thumb}) no-repeat center center`}}>
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
