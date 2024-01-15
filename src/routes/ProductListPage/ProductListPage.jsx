import Header from "../../components/Header/Header.jsx";
import Categories from "../../components/DropdownMenu/DropdownMenu.jsx"
import RelatedProducts from "../../components/RelatedProd/RelatedProd.jsx";
import Product from "../../components/Product/Product.jsx";
import productsData from "../../assets/products.json";
import "./ProductListPage.css"
import Footer from "../../components/Footer/Footer.jsx";


function ProductListPage() {
    return (
        <div>
            <Header user={{name: "Pedrito"}} checkout={{itemsCount: 2}}/>
            <div id='content'>
            {productsData.map(({ id, image, name, price, discount, score }) => (
                <Product
                    id={id}
                    name={name}
                    price={price}
                    discount={discount}
                    score={score}
                    image={image}
                ></Product>
            ))}
            </div>
            <Footer></Footer>
        </div>
    );
  }
  
  export default ProductListPage;