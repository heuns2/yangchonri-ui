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
import './Notice.css';

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
    { id: 'title', label: '제목', minWidth: 220, align: 'center' },
    { id: 'createdUser', label: '작성자', minWidth: 150, align: 'center' },
    { id: 'created', label: '작성일',  minWidth: 150, align: 'center' },
    { id: 'counts', label: '조회수',  minWidth: 100,  align: 'center' }
  ];
  

  
  
  function createData(id, calories, title, createdUser, created, counts) {
    return { id, calories, title, createdUser, created, counts };
  }
  
  const rows = [
    createData(1, '공지', '2019 연휴 배송 안내', '양촌리 민물장어', '2019-09-11', 6453),
    createData(2, '공지', '사스템 점검 안내', '양촌리 민물장어', '2019-09-08', 100),
    createData(3, '공지', '양촌리 민물장어 배송비 관련 안내', '양촌리 민물장어', '2019-08-03', 180),
    createData(4, '공지', '이용약관 및 개인정보처리방침 개정', '양촌리 민물장어', '2019-09-01', 140),
    createData(5, '공지', '[이벤트 당첨 안내]양촌리 민물장어 오픈 기념 이벤트', '양촌리 민물장어', '2019-08-01', 140),
  ];

export default class Notice extends React.Component {
    render(){
        return (
            <section>
                <Container className="mt20 mb20">
                    <Row>
                        <Col sm="12" lg="3"><Customer/></Col>
                        <Col sm="12" lg="9" className={useStyles.root}>
                            <div className={useStyles.tableWrapper}>
                                <Typography variant="h5" id="tableTitle" className="title tableTitle">공지사항</Typography>
                                <Typography variant="h7" id="tableTitle" className="title titleDesc">새로운 소식들과 유용한 정보들을 확인하실 수 있습니다.</Typography>
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
                                                <TableCell align="center">{row.createdUser}</TableCell>
                                                <TableCell align="center">{row.created}</TableCell>
                                                <TableCell align="center">{row.counts}</TableCell>
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