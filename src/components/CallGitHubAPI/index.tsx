import React, { useEffect, useState } from 'react'
import TheChainsawRevealer from '../ChainsawRevealer';
import Spinner from '../SpinningCenter';

interface githubInterface {
  login: string;
  name:string
}

// class App extends React.Component {
  // constructor(props:githubInterface) {
    // super(props);
// this.state={
  // login:props.login
// }





export default function CallGitHubAPI() {
  let [myusername,setMyusername] = useState(
    {
    name:'name',
    followers:0,

  })


  class githubDATA {
    login: string;
    name:string
    constructor(actualData:any) {
      this.login=actualData.login;
      this.name=actualData.name  
    }
  }
  
  useEffect(() => {
    fetch(`https://api.github.com/users/tomhughes87`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setMyusername(actualData))
      
      .catch((err) => {
          console.log(err.message);
        });
    }, []);
    



    if (myusername != null){
      console.log("username:",myusername.name)
      console.log("followers:",myusername.followers)

      // console.log(gitdata);
      
    }

  return (
    
//  <TheChainsawRevealer name={myusername.name}/> 
//     </>
{myusername}
    //   <p>username: {myusername.name} </p>
    // </div>
  
  )
  }
// email - followers-// following-// id-// location-// login--// name-// organizations_url-// public_gists-// public_repos
// https://www.youtube.com/watch?v=hzLDsxPGctY&ab_channel=FullstackDevelopment
  // https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified
  // https://rapidapi.com/blog/how-to-use-an-api-with-react/