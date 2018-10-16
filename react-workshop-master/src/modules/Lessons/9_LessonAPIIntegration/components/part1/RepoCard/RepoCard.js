import React from 'react'
import PropsType from 'prop-types'

const RepoCard = (repo)=>{

    return(
        <div>
            <h4><a href={repo.url} />{repo.name}</h4>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong> Description </strong>
                        </td>
                        <td>
                            {repo.description ? repo.description : 'N/A'}
                        </td>
                        <tr>
                            <strong><td>Defult Branch</td></strong>
                            <td>repo.branch</td>
                        </tr>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};