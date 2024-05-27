import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
function App() {
  return (
    <div>
      <Alert>My Alert</Alert>
      <Button onClick={()=> console.log('Clicked')} color="primary">Primary</Button>
    </div>
  );
}
export default App;
