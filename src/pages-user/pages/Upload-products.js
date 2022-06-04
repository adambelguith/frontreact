import { Component } from "react";


class UploadProducts extends Component {
  render() {
    return (
      <>
        <div className="produit">
          <pre className="title">Banane</pre>
          <div className="function">
            <div className="fresh">
              <pre>fresh</pre>
              <div className="btn">
                <button>upload</button>
              </div>
            </div>
            <div className="rotting">
              <pre>rotting</pre>
              <button>upload</button>
            </div>
          </div>
        </div>

        <div className="produit">
          <div className="title">Pomme</div>
          <div className="function">
            <div className="fresh">
              <pre>fresh</pre>
              <button>upload</button>
            </div>
            <div className="rotting">
              <pre>rotting</pre>
              <button>upload</button>
            </div>
          </div>
        </div>

        dd
      </>
    )
  }
}

export default UploadProducts;