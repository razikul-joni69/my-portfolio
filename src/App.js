import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";


function App() {
    return (
        <div className="App">
            <header className="">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
