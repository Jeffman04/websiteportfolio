import React from 'react'
import { Total_Screens } from '../utilities/commonUtilities'

export default function PorfolioContainer() {
  
    const mapAllScreens = () =>{
        return (
            Total_Screens.map((screen) =>(
               (screen.Component) ? < screen.Component screenName = {screen.screen_name}key={screen.screen_name}
               id ={screen.screen_name} />:<div key={screen.screen_name}></div>
            ))
        )

    }
    return(
        <div className='portfolio-container'>
            {mapAllScreens()}
        </div>
    )
    
}
