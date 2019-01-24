import React from 'react';

export const ChatScreenView = () => (
    <div>
        <div className="media">
            <img className="mr-4 img-fluid rounded-circle img-adjust"  src="assets/imgs/user1.jpg" alt="profile-pic"/>
            <div className="media-body align-self-center">
                <div className="card bg bg-light">
                    <div className="card-body p-1">Hey!How are you?</div>
                </div>
                <div className="card  bg bg-light mt-2">
                    <div className="card-body p-1">What are you doing? <span className="ml-auto"><small>9:00pm <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </small></span></div>
                </div>
            </div>
        </div>
        <div className="media mt-5">
            <div className="ml-4 media-body align-self-center">
                <div className="card  bg bg-light">
                    <div className="card-body p-1">Hey!F9</div>
                </div>
                <div className="card  bg bg-light mt-2">
                    <div className="card-body p-1"> Nothing! busy in job <i className="fa fa-frown-o" aria-hidden="true"></i> &nbsp<span className="ml-auto"><small>9:00pm <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </small></span></div>

                </div>
                <div className="card bg bg-light mt-2">
                    <div className="card-body p-1">What about you?</div>
                </div>
                    
            </div>
            <img className="ml-4 img-fluid rounded-circle img-adjust"  src="assets/imgs/user2.jpg" alt="profile-pic"/>
        </div>
        <div className="media mt-5">
            <img className="mr-4 img-fluid rounded-circle img-adjust"  src="assets/imgs/user1.jpg" alt="profile-pic"/>
            <div className="media-body align-self-center">
                <div className="card  bg bg-light">
                    <div className="card-body p-1">Me too!F9.</div>
                </div>
                <div className="card  bg bg-light mt-2">
                    <div className="card-body p-1">Busy in concrts! <i className="fa fa-smile-o"></i> &nbsp<span className="ml-auto"><small>9:00pm <i className="fa fa-check" aria-hidden="true"></i>
                    </small></span></div>

                </div>
                    
            </div>
        </div>
    </div>
   
)