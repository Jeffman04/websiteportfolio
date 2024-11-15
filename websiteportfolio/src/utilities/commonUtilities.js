import { Component } from "react";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Resume from "../pages/Resume/Resume";
import ContactMe from "../pages/ContactMe/ContactMe";

export const Total_Screens = [
    {
        screen_name: "Home",
        Component: Home,
    },
    {
        screen_name: "AboutMe",
        Component: AboutMe,
    },
    {
        screen_name: "Resume",
        Component: Resume,
    },
    {
        screen_name: "ContactMe",
        Component: ContactMe,
    }
];
export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1
    for( let i = 0; i < Total_Screens.length; i++){
        if(Total_Screens[i].screen_name === screen_name)return i;
    }
    return -1
};