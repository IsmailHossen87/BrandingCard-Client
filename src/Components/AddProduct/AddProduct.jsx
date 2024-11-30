import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAdd = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value.toLowerCase();
        const Description = form.Description.value;
        const photo = form.photo.value;
        // const photo = form.photo.value;
        const users={name,type,price,rating,brand,Description,photo}
        fetch('http://localhost:5000/brand',{
          method:'POST',
          headers:{
            'content-type': "application/json"
          },
          body:JSON.stringify(users)
        })
        .then(res => {
         return res.json()})
        .then(data =>{
            Swal.fire({
              title: 'Sucess!',
              text: 'Sucessfully added item',
              icon: 'sucess',
              confirmButtonText: 'Cool'
            })
          form.reset();    
        })
        .catch(error =>{
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add coffee. Please try again.',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          form.reset();   
        })
    }
    return (
        <div className="md:w-3/4 mx-auto">
      <div className="bg-slate-200 p-5">
        <h2 className="text-5xl font-extrabold text-center mb-3">Add Your Product</h2>
        <p className="text-lg text-center mb-3">
         If you want add any product so fill the information
        </p>
        <form onSubmit={handleAdd}>
          <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Product Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
        
          </div>
          <div className="md:flex gap-3 mb-8 ">
          
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="gap-3 mb-8 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Products" className="btn btn-block bg-gray-300" />
        </form>
      </div>
    </div>
    );
};

export default AddProduct;