import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import AboutPage from '../AboutPage/AboutPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import Department from '../Department/Department';
import DepertmentSinglePage from '../DepertmentSinglePage/DepertmentSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import SeviceSinglePage from '../SeviceSinglePage';
import ShopPage from '../ShopPage';
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage/CartPage';
import WishlistPage from '../WishlistPage/WishlistPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived/OrderRecived';
import BlogPage from '../BlogPage/BlogPage';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth';
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull';
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide';
import ContactPage from '../ContactPage/ContactPage';
import AppoinmentPage from '../AppoinmentPage/AppoinmentPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<HomePage2 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='appoinment' element={<AppoinmentPage />} />
          <Route path='department' element={<Department />} />
          <Route path='department-single/:slug' element={<DepertmentSinglePage />} />
          <Route path='services' element={<ServicePage />} />
          <Route path='service-single/:slug' element={<SeviceSinglePage />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='team-single/:slug' element={<TeamSinglePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product-single/:slug' element={<ProductSinglePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order_received' element={<OrderRecived />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
