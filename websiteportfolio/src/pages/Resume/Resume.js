import React, { useEffect, useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {

 /* STATES */
 const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
 const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

 let fadeInScreenHandler = (screen) => {
   if (screen.fadeInScreen !== props.id) return;

   Animations.animations.fadeInScreen(props.id);
 };
 const fadeInSubscription =
   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

 /* REUSABLE MINOR COMPONENTS */
 const ResumeHeading = (props) => {
   return (
     <div className="resume-heading">
       <div className="resume-main-heading">
         <div className="heading-bullet"></div>
         <span>{props.heading ? props.heading : ""}</span>
         {props.fromDate && props.toDate ? (
           <div className="heading-date">
             {props.fromDate + "-" + props.toDate}
           </div>
         ) : (
           <div></div>
         )}
       </div>
       <div className="resume-sub-heading">
         <span>{props.subHeading ? props.subHeading : ""}</span>
       </div>
       <div className="resume-heading-description">
         <span>{props.description ? props.description : ""}</span>
       </div>
     </div>
   );
 };

 /* STATIC RESUME DATA FOR THE LABELS*/
 const resumeBullets = [
   { label: "Education", logoSrc: "education.svg" },
   { label: "Work History", logoSrc: "work-history.svg" },
   { label: "Programming Skills", logoSrc: "programming-skills.svg" },
   { label: "Projects", logoSrc: "projects.svg" },
   { label: "Interests", logoSrc: "interests.svg" },
 ];

 //here we have
 const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 75},
    {skill: "React JS", ratingPercentage: 80},
    {skill: "Node JS", ratingPercentage: 65},
    {skill: "HTML", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 85},
    {skill: "Python", ratingPercentage: 75},
    {skill: "C#", ratingPercentage: 70},
    {skill: "MYSQL", ratingPercentage: 75},
 ];

 const projectsDetails = [
   {
     title: "Personal Portfolio Website",
     duration: { fromDate: "2023", toDate: "2024" },
     description:
       "A Personal Portfolio website to showcase all my details and projects at one place.",
     subHeading: "Technologies Used: React JS, Bootsrap",
   },
   {
     title: "SurveyTaker Website",
        duration: {fromDate: "2023", toDate:"2024"},
        description: "a simple website for taking a survey and storing the data in the database for future reference",
        subHeading: "Technologies Used: React JS, MySQL",
    },
    {
        title: "WordChecker", 
        duration: {fromDate: "2023", toDate:"2023"},
        description: "A simple website for checking the given word or each word in a setence what part of speech it is",
        subHeading: "Technologies Used: Python, txt document",
    },
 ];

 const resumeDetails = [
   <div className="resume-screen-container" key="education">
     <ResumeHeading
       heading={"University of Johannesburg"}
       subHeading={"DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY"}
       fromDate={"2021"}
       toDate={"2023"}
     />

     <ResumeHeading
       heading={"Nndweleni Secondary"}
       subHeading={"NATIONAL SENIOR CERTIFICATE"}
       fromDate={"2015"}
       toDate={"2019"}
     />
     
   </div>,

   /* WORK EXPERIENCE */
   <div className="resume-screen-container" key="work-experience">
     <div className="experience-container">
       <ResumeHeading
         heading={"State Information Technology Agency"}
         subHeading={"SOFTWARE DEVELOPER INTERN"}
          fromDate ={"2024"}
          toDate ={"present"}
       />
       <div className="experience-description">
         <span className="resume-description-text">
         Currently working as a Software developer
         </span>
       </div>
       <div className="experience-description">
         <span className="resume-description-text">
         - maintained the website for client for managing their
            data, authorising users, uploading documents etc. .
         </span>
         <br />
         <span className="resume-description-text">
         - Cleaning, recoverind, and export data from the MySQL database for migrating to the new system.{" "}
         </span>
         <br />
         <span className="resume-description-text">
           - Integrate the web with the server and exchange for emails.
         </span>
         <br />
       </div>
     </div>
   </div>,

   /* PROGRAMMING SKILLS */
   <div
     className="resume-screen-container programming-skills-container"
     key="programming-skills"
   >
     {programmingSkillsDetails.map((skill, index) => (
       <div className="skill-parent" key={index}>
         <div className="heading-bullet"></div>
         <span>{skill.skill}</span>
         <div className="skill-percentage">
           <div
             style={{ width: skill.ratingPercentage + "%" }}
             className="active-percentage"
           ></div>
         </div>
       </div>
     ))}
   </div>,

   /* PROJECTS */
   <div className="resume-screen-container" key="projects">
     {projectsDetails.map((projectsDetails, index) => (
       <ResumeHeading
         key={index}
         heading={projectsDetails.title}
         subHeading={projectsDetails.subHeading}
         description={projectsDetails.description}
         fromDate={projectsDetails.duration.fromDate}
         toDate={projectsDetails.duration.toDate}
       />
     ))}
   </div>,

   /* Interests */
   <div className="resume-screen-container" key="interests">
     <ResumeHeading
       heading="Teaching"
       description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know especially maths, simply because i believe in sharing."
     />
     <ResumeHeading
       heading="Music"
       description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
     />
     <ResumeHeading
       heading="Competitive Gaming"
       description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
     />
   </div>,
 ];

 const handleCarousal = (index) => {
   let offsetHeight = 360;

   let newCarousalOffset = {
     style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
   };

   setCarousalOffsetStyle(newCarousalOffset);
   setSelectedBulletIndex(index);
 };

 const getBullets = () => {
   return resumeBullets.map((bullet, index) => (
     <div
       onClick={() => handleCarousal(index)}
       className={
         index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
       }
       key={index}
     >
       <img
         className="bullet-logo"
         src={require(`../../assets/Resume/${bullet.logoSrc}`)}
         alt="B"
       />
       <span className="bullet-label">{bullet.label}</span>
     </div>
   ));
 };

 const getResumeScreens = () => {
   return (
     <div
       style={carousalOffsetStyle.style}
       className="resume-details-carousal"
     >
       {resumeDetails.map((ResumeDetail) => ResumeDetail)}
     </div>
   );
 };

 useEffect(() => {
   return () => {
     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
     fadeInSubscription.unsubscribe();
   };
 }, [fadeInSubscription]);

 return (
   <div
     className="resume-container screen-container fade-in"
     id={props.id || ""}
   >
     <div className="resume-content">
       <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
       <div className="resume-card">
         <div className="resume-bullets">
           <div className="bullet-container">
             <div className="bullet-icons"></div>
             <div className="bullets">{getBullets()}</div>
           </div>
         </div>

         <div className="resume-bullet-details">{getResumeScreens()}</div>
       </div>
     </div>
   </div>
 );

}









//     const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
//     const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

//     let fadeInScreenHandler = (screen) => {
//         if (screen.fadeScreen !== props.id) return;
//         Animations.animations.fadeInScreen(props.id);
//     };
//     const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


//     const ResumeHeading = (props) =>{
//         return(
//              <div className='resume-heading'>
//              <div className='resume-main-heading'>
//                  <div className='heading-bullet'></div>
//                      <span>{props.heading ? props.heading : ''}</span>
//                      {props.FromDate && props.toDate ? (
//                          <dov className='heading-date'>
//                              {props.FromDate + " _ " + props.toDate}
//                          </dov>
//                      ): (
//                      <div></div>
//                      )}
//                  <div className='resume-sub-heading'>
//                      <span>{props.subHeading ? props.subHeading : ""}</span>
//                  </div>
//                  <div className='resume-heading-description'>
//                      <span>{props.description ? props.description : ""}</span>
//                  </div>
//              </div>
//          </div>  
//         )      
//     }

//     const ResumeBullets =[
//         {label: "Education", logoSrc: "education.svg"},
//         {label: "Work History", logoSrc: "work-history.svg"},        
//         {label: "Programming Skills", logoSrc: "programming-skills.svg"},        
//         {label: "Projects", logoSrc: "projects.svg"},
//         {label: "Interests", logoSrc: "interests.svg"},
//     ];
//     const ProgrammingSkillDetails = [
//         {skill: "JavaScript", ratingPercentage: 75},
//         {skill: "React JS", ratingPercentage: 80},
//         {skill: "Node JS", ratingPercentage: 65},
//         {skill: "HTML", ratingPercentage: 85},
//         {skill: "CSS", ratingPercentage: 85},
//         {skill: "Python", ratingPercentage: 75},
//         {skill: "C#", ratingPercentage: 70},
//         {skill: "MYSQL", ratingPercentage: 75},
//     ];
//     const ProjectDetails = [
//         {
//         title: "Personal Portfolio Website",
//         duration: {FromDate: "2023", toDate:"2024"},
//         Description: "a Personal Portfolio website to showcase all my details and projects at one place",
//         subHeading: "Technologies Used: React JS, Bootstrap",
//         },
//         {
//         title: "SurveyTaker Website",
//         duration: {FromDate: "2023", toDate:"2024"},
//         Description: "a simple website for taking a survey and storing the data in the database for future reference",
//         subHeading: "Technologies Used: React JS, MySQL",
//         },
//         {
//         title: "WordChecker", 
//         duration: {FromDate: "2023", toDate:"2023"},
//         Description: "A simple website for checking the given word or each word in a setence what part of speech it is",
//         subHeading: "Technologies Used: Python, txt document",
//         }
//     ];
    
//     const ResumeDetails =[
//         <div className='resume-screen-container' key="education">
//             <ResumeHeading 
//             heading={"University Of Johannesburg"}
//             subHeading ={"DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY"}
//             FromDate ={"2021"}
//             toDate = {"2023"}/>
//             <ResumeHeading 
//             heading={"Nndweleni Secondary School"}
//             subHeading ={"NATIONAL SENIOR CERTIFICATE"}
//             FromDate ={"2015"}
//             toDate = {"2019"}/>
//             <ResumeHeading 
//             heading={"Nndweleni Secondary School"}
//             subHeading ={"NATIONAL SENIOR CERTIFICATE"}
//             FromDate ={"2015"}
//             toDate = {"2019"}/>
//         </div>,
//         <div className='resume-screen-container' key="work-experience">
//             <ResumeHeading
//             heading = {"State Information Technology Agency"}
//             subHeading = {"SOFTWARE DEVELOPER INTERN"}
//             FromDate ={"2024"}
//             toDate ={"present"}/>
//             <div className='experience-description'>
//                 <span className='resume-description-text'>
//                     Currently working as a Software developer 
//                 </span>
//             </div>
//             <div className='experience-description'>
//                 <span className='resume-description-text'>
//                    - maintained the website for client for managing their
//                     data, authorising users, uploading documents etc. .
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                    - Cleaning, recoverind, and export data from the MySQL database for migrating to the new system.
//                 </span>
//             </div>,
//             <div className='resume-screen-container programming-skills-container'
//             key="programming-skills">
//                 {ProgrammingSkillDetails.map((skill, index) =>(
//                     <div className='skill-parent' key={index}>
//                         <div className='heading-bullet'></div>
//                         <span>{skill.skill}</span>
//                         <div className='skill-percentage'>
//                             <div style={{width: skill.ratingPercentage + "%"}} 
//                             className='active-percentage'>

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>,
//             <div className='resume-screen-container' key="projects">
//                 {ProjectDetails.map((ProjectDetails, index) => (
//                     <ResumeHeading
//                     key ={index}
//                     heading = {ProjectDetails.title}
//                     subHeading = {ProjectDetails.subHeading}
//                     description = {ProjectDetails.Description}
//                     FromDate = {ProjectDetails.duration.FromDate}
//                     toDate = {ProjectDetails.duration.toDate}
//                     />
//                 ))}
//             </div>,
//             <div className='resume-screen-container' key="interests">
//                 <ResumeHeading
//                 heading = "Music"
//                 description = "Listening to smooth music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on "
//                 />
//                 <ResumeHeading
//                 heading = "Gaming"
//                 description = "I like to challange my reflexes a lot while competing in football and racing games, pushing the rank and having interactive gaming excites me the most. "
//                 />
//             </div>
//         </div>
//     ];

//     const handleCarousal = (index) =>{
//         let offsetHeight = 360;
//         let newCarousalOffset = {
//             style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
//         };
//         setCarousalOffSetStyle(newCarousalOffset);
//         setSelectedBulletIndex(index)
//     };
//     const getBulltes = () =>{
//         return ResumeBullets.map((bullet,index) => (
//             <div onClick={()=> handleCarousal(index)}
//             className={index === selectedBulletIndex ?  "bullet selected-bullet": "bullet"} key={index}>
//                 <img className='bullet-logo' src={require (`../../assets/Resume/${bullet.logoSrc}`)}
//                 alt='B'/>
//                 <span className='bullet-label'>{bullet.label}</span>
//             </div>
//         ))
//     }
//     const getResumeScreen = ()=>{
//         return(
//             <div style={carousalOffSetStyle.style}
//             className='resume-details-carousal'>
//                 {ResumeDetails.map((ResumeDetail) => ResumeDetail)}
//             </div>
//         )
//     }

//   return (
//     <div className='resume-container screen-container' id={props.id || ""}>
//         <div className='resume-content'>
//            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
//            <div className='resume-card'>
//                <div className='resume-bullets'>
//                    <div className='bullet-container'>
//                         <div className='bullet-icons'></div>
//                          <div className='bullets'>{getBulltes()}</div>
//                     </div>
//                 </div>
//                 <div className='resume-bullet-details'>{getResumeScreen()}</div>
//             </div>
//          </div>
//      </div>
//   )
//}
