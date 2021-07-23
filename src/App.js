import './App.css';
import {BiSearchAlt} from 'react-icons/bi';
import {Nav, Navbar, NavDropdown, Container,} from 'react-bootstrap';
import {useState} from 'react';
import Plot from 'react-plotly.js';



function App() {
  
  const clearData=
  {
      Date: '',
      TeachWB: '',
      StudentWB: '',
      Suspensions: '',
      TestScores:'',
      Expulsions: '',
      odr: ''
  };
 
  let [formData, setFormData]= useState(clearData);
  let [point, setPoint] =useState([]);

  let Dates = point.map((point) => point.Date);
  let TeachWBs = point.map((point) => point.TeachWB);
  let StudentWBs = point.map((point) => point.StudentWB);
  let suspensions = point.map((point) => point.Suspensions);
  let Testscores = point.map((point) => point.TestScores);
  let expulsions = point.map((point) => point.Expulsions);
  let oDr = point.map((point) => point.odr);
console.log(Dates);
console.log(TeachWBs);
console.log(StudentWBs);
console.log(suspensions);
console.log(Testscores);
console.log(expulsions);
console.log(oDr);

  const addPoint= () =>{
    setPoint([...point,{
      id: point.length,
      Date: formData.Date,
      TeachWB: formData.TeachWB,
      StudentWB: formData.StudentWB,
      Suspensions: formData.Suspensions,
      TestScores: formData.TestScores,
      Expulsions: formData.Expulsions,
      odr: formData.odr
    }])
    setFormData(clearData);
  }

  function ShowGraph() {
  
    return (<div>
              <div className="p-auto d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[TeachWBs[0], TeachWBs[1], TeachWBs[2], TeachWBs[3], TeachWBs[4], TeachWBs[5], TeachWBs[6],TeachWBs[7],TeachWBs[8],TeachWBs[9] ],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'blue'}
                  }
                ]}
                
                layout={{
                  width: 350,
                  height: 350,
                  title: 'Teacher Well Being over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Teacher Well-being'},
                  hovermode: 'closest'
                  
                  }}
                  />
              </div>
              <div className="p-auto d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[StudentWBs[0], StudentWBs[1], StudentWBs[2], StudentWBs[3], StudentWBs[4], StudentWBs[5], StudentWBs[6],StudentWBs[7],StudentWBs[8],StudentWBs[9] ],
                  }
                ]}
                layout={{width: 350,
                  height: 350,
                  title: 'Student Well Being over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Student Well-being'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
              <div className="p-auto  d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[Testscores[0], Testscores[1], Testscores[2], Testscores[3], Testscores[4], Testscores[5], Testscores[6],Testscores[7],Testscores[8],Testscores[9] ],
                  }
                ]}
                layout={{width: 350,
                  height: 350,
                  title: 'Effect on test scores over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Test Scores achieved'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
              <div className="p-auto d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[suspensions[0], suspensions[1], suspensions[2], suspensions[3], suspensions[4], suspensions[5], suspensions[6],suspensions[7],suspensions[8],suspensions[9] ],
                  }
                ]}
                layout={{width: 350,
                  height: 350,
                  title: 'Effect on suspensions over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Suspensions given'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
              <div className="p-auto d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[expulsions[0], expulsions[1], expulsions[2], expulsions[3], expulsions[4], expulsions[5], expulsions[6],expulsions[7],expulsions[8],expulsions[9] ],
                  }
                ]}
                layout={{width: 350,
                  height: 350,
                  title: 'Effect on expulsions over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Expulsions given'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
              <div className="p-auto d-inline-block">
                <Plot
                data={[
                  {
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[oDr[0], oDr[1], oDr[2], oDr[3], oDr[4], oDr[5], oDr[6],oDr[7],oDr[8],oDr[9] ],
                  }
                ]}
                layout={{width: 350,
                  height: 350,
                  title: 'Office disciplinary refferrals over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'ODR\'s given'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
              <div className=" d-inline-block">
                <Plot
                data={[
                  { name:'Student Well-being',
                    x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                    y:[StudentWBs[0], StudentWBs[1], StudentWBs[2], StudentWBs[3], StudentWBs[4], StudentWBs[5], StudentWBs[6],StudentWBs[7],StudentWBs[8],StudentWBs[9] ],
                    
                  },{type: 
                     'scatter', name:'Teacher Well-being',
                     x:[Dates[0], Dates[1], Dates[2],Dates[3],Dates[4],Dates[5],Dates[6], Dates[7], Dates[8], Dates[9]],
                     y:[TeachWBs[0], TeachWBs[1], TeachWBs[2], TeachWBs[3], TeachWBs[4], TeachWBs[5], TeachWBs[6],TeachWBs[7],TeachWBs[8],TeachWBs[9] ],

                }
                ]}
                layout={{width: 500,
                  height: 350,
                  title: 'Student Vs. Teacher well being over time',
                  xaxis:{title:'Days since program start'},
                  yaxis:{title:'Well-being'},
                  hovermode: 'closest'
                  }}/>
              
              </div>
           
            </div>
      );
}
  let[search , setSearch] = useState();
   
  
  
  



  return (
    <div className="background h-auto py-1 container-fluid w-100">
        <section className=" offset-md-3 board shadow-lg mx-0 my-3 px-0 py-0 pt-2">

        <div className="m-3 ml-5 logo">
          <a href="https://smhcollaborative.org">
            <img className="logo"  src="https://smhcollaborative.org/wp-content/uploads/2018/12/SMHC-logo.png" alt="random placeholder"></img>


          </a>
        </div>

       
        <br></br>
        <br></br>
        <br></br>
      
        <Navbar collapseOnSelect  expand ="lg" bg="light" variant="light">
          <Container className="col-lg-12 col-md-12 mr-5 w-100">
            <Navbar.Brand href="https://smhcollaborative.org/">Home</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="pull-right">
                <NavDropdown title="About Us" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="https://smhcollaborative.org/mission/">Mission</NavDropdown.Item>
                  <NavDropdown.Item href="https://smhcollaborative.org/co-directors-staff/">Co-Directors and Staff</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://smhcollaborative.org/conference_2021/">Conference</Nav.Link>
                <NavDropdown title="Evidence" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="https://smhcollaborative.org/publications/">Publications</NavDropdown.Item>
                  <NavDropdown.Item href="https://smhcollaborative.org/presentations/">Presentations</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://smhcollaborative.org/research/">Research Projects</Nav.Link>
                <Nav.Link href="https://smhcollaborative.org/request-technical-assistance/">Technical Assistance</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        

        <div id="instructions" className="w-100 p-3">
          <h1 className="text-center">How does it work?</h1>
          <p className="text-center">This tool takes in information about your school's performance data and charts it in multiple charts by time. Be sure to enter in the data points in the order of days that they were recordered or else they will plot out of order.</p>
          <ol>
            <li>
              First, you want to enter in the current date the data was acquired
            </li>
            <li>
              Then, enter in the assessment scores for teacher/student-wellbeing and along with the data of how many suspensions, expulsions and office discipline referrals were given out and lastly the score on student test scores

            </li>
            <li>Lastly, hit submit and then repeat the process for as up to separate data entries from the program starting you will see the created interactable graphs appear on the right side of the screen</li>
            </ol>
            <p className="text-center bg-warning">Upon leaving the site, all the data that was entered by the user disappears and is never saved for privacy concerns. This means that when the site is reloaded in any shape or form the data shown is lost and will not be retrievable by you or anyone else. It is advised to keep a note of your own data just in case you exit the site too early</p>
          
          <h1 className="text-center p-3">How can I obtain data from these graphs?</h1>
          <p>These graphs can be interacted with in multiple ways just with the mouse. On the top right of the graph interface, there are several functions you can perform.</p>
          <ol>You can:
            <li>click and drag on the graph to move around the axes with the coordinate graph icon</li>
            <li>select different pieces of data from the graph using the lasso or box select icons</li>
            <li>zoom in or out in the center or custom zoom with the magnifying glass icon</li>
            <li>take a screenshot of the graph's current viewing state with the camera icon</li>
            <li>show compared data or single pieces of data on hover with the two arrow icons</li>
            <li>reset the axes to normal with the house icon</li>
          </ol>
          <p>All the icons should also show what they do when hovered over with the mouse.</p>
          
          <h1 className="text-center">What is what?</h1>
          <p>On the website tool, you will find 7 fields in which you will be inputting data. The first field is reserved for amount of days has passed after the starting of the mental health program which will be the x-axis on most of the graphs.
            The other 6 fields are represented by a y-axis in the other data displays directly under the form that can be filled out. The submit button at the end of the data input form will graph the currently inputted data on all the graphs shown below. From there, you can interact with the charts in almost any way you like as described in the "How can I obtain data" section of this summary.
          </p>
        </div>
        
         <div className=" col-md-12 col-sm-12 col-lg-12 text-center d-inline-block">
         <div>
        <h3>Data input:</h3>
          
          <div className="form">
            <label htmlFor="date"> Days since beginning of program date:</label><br/>
            <input id="date" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, Date: event.target.value})}} value={formData.Date}></input>
            <br/>

            <label htmlFor="Tbeing">Teacher Well-Being:</label><br/>
            <input id="Tbeing" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, TeachWB: event.target.value})}} value={formData.TeachWB}></input>
            <br/>

            <label htmlFor="Sbeing">Student Well-Being:</label><br/>
            <input id="Sbeing" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, StudentWB: event.target.value})}} value={formData.StudentWB}></input>
            <br/>
            
            <label htmlFor="ts">Test Scores:</label><br/>
            <input id="ts" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, TestScores: event.target.value})}} value={formData.TestScores}></input>
            <br/>
            
            <label htmlFor="sus">Suspensions:</label><br/>
            <input id="sus" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, Suspensions: event.target.value})}} value={formData.Suspensions}></input>
            <br/>

            

            <label htmlFor="Exp"> Expulsions:</label><br/>
            <input id="Exp" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, Expulsions: event.target.value})}} value={formData.Expulsions}></input>
            <br/>

            <label htmlFor="odr">Office Discipline Referrals:</label><br/>
            <input id="odr" placeholder="0" type="number" onChange={(event)=>{setFormData({...formData, odr: event.target.value})}} value={formData.odr}></input>
            <br/>
            <br/>
            <input id="sub" type="submit" onClick={addPoint}></input>   
        </div>
    </div>
        </div>

        <div className=" col-sm-12 col-lg-12 col-md-12 d-inline-block">
          <h1 className="text-center">Dashboard Display</h1>
          <ShowGraph/>
        </div>
        
       
        
      
      <div className=" col d-inline-block">
          <h1 className="text-center mx-auto">Your Points:</h1>
          <h3>Here there is a chart of the points you have displayed in case you want to check your values</h3>
          <hr></hr>
          <ol>
            {point.map(point => (
                 <li key={point.id}>
                 <h5 >Point#: {point.id}</h5>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Days after program Start: {point.Date}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Teacher Well-Being: {point.TeachWB}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Student Well-Being: {point.StudentWB}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Suspensions: {point.Suspensions}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Test Scores: {point.TestScores}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">Expulsions: {point.Expulsions}</p>
                 <p className="col-lg-3 col-md-3 col-sm-12 d-inline-block">ODR: {point.odr}</p>
                 </li>
              ))
              }
          
          </ol>
        </div>

        <br></br>
        <br></br>
        

        <footer className="text-center footer bg-dark d-inline-block text-white pb-3 mt-3 w-100 h-100">
            copyright 2020
        </footer>
        


    

        </section>
    </div>
  );
}

export default App
