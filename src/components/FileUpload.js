import React from 'react';
import FileUpload from 'react-fileupload';

export default class FileUploadField extends React.Component {
    constructor() {
        super();
    }

    render() {
        /*set properties*/
        const options = {
            baseUrl: 'http://127.0.0.1',
            param: {
                fid: 0
            },
            chooseFile: this.props.props.onUploadExpenseFile
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={ options }>
              <button ref="chooseBtn">choose</button>
              { /* <button ref="uploadBtn">upload</button> */ }
            </FileUpload>
        )
    }
}