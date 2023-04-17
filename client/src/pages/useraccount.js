import React from "react";
import "./useraccount.css";

function UserAccount(){

    return(
        <>
            <div>
                <p>User_name</p>
                <p>Email: user@mail.com</p>
                <p>Solved puzzles:</p>
                <div className="user-account-div">

                <a href="https://www.example.com">puzzle 1</a><br/>
                <a href="https://www.example.com">puzzle 2</a><br/>
                <a href="https://www.example.com">puzzle 3</a><br/>
                </div>
                <br></br>

                <p>Created puzzles:</p>
                <div className="user-account-div">

                <a href="https://www.example.com">puzzle 5 </a><br/>
                <a href="https://www.example.com">puzzle 12</a><br/>
                <a href="https://www.example.com">puzzle 23</a><br/>
                </div>
                <br></br>

                <button className="user-account-edit-button">Edit profile</button>

            </div>
        </>
    );
}

export default UserAccount;