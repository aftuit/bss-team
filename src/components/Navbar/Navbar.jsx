import React from "react";
import { NavLink } from "react-router-dom"
import { Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.scss";
function Navbar() {

    const [renderValue, setRenderValue] = React.useState(<h1>renderValue</h1>)
    const [scrolled, setScrolled] = React.useState(false);

    window.onscroll = function () {
        window.scrollY > 100
            ? setScrolled(1)
            : setScrolled(0)
    }

    // console.log(window.scrollY);

    return (
        <div className={`${scrolled ? 'scrolled' : ""} navbar-content`}>

            <Container >
                <div className="navbar d-flex align-items-center justify-content-between w-100">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/img/logo.png" alt="" />
                        <p>O'ZSHAHAR <br/> QURILISH <br/> INVEST</p>
                    </Link>
                    <ul className="nav">
                        <li className="nav-item"><NavLink to="/" className="nav-link f-regular">Жилые</NavLink></li>
                        <li className="nav-item"><NavLink to="/" className="nav-link f-regular">О нас</NavLink></li>
                        <li className="nav-item"><NavLink to="/" className="nav-link f-regular">Акции</NavLink></li>
                        <li className="nav-item"><NavLink to="/" className="nav-link f-regular">Новости</NavLink></li>
                        <li className="nav-item"><NavLink to="/" className="nav-link f-regular">Контакты</NavLink></li>
                        <li className="nav-item img"><NavLink to="/" className="nav-link"><img src="/assets/img/360-degrees.png" alt="" /></NavLink></li>
                    </ul>

                    <div>

                        <Button
                            variant={"outlined"}
                            className="mx-3"
                        >
                            Войти
                        </Button>

                        <select
                            className="mx-3"
                            value={renderValue}
                            onChange={(evt) => setRenderValue(evt.target.value)}
                        >
                            <option value={'uz'}>uz</option>
                            <option value={'ru'}>ru</option>
                            <option value={'en'}>en</option>
                        </select>
                        <IconButton className="search ms-3">
                            <SearchIcon />
                        </IconButton>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Navbar;