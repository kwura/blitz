class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    let list = "";

    if (this.state.currency === "USD") {
      list = (
        <p>
          Bitcoin rate for {this.props.bpi.USD.description}:{" "}
          {this.props.bpi.USD.code} {this.props.bpi.USD.rate}
        </p>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <p>
          Bitcoin rate for {this.props.bpi.GBP.description}:{" "}
          {this.props.bpi.GBP.code} {this.props.bpi.GBP.rate}
        </p>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <p>
          Bitcoin rate for {this.props.bpi.EUR.description}:{" "}
          {this.props.bpi.EUR.code} {this.props.bpi.EUR.rate}
        </p>
      );
    }
    return (
      <div>
        <span>{list}</span>
        <br />
        <select onChange={e => this.setState({ currency: e.target.value })}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
