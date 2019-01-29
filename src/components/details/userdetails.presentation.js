import React from 'react';
import './userdetails.presentation.css';
import getFirtCharAsImage from './../shared/firstchardesign/firstCharDesign.presentation';
import firstCharUpperCase from './../../utils/firstCharCapital';
import {setContent} from './../../utils/jsonToArray';
import {convertToDate} from './../../utils/convertToDate';

export const UserDetailsView = ({applied,wexp,user,testScores,preferences,currentEducation,educations}) => (
    <div className="container border-shadow">
        <div className="row">
            <div className="card card-piece">
                <div className="text-center">
                    <div className="card-body">
                       {user.profilePicUrl!==null?
                          <img src={user.profilePicUrl} alt="profile-pic" className="pic-adjust rounded-circle"/>
                          :
                         <div className="center_div pb-4">
                             {getFirtCharAsImage(user.firstName)}
                         </div>
                       }
                        <h4 className="card-title heading-color">{firstCharUpperCase(user.firstName)} {user.lastName!=null?user.lastName:''}</h4>
                        {user.userType==='student'?
                          <span>
                            <p className="card-text para subheading-color">
                              {user.city!=null?user.city.charAt(0).toUpperCase()+user.city.slice(1):''}
                            </p>
                            <p className="card-text para subheading-color">
                              {user.country!=null?user.country.name.charAt(0).toUpperCase()+user.country.name.slice(1):''}
                            </p>
                          </span>
                          :
                          currentEducation!==null?
                            <span>
                                <p className="card-text para subheading-color">
                                 {currentEducation.course!==null?currentEducation.course:''} ({currentEducation.completionYear!==null?currentEducation.completionYear:''})</p>
                                <p className="card-text para subheading-color">{currentEducation.university!==null?currentEducation.university:''}</p>
                                <p className="card-text para subheading-color">{currentEducation.campus!==null?currentEducation.campus:''}, {currentEducation.country!==null?currentEducation.country:''}</p>
                            </span>
                            :
                            ''
                          }
                
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-center">
                    {user.userType==='mentor'?
                     <div className="row">
                        <h5 className="card-title col-6 text-left">Applied To</h5>
                        <h5 className="card-title col-6 text-right">Status</h5>    
                     </div>
                     :
                     <div className="row">
                       <h5 className="card-title col-6 text-left">Study Preferences</h5>
                       <h5 className="card-title col-6 text-right"> </h5>    
                     </div>
                    }
                    <hr className="horizontal-line-style" />
                    <div className="row">
                       {user.userType==='mentor'?
                          applied.length!==0?
                          applied.result.map((v,i)=>(
                            <div  key={i} className="col-12">
                              <p className="card-text para float-left subheading-color">{v.appliedUniversity}</p>
                              <p className="card-text para float-right subheading-color">
                                {v.appliedStatus?'Accepted':'Rejected'}
                              </p>
                              <div className="pt-3">
                                 <hr/>
                              </div>
                            </div>
                          ))
                         :
                         <div class="col-12">
                             <p className="card-text para float-left subheading-color">Applied University not provided!</p>
                         </div>
                         :
                         preferences.total!==0?
                         <div className="col-12 text-left">
                           <div>
                                <h6 className="card-substitle heading-color">Country</h6>
                                <p className="card-text subheading-color">{setContent(preferences.result[0].preferenceCountry)}</p>
                                <hr/>
                           </div>
                           <div>
                                <h6 className="card-substitle heading-color">Course Level</h6>
                                <p className="card-text para subheading-color">{preferences.result[0].courseLevel.toUpperCase()}</p>
                                <hr/>
                           </div>
                           <div>
                                <h6 className="card-substitle heading-color">Area of Study</h6>
                                <p className="card-text subheading-color">{setContent(preferences.result[0].specialization)}</p>
                                <hr/>
                           </div>
                           <div>
                                <h6 className="card-substitle heading-color">Departments</h6>
                                <p className="card-text subheading-color">{setContent(preferences.result[0].departments)}</p>
                                <hr/>
                           </div>
                         </div>
                         :
                         <div className="col-12">
                           <p className="card-text para float-left subheading-color">Study Preferences not provided!</p>
                         </div>
                       }
                     
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-left">
                    <h5 className="card-title">Education</h5>
                    <hr className="horizontal-line-style"/>
                    {educations.total!==0?
                    <div className="col-12 nopad">
                      {educations.result.map((l, i) => (
                        <div key={i}>
                            <h6 className="card-substitle heading-color">{l.level.charAt(0).toUpperCase()+l.level.slice(1)}</h6>
                            <p className="card-text subheading-color">
                              {l.level!=="12th"?
                              l.course!=null?l.course.charAt(0).toUpperCase()+l.course.slice(1):''
                              :l.board.charAt(0).toUpperCase()+l.board.slice(1)+' - '+ l.stream.charAt(0).toUpperCase()+l.stream.slice(1)+' ('+ l.completionYear+')'
                              }
                            </p>
                            <p className="card-text subheading-color">
                             {l.level!=="12th"?
                              `${l.university.charAt(0).toUpperCase()+l.university.slice(1)} (${l.completionYear})`
                              :''
                              }
                            </p>
                            <hr/>
                        </div>
                      ))}
                    </div>
                    :
                    <div className="col-12 ">
                      <p className="card-text para float-left subheading-color">Education Detail not provided!</p>
                    </div>
                    }
                   
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="card card-piece">
                <div className="card-body"> 
                    <h5 className="card-title">Tests Given</h5>
                    <hr className="horizontal-line-style"/>
                    <div className="row">
                    {testScores.total!==0?
                       testScores.result.map((l, i) => (
                        <div key={i} className="col-12">
                              <p className="card-text para float-left subheading-color">{l.name}</p>
                              <p className="card-text para float-right subheading-color">Yes</p>  
                               <div className="pt-3">
                                 <hr/>
                              </div>
                        </div>
                        ))
                        :
                        <div className="col-12">
                           <p className="card-text para float-left subheading-color">Test Details not provided!</p>
                         </div>
                    }
                    </div> 
                   
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-left">
                    <h5 className="card-title">Work Experience</h5>
                    <hr className="horizontal-line-style"/>
                    {wexp.total!==0?
                     wexp.result.map((l, i) => (
                        <div key={i}>
                            <h6 className="card-substitle heading-color"> {firstCharUpperCase(l.organization)}</h6>
                            <p className="card-text para subheading-color"> {firstCharUpperCase(l.designation)}</p>
                            <p className="card-text para subheading-color">{convertToDate(l.startDate)} to {convertToDate(l.endDate)}</p>
                            <hr/>
                        </div>  
                     ))
                    :
                    <div className="col-12 nopad">
                       <p className="card-text para float-left subheading-color">Work Experience not provided!</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    
    </div>
)
