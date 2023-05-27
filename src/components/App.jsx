
import "./App.css";
import Navbar from "./Navbar/Navbar";
import User from "./User/User";
function App() {
  return (
    <>
        <Navbar/>
        <div className="users p-1">
            <User name = "Ali" surname = "Aghayev"/>
            <User name = "Emma" surname = "Abdullayeva"/>
            <User name = "Murad" surname = "Aliyev"/>
            <User name = "Anar" surname = "Qasimov"/>
        </div>
    </>
  )
}

export default App