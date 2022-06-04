import axios from "axios";
import { Component } from 'react';
import './css/Upload.css';
import * as Icons from "react-icons/md";
import UploadProducts from "./Upload-products";

class Upload extends Component {

  render() {

    return (
      <>
        <div className="upload-container">
          <h3 className="title">Upload Images</h3>
          <div className="main" >

            <div className="head-item"><pre>sorting</pre></div>
            <div className="items">

              <UploadProducts />

            </div>

            <div className="head-item"><pre>classification</pre></div>

          </div>
        </div>
      </>
    )
  }
}

export default Upload;