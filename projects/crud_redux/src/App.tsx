import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers";
import { UpdateUser } from "./components/UpdateUser";

function App() {
	return (
		<>
			<h1>Nuestro projecto con redux</h1>
			<ListOfUsers />
			<CreateNewUser />
			<UpdateUser />
			<Toaster richColors />
		</>
	);
}

export default App;
