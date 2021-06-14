import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
// NavBtn,
// NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/homePage' activeStyle>
			Make Transaction
		</NavLink>
		<NavLink to='/check_balance' activeStyle>
			Check Balance
		</NavLink>
		<NavLink to='/verifyAccount' activeStyle>
			Verify Account
		</NavLink>
		<NavLink to='/transaction_status' activeStyle>
			Last Transaction Status
		</NavLink>
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
