import React, { Component } from 'react';
import { addTranslator } from '../Api';

class AddTranslatorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hourlyRate: '',
  //    status: '',
      creditCardNumber: ''
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state);
    
    const newTranslator = {
        name: this.state.name,
        hourlyRate: this.state.hourlyRate,
        creditCardNumber: this.state.creditCardNumber,
    };

    addTranslator(newTranslator).then((response)=>{
                    // Reset the form
    this.setState({
      name: '',
      hourlyRate: '',
   //   status: '',
      creditCardNumber: '',
      isModalOpen: false
      
    });
        this.props.addTranslatorCallback();
    });


  };

  render() {
    const { name, hourlyRate, creditCardNumber, isModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>Add Translator</button>
        {isModalOpen && (
          <div className='modal'>
            <div className='modal-content'>
              <h2>Add translator</h2>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label for='name'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label for='hourlyRate'>Hourly rate:</label>
                  <input
                    type='number'
                    name='hourlyRate'
                    value={hourlyRate}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label for='creditCardNumber'>Credit card number:</label>
                  <input
                    type='number'
                    name='creditCardNumber'
                    value={creditCardNumber}
                    onChange={this.handleChange}
                  />
                </div>
                <button type='submit'>Add</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddTranslatorModal;