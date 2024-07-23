import { Component } from "react";
import ResponsiveAppBar from "./Nav";
import { GrSearch } from "react-icons/gr";
//import DrawerAppBar from "./Nav";
import './CreateUser.css' 
import DataItem from "./DataItem";

const dataList = [
{
    id:1,
    imgUrl: "https://i.postimg.cc/GpNgGCQM/soil.png",
    title: "number 1"
},
{
    id:2,
    imgUrl: "https://i.postimg.cc/pV882Hn2/sprout.png",
    title: "number 2"
},
{
    id:3,
    imgUrl: "https://i.postimg.cc/wjWRWxnk/seed-1.png",
    title: "number 3"
},
{
    id:4,
    imgUrl: "https://i.postimg.cc/GpNgGCQM/soil.png",
    title: "number 4"
},
{
    id:5,
    imgUrl: "https://i.postimg.cc/GpNgGCQM/soil.png",
    title: "number 5"
},
{
    id:6,
    imgUrl: "https://i.postimg.cc/pV882Hn2/sprout.png",
    title: "number 6"
},
{
    id:7,
    imgUrl: "https://i.postimg.cc/wjWRWxnk/seed-1.png",
    title: "number 7"
},
{
    id:8,
    imgUrl: "https://i.postimg.cc/pV882Hn2/sprout.png",
    title: "number 8"
},
{
    id:9,
    imgUrl: "https://i.postimg.cc/wjWRWxnk/seed-1.png",
    title: "number 9"
}
]

export default class CreateUser extends Component {
    state = {
      searchInput: '',
      viewList: dataList,
    }

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    render() {
    const {viewList, searchInput} = this.state
    const searchResults = viewList.filter(eachUser =>
        eachUser.title.includes(searchInput.toLowerCase())
      )
    return(
        <div>
           <ResponsiveAppBar></ResponsiveAppBar>
           <div className="middle-detail-container">
             <div className="input-wrapper">
               <input id="data-fetch-input" type="search" value={searchInput} onChange={this.onChangeSearchInput} className="input-search" autoComplete="off" placeholder="Search for the data" />
               <GrSearch className="search-icon"/>
             </div>
            <h1> Sample heading </h1>
            <hr className="hr-line"/>
            {searchResults.length > 0 ? (<ul className="ul-lst">
               {searchResults.map(e => <DataItem key={e.id} details={e} />)}
            </ul>) : <p>Record Not Found</p>}
            </div>
        </div>
    )
}
}