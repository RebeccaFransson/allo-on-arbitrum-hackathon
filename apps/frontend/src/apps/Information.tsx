
import { useRef } from 'react';

type Props = {
    onGoToApp: () => void
}
export const Information = ({onGoToApp}: Props) => {
  const box = useRef(null);

    const rotateElem = () => { 
            console.log(box.current)
        }
  return (
    < >
        <p className="text-pink-500 text-6xl">
          Information page
        </p>
        <button onClick={onGoToApp} className="text-green">web3 app</button>

        <div ref={box} onMouseOver={rotateElem} className="border">hej</div> 

        
    </>
  );
}