const TXComponent = RefluxTX.TXComponent;
const provider = 'http://localhost:8084';

Meteor.startup(function() {

  React.render(
      <TXComponent >
        <TXList provider={provider}/>
      </TXComponent>
     , document.getElementById("txs"));
});
