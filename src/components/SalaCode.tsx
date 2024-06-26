import copyImg from '../assets/images/copy.svg';

import '../styles/sala-code.scss';

type SalaCodeProps = {
  code: string;
} 

export function SalaCode(props: SalaCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}