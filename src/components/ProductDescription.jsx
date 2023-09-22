import './ProductDescription.css'

export default function ProductDescription(props) {

    return (
        <div id='container'>
            <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'></link>
            <h1 id='Title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <div id='PriceSection'>
                <p id='price'>${props.price}</p>
                <p id='discountedPrice'>${props.price}</p>
                <p id='discount'>-{props.discount}%</p>
            </div>
            <p id='Availability'>Available stock</p>
            <p id='Description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
        </div>
    )
  }
  