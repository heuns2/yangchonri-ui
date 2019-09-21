import React from "react";
import { Breadcrumb, BreadcrumbItem } from "shards-react";
import { Avatar , Button, CssBaseline, TextField,  Box, Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './SignUp.css';

const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: theme.palette.common.white,
    },
    contents: {
        backgroundColor: '#fafafa',
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    }
  }));
  
  export default function SignUp() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
    });

    const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    };
  
    return (
        <section className={classes.contents}>
            <Breadcrumb className="text-right">
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>회원가입</BreadcrumbItem>
            </Breadcrumb>
            <Container component="main" maxWidth="sm" className={classes.box}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">회원가입</Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            {/** 이름 */}
                            <Grid item xs={12}>
                                <TextField required fullWidth id="username" label="이름" name="username"  />
                            </Grid>
                            {/* 아이디 */}
                            <Grid item xs={12} sm={9} justify="space-between">
                                <TextField  autoComplete="아이디" name="userId" required fullWidth id="userId" label="아이디" helperText="영문자, 숫자, _ 만 입력 가능. 최소 3자이상 입력하세요." autoFocus/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Button variant="contained" fullWidth color="secondary" className={classes.button}>중복확인</Button>
                            </Grid>
                            {/** 패스워드 */}
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="비밀번호" type="password" id="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="passwordConfirm" label="비밀번호 확인" type="password" id="passwordConfirm" />
                            </Grid>
                            {/* 이메일 */}
                            <Grid item xs={12} sm={8}>
                                <TextField required fullWidth id="email" label="Email Address" name="email"  />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" fullWidth color="secondary" className={classes.button}>이메일 중복확인</Button>
                            </Grid>
                            {/* 휴대폰 번호 */}
                            <Grid item xs={12} sm={8}>
                                <TextField required fullWidth name="phoneNumber" label="휴대폰" id="phoneNumber" helperText="'-'없이 숫자만 입력하세요." />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" fullWidth color="secondary" disabled className={classes.button}>인증번호 받기</Button>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField required fullWidth name="authCode" label="인증번호" id="authCode"  />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" fullWidth color="secondary" disabled className={classes.button}>인증번호 확인</Button>
                            </Grid>
                            {/* 배송 주소 */}
                            <Grid item xs={12} sm={8}>
                                <TextField required fullWidth name="address" disabled label="주소" id="address"  />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" fullWidth color="secondary" className={classes.button}>
                                    <SearchIcon className={clsx(classes.leftIcon, classes.iconSmall)} />  주소 검색
                                </Button>
                            </Grid>
                        </Grid>
                
                    </form>
                </div>
                
        </Container>

        <Container component="main" maxWidth="sm" className="agree-head">
            <Typography component="h5" variant="h6">이용약관 동의</Typography>
            <Typography className="subtitle" variant="subtitle2">선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</Typography>
        </Container>
        <Container component="main" maxWidth="sm" className="agree-box">
            <Grid container >
                
                <Grid item xs={12} className={classes.box}>
                    <FormGroup>
                        <FormControlLabel control={ <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />} label="전체 동의" />
                    </FormGroup>
                    <FormGroup col>
                        <FormControlLabel control={ <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />} label="이용약관(필수)" />
                        <FormControlLabel control={ <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} value="checkedC" />} label="개인정보 처리방침(필수)" />
                        <FormControlLabel control={ <Checkbox checked={state.checkedD} onChange={handleChange('checkedD')} value="checkedD" />} label="개인정보 처리방침(선택)" />
                    </FormGroup>
                </Grid>
            </Grid>
        </Container>
        <Container component="main" maxWidth="sm" className="mb30">
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="#" variant="body2"> Already have an account? Sign in </Link>
                </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">  회원가입 </Button>
        </Container>
      </section>
    );
  }