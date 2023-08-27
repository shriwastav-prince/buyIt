import React from 'react'

export default function Category() {
    return (
        <>
            {/* Categorys */}
            <div className='nav justify-content-center'>
                <ul className="nav ">
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Electonics
                        </a>

                        <ul className="dropdown-menu">
                            {/* DropDown Menus */}
                            {/* TV Menu */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TV
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">LG TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sony TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Panasonic TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Haier TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Xiaomi Mi TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">OnePlus LED TV</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Philips</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Washing Machine */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Washing Machine
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Whirlpool Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> LG Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> Haier Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> Godrej Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> Intex Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> Panasonic Washing Machine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#"> Voltas Washing Machine</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* AC */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    AC
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Voltas AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">LG AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Whirlpool AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hitachi AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hisense AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Croma AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Daikin AC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Godrej AC</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Camera */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Camera
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Canon Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sony Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Panasonic Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Olympus Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">GoPro Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">FujiFlim Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Avigilon Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ricoh Camera</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Leica Camera</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Headphones */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Headphones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Boat</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">JBL</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Grado</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ultima</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Beats</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Uktra Sone</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bose</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Video Projectors */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Video Projector
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Canon</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Optoma</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Panasonic</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">BenQ</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">JVC</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Epson</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Asus</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sony</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Car */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Car
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mahindra</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">TATA</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Renault</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Toyota</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Kia</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hyundai</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Nissan</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ford</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Bikes */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bikes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Honda</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bajaj</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">TVS</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Yamaha</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hero</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">KTM</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Royal Enfield</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mahindra</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Computer Accessories */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Computer Accessories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Monitor</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Keyboard</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mouse</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Speaker</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Printer</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mother Board</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hard Disk</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">CPU</a></li>
                                </ul>
                            </li>



                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Laptops
                        </a>
                        <ul className="dropdown-menu">
                            {/* Acer */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Acer
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            {/* Mac Books */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mac Books
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Dell Laptops */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dell Laptops
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* HP Laptops */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    HP Laptop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* MSI Laptops */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MSI Laptops
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Asus Laptops */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Asus Laptops
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* Vivo Laptops */}
                            <div class="dropdown-divider"></div>
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vivo Laptops
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Dell</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Beauty Products
                        </a>
                        <ul className="dropdown-menu">
                            {/* Makup */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Makup items
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Eyeliner</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Maskara</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Eyeshadow</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Highlighter</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Blush</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bronzer</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">moisturizer</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Lipstick</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>


                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Skin care
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Face Mask</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Cleanser</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Toner</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ati Aging Night Cream</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Serum</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Exfoliator</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Eye Cream</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Gulab Jal</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            {/* Hair Care */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hair Care
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Shampoo</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Conditioner</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hair Spray</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Gel</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Wax</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Serum</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hair Oil</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Dryer</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            {/* Fragrance */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fragrance
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Fogg</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Engage</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Axe</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Denver</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Smart</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Spinz</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Wild Stone</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Nivea</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            {/* oral care */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Oral care
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Colgate</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Close up</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sensodyne</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Dant Kanti</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Dabur</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bentodent</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sensora</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Arata</a></li>
                                </ul>
                            </li>



                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Men's Fashion
                        </a>
                        <ul className="dropdown-menu">
                            {/* Clothes */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Clothes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Zara</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">KTM</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Peter England</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Supreme</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Denim</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Raymond</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Manyavar</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Levi's</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            {/* Shoes */}
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shoes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Nike</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Puma</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Woodland</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Adidas</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Kitto</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Reebok</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Caliber</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Converse</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Watches
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Titan</a></li>
                                    <li><a className="dropdown-item" href="#">Fastrack</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sonata</a></li>

                                    <li><a className="dropdown-item" href="#">Boat</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ultima</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Casio</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Rolex</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Apple Watch Series</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <div class="dropdown-divider"></div>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Women's Fashion
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Clothing
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Zara</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Prada</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">valentino</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">versace</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Celine</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Givenchy</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Marc Jacobs</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Off-White</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shoes
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Givenchy</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Adidas</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Nike</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">BaTa</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Skehers</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sparx</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Reebok</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Campus</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    HandBag
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Prada</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Gucci</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Louis Vuitton</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Fendi</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hermes</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Chanel</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Esbeda</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Coach</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Watch
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">TimeX</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Fastrack</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sonata</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Casio</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Fossil</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Tittan</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Nibosi</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Acnos</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Jewelry
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mejuri</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Graff</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">TanishQ</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Catbird</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mikimoto</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Dior</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Swarovski</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Chopard</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home and Kitchens
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Utensils
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Staub</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">T-Fal</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Lodge</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Vintage</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">OXO</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hawkins</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Caraway</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bergner</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Furniture
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Maiden Home</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Arhaus</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Lotus</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Furtex</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Coastwood</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Kovacs</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Godrej</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Lumens</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Glass
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Waterford</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Riedel</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Luminarc</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Libbey</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Pyrex</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bolle</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Fysh</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">MoDo</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>


                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home Decor
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ikea</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Urban Outfitters</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Jungalow</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Wayfair</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">H&M</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Good Earth</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Blu Dot</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">zara Home</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    iron
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Usha</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Panasonic</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Yamata</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">yasodha</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hi Steam</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hashima</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Goldstar</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Oliso</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cleaning Supplies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Harpic</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mr.Clean</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Lysol</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Ecover</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Clorox</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Blueland</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Febreze</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Glade</a></li>
                                </ul>
                            </li>


                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="items nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Drinks
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Soft Drinks
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Coca-Cola</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Pepsi</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Sprite</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">String</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Red Bull</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Mazza</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Frooti</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Slice</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li className="nav-item dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hard Drinks
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Red Label</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Smirnoff</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Hennessy</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bacardi</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Jack Daniels</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Aperol</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Blender</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a className="dropdown-item" href="#">Bacardi Rum</a></li>
                                </ul>
                            </li>
                            <div class="dropdown-divider"></div>

                        </ul>
                    </li>
                </ul>
            </div>





        </>
    )
}
