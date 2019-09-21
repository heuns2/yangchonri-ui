import React from "react";
import { Breadcrumb, BreadcrumbItem, Container, Row, Col  } from "shards-react";
import Customer from 'components/CustomerCenter/Customer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import '../Customer.css'
import './ServiceFeq.css';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    tableWrapper: {
        overflowX: 'auto'
    }
  }));

  const columns = [
    { id: 'id', label: '번호', minWidth: 90, align: 'center' },
    { id: 'category', label: '분류', minWidth: 90, align: 'center' },
    { id: 'title', label: '제목', minWidth: 220, align: 'center' }
  ];
  
  function createData(id, calories, title) {
    return { id, calories, title };
  }
  
  const rows = [
    createData(1, '주문/결제', '(회원) 쿠폰 적용은 어떻게 하나요?'),
    createData(2, '취소/교환/반품', '교환 또는 반품신청 시에 사진을 첨부해야 하나요?'),
    createData(3, '회원문의', '아이디와 비밀번호가 생각나지 않아요. 어떻게 찾을 수 있나요?'),
    createData(4, '서비스 이용', '내가 주문한 내역은 어떻게 확인하나요?'),
    createData(5, '배송문의', '주문 후 주문정보(배송지, 메모 등)변경하려고 하는데 어떻게 해야하나요?'),
  ];

export default class ServiceFeq extends React.Component {
    render(){
        return (
            <section>
                <Breadcrumb className="text-right">
                    <BreadcrumbItem>
                        <a href="/">Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>자주하는 질문</BreadcrumbItem>
                </Breadcrumb>
                <Container className="mt20 mb20">
                    <Row>
                        <Col sm="12" lg="3"><Customer/></Col>
                        <Col sm="12" lg="9" className={useStyles.root}>
                            <div className={useStyles.tableWrapper}>
                                <Typography variant="h5" id="tableTitle" className="title tableTitle">자주하는 질문</Typography>
                                <Typography variant="h7" id="tableTitle" className="title titleDesc">고객님들께서 가장 많이 질문하시는 내용을 모았습니다.</Typography>
                                <Table stickyHeader className={useStyles.table}  aria-labelledby="tableTitle">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map(column => (
                                                <TableCell key={column.id}  align={column.align} style={{ minWidth: column.minWidth }}>
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell align="center">{row.id}</TableCell>
                                                <TableCell align="center">{row.calories}</TableCell>
                                                <TableCell align="left">{row.title}</TableCell>
                                            </TableRow>
                                         ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}