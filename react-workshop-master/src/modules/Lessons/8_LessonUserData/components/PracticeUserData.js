import React, {Component} from 'react';
import Name from './formcomponents/Name';
import GenderAndEducation from './formcomponents/GenderAndEducation';

class  PracticeUserData extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            education: ['Graduation','Post Grad'],
            countries: [],
            gender:['Male','Female'],
            selectEducation:[],
            selectGender:''

        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelection = this.handleOnSelection.bind(this);

    };

    handleOnChange(event)
    {
        this.setState({ userName: event.target.value });

    }
    handleOnSelection(event){
        const newSelection = event.target.value;
        let newSelectionArray;
        if(this.state.selectEducation.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.education.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectEducation, newSelection];
        }
        this.setState({ selectEducation: newSelectionArray });
    }
    handleOnGenderSelection(event){
        this.setState({ selectGender: event.target.value });
    }

render() {

  return (
      <section className="lesson-practice-user-data info-panel">
        <h2>User Signup Form</h2>
        <form>


          <fieldset>
              <Name
                  inputType={'text'}
                  title={'Name'}
                  name={'name'}
                  controlFunc={this.handleOnChange}
                  placeholder={'Enter you name'}
              />
          </fieldset>
            <fieldset>
                <GenderAndEducation
                    setName={'Gender'}
                    type={'radio'}
                    controlFunc={this.handleOnGenderSelection}
                    options={this.state.gender}
                    selectedOptions={this.state.selectGender} />
            </fieldset>
            <fieldset>
                <GenderAndEducation
                    setName={'Eduction'}
                    type={'checkbox'}
                    controlFunc={this.handleOnSelection}
                    options={this.state.education}
                    selectedOptions={this.state.selectEducation} />
            </fieldset>
          <input type="submit" value="Sign Up" />
        </form>
      </section>
  );
}

}

export default PracticeUserData;
