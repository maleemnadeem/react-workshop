import React from 'react'
import PropTypes from 'prop-types';

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
                    </tr>
                        <tr>
                            <strong><td>Defult Branch</td></strong>
                            <td>{repo.branch}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Language</strong>
                            </td>
                            <td>{repo.language}</td>
                        </tr>
                        <tr>
                            <td><strong>Last Update At</strong></td>
                            <td>{repo.update}</td>
                        </tr>
                        <tr>
                            <td><strong>License</strong></td>
                            <td>{repo.license ? repo.license : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td><strong>Stars</strong></td>
                            <td>{repo.star ? repo.star : '0'}</td>
                        </tr>
                        <tr>
                            <td><strong>Opem Issue</strong></td>
                            <td>{repo.issue ? repo.issue : '0'}</td>
                        </tr>
                        <tr>
                            <td><strong>Public</strong></td>
                            <td>{repo.isPublic ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <td><strong>URL</strong></td>
                            <td><a herf={repo.url}>{repo.url}</a></td>
                        </tr>

                </tbody>
            </table>
        </div>
    );

};

export default RepoCard;