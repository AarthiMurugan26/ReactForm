import React from "react";
import './App.css';
export const Table = ({data}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>PHONE NUMBER</th>
                    <th>EXPERINCED</th>
                    <th>GENDER</th>
                    <th>SKILL</th>
                </tr>
            </thead>
            <tbody>
                {data.map((tbld, index) => {
               return(     <tr key={index}>
                        <td>{tbld.name}</td>
                        <td>{tbld.email}</td>
                        <td>{tbld.password}</td>
                        <td>{tbld.phNumber}</td>
                        <td>{tbld.graduate? 'Yes' : 'No'}</td>
                        <td>{tbld.gender}</td>
                        <td>{tbld.skill}</td>
                    </tr>
               )
                })}
            </tbody>
        </table>
    )
}