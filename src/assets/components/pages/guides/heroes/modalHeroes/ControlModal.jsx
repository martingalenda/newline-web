// ? Icons:
    import CloseIcon from '@mui/icons-material/Close';
    import FingerprintIcon from '@mui/icons-material/Fingerprint';

const MHeroes = ({nextRace, close}) => {
  return (
    <div className="control__modal">
        <button className="next__race" onClick={() => nextRace()}>
          <FingerprintIcon className="race__icon"/>
        </button>
        <button className="close__modal" onClick={() => close()}>
          <CloseIcon className="close__icon"/>
        </button>
    </div>
  )
}

export default MHeroes