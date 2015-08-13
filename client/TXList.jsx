/* jshint maxlen: false */

const TXActions = RefluxTX.TXActions;

TXList = React.createClass({
  testTx: function() {
    console.log('web3', web3);

    var hash = web3.eth.sendTransaction({ from: web3.eth.coinbase, to: web3.eth.coinbase, value: 1000 });
    console.log('hash', hash);
    TXActions.add({hash: hash, testData: 'testing'});

  },
  componentDidMount() {
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8084'));
  },
  render() {
    return (
      <span>
        <button onClick={this.testTx}>Test Transaction</button>
        <div>
          <h3>Props inherited by TXComponent</h3>
          <pre>
            {JSON.stringify(this.props, null, 4)}
          </pre>
        </div>
      </span>
    );
  }
});

