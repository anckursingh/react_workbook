import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import CounterPage from './CounterPage';
import CommentBox from './commentbox'
import App from './App'
import ApiFetch from './ApiFetch'
import AxiosExample from "./AxiosExample";
import LikeButton from './LikeButton'
import WeatherBand from "./WeatherBand";
class RouterCustom extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Router>
      <div>
        <nav>
            <table>
                <tbody>
                <tr>
                    <th><Link to="/">Counter for Ram Mandir</Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/CommentBox/">CommentBox</Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/App/">Dynamic Table</Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/ApiFetch/">API data fetch</Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/AxiosExample/">Axios Example </Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/LikeButton/">Like Button </Link></th>
                    <th>&nbsp;</th>
                    <th> <Link to="/WeatherBand/">Location  </Link></th>
            </tr>
            </tbody>
            </table>
          {/* <ul>
            <li>
              <Link to="/">Counter for Ram Mandir</Link>
            </li>
            <li>
              <Link to="/CommentBox/">CommentBox</Link>
            </li>
            <li>
              <Link to="/App/">Dynamic Table</Link>
            </li>
          </ul> */}
        </nav>

        <Route path="/" exact component={CounterPage} />
        <Route path="/CommentBox/" component={CommentBox} />
        <Route path="/App/" component={App} />
        <Route path="/ApiFetch" component={ApiFetch}/>
        <Route path="/AxiosExample" component={AxiosExample}/>
        <Route path="/LikeButton" component={LikeButton}/>
        <Route path="/WeatherBand" component={WeatherBand}/>
      </div>
    </Router>);
        }
    }
    export default RouterCustom
