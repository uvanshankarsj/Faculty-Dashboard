import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const New = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");
    const [papers, setPapers] = useState(0);
    const [publication, setPublication] = useState(0);
    const [citations, setCitations] = useState(0);
    const [projects, setProjects] = useState(0);
    const designationchoice = [
        "Professor",
        "Associate Professor",
        "Assistant Professor",
        "Adjunct Professor",
        "Adjunct Associate Professor",
        "Adjunct Assistant Professor",
        "Visiting Professor",
        "Visiting Associate Professor",
        "Visiting Assistant Professor",
        "Lecturer",
        "Adjunct Lecturer",
        "Visiting Lecturer",
        "Instructor",
        "Adjunct Instructor",
        "Visiting Instructor",
        "Teaching Assistant",
        "Teaching Fellow",
        "Research Professor",
        "Research Associate Professor",
        "Research Assistant Professor",
        "Research Instructor",
        "Research Associate",
        "Research Assistant",
        "Postdoctoral Researcher",
        "Graduate Student",
        "Undergraduate Student",
    ];
    const departmentchoice = ['CSE', 'ECE', 'EEE', 'MEE', 'AEE', 'CIE', 'CHE', 'ARE', 'AIE', 'CYB','MTH','PHY','HSS','MBA','CCE'];
    const handleSubmit = (e) => {
        e.preventDefault();
        const faculty = {
        name: name,
        email: email,
        password: password,
        department: department,
        designation: designation,
        phoneNumber: number,
        papers: papers,
        publications: publication,
        citations: citations,
        projects: projects
        };
        console.log(faculty);
        axios.post("http://localhost:6969/api/faculties", faculty,{
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            console.log(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        );
        setName("");
        setEmail("");
        setPassword("");
        setDepartment("");
        setDesignation("");
        setNumber("");
        setPapers(0);
        setPublication(0);
        setCitations(0);
        setProjects(0);
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="container">
                <Navbar />
                <p> Add New Faculty</p>
                <form>
                    <div>
                        <label>
                            Name: &nbsp;
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number: &nbsp;
                            <input
                                type="text"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:  &nbsp;
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: &nbsp;
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Department: &nbsp;
                            <select onChange={(e) => setDepartment(e.target.value)} >
                                <option> Select </option>
                                {departmentchoice.map((val) => (
                                    <option value={val}>{val}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Designation: &nbsp;
                            <select onChange={(e) => setDesignation(e.target.value)}>
                                <option> Select </option>
                                {designationchoice.map((val) => (
                                    <option value={val}>{val}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Papers: &nbsp;
                            <input
                                type="number"
                                value={papers}
                                onChange={(e) => setPapers(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Publication: &nbsp;
                            <input
                                type="number"
                                value={publication}
                                onChange={(e) => setPublication(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Citations: &nbsp;
                            <input
                                type="number"
                                value={citations}
                                onChange={(e) => setCitations(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Projects: &nbsp;
                            <input
                                type="number"
                                value={projects}
                                onChange={(e) => setProjects(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit}>Add Faculty</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default New;
