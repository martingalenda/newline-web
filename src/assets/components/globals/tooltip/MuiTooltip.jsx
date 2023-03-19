import { Tooltip } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import HistoryIcon from '@mui/icons-material/History';
import ExpandIcon from '@mui/icons-material/Expand';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BoltIcon from '@mui/icons-material/Bolt';

const MuiTooltip = ({tData, children}) => {

    // ? Estilos
    const tooltipContainer = {
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        padding: '0.6em',
        borderRadius: '3%',
        fontSize: '1.2em',
        marginRight: '6em',
    }
    const tooltipIcon = {
        height: '3em',
        width: '3em',
        borderRadius: '100%',
        border: '0.1em solid #1c1c1c',
        marginRight: '1.5em'
    }
    const skillDetails = {
        display: 'flex',
        gap: '0.5em'
    }
    const mainDetail = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3em' 
    }

    let place;
    switch (true) {
        case tData[3] >= 7:
            place = 'top-end';
            break;
        case tData[3] >= 3:
            place = 'top';
            break;
        default:
            place = 'top-start';
            break;
    }


    // ? Tooltip component
    const toolTipElem = 
    <div style={tooltipContainer}>
      <img style={tooltipIcon} src={tData[1]} alt="icon skill" /> 
      <div>
        <div>
            <span>{tData[2]}</span>
        </div>
        <div style={skillDetails}>
            {
                tData[0].consumeMp !== "-" &&
                <div style={mainDetail}>
                    <OpacityIcon style={{color: '#2960ff', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].consumeMp}
                    </span>
                </div>
            }
            {
                tData[0].consumeHp !== "-" &&
                <div style={mainDetail}>
                    <LocalHospitalIcon style={{color: '#e63700', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].consumeHp}
                    </span>
                </div>
            }
            {
                tData[0].consumeEnergy !== "-" &&
                <div style={mainDetail}>
                    <BoltIcon style={{color: '#ecc349', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].consumeEnergy}
                    </span>
                </div>
            }
            {
                tData[0].cd !== "-" &&
                <div style={mainDetail}>
                    <HistoryIcon style={{color: '#FBFAF7', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].cd}
                    </span>
                </div>
            }
            {
                tData[0].range !== "-" &&     
                <div style={mainDetail}>
                    <ExpandIcon style={
                        {color: '#FBFAF7',transform: 'rotate(90deg)', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].range}
                    </span>
                </div>
            }
            {
                tData[0].duration !== "-" &&  
                <div style={mainDetail}>
                    <AccessAlarmIcon style={{color: '#FBFAF7', fontSize: '1.2em'}}/>
                    <span style={{color: 'rgba(251, 250, 247, 0.55)'}}>
                        {tData[0].duration}
                    </span>
                </div>
            }

        </div>
        <p style={{color: 'rgba(251, 250, 247, 0.55)', height: '2em'}}>{tData[0].description}</p>
      </div>
    </div>


    return(
        <Tooltip title={toolTipElem} placement={place}>
            {children}
        </Tooltip>
    )
}

export default MuiTooltip