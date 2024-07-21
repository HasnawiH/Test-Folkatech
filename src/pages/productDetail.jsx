import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { formatRupiah } from '../utils';

import Navbar from '../../src/components/molecules/navbar';
import SubNavbar from '../components/molecules/subNavbar';
import IconHeart from '../assets/images/heart.png'
import IconCheck from '../assets/images/check-square.png'

const ProductDetail = () => {
  const navigate = useNavigate()
  const [productDetail, setProductDetail] = useState(null);
  const [qty, setQty] = useState(1);

  const handlePlusQty = () => setQty(qty + 1);
  const hanldeMinusQty = () => {
    if (qty > 0) setQty(qty - 1)
  }

  const handleAddCart = () => {
    alert("Berhasil Menambahkan Ke Keranjang")
  }

  const handleAddWhitelist = () => {
    alert("Berhasil Menambahkan Ke Favorit")
  }

  useEffect(() => {
    const product = localStorage.getItem("product");
    setProductDetail(JSON.parse(product))
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <SubNavbar />
      {productDetail &&
        <div className="p-10">
          {/* Section Breadcrumb, tapi belum sempat kerjain UX nya  */}
          <div>
            <p className=" text-sm" >
              <label className="cursor-pointer" onClick={() => navigate("/product")}>{"Home >> "}</label>
              <label className="text-[#EB3F36]"> {productDetail.name}</label>
            </p>
          </div>

          <div className="px-20">
            <div className="flex mt-10 justify-between mb-20">
              <div className="w-[45%]">
                <div className="product-card p-6">
                  <img className="w-full" src={productDetail.images[0].image_url} alt="" />
                </div>

                <div className="flex gap-4 mt-4 w-full">
                  {productDetail.images.map((product, index) => {
                    return (
                      <div className="product-card p-4 w-[33%]">
                        <img className="w-full h-[180px]" src={product.image_url} alt="" />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="w-[50%]">
                <div className=" px-3">
                  <h2 className="font-bold text-2xl text-[#696969] mb-4 uppercase">{productDetail.name}</h2>
                  <h4 className="font-medium text-xl ">{productDetail.product_type.name}</h4>
                  <div className="flex flex-row items-center gap-2 mb-3">
                    <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <label className="mt-1">(7)</label>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold  text-xl  text-[#EB3F36]">{formatRupiah(productDetail.price, "Rp. ")}</h4>
                    <div className="text-[#6F8EFF] flex items-center  gap-2"> <img src={IconCheck} alt="" /> Tersedia</div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <button onClick={hanldeMinusQty}>-</button>
                    <div className="flex justify-center items-center w-[60px] h-[40px] rounded-md border border-gray-200">{qty}</div>
                    <button onClick={handlePlusQty}>+</button>
                    <div onClick={handleAddCart} className="bg-[#EB3F36] text-white h-[40px] flex justify-center items-center p-4 cursor-pointer">TAMBAH KE KERANJANG</div>
                    <button onClick={handleAddWhitelist}>
                      <img src={IconHeart} className="w-[20px] h-[20px]" alt="" />
                    </button>
                  </div>
                  <p>{productDetail.short_description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex gap-28 mb-2">
                <div className="flex flex-col justify-center items-center w-full">
                  <h2 className="font-bold text-2xl text-[#EB3F36]  uppercase mb-2">DESKRIPSI</h2>
                  <div className="w-[250px] border-2 border-[#EB3F36]" />
                </div>
                <div className="">
                  <h2 className="font-bold text-2xl text-[#BEBEBE] mb-2 uppercase">INFORMASI</h2>
                </div>
              </div>

              <div className="text-justify mt-8" dangerouslySetInnerHTML={{ __html: productDetail.description }} />
            </div>

            <div className="mt-14 flex flex-col justify-center items-center w-full">
              <h2 className="font-bold text-2xl text-[#696969] mb-2 uppercase">REKOMENDASI UNTUK ANDA</h2>
              <div className="w-[130px] border-2 border-[#EB3F36]" />
              <div className="mt-6 flex flex-row gap-4">
                {[1, 2, 3].map(() => { // Tidak ada API untuk REKOMENDASI saya hardcode datanya //*gambar saya ambil dari gambar detail product
                  return (
                    <div className="product-card flex flex-col justify-center w-full hover:border-[#EB3F36] shadow-sm">
                      <div className="product-image-wrapper w-full h-[18rem] flex justify-center pb-10">
                        <img className="w-[200px] object-cover" src={productDetail.images[0].image_url} />
                      </div>
                      <div className="product-info">
                        <div className="font-semibold text-[18px] single-line-ellipsis">ABID CLEVER DRIPPER 102</div>
                        <div className="uppercase">UBRUKOPI</div>
                        <div className="flex flex-row justify-center items-center gap-2 ">
                          <ReactStars
                            count={5}
                            value={5}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <label className="mt-1">(7)</label>
                        </div>
                        <h4 className="product-price text-[16px] text-[#EB3F36] font-bold">{formatRupiah(20000, "Rp. ")}</h4>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail