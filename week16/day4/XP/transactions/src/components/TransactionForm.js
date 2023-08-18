import React, { Component } from 'react';
import { connect } from 'react-redux';
import { insertTransaction, updateTransaction } from '../actions/transactionActions';

class TransactionForm extends Component {
  state = {
    accountNumber: '',
    FSC: '',
    name: '',
    amount: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { accountNumber, FSC, name, amount } = this.state;
    const data = { accountNumber, FSC, name, amount };

    if (this.props.currentIndex === -1) {
      this.props.insertTransaction(data);
    } else {
      this.props.updateTransaction(this.props.currentIndex, data);
    }

    this.setState({ accountNumber: '', FSC: '', name: '', amount: '' });
  };

  render() {
    return (
      <div>
        <h2>Transaction Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={this.state.accountNumber}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="FSC"
            placeholder="FSC"
            value={this.state.FSC}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = {
  insertTransaction,
  updateTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
