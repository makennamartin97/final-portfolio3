import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import wp from './projpics/login.png';
import wp2 from './projpics/main.png';
import wp3 from './projpics/all2.png';
import wp4 from './projpics/finaldetails.png';
import wp5 from './projpics/add.png';
import c1 from './projpics/crudmain.png';
import c2 from './projpics/crudmain2.png';
import c3 from './projpics/crudall.png';
import c4 from './projpics/cruddetail.png';
import c5 from './projpics/crudadd.png';
import p1 from './projpics/pet1.png';
import p2 from './projpics/pet2.png';
import p3 from './projpics/pet3.png';
import p4 from './projpics/pet4.png';
import q from './projpics/q.png';
import q2 from './projpics/q2.png';
import a1 from './projpics/py.png';
import a2 from './projpics/js.png';
import a3 from'./projpics/csharpicon.png';
import a4 from './projpics/csharp.png';
import a5 from './projpics/nodejs.png';
import a6 from './projpics/django2.png';
import a7 from './projpics/flask.png';
import a8 from './projpics/expressjs.png';
import a9 from './projpics/logo192.png';
import a10 from './projpics/mongodb.png';
import a11 from './projpics/mysql.png';
import a12 from './projpics/html2.png';
import a13 from './projpics/css3.png';
import a14 from './projpics/bootstrap.png';
import a15 from './projpics/dojo-icon.png';
import a16 from './projpics/git3.png';
import a17 from './projpics/m8.png';
import jk1 from './projpics/jk1.png';
import jk2 from './projpics/jk2.png';
import jk3 from './projpics/jk3.png';



export default () => {
    const exampleTheme = {
        text: '#white',
        grade4: '#9be9a8',
        grade3: '#9be9a8',
        grade2: '#40c463',
        grade1: '#40c463',
        grade0: '#16161d'
      };

    return(
        <div>
            <div className="main" id="top">
                <div className="container">
                </div>
            </div>
            <div class="container supporting ">
                <img src={a1} alt="pic" />
                <img src={a2} alt="pic" />
                <img src={a3} alt="pic" />
                <img src={a4} alt="pic" />
                <img src={a5} alt="pic" />
                <img src={a6} alt="pic" />
                <img src={a7} alt="pic" />
                <img src={a8} alt="pic" />
                <img src={a9} alt="pic" />
                <img src={a10} alt="pic" />
                <img src={a11} alt="pic" />
                <img src={a12} alt="pic" />
                <img src={a13} alt="pic" />
                <img src={a14} alt="pic" />
            </div>
            <div className="rating">
                <div className="container">
                    <div className="col text-center">
                        <h2 classname="text-dark">Full Stack Software Developer</h2>
                        <h1 classname="text-light">Efficient in Python/Django, MERN, and C#/.Net</h1>
                    </div>
                    
                </div>

            </div>
            <div className="dojo bg-dark text-light" >
                <div className="container">
                    <div className="text-center">
                        <h2 >Coding Dojo Graduate</h2>
                        <img src={a15} />
                        <div className="mt-3">
                            <h1>Finished with a triple black belt (97% or higher on all 3 full-stack exams)</h1>
                            <h1>Accumulated 1200+ hours of intensive programming coursework </h1>
                        </div>
                    </div>
                </div>
                    
            </div>
            <div className="skills text-light">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-sm text-center">
                            <h2 className="lead text-dark"><u>Languages</u></h2>
                            <ul>
                                <h1>C#</h1>
                                <h1>Python</h1>
                                <h1>Javascript</h1>
                            </ul>
                        </div>
                        
                        <div class="col-sm text-center">
                            <h2 className="lead text-dark"><u>Backend</u></h2>
                                <ul>
                                    <h1>MongoDB</h1>
                                    <h1>MySQL</h1>
                                    <h1>Node.js</h1>

                                </ul>
                        </div>
                        
                        <div class="col-sm text-center">
                            <h2 className="lead text-dark"><u>Frameworks/Libraries</u></h2>
                                <ul>
                                    <h1>.Net Core</h1>
                                    <h1>Entity</h1>
                                    <h1>Django</h1>
                                    <h1>React</h1>
                                    <h1>Bootstrap</h1>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            

            <div class="github ">
                <div className="container">
                    <div className="text-center">
                        <h2 >Github Contributions</h2>
                        <img src={a16} />
                        <div className="mt-3" id="projects">
                            <a className="text-success m-3"  href="https://github.com/makennamartin97">https://github.com/makennamartin97</a>
                            <GitHubCalendar username="makennamartin97" fontSize={12} blockMargin={10} blockSize={12} theme={exampleTheme}/>
                        </div>
                    </div>
                </div>
                    
            </div>

            <div className="proj text-dark">
                <h2 className="text-center" >Projects</h2>
                <div class="container">
 
                <div className="row text-center">
                        <div class="col-sm text-center text-info">
                                <h2><u>crudelicious.com</u></h2>
                                <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators4" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={c1} alt="login"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={c2} alt="login"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={c3} alt="login"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={c4} alt="login"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={c5} alt="login"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="desc m-3">
                                    <ul>
                                        <li><h1>Web app created using C#, ASP.Net Core, and MySQL</h1></li>
                                        <li><h1>Allows users to upload and edit their favorite recipes/dishes and explore new ones</h1></li>
                                        <u><a className="text-info" href="https://github.com/makennamartin97/crudelicious.git" ><li><h1>Click here for Github code</h1></li></a></u>

                                    </ul>
                                    

                                </div>
                                

                        </div>

                    </div>
                    <div class="row text-center">

                        <div class="col-sm text-center text-dark wed ">
                            <h2 className="text-light lead"><u><em>Wedding Planner</em></u></h2>

                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={wp} alt="1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={wp2} alt="2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={wp3} alt="3"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={wp4} alt="4"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={wp5} alt="5"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="desc m-3">
                                <ul>
                                    <li><h1>Wedding planning website created using C#, ASP.Net Core, and MySQL</h1></li>
                                    <li><h1>Allows users to post, edit, and delete weddings along with the ability to RVSP and see who else is attending</h1></li>
                                    <u><a className="text-dark" href="https://github.com/makennamartin97/theweddingplanner.git" ><li><h1>Click here for Github code</h1></li></a></u>

                                </ul>
                            </div>
                            
                        </div>
                        
                        <div class="col-sm text-center text-light bg-info pet">
                            <h2 className="lead text-warning"><u>Pet Shelter</u></h2>
                            <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={p2} alt="1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={p1} alt="2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={p4} alt="3"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={p3} alt="4"/>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="desc m-3">
                                <ul>
                                    <li><h1>Pet shelter website created using the MERN stack (MongoDB, Entity, React, and Node.js)</h1></li>
                                    <li><h1>Visitors can post, edit, and adopt pets</h1></li>
                                    <u><a className="text-warning" href="https://github.com/makennamartin97/pet-shelter.git" ><li><h1>Click here for Github code</h1></li></a></u>

                                </ul>
                            </div>

                        </div>
                        <div class="col-sm text-center bg-dark quotes">
                            <h2 className="lead"><u>Show Planner</u></h2>

                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={jk1} alt="1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={jk2} alt="2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={jk3} alt="3"/>
                                    </div>
 
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="desc m-3">
                                    <ul>
                                        <li><h1>Login/Registration website created using C#, ASP.Net Core, and MySQL</h1></li>
                                        <li><h1>Users must register/log in to post, edit, and rsvp to shows and festivals. Users can also see which friends are going to the event.</h1></li>

                                    </ul>
                                    

                                </div>

                        </div>
                    </div>
                    
               

                </div>
            </div>
            <div className="rating" id="contact">
                <div className="container">
                    <div className="col text-center m-2">
                        <h2 className="text-dark">If you have any questions feel free to contact me!</h2>
                        <h1>Email: makennamartin97@yahoo.com</h1>
                        <h1>Phone: (619)599-5800</h1>
                    </div>
                    
                </div>

            </div>
        

        </div>

    )

}
