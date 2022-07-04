import React from 'react';


const AutheticatedRoute =({ path , component }) =>{


    const {isAuthenticated} =useContext (Auth)

return isAuthenticated ? (

    <Route exact path = {path} component = {component}/>
) : (

    <Redirect to ="/login " />
)
}

export default AutheticatedRoute ;