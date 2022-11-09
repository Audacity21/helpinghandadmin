import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PreviewIcon from '@mui/icons-material/Preview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: 1.0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Add Product" icon={<AddCircleOutlineIcon />} component={Link} to="/" />
        <BottomNavigationAction label="View Products" icon={<PreviewIcon />} />
        <BottomNavigationAction label="View Orders" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Box>
  );
}