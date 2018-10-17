import React, {Component, Fragment} from 'react';
import ReactLoader from 'react-loading';
import axios from 'axios';
import ErrorMessage from './ErrorMessage/ErrorMessage';
//import UserCard from './UserCard/UserCard';
import SearchBox from './SearchBox/SearchBox';
import Card from './Card/Card';


class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
        isLoading:true,
        errorLoading:false,
        searchQuery:'',
        cardType:'',
    };
    this.loadData=this.loadData.bind(this);
    this.onQueryTextChange=this.onQueryTextChange.bind(this);
    this.loadRepo=this.loadRepo.bind(this);
  }
    componentWillMount() {
        this.loadData();
    }

  loadData(){
      this.setState({
          cardType: 'user',
      });
    axios.get('https://api.github.com/users')
        .then(({data})=>{
          this.setState(
              {
                  isLoading:!this.state.isLoading,
                  cardType:'user',
                  data,
              }
          );
        }).catch(response => {
          console.log('Data is not loading',response) ;
          this.setState({
              isLoading:!this.state.isLoading,
              cardType:'',
              errorLoading:response,
          });
        }

    );
  }

  loadRepo(repoUrl){
      this.setState(
          {
              isLoading: !this.state.isLoading,
              cardType:'repo',
          }
      );
      axios.get(repoUrl)
          .then(({data}) => {
              this.setState({
                  isLoading: !this.state.isLoading,
                  data,
              });
          })
          .catch(response => {
              console.error('Error while fetching Repos..', response);
              this.setState({
                  isLoading: !this.state.isLoading,
                  errorLoading: response,
              });
          });



  }

  onQueryTextChange(event){
        this.setState(
            {
                searchQuery:event.target.value,
            }
        );
  }

  render() {
      const { isLoading, errorLoading, data ,searchQuery,cardType} = this.state;
      const onClickHandler = cardType === 'user' ? this.loadRepo : null;
      const searchCriteria= cardType === 'user' ? 'login' : 'name';
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

                          searchQuery && data.filter((item) => item[searchCriteria].indexOf(searchQuery)> -1)
                              .map((item,index) => <Card key={index} data={item} cardType={cardType} onClick={onClickHandler}/>)
                      }
                      {
                          !searchQuery && data.map((item,index) => <Card key={index} data={item} cardType={cardType} onClick={onClickHandler}/>)
                      }
                  </Fragment>
              )

          }


      </div>
    );
  }
}

export default GitDashboard;