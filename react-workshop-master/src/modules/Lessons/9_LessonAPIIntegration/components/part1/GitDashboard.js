import React, {Component, Fragment} from 'react';
import ReactLoader from 'react-loading';
import axios from 'axios';
import ErrorMessage from './ErrorMessage/ErrorMessage'
import UserCard from './UserCard/UserCard'
import SearchBox from './SearchBox/SearchBox'


class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
        isLoading:true,
        errorLoading:false,
        searchQuery:'',
    };
    this.loadData=this.loadData.bind(this);
    this.onQueryTextChange=this.onQueryTextChange.bind(this);
  }
    componentWillMount() {
        this.loadData();
    }

  loadData(){
    axios.get('https://api.github.com/users')
        .then(({data})=>{
          this.setState(
              {
                  isLoading:!this.state.isLoading,
                  data,
              }
          );
        }).catch(response => {
          console.log('Data is not loading',response) ;
          this.setState({
              isLoading:!this.state.isLoading,
              errorLoading:response,
          });
        }

    );
  }

  onQueryTextChange(event){
        this.setState(
            {
                searchQuery:event.target.value,
            }
        );
  }

  render() {
      const { isLoading, errorLoading, data ,searchQuery} = this.state;
    return (
        <div>
          <h4>Git Dashboard</h4>
          {
             isLoading && <ReactLoader color="#000000" type="spin" className="loader" />
          }
          {
             errorLoading && <ErrorMessage error={errorLoading}/>
          }
          {
              !isLoading && !errorLoading &&
              (
                  <Fragment>
                    <SearchBox isQuery={searchQuery} onChangeText={this.onQueryTextChange}/>
                      {
                          searchQuery && data.filter((user) => user.login.indexOf(searchQuery)> -1)
                              .map((user) => <UserCard key={user.id} user={user}/>)
                      }
                      {
                          !searchQuery && data.map((user) => <UserCard key={user.id} user={user}/>)
                      }
                  </Fragment>
              )

          }


      </div>
    );
  }
}

export default GitDashboard;