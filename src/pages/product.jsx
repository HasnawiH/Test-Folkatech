import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/product';
import ImageSidebar from "../assets/images/sidebar2.png";
import "../assets/styles/global.css"

import Navbar from '../../src/components/molecules/navbar';
import SubNavbar from '../components/molecules/subNavbar';
import CardProduct from '../components/molecules/cardProduct';
import ListMenu from '../components/organisms/listMenu';
import Pagination from '../components/molecules/pagination';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  const handleFetchProduct = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await getProducts()

      if (response.status === 200) {
        setProductList(response.data.data.list);
        setTotal(response.data.data.total)
      }
    } catch (error) {
      console.log(`error`, error)
    }
  }

  useEffect(() => {
    handleFetchProduct()
  }, [])

  return (
    <div className="w-full">
      <Navbar />
      <SubNavbar />
      <div className="p-10">
        {/* Section Breadcrumb, tapi belum sempat kerjain UX nya  */}
        <div>
          <p className="text-sm">{"Home  >>  Produk  >> "} <label className="text-[#EB3F36]"> Nama Produk</label></p>
        </div>

        <div className="flex mt-6 gap-6">
          <div className="w-[25%]">
            {/* <h2 className="uppercase font-medium mb-3">URUTKAN BERDASARKAN</h2>
            <h3 className="font-semibold">Harga</h3>
            <input className="w-full " type='range' style={{accentColor: "red" }} /> */}
            <img className="mt-1" src={ImageSidebar} alt="" />  
            <ListMenu />
          </div>

          <div className="w-[75%]">
            <div className="flex justify-between items-center px-3">
              <div className="flex items-center gap-2">
                Menampilkan
                <select className="p-2 bg-[#F2F2F2] rounded-sm">
                  <option>10</option>
                </select>
                dari {total}
              </div>
              <div className="flex items-center gap-2">
                Urutkan
                <select className="p-2 bg-[#F2F2F2] rounded-sm">
                  <option>Nama Produk</option>
                </select>
              </div>
            </div>
            <div className="product-list-container mt-4">
              <div className="product-grid">
                {productList && productList.map((product, index) => <CardProduct key={index} product={product} />)}
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product