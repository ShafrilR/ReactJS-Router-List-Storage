import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand text-white" href="#">ReactRouter</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/" className="nav-link text-white">Beranda</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/galeri" className="nav-link text-white">Galeri</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/haribesar" className="nav-link text-white">Hari Besar</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/keranjang" className="nav-link text-white">Keranjang</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Gallery" className="nav-link text-white">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Cart" className="nav-link text-white">Cart</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/pegawai" className="nav-link text-white">Daftar Pegawai</Link>
                        </li>
                         
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;