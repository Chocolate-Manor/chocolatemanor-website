import ListGroup from "./components/ListGroup";

function App() {
  let items = ["A for Aletta", "Lone Star Ride"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Games"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
