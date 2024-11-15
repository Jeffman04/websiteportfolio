import { Total_Screens } from "./commonUtilities";
import {Subject} from 'rxjs'

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe = ()=>{
        let ccontactMeScreen = document.getElementById("ContactMe")
        if( !ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({behavior:"smooth"})
    }
    scrollToHome = ()=>{
        let homeScreen = document.getElementById("Home")
        if( !homeScreen) return;
        homeScreen.scrollIntoView({behavior:"smooth"})
    }
    isElementInview = (elem, type) =>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementbottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementbottom >0;
        let completelyVisible = elementTop >= 0 && elementbottom <= window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisible;
            
            case "complete":
                return completelyVisible
                default:
                    return false
        }
    }

    checkCurrentScreenUnderViewport = (event) =>{
        if(!event || Object.keys(event).length < 1)
        return;
        for( let screen of Total_Screens){
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
            continue;

            let fullyVisible = this.isElementInview(screenFromDom, "complete");
            let partiallyVisible = this.isElementInview(screenFromDom, "partial")
        
            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}