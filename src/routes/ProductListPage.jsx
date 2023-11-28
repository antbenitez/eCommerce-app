import Header from "../components/Header/Header.jsx";
import Categories from "../components/DropdownMenu/DropdownMenu.jsx"
import RelatedProducts from "../components/RelatedProd/RelatedProd.jsx"; 

function ProductListPage() {
    return (
        <div>
            <Header user={{name: "Pedrito"}} checkout={{itemsCount: 2}}/>
            <RelatedProducts></RelatedProducts>
        </div>
    );
  }
  
  export default ProductListPage;