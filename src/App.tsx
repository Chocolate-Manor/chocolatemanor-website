import Alert from "./components/Alert";
import Button from "./components/Button";
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
      <Alert>
        what<span>now</span>
      </Alert>
      <Button
        color="link"
        onClick={() => console.log("clicked")}
      >
        what the heck dude
      </Button>
    </div>
  );
}

export default App;
