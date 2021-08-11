import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white " href="/">Ema-John</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="/shop">Shop</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" aria-current="page" href="/review">Order Review</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="/inventory">Inventory here</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;