import React, { useState, useEffect } from "react";
import ButtonAppBar from "../ButtonAppBar";
import BottomNavigator from "../BottomNavigator";
import OrderService from "../../services/OrderService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ViewOrders.css";
import { Button } from "@mui/material";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    OrderService.getOrders()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "false") {
    window.location.href = "/";
  } else {
    return (
      <>
        <ButtonAppBar />
        <h1>View Orders</h1>
        <div className="vo-container">
          <TableContainer sx={{ width: "80vw" }} component={Paper}>
            <Table sx={{ width: "80vw" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Product ID
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Price
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Date of Order
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", fontWeight: "bolder" }}
                    align="center"
                  >
                    Delivered
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.title}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell align="center">{product.email}</TableCell>
                    <TableCell align="center">{product.pid}</TableCell>
                    <TableCell align="center">{product.title}</TableCell>
                    <TableCell align="center">Rs. {product.price}</TableCell>
                    <TableCell align="center">
                      {formatDate(product.timestamp)}
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained">YES</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <BottomNavigator />
      </>
    );
  }
};

export default ViewProducts;
