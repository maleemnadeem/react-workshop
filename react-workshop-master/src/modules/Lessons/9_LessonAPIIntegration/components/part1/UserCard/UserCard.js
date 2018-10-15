import React from 'react'
import PropsType from 'prop-types'

const UserCard = ({userDate}) =>{
    return(
        <div>
            <img src={userDate.path} alter="No Pic Available" width="100" />
            <table>
                <tr>
                    <td><strong>Login</strong></td>
                    <td>{userData.login}</td>
                </tr>
                 <tr>
                    <td><strong>URL</strong></td>
                    <td><a href={userData.url}/>{userData.login}</td>
                 </tr>
                <tr>
                    <td><strong>Type</strong></td>
                    <td>{userData.type}{userData.site_admin && <strong> / Admin</strong>}</td>
                </tr>

            </table>
            <button>View Repositories</button>
        </div>
    );

};