import axios from "axios";
import { Component } from 'react';
import './css/Download.css';
import * as Icons from "react-icons/md";
import DownloadProducts from "./Download-products";

class Download extends Component {

  render() {

    return (
      <>
        <div className="download-container">
          <h3 className="title">last ...</h3>
          <div className="buttons">
            <button className="classification">Classification</button>
            <button className="sorting">Sorting</button>
          </div>
          <div className="produits" >

            <DownloadProducts />

          </div>
        </div>

      </>
    )
  }

}
export default Download;
