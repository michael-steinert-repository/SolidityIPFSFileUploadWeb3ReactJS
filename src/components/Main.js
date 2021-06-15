import React, {Component} from 'react';
import {convertBytes} from './helpers';
import moment from 'moment';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 text-center">
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{maxWidth: '1024px'}}>
                        <div className="content">
                            <p>&nbsp;</p>
                            <div className="card mb-3 mx-auto bg-dark" style={{maxWidth: '512px'}}>
                                <h2 className="text-white text-monospace bg-dark">
                                    <ins>Share File</ins>
                                </h2>
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    const description = this.fileDescription.value;
                                    this.props.uploadFile(description);
                                }}>
                                    <div className="form-group">
                                        <br/>
                                        <input
                                            id="fileDescription"
                                            type="text"
                                            ref={(input) => {
                                                this.fileDescription = input
                                            }}
                                            className="form-control text-monospace"
                                            placeholder="File Description"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="file"
                                        onChange={this.props.captureFile}
                                        className="text-white text-monospace"
                                    />
                                    <button type="submit" className="btn-primary btn-block"><b>Upload File</b></button>
                                </form>
                            </div>
                            <p>&nbsp;</p>
                            <table className="table-sm table-bordered text-monospace"
                                   style={{width: '1000px', maxHeight: '450px'}}>
                                <thead style={{'fontSize': '15px'}}>
                                    <tr className="bg-dark text-white">
                                        <th scope="col" style={{width: '10px'}}>ID</th>
                                        <th scope="col" style={{width: '200px'}}>Name</th>
                                        <th scope="col" style={{width: '230px'}}>Description</th>
                                        <th scope="col" style={{width: '120px'}}>Type</th>
                                        <th scope="col" style={{width: '90px'}}>Size</th>
                                        <th scope="col" style={{width: '90px'}}>Date</th>
                                        <th scope="col" style={{width: '120px'}}>Uploader/ View</th>
                                        <th scope="col" style={{width: '120px'}}>Hash/ View/ Get</th>
                                    </tr>
                                </thead>
                                {this.props.files.map((file, key) => {
                                    return (
                                        <thead style={{'fontSize': '12px'}} key={key}>
                                            <tr>
                                                <td>{file.id}</td>
                                                <td>{file.fileName}</td>
                                                <td>{file.fileDescription}</td>
                                                <td>{file.fileType}</td>
                                                <td>{convertBytes(file.fileSize)}</td>
                                                <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                                                <td>
                                                    <a
                                                        href={"https://etherscan.io/address/" + file.uploader}
                                                        rel="noopener noreferrer"
                                                        target="_blank">
                                                        {file.uploader}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                                                        rel="noopener noreferrer"
                                                        target="_blank">
                                                        {file.fileHash}
                                                    </a>
                                                </td>
                                            </tr>
                                        </thead>
                                    )
                                })}
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Main;