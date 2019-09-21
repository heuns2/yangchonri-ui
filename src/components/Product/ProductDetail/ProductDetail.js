import React from "react";
import { Breadcrumb, BreadcrumbItem  } from "shards-react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Paper, Grid, Typography, Box } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { FormControl, Select,MenuItem, InputLabel, Button } from '@material-ui/core';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './ProductDetail.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        height: 450
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    table: {
        minWidth: 650,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

// Tab
const contentStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.white,
      width: 500,
    },
  
}));
  

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );  
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
  
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };  
}

  
export default function ProductDetail() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',  
    });

    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
    }
    ///////////////////////////////////////////////////////

    const product = contentStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(2);
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return (
        <section>
            <Breadcrumb className="text-right">
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>제품</BreadcrumbItem>
                <BreadcrumbItem active>상세보기</BreadcrumbItem>
            </Breadcrumb>
            <Container component="main" maxWidth="lg">
                <div clåassName={classes.root}>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={4}>
                                    <Paper>
                                        <img className={classes.img} alt="complex" src="/images/products/products01.png" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Paper className={classes.paper}>
                                        <Typography component="h5" variant="h6" align="left">[찌개] 장어탕</Typography>
                                        <Typography variant="subtitle2" align="left">힘 좋은 100% 국내산 민물장어와 직접 만든 비법육수!</Typography>

                                        <div className={classes.demo}>
                                            <Table className={classes.table} size="small">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">판매가</TableCell>
                                                        <TableCell align="">9,000원</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">판매 단위</TableCell>
                                                        <TableCell align="">1팩</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">담기</TableCell>
                                                        <TableCell align="">
                                                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                                                        <Select className="w-60" value={values.age} onChange={handleChange} inputProps={{  name: 'age', id: 'age-simple', }} >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>

                                        <div className="mt20 product_total">
                                            <Typography component="h5" variant="h6" align="left">총 상품 금액 : &nbsp;</Typography>
                                            <Typography variant="h5" align="left">0 원</Typography>
                                        </div>
                                        <div className="shoping_cart text-left">
                                            <Button variant="contained" color="secondary" className={classes.button}> 바로구매 </Button>
                                            <Button variant="contained" color="primary" className={classes.button}>
                                                <AddShoppingCartIcon/>
                                                장바구니 담기 
                                            </Button>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </form>
                </div>
            </Container>
            <Container component="main" maxWidth="lg" className="mb30">
                <paper className={product.root}>
                    <AppBar position="static" color="default">
                        <Tabs  value={value}  onChange={handleChange}   indicatorColor="primary"  textColor="primary" variant="fullWidth"  aria-label="full width tabs example" >
                            <Tab label="상품 정보" {...a11yProps(0)} />
                            <Tab label="상세 정보" {...a11yProps(1)} />
                            <Tab label="배송 정보" {...a11yProps(2)} />
                            <Tab label="상품 후기" {...a11yProps(3)} />
                            <Tab label="상품 문의" {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}  index={value} onChangeIndex={handleChangeIndex}  >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            Item 4
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            Item 4
                        </TabPanel>
                    </SwipeableViews>
                    <AppBar position="static" color="default">
                        <Tabs  value={value}  onChange={handleChange}   indicatorColor="primary"  textColor="primary" variant="fullWidth"  aria-label="full width tabs example" >
                            <Tab label="상품 정보" {...a11yProps(0)} />
                            <Tab label="상세 정보" {...a11yProps(1)} />
                            <Tab label="배송 정보" {...a11yProps(2)} />
                            <Tab label="상품 후기" {...a11yProps(3)} />
                            <Tab label="상품 문의" {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                </paper>
            </Container>
        </section>
    );
}