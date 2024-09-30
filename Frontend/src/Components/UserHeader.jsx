import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import ExitIcon from '@material-ui/icons/ExitToApp'; 
import './header.css'; 
import { Link, useNavigate } from 'react-router-dom';

const UserHeader = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <Box className="header">
            <Box className="title">
                <Typography variant="h6">
                    My Dashboard
                </Typography>
            </Box>
            <Box className="user-section">
                <Link to={"/user"} style={{ textDecoration: "none", color: "white" }}>
                    <Typography variant="body1" className="user-name" style={{ marginRight: '10px' }}>
                        Mark attendance |
                    </Typography>
                </Link>
                <Link to={'/user/view'} style={{ textDecoration: "none", color: "white" }}>
                    <Typography variant="body1" className="user-name" style={{ marginRight: '10px' }}>
                        View attendance |
                    </Typography>
                </Link>
                <Link to={'/user/apply-leave'} style={{ textDecoration: "none", color: "white" }}>
                    <Typography variant="body1" className="user-name" style={{ marginRight: '10px' }}>
                        Apply leave |
                    </Typography>
                </Link>
                <Link to={'/user/my-leave'} style={{ textDecoration: "none", color: "white" }}>
                    <Typography variant="body1" className="user-name" style={{ marginRight: '10px' }}>
                        My leaves |
                    </Typography>
                </Link>
                <Typography variant="body1" className="user-name">
                    Hello ! {user && user.name}
                </Typography>
                <IconButton onClick={logout} color="inherit">
                    <ExitIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default UserHeader