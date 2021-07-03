import React, { useState, useEffect } from 'react'
import "./Form.css";

//get data from localstorage

const getlocaldata = () => {
    let data = localStorage.getItem('forms');

    if (data) {
        return JSON.parse(localStorage.getItem('forms'));
    }
    else {
        return [];
    }
}

const Form = () => {

    const [Userregister, setUserregister] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""
    });

    const [records, setrecords] = useState(getlocaldata());

    const handleinput = (e) => {

        const data = e.target.name;
        const val = e.target.value;
        console.log(data, val);

        setUserregister({ ...Userregister, [data]: val })
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        const newrecord = { ...Userregister };

        setrecords([...records, newrecord]);
        console.log(records);
        setUserregister({ username: "", email: "", mobile: "", password: "" });
    }




    //Add to local storage

    useEffect(() => {

        localStorage.setItem('forms', JSON.stringify(records));
    }, [records]);


    return (
        <div>
            <div className="frm">
                <form action="" onSubmit={handlesubmit} className="fo">
                    <div className="inp">
                        <label>Name</label>
                        <input type="text" autoComplete="off" onChange={handleinput} value={Userregister.username} name="username" id="username"></input>
                    </div>

                    <div className="inp">
                        <label>Email</label>
                        <input type="email" autoComplete="off" onChange={handleinput} value={Userregister.email} name="email" id="email"></input>
                    </div>

                    <div className="inp">
                        <label>Mobile No.</label>
                        <input type="text" autoComplete="off" onChange={handleinput} value={Userregister.mobile} name="mobile" id="mobile"></input>
                    </div>

                    <div className="inp">
                        <label>Password</label>
                        <input type="password" autoComplete="off" onChange={handleinput} value={Userregister.password} name="password" id="password"></input>
                    </div>

                    <button className="btn" type="submit">Register</button>
                </form>
            </div>
            {/* {
                records.map((curele) => {
                    return (
                        <div>
                            <p>{curele.username}</p>
                            <p>{curele.email}</p>
                            <p>{curele.mobile}</p>
                            <p>{curele.password}</p>
                            <br></br>
                        </div>
                    )
                })
            } */}
        </div >
    )
}

export default Form;