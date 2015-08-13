const TXComponent = RefluxTX.TXComponent;

Meteor.startup(function() {
  React.render(
      <TXComponent >
        <TXList />
      </TXComponent>
     , document.getElementById("txs"));
});
