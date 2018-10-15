import React, {Component} from 'react';
import Name from './formcomponents/Name';
import GenderAndEducation from './formcomponents/GenderAndEducation';
import Country from './formcomponents/Country'
import Gender from './formcomponents/Gender'
import Countries from '/home/aleem/ReactRepo/react-workshop/react-workshop-master/src/util/countries'

class  PracticeUserData extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            education: ['Graduation','Post Grad'],
            countries: Countries,
            gender:['Male','Female'],
            selectEducation:[],
            selectGender:'',
            selectCountry:''

        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelection = this.handleOnSelection.bind(this);
        this.handleOnGenderSelection=this.handleOnGenderSelection.bind(this);
        this.handleCountriesSelect = this.handleCountriesSelect.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);

    };

    handleOnChange(event)
    {

        this.setState({ userName: event.target.value });

    }
    handleOnGenderSelection(event){
        console.log('radio');
        this.setState({ selectGender: event.target.value });
    }
    handleOnSelection(event){
        console.log(event.target.value);
        const newSelection = event.target.value;
        let newSelectionArray;
        if(this.state.selectEducation.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.education.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectEducation, newSelection];
        }
        this.setState({ selectEducation: newSelectionArray });
    }

    handleCountriesSelect(event){
        this.setState({ selectCountry: event.target.value });
    }
    handleFormSubmit(e){
        e.preventDefault();
        console.log(JSON.stringify(this.state.selectCountry));
        console.log(JSON.stringify(this.state.selectEducation));
        console.log(JSON.stringify(this.state.userName));
        console.log(JSON.stringify(this.state.selectGender));

    }

render() {

  return (
      <section className="lesson-practice-user-data info-panel">
        <h2>User Signup Form</h2>
        <form onSubmit={this.handleFormSubmit}>


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
                <Gender
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
            <fieldset>
                <Country
                    name={'Country'}
                    placeholder={'Select Country'}
                    controlFunc={this.handleCountriesSelect}
                    options={this.state.countries}
                    selectedOption={this.state.selectCountry} />
            </fieldset>
          <input type="submit" value="Sign Up" />
        </form>
      </section>
  );
}

}

export default PracticeUserData;
