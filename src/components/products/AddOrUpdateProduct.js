import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCategories } from "../../redux/actions/categoryActions"
import { getProducts, saveProduct } from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail";
import alertify from "alertifyjs"

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    //statede productu setProduct fonksiyonu ile set edebilirim.
    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        //Önceki productun alanını kontrol ediyoruz. Eğer alan categoryId alanı var ise int olacak aksi takdirde value bas.
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));

        validate(name, value);
    }

    function validate(name, value) {
        if (name === "productName" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "Ürün ismi olmalıdır!"
            }));
        } else if (name === "unitPrice" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                unitPrice: "Birim fiyat olmalıdır!"
            }));
        } else if (name === "quantityPerUnit" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                quantityPerUnit: "Birim başına miktar olmalıdır!"
            }));
        } else if (name === "unitsInStock" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                unitsInStock: "Stok bilgisi olmalıdır!"
            }));
        } else {
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "",
                unitPrice: "",
                quantityPerUnit: "",
                unitsInStock: "",
            }));
        }
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
            alertify.success("Kayıt tamamlanmıştır.");
        });
    }
    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    )
}

export function getProductsById(products, productId) {
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId
    const product = productId && state.productListReducer.length > 0
        ? getProductsById(state.productListReducer, productId)
        : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    };
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)