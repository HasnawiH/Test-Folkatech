import React from 'react';
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { formatRupiah } from '../../utils';

const CardProduct = ({ product }) => {
    const navigate = useNavigate()

    const handleRedirectPageDetail = (id) => {
        localStorage.setItem("product", JSON.stringify(product)); // ketika pertama kali get product harusnya setup redux atau contex biar tidak passing data lagi ke local storage
        navigate(`/product/detail/${id}`)
    }
    return (
        <div onClick={() => handleRedirectPageDetail(product.id)} className="product-card flex flex-col items-center w-full hover:border-[#EB3F36] shadow-sm">
            <div className=" w-full h-[18rem] flex justify-center pb-10">
                <img className="w-[200px] object-cover" src={product.images[0].image_url} alt={product.name} />
            </div>
            <div className="text-center">
                <div className="font-semibold text-[18px] single-line-ellipsis">{product.name}</div>
                <div className="uppercase">{product.product_type.name}</div>
                <div className="flex flex-row justify-center items-center gap-2 ">
                    <ReactStars
                        count={5}
                        value={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <label className="mt-1">(7)</label>
                </div>

                <h4 className="product-price text-[18px] text-[#EB3F36] font-bold">{formatRupiah(product.price, "Rp. ")}</h4>
            </div>
        </div>
    )
}

export default CardProduct;