import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -10,
        top: 0,
        border: `2px solid #000`,
        padding: "0 4px",
        backgroundColor: "#fff",
    },
}));

export default function Header() {



    const { items, session } = useContext(CartContext);

    const cartQuantity = items.length;


    return (
        <>
            <header id="main-header">
                <div id="main-title">
                    <Link to="/" className="link_home">
                        <h1>Magnus Delivery</h1>
                    </Link>

                    {session && (
                        <Link to="/auth" className="link_auth">
                            <h3>
                                Magnus Delivery :D, {session.user.user_metadata.first_name}{" "}
                                {session.user.user_metadata.last_name}
                            </h3>
                        </Link>
                    )}

                </div>
                <div className="icons-list">
          {!session && (
            <>
              <Link to="/auth">
                <IconButton
                  aria-label="cart"
                  size="large"
                  className="iconbutton"
                >
                  {/* <Login /> */}
                </IconButton>
              </Link>
              <Link to="/signup">
                <IconButton
                  aria-label="cart"
                  size="large"
                  className="iconbutton"
                >
               {/* <AccountCircle /> */}
                </IconButton>
              </Link>
            </>
          )}

          <Link to="/checkout">
            <IconButton aria-label="cart" size="large" className="iconbutton">
              <StyledBadge badgeContent={cartQuantity}>
                <ShoppingCartIcon size="large" />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
            </header>
        </>
    );
}