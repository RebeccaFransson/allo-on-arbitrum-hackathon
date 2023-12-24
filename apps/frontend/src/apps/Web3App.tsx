

type Props = {
    onGoToApp: () => void
}
export const Web3App = ({onGoToApp}: Props) => {
  return (
    <>
        <p>
          Web3App page
        </p>
        <button onClick={onGoToApp}>go to information</button>
        
    </>
  );
}